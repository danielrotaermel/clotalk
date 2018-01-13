// Compiled by ClojureScript 1.9.946 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__69822 = arguments.length;
switch (G__69822) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__49881__auto__ = [];
var len__49858__auto___69836 = arguments.length;
var i__49859__auto___69837 = (0);
while(true){
if((i__49859__auto___69837 < len__49858__auto___69836)){
args_arr__49881__auto__.push((arguments[i__49859__auto___69837]));

var G__69838 = (i__49859__auto___69837 + (1));
i__49859__auto___69837 = G__69838;
continue;
} else {
}
break;
}

var argseq__49882__auto__ = (new cljs.core.IndexedSeq(args_arr__49881__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49882__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__69823 = cljs.core.seq.call(null,kvs);
var chunk__69825 = null;
var count__69826 = (0);
var i__69827 = (0);
while(true){
if((i__69827 < count__69826)){
var vec__69829 = cljs.core._nth.call(null,chunk__69825,i__69827);
var k = cljs.core.nth.call(null,vec__69829,(0),null);
var v = cljs.core.nth.call(null,vec__69829,(1),null);
var k_69839__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_69839__$1);
} else {
e.attr(k_69839__$1,((cljs.core._EQ_.call(null,true,v))?k_69839__$1:v));
}

var G__69840 = seq__69823;
var G__69841 = chunk__69825;
var G__69842 = count__69826;
var G__69843 = (i__69827 + (1));
seq__69823 = G__69840;
chunk__69825 = G__69841;
count__69826 = G__69842;
i__69827 = G__69843;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69823);
if(temp__5457__auto__){
var seq__69823__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69823__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69823__$1);
var G__69844 = cljs.core.chunk_rest.call(null,seq__69823__$1);
var G__69845 = c__49510__auto__;
var G__69846 = cljs.core.count.call(null,c__49510__auto__);
var G__69847 = (0);
seq__69823 = G__69844;
chunk__69825 = G__69845;
count__69826 = G__69846;
i__69827 = G__69847;
continue;
} else {
var vec__69832 = cljs.core.first.call(null,seq__69823__$1);
var k = cljs.core.nth.call(null,vec__69832,(0),null);
var v = cljs.core.nth.call(null,vec__69832,(1),null);
var k_69848__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_69848__$1);
} else {
e.attr(k_69848__$1,((cljs.core._EQ_.call(null,true,v))?k_69848__$1:v));
}

