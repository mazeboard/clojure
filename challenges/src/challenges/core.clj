(ns challenges.core
  (:require [clojure.string :as str]))

;; solution to challenge from https://gist.github.com/volodymyrpavliuk/c78679895da8aad1cd4bffc8660b63ce

;; medium Parentheses... Again https://4clojure.oxal.org/#/problem/195
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
;; medium Rotate Sequence https://4clojure.oxal.org/#/problem/44
(defn rotate [n s]
  (if (empty? s)
    s
    (if (> n 0)
      (rotate (- n 1) (concat (rest s) [(first s)]))
      (if (< n 0)
        (rotate (+ n 1) (conj (drop-last s) (last s)))
        s))))

;; hard Longest Increasing Sub-Seq https://4clojure.oxal.org/#/problem/53
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

;; hard Analyze a Tic-Tac-Toe Board https://4clojure.oxal.org/#/problem/73
(defn tic-tac-toe [m]
  (let [u (for [j (range 3)]
            (let [r (nth m j)]
              (if (= 0 j)
                (for [i (range 3)]
                  (let [s (nth r i)]
                    (case i
                      0 (if (or (and (= s (nth r 1)) (= s (nth r 2)))
                                (and (= s (nth (nth m 1) 0)) (= s (nth (nth m 2) 0)))
                                (and (= s (nth (nth m 1) 1)) (= s (nth (nth m 2) 2))))
                          s
                          :e)
                      1 (if (and (= s (nth (nth m 1) 1)) (= s (nth (nth m 2) 1)))
                          s
                          :e)
                      2 (if (or (and (= s (nth (nth m 1) 1)) (= s (nth (nth m 2) 0)))
                                (and (= s (nth (nth m 1) 2)) (= s (nth (nth m 2) 2))))
                          s
                          :e))))
                (let [s (nth r 0)]
                  (if (and (= s (nth r 1)) (= s (nth r 2)))
                    s
                    :e)))))
        v (remove #(= % :e) (flatten u))]
    (if (> (count v) 1)
      :invalid
      (first v))))

;; hard Word Chains https://4clojure.oxal.org/#/problem/82
;; solution using permutation (lazily computing permutations, fast in average but in the worst case it generates all permutations)
(defn word-chains-perm [words]
  (letfn [(add-word-perm [w p] 
            (if (empty? p)
              (cons (cons w nil) nil)
              (lazy-seq (cons (cons w p) (map #(cons (first p) %) (add-word-perm w (rest p)))))))
          (get-all-permutations [words]
            (if (empty? words)
              (cons nil nil)
              (let [w (first words)]
                (mapcat (fn [p] (add-word-perm w p))
                        (get-all-permutations (rest words))))))
          (chain? [word1 word2]
            (let [c1 (count word1) c2 (count word2)]
              (or (and (= c1 c2) ; substitution
                       (= 1 (count (remove #(= 0 %) (map #(compare %1 %2) word1 word2)))))
                  (and (= c1 (+ 1 c2)) ; deletion
                       (let [r (map (fn [x i] (str/index-of word1 x i))
                                    word2 (range (count word2)))]
                         (and (not (some #(= % nil) r))
                              (apply < r))))
                  (and (= (+ 1 c1) c2) ; insertion
                       (let [r (map (fn [x i] (str/index-of word2 x i))
                                    word1 (range (count word1)))]
                         (and (not (some #(= % nil) r))
                              (apply < r)))))))]
    (not (nil? (first (filter (fn [p]
                                (if (empty? (rest p))
                                  p
                                  (loop [w1 (first p) r (rest p)]
                                    (if (empty? r)
                                      p
                                      (if (chain? w1 (first r))
                                        (recur (first r) (rest r)))))))
                              (get-all-permutations words)))))))

;; hard Number Maze https://4clojure.oxal.org/#/problem/106
(defn number-maze [start end]
  (letfn [(nm [s e i]
            (if (= e (+ 1 s))
              (+ i 3); *2 +2 /2
              (if (< s e)
                (if (<= (* 2 s) e)
                  (nm (* 2 s) e (+ 1 i))
                  (nm (+ 2 s) e (+ 1 i)))
                (if (> s e)
                  (if (even? s)
                    (nm (int (/ s 2)) e (+ 1 i)) ; /2
                    (nm (+ s 1) e (+ 3 i))) ; *2 +2 /2
                  i))))] 
    (nm start end 1)))

;; medium Reverse Interleave https://4clojure.oxal.org/#/problem/43
(defn reverse-interleave [lst n]
  (if (empty? lst)
    (for [i (range n)] (list))
    (map (fn [x i]
           (conj x (nth lst i)))
         (reverse-interleave (nthrest lst n) n)
         (range n))))

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
