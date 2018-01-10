(ns clotalk.server
  (:use ring.adapter.jetty))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "<h1>Hello World</h1>"})


;; start REPL
;; in repl => (.start sever) / (.stop server) and <shift + ENTER>
;; stop process on port:
;; lsof -P | grep ':3000' | awk '{print $2}' | xargs kill -9)
(defonce server (run-jetty #'handler {:port 3000 :join? false}))
