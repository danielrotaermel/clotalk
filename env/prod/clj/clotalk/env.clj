(ns clotalk.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[clotalk started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[clotalk has shut down successfully]=-"))
   :middleware identity})
