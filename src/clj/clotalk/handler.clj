(ns clotalk.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [clotalk.layout :refer [error-page]]
            [clotalk.routes.home :refer [home-routes backend]]
            [clotalk.routes.services :refer [service-routes]]
            [compojure.route :as route]
            [clotalk.env :refer [defaults]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [mount.core :as mount]
            [clotalk.middleware :as middleware]
            [clotalk.routes.websockets :refer [websocket-routes]]))


(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'home-routes
          ;(wrap-routes middleware/wrap-csrf)
          (wrap-routes middleware/wrap-formats)
          (wrap-authentication backend))
      ;(-> #'auth-routes
      ;    (wrap-routes middleware/wrap-csrf)
      ;    (wrap-routes middleware/wrap-formats))
      #'service-routes
      #'websocket-routes
      (route/not-found
        (:body
          (error-page {:status 404
                       :title "page not found"}))))))
