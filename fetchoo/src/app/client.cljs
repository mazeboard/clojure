(ns app.client
  (:require
     [com.fulcrologic.fulcro.application :as app]
     [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
     [com.fulcrologic.fulcro.dom :as dom]))

(defsc Sample [this props]
  {}
  (dom/div (str props)))

defsc

(def APP (app/fulcro-app))

(defn f [x] (* x x))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (reset! (::app/state-atom APP) {:a 1})
  (app/schedule-render! APP)
  )