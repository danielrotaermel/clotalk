// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('clotalk.app');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('clotalk.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__73565__delegate = function (x){
if(cljs.core.truth_(clotalk.core.mount_components)){
return cljs.core.apply.call(null,clotalk.core.mount_components,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clotalk.core/mount-components' is missing");
}
};
var G__73565 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__73566__i = 0, G__73566__a = new Array(arguments.length -  0);
while (G__73566__i < G__73566__a.length) {G__73566__a[G__73566__i] = arguments[G__73566__i + 0]; ++G__73566__i;}
  x = new cljs.core.IndexedSeq(G__73566__a,0,null);
} 
return G__73565__delegate.call(this,x);};
G__73565.cljs$lang$maxFixedArity = 0;
G__73565.cljs$lang$applyTo = (function (arglist__73567){
var x = cljs.core.seq(arglist__73567);
return G__73565__delegate(x);
});
G__73565.cljs$core$IFn$_invoke$arity$variadic = G__73565__delegate;
return G__73565;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1515662044407
