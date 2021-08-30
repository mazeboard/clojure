(ns fetchoo.core
  (:require [cheshire.core :refer :all]))
  (:import [org.apache.spark.sql SparkSession]
           [org.apache.spark SparkConf]
           [com.typesafe.config Config ConfigValue ConfigFactory]
           [org.eclipse.jetty.server Server]
           [io.javalin Javalin]
           [io.javalin.websocket WsConnectContext]
           [org.eclipse.jetty.util.thread QueuedThreadPool]))

(defn createTempViews [spark elasticsearchConfig]
  )

(defn runSql [spark sessionId query]
  "inprogress"
  )

(defn fetchWS [app spark]
  (let [contexts (java.util.ArrayList.)] ;WsConnectContext
    (.ws app "/sql"
         (fn [ws] 
           (.onConnect ws
                       (fn [ctx] 
                         (.add contexts ctx)
                         (println "ws connection open")))
           
           (.onClose ws
                     (fn [ctx]
                       (println (.reason ctx))
                       (println "ws connection closed")))
            
           (.onError ws
                     (fn [errctx] 
                       (println (.error errctx))))
            
           (.onMessage ws
                       (fn [ctx]
                         (println "received message: " (.message ctx))
                         (try 
                           (let [msgJson (json/decode (.message ctx) true)]
                             (println "json message: " (.toString msgJson))
                             (let [query (:query msgJson)
                                   sessionId (:sessionId msgJson)]
                               (println query)
                               (println "sessionId" sessionId)
                               (.schedule (Executors.newSingleThreadScheduledExecutor)
                                          (fn []
                                            (try 
                                              (.send ctx (runSql spark sessionId query))
                                              (catch Exception e 
                                                (let [msg (.getMessage e)]
                                                  (.send ctx (json/encode {
                                                                           :error msg
                                                                           :stacktrace (.getStackTrace e)
                                                                           }))))))
                                          0 (.MILLISECONDS TimeUnit))
                               
                               (.send ctx
                                      (json/encode {
                                                    :error "request must include sessionId and query fields"
                                                    }))))
                           (catch Exception e
                             (.send ctx (str (json/encode {
                                                    :error (.getMessage e)
                                                    })))))))
           ))))

(defn startServer []
  (let [config (ConfigFactory/load)
        javalinConf (.getConfig config "javalin")
        sparkConf (let [sparkConf (SparkConf.)]
                    (doseq [[key value] (.entrySet (.getConfig config "sparkConf"))]
                      (.set sparkConf
                            ^String key
                            (.toString (.unwrapped value))))
                    sparkConf)
        app (.start (Javalin/create (fn [c]
                                      (.addStaticFiles c "/public");
                                      (.server c (fn [] (Server. (QueuedThreadPool.
                                                                  (.getInt javalinConf "maxThreadPool")
                                                                  (.getInt javalinConf "minThreadPool")
                                                                  (.getInt javalinConf "maxThreadPool")))))))
                    (.getInt javalinConf "port"))
        spark (.getOrCreate (.config (SparkSession/builder) sparkConf))]
    (.events app (fn [event]
                   (.serverStarted event (fn [] (println "start server")))
                   (.serverStopped event (fn [] (println "stopped server")))))
    (.exception app
                (.class Exception)
                (fn [e ctx] 
                  (.printStackTrace e)
                  (.result (.status ctx 404) (.getMessage e))))
    (createTempViews spark (.getConfig config "elasticsearch"))
    (fetchWS app spark)))

          
        

