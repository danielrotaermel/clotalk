(ns clotalk.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [clotalk.db.core :as db]
            [cognitect.transit :as t]
            monger.json)
  (:import  [org.bson.types ObjectId]))

;; adding swagger-support for ObjectId
(require '[ring.swagger.json-schema :as json-schema])
(defmethod json-schema/convert-class ObjectId [_] {:type "string"})

;(query :coll "messages" :fields [:username] :sort {:ts -1})
;coll query fields sort limit skip

(s/defschema Message
  {:id s/Str
   :username s/Str
   :message s/Str
   :ts Long})

(defapi service-routes
        {:swagger {:ui "/swagger-ui"
                   :spec "/swagger.json"
                   :data {:info {:version "1.0.0"
                                 :title "Sample API"
                                 :description "Sample Services"}}}}

        (context "/api" []
                 :tags ["messages" "chat"]

                 (GET "/messages" []
                      :return       [Message] ; -> breaks swagger-ui
                      :query-params [{skip :- Long 0}, {limit :- Long 20}]
                      :summary      "pagination request skips amount of messages and limits messages to given number. defaults to returning first 20 documents"
                      (-> (db/query :coll "messages" :sort {:ts -1} :skip skip :limit limit)
                          (ok)
                          (header "Content-Type" "application/transit+json; charset=utf-8")))))

; examples
;                 (POST "/minus" []
;                       :return      Long
;                       :body-params [x :- Long, y :- Long]
;                       :summary     "x-y with body-parameters."
;                       (ok (- x y)))
;
;                 (GET "/times/:x/:y" []
;                      :return      Long
;                      :path-params [x :- Long, y :- Long]
;                      :summary     "x*y with path-parameters"
;                      (ok (* x y)))
;
;                 (POST "/divide" []
;                       :return      Double
;                       :form-params [x :- Long, y :- Long]
;                       :summary     "x/y with form-parameters"
;                       (ok (/ x y)))
;
;                 (GET "/power" []
;                      :return      Long
;                      :header-params [x :- Long, y :- Long]
;                      :summary     "x^y with header-parameters"
;                      (ok (long (Math/pow x y))))))
