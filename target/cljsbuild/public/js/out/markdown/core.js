// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__67717){
var map__67718 = p__67717;
var map__67718__$1 = ((((!((map__67718 == null)))?((((map__67718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67718):map__67718);
var replacement_transformers = cljs.core.get.call(null,map__67718__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__67718__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__67718__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__67718,map__67718__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_67720 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__67721 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_67720,map__67718,map__67718__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__67724,transformer){
var vec__67725 = p__67724;
var text = cljs.core.nth.call(null,vec__67725,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__67725,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_67720,map__67718,map__67718__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__48579__auto__ = replacement_transformers;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__67721,(0),null);
var new_state = cljs.core.nth.call(null,vec__67721,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_67720;
}});
;})(map__67718,map__67718__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67730 = arguments.length;
var i__49859__auto___67731 = (0);
while(true){
if((i__49859__auto___67731 < len__49858__auto___67730)){
args__49865__auto__.push((arguments[i__49859__auto___67731]));

var G__67732 = (i__49859__auto___67731 + (1));
i__49859__auto___67731 = G__67732;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq67728){
var G__67729 = cljs.core.first.call(null,seq67728);
var seq67728__$1 = cljs.core.next.call(null,seq67728);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__67729,seq67728__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__67733_67737 = cljs.core.seq.call(null,lines);
var chunk__67734_67738 = null;
var count__67735_67739 = (0);
var i__67736_67740 = (0);
while(true){
if((i__67736_67740 < count__67735_67739)){
var line_67741 = cljs.core._nth.call(null,chunk__67734_67738,i__67736_67740);
markdown.links.parse_reference_link.call(null,line_67741,references);

var G__67742 = seq__67733_67737;
var G__67743 = chunk__67734_67738;
var G__67744 = count__67735_67739;
var G__67745 = (i__67736_67740 + (1));
seq__67733_67737 = G__67742;
chunk__67734_67738 = G__67743;
count__67735_67739 = G__67744;
i__67736_67740 = G__67745;
continue;
} else {
var temp__5457__auto___67746 = cljs.core.seq.call(null,seq__67733_67737);
if(temp__5457__auto___67746){
var seq__67733_67747__$1 = temp__5457__auto___67746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67733_67747__$1)){
var c__49510__auto___67748 = cljs.core.chunk_first.call(null,seq__67733_67747__$1);
var G__67749 = cljs.core.chunk_rest.call(null,seq__67733_67747__$1);
var G__67750 = c__49510__auto___67748;
var G__67751 = cljs.core.count.call(null,c__49510__auto___67748);
var G__67752 = (0);
seq__67733_67737 = G__67749;
chunk__67734_67738 = G__67750;
count__67735_67739 = G__67751;
i__67736_67740 = G__67752;
continue;
} else {
var line_67753 = cljs.core.first.call(null,seq__67733_67747__$1);
markdown.links.parse_reference_link.call(null,line_67753,references);

var G__67754 = cljs.core.next.call(null,seq__67733_67747__$1);
var G__67755 = null;
var G__67756 = (0);
var G__67757 = (0);
seq__67733_67737 = G__67754;
chunk__67734_67738 = G__67755;
count__67735_67739 = G__67756;
i__67736_67740 = G__67757;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__67758_67762 = cljs.core.seq.call(null,lines);
var chunk__67759_67763 = null;
var count__67760_67764 = (0);
var i__67761_67765 = (0);
while(true){
if((i__67761_67765 < count__67760_67764)){
var line_67766 = cljs.core._nth.call(null,chunk__67759_67763,i__67761_67765);
markdown.links.parse_footnote_link.call(null,line_67766,footnotes);

var G__67767 = seq__67758_67762;
var G__67768 = chunk__67759_67763;
var G__67769 = count__67760_67764;
var G__67770 = (i__67761_67765 + (1));
seq__67758_67762 = G__67767;
chunk__67759_67763 = G__67768;
count__67760_67764 = G__67769;
i__67761_67765 = G__67770;
continue;
} else {
var temp__5457__auto___67771 = cljs.core.seq.call(null,seq__67758_67762);
if(temp__5457__auto___67771){
var seq__67758_67772__$1 = temp__5457__auto___67771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67758_67772__$1)){
var c__49510__auto___67773 = cljs.core.chunk_first.call(null,seq__67758_67772__$1);
var G__67774 = cljs.core.chunk_rest.call(null,seq__67758_67772__$1);
var G__67775 = c__49510__auto___67773;
var G__67776 = cljs.core.count.call(null,c__49510__auto___67773);
var G__67777 = (0);
seq__67758_67762 = G__67774;
chunk__67759_67763 = G__67775;
count__67760_67764 = G__67776;
i__67761_67765 = G__67777;
continue;
} else {
var line_67778 = cljs.core.first.call(null,seq__67758_67772__$1);
markdown.links.parse_footnote_link.call(null,line_67778,footnotes);

var G__67779 = cljs.core.next.call(null,seq__67758_67772__$1);
var G__67780 = null;
var G__67781 = (0);
var G__67782 = (0);
seq__67758_67762 = G__67779;
chunk__67759_67763 = G__67780;
count__67760_67764 = G__67781;
i__67761_67765 = G__67782;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__67784 = cljs.core.split_with.call(null,(function (p1__67783_SHARP_){
return cljs.core.not_empty.call(null,p1__67783_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__67784,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__67784,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_67787 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_67788 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_67787,_STAR_formatter_STAR_67788){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_67787,_STAR_formatter_STAR_67788))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__67789 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__67789,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__67789,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__67795_67802 = lines__$1;
var vec__67796_67803 = G__67795_67802;
var seq__67797_67804 = cljs.core.seq.call(null,vec__67796_67803);
var first__67798_67805 = cljs.core.first.call(null,seq__67797_67804);
var seq__67797_67806__$1 = cljs.core.next.call(null,seq__67797_67804);
var line_67807 = first__67798_67805;
var more_67808 = seq__67797_67806__$1;
var state_67809 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__67795_67810__$1 = G__67795_67802;
var state_67811__$1 = state_67809;
while(true){
var vec__67799_67812 = G__67795_67810__$1;
var seq__67800_67813 = cljs.core.seq.call(null,vec__67799_67812);
var first__67801_67814 = cljs.core.first.call(null,seq__67800_67813);
var seq__67800_67815__$1 = cljs.core.next.call(null,seq__67800_67813);
var line_67816__$1 = first__67801_67814;
var more_67817__$1 = seq__67800_67815__$1;
var state_67818__$2 = state_67811__$1;
var line_67819__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_67818__$2))?"":line_67816__$1);
var state_67820__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67818__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67818__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_67818__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_67818__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_67818__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_67817__$1))){
var G__67821 = more_67817__$1;
var G__67822 = cljs.core.assoc.call(null,transformer.call(null,html,line_67819__$2,cljs.core.first.call(null,more_67817__$1),cljs.core.dissoc.call(null,state_67820__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_67819__$2));
G__67795_67810__$1 = G__67821;
state_67811__$1 = G__67822;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_67820__$3))),line_67819__$2,"",cljs.core.assoc.call(null,state_67820__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_67788;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_67787;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67825 = arguments.length;
var i__49859__auto___67826 = (0);
while(true){
if((i__49859__auto___67826 < len__49858__auto___67825)){
args__49865__auto__.push((arguments[i__49859__auto___67826]));

var G__67827 = (i__49859__auto___67826 + (1));
i__49859__auto___67826 = G__67827;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq67823){
var G__67824 = cljs.core.first.call(null,seq67823);
var seq67823__$1 = cljs.core.next.call(null,seq67823);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__67824,seq67823__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67830 = arguments.length;
var i__49859__auto___67831 = (0);
while(true){
if((i__49859__auto___67831 < len__49858__auto___67830)){
args__49865__auto__.push((arguments[i__49859__auto___67831]));

var G__67832 = (i__49859__auto___67831 + (1));
i__49859__auto___67831 = G__67832;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq67828){
var G__67829 = cljs.core.first.call(null,seq67828);
var seq67828__$1 = cljs.core.next.call(null,seq67828);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__67829,seq67828__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67834 = arguments.length;
var i__49859__auto___67835 = (0);
while(true){
if((i__49859__auto___67835 < len__49858__auto___67834)){
args__49865__auto__.push((arguments[i__49859__auto___67835]));

var G__67836 = (i__49859__auto___67835 + (1));
i__49859__auto___67835 = G__67836;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq67833){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67833));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67838 = arguments.length;
var i__49859__auto___67839 = (0);
while(true){
if((i__49859__auto___67839 < len__49858__auto___67838)){
args__49865__auto__.push((arguments[i__49859__auto___67839]));

var G__67840 = (i__49859__auto___67839 + (1));
i__49859__auto___67839 = G__67840;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq67837){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67837));
});


//# sourceMappingURL=core.js.map?rel=1515662039487
