(ns clotalk.routes.home
  (:require [clotalk.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [clotalk.db.core :as db]))

(defn home-page []
  (layout/render "front.html"))

(defroutes home-routes
           (GET "/" []
                (home-page))
           (GET "/docs" []
                (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                    (response/header "Content-Type" "text/plain; charset=utf-8")))
           (GET "/user/:id" [id]
                (-> (dissoc (db/get-user id) :_id)
                    (db/clojurize-keys)
                    (response/ok)
                    (response/header "Content-Type" "application/json; charset=utf-8")))
           (GET "/hello/:id" [id]
                (str "<h1>Yessirrrr " id "!</h1>")))
