(defproject clotalk "0.1.0-SNAPSHOT"
  :description "clotalk p2p chat experience"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [proto-repl "0.3.1"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring/ring-devel "1.6.3"]]
  :main ^:skip-aot clotalk.core
  :target-path "target/%s"
  :ring {:handler clotalk.server/handler}
  :plugins [[lein-ring "0.12.1"]]
  :profiles {:uberjar {:aot :all}})
