// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__72793){
var map__72794 = p__72793;
var map__72794__$1 = ((((!((map__72794 == null)))?((((map__72794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72794):map__72794);
var m = map__72794__$1;
var n = cljs.core.get.call(null,map__72794__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__72794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72796_72818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72797_72819 = null;
var count__72798_72820 = (0);
var i__72799_72821 = (0);
while(true){
if((i__72799_72821 < count__72798_72820)){
var f_72822 = cljs.core._nth.call(null,chunk__72797_72819,i__72799_72821);
cljs.core.println.call(null,"  ",f_72822);

var G__72823 = seq__72796_72818;
var G__72824 = chunk__72797_72819;
var G__72825 = count__72798_72820;
var G__72826 = (i__72799_72821 + (1));
seq__72796_72818 = G__72823;
chunk__72797_72819 = G__72824;
count__72798_72820 = G__72825;
i__72799_72821 = G__72826;
continue;
} else {
var temp__5457__auto___72827 = cljs.core.seq.call(null,seq__72796_72818);
if(temp__5457__auto___72827){
var seq__72796_72828__$1 = temp__5457__auto___72827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72796_72828__$1)){
var c__49510__auto___72829 = cljs.core.chunk_first.call(null,seq__72796_72828__$1);
var G__72830 = cljs.core.chunk_rest.call(null,seq__72796_72828__$1);
var G__72831 = c__49510__auto___72829;
var G__72832 = cljs.core.count.call(null,c__49510__auto___72829);
var G__72833 = (0);
seq__72796_72818 = G__72830;
chunk__72797_72819 = G__72831;
count__72798_72820 = G__72832;
i__72799_72821 = G__72833;
continue;
} else {
var f_72834 = cljs.core.first.call(null,seq__72796_72828__$1);
cljs.core.println.call(null,"  ",f_72834);

var G__72835 = cljs.core.next.call(null,seq__72796_72828__$1);
var G__72836 = null;
var G__72837 = (0);
var G__72838 = (0);
seq__72796_72818 = G__72835;
chunk__72797_72819 = G__72836;
count__72798_72820 = G__72837;
i__72799_72821 = G__72838;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_72839 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__48579__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_72839);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_72839)))?cljs.core.second.call(null,arglists_72839):arglists_72839));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72800_72840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72801_72841 = null;
var count__72802_72842 = (0);
var i__72803_72843 = (0);
while(true){
if((i__72803_72843 < count__72802_72842)){
var vec__72804_72844 = cljs.core._nth.call(null,chunk__72801_72841,i__72803_72843);
var name_72845 = cljs.core.nth.call(null,vec__72804_72844,(0),null);
var map__72807_72846 = cljs.core.nth.call(null,vec__72804_72844,(1),null);
var map__72807_72847__$1 = ((((!((map__72807_72846 == null)))?((((map__72807_72846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72807_72846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72807_72846):map__72807_72846);
var doc_72848 = cljs.core.get.call(null,map__72807_72847__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72849 = cljs.core.get.call(null,map__72807_72847__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72845);

cljs.core.println.call(null," ",arglists_72849);

if(cljs.core.truth_(doc_72848)){
cljs.core.println.call(null," ",doc_72848);
} else {
}

var G__72850 = seq__72800_72840;
var G__72851 = chunk__72801_72841;
var G__72852 = count__72802_72842;
var G__72853 = (i__72803_72843 + (1));
seq__72800_72840 = G__72850;
chunk__72801_72841 = G__72851;
count__72802_72842 = G__72852;
i__72803_72843 = G__72853;
continue;
} else {
var temp__5457__auto___72854 = cljs.core.seq.call(null,seq__72800_72840);
if(temp__5457__auto___72854){
var seq__72800_72855__$1 = temp__5457__auto___72854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72800_72855__$1)){
var c__49510__auto___72856 = cljs.core.chunk_first.call(null,seq__72800_72855__$1);
var G__72857 = cljs.core.chunk_rest.call(null,seq__72800_72855__$1);
var G__72858 = c__49510__auto___72856;
var G__72859 = cljs.core.count.call(null,c__49510__auto___72856);
var G__72860 = (0);
seq__72800_72840 = G__72857;
chunk__72801_72841 = G__72858;
count__72802_72842 = G__72859;
i__72803_72843 = G__72860;
continue;
} else {
var vec__72809_72861 = cljs.core.first.call(null,seq__72800_72855__$1);
var name_72862 = cljs.core.nth.call(null,vec__72809_72861,(0),null);
var map__72812_72863 = cljs.core.nth.call(null,vec__72809_72861,(1),null);
var map__72812_72864__$1 = ((((!((map__72812_72863 == null)))?((((map__72812_72863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72812_72863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72812_72863):map__72812_72863);
var doc_72865 = cljs.core.get.call(null,map__72812_72864__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72866 = cljs.core.get.call(null,map__72812_72864__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72862);

cljs.core.println.call(null," ",arglists_72866);

if(cljs.core.truth_(doc_72865)){
cljs.core.println.call(null," ",doc_72865);
} else {
}

var G__72867 = cljs.core.next.call(null,seq__72800_72855__$1);
var G__72868 = null;
var G__72869 = (0);
var G__72870 = (0);
seq__72800_72840 = G__72867;
chunk__72801_72841 = G__72868;
count__72802_72842 = G__72869;
i__72803_72843 = G__72870;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__72814 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__72815 = null;
var count__72816 = (0);
var i__72817 = (0);
while(true){
if((i__72817 < count__72816)){
var role = cljs.core._nth.call(null,chunk__72815,i__72817);
var temp__5457__auto___72871__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___72871__$1)){
var spec_72872 = temp__5457__auto___72871__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72872));
} else {
}

var G__72873 = seq__72814;
var G__72874 = chunk__72815;
var G__72875 = count__72816;
var G__72876 = (i__72817 + (1));
seq__72814 = G__72873;
chunk__72815 = G__72874;
count__72816 = G__72875;
i__72817 = G__72876;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__72814);
if(temp__5457__auto____$1){
var seq__72814__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72814__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__72814__$1);
var G__72877 = cljs.core.chunk_rest.call(null,seq__72814__$1);
var G__72878 = c__49510__auto__;
var G__72879 = cljs.core.count.call(null,c__49510__auto__);
var G__72880 = (0);
seq__72814 = G__72877;
chunk__72815 = G__72878;
count__72816 = G__72879;
i__72817 = G__72880;
continue;
} else {
var role = cljs.core.first.call(null,seq__72814__$1);
var temp__5457__auto___72881__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___72881__$2)){
var spec_72882 = temp__5457__auto___72881__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72882));
} else {
}

var G__72883 = cljs.core.next.call(null,seq__72814__$1);
var G__72884 = null;
var G__72885 = (0);
var G__72886 = (0);
seq__72814 = G__72883;
chunk__72815 = G__72884;
count__72816 = G__72885;
i__72817 = G__72886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515662043990
