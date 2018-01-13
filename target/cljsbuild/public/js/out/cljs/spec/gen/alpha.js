// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67930 = arguments.length;
var i__49859__auto___67931 = (0);
while(true){
if((i__49859__auto___67931 < len__49858__auto___67930)){
args__49865__auto__.push((arguments[i__49859__auto___67931]));

var G__67932 = (i__49859__auto___67931 + (1));
i__49859__auto___67931 = G__67932;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq67929){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67929));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67934 = arguments.length;
var i__49859__auto___67935 = (0);
while(true){
if((i__49859__auto___67935 < len__49858__auto___67934)){
args__49865__auto__.push((arguments[i__49859__auto___67935]));

var G__67936 = (i__49859__auto___67935 + (1));
i__49859__auto___67935 = G__67936;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq67933){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67933));
});

var g_QMARK__67937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_67938 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__67937){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__67937))
,null));
var mkg_67939 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__67937,g_67938){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__67937,g_67938))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__67937,g_67938,mkg_67939){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__67937).call(null,x);
});})(g_QMARK__67937,g_67938,mkg_67939))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__67937,g_67938,mkg_67939){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_67939).call(null,gfn);
});})(g_QMARK__67937,g_67938,mkg_67939))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__67937,g_67938,mkg_67939){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_67938).call(null,generator);
});})(g_QMARK__67937,g_67938,mkg_67939))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__54550__auto___67959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__54550__auto___67959){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67960 = arguments.length;
var i__49859__auto___67961 = (0);
while(true){
if((i__49859__auto___67961 < len__49858__auto___67960)){
args__49865__auto__.push((arguments[i__49859__auto___67961]));

var G__67962 = (i__49859__auto___67961 + (1));
i__49859__auto___67961 = G__67962;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67959))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67959){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67959),args);
});})(g__54550__auto___67959))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__54550__auto___67959){
return (function (seq67940){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67940));
});})(g__54550__auto___67959))
;


var g__54550__auto___67963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__54550__auto___67963){
return (function cljs$spec$gen$alpha$list(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67964 = arguments.length;
var i__49859__auto___67965 = (0);
while(true){
if((i__49859__auto___67965 < len__49858__auto___67964)){
args__49865__auto__.push((arguments[i__49859__auto___67965]));

var G__67966 = (i__49859__auto___67965 + (1));
i__49859__auto___67965 = G__67966;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67963))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67963){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67963),args);
});})(g__54550__auto___67963))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__54550__auto___67963){
return (function (seq67941){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67941));
});})(g__54550__auto___67963))
;


var g__54550__auto___67967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__54550__auto___67967){
return (function cljs$spec$gen$alpha$map(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67968 = arguments.length;
var i__49859__auto___67969 = (0);
while(true){
if((i__49859__auto___67969 < len__49858__auto___67968)){
args__49865__auto__.push((arguments[i__49859__auto___67969]));

var G__67970 = (i__49859__auto___67969 + (1));
i__49859__auto___67969 = G__67970;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67967))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67967){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67967),args);
});})(g__54550__auto___67967))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__54550__auto___67967){
return (function (seq67942){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67942));
});})(g__54550__auto___67967))
;


var g__54550__auto___67971 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__54550__auto___67971){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67972 = arguments.length;
var i__49859__auto___67973 = (0);
while(true){
if((i__49859__auto___67973 < len__49858__auto___67972)){
args__49865__auto__.push((arguments[i__49859__auto___67973]));

var G__67974 = (i__49859__auto___67973 + (1));
i__49859__auto___67973 = G__67974;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67971))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67971){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67971),args);
});})(g__54550__auto___67971))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__54550__auto___67971){
return (function (seq67943){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67943));
});})(g__54550__auto___67971))
;


var g__54550__auto___67975 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__54550__auto___67975){
return (function cljs$spec$gen$alpha$set(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67976 = arguments.length;
var i__49859__auto___67977 = (0);
while(true){
if((i__49859__auto___67977 < len__49858__auto___67976)){
args__49865__auto__.push((arguments[i__49859__auto___67977]));

var G__67978 = (i__49859__auto___67977 + (1));
i__49859__auto___67977 = G__67978;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67975))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67975){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67975),args);
});})(g__54550__auto___67975))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__54550__auto___67975){
return (function (seq67944){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67944));
});})(g__54550__auto___67975))
;


