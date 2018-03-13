(ns clotalk.routes.home
  (:require [clotalk.layout :as layout]
            [clotalk.db.core :as db]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [buddy.hashers :as hashers]
            [ring.util.response :refer [redirect]]
            [cheshire.core :as json]
            [buddy.auth.backends.token :refer [jws-backend]]
            [buddy.sign.jwt :as jwt]))


;FIXME from config
(def secret "XWYNoYaOijpwN1S0Z4dx2a29B2NU927")
;; Create an instance
(def backend (jws-backend {:secret secret}))

(defn is-admin? [{user :identity :as req}]
  (contains? (apply hash-set (:roles user)) "admin"))

(defn valid-token? [user token]
  (= user (jwt/unsign user secret)))

(defn is-logged-in? [{user :identity token :token :as req}]
  (valid-token? user token))

(defn lookup-user
  ([username]
   (if-let [user (db/get-user username)]  ; get user from db
     (dissoc user :hashed-password))) ; Strip user password)))
  ([username password]
   (if-let [user (db/get-user username)]  ; get user from db
     (if (hashers/check password (get user :hashed-password))
       (dissoc user :hashed-password))))) ; Strip user password)))


(defn do-login [username password next session]
  (println username password)
  (println (lookup-user username password))
  (if-let [user (lookup-user username password)]
    (response/ok {:identity user
                  :token (str (jwt/sign user secret))})
    (response/unauthorized {:message "wrong password or username"})))


(defn do-logout [{session :session}]
  (println "users session: " session)
  (-> session
      (assoc :session (dissoc session :identity)))) ;Remove :identity from session

(defn do-signup [username password session]
  (println username)
  (println (lookup-user username))
  (if (lookup-user username)
    (response/unprocessable-entity "username already exists")    ;conflicting username
    (let [user (dissoc (db/create-user username (hashers/encrypt password)) :hashed-password)]
      (response/ok {:identity user
                    :token (str (jwt/sign user secret))}))))


(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] ;(restrict home-page {:handler is-logged-in?})
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))

  (POST "/login" [username password next session :as req]
    ;(println "username: " username)
    (do-login username password next session))

  (POST "/test" req
    ;(println (str "REQ: " req))
    (response/ok (str "REQ: " req)))
    ;(do-login username password next session))

  (POST "/logout" [] do-logout)

  (POST "/signup" [username password session :as req]
    ;(println "SESSION: " session)
    (do-signup username password session)))
