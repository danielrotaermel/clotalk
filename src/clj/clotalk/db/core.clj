(ns clotalk.db.core
    (:refer-clojure :exclude [sort find])
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [mount.core :refer [defstate]]
              [monger.query :as q]
              [clotalk.config :refer [env]]))

(defstate db*
  :start (-> env :database-url mg/connect-via-uri)
  :stop (-> db* :conn mg/disconnect))

(defstate db
  :start (:db db*))

(defn create-user [user]
  (mc/insert db "users" user))

(defn update-user [id first-name last-name email]
  (mc/update db "users" {:_id id}
             {$set {:first_name first-name
                    :last_name last-name
                    :email email}}))

(defn get-user [id]
  (mc/find-one-as-map db "users" {:_id id}))

(defn create-message [message]
  (mc/insert db "messages" message))

(defn get-messages []
  (mc/find-maps db "messages"))

(defn query [& {:keys [coll query fields sort limit skip]
                :or   {query {} fields [] limit 0 skip 0}}]
  (q/with-collection db coll
    (q/find query) ;query map
    (q/fields fields) ;vector of :keys
    (q/sort sort) ;array map of {:keys (1 for ascending, -1 for descending ordering):}
    (q/limit limit)
    (q/skip skip)))

;(query :coll "messages" :fields [:user-name] :sort {:ts -1})

;(create-user {:test "test"})
;(get-user {:test "test"})

;(create-message
; {:first_name "Bob"
;  :last_name "Bobberton"
;  :email "bob@foo.bar"
;  :pass "secret")
