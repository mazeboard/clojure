(ns fetchoo.core
  (:gen-class))

(load-file "src/fetchoo/server.clj")

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!")

  (startServer))

