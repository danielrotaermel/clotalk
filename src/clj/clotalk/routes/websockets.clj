(ns clotalk.routes.websockets
 (:require [compojure.core :refer [GET defroutes]]
           [org.httpkit.server :refer [send! with-channel on-close on-receive]]
           [cognitect.transit :as t]
           [clojure.tools.logging :as log]
           [clojure.java.io :as io]
           [clotalk.db.core :as db]))

(defonce channels (atom #{}))

(defonce chat-history (atom []))

(defn transit-write [obj out]
  (t/write
    (t/writer out
      :json)))

(defn transit-read [in]
  (t/read
    (t/reader in
      :json)))

(defn string->stream
  ([s] (string->stream s "UTF-8"))
  ([s encoding]
   (-> s
     (.getBytes encoding)
     (java.io.ByteArrayInputStream.))))

(defn t-read [string]
  "convinience function to read transit encoded stings"
  ((comp transit-read string->stream) string))

(defn connect! [channel]
  (log/info "channel open")
  (swap! channels conj channel))

(defn disconnect! [channel status]
  (log/info "channel closed:" status)
  (swap! channels #(remove #{channel} %)))

(defn notify-clients [msg]
  (doseq [channel @channels]
    (send! channel msg)))

(defn ws-handler [req]
  (with-channel req channel
    (connect! channel)
    (on-close channel (partial disconnect! channel))
    (on-receive channel (fn [msg]
                          (notify-clients msg)
                          (db/create-message ((t-read msg) :message))))))
                          ;(swap! chat-history conj (t-read msg))))))

(defroutes websocket-routes
 (GET "/ws" request (ws-handler request)))
