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

(defn is-logged-in [{user :identity token :token :as req}]
  (valid-token? user token))

(defn lookup-user
  ([user-name]
   (if-let [user (db/get-user user-name)]  ; get user from db
     (dissoc user :hashed-password))) ; Strip user password)))
  ([user-name password]
   (if-let [user (db/get-user user-name)]  ; get user from db
     (if (hashers/check password (get user :hashed-password))
       (dissoc user :hashed-password))))) ; Strip user password)))


(defn do-login [user-name password next session]
  (println user-name password)
  (println (lookup-user user-name password))
  (if-let [user (lookup-user user-name password)]
    (response/ok {:auth {:identity user}
                  :token (str (jwt/sign user secret))})
    (response/unauthorized "wrong password or user-name")))


(defn do-logout [{session :session}]
  (println "users session: " session)
  (-> session
      (assoc :session (dissoc session :identity)))) ;Remove :identity from session

(defn do-signup [user-name password session]
  (println user-name)
  (println (lookup-user user-name))
  (if (lookup-user user-name)
    (response/unprocessable-entity "user-name already exists")    ;conflicting user-name
    (let [user (dissoc (db/create-user user-name (hashers/encrypt password)) :hashed-password)]
      (->  {}    ; Redirect to "next" or /
           (assoc :session session)
           (assoc-in [:session :identity] user)
           (assoc-in [:session :token] (str (jwt/sign user secret)))))))


(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] ;(restrict home-page {:handler is-logged-in})
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))

  (POST "/login" [user-name password next session :as req]
    ;(println "user-name: " user-name)
    (do-login user-name password next session))

  (POST "/test" req
    ;(println (str "REQ: " req))
    (response/ok (str "REQ: " req)))
    ;(do-login user-name password next session))

  (POST "/logout" [] do-logout)

  (POST "/signup" [user-name password session :as req]
    ;(println "SESSION: " session)
    (do-signup user-name password session)))
