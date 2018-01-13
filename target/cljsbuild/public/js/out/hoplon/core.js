// Compiled by ClojureScript 1.9.946 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__69496_SHARP_,p2__69497_SHARP_){
return cljs.core.assoc.call(null,p1__69496_SHARP_,p2__69497_SHARP_.getAttribute("static-id"),p2__69497_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__69499 = arguments.length;
switch (G__69499) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__69501 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__69502 = cljs.core.seq.call(null,vec__69501);
var first__69503 = cljs.core.first.call(null,seq__69502);
var seq__69502__$1 = cljs.core.next.call(null,seq__69502);
var f = first__69503;
var more = seq__69502__$1;
var vec__69504 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__69504,(0),null);
var f2 = cljs.core.nth.call(null,vec__69504,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("5377f12c75e846ddbc010bfc8ffb39f4")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__69507_SHARP_){
return cljs.core.zipmap.call(null,p1__69507_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__48579__auto__ = (function (){var and__48567__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__48567__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__48567__auto__;
}
})();
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var G__69508 = (i + (1));
var G__69509 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__69508;
ret = G__69509;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__69511 = arguments.length;
switch (G__69511) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_.call(null,hoplon.core.vflatten.call(null,tree,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count.call(null,tree);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,l)){
return ret;
} else {
var x = cljs.core.nth.call(null,tree,i);
if(!(cljs.core.sequential_QMARK_.call(null,x))){
cljs.core.conj_BANG_.call(null,ret,x);
} else {
hoplon.core.vflatten.call(null,x,ret);
}

var G__69513 = (i + (1));
i = G__69513;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core.node[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$);
} else {
var m__49313__auto____$1 = (hoplon.core.node["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

goog.object.set(hoplon.core.node,"string",(function (this$){
return hoplon.core.$text.call(null,this$);
}));
goog.object.set(hoplon.core.INode,"number",true);

goog.object.set(hoplon.core.node,"number",(function (this$){
return hoplon.core.$text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__69516_SHARP_,p2__69515_SHARP_){
if((p2__69515_SHARP_ == null)){
return p1__69516_SHARP_;
} else {
return cljs.core.conj.call(null,p1__69516_SHARP_,p2__69515_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__69523 = new$__$1;
var vec__69525 = G__69523;
var seq__69526 = cljs.core.seq.call(null,vec__69525);
var first__69527 = cljs.core.first.call(null,seq__69526);
var seq__69526__$1 = cljs.core.next.call(null,seq__69526);
var x = first__69527;
var xs = seq__69526__$1;
var G__69524 = hoplon.core.child_vec.call(null,this$);
var vec__69528 = G__69524;
var seq__69529 = cljs.core.seq.call(null,vec__69528);
var first__69530 = cljs.core.first.call(null,seq__69529);
var seq__69529__$1 = cljs.core.next.call(null,seq__69529);
var k = first__69530;
var ks = seq__69529__$1;
var kids = vec__69528;
var G__69523__$1 = G__69523;
var G__69524__$1 = G__69524;
while(true){
var vec__69531 = G__69523__$1;
var seq__69532 = cljs.core.seq.call(null,vec__69531);
var first__69533 = cljs.core.first.call(null,seq__69532);
var seq__69532__$1 = cljs.core.next.call(null,seq__69532);
var x__$1 = first__69533;
var xs__$1 = seq__69532__$1;
var vec__69534 = G__69524__$1;
var seq__69535 = cljs.core.seq.call(null,vec__69534);
var first__69536 = cljs.core.first.call(null,seq__69535);
var seq__69535__$1 = cljs.core.next.call(null,seq__69535);
var k__$1 = first__69536;
var ks__$1 = seq__69535__$1;
var kids__$1 = vec__69534;
if(cljs.core.truth_((function (){var or__48579__auto__ = x__$1;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return k__$1;
}
})())){
var G__69537 = xs__$1;
var G__69538 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__69523__$1 = G__69537;
G__69524__$1 = G__69538;
continue;
} else {
return null;
}
break;
}
});
/**
 * Flags that an element is managed by Hoplon. Used primarily in prototype
 *  overrides for DOM manipulation fns.
 */
hoplon.core.ensure_hoplon_BANG_ = (function hoplon$core$ensure_hoplon_BANG_(this$){
var this$__$1 = this$;
this$__$1.hoplon = true;

return this$__$1;
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
hoplon.core.ensure_hoplon_BANG_.call(null,this$__$1);

if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_69539 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_69539;

hoplon.core.do_watch.call(null,kids_69539,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && (cljs.core.not.call(null,elem.hoplon));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return ((node instanceof Node)) && (cljs.core.not.call(null,node.hoplon));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon. Hoplon nodes that are not elements are not
 *   managed as they cannot have children anyway.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
var and__48567__auto__ = (elem instanceof Element);
if(and__48567__auto__){
return elem.hoplon;
} else {
return and__48567__auto__;
}
});
/**
 * Appends `child` to `parent` for the case of `parent` being a managed element
 *   or `child` being a cell.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,parent);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return javelin.core.cell_QMARK_.call(null,child);
}
})())){
} else {
throw (new Error("Assert failed: (or (managed? parent) (cell? child))"));
}

var child__$1 = child;
if(cljs.core.truth_(child__$1.parentNode)){
child__$1.parentNode.removeChild(child__$1);
} else {
}

hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_69542 = kidfn.call(null,parent);
var i_69543 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_69542));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_69542,i_69543,child__$1){
return (function (p1__69541_SHARP_,p2__69540_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_69542,cljs.core.assoc,i_69543,p2__69540_SHARP_);
});})(kids_69542,i_69543,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_69542,cljs.core.assoc,i_69543,child__$1);
}

return child__$1;
});
/**
 * Removes `child` from `parent` for the case of `parent` being a managed element
 *  or `child` being a cell
 */
hoplon.core.managed_remove_child = (function hoplon$core$managed_remove_child(parent,child,kidfn){
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,parent);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return javelin.core.cell_QMARK_.call(null,child);
}
})())){
} else {
throw (new Error("Assert failed: (or (managed? parent) (cell? child))"));
}

var child__$1 = child;
hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_69545 = kidfn.call(null,parent);
var before_count_69546 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_69545));
cljs.core.swap_BANG_.call(null,kids_69545,((function (kids_69545,before_count_69546,child__$1){
return (function (p1__69544_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,child__$1),p1__69544_SHARP_));
});})(kids_69545,before_count_69546,child__$1))
);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,kids_69545)),(before_count_69546 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent"));
}