var g__54550__auto___67979 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__54550__auto___67979){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67980 = arguments.length;
var i__49859__auto___67981 = (0);
while(true){
if((i__49859__auto___67981 < len__49858__auto___67980)){
args__49865__auto__.push((arguments[i__49859__auto___67981]));

var G__67982 = (i__49859__auto___67981 + (1));
i__49859__auto___67981 = G__67982;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67979))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67979){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67979),args);
});})(g__54550__auto___67979))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__54550__auto___67979){
return (function (seq67945){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67945));
});})(g__54550__auto___67979))
;


var g__54550__auto___67983 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__54550__auto___67983){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67984 = arguments.length;
var i__49859__auto___67985 = (0);
while(true){
if((i__49859__auto___67985 < len__49858__auto___67984)){
args__49865__auto__.push((arguments[i__49859__auto___67985]));

var G__67986 = (i__49859__auto___67985 + (1));
i__49859__auto___67985 = G__67986;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67983))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67983){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67983),args);
});})(g__54550__auto___67983))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__54550__auto___67983){
return (function (seq67946){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67946));
});})(g__54550__auto___67983))
;


var g__54550__auto___67987 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__54550__auto___67987){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67988 = arguments.length;
var i__49859__auto___67989 = (0);
while(true){
if((i__49859__auto___67989 < len__49858__auto___67988)){
args__49865__auto__.push((arguments[i__49859__auto___67989]));

var G__67990 = (i__49859__auto___67989 + (1));
i__49859__auto___67989 = G__67990;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67987))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67987){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67987),args);
});})(g__54550__auto___67987))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__54550__auto___67987){
return (function (seq67947){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67947));
});})(g__54550__auto___67987))
;


var g__54550__auto___67991 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__54550__auto___67991){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67992 = arguments.length;
var i__49859__auto___67993 = (0);
while(true){
if((i__49859__auto___67993 < len__49858__auto___67992)){
args__49865__auto__.push((arguments[i__49859__auto___67993]));

var G__67994 = (i__49859__auto___67993 + (1));
i__49859__auto___67993 = G__67994;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67991))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67991){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67991),args);
});})(g__54550__auto___67991))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__54550__auto___67991){
return (function (seq67948){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67948));
});})(g__54550__auto___67991))
;


var g__54550__auto___67995 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__54550__auto___67995){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67996 = arguments.length;
var i__49859__auto___67997 = (0);
while(true){
if((i__49859__auto___67997 < len__49858__auto___67996)){
args__49865__auto__.push((arguments[i__49859__auto___67997]));

var G__67998 = (i__49859__auto___67997 + (1));
i__49859__auto___67997 = G__67998;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67995))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67995){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67995),args);
});})(g__54550__auto___67995))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__54550__auto___67995){
return (function (seq67949){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67949));
});})(g__54550__auto___67995))
;


var g__54550__auto___67999 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__54550__auto___67999){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68000 = arguments.length;
var i__49859__auto___68001 = (0);
while(true){
if((i__49859__auto___68001 < len__49858__auto___68000)){
args__49865__auto__.push((arguments[i__49859__auto___68001]));

var G__68002 = (i__49859__auto___68001 + (1));
i__49859__auto___68001 = G__68002;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___67999))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___67999){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___67999),args);
});})(g__54550__auto___67999))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__54550__auto___67999){
return (function (seq67950){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67950));
});})(g__54550__auto___67999))
;


var g__54550__auto___68003 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__54550__auto___68003){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68004 = arguments.length;
var i__49859__auto___68005 = (0);
while(true){
if((i__49859__auto___68005 < len__49858__auto___68004)){
args__49865__auto__.push((arguments[i__49859__auto___68005]));

var G__68006 = (i__49859__auto___68005 + (1));
i__49859__auto___68005 = G__68006;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68003))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68003){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68003),args);
});})(g__54550__auto___68003))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__54550__auto___68003){
return (function (seq67951){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67951));
});})(g__54550__auto___68003))
;


