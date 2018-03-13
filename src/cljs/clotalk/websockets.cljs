(ns clotalk.websockets
 (:require [cognitect.transit :as t]))

(defonce ws-chan (atom nil))
(def json-reader (t/reader :json))
(def json-writer (t/writer :json))

(defn receive-transit-msg! [update-fn]
 (fn [msg]
   (update-fn
     (->> msg .-data (t/read json-reader)))))

(defn wrap-auth [msg auth]
  {:message msg
   :auth auth})


(defn send-transit-msg! [msg auth]
 (if @ws-chan
   (.send @ws-chan (t/write json-writer (wrap-auth msg auth)))
   (throw (js/Error. "Websocket is not available!"))))

(defn make-websocket! [url receive-handler]
 (println "attempting to connect websocket")
 (if-let [chan (js/WebSocket. url)]
   (do
     (set! (.-onmessage chan) (receive-transit-msg! receive-handler))
     (reset! ws-chan chan)
     (println "Websocket connection established with: " url))
   (throw (js/Error. "Websocket connection failed!"))))
