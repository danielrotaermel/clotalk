// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__70231 = arguments.length;
switch (G__70231) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async70232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70232 = (function (f,blockable,meta70233){
this.f = f;
this.blockable = blockable;
this.meta70233 = meta70233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70234,meta70233__$1){
var self__ = this;
var _70234__$1 = this;
return (new cljs.core.async.t_cljs$core$async70232(self__.f,self__.blockable,meta70233__$1));
});

cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70234){
var self__ = this;
var _70234__$1 = this;
return self__.meta70233;
});

cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async70232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async70232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70233","meta70233",-461846391,null)], null);
});

cljs.core.async.t_cljs$core$async70232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70232";

cljs.core.async.t_cljs$core$async70232.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async70232");
});

cljs.core.async.__GT_t_cljs$core$async70232 = (function cljs$core$async$__GT_t_cljs$core$async70232(f__$1,blockable__$1,meta70233){
return (new cljs.core.async.t_cljs$core$async70232(f__$1,blockable__$1,meta70233));
});

}

return (new cljs.core.async.t_cljs$core$async70232(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__70238 = arguments.length;
switch (G__70238) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__70241 = arguments.length;
switch (G__70241) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__70244 = arguments.length;
switch (G__70244) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_70246 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_70246);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_70246,ret){
return (function (){
return fn1.call(null,val_70246);
});})(val_70246,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__70248 = arguments.length;
switch (G__70248) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__49624__auto___70250 = n;
var x_70251 = (0);
while(true){
if((x_70251 < n__49624__auto___70250)){
(a[x_70251] = (0));

var G__70252 = (x_70251 + (1));
x_70251 = G__70252;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__70253 = (i + (1));
i = G__70253;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async70254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70254 = (function (flag,meta70255){
this.flag = flag;
this.meta70255 = meta70255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_70256,meta70255__$1){
var self__ = this;
var _70256__$1 = this;
return (new cljs.core.async.t_cljs$core$async70254(self__.flag,meta70255__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_70256){
var self__ = this;
var _70256__$1 = this;
return self__.meta70255;
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta70255","meta70255",898623351,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async70254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70254";

cljs.core.async.t_cljs$core$async70254.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async70254");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async70254 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async70254(flag__$1,meta70255){
return (new cljs.core.async.t_cljs$core$async70254(flag__$1,meta70255));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async70254(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async70257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70257 = (function (flag,cb,meta70258){
this.flag = flag;
this.cb = cb;
this.meta70258 = meta70258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70259,meta70258__$1){
var self__ = this;
var _70259__$1 = this;
return (new cljs.core.async.t_cljs$core$async70257(self__.flag,self__.cb,meta70258__$1));
});

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70259){
var self__ = this;
var _70259__$1 = this;
return self__.meta70258;
});

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async70257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async70257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta70258","meta70258",2002169499,null)], null);
});

cljs.core.async.t_cljs$core$async70257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70257";

cljs.core.async.t_cljs$core$async70257.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async70257");
});

cljs.core.async.__GT_t_cljs$core$async70257 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async70257(flag__$1,cb__$1,meta70258){
return (new cljs.core.async.t_cljs$core$async70257(flag__$1,cb__$1,meta70258));
});

}

