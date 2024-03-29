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

(defn objectId->str [e]
  (if-let [objectId (:_id e)]
    (-> e (dissoc :_id) (assoc :id (str objectId)))
    e))

(def objectIds->str (partial map objectId->str))


(defn query [& {:keys [coll query fields sort limit skip]
                :or   {query {} fields [] limit 0 skip 0}}]
  (-> (q/with-collection db coll
                         (q/find query) ;query map
                         (q/fields fields) ;vector of :keys
                         (q/sort sort) ;array map of {:keys (1 for ascending, -1 for descending ordering):}
                         (q/limit limit)
                         (q/skip skip))
      (objectIds->str)))

(defn create-user [username hashed-password]
  (-> (mc/insert-and-return db "users"
                 {:username username
                  :hashed-password hashed-password
                  :roles #{:user}})
      (objectId->str)))

(defn update-user [id username hashed-password roles]
  (-> (mc/insert-and-return db "users" {:_id id}
             {$set {:username username
                    :hashed-password hashed-password
                    :roles roles}})
      (objectIds->str)))

(defn get-user [username]
  (-> (mc/find-one-as-map db "users" {:username username})
      (objectId->str)))

(defn create-message [message]
  (-> (mc/insert db "messages" message)
      (objectId->str)))

(defn get-messages []
  (-> (mc/find-maps db "messages")
      (objectIds->str)))



;(query :coll "messages" :fields [:username] :sort {:ts -1})

;(create-user {:test "test"})
;(get-user {:test "test"})

;(create-message
; {:first_name "Bob"
;  :last_name "Bobberton"
;  :email "bob@foo.bar"
;  :pass "secret")
