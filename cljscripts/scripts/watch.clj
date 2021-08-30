(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'cljscripts.core
   :output-to "out/cljscripts.js"
   :output-dir "out"})
