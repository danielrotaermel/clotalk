// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__67517 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.call(null,vec__67517,(0),null);
var title = cljs.core.nth.call(null,vec__67517,(1),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link__$1,cljs.core.seq.call(null,"'"),(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str," title=",clojure.string.join.call(null,cljs.core.rest.call(null,title)),">")):cljs.core.seq.call(null,">")),text,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67528 = arguments.length;
var i__49859__auto___67529 = (0);
while(true){
if((i__49859__auto___67529 < len__49858__auto___67528)){
args__49865__auto__.push((arguments[i__49859__auto___67529]));

var G__67530 = (i__49859__auto___67529 + (1));
i__49859__auto___67529 = G__67530;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((3) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49866__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__67524){
var vec__67525 = p__67524;
var title = cljs.core.nth.call(null,vec__67525,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq67520){
var G__67521 = cljs.core.first.call(null,seq67520);
var seq67520__$1 = cljs.core.next.call(null,seq67520);
var G__67522 = cljs.core.first.call(null,seq67520__$1);
var seq67520__$2 = cljs.core.next.call(null,seq67520__$1);
var G__67523 = cljs.core.first.call(null,seq67520__$2);
var seq67520__$3 = cljs.core.next.call(null,seq67520__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__67521,G__67522,G__67523,seq67520__$3);
});

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__67531 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__67531,(0),null);
var xy = cljs.core.nth.call(null,vec__67531,(1),null);
var vec__67534 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__67534,(0),null);
var zy = cljs.core.nth.call(null,vec__67534,(1),null);
var vec__67537 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__67537,(0),null);
var title = cljs.core.nth.call(null,vec__67537,(1),null);
var vec__67540 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__67540,(0),null);
var new_state = cljs.core.nth.call(null,vec__67540,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__67544_SHARP_,p2__67543_SHARP_){
return cljs.core.apply.call(null,p2__67543_SHARP_,p1__67544_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__67545){
var map__67546 = p__67545;
var map__67546__$1 = ((((!((map__67546 == null)))?((((map__67546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67546):map__67546);
var state = map__67546__$1;
var code = cljs.core.get.call(null,map__67546__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67546__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__48579__auto__ = code;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__67548 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__67548,(0),null);
var xs = cljs.core.nth.call(null,vec__67548,(1),null);
var vec__67551 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__67551,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__67551,(1),null);
var vec__67554 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__67554,(0),null);
var ys = cljs.core.nth.call(null,vec__67554,(1),null);
var vec__67557 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__67557,(0),null);
var zs = cljs.core.nth.call(null,vec__67557,(1),null);
var vec__67560 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__67560,(0),null);
var tail = cljs.core.nth.call(null,vec__67560,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__67572 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__67573 = tail;
var G__67574 = loop_state__$1;
out = G__67572;
tokens = G__67573;
loop_state = G__67574;
continue;
} else {
if((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!"))){
var vec__67563 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__67563,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__67563,(1),null);
var G__67575 = cljs.core.concat.call(null,out,head,link_text);
var G__67576 = cljs.core.rest.call(null,tail);
var G__67577 = new_loop_state;
out = G__67575;
tokens = G__67576;
loop_state = G__67577;
continue;
} else {
if(cljs.core.truth_((function (){var and__48567__auto__ = img_QMARK_;
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__48567__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__67566 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__67566,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__67566,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__67569 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__67569,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__67569,(1),null);
var G__67578 = cljs.core.concat.call(null,out,cljs.core.butlast.call(null,head),img_text);
var G__67579 = cljs.core.rest.call(null,tail);
var G__67580 = new_loop_state;
out = G__67578;
tokens = G__67579;
loop_state = G__67580;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.concat.call(null,out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__5457__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__67581 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__67581,(0),null);
var id = cljs.core.nth.call(null,vec__67581,(1),null);
var vec__67584 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__67584,(0),null);
var alt = cljs.core.nth.call(null,vec__67584,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alt)?[" title='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),"'"].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,title,(1))),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__67587,link){
var vec__67588 = p__67587;
var i__$1 = cljs.core.nth.call(null,vec__67588,(0),null);
var encoded = cljs.core.nth.call(null,vec__67588,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.call(null,encoded,markdown.common.gen_token.call(null,i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__67591){
var vec__67592 = p__67591;
var k = cljs.core.nth.call(null,vec__67592,(0),null);
var v = cljs.core.nth.call(null,vec__67592,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link.call(null,references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq.call(null,/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links.call(null,links,cljs.core.fnil.call(null,cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,((function (links,encoded_links){
return (function (s,p__67595){
var vec__67596 = p__67595;
var id = cljs.core.nth.call(null,vec__67596,(0),null);
var link = cljs.core.nth.call(null,vec__67596,(1),null);
return clojure.string.replace.call(null,s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links.call(null,references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__67599){
var map__67600 = p__67599;
var map__67600__$1 = ((((!((map__67600 == null)))?((((map__67600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67600):map__67600);
var state = map__67600__$1;
var code = cljs.core.get.call(null,map__67600__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67600__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__67600__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__48579__auto__ = (references == null);
if(or__48579__auto__){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = code;
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links.call(null,references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace.call(null,text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__5457__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__67602){
while(true){
var map__67603 = p__67602;
var map__67603__$1 = ((((!((map__67603 == null)))?((((map__67603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67603):map__67603);
var state = map__67603__$1;
var footnotes = cljs.core.get.call(null,map__67603__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__67605 = next_text;
var G__67606 = next_state;
text = G__67605;
p__67602 = G__67606;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__67607){
var map__67608 = p__67607;
var map__67608__$1 = ((((!((map__67608 == null)))?((((map__67608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67608):map__67608);
var state = map__67608__$1;
var code = cljs.core.get.call(null,map__67608__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__67608__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__67608__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__48579__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__48579__auto__){
return or__48579__auto__;
} else {
var or__48579__auto____$1 = code;
if(cljs.core.truth_(or__48579__auto____$1)){
return or__48579__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__67610 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__67610,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__67610,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(title)?["\" title=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,title)),""].join(''):"\""))].join('');
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_text)," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__67613){
var map__67614 = p__67613;
var map__67614__$1 = ((((!((map__67614 == null)))?((((map__67614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67614):map__67614);
var state = map__67614__$1;
var references = cljs.core.get.call(null,map__67614__$1,new cljs.core.Keyword(null,"references","references",882562509));
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.call(null,cljs.core.re_seq.call(null,matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq.call(null,ms)){
var vec__67616 = cljs.core.first.call(null,ms);
var m = cljs.core.nth.call(null,vec__67616,(0),null);
var alt = cljs.core.nth.call(null,vec__67616,(1),null);
var ref = cljs.core.nth.call(null,vec__67616,(2),null);
var refval = cljs.core.get.call(null,references,ref);
var im = markdown.links.make_image_reference.call(null,cljs.core.first.call(null,refval),alt,cljs.core.second.call(null,refval));
var G__67619 = cljs.core.rest.call(null,ms);
var G__67620 = clojure.string.replace.call(null,new_text,m,im);
ms = G__67619;
new_text = G__67620;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=links.js.map?rel=1515662039259