return child__$1;
});
/**
 * Inserts `x` before `y` in `parent` for the case of `parent` being a managed
 *  element or `x` or `y` being a cell
 */
hoplon.core.managed_insert_before = (function hoplon$core$managed_insert_before(parent,x,y,kidfn){
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,parent);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = javelin.core.cell_QMARK_.call(null,x);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return javelin.core.cell_QMARK_.call(null,y);
}
}
})())){
} else {
throw (new Error("Assert failed: (or (managed? parent) (cell? x) (cell? y))"));
}

var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,parent);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,parent),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,parent),((function (x__$1){
return (function (p1__69547_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1))
,p1__69547_SHARP_));
});})(x__$1))
);
} else {
}
}

return x__$1;
});
/**
 * Replaces `y` with `x` in `parent` for the case of `parent` being a managed
 *  element or `x` or `y` being a cell
 */
hoplon.core.managed_replace_child = (function hoplon$core$managed_replace_child(parent,x,y,kidfn){
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,parent);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = javelin.core.cell_QMARK_.call(null,x);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return javelin.core.cell_QMARK_.call(null,y);
}
}
})())){
} else {
throw (new Error("Assert failed: (or (managed? parent) (cell? x) (cell? y))"));
}

var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,parent);

cljs.core.swap_BANG_.call(null,kidfn.call(null,parent),((function (y__$1){
return (function (p1__69548_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1))
,p1__69548_SHARP_);
});})(y__$1))
);

return y__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return javelin.core.cell_QMARK_.call(null,child);
}
})())){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
return hoplon.core.appendChild.call(this$__$1,child);
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return javelin.core.cell_QMARK_.call(null,child);
}
})())){
return hoplon.core.managed_remove_child.call(null,this$__$1,child,kidfn);
} else {
return hoplon.core.removeChild.call(this$__$1,child);
}
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = javelin.core.cell_QMARK_.call(null,x);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return javelin.core.cell_QMARK_.call(null,y);
}
}
})())){
return hoplon.core.managed_insert_before.call(null,this$__$1,x,y,kidfn);
} else {
return hoplon.core.insertBefore.call(this$__$1,x,y);
}
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__48579__auto__ = hoplon.core.managed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = javelin.core.cell_QMARK_.call(null,x);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return javelin.core.cell_QMARK_.call(null,y);
}
}
})())){
return hoplon.core.managed_replace_child.call(null,this$__$1,x,y,kidfn);
} else {
return hoplon.core.replaceChild.call(this$__$1,x,y);
}
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_69549 = cljs.core.keyword.call(null,k);
var attr_69550 = attrfn.call(null,this$__$1);
var has_QMARK__69551 = (function (){var and__48567__auto__ = attr_69550;
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_69550),kk_69549);
} else {
return and__48567__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__69551)){
cljs.core.swap_BANG_.call(null,attr_69550,cljs.core.assoc,kk_69549,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__69552_SHARP_){
return p1__69552_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__69553_SHARP_){
return p1__69553_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__69554_SHARP_){
return p1__69554_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__69555_SHARP_){
return p1__69555_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,kvs);
} else {
var m__49313__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,kvs);
} else {
var m__49313__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,child);
} else {
var m__49313__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,child);
} else {
var m__49313__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,new$,existing);
} else {
var m__49313__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,new$,existing);
} else {
var m__49313__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__69561 = arguments.length;
switch (G__69561) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__49881__auto__ = [];
var len__49858__auto___69563 = arguments.length;
var i__49859__auto___69564 = (0);
while(true){
if((i__49859__auto___69564 < len__49858__auto___69563)){
args_arr__49881__auto__.push((arguments[i__49859__auto___69564]));

var G__69565 = (i__49859__auto___69564 + (1));
i__49859__auto___69564 = G__69565;
continue;
} else {
}
break;
}

var argseq__49882__auto__ = (new cljs.core.IndexedSeq(args_arr__49881__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49882__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq69557){
var G__69558 = cljs.core.first.call(null,seq69557);
var seq69557__$1 = cljs.core.next.call(null,seq69557);
var G__69559 = cljs.core.first.call(null,seq69557__$1);
var seq69557__$2 = cljs.core.next.call(null,seq69557__$1);
var G__69560 = cljs.core.first.call(null,seq69557__$2);
var seq69557__$3 = cljs.core.next.call(null,seq69557__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69558,G__69559,G__69560,seq69557__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__69571 = arguments.length;
switch (G__69571) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__49881__auto__ = [];
var len__49858__auto___69573 = arguments.length;
var i__49859__auto___69574 = (0);
while(true){
if((i__49859__auto___69574 < len__49858__auto___69573)){
args_arr__49881__auto__.push((arguments[i__49859__auto___69574]));

var G__69575 = (i__49859__auto___69574 + (1));
i__49859__auto___69574 = G__69575;
continue;
} else {
}
break;
}

var argseq__49882__auto__ = (new cljs.core.IndexedSeq(args_arr__49881__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49882__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq69567){
var G__69568 = cljs.core.first.call(null,seq69567);
var seq69567__$1 = cljs.core.next.call(null,seq69567);
var G__69569 = cljs.core.first.call(null,seq69567__$1);
var seq69567__$2 = cljs.core.next.call(null,seq69567__$1);
var G__69570 = cljs.core.first.call(null,seq69567__$2);
var seq69567__$3 = cljs.core.next.call(null,seq69567__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69568,G__69569,G__69570,seq69567__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return hoplon.core.do_BANG_.call(null,elem,this$,value);
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return hoplon.core.on_BANG_.call(null,elem,this$,value);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),null,null),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),null,null),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts69578_69592 = null;
cljs.core.reduce.call(null,((function (opts69578_69592){
return (function (ret__57151__auto__,p__69579){
var vec__69580 = p__69579;
var ___57152__auto__ = cljs.core.nth.call(null,vec__69580,(0),null);
var f__57153__auto__ = cljs.core.nth.call(null,vec__69580,(1),null);
var sym__57154__auto__ = f__57153__auto__.call(null);
var G__69583 = ret__57151__auto__;
if(cljs.core.truth_(sym__57154__auto__)){
return cljs.core.conj.call(null,G__69583,sym__57154__auto__);
} else {
return G__69583;
}
});})(opts69578_69592))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts69578_69592){
return (function (p1__57150__57155__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts69578_69592).call(null,cljs.core.first.call(null,p1__57150__57155__auto__));
});})(opts69578_69592))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts69578_69592){
return (function (){
var checked__57119__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-do!","-do!",973867495,null),"target/cljsbuild/public/js/out/hoplon/core.cljs",11,1,332,332,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts69578_69592);
if(cljs.core.truth_(checked__57119__auto__)){
hoplon.core._do_BANG_ = checked__57119__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null);
});})(opts69578_69592))
], null)))));

