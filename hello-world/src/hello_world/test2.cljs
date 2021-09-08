(ns hello-world.core
  (:require [react]
            [react-dom]))

(def e react/createElement)

(def hello-world (e "h1" nil "Hello world!"))

(def dom-container (.. js/document (querySelector "#app")))

(react-dom/render hello-world dom-container)

(js/console.log "hello world!")
