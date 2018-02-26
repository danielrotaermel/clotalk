(ns clotalk.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [clotalk.db.core :as db]))


; http://localhost:3000/swagger-ui/index.html

(s/defschema User {:id s/Str
                   :first-name s/Str
                   :last-name  s/Str
                   :email  s/Str})


(defapi service-routes
        {:swagger {:ui "/swagger-ui"
                   :spec "/swagger.json"
                   :data {:info {:version "1.0.0"
                                 :title "Sample API"
                                 :description "Sample Services"}
                          :tags [{:name "api", :description "some apis"}]
                          :consumes ["application/json"]
                          :produces ["application/json"]}}}

        (context "/api" []
                 :tags ["thingie"]

                 (GET "/plus" []
                      :return       Long
                      :query-params [x :- Long, {y :- Long 1}]
                      :summary      "x+y with query-parameters. y defaults to 1."
                      (ok (+ x y)))

                 (POST "/minus" []
                       :return      Long
                       :body-params [x :- Long, y :- Long]
                       :summary     "x-y with body-parameters."
                       (ok (- x y)))

                 (GET "/times/:x/:y" []
                      :return      Long
                      :path-params [x :- Long, y :- Long]
                      :summary     "x*y with path-parameters"
                      (ok (* x y)))

                 (POST "/divide" []
                       :return      Double
                       :form-params [x :- Long, y :- Long]
                       :summary     "x/y with form-parameters"
                       (ok (/ x y)))

                 (GET "/power" []
                      :return      Long
                      :header-params [x :- Long, y :- Long]
                      :summary     "x^y with header-parameters"
                      (ok (long (Math/pow x y))))

                 (context "/user" []
                          :tags ["userapi"]

                          (GET "/:id" []
                               :return       User
                               :path-params [id :- String]
                               :summary      "x+y with query-parameters. y defaults to 1."
                               ;return user from db
                               (-> (dissoc (db/get-user id) :_id)
                                   (db/clojurize-keys)
                                   (ok)
                                   (header "Content-Type" "application/json; charset=utf-8")))

                          (POST "/" []
                               :return       User
                               :body-params  [id :- s/Str,
                                              first-name :- s/Str,
                                              last-name :-  s/Str,
                                              email :- s/Str]
                               :summary      "x+y with query-parameters. y defaults to 1."
                               ;persist user
                               (db/create-user
                                       {:id id
                                        :first_name first-name
                                        :last_name last-name
                                        :email email})
                               ;return user from db
                               (-> (dissoc (db/get-user id) :_id)
                                   (db/clojurize-keys)
                                   (ok)
                                   (header "Content-Type" "application/json; charset=utf-8"))))))
