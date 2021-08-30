goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50197 = arguments.length;
switch (G__50197) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50202 = (function (f,blockable,meta50203){
this.f = f;
this.blockable = blockable;
this.meta50203 = meta50203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50204,meta50203__$1){
var self__ = this;
var _50204__$1 = this;
return (new cljs.core.async.t_cljs$core$async50202(self__.f,self__.blockable,meta50203__$1));
});

cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50204){
var self__ = this;
var _50204__$1 = this;
return self__.meta50203;
});

cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50203","meta50203",350679907,null)], null);
});

cljs.core.async.t_cljs$core$async50202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50202";

cljs.core.async.t_cljs$core$async50202.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50202.
 */
cljs.core.async.__GT_t_cljs$core$async50202 = (function cljs$core$async$__GT_t_cljs$core$async50202(f__$1,blockable__$1,meta50203){
return (new cljs.core.async.t_cljs$core$async50202(f__$1,blockable__$1,meta50203));
});

}

return (new cljs.core.async.t_cljs$core$async50202(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__50280 = arguments.length;
switch (G__50280) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__50305 = arguments.length;
switch (G__50305) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__50311 = arguments.length;
switch (G__50311) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53147 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53147) : fn1.call(null,val_53147));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53147,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53147) : fn1.call(null,val_53147));
});})(val_53147,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50339 = arguments.length;
switch (G__50339) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53164 = n;
var x_53165 = (0);
while(true){
if((x_53165 < n__4607__auto___53164)){
(a[x_53165] = x_53165);

var G__53168 = (x_53165 + (1));
x_53165 = G__53168;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50350 = (function (flag,meta50351){
this.flag = flag;
this.meta50351 = meta50351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50352,meta50351__$1){
var self__ = this;
var _50352__$1 = this;
return (new cljs.core.async.t_cljs$core$async50350(self__.flag,meta50351__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50352){
var self__ = this;
var _50352__$1 = this;
return self__.meta50351;
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50351","meta50351",1691082817,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50350";

cljs.core.async.t_cljs$core$async50350.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50350");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50350.
 */
cljs.core.async.__GT_t_cljs$core$async50350 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50350(flag__$1,meta50351){
return (new cljs.core.async.t_cljs$core$async50350(flag__$1,meta50351));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50350(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50357 = (function (flag,cb,meta50358){
this.flag = flag;
this.cb = cb;
this.meta50358 = meta50358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50359,meta50358__$1){
var self__ = this;
var _50359__$1 = this;
return (new cljs.core.async.t_cljs$core$async50357(self__.flag,self__.cb,meta50358__$1));
});

cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50359){
var self__ = this;
var _50359__$1 = this;
return self__.meta50358;
});

cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50358","meta50358",-573278111,null)], null);
});

cljs.core.async.t_cljs$core$async50357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50357";

cljs.core.async.t_cljs$core$async50357.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50357");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50357.
 */
cljs.core.async.__GT_t_cljs$core$async50357 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50357(flag__$1,cb__$1,meta50358){
return (new cljs.core.async.t_cljs$core$async50357(flag__$1,cb__$1,meta50358));
});

}

return (new cljs.core.async.t_cljs$core$async50357(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50365_SHARP_){
var G__50371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50365_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50371) : fret.call(null,G__50371));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50366_SHARP_){
var G__50372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50366_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50372) : fret.call(null,G__50372));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53203 = (i + (1));
i = G__53203;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___53211 = arguments.length;
var i__4731__auto___53213 = (0);
while(true){
if((i__4731__auto___53213 < len__4730__auto___53211)){
args__4736__auto__.push((arguments[i__4731__auto___53213]));

var G__53214 = (i__4731__auto___53213 + (1));
i__4731__auto___53213 = G__53214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50375){
var map__50376 = p__50375;
var map__50376__$1 = (((((!((map__50376 == null))))?(((((map__50376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50376):map__50376);
var opts = map__50376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50373){
var G__50374 = cljs.core.first(seq50373);
var seq50373__$1 = cljs.core.next(seq50373);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50374,seq50373__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__50385 = arguments.length;
switch (G__50385) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50030__auto___53244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___53244){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___53244){
return (function (state_50415){
var state_val_50416 = (state_50415[(1)]);
if((state_val_50416 === (7))){
var inst_50407 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
var statearr_50417_53249 = state_50415__$1;
(statearr_50417_53249[(2)] = inst_50407);

(statearr_50417_53249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (1))){
var state_50415__$1 = state_50415;
var statearr_50418_53252 = state_50415__$1;
(statearr_50418_53252[(2)] = null);

(statearr_50418_53252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (4))){
var inst_50390 = (state_50415[(7)]);
var inst_50390__$1 = (state_50415[(2)]);
var inst_50391 = (inst_50390__$1 == null);
var state_50415__$1 = (function (){var statearr_50419 = state_50415;
(statearr_50419[(7)] = inst_50390__$1);

return statearr_50419;
})();
if(cljs.core.truth_(inst_50391)){
var statearr_50420_53253 = state_50415__$1;
(statearr_50420_53253[(1)] = (5));

} else {
var statearr_50421_53254 = state_50415__$1;
(statearr_50421_53254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (13))){
var state_50415__$1 = state_50415;
var statearr_50422_53255 = state_50415__$1;
(statearr_50422_53255[(2)] = null);

(statearr_50422_53255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (6))){
var inst_50390 = (state_50415[(7)]);
var state_50415__$1 = state_50415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50415__$1,(11),to,inst_50390);
} else {
if((state_val_50416 === (3))){
var inst_50413 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50415__$1,inst_50413);
} else {
if((state_val_50416 === (12))){
var state_50415__$1 = state_50415;
var statearr_50425_53265 = state_50415__$1;
(statearr_50425_53265[(2)] = null);

(statearr_50425_53265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (2))){
var state_50415__$1 = state_50415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50415__$1,(4),from);
} else {
if((state_val_50416 === (11))){
var inst_50400 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
if(cljs.core.truth_(inst_50400)){
var statearr_50426_53269 = state_50415__$1;
(statearr_50426_53269[(1)] = (12));

} else {
var statearr_50427_53270 = state_50415__$1;
(statearr_50427_53270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (9))){
var state_50415__$1 = state_50415;
var statearr_50429_53272 = state_50415__$1;
(statearr_50429_53272[(2)] = null);

(statearr_50429_53272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (5))){
var state_50415__$1 = state_50415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50433_53273 = state_50415__$1;
(statearr_50433_53273[(1)] = (8));

} else {
var statearr_50434_53274 = state_50415__$1;
(statearr_50434_53274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (14))){
var inst_50405 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
var statearr_50435_53275 = state_50415__$1;
(statearr_50435_53275[(2)] = inst_50405);

(statearr_50435_53275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (10))){
var inst_50397 = (state_50415[(2)]);
var state_50415__$1 = state_50415;
var statearr_50436_53276 = state_50415__$1;
(statearr_50436_53276[(2)] = inst_50397);

(statearr_50436_53276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50416 === (8))){
var inst_50394 = cljs.core.async.close_BANG_(to);
var state_50415__$1 = state_50415;
var statearr_50439_53279 = state_50415__$1;
(statearr_50439_53279[(2)] = inst_50394);

(statearr_50439_53279[(1)] = (10));


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
});})(c__50030__auto___53244))
;
return ((function (switch__49505__auto__,c__50030__auto___53244){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50440 = [null,null,null,null,null,null,null,null];
(statearr_50440[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50440[(1)] = (1));

return statearr_50440;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50415){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50415);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50441){if((e50441 instanceof Object)){
var ex__49509__auto__ = e50441;
var statearr_50442_53280 = state_50415;
(statearr_50442_53280[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53281 = state_50415;
state_50415 = G__53281;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___53244))
})();
var state__50032__auto__ = (function (){var statearr_50445 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50445[(6)] = c__50030__auto___53244);

return statearr_50445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___53244))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__50446){
var vec__50447 = p__50446;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(1),null);
var job = vec__50447;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50030__auto___53300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results){
return (function (state_50454){
var state_val_50455 = (state_50454[(1)]);
if((state_val_50455 === (1))){
var state_50454__$1 = state_50454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50454__$1,(2),res,v);
} else {
if((state_val_50455 === (2))){
var inst_50451 = (state_50454[(2)]);
var inst_50452 = cljs.core.async.close_BANG_(res);
var state_50454__$1 = (function (){var statearr_50456 = state_50454;
(statearr_50456[(7)] = inst_50451);

return statearr_50456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50454__$1,inst_50452);
} else {
return null;
}
}
});})(c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results))
;
return ((function (switch__49505__auto__,c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50461 = [null,null,null,null,null,null,null,null];
(statearr_50461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50461[(1)] = (1));

return statearr_50461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50454){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50454);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50462){if((e50462 instanceof Object)){
var ex__49509__auto__ = e50462;
var statearr_50463_53308 = state_50454;
(statearr_50463_53308[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53312 = state_50454;
state_50454 = G__53312;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results))
})();
var state__50032__auto__ = (function (){var statearr_50467 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50467[(6)] = c__50030__auto___53300);

return statearr_50467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___53300,res,vec__50447,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50468){
var vec__50469 = p__50468;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(1),null);
var job = vec__50469;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___53317 = n;
var __53318 = (0);
while(true){
if((__53318 < n__4607__auto___53317)){
var G__50472_53320 = type;
var G__50472_53321__$1 = (((G__50472_53320 instanceof cljs.core.Keyword))?G__50472_53320.fqn:null);
switch (G__50472_53321__$1) {
case "compute":
var c__50030__auto___53323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53318,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (__53318,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function (state_50485){
var state_val_50487 = (state_50485[(1)]);
if((state_val_50487 === (1))){
var state_50485__$1 = state_50485;
var statearr_50489_53328 = state_50485__$1;
(statearr_50489_53328[(2)] = null);

(statearr_50489_53328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (2))){
var state_50485__$1 = state_50485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50485__$1,(4),jobs);
} else {
if((state_val_50487 === (3))){
var inst_50483 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50485__$1,inst_50483);
} else {
if((state_val_50487 === (4))){
var inst_50475 = (state_50485[(2)]);
var inst_50476 = process(inst_50475);
var state_50485__$1 = state_50485;
if(cljs.core.truth_(inst_50476)){
var statearr_50494_53331 = state_50485__$1;
(statearr_50494_53331[(1)] = (5));

} else {
var statearr_50495_53332 = state_50485__$1;
(statearr_50495_53332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (5))){
var state_50485__$1 = state_50485;
var statearr_50496_53333 = state_50485__$1;
(statearr_50496_53333[(2)] = null);

(statearr_50496_53333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (6))){
var state_50485__$1 = state_50485;
var statearr_50497_53336 = state_50485__$1;
(statearr_50497_53336[(2)] = null);

(statearr_50497_53336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (7))){
var inst_50481 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
var statearr_50498_53338 = state_50485__$1;
(statearr_50498_53338[(2)] = inst_50481);

(statearr_50498_53338[(1)] = (3));


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
});})(__53318,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
;
return ((function (__53318,switch__49505__auto__,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50499 = [null,null,null,null,null,null,null];
(statearr_50499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50499[(1)] = (1));

return statearr_50499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50485){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50485);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50502){if((e50502 instanceof Object)){
var ex__49509__auto__ = e50502;
var statearr_50503_53341 = state_50485;
(statearr_50503_53341[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53342 = state_50485;
state_50485 = G__53342;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(__53318,switch__49505__auto__,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
})();
var state__50032__auto__ = (function (){var statearr_50504 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50504[(6)] = c__50030__auto___53323);

return statearr_50504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(__53318,c__50030__auto___53323,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
);


break;
case "async":
var c__50030__auto___53344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53318,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (__53318,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function (state_50518){
var state_val_50519 = (state_50518[(1)]);
if((state_val_50519 === (1))){
var state_50518__$1 = state_50518;
var statearr_50522_53346 = state_50518__$1;
(statearr_50522_53346[(2)] = null);

(statearr_50522_53346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (2))){
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50518__$1,(4),jobs);
} else {
if((state_val_50519 === (3))){
var inst_50516 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50518__$1,inst_50516);
} else {
if((state_val_50519 === (4))){
var inst_50508 = (state_50518[(2)]);
var inst_50509 = async(inst_50508);
var state_50518__$1 = state_50518;
if(cljs.core.truth_(inst_50509)){
var statearr_50524_53351 = state_50518__$1;
(statearr_50524_53351[(1)] = (5));

} else {
var statearr_50525_53356 = state_50518__$1;
(statearr_50525_53356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (5))){
var state_50518__$1 = state_50518;
var statearr_50526_53359 = state_50518__$1;
(statearr_50526_53359[(2)] = null);

(statearr_50526_53359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (6))){
var state_50518__$1 = state_50518;
var statearr_50527_53363 = state_50518__$1;
(statearr_50527_53363[(2)] = null);

(statearr_50527_53363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50519 === (7))){
var inst_50514 = (state_50518[(2)]);
var state_50518__$1 = state_50518;
var statearr_50530_53365 = state_50518__$1;
(statearr_50530_53365[(2)] = inst_50514);

(statearr_50530_53365[(1)] = (3));


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
});})(__53318,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
;
return ((function (__53318,switch__49505__auto__,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50531 = [null,null,null,null,null,null,null];
(statearr_50531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50531[(1)] = (1));

return statearr_50531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50518){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50518);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50532){if((e50532 instanceof Object)){
var ex__49509__auto__ = e50532;
var statearr_50534_53370 = state_50518;
(statearr_50534_53370[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53371 = state_50518;
state_50518 = G__53371;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(__53318,switch__49505__auto__,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
})();
var state__50032__auto__ = (function (){var statearr_50535 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50535[(6)] = c__50030__auto___53344);

return statearr_50535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(__53318,c__50030__auto___53344,G__50472_53320,G__50472_53321__$1,n__4607__auto___53317,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50472_53321__$1)].join('')));

}

var G__53375 = (__53318 + (1));
__53318 = G__53375;
continue;
} else {
}
break;
}

var c__50030__auto___53376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___53376,jobs,results,process,async){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___53376,jobs,results,process,async){
return (function (state_50560){
var state_val_50561 = (state_50560[(1)]);
if((state_val_50561 === (7))){
var inst_50556 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50564_53377 = state_50560__$1;
(statearr_50564_53377[(2)] = inst_50556);

(statearr_50564_53377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (1))){
var state_50560__$1 = state_50560;
var statearr_50565_53382 = state_50560__$1;
(statearr_50565_53382[(2)] = null);

(statearr_50565_53382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (4))){
var inst_50540 = (state_50560[(7)]);
var inst_50540__$1 = (state_50560[(2)]);
var inst_50541 = (inst_50540__$1 == null);
var state_50560__$1 = (function (){var statearr_50567 = state_50560;
(statearr_50567[(7)] = inst_50540__$1);

return statearr_50567;
})();
if(cljs.core.truth_(inst_50541)){
var statearr_50568_53385 = state_50560__$1;
(statearr_50568_53385[(1)] = (5));

} else {
var statearr_50569_53386 = state_50560__$1;
(statearr_50569_53386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (6))){
var inst_50540 = (state_50560[(7)]);
var inst_50545 = (state_50560[(8)]);
var inst_50545__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50547 = [inst_50540,inst_50545__$1];
var inst_50548 = (new cljs.core.PersistentVector(null,2,(5),inst_50546,inst_50547,null));
var state_50560__$1 = (function (){var statearr_50572 = state_50560;
(statearr_50572[(8)] = inst_50545__$1);

return statearr_50572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50560__$1,(8),jobs,inst_50548);
} else {
if((state_val_50561 === (3))){
var inst_50558 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50560__$1,inst_50558);
} else {
if((state_val_50561 === (2))){
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(4),from);
} else {
if((state_val_50561 === (9))){
var inst_50552 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50573 = state_50560;
(statearr_50573[(9)] = inst_50552);

return statearr_50573;
})();
var statearr_50574_53394 = state_50560__$1;
(statearr_50574_53394[(2)] = null);

(statearr_50574_53394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (5))){
var inst_50543 = cljs.core.async.close_BANG_(jobs);
var state_50560__$1 = state_50560;
var statearr_50576_53400 = state_50560__$1;
(statearr_50576_53400[(2)] = inst_50543);

(statearr_50576_53400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (8))){
var inst_50545 = (state_50560[(8)]);
var inst_50550 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50577 = state_50560;
(statearr_50577[(10)] = inst_50550);

return statearr_50577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50560__$1,(9),results,inst_50545);
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
});})(c__50030__auto___53376,jobs,results,process,async))
;
return ((function (switch__49505__auto__,c__50030__auto___53376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50580[(1)] = (1));

return statearr_50580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50560){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50560);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50581){if((e50581 instanceof Object)){
var ex__49509__auto__ = e50581;
var statearr_50582_53409 = state_50560;
(statearr_50582_53409[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53413 = state_50560;
state_50560 = G__53413;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___53376,jobs,results,process,async))
})();
var state__50032__auto__ = (function (){var statearr_50584 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50584[(6)] = c__50030__auto___53376);

return statearr_50584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___53376,jobs,results,process,async))
);


var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__,jobs,results,process,async){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__,jobs,results,process,async){
return (function (state_50624){
var state_val_50625 = (state_50624[(1)]);
if((state_val_50625 === (7))){
var inst_50620 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
var statearr_50630_53417 = state_50624__$1;
(statearr_50630_53417[(2)] = inst_50620);

(statearr_50630_53417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (20))){
var state_50624__$1 = state_50624;
var statearr_50631_53418 = state_50624__$1;
(statearr_50631_53418[(2)] = null);

(statearr_50631_53418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (1))){
var state_50624__$1 = state_50624;
var statearr_50632_53422 = state_50624__$1;
(statearr_50632_53422[(2)] = null);

(statearr_50632_53422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (4))){
var inst_50587 = (state_50624[(7)]);
var inst_50587__$1 = (state_50624[(2)]);
var inst_50588 = (inst_50587__$1 == null);
var state_50624__$1 = (function (){var statearr_50635 = state_50624;
(statearr_50635[(7)] = inst_50587__$1);

return statearr_50635;
})();
if(cljs.core.truth_(inst_50588)){
var statearr_50636_53423 = state_50624__$1;
(statearr_50636_53423[(1)] = (5));

} else {
var statearr_50637_53424 = state_50624__$1;
(statearr_50637_53424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (15))){
var inst_50602 = (state_50624[(8)]);
var state_50624__$1 = state_50624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50624__$1,(18),to,inst_50602);
} else {
if((state_val_50625 === (21))){
var inst_50615 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
var statearr_50639_53428 = state_50624__$1;
(statearr_50639_53428[(2)] = inst_50615);

(statearr_50639_53428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (13))){
var inst_50617 = (state_50624[(2)]);
var state_50624__$1 = (function (){var statearr_50643 = state_50624;
(statearr_50643[(9)] = inst_50617);

return statearr_50643;
})();
var statearr_50644_53429 = state_50624__$1;
(statearr_50644_53429[(2)] = null);

(statearr_50644_53429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (6))){
var inst_50587 = (state_50624[(7)]);
var state_50624__$1 = state_50624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50624__$1,(11),inst_50587);
} else {
if((state_val_50625 === (17))){
var inst_50610 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
if(cljs.core.truth_(inst_50610)){
var statearr_50645_53439 = state_50624__$1;
(statearr_50645_53439[(1)] = (19));

} else {
var statearr_50646_53445 = state_50624__$1;
(statearr_50646_53445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (3))){
var inst_50622 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50624__$1,inst_50622);
} else {
if((state_val_50625 === (12))){
var inst_50597 = (state_50624[(10)]);
var state_50624__$1 = state_50624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50624__$1,(14),inst_50597);
} else {
if((state_val_50625 === (2))){
var state_50624__$1 = state_50624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50624__$1,(4),results);
} else {
if((state_val_50625 === (19))){
var state_50624__$1 = state_50624;
var statearr_50647_53450 = state_50624__$1;
(statearr_50647_53450[(2)] = null);

(statearr_50647_53450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (11))){
var inst_50597 = (state_50624[(2)]);
var state_50624__$1 = (function (){var statearr_50649 = state_50624;
(statearr_50649[(10)] = inst_50597);

return statearr_50649;
})();
var statearr_50653_53451 = state_50624__$1;
(statearr_50653_53451[(2)] = null);

(statearr_50653_53451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (9))){
var state_50624__$1 = state_50624;
var statearr_50654_53455 = state_50624__$1;
(statearr_50654_53455[(2)] = null);

(statearr_50654_53455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (5))){
var state_50624__$1 = state_50624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50656_53459 = state_50624__$1;
(statearr_50656_53459[(1)] = (8));

} else {
var statearr_50657_53460 = state_50624__$1;
(statearr_50657_53460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (14))){
var inst_50604 = (state_50624[(11)]);
var inst_50602 = (state_50624[(8)]);
var inst_50602__$1 = (state_50624[(2)]);
var inst_50603 = (inst_50602__$1 == null);
var inst_50604__$1 = cljs.core.not(inst_50603);
var state_50624__$1 = (function (){var statearr_50662 = state_50624;
(statearr_50662[(11)] = inst_50604__$1);

(statearr_50662[(8)] = inst_50602__$1);

return statearr_50662;
})();
if(inst_50604__$1){
var statearr_50663_53461 = state_50624__$1;
(statearr_50663_53461[(1)] = (15));

} else {
var statearr_50664_53462 = state_50624__$1;
(statearr_50664_53462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (16))){
var inst_50604 = (state_50624[(11)]);
var state_50624__$1 = state_50624;
var statearr_50665_53466 = state_50624__$1;
(statearr_50665_53466[(2)] = inst_50604);

(statearr_50665_53466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (10))){
var inst_50594 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
var statearr_50667_53472 = state_50624__$1;
(statearr_50667_53472[(2)] = inst_50594);

(statearr_50667_53472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (18))){
var inst_50607 = (state_50624[(2)]);
var state_50624__$1 = state_50624;
var statearr_50669_53473 = state_50624__$1;
(statearr_50669_53473[(2)] = inst_50607);

(statearr_50669_53473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50625 === (8))){
var inst_50591 = cljs.core.async.close_BANG_(to);
var state_50624__$1 = state_50624;
var statearr_50670_53477 = state_50624__$1;
(statearr_50670_53477[(2)] = inst_50591);

(statearr_50670_53477[(1)] = (10));


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
});})(c__50030__auto__,jobs,results,process,async))
;
return ((function (switch__49505__auto__,c__50030__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50671[(1)] = (1));

return statearr_50671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50624){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50624);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50676){if((e50676 instanceof Object)){
var ex__49509__auto__ = e50676;
var statearr_50677_53488 = state_50624;
(statearr_50677_53488[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53492 = state_50624;
state_50624 = G__53492;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__,jobs,results,process,async))
})();
var state__50032__auto__ = (function (){var statearr_50678 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50678[(6)] = c__50030__auto__);

return statearr_50678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__,jobs,results,process,async))
);

return c__50030__auto__;
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
var G__50682 = arguments.length;
switch (G__50682) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__50687 = arguments.length;
switch (G__50687) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__50694 = arguments.length;
switch (G__50694) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50030__auto___53519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___53519,tc,fc){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___53519,tc,fc){
return (function (state_50723){
var state_val_50724 = (state_50723[(1)]);
if((state_val_50724 === (7))){
var inst_50719 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
var statearr_50725_53521 = state_50723__$1;
(statearr_50725_53521[(2)] = inst_50719);

(statearr_50725_53521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (1))){
var state_50723__$1 = state_50723;
var statearr_50726_53523 = state_50723__$1;
(statearr_50726_53523[(2)] = null);

(statearr_50726_53523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (4))){
var inst_50700 = (state_50723[(7)]);
var inst_50700__$1 = (state_50723[(2)]);
var inst_50701 = (inst_50700__$1 == null);
var state_50723__$1 = (function (){var statearr_50727 = state_50723;
(statearr_50727[(7)] = inst_50700__$1);

return statearr_50727;
})();
if(cljs.core.truth_(inst_50701)){
var statearr_50728_53527 = state_50723__$1;
(statearr_50728_53527[(1)] = (5));

} else {
var statearr_50729_53528 = state_50723__$1;
(statearr_50729_53528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (13))){
var state_50723__$1 = state_50723;
var statearr_50730_53530 = state_50723__$1;
(statearr_50730_53530[(2)] = null);

(statearr_50730_53530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (6))){
var inst_50700 = (state_50723[(7)]);
var inst_50706 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50700) : p.call(null,inst_50700));
var state_50723__$1 = state_50723;
if(cljs.core.truth_(inst_50706)){
var statearr_50731_53534 = state_50723__$1;
(statearr_50731_53534[(1)] = (9));

} else {
var statearr_50732_53535 = state_50723__$1;
(statearr_50732_53535[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (3))){
var inst_50721 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50723__$1,inst_50721);
} else {
if((state_val_50724 === (12))){
var state_50723__$1 = state_50723;
var statearr_50736_53538 = state_50723__$1;
(statearr_50736_53538[(2)] = null);

(statearr_50736_53538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (2))){
var state_50723__$1 = state_50723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50723__$1,(4),ch);
} else {
if((state_val_50724 === (11))){
var inst_50700 = (state_50723[(7)]);
var inst_50710 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50723__$1,(8),inst_50710,inst_50700);
} else {
if((state_val_50724 === (9))){
var state_50723__$1 = state_50723;
var statearr_50739_53544 = state_50723__$1;
(statearr_50739_53544[(2)] = tc);

(statearr_50739_53544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (5))){
var inst_50703 = cljs.core.async.close_BANG_(tc);
var inst_50704 = cljs.core.async.close_BANG_(fc);
var state_50723__$1 = (function (){var statearr_50741 = state_50723;
(statearr_50741[(8)] = inst_50703);

return statearr_50741;
})();
var statearr_50742_53546 = state_50723__$1;
(statearr_50742_53546[(2)] = inst_50704);

(statearr_50742_53546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (14))){
var inst_50717 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
var statearr_50743_53551 = state_50723__$1;
(statearr_50743_53551[(2)] = inst_50717);

(statearr_50743_53551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (10))){
var state_50723__$1 = state_50723;
var statearr_50744_53553 = state_50723__$1;
(statearr_50744_53553[(2)] = fc);

(statearr_50744_53553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (8))){
var inst_50712 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
if(cljs.core.truth_(inst_50712)){
var statearr_50745_53556 = state_50723__$1;
(statearr_50745_53556[(1)] = (12));

} else {
var statearr_50746_53557 = state_50723__$1;
(statearr_50746_53557[(1)] = (13));

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
});})(c__50030__auto___53519,tc,fc))
;
return ((function (switch__49505__auto__,c__50030__auto___53519,tc,fc){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50747 = [null,null,null,null,null,null,null,null,null];
(statearr_50747[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50747[(1)] = (1));

return statearr_50747;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50723){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50723);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50751){if((e50751 instanceof Object)){
var ex__49509__auto__ = e50751;
var statearr_50752_53561 = state_50723;
(statearr_50752_53561[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53563 = state_50723;
state_50723 = G__53563;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___53519,tc,fc))
})();
var state__50032__auto__ = (function (){var statearr_50753 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50753[(6)] = c__50030__auto___53519);

return statearr_50753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___53519,tc,fc))
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
var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__){
return (function (state_50784){
var state_val_50785 = (state_50784[(1)]);
if((state_val_50785 === (7))){
var inst_50780 = (state_50784[(2)]);
var state_50784__$1 = state_50784;
var statearr_50786_53566 = state_50784__$1;
(statearr_50786_53566[(2)] = inst_50780);

(statearr_50786_53566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (1))){
var inst_50761 = init;
var state_50784__$1 = (function (){var statearr_50791 = state_50784;
(statearr_50791[(7)] = inst_50761);

return statearr_50791;
})();
var statearr_50795_53568 = state_50784__$1;
(statearr_50795_53568[(2)] = null);

(statearr_50795_53568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (4))){
var inst_50764 = (state_50784[(8)]);
var inst_50764__$1 = (state_50784[(2)]);
var inst_50765 = (inst_50764__$1 == null);
var state_50784__$1 = (function (){var statearr_50796 = state_50784;
(statearr_50796[(8)] = inst_50764__$1);

return statearr_50796;
})();
if(cljs.core.truth_(inst_50765)){
var statearr_50797_53573 = state_50784__$1;
(statearr_50797_53573[(1)] = (5));

} else {
var statearr_50798_53575 = state_50784__$1;
(statearr_50798_53575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (6))){
var inst_50761 = (state_50784[(7)]);
var inst_50764 = (state_50784[(8)]);
var inst_50768 = (state_50784[(9)]);
var inst_50768__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50761,inst_50764) : f.call(null,inst_50761,inst_50764));
var inst_50769 = cljs.core.reduced_QMARK_(inst_50768__$1);
var state_50784__$1 = (function (){var statearr_50801 = state_50784;
(statearr_50801[(9)] = inst_50768__$1);

return statearr_50801;
})();
if(inst_50769){
var statearr_50802_53581 = state_50784__$1;
(statearr_50802_53581[(1)] = (8));

} else {
var statearr_50803_53584 = state_50784__$1;
(statearr_50803_53584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (3))){
var inst_50782 = (state_50784[(2)]);
var state_50784__$1 = state_50784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50784__$1,inst_50782);
} else {
if((state_val_50785 === (2))){
var state_50784__$1 = state_50784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50784__$1,(4),ch);
} else {
if((state_val_50785 === (9))){
var inst_50768 = (state_50784[(9)]);
var inst_50761 = inst_50768;
var state_50784__$1 = (function (){var statearr_50804 = state_50784;
(statearr_50804[(7)] = inst_50761);

return statearr_50804;
})();
var statearr_50805_53589 = state_50784__$1;
(statearr_50805_53589[(2)] = null);

(statearr_50805_53589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (5))){
var inst_50761 = (state_50784[(7)]);
var state_50784__$1 = state_50784;
var statearr_50806_53596 = state_50784__$1;
(statearr_50806_53596[(2)] = inst_50761);

(statearr_50806_53596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (10))){
var inst_50778 = (state_50784[(2)]);
var state_50784__$1 = state_50784;
var statearr_50810_53598 = state_50784__$1;
(statearr_50810_53598[(2)] = inst_50778);

(statearr_50810_53598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (8))){
var inst_50768 = (state_50784[(9)]);
var inst_50774 = cljs.core.deref(inst_50768);
var state_50784__$1 = state_50784;
var statearr_50811_53605 = state_50784__$1;
(statearr_50811_53605[(2)] = inst_50774);

(statearr_50811_53605[(1)] = (10));


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
});})(c__50030__auto__))
;
return ((function (switch__49505__auto__,c__50030__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49506__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49506__auto____0 = (function (){
var statearr_50812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50812[(0)] = cljs$core$async$reduce_$_state_machine__49506__auto__);

(statearr_50812[(1)] = (1));

return statearr_50812;
});
var cljs$core$async$reduce_$_state_machine__49506__auto____1 = (function (state_50784){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50784);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50813){if((e50813 instanceof Object)){
var ex__49509__auto__ = e50813;
var statearr_50814_53608 = state_50784;
(statearr_50814_53608[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53610 = state_50784;
state_50784 = G__53610;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49506__auto__ = function(state_50784){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49506__auto____1.call(this,state_50784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49506__auto____0;
cljs$core$async$reduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49506__auto____1;
return cljs$core$async$reduce_$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__))
})();
var state__50032__auto__ = (function (){var statearr_50815 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50815[(6)] = c__50030__auto__);

return statearr_50815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__))
);

return c__50030__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__,f__$1){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__,f__$1){
return (function (state_50823){
var state_val_50824 = (state_50823[(1)]);
if((state_val_50824 === (1))){
var inst_50816 = cljs.core.async.reduce(f__$1,init,ch);
var state_50823__$1 = state_50823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50823__$1,(2),inst_50816);
} else {
if((state_val_50824 === (2))){
var inst_50818 = (state_50823[(2)]);
var inst_50819 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50818) : f__$1.call(null,inst_50818));
var state_50823__$1 = state_50823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50823__$1,inst_50819);
} else {
return null;
}
}
});})(c__50030__auto__,f__$1))
;
return ((function (switch__49505__auto__,c__50030__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__49506__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49506__auto____0 = (function (){
var statearr_50825 = [null,null,null,null,null,null,null];
(statearr_50825[(0)] = cljs$core$async$transduce_$_state_machine__49506__auto__);

(statearr_50825[(1)] = (1));

return statearr_50825;
});
var cljs$core$async$transduce_$_state_machine__49506__auto____1 = (function (state_50823){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50823);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50831){if((e50831 instanceof Object)){
var ex__49509__auto__ = e50831;
var statearr_50832_53616 = state_50823;
(statearr_50832_53616[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53618 = state_50823;
state_50823 = G__53618;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49506__auto__ = function(state_50823){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49506__auto____1.call(this,state_50823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49506__auto____0;
cljs$core$async$transduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49506__auto____1;
return cljs$core$async$transduce_$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__,f__$1))
})();
var state__50032__auto__ = (function (){var statearr_50833 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50833[(6)] = c__50030__auto__);

return statearr_50833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__,f__$1))
);

return c__50030__auto__;
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
var G__50835 = arguments.length;
switch (G__50835) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__){
return (function (state_50862){
var state_val_50863 = (state_50862[(1)]);
if((state_val_50863 === (7))){
var inst_50844 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50869_53635 = state_50862__$1;
(statearr_50869_53635[(2)] = inst_50844);

(statearr_50869_53635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (1))){
var inst_50837 = cljs.core.seq(coll);
var inst_50838 = inst_50837;
var state_50862__$1 = (function (){var statearr_50872 = state_50862;
(statearr_50872[(7)] = inst_50838);

return statearr_50872;
})();
var statearr_50873_53638 = state_50862__$1;
(statearr_50873_53638[(2)] = null);

(statearr_50873_53638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (4))){
var inst_50838 = (state_50862[(7)]);
var inst_50842 = cljs.core.first(inst_50838);
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50862__$1,(7),ch,inst_50842);
} else {
if((state_val_50863 === (13))){
var inst_50856 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50874_53640 = state_50862__$1;
(statearr_50874_53640[(2)] = inst_50856);

(statearr_50874_53640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (6))){
var inst_50847 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
if(cljs.core.truth_(inst_50847)){
var statearr_50876_53647 = state_50862__$1;
(statearr_50876_53647[(1)] = (8));

} else {
var statearr_50877_53648 = state_50862__$1;
(statearr_50877_53648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (3))){
var inst_50860 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50862__$1,inst_50860);
} else {
if((state_val_50863 === (12))){
var state_50862__$1 = state_50862;
var statearr_50879_53656 = state_50862__$1;
(statearr_50879_53656[(2)] = null);

(statearr_50879_53656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (2))){
var inst_50838 = (state_50862[(7)]);
var state_50862__$1 = state_50862;
if(cljs.core.truth_(inst_50838)){
var statearr_50880_53661 = state_50862__$1;
(statearr_50880_53661[(1)] = (4));

} else {
var statearr_50881_53662 = state_50862__$1;
(statearr_50881_53662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (11))){
var inst_50853 = cljs.core.async.close_BANG_(ch);
var state_50862__$1 = state_50862;
var statearr_50882_53664 = state_50862__$1;
(statearr_50882_53664[(2)] = inst_50853);

(statearr_50882_53664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (9))){
var state_50862__$1 = state_50862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50887_53665 = state_50862__$1;
(statearr_50887_53665[(1)] = (11));

} else {
var statearr_50888_53666 = state_50862__$1;
(statearr_50888_53666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (5))){
var inst_50838 = (state_50862[(7)]);
var state_50862__$1 = state_50862;
var statearr_50890_53667 = state_50862__$1;
(statearr_50890_53667[(2)] = inst_50838);

(statearr_50890_53667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (10))){
var inst_50858 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50892_53669 = state_50862__$1;
(statearr_50892_53669[(2)] = inst_50858);

(statearr_50892_53669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (8))){
var inst_50838 = (state_50862[(7)]);
var inst_50849 = cljs.core.next(inst_50838);
var inst_50838__$1 = inst_50849;
var state_50862__$1 = (function (){var statearr_50893 = state_50862;
(statearr_50893[(7)] = inst_50838__$1);

return statearr_50893;
})();
var statearr_50894_53674 = state_50862__$1;
(statearr_50894_53674[(2)] = null);

(statearr_50894_53674[(1)] = (2));


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
});})(c__50030__auto__))
;
return ((function (switch__49505__auto__,c__50030__auto__){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50895 = [null,null,null,null,null,null,null,null];
(statearr_50895[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50895[(1)] = (1));

return statearr_50895;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50862){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50862);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50898){if((e50898 instanceof Object)){
var ex__49509__auto__ = e50898;
var statearr_50899_53677 = state_50862;
(statearr_50899_53677[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53681 = state_50862;
state_50862 = G__53681;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__))
})();
var state__50032__auto__ = (function (){var statearr_50900 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_50900[(6)] = c__50030__auto__);

return statearr_50900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__))
);

return c__50030__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50924 = (function (ch,cs,meta50925){
this.ch = ch;
this.cs = cs;
this.meta50925 = meta50925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50926,meta50925__$1){
var self__ = this;
var _50926__$1 = this;
return (new cljs.core.async.t_cljs$core$async50924(self__.ch,self__.cs,meta50925__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50926){
var self__ = this;
var _50926__$1 = this;
return self__.meta50925;
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50925","meta50925",996760134,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50924";

cljs.core.async.t_cljs$core$async50924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50924");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50924.
 */
cljs.core.async.__GT_t_cljs$core$async50924 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50924(ch__$1,cs__$1,meta50925){
return (new cljs.core.async.t_cljs$core$async50924(ch__$1,cs__$1,meta50925));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50924(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__50030__auto___53733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___53733,cs,m,dchan,dctr,done){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___53733,cs,m,dchan,dctr,done){
return (function (state_51092){
var state_val_51093 = (state_51092[(1)]);
if((state_val_51093 === (7))){
var inst_51084 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51095_53737 = state_51092__$1;
(statearr_51095_53737[(2)] = inst_51084);

(statearr_51095_53737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (20))){
var inst_50978 = (state_51092[(7)]);
var inst_50991 = cljs.core.first(inst_50978);
var inst_50992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50991,(0),null);
var inst_50993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50991,(1),null);
var state_51092__$1 = (function (){var statearr_51097 = state_51092;
(statearr_51097[(8)] = inst_50992);

return statearr_51097;
})();
if(cljs.core.truth_(inst_50993)){
var statearr_51098_53744 = state_51092__$1;
(statearr_51098_53744[(1)] = (22));

} else {
var statearr_51100_53747 = state_51092__$1;
(statearr_51100_53747[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (27))){
var inst_51032 = (state_51092[(9)]);
var inst_50942 = (state_51092[(10)]);
var inst_51023 = (state_51092[(11)]);
var inst_51025 = (state_51092[(12)]);
var inst_51032__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51023,inst_51025);
var inst_51033 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51032__$1,inst_50942,done);
var state_51092__$1 = (function (){var statearr_51103 = state_51092;
(statearr_51103[(9)] = inst_51032__$1);

return statearr_51103;
})();
if(cljs.core.truth_(inst_51033)){
var statearr_51104_53756 = state_51092__$1;
(statearr_51104_53756[(1)] = (30));

} else {
var statearr_51105_53757 = state_51092__$1;
(statearr_51105_53757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (1))){
var state_51092__$1 = state_51092;
var statearr_51106_53759 = state_51092__$1;
(statearr_51106_53759[(2)] = null);

(statearr_51106_53759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (24))){
var inst_50978 = (state_51092[(7)]);
var inst_50998 = (state_51092[(2)]);
var inst_50999 = cljs.core.next(inst_50978);
var inst_50952 = inst_50999;
var inst_50953 = null;
var inst_50954 = (0);
var inst_50955 = (0);
var state_51092__$1 = (function (){var statearr_51109 = state_51092;
(statearr_51109[(13)] = inst_50953);

(statearr_51109[(14)] = inst_50998);

(statearr_51109[(15)] = inst_50952);

(statearr_51109[(16)] = inst_50955);

(statearr_51109[(17)] = inst_50954);

return statearr_51109;
})();
var statearr_51110_53765 = state_51092__$1;
(statearr_51110_53765[(2)] = null);

(statearr_51110_53765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (39))){
var state_51092__$1 = state_51092;
var statearr_51116_53768 = state_51092__$1;
(statearr_51116_53768[(2)] = null);

(statearr_51116_53768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (4))){
var inst_50942 = (state_51092[(10)]);
var inst_50942__$1 = (state_51092[(2)]);
var inst_50943 = (inst_50942__$1 == null);
var state_51092__$1 = (function (){var statearr_51117 = state_51092;
(statearr_51117[(10)] = inst_50942__$1);

return statearr_51117;
})();
if(cljs.core.truth_(inst_50943)){
var statearr_51119_53772 = state_51092__$1;
(statearr_51119_53772[(1)] = (5));

} else {
var statearr_51120_53774 = state_51092__$1;
(statearr_51120_53774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (15))){
var inst_50953 = (state_51092[(13)]);
var inst_50952 = (state_51092[(15)]);
var inst_50955 = (state_51092[(16)]);
var inst_50954 = (state_51092[(17)]);
var inst_50974 = (state_51092[(2)]);
var inst_50975 = (inst_50955 + (1));
var tmp51112 = inst_50953;
var tmp51113 = inst_50952;
var tmp51114 = inst_50954;
var inst_50952__$1 = tmp51113;
var inst_50953__$1 = tmp51112;
var inst_50954__$1 = tmp51114;
var inst_50955__$1 = inst_50975;
var state_51092__$1 = (function (){var statearr_51123 = state_51092;
(statearr_51123[(13)] = inst_50953__$1);

(statearr_51123[(18)] = inst_50974);

(statearr_51123[(15)] = inst_50952__$1);

(statearr_51123[(16)] = inst_50955__$1);

(statearr_51123[(17)] = inst_50954__$1);

return statearr_51123;
})();
var statearr_51124_53785 = state_51092__$1;
(statearr_51124_53785[(2)] = null);

(statearr_51124_53785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (21))){
var inst_51002 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51129_53788 = state_51092__$1;
(statearr_51129_53788[(2)] = inst_51002);

(statearr_51129_53788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (31))){
var inst_51032 = (state_51092[(9)]);
var inst_51036 = done(null);
var inst_51037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51032);
var state_51092__$1 = (function (){var statearr_51132 = state_51092;
(statearr_51132[(19)] = inst_51036);

return statearr_51132;
})();
var statearr_51133_53795 = state_51092__$1;
(statearr_51133_53795[(2)] = inst_51037);

(statearr_51133_53795[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (32))){
var inst_51022 = (state_51092[(20)]);
var inst_51024 = (state_51092[(21)]);
var inst_51023 = (state_51092[(11)]);
var inst_51025 = (state_51092[(12)]);
var inst_51039 = (state_51092[(2)]);
var inst_51040 = (inst_51025 + (1));
var tmp51126 = inst_51022;
var tmp51127 = inst_51024;
var tmp51128 = inst_51023;
var inst_51022__$1 = tmp51126;
var inst_51023__$1 = tmp51128;
var inst_51024__$1 = tmp51127;
var inst_51025__$1 = inst_51040;
var state_51092__$1 = (function (){var statearr_51136 = state_51092;
(statearr_51136[(22)] = inst_51039);

(statearr_51136[(20)] = inst_51022__$1);

(statearr_51136[(21)] = inst_51024__$1);

(statearr_51136[(11)] = inst_51023__$1);

(statearr_51136[(12)] = inst_51025__$1);

return statearr_51136;
})();
var statearr_51138_53807 = state_51092__$1;
(statearr_51138_53807[(2)] = null);

(statearr_51138_53807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (40))){
var inst_51053 = (state_51092[(23)]);
var inst_51058 = done(null);
var inst_51060 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51053);
var state_51092__$1 = (function (){var statearr_51140 = state_51092;
(statearr_51140[(24)] = inst_51058);

return statearr_51140;
})();
var statearr_51141_53811 = state_51092__$1;
(statearr_51141_53811[(2)] = inst_51060);

(statearr_51141_53811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (33))){
var inst_51043 = (state_51092[(25)]);
var inst_51046 = cljs.core.chunked_seq_QMARK_(inst_51043);
var state_51092__$1 = state_51092;
if(inst_51046){
var statearr_51144_53820 = state_51092__$1;
(statearr_51144_53820[(1)] = (36));

} else {
var statearr_51145_53821 = state_51092__$1;
(statearr_51145_53821[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (13))){
var inst_50966 = (state_51092[(26)]);
var inst_50971 = cljs.core.async.close_BANG_(inst_50966);
var state_51092__$1 = state_51092;
var statearr_51147_53822 = state_51092__$1;
(statearr_51147_53822[(2)] = inst_50971);

(statearr_51147_53822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (22))){
var inst_50992 = (state_51092[(8)]);
var inst_50995 = cljs.core.async.close_BANG_(inst_50992);
var state_51092__$1 = state_51092;
var statearr_51150_53823 = state_51092__$1;
(statearr_51150_53823[(2)] = inst_50995);

(statearr_51150_53823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (36))){
var inst_51043 = (state_51092[(25)]);
var inst_51048 = cljs.core.chunk_first(inst_51043);
var inst_51049 = cljs.core.chunk_rest(inst_51043);
var inst_51050 = cljs.core.count(inst_51048);
var inst_51022 = inst_51049;
var inst_51023 = inst_51048;
var inst_51024 = inst_51050;
var inst_51025 = (0);
var state_51092__$1 = (function (){var statearr_51152 = state_51092;
(statearr_51152[(20)] = inst_51022);

(statearr_51152[(21)] = inst_51024);

(statearr_51152[(11)] = inst_51023);

(statearr_51152[(12)] = inst_51025);

return statearr_51152;
})();
var statearr_51154_53829 = state_51092__$1;
(statearr_51154_53829[(2)] = null);

(statearr_51154_53829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (41))){
var inst_51043 = (state_51092[(25)]);
var inst_51062 = (state_51092[(2)]);
var inst_51063 = cljs.core.next(inst_51043);
var inst_51022 = inst_51063;
var inst_51023 = null;
var inst_51024 = (0);
var inst_51025 = (0);
var state_51092__$1 = (function (){var statearr_51156 = state_51092;
(statearr_51156[(27)] = inst_51062);

(statearr_51156[(20)] = inst_51022);

(statearr_51156[(21)] = inst_51024);

(statearr_51156[(11)] = inst_51023);

(statearr_51156[(12)] = inst_51025);

return statearr_51156;
})();
var statearr_51159_53861 = state_51092__$1;
(statearr_51159_53861[(2)] = null);

(statearr_51159_53861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (43))){
var state_51092__$1 = state_51092;
var statearr_51160_53865 = state_51092__$1;
(statearr_51160_53865[(2)] = null);

(statearr_51160_53865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (29))){
var inst_51071 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51162_53869 = state_51092__$1;
(statearr_51162_53869[(2)] = inst_51071);

(statearr_51162_53869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (44))){
var inst_51081 = (state_51092[(2)]);
var state_51092__$1 = (function (){var statearr_51164 = state_51092;
(statearr_51164[(28)] = inst_51081);

return statearr_51164;
})();
var statearr_51165_53871 = state_51092__$1;
(statearr_51165_53871[(2)] = null);

(statearr_51165_53871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (6))){
var inst_51013 = (state_51092[(29)]);
var inst_51012 = cljs.core.deref(cs);
var inst_51013__$1 = cljs.core.keys(inst_51012);
var inst_51015 = cljs.core.count(inst_51013__$1);
var inst_51016 = cljs.core.reset_BANG_(dctr,inst_51015);
var inst_51021 = cljs.core.seq(inst_51013__$1);
var inst_51022 = inst_51021;
var inst_51023 = null;
var inst_51024 = (0);
var inst_51025 = (0);
var state_51092__$1 = (function (){var statearr_51168 = state_51092;
(statearr_51168[(29)] = inst_51013__$1);

(statearr_51168[(20)] = inst_51022);

(statearr_51168[(21)] = inst_51024);

(statearr_51168[(30)] = inst_51016);

(statearr_51168[(11)] = inst_51023);

(statearr_51168[(12)] = inst_51025);

return statearr_51168;
})();
var statearr_51170_53879 = state_51092__$1;
(statearr_51170_53879[(2)] = null);

(statearr_51170_53879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (28))){
var inst_51043 = (state_51092[(25)]);
var inst_51022 = (state_51092[(20)]);
var inst_51043__$1 = cljs.core.seq(inst_51022);
var state_51092__$1 = (function (){var statearr_51171 = state_51092;
(statearr_51171[(25)] = inst_51043__$1);

return statearr_51171;
})();
if(inst_51043__$1){
var statearr_51174_53884 = state_51092__$1;
(statearr_51174_53884[(1)] = (33));

} else {
var statearr_51176_53885 = state_51092__$1;
(statearr_51176_53885[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (25))){
var inst_51024 = (state_51092[(21)]);
var inst_51025 = (state_51092[(12)]);
var inst_51029 = (inst_51025 < inst_51024);
var inst_51030 = inst_51029;
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_51030)){
var statearr_51180_53899 = state_51092__$1;
(statearr_51180_53899[(1)] = (27));

} else {
var statearr_51181_53904 = state_51092__$1;
(statearr_51181_53904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (34))){
var state_51092__$1 = state_51092;
var statearr_51183_53906 = state_51092__$1;
(statearr_51183_53906[(2)] = null);

(statearr_51183_53906[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (17))){
var state_51092__$1 = state_51092;
var statearr_51185_53912 = state_51092__$1;
(statearr_51185_53912[(2)] = null);

(statearr_51185_53912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (3))){
var inst_51086 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51092__$1,inst_51086);
} else {
if((state_val_51093 === (12))){
var inst_51007 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51186_53914 = state_51092__$1;
(statearr_51186_53914[(2)] = inst_51007);

(statearr_51186_53914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (2))){
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51092__$1,(4),ch);
} else {
if((state_val_51093 === (23))){
var state_51092__$1 = state_51092;
var statearr_51196_53917 = state_51092__$1;
(statearr_51196_53917[(2)] = null);

(statearr_51196_53917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (35))){
var inst_51069 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51202_53920 = state_51092__$1;
(statearr_51202_53920[(2)] = inst_51069);

(statearr_51202_53920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (19))){
var inst_50978 = (state_51092[(7)]);
var inst_50982 = cljs.core.chunk_first(inst_50978);
var inst_50983 = cljs.core.chunk_rest(inst_50978);
var inst_50985 = cljs.core.count(inst_50982);
var inst_50952 = inst_50983;
var inst_50953 = inst_50982;
var inst_50954 = inst_50985;
var inst_50955 = (0);
var state_51092__$1 = (function (){var statearr_51207 = state_51092;
(statearr_51207[(13)] = inst_50953);

(statearr_51207[(15)] = inst_50952);

(statearr_51207[(16)] = inst_50955);

(statearr_51207[(17)] = inst_50954);

return statearr_51207;
})();
var statearr_51212_53922 = state_51092__$1;
(statearr_51212_53922[(2)] = null);

(statearr_51212_53922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (11))){
var inst_50978 = (state_51092[(7)]);
var inst_50952 = (state_51092[(15)]);
var inst_50978__$1 = cljs.core.seq(inst_50952);
var state_51092__$1 = (function (){var statearr_51218 = state_51092;
(statearr_51218[(7)] = inst_50978__$1);

return statearr_51218;
})();
if(inst_50978__$1){
var statearr_51221_53927 = state_51092__$1;
(statearr_51221_53927[(1)] = (16));

} else {
var statearr_51222_53928 = state_51092__$1;
(statearr_51222_53928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (9))){
var inst_51009 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51223_53935 = state_51092__$1;
(statearr_51223_53935[(2)] = inst_51009);

(statearr_51223_53935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (5))){
var inst_50950 = cljs.core.deref(cs);
var inst_50951 = cljs.core.seq(inst_50950);
var inst_50952 = inst_50951;
var inst_50953 = null;
var inst_50954 = (0);
var inst_50955 = (0);
var state_51092__$1 = (function (){var statearr_51225 = state_51092;
(statearr_51225[(13)] = inst_50953);

(statearr_51225[(15)] = inst_50952);

(statearr_51225[(16)] = inst_50955);

(statearr_51225[(17)] = inst_50954);

return statearr_51225;
})();
var statearr_51226_53939 = state_51092__$1;
(statearr_51226_53939[(2)] = null);

(statearr_51226_53939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (14))){
var state_51092__$1 = state_51092;
var statearr_51228_53942 = state_51092__$1;
(statearr_51228_53942[(2)] = null);

(statearr_51228_53942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (45))){
var inst_51078 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51230_53947 = state_51092__$1;
(statearr_51230_53947[(2)] = inst_51078);

(statearr_51230_53947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (26))){
var inst_51013 = (state_51092[(29)]);
var inst_51073 = (state_51092[(2)]);
var inst_51074 = cljs.core.seq(inst_51013);
var state_51092__$1 = (function (){var statearr_51231 = state_51092;
(statearr_51231[(31)] = inst_51073);

return statearr_51231;
})();
if(inst_51074){
var statearr_51233_53955 = state_51092__$1;
(statearr_51233_53955[(1)] = (42));

} else {
var statearr_51234_53956 = state_51092__$1;
(statearr_51234_53956[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (16))){
var inst_50978 = (state_51092[(7)]);
var inst_50980 = cljs.core.chunked_seq_QMARK_(inst_50978);
var state_51092__$1 = state_51092;
if(inst_50980){
var statearr_51236_53958 = state_51092__$1;
(statearr_51236_53958[(1)] = (19));

} else {
var statearr_51237_53959 = state_51092__$1;
(statearr_51237_53959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (38))){
var inst_51066 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51238_53963 = state_51092__$1;
(statearr_51238_53963[(2)] = inst_51066);

(statearr_51238_53963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (30))){
var state_51092__$1 = state_51092;
var statearr_51240_53965 = state_51092__$1;
(statearr_51240_53965[(2)] = null);

(statearr_51240_53965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (10))){
var inst_50953 = (state_51092[(13)]);
var inst_50955 = (state_51092[(16)]);
var inst_50965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50953,inst_50955);
var inst_50966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50965,(0),null);
var inst_50967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50965,(1),null);
var state_51092__$1 = (function (){var statearr_51245 = state_51092;
(statearr_51245[(26)] = inst_50966);

return statearr_51245;
})();
if(cljs.core.truth_(inst_50967)){
var statearr_51247_53972 = state_51092__$1;
(statearr_51247_53972[(1)] = (13));

} else {
var statearr_51248_53977 = state_51092__$1;
(statearr_51248_53977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (18))){
var inst_51005 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51252_53979 = state_51092__$1;
(statearr_51252_53979[(2)] = inst_51005);

(statearr_51252_53979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (42))){
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51092__$1,(45),dchan);
} else {
if((state_val_51093 === (37))){
var inst_51043 = (state_51092[(25)]);
var inst_51053 = (state_51092[(23)]);
var inst_50942 = (state_51092[(10)]);
var inst_51053__$1 = cljs.core.first(inst_51043);
var inst_51054 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51053__$1,inst_50942,done);
var state_51092__$1 = (function (){var statearr_51257 = state_51092;
(statearr_51257[(23)] = inst_51053__$1);

return statearr_51257;
})();
if(cljs.core.truth_(inst_51054)){
var statearr_51259_53984 = state_51092__$1;
(statearr_51259_53984[(1)] = (39));

} else {
var statearr_51260_53985 = state_51092__$1;
(statearr_51260_53985[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (8))){
var inst_50955 = (state_51092[(16)]);
var inst_50954 = (state_51092[(17)]);
var inst_50957 = (inst_50955 < inst_50954);
var inst_50958 = inst_50957;
var state_51092__$1 = state_51092;
if(cljs.core.truth_(inst_50958)){
var statearr_51262_53988 = state_51092__$1;
(statearr_51262_53988[(1)] = (10));

} else {
var statearr_51263_53989 = state_51092__$1;
(statearr_51263_53989[(1)] = (11));

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
});})(c__50030__auto___53733,cs,m,dchan,dctr,done))
;
return ((function (switch__49505__auto__,c__50030__auto___53733,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49506__auto__ = null;
var cljs$core$async$mult_$_state_machine__49506__auto____0 = (function (){
var statearr_51269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51269[(0)] = cljs$core$async$mult_$_state_machine__49506__auto__);

(statearr_51269[(1)] = (1));

return statearr_51269;
});
var cljs$core$async$mult_$_state_machine__49506__auto____1 = (function (state_51092){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51092);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51273){if((e51273 instanceof Object)){
var ex__49509__auto__ = e51273;
var statearr_51276_53997 = state_51092;
(statearr_51276_53997[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54000 = state_51092;
state_51092 = G__54000;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49506__auto__ = function(state_51092){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49506__auto____1.call(this,state_51092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49506__auto____0;
cljs$core$async$mult_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49506__auto____1;
return cljs$core$async$mult_$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___53733,cs,m,dchan,dctr,done))
})();
var state__50032__auto__ = (function (){var statearr_51281 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_51281[(6)] = c__50030__auto___53733);

return statearr_51281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___53733,cs,m,dchan,dctr,done))
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
var G__51286 = arguments.length;
switch (G__51286) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54052 = arguments.length;
var i__4731__auto___54055 = (0);
while(true){
if((i__4731__auto___54055 < len__4730__auto___54052)){
args__4736__auto__.push((arguments[i__4731__auto___54055]));

var G__54059 = (i__4731__auto___54055 + (1));
i__4731__auto___54055 = G__54059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51376){
var map__51378 = p__51376;
var map__51378__$1 = (((((!((map__51378 == null))))?(((((map__51378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51378):map__51378);
var opts = map__51378__$1;
var statearr_51380_54076 = state;
(statearr_51380_54076[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts(((function (map__51378,map__51378__$1,opts){
return (function (val){
var statearr_51382_54077 = state;
(statearr_51382_54077[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__51378,map__51378__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51383_54082 = state;
(statearr_51383_54082[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51367){
var G__51368 = cljs.core.first(seq51367);
var seq51367__$1 = cljs.core.next(seq51367);
var G__51369 = cljs.core.first(seq51367__$1);
var seq51367__$2 = cljs.core.next(seq51367__$1);
var G__51370 = cljs.core.first(seq51367__$2);
var seq51367__$3 = cljs.core.next(seq51367__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51368,G__51369,G__51370,seq51367__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51397 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51398){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51398 = meta51398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51399,meta51398__$1){
var self__ = this;
var _51399__$1 = this;
return (new cljs.core.async.t_cljs$core$async51397(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51398__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51399){
var self__ = this;
var _51399__$1 = this;
return self__.meta51398;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51398","meta51398",-1171503192,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51397";

cljs.core.async.t_cljs$core$async51397.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51397");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51397.
 */
cljs.core.async.__GT_t_cljs$core$async51397 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51397(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51398){
return (new cljs.core.async.t_cljs$core$async51397(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51398));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51397(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50030__auto___54141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51556){
var state_val_51557 = (state_51556[(1)]);
if((state_val_51557 === (7))){
var inst_51457 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51560_54145 = state_51556__$1;
(statearr_51560_54145[(2)] = inst_51457);

(statearr_51560_54145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (20))){
var inst_51469 = (state_51556[(7)]);
var state_51556__$1 = state_51556;
var statearr_51561_54147 = state_51556__$1;
(statearr_51561_54147[(2)] = inst_51469);

(statearr_51561_54147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (27))){
var state_51556__$1 = state_51556;
var statearr_51563_54148 = state_51556__$1;
(statearr_51563_54148[(2)] = null);

(statearr_51563_54148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (1))){
var inst_51440 = (state_51556[(8)]);
var inst_51440__$1 = calc_state();
var inst_51443 = (inst_51440__$1 == null);
var inst_51444 = cljs.core.not(inst_51443);
var state_51556__$1 = (function (){var statearr_51567 = state_51556;
(statearr_51567[(8)] = inst_51440__$1);

return statearr_51567;
})();
if(inst_51444){
var statearr_51568_54153 = state_51556__$1;
(statearr_51568_54153[(1)] = (2));

} else {
var statearr_51569_54157 = state_51556__$1;
(statearr_51569_54157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (24))){
var inst_51497 = (state_51556[(9)]);
var inst_51526 = (state_51556[(10)]);
var inst_51506 = (state_51556[(11)]);
var inst_51526__$1 = (inst_51497.cljs$core$IFn$_invoke$arity$1 ? inst_51497.cljs$core$IFn$_invoke$arity$1(inst_51506) : inst_51497.call(null,inst_51506));
var state_51556__$1 = (function (){var statearr_51574 = state_51556;
(statearr_51574[(10)] = inst_51526__$1);

return statearr_51574;
})();
if(cljs.core.truth_(inst_51526__$1)){
var statearr_51575_54159 = state_51556__$1;
(statearr_51575_54159[(1)] = (29));

} else {
var statearr_51576_54160 = state_51556__$1;
(statearr_51576_54160[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (4))){
var inst_51460 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51460)){
var statearr_51578_54163 = state_51556__$1;
(statearr_51578_54163[(1)] = (8));

} else {
var statearr_51579_54164 = state_51556__$1;
(statearr_51579_54164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (15))){
var inst_51491 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51491)){
var statearr_51585_54166 = state_51556__$1;
(statearr_51585_54166[(1)] = (19));

} else {
var statearr_51587_54167 = state_51556__$1;
(statearr_51587_54167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (21))){
var inst_51496 = (state_51556[(12)]);
var inst_51496__$1 = (state_51556[(2)]);
var inst_51497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51496__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51496__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51496__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51556__$1 = (function (){var statearr_51593 = state_51556;
(statearr_51593[(9)] = inst_51497);

(statearr_51593[(12)] = inst_51496__$1);

(statearr_51593[(13)] = inst_51498);

return statearr_51593;
})();
return cljs.core.async.ioc_alts_BANG_(state_51556__$1,(22),inst_51499);
} else {
if((state_val_51557 === (31))){
var inst_51534 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51534)){
var statearr_51597_54185 = state_51556__$1;
(statearr_51597_54185[(1)] = (32));

} else {
var statearr_51598_54186 = state_51556__$1;
(statearr_51598_54186[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (32))){
var inst_51505 = (state_51556[(14)]);
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51556__$1,(35),out,inst_51505);
} else {
if((state_val_51557 === (33))){
var inst_51496 = (state_51556[(12)]);
var inst_51469 = inst_51496;
var state_51556__$1 = (function (){var statearr_51600 = state_51556;
(statearr_51600[(7)] = inst_51469);

return statearr_51600;
})();
var statearr_51601_54189 = state_51556__$1;
(statearr_51601_54189[(2)] = null);

(statearr_51601_54189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (13))){
var inst_51469 = (state_51556[(7)]);
var inst_51476 = inst_51469.cljs$lang$protocol_mask$partition0$;
var inst_51477 = (inst_51476 & (64));
var inst_51478 = inst_51469.cljs$core$ISeq$;
var inst_51479 = (cljs.core.PROTOCOL_SENTINEL === inst_51478);
var inst_51480 = ((inst_51477) || (inst_51479));
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51480)){
var statearr_51613_54195 = state_51556__$1;
(statearr_51613_54195[(1)] = (16));

} else {
var statearr_51614_54196 = state_51556__$1;
(statearr_51614_54196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (22))){
var inst_51505 = (state_51556[(14)]);
var inst_51506 = (state_51556[(11)]);
var inst_51504 = (state_51556[(2)]);
var inst_51505__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51504,(0),null);
var inst_51506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51504,(1),null);
var inst_51507 = (inst_51505__$1 == null);
var inst_51508 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51506__$1,change);
var inst_51509 = ((inst_51507) || (inst_51508));
var state_51556__$1 = (function (){var statearr_51615 = state_51556;
(statearr_51615[(14)] = inst_51505__$1);

(statearr_51615[(11)] = inst_51506__$1);

return statearr_51615;
})();
if(cljs.core.truth_(inst_51509)){
var statearr_51617_54204 = state_51556__$1;
(statearr_51617_54204[(1)] = (23));

} else {
var statearr_51621_54207 = state_51556__$1;
(statearr_51621_54207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (36))){
var inst_51496 = (state_51556[(12)]);
var inst_51469 = inst_51496;
var state_51556__$1 = (function (){var statearr_51623 = state_51556;
(statearr_51623[(7)] = inst_51469);

return statearr_51623;
})();
var statearr_51624_54213 = state_51556__$1;
(statearr_51624_54213[(2)] = null);

(statearr_51624_54213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (29))){
var inst_51526 = (state_51556[(10)]);
var state_51556__$1 = state_51556;
var statearr_51626_54216 = state_51556__$1;
(statearr_51626_54216[(2)] = inst_51526);

(statearr_51626_54216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (6))){
var state_51556__$1 = state_51556;
var statearr_51631_54221 = state_51556__$1;
(statearr_51631_54221[(2)] = false);

(statearr_51631_54221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (28))){
var inst_51521 = (state_51556[(2)]);
var inst_51523 = calc_state();
var inst_51469 = inst_51523;
var state_51556__$1 = (function (){var statearr_51636 = state_51556;
(statearr_51636[(15)] = inst_51521);

(statearr_51636[(7)] = inst_51469);

return statearr_51636;
})();
var statearr_51637_54224 = state_51556__$1;
(statearr_51637_54224[(2)] = null);

(statearr_51637_54224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (25))){
var inst_51548 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51645_54227 = state_51556__$1;
(statearr_51645_54227[(2)] = inst_51548);

(statearr_51645_54227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (34))){
var inst_51546 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51646_54230 = state_51556__$1;
(statearr_51646_54230[(2)] = inst_51546);

(statearr_51646_54230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (17))){
var state_51556__$1 = state_51556;
var statearr_51647_54231 = state_51556__$1;
(statearr_51647_54231[(2)] = false);

(statearr_51647_54231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (3))){
var state_51556__$1 = state_51556;
var statearr_51649_54235 = state_51556__$1;
(statearr_51649_54235[(2)] = false);

(statearr_51649_54235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (12))){
var inst_51551 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51556__$1,inst_51551);
} else {
if((state_val_51557 === (2))){
var inst_51440 = (state_51556[(8)]);
var inst_51449 = inst_51440.cljs$lang$protocol_mask$partition0$;
var inst_51450 = (inst_51449 & (64));
var inst_51451 = inst_51440.cljs$core$ISeq$;
var inst_51452 = (cljs.core.PROTOCOL_SENTINEL === inst_51451);
var inst_51453 = ((inst_51450) || (inst_51452));
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51453)){
var statearr_51653_54245 = state_51556__$1;
(statearr_51653_54245[(1)] = (5));

} else {
var statearr_51654_54246 = state_51556__$1;
(statearr_51654_54246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (23))){
var inst_51505 = (state_51556[(14)]);
var inst_51514 = (inst_51505 == null);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51514)){
var statearr_51661_54249 = state_51556__$1;
(statearr_51661_54249[(1)] = (26));

} else {
var statearr_51662_54250 = state_51556__$1;
(statearr_51662_54250[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (35))){
var inst_51537 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51537)){
var statearr_51663_54251 = state_51556__$1;
(statearr_51663_54251[(1)] = (36));

} else {
var statearr_51664_54253 = state_51556__$1;
(statearr_51664_54253[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (19))){
var inst_51469 = (state_51556[(7)]);
var inst_51493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51469);
var state_51556__$1 = state_51556;
var statearr_51671_54254 = state_51556__$1;
(statearr_51671_54254[(2)] = inst_51493);

(statearr_51671_54254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (11))){
var inst_51469 = (state_51556[(7)]);
var inst_51473 = (inst_51469 == null);
var inst_51474 = cljs.core.not(inst_51473);
var state_51556__$1 = state_51556;
if(inst_51474){
var statearr_51680_54258 = state_51556__$1;
(statearr_51680_54258[(1)] = (13));

} else {
var statearr_51681_54259 = state_51556__$1;
(statearr_51681_54259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (9))){
var inst_51440 = (state_51556[(8)]);
var state_51556__$1 = state_51556;
var statearr_51683_54260 = state_51556__$1;
(statearr_51683_54260[(2)] = inst_51440);

(statearr_51683_54260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (5))){
var state_51556__$1 = state_51556;
var statearr_51687_54263 = state_51556__$1;
(statearr_51687_54263[(2)] = true);

(statearr_51687_54263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (14))){
var state_51556__$1 = state_51556;
var statearr_51688_54267 = state_51556__$1;
(statearr_51688_54267[(2)] = false);

(statearr_51688_54267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (26))){
var inst_51506 = (state_51556[(11)]);
var inst_51517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51506);
var state_51556__$1 = state_51556;
var statearr_51692_54272 = state_51556__$1;
(statearr_51692_54272[(2)] = inst_51517);

(statearr_51692_54272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (16))){
var state_51556__$1 = state_51556;
var statearr_51697_54273 = state_51556__$1;
(statearr_51697_54273[(2)] = true);

(statearr_51697_54273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (38))){
var inst_51542 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51703_54277 = state_51556__$1;
(statearr_51703_54277[(2)] = inst_51542);

(statearr_51703_54277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (30))){
var inst_51497 = (state_51556[(9)]);
var inst_51498 = (state_51556[(13)]);
var inst_51506 = (state_51556[(11)]);
var inst_51529 = cljs.core.empty_QMARK_(inst_51497);
var inst_51530 = (inst_51498.cljs$core$IFn$_invoke$arity$1 ? inst_51498.cljs$core$IFn$_invoke$arity$1(inst_51506) : inst_51498.call(null,inst_51506));
var inst_51531 = cljs.core.not(inst_51530);
var inst_51532 = ((inst_51529) && (inst_51531));
var state_51556__$1 = state_51556;
var statearr_51706_54282 = state_51556__$1;
(statearr_51706_54282[(2)] = inst_51532);

(statearr_51706_54282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (10))){
var inst_51440 = (state_51556[(8)]);
var inst_51465 = (state_51556[(2)]);
var inst_51466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51465,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51465,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51465,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51469 = inst_51440;
var state_51556__$1 = (function (){var statearr_51707 = state_51556;
(statearr_51707[(16)] = inst_51468);

(statearr_51707[(17)] = inst_51467);

(statearr_51707[(7)] = inst_51469);

(statearr_51707[(18)] = inst_51466);

return statearr_51707;
})();
var statearr_51708_54286 = state_51556__$1;
(statearr_51708_54286[(2)] = null);

(statearr_51708_54286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (18))){
var inst_51484 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51710_54287 = state_51556__$1;
(statearr_51710_54287[(2)] = inst_51484);

(statearr_51710_54287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (37))){
var state_51556__$1 = state_51556;
var statearr_51711_54293 = state_51556__$1;
(statearr_51711_54293[(2)] = null);

(statearr_51711_54293[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (8))){
var inst_51440 = (state_51556[(8)]);
var inst_51462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51440);
var state_51556__$1 = state_51556;
var statearr_51715_54294 = state_51556__$1;
(statearr_51715_54294[(2)] = inst_51462);

(statearr_51715_54294[(1)] = (10));


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
});})(c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49505__auto__,c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49506__auto__ = null;
var cljs$core$async$mix_$_state_machine__49506__auto____0 = (function (){
var statearr_51717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51717[(0)] = cljs$core$async$mix_$_state_machine__49506__auto__);

(statearr_51717[(1)] = (1));

return statearr_51717;
});
var cljs$core$async$mix_$_state_machine__49506__auto____1 = (function (state_51556){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51556);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51720){if((e51720 instanceof Object)){
var ex__49509__auto__ = e51720;
var statearr_51721_54304 = state_51556;
(statearr_51721_54304[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54306 = state_51556;
state_51556 = G__54306;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49506__auto__ = function(state_51556){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49506__auto____1.call(this,state_51556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49506__auto____0;
cljs$core$async$mix_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49506__auto____1;
return cljs$core$async$mix_$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50032__auto__ = (function (){var statearr_51723 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_51723[(6)] = c__50030__auto___54141);

return statearr_51723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51745 = arguments.length;
switch (G__51745) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__51775 = arguments.length;
switch (G__51775) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__51769_SHARP_){
if(cljs.core.truth_((p1__51769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51769_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51769_SHARP_.call(null,topic)))){
return p1__51769_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51769_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51786 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51787){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51787 = meta51787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51788,meta51787__$1){
var self__ = this;
var _51788__$1 = this;
return (new cljs.core.async.t_cljs$core$async51786(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51787__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51788){
var self__ = this;
var _51788__$1 = this;
return self__.meta51787;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51787","meta51787",-811867651,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51786";

cljs.core.async.t_cljs$core$async51786.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51786");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51786.
 */
cljs.core.async.__GT_t_cljs$core$async51786 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51787){
return (new cljs.core.async.t_cljs$core$async51786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51787));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51786(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50030__auto___54418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54418,mults,ensure_mult,p){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54418,mults,ensure_mult,p){
return (function (state_51891){
var state_val_51892 = (state_51891[(1)]);
if((state_val_51892 === (7))){
var inst_51887 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51894_54422 = state_51891__$1;
(statearr_51894_54422[(2)] = inst_51887);

(statearr_51894_54422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (20))){
var state_51891__$1 = state_51891;
var statearr_51896_54423 = state_51891__$1;
(statearr_51896_54423[(2)] = null);

(statearr_51896_54423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (1))){
var state_51891__$1 = state_51891;
var statearr_51897_54424 = state_51891__$1;
(statearr_51897_54424[(2)] = null);

(statearr_51897_54424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (24))){
var inst_51869 = (state_51891[(7)]);
var inst_51879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51869);
var state_51891__$1 = state_51891;
var statearr_51907_54427 = state_51891__$1;
(statearr_51907_54427[(2)] = inst_51879);

(statearr_51907_54427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (4))){
var inst_51815 = (state_51891[(8)]);
var inst_51815__$1 = (state_51891[(2)]);
var inst_51816 = (inst_51815__$1 == null);
var state_51891__$1 = (function (){var statearr_51912 = state_51891;
(statearr_51912[(8)] = inst_51815__$1);

return statearr_51912;
})();
if(cljs.core.truth_(inst_51816)){
var statearr_51913_54434 = state_51891__$1;
(statearr_51913_54434[(1)] = (5));

} else {
var statearr_51914_54435 = state_51891__$1;
(statearr_51914_54435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (15))){
var inst_51863 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51916_54440 = state_51891__$1;
(statearr_51916_54440[(2)] = inst_51863);

(statearr_51916_54440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (21))){
var inst_51884 = (state_51891[(2)]);
var state_51891__$1 = (function (){var statearr_51918 = state_51891;
(statearr_51918[(9)] = inst_51884);

return statearr_51918;
})();
var statearr_51919_54459 = state_51891__$1;
(statearr_51919_54459[(2)] = null);

(statearr_51919_54459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (13))){
var inst_51843 = (state_51891[(10)]);
var inst_51845 = cljs.core.chunked_seq_QMARK_(inst_51843);
var state_51891__$1 = state_51891;
if(inst_51845){
var statearr_51920_54470 = state_51891__$1;
(statearr_51920_54470[(1)] = (16));

} else {
var statearr_51921_54474 = state_51891__$1;
(statearr_51921_54474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (22))){
var inst_51875 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
if(cljs.core.truth_(inst_51875)){
var statearr_51922_54484 = state_51891__$1;
(statearr_51922_54484[(1)] = (23));

} else {
var statearr_51923_54485 = state_51891__$1;
(statearr_51923_54485[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (6))){
var inst_51869 = (state_51891[(7)]);
var inst_51871 = (state_51891[(11)]);
var inst_51815 = (state_51891[(8)]);
var inst_51869__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51815) : topic_fn.call(null,inst_51815));
var inst_51870 = cljs.core.deref(mults);
var inst_51871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51870,inst_51869__$1);
var state_51891__$1 = (function (){var statearr_51928 = state_51891;
(statearr_51928[(7)] = inst_51869__$1);

(statearr_51928[(11)] = inst_51871__$1);

return statearr_51928;
})();
if(cljs.core.truth_(inst_51871__$1)){
var statearr_51930_54495 = state_51891__$1;
(statearr_51930_54495[(1)] = (19));

} else {
var statearr_51933_54499 = state_51891__$1;
(statearr_51933_54499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (25))){
var inst_51881 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51936_54502 = state_51891__$1;
(statearr_51936_54502[(2)] = inst_51881);

(statearr_51936_54502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (17))){
var inst_51843 = (state_51891[(10)]);
var inst_51852 = cljs.core.first(inst_51843);
var inst_51854 = cljs.core.async.muxch_STAR_(inst_51852);
var inst_51855 = cljs.core.async.close_BANG_(inst_51854);
var inst_51856 = cljs.core.next(inst_51843);
var inst_51825 = inst_51856;
var inst_51826 = null;
var inst_51827 = (0);
var inst_51828 = (0);
var state_51891__$1 = (function (){var statearr_51939 = state_51891;
(statearr_51939[(12)] = inst_51855);

(statearr_51939[(13)] = inst_51827);

(statearr_51939[(14)] = inst_51825);

(statearr_51939[(15)] = inst_51826);

(statearr_51939[(16)] = inst_51828);

return statearr_51939;
})();
var statearr_51940_54519 = state_51891__$1;
(statearr_51940_54519[(2)] = null);

(statearr_51940_54519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (3))){
var inst_51889 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51891__$1,inst_51889);
} else {
if((state_val_51892 === (12))){
var inst_51865 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51944_54526 = state_51891__$1;
(statearr_51944_54526[(2)] = inst_51865);

(statearr_51944_54526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (2))){
var state_51891__$1 = state_51891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51891__$1,(4),ch);
} else {
if((state_val_51892 === (23))){
var state_51891__$1 = state_51891;
var statearr_51947_54532 = state_51891__$1;
(statearr_51947_54532[(2)] = null);

(statearr_51947_54532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (19))){
var inst_51871 = (state_51891[(11)]);
var inst_51815 = (state_51891[(8)]);
var inst_51873 = cljs.core.async.muxch_STAR_(inst_51871);
var state_51891__$1 = state_51891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51891__$1,(22),inst_51873,inst_51815);
} else {
if((state_val_51892 === (11))){
var inst_51843 = (state_51891[(10)]);
var inst_51825 = (state_51891[(14)]);
var inst_51843__$1 = cljs.core.seq(inst_51825);
var state_51891__$1 = (function (){var statearr_51955 = state_51891;
(statearr_51955[(10)] = inst_51843__$1);

return statearr_51955;
})();
if(inst_51843__$1){
var statearr_51956_54543 = state_51891__$1;
(statearr_51956_54543[(1)] = (13));

} else {
var statearr_51959_54544 = state_51891__$1;
(statearr_51959_54544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (9))){
var inst_51867 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51962_54548 = state_51891__$1;
(statearr_51962_54548[(2)] = inst_51867);

(statearr_51962_54548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (5))){
var inst_51822 = cljs.core.deref(mults);
var inst_51823 = cljs.core.vals(inst_51822);
var inst_51824 = cljs.core.seq(inst_51823);
var inst_51825 = inst_51824;
var inst_51826 = null;
var inst_51827 = (0);
var inst_51828 = (0);
var state_51891__$1 = (function (){var statearr_51965 = state_51891;
(statearr_51965[(13)] = inst_51827);

(statearr_51965[(14)] = inst_51825);

(statearr_51965[(15)] = inst_51826);

(statearr_51965[(16)] = inst_51828);

return statearr_51965;
})();
var statearr_51971_54557 = state_51891__$1;
(statearr_51971_54557[(2)] = null);

(statearr_51971_54557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (14))){
var state_51891__$1 = state_51891;
var statearr_51977_54564 = state_51891__$1;
(statearr_51977_54564[(2)] = null);

(statearr_51977_54564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (16))){
var inst_51843 = (state_51891[(10)]);
var inst_51847 = cljs.core.chunk_first(inst_51843);
var inst_51848 = cljs.core.chunk_rest(inst_51843);
var inst_51849 = cljs.core.count(inst_51847);
var inst_51825 = inst_51848;
var inst_51826 = inst_51847;
var inst_51827 = inst_51849;
var inst_51828 = (0);
var state_51891__$1 = (function (){var statearr_51981 = state_51891;
(statearr_51981[(13)] = inst_51827);

(statearr_51981[(14)] = inst_51825);

(statearr_51981[(15)] = inst_51826);

(statearr_51981[(16)] = inst_51828);

return statearr_51981;
})();
var statearr_51983_54566 = state_51891__$1;
(statearr_51983_54566[(2)] = null);

(statearr_51983_54566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (10))){
var inst_51827 = (state_51891[(13)]);
var inst_51825 = (state_51891[(14)]);
var inst_51826 = (state_51891[(15)]);
var inst_51828 = (state_51891[(16)]);
var inst_51836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51826,inst_51828);
var inst_51838 = cljs.core.async.muxch_STAR_(inst_51836);
var inst_51839 = cljs.core.async.close_BANG_(inst_51838);
var inst_51840 = (inst_51828 + (1));
var tmp51973 = inst_51827;
var tmp51974 = inst_51825;
var tmp51975 = inst_51826;
var inst_51825__$1 = tmp51974;
var inst_51826__$1 = tmp51975;
var inst_51827__$1 = tmp51973;
var inst_51828__$1 = inst_51840;
var state_51891__$1 = (function (){var statearr_51990 = state_51891;
(statearr_51990[(13)] = inst_51827__$1);

(statearr_51990[(14)] = inst_51825__$1);

(statearr_51990[(15)] = inst_51826__$1);

(statearr_51990[(16)] = inst_51828__$1);

(statearr_51990[(17)] = inst_51839);

return statearr_51990;
})();
var statearr_51994_54570 = state_51891__$1;
(statearr_51994_54570[(2)] = null);

(statearr_51994_54570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (18))){
var inst_51860 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51996_54572 = state_51891__$1;
(statearr_51996_54572[(2)] = inst_51860);

(statearr_51996_54572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (8))){
var inst_51827 = (state_51891[(13)]);
var inst_51828 = (state_51891[(16)]);
var inst_51832 = (inst_51828 < inst_51827);
var inst_51833 = inst_51832;
var state_51891__$1 = state_51891;
if(cljs.core.truth_(inst_51833)){
var statearr_51999_54573 = state_51891__$1;
(statearr_51999_54573[(1)] = (10));

} else {
var statearr_52000_54574 = state_51891__$1;
(statearr_52000_54574[(1)] = (11));

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
});})(c__50030__auto___54418,mults,ensure_mult,p))
;
return ((function (switch__49505__auto__,c__50030__auto___54418,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52003[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52003[(1)] = (1));

return statearr_52003;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51891){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51891);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52007){if((e52007 instanceof Object)){
var ex__49509__auto__ = e52007;
var statearr_52009_54586 = state_51891;
(statearr_52009_54586[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54590 = state_51891;
state_51891 = G__54590;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54418,mults,ensure_mult,p))
})();
var state__50032__auto__ = (function (){var statearr_52012 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52012[(6)] = c__50030__auto___54418);

return statearr_52012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54418,mults,ensure_mult,p))
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
var G__52016 = arguments.length;
switch (G__52016) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52036 = arguments.length;
switch (G__52036) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__52046 = arguments.length;
switch (G__52046) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50030__auto___54640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52101){
var state_val_52102 = (state_52101[(1)]);
if((state_val_52102 === (7))){
var state_52101__$1 = state_52101;
var statearr_52107_54645 = state_52101__$1;
(statearr_52107_54645[(2)] = null);

(statearr_52107_54645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (1))){
var state_52101__$1 = state_52101;
var statearr_52109_54654 = state_52101__$1;
(statearr_52109_54654[(2)] = null);

(statearr_52109_54654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (4))){
var inst_52061 = (state_52101[(7)]);
var inst_52063 = (inst_52061 < cnt);
var state_52101__$1 = state_52101;
if(cljs.core.truth_(inst_52063)){
var statearr_52112_54658 = state_52101__$1;
(statearr_52112_54658[(1)] = (6));

} else {
var statearr_52113_54659 = state_52101__$1;
(statearr_52113_54659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (15))){
var inst_52097 = (state_52101[(2)]);
var state_52101__$1 = state_52101;
var statearr_52115_54666 = state_52101__$1;
(statearr_52115_54666[(2)] = inst_52097);

(statearr_52115_54666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (13))){
var inst_52089 = cljs.core.async.close_BANG_(out);
var state_52101__$1 = state_52101;
var statearr_52120_54669 = state_52101__$1;
(statearr_52120_54669[(2)] = inst_52089);

(statearr_52120_54669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (6))){
var state_52101__$1 = state_52101;
var statearr_52123_54670 = state_52101__$1;
(statearr_52123_54670[(2)] = null);

(statearr_52123_54670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (3))){
var inst_52099 = (state_52101[(2)]);
var state_52101__$1 = state_52101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52101__$1,inst_52099);
} else {
if((state_val_52102 === (12))){
var inst_52086 = (state_52101[(8)]);
var inst_52086__$1 = (state_52101[(2)]);
var inst_52087 = cljs.core.some(cljs.core.nil_QMARK_,inst_52086__$1);
var state_52101__$1 = (function (){var statearr_52131 = state_52101;
(statearr_52131[(8)] = inst_52086__$1);

return statearr_52131;
})();
if(cljs.core.truth_(inst_52087)){
var statearr_52133_54673 = state_52101__$1;
(statearr_52133_54673[(1)] = (13));

} else {
var statearr_52135_54674 = state_52101__$1;
(statearr_52135_54674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (2))){
var inst_52059 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52061 = (0);
var state_52101__$1 = (function (){var statearr_52138 = state_52101;
(statearr_52138[(7)] = inst_52061);

(statearr_52138[(9)] = inst_52059);

return statearr_52138;
})();
var statearr_52139_54677 = state_52101__$1;
(statearr_52139_54677[(2)] = null);

(statearr_52139_54677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (11))){
var inst_52061 = (state_52101[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52101,(10),Object,null,(9));
var inst_52073 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52061) : chs__$1.call(null,inst_52061));
var inst_52074 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52061) : done.call(null,inst_52061));
var inst_52075 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52073,inst_52074);
var state_52101__$1 = state_52101;
var statearr_52145_54683 = state_52101__$1;
(statearr_52145_54683[(2)] = inst_52075);


cljs.core.async.impl.ioc_helpers.process_exception(state_52101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (9))){
var inst_52061 = (state_52101[(7)]);
var inst_52077 = (state_52101[(2)]);
var inst_52078 = (inst_52061 + (1));
var inst_52061__$1 = inst_52078;
var state_52101__$1 = (function (){var statearr_52149 = state_52101;
(statearr_52149[(10)] = inst_52077);

(statearr_52149[(7)] = inst_52061__$1);

return statearr_52149;
})();
var statearr_52154_54688 = state_52101__$1;
(statearr_52154_54688[(2)] = null);

(statearr_52154_54688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (5))){
var inst_52084 = (state_52101[(2)]);
var state_52101__$1 = (function (){var statearr_52155 = state_52101;
(statearr_52155[(11)] = inst_52084);

return statearr_52155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52101__$1,(12),dchan);
} else {
if((state_val_52102 === (14))){
var inst_52086 = (state_52101[(8)]);
var inst_52092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52086);
var state_52101__$1 = state_52101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52101__$1,(16),out,inst_52092);
} else {
if((state_val_52102 === (16))){
var inst_52094 = (state_52101[(2)]);
var state_52101__$1 = (function (){var statearr_52157 = state_52101;
(statearr_52157[(12)] = inst_52094);

return statearr_52157;
})();
var statearr_52158_54693 = state_52101__$1;
(statearr_52158_54693[(2)] = null);

(statearr_52158_54693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (10))){
var inst_52067 = (state_52101[(2)]);
var inst_52069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52101__$1 = (function (){var statearr_52164 = state_52101;
(statearr_52164[(13)] = inst_52067);

return statearr_52164;
})();
var statearr_52165_54696 = state_52101__$1;
(statearr_52165_54696[(2)] = inst_52069);


cljs.core.async.impl.ioc_helpers.process_exception(state_52101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52102 === (8))){
var inst_52082 = (state_52101[(2)]);
var state_52101__$1 = state_52101;
var statearr_52167_54698 = state_52101__$1;
(statearr_52167_54698[(2)] = inst_52082);

(statearr_52167_54698[(1)] = (5));


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
});})(c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49505__auto__,c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52172[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52172[(1)] = (1));

return statearr_52172;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52101){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52101);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52174){if((e52174 instanceof Object)){
var ex__49509__auto__ = e52174;
var statearr_52175_54703 = state_52101;
(statearr_52175_54703[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54708 = state_52101;
state_52101 = G__54708;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50032__auto__ = (function (){var statearr_52179 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52179[(6)] = c__50030__auto___54640);

return statearr_52179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54640,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__52191 = arguments.length;
switch (G__52191) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___54716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54716,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54716,out){
return (function (state_52236){
var state_val_52237 = (state_52236[(1)]);
if((state_val_52237 === (7))){
var inst_52215 = (state_52236[(7)]);
var inst_52213 = (state_52236[(8)]);
var inst_52213__$1 = (state_52236[(2)]);
var inst_52215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52213__$1,(0),null);
var inst_52216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52213__$1,(1),null);
var inst_52217 = (inst_52215__$1 == null);
var state_52236__$1 = (function (){var statearr_52244 = state_52236;
(statearr_52244[(7)] = inst_52215__$1);

(statearr_52244[(8)] = inst_52213__$1);

(statearr_52244[(9)] = inst_52216);

return statearr_52244;
})();
if(cljs.core.truth_(inst_52217)){
var statearr_52245_54728 = state_52236__$1;
(statearr_52245_54728[(1)] = (8));

} else {
var statearr_52251_54729 = state_52236__$1;
(statearr_52251_54729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (1))){
var inst_52200 = cljs.core.vec(chs);
var inst_52201 = inst_52200;
var state_52236__$1 = (function (){var statearr_52257 = state_52236;
(statearr_52257[(10)] = inst_52201);

return statearr_52257;
})();
var statearr_52258_54731 = state_52236__$1;
(statearr_52258_54731[(2)] = null);

(statearr_52258_54731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (4))){
var inst_52201 = (state_52236[(10)]);
var state_52236__$1 = state_52236;
return cljs.core.async.ioc_alts_BANG_(state_52236__$1,(7),inst_52201);
} else {
if((state_val_52237 === (6))){
var inst_52231 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52259_54735 = state_52236__$1;
(statearr_52259_54735[(2)] = inst_52231);

(statearr_52259_54735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (3))){
var inst_52233 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52236__$1,inst_52233);
} else {
if((state_val_52237 === (2))){
var inst_52201 = (state_52236[(10)]);
var inst_52205 = cljs.core.count(inst_52201);
var inst_52206 = (inst_52205 > (0));
var state_52236__$1 = state_52236;
if(cljs.core.truth_(inst_52206)){
var statearr_52262_54744 = state_52236__$1;
(statearr_52262_54744[(1)] = (4));

} else {
var statearr_52263_54745 = state_52236__$1;
(statearr_52263_54745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (11))){
var inst_52201 = (state_52236[(10)]);
var inst_52224 = (state_52236[(2)]);
var tmp52260 = inst_52201;
var inst_52201__$1 = tmp52260;
var state_52236__$1 = (function (){var statearr_52268 = state_52236;
(statearr_52268[(11)] = inst_52224);

(statearr_52268[(10)] = inst_52201__$1);

return statearr_52268;
})();
var statearr_52272_54749 = state_52236__$1;
(statearr_52272_54749[(2)] = null);

(statearr_52272_54749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (9))){
var inst_52215 = (state_52236[(7)]);
var state_52236__$1 = state_52236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52236__$1,(11),out,inst_52215);
} else {
if((state_val_52237 === (5))){
var inst_52229 = cljs.core.async.close_BANG_(out);
var state_52236__$1 = state_52236;
var statearr_52283_54754 = state_52236__$1;
(statearr_52283_54754[(2)] = inst_52229);

(statearr_52283_54754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (10))){
var inst_52227 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52284_54758 = state_52236__$1;
(statearr_52284_54758[(2)] = inst_52227);

(statearr_52284_54758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (8))){
var inst_52215 = (state_52236[(7)]);
var inst_52213 = (state_52236[(8)]);
var inst_52201 = (state_52236[(10)]);
var inst_52216 = (state_52236[(9)]);
var inst_52219 = (function (){var cs = inst_52201;
var vec__52208 = inst_52213;
var v = inst_52215;
var c = inst_52216;
return ((function (cs,vec__52208,v,c,inst_52215,inst_52213,inst_52201,inst_52216,state_val_52237,c__50030__auto___54716,out){
return (function (p1__52186_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52186_SHARP_);
});
;})(cs,vec__52208,v,c,inst_52215,inst_52213,inst_52201,inst_52216,state_val_52237,c__50030__auto___54716,out))
})();
var inst_52220 = cljs.core.filterv(inst_52219,inst_52201);
var inst_52201__$1 = inst_52220;
var state_52236__$1 = (function (){var statearr_52297 = state_52236;
(statearr_52297[(10)] = inst_52201__$1);

return statearr_52297;
})();
var statearr_52298_54776 = state_52236__$1;
(statearr_52298_54776[(2)] = null);

(statearr_52298_54776[(1)] = (2));


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
});})(c__50030__auto___54716,out))
;
return ((function (switch__49505__auto__,c__50030__auto___54716,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52303[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52303[(1)] = (1));

return statearr_52303;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52236){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52236);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52304){if((e52304 instanceof Object)){
var ex__49509__auto__ = e52304;
var statearr_52306_54786 = state_52236;
(statearr_52306_54786[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54790 = state_52236;
state_52236 = G__54790;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54716,out))
})();
var state__50032__auto__ = (function (){var statearr_52309 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52309[(6)] = c__50030__auto___54716);

return statearr_52309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54716,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52325 = arguments.length;
switch (G__52325) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___54798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54798,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54798,out){
return (function (state_52355){
var state_val_52357 = (state_52355[(1)]);
if((state_val_52357 === (7))){
var inst_52333 = (state_52355[(7)]);
var inst_52333__$1 = (state_52355[(2)]);
var inst_52335 = (inst_52333__$1 == null);
var inst_52336 = cljs.core.not(inst_52335);
var state_52355__$1 = (function (){var statearr_52366 = state_52355;
(statearr_52366[(7)] = inst_52333__$1);

return statearr_52366;
})();
if(inst_52336){
var statearr_52367_54801 = state_52355__$1;
(statearr_52367_54801[(1)] = (8));

} else {
var statearr_52368_54805 = state_52355__$1;
(statearr_52368_54805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (1))){
var inst_52328 = (0);
var state_52355__$1 = (function (){var statearr_52371 = state_52355;
(statearr_52371[(8)] = inst_52328);

return statearr_52371;
})();
var statearr_52374_54808 = state_52355__$1;
(statearr_52374_54808[(2)] = null);

(statearr_52374_54808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (4))){
var state_52355__$1 = state_52355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52355__$1,(7),ch);
} else {
if((state_val_52357 === (6))){
var inst_52350 = (state_52355[(2)]);
var state_52355__$1 = state_52355;
var statearr_52375_54810 = state_52355__$1;
(statearr_52375_54810[(2)] = inst_52350);

(statearr_52375_54810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (3))){
var inst_52352 = (state_52355[(2)]);
var inst_52353 = cljs.core.async.close_BANG_(out);
var state_52355__$1 = (function (){var statearr_52379 = state_52355;
(statearr_52379[(9)] = inst_52352);

return statearr_52379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52355__$1,inst_52353);
} else {
if((state_val_52357 === (2))){
var inst_52328 = (state_52355[(8)]);
var inst_52330 = (inst_52328 < n);
var state_52355__$1 = state_52355;
if(cljs.core.truth_(inst_52330)){
var statearr_52382_54819 = state_52355__$1;
(statearr_52382_54819[(1)] = (4));

} else {
var statearr_52383_54820 = state_52355__$1;
(statearr_52383_54820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (11))){
var inst_52328 = (state_52355[(8)]);
var inst_52342 = (state_52355[(2)]);
var inst_52343 = (inst_52328 + (1));
var inst_52328__$1 = inst_52343;
var state_52355__$1 = (function (){var statearr_52385 = state_52355;
(statearr_52385[(8)] = inst_52328__$1);

(statearr_52385[(10)] = inst_52342);

return statearr_52385;
})();
var statearr_52386_54826 = state_52355__$1;
(statearr_52386_54826[(2)] = null);

(statearr_52386_54826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (9))){
var state_52355__$1 = state_52355;
var statearr_52389_54829 = state_52355__$1;
(statearr_52389_54829[(2)] = null);

(statearr_52389_54829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (5))){
var state_52355__$1 = state_52355;
var statearr_52392_54831 = state_52355__$1;
(statearr_52392_54831[(2)] = null);

(statearr_52392_54831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (10))){
var inst_52347 = (state_52355[(2)]);
var state_52355__$1 = state_52355;
var statearr_52395_54834 = state_52355__$1;
(statearr_52395_54834[(2)] = inst_52347);

(statearr_52395_54834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (8))){
var inst_52333 = (state_52355[(7)]);
var state_52355__$1 = state_52355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52355__$1,(11),out,inst_52333);
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
});})(c__50030__auto___54798,out))
;
return ((function (switch__49505__auto__,c__50030__auto___54798,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52405[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52405[(1)] = (1));

return statearr_52405;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52355){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52355);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52410){if((e52410 instanceof Object)){
var ex__49509__auto__ = e52410;
var statearr_52411_54839 = state_52355;
(statearr_52411_54839[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54843 = state_52355;
state_52355 = G__54843;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54798,out))
})();
var state__50032__auto__ = (function (){var statearr_52416 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52416[(6)] = c__50030__auto___54798);

return statearr_52416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52426 = (function (f,ch,meta52427){
this.f = f;
this.ch = ch;
this.meta52427 = meta52427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52428,meta52427__$1){
var self__ = this;
var _52428__$1 = this;
return (new cljs.core.async.t_cljs$core$async52426(self__.f,self__.ch,meta52427__$1));
});

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52428){
var self__ = this;
var _52428__$1 = this;
return self__.meta52427;
});

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52445 = (function (f,ch,meta52427,_,fn1,meta52446){
this.f = f;
this.ch = ch;
this.meta52427 = meta52427;
this._ = _;
this.fn1 = fn1;
this.meta52446 = meta52446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52447,meta52446__$1){
var self__ = this;
var _52447__$1 = this;
return (new cljs.core.async.t_cljs$core$async52445(self__.f,self__.ch,self__.meta52427,self__._,self__.fn1,meta52446__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52447){
var self__ = this;
var _52447__$1 = this;
return self__.meta52446;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52421_SHARP_){
var G__52458 = (((p1__52421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52421_SHARP_) : self__.f.call(null,p1__52421_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52458) : f1.call(null,G__52458));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52427","meta52427",-1179450566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52426","cljs.core.async/t_cljs$core$async52426",1941296205,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52446","meta52446",-437628647,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52445";

cljs.core.async.t_cljs$core$async52445.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52445");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52445.
 */
cljs.core.async.__GT_t_cljs$core$async52445 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52445(f__$1,ch__$1,meta52427__$1,___$2,fn1__$1,meta52446){
return (new cljs.core.async.t_cljs$core$async52445(f__$1,ch__$1,meta52427__$1,___$2,fn1__$1,meta52446));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52445(self__.f,self__.ch,self__.meta52427,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52484 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52484) : self__.f.call(null,G__52484));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52427","meta52427",-1179450566,null)], null);
});

cljs.core.async.t_cljs$core$async52426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52426";

cljs.core.async.t_cljs$core$async52426.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52426");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52426.
 */
cljs.core.async.__GT_t_cljs$core$async52426 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52426(f__$1,ch__$1,meta52427){
return (new cljs.core.async.t_cljs$core$async52426(f__$1,ch__$1,meta52427));
});

}

return (new cljs.core.async.t_cljs$core$async52426(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52507 = (function (f,ch,meta52508){
this.f = f;
this.ch = ch;
this.meta52508 = meta52508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52509,meta52508__$1){
var self__ = this;
var _52509__$1 = this;
return (new cljs.core.async.t_cljs$core$async52507(self__.f,self__.ch,meta52508__$1));
});

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52509){
var self__ = this;
var _52509__$1 = this;
return self__.meta52508;
});

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async52507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52508","meta52508",1481632059,null)], null);
});

cljs.core.async.t_cljs$core$async52507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52507";

cljs.core.async.t_cljs$core$async52507.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52507");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52507.
 */
cljs.core.async.__GT_t_cljs$core$async52507 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52507(f__$1,ch__$1,meta52508){
return (new cljs.core.async.t_cljs$core$async52507(f__$1,ch__$1,meta52508));
});

}

return (new cljs.core.async.t_cljs$core$async52507(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52527 = (function (p,ch,meta52528){
this.p = p;
this.ch = ch;
this.meta52528 = meta52528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52529,meta52528__$1){
var self__ = this;
var _52529__$1 = this;
return (new cljs.core.async.t_cljs$core$async52527(self__.p,self__.ch,meta52528__$1));
});

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52529){
var self__ = this;
var _52529__$1 = this;
return self__.meta52528;
});

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52528","meta52528",1361434419,null)], null);
});

cljs.core.async.t_cljs$core$async52527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52527";

cljs.core.async.t_cljs$core$async52527.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52527");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52527.
 */
cljs.core.async.__GT_t_cljs$core$async52527 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52527(p__$1,ch__$1,meta52528){
return (new cljs.core.async.t_cljs$core$async52527(p__$1,ch__$1,meta52528));
});

}

return (new cljs.core.async.t_cljs$core$async52527(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52562 = arguments.length;
switch (G__52562) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___54990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___54990,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___54990,out){
return (function (state_52596){
var state_val_52598 = (state_52596[(1)]);
if((state_val_52598 === (7))){
var inst_52591 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
var statearr_52603_54994 = state_52596__$1;
(statearr_52603_54994[(2)] = inst_52591);

(statearr_52603_54994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (1))){
var state_52596__$1 = state_52596;
var statearr_52604_54996 = state_52596__$1;
(statearr_52604_54996[(2)] = null);

(statearr_52604_54996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (4))){
var inst_52575 = (state_52596[(7)]);
var inst_52575__$1 = (state_52596[(2)]);
var inst_52576 = (inst_52575__$1 == null);
var state_52596__$1 = (function (){var statearr_52608 = state_52596;
(statearr_52608[(7)] = inst_52575__$1);

return statearr_52608;
})();
if(cljs.core.truth_(inst_52576)){
var statearr_52611_54998 = state_52596__$1;
(statearr_52611_54998[(1)] = (5));

} else {
var statearr_52612_54999 = state_52596__$1;
(statearr_52612_54999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (6))){
var inst_52575 = (state_52596[(7)]);
var inst_52580 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52575) : p.call(null,inst_52575));
var state_52596__$1 = state_52596;
if(cljs.core.truth_(inst_52580)){
var statearr_52614_55005 = state_52596__$1;
(statearr_52614_55005[(1)] = (8));

} else {
var statearr_52618_55006 = state_52596__$1;
(statearr_52618_55006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (3))){
var inst_52594 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52596__$1,inst_52594);
} else {
if((state_val_52598 === (2))){
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52596__$1,(4),ch);
} else {
if((state_val_52598 === (11))){
var inst_52584 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
var statearr_52622_55013 = state_52596__$1;
(statearr_52622_55013[(2)] = inst_52584);

(statearr_52622_55013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (9))){
var state_52596__$1 = state_52596;
var statearr_52623_55017 = state_52596__$1;
(statearr_52623_55017[(2)] = null);

(statearr_52623_55017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (5))){
var inst_52578 = cljs.core.async.close_BANG_(out);
var state_52596__$1 = state_52596;
var statearr_52626_55018 = state_52596__$1;
(statearr_52626_55018[(2)] = inst_52578);

(statearr_52626_55018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (10))){
var inst_52588 = (state_52596[(2)]);
var state_52596__$1 = (function (){var statearr_52630 = state_52596;
(statearr_52630[(8)] = inst_52588);

return statearr_52630;
})();
var statearr_52632_55020 = state_52596__$1;
(statearr_52632_55020[(2)] = null);

(statearr_52632_55020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52598 === (8))){
var inst_52575 = (state_52596[(7)]);
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52596__$1,(11),out,inst_52575);
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
});})(c__50030__auto___54990,out))
;
return ((function (switch__49505__auto__,c__50030__auto___54990,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52639 = [null,null,null,null,null,null,null,null,null];
(statearr_52639[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52639[(1)] = (1));

return statearr_52639;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52596){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52596);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52640){if((e52640 instanceof Object)){
var ex__49509__auto__ = e52640;
var statearr_52642_55024 = state_52596;
(statearr_52642_55024[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55028 = state_52596;
state_52596 = G__55028;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___54990,out))
})();
var state__50032__auto__ = (function (){var statearr_52645 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52645[(6)] = c__50030__auto___54990);

return statearr_52645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___54990,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52649 = arguments.length;
switch (G__52649) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__){
return (function (state_52728){
var state_val_52729 = (state_52728[(1)]);
if((state_val_52729 === (7))){
var inst_52724 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
var statearr_52732_55054 = state_52728__$1;
(statearr_52732_55054[(2)] = inst_52724);

(statearr_52732_55054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (20))){
var inst_52691 = (state_52728[(7)]);
var inst_52703 = (state_52728[(2)]);
var inst_52704 = cljs.core.next(inst_52691);
var inst_52676 = inst_52704;
var inst_52677 = null;
var inst_52678 = (0);
var inst_52679 = (0);
var state_52728__$1 = (function (){var statearr_52734 = state_52728;
(statearr_52734[(8)] = inst_52678);

(statearr_52734[(9)] = inst_52676);

(statearr_52734[(10)] = inst_52703);

(statearr_52734[(11)] = inst_52677);

(statearr_52734[(12)] = inst_52679);

return statearr_52734;
})();
var statearr_52739_55070 = state_52728__$1;
(statearr_52739_55070[(2)] = null);

(statearr_52739_55070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (1))){
var state_52728__$1 = state_52728;
var statearr_52740_55079 = state_52728__$1;
(statearr_52740_55079[(2)] = null);

(statearr_52740_55079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (4))){
var inst_52665 = (state_52728[(13)]);
var inst_52665__$1 = (state_52728[(2)]);
var inst_52666 = (inst_52665__$1 == null);
var state_52728__$1 = (function (){var statearr_52742 = state_52728;
(statearr_52742[(13)] = inst_52665__$1);

return statearr_52742;
})();
if(cljs.core.truth_(inst_52666)){
var statearr_52743_55091 = state_52728__$1;
(statearr_52743_55091[(1)] = (5));

} else {
var statearr_52745_55096 = state_52728__$1;
(statearr_52745_55096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (15))){
var state_52728__$1 = state_52728;
var statearr_52751_55098 = state_52728__$1;
(statearr_52751_55098[(2)] = null);

(statearr_52751_55098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (21))){
var state_52728__$1 = state_52728;
var statearr_52755_55104 = state_52728__$1;
(statearr_52755_55104[(2)] = null);

(statearr_52755_55104[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (13))){
var inst_52678 = (state_52728[(8)]);
var inst_52676 = (state_52728[(9)]);
var inst_52677 = (state_52728[(11)]);
var inst_52679 = (state_52728[(12)]);
var inst_52687 = (state_52728[(2)]);
var inst_52688 = (inst_52679 + (1));
var tmp52748 = inst_52678;
var tmp52749 = inst_52676;
var tmp52750 = inst_52677;
var inst_52676__$1 = tmp52749;
var inst_52677__$1 = tmp52750;
var inst_52678__$1 = tmp52748;
var inst_52679__$1 = inst_52688;
var state_52728__$1 = (function (){var statearr_52759 = state_52728;
(statearr_52759[(8)] = inst_52678__$1);

(statearr_52759[(9)] = inst_52676__$1);

(statearr_52759[(14)] = inst_52687);

(statearr_52759[(11)] = inst_52677__$1);

(statearr_52759[(12)] = inst_52679__$1);

return statearr_52759;
})();
var statearr_52760_55145 = state_52728__$1;
(statearr_52760_55145[(2)] = null);

(statearr_52760_55145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (22))){
var state_52728__$1 = state_52728;
var statearr_52761_55146 = state_52728__$1;
(statearr_52761_55146[(2)] = null);

(statearr_52761_55146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (6))){
var inst_52665 = (state_52728[(13)]);
var inst_52674 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52665) : f.call(null,inst_52665));
var inst_52675 = cljs.core.seq(inst_52674);
var inst_52676 = inst_52675;
var inst_52677 = null;
var inst_52678 = (0);
var inst_52679 = (0);
var state_52728__$1 = (function (){var statearr_52765 = state_52728;
(statearr_52765[(8)] = inst_52678);

(statearr_52765[(9)] = inst_52676);

(statearr_52765[(11)] = inst_52677);

(statearr_52765[(12)] = inst_52679);

return statearr_52765;
})();
var statearr_52766_55153 = state_52728__$1;
(statearr_52766_55153[(2)] = null);

(statearr_52766_55153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (17))){
var inst_52691 = (state_52728[(7)]);
var inst_52696 = cljs.core.chunk_first(inst_52691);
var inst_52697 = cljs.core.chunk_rest(inst_52691);
var inst_52698 = cljs.core.count(inst_52696);
var inst_52676 = inst_52697;
var inst_52677 = inst_52696;
var inst_52678 = inst_52698;
var inst_52679 = (0);
var state_52728__$1 = (function (){var statearr_52768 = state_52728;
(statearr_52768[(8)] = inst_52678);

(statearr_52768[(9)] = inst_52676);

(statearr_52768[(11)] = inst_52677);

(statearr_52768[(12)] = inst_52679);

return statearr_52768;
})();
var statearr_52771_55161 = state_52728__$1;
(statearr_52771_55161[(2)] = null);

(statearr_52771_55161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (3))){
var inst_52726 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52728__$1,inst_52726);
} else {
if((state_val_52729 === (12))){
var inst_52712 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
var statearr_52774_55181 = state_52728__$1;
(statearr_52774_55181[(2)] = inst_52712);

(statearr_52774_55181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (2))){
var state_52728__$1 = state_52728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52728__$1,(4),in$);
} else {
if((state_val_52729 === (23))){
var inst_52722 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
var statearr_52777_55188 = state_52728__$1;
(statearr_52777_55188[(2)] = inst_52722);

(statearr_52777_55188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (19))){
var inst_52707 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
var statearr_52778_55189 = state_52728__$1;
(statearr_52778_55189[(2)] = inst_52707);

(statearr_52778_55189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (11))){
var inst_52676 = (state_52728[(9)]);
var inst_52691 = (state_52728[(7)]);
var inst_52691__$1 = cljs.core.seq(inst_52676);
var state_52728__$1 = (function (){var statearr_52781 = state_52728;
(statearr_52781[(7)] = inst_52691__$1);

return statearr_52781;
})();
if(inst_52691__$1){
var statearr_52783_55191 = state_52728__$1;
(statearr_52783_55191[(1)] = (14));

} else {
var statearr_52786_55192 = state_52728__$1;
(statearr_52786_55192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (9))){
var inst_52714 = (state_52728[(2)]);
var inst_52715 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52728__$1 = (function (){var statearr_52787 = state_52728;
(statearr_52787[(15)] = inst_52714);

return statearr_52787;
})();
if(cljs.core.truth_(inst_52715)){
var statearr_52789_55194 = state_52728__$1;
(statearr_52789_55194[(1)] = (21));

} else {
var statearr_52791_55197 = state_52728__$1;
(statearr_52791_55197[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (5))){
var inst_52668 = cljs.core.async.close_BANG_(out);
var state_52728__$1 = state_52728;
var statearr_52795_55199 = state_52728__$1;
(statearr_52795_55199[(2)] = inst_52668);

(statearr_52795_55199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (14))){
var inst_52691 = (state_52728[(7)]);
var inst_52694 = cljs.core.chunked_seq_QMARK_(inst_52691);
var state_52728__$1 = state_52728;
if(inst_52694){
var statearr_52797_55200 = state_52728__$1;
(statearr_52797_55200[(1)] = (17));

} else {
var statearr_52798_55204 = state_52728__$1;
(statearr_52798_55204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (16))){
var inst_52710 = (state_52728[(2)]);
var state_52728__$1 = state_52728;
var statearr_52803_55206 = state_52728__$1;
(statearr_52803_55206[(2)] = inst_52710);

(statearr_52803_55206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52729 === (10))){
var inst_52677 = (state_52728[(11)]);
var inst_52679 = (state_52728[(12)]);
var inst_52685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52677,inst_52679);
var state_52728__$1 = state_52728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52728__$1,(13),out,inst_52685);
} else {
if((state_val_52729 === (18))){
var inst_52691 = (state_52728[(7)]);
var inst_52701 = cljs.core.first(inst_52691);
var state_52728__$1 = state_52728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52728__$1,(20),out,inst_52701);
} else {
if((state_val_52729 === (8))){
var inst_52678 = (state_52728[(8)]);
var inst_52679 = (state_52728[(12)]);
var inst_52681 = (inst_52679 < inst_52678);
var inst_52682 = inst_52681;
var state_52728__$1 = state_52728;
if(cljs.core.truth_(inst_52682)){
var statearr_52805_55210 = state_52728__$1;
(statearr_52805_55210[(1)] = (10));

} else {
var statearr_52806_55211 = state_52728__$1;
(statearr_52806_55211[(1)] = (11));

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
});})(c__50030__auto__))
;
return ((function (switch__49505__auto__,c__50030__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_52811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52811[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__);

(statearr_52811[(1)] = (1));

return statearr_52811;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1 = (function (state_52728){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52728);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52812){if((e52812 instanceof Object)){
var ex__49509__auto__ = e52812;
var statearr_52813_55224 = state_52728;
(statearr_52813_55224[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55229 = state_52728;
state_52728 = G__55229;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__ = function(state_52728){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1.call(this,state_52728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__))
})();
var state__50032__auto__ = (function (){var statearr_52815 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52815[(6)] = c__50030__auto__);

return statearr_52815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__))
);

return c__50030__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52819 = arguments.length;
switch (G__52819) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52826 = arguments.length;
switch (G__52826) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52831 = arguments.length;
switch (G__52831) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___55279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___55279,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___55279,out){
return (function (state_52857){
var state_val_52858 = (state_52857[(1)]);
if((state_val_52858 === (7))){
var inst_52852 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
var statearr_52864_55284 = state_52857__$1;
(statearr_52864_55284[(2)] = inst_52852);

(statearr_52864_55284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (1))){
var inst_52833 = null;
var state_52857__$1 = (function (){var statearr_52865 = state_52857;
(statearr_52865[(7)] = inst_52833);

return statearr_52865;
})();
var statearr_52866_55289 = state_52857__$1;
(statearr_52866_55289[(2)] = null);

(statearr_52866_55289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (4))){
var inst_52836 = (state_52857[(8)]);
var inst_52836__$1 = (state_52857[(2)]);
var inst_52837 = (inst_52836__$1 == null);
var inst_52838 = cljs.core.not(inst_52837);
var state_52857__$1 = (function (){var statearr_52867 = state_52857;
(statearr_52867[(8)] = inst_52836__$1);

return statearr_52867;
})();
if(inst_52838){
var statearr_52868_55292 = state_52857__$1;
(statearr_52868_55292[(1)] = (5));

} else {
var statearr_52869_55293 = state_52857__$1;
(statearr_52869_55293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (6))){
var state_52857__$1 = state_52857;
var statearr_52871_55294 = state_52857__$1;
(statearr_52871_55294[(2)] = null);

(statearr_52871_55294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (3))){
var inst_52854 = (state_52857[(2)]);
var inst_52855 = cljs.core.async.close_BANG_(out);
var state_52857__$1 = (function (){var statearr_52872 = state_52857;
(statearr_52872[(9)] = inst_52854);

return statearr_52872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52857__$1,inst_52855);
} else {
if((state_val_52858 === (2))){
var state_52857__$1 = state_52857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52857__$1,(4),ch);
} else {
if((state_val_52858 === (11))){
var inst_52836 = (state_52857[(8)]);
var inst_52846 = (state_52857[(2)]);
var inst_52833 = inst_52836;
var state_52857__$1 = (function (){var statearr_52876 = state_52857;
(statearr_52876[(7)] = inst_52833);

(statearr_52876[(10)] = inst_52846);

return statearr_52876;
})();
var statearr_52879_55306 = state_52857__$1;
(statearr_52879_55306[(2)] = null);

(statearr_52879_55306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (9))){
var inst_52836 = (state_52857[(8)]);
var state_52857__$1 = state_52857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52857__$1,(11),out,inst_52836);
} else {
if((state_val_52858 === (5))){
var inst_52836 = (state_52857[(8)]);
var inst_52833 = (state_52857[(7)]);
var inst_52841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52836,inst_52833);
var state_52857__$1 = state_52857;
if(inst_52841){
var statearr_52882_55318 = state_52857__$1;
(statearr_52882_55318[(1)] = (8));

} else {
var statearr_52883_55320 = state_52857__$1;
(statearr_52883_55320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (10))){
var inst_52849 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
var statearr_52886_55329 = state_52857__$1;
(statearr_52886_55329[(2)] = inst_52849);

(statearr_52886_55329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (8))){
var inst_52833 = (state_52857[(7)]);
var tmp52881 = inst_52833;
var inst_52833__$1 = tmp52881;
var state_52857__$1 = (function (){var statearr_52889 = state_52857;
(statearr_52889[(7)] = inst_52833__$1);

return statearr_52889;
})();
var statearr_52891_55334 = state_52857__$1;
(statearr_52891_55334[(2)] = null);

(statearr_52891_55334[(1)] = (2));


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
});})(c__50030__auto___55279,out))
;
return ((function (switch__49505__auto__,c__50030__auto___55279,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52892[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52892[(1)] = (1));

return statearr_52892;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52857){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52857);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52893){if((e52893 instanceof Object)){
var ex__49509__auto__ = e52893;
var statearr_52894_55338 = state_52857;
(statearr_52894_55338[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55343 = state_52857;
state_52857 = G__55343;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___55279,out))
})();
var state__50032__auto__ = (function (){var statearr_52897 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_52897[(6)] = c__50030__auto___55279);

return statearr_52897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___55279,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52903 = arguments.length;
switch (G__52903) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___55348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___55348,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___55348,out){
return (function (state_52949){
var state_val_52950 = (state_52949[(1)]);
if((state_val_52950 === (7))){
var inst_52945 = (state_52949[(2)]);
var state_52949__$1 = state_52949;
var statearr_52959_55353 = state_52949__$1;
(statearr_52959_55353[(2)] = inst_52945);

(statearr_52959_55353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (1))){
var inst_52909 = (new Array(n));
var inst_52910 = inst_52909;
var inst_52911 = (0);
var state_52949__$1 = (function (){var statearr_52961 = state_52949;
(statearr_52961[(7)] = inst_52910);

(statearr_52961[(8)] = inst_52911);

return statearr_52961;
})();
var statearr_52962_55355 = state_52949__$1;
(statearr_52962_55355[(2)] = null);

(statearr_52962_55355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (4))){
var inst_52914 = (state_52949[(9)]);
var inst_52914__$1 = (state_52949[(2)]);
var inst_52915 = (inst_52914__$1 == null);
var inst_52916 = cljs.core.not(inst_52915);
var state_52949__$1 = (function (){var statearr_52963 = state_52949;
(statearr_52963[(9)] = inst_52914__$1);

return statearr_52963;
})();
if(inst_52916){
var statearr_52964_55360 = state_52949__$1;
(statearr_52964_55360[(1)] = (5));

} else {
var statearr_52966_55362 = state_52949__$1;
(statearr_52966_55362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (15))){
var inst_52939 = (state_52949[(2)]);
var state_52949__$1 = state_52949;
var statearr_52969_55365 = state_52949__$1;
(statearr_52969_55365[(2)] = inst_52939);

(statearr_52969_55365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (13))){
var state_52949__$1 = state_52949;
var statearr_52970_55369 = state_52949__$1;
(statearr_52970_55369[(2)] = null);

(statearr_52970_55369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (6))){
var inst_52911 = (state_52949[(8)]);
var inst_52935 = (inst_52911 > (0));
var state_52949__$1 = state_52949;
if(cljs.core.truth_(inst_52935)){
var statearr_52971_55373 = state_52949__$1;
(statearr_52971_55373[(1)] = (12));

} else {
var statearr_52972_55374 = state_52949__$1;
(statearr_52972_55374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (3))){
var inst_52947 = (state_52949[(2)]);
var state_52949__$1 = state_52949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52949__$1,inst_52947);
} else {
if((state_val_52950 === (12))){
var inst_52910 = (state_52949[(7)]);
var inst_52937 = cljs.core.vec(inst_52910);
var state_52949__$1 = state_52949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52949__$1,(15),out,inst_52937);
} else {
if((state_val_52950 === (2))){
var state_52949__$1 = state_52949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52949__$1,(4),ch);
} else {
if((state_val_52950 === (11))){
var inst_52928 = (state_52949[(2)]);
var inst_52929 = (new Array(n));
var inst_52910 = inst_52929;
var inst_52911 = (0);
var state_52949__$1 = (function (){var statearr_52976 = state_52949;
(statearr_52976[(7)] = inst_52910);

(statearr_52976[(8)] = inst_52911);

(statearr_52976[(10)] = inst_52928);

return statearr_52976;
})();
var statearr_52979_55387 = state_52949__$1;
(statearr_52979_55387[(2)] = null);

(statearr_52979_55387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (9))){
var inst_52910 = (state_52949[(7)]);
var inst_52926 = cljs.core.vec(inst_52910);
var state_52949__$1 = state_52949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52949__$1,(11),out,inst_52926);
} else {
if((state_val_52950 === (5))){
var inst_52914 = (state_52949[(9)]);
var inst_52910 = (state_52949[(7)]);
var inst_52911 = (state_52949[(8)]);
var inst_52919 = (state_52949[(11)]);
var inst_52918 = (inst_52910[inst_52911] = inst_52914);
var inst_52919__$1 = (inst_52911 + (1));
var inst_52920 = (inst_52919__$1 < n);
var state_52949__$1 = (function (){var statearr_52988 = state_52949;
(statearr_52988[(12)] = inst_52918);

(statearr_52988[(11)] = inst_52919__$1);

return statearr_52988;
})();
if(cljs.core.truth_(inst_52920)){
var statearr_52992_55393 = state_52949__$1;
(statearr_52992_55393[(1)] = (8));

} else {
var statearr_52995_55397 = state_52949__$1;
(statearr_52995_55397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (14))){
var inst_52942 = (state_52949[(2)]);
var inst_52943 = cljs.core.async.close_BANG_(out);
var state_52949__$1 = (function (){var statearr_52998 = state_52949;
(statearr_52998[(13)] = inst_52942);

return statearr_52998;
})();
var statearr_52999_55403 = state_52949__$1;
(statearr_52999_55403[(2)] = inst_52943);

(statearr_52999_55403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (10))){
var inst_52932 = (state_52949[(2)]);
var state_52949__$1 = state_52949;
var statearr_53000_55413 = state_52949__$1;
(statearr_53000_55413[(2)] = inst_52932);

(statearr_53000_55413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52950 === (8))){
var inst_52910 = (state_52949[(7)]);
var inst_52919 = (state_52949[(11)]);
var tmp52997 = inst_52910;
var inst_52910__$1 = tmp52997;
var inst_52911 = inst_52919;
var state_52949__$1 = (function (){var statearr_53004 = state_52949;
(statearr_53004[(7)] = inst_52910__$1);

(statearr_53004[(8)] = inst_52911);

return statearr_53004;
})();
var statearr_53005_55421 = state_52949__$1;
(statearr_53005_55421[(2)] = null);

(statearr_53005_55421[(1)] = (2));


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
});})(c__50030__auto___55348,out))
;
return ((function (switch__49505__auto__,c__50030__auto___55348,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_53009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53009[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_53009[(1)] = (1));

return statearr_53009;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52949){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52949);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e53010){if((e53010 instanceof Object)){
var ex__49509__auto__ = e53010;
var statearr_53011_55423 = state_52949;
(statearr_53011_55423[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55425 = state_52949;
state_52949 = G__55425;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___55348,out))
})();
var state__50032__auto__ = (function (){var statearr_53013 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_53013[(6)] = c__50030__auto___55348);

return statearr_53013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___55348,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53018 = arguments.length;
switch (G__53018) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50030__auto___55434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___55434,out){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___55434,out){
return (function (state_53065){
var state_val_53066 = (state_53065[(1)]);
if((state_val_53066 === (7))){
var inst_53061 = (state_53065[(2)]);
var state_53065__$1 = state_53065;
var statearr_53072_55438 = state_53065__$1;
(statearr_53072_55438[(2)] = inst_53061);

(statearr_53072_55438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (1))){
var inst_53023 = [];
var inst_53024 = inst_53023;
var inst_53025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53065__$1 = (function (){var statearr_53074 = state_53065;
(statearr_53074[(7)] = inst_53025);

(statearr_53074[(8)] = inst_53024);

return statearr_53074;
})();
var statearr_53075_55439 = state_53065__$1;
(statearr_53075_55439[(2)] = null);

(statearr_53075_55439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (4))){
var inst_53028 = (state_53065[(9)]);
var inst_53028__$1 = (state_53065[(2)]);
var inst_53029 = (inst_53028__$1 == null);
var inst_53030 = cljs.core.not(inst_53029);
var state_53065__$1 = (function (){var statearr_53076 = state_53065;
(statearr_53076[(9)] = inst_53028__$1);

return statearr_53076;
})();
if(inst_53030){
var statearr_53077_55443 = state_53065__$1;
(statearr_53077_55443[(1)] = (5));

} else {
var statearr_53078_55446 = state_53065__$1;
(statearr_53078_55446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (15))){
var inst_53055 = (state_53065[(2)]);
var state_53065__$1 = state_53065;
var statearr_53079_55448 = state_53065__$1;
(statearr_53079_55448[(2)] = inst_53055);

(statearr_53079_55448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (13))){
var state_53065__$1 = state_53065;
var statearr_53080_55449 = state_53065__$1;
(statearr_53080_55449[(2)] = null);

(statearr_53080_55449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (6))){
var inst_53024 = (state_53065[(8)]);
var inst_53050 = inst_53024.length;
var inst_53051 = (inst_53050 > (0));
var state_53065__$1 = state_53065;
if(cljs.core.truth_(inst_53051)){
var statearr_53081_55456 = state_53065__$1;
(statearr_53081_55456[(1)] = (12));

} else {
var statearr_53083_55458 = state_53065__$1;
(statearr_53083_55458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (3))){
var inst_53063 = (state_53065[(2)]);
var state_53065__$1 = state_53065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53065__$1,inst_53063);
} else {
if((state_val_53066 === (12))){
var inst_53024 = (state_53065[(8)]);
var inst_53053 = cljs.core.vec(inst_53024);
var state_53065__$1 = state_53065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53065__$1,(15),out,inst_53053);
} else {
if((state_val_53066 === (2))){
var state_53065__$1 = state_53065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53065__$1,(4),ch);
} else {
if((state_val_53066 === (11))){
var inst_53032 = (state_53065[(10)]);
var inst_53028 = (state_53065[(9)]);
var inst_53043 = (state_53065[(2)]);
var inst_53044 = [];
var inst_53045 = inst_53044.push(inst_53028);
var inst_53024 = inst_53044;
var inst_53025 = inst_53032;
var state_53065__$1 = (function (){var statearr_53091 = state_53065;
(statearr_53091[(7)] = inst_53025);

(statearr_53091[(8)] = inst_53024);

(statearr_53091[(11)] = inst_53043);

(statearr_53091[(12)] = inst_53045);

return statearr_53091;
})();
var statearr_53094_55466 = state_53065__$1;
(statearr_53094_55466[(2)] = null);

(statearr_53094_55466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (9))){
var inst_53024 = (state_53065[(8)]);
var inst_53041 = cljs.core.vec(inst_53024);
var state_53065__$1 = state_53065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53065__$1,(11),out,inst_53041);
} else {
if((state_val_53066 === (5))){
var inst_53032 = (state_53065[(10)]);
var inst_53025 = (state_53065[(7)]);
var inst_53028 = (state_53065[(9)]);
var inst_53032__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53028) : f.call(null,inst_53028));
var inst_53034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53032__$1,inst_53025);
var inst_53035 = cljs.core.keyword_identical_QMARK_(inst_53025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53036 = ((inst_53034) || (inst_53035));
var state_53065__$1 = (function (){var statearr_53100 = state_53065;
(statearr_53100[(10)] = inst_53032__$1);

return statearr_53100;
})();
if(cljs.core.truth_(inst_53036)){
var statearr_53103_55478 = state_53065__$1;
(statearr_53103_55478[(1)] = (8));

} else {
var statearr_53104_55479 = state_53065__$1;
(statearr_53104_55479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (14))){
var inst_53058 = (state_53065[(2)]);
var inst_53059 = cljs.core.async.close_BANG_(out);
var state_53065__$1 = (function (){var statearr_53106 = state_53065;
(statearr_53106[(13)] = inst_53058);

return statearr_53106;
})();
var statearr_53107_55483 = state_53065__$1;
(statearr_53107_55483[(2)] = inst_53059);

(statearr_53107_55483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (10))){
var inst_53048 = (state_53065[(2)]);
var state_53065__$1 = state_53065;
var statearr_53108_55488 = state_53065__$1;
(statearr_53108_55488[(2)] = inst_53048);

(statearr_53108_55488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53066 === (8))){
var inst_53032 = (state_53065[(10)]);
var inst_53024 = (state_53065[(8)]);
var inst_53028 = (state_53065[(9)]);
var inst_53038 = inst_53024.push(inst_53028);
var tmp53105 = inst_53024;
var inst_53024__$1 = tmp53105;
var inst_53025 = inst_53032;
var state_53065__$1 = (function (){var statearr_53109 = state_53065;
(statearr_53109[(7)] = inst_53025);

(statearr_53109[(8)] = inst_53024__$1);

(statearr_53109[(14)] = inst_53038);

return statearr_53109;
})();
var statearr_53112_55497 = state_53065__$1;
(statearr_53112_55497[(2)] = null);

(statearr_53112_55497[(1)] = (2));


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
});})(c__50030__auto___55434,out))
;
return ((function (switch__49505__auto__,c__50030__auto___55434,out){
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_53114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53114[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_53114[(1)] = (1));

return statearr_53114;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_53065){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_53065);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e53116){if((e53116 instanceof Object)){
var ex__49509__auto__ = e53116;
var statearr_53117_55504 = state_53065;
(statearr_53117_55504[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55510 = state_53065;
state_53065 = G__55510;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_53065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_53065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___55434,out))
})();
var state__50032__auto__ = (function (){var statearr_53121 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_53121[(6)] = c__50030__auto___55434);

return statearr_53121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___55434,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
