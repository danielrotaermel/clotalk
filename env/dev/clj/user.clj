(ns user
  (:require 
            [mount.core :as mount]
            [clotalk.figwheel :refer [start-fw stop-fw cljs]]
            [clotalk.core :refer [start-app]]))

(defn start []
  (mount/start-without #'clotalk.core/repl-server))

(defn stop []
  (mount/stop-except #'clotalk.core/repl-server))

(defn restart []
  (stop)
  (start))


