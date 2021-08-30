(defproject fetchoo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.apache.spark/spark-core_2.11 "2.4.3"]
                 [org.apache.spark/spark-sql_2.11 "2.4.3"]
                 [org.elasticsearch/elasticsearch "7.2.0"]
                 [org.elasticsearch/elasticsearch-hadoop "7.2.0"]
                 [com.typesafe/config "1.3.4"]
                 [io.javalin/javalin "3.1.0"]
                 [org.eclipse.jetty/jetty-server "11.0.6"]
                 [org.eclipse.jetty/jetty-util "11.0.6"]
                 [cheshire "5.10.0"]]
  :main ^:skip-aot fetchoo.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}}) 