var g__54550__auto___68007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__54550__auto___68007){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68008 = arguments.length;
var i__49859__auto___68009 = (0);
while(true){
if((i__49859__auto___68009 < len__49858__auto___68008)){
args__49865__auto__.push((arguments[i__49859__auto___68009]));

var G__68010 = (i__49859__auto___68009 + (1));
i__49859__auto___68009 = G__68010;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68007))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68007){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68007),args);
});})(g__54550__auto___68007))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__54550__auto___68007){
return (function (seq67952){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67952));
});})(g__54550__auto___68007))
;


var g__54550__auto___68011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__54550__auto___68011){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68012 = arguments.length;
var i__49859__auto___68013 = (0);
while(true){
if((i__49859__auto___68013 < len__49858__auto___68012)){
args__49865__auto__.push((arguments[i__49859__auto___68013]));

var G__68014 = (i__49859__auto___68013 + (1));
i__49859__auto___68013 = G__68014;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68011))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68011){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68011),args);
});})(g__54550__auto___68011))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__54550__auto___68011){
return (function (seq67953){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67953));
});})(g__54550__auto___68011))
;


var g__54550__auto___68015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__54550__auto___68015){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68016 = arguments.length;
var i__49859__auto___68017 = (0);
while(true){
if((i__49859__auto___68017 < len__49858__auto___68016)){
args__49865__auto__.push((arguments[i__49859__auto___68017]));

var G__68018 = (i__49859__auto___68017 + (1));
i__49859__auto___68017 = G__68018;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68015))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68015){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68015),args);
});})(g__54550__auto___68015))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__54550__auto___68015){
return (function (seq67954){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67954));
});})(g__54550__auto___68015))
;


var g__54550__auto___68019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__54550__auto___68019){
return (function cljs$spec$gen$alpha$return(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68020 = arguments.length;
var i__49859__auto___68021 = (0);
while(true){
if((i__49859__auto___68021 < len__49858__auto___68020)){
args__49865__auto__.push((arguments[i__49859__auto___68021]));

var G__68022 = (i__49859__auto___68021 + (1));
i__49859__auto___68021 = G__68022;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68019))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68019),args);
});})(g__54550__auto___68019))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__54550__auto___68019){
return (function (seq67955){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67955));
});})(g__54550__auto___68019))
;


var g__54550__auto___68023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__54550__auto___68023){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68024 = arguments.length;
var i__49859__auto___68025 = (0);
while(true){
if((i__49859__auto___68025 < len__49858__auto___68024)){
args__49865__auto__.push((arguments[i__49859__auto___68025]));

var G__68026 = (i__49859__auto___68025 + (1));
i__49859__auto___68025 = G__68026;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68023))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68023),args);
});})(g__54550__auto___68023))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__54550__auto___68023){
return (function (seq67956){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67956));
});})(g__54550__auto___68023))
;


var g__54550__auto___68027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__54550__auto___68027){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68028 = arguments.length;
var i__49859__auto___68029 = (0);
while(true){
if((i__49859__auto___68029 < len__49858__auto___68028)){
args__49865__auto__.push((arguments[i__49859__auto___68029]));

var G__68030 = (i__49859__auto___68029 + (1));
i__49859__auto___68029 = G__68030;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68027))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68027),args);
});})(g__54550__auto___68027))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__54550__auto___68027){
return (function (seq67957){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67957));
});})(g__54550__auto___68027))
;


var g__54550__auto___68031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__54550__auto___68031){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68032 = arguments.length;
var i__49859__auto___68033 = (0);
while(true){
if((i__49859__auto___68033 < len__49858__auto___68032)){
args__49865__auto__.push((arguments[i__49859__auto___68033]));

var G__68034 = (i__49859__auto___68033 + (1));
i__49859__auto___68033 = G__68034;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54550__auto___68031))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54550__auto___68031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54550__auto___68031),args);
});})(g__54550__auto___68031))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__54550__auto___68031){
return (function (seq67958){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67958));
});})(g__54550__auto___68031))
;

