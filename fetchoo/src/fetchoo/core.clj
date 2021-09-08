(ns fetchoo.core
  (:require [fetchoo.server]
            [com.typesafe.config ConfigFactory]))

(defn -main
  [& args]
  (startServer (ConfigFactory/load)))

