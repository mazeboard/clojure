(ns app.client
  (:require
    ;["react-number-format" :as NumberFormat]
     [com.fulcrologic.fulcro.application :as app]
     [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
     [com.fulcrologic.fulcro.dom :as dom :refer [div h3 ul label]]
     [com.fulcrologic.fulcro.algorithms.merge :as merge]
     [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]
    [com.fulcrologic.fulcro.algorithms.react-interop :as interop]))

;(def ui-number-format (interop/react-factory NumberFormat))

(defsc Car [this {:car/keys [id model] :as props}]
  {:query [:car/id :car/model]
   :ident :car/id}
  (div :.field {} model))

(def ui-car (comp/factory Car {:keyfn :car/id}))

(defsc Person [this {:person/keys [id name age cars] :as props}]
  {:query [:person/id :person/name :person/age {:person/cars (comp/get-query Car)}]
   :ident :person/id
   :initial-state {:person/id :param/id
                  :person/name :param/name
                  :person/age 20
                  :person/cars [{:id 40 :model "Ford"}
                                {:id 41 :model "Escort"}
                                {:id 42 :model "Volvo"}]}
   :initLocalState (fn [this props]{:onClick (fn [evt] (js/console.log ">Click"))})
   }
  (let [onClick (comp/get-state this :onClick)]
    (div :.ui.segment {}
         (div :.field {}
              (div :.field {}
                   (label {:onClick onClick} "Name :")
                   name)
              #_(div :.field {}
                   (label "-- Amount: ")
                   (ui-number-format {:value "123456.33"
                                      :thousandSeparator true
                                      :prefix "$"})
                   )
              (div :.field {}
                   (label "Age: ")
                   age)
              (h3 {} "Cars")
              (ul {}
                  ;(map-indexed (fn [i c] (ui-car {:key (str "car-" i)} c)) cars)
                  (map ui-car cars)
                  )))))

(def ui-person (comp/factory Person {:keyfn :person/id}))

(defsc PersonList [this {:person-list/keys [people] :as props}]
  {:query [{:person-list/people (comp/get-query Person)}]
   :ident (fn [_ _] [:component/id ::person-list])
   :initial-state {:person-list/people [{:id 1 :name "Bob"}
                                        {:id 2 :name "Sally"}]}}
  (div
    (h3 "-People")
    ;(map-indexed (fn [i p] (ui-person {:key (str "person-" i)} p)) people)
    (map ui-person people)
    ))

(def ui-person-list (comp/factory PersonList))

(defsc Sample [this {:root/keys [people]}]
  {:query [{:root/people (comp/get-query PersonList)}]
   :initial-state {:root/people {}}}
  (dom/div
    (when people
      (ui-person-list people))))

(def APP (app/fulcro-app))

(defn f [x] (* x x))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (reset! (::app/state-atom APP) {})
  (app/schedule-render! APP)
  (+ 2 3)

  (merge/merge-component! APP Car {:car/id 3 :car/model "Opel"}
                          :append [:person/id 1 :person/cars]
                          )
  (merge/merge-component! APP Person {:person/id 1 :person/name "Joe"
                                      :person/cars [{:car/id 2, :car/model "BMW"}]}
                         :replace [:root/person]
                          )
  (merge/merge-component! APP Person {:person/id 2 :person/name "Tom"
                                      :person/cars [{:car/id 1, :car/model "Ford"}]}
                          :replace [:root/person] )
  (merge/merge-component! APP Person {:person/id 3 :person/name "Fuco" :person/cars [{:car/id 1, :car/model "Ford"}]})

  (keys APP)
  (app/current-state APP)
  (-> APP (::app/state-atom) deref)
  (deref (::app/state-atom APP))

  (comp/get-ident Car {:car/id 2})
  )