(ns clotalk.routes.home
  (:require [clotalk.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [buddy.hashers :as hashers]
            [ring.util.response :refer [redirect]]
            [cheshire.core :as json]
            [buddy.auth.backends.token :refer [jws-backend]]
            [buddy.sign.jws :as jws]))


(def users {"admin" {:username "admin"
                     :hashed-password (hashers/encrypt "adminpass")
                     :roles #{:user :admin}}
            "user"  {:username "user"
                     :hashed-password (hashers/encrypt "userpass")
                     :roles #{:user}}})


(defn lookup-user [username password]
  (if-let [user (get users username)]  ; Use a database IRL
    (if (hashers/check password (get user :hashed-password))
      (dissoc user :hashed-password)))) ; Strip out user password

; (lookup-user "user" "userpass")

; FIXME from config
(def secret "XWYNoYaOijpwN1S0Z4dx2a29B2NU927")
;; Create an instance
(def backend (jws-backend {:secret secret}))


(defn do-login [username password next session]
  (println username password)
  (println (lookup-user username password))
  (if-let [user (lookup-user username password)]    ; lookup-user defined elsewhere
    (assoc (redirect (or next "/#/chat"))                 ; Redirect to "next" or /
      :session (assoc session :identity user))
    (response/unauthorized "wrong password or username")))
    ;(redirect "/#/login")))                           ; Redirect to /login on failure


(defn do-logout [{session :session}]
  (println "users session: " session)
  (-> (redirect "/#/login")                         ; Redirect to login
      (assoc :session (dissoc session :identity)))) ; Remove :identity from session



(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))

  (POST "/login" [username password next session :as req] ;do-login))
    (println "SESSION: " session)
    (do-login username password next session))
    ;(response/ok (str req))))
    ;(println "username:" username "pass:" pass)))
    ;(println username)

    ;(response/ok (str id))))

    ;                  (auth/do-login %)))
  (POST "/logout" [] do-logout))
