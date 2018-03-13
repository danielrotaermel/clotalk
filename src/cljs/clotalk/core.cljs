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

;; Cookies
;response (assoc-in [:cookies "username" :value] "Alice"))

;; -------------------------
;; Atoms
(defonce session (r/atom {:page nil
                          :auth {}
                          :message-input ""
                          :local-chat-history []}))

(defonce message-input-state (r/atom (str " ")))


(defn reset-key! [key val]
  (swap! session assoc key val))

(defn get-username! []
  (get-in @session [:auth :identity :username] ""))

(defn update-messages! [{:keys [message]}]
  (swap! session update-in [:local-chat-history] conj message))

(defn send-message! [username message-text]
  (let [message {:username username :message message-text :ts (.getTime (js/Date.))}]
    (ws/send-transit-msg! message (:auth @session))))


(defn set-message-input-enabled! [b]
  (if b
    (reset! message-input-state "")
    (reset! message-input-state " ")))

(defn set-auth! [identity token]
  (reset-key! :auth {:identity identity :token token})
  (if (or (empty? identity) (nil? token))
    (set-message-input-enabled! false)
    (set-message-input-enabled! true)))
  ;(println "after set-auth!" (:auth @session)))

(defn redirect! [url]
  (set! (.-location js/document) url))

;; -------------------------
;; Requests
(defn error-handler [{:keys [status status-text]}]
 (.log js/console (str "something bad happened: " status " " status-text)))

(defn login-error-handler [{:keys [status status-text message]}]
  (if (= status 403)
    (println "message: " message) ;; TODO create some type of user feedback
    (error-handler {:status status :status-text status-text})))

(defn signup-error-handler [{:keys [status status-text message]}]
  (if (= status 403)
    (println "message: " message) ;; TODO create some type of user feedback
    (error-handler {:status status :status-text status-text})))

(defn fetch-chat-history! [skip limit]
  (GET "/api/messages"
       {:params {:skip (count (:local-chat-history @session)) :limit limit}
        :handler #(reset-key! :local-chat-history (sort-by :ts (concat % (:local-chat-history @session))))
        :error-handler error-handler}))

(defn fetch-docs! []
  (GET "/docs"
       {:handler #(reset-key! :docs %)}))

(defn do-login! [username password]
  (POST "/login"
    {:params {:username username :password password}
     :handler (fn [resp]
                (println resp)
                (set-auth! (:identity resp) (:token resp))
                (secretary/dispatch! "/chat"))
     :error-handler login-error-handler}))

(defn do-signup! [username password]
  (POST "/signup"
    {:params {:username username :password password}
     :handler (fn [resp]
                (println resp)
                (set-auth! (:identity resp) (:token resp))
                (secretary/dispatch! "/chat"))
     :error-handler signup-error-handler}))

(defn do-logout! []
  (reset-key! :identity {}))

;; -------------------------
;; UI Helpers

(def initial-focus-wrapper
  (with-meta identity
    {:component-did-mount #(.focus (r/dom-node %))}))

#_(defn scroll-to-el [el]
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
     [nav-link "#/chat" "Chat" :chat]
     [nav-link "#/login" "Login" :login]]]])

;; -------------------------
;; chat-page

(defn focus-next [element-id]
  (.focus (.getElementById js/document element-id)))

(defn on-enter [func value]
  #(if (and (= 13 (.-charCode %)) (not (s/blank? value)))
     (func)))

(defn input-element
  "An input element which updates its value and on focus parameters on change, blur, and focus"
  [id name type value on-enter-func]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (-> % .-target .-value))
           :on-key-press (on-enter on-enter-func value)}])

;:works

