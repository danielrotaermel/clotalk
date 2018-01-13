(ns figwheel.connect.build-app (:require [clotalk.app] [figwheel.client] [figwheel.client.utils] [clotalk.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/clotalk.core.mount-components (apply js/clotalk.core.mount-components x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'clotalk.core/mount-components' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