var opts69586 = null;
return cljs.core.reduce.call(null,((function (opts69586){
return (function (ret__57151__auto__,p__69587){
var vec__69588 = p__69587;
var ___57152__auto__ = cljs.core.nth.call(null,vec__69588,(0),null);
var f__57153__auto__ = cljs.core.nth.call(null,vec__69588,(1),null);
var sym__57154__auto__ = f__57153__auto__.call(null);
var G__69591 = ret__57151__auto__;
if(cljs.core.truth_(sym__57154__auto__)){
return cljs.core.conj.call(null,G__69591,sym__57154__auto__);
} else {
return G__69591;
}
});})(opts69586))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts69586){
return (function (p1__57150__57155__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts69586).call(null,cljs.core.first.call(null,p1__57150__57155__auto__));
});})(opts69586))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts69586){
return (function (){
var checked__57119__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-on!","-on!",900033004,null),"target/cljsbuild/public/js/out/hoplon/core.cljs",11,1,335,335,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts69586);
if(cljs.core.truth_(checked__57119__auto__)){
hoplon.core._on_BANG_ = checked__57119__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null);
});})(opts69586))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__49312__auto__ = (((this$ == null))?null:this$);
var m__49313__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,this$,elem,value);
} else {
var m__49313__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__69595_SHARP_,p2__69594_SHARP_){
return hoplon.core._do_BANG_.call(null,elem,this$__$1,p2__69594_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core._on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_.call(null,elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__69597 = arguments.length;
switch (G__69597) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return f.call(null);
}),(0));
} else {
var temp__5455__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__5455__auto__){
return (function (){
return ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__5455__auto__))
,(20));
} else {
var seq__69599_69603 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__69600_69604 = null;
var count__69601_69605 = (0);
var i__69602_69606 = (0);
while(true){
if((i__69602_69606 < count__69601_69605)){
var f_69607__$1 = cljs.core._nth.call(null,chunk__69600_69604,i__69602_69606);
f_69607__$1.call(null);

var G__69608 = seq__69599_69603;
var G__69609 = chunk__69600_69604;
var G__69610 = count__69601_69605;
var G__69611 = (i__69602_69606 + (1));
seq__69599_69603 = G__69608;
chunk__69600_69604 = G__69609;
count__69601_69605 = G__69610;
i__69602_69606 = G__69611;
continue;
} else {
var temp__5457__auto___69612 = cljs.core.seq.call(null,seq__69599_69603);
if(temp__5457__auto___69612){
var seq__69599_69613__$1 = temp__5457__auto___69612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69599_69613__$1)){
var c__49510__auto___69614 = cljs.core.chunk_first.call(null,seq__69599_69613__$1);
var G__69615 = cljs.core.chunk_rest.call(null,seq__69599_69613__$1);
var G__69616 = c__49510__auto___69614;
var G__69617 = cljs.core.count.call(null,c__49510__auto___69614);
var G__69618 = (0);
seq__69599_69603 = G__69615;
chunk__69600_69604 = G__69616;
count__69601_69605 = G__69617;
i__69602_69606 = G__69618;
continue;
} else {
var f_69619__$1 = cljs.core.first.call(null,seq__69599_69613__$1);
f_69619__$1.call(null);

var G__69620 = cljs.core.next.call(null,seq__69599_69613__$1);
var G__69621 = null;
var G__69622 = (0);
var G__69623 = (0);
seq__69599_69603 = G__69620;
chunk__69600_69604 = G__69621;
count__69601_69605 = G__69622;
i__69602_69606 = G__69623;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5455__auto__))
.call(null);
});})(temp__5455__auto__))
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__69632 = args;
var vec__69633 = G__69632;
var seq__69634 = cljs.core.seq.call(null,vec__69633);
var first__69635 = cljs.core.first.call(null,seq__69634);
var seq__69634__$1 = cljs.core.next.call(null,seq__69634);
var arg = first__69635;
var args__$1 = seq__69634__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__69632__$1 = G__69632;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__69636 = G__69632__$1;
var seq__69637 = cljs.core.seq.call(null,vec__69636);
var first__69638 = cljs.core.first.call(null,seq__69637);
var seq__69637__$1 = cljs.core.next.call(null,seq__69637);
var arg__$1 = first__69638;
var args__$2 = seq__69637__$1;
if(cljs.core.not.call(null,(function (){var or__48579__auto__ = arg__$1;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__69639 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__69632__$1,attr__$2,kids__$2,vec__69636,seq__69637,first__69638,seq__69637__$1,arg__$1,args__$2,attr,kids,G__69632,vec__69633,seq__69634,first__69635,seq__69634__$1,arg,args__$1){
return (function (p1__69624_SHARP_,p2__69625_SHARP_,p3__69626_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__69624_SHARP_,p2__69625_SHARP_,p3__69626_SHARP_);
});})(attr__$1,kids__$1,G__69632__$1,attr__$2,kids__$2,vec__69636,seq__69637,first__69638,seq__69637__$1,arg__$1,args__$2,attr,kids,G__69632,vec__69633,seq__69634,first__69635,seq__69634__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__69640 = kids__$2;
var G__69641 = args__$2;
attr__$1 = G__69639;
kids__$1 = G__69640;
G__69632__$1 = G__69641;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,arg__$1)){
var G__69642 = cljs.core.reduce.call(null,((function (attr__$1,kids__$1,G__69632__$1,attr__$2,kids__$2,vec__69636,seq__69637,first__69638,seq__69637__$1,arg__$1,args__$2,attr,kids,G__69632,vec__69633,seq__69634,first__69635,seq__69634__$1,arg,args__$1){
return (function (p1__69627_SHARP_,p2__69628_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__69627_SHARP_,p2__69628_SHARP_,true);
});})(attr__$1,kids__$1,G__69632__$1,attr__$2,kids__$2,vec__69636,seq__69637,first__69638,seq__69637__$1,arg__$1,args__$2,attr,kids,G__69632,vec__69633,seq__69634,first__69635,seq__69634__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__69643 = kids__$2;
var G__69644 = args__$2;
attr__$1 = G__69642;
kids__$1 = G__69643;
G__69632__$1 = G__69644;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__69645 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__69646 = kids__$2;
var G__69647 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__69645;
kids__$1 = G__69646;
G__69632__$1 = G__69647;
continue;
} else {
if(cljs.core.seq_QMARK_.call(null,arg__$1)){
var G__69648 = attr__$2;
var G__69649 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__69650 = args__$2;
attr__$1 = G__69648;
kids__$1 = G__69649;
G__69632__$1 = G__69650;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,arg__$1)){
var G__69651 = attr__$2;
var G__69652 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__69653 = args__$2;
attr__$1 = G__69651;
kids__$1 = G__69652;
G__69632__$1 = G__69653;
continue;
} else {
var G__69654 = attr__$2;
var G__69655 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__69656 = args__$2;
attr__$1 = G__69654;
kids__$1 = G__69655;
G__69632__$1 = G__69656;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv.call(null,(function (p1__69658_SHARP_,p2__69657_SHARP_,p3__69659_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__69657_SHARP_,p1__69658_SHARP_,p3__69659_SHARP_);

return p1__69658_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__69660){
var vec__69661 = p__69660;
var seq__69662 = cljs.core.seq.call(null,vec__69661);
var first__69663 = cljs.core.first.call(null,seq__69662);
var seq__69662__$1 = cljs.core.next.call(null,seq__69662);
var child_cell = first__69663;
var _ = seq__69662__$1;
var kids = vec__69661;
var this$__$1 = this$;
var seq__69664_69668 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__69665_69669 = null;
var count__69666_69670 = (0);
var i__69667_69671 = (0);
while(true){
if((i__69667_69671 < count__69666_69670)){
var x_69672 = cljs.core._nth.call(null,chunk__69665_69669,i__69667_69671);
var temp__5457__auto___69673 = hoplon.core.__GT_node.call(null,x_69672);
if(cljs.core.truth_(temp__5457__auto___69673)){
var x_69674__$1 = temp__5457__auto___69673;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_69674__$1);
} else {
}

var G__69675 = seq__69664_69668;
var G__69676 = chunk__69665_69669;
var G__69677 = count__69666_69670;
var G__69678 = (i__69667_69671 + (1));
seq__69664_69668 = G__69675;
chunk__69665_69669 = G__69676;
count__69666_69670 = G__69677;
i__69667_69671 = G__69678;
continue;
} else {
var temp__5457__auto___69679 = cljs.core.seq.call(null,seq__69664_69668);
if(temp__5457__auto___69679){
var seq__69664_69680__$1 = temp__5457__auto___69679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69664_69680__$1)){
var c__49510__auto___69681 = cljs.core.chunk_first.call(null,seq__69664_69680__$1);
var G__69682 = cljs.core.chunk_rest.call(null,seq__69664_69680__$1);
var G__69683 = c__49510__auto___69681;
var G__69684 = cljs.core.count.call(null,c__49510__auto___69681);
var G__69685 = (0);
seq__69664_69668 = G__69682;
chunk__69665_69669 = G__69683;
count__69666_69670 = G__69684;
i__69667_69671 = G__69685;
continue;
} else {
var x_69686 = cljs.core.first.call(null,seq__69664_69680__$1);
var temp__5457__auto___69687__$1 = hoplon.core.__GT_node.call(null,x_69686);
if(cljs.core.truth_(temp__5457__auto___69687__$1)){
var x_69688__$1 = temp__5457__auto___69687__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_69688__$1);
} else {
}

var G__69689 = cljs.core.next.call(null,seq__69664_69680__$1);
var G__69690 = null;
var G__69691 = (0);
var G__69692 = (0);
seq__69664_69668 = G__69689;
chunk__69665_69669 = G__69690;
count__69666_69670 = G__69691;
i__69667_69671 = G__69692;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___69699 = arguments.length;
var i__49859__auto___69700 = (0);
while(true){
if((i__49859__auto___69700 < len__49858__auto___69699)){
args__49865__auto__.push((arguments[i__49859__auto___69700]));

var G__69701 = (i__49859__auto___69700 + (1));
i__49859__auto___69700 = G__69701;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__69695 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__69695,(0),null);
var kids = cljs.core.nth.call(null,vec__69695,(1),null);
var G__69698 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__69698,attr);

hoplon.core.add_children_BANG_.call(null,G__69698,kids);

return G__69698;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq69693){
var G__69694 = cljs.core.first.call(null,seq69693);
var seq69693__$1 = cljs.core.next.call(null,seq69693);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69694,seq69693__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__69703 = arguments.length;
switch (G__69703) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,k))){
return this$.getAttribute(cljs.core.name.call(null,k));
} else {
return goog.object.get(this$.children,k);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__48579__auto__ = hoplon.core.lookup_BANG_.call(null,this$,k);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__69728 = null;
var G__69728__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$);
});
var G__69728__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});
var G__69728__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});
var G__69728__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});
var G__69728__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});
var G__69728__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});
var G__69728__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});
var G__69728__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});
var G__69728__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});
var G__69728__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});
var G__69728__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});
var G__69728__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});
var G__69728__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__69728__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__69728__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__69728__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__69728__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__69728__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__69728__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__69728__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__69728__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__69728__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__69728 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__69728__1.call(this,self__);
case 2:
return G__69728__2.call(this,self__,a);
case 3:
return G__69728__3.call(this,self__,a,b);
case 4:
return G__69728__4.call(this,self__,a,b,c);
case 5:
return G__69728__5.call(this,self__,a,b,c,d);
case 6:
return G__69728__6.call(this,self__,a,b,c,d,e);
case 7:
return G__69728__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__69728__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__69728__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__69728__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__69728__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__69728__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__69728__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__69728__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__69728__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__69728__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__69728__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__69728__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__69728__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__69728__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__69728__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__69728__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__69728.cljs$core$IFn$_invoke$arity$1 = G__69728__1;
G__69728.cljs$core$IFn$_invoke$arity$2 = G__69728__2;
G__69728.cljs$core$IFn$_invoke$arity$3 = G__69728__3;
G__69728.cljs$core$IFn$_invoke$arity$4 = G__69728__4;
G__69728.cljs$core$IFn$_invoke$arity$5 = G__69728__5;
G__69728.cljs$core$IFn$_invoke$arity$6 = G__69728__6;
G__69728.cljs$core$IFn$_invoke$arity$7 = G__69728__7;
G__69728.cljs$core$IFn$_invoke$arity$8 = G__69728__8;
G__69728.cljs$core$IFn$_invoke$arity$9 = G__69728__9;
G__69728.cljs$core$IFn$_invoke$arity$10 = G__69728__10;
G__69728.cljs$core$IFn$_invoke$arity$11 = G__69728__11;
G__69728.cljs$core$IFn$_invoke$arity$12 = G__69728__12;
G__69728.cljs$core$IFn$_invoke$arity$13 = G__69728__13;
G__69728.cljs$core$IFn$_invoke$arity$14 = G__69728__14;
G__69728.cljs$core$IFn$_invoke$arity$15 = G__69728__15;
G__69728.cljs$core$IFn$_invoke$arity$16 = G__69728__16;
G__69728.cljs$core$IFn$_invoke$arity$17 = G__69728__17;
G__69728.cljs$core$IFn$_invoke$arity$18 = G__69728__18;
G__69728.cljs$core$IFn$_invoke$arity$19 = G__69728__19;
G__69728.cljs$core$IFn$_invoke$arity$20 = G__69728__20;
G__69728.cljs$core$IFn$_invoke$arity$21 = G__69728__21;
G__69728.cljs$core$IFn$_invoke$arity$22 = G__69728__22;
return G__69728;
})()
;

