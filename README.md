# clotalk

Clojure P2P Chat and File Share

# Prerequisites



You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

You will need [sassc][2] or above installed.

[2]: http://sass-lang.com/install

# Create a development environment

We used atom in combination with proto Repl

to install [atom](https://atom.io) run `brew cask install atom`

then install [proto-repl](https://atom.io/packages/proto-repl) with `apm install`



To compile javascript from clojurescript run

```
lein figwheel
```



To start a web server for the application, run

```
lein run 
```



If needed you can start the application with different configurations e.g.:

```
lein run dev-config.edn
```



To connect to the nRepl open the project in atom open a file and start photo-repl using `cmd+alt+y`.

Set the Port to 7000 and connect to the Repl.



> generated using Luminus version "2.9.12.16"



## License

Copyright © 2018 FIXME
