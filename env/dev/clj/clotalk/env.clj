(ns clotalk.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [clotalk.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[clotalk started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[clotalk has shut down successfully]=-"))
   :middleware wrap-dev})
