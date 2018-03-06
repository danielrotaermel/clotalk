(ns clotalk.core
  (:require [reagent.core :as r]
            [reagent.format :as f]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [clotalk.ajax :refer [load-interceptors!]]
            [cljs.reader :refer [read-string]]
            [ajax.core :refer [GET POST]]
            [clojure.string :as s]
            [clotalk.websockets :as ws])
            ;[reagent.format :as format])

  (:import goog.History))

;; -------------------------
;; Atoms
(defonce session (r/atom {:page nil
                          :user-name ""
                          :message-input ""
                          :local-chat-history []}))

(def signin-focus? (r/atom true))

(defn reset-key! [key val]
  (swap! session assoc key val))

(defn update-messages! [{:keys [message]}]
  (swap! session update-in [:local-chat-history] conj message))

(defn send-message! [user-name message-text]
  (def message {:user-name user-name :message message-text :ts (.getTime (js/Date.))})
  (ws/send-transit-msg! {:message message}))

;; -------------------------
;; Requests
(defn error-handler [{:keys [status status-text]}]
 (.log js/console (str "something bad happened: " status " " status-text)))

(defn fetch-chat-history! [skip limit]
  (GET "/api/messages"
       {:params {:skip (count (:local-chat-history @session)) :limit limit}
        :handler #(reset-key! :local-chat-history (sort-by :ts (concat % (:local-chat-history @session))))
        :error-handler error-handler}))

(defn fetch-docs! []
  (GET "/docs"
       {:handler #(reset-key! :docs %)}))

;; -------------------------
;; UI Helpers

(def initial-focus-wrapper
  (with-meta identity
    {:component-did-mount #(.focus (r/dom-node %))}))

(defn scroll-to-el [el]
  (with-meta identity
    {:component-did-mount #(.scrollIntoView (.querySelector el))}));)}))

;; -------------------------
;; UI Components

(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page (:page @session)) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  [:nav.navbar.navbar-dark.bg-primary.navbar-expand-md
   {:role "navigation"}
   [:button.navbar-toggler.hidden-sm-up
    {:type "button"
     :data-toggle "collapse"
     :data-target "#collapsing-navbar"}
    [:span.navbar-toggler-icon]]
   [:a.navbar-brand {:href "#/"} "clotalk"]
   [:div#collapsing-navbar.collapse.navbar-collapse
    [:ul.nav.navbar-nav.mr-auto
     [nav-link "#/" "Home" :home]
     [nav-link "#/chat" "Chat" :chat]
     [nav-link "#/about" "About" :about]]]])

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(defn home-page []
  [:div.container
   (when-let [docs (:docs @session)]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

;; -------------------------
;; chat-page

(defn user-name-input [in-focus]
  [:div.input-group
   ;[:div.input-group-prepend
    ;[:span.input-group-text "@"]
   [initial-focus-wrapper
    [:input.form-control
     {:type "text"
      :value (:user-name @session)
      :placeholder "What's your name?"
      :aria-label "user-name"
      :aria-describedby "basic-addon1"
      :on-change #(swap! session assoc :user-name (-> % .-target .-value))
      :on-key-press #(if (and (= 13 (.-charCode %)) (not (s/blank? (:user-name @session))))
                         (do
                           (swap! in-focus not)))}]]])

(defn message-input []
  [:div.input-group
   [initial-focus-wrapper
    [:input.form-control
     {:id "message-input"
      :type "text"
      :value (:message-input @session)
      :placeholder "Message"
      :aria-label "Message"
      :aria-describedby "basic-addon2"
      :on-change #(swap! session assoc :message-input (-> % .-target .-value))
      :on-key-press #(if (and (= 13 (.-charCode %)) (not (s/blank? (:message-input @session))))
                         (do
                           (send-message! (:user-name @session) (:message-input @session))
                           (reset-key! :message-input "")))}]]
   [:div.input-group-append
    [:button.btn.btn-outline-secondary
     {:id "send-message-button"
      :type "button"
      :on-click #(if (not (s/blank? (:message-input @session)))
                     (do
                       (send-message! (:user-name @session) (:message-input @session))
                       (reset-key! :message-input "")))}
     [:i.fas.fa-paper-plane]]]])

(defn fetch-chat-history-button []
  [:div.container.sticky-top
   {:id "fetch-chat-history-button"
    :on-click #(fetch-chat-history! 0 20)}
   [:i.fas.fa-angle-up]])

(defn message-entry [message]
   ^{:key (get message :ts)} ;unique key to make react faster
   [:div.row
    [:div.col.px-0
      [:div.card.message-entry
       {:class (if (= (:user-name @session) (get message :user-name))
                "float-left"
                "float-right")}
       [:div.card-body.d-inline.p-2.bg-primary.text-white.rounded
        {:class (if (= (:user-name @session) (get message :user-name))
                 "bg-primary"
                 "bg-secondary")}
        [:div.card-text
         (get message :message)]
        [:div.card-subtitle
         [:div.container
          [:div.row
           [:div.col.pl-0 {:id "subline"}
            [:small "@" (:user-name message)]]
           [:div.col.pr-0.float-right.text-right {:id "subline"}
            [:small " " (f/date-format (js/Date. (:ts message)) "hh:mm")]]]]]]]]])

(defn chat-history [local-chat-history]
  [:div.container
   {:id "chat-history"}
   (doall (map #(message-entry %) local-chat-history))]) ;wrapped in doall due to deref not supported in lazy seq

(defn chat-page []
  [:div.container
   [:div.row
    [:div.col-sm-12.card.px-0
     [:div.card-body
      [:div.scroll-box.mb-3
       (fetch-chat-history-button)
       (chat-history (sort-by :ts (:local-chat-history @session)))]
      (if @signin-focus?
        (r/as-element (user-name-input signin-focus?))
        (do
          (r/as-element [message-input])))]]]])
          ;(.focus (.getElementById js/document "message-input"))))]]]])


;; -------------------------
;; page switching

(def pages
  {:home #'home-page
   :chat #'chat-page
   :about #'about-page})

(defn page []
  [(pages (:page @session))])


;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
                    (swap! session assoc :page :home))

(secretary/defroute "/chat" []
                    (swap! session assoc :page :chat))

(secretary/defroute "/about" []
                    (swap! session assoc :page :about))


;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn start-websocket []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!))

(defn init! []
  (start-websocket)
  (load-interceptors!)
  (fetch-chat-history! 0 5)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