var G__69849 = cljs.core.next.call(null,seq__69823__$1);
var G__69850 = null;
var G__69851 = (0);
var G__69852 = (0);
seq__69823 = G__69849;
chunk__69825 = G__69850;
count__69826 = G__69851;
i__69827 = G__69852;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq69818){
var G__69819 = cljs.core.first.call(null,seq69818);
var seq69818__$1 = cljs.core.next.call(null,seq69818);
var G__69820 = cljs.core.first.call(null,seq69818__$1);
var seq69818__$2 = cljs.core.next.call(null,seq69818__$1);
var G__69821 = cljs.core.first.call(null,seq69818__$2);
var seq69818__$3 = cljs.core.next.call(null,seq69818__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69819,G__69820,G__69821,seq69818__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__69858 = arguments.length;
switch (G__69858) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__49881__auto__ = [];
var len__49858__auto___69870 = arguments.length;
var i__49859__auto___69871 = (0);
while(true){
if((i__49859__auto___69871 < len__49858__auto___69870)){
args_arr__49881__auto__.push((arguments[i__49859__auto___69871]));

var G__69872 = (i__49859__auto___69871 + (1));
i__49859__auto___69871 = G__69872;
continue;
} else {
}
break;
}

var argseq__49882__auto__ = (new cljs.core.IndexedSeq(args_arr__49881__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49882__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__69859 = cljs.core.seq.call(null,kvs);
var chunk__69860 = null;
var count__69861 = (0);
var i__69862 = (0);
while(true){
if((i__69862 < count__69861)){
var vec__69863 = cljs.core._nth.call(null,chunk__69860,i__69862);
var k = cljs.core.nth.call(null,vec__69863,(0),null);
var v = cljs.core.nth.call(null,vec__69863,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__69873 = seq__69859;
var G__69874 = chunk__69860;
var G__69875 = count__69861;
var G__69876 = (i__69862 + (1));
seq__69859 = G__69873;
chunk__69860 = G__69874;
count__69861 = G__69875;
i__69862 = G__69876;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69859);
if(temp__5457__auto__){
var seq__69859__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69859__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69859__$1);
var G__69877 = cljs.core.chunk_rest.call(null,seq__69859__$1);
var G__69878 = c__49510__auto__;
var G__69879 = cljs.core.count.call(null,c__49510__auto__);
var G__69880 = (0);
seq__69859 = G__69877;
chunk__69860 = G__69878;
count__69861 = G__69879;
i__69862 = G__69880;
continue;
} else {
var vec__69866 = cljs.core.first.call(null,seq__69859__$1);
var k = cljs.core.nth.call(null,vec__69866,(0),null);
var v = cljs.core.nth.call(null,vec__69866,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__69881 = cljs.core.next.call(null,seq__69859__$1);
var G__69882 = null;
var G__69883 = (0);
var G__69884 = (0);
seq__69859 = G__69881;
chunk__69860 = G__69882;
count__69861 = G__69883;
i__69862 = G__69884;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq69854){
var G__69855 = cljs.core.first.call(null,seq69854);
var seq69854__$1 = cljs.core.next.call(null,seq69854);
var G__69856 = cljs.core.first.call(null,seq69854__$1);
var seq69854__$2 = cljs.core.next.call(null,seq69854__$1);
var G__69857 = cljs.core.first.call(null,seq69854__$2);
var seq69854__$3 = cljs.core.next.call(null,seq69854__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69855,G__69856,G__69857,seq69854__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__69886 = arguments.length;
switch (G__69886) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__69889 = arguments.length;
switch (G__69889) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__69891__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__69891 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__69892__i = 0, G__69892__a = new Array(arguments.length -  2);
while (G__69892__i < G__69892__a.length) {G__69892__a[G__69892__i] = arguments[G__69892__i + 2]; ++G__69892__i;}
  args = new cljs.core.IndexedSeq(G__69892__a,0,null);
} 
return G__69891__delegate.call(this,elem,_,args);};
G__69891.cljs$lang$maxFixedArity = 2;
G__69891.cljs$lang$applyTo = (function (arglist__69893){
var elem = cljs.core.first(arglist__69893);
arglist__69893 = cljs.core.next(arglist__69893);
var _ = cljs.core.first(arglist__69893);
var args = cljs.core.rest(arglist__69893);
return G__69891__delegate(elem,_,args);
});
G__69891.cljs$core$IFn$_invoke$arity$variadic = G__69891__delegate;
return G__69891;
})()
);
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","value","hoplon.spec/value",-632980670));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__69894 = cljs.core.seq.call(null,clmap);
var chunk__69895 = null;
var count__69896 = (0);
var i__69897 = (0);
while(true){
if((i__69897 < count__69896)){
var vec__69898 = cljs.core._nth.call(null,chunk__69895,i__69897);
var c = cljs.core.nth.call(null,vec__69898,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__69898,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__69904 = seq__69894;
var G__69905 = chunk__69895;
var G__69906 = count__69896;
var G__69907 = (i__69897 + (1));
seq__69894 = G__69904;
chunk__69895 = G__69905;
count__69896 = G__69906;
i__69897 = G__69907;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__69894);
if(temp__5457__auto__){
var seq__69894__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69894__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__69894__$1);
var G__69908 = cljs.core.chunk_rest.call(null,seq__69894__$1);
var G__69909 = c__49510__auto__;
var G__69910 = cljs.core.count.call(null,c__49510__auto__);
var G__69911 = (0);
seq__69894 = G__69908;
chunk__69895 = G__69909;
count__69896 = G__69910;
i__69897 = G__69911;
continue;
} else {
var vec__69901 = cljs.core.first.call(null,seq__69894__$1);
var c = cljs.core.nth.call(null,vec__69901,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__69901,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__69912 = cljs.core.next.call(null,seq__69894__$1);
var G__69913 = null;
var G__69914 = (0);
var G__69915 = (0);
seq__69894 = G__69912;
chunk__69895 = G__69913;
count__69896 = G__69914;
i__69897 = G__69915;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","class","hoplon.spec/class",1857757401));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("class","*","class/*",-1188201718),(function (elem,_,kvs){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"class","class",-2030961996),kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("class","*","class/*",-1188201718),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","class","hoplon.spec/class",1857757401));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","string","hoplon.spec/string",-1049501461));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","string","hoplon.spec/string",-1049501461));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map?rel=1515662042237
