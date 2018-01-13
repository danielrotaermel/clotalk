// Compiled by ClojureScript 1.9.946 {}
goog.provide('clotalk.core');
goog.require('cljs.core');
goog.require('clotalk.ajax');
goog.require('ajax.core');
goog.require('cljsjs.jquery');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('hoplon.core');
goog.require('hoplon.jquery');
goog.require('javelin.core');
goog.require('markdown.core');
goog.require('secretary.core');
goog.require('goog.History');
if(typeof clotalk.core.selected_page !== 'undefined'){
} else {
clotalk.core.selected_page = javelin.core.cell.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
}
if(typeof clotalk.core.docs !== 'undefined'){
} else {
clotalk.core.docs = javelin.core.cell.call(null,null);
}
clotalk.core.nav_link = (function clotalk$core$nav_link(uri,title,page,expanded_QMARK_){
return hoplon.core.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,(function (G__70040,G__70041,G__70042){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),G__70040.call(null,G__70041,G__70042),new cljs.core.Keyword(null,"nav-item","nav-item",-1947892488),true], null);
})).call(null,cljs.core._EQ_,page,clotalk.core.selected_page),hoplon.core.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav-link",new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);

return secretary.core.dispatch_BANG_.call(null,uri);
}),title));
});
clotalk.core.navbar = (function clotalk$core$navbar(){
var expanded_QMARK_ = javelin.core.cell.call(null,false);
return hoplon.core.nav.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-dark bg-primary",hoplon.core.button.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggler hidden-sm-up",new cljs.core.Keyword(null,"click","click",1912301393),((function (expanded_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(expanded_QMARK_))
,"\u2630"),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (expanded_QMARK_){
return (function (G__70043){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"navbar-toggleable-xs","navbar-toggleable-xs",1282759044),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__70043], null);
});})(expanded_QMARK_))
).call(null,expanded_QMARK_),hoplon.core.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand",new cljs.core.Keyword(null,"href","href",-793805698),"/","clotalk"),hoplon.core.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"], null),clotalk.core.nav_link.call(null,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),expanded_QMARK_),clotalk.core.nav_link.call(null,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543),expanded_QMARK_))));
});
clotalk.core.about = (function clotalk$core$about(){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"container",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"row",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-12",hoplon.core.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"/img/warning_clojure.png"].join('')))));
});
clotalk.core.home = (function clotalk$core$home(){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"container",hoplon.core.div.call(null,new cljs.core.Keyword(null,"html","html",-998796897),javelin.core.formula.call(null,(function (G__70044,G__70045){
return G__70044.call(null,G__70045);
})).call(null,markdown.core.md__GT_html,clotalk.core.docs)));
});
/**
 * @param {...*} var_args
 */
clotalk.core.page = (function() { 
var clotalk$core$page__delegate = function (args__57663__auto__){
var vec__70046 = hoplon.core.parse_args.call(null,args__57663__auto__);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"app",clotalk.core.navbar.call(null),javelin.core.formula.call(null,((function (vec__70046){
return (function (G__70052,G__70051,G__70050){
var G__70049 = G__70050;
var G__70049__$1 = (cljs.core.truth_((G__70049 instanceof cljs.core.Keyword))?G__70049.fqn:null);
switch (G__70049__$1) {
case "home":
return G__70051.call(null);

break;
case "about":
return G__70052.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70049__$1)].join('')));

}
});})(vec__70046))
).call(null,clotalk.core.about,clotalk.core.home,clotalk.core.selected_page));
};
var clotalk$core$page = function (var_args){
var args__57663__auto__ = null;
if (arguments.length > 0) {
var G__70054__i = 0, G__70054__a = new Array(arguments.length -  0);
while (G__70054__i < G__70054__a.length) {G__70054__a[G__70054__i] = arguments[G__70054__i + 0]; ++G__70054__i;}
  args__57663__auto__ = new cljs.core.IndexedSeq(G__70054__a,0,null);
} 
return clotalk$core$page__delegate.call(this,args__57663__auto__);};
clotalk$core$page.cljs$lang$maxFixedArity = 0;
clotalk$core$page.cljs$lang$applyTo = (function (arglist__70055){
var args__57663__auto__ = cljs.core.seq(arglist__70055);
return clotalk$core$page__delegate(args__57663__auto__);
});
clotalk$core$page.cljs$core$IFn$_invoke$arity$variadic = clotalk$core$page__delegate;
return clotalk$core$page;
})()
;
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__58289__auto___70061 = (function (params__58290__auto__){
if(cljs.core.map_QMARK_.call(null,params__58290__auto__)){
var map__70056 = params__58290__auto__;
var map__70056__$1 = ((((!((map__70056 == null)))?((((map__70056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70056):map__70056);
return cljs.core.reset_BANG_.call(null,clotalk.core.selected_page,new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__58290__auto__)){
var vec__70058 = params__58290__auto__;
return cljs.core.reset_BANG_.call(null,clotalk.core.selected_page,new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__58289__auto___70061);

var action__58289__auto___70067 = (function (params__58290__auto__){
if(cljs.core.map_QMARK_.call(null,params__58290__auto__)){
var map__70062 = params__58290__auto__;
var map__70062__$1 = ((((!((map__70062 == null)))?((((map__70062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70062):map__70062);
return cljs.core.reset_BANG_.call(null,clotalk.core.selected_page,new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__58290__auto__)){
var vec__70064 = params__58290__auto__;
return cljs.core.reset_BANG_.call(null,clotalk.core.selected_page,new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__58289__auto___70067);

clotalk.core.hook_browser_navigation_BANG_ = (function clotalk$core$hook_browser_navigation_BANG_(){
var G__70068 = (new goog.History());
goog.events.listen(G__70068,goog.history.EventType.NAVIGATE,((function (G__70068){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__70068))
);

G__70068.setEnabled(true);

return G__70068;
});
clotalk.core.fetch_docs_BANG_ = (function clotalk$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__70069_SHARP_){
return cljs.core.reset_BANG_.call(null,clotalk.core.docs,p1__70069_SHARP_);
})], null));
});
clotalk.core.mount_components = (function clotalk$core$mount_components(){
return jQuery((function (){
return jQuery("#app").replaceWith(clotalk.core.page.call(null));
}));
});
clotalk.core.init_BANG_ = (function clotalk$core$init_BANG_(){
clotalk.ajax.load_interceptors_BANG_.call(null);

clotalk.core.hook_browser_navigation_BANG_.call(null);

clotalk.core.mount_components.call(null);

return clotalk.core.fetch_docs_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1515662042432
