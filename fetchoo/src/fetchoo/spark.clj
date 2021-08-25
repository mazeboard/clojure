(ns myclj.core
  (:import [org.apache.spark.sql SparkSession]
           [org.apache.spark SparkConf]
           [com.typesafe.config Config ConfigValue ConfigFactory]
    ;;[org.apache.spark.api.java JavaRDD JavaSparkContext]
    ;;[org.elasticsearch.spark.sql *]
    ;;[org.elasticsearch.spark.rdd.api.java JavaEsSpark]
           ))

(defn getSparkConf []
  (let [config (.getConfig (ConfigFactory/load) "sparkConf")
        sparkConf (SparkConf.)]
    (doseq [[key value] (.entrySet config)]
      (.set sparkConf
            ^String key
            (.toString (.unwrapped value))))
    sparkConf))

(defn start []
  (let [sparkConf (getSparkConf)
        spark (.getOrCreate (.config (SparkSession/builder) sparkConf))
        ]
    ))