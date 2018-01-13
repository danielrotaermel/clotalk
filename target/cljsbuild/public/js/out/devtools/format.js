// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__49312__auto__ = (((value == null))?null:value);
var m__49313__auto__ = (devtools.format._header[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,value);
} else {
var m__49313__auto____$1 = (devtools.format._header["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__49312__auto__ = (((value == null))?null:value);
var m__49313__auto__ = (devtools.format._has_body[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,value);
} else {
var m__49313__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__49312__auto__ = (((value == null))?null:value);
var m__49313__auto__ = (devtools.format._body[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,value);
} else {
var m__49313__auto____$1 = (devtools.format._body["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64761 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64761["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64762 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64762["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64763 = temp__5455__auto____$2;
return (o64763["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64764 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64764["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64765 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64765["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64766 = temp__5455__auto____$2;
return (o64766["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64767 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64767["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64768 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64768["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64769 = temp__5455__auto____$2;
return (o64769["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64770 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64770["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64771 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64771["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64772 = temp__5455__auto____$2;
return (o64772["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64773 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64773["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64774 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64774["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64775 = temp__5455__auto____$2;
return (o64775["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64776 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64776["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64777 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64777["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64778 = temp__5455__auto____$2;
return (o64778["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o64779 = temp__5455__auto__;
var temp__5455__auto____$1 = (o64779["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o64780 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o64780["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o64781 = temp__5455__auto____$2;
return (o64781["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64783 = arguments.length;
var i__49859__auto___64784 = (0);
while(true){
if((i__49859__auto___64784 < len__49858__auto___64783)){
args__49865__auto__.push((arguments[i__49859__auto___64784]));

var G__64785 = (i__49859__auto___64784 + (1));
i__49859__auto___64784 = G__64785;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq64782){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64782));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64787 = arguments.length;
var i__49859__auto___64788 = (0);
while(true){
if((i__49859__auto___64788 < len__49858__auto___64787)){
args__49865__auto__.push((arguments[i__49859__auto___64788]));

var G__64789 = (i__49859__auto___64788 + (1));
i__49859__auto___64788 = G__64789;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq64786){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64786));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64791 = arguments.length;
var i__49859__auto___64792 = (0);
while(true){
if((i__49859__auto___64792 < len__49858__auto___64791)){
args__49865__auto__.push((arguments[i__49859__auto___64792]));

var G__64793 = (i__49859__auto___64792 + (1));
i__49859__auto___64792 = G__64793;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq64790){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64790));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64795 = arguments.length;
var i__49859__auto___64796 = (0);
while(true){
if((i__49859__auto___64796 < len__49858__auto___64795)){
args__49865__auto__.push((arguments[i__49859__auto___64796]));

var G__64797 = (i__49859__auto___64796 + (1));
i__49859__auto___64796 = G__64797;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq64794){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64794));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64799 = arguments.length;
var i__49859__auto___64800 = (0);
while(true){
if((i__49859__auto___64800 < len__49858__auto___64799)){
args__49865__auto__.push((arguments[i__49859__auto___64800]));

var G__64801 = (i__49859__auto___64800 + (1));
i__49859__auto___64800 = G__64801;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq64798){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64798));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64803 = arguments.length;
var i__49859__auto___64804 = (0);
while(true){
if((i__49859__auto___64804 < len__49858__auto___64803)){
args__49865__auto__.push((arguments[i__49859__auto___64804]));

var G__64805 = (i__49859__auto___64804 + (1));
i__49859__auto___64804 = G__64805;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq64802){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64802));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64807 = arguments.length;
var i__49859__auto___64808 = (0);
while(true){
if((i__49859__auto___64808 < len__49858__auto___64807)){
args__49865__auto__.push((arguments[i__49859__auto___64808]));

var G__64809 = (i__49859__auto___64808 + (1));
i__49859__auto___64808 = G__64809;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq64806){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64806));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64817 = arguments.length;
var i__49859__auto___64818 = (0);
while(true){
if((i__49859__auto___64818 < len__49858__auto___64817)){
args__49865__auto__.push((arguments[i__49859__auto___64818]));

var G__64819 = (i__49859__auto___64818 + (1));
i__49859__auto___64818 = G__64819;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__64813){
var vec__64814 = p__64813;
var state_override = cljs.core.nth.call(null,vec__64814,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__64814,state_override){
return (function (p1__64810_SHARP_){
return cljs.core.merge.call(null,p1__64810_SHARP_,state_override);
});})(vec__64814,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq64811){
var G__64812 = cljs.core.first.call(null,seq64811);
var seq64811__$1 = cljs.core.next.call(null,seq64811);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__64812,seq64811__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64821 = arguments.length;
var i__49859__auto___64822 = (0);
while(true){
if((i__49859__auto___64822 < len__49858__auto___64821)){
args__49865__auto__.push((arguments[i__49859__auto___64822]));

var G__64823 = (i__49859__auto___64822 + (1));
i__49859__auto___64822 = G__64823;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq64820){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64820));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__49865__auto__ = [];
var len__49858__auto___64826 = arguments.length;
var i__49859__auto___64827 = (0);
while(true){
if((i__49859__auto___64827 < len__49858__auto___64826)){
args__49865__auto__.push((arguments[i__49859__auto___64827]));

var G__64828 = (i__49859__auto___64827 + (1));
i__49859__auto___64827 = G__64828;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq64824){
var G__64825 = cljs.core.first.call(null,seq64824);
var seq64824__$1 = cljs.core.next.call(null,seq64824);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__64825,seq64824__$1);
});


//# sourceMappingURL=format.js.map?rel=1515662035397