Element.prototype.apply = (function (self__,args69705){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args69705)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.call(null,this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.call(null,this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__69706 = cljs.core.seq.call(null,kvs);
var chunk__69708 = null;
var count__69709 = (0);
var i__69710 = (0);
while(true){
if((i__69710 < count__69709)){
var vec__69712 = cljs.core._nth.call(null,chunk__69708,i__69710);
var k = cljs.core.nth.call(null,vec__69712,(0),null);
var v = cljs.core.nth.call(null,vec__69712,(1),null);
var k_69729__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_69729__$1);
} else {
e.setAttribute(k_69729__$1,((cljs.core._EQ_.call(null,true,v))?k_69729__$1:v));
}

var G__69730 = seq__69706;
var G__69731 = chunk__69708;
var G__69732 = count__69709;
var G__69733 = (i__69710 + (1));
seq__69706 = G__69730;
chunk__69708 = G__69731;
count__69709 = G__69732;
i__69710 = G__69733;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69706);
if(temp__5457__auto__){
var seq__69706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69706__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69706__$1);
var G__69734 = cljs.core.chunk_rest.call(null,seq__69706__$1);
var G__69735 = c__49510__auto__;
var G__69736 = cljs.core.count.call(null,c__49510__auto__);
var G__69737 = (0);
seq__69706 = G__69734;
chunk__69708 = G__69735;
count__69709 = G__69736;
i__69710 = G__69737;
continue;
} else {
var vec__69715 = cljs.core.first.call(null,seq__69706__$1);
var k = cljs.core.nth.call(null,vec__69715,(0),null);
var v = cljs.core.nth.call(null,vec__69715,(1),null);
var k_69738__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_69738__$1);
} else {
e.setAttribute(k_69738__$1,((cljs.core._EQ_.call(null,true,v))?k_69738__$1:v));
}

