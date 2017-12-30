(ns clotalk.server
  (:use ring.adapter.jetty))

(defn handler [request]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body "Hello World"})

;; start REPL
;; in repl => (.start sever) / (.stop server) and <shift + ENTER>
(defonce server (run-jetty #'handler {:port 3000 :join? false}))