var g__54563__auto___68056 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__54563__auto___68056){
return (function cljs$spec$gen$alpha$any(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68057 = arguments.length;
var i__49859__auto___68058 = (0);
while(true){
if((i__49859__auto___68058 < len__49858__auto___68057)){
args__49865__auto__.push((arguments[i__49859__auto___68058]));

var G__68059 = (i__49859__auto___68058 + (1));
i__49859__auto___68058 = G__68059;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68056))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68056){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68056);
});})(g__54563__auto___68056))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__54563__auto___68056){
return (function (seq68035){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68035));
});})(g__54563__auto___68056))
;


var g__54563__auto___68060 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__54563__auto___68060){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68061 = arguments.length;
var i__49859__auto___68062 = (0);
while(true){
if((i__49859__auto___68062 < len__49858__auto___68061)){
args__49865__auto__.push((arguments[i__49859__auto___68062]));

var G__68063 = (i__49859__auto___68062 + (1));
i__49859__auto___68062 = G__68063;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68060))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68060){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68060);
});})(g__54563__auto___68060))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__54563__auto___68060){
return (function (seq68036){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68036));
});})(g__54563__auto___68060))
;


var g__54563__auto___68064 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__54563__auto___68064){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68065 = arguments.length;
var i__49859__auto___68066 = (0);
while(true){
if((i__49859__auto___68066 < len__49858__auto___68065)){
args__49865__auto__.push((arguments[i__49859__auto___68066]));

var G__68067 = (i__49859__auto___68066 + (1));
i__49859__auto___68066 = G__68067;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68064))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68064){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68064);
});})(g__54563__auto___68064))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__54563__auto___68064){
return (function (seq68037){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68037));
});})(g__54563__auto___68064))
;


var g__54563__auto___68068 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__54563__auto___68068){
return (function cljs$spec$gen$alpha$char(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68069 = arguments.length;
var i__49859__auto___68070 = (0);
while(true){
if((i__49859__auto___68070 < len__49858__auto___68069)){
args__49865__auto__.push((arguments[i__49859__auto___68070]));

var G__68071 = (i__49859__auto___68070 + (1));
i__49859__auto___68070 = G__68071;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68068))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68068){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68068);
});})(g__54563__auto___68068))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__54563__auto___68068){
return (function (seq68038){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68038));
});})(g__54563__auto___68068))
;


var g__54563__auto___68072 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__54563__auto___68072){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68073 = arguments.length;
var i__49859__auto___68074 = (0);
while(true){
if((i__49859__auto___68074 < len__49858__auto___68073)){
args__49865__auto__.push((arguments[i__49859__auto___68074]));

var G__68075 = (i__49859__auto___68074 + (1));
i__49859__auto___68074 = G__68075;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68072))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68072){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68072);
});})(g__54563__auto___68072))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__54563__auto___68072){
return (function (seq68039){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68039));
});})(g__54563__auto___68072))
;


var g__54563__auto___68076 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__54563__auto___68076){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68077 = arguments.length;
var i__49859__auto___68078 = (0);
while(true){
if((i__49859__auto___68078 < len__49858__auto___68077)){
args__49865__auto__.push((arguments[i__49859__auto___68078]));

var G__68079 = (i__49859__auto___68078 + (1));
i__49859__auto___68078 = G__68079;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68076))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68076){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68076);
});})(g__54563__auto___68076))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__54563__auto___68076){
return (function (seq68040){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68040));
});})(g__54563__auto___68076))
;


var g__54563__auto___68080 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__54563__auto___68080){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68081 = arguments.length;
var i__49859__auto___68082 = (0);
while(true){
if((i__49859__auto___68082 < len__49858__auto___68081)){
args__49865__auto__.push((arguments[i__49859__auto___68082]));

var G__68083 = (i__49859__auto___68082 + (1));
i__49859__auto___68082 = G__68083;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68080))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68080){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68080);
});})(g__54563__auto___68080))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__54563__auto___68080){
return (function (seq68041){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68041));
});})(g__54563__auto___68080))
;


