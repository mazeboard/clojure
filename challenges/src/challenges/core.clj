(ns challenges.core)

;; solution to challenge from https://gist.github.com/volodymyrpavliuk/c78679895da8aad1cd4bffc8660b63ce

;; https://4clojure.oxal.org/#/problem/195
(defn paren [n]
  (if (= n 0)
    #{""}
    (if (= n 1)
      #{"()"}
      (loop [i (paren (- n 1)) r #{}]
        (if (empty? i)
          r
          (let [x (first i)]
            (recur (rest i)
                   (conj r
                         (str x "()")
                         (str "(" x ")")
                         (str "()" x)
                         ))))))))
;; https://4clojure.oxal.org/#/problem/44
(defn rotate [n s]
  (if (empty? s)
    s
    (if (> n 0)
      (rotate (- n 1) (concat (rest s) [(first s)]))
      (if (< n 0)
        (rotate (+ n 1) (conj (drop-last s) (last s)))
        s))))

;; https://4clojure.oxal.org/#/problem/53
(defn longuest-consecutive-subseq [seq]
  (loop [x (first seq)
         s [x]
         r (rest seq)
         ss []]
    (if (empty? r)
      (let [s (if (> (count s) (count ss)) s ss)]
        (if (> (count s) 1)
          s
          []))
      (if (< x (first r))
        (recur (first r)
               (concat s [(first r)])
               (rest r)
               (if (> (count s) (count ss)) s ss))
        (recur (first r)
               [(first r)]
               (rest r)
               (if (> (count s) (count ss)) s ss))))))

;; challenge from Freshcode (see usage below)
(defmacro factor-group [data group-data bindings & body]
  (let [k (gensym)]
    (if (empty? bindings)
      `(list (let [~group-data ~data] ~@body))
      `(flatten
        (map (fn [[~k data#]]
               (factor-group data#
                             ~group-data
                             ~(rest (rest bindings))
                             (let [~(first bindings) ~k] ~@body)))
             (group-by ~(second bindings) ~data))))))

#_ (
factor-group usage

(def all-patients
 '({:firstname "Adam"
   :lastname  "Smith"
   :diagnosis "COVID-19"
   :treated   true}
  {:firstname "Joseph"
   :lastname  "Goodman"
   :diagnosis "COVID-19"
   :treated   true}
  {:firstname "Werner"
   :lastname  "Ziegler"
   :diagnosis "COVID-19"
   :treated   false}
  {:firstname "Boris"
   :lastname  "Henry"
   :diagnosis "Healthy"
   :treated   false}
  {:firstname "Johnny"
   :lastname  "Grayhand"
   :diagnosis "COVID-76"
   :treated   false}))

(factor-group
 all-patients ; pass a list of all patients
 patients-group ; define a symbol name, which will be resolved to a filtered list of patients per each group

 ; define group keys and corresponding symbols.
 ; symbols "treated?" and "disease-name" will be used to access values for :treated and :diagnosis values respectively
 ; notice that those values remain the same within a particular group
 [treated?     :treated
  disease-name :diagnosis]

 ; the macro body to evaluate
 (println " processing patients with " disease-name
          ", that " (if treated? "WERE" "WERE NOT") " treated")

 (println " the count of patients is " (count patients-group))
 (println " patients' lastnames are: " (clojure.string/join ", " (map :lastname patients-group)))

 ; let's return a count of patients for each group
 (count patients-group))


>>> processing patients with COVID-19, that WERE treated
>>> the count of patients is 2
>>> patients' lastnames are: Smith, Goodman

>>> processing patients with COVID-19, that WERE NOT treated
>>> the count of patients is 1
>>> patients' lastnames are: Ziegler

>>> processing patients with Healthy, that WERE NOT treated
>>> the count of patients is 1
>>> patients' lastnames are: Henry

>>> processing patients with COVID-76, that WERE NOT treated
>>> the count of patients is 1
>>> patients' lastnames are: Grayhand
)
