(ns clj-app.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[clj-app started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[clj-app has shut down successfully]=-"))
   :middleware identity})