return (new cljs.core.async.t_cljs$core$async70257(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70260_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70261_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70261_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__48579__auto__ = wport;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return port;
}
})()], null));
} else {
var G__70262 = (i + (1));
i = G__70262;
continue;
}
} else {
return null;
}
break;
}
})();
var or__48579__auto__ = ret;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__48567__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__48567__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___70268 = arguments.length;
var i__49859__auto___70269 = (0);
while(true){
if((i__49859__auto___70269 < len__49858__auto___70268)){
args__49865__auto__.push((arguments[i__49859__auto___70269]));

var G__70270 = (i__49859__auto___70269 + (1));
i__49859__auto___70269 = G__70270;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((1) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49866__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__70265){
var map__70266 = p__70265;
var map__70266__$1 = ((((!((map__70266 == null)))?((((map__70266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70266):map__70266);
var opts = map__70266__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq70263){
var G__70264 = cljs.core.first.call(null,seq70263);
var seq70263__$1 = cljs.core.next.call(null,seq70263);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70264,seq70263__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__70272 = arguments.length;
switch (G__70272) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__59869__auto___70318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___70318){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___70318){
return (function (state_70296){
var state_val_70297 = (state_70296[(1)]);
if((state_val_70297 === (7))){
var inst_70292 = (state_70296[(2)]);
var state_70296__$1 = state_70296;
var statearr_70298_70319 = state_70296__$1;
(statearr_70298_70319[(2)] = inst_70292);

(statearr_70298_70319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (1))){
var state_70296__$1 = state_70296;
var statearr_70299_70320 = state_70296__$1;
(statearr_70299_70320[(2)] = null);

(statearr_70299_70320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (4))){
var inst_70275 = (state_70296[(7)]);
var inst_70275__$1 = (state_70296[(2)]);
var inst_70276 = (inst_70275__$1 == null);
var state_70296__$1 = (function (){var statearr_70300 = state_70296;
(statearr_70300[(7)] = inst_70275__$1);

return statearr_70300;
})();
if(cljs.core.truth_(inst_70276)){
var statearr_70301_70321 = state_70296__$1;
(statearr_70301_70321[(1)] = (5));

} else {
var statearr_70302_70322 = state_70296__$1;
(statearr_70302_70322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (13))){
var state_70296__$1 = state_70296;
var statearr_70303_70323 = state_70296__$1;
(statearr_70303_70323[(2)] = null);

(statearr_70303_70323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (6))){
var inst_70275 = (state_70296[(7)]);
var state_70296__$1 = state_70296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70296__$1,(11),to,inst_70275);
} else {
if((state_val_70297 === (3))){
var inst_70294 = (state_70296[(2)]);
var state_70296__$1 = state_70296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70296__$1,inst_70294);
} else {
if((state_val_70297 === (12))){
var state_70296__$1 = state_70296;
var statearr_70304_70324 = state_70296__$1;
(statearr_70304_70324[(2)] = null);

(statearr_70304_70324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (2))){
var state_70296__$1 = state_70296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70296__$1,(4),from);
} else {
if((state_val_70297 === (11))){
var inst_70285 = (state_70296[(2)]);
var state_70296__$1 = state_70296;
if(cljs.core.truth_(inst_70285)){
var statearr_70305_70325 = state_70296__$1;
(statearr_70305_70325[(1)] = (12));

} else {
var statearr_70306_70326 = state_70296__$1;
(statearr_70306_70326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (9))){
var state_70296__$1 = state_70296;
var statearr_70307_70327 = state_70296__$1;
(statearr_70307_70327[(2)] = null);

(statearr_70307_70327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (5))){
var state_70296__$1 = state_70296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70308_70328 = state_70296__$1;
(statearr_70308_70328[(1)] = (8));

} else {
var statearr_70309_70329 = state_70296__$1;
(statearr_70309_70329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (14))){
var inst_70290 = (state_70296[(2)]);
var state_70296__$1 = state_70296;
var statearr_70310_70330 = state_70296__$1;
(statearr_70310_70330[(2)] = inst_70290);

(statearr_70310_70330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (10))){
var inst_70282 = (state_70296[(2)]);
var state_70296__$1 = state_70296;
var statearr_70311_70331 = state_70296__$1;
(statearr_70311_70331[(2)] = inst_70282);

(statearr_70311_70331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70297 === (8))){
var inst_70279 = cljs.core.async.close_BANG_.call(null,to);
var state_70296__$1 = state_70296;
var statearr_70312_70332 = state_70296__$1;
(statearr_70312_70332[(2)] = inst_70279);

(statearr_70312_70332[(1)] = (10));


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
});})(c__59869__auto___70318))
;
return ((function (switch__59779__auto__,c__59869__auto___70318){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_70313 = [null,null,null,null,null,null,null,null];
(statearr_70313[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_70313[(1)] = (1));

return statearr_70313;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_70296){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70314){if((e70314 instanceof Object)){
var ex__59783__auto__ = e70314;
var statearr_70315_70333 = state_70296;
(statearr_70315_70333[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70334 = state_70296;
state_70296 = G__70334;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_70296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_70296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___70318))
})();
var state__59871__auto__ = (function (){var statearr_70316 = f__59870__auto__.call(null);
(statearr_70316[(6)] = c__59869__auto___70318);

return statearr_70316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___70318))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__70335){
var vec__70336 = p__70335;
var v = cljs.core.nth.call(null,vec__70336,(0),null);
var p = cljs.core.nth.call(null,vec__70336,(1),null);
var job = vec__70336;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__59869__auto___70507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results){
return (function (state_70343){
var state_val_70344 = (state_70343[(1)]);
if((state_val_70344 === (1))){
var state_70343__$1 = state_70343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70343__$1,(2),res,v);
} else {
if((state_val_70344 === (2))){
var inst_70340 = (state_70343[(2)]);
var inst_70341 = cljs.core.async.close_BANG_.call(null,res);
var state_70343__$1 = (function (){var statearr_70345 = state_70343;
(statearr_70345[(7)] = inst_70340);

return statearr_70345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70343__$1,inst_70341);
} else {
return null;
}
}
});})(c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results))
;
return ((function (switch__59779__auto__,c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_70346 = [null,null,null,null,null,null,null,null];
(statearr_70346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__);

(statearr_70346[(1)] = (1));

return statearr_70346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1 = (function (state_70343){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70347){if((e70347 instanceof Object)){
var ex__59783__auto__ = e70347;
var statearr_70348_70508 = state_70343;
(statearr_70348_70508[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70509 = state_70343;
state_70343 = G__70509;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = function(state_70343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1.call(this,state_70343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results))
})();
var state__59871__auto__ = (function (){var statearr_70349 = f__59870__auto__.call(null);
(statearr_70349[(6)] = c__59869__auto___70507);

return statearr_70349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___70507,res,vec__70336,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__70350){
var vec__70351 = p__70350;
var v = cljs.core.nth.call(null,vec__70351,(0),null);
var p = cljs.core.nth.call(null,vec__70351,(1),null);
var job = vec__70351;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__49624__auto___70510 = n;
var __70511 = (0);
while(true){
if((__70511 < n__49624__auto___70510)){
var G__70354_70512 = type;
var G__70354_70513__$1 = (((G__70354_70512 instanceof cljs.core.Keyword))?G__70354_70512.fqn:null);
switch (G__70354_70513__$1) {
case "compute":
var c__59869__auto___70515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__70511,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (__70511,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function (state_70367){
var state_val_70368 = (state_70367[(1)]);
if((state_val_70368 === (1))){
var state_70367__$1 = state_70367;
var statearr_70369_70516 = state_70367__$1;
(statearr_70369_70516[(2)] = null);

(statearr_70369_70516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70368 === (2))){
var state_70367__$1 = state_70367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70367__$1,(4),jobs);
} else {
if((state_val_70368 === (3))){
var inst_70365 = (state_70367[(2)]);
var state_70367__$1 = state_70367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70367__$1,inst_70365);
} else {
if((state_val_70368 === (4))){
var inst_70357 = (state_70367[(2)]);
var inst_70358 = process.call(null,inst_70357);
var state_70367__$1 = state_70367;
if(cljs.core.truth_(inst_70358)){
var statearr_70370_70517 = state_70367__$1;
(statearr_70370_70517[(1)] = (5));

} else {
var statearr_70371_70518 = state_70367__$1;
(statearr_70371_70518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70368 === (5))){
var state_70367__$1 = state_70367;
var statearr_70372_70519 = state_70367__$1;
(statearr_70372_70519[(2)] = null);

(statearr_70372_70519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70368 === (6))){
var state_70367__$1 = state_70367;
var statearr_70373_70520 = state_70367__$1;
(statearr_70373_70520[(2)] = null);

(statearr_70373_70520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70368 === (7))){
var inst_70363 = (state_70367[(2)]);
var state_70367__$1 = state_70367;
var statearr_70374_70521 = state_70367__$1;
(statearr_70374_70521[(2)] = inst_70363);

(statearr_70374_70521[(1)] = (3));


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
});})(__70511,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
;
return ((function (__70511,switch__59779__auto__,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_70375 = [null,null,null,null,null,null,null];
(statearr_70375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__);

(statearr_70375[(1)] = (1));

return statearr_70375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1 = (function (state_70367){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70376){if((e70376 instanceof Object)){
var ex__59783__auto__ = e70376;
var statearr_70377_70522 = state_70367;
(statearr_70377_70522[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70523 = state_70367;
state_70367 = G__70523;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = function(state_70367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1.call(this,state_70367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__;
})()
;})(__70511,switch__59779__auto__,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
})();
var state__59871__auto__ = (function (){var statearr_70378 = f__59870__auto__.call(null);
(statearr_70378[(6)] = c__59869__auto___70515);

return statearr_70378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(__70511,c__59869__auto___70515,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
);


break;
case "async":
var c__59869__auto___70524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__70511,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (__70511,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function (state_70391){
var state_val_70392 = (state_70391[(1)]);
if((state_val_70392 === (1))){
var state_70391__$1 = state_70391;
var statearr_70393_70525 = state_70391__$1;
(statearr_70393_70525[(2)] = null);

(statearr_70393_70525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70392 === (2))){
var state_70391__$1 = state_70391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70391__$1,(4),jobs);
} else {
if((state_val_70392 === (3))){
var inst_70389 = (state_70391[(2)]);
var state_70391__$1 = state_70391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70391__$1,inst_70389);
} else {
if((state_val_70392 === (4))){
var inst_70381 = (state_70391[(2)]);
var inst_70382 = async.call(null,inst_70381);
var state_70391__$1 = state_70391;
if(cljs.core.truth_(inst_70382)){
var statearr_70394_70526 = state_70391__$1;
(statearr_70394_70526[(1)] = (5));

} else {
var statearr_70395_70527 = state_70391__$1;
(statearr_70395_70527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70392 === (5))){
var state_70391__$1 = state_70391;
var statearr_70396_70528 = state_70391__$1;
(statearr_70396_70528[(2)] = null);

(statearr_70396_70528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70392 === (6))){
var state_70391__$1 = state_70391;
var statearr_70397_70529 = state_70391__$1;
(statearr_70397_70529[(2)] = null);

(statearr_70397_70529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70392 === (7))){
var inst_70387 = (state_70391[(2)]);
var state_70391__$1 = state_70391;
var statearr_70398_70530 = state_70391__$1;
(statearr_70398_70530[(2)] = inst_70387);

(statearr_70398_70530[(1)] = (3));


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
});})(__70511,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
;
return ((function (__70511,switch__59779__auto__,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_70399 = [null,null,null,null,null,null,null];
(statearr_70399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__);

(statearr_70399[(1)] = (1));

return statearr_70399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1 = (function (state_70391){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70400){if((e70400 instanceof Object)){
var ex__59783__auto__ = e70400;
var statearr_70401_70531 = state_70391;
(statearr_70401_70531[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70532 = state_70391;
state_70391 = G__70532;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = function(state_70391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1.call(this,state_70391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__;
})()
;})(__70511,switch__59779__auto__,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
})();
var state__59871__auto__ = (function (){var statearr_70402 = f__59870__auto__.call(null);
(statearr_70402[(6)] = c__59869__auto___70524);

return statearr_70402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(__70511,c__59869__auto___70524,G__70354_70512,G__70354_70513__$1,n__49624__auto___70510,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70354_70513__$1)].join('')));

}

var G__70533 = (__70511 + (1));
__70511 = G__70533;
continue;
} else {
}
break;
}

var c__59869__auto___70534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___70534,jobs,results,process,async){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___70534,jobs,results,process,async){
return (function (state_70424){
var state_val_70425 = (state_70424[(1)]);
if((state_val_70425 === (1))){
var state_70424__$1 = state_70424;
var statearr_70426_70535 = state_70424__$1;
(statearr_70426_70535[(2)] = null);

(statearr_70426_70535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70425 === (2))){
var state_70424__$1 = state_70424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70424__$1,(4),from);
} else {
if((state_val_70425 === (3))){
var inst_70422 = (state_70424[(2)]);
var state_70424__$1 = state_70424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70424__$1,inst_70422);
} else {
if((state_val_70425 === (4))){
var inst_70405 = (state_70424[(7)]);
var inst_70405__$1 = (state_70424[(2)]);
var inst_70406 = (inst_70405__$1 == null);
var state_70424__$1 = (function (){var statearr_70427 = state_70424;
(statearr_70427[(7)] = inst_70405__$1);

return statearr_70427;
})();
if(cljs.core.truth_(inst_70406)){
var statearr_70428_70536 = state_70424__$1;
(statearr_70428_70536[(1)] = (5));

} else {
var statearr_70429_70537 = state_70424__$1;
(statearr_70429_70537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70425 === (5))){
var inst_70408 = cljs.core.async.close_BANG_.call(null,jobs);
var state_70424__$1 = state_70424;
var statearr_70430_70538 = state_70424__$1;
(statearr_70430_70538[(2)] = inst_70408);

(statearr_70430_70538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70425 === (6))){
var inst_70410 = (state_70424[(8)]);
var inst_70405 = (state_70424[(7)]);
var inst_70410__$1 = cljs.core.async.chan.call(null,(1));
var inst_70411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70412 = [inst_70405,inst_70410__$1];
var inst_70413 = (new cljs.core.PersistentVector(null,2,(5),inst_70411,inst_70412,null));
var state_70424__$1 = (function (){var statearr_70431 = state_70424;
(statearr_70431[(8)] = inst_70410__$1);

return statearr_70431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70424__$1,(8),jobs,inst_70413);
} else {
if((state_val_70425 === (7))){
var inst_70420 = (state_70424[(2)]);
var state_70424__$1 = state_70424;
var statearr_70432_70539 = state_70424__$1;
(statearr_70432_70539[(2)] = inst_70420);

(statearr_70432_70539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70425 === (8))){
var inst_70410 = (state_70424[(8)]);
var inst_70415 = (state_70424[(2)]);
var state_70424__$1 = (function (){var statearr_70433 = state_70424;
(statearr_70433[(9)] = inst_70415);

return statearr_70433;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70424__$1,(9),results,inst_70410);
} else {
if((state_val_70425 === (9))){
var inst_70417 = (state_70424[(2)]);
var state_70424__$1 = (function (){var statearr_70434 = state_70424;
(statearr_70434[(10)] = inst_70417);

return statearr_70434;
})();
var statearr_70435_70540 = state_70424__$1;
(statearr_70435_70540[(2)] = null);

(statearr_70435_70540[(1)] = (2));


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
});})(c__59869__auto___70534,jobs,results,process,async))
;
return ((function (switch__59779__auto__,c__59869__auto___70534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_70436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__);

(statearr_70436[(1)] = (1));

return statearr_70436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1 = (function (state_70424){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70437){if((e70437 instanceof Object)){
var ex__59783__auto__ = e70437;
var statearr_70438_70541 = state_70424;
(statearr_70438_70541[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70542 = state_70424;
state_70424 = G__70542;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = function(state_70424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1.call(this,state_70424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___70534,jobs,results,process,async))
})();
var state__59871__auto__ = (function (){var statearr_70439 = f__59870__auto__.call(null);
(statearr_70439[(6)] = c__59869__auto___70534);

return statearr_70439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___70534,jobs,results,process,async))
);


var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__,jobs,results,process,async){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__,jobs,results,process,async){
return (function (state_70477){
var state_val_70478 = (state_70477[(1)]);
if((state_val_70478 === (7))){
var inst_70473 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
var statearr_70479_70543 = state_70477__$1;
(statearr_70479_70543[(2)] = inst_70473);

(statearr_70479_70543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (20))){
var state_70477__$1 = state_70477;
var statearr_70480_70544 = state_70477__$1;
(statearr_70480_70544[(2)] = null);

(statearr_70480_70544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (1))){
var state_70477__$1 = state_70477;
var statearr_70481_70545 = state_70477__$1;
(statearr_70481_70545[(2)] = null);

(statearr_70481_70545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (4))){
var inst_70442 = (state_70477[(7)]);
var inst_70442__$1 = (state_70477[(2)]);
var inst_70443 = (inst_70442__$1 == null);
var state_70477__$1 = (function (){var statearr_70482 = state_70477;
(statearr_70482[(7)] = inst_70442__$1);

return statearr_70482;
})();
if(cljs.core.truth_(inst_70443)){
var statearr_70483_70546 = state_70477__$1;
(statearr_70483_70546[(1)] = (5));

} else {
var statearr_70484_70547 = state_70477__$1;
(statearr_70484_70547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (15))){
var inst_70455 = (state_70477[(8)]);
var state_70477__$1 = state_70477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70477__$1,(18),to,inst_70455);
} else {
if((state_val_70478 === (21))){
var inst_70468 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
var statearr_70485_70548 = state_70477__$1;
(statearr_70485_70548[(2)] = inst_70468);

(statearr_70485_70548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (13))){
var inst_70470 = (state_70477[(2)]);
var state_70477__$1 = (function (){var statearr_70486 = state_70477;
(statearr_70486[(9)] = inst_70470);

return statearr_70486;
})();
var statearr_70487_70549 = state_70477__$1;
(statearr_70487_70549[(2)] = null);

(statearr_70487_70549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (6))){
var inst_70442 = (state_70477[(7)]);
var state_70477__$1 = state_70477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70477__$1,(11),inst_70442);
} else {
if((state_val_70478 === (17))){
var inst_70463 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
if(cljs.core.truth_(inst_70463)){
var statearr_70488_70550 = state_70477__$1;
(statearr_70488_70550[(1)] = (19));

} else {
var statearr_70489_70551 = state_70477__$1;
(statearr_70489_70551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (3))){
var inst_70475 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70477__$1,inst_70475);
} else {
if((state_val_70478 === (12))){
var inst_70452 = (state_70477[(10)]);
var state_70477__$1 = state_70477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70477__$1,(14),inst_70452);
} else {
if((state_val_70478 === (2))){
var state_70477__$1 = state_70477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70477__$1,(4),results);
} else {
if((state_val_70478 === (19))){
var state_70477__$1 = state_70477;
var statearr_70490_70552 = state_70477__$1;
(statearr_70490_70552[(2)] = null);

(statearr_70490_70552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (11))){
var inst_70452 = (state_70477[(2)]);
var state_70477__$1 = (function (){var statearr_70491 = state_70477;
(statearr_70491[(10)] = inst_70452);

return statearr_70491;
})();
var statearr_70492_70553 = state_70477__$1;
(statearr_70492_70553[(2)] = null);

(statearr_70492_70553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (9))){
var state_70477__$1 = state_70477;
var statearr_70493_70554 = state_70477__$1;
(statearr_70493_70554[(2)] = null);

(statearr_70493_70554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (5))){
var state_70477__$1 = state_70477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70494_70555 = state_70477__$1;
(statearr_70494_70555[(1)] = (8));

} else {
var statearr_70495_70556 = state_70477__$1;
(statearr_70495_70556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (14))){
var inst_70455 = (state_70477[(8)]);
var inst_70457 = (state_70477[(11)]);
var inst_70455__$1 = (state_70477[(2)]);
var inst_70456 = (inst_70455__$1 == null);
var inst_70457__$1 = cljs.core.not.call(null,inst_70456);
var state_70477__$1 = (function (){var statearr_70496 = state_70477;
(statearr_70496[(8)] = inst_70455__$1);

(statearr_70496[(11)] = inst_70457__$1);

return statearr_70496;
})();
if(inst_70457__$1){
var statearr_70497_70557 = state_70477__$1;
(statearr_70497_70557[(1)] = (15));

} else {
var statearr_70498_70558 = state_70477__$1;
(statearr_70498_70558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (16))){
var inst_70457 = (state_70477[(11)]);
var state_70477__$1 = state_70477;
var statearr_70499_70559 = state_70477__$1;
(statearr_70499_70559[(2)] = inst_70457);

(statearr_70499_70559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (10))){
var inst_70449 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
var statearr_70500_70560 = state_70477__$1;
(statearr_70500_70560[(2)] = inst_70449);

(statearr_70500_70560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (18))){
var inst_70460 = (state_70477[(2)]);
var state_70477__$1 = state_70477;
var statearr_70501_70561 = state_70477__$1;
(statearr_70501_70561[(2)] = inst_70460);

(statearr_70501_70561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70478 === (8))){
var inst_70446 = cljs.core.async.close_BANG_.call(null,to);
var state_70477__$1 = state_70477;
var statearr_70502_70562 = state_70477__$1;
(statearr_70502_70562[(2)] = inst_70446);

(statearr_70502_70562[(1)] = (10));


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
});})(c__59869__auto__,jobs,results,process,async))
;
return ((function (switch__59779__auto__,c__59869__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_70503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__);

(statearr_70503[(1)] = (1));

return statearr_70503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1 = (function (state_70477){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70504){if((e70504 instanceof Object)){
var ex__59783__auto__ = e70504;
var statearr_70505_70563 = state_70477;
(statearr_70505_70563[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70564 = state_70477;
state_70477 = G__70564;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__ = function(state_70477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1.call(this,state_70477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__,jobs,results,process,async))
})();
var state__59871__auto__ = (function (){var statearr_70506 = f__59870__auto__.call(null);
(statearr_70506[(6)] = c__59869__auto__);

return statearr_70506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__,jobs,results,process,async))
);

return c__59869__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70566 = arguments.length;
switch (G__70566) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70569 = arguments.length;
switch (G__70569) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70572 = arguments.length;
switch (G__70572) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__59869__auto___70621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___70621,tc,fc){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___70621,tc,fc){
return (function (state_70598){
var state_val_70599 = (state_70598[(1)]);
if((state_val_70599 === (7))){
var inst_70594 = (state_70598[(2)]);
var state_70598__$1 = state_70598;
var statearr_70600_70622 = state_70598__$1;
(statearr_70600_70622[(2)] = inst_70594);

(statearr_70600_70622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (1))){
var state_70598__$1 = state_70598;
var statearr_70601_70623 = state_70598__$1;
(statearr_70601_70623[(2)] = null);

(statearr_70601_70623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (4))){
var inst_70575 = (state_70598[(7)]);
var inst_70575__$1 = (state_70598[(2)]);
var inst_70576 = (inst_70575__$1 == null);
var state_70598__$1 = (function (){var statearr_70602 = state_70598;
(statearr_70602[(7)] = inst_70575__$1);

return statearr_70602;
})();
if(cljs.core.truth_(inst_70576)){
var statearr_70603_70624 = state_70598__$1;
(statearr_70603_70624[(1)] = (5));

} else {
var statearr_70604_70625 = state_70598__$1;
(statearr_70604_70625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (13))){
var state_70598__$1 = state_70598;
var statearr_70605_70626 = state_70598__$1;
(statearr_70605_70626[(2)] = null);

(statearr_70605_70626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (6))){
var inst_70575 = (state_70598[(7)]);
var inst_70581 = p.call(null,inst_70575);
var state_70598__$1 = state_70598;
if(cljs.core.truth_(inst_70581)){
var statearr_70606_70627 = state_70598__$1;
(statearr_70606_70627[(1)] = (9));

} else {
var statearr_70607_70628 = state_70598__$1;
(statearr_70607_70628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (3))){
var inst_70596 = (state_70598[(2)]);
var state_70598__$1 = state_70598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70598__$1,inst_70596);
} else {
if((state_val_70599 === (12))){
var state_70598__$1 = state_70598;
var statearr_70608_70629 = state_70598__$1;
(statearr_70608_70629[(2)] = null);

(statearr_70608_70629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (2))){
var state_70598__$1 = state_70598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70598__$1,(4),ch);
} else {
if((state_val_70599 === (11))){
var inst_70575 = (state_70598[(7)]);
var inst_70585 = (state_70598[(2)]);
var state_70598__$1 = state_70598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70598__$1,(8),inst_70585,inst_70575);
} else {
if((state_val_70599 === (9))){
var state_70598__$1 = state_70598;
var statearr_70609_70630 = state_70598__$1;
(statearr_70609_70630[(2)] = tc);

(statearr_70609_70630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (5))){
var inst_70578 = cljs.core.async.close_BANG_.call(null,tc);
var inst_70579 = cljs.core.async.close_BANG_.call(null,fc);
var state_70598__$1 = (function (){var statearr_70610 = state_70598;
(statearr_70610[(8)] = inst_70578);

return statearr_70610;
})();
var statearr_70611_70631 = state_70598__$1;
(statearr_70611_70631[(2)] = inst_70579);

(statearr_70611_70631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (14))){
var inst_70592 = (state_70598[(2)]);
var state_70598__$1 = state_70598;
var statearr_70612_70632 = state_70598__$1;
(statearr_70612_70632[(2)] = inst_70592);

(statearr_70612_70632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (10))){
var state_70598__$1 = state_70598;
var statearr_70613_70633 = state_70598__$1;
(statearr_70613_70633[(2)] = fc);

(statearr_70613_70633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70599 === (8))){
var inst_70587 = (state_70598[(2)]);
var state_70598__$1 = state_70598;
if(cljs.core.truth_(inst_70587)){
var statearr_70614_70634 = state_70598__$1;
(statearr_70614_70634[(1)] = (12));

} else {
var statearr_70615_70635 = state_70598__$1;
(statearr_70615_70635[(1)] = (13));

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
});})(c__59869__auto___70621,tc,fc))
;
return ((function (switch__59779__auto__,c__59869__auto___70621,tc,fc){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_70616 = [null,null,null,null,null,null,null,null,null];
(statearr_70616[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_70616[(1)] = (1));

return statearr_70616;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_70598){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70617){if((e70617 instanceof Object)){
var ex__59783__auto__ = e70617;
var statearr_70618_70636 = state_70598;
(statearr_70618_70636[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70637 = state_70598;
state_70598 = G__70637;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_70598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_70598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___70621,tc,fc))
})();
var state__59871__auto__ = (function (){var statearr_70619 = f__59870__auto__.call(null);
(statearr_70619[(6)] = c__59869__auto___70621);

return statearr_70619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___70621,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__){
return (function (state_70658){
var state_val_70659 = (state_70658[(1)]);
if((state_val_70659 === (7))){
var inst_70654 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
var statearr_70660_70678 = state_70658__$1;
(statearr_70660_70678[(2)] = inst_70654);

(statearr_70660_70678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (1))){
var inst_70638 = init;
var state_70658__$1 = (function (){var statearr_70661 = state_70658;
(statearr_70661[(7)] = inst_70638);

return statearr_70661;
})();
var statearr_70662_70679 = state_70658__$1;
(statearr_70662_70679[(2)] = null);

(statearr_70662_70679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (4))){
var inst_70641 = (state_70658[(8)]);
var inst_70641__$1 = (state_70658[(2)]);
var inst_70642 = (inst_70641__$1 == null);
var state_70658__$1 = (function (){var statearr_70663 = state_70658;
(statearr_70663[(8)] = inst_70641__$1);

return statearr_70663;
})();
if(cljs.core.truth_(inst_70642)){
var statearr_70664_70680 = state_70658__$1;
(statearr_70664_70680[(1)] = (5));

} else {
var statearr_70665_70681 = state_70658__$1;
(statearr_70665_70681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (6))){
var inst_70638 = (state_70658[(7)]);
var inst_70641 = (state_70658[(8)]);
var inst_70645 = (state_70658[(9)]);
var inst_70645__$1 = f.call(null,inst_70638,inst_70641);
var inst_70646 = cljs.core.reduced_QMARK_.call(null,inst_70645__$1);
var state_70658__$1 = (function (){var statearr_70666 = state_70658;
(statearr_70666[(9)] = inst_70645__$1);

return statearr_70666;
})();
if(inst_70646){
var statearr_70667_70682 = state_70658__$1;
(statearr_70667_70682[(1)] = (8));

} else {
var statearr_70668_70683 = state_70658__$1;
(statearr_70668_70683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (3))){
var inst_70656 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70658__$1,inst_70656);
} else {
if((state_val_70659 === (2))){
var state_70658__$1 = state_70658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70658__$1,(4),ch);
} else {
if((state_val_70659 === (9))){
var inst_70645 = (state_70658[(9)]);
var inst_70638 = inst_70645;
var state_70658__$1 = (function (){var statearr_70669 = state_70658;
(statearr_70669[(7)] = inst_70638);

return statearr_70669;
})();
var statearr_70670_70684 = state_70658__$1;
(statearr_70670_70684[(2)] = null);

(statearr_70670_70684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (5))){
var inst_70638 = (state_70658[(7)]);
var state_70658__$1 = state_70658;
var statearr_70671_70685 = state_70658__$1;
(statearr_70671_70685[(2)] = inst_70638);

(statearr_70671_70685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (10))){
var inst_70652 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
var statearr_70672_70686 = state_70658__$1;
(statearr_70672_70686[(2)] = inst_70652);

(statearr_70672_70686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (8))){
var inst_70645 = (state_70658[(9)]);
var inst_70648 = cljs.core.deref.call(null,inst_70645);
var state_70658__$1 = state_70658;
var statearr_70673_70687 = state_70658__$1;
(statearr_70673_70687[(2)] = inst_70648);

(statearr_70673_70687[(1)] = (10));


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
});})(c__59869__auto__))
;
return ((function (switch__59779__auto__,c__59869__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__59780__auto__ = null;
var cljs$core$async$reduce_$_state_machine__59780__auto____0 = (function (){
var statearr_70674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70674[(0)] = cljs$core$async$reduce_$_state_machine__59780__auto__);

(statearr_70674[(1)] = (1));

return statearr_70674;
});
var cljs$core$async$reduce_$_state_machine__59780__auto____1 = (function (state_70658){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70675){if((e70675 instanceof Object)){
var ex__59783__auto__ = e70675;
var statearr_70676_70688 = state_70658;
(statearr_70676_70688[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70689 = state_70658;
state_70658 = G__70689;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__59780__auto__ = function(state_70658){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__59780__auto____1.call(this,state_70658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__59780__auto____0;
cljs$core$async$reduce_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__59780__auto____1;
return cljs$core$async$reduce_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__))
})();
var state__59871__auto__ = (function (){var statearr_70677 = f__59870__auto__.call(null);
(statearr_70677[(6)] = c__59869__auto__);

return statearr_70677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__))
);

return c__59869__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__,f__$1){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__,f__$1){
return (function (state_70695){
var state_val_70696 = (state_70695[(1)]);
if((state_val_70696 === (1))){
var inst_70690 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_70695__$1 = state_70695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70695__$1,(2),inst_70690);
} else {
if((state_val_70696 === (2))){
var inst_70692 = (state_70695[(2)]);
var inst_70693 = f__$1.call(null,inst_70692);
var state_70695__$1 = state_70695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70695__$1,inst_70693);
} else {
return null;
}
}
});})(c__59869__auto__,f__$1))
;
return ((function (switch__59779__auto__,c__59869__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__59780__auto__ = null;
var cljs$core$async$transduce_$_state_machine__59780__auto____0 = (function (){
var statearr_70697 = [null,null,null,null,null,null,null];
(statearr_70697[(0)] = cljs$core$async$transduce_$_state_machine__59780__auto__);

(statearr_70697[(1)] = (1));

return statearr_70697;
});
var cljs$core$async$transduce_$_state_machine__59780__auto____1 = (function (state_70695){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70698){if((e70698 instanceof Object)){
var ex__59783__auto__ = e70698;
var statearr_70699_70701 = state_70695;
(statearr_70699_70701[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70702 = state_70695;
state_70695 = G__70702;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__59780__auto__ = function(state_70695){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__59780__auto____1.call(this,state_70695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__59780__auto____0;
cljs$core$async$transduce_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__59780__auto____1;
return cljs$core$async$transduce_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__,f__$1))
})();
var state__59871__auto__ = (function (){var statearr_70700 = f__59870__auto__.call(null);
(statearr_70700[(6)] = c__59869__auto__);

return statearr_70700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__,f__$1))
);

return c__59869__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70704 = arguments.length;
switch (G__70704) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__){
return (function (state_70729){
var state_val_70730 = (state_70729[(1)]);
if((state_val_70730 === (7))){
var inst_70711 = (state_70729[(2)]);
var state_70729__$1 = state_70729;
var statearr_70731_70752 = state_70729__$1;
(statearr_70731_70752[(2)] = inst_70711);

(statearr_70731_70752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (1))){
var inst_70705 = cljs.core.seq.call(null,coll);
var inst_70706 = inst_70705;
var state_70729__$1 = (function (){var statearr_70732 = state_70729;
(statearr_70732[(7)] = inst_70706);

return statearr_70732;
})();
var statearr_70733_70753 = state_70729__$1;
(statearr_70733_70753[(2)] = null);

(statearr_70733_70753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (4))){
var inst_70706 = (state_70729[(7)]);
var inst_70709 = cljs.core.first.call(null,inst_70706);
var state_70729__$1 = state_70729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70729__$1,(7),ch,inst_70709);
} else {
if((state_val_70730 === (13))){
var inst_70723 = (state_70729[(2)]);
var state_70729__$1 = state_70729;
var statearr_70734_70754 = state_70729__$1;
(statearr_70734_70754[(2)] = inst_70723);

(statearr_70734_70754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (6))){
var inst_70714 = (state_70729[(2)]);
var state_70729__$1 = state_70729;
if(cljs.core.truth_(inst_70714)){
var statearr_70735_70755 = state_70729__$1;
(statearr_70735_70755[(1)] = (8));

} else {
var statearr_70736_70756 = state_70729__$1;
(statearr_70736_70756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (3))){
var inst_70727 = (state_70729[(2)]);
var state_70729__$1 = state_70729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70729__$1,inst_70727);
} else {
if((state_val_70730 === (12))){
var state_70729__$1 = state_70729;
var statearr_70737_70757 = state_70729__$1;
(statearr_70737_70757[(2)] = null);

(statearr_70737_70757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (2))){
var inst_70706 = (state_70729[(7)]);
var state_70729__$1 = state_70729;
if(cljs.core.truth_(inst_70706)){
var statearr_70738_70758 = state_70729__$1;
(statearr_70738_70758[(1)] = (4));

} else {
var statearr_70739_70759 = state_70729__$1;
(statearr_70739_70759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (11))){
var inst_70720 = cljs.core.async.close_BANG_.call(null,ch);
var state_70729__$1 = state_70729;
var statearr_70740_70760 = state_70729__$1;
(statearr_70740_70760[(2)] = inst_70720);

(statearr_70740_70760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (9))){
var state_70729__$1 = state_70729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70741_70761 = state_70729__$1;
(statearr_70741_70761[(1)] = (11));

} else {
var statearr_70742_70762 = state_70729__$1;
(statearr_70742_70762[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (5))){
var inst_70706 = (state_70729[(7)]);
var state_70729__$1 = state_70729;
var statearr_70743_70763 = state_70729__$1;
(statearr_70743_70763[(2)] = inst_70706);

(statearr_70743_70763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (10))){
var inst_70725 = (state_70729[(2)]);
var state_70729__$1 = state_70729;
var statearr_70744_70764 = state_70729__$1;
(statearr_70744_70764[(2)] = inst_70725);

(statearr_70744_70764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70730 === (8))){
var inst_70706 = (state_70729[(7)]);
var inst_70716 = cljs.core.next.call(null,inst_70706);
var inst_70706__$1 = inst_70716;
var state_70729__$1 = (function (){var statearr_70745 = state_70729;
(statearr_70745[(7)] = inst_70706__$1);

return statearr_70745;
})();
var statearr_70746_70765 = state_70729__$1;
(statearr_70746_70765[(2)] = null);

(statearr_70746_70765[(1)] = (2));


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
});})(c__59869__auto__))
;
return ((function (switch__59779__auto__,c__59869__auto__){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_70747 = [null,null,null,null,null,null,null,null];
(statearr_70747[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_70747[(1)] = (1));

return statearr_70747;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_70729){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70748){if((e70748 instanceof Object)){
var ex__59783__auto__ = e70748;
var statearr_70749_70766 = state_70729;
(statearr_70749_70766[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70767 = state_70729;
state_70729 = G__70767;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_70729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_70729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__))
})();
var state__59871__auto__ = (function (){var statearr_70750 = f__59870__auto__.call(null);
(statearr_70750[(6)] = c__59869__auto__);

return statearr_70750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__))
);

return c__59869__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__49312__auto__ = (((_ == null))?null:_);
var m__49313__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,_);
} else {
var m__49313__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__49313__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,ch);
} else {
var m__49313__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m);
} else {
var m__49313__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async70768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70768 = (function (ch,cs,meta70769){
this.ch = ch;
this.cs = cs;
this.meta70769 = meta70769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_70770,meta70769__$1){
var self__ = this;
var _70770__$1 = this;
return (new cljs.core.async.t_cljs$core$async70768(self__.ch,self__.cs,meta70769__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_70770){
var self__ = this;
var _70770__$1 = this;
return self__.meta70769;
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70769","meta70769",881550084,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async70768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70768";

cljs.core.async.t_cljs$core$async70768.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async70768");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async70768 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async70768(ch__$1,cs__$1,meta70769){
return (new cljs.core.async.t_cljs$core$async70768(ch__$1,cs__$1,meta70769));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async70768(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__59869__auto___70990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___70990,cs,m,dchan,dctr,done){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___70990,cs,m,dchan,dctr,done){
return (function (state_70905){
var state_val_70906 = (state_70905[(1)]);
if((state_val_70906 === (7))){
var inst_70901 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70907_70991 = state_70905__$1;
(statearr_70907_70991[(2)] = inst_70901);

(statearr_70907_70991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (20))){
var inst_70804 = (state_70905[(7)]);
var inst_70816 = cljs.core.first.call(null,inst_70804);
var inst_70817 = cljs.core.nth.call(null,inst_70816,(0),null);
var inst_70818 = cljs.core.nth.call(null,inst_70816,(1),null);
var state_70905__$1 = (function (){var statearr_70908 = state_70905;
(statearr_70908[(8)] = inst_70817);

return statearr_70908;
})();
if(cljs.core.truth_(inst_70818)){
var statearr_70909_70992 = state_70905__$1;
(statearr_70909_70992[(1)] = (22));

} else {
var statearr_70910_70993 = state_70905__$1;
(statearr_70910_70993[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (27))){
var inst_70773 = (state_70905[(9)]);
var inst_70846 = (state_70905[(10)]);
var inst_70848 = (state_70905[(11)]);
var inst_70853 = (state_70905[(12)]);
var inst_70853__$1 = cljs.core._nth.call(null,inst_70846,inst_70848);
var inst_70854 = cljs.core.async.put_BANG_.call(null,inst_70853__$1,inst_70773,done);
var state_70905__$1 = (function (){var statearr_70911 = state_70905;
(statearr_70911[(12)] = inst_70853__$1);

return statearr_70911;
})();
if(cljs.core.truth_(inst_70854)){
var statearr_70912_70994 = state_70905__$1;
(statearr_70912_70994[(1)] = (30));

} else {
var statearr_70913_70995 = state_70905__$1;
(statearr_70913_70995[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (1))){
var state_70905__$1 = state_70905;
var statearr_70914_70996 = state_70905__$1;
(statearr_70914_70996[(2)] = null);

(statearr_70914_70996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (24))){
var inst_70804 = (state_70905[(7)]);
var inst_70823 = (state_70905[(2)]);
var inst_70824 = cljs.core.next.call(null,inst_70804);
var inst_70782 = inst_70824;
var inst_70783 = null;
var inst_70784 = (0);
var inst_70785 = (0);
var state_70905__$1 = (function (){var statearr_70915 = state_70905;
(statearr_70915[(13)] = inst_70783);

(statearr_70915[(14)] = inst_70823);

(statearr_70915[(15)] = inst_70784);

(statearr_70915[(16)] = inst_70785);

(statearr_70915[(17)] = inst_70782);

return statearr_70915;
})();
var statearr_70916_70997 = state_70905__$1;
(statearr_70916_70997[(2)] = null);

(statearr_70916_70997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (39))){
var state_70905__$1 = state_70905;
var statearr_70920_70998 = state_70905__$1;
(statearr_70920_70998[(2)] = null);

(statearr_70920_70998[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (4))){
var inst_70773 = (state_70905[(9)]);
var inst_70773__$1 = (state_70905[(2)]);
var inst_70774 = (inst_70773__$1 == null);
var state_70905__$1 = (function (){var statearr_70921 = state_70905;
(statearr_70921[(9)] = inst_70773__$1);

return statearr_70921;
})();
if(cljs.core.truth_(inst_70774)){
var statearr_70922_70999 = state_70905__$1;
(statearr_70922_70999[(1)] = (5));

} else {
var statearr_70923_71000 = state_70905__$1;
(statearr_70923_71000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (15))){
var inst_70783 = (state_70905[(13)]);
var inst_70784 = (state_70905[(15)]);
var inst_70785 = (state_70905[(16)]);
var inst_70782 = (state_70905[(17)]);
var inst_70800 = (state_70905[(2)]);
var inst_70801 = (inst_70785 + (1));
var tmp70917 = inst_70783;
var tmp70918 = inst_70784;
var tmp70919 = inst_70782;
var inst_70782__$1 = tmp70919;
var inst_70783__$1 = tmp70917;
var inst_70784__$1 = tmp70918;
var inst_70785__$1 = inst_70801;
var state_70905__$1 = (function (){var statearr_70924 = state_70905;
(statearr_70924[(13)] = inst_70783__$1);

(statearr_70924[(18)] = inst_70800);

(statearr_70924[(15)] = inst_70784__$1);

(statearr_70924[(16)] = inst_70785__$1);

(statearr_70924[(17)] = inst_70782__$1);

return statearr_70924;
})();
var statearr_70925_71001 = state_70905__$1;
(statearr_70925_71001[(2)] = null);

(statearr_70925_71001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (21))){
var inst_70827 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70929_71002 = state_70905__$1;
(statearr_70929_71002[(2)] = inst_70827);

(statearr_70929_71002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (31))){
var inst_70853 = (state_70905[(12)]);
var inst_70857 = done.call(null,null);
var inst_70858 = cljs.core.async.untap_STAR_.call(null,m,inst_70853);
var state_70905__$1 = (function (){var statearr_70930 = state_70905;
(statearr_70930[(19)] = inst_70857);

return statearr_70930;
})();
var statearr_70931_71003 = state_70905__$1;
(statearr_70931_71003[(2)] = inst_70858);

(statearr_70931_71003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (32))){
var inst_70846 = (state_70905[(10)]);
var inst_70848 = (state_70905[(11)]);
var inst_70847 = (state_70905[(20)]);
var inst_70845 = (state_70905[(21)]);
var inst_70860 = (state_70905[(2)]);
var inst_70861 = (inst_70848 + (1));
var tmp70926 = inst_70846;
var tmp70927 = inst_70847;
var tmp70928 = inst_70845;
var inst_70845__$1 = tmp70928;
var inst_70846__$1 = tmp70926;
var inst_70847__$1 = tmp70927;
var inst_70848__$1 = inst_70861;
var state_70905__$1 = (function (){var statearr_70932 = state_70905;
(statearr_70932[(10)] = inst_70846__$1);

(statearr_70932[(11)] = inst_70848__$1);

(statearr_70932[(20)] = inst_70847__$1);

(statearr_70932[(21)] = inst_70845__$1);

(statearr_70932[(22)] = inst_70860);

return statearr_70932;
})();
var statearr_70933_71004 = state_70905__$1;
(statearr_70933_71004[(2)] = null);

(statearr_70933_71004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (40))){
var inst_70873 = (state_70905[(23)]);
var inst_70877 = done.call(null,null);
var inst_70878 = cljs.core.async.untap_STAR_.call(null,m,inst_70873);
var state_70905__$1 = (function (){var statearr_70934 = state_70905;
(statearr_70934[(24)] = inst_70877);

return statearr_70934;
})();
var statearr_70935_71005 = state_70905__$1;
(statearr_70935_71005[(2)] = inst_70878);

(statearr_70935_71005[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (33))){
var inst_70864 = (state_70905[(25)]);
var inst_70866 = cljs.core.chunked_seq_QMARK_.call(null,inst_70864);
var state_70905__$1 = state_70905;
if(inst_70866){
var statearr_70936_71006 = state_70905__$1;
(statearr_70936_71006[(1)] = (36));

} else {
var statearr_70937_71007 = state_70905__$1;
(statearr_70937_71007[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (13))){
var inst_70794 = (state_70905[(26)]);
var inst_70797 = cljs.core.async.close_BANG_.call(null,inst_70794);
var state_70905__$1 = state_70905;
var statearr_70938_71008 = state_70905__$1;
(statearr_70938_71008[(2)] = inst_70797);

(statearr_70938_71008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (22))){
var inst_70817 = (state_70905[(8)]);
var inst_70820 = cljs.core.async.close_BANG_.call(null,inst_70817);
var state_70905__$1 = state_70905;
var statearr_70939_71009 = state_70905__$1;
(statearr_70939_71009[(2)] = inst_70820);

(statearr_70939_71009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (36))){
var inst_70864 = (state_70905[(25)]);
var inst_70868 = cljs.core.chunk_first.call(null,inst_70864);
var inst_70869 = cljs.core.chunk_rest.call(null,inst_70864);
var inst_70870 = cljs.core.count.call(null,inst_70868);
var inst_70845 = inst_70869;
var inst_70846 = inst_70868;
var inst_70847 = inst_70870;
var inst_70848 = (0);
var state_70905__$1 = (function (){var statearr_70940 = state_70905;
(statearr_70940[(10)] = inst_70846);

(statearr_70940[(11)] = inst_70848);

(statearr_70940[(20)] = inst_70847);

(statearr_70940[(21)] = inst_70845);

return statearr_70940;
})();
var statearr_70941_71010 = state_70905__$1;
(statearr_70941_71010[(2)] = null);

(statearr_70941_71010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (41))){
var inst_70864 = (state_70905[(25)]);
var inst_70880 = (state_70905[(2)]);
var inst_70881 = cljs.core.next.call(null,inst_70864);
var inst_70845 = inst_70881;
var inst_70846 = null;
var inst_70847 = (0);
var inst_70848 = (0);
var state_70905__$1 = (function (){var statearr_70942 = state_70905;
(statearr_70942[(10)] = inst_70846);

(statearr_70942[(11)] = inst_70848);

(statearr_70942[(27)] = inst_70880);

(statearr_70942[(20)] = inst_70847);

(statearr_70942[(21)] = inst_70845);

return statearr_70942;
})();
var statearr_70943_71011 = state_70905__$1;
(statearr_70943_71011[(2)] = null);

(statearr_70943_71011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (43))){
var state_70905__$1 = state_70905;
var statearr_70944_71012 = state_70905__$1;
(statearr_70944_71012[(2)] = null);

(statearr_70944_71012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (29))){
var inst_70889 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70945_71013 = state_70905__$1;
(statearr_70945_71013[(2)] = inst_70889);

(statearr_70945_71013[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (44))){
var inst_70898 = (state_70905[(2)]);
var state_70905__$1 = (function (){var statearr_70946 = state_70905;
(statearr_70946[(28)] = inst_70898);

return statearr_70946;
})();
var statearr_70947_71014 = state_70905__$1;
(statearr_70947_71014[(2)] = null);

(statearr_70947_71014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (6))){
var inst_70837 = (state_70905[(29)]);
var inst_70836 = cljs.core.deref.call(null,cs);
var inst_70837__$1 = cljs.core.keys.call(null,inst_70836);
var inst_70838 = cljs.core.count.call(null,inst_70837__$1);
var inst_70839 = cljs.core.reset_BANG_.call(null,dctr,inst_70838);
var inst_70844 = cljs.core.seq.call(null,inst_70837__$1);
var inst_70845 = inst_70844;
var inst_70846 = null;
var inst_70847 = (0);
var inst_70848 = (0);
var state_70905__$1 = (function (){var statearr_70948 = state_70905;
(statearr_70948[(10)] = inst_70846);

(statearr_70948[(29)] = inst_70837__$1);

(statearr_70948[(30)] = inst_70839);

(statearr_70948[(11)] = inst_70848);

(statearr_70948[(20)] = inst_70847);

(statearr_70948[(21)] = inst_70845);

return statearr_70948;
})();
var statearr_70949_71015 = state_70905__$1;
(statearr_70949_71015[(2)] = null);

(statearr_70949_71015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (28))){
var inst_70864 = (state_70905[(25)]);
var inst_70845 = (state_70905[(21)]);
var inst_70864__$1 = cljs.core.seq.call(null,inst_70845);
var state_70905__$1 = (function (){var statearr_70950 = state_70905;
(statearr_70950[(25)] = inst_70864__$1);

return statearr_70950;
})();
if(inst_70864__$1){
var statearr_70951_71016 = state_70905__$1;
(statearr_70951_71016[(1)] = (33));

} else {
var statearr_70952_71017 = state_70905__$1;
(statearr_70952_71017[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (25))){
var inst_70848 = (state_70905[(11)]);
var inst_70847 = (state_70905[(20)]);
var inst_70850 = (inst_70848 < inst_70847);
var inst_70851 = inst_70850;
var state_70905__$1 = state_70905;
if(cljs.core.truth_(inst_70851)){
var statearr_70953_71018 = state_70905__$1;
(statearr_70953_71018[(1)] = (27));

} else {
var statearr_70954_71019 = state_70905__$1;
(statearr_70954_71019[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (34))){
var state_70905__$1 = state_70905;
var statearr_70955_71020 = state_70905__$1;
(statearr_70955_71020[(2)] = null);

(statearr_70955_71020[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (17))){
var state_70905__$1 = state_70905;
var statearr_70956_71021 = state_70905__$1;
(statearr_70956_71021[(2)] = null);

(statearr_70956_71021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (3))){
var inst_70903 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70905__$1,inst_70903);
} else {
if((state_val_70906 === (12))){
var inst_70832 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70957_71022 = state_70905__$1;
(statearr_70957_71022[(2)] = inst_70832);

(statearr_70957_71022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (2))){
var state_70905__$1 = state_70905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70905__$1,(4),ch);
} else {
if((state_val_70906 === (23))){
var state_70905__$1 = state_70905;
var statearr_70958_71023 = state_70905__$1;
(statearr_70958_71023[(2)] = null);

(statearr_70958_71023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (35))){
var inst_70887 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70959_71024 = state_70905__$1;
(statearr_70959_71024[(2)] = inst_70887);

(statearr_70959_71024[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (19))){
var inst_70804 = (state_70905[(7)]);
var inst_70808 = cljs.core.chunk_first.call(null,inst_70804);
var inst_70809 = cljs.core.chunk_rest.call(null,inst_70804);
var inst_70810 = cljs.core.count.call(null,inst_70808);
var inst_70782 = inst_70809;
var inst_70783 = inst_70808;
var inst_70784 = inst_70810;
var inst_70785 = (0);
var state_70905__$1 = (function (){var statearr_70960 = state_70905;
(statearr_70960[(13)] = inst_70783);

(statearr_70960[(15)] = inst_70784);

(statearr_70960[(16)] = inst_70785);

(statearr_70960[(17)] = inst_70782);

return statearr_70960;
})();
var statearr_70961_71025 = state_70905__$1;
(statearr_70961_71025[(2)] = null);

(statearr_70961_71025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (11))){
var inst_70804 = (state_70905[(7)]);
var inst_70782 = (state_70905[(17)]);
var inst_70804__$1 = cljs.core.seq.call(null,inst_70782);
var state_70905__$1 = (function (){var statearr_70962 = state_70905;
(statearr_70962[(7)] = inst_70804__$1);

return statearr_70962;
})();
if(inst_70804__$1){
var statearr_70963_71026 = state_70905__$1;
(statearr_70963_71026[(1)] = (16));

} else {
var statearr_70964_71027 = state_70905__$1;
(statearr_70964_71027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (9))){
var inst_70834 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70965_71028 = state_70905__$1;
(statearr_70965_71028[(2)] = inst_70834);

(statearr_70965_71028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (5))){
var inst_70780 = cljs.core.deref.call(null,cs);
var inst_70781 = cljs.core.seq.call(null,inst_70780);
var inst_70782 = inst_70781;
var inst_70783 = null;
var inst_70784 = (0);
var inst_70785 = (0);
var state_70905__$1 = (function (){var statearr_70966 = state_70905;
(statearr_70966[(13)] = inst_70783);

(statearr_70966[(15)] = inst_70784);

(statearr_70966[(16)] = inst_70785);

(statearr_70966[(17)] = inst_70782);

return statearr_70966;
})();
var statearr_70967_71029 = state_70905__$1;
(statearr_70967_71029[(2)] = null);

(statearr_70967_71029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (14))){
var state_70905__$1 = state_70905;
var statearr_70968_71030 = state_70905__$1;
(statearr_70968_71030[(2)] = null);

(statearr_70968_71030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (45))){
var inst_70895 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70969_71031 = state_70905__$1;
(statearr_70969_71031[(2)] = inst_70895);

(statearr_70969_71031[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (26))){
var inst_70837 = (state_70905[(29)]);
var inst_70891 = (state_70905[(2)]);
var inst_70892 = cljs.core.seq.call(null,inst_70837);
var state_70905__$1 = (function (){var statearr_70970 = state_70905;
(statearr_70970[(31)] = inst_70891);

return statearr_70970;
})();
if(inst_70892){
var statearr_70971_71032 = state_70905__$1;
(statearr_70971_71032[(1)] = (42));

} else {
var statearr_70972_71033 = state_70905__$1;
(statearr_70972_71033[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (16))){
var inst_70804 = (state_70905[(7)]);
var inst_70806 = cljs.core.chunked_seq_QMARK_.call(null,inst_70804);
var state_70905__$1 = state_70905;
if(inst_70806){
var statearr_70973_71034 = state_70905__$1;
(statearr_70973_71034[(1)] = (19));

} else {
var statearr_70974_71035 = state_70905__$1;
(statearr_70974_71035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (38))){
var inst_70884 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70975_71036 = state_70905__$1;
(statearr_70975_71036[(2)] = inst_70884);

(statearr_70975_71036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (30))){
var state_70905__$1 = state_70905;
var statearr_70976_71037 = state_70905__$1;
(statearr_70976_71037[(2)] = null);

(statearr_70976_71037[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (10))){
var inst_70783 = (state_70905[(13)]);
var inst_70785 = (state_70905[(16)]);
var inst_70793 = cljs.core._nth.call(null,inst_70783,inst_70785);
var inst_70794 = cljs.core.nth.call(null,inst_70793,(0),null);
var inst_70795 = cljs.core.nth.call(null,inst_70793,(1),null);
var state_70905__$1 = (function (){var statearr_70977 = state_70905;
(statearr_70977[(26)] = inst_70794);

return statearr_70977;
})();
if(cljs.core.truth_(inst_70795)){
var statearr_70978_71038 = state_70905__$1;
(statearr_70978_71038[(1)] = (13));

} else {
var statearr_70979_71039 = state_70905__$1;
(statearr_70979_71039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (18))){
var inst_70830 = (state_70905[(2)]);
var state_70905__$1 = state_70905;
var statearr_70980_71040 = state_70905__$1;
(statearr_70980_71040[(2)] = inst_70830);

(statearr_70980_71040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (42))){
var state_70905__$1 = state_70905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70905__$1,(45),dchan);
} else {
if((state_val_70906 === (37))){
var inst_70773 = (state_70905[(9)]);
var inst_70864 = (state_70905[(25)]);
var inst_70873 = (state_70905[(23)]);
var inst_70873__$1 = cljs.core.first.call(null,inst_70864);
var inst_70874 = cljs.core.async.put_BANG_.call(null,inst_70873__$1,inst_70773,done);
var state_70905__$1 = (function (){var statearr_70981 = state_70905;
(statearr_70981[(23)] = inst_70873__$1);

return statearr_70981;
})();
if(cljs.core.truth_(inst_70874)){
var statearr_70982_71041 = state_70905__$1;
(statearr_70982_71041[(1)] = (39));

} else {
var statearr_70983_71042 = state_70905__$1;
(statearr_70983_71042[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70906 === (8))){
var inst_70784 = (state_70905[(15)]);
var inst_70785 = (state_70905[(16)]);
var inst_70787 = (inst_70785 < inst_70784);
var inst_70788 = inst_70787;
var state_70905__$1 = state_70905;
if(cljs.core.truth_(inst_70788)){
var statearr_70984_71043 = state_70905__$1;
(statearr_70984_71043[(1)] = (10));

} else {
var statearr_70985_71044 = state_70905__$1;
(statearr_70985_71044[(1)] = (11));

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
});})(c__59869__auto___70990,cs,m,dchan,dctr,done))
;
return ((function (switch__59779__auto__,c__59869__auto___70990,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__59780__auto__ = null;
var cljs$core$async$mult_$_state_machine__59780__auto____0 = (function (){
var statearr_70986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70986[(0)] = cljs$core$async$mult_$_state_machine__59780__auto__);

(statearr_70986[(1)] = (1));

return statearr_70986;
});
var cljs$core$async$mult_$_state_machine__59780__auto____1 = (function (state_70905){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_70905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e70987){if((e70987 instanceof Object)){
var ex__59783__auto__ = e70987;
var statearr_70988_71045 = state_70905;
(statearr_70988_71045[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71046 = state_70905;
state_70905 = G__71046;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__59780__auto__ = function(state_70905){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__59780__auto____1.call(this,state_70905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__59780__auto____0;
cljs$core$async$mult_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__59780__auto____1;
return cljs$core$async$mult_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___70990,cs,m,dchan,dctr,done))
})();
var state__59871__auto__ = (function (){var statearr_70989 = f__59870__auto__.call(null);
(statearr_70989[(6)] = c__59869__auto___70990);

return statearr_70989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___70990,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__71048 = arguments.length;
switch (G__71048) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,ch);
} else {
var m__49313__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,ch);
} else {
var m__49313__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m);
} else {
var m__49313__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,state_map);
} else {
var m__49313__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__49312__auto__ = (((m == null))?null:m);
var m__49313__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,m,mode);
} else {
var m__49313__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___71060 = arguments.length;
var i__49859__auto___71061 = (0);
while(true){
if((i__49859__auto___71061 < len__49858__auto___71060)){
args__49865__auto__.push((arguments[i__49859__auto___71061]));

var G__71062 = (i__49859__auto___71061 + (1));
i__49859__auto___71061 = G__71062;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((3) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49866__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__71054){
var map__71055 = p__71054;
var map__71055__$1 = ((((!((map__71055 == null)))?((((map__71055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71055):map__71055);
var opts = map__71055__$1;
var statearr_71057_71063 = state;
(statearr_71057_71063[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__71055,map__71055__$1,opts){
return (function (val){
var statearr_71058_71064 = state;
(statearr_71058_71064[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__71055,map__71055__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_71059_71065 = state;
(statearr_71059_71065[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq71050){
var G__71051 = cljs.core.first.call(null,seq71050);
var seq71050__$1 = cljs.core.next.call(null,seq71050);
var G__71052 = cljs.core.first.call(null,seq71050__$1);
var seq71050__$2 = cljs.core.next.call(null,seq71050__$1);
var G__71053 = cljs.core.first.call(null,seq71050__$2);
var seq71050__$3 = cljs.core.next.call(null,seq71050__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__71051,G__71052,G__71053,seq71050__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async71066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71066 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta71067){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta71067 = meta71067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_71068,meta71067__$1){
var self__ = this;
var _71068__$1 = this;
return (new cljs.core.async.t_cljs$core$async71066(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta71067__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_71068){
var self__ = this;
var _71068__$1 = this;
return self__.meta71067;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta71067","meta71067",-2036305271,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async71066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71066";

cljs.core.async.t_cljs$core$async71066.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71066");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async71066 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async71066(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta71067){
return (new cljs.core.async.t_cljs$core$async71066(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta71067));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async71066(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59869__auto___71230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_71170){
var state_val_71171 = (state_71170[(1)]);
if((state_val_71171 === (7))){
var inst_71085 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
var statearr_71172_71231 = state_71170__$1;
(statearr_71172_71231[(2)] = inst_71085);

(statearr_71172_71231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (20))){
var inst_71097 = (state_71170[(7)]);
var state_71170__$1 = state_71170;
var statearr_71173_71232 = state_71170__$1;
(statearr_71173_71232[(2)] = inst_71097);

(statearr_71173_71232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (27))){
var state_71170__$1 = state_71170;
var statearr_71174_71233 = state_71170__$1;
(statearr_71174_71233[(2)] = null);

(statearr_71174_71233[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (1))){
var inst_71072 = (state_71170[(8)]);
var inst_71072__$1 = calc_state.call(null);
var inst_71074 = (inst_71072__$1 == null);
var inst_71075 = cljs.core.not.call(null,inst_71074);
var state_71170__$1 = (function (){var statearr_71175 = state_71170;
(statearr_71175[(8)] = inst_71072__$1);

return statearr_71175;
})();
if(inst_71075){
var statearr_71176_71234 = state_71170__$1;
(statearr_71176_71234[(1)] = (2));

} else {
var statearr_71177_71235 = state_71170__$1;
(statearr_71177_71235[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (24))){
var inst_71130 = (state_71170[(9)]);
var inst_71144 = (state_71170[(10)]);
var inst_71121 = (state_71170[(11)]);
var inst_71144__$1 = inst_71121.call(null,inst_71130);
var state_71170__$1 = (function (){var statearr_71178 = state_71170;
(statearr_71178[(10)] = inst_71144__$1);

return statearr_71178;
})();
if(cljs.core.truth_(inst_71144__$1)){
var statearr_71179_71236 = state_71170__$1;
(statearr_71179_71236[(1)] = (29));

} else {
var statearr_71180_71237 = state_71170__$1;
(statearr_71180_71237[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (4))){
var inst_71088 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71088)){
var statearr_71181_71238 = state_71170__$1;
(statearr_71181_71238[(1)] = (8));

} else {
var statearr_71182_71239 = state_71170__$1;
(statearr_71182_71239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (15))){
var inst_71115 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71115)){
var statearr_71183_71240 = state_71170__$1;
(statearr_71183_71240[(1)] = (19));

} else {
var statearr_71184_71241 = state_71170__$1;
(statearr_71184_71241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (21))){
var inst_71120 = (state_71170[(12)]);
var inst_71120__$1 = (state_71170[(2)]);
var inst_71121 = cljs.core.get.call(null,inst_71120__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71122 = cljs.core.get.call(null,inst_71120__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71123 = cljs.core.get.call(null,inst_71120__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71170__$1 = (function (){var statearr_71185 = state_71170;
(statearr_71185[(12)] = inst_71120__$1);

(statearr_71185[(11)] = inst_71121);

(statearr_71185[(13)] = inst_71122);

return statearr_71185;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71170__$1,(22),inst_71123);
} else {
if((state_val_71171 === (31))){
var inst_71152 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71152)){
var statearr_71186_71242 = state_71170__$1;
(statearr_71186_71242[(1)] = (32));

} else {
var statearr_71187_71243 = state_71170__$1;
(statearr_71187_71243[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (32))){
var inst_71129 = (state_71170[(14)]);
var state_71170__$1 = state_71170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71170__$1,(35),out,inst_71129);
} else {
if((state_val_71171 === (33))){
var inst_71120 = (state_71170[(12)]);
var inst_71097 = inst_71120;
var state_71170__$1 = (function (){var statearr_71188 = state_71170;
(statearr_71188[(7)] = inst_71097);

return statearr_71188;
})();
var statearr_71189_71244 = state_71170__$1;
(statearr_71189_71244[(2)] = null);

(statearr_71189_71244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (13))){
var inst_71097 = (state_71170[(7)]);
var inst_71104 = inst_71097.cljs$lang$protocol_mask$partition0$;
var inst_71105 = (inst_71104 & (64));
var inst_71106 = inst_71097.cljs$core$ISeq$;
var inst_71107 = (cljs.core.PROTOCOL_SENTINEL === inst_71106);
var inst_71108 = (inst_71105) || (inst_71107);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71108)){
var statearr_71190_71245 = state_71170__$1;
(statearr_71190_71245[(1)] = (16));

} else {
var statearr_71191_71246 = state_71170__$1;
(statearr_71191_71246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (22))){
var inst_71130 = (state_71170[(9)]);
var inst_71129 = (state_71170[(14)]);
var inst_71128 = (state_71170[(2)]);
var inst_71129__$1 = cljs.core.nth.call(null,inst_71128,(0),null);
var inst_71130__$1 = cljs.core.nth.call(null,inst_71128,(1),null);
var inst_71131 = (inst_71129__$1 == null);
var inst_71132 = cljs.core._EQ_.call(null,inst_71130__$1,change);
var inst_71133 = (inst_71131) || (inst_71132);
var state_71170__$1 = (function (){var statearr_71192 = state_71170;
(statearr_71192[(9)] = inst_71130__$1);

(statearr_71192[(14)] = inst_71129__$1);

return statearr_71192;
})();
if(cljs.core.truth_(inst_71133)){
var statearr_71193_71247 = state_71170__$1;
(statearr_71193_71247[(1)] = (23));

} else {
var statearr_71194_71248 = state_71170__$1;
(statearr_71194_71248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (36))){
var inst_71120 = (state_71170[(12)]);
var inst_71097 = inst_71120;
var state_71170__$1 = (function (){var statearr_71195 = state_71170;
(statearr_71195[(7)] = inst_71097);

return statearr_71195;
})();
var statearr_71196_71249 = state_71170__$1;
(statearr_71196_71249[(2)] = null);

(statearr_71196_71249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (29))){
var inst_71144 = (state_71170[(10)]);
var state_71170__$1 = state_71170;
var statearr_71197_71250 = state_71170__$1;
(statearr_71197_71250[(2)] = inst_71144);

(statearr_71197_71250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (6))){
var state_71170__$1 = state_71170;
var statearr_71198_71251 = state_71170__$1;
(statearr_71198_71251[(2)] = false);

(statearr_71198_71251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (28))){
var inst_71140 = (state_71170[(2)]);
var inst_71141 = calc_state.call(null);
var inst_71097 = inst_71141;
var state_71170__$1 = (function (){var statearr_71199 = state_71170;
(statearr_71199[(7)] = inst_71097);

(statearr_71199[(15)] = inst_71140);

return statearr_71199;
})();
var statearr_71200_71252 = state_71170__$1;
(statearr_71200_71252[(2)] = null);

(statearr_71200_71252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (25))){
var inst_71166 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
var statearr_71201_71253 = state_71170__$1;
(statearr_71201_71253[(2)] = inst_71166);

(statearr_71201_71253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (34))){
var inst_71164 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
var statearr_71202_71254 = state_71170__$1;
(statearr_71202_71254[(2)] = inst_71164);

(statearr_71202_71254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (17))){
var state_71170__$1 = state_71170;
var statearr_71203_71255 = state_71170__$1;
(statearr_71203_71255[(2)] = false);

(statearr_71203_71255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (3))){
var state_71170__$1 = state_71170;
var statearr_71204_71256 = state_71170__$1;
(statearr_71204_71256[(2)] = false);

(statearr_71204_71256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (12))){
var inst_71168 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71170__$1,inst_71168);
} else {
if((state_val_71171 === (2))){
var inst_71072 = (state_71170[(8)]);
var inst_71077 = inst_71072.cljs$lang$protocol_mask$partition0$;
var inst_71078 = (inst_71077 & (64));
var inst_71079 = inst_71072.cljs$core$ISeq$;
var inst_71080 = (cljs.core.PROTOCOL_SENTINEL === inst_71079);
var inst_71081 = (inst_71078) || (inst_71080);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71081)){
var statearr_71205_71257 = state_71170__$1;
(statearr_71205_71257[(1)] = (5));

} else {
var statearr_71206_71258 = state_71170__$1;
(statearr_71206_71258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (23))){
var inst_71129 = (state_71170[(14)]);
var inst_71135 = (inst_71129 == null);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71135)){
var statearr_71207_71259 = state_71170__$1;
(statearr_71207_71259[(1)] = (26));

} else {
var statearr_71208_71260 = state_71170__$1;
(statearr_71208_71260[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (35))){
var inst_71155 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
if(cljs.core.truth_(inst_71155)){
var statearr_71209_71261 = state_71170__$1;
(statearr_71209_71261[(1)] = (36));

} else {
var statearr_71210_71262 = state_71170__$1;
(statearr_71210_71262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (19))){
var inst_71097 = (state_71170[(7)]);
var inst_71117 = cljs.core.apply.call(null,cljs.core.hash_map,inst_71097);
var state_71170__$1 = state_71170;
var statearr_71211_71263 = state_71170__$1;
(statearr_71211_71263[(2)] = inst_71117);

(statearr_71211_71263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (11))){
var inst_71097 = (state_71170[(7)]);
var inst_71101 = (inst_71097 == null);
var inst_71102 = cljs.core.not.call(null,inst_71101);
var state_71170__$1 = state_71170;
if(inst_71102){
var statearr_71212_71264 = state_71170__$1;
(statearr_71212_71264[(1)] = (13));

} else {
var statearr_71213_71265 = state_71170__$1;
(statearr_71213_71265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (9))){
var inst_71072 = (state_71170[(8)]);
var state_71170__$1 = state_71170;
var statearr_71214_71266 = state_71170__$1;
(statearr_71214_71266[(2)] = inst_71072);

(statearr_71214_71266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (5))){
var state_71170__$1 = state_71170;
var statearr_71215_71267 = state_71170__$1;
(statearr_71215_71267[(2)] = true);

(statearr_71215_71267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (14))){
var state_71170__$1 = state_71170;
var statearr_71216_71268 = state_71170__$1;
(statearr_71216_71268[(2)] = false);

(statearr_71216_71268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (26))){
var inst_71130 = (state_71170[(9)]);
var inst_71137 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_71130);
var state_71170__$1 = state_71170;
var statearr_71217_71269 = state_71170__$1;
(statearr_71217_71269[(2)] = inst_71137);

(statearr_71217_71269[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (16))){
var state_71170__$1 = state_71170;
var statearr_71218_71270 = state_71170__$1;
(statearr_71218_71270[(2)] = true);

(statearr_71218_71270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (38))){
var inst_71160 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
var statearr_71219_71271 = state_71170__$1;
(statearr_71219_71271[(2)] = inst_71160);

(statearr_71219_71271[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (30))){
var inst_71130 = (state_71170[(9)]);
var inst_71121 = (state_71170[(11)]);
var inst_71122 = (state_71170[(13)]);
var inst_71147 = cljs.core.empty_QMARK_.call(null,inst_71121);
var inst_71148 = inst_71122.call(null,inst_71130);
var inst_71149 = cljs.core.not.call(null,inst_71148);
var inst_71150 = (inst_71147) && (inst_71149);
var state_71170__$1 = state_71170;
var statearr_71220_71272 = state_71170__$1;
(statearr_71220_71272[(2)] = inst_71150);

(statearr_71220_71272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (10))){
var inst_71072 = (state_71170[(8)]);
var inst_71093 = (state_71170[(2)]);
var inst_71094 = cljs.core.get.call(null,inst_71093,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71095 = cljs.core.get.call(null,inst_71093,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71096 = cljs.core.get.call(null,inst_71093,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_71097 = inst_71072;
var state_71170__$1 = (function (){var statearr_71221 = state_71170;
(statearr_71221[(7)] = inst_71097);

(statearr_71221[(16)] = inst_71096);

(statearr_71221[(17)] = inst_71095);

(statearr_71221[(18)] = inst_71094);

return statearr_71221;
})();
var statearr_71222_71273 = state_71170__$1;
(statearr_71222_71273[(2)] = null);

(statearr_71222_71273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (18))){
var inst_71112 = (state_71170[(2)]);
var state_71170__$1 = state_71170;
var statearr_71223_71274 = state_71170__$1;
(statearr_71223_71274[(2)] = inst_71112);

(statearr_71223_71274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (37))){
var state_71170__$1 = state_71170;
var statearr_71224_71275 = state_71170__$1;
(statearr_71224_71275[(2)] = null);

(statearr_71224_71275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71171 === (8))){
var inst_71072 = (state_71170[(8)]);
var inst_71090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_71072);
var state_71170__$1 = state_71170;
var statearr_71225_71276 = state_71170__$1;
(statearr_71225_71276[(2)] = inst_71090);

(statearr_71225_71276[(1)] = (10));


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
});})(c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__59779__auto__,c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__59780__auto__ = null;
var cljs$core$async$mix_$_state_machine__59780__auto____0 = (function (){
var statearr_71226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71226[(0)] = cljs$core$async$mix_$_state_machine__59780__auto__);

(statearr_71226[(1)] = (1));

return statearr_71226;
});
var cljs$core$async$mix_$_state_machine__59780__auto____1 = (function (state_71170){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71227){if((e71227 instanceof Object)){
var ex__59783__auto__ = e71227;
var statearr_71228_71277 = state_71170;
(statearr_71228_71277[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71278 = state_71170;
state_71170 = G__71278;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__59780__auto__ = function(state_71170){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__59780__auto____1.call(this,state_71170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__59780__auto____0;
cljs$core$async$mix_$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__59780__auto____1;
return cljs$core$async$mix_$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__59871__auto__ = (function (){var statearr_71229 = f__59870__auto__.call(null);
(statearr_71229[(6)] = c__59869__auto___71230);

return statearr_71229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__49312__auto__ = (((p == null))?null:p);
var m__49313__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__49313__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__49312__auto__ = (((p == null))?null:p);
var m__49313__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,p,v,ch);
} else {
var m__49313__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__71280 = arguments.length;
switch (G__71280) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__49312__auto__ = (((p == null))?null:p);
var m__49313__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,p);
} else {
var m__49313__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__49312__auto__ = (((p == null))?null:p);
var m__49313__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__49312__auto__)]);
if(!((m__49313__auto__ == null))){
return m__49313__auto__.call(null,p,v);
} else {
var m__49313__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__49313__auto____$1 == null))){
return m__49313__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71284 = arguments.length;
switch (G__71284) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__48579__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__48579__auto__,mults){
return (function (p1__71282_SHARP_){
if(cljs.core.truth_(p1__71282_SHARP_.call(null,topic))){
return p1__71282_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__71282_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__48579__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async71285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71285 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71286){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71286 = meta71286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_71287,meta71286__$1){
var self__ = this;
var _71287__$1 = this;
return (new cljs.core.async.t_cljs$core$async71285(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71286__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_71287){
var self__ = this;
var _71287__$1 = this;
return self__.meta71286;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71286","meta71286",-964797461,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async71285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71285";

cljs.core.async.t_cljs$core$async71285.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71285");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async71285 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async71285(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71286){
return (new cljs.core.async.t_cljs$core$async71285(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71286));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async71285(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59869__auto___71405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71405,mults,ensure_mult,p){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71405,mults,ensure_mult,p){
return (function (state_71359){
var state_val_71360 = (state_71359[(1)]);
if((state_val_71360 === (7))){
var inst_71355 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71361_71406 = state_71359__$1;
(statearr_71361_71406[(2)] = inst_71355);

(statearr_71361_71406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (20))){
var state_71359__$1 = state_71359;
var statearr_71362_71407 = state_71359__$1;
(statearr_71362_71407[(2)] = null);

(statearr_71362_71407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (1))){
var state_71359__$1 = state_71359;
var statearr_71363_71408 = state_71359__$1;
(statearr_71363_71408[(2)] = null);

(statearr_71363_71408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (24))){
var inst_71338 = (state_71359[(7)]);
var inst_71347 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_71338);
var state_71359__$1 = state_71359;
var statearr_71364_71409 = state_71359__$1;
(statearr_71364_71409[(2)] = inst_71347);

(statearr_71364_71409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (4))){
var inst_71290 = (state_71359[(8)]);
var inst_71290__$1 = (state_71359[(2)]);
var inst_71291 = (inst_71290__$1 == null);
var state_71359__$1 = (function (){var statearr_71365 = state_71359;
(statearr_71365[(8)] = inst_71290__$1);

return statearr_71365;
})();
if(cljs.core.truth_(inst_71291)){
var statearr_71366_71410 = state_71359__$1;
(statearr_71366_71410[(1)] = (5));

} else {
var statearr_71367_71411 = state_71359__$1;
(statearr_71367_71411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (15))){
var inst_71332 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71368_71412 = state_71359__$1;
(statearr_71368_71412[(2)] = inst_71332);

(statearr_71368_71412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (21))){
var inst_71352 = (state_71359[(2)]);
var state_71359__$1 = (function (){var statearr_71369 = state_71359;
(statearr_71369[(9)] = inst_71352);

return statearr_71369;
})();
var statearr_71370_71413 = state_71359__$1;
(statearr_71370_71413[(2)] = null);

(statearr_71370_71413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (13))){
var inst_71314 = (state_71359[(10)]);
var inst_71316 = cljs.core.chunked_seq_QMARK_.call(null,inst_71314);
var state_71359__$1 = state_71359;
if(inst_71316){
var statearr_71371_71414 = state_71359__$1;
(statearr_71371_71414[(1)] = (16));

} else {
var statearr_71372_71415 = state_71359__$1;
(statearr_71372_71415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (22))){
var inst_71344 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
if(cljs.core.truth_(inst_71344)){
var statearr_71373_71416 = state_71359__$1;
(statearr_71373_71416[(1)] = (23));

} else {
var statearr_71374_71417 = state_71359__$1;
(statearr_71374_71417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (6))){
var inst_71290 = (state_71359[(8)]);
var inst_71340 = (state_71359[(11)]);
var inst_71338 = (state_71359[(7)]);
var inst_71338__$1 = topic_fn.call(null,inst_71290);
var inst_71339 = cljs.core.deref.call(null,mults);
var inst_71340__$1 = cljs.core.get.call(null,inst_71339,inst_71338__$1);
var state_71359__$1 = (function (){var statearr_71375 = state_71359;
(statearr_71375[(11)] = inst_71340__$1);

(statearr_71375[(7)] = inst_71338__$1);

return statearr_71375;
})();
if(cljs.core.truth_(inst_71340__$1)){
var statearr_71376_71418 = state_71359__$1;
(statearr_71376_71418[(1)] = (19));

} else {
var statearr_71377_71419 = state_71359__$1;
(statearr_71377_71419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (25))){
var inst_71349 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71378_71420 = state_71359__$1;
(statearr_71378_71420[(2)] = inst_71349);

(statearr_71378_71420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (17))){
var inst_71314 = (state_71359[(10)]);
var inst_71323 = cljs.core.first.call(null,inst_71314);
var inst_71324 = cljs.core.async.muxch_STAR_.call(null,inst_71323);
var inst_71325 = cljs.core.async.close_BANG_.call(null,inst_71324);
var inst_71326 = cljs.core.next.call(null,inst_71314);
var inst_71300 = inst_71326;
var inst_71301 = null;
var inst_71302 = (0);
var inst_71303 = (0);
var state_71359__$1 = (function (){var statearr_71379 = state_71359;
(statearr_71379[(12)] = inst_71325);

(statearr_71379[(13)] = inst_71301);

(statearr_71379[(14)] = inst_71302);

(statearr_71379[(15)] = inst_71300);

(statearr_71379[(16)] = inst_71303);

return statearr_71379;
})();
var statearr_71380_71421 = state_71359__$1;
(statearr_71380_71421[(2)] = null);

(statearr_71380_71421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (3))){
var inst_71357 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71359__$1,inst_71357);
} else {
if((state_val_71360 === (12))){
var inst_71334 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71381_71422 = state_71359__$1;
(statearr_71381_71422[(2)] = inst_71334);

(statearr_71381_71422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (2))){
var state_71359__$1 = state_71359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71359__$1,(4),ch);
} else {
if((state_val_71360 === (23))){
var state_71359__$1 = state_71359;
var statearr_71382_71423 = state_71359__$1;
(statearr_71382_71423[(2)] = null);

(statearr_71382_71423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (19))){
var inst_71290 = (state_71359[(8)]);
var inst_71340 = (state_71359[(11)]);
var inst_71342 = cljs.core.async.muxch_STAR_.call(null,inst_71340);
var state_71359__$1 = state_71359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71359__$1,(22),inst_71342,inst_71290);
} else {
if((state_val_71360 === (11))){
var inst_71314 = (state_71359[(10)]);
var inst_71300 = (state_71359[(15)]);
var inst_71314__$1 = cljs.core.seq.call(null,inst_71300);
var state_71359__$1 = (function (){var statearr_71383 = state_71359;
(statearr_71383[(10)] = inst_71314__$1);

return statearr_71383;
})();
if(inst_71314__$1){
var statearr_71384_71424 = state_71359__$1;
(statearr_71384_71424[(1)] = (13));

} else {
var statearr_71385_71425 = state_71359__$1;
(statearr_71385_71425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (9))){
var inst_71336 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71386_71426 = state_71359__$1;
(statearr_71386_71426[(2)] = inst_71336);

(statearr_71386_71426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (5))){
var inst_71297 = cljs.core.deref.call(null,mults);
var inst_71298 = cljs.core.vals.call(null,inst_71297);
var inst_71299 = cljs.core.seq.call(null,inst_71298);
var inst_71300 = inst_71299;
var inst_71301 = null;
var inst_71302 = (0);
var inst_71303 = (0);
var state_71359__$1 = (function (){var statearr_71387 = state_71359;
(statearr_71387[(13)] = inst_71301);

(statearr_71387[(14)] = inst_71302);

(statearr_71387[(15)] = inst_71300);

(statearr_71387[(16)] = inst_71303);

return statearr_71387;
})();
var statearr_71388_71427 = state_71359__$1;
(statearr_71388_71427[(2)] = null);

(statearr_71388_71427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (14))){
var state_71359__$1 = state_71359;
var statearr_71392_71428 = state_71359__$1;
(statearr_71392_71428[(2)] = null);

(statearr_71392_71428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (16))){
var inst_71314 = (state_71359[(10)]);
var inst_71318 = cljs.core.chunk_first.call(null,inst_71314);
var inst_71319 = cljs.core.chunk_rest.call(null,inst_71314);
var inst_71320 = cljs.core.count.call(null,inst_71318);
var inst_71300 = inst_71319;
var inst_71301 = inst_71318;
var inst_71302 = inst_71320;
var inst_71303 = (0);
var state_71359__$1 = (function (){var statearr_71393 = state_71359;
(statearr_71393[(13)] = inst_71301);

(statearr_71393[(14)] = inst_71302);

(statearr_71393[(15)] = inst_71300);

(statearr_71393[(16)] = inst_71303);

return statearr_71393;
})();
var statearr_71394_71429 = state_71359__$1;
(statearr_71394_71429[(2)] = null);

(statearr_71394_71429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (10))){
var inst_71301 = (state_71359[(13)]);
var inst_71302 = (state_71359[(14)]);
var inst_71300 = (state_71359[(15)]);
var inst_71303 = (state_71359[(16)]);
var inst_71308 = cljs.core._nth.call(null,inst_71301,inst_71303);
var inst_71309 = cljs.core.async.muxch_STAR_.call(null,inst_71308);
var inst_71310 = cljs.core.async.close_BANG_.call(null,inst_71309);
var inst_71311 = (inst_71303 + (1));
var tmp71389 = inst_71301;
var tmp71390 = inst_71302;
var tmp71391 = inst_71300;
var inst_71300__$1 = tmp71391;
var inst_71301__$1 = tmp71389;
var inst_71302__$1 = tmp71390;
var inst_71303__$1 = inst_71311;
var state_71359__$1 = (function (){var statearr_71395 = state_71359;
(statearr_71395[(13)] = inst_71301__$1);

(statearr_71395[(14)] = inst_71302__$1);

(statearr_71395[(17)] = inst_71310);

(statearr_71395[(15)] = inst_71300__$1);

(statearr_71395[(16)] = inst_71303__$1);

return statearr_71395;
})();
var statearr_71396_71430 = state_71359__$1;
(statearr_71396_71430[(2)] = null);

(statearr_71396_71430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (18))){
var inst_71329 = (state_71359[(2)]);
var state_71359__$1 = state_71359;
var statearr_71397_71431 = state_71359__$1;
(statearr_71397_71431[(2)] = inst_71329);

(statearr_71397_71431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71360 === (8))){
var inst_71302 = (state_71359[(14)]);
var inst_71303 = (state_71359[(16)]);
var inst_71305 = (inst_71303 < inst_71302);
var inst_71306 = inst_71305;
var state_71359__$1 = state_71359;
if(cljs.core.truth_(inst_71306)){
var statearr_71398_71432 = state_71359__$1;
(statearr_71398_71432[(1)] = (10));

} else {
var statearr_71399_71433 = state_71359__$1;
(statearr_71399_71433[(1)] = (11));

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
});})(c__59869__auto___71405,mults,ensure_mult,p))
;
return ((function (switch__59779__auto__,c__59869__auto___71405,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71400[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71400[(1)] = (1));

return statearr_71400;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71359){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71401){if((e71401 instanceof Object)){
var ex__59783__auto__ = e71401;
var statearr_71402_71434 = state_71359;
(statearr_71402_71434[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71435 = state_71359;
state_71359 = G__71435;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71405,mults,ensure_mult,p))
})();
var state__59871__auto__ = (function (){var statearr_71403 = f__59870__auto__.call(null);
(statearr_71403[(6)] = c__59869__auto___71405);

return statearr_71403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71405,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71437 = arguments.length;
switch (G__71437) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71440 = arguments.length;
switch (G__71440) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71443 = arguments.length;
switch (G__71443) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__59869__auto___71510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_71482){
var state_val_71483 = (state_71482[(1)]);
if((state_val_71483 === (7))){
var state_71482__$1 = state_71482;
var statearr_71484_71511 = state_71482__$1;
(statearr_71484_71511[(2)] = null);

(statearr_71484_71511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (1))){
var state_71482__$1 = state_71482;
var statearr_71485_71512 = state_71482__$1;
(statearr_71485_71512[(2)] = null);

(statearr_71485_71512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (4))){
var inst_71446 = (state_71482[(7)]);
var inst_71448 = (inst_71446 < cnt);
var state_71482__$1 = state_71482;
if(cljs.core.truth_(inst_71448)){
var statearr_71486_71513 = state_71482__$1;
(statearr_71486_71513[(1)] = (6));

} else {
var statearr_71487_71514 = state_71482__$1;
(statearr_71487_71514[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (15))){
var inst_71478 = (state_71482[(2)]);
var state_71482__$1 = state_71482;
var statearr_71488_71515 = state_71482__$1;
(statearr_71488_71515[(2)] = inst_71478);

(statearr_71488_71515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (13))){
var inst_71471 = cljs.core.async.close_BANG_.call(null,out);
var state_71482__$1 = state_71482;
var statearr_71489_71516 = state_71482__$1;
(statearr_71489_71516[(2)] = inst_71471);

(statearr_71489_71516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (6))){
var state_71482__$1 = state_71482;
var statearr_71490_71517 = state_71482__$1;
(statearr_71490_71517[(2)] = null);

(statearr_71490_71517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (3))){
var inst_71480 = (state_71482[(2)]);
var state_71482__$1 = state_71482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71482__$1,inst_71480);
} else {
if((state_val_71483 === (12))){
var inst_71468 = (state_71482[(8)]);
var inst_71468__$1 = (state_71482[(2)]);
var inst_71469 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_71468__$1);
var state_71482__$1 = (function (){var statearr_71491 = state_71482;
(statearr_71491[(8)] = inst_71468__$1);

return statearr_71491;
})();
if(cljs.core.truth_(inst_71469)){
var statearr_71492_71518 = state_71482__$1;
(statearr_71492_71518[(1)] = (13));

} else {
var statearr_71493_71519 = state_71482__$1;
(statearr_71493_71519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (2))){
var inst_71445 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_71446 = (0);
var state_71482__$1 = (function (){var statearr_71494 = state_71482;
(statearr_71494[(7)] = inst_71446);

(statearr_71494[(9)] = inst_71445);

return statearr_71494;
})();
var statearr_71495_71520 = state_71482__$1;
(statearr_71495_71520[(2)] = null);

(statearr_71495_71520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (11))){
var inst_71446 = (state_71482[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_71482,(10),Object,null,(9));
var inst_71455 = chs__$1.call(null,inst_71446);
var inst_71456 = done.call(null,inst_71446);
var inst_71457 = cljs.core.async.take_BANG_.call(null,inst_71455,inst_71456);
var state_71482__$1 = state_71482;
var statearr_71496_71521 = state_71482__$1;
(statearr_71496_71521[(2)] = inst_71457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (9))){
var inst_71446 = (state_71482[(7)]);
var inst_71459 = (state_71482[(2)]);
var inst_71460 = (inst_71446 + (1));
var inst_71446__$1 = inst_71460;
var state_71482__$1 = (function (){var statearr_71497 = state_71482;
(statearr_71497[(7)] = inst_71446__$1);

(statearr_71497[(10)] = inst_71459);

return statearr_71497;
})();
var statearr_71498_71522 = state_71482__$1;
(statearr_71498_71522[(2)] = null);

(statearr_71498_71522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (5))){
var inst_71466 = (state_71482[(2)]);
var state_71482__$1 = (function (){var statearr_71499 = state_71482;
(statearr_71499[(11)] = inst_71466);

return statearr_71499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71482__$1,(12),dchan);
} else {
if((state_val_71483 === (14))){
var inst_71468 = (state_71482[(8)]);
var inst_71473 = cljs.core.apply.call(null,f,inst_71468);
var state_71482__$1 = state_71482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71482__$1,(16),out,inst_71473);
} else {
if((state_val_71483 === (16))){
var inst_71475 = (state_71482[(2)]);
var state_71482__$1 = (function (){var statearr_71500 = state_71482;
(statearr_71500[(12)] = inst_71475);

return statearr_71500;
})();
var statearr_71501_71523 = state_71482__$1;
(statearr_71501_71523[(2)] = null);

(statearr_71501_71523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (10))){
var inst_71450 = (state_71482[(2)]);
var inst_71451 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_71482__$1 = (function (){var statearr_71502 = state_71482;
(statearr_71502[(13)] = inst_71450);

return statearr_71502;
})();
var statearr_71503_71524 = state_71482__$1;
(statearr_71503_71524[(2)] = inst_71451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71483 === (8))){
var inst_71464 = (state_71482[(2)]);
var state_71482__$1 = state_71482;
var statearr_71504_71525 = state_71482__$1;
(statearr_71504_71525[(2)] = inst_71464);

(statearr_71504_71525[(1)] = (5));


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
});})(c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__59779__auto__,c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71505[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71505[(1)] = (1));

return statearr_71505;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71482){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71506){if((e71506 instanceof Object)){
var ex__59783__auto__ = e71506;
var statearr_71507_71526 = state_71482;
(statearr_71507_71526[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71527 = state_71482;
state_71482 = G__71527;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__59871__auto__ = (function (){var statearr_71508 = f__59870__auto__.call(null);
(statearr_71508[(6)] = c__59869__auto___71510);

return statearr_71508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71510,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71530 = arguments.length;
switch (G__71530) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___71584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71584,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71584,out){
return (function (state_71562){
var state_val_71563 = (state_71562[(1)]);
if((state_val_71563 === (7))){
var inst_71542 = (state_71562[(7)]);
var inst_71541 = (state_71562[(8)]);
var inst_71541__$1 = (state_71562[(2)]);
var inst_71542__$1 = cljs.core.nth.call(null,inst_71541__$1,(0),null);
var inst_71543 = cljs.core.nth.call(null,inst_71541__$1,(1),null);
var inst_71544 = (inst_71542__$1 == null);
var state_71562__$1 = (function (){var statearr_71564 = state_71562;
(statearr_71564[(7)] = inst_71542__$1);

(statearr_71564[(9)] = inst_71543);

(statearr_71564[(8)] = inst_71541__$1);

return statearr_71564;
})();
if(cljs.core.truth_(inst_71544)){
var statearr_71565_71585 = state_71562__$1;
(statearr_71565_71585[(1)] = (8));

} else {
var statearr_71566_71586 = state_71562__$1;
(statearr_71566_71586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (1))){
var inst_71531 = cljs.core.vec.call(null,chs);
var inst_71532 = inst_71531;
var state_71562__$1 = (function (){var statearr_71567 = state_71562;
(statearr_71567[(10)] = inst_71532);

return statearr_71567;
})();
var statearr_71568_71587 = state_71562__$1;
(statearr_71568_71587[(2)] = null);

(statearr_71568_71587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (4))){
var inst_71532 = (state_71562[(10)]);
var state_71562__$1 = state_71562;
return cljs.core.async.ioc_alts_BANG_.call(null,state_71562__$1,(7),inst_71532);
} else {
if((state_val_71563 === (6))){
var inst_71558 = (state_71562[(2)]);
var state_71562__$1 = state_71562;
var statearr_71569_71588 = state_71562__$1;
(statearr_71569_71588[(2)] = inst_71558);

(statearr_71569_71588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (3))){
var inst_71560 = (state_71562[(2)]);
var state_71562__$1 = state_71562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71562__$1,inst_71560);
} else {
if((state_val_71563 === (2))){
var inst_71532 = (state_71562[(10)]);
var inst_71534 = cljs.core.count.call(null,inst_71532);
var inst_71535 = (inst_71534 > (0));
var state_71562__$1 = state_71562;
if(cljs.core.truth_(inst_71535)){
var statearr_71571_71589 = state_71562__$1;
(statearr_71571_71589[(1)] = (4));

} else {
var statearr_71572_71590 = state_71562__$1;
(statearr_71572_71590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (11))){
var inst_71532 = (state_71562[(10)]);
var inst_71551 = (state_71562[(2)]);
var tmp71570 = inst_71532;
var inst_71532__$1 = tmp71570;
var state_71562__$1 = (function (){var statearr_71573 = state_71562;
(statearr_71573[(10)] = inst_71532__$1);

(statearr_71573[(11)] = inst_71551);

return statearr_71573;
})();
var statearr_71574_71591 = state_71562__$1;
(statearr_71574_71591[(2)] = null);

(statearr_71574_71591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (9))){
var inst_71542 = (state_71562[(7)]);
var state_71562__$1 = state_71562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71562__$1,(11),out,inst_71542);
} else {
if((state_val_71563 === (5))){
var inst_71556 = cljs.core.async.close_BANG_.call(null,out);
var state_71562__$1 = state_71562;
var statearr_71575_71592 = state_71562__$1;
(statearr_71575_71592[(2)] = inst_71556);

(statearr_71575_71592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (10))){
var inst_71554 = (state_71562[(2)]);
var state_71562__$1 = state_71562;
var statearr_71576_71593 = state_71562__$1;
(statearr_71576_71593[(2)] = inst_71554);

(statearr_71576_71593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71563 === (8))){
var inst_71542 = (state_71562[(7)]);
var inst_71543 = (state_71562[(9)]);
var inst_71532 = (state_71562[(10)]);
var inst_71541 = (state_71562[(8)]);
var inst_71546 = (function (){var cs = inst_71532;
var vec__71537 = inst_71541;
var v = inst_71542;
var c = inst_71543;
return ((function (cs,vec__71537,v,c,inst_71542,inst_71543,inst_71532,inst_71541,state_val_71563,c__59869__auto___71584,out){
return (function (p1__71528_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__71528_SHARP_);
});
;})(cs,vec__71537,v,c,inst_71542,inst_71543,inst_71532,inst_71541,state_val_71563,c__59869__auto___71584,out))
})();
var inst_71547 = cljs.core.filterv.call(null,inst_71546,inst_71532);
var inst_71532__$1 = inst_71547;
var state_71562__$1 = (function (){var statearr_71577 = state_71562;
(statearr_71577[(10)] = inst_71532__$1);

return statearr_71577;
})();
var statearr_71578_71594 = state_71562__$1;
(statearr_71578_71594[(2)] = null);

(statearr_71578_71594[(1)] = (2));


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
});})(c__59869__auto___71584,out))
;
return ((function (switch__59779__auto__,c__59869__auto___71584,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71579[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71579[(1)] = (1));

return statearr_71579;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71562){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71580){if((e71580 instanceof Object)){
var ex__59783__auto__ = e71580;
var statearr_71581_71595 = state_71562;
(statearr_71581_71595[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71596 = state_71562;
state_71562 = G__71596;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71584,out))
})();
var state__59871__auto__ = (function (){var statearr_71582 = f__59870__auto__.call(null);
(statearr_71582[(6)] = c__59869__auto___71584);

return statearr_71582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71584,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71598 = arguments.length;
switch (G__71598) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___71643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71643,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71643,out){
return (function (state_71622){
var state_val_71623 = (state_71622[(1)]);
if((state_val_71623 === (7))){
var inst_71604 = (state_71622[(7)]);
var inst_71604__$1 = (state_71622[(2)]);
var inst_71605 = (inst_71604__$1 == null);
var inst_71606 = cljs.core.not.call(null,inst_71605);
var state_71622__$1 = (function (){var statearr_71624 = state_71622;
(statearr_71624[(7)] = inst_71604__$1);

return statearr_71624;
})();
if(inst_71606){
var statearr_71625_71644 = state_71622__$1;
(statearr_71625_71644[(1)] = (8));

} else {
var statearr_71626_71645 = state_71622__$1;
(statearr_71626_71645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (1))){
var inst_71599 = (0);
var state_71622__$1 = (function (){var statearr_71627 = state_71622;
(statearr_71627[(8)] = inst_71599);

return statearr_71627;
})();
var statearr_71628_71646 = state_71622__$1;
(statearr_71628_71646[(2)] = null);

(statearr_71628_71646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (4))){
var state_71622__$1 = state_71622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71622__$1,(7),ch);
} else {
if((state_val_71623 === (6))){
var inst_71617 = (state_71622[(2)]);
var state_71622__$1 = state_71622;
var statearr_71629_71647 = state_71622__$1;
(statearr_71629_71647[(2)] = inst_71617);

(statearr_71629_71647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (3))){
var inst_71619 = (state_71622[(2)]);
var inst_71620 = cljs.core.async.close_BANG_.call(null,out);
var state_71622__$1 = (function (){var statearr_71630 = state_71622;
(statearr_71630[(9)] = inst_71619);

return statearr_71630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71622__$1,inst_71620);
} else {
if((state_val_71623 === (2))){
var inst_71599 = (state_71622[(8)]);
var inst_71601 = (inst_71599 < n);
var state_71622__$1 = state_71622;
if(cljs.core.truth_(inst_71601)){
var statearr_71631_71648 = state_71622__$1;
(statearr_71631_71648[(1)] = (4));

} else {
var statearr_71632_71649 = state_71622__$1;
(statearr_71632_71649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (11))){
var inst_71599 = (state_71622[(8)]);
var inst_71609 = (state_71622[(2)]);
var inst_71610 = (inst_71599 + (1));
var inst_71599__$1 = inst_71610;
var state_71622__$1 = (function (){var statearr_71633 = state_71622;
(statearr_71633[(10)] = inst_71609);

(statearr_71633[(8)] = inst_71599__$1);

return statearr_71633;
})();
var statearr_71634_71650 = state_71622__$1;
(statearr_71634_71650[(2)] = null);

(statearr_71634_71650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (9))){
var state_71622__$1 = state_71622;
var statearr_71635_71651 = state_71622__$1;
(statearr_71635_71651[(2)] = null);

(statearr_71635_71651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (5))){
var state_71622__$1 = state_71622;
var statearr_71636_71652 = state_71622__$1;
(statearr_71636_71652[(2)] = null);

(statearr_71636_71652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (10))){
var inst_71614 = (state_71622[(2)]);
var state_71622__$1 = state_71622;
var statearr_71637_71653 = state_71622__$1;
(statearr_71637_71653[(2)] = inst_71614);

(statearr_71637_71653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71623 === (8))){
var inst_71604 = (state_71622[(7)]);
var state_71622__$1 = state_71622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71622__$1,(11),out,inst_71604);
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
});})(c__59869__auto___71643,out))
;
return ((function (switch__59779__auto__,c__59869__auto___71643,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71638[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71638[(1)] = (1));

return statearr_71638;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71622){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71639){if((e71639 instanceof Object)){
var ex__59783__auto__ = e71639;
var statearr_71640_71654 = state_71622;
(statearr_71640_71654[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71655 = state_71622;
state_71622 = G__71655;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71643,out))
})();
var state__59871__auto__ = (function (){var statearr_71641 = f__59870__auto__.call(null);
(statearr_71641[(6)] = c__59869__auto___71643);

return statearr_71641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71643,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async71657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71657 = (function (f,ch,meta71658){
this.f = f;
this.ch = ch;
this.meta71658 = meta71658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71659,meta71658__$1){
var self__ = this;
var _71659__$1 = this;
return (new cljs.core.async.t_cljs$core$async71657(self__.f,self__.ch,meta71658__$1));
});

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71659){
var self__ = this;
var _71659__$1 = this;
return self__.meta71658;
});

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async71660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71660 = (function (f,ch,meta71658,_,fn1,meta71661){
this.f = f;
this.ch = ch;
this.meta71658 = meta71658;
this._ = _;
this.fn1 = fn1;
this.meta71661 = meta71661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_71662,meta71661__$1){
var self__ = this;
var _71662__$1 = this;
return (new cljs.core.async.t_cljs$core$async71660(self__.f,self__.ch,self__.meta71658,self__._,self__.fn1,meta71661__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_71662){
var self__ = this;
var _71662__$1 = this;
return self__.meta71661;
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__71656_SHARP_){
return f1.call(null,(((p1__71656_SHARP_ == null))?null:self__.f.call(null,p1__71656_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71658","meta71658",-1923991196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71657","cljs.core.async/t_cljs$core$async71657",989655046,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71661","meta71661",1895918031,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async71660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71660";

cljs.core.async.t_cljs$core$async71660.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71660");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async71660 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71660(f__$1,ch__$1,meta71658__$1,___$2,fn1__$1,meta71661){
return (new cljs.core.async.t_cljs$core$async71660(f__$1,ch__$1,meta71658__$1,___$2,fn1__$1,meta71661));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async71660(self__.f,self__.ch,self__.meta71658,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__48567__auto__ = ret;
if(cljs.core.truth_(and__48567__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__48567__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async71657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71658","meta71658",-1923991196,null)], null);
});

cljs.core.async.t_cljs$core$async71657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71657";

cljs.core.async.t_cljs$core$async71657.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71657");
});

cljs.core.async.__GT_t_cljs$core$async71657 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71657(f__$1,ch__$1,meta71658){
return (new cljs.core.async.t_cljs$core$async71657(f__$1,ch__$1,meta71658));
});

}

return (new cljs.core.async.t_cljs$core$async71657(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async71663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71663 = (function (f,ch,meta71664){
this.f = f;
this.ch = ch;
this.meta71664 = meta71664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71665,meta71664__$1){
var self__ = this;
var _71665__$1 = this;
return (new cljs.core.async.t_cljs$core$async71663(self__.f,self__.ch,meta71664__$1));
});

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71665){
var self__ = this;
var _71665__$1 = this;
return self__.meta71664;
});

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async71663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71664","meta71664",1193612948,null)], null);
});

cljs.core.async.t_cljs$core$async71663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71663";

cljs.core.async.t_cljs$core$async71663.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71663");
});

cljs.core.async.__GT_t_cljs$core$async71663 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71663(f__$1,ch__$1,meta71664){
return (new cljs.core.async.t_cljs$core$async71663(f__$1,ch__$1,meta71664));
});

}

return (new cljs.core.async.t_cljs$core$async71663(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async71666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71666 = (function (p,ch,meta71667){
this.p = p;
this.ch = ch;
this.meta71667 = meta71667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71668,meta71667__$1){
var self__ = this;
var _71668__$1 = this;
return (new cljs.core.async.t_cljs$core$async71666(self__.p,self__.ch,meta71667__$1));
});

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71668){
var self__ = this;
var _71668__$1 = this;
return self__.meta71667;
});

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async71666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async71666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71667","meta71667",-1728032419,null)], null);
});

cljs.core.async.t_cljs$core$async71666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71666";

cljs.core.async.t_cljs$core$async71666.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"cljs.core.async/t_cljs$core$async71666");
});

cljs.core.async.__GT_t_cljs$core$async71666 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71666(p__$1,ch__$1,meta71667){
return (new cljs.core.async.t_cljs$core$async71666(p__$1,ch__$1,meta71667));
});

}

return (new cljs.core.async.t_cljs$core$async71666(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71670 = arguments.length;
switch (G__71670) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___71710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71710,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71710,out){
return (function (state_71691){
var state_val_71692 = (state_71691[(1)]);
if((state_val_71692 === (7))){
var inst_71687 = (state_71691[(2)]);
var state_71691__$1 = state_71691;
var statearr_71693_71711 = state_71691__$1;
(statearr_71693_71711[(2)] = inst_71687);

(statearr_71693_71711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (1))){
var state_71691__$1 = state_71691;
var statearr_71694_71712 = state_71691__$1;
(statearr_71694_71712[(2)] = null);

(statearr_71694_71712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (4))){
var inst_71673 = (state_71691[(7)]);
var inst_71673__$1 = (state_71691[(2)]);
var inst_71674 = (inst_71673__$1 == null);
var state_71691__$1 = (function (){var statearr_71695 = state_71691;
(statearr_71695[(7)] = inst_71673__$1);

return statearr_71695;
})();
if(cljs.core.truth_(inst_71674)){
var statearr_71696_71713 = state_71691__$1;
(statearr_71696_71713[(1)] = (5));

} else {
var statearr_71697_71714 = state_71691__$1;
(statearr_71697_71714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (6))){
var inst_71673 = (state_71691[(7)]);
var inst_71678 = p.call(null,inst_71673);
var state_71691__$1 = state_71691;
if(cljs.core.truth_(inst_71678)){
var statearr_71698_71715 = state_71691__$1;
(statearr_71698_71715[(1)] = (8));

} else {
var statearr_71699_71716 = state_71691__$1;
(statearr_71699_71716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (3))){
var inst_71689 = (state_71691[(2)]);
var state_71691__$1 = state_71691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71691__$1,inst_71689);
} else {
if((state_val_71692 === (2))){
var state_71691__$1 = state_71691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71691__$1,(4),ch);
} else {
if((state_val_71692 === (11))){
var inst_71681 = (state_71691[(2)]);
var state_71691__$1 = state_71691;
var statearr_71700_71717 = state_71691__$1;
(statearr_71700_71717[(2)] = inst_71681);

(statearr_71700_71717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (9))){
var state_71691__$1 = state_71691;
var statearr_71701_71718 = state_71691__$1;
(statearr_71701_71718[(2)] = null);

(statearr_71701_71718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (5))){
var inst_71676 = cljs.core.async.close_BANG_.call(null,out);
var state_71691__$1 = state_71691;
var statearr_71702_71719 = state_71691__$1;
(statearr_71702_71719[(2)] = inst_71676);

(statearr_71702_71719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (10))){
var inst_71684 = (state_71691[(2)]);
var state_71691__$1 = (function (){var statearr_71703 = state_71691;
(statearr_71703[(8)] = inst_71684);

return statearr_71703;
})();
var statearr_71704_71720 = state_71691__$1;
(statearr_71704_71720[(2)] = null);

(statearr_71704_71720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71692 === (8))){
var inst_71673 = (state_71691[(7)]);
var state_71691__$1 = state_71691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71691__$1,(11),out,inst_71673);
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
});})(c__59869__auto___71710,out))
;
return ((function (switch__59779__auto__,c__59869__auto___71710,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71705 = [null,null,null,null,null,null,null,null,null];
(statearr_71705[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71705[(1)] = (1));

return statearr_71705;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71691){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71706){if((e71706 instanceof Object)){
var ex__59783__auto__ = e71706;
var statearr_71707_71721 = state_71691;
(statearr_71707_71721[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71722 = state_71691;
state_71691 = G__71722;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71710,out))
})();
var state__59871__auto__ = (function (){var statearr_71708 = f__59870__auto__.call(null);
(statearr_71708[(6)] = c__59869__auto___71710);

return statearr_71708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71710,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71724 = arguments.length;
switch (G__71724) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__59869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto__){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto__){
return (function (state_71787){
var state_val_71788 = (state_71787[(1)]);
if((state_val_71788 === (7))){
var inst_71783 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
var statearr_71789_71827 = state_71787__$1;
(statearr_71789_71827[(2)] = inst_71783);

(statearr_71789_71827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (20))){
var inst_71753 = (state_71787[(7)]);
var inst_71764 = (state_71787[(2)]);
var inst_71765 = cljs.core.next.call(null,inst_71753);
var inst_71739 = inst_71765;
var inst_71740 = null;
var inst_71741 = (0);
var inst_71742 = (0);
var state_71787__$1 = (function (){var statearr_71790 = state_71787;
(statearr_71790[(8)] = inst_71742);

(statearr_71790[(9)] = inst_71740);

(statearr_71790[(10)] = inst_71764);

(statearr_71790[(11)] = inst_71741);

(statearr_71790[(12)] = inst_71739);

return statearr_71790;
})();
var statearr_71791_71828 = state_71787__$1;
(statearr_71791_71828[(2)] = null);

(statearr_71791_71828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (1))){
var state_71787__$1 = state_71787;
var statearr_71792_71829 = state_71787__$1;
(statearr_71792_71829[(2)] = null);

(statearr_71792_71829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (4))){
var inst_71728 = (state_71787[(13)]);
var inst_71728__$1 = (state_71787[(2)]);
var inst_71729 = (inst_71728__$1 == null);
var state_71787__$1 = (function (){var statearr_71793 = state_71787;
(statearr_71793[(13)] = inst_71728__$1);

return statearr_71793;
})();
if(cljs.core.truth_(inst_71729)){
var statearr_71794_71830 = state_71787__$1;
(statearr_71794_71830[(1)] = (5));

} else {
var statearr_71795_71831 = state_71787__$1;
(statearr_71795_71831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (15))){
var state_71787__$1 = state_71787;
var statearr_71799_71832 = state_71787__$1;
(statearr_71799_71832[(2)] = null);

(statearr_71799_71832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (21))){
var state_71787__$1 = state_71787;
var statearr_71800_71833 = state_71787__$1;
(statearr_71800_71833[(2)] = null);

(statearr_71800_71833[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (13))){
var inst_71742 = (state_71787[(8)]);
var inst_71740 = (state_71787[(9)]);
var inst_71741 = (state_71787[(11)]);
var inst_71739 = (state_71787[(12)]);
var inst_71749 = (state_71787[(2)]);
var inst_71750 = (inst_71742 + (1));
var tmp71796 = inst_71740;
var tmp71797 = inst_71741;
var tmp71798 = inst_71739;
var inst_71739__$1 = tmp71798;
var inst_71740__$1 = tmp71796;
var inst_71741__$1 = tmp71797;
var inst_71742__$1 = inst_71750;
var state_71787__$1 = (function (){var statearr_71801 = state_71787;
(statearr_71801[(8)] = inst_71742__$1);

(statearr_71801[(9)] = inst_71740__$1);

(statearr_71801[(14)] = inst_71749);

(statearr_71801[(11)] = inst_71741__$1);

(statearr_71801[(12)] = inst_71739__$1);

return statearr_71801;
})();
var statearr_71802_71834 = state_71787__$1;
(statearr_71802_71834[(2)] = null);

(statearr_71802_71834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (22))){
var state_71787__$1 = state_71787;
var statearr_71803_71835 = state_71787__$1;
(statearr_71803_71835[(2)] = null);

(statearr_71803_71835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (6))){
var inst_71728 = (state_71787[(13)]);
var inst_71737 = f.call(null,inst_71728);
var inst_71738 = cljs.core.seq.call(null,inst_71737);
var inst_71739 = inst_71738;
var inst_71740 = null;
var inst_71741 = (0);
var inst_71742 = (0);
var state_71787__$1 = (function (){var statearr_71804 = state_71787;
(statearr_71804[(8)] = inst_71742);

(statearr_71804[(9)] = inst_71740);

(statearr_71804[(11)] = inst_71741);

(statearr_71804[(12)] = inst_71739);

return statearr_71804;
})();
var statearr_71805_71836 = state_71787__$1;
(statearr_71805_71836[(2)] = null);

(statearr_71805_71836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (17))){
var inst_71753 = (state_71787[(7)]);
var inst_71757 = cljs.core.chunk_first.call(null,inst_71753);
var inst_71758 = cljs.core.chunk_rest.call(null,inst_71753);
var inst_71759 = cljs.core.count.call(null,inst_71757);
var inst_71739 = inst_71758;
var inst_71740 = inst_71757;
var inst_71741 = inst_71759;
var inst_71742 = (0);
var state_71787__$1 = (function (){var statearr_71806 = state_71787;
(statearr_71806[(8)] = inst_71742);

(statearr_71806[(9)] = inst_71740);

(statearr_71806[(11)] = inst_71741);

(statearr_71806[(12)] = inst_71739);

return statearr_71806;
})();
var statearr_71807_71837 = state_71787__$1;
(statearr_71807_71837[(2)] = null);

(statearr_71807_71837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (3))){
var inst_71785 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71787__$1,inst_71785);
} else {
if((state_val_71788 === (12))){
var inst_71773 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
var statearr_71808_71838 = state_71787__$1;
(statearr_71808_71838[(2)] = inst_71773);

(statearr_71808_71838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (2))){
var state_71787__$1 = state_71787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71787__$1,(4),in$);
} else {
if((state_val_71788 === (23))){
var inst_71781 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
var statearr_71809_71839 = state_71787__$1;
(statearr_71809_71839[(2)] = inst_71781);

(statearr_71809_71839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (19))){
var inst_71768 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
var statearr_71810_71840 = state_71787__$1;
(statearr_71810_71840[(2)] = inst_71768);

(statearr_71810_71840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (11))){
var inst_71753 = (state_71787[(7)]);
var inst_71739 = (state_71787[(12)]);
var inst_71753__$1 = cljs.core.seq.call(null,inst_71739);
var state_71787__$1 = (function (){var statearr_71811 = state_71787;
(statearr_71811[(7)] = inst_71753__$1);

return statearr_71811;
})();
if(inst_71753__$1){
var statearr_71812_71841 = state_71787__$1;
(statearr_71812_71841[(1)] = (14));

} else {
var statearr_71813_71842 = state_71787__$1;
(statearr_71813_71842[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (9))){
var inst_71775 = (state_71787[(2)]);
var inst_71776 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71787__$1 = (function (){var statearr_71814 = state_71787;
(statearr_71814[(15)] = inst_71775);

return statearr_71814;
})();
if(cljs.core.truth_(inst_71776)){
var statearr_71815_71843 = state_71787__$1;
(statearr_71815_71843[(1)] = (21));

} else {
var statearr_71816_71844 = state_71787__$1;
(statearr_71816_71844[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (5))){
var inst_71731 = cljs.core.async.close_BANG_.call(null,out);
var state_71787__$1 = state_71787;
var statearr_71817_71845 = state_71787__$1;
(statearr_71817_71845[(2)] = inst_71731);

(statearr_71817_71845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (14))){
var inst_71753 = (state_71787[(7)]);
var inst_71755 = cljs.core.chunked_seq_QMARK_.call(null,inst_71753);
var state_71787__$1 = state_71787;
if(inst_71755){
var statearr_71818_71846 = state_71787__$1;
(statearr_71818_71846[(1)] = (17));

} else {
var statearr_71819_71847 = state_71787__$1;
(statearr_71819_71847[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (16))){
var inst_71771 = (state_71787[(2)]);
var state_71787__$1 = state_71787;
var statearr_71820_71848 = state_71787__$1;
(statearr_71820_71848[(2)] = inst_71771);

(statearr_71820_71848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71788 === (10))){
var inst_71742 = (state_71787[(8)]);
var inst_71740 = (state_71787[(9)]);
var inst_71747 = cljs.core._nth.call(null,inst_71740,inst_71742);
var state_71787__$1 = state_71787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71787__$1,(13),out,inst_71747);
} else {
if((state_val_71788 === (18))){
var inst_71753 = (state_71787[(7)]);
var inst_71762 = cljs.core.first.call(null,inst_71753);
var state_71787__$1 = state_71787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71787__$1,(20),out,inst_71762);
} else {
if((state_val_71788 === (8))){
var inst_71742 = (state_71787[(8)]);
var inst_71741 = (state_71787[(11)]);
var inst_71744 = (inst_71742 < inst_71741);
var inst_71745 = inst_71744;
var state_71787__$1 = state_71787;
if(cljs.core.truth_(inst_71745)){
var statearr_71821_71849 = state_71787__$1;
(statearr_71821_71849[(1)] = (10));

} else {
var statearr_71822_71850 = state_71787__$1;
(statearr_71822_71850[(1)] = (11));

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
});})(c__59869__auto__))
;
return ((function (switch__59779__auto__,c__59869__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____0 = (function (){
var statearr_71823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71823[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__);

(statearr_71823[(1)] = (1));

return statearr_71823;
});
var cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____1 = (function (state_71787){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71824){if((e71824 instanceof Object)){
var ex__59783__auto__ = e71824;
var statearr_71825_71851 = state_71787;
(statearr_71825_71851[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71852 = state_71787;
state_71787 = G__71852;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__ = function(state_71787){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____1.call(this,state_71787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__59780__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto__))
})();
var state__59871__auto__ = (function (){var statearr_71826 = f__59870__auto__.call(null);
(statearr_71826[(6)] = c__59869__auto__);

return statearr_71826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto__))
);

return c__59869__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71854 = arguments.length;
switch (G__71854) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71857 = arguments.length;
switch (G__71857) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71860 = arguments.length;
switch (G__71860) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___71907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71907,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71907,out){
return (function (state_71884){
var state_val_71885 = (state_71884[(1)]);
if((state_val_71885 === (7))){
var inst_71879 = (state_71884[(2)]);
var state_71884__$1 = state_71884;
var statearr_71886_71908 = state_71884__$1;
(statearr_71886_71908[(2)] = inst_71879);

(statearr_71886_71908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (1))){
var inst_71861 = null;
var state_71884__$1 = (function (){var statearr_71887 = state_71884;
(statearr_71887[(7)] = inst_71861);

return statearr_71887;
})();
var statearr_71888_71909 = state_71884__$1;
(statearr_71888_71909[(2)] = null);

(statearr_71888_71909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (4))){
var inst_71864 = (state_71884[(8)]);
var inst_71864__$1 = (state_71884[(2)]);
var inst_71865 = (inst_71864__$1 == null);
var inst_71866 = cljs.core.not.call(null,inst_71865);
var state_71884__$1 = (function (){var statearr_71889 = state_71884;
(statearr_71889[(8)] = inst_71864__$1);

return statearr_71889;
})();
if(inst_71866){
var statearr_71890_71910 = state_71884__$1;
(statearr_71890_71910[(1)] = (5));

} else {
var statearr_71891_71911 = state_71884__$1;
(statearr_71891_71911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (6))){
var state_71884__$1 = state_71884;
var statearr_71892_71912 = state_71884__$1;
(statearr_71892_71912[(2)] = null);

(statearr_71892_71912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (3))){
var inst_71881 = (state_71884[(2)]);
var inst_71882 = cljs.core.async.close_BANG_.call(null,out);
var state_71884__$1 = (function (){var statearr_71893 = state_71884;
(statearr_71893[(9)] = inst_71881);

return statearr_71893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71884__$1,inst_71882);
} else {
if((state_val_71885 === (2))){
var state_71884__$1 = state_71884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71884__$1,(4),ch);
} else {
if((state_val_71885 === (11))){
var inst_71864 = (state_71884[(8)]);
var inst_71873 = (state_71884[(2)]);
var inst_71861 = inst_71864;
var state_71884__$1 = (function (){var statearr_71894 = state_71884;
(statearr_71894[(7)] = inst_71861);

(statearr_71894[(10)] = inst_71873);

return statearr_71894;
})();
var statearr_71895_71913 = state_71884__$1;
(statearr_71895_71913[(2)] = null);

(statearr_71895_71913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (9))){
var inst_71864 = (state_71884[(8)]);
var state_71884__$1 = state_71884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71884__$1,(11),out,inst_71864);
} else {
if((state_val_71885 === (5))){
var inst_71861 = (state_71884[(7)]);
var inst_71864 = (state_71884[(8)]);
var inst_71868 = cljs.core._EQ_.call(null,inst_71864,inst_71861);
var state_71884__$1 = state_71884;
if(inst_71868){
var statearr_71897_71914 = state_71884__$1;
(statearr_71897_71914[(1)] = (8));

} else {
var statearr_71898_71915 = state_71884__$1;
(statearr_71898_71915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (10))){
var inst_71876 = (state_71884[(2)]);
var state_71884__$1 = state_71884;
var statearr_71899_71916 = state_71884__$1;
(statearr_71899_71916[(2)] = inst_71876);

(statearr_71899_71916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71885 === (8))){
var inst_71861 = (state_71884[(7)]);
var tmp71896 = inst_71861;
var inst_71861__$1 = tmp71896;
var state_71884__$1 = (function (){var statearr_71900 = state_71884;
(statearr_71900[(7)] = inst_71861__$1);

return statearr_71900;
})();
var statearr_71901_71917 = state_71884__$1;
(statearr_71901_71917[(2)] = null);

(statearr_71901_71917[(1)] = (2));


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
});})(c__59869__auto___71907,out))
;
return ((function (switch__59779__auto__,c__59869__auto___71907,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71902[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71902[(1)] = (1));

return statearr_71902;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71884){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71903){if((e71903 instanceof Object)){
var ex__59783__auto__ = e71903;
var statearr_71904_71918 = state_71884;
(statearr_71904_71918[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71919 = state_71884;
state_71884 = G__71919;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71907,out))
})();
var state__59871__auto__ = (function (){var statearr_71905 = f__59870__auto__.call(null);
(statearr_71905[(6)] = c__59869__auto___71907);

return statearr_71905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71907,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71921 = arguments.length;
switch (G__71921) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___71987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___71987,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___71987,out){
return (function (state_71959){
var state_val_71960 = (state_71959[(1)]);
if((state_val_71960 === (7))){
var inst_71955 = (state_71959[(2)]);
var state_71959__$1 = state_71959;
var statearr_71961_71988 = state_71959__$1;
(statearr_71961_71988[(2)] = inst_71955);

(statearr_71961_71988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (1))){
var inst_71922 = (new Array(n));
var inst_71923 = inst_71922;
var inst_71924 = (0);
var state_71959__$1 = (function (){var statearr_71962 = state_71959;
(statearr_71962[(7)] = inst_71924);

(statearr_71962[(8)] = inst_71923);

return statearr_71962;
})();
var statearr_71963_71989 = state_71959__$1;
(statearr_71963_71989[(2)] = null);

(statearr_71963_71989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (4))){
var inst_71927 = (state_71959[(9)]);
var inst_71927__$1 = (state_71959[(2)]);
var inst_71928 = (inst_71927__$1 == null);
var inst_71929 = cljs.core.not.call(null,inst_71928);
var state_71959__$1 = (function (){var statearr_71964 = state_71959;
(statearr_71964[(9)] = inst_71927__$1);

return statearr_71964;
})();
if(inst_71929){
var statearr_71965_71990 = state_71959__$1;
(statearr_71965_71990[(1)] = (5));

} else {
var statearr_71966_71991 = state_71959__$1;
(statearr_71966_71991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (15))){
var inst_71949 = (state_71959[(2)]);
var state_71959__$1 = state_71959;
var statearr_71967_71992 = state_71959__$1;
(statearr_71967_71992[(2)] = inst_71949);

(statearr_71967_71992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (13))){
var state_71959__$1 = state_71959;
var statearr_71968_71993 = state_71959__$1;
(statearr_71968_71993[(2)] = null);

(statearr_71968_71993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (6))){
var inst_71924 = (state_71959[(7)]);
var inst_71945 = (inst_71924 > (0));
var state_71959__$1 = state_71959;
if(cljs.core.truth_(inst_71945)){
var statearr_71969_71994 = state_71959__$1;
(statearr_71969_71994[(1)] = (12));

} else {
var statearr_71970_71995 = state_71959__$1;
(statearr_71970_71995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (3))){
var inst_71957 = (state_71959[(2)]);
var state_71959__$1 = state_71959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71959__$1,inst_71957);
} else {
if((state_val_71960 === (12))){
var inst_71923 = (state_71959[(8)]);
var inst_71947 = cljs.core.vec.call(null,inst_71923);
var state_71959__$1 = state_71959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71959__$1,(15),out,inst_71947);
} else {
if((state_val_71960 === (2))){
var state_71959__$1 = state_71959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71959__$1,(4),ch);
} else {
if((state_val_71960 === (11))){
var inst_71939 = (state_71959[(2)]);
var inst_71940 = (new Array(n));
var inst_71923 = inst_71940;
var inst_71924 = (0);
var state_71959__$1 = (function (){var statearr_71971 = state_71959;
(statearr_71971[(7)] = inst_71924);

(statearr_71971[(8)] = inst_71923);

(statearr_71971[(10)] = inst_71939);

return statearr_71971;
})();
var statearr_71972_71996 = state_71959__$1;
(statearr_71972_71996[(2)] = null);

(statearr_71972_71996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (9))){
var inst_71923 = (state_71959[(8)]);
var inst_71937 = cljs.core.vec.call(null,inst_71923);
var state_71959__$1 = state_71959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71959__$1,(11),out,inst_71937);
} else {
if((state_val_71960 === (5))){
var inst_71924 = (state_71959[(7)]);
var inst_71927 = (state_71959[(9)]);
var inst_71923 = (state_71959[(8)]);
var inst_71932 = (state_71959[(11)]);
var inst_71931 = (inst_71923[inst_71924] = inst_71927);
var inst_71932__$1 = (inst_71924 + (1));
var inst_71933 = (inst_71932__$1 < n);
var state_71959__$1 = (function (){var statearr_71973 = state_71959;
(statearr_71973[(12)] = inst_71931);

(statearr_71973[(11)] = inst_71932__$1);

return statearr_71973;
})();
if(cljs.core.truth_(inst_71933)){
var statearr_71974_71997 = state_71959__$1;
(statearr_71974_71997[(1)] = (8));

} else {
var statearr_71975_71998 = state_71959__$1;
(statearr_71975_71998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (14))){
var inst_71952 = (state_71959[(2)]);
var inst_71953 = cljs.core.async.close_BANG_.call(null,out);
var state_71959__$1 = (function (){var statearr_71977 = state_71959;
(statearr_71977[(13)] = inst_71952);

return statearr_71977;
})();
var statearr_71978_71999 = state_71959__$1;
(statearr_71978_71999[(2)] = inst_71953);

(statearr_71978_71999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (10))){
var inst_71943 = (state_71959[(2)]);
var state_71959__$1 = state_71959;
var statearr_71979_72000 = state_71959__$1;
(statearr_71979_72000[(2)] = inst_71943);

(statearr_71979_72000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71960 === (8))){
var inst_71923 = (state_71959[(8)]);
var inst_71932 = (state_71959[(11)]);
var tmp71976 = inst_71923;
var inst_71923__$1 = tmp71976;
var inst_71924 = inst_71932;
var state_71959__$1 = (function (){var statearr_71980 = state_71959;
(statearr_71980[(7)] = inst_71924);

(statearr_71980[(8)] = inst_71923__$1);

return statearr_71980;
})();
var statearr_71981_72001 = state_71959__$1;
(statearr_71981_72001[(2)] = null);

(statearr_71981_72001[(1)] = (2));


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
});})(c__59869__auto___71987,out))
;
return ((function (switch__59779__auto__,c__59869__auto___71987,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_71982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71982[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_71982[(1)] = (1));

return statearr_71982;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_71959){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_71959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e71983){if((e71983 instanceof Object)){
var ex__59783__auto__ = e71983;
var statearr_71984_72002 = state_71959;
(statearr_71984_72002[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72003 = state_71959;
state_71959 = G__72003;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_71959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_71959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___71987,out))
})();
var state__59871__auto__ = (function (){var statearr_71985 = f__59870__auto__.call(null);
(statearr_71985[(6)] = c__59869__auto___71987);

return statearr_71985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___71987,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__72005 = arguments.length;
switch (G__72005) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__59869__auto___72075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__59869__auto___72075,out){
return (function (){
var f__59870__auto__ = (function (){var switch__59779__auto__ = ((function (c__59869__auto___72075,out){
return (function (state_72047){
var state_val_72048 = (state_72047[(1)]);
if((state_val_72048 === (7))){
var inst_72043 = (state_72047[(2)]);
var state_72047__$1 = state_72047;
var statearr_72049_72076 = state_72047__$1;
(statearr_72049_72076[(2)] = inst_72043);

(statearr_72049_72076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (1))){
var inst_72006 = [];
var inst_72007 = inst_72006;
var inst_72008 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_72047__$1 = (function (){var statearr_72050 = state_72047;
(statearr_72050[(7)] = inst_72007);

(statearr_72050[(8)] = inst_72008);

return statearr_72050;
})();
var statearr_72051_72077 = state_72047__$1;
(statearr_72051_72077[(2)] = null);

(statearr_72051_72077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (4))){
var inst_72011 = (state_72047[(9)]);
var inst_72011__$1 = (state_72047[(2)]);
var inst_72012 = (inst_72011__$1 == null);
var inst_72013 = cljs.core.not.call(null,inst_72012);
var state_72047__$1 = (function (){var statearr_72052 = state_72047;
(statearr_72052[(9)] = inst_72011__$1);

return statearr_72052;
})();
if(inst_72013){
var statearr_72053_72078 = state_72047__$1;
(statearr_72053_72078[(1)] = (5));

} else {
var statearr_72054_72079 = state_72047__$1;
(statearr_72054_72079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (15))){
var inst_72037 = (state_72047[(2)]);
var state_72047__$1 = state_72047;
var statearr_72055_72080 = state_72047__$1;
(statearr_72055_72080[(2)] = inst_72037);

(statearr_72055_72080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (13))){
var state_72047__$1 = state_72047;
var statearr_72056_72081 = state_72047__$1;
(statearr_72056_72081[(2)] = null);

(statearr_72056_72081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (6))){
var inst_72007 = (state_72047[(7)]);
var inst_72032 = inst_72007.length;
var inst_72033 = (inst_72032 > (0));
var state_72047__$1 = state_72047;
if(cljs.core.truth_(inst_72033)){
var statearr_72057_72082 = state_72047__$1;
(statearr_72057_72082[(1)] = (12));

} else {
var statearr_72058_72083 = state_72047__$1;
(statearr_72058_72083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (3))){
var inst_72045 = (state_72047[(2)]);
var state_72047__$1 = state_72047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72047__$1,inst_72045);
} else {
if((state_val_72048 === (12))){
var inst_72007 = (state_72047[(7)]);
var inst_72035 = cljs.core.vec.call(null,inst_72007);
var state_72047__$1 = state_72047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72047__$1,(15),out,inst_72035);
} else {
if((state_val_72048 === (2))){
var state_72047__$1 = state_72047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72047__$1,(4),ch);
} else {
if((state_val_72048 === (11))){
var inst_72015 = (state_72047[(10)]);
var inst_72011 = (state_72047[(9)]);
var inst_72025 = (state_72047[(2)]);
var inst_72026 = [];
var inst_72027 = inst_72026.push(inst_72011);
var inst_72007 = inst_72026;
var inst_72008 = inst_72015;
var state_72047__$1 = (function (){var statearr_72059 = state_72047;
(statearr_72059[(7)] = inst_72007);

(statearr_72059[(11)] = inst_72025);

(statearr_72059[(8)] = inst_72008);

(statearr_72059[(12)] = inst_72027);

return statearr_72059;
})();
var statearr_72060_72084 = state_72047__$1;
(statearr_72060_72084[(2)] = null);

(statearr_72060_72084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (9))){
var inst_72007 = (state_72047[(7)]);
var inst_72023 = cljs.core.vec.call(null,inst_72007);
var state_72047__$1 = state_72047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72047__$1,(11),out,inst_72023);
} else {
if((state_val_72048 === (5))){
var inst_72015 = (state_72047[(10)]);
var inst_72011 = (state_72047[(9)]);
var inst_72008 = (state_72047[(8)]);
var inst_72015__$1 = f.call(null,inst_72011);
var inst_72016 = cljs.core._EQ_.call(null,inst_72015__$1,inst_72008);
var inst_72017 = cljs.core.keyword_identical_QMARK_.call(null,inst_72008,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_72018 = (inst_72016) || (inst_72017);
var state_72047__$1 = (function (){var statearr_72061 = state_72047;
(statearr_72061[(10)] = inst_72015__$1);

return statearr_72061;
})();
if(cljs.core.truth_(inst_72018)){
var statearr_72062_72085 = state_72047__$1;
(statearr_72062_72085[(1)] = (8));

} else {
var statearr_72063_72086 = state_72047__$1;
(statearr_72063_72086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (14))){
var inst_72040 = (state_72047[(2)]);
var inst_72041 = cljs.core.async.close_BANG_.call(null,out);
var state_72047__$1 = (function (){var statearr_72065 = state_72047;
(statearr_72065[(13)] = inst_72040);

return statearr_72065;
})();
var statearr_72066_72087 = state_72047__$1;
(statearr_72066_72087[(2)] = inst_72041);

(statearr_72066_72087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (10))){
var inst_72030 = (state_72047[(2)]);
var state_72047__$1 = state_72047;
var statearr_72067_72088 = state_72047__$1;
(statearr_72067_72088[(2)] = inst_72030);

(statearr_72067_72088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72048 === (8))){
var inst_72007 = (state_72047[(7)]);
var inst_72015 = (state_72047[(10)]);
var inst_72011 = (state_72047[(9)]);
var inst_72020 = inst_72007.push(inst_72011);
var tmp72064 = inst_72007;
var inst_72007__$1 = tmp72064;
var inst_72008 = inst_72015;
var state_72047__$1 = (function (){var statearr_72068 = state_72047;
(statearr_72068[(7)] = inst_72007__$1);

(statearr_72068[(14)] = inst_72020);

(statearr_72068[(8)] = inst_72008);

return statearr_72068;
})();
var statearr_72069_72089 = state_72047__$1;
(statearr_72069_72089[(2)] = null);

(statearr_72069_72089[(1)] = (2));


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
});})(c__59869__auto___72075,out))
;
return ((function (switch__59779__auto__,c__59869__auto___72075,out){
return (function() {
var cljs$core$async$state_machine__59780__auto__ = null;
var cljs$core$async$state_machine__59780__auto____0 = (function (){
var statearr_72070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72070[(0)] = cljs$core$async$state_machine__59780__auto__);

(statearr_72070[(1)] = (1));

return statearr_72070;
});
var cljs$core$async$state_machine__59780__auto____1 = (function (state_72047){
while(true){
var ret_value__59781__auto__ = (function (){try{while(true){
var result__59782__auto__ = switch__59779__auto__.call(null,state_72047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__59782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59782__auto__;
}
break;
}
}catch (e72071){if((e72071 instanceof Object)){
var ex__59783__auto__ = e72071;
var statearr_72072_72090 = state_72047;
(statearr_72072_72090[(5)] = ex__59783__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__59781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72091 = state_72047;
state_72047 = G__72091;
continue;
} else {
return ret_value__59781__auto__;
}
break;
}
});
cljs$core$async$state_machine__59780__auto__ = function(state_72047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59780__auto____1.call(this,state_72047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59780__auto____0;
cljs$core$async$state_machine__59780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59780__auto____1;
return cljs$core$async$state_machine__59780__auto__;
})()
;})(switch__59779__auto__,c__59869__auto___72075,out))
})();
var state__59871__auto__ = (function (){var statearr_72073 = f__59870__auto__.call(null);
(statearr_72073[(6)] = c__59869__auto___72075);

return statearr_72073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__59871__auto__);
});})(c__59869__auto___72075,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515662043444
