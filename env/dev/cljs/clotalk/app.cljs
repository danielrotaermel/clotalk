(ns ^:figwheel-no-load clotalk.app
  (:require [clotalk.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