var G__69739 = cljs.core.next.call(null,seq__69706__$1);
var G__69740 = null;
var G__69741 = (0);
var G__69742 = (0);
seq__69706 = G__69739;
chunk__69708 = G__69740;
count__69709 = G__69741;
i__69710 = G__69742;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__69718 = cljs.core.seq.call(null,kvs);
var chunk__69719 = null;
var count__69720 = (0);
var i__69721 = (0);
while(true){
if((i__69721 < count__69720)){
var vec__69722 = cljs.core._nth.call(null,chunk__69719,i__69721);
var k = cljs.core.nth.call(null,vec__69722,(0),null);
var v = cljs.core.nth.call(null,vec__69722,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__69743 = seq__69718;
var G__69744 = chunk__69719;
var G__69745 = count__69720;
var G__69746 = (i__69721 + (1));
seq__69718 = G__69743;
chunk__69719 = G__69744;
count__69720 = G__69745;
i__69721 = G__69746;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69718);
if(temp__5457__auto__){
var seq__69718__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69718__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69718__$1);
var G__69747 = cljs.core.chunk_rest.call(null,seq__69718__$1);
var G__69748 = c__49510__auto__;
var G__69749 = cljs.core.count.call(null,c__49510__auto__);
var G__69750 = (0);
seq__69718 = G__69747;
chunk__69719 = G__69748;
count__69720 = G__69749;
i__69721 = G__69750;
continue;
} else {
var vec__69725 = cljs.core.first.call(null,seq__69718__$1);
var k = cljs.core.nth.call(null,vec__69725,(0),null);
var v = cljs.core.nth.call(null,vec__69725,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__69751 = cljs.core.next.call(null,seq__69718__$1);
var G__69752 = null;
var G__69753 = (0);
var G__69754 = (0);
seq__69718 = G__69751;
chunk__69719 = G__69752;
count__69720 = G__69753;
i__69721 = G__69754;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__69758__delegate = function (args){
var elem__$1 = elem;
var vec__69755_69759 = hoplon.core.parse_args.call(null,args);
var attrs_69760 = cljs.core.nth.call(null,vec__69755_69759,(0),null);
var kids_69761 = cljs.core.nth.call(null,vec__69755_69759,(1),null);
hoplon.core.ensure_hoplon_BANG_.call(null,elem__$1);

hoplon.core.add_attributes_BANG_.call(null,elem__$1,attrs_69760);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs_69760))){
hoplon.core.remove_all_kids_BANG_.call(null,elem__$1);

hoplon.core.add_children_BANG_.call(null,elem__$1,kids_69761);
} else {
}

return elem__$1;
};
var G__69758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69762__i = 0, G__69762__a = new Array(arguments.length -  0);
while (G__69762__i < G__69762__a.length) {G__69762__a[G__69762__i] = arguments[G__69762__i + 0]; ++G__69762__i;}
  args = new cljs.core.IndexedSeq(G__69762__a,0,null);
} 
return G__69758__delegate.call(this,args);};
G__69758.cljs$lang$maxFixedArity = 0;
G__69758.cljs$lang$applyTo = (function (arglist__69763){
var args = cljs.core.seq(arglist__69763);
return G__69758__delegate(args);
});
G__69758.cljs$core$IFn$_invoke$arity$variadic = G__69758__delegate;
return G__69758;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__69767__delegate = function (args){
var vec__69764 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__69764,(0),null);
var kids = cljs.core.nth.call(null,vec__69764,(1),null);
var elem = document.createElement(tag);
hoplon.core.ensure_hoplon_BANG_.call(null,elem);