(defn username-input [username-atom]
  (input-element "username" "username" "username" username-atom #(focus-next "email")))

(defn email-input [email-address-atom]
  (input-element "email" "email" "email" email-address-atom #(focus-next "password")))

(defn password-input [password-atom]
  (input-element "password" "password" "password" password-atom #(do)))

(defn wrap-input-group [text element]
   [:div.input-group.mb-3
    [:div.input-group-prepend
     [:div.input-group-text text]]
    element])

(defn signup-component []
  (let [username (r/atom nil)
        password (r/atom nil)]
     (r/create-class
       {;:component-did-mount #(println "component-did-mount")

        :display-name  "signup-component"  ;; for more helpful warnings & errors

        :reagent-render
         (fn []           ;; repeat parameters
           [:div.signup-wrapper
            (wrap-input-group "Username" [username-input username])
            ;(wrap-input-group "Email" [email-input email-address])
            (wrap-input-group "Password" [password-input password])
            [:button.btn.btn-primary
                                     {:type "button"
                                      :on-click #(do-signup! @username @password)}
             "Register"]])})))

(defn login-component []
  (let [username (r/atom nil)
        password (r/atom nil)]
     (r/create-class
       {;:component-did-mount #(println "component-did-mount")

        :display-name  "login-component"  ;; for more helpful warnings & errors

        :reagent-render
         (fn []           ;; repeat parameters
           [:div.signup-wrapper
            (wrap-input-group "Username" [username-input username])
            (wrap-input-group "Password" [password-input password])
            [:button.btn.btn-primary
                                     {:type "button"
                                      :on-click #(do-login! @username @password)}
             "Login"]])})))

(defn login-wrapper []
  (let [toggle-focus (r/atom true)]
     (r/create-class
       {;:component-did-mount #(println "component-did-mount")

        :display-name  "login-wrapper"  ;; for more helpful warnings & errors

        :reagent-render
         (fn []           ;; repeat parameters
           [:div.card.login-wrapper
            [:div.card-header
             [:ul.nav.nav-tabs.card-header-tabs
              [:li.nav-item
               [:a.nav-link
                {:class (if @toggle-focus
                          "active")
                 :on-click #(reset! toggle-focus true)}
                "Login"]]
              [:li.nav-item
               [:a.nav-link
                {:class (if (not @toggle-focus)
                         "active")
                 :on-click #(reset! toggle-focus false)}
                "Register"]]]]
            [:div.card-body.login-wrapper
             (if @toggle-focus
               [login-component]
               [signup-component])]])})))


#_(defn username-input [in-focus]
    [:div.input-group
     [:div.input-group-prepend
      [:span.input-group-text "Username @"]]
     [initial-focus-wrapper
      [:input.form-control
       {:type "text"
        :value (:username @session)
        :placeholder "What's your name?"
        :aria-label "username"
        :aria-describedby "basic-addon1"
        :on-change #(swap! session assoc :username (-> % .-target .-value))
        :on-key-press #(if (and (= 13 (.-charCode %)) (not (s/blank? (:username @session))))
                           (do
                             (swap! in-focus not)))}]]])

(defn message-input []
    [:div.input-group
     [initial-focus-wrapper
      [:input.form-control
       {:id "message-input"
        :disabled @message-input-state
        :type "text"
        :value (:message-input @session)
        :placeholder "Message"
        :aria-label "Message"
        :aria-describedby "basic-addon2"
        :on-change #(swap! session assoc :message-input (-> % .-target .-value))
        :on-key-press #(if (and (= 13 (.-charCode %)) (not (s/blank? (:message-input @session))))
                           (do
                             (println (get-username!))
                             (send-message! (get-username!) (:message-input @session))
                             (reset-key! :message-input "")))}]]
     [:div.input-group-append
      [:button.btn.btn-outline-secondary
       {:id "send-message-button"
        :disabled  @message-input-state
        :type "button"
        :on-click #(if (not (s/blank? (:message-input @session)))
                       (do
                         (println (get-username!))
                         (send-message! (get-username!) (:message-input @session))
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
       {:class (if (= (get-username!) (:username message))
                "float-left"
                "float-right")}
       [:div.card-body.d-inline.p-2.bg-primary.text-white.rounded
        {:class (if (= (get-username!) (:username message))
                 "bg-primary"
                 "bg-secondary")}
        [:div.card-text
         (:message message)]
        [:div.card-subtitle
         [:div.container
          [:div.row
           [:div.col.pl-0 {:id "subline"}
            [:small "@" (:username message)]]
           [:div.col.pr-0.float-right.text-right {:id "subline"}
            [:small " " (f/date-format (js/Date. (:ts message)) "hh:mm")]]]]]]]]])

(defn chat-history [local-chat-history]
  [:div.container
   {:id "chat-history"}
   (doall (map #(message-entry %) local-chat-history))]) ;wrapped in doall due to deref not supported in lazy seq

;; -------------------------
;; pages
(defn home-page []
  [:div.container
   (when-let [docs (:docs @session)]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

(defn login-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [login-wrapper]]]])

(defn chat-page []
  [:div.container
   [:div.row
    [:div.col-sm-12>div.card.px-0
     [:div.card-body
      [:div.scroll-box.mb-3
       (fetch-chat-history-button)
       (chat-history (sort-by :ts (:local-chat-history @session)))]
      [message-input]]]]])

;; -------------------------
;; page switching
(def pages
  {:chat #'chat-page
   :login #'login-page})

(defn page []
  [(pages (:page @session))])


;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
                    (secretary/dispatch! "/chat"))

(secretary/defroute "/chat" []
                    (swap! session assoc :page :chat))

(secretary/defroute "/login" []
                    (swap! session assoc :page :login))


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

(def https?
  (= (.-protocol js/location) "https:"))

(defn ws-or-wss [using-https?]
  (if using-https?
    "wss://"
    "ws://"))

(defn start-websocket []
  (ws/make-websocket! (str (ws-or-wss https?) (.-host js/location) "/ws") update-messages!))

(defn init! []
  (start-websocket)
  (load-interceptors!)
  (fetch-chat-history! 0 5)
  ;(fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
