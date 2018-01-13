// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67435 = arguments.length;
var i__49859__auto___67436 = (0);
while(true){
if((i__49859__auto___67436 < len__49858__auto___67435)){
args__49865__auto__.push((arguments[i__49859__auto___67436]));

var G__67437 = (i__49859__auto___67436 + (1));
i__49859__auto___67436 = G__67437;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq67433){
var G__67434 = cljs.core.first.call(null,seq67433);
var seq67433__$1 = cljs.core.next.call(null,seq67433);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__67434,seq67433__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67440 = arguments.length;
var i__49859__auto___67441 = (0);
while(true){
if((i__49859__auto___67441 < len__49858__auto___67440)){
args__49865__auto__.push((arguments[i__49859__auto___67441]));

var G__67442 = (i__49859__auto___67441 + (1));
i__49859__auto___67441 = G__67442;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq67438){
var G__67439 = cljs.core.first.call(null,seq67438);
var seq67438__$1 = cljs.core.next.call(null,seq67438);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__67439,seq67438__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67445 = arguments.length;
var i__49859__auto___67446 = (0);
while(true){
if((i__49859__auto___67446 < len__49858__auto___67445)){
args__49865__auto__.push((arguments[i__49859__auto___67446]));

var G__67447 = (i__49859__auto___67446 + (1));
i__49859__auto___67446 = G__67447;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq67443){
var G__67444 = cljs.core.first.call(null,seq67443);
var seq67443__$1 = cljs.core.next.call(null,seq67443);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__67444,seq67443__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67450 = arguments.length;
var i__49859__auto___67451 = (0);
while(true){
if((i__49859__auto___67451 < len__49858__auto___67450)){
args__49865__auto__.push((arguments[i__49859__auto___67451]));

var G__67452 = (i__49859__auto___67451 + (1));
i__49859__auto___67451 = G__67452;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq67448){
var G__67449 = cljs.core.first.call(null,seq67448);
var seq67448__$1 = cljs.core.next.call(null,seq67448);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__67449,seq67448__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67455 = arguments.length;
var i__49859__auto___67456 = (0);
while(true){
if((i__49859__auto___67456 < len__49858__auto___67455)){
args__49865__auto__.push((arguments[i__49859__auto___67456]));

var G__67457 = (i__49859__auto___67456 + (1));
i__49859__auto___67456 = G__67457;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq67453){
var G__67454 = cljs.core.first.call(null,seq67453);
var seq67453__$1 = cljs.core.next.call(null,seq67453);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__67454,seq67453__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67460 = arguments.length;
var i__49859__auto___67461 = (0);
while(true){
if((i__49859__auto___67461 < len__49858__auto___67460)){
args__49865__auto__.push((arguments[i__49859__auto___67461]));

var G__67462 = (i__49859__auto___67461 + (1));
i__49859__auto___67461 = G__67462;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq67458){
var G__67459 = cljs.core.first.call(null,seq67458);
var seq67458__$1 = cljs.core.next.call(null,seq67458);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__67459,seq67458__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67465 = arguments.length;
var i__49859__auto___67466 = (0);
while(true){
if((i__49859__auto___67466 < len__49858__auto___67465)){
args__49865__auto__.push((arguments[i__49859__auto___67466]));

var G__67467 = (i__49859__auto___67466 + (1));
i__49859__auto___67466 = G__67467;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq67463){
var G__67464 = cljs.core.first.call(null,seq67463);
var seq67463__$1 = cljs.core.next.call(null,seq67463);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__67464,seq67463__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67470 = arguments.length;
var i__49859__auto___67471 = (0);
while(true){
if((i__49859__auto___67471 < len__49858__auto___67470)){
args__49865__auto__.push((arguments[i__49859__auto___67471]));

var G__67472 = (i__49859__auto___67471 + (1));
i__49859__auto___67471 = G__67472;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq67468){
var G__67469 = cljs.core.first.call(null,seq67468);
var seq67468__$1 = cljs.core.next.call(null,seq67468);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__67469,seq67468__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67475 = arguments.length;
var i__49859__auto___67476 = (0);
while(true){
if((i__49859__auto___67476 < len__49858__auto___67475)){
args__49865__auto__.push((arguments[i__49859__auto___67476]));

var G__67477 = (i__49859__auto___67476 + (1));
i__49859__auto___67476 = G__67477;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54119__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__54119__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54119__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq67473){
var G__67474 = cljs.core.first.call(null,seq67473);
var seq67473__$1 = cljs.core.next.call(null,seq67473);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__67474,seq67473__$1);
});


//# sourceMappingURL=core.js.map?rel=1515662039125
