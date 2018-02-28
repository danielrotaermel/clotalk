(ns clotalk.chat
  (:require [reagent.core :as r]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [clotalk.ajax :refer [load-interceptors!]]
            [cljs.reader :refer [read-string]]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

  ;; Setup Code

(enable-console-print!)

  ;; define your app data so that it doesn't get over-written on reload

(defonce app-state (r/atom {:chat-input ""
                            :messages []
                            :username "Anonymous"})) (defn on-js-reload [])
    ;; optionally touch your app-state to force rerendering depending on
    ;; your application
    ;; (swap! app-state update-in [:__figwheel_counter] inc)


  ;; Network Calls

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn refresh-messages []
  (GET "http://localhost:3000/messages" {:handler (fn [response]
                                                    (swap! app-state assoc :messages (read-string response)))
                                         :error-handler error-handler}))

;; UI Components

(defn username-input []
  [:div
   [:div "Username:"]
   [:input {:placeholder "Neo"
            :type "text"
            :value (:username @app-state)
            :on-change (fn [ev]
                         (swap! app-state assoc :username (-> ev .-target .-value)))}]])

(defn chat-messages []
  [:div "Chat Messages"]
  [:ul
   (for [{:keys [text sender] :as message} (:messages @app-state)]
     [:li (str sender ": " text)])])
