(ns clotalk.server
  (:use ring.adapter.jetty))


  ;; Now, let's look at the information that is going in and out of our application
(require 'clojure.pprint)

  ;; First we'll delegate the actual functionality of our app to a handler

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "<h1>Hello World</h1>"})

  ;; And then we'll wrap that in a wrapper that prints the incoming and outgoing data:

(defn app [request]
  (println "-------------------------------")
  (println "Incoming Request:")
  (clojure.pprint/pprint request)
  (let [response (handler request)]
    (println "Outgoing Response Map:")
    (clojure.pprint/pprint response)
    (println "-------------------------------")
    response))
