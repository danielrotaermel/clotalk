// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__48579__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__48579__auto__){
return or__48579__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__48579__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__72122_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__72122_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__72123 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__72124 = null;
var count__72125 = (0);
var i__72126 = (0);
while(true){
if((i__72126 < count__72125)){
var n = cljs.core._nth.call(null,chunk__72124,i__72126);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72127 = seq__72123;
var G__72128 = chunk__72124;
var G__72129 = count__72125;
var G__72130 = (i__72126 + (1));
seq__72123 = G__72127;
chunk__72124 = G__72128;
count__72125 = G__72129;
i__72126 = G__72130;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__72123);
if(temp__5457__auto__){
var seq__72123__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72123__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__72123__$1);
var G__72131 = cljs.core.chunk_rest.call(null,seq__72123__$1);
var G__72132 = c__49510__auto__;
var G__72133 = cljs.core.count.call(null,c__49510__auto__);
var G__72134 = (0);
seq__72123 = G__72131;
chunk__72124 = G__72132;
count__72125 = G__72133;
i__72126 = G__72134;
continue;
} else {
var n = cljs.core.first.call(null,seq__72123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72135 = cljs.core.next.call(null,seq__72123__$1);
var G__72136 = null;
var G__72137 = (0);
var G__72138 = (0);
seq__72123 = G__72135;
chunk__72124 = G__72136;
count__72125 = G__72137;
i__72126 = G__72138;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__72139){
var vec__72140 = p__72139;
var _ = cljs.core.nth.call(null,vec__72140,(0),null);
var v = cljs.core.nth.call(null,vec__72140,(1),null);
var and__48567__auto__ = v;
if(cljs.core.truth_(and__48567__auto__)){
return v.call(null,dep);
} else {
return and__48567__auto__;
}
}),cljs.core.filter.call(null,(function (p__72143){
var vec__72144 = p__72143;
var k = cljs.core.nth.call(null,vec__72144,(0),null);
var v = cljs.core.nth.call(null,vec__72144,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__72156_72164 = cljs.core.seq.call(null,deps);
var chunk__72157_72165 = null;
var count__72158_72166 = (0);
var i__72159_72167 = (0);
while(true){
if((i__72159_72167 < count__72158_72166)){
var dep_72168 = cljs.core._nth.call(null,chunk__72157_72165,i__72159_72167);
if(cljs.core.truth_((function (){var and__48567__auto__ = dep_72168;
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_72168));
} else {
return and__48567__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_72168,(depth + (1)),state);
} else {
}

var G__72169 = seq__72156_72164;
var G__72170 = chunk__72157_72165;
var G__72171 = count__72158_72166;
var G__72172 = (i__72159_72167 + (1));
seq__72156_72164 = G__72169;
chunk__72157_72165 = G__72170;
count__72158_72166 = G__72171;
i__72159_72167 = G__72172;
continue;
} else {
var temp__5457__auto___72173 = cljs.core.seq.call(null,seq__72156_72164);
if(temp__5457__auto___72173){
var seq__72156_72174__$1 = temp__5457__auto___72173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72156_72174__$1)){
var c__49510__auto___72175 = cljs.core.chunk_first.call(null,seq__72156_72174__$1);
var G__72176 = cljs.core.chunk_rest.call(null,seq__72156_72174__$1);
var G__72177 = c__49510__auto___72175;
var G__72178 = cljs.core.count.call(null,c__49510__auto___72175);
var G__72179 = (0);
seq__72156_72164 = G__72176;
chunk__72157_72165 = G__72177;
count__72158_72166 = G__72178;
i__72159_72167 = G__72179;
continue;
} else {
var dep_72180 = cljs.core.first.call(null,seq__72156_72174__$1);
if(cljs.core.truth_((function (){var and__48567__auto__ = dep_72180;
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_72180));
} else {
return and__48567__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_72180,(depth + (1)),state);
} else {
}

var G__72181 = cljs.core.next.call(null,seq__72156_72174__$1);
var G__72182 = null;
var G__72183 = (0);
var G__72184 = (0);
seq__72156_72164 = G__72181;
chunk__72157_72165 = G__72182;
count__72158_72166 = G__72183;
i__72159_72167 = G__72184;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__72160){
var vec__72161 = p__72160;
var seq__72162 = cljs.core.seq.call(null,vec__72161);
var first__72163 = cljs.core.first.call(null,seq__72162);
var seq__72162__$1 = cljs.core.next.call(null,seq__72162);
var x = first__72163;
var xs = seq__72162__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__72161,seq__72162,first__72163,seq__72162__$1,x,xs,get_deps__$1){
return (function (p1__72147_SHARP_){
return clojure.set.difference.call(null,p1__72147_SHARP_,x);
});})(vec__72161,seq__72162,first__72163,seq__72162__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__72185 = cljs.core.seq.call(null,provides);
var chunk__72186 = null;
var count__72187 = (0);
var i__72188 = (0);
while(true){
if((i__72188 < count__72187)){
var prov = cljs.core._nth.call(null,chunk__72186,i__72188);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72189_72197 = cljs.core.seq.call(null,requires);
var chunk__72190_72198 = null;
var count__72191_72199 = (0);
var i__72192_72200 = (0);
while(true){
if((i__72192_72200 < count__72191_72199)){
var req_72201 = cljs.core._nth.call(null,chunk__72190_72198,i__72192_72200);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72201,prov);

var G__72202 = seq__72189_72197;
var G__72203 = chunk__72190_72198;
var G__72204 = count__72191_72199;
var G__72205 = (i__72192_72200 + (1));
seq__72189_72197 = G__72202;
chunk__72190_72198 = G__72203;
count__72191_72199 = G__72204;
i__72192_72200 = G__72205;
continue;
} else {
var temp__5457__auto___72206 = cljs.core.seq.call(null,seq__72189_72197);
if(temp__5457__auto___72206){
var seq__72189_72207__$1 = temp__5457__auto___72206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72189_72207__$1)){
var c__49510__auto___72208 = cljs.core.chunk_first.call(null,seq__72189_72207__$1);
var G__72209 = cljs.core.chunk_rest.call(null,seq__72189_72207__$1);
var G__72210 = c__49510__auto___72208;
var G__72211 = cljs.core.count.call(null,c__49510__auto___72208);
var G__72212 = (0);
seq__72189_72197 = G__72209;
chunk__72190_72198 = G__72210;
count__72191_72199 = G__72211;
i__72192_72200 = G__72212;
continue;
} else {
var req_72213 = cljs.core.first.call(null,seq__72189_72207__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72213,prov);

var G__72214 = cljs.core.next.call(null,seq__72189_72207__$1);
var G__72215 = null;
var G__72216 = (0);
var G__72217 = (0);
seq__72189_72197 = G__72214;
chunk__72190_72198 = G__72215;
count__72191_72199 = G__72216;
i__72192_72200 = G__72217;
continue;
}
} else {
}
}
break;
}

var G__72218 = seq__72185;
var G__72219 = chunk__72186;
var G__72220 = count__72187;
var G__72221 = (i__72188 + (1));
seq__72185 = G__72218;
chunk__72186 = G__72219;
count__72187 = G__72220;
i__72188 = G__72221;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__72185);
if(temp__5457__auto__){
var seq__72185__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72185__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__72185__$1);
var G__72222 = cljs.core.chunk_rest.call(null,seq__72185__$1);
var G__72223 = c__49510__auto__;
var G__72224 = cljs.core.count.call(null,c__49510__auto__);
var G__72225 = (0);
seq__72185 = G__72222;
chunk__72186 = G__72223;
count__72187 = G__72224;
i__72188 = G__72225;
continue;
} else {
var prov = cljs.core.first.call(null,seq__72185__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72193_72226 = cljs.core.seq.call(null,requires);
var chunk__72194_72227 = null;
var count__72195_72228 = (0);
var i__72196_72229 = (0);
while(true){
if((i__72196_72229 < count__72195_72228)){
var req_72230 = cljs.core._nth.call(null,chunk__72194_72227,i__72196_72229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72230,prov);

var G__72231 = seq__72193_72226;
var G__72232 = chunk__72194_72227;
var G__72233 = count__72195_72228;
var G__72234 = (i__72196_72229 + (1));
seq__72193_72226 = G__72231;
chunk__72194_72227 = G__72232;
count__72195_72228 = G__72233;
i__72196_72229 = G__72234;
continue;
} else {
var temp__5457__auto___72235__$1 = cljs.core.seq.call(null,seq__72193_72226);
if(temp__5457__auto___72235__$1){
var seq__72193_72236__$1 = temp__5457__auto___72235__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72193_72236__$1)){
var c__49510__auto___72237 = cljs.core.chunk_first.call(null,seq__72193_72236__$1);
var G__72238 = cljs.core.chunk_rest.call(null,seq__72193_72236__$1);
var G__72239 = c__49510__auto___72237;
var G__72240 = cljs.core.count.call(null,c__49510__auto___72237);
var G__72241 = (0);
seq__72193_72226 = G__72238;
chunk__72194_72227 = G__72239;
count__72195_72228 = G__72240;
i__72196_72229 = G__72241;
continue;
} else {
var req_72242 = cljs.core.first.call(null,seq__72193_72236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72242,prov);

var G__72243 = cljs.core.next.call(null,seq__72193_72236__$1);
var G__72244 = null;
var G__72245 = (0);
var G__72246 = (0);
seq__72193_72226 = G__72243;
chunk__72194_72227 = G__72244;
count__72195_72228 = G__72245;
i__72196_72229 = G__72246;
continue;
}
} else {
}
}
break;
}

var G__72247 = cljs.core.next.call(null,seq__72185__$1);
var G__72248 = null;
var G__72249 = (0);
var G__72250 = (0);
seq__72185 = G__72247;
chunk__72186 = G__72248;
count__72187 = G__72249;
i__72188 = G__72250;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__72251_72255 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__72252_72256 = null;
var count__72253_72257 = (0);
var i__72254_72258 = (0);
while(true){
if((i__72254_72258 < count__72253_72257)){
var ns_72259 = cljs.core._nth.call(null,chunk__72252_72256,i__72254_72258);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_72259);

var G__72260 = seq__72251_72255;
var G__72261 = chunk__72252_72256;
var G__72262 = count__72253_72257;
var G__72263 = (i__72254_72258 + (1));
seq__72251_72255 = G__72260;
chunk__72252_72256 = G__72261;
count__72253_72257 = G__72262;
i__72254_72258 = G__72263;
continue;
} else {
var temp__5457__auto___72264 = cljs.core.seq.call(null,seq__72251_72255);
if(temp__5457__auto___72264){
var seq__72251_72265__$1 = temp__5457__auto___72264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72251_72265__$1)){
var c__49510__auto___72266 = cljs.core.chunk_first.call(null,seq__72251_72265__$1);
var G__72267 = cljs.core.chunk_rest.call(null,seq__72251_72265__$1);
var G__72268 = c__49510__auto___72266;
var G__72269 = cljs.core.count.call(null,c__49510__auto___72266);
var G__72270 = (0);
seq__72251_72255 = G__72267;
chunk__72252_72256 = G__72268;
count__72253_72257 = G__72269;
i__72254_72258 = G__72270;
continue;
} else {
var ns_72271 = cljs.core.first.call(null,seq__72251_72265__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_72271);

var G__72272 = cljs.core.next.call(null,seq__72251_72265__$1);
var G__72273 = null;
var G__72274 = (0);
var G__72275 = (0);
seq__72251_72255 = G__72272;
chunk__72252_72256 = G__72273;
count__72253_72257 = G__72274;
i__72254_72258 = G__72275;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__48579__auto__ = goog.require__;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__72276__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__72276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72277__i = 0, G__72277__a = new Array(arguments.length -  0);
while (G__72277__i < G__72277__a.length) {G__72277__a[G__72277__i] = arguments[G__72277__i + 0]; ++G__72277__i;}
  args = new cljs.core.IndexedSeq(G__72277__a,0,null);
} 
return G__72276__delegate.call(this,args);};
G__72276.cljs$lang$maxFixedArity = 0;
G__72276.cljs$lang$applyTo = (function (arglist__72278){
var args = cljs.core.seq(arglist__72278);
return G__72276__delegate(args);
});
G__72276.cljs$core$IFn$_invoke$arity$variadic = G__72276__delegate;
return G__72276;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__72279_SHARP_,p2__72280_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72279_SHARP_)].join('')),p2__72280_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__72281_SHARP_,p2__72282_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72281_SHARP_)].join(''),p2__72282_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__72283 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__72283.addCallback(((function (G__72283){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__72283))
);

G__72283.addErrback(((function (G__72283){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__72283))
);

return G__72283;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e72284){if((e72284 instanceof Error)){
var e = e72284;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e72284;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e72285){if((e72285 instanceof Error)){
var e = e72285;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e72285;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__72286 = cljs.core._EQ_;
var expr__72287 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__72286.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__72287))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__72286.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__72287))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__72286.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__72287))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__72286,expr__72287){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__72286,expr__72287))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__72289,callback){
var map__72290 = p__72289;
var map__72290__$1 = ((((!((map__72290 == null)))?((((map__72290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72290):map__72290);
var file_msg = map__72290__$1;
var request_url = cljs.core.get.call(null,map__72290__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__48579__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__72290,map__72290__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__72290,map__72290__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__){
return (function (state_72330){
var state_val_72331 = (state_72330[(1)]);
if((state_val_72331 === (7))){
var inst_72326 = (state_72330[(2)]);
var state_72330__$1 = state_72330;
var statearr_72332_72359 = state_72330__$1;
(statearr_72332_72359[(2)] = inst_72326);

(statearr_72332_72359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (1))){
var state_72330__$1 = state_72330;
var statearr_72333_72360 = state_72330__$1;
(statearr_72333_72360[(2)] = null);

(statearr_72333_72360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (4))){
var inst_72294 = (state_72330[(7)]);
var inst_72294__$1 = (state_72330[(2)]);
var state_72330__$1 = (function (){var statearr_72334 = state_72330;
(statearr_72334[(7)] = inst_72294__$1);

return statearr_72334;
})();
if(cljs.core.truth_(inst_72294__$1)){
var statearr_72335_72361 = state_72330__$1;
(statearr_72335_72361[(1)] = (5));

} else {
var statearr_72336_72362 = state_72330__$1;
(statearr_72336_72362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (15))){
var inst_72308 = (state_72330[(8)]);
var inst_72311 = (state_72330[(9)]);
var inst_72313 = inst_72311.call(null,inst_72308);
var state_72330__$1 = state_72330;
var statearr_72337_72363 = state_72330__$1;
(statearr_72337_72363[(2)] = inst_72313);

(statearr_72337_72363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (13))){
var inst_72320 = (state_72330[(2)]);
var state_72330__$1 = state_72330;
var statearr_72338_72364 = state_72330__$1;
(statearr_72338_72364[(2)] = inst_72320);

(statearr_72338_72364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (6))){
var state_72330__$1 = state_72330;
var statearr_72339_72365 = state_72330__$1;
(statearr_72339_72365[(2)] = null);

(statearr_72339_72365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (17))){
var inst_72317 = (state_72330[(2)]);
var state_72330__$1 = state_72330;
var statearr_72340_72366 = state_72330__$1;
(statearr_72340_72366[(2)] = inst_72317);

(statearr_72340_72366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (3))){
var inst_72328 = (state_72330[(2)]);
var state_72330__$1 = state_72330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72330__$1,inst_72328);
} else {
if((state_val_72331 === (12))){
var state_72330__$1 = state_72330;
var statearr_72341_72367 = state_72330__$1;
(statearr_72341_72367[(2)] = null);

(statearr_72341_72367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (2))){
var state_72330__$1 = state_72330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72330__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_72331 === (11))){
var inst_72299 = (state_72330[(10)]);
var inst_72306 = figwheel.client.file_reloading.blocking_load.call(null,inst_72299);
var state_72330__$1 = state_72330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72330__$1,(14),inst_72306);
} else {
if((state_val_72331 === (9))){
var inst_72299 = (state_72330[(10)]);
var state_72330__$1 = state_72330;
if(cljs.core.truth_(inst_72299)){
var statearr_72342_72368 = state_72330__$1;
(statearr_72342_72368[(1)] = (11));

} else {
var statearr_72343_72369 = state_72330__$1;
(statearr_72343_72369[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (5))){
var inst_72300 = (state_72330[(11)]);
var inst_72294 = (state_72330[(7)]);
var inst_72299 = cljs.core.nth.call(null,inst_72294,(0),null);
var inst_72300__$1 = cljs.core.nth.call(null,inst_72294,(1),null);
var state_72330__$1 = (function (){var statearr_72344 = state_72330;
(statearr_72344[(11)] = inst_72300__$1);

(statearr_72344[(10)] = inst_72299);

return statearr_72344;
})();
if(cljs.core.truth_(inst_72300__$1)){
var statearr_72345_72370 = state_72330__$1;
(statearr_72345_72370[(1)] = (8));

} else {
var statearr_72346_72371 = state_72330__$1;
(statearr_72346_72371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (14))){
var inst_72299 = (state_72330[(10)]);
var inst_72311 = (state_72330[(9)]);
var inst_72308 = (state_72330[(2)]);
var inst_72309 = console.log("Loading!",inst_72299);
var inst_72310 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_72311__$1 = cljs.core.get.call(null,inst_72310,inst_72299);
var state_72330__$1 = (function (){var statearr_72347 = state_72330;
(statearr_72347[(8)] = inst_72308);

(statearr_72347[(12)] = inst_72309);

(statearr_72347[(9)] = inst_72311__$1);

return statearr_72347;
})();
if(cljs.core.truth_(inst_72311__$1)){
var statearr_72348_72372 = state_72330__$1;
(statearr_72348_72372[(1)] = (15));

} else {
var statearr_72349_72373 = state_72330__$1;
(statearr_72349_72373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (16))){
var inst_72308 = (state_72330[(8)]);
var inst_72315 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_72308);
var state_72330__$1 = state_72330;
var statearr_72350_72374 = state_72330__$1;
(statearr_72350_72374[(2)] = inst_72315);

(statearr_72350_72374[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (10))){
var inst_72322 = (state_72330[(2)]);
var state_72330__$1 = (function (){var statearr_72351 = state_72330;
(statearr_72351[(13)] = inst_72322);

return statearr_72351;
})();
var statearr_72352_72375 = state_72330__$1;
(statearr_72352_72375[(2)] = null);

(statearr_72352_72375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72331 === (8))){
var inst_72300 = (state_72330[(11)]);
var inst_72302 = console.log("Evaling!",inst_72300);
var inst_72303 = eval(inst_72300);
var state_72330__$1 = (function (){var statearr_72353 = state_72330;
(statearr_72353[(14)] = inst_72302);

return statearr_72353;
})();
var statearr_72354_72376 = state_72330__$1;
(statearr_72354_72376[(2)] = inst_72303);

(statearr_72354_72376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__59869__auto__))
;
return ((function (switch__59779__auto__,c__59869__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__59780__auto__ = null;
var figwheel$client$file_reloading$state_machine__59780__auto____0 = (function (){
var statearr_72355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72355[(0)] = figwheel$client$file_reloading$state_machine__59780__auto__);

(statearr_72355[(1)] = (1));

return statearr_72355;
});
var figwheel$client$file_reloading$state_machine__59780__auto____1 = (function (state_72330){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_72330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e72356){if((e72356 instanceof Object)){
var ex__59783__auto__ = e72356;
var statearr_72357_72377 = state_72330;
(statearr_72357_72377[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72378 = state_72330;
state_72330 = G__72378;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__59780__auto__ = function(state_72330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__59780__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__59780__auto____1.call(this,state_72330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__59780__auto____0;
figwheel$client$file_reloading$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__59780__auto____1;
return figwheel$client$file_reloading$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__))
})();
var state__59871__auto__ = (function (){var statearr_72358 = f__59870__auto__.call(null);
(statearr_72358[(6)] = c__59869__auto__);

return statearr_72358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__))
);

return c__59869__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__72380 = arguments.length;
switch (G__72380) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__72382,callback){
var map__72383 = p__72382;
var map__72383__$1 = ((((!((map__72383 == null)))?((((map__72383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72383):map__72383);
var file_msg = map__72383__$1;
var namespace = cljs.core.get.call(null,map__72383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__72383,map__72383__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__72383,map__72383__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__72385){
var map__72386 = p__72385;
var map__72386__$1 = ((((!((map__72386 == null)))?((((map__72386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72386):map__72386);
var file_msg = map__72386__$1;
var namespace = cljs.core.get.call(null,map__72386__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__72388){
var map__72389 = p__72388;
var map__72389__$1 = ((((!((map__72389 == null)))?((((map__72389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72389):map__72389);
var file_msg = map__72389__$1;
var namespace = cljs.core.get.call(null,map__72389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__48567__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__48567__auto__){
var or__48579__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__48567__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__72391,callback){
var map__72392 = p__72391;
var map__72392__$1 = ((((!((map__72392 == null)))?((((map__72392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72392):map__72392);
var file_msg = map__72392__$1;
var request_url = cljs.core.get.call(null,map__72392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__72392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__59869__auto___72442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___72442,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___72442,out){
return (function (state_72427){
var state_val_72428 = (state_72427[(1)]);
if((state_val_72428 === (1))){
var inst_72401 = cljs.core.seq.call(null,files);
var inst_72402 = cljs.core.first.call(null,inst_72401);
var inst_72403 = cljs.core.next.call(null,inst_72401);
var inst_72404 = files;
var state_72427__$1 = (function (){var statearr_72429 = state_72427;
(statearr_72429[(7)] = inst_72403);

(statearr_72429[(8)] = inst_72402);

(statearr_72429[(9)] = inst_72404);

return statearr_72429;
})();
var statearr_72430_72443 = state_72427__$1;
(statearr_72430_72443[(2)] = null);

(statearr_72430_72443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (2))){
var inst_72410 = (state_72427[(10)]);
var inst_72404 = (state_72427[(9)]);
var inst_72409 = cljs.core.seq.call(null,inst_72404);
var inst_72410__$1 = cljs.core.first.call(null,inst_72409);
var inst_72411 = cljs.core.next.call(null,inst_72409);
var inst_72412 = (inst_72410__$1 == null);
var inst_72413 = cljs.core.not.call(null,inst_72412);
var state_72427__$1 = (function (){var statearr_72431 = state_72427;
(statearr_72431[(10)] = inst_72410__$1);

(statearr_72431[(11)] = inst_72411);

return statearr_72431;
})();
if(inst_72413){
var statearr_72432_72444 = state_72427__$1;
(statearr_72432_72444[(1)] = (4));

} else {
var statearr_72433_72445 = state_72427__$1;
(statearr_72433_72445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (3))){
var inst_72425 = (state_72427[(2)]);
var state_72427__$1 = state_72427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72427__$1,inst_72425);
} else {
if((state_val_72428 === (4))){
var inst_72410 = (state_72427[(10)]);
var inst_72415 = figwheel.client.file_reloading.reload_js_file.call(null,inst_72410);
var state_72427__$1 = state_72427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72427__$1,(7),inst_72415);
} else {
if((state_val_72428 === (5))){
var inst_72421 = cljs.core.async.close_BANG_.call(null,out);
var state_72427__$1 = state_72427;
var statearr_72434_72446 = state_72427__$1;
(statearr_72434_72446[(2)] = inst_72421);

(statearr_72434_72446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (6))){
var inst_72423 = (state_72427[(2)]);
var state_72427__$1 = state_72427;
var statearr_72435_72447 = state_72427__$1;
(statearr_72435_72447[(2)] = inst_72423);

(statearr_72435_72447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (7))){
var inst_72411 = (state_72427[(11)]);
var inst_72417 = (state_72427[(2)]);
var inst_72418 = cljs.core.async.put_BANG_.call(null,out,inst_72417);
var inst_72404 = inst_72411;
var state_72427__$1 = (function (){var statearr_72436 = state_72427;
(statearr_72436[(9)] = inst_72404);

(statearr_72436[(12)] = inst_72418);

return statearr_72436;
})();
var statearr_72437_72448 = state_72427__$1;
(statearr_72437_72448[(2)] = null);

(statearr_72437_72448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__59869__auto___72442,out))
;
return ((function (switch__59779__auto__,c__59869__auto___72442,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____0 = (function (){
var statearr_72438 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72438[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__);

(statearr_72438[(1)] = (1));

return statearr_72438;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____1 = (function (state_72427){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_72427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e72439){if((e72439 instanceof Object)){
var ex__59783__auto__ = e72439;
var statearr_72440_72449 = state_72427;
(statearr_72440_72449[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72450 = state_72427;
state_72427 = G__72450;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__ = function(state_72427){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____1.call(this,state_72427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___72442,out))
})();
var state__59871__auto__ = (function (){var statearr_72441 = f__59870__auto__.call(null);
(statearr_72441[(6)] = c__59869__auto___72442);

return statearr_72441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___72442,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__72451,opts){
var map__72452 = p__72451;
var map__72452__$1 = ((((!((map__72452 == null)))?((((map__72452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72452):map__72452);
var eval_body = cljs.core.get.call(null,map__72452__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__72452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__48567__auto__ = eval_body;
if(cljs.core.truth_(and__48567__auto__)){
return typeof eval_body === 'string';
} else {
return and__48567__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e72454){var e = e72454;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__72455_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__72455_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__72456){
var vec__72457 = p__72456;
var k = cljs.core.nth.call(null,vec__72457,(0),null);
var v = cljs.core.nth.call(null,vec__72457,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__72460){
var vec__72461 = p__72460;
var k = cljs.core.nth.call(null,vec__72461,(0),null);
var v = cljs.core.nth.call(null,vec__72461,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__72467,p__72468){
var map__72469 = p__72467;
var map__72469__$1 = ((((!((map__72469 == null)))?((((map__72469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72469):map__72469);
var opts = map__72469__$1;
var before_jsload = cljs.core.get.call(null,map__72469__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__72469__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__72469__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__72470 = p__72468;
var map__72470__$1 = ((((!((map__72470 == null)))?((((map__72470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72470):map__72470);
var msg = map__72470__$1;
var files = cljs.core.get.call(null,map__72470__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__72470__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__72470__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_72624){
var state_val_72625 = (state_72624[(1)]);
if((state_val_72625 === (7))){
var inst_72486 = (state_72624[(7)]);
var inst_72485 = (state_72624[(8)]);
var inst_72484 = (state_72624[(9)]);
var inst_72487 = (state_72624[(10)]);
var inst_72492 = cljs.core._nth.call(null,inst_72485,inst_72487);
var inst_72493 = figwheel.client.file_reloading.eval_body.call(null,inst_72492,opts);
var inst_72494 = (inst_72487 + (1));
var tmp72626 = inst_72486;
var tmp72627 = inst_72485;
var tmp72628 = inst_72484;
var inst_72484__$1 = tmp72628;
var inst_72485__$1 = tmp72627;
var inst_72486__$1 = tmp72626;
var inst_72487__$1 = inst_72494;
var state_72624__$1 = (function (){var statearr_72629 = state_72624;
(statearr_72629[(7)] = inst_72486__$1);

(statearr_72629[(8)] = inst_72485__$1);

(statearr_72629[(9)] = inst_72484__$1);

(statearr_72629[(10)] = inst_72487__$1);

(statearr_72629[(11)] = inst_72493);

return statearr_72629;
})();
var statearr_72630_72713 = state_72624__$1;
(statearr_72630_72713[(2)] = null);

(statearr_72630_72713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (20))){
var inst_72527 = (state_72624[(12)]);
var inst_72535 = figwheel.client.file_reloading.sort_files.call(null,inst_72527);
var state_72624__$1 = state_72624;
var statearr_72631_72714 = state_72624__$1;
(statearr_72631_72714[(2)] = inst_72535);

(statearr_72631_72714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (27))){
var state_72624__$1 = state_72624;
var statearr_72632_72715 = state_72624__$1;
(statearr_72632_72715[(2)] = null);

(statearr_72632_72715[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (1))){
var inst_72476 = (state_72624[(13)]);
var inst_72473 = before_jsload.call(null,files);
var inst_72474 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_72475 = (function (){return ((function (inst_72476,inst_72473,inst_72474,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72464_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__72464_SHARP_);
});
;})(inst_72476,inst_72473,inst_72474,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72476__$1 = cljs.core.filter.call(null,inst_72475,files);
var inst_72477 = cljs.core.not_empty.call(null,inst_72476__$1);
var state_72624__$1 = (function (){var statearr_72633 = state_72624;
(statearr_72633[(14)] = inst_72473);

(statearr_72633[(13)] = inst_72476__$1);

(statearr_72633[(15)] = inst_72474);

return statearr_72633;
})();
if(cljs.core.truth_(inst_72477)){
var statearr_72634_72716 = state_72624__$1;
(statearr_72634_72716[(1)] = (2));

} else {
var statearr_72635_72717 = state_72624__$1;
(statearr_72635_72717[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (24))){
var state_72624__$1 = state_72624;
var statearr_72636_72718 = state_72624__$1;
(statearr_72636_72718[(2)] = null);

(statearr_72636_72718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (39))){
var inst_72577 = (state_72624[(16)]);
var state_72624__$1 = state_72624;
var statearr_72637_72719 = state_72624__$1;
(statearr_72637_72719[(2)] = inst_72577);

(statearr_72637_72719[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (46))){
var inst_72619 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72638_72720 = state_72624__$1;
(statearr_72638_72720[(2)] = inst_72619);

(statearr_72638_72720[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (4))){
var inst_72521 = (state_72624[(2)]);
var inst_72522 = cljs.core.List.EMPTY;
var inst_72523 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_72522);
var inst_72524 = (function (){return ((function (inst_72521,inst_72522,inst_72523,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72465_SHARP_){
var and__48567__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__72465_SHARP_);
if(cljs.core.truth_(and__48567__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__72465_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__72465_SHARP_)));
} else {
return and__48567__auto__;
}
});
;})(inst_72521,inst_72522,inst_72523,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72525 = cljs.core.filter.call(null,inst_72524,files);
var inst_72526 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_72527 = cljs.core.concat.call(null,inst_72525,inst_72526);
var state_72624__$1 = (function (){var statearr_72639 = state_72624;
(statearr_72639[(12)] = inst_72527);

(statearr_72639[(17)] = inst_72523);

(statearr_72639[(18)] = inst_72521);

return statearr_72639;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_72640_72721 = state_72624__$1;
(statearr_72640_72721[(1)] = (16));

} else {
var statearr_72641_72722 = state_72624__$1;
(statearr_72641_72722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (15))){
var inst_72511 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72642_72723 = state_72624__$1;
(statearr_72642_72723[(2)] = inst_72511);

(statearr_72642_72723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (21))){
var inst_72537 = (state_72624[(19)]);
var inst_72537__$1 = (state_72624[(2)]);
var inst_72538 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_72537__$1);
var state_72624__$1 = (function (){var statearr_72643 = state_72624;
(statearr_72643[(19)] = inst_72537__$1);

return statearr_72643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72624__$1,(22),inst_72538);
} else {
if((state_val_72625 === (31))){
var inst_72622 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72624__$1,inst_72622);
} else {
if((state_val_72625 === (32))){
var inst_72577 = (state_72624[(16)]);
var inst_72582 = inst_72577.cljs$lang$protocol_mask$partition0$;
var inst_72583 = (inst_72582 & (64));
var inst_72584 = inst_72577.cljs$core$ISeq$;
var inst_72585 = (cljs.core.PROTOCOL_SENTINEL === inst_72584);
var inst_72586 = (inst_72583) || (inst_72585);
var state_72624__$1 = state_72624;
if(cljs.core.truth_(inst_72586)){
var statearr_72644_72724 = state_72624__$1;
(statearr_72644_72724[(1)] = (35));

} else {
var statearr_72645_72725 = state_72624__$1;
(statearr_72645_72725[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (40))){
var inst_72599 = (state_72624[(20)]);
var inst_72598 = (state_72624[(2)]);
var inst_72599__$1 = cljs.core.get.call(null,inst_72598,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_72600 = cljs.core.get.call(null,inst_72598,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_72601 = cljs.core.not_empty.call(null,inst_72599__$1);
var state_72624__$1 = (function (){var statearr_72646 = state_72624;
(statearr_72646[(21)] = inst_72600);

(statearr_72646[(20)] = inst_72599__$1);

return statearr_72646;
})();
if(cljs.core.truth_(inst_72601)){
var statearr_72647_72726 = state_72624__$1;
(statearr_72647_72726[(1)] = (41));

} else {
var statearr_72648_72727 = state_72624__$1;
(statearr_72648_72727[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (33))){
var state_72624__$1 = state_72624;
var statearr_72649_72728 = state_72624__$1;
(statearr_72649_72728[(2)] = false);

(statearr_72649_72728[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (13))){
var inst_72497 = (state_72624[(22)]);
var inst_72501 = cljs.core.chunk_first.call(null,inst_72497);
var inst_72502 = cljs.core.chunk_rest.call(null,inst_72497);
var inst_72503 = cljs.core.count.call(null,inst_72501);
var inst_72484 = inst_72502;
var inst_72485 = inst_72501;
var inst_72486 = inst_72503;
var inst_72487 = (0);
var state_72624__$1 = (function (){var statearr_72650 = state_72624;
(statearr_72650[(7)] = inst_72486);

(statearr_72650[(8)] = inst_72485);

(statearr_72650[(9)] = inst_72484);

(statearr_72650[(10)] = inst_72487);

return statearr_72650;
})();
var statearr_72651_72729 = state_72624__$1;
(statearr_72651_72729[(2)] = null);

(statearr_72651_72729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (22))){
var inst_72541 = (state_72624[(23)]);
var inst_72537 = (state_72624[(19)]);
var inst_72540 = (state_72624[(24)]);
var inst_72545 = (state_72624[(25)]);
var inst_72540__$1 = (state_72624[(2)]);
var inst_72541__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72540__$1);
var inst_72542 = (function (){var all_files = inst_72537;
var res_SINGLEQUOTE_ = inst_72540__$1;
var res = inst_72541__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_72541,inst_72537,inst_72540,inst_72545,inst_72540__$1,inst_72541__$1,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72466_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__72466_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_72541,inst_72537,inst_72540,inst_72545,inst_72540__$1,inst_72541__$1,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72543 = cljs.core.filter.call(null,inst_72542,inst_72540__$1);
var inst_72544 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_72545__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72544);
var inst_72546 = cljs.core.not_empty.call(null,inst_72545__$1);
var state_72624__$1 = (function (){var statearr_72652 = state_72624;
(statearr_72652[(23)] = inst_72541__$1);

(statearr_72652[(26)] = inst_72543);

(statearr_72652[(24)] = inst_72540__$1);

(statearr_72652[(25)] = inst_72545__$1);

return statearr_72652;
})();
if(cljs.core.truth_(inst_72546)){
var statearr_72653_72730 = state_72624__$1;
(statearr_72653_72730[(1)] = (23));

} else {
var statearr_72654_72731 = state_72624__$1;
(statearr_72654_72731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (36))){
var state_72624__$1 = state_72624;
var statearr_72655_72732 = state_72624__$1;
(statearr_72655_72732[(2)] = false);

(statearr_72655_72732[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (41))){
var inst_72599 = (state_72624[(20)]);
var inst_72603 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_72604 = cljs.core.map.call(null,inst_72603,inst_72599);
var inst_72605 = cljs.core.pr_str.call(null,inst_72604);
var inst_72606 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72605)].join('');
var inst_72607 = figwheel.client.utils.log.call(null,inst_72606);
var state_72624__$1 = state_72624;
var statearr_72656_72733 = state_72624__$1;
(statearr_72656_72733[(2)] = inst_72607);

(statearr_72656_72733[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (43))){
var inst_72600 = (state_72624[(21)]);
var inst_72610 = (state_72624[(2)]);
var inst_72611 = cljs.core.not_empty.call(null,inst_72600);
var state_72624__$1 = (function (){var statearr_72657 = state_72624;
(statearr_72657[(27)] = inst_72610);

return statearr_72657;
})();
if(cljs.core.truth_(inst_72611)){
var statearr_72658_72734 = state_72624__$1;
(statearr_72658_72734[(1)] = (44));

} else {
var statearr_72659_72735 = state_72624__$1;
(statearr_72659_72735[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (29))){
var inst_72541 = (state_72624[(23)]);
var inst_72537 = (state_72624[(19)]);
var inst_72543 = (state_72624[(26)]);
var inst_72540 = (state_72624[(24)]);
var inst_72545 = (state_72624[(25)]);
var inst_72577 = (state_72624[(16)]);
var inst_72573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_72576 = (function (){var all_files = inst_72537;
var res_SINGLEQUOTE_ = inst_72540;
var res = inst_72541;
var files_not_loaded = inst_72543;
var dependencies_that_loaded = inst_72545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72577,inst_72573,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72575){
var map__72660 = p__72575;
var map__72660__$1 = ((((!((map__72660 == null)))?((((map__72660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72660):map__72660);
var namespace = cljs.core.get.call(null,map__72660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72577,inst_72573,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72577__$1 = cljs.core.group_by.call(null,inst_72576,inst_72543);
var inst_72579 = (inst_72577__$1 == null);
var inst_72580 = cljs.core.not.call(null,inst_72579);
var state_72624__$1 = (function (){var statearr_72662 = state_72624;
(statearr_72662[(28)] = inst_72573);

(statearr_72662[(16)] = inst_72577__$1);

return statearr_72662;
})();
if(inst_72580){
var statearr_72663_72736 = state_72624__$1;
(statearr_72663_72736[(1)] = (32));

} else {
var statearr_72664_72737 = state_72624__$1;
(statearr_72664_72737[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (44))){
var inst_72600 = (state_72624[(21)]);
var inst_72613 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_72600);
var inst_72614 = cljs.core.pr_str.call(null,inst_72613);
var inst_72615 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72614)].join('');
var inst_72616 = figwheel.client.utils.log.call(null,inst_72615);
var state_72624__$1 = state_72624;
var statearr_72665_72738 = state_72624__$1;
(statearr_72665_72738[(2)] = inst_72616);

(statearr_72665_72738[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (6))){
var inst_72518 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72666_72739 = state_72624__$1;
(statearr_72666_72739[(2)] = inst_72518);

(statearr_72666_72739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (28))){
var inst_72543 = (state_72624[(26)]);
var inst_72570 = (state_72624[(2)]);
var inst_72571 = cljs.core.not_empty.call(null,inst_72543);
var state_72624__$1 = (function (){var statearr_72667 = state_72624;
(statearr_72667[(29)] = inst_72570);

return statearr_72667;
})();
if(cljs.core.truth_(inst_72571)){
var statearr_72668_72740 = state_72624__$1;
(statearr_72668_72740[(1)] = (29));

} else {
var statearr_72669_72741 = state_72624__$1;
(statearr_72669_72741[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (25))){
var inst_72541 = (state_72624[(23)]);
var inst_72557 = (state_72624[(2)]);
var inst_72558 = cljs.core.not_empty.call(null,inst_72541);
var state_72624__$1 = (function (){var statearr_72670 = state_72624;
(statearr_72670[(30)] = inst_72557);

return statearr_72670;
})();
if(cljs.core.truth_(inst_72558)){
var statearr_72671_72742 = state_72624__$1;
(statearr_72671_72742[(1)] = (26));

} else {
var statearr_72672_72743 = state_72624__$1;
(statearr_72672_72743[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (34))){
var inst_72593 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
if(cljs.core.truth_(inst_72593)){
var statearr_72673_72744 = state_72624__$1;
(statearr_72673_72744[(1)] = (38));

} else {
var statearr_72674_72745 = state_72624__$1;
(statearr_72674_72745[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (17))){
var state_72624__$1 = state_72624;
var statearr_72675_72746 = state_72624__$1;
(statearr_72675_72746[(2)] = recompile_dependents);

(statearr_72675_72746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (3))){
var state_72624__$1 = state_72624;
var statearr_72676_72747 = state_72624__$1;
(statearr_72676_72747[(2)] = null);

(statearr_72676_72747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (12))){
var inst_72514 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72677_72748 = state_72624__$1;
(statearr_72677_72748[(2)] = inst_72514);

(statearr_72677_72748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (2))){
var inst_72476 = (state_72624[(13)]);
var inst_72483 = cljs.core.seq.call(null,inst_72476);
var inst_72484 = inst_72483;
var inst_72485 = null;
var inst_72486 = (0);
var inst_72487 = (0);
var state_72624__$1 = (function (){var statearr_72678 = state_72624;
(statearr_72678[(7)] = inst_72486);

(statearr_72678[(8)] = inst_72485);

(statearr_72678[(9)] = inst_72484);

(statearr_72678[(10)] = inst_72487);

return statearr_72678;
})();
var statearr_72679_72749 = state_72624__$1;
(statearr_72679_72749[(2)] = null);

(statearr_72679_72749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (23))){
var inst_72541 = (state_72624[(23)]);
var inst_72537 = (state_72624[(19)]);
var inst_72543 = (state_72624[(26)]);
var inst_72540 = (state_72624[(24)]);
var inst_72545 = (state_72624[(25)]);
var inst_72548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_72550 = (function (){var all_files = inst_72537;
var res_SINGLEQUOTE_ = inst_72540;
var res = inst_72541;
var files_not_loaded = inst_72543;
var dependencies_that_loaded = inst_72545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72548,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72549){
var map__72680 = p__72549;
var map__72680__$1 = ((((!((map__72680 == null)))?((((map__72680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72680):map__72680);
var request_url = cljs.core.get.call(null,map__72680__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72548,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72551 = cljs.core.reverse.call(null,inst_72545);
var inst_72552 = cljs.core.map.call(null,inst_72550,inst_72551);
var inst_72553 = cljs.core.pr_str.call(null,inst_72552);
var inst_72554 = figwheel.client.utils.log.call(null,inst_72553);
var state_72624__$1 = (function (){var statearr_72682 = state_72624;
(statearr_72682[(31)] = inst_72548);

return statearr_72682;
})();
var statearr_72683_72750 = state_72624__$1;
(statearr_72683_72750[(2)] = inst_72554);

(statearr_72683_72750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (35))){
var state_72624__$1 = state_72624;
var statearr_72684_72751 = state_72624__$1;
(statearr_72684_72751[(2)] = true);

(statearr_72684_72751[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (19))){
var inst_72527 = (state_72624[(12)]);
var inst_72533 = figwheel.client.file_reloading.expand_files.call(null,inst_72527);
var state_72624__$1 = state_72624;
var statearr_72685_72752 = state_72624__$1;
(statearr_72685_72752[(2)] = inst_72533);

(statearr_72685_72752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (11))){
var state_72624__$1 = state_72624;
var statearr_72686_72753 = state_72624__$1;
(statearr_72686_72753[(2)] = null);

(statearr_72686_72753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (9))){
var inst_72516 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72687_72754 = state_72624__$1;
(statearr_72687_72754[(2)] = inst_72516);

(statearr_72687_72754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (5))){
var inst_72486 = (state_72624[(7)]);
var inst_72487 = (state_72624[(10)]);
var inst_72489 = (inst_72487 < inst_72486);
var inst_72490 = inst_72489;
var state_72624__$1 = state_72624;
if(cljs.core.truth_(inst_72490)){
var statearr_72688_72755 = state_72624__$1;
(statearr_72688_72755[(1)] = (7));

} else {
var statearr_72689_72756 = state_72624__$1;
(statearr_72689_72756[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (14))){
var inst_72497 = (state_72624[(22)]);
var inst_72506 = cljs.core.first.call(null,inst_72497);
var inst_72507 = figwheel.client.file_reloading.eval_body.call(null,inst_72506,opts);
var inst_72508 = cljs.core.next.call(null,inst_72497);
var inst_72484 = inst_72508;
var inst_72485 = null;
var inst_72486 = (0);
var inst_72487 = (0);
var state_72624__$1 = (function (){var statearr_72690 = state_72624;
(statearr_72690[(7)] = inst_72486);

(statearr_72690[(8)] = inst_72485);

(statearr_72690[(9)] = inst_72484);

(statearr_72690[(10)] = inst_72487);

(statearr_72690[(32)] = inst_72507);

return statearr_72690;
})();
var statearr_72691_72757 = state_72624__$1;
(statearr_72691_72757[(2)] = null);

(statearr_72691_72757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (45))){
var state_72624__$1 = state_72624;
var statearr_72692_72758 = state_72624__$1;
(statearr_72692_72758[(2)] = null);

(statearr_72692_72758[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (26))){
var inst_72541 = (state_72624[(23)]);
var inst_72537 = (state_72624[(19)]);
var inst_72543 = (state_72624[(26)]);
var inst_72540 = (state_72624[(24)]);
var inst_72545 = (state_72624[(25)]);
var inst_72560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_72562 = (function (){var all_files = inst_72537;
var res_SINGLEQUOTE_ = inst_72540;
var res = inst_72541;
var files_not_loaded = inst_72543;
var dependencies_that_loaded = inst_72545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72560,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72561){
var map__72693 = p__72561;
var map__72693__$1 = ((((!((map__72693 == null)))?((((map__72693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72693):map__72693);
var namespace = cljs.core.get.call(null,map__72693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__72693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72560,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72563 = cljs.core.map.call(null,inst_72562,inst_72541);
var inst_72564 = cljs.core.pr_str.call(null,inst_72563);
var inst_72565 = figwheel.client.utils.log.call(null,inst_72564);
var inst_72566 = (function (){var all_files = inst_72537;
var res_SINGLEQUOTE_ = inst_72540;
var res = inst_72541;
var files_not_loaded = inst_72543;
var dependencies_that_loaded = inst_72545;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72560,inst_72562,inst_72563,inst_72564,inst_72565,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72541,inst_72537,inst_72543,inst_72540,inst_72545,inst_72560,inst_72562,inst_72563,inst_72564,inst_72565,state_val_72625,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72567 = setTimeout(inst_72566,(10));
var state_72624__$1 = (function (){var statearr_72695 = state_72624;
(statearr_72695[(33)] = inst_72565);

(statearr_72695[(34)] = inst_72560);

return statearr_72695;
})();
var statearr_72696_72759 = state_72624__$1;
(statearr_72696_72759[(2)] = inst_72567);

(statearr_72696_72759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (16))){
var state_72624__$1 = state_72624;
var statearr_72697_72760 = state_72624__$1;
(statearr_72697_72760[(2)] = reload_dependents);

(statearr_72697_72760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (38))){
var inst_72577 = (state_72624[(16)]);
var inst_72595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72577);
var state_72624__$1 = state_72624;
var statearr_72698_72761 = state_72624__$1;
(statearr_72698_72761[(2)] = inst_72595);

(statearr_72698_72761[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (30))){
var state_72624__$1 = state_72624;
var statearr_72699_72762 = state_72624__$1;
(statearr_72699_72762[(2)] = null);

(statearr_72699_72762[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (10))){
var inst_72497 = (state_72624[(22)]);
var inst_72499 = cljs.core.chunked_seq_QMARK_.call(null,inst_72497);
var state_72624__$1 = state_72624;
if(inst_72499){
var statearr_72700_72763 = state_72624__$1;
(statearr_72700_72763[(1)] = (13));

} else {
var statearr_72701_72764 = state_72624__$1;
(statearr_72701_72764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (18))){
var inst_72531 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
if(cljs.core.truth_(inst_72531)){
var statearr_72702_72765 = state_72624__$1;
(statearr_72702_72765[(1)] = (19));

} else {
var statearr_72703_72766 = state_72624__$1;
(statearr_72703_72766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (42))){
var state_72624__$1 = state_72624;
var statearr_72704_72767 = state_72624__$1;
(statearr_72704_72767[(2)] = null);

(statearr_72704_72767[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (37))){
var inst_72590 = (state_72624[(2)]);
var state_72624__$1 = state_72624;
var statearr_72705_72768 = state_72624__$1;
(statearr_72705_72768[(2)] = inst_72590);

(statearr_72705_72768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72625 === (8))){
var inst_72484 = (state_72624[(9)]);
var inst_72497 = (state_72624[(22)]);
var inst_72497__$1 = cljs.core.seq.call(null,inst_72484);
var state_72624__$1 = (function (){var statearr_72706 = state_72624;
(statearr_72706[(22)] = inst_72497__$1);

return statearr_72706;
})();
if(inst_72497__$1){
var statearr_72707_72769 = state_72624__$1;
(statearr_72707_72769[(1)] = (10));

} else {
var statearr_72708_72770 = state_72624__$1;
(statearr_72708_72770[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__59779__auto__,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____0 = (function (){
var statearr_72709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72709[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__);

(statearr_72709[(1)] = (1));

return statearr_72709;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____1 = (function (state_72624){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_72624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e72710){if((e72710 instanceof Object)){
var ex__59783__auto__ = e72710;
var statearr_72711_72771 = state_72624;
(statearr_72711_72771[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72772 = state_72624;
state_72624 = G__72772;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__ = function(state_72624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____1.call(this,state_72624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__59871__auto__ = (function (){var statearr_72712 = f__59870__auto__.call(null);
(statearr_72712[(6)] = c__59869__auto__);

return statearr_72712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__,map__72469,map__72469__$1,opts,before_jsload,on_jsload,reload_dependents,map__72470,map__72470__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__59869__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__72775,link){
var map__72776 = p__72775;
var map__72776__$1 = ((((!((map__72776 == null)))?((((map__72776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72776):map__72776);
var file = cljs.core.get.call(null,map__72776__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__72776,map__72776__$1,file){
return (function (p1__72773_SHARP_,p2__72774_SHARP_){
if(cljs.core._EQ_.call(null,p1__72773_SHARP_,p2__72774_SHARP_)){
return p1__72773_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__72776,map__72776__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__72779){
var map__72780 = p__72779;
var map__72780__$1 = ((((!((map__72780 == null)))?((((map__72780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72780):map__72780);
var match_length = cljs.core.get.call(null,map__72780__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__72780__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__72778_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__72778_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__72782_SHARP_,p2__72783_SHARP_){
return cljs.core.assoc.call(null,p1__72782_SHARP_,cljs.core.get.call(null,p2__72783_SHARP_,key),p2__72783_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_72784 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_72784);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_72784);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__72785,p__72786){
var map__72787 = p__72785;
var map__72787__$1 = ((((!((map__72787 == null)))?((((map__72787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72787):map__72787);
var on_cssload = cljs.core.get.call(null,map__72787__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__72788 = p__72786;
var map__72788__$1 = ((((!((map__72788 == null)))?((((map__72788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72788):map__72788);
var files_msg = map__72788__$1;
var files = cljs.core.get.call(null,map__72788__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515662043910