return elem.call(null,attr,kids);
};
var G__69767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69768__i = 0, G__69768__a = new Array(arguments.length -  0);
while (G__69768__i < G__69768__a.length) {G__69768__a[G__69768__i] = arguments[G__69768__i + 0]; ++G__69768__i;}
  args = new cljs.core.IndexedSeq(G__69768__a,0,null);
} 
return G__69767__delegate.call(this,args);};
G__69767.cljs$lang$maxFixedArity = 0;
G__69767.cljs$lang$applyTo = (function (arglist__69769){
var args = cljs.core.seq(arglist__69769);
return G__69767__delegate(args);
});
G__69767.cljs$core$IFn$_invoke$arity$variadic = G__69767__delegate;
return G__69767;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__49865__auto__ = [];
var len__49858__auto___69771 = arguments.length;
var i__49859__auto___69772 = (0);
while(true){
if((i__49859__auto___69772 < len__49858__auto___69771)){
args__49865__auto__.push((arguments[i__49859__auto___69772]));

var G__69773 = (i__49859__auto___69772 + (1));
i__49859__auto___69772 = G__69773;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_.call(null,hoplon.core.ensure_hoplon_BANG_.call(null,el),cljs.core.first.call(null,hoplon.core.parse_args.call(null,args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq69770){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69770));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton.call(null,document.head);
/**
 * Updates and returns the document's `body` element in place. Creates `body`
 *  if not exists.
 */
hoplon.core.body = hoplon.core.mksingleton.call(null,(function (){
if(cljs.core.truth_(document.body)){
} else {
document.body = document.createElement("body");
}

return document.body;
})()
);
hoplon.core.a = hoplon.core.mkelem.call(null,"a");
hoplon.core.abbr = hoplon.core.mkelem.call(null,"abbr");
hoplon.core.address = hoplon.core.mkelem.call(null,"address");
hoplon.core.area = hoplon.core.mkelem.call(null,"area");
hoplon.core.article = hoplon.core.mkelem.call(null,"article");
hoplon.core.aside = hoplon.core.mkelem.call(null,"aside");
hoplon.core.audio = hoplon.core.mkelem.call(null,"audio");
hoplon.core.b = hoplon.core.mkelem.call(null,"b");
hoplon.core.base = hoplon.core.mkelem.call(null,"base");
hoplon.core.bdi = hoplon.core.mkelem.call(null,"bdi");
hoplon.core.bdo = hoplon.core.mkelem.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.mkelem.call(null,"blockquote");
hoplon.core.br = hoplon.core.mkelem.call(null,"br");
hoplon.core.button = hoplon.core.mkelem.call(null,"button");
hoplon.core.canvas = hoplon.core.mkelem.call(null,"canvas");
hoplon.core.caption = hoplon.core.mkelem.call(null,"caption");
hoplon.core.cite = hoplon.core.mkelem.call(null,"cite");
hoplon.core.code = hoplon.core.mkelem.call(null,"code");
hoplon.core.col = hoplon.core.mkelem.call(null,"col");
hoplon.core.colgroup = hoplon.core.mkelem.call(null,"colgroup");
hoplon.core.data = hoplon.core.mkelem.call(null,"data");
hoplon.core.datalist = hoplon.core.mkelem.call(null,"datalist");
hoplon.core.dd = hoplon.core.mkelem.call(null,"dd");
hoplon.core.del = hoplon.core.mkelem.call(null,"del");
hoplon.core.details = hoplon.core.mkelem.call(null,"details");
hoplon.core.dfn = hoplon.core.mkelem.call(null,"dfn");
hoplon.core.dialog = hoplon.core.mkelem.call(null,"dialog");
hoplon.core.div = hoplon.core.mkelem.call(null,"div");
hoplon.core.dl = hoplon.core.mkelem.call(null,"dl");
hoplon.core.dt = hoplon.core.mkelem.call(null,"dt");
hoplon.core.em = hoplon.core.mkelem.call(null,"em");
hoplon.core.embed = hoplon.core.mkelem.call(null,"embed");
hoplon.core.fieldset = hoplon.core.mkelem.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.mkelem.call(null,"figcaption");
hoplon.core.figure = hoplon.core.mkelem.call(null,"figure");
hoplon.core.footer = hoplon.core.mkelem.call(null,"footer");
hoplon.core.form = hoplon.core.mkelem.call(null,"form");
hoplon.core.h1 = hoplon.core.mkelem.call(null,"h1");
hoplon.core.h2 = hoplon.core.mkelem.call(null,"h2");
hoplon.core.h3 = hoplon.core.mkelem.call(null,"h3");
hoplon.core.h4 = hoplon.core.mkelem.call(null,"h4");
hoplon.core.h5 = hoplon.core.mkelem.call(null,"h5");
hoplon.core.h6 = hoplon.core.mkelem.call(null,"h6");
hoplon.core.header = hoplon.core.mkelem.call(null,"header");
hoplon.core.hgroup = hoplon.core.mkelem.call(null,"hgroup");
hoplon.core.hr = hoplon.core.mkelem.call(null,"hr");
hoplon.core.i = hoplon.core.mkelem.call(null,"i");
hoplon.core.iframe = hoplon.core.mkelem.call(null,"iframe");
hoplon.core.img = hoplon.core.mkelem.call(null,"img");
hoplon.core.input = hoplon.core.mkelem.call(null,"input");
hoplon.core.ins = hoplon.core.mkelem.call(null,"ins");
hoplon.core.kbd = hoplon.core.mkelem.call(null,"kbd");
hoplon.core.keygen = hoplon.core.mkelem.call(null,"keygen");
hoplon.core.label = hoplon.core.mkelem.call(null,"label");
hoplon.core.legend = hoplon.core.mkelem.call(null,"legend");
hoplon.core.li = hoplon.core.mkelem.call(null,"li");
hoplon.core.link = hoplon.core.mkelem.call(null,"link");
hoplon.core.main = hoplon.core.mkelem.call(null,"main");
hoplon.core.html_map = hoplon.core.mkelem.call(null,"map");
hoplon.core.mark = hoplon.core.mkelem.call(null,"mark");
hoplon.core.menu = hoplon.core.mkelem.call(null,"menu");
hoplon.core.menuitem = hoplon.core.mkelem.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.mkelem.call(null,"meta");
hoplon.core.meter = hoplon.core.mkelem.call(null,"meter");
hoplon.core.multicol = hoplon.core.mkelem.call(null,"multicol");
hoplon.core.nav = hoplon.core.mkelem.call(null,"nav");
hoplon.core.noframes = hoplon.core.mkelem.call(null,"noframes");
hoplon.core.noscript = hoplon.core.mkelem.call(null,"noscript");
hoplon.core.html_object = hoplon.core.mkelem.call(null,"object");
hoplon.core.ol = hoplon.core.mkelem.call(null,"ol");
hoplon.core.optgroup = hoplon.core.mkelem.call(null,"optgroup");
hoplon.core.option = hoplon.core.mkelem.call(null,"option");
hoplon.core.output = hoplon.core.mkelem.call(null,"output");
hoplon.core.p = hoplon.core.mkelem.call(null,"p");
hoplon.core.param = hoplon.core.mkelem.call(null,"param");
hoplon.core.picture = hoplon.core.mkelem.call(null,"picture");
hoplon.core.pre = hoplon.core.mkelem.call(null,"pre");
hoplon.core.progress = hoplon.core.mkelem.call(null,"progress");
hoplon.core.q = hoplon.core.mkelem.call(null,"q");
hoplon.core.rp = hoplon.core.mkelem.call(null,"rp");
hoplon.core.rt = hoplon.core.mkelem.call(null,"rt");
hoplon.core.rtc = hoplon.core.mkelem.call(null,"rtc");
hoplon.core.ruby = hoplon.core.mkelem.call(null,"ruby");
hoplon.core.s = hoplon.core.mkelem.call(null,"s");
hoplon.core.samp = hoplon.core.mkelem.call(null,"samp");
hoplon.core.script = hoplon.core.mkelem.call(null,"script");
hoplon.core.section = hoplon.core.mkelem.call(null,"section");
hoplon.core.select = hoplon.core.mkelem.call(null,"select");
hoplon.core.shadow = hoplon.core.mkelem.call(null,"shadow");
hoplon.core.small = hoplon.core.mkelem.call(null,"small");
hoplon.core.source = hoplon.core.mkelem.call(null,"source");
hoplon.core.span = hoplon.core.mkelem.call(null,"span");
hoplon.core.strong = hoplon.core.mkelem.call(null,"strong");
hoplon.core.style = hoplon.core.mkelem.call(null,"style");
hoplon.core.sub = hoplon.core.mkelem.call(null,"sub");
hoplon.core.summary = hoplon.core.mkelem.call(null,"summary");
hoplon.core.sup = hoplon.core.mkelem.call(null,"sup");
hoplon.core.table = hoplon.core.mkelem.call(null,"table");
hoplon.core.tbody = hoplon.core.mkelem.call(null,"tbody");
hoplon.core.td = hoplon.core.mkelem.call(null,"td");
hoplon.core.template = hoplon.core.mkelem.call(null,"template");
hoplon.core.textarea = hoplon.core.mkelem.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.mkelem.call(null,"tfoot");
hoplon.core.th = hoplon.core.mkelem.call(null,"th");
hoplon.core.thead = hoplon.core.mkelem.call(null,"thead");
hoplon.core.html_time = hoplon.core.mkelem.call(null,"time");
hoplon.core.title = hoplon.core.mkelem.call(null,"title");
hoplon.core.tr = hoplon.core.mkelem.call(null,"tr");
hoplon.core.track = hoplon.core.mkelem.call(null,"track");
hoplon.core.u = hoplon.core.mkelem.call(null,"u");
hoplon.core.ul = hoplon.core.mkelem.call(null,"ul");
hoplon.core.html_var = hoplon.core.mkelem.call(null,"var");
hoplon.core.video = hoplon.core.mkelem.call(null,"video");
hoplon.core.wbr = hoplon.core.mkelem.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__69774_SHARP_){
return document.createTextNode(p1__69774_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__69775_SHARP_){
return document.createComment(p1__69775_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__69776_SHARP_){
var e = p1__69776_SHARP_.target;
if(cljs.core.truth_((function (){var or__48579__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__69776_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__49634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__49635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__49636__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__49637__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__49638__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__,hierarchy__49638__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__,hierarchy__49638__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__49638__auto__,method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__49634__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__49635__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__49636__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__49637__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__49638__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__,hierarchy__49638__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__,hierarchy__49638__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__49638__auto__,method_table__49634__auto__,prefer_table__49635__auto__,method_cache__49636__auto__,cached_hierarchy__49637__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__69779,G__69780){
return G__69779.call(null,G__69780);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__69777_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__69783,G__69782,G__69781){
return G__69781.call(null,G__69782,G__69783,null);
});})(on_deck,items_seq))
).call(null,p1__69777_SHARP_,items_seq,cljs.core.nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__69778_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__69778_SHARP_));
cljs.core.swap_BANG_.call(null,p1__69778_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__69784 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__69785 = null;
var count__69786 = (0);
var i__69787 = (0);
while(true){
if((i__69787 < count__69786)){
var i = cljs.core._nth.call(null,chunk__69785,i__69787);
var e_69788 = (function (){var or__48579__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_69788);

var G__69789 = seq__69784;
var G__69790 = chunk__69785;
var G__69791 = count__69786;
var G__69792 = (i__69787 + (1));
seq__69784 = G__69789;
chunk__69785 = G__69790;
count__69786 = G__69791;
i__69787 = G__69792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69784);
if(temp__5457__auto__){
var seq__69784__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69784__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69784__$1);
var G__69793 = cljs.core.chunk_rest.call(null,seq__69784__$1);
var G__69794 = c__49510__auto__;
var G__69795 = cljs.core.count.call(null,c__49510__auto__);
var G__69796 = (0);
seq__69784 = G__69793;
chunk__69785 = G__69794;
count__69786 = G__69795;
i__69787 = G__69796;
continue;
} else {
var i = cljs.core.first.call(null,seq__69784__$1);
var e_69797 = (function (){var or__48579__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_69797);

var G__69798 = cljs.core.next.call(null,seq__69784__$1);
var G__69799 = null;
var G__69800 = (0);
var G__69801 = (0);
seq__69784 = G__69798;
chunk__69785 = G__69799;
count__69786 = G__69800;
i__69787 = G__69801;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__49624__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__49624__auto__)){
var e_69802 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_69802);

var G__69803 = (_ + (1));
_ = G__69803;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__49865__auto__ = [];
var len__49858__auto___69812 = arguments.length;
var i__49859__auto___69813 = (0);
while(true){
if((i__49859__auto___69813 < len__49858__auto___69812)){
args__49865__auto__.push((arguments[i__49859__auto___69813]));

var G__69814 = (i__49859__auto___69813 + (1));
i__49859__auto___69813 = G__69814;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__69805){
var vec__69806 = p__69805;
var default$ = cljs.core.nth.call(null,vec__69806,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__69806,default$){
return (function (G__69809,G__69811,G__69810){
var or__48579__auto__ = (function (){var and__48567__auto__ = G__69809.call(null,G__69810);
if(cljs.core.truth_(and__48567__auto__)){
return G__69810;
} else {
return and__48567__auto__;
}
})();
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return G__69811;
}
});})(c,vec__69806,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__69806,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__69806,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq69804){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69804));
});


//# sourceMappingURL=core.js.map?rel=1515662042091