var g__54563__auto___68084 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__54563__auto___68084){
return (function cljs$spec$gen$alpha$double(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68085 = arguments.length;
var i__49859__auto___68086 = (0);
while(true){
if((i__49859__auto___68086 < len__49858__auto___68085)){
args__49865__auto__.push((arguments[i__49859__auto___68086]));

var G__68087 = (i__49859__auto___68086 + (1));
i__49859__auto___68086 = G__68087;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68084))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68084){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68084);
});})(g__54563__auto___68084))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__54563__auto___68084){
return (function (seq68042){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68042));
});})(g__54563__auto___68084))
;


var g__54563__auto___68088 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__54563__auto___68088){
return (function cljs$spec$gen$alpha$int(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68089 = arguments.length;
var i__49859__auto___68090 = (0);
while(true){
if((i__49859__auto___68090 < len__49858__auto___68089)){
args__49865__auto__.push((arguments[i__49859__auto___68090]));

var G__68091 = (i__49859__auto___68090 + (1));
i__49859__auto___68090 = G__68091;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68088))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68088){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68088);
});})(g__54563__auto___68088))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__54563__auto___68088){
return (function (seq68043){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68043));
});})(g__54563__auto___68088))
;


var g__54563__auto___68092 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__54563__auto___68092){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68093 = arguments.length;
var i__49859__auto___68094 = (0);
while(true){
if((i__49859__auto___68094 < len__49858__auto___68093)){
args__49865__auto__.push((arguments[i__49859__auto___68094]));

var G__68095 = (i__49859__auto___68094 + (1));
i__49859__auto___68094 = G__68095;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68092))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68092){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68092);
});})(g__54563__auto___68092))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__54563__auto___68092){
return (function (seq68044){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68044));
});})(g__54563__auto___68092))
;


var g__54563__auto___68096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__54563__auto___68096){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68097 = arguments.length;
var i__49859__auto___68098 = (0);
while(true){
if((i__49859__auto___68098 < len__49858__auto___68097)){
args__49865__auto__.push((arguments[i__49859__auto___68098]));

var G__68099 = (i__49859__auto___68098 + (1));
i__49859__auto___68098 = G__68099;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68096))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68096){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68096);
});})(g__54563__auto___68096))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__54563__auto___68096){
return (function (seq68045){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68045));
});})(g__54563__auto___68096))
;


var g__54563__auto___68100 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__54563__auto___68100){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68101 = arguments.length;
var i__49859__auto___68102 = (0);
while(true){
if((i__49859__auto___68102 < len__49858__auto___68101)){
args__49865__auto__.push((arguments[i__49859__auto___68102]));

var G__68103 = (i__49859__auto___68102 + (1));
i__49859__auto___68102 = G__68103;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68100))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68100){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68100);
});})(g__54563__auto___68100))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__54563__auto___68100){
return (function (seq68046){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68046));
});})(g__54563__auto___68100))
;


var g__54563__auto___68104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__54563__auto___68104){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68105 = arguments.length;
var i__49859__auto___68106 = (0);
while(true){
if((i__49859__auto___68106 < len__49858__auto___68105)){
args__49865__auto__.push((arguments[i__49859__auto___68106]));

var G__68107 = (i__49859__auto___68106 + (1));
i__49859__auto___68106 = G__68107;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68104))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68104){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68104);
});})(g__54563__auto___68104))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__54563__auto___68104){
return (function (seq68047){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68047));
});})(g__54563__auto___68104))
;


var g__54563__auto___68108 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__54563__auto___68108){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68109 = arguments.length;
var i__49859__auto___68110 = (0);
while(true){
if((i__49859__auto___68110 < len__49858__auto___68109)){
args__49865__auto__.push((arguments[i__49859__auto___68110]));

var G__68111 = (i__49859__auto___68110 + (1));
i__49859__auto___68110 = G__68111;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68108))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68108){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68108);
});})(g__54563__auto___68108))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__54563__auto___68108){
return (function (seq68048){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68048));
});})(g__54563__auto___68108))
;


var g__54563__auto___68112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__54563__auto___68112){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68113 = arguments.length;
var i__49859__auto___68114 = (0);
while(true){
if((i__49859__auto___68114 < len__49858__auto___68113)){
args__49865__auto__.push((arguments[i__49859__auto___68114]));

var G__68115 = (i__49859__auto___68114 + (1));
i__49859__auto___68114 = G__68115;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68112))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68112){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68112);
});})(g__54563__auto___68112))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__54563__auto___68112){
return (function (seq68049){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68049));
});})(g__54563__auto___68112))
;


