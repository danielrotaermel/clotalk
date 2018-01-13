(ns clotalk.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [clotalk.core-test]))

(doo-tests 'clotalk.core-test)