var g__54563__auto___68116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__54563__auto___68116){
return (function cljs$spec$gen$alpha$string(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68117 = arguments.length;
var i__49859__auto___68118 = (0);
while(true){
if((i__49859__auto___68118 < len__49858__auto___68117)){
args__49865__auto__.push((arguments[i__49859__auto___68118]));

var G__68119 = (i__49859__auto___68118 + (1));
i__49859__auto___68118 = G__68119;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68116))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68116){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68116);
});})(g__54563__auto___68116))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__54563__auto___68116){
return (function (seq68050){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68050));
});})(g__54563__auto___68116))
;


var g__54563__auto___68120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__54563__auto___68120){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68121 = arguments.length;
var i__49859__auto___68122 = (0);
while(true){
if((i__49859__auto___68122 < len__49858__auto___68121)){
args__49865__auto__.push((arguments[i__49859__auto___68122]));

var G__68123 = (i__49859__auto___68122 + (1));
i__49859__auto___68122 = G__68123;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68120))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68120){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68120);
});})(g__54563__auto___68120))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__54563__auto___68120){
return (function (seq68051){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68051));
});})(g__54563__auto___68120))
;


var g__54563__auto___68124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__54563__auto___68124){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68125 = arguments.length;
var i__49859__auto___68126 = (0);
while(true){
if((i__49859__auto___68126 < len__49858__auto___68125)){
args__49865__auto__.push((arguments[i__49859__auto___68126]));

var G__68127 = (i__49859__auto___68126 + (1));
i__49859__auto___68126 = G__68127;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68124))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68124){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68124);
});})(g__54563__auto___68124))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__54563__auto___68124){
return (function (seq68052){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68052));
});})(g__54563__auto___68124))
;


var g__54563__auto___68128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__54563__auto___68128){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68129 = arguments.length;
var i__49859__auto___68130 = (0);
while(true){
if((i__49859__auto___68130 < len__49858__auto___68129)){
args__49865__auto__.push((arguments[i__49859__auto___68130]));

var G__68131 = (i__49859__auto___68130 + (1));
i__49859__auto___68130 = G__68131;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68128))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68128){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68128);
});})(g__54563__auto___68128))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__54563__auto___68128){
return (function (seq68053){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68053));
});})(g__54563__auto___68128))
;


var g__54563__auto___68132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__54563__auto___68132){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68133 = arguments.length;
var i__49859__auto___68134 = (0);
while(true){
if((i__49859__auto___68134 < len__49858__auto___68133)){
args__49865__auto__.push((arguments[i__49859__auto___68134]));

var G__68135 = (i__49859__auto___68134 + (1));
i__49859__auto___68134 = G__68135;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68132))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68132){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68132);
});})(g__54563__auto___68132))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__54563__auto___68132){
return (function (seq68054){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68054));
});})(g__54563__auto___68132))
;


var g__54563__auto___68136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__54563__auto___68136){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68137 = arguments.length;
var i__49859__auto___68138 = (0);
while(true){
if((i__49859__auto___68138 < len__49858__auto___68137)){
args__49865__auto__.push((arguments[i__49859__auto___68138]));

var G__68139 = (i__49859__auto___68138 + (1));
i__49859__auto___68138 = G__68139;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});})(g__54563__auto___68136))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54563__auto___68136){
return (function (args){
return cljs.core.deref.call(null,g__54563__auto___68136);
});})(g__54563__auto___68136))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__54563__auto___68136){
return (function (seq68055){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68055));
});})(g__54563__auto___68136))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__49865__auto__ = [];
var len__49858__auto___68142 = arguments.length;
var i__49859__auto___68143 = (0);
while(true){
if((i__49859__auto___68143 < len__49858__auto___68142)){
args__49865__auto__.push((arguments[i__49859__auto___68143]));

var G__68144 = (i__49859__auto___68143 + (1));
i__49859__auto___68143 = G__68144;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__68140_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__68140_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq68141){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68141));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__68145_SHARP_){
return (new Date(p1__68145_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1515662039766
