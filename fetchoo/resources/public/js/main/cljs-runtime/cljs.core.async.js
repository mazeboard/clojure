goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49325 = arguments.length;
switch (G__49325) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49328 = (function (f,blockable,meta49329){
this.f = f;
this.blockable = blockable;
this.meta49329 = meta49329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49330,meta49329__$1){
var self__ = this;
var _49330__$1 = this;
return (new cljs.core.async.t_cljs$core$async49328(self__.f,self__.blockable,meta49329__$1));
});

cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49330){
var self__ = this;
var _49330__$1 = this;
return self__.meta49329;
});

cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49329","meta49329",-1662084247,null)], null);
});

cljs.core.async.t_cljs$core$async49328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49328";

cljs.core.async.t_cljs$core$async49328.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49328");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49328.
 */
cljs.core.async.__GT_t_cljs$core$async49328 = (function cljs$core$async$__GT_t_cljs$core$async49328(f__$1,blockable__$1,meta49329){
return (new cljs.core.async.t_cljs$core$async49328(f__$1,blockable__$1,meta49329));
});

}

return (new cljs.core.async.t_cljs$core$async49328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49339 = arguments.length;
switch (G__49339) {
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
var G__49348 = arguments.length;
switch (G__49348) {
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
var G__49353 = arguments.length;
switch (G__49353) {
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
var val_51911 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51911) : fn1.call(null,val_51911));
} else {
cljs.core.async.impl.dispatch.run(((function (val_51911,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51911) : fn1.call(null,val_51911));
});})(val_51911,ret))
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
var G__49355 = arguments.length;
switch (G__49355) {
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
var n__4607__auto___51920 = n;
var x_51921 = (0);
while(true){
if((x_51921 < n__4607__auto___51920)){
(a[x_51921] = x_51921);

var G__51923 = (x_51921 + (1));
x_51921 = G__51923;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49362 = (function (flag,meta49363){
this.flag = flag;
this.meta49363 = meta49363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49364,meta49363__$1){
var self__ = this;
var _49364__$1 = this;
return (new cljs.core.async.t_cljs$core$async49362(self__.flag,meta49363__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49364){
var self__ = this;
var _49364__$1 = this;
return self__.meta49363;
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49363","meta49363",490613593,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49362";

cljs.core.async.t_cljs$core$async49362.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49362");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49362.
 */
cljs.core.async.__GT_t_cljs$core$async49362 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49362(flag__$1,meta49363){
return (new cljs.core.async.t_cljs$core$async49362(flag__$1,meta49363));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49362(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49373 = (function (flag,cb,meta49374){
this.flag = flag;
this.cb = cb;
this.meta49374 = meta49374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49375,meta49374__$1){
var self__ = this;
var _49375__$1 = this;
return (new cljs.core.async.t_cljs$core$async49373(self__.flag,self__.cb,meta49374__$1));
});

cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49375){
var self__ = this;
var _49375__$1 = this;
return self__.meta49374;
});

cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49374","meta49374",1925250436,null)], null);
});

cljs.core.async.t_cljs$core$async49373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49373";

cljs.core.async.t_cljs$core$async49373.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async49373");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49373.
 */
cljs.core.async.__GT_t_cljs$core$async49373 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49373(flag__$1,cb__$1,meta49374){
return (new cljs.core.async.t_cljs$core$async49373(flag__$1,cb__$1,meta49374));
});

}

return (new cljs.core.async.t_cljs$core$async49373(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49394_SHARP_){
var G__49401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49394_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49401) : fret.call(null,G__49401));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49395_SHARP_){
var G__49402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49395_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49402) : fret.call(null,G__49402));
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
var G__51959 = (i + (1));
i = G__51959;
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
var len__4730__auto___51962 = arguments.length;
var i__4731__auto___51963 = (0);
while(true){
if((i__4731__auto___51963 < len__4730__auto___51962)){
args__4736__auto__.push((arguments[i__4731__auto___51963]));

var G__51964 = (i__4731__auto___51963 + (1));
i__4731__auto___51963 = G__51964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49408){
var map__49409 = p__49408;
var map__49409__$1 = (((((!((map__49409 == null))))?(((((map__49409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49409):map__49409);
var opts = map__49409__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49405){
var G__49407 = cljs.core.first(seq49405);
var seq49405__$1 = cljs.core.next(seq49405);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49407,seq49405__$1);
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
var G__49412 = arguments.length;
switch (G__49412) {
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
var c__49232__auto___51968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___51968){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___51968){
return (function (state_49449){
var state_val_49450 = (state_49449[(1)]);
if((state_val_49450 === (7))){
var inst_49440 = (state_49449[(2)]);
var state_49449__$1 = state_49449;
var statearr_49452_51969 = state_49449__$1;
(statearr_49452_51969[(2)] = inst_49440);

(statearr_49452_51969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (1))){
var state_49449__$1 = state_49449;
var statearr_49453_51971 = state_49449__$1;
(statearr_49453_51971[(2)] = null);

(statearr_49453_51971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (4))){
var inst_49420 = (state_49449[(7)]);
var inst_49420__$1 = (state_49449[(2)]);
var inst_49422 = (inst_49420__$1 == null);
var state_49449__$1 = (function (){var statearr_49454 = state_49449;
(statearr_49454[(7)] = inst_49420__$1);

return statearr_49454;
})();
if(cljs.core.truth_(inst_49422)){
var statearr_49455_51972 = state_49449__$1;
(statearr_49455_51972[(1)] = (5));

} else {
var statearr_49456_51973 = state_49449__$1;
(statearr_49456_51973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (13))){
var state_49449__$1 = state_49449;
var statearr_49457_51974 = state_49449__$1;
(statearr_49457_51974[(2)] = null);

(statearr_49457_51974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (6))){
var inst_49420 = (state_49449[(7)]);
var state_49449__$1 = state_49449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49449__$1,(11),to,inst_49420);
} else {
if((state_val_49450 === (3))){
var inst_49443 = (state_49449[(2)]);
var state_49449__$1 = state_49449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49449__$1,inst_49443);
} else {
if((state_val_49450 === (12))){
var state_49449__$1 = state_49449;
var statearr_49458_51980 = state_49449__$1;
(statearr_49458_51980[(2)] = null);

(statearr_49458_51980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (2))){
var state_49449__$1 = state_49449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49449__$1,(4),from);
} else {
if((state_val_49450 === (11))){
var inst_49433 = (state_49449[(2)]);
var state_49449__$1 = state_49449;
if(cljs.core.truth_(inst_49433)){
var statearr_49460_51984 = state_49449__$1;
(statearr_49460_51984[(1)] = (12));

} else {
var statearr_49461_51985 = state_49449__$1;
(statearr_49461_51985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (9))){
var state_49449__$1 = state_49449;
var statearr_49465_51986 = state_49449__$1;
(statearr_49465_51986[(2)] = null);

(statearr_49465_51986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (5))){
var state_49449__$1 = state_49449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49467_51990 = state_49449__$1;
(statearr_49467_51990[(1)] = (8));

} else {
var statearr_49468_51991 = state_49449__$1;
(statearr_49468_51991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (14))){
var inst_49438 = (state_49449[(2)]);
var state_49449__$1 = state_49449;
var statearr_49469_51993 = state_49449__$1;
(statearr_49469_51993[(2)] = inst_49438);

(statearr_49469_51993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (10))){
var inst_49429 = (state_49449[(2)]);
var state_49449__$1 = state_49449;
var statearr_49470_51994 = state_49449__$1;
(statearr_49470_51994[(2)] = inst_49429);

(statearr_49470_51994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49450 === (8))){
var inst_49426 = cljs.core.async.close_BANG_(to);
var state_49449__$1 = state_49449;
var statearr_49471_51995 = state_49449__$1;
(statearr_49471_51995[(2)] = inst_49426);

(statearr_49471_51995[(1)] = (10));


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
});})(c__49232__auto___51968))
;
return ((function (switch__49057__auto__,c__49232__auto___51968){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_49476 = [null,null,null,null,null,null,null,null];
(statearr_49476[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_49476[(1)] = (1));

return statearr_49476;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_49449){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49449);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49477){var ex__49061__auto__ = e49477;
var statearr_49478_51998 = state_49449;
(statearr_49478_51998[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49449[(4)]))){
var statearr_49479_52000 = state_49449;
(statearr_49479_52000[(1)] = cljs.core.first((state_49449[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52002 = state_49449;
state_49449 = G__52002;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_49449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_49449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___51968))
})();
var state__49234__auto__ = (function (){var statearr_49480 = f__49233__auto__();
(statearr_49480[(6)] = c__49232__auto___51968);

return statearr_49480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___51968))
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
return (function (p__49484){
var vec__49485 = p__49484;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49485,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49485,(1),null);
var job = vec__49485;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49232__auto___52010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results){
return (function (state_49492){
var state_val_49494 = (state_49492[(1)]);
if((state_val_49494 === (1))){
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49492__$1,(2),res,v);
} else {
if((state_val_49494 === (2))){
var inst_49489 = (state_49492[(2)]);
var inst_49490 = cljs.core.async.close_BANG_(res);
var state_49492__$1 = (function (){var statearr_49498 = state_49492;
(statearr_49498[(7)] = inst_49489);

return statearr_49498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49492__$1,inst_49490);
} else {
return null;
}
}
});})(c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results))
;
return ((function (switch__49057__auto__,c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_49500 = [null,null,null,null,null,null,null,null];
(statearr_49500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__);

(statearr_49500[(1)] = (1));

return statearr_49500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1 = (function (state_49492){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49492);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49502){var ex__49061__auto__ = e49502;
var statearr_49503_52016 = state_49492;
(statearr_49503_52016[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49492[(4)]))){
var statearr_49504_52017 = state_49492;
(statearr_49504_52017[(1)] = cljs.core.first((state_49492[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52020 = state_49492;
state_49492 = G__52020;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = function(state_49492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1.call(this,state_49492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results))
})();
var state__49234__auto__ = (function (){var statearr_49505 = f__49233__auto__();
(statearr_49505[(6)] = c__49232__auto___52010);

return statearr_49505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52010,res,vec__49485,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49508){
var vec__49509 = p__49508;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(1),null);
var job = vec__49509;
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
var n__4607__auto___52028 = n;
var __52029 = (0);
while(true){
if((__52029 < n__4607__auto___52028)){
var G__49512_52030 = type;
var G__49512_52031__$1 = (((G__49512_52030 instanceof cljs.core.Keyword))?G__49512_52030.fqn:null);
switch (G__49512_52031__$1) {
case "compute":
var c__49232__auto___52036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52029,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (__52029,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function (state_49527){
var state_val_49528 = (state_49527[(1)]);
if((state_val_49528 === (1))){
var state_49527__$1 = state_49527;
var statearr_49532_52041 = state_49527__$1;
(statearr_49532_52041[(2)] = null);

(statearr_49532_52041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49528 === (2))){
var state_49527__$1 = state_49527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49527__$1,(4),jobs);
} else {
if((state_val_49528 === (3))){
var inst_49524 = (state_49527[(2)]);
var state_49527__$1 = state_49527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49527__$1,inst_49524);
} else {
if((state_val_49528 === (4))){
var inst_49516 = (state_49527[(2)]);
var inst_49517 = process(inst_49516);
var state_49527__$1 = state_49527;
if(cljs.core.truth_(inst_49517)){
var statearr_49537_52044 = state_49527__$1;
(statearr_49537_52044[(1)] = (5));

} else {
var statearr_49539_52047 = state_49527__$1;
(statearr_49539_52047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49528 === (5))){
var state_49527__$1 = state_49527;
var statearr_49542_52050 = state_49527__$1;
(statearr_49542_52050[(2)] = null);

(statearr_49542_52050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49528 === (6))){
var state_49527__$1 = state_49527;
var statearr_49543_52051 = state_49527__$1;
(statearr_49543_52051[(2)] = null);

(statearr_49543_52051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49528 === (7))){
var inst_49522 = (state_49527[(2)]);
var state_49527__$1 = state_49527;
var statearr_49548_52053 = state_49527__$1;
(statearr_49548_52053[(2)] = inst_49522);

(statearr_49548_52053[(1)] = (3));


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
});})(__52029,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
;
return ((function (__52029,switch__49057__auto__,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_49551 = [null,null,null,null,null,null,null];
(statearr_49551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__);

(statearr_49551[(1)] = (1));

return statearr_49551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1 = (function (state_49527){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49527);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49553){var ex__49061__auto__ = e49553;
var statearr_49554_52065 = state_49527;
(statearr_49554_52065[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49527[(4)]))){
var statearr_49555_52066 = state_49527;
(statearr_49555_52066[(1)] = cljs.core.first((state_49527[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52068 = state_49527;
state_49527 = G__52068;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = function(state_49527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1.call(this,state_49527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__;
})()
;})(__52029,switch__49057__auto__,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
})();
var state__49234__auto__ = (function (){var statearr_49556 = f__49233__auto__();
(statearr_49556[(6)] = c__49232__auto___52036);

return statearr_49556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(__52029,c__49232__auto___52036,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
);


break;
case "async":
var c__49232__auto___52069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52029,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (__52029,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function (state_49569){
var state_val_49570 = (state_49569[(1)]);
if((state_val_49570 === (1))){
var state_49569__$1 = state_49569;
var statearr_49572_52070 = state_49569__$1;
(statearr_49572_52070[(2)] = null);

(statearr_49572_52070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49570 === (2))){
var state_49569__$1 = state_49569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49569__$1,(4),jobs);
} else {
if((state_val_49570 === (3))){
var inst_49567 = (state_49569[(2)]);
var state_49569__$1 = state_49569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49569__$1,inst_49567);
} else {
if((state_val_49570 === (4))){
var inst_49559 = (state_49569[(2)]);
var inst_49560 = async(inst_49559);
var state_49569__$1 = state_49569;
if(cljs.core.truth_(inst_49560)){
var statearr_49574_52076 = state_49569__$1;
(statearr_49574_52076[(1)] = (5));

} else {
var statearr_49575_52078 = state_49569__$1;
(statearr_49575_52078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49570 === (5))){
var state_49569__$1 = state_49569;
var statearr_49576_52079 = state_49569__$1;
(statearr_49576_52079[(2)] = null);

(statearr_49576_52079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49570 === (6))){
var state_49569__$1 = state_49569;
var statearr_49577_52080 = state_49569__$1;
(statearr_49577_52080[(2)] = null);

(statearr_49577_52080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49570 === (7))){
var inst_49565 = (state_49569[(2)]);
var state_49569__$1 = state_49569;
var statearr_49578_52084 = state_49569__$1;
(statearr_49578_52084[(2)] = inst_49565);

(statearr_49578_52084[(1)] = (3));


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
});})(__52029,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
;
return ((function (__52029,switch__49057__auto__,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_49579 = [null,null,null,null,null,null,null];
(statearr_49579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__);

(statearr_49579[(1)] = (1));

return statearr_49579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1 = (function (state_49569){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49569);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49580){var ex__49061__auto__ = e49580;
var statearr_49581_52090 = state_49569;
(statearr_49581_52090[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49569[(4)]))){
var statearr_49583_52093 = state_49569;
(statearr_49583_52093[(1)] = cljs.core.first((state_49569[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52094 = state_49569;
state_49569 = G__52094;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = function(state_49569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1.call(this,state_49569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__;
})()
;})(__52029,switch__49057__auto__,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
})();
var state__49234__auto__ = (function (){var statearr_49585 = f__49233__auto__();
(statearr_49585[(6)] = c__49232__auto___52069);

return statearr_49585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(__52029,c__49232__auto___52069,G__49512_52030,G__49512_52031__$1,n__4607__auto___52028,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49512_52031__$1)].join('')));

}

var G__52098 = (__52029 + (1));
__52029 = G__52098;
continue;
} else {
}
break;
}

var c__49232__auto___52099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52099,jobs,results,process,async){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52099,jobs,results,process,async){
return (function (state_49610){
var state_val_49611 = (state_49610[(1)]);
if((state_val_49611 === (7))){
var inst_49606 = (state_49610[(2)]);
var state_49610__$1 = state_49610;
var statearr_49619_52103 = state_49610__$1;
(statearr_49619_52103[(2)] = inst_49606);

(statearr_49619_52103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (1))){
var state_49610__$1 = state_49610;
var statearr_49620_52106 = state_49610__$1;
(statearr_49620_52106[(2)] = null);

(statearr_49620_52106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (4))){
var inst_49590 = (state_49610[(7)]);
var inst_49590__$1 = (state_49610[(2)]);
var inst_49591 = (inst_49590__$1 == null);
var state_49610__$1 = (function (){var statearr_49623 = state_49610;
(statearr_49623[(7)] = inst_49590__$1);

return statearr_49623;
})();
if(cljs.core.truth_(inst_49591)){
var statearr_49626_52109 = state_49610__$1;
(statearr_49626_52109[(1)] = (5));

} else {
var statearr_49627_52110 = state_49610__$1;
(statearr_49627_52110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (6))){
var inst_49590 = (state_49610[(7)]);
var inst_49596 = (state_49610[(8)]);
var inst_49596__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49598 = [inst_49590,inst_49596__$1];
var inst_49599 = (new cljs.core.PersistentVector(null,2,(5),inst_49597,inst_49598,null));
var state_49610__$1 = (function (){var statearr_49632 = state_49610;
(statearr_49632[(8)] = inst_49596__$1);

return statearr_49632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49610__$1,(8),jobs,inst_49599);
} else {
if((state_val_49611 === (3))){
var inst_49608 = (state_49610[(2)]);
var state_49610__$1 = state_49610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49610__$1,inst_49608);
} else {
if((state_val_49611 === (2))){
var state_49610__$1 = state_49610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49610__$1,(4),from);
} else {
if((state_val_49611 === (9))){
var inst_49603 = (state_49610[(2)]);
var state_49610__$1 = (function (){var statearr_49634 = state_49610;
(statearr_49634[(9)] = inst_49603);

return statearr_49634;
})();
var statearr_49636_52115 = state_49610__$1;
(statearr_49636_52115[(2)] = null);

(statearr_49636_52115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (5))){
var inst_49593 = cljs.core.async.close_BANG_(jobs);
var state_49610__$1 = state_49610;
var statearr_49639_52116 = state_49610__$1;
(statearr_49639_52116[(2)] = inst_49593);

(statearr_49639_52116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (8))){
var inst_49596 = (state_49610[(8)]);
var inst_49601 = (state_49610[(2)]);
var state_49610__$1 = (function (){var statearr_49640 = state_49610;
(statearr_49640[(10)] = inst_49601);

return statearr_49640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49610__$1,(9),results,inst_49596);
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
});})(c__49232__auto___52099,jobs,results,process,async))
;
return ((function (switch__49057__auto__,c__49232__auto___52099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_49644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__);

(statearr_49644[(1)] = (1));

return statearr_49644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1 = (function (state_49610){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49610);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49646){var ex__49061__auto__ = e49646;
var statearr_49650_52129 = state_49610;
(statearr_49650_52129[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49610[(4)]))){
var statearr_49651_52131 = state_49610;
(statearr_49651_52131[(1)] = cljs.core.first((state_49610[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52132 = state_49610;
state_49610 = G__52132;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = function(state_49610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1.call(this,state_49610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52099,jobs,results,process,async))
})();
var state__49234__auto__ = (function (){var statearr_49655 = f__49233__auto__();
(statearr_49655[(6)] = c__49232__auto___52099);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52099,jobs,results,process,async))
);


var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__,jobs,results,process,async){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__,jobs,results,process,async){
return (function (state_49707){
var state_val_49708 = (state_49707[(1)]);
if((state_val_49708 === (7))){
var inst_49702 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49709_52138 = state_49707__$1;
(statearr_49709_52138[(2)] = inst_49702);

(statearr_49709_52138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (20))){
var state_49707__$1 = state_49707;
var statearr_49711_52140 = state_49707__$1;
(statearr_49711_52140[(2)] = null);

(statearr_49711_52140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (1))){
var state_49707__$1 = state_49707;
var statearr_49715_52141 = state_49707__$1;
(statearr_49715_52141[(2)] = null);

(statearr_49715_52141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (4))){
var inst_49661 = (state_49707[(7)]);
var inst_49661__$1 = (state_49707[(2)]);
var inst_49663 = (inst_49661__$1 == null);
var state_49707__$1 = (function (){var statearr_49723 = state_49707;
(statearr_49723[(7)] = inst_49661__$1);

return statearr_49723;
})();
if(cljs.core.truth_(inst_49663)){
var statearr_49724_52149 = state_49707__$1;
(statearr_49724_52149[(1)] = (5));

} else {
var statearr_49725_52150 = state_49707__$1;
(statearr_49725_52150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (15))){
var inst_49681 = (state_49707[(8)]);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49707__$1,(18),to,inst_49681);
} else {
if((state_val_49708 === (21))){
var inst_49697 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49727_52152 = state_49707__$1;
(statearr_49727_52152[(2)] = inst_49697);

(statearr_49727_52152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (13))){
var inst_49699 = (state_49707[(2)]);
var state_49707__$1 = (function (){var statearr_49730 = state_49707;
(statearr_49730[(9)] = inst_49699);

return statearr_49730;
})();
var statearr_49732_52155 = state_49707__$1;
(statearr_49732_52155[(2)] = null);

(statearr_49732_52155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (6))){
var inst_49661 = (state_49707[(7)]);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49707__$1,(11),inst_49661);
} else {
if((state_val_49708 === (17))){
var inst_49692 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
if(cljs.core.truth_(inst_49692)){
var statearr_49733_52158 = state_49707__$1;
(statearr_49733_52158[(1)] = (19));

} else {
var statearr_49734_52161 = state_49707__$1;
(statearr_49734_52161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (3))){
var inst_49704 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49707__$1,inst_49704);
} else {
if((state_val_49708 === (12))){
var inst_49676 = (state_49707[(10)]);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49707__$1,(14),inst_49676);
} else {
if((state_val_49708 === (2))){
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49707__$1,(4),results);
} else {
if((state_val_49708 === (19))){
var state_49707__$1 = state_49707;
var statearr_49736_52165 = state_49707__$1;
(statearr_49736_52165[(2)] = null);

(statearr_49736_52165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (11))){
var inst_49676 = (state_49707[(2)]);
var state_49707__$1 = (function (){var statearr_49737 = state_49707;
(statearr_49737[(10)] = inst_49676);

return statearr_49737;
})();
var statearr_49738_52168 = state_49707__$1;
(statearr_49738_52168[(2)] = null);

(statearr_49738_52168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (9))){
var state_49707__$1 = state_49707;
var statearr_49739_52171 = state_49707__$1;
(statearr_49739_52171[(2)] = null);

(statearr_49739_52171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (5))){
var state_49707__$1 = state_49707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49740_52172 = state_49707__$1;
(statearr_49740_52172[(1)] = (8));

} else {
var statearr_49741_52173 = state_49707__$1;
(statearr_49741_52173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (14))){
var inst_49686 = (state_49707[(11)]);
var inst_49681 = (state_49707[(8)]);
var inst_49681__$1 = (state_49707[(2)]);
var inst_49685 = (inst_49681__$1 == null);
var inst_49686__$1 = cljs.core.not(inst_49685);
var state_49707__$1 = (function (){var statearr_49744 = state_49707;
(statearr_49744[(11)] = inst_49686__$1);

(statearr_49744[(8)] = inst_49681__$1);

return statearr_49744;
})();
if(inst_49686__$1){
var statearr_49745_52177 = state_49707__$1;
(statearr_49745_52177[(1)] = (15));

} else {
var statearr_49746_52178 = state_49707__$1;
(statearr_49746_52178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (16))){
var inst_49686 = (state_49707[(11)]);
var state_49707__$1 = state_49707;
var statearr_49747_52179 = state_49707__$1;
(statearr_49747_52179[(2)] = inst_49686);

(statearr_49747_52179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (10))){
var inst_49670 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49748_52181 = state_49707__$1;
(statearr_49748_52181[(2)] = inst_49670);

(statearr_49748_52181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (18))){
var inst_49689 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49749_52183 = state_49707__$1;
(statearr_49749_52183[(2)] = inst_49689);

(statearr_49749_52183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (8))){
var inst_49667 = cljs.core.async.close_BANG_(to);
var state_49707__$1 = state_49707;
var statearr_49752_52187 = state_49707__$1;
(statearr_49752_52187[(2)] = inst_49667);

(statearr_49752_52187[(1)] = (10));


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
});})(c__49232__auto__,jobs,results,process,async))
;
return ((function (switch__49057__auto__,c__49232__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_49753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__);

(statearr_49753[(1)] = (1));

return statearr_49753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1 = (function (state_49707){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49707);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49754){var ex__49061__auto__ = e49754;
var statearr_49755_52195 = state_49707;
(statearr_49755_52195[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49707[(4)]))){
var statearr_49756_52197 = state_49707;
(statearr_49756_52197[(1)] = cljs.core.first((state_49707[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52198 = state_49707;
state_49707 = G__52198;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__ = function(state_49707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1.call(this,state_49707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__,jobs,results,process,async))
})();
var state__49234__auto__ = (function (){var statearr_49757 = f__49233__auto__();
(statearr_49757[(6)] = c__49232__auto__);

return statearr_49757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__,jobs,results,process,async))
);

return c__49232__auto__;
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
var G__49759 = arguments.length;
switch (G__49759) {
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
var G__49761 = arguments.length;
switch (G__49761) {
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
var G__49772 = arguments.length;
switch (G__49772) {
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
var c__49232__auto___52216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52216,tc,fc){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52216,tc,fc){
return (function (state_49811){
var state_val_49812 = (state_49811[(1)]);
if((state_val_49812 === (7))){
var inst_49804 = (state_49811[(2)]);
var state_49811__$1 = state_49811;
var statearr_49815_52220 = state_49811__$1;
(statearr_49815_52220[(2)] = inst_49804);

(statearr_49815_52220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (1))){
var state_49811__$1 = state_49811;
var statearr_49816_52223 = state_49811__$1;
(statearr_49816_52223[(2)] = null);

(statearr_49816_52223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (4))){
var inst_49783 = (state_49811[(7)]);
var inst_49783__$1 = (state_49811[(2)]);
var inst_49785 = (inst_49783__$1 == null);
var state_49811__$1 = (function (){var statearr_49818 = state_49811;
(statearr_49818[(7)] = inst_49783__$1);

return statearr_49818;
})();
if(cljs.core.truth_(inst_49785)){
var statearr_49819_52225 = state_49811__$1;
(statearr_49819_52225[(1)] = (5));

} else {
var statearr_49820_52227 = state_49811__$1;
(statearr_49820_52227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (13))){
var state_49811__$1 = state_49811;
var statearr_49822_52229 = state_49811__$1;
(statearr_49822_52229[(2)] = null);

(statearr_49822_52229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (6))){
var inst_49783 = (state_49811[(7)]);
var inst_49790 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49783) : p.call(null,inst_49783));
var state_49811__$1 = state_49811;
if(cljs.core.truth_(inst_49790)){
var statearr_49823_52236 = state_49811__$1;
(statearr_49823_52236[(1)] = (9));

} else {
var statearr_49824_52237 = state_49811__$1;
(statearr_49824_52237[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (3))){
var inst_49809 = (state_49811[(2)]);
var state_49811__$1 = state_49811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49811__$1,inst_49809);
} else {
if((state_val_49812 === (12))){
var state_49811__$1 = state_49811;
var statearr_49825_52241 = state_49811__$1;
(statearr_49825_52241[(2)] = null);

(statearr_49825_52241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (2))){
var state_49811__$1 = state_49811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49811__$1,(4),ch);
} else {
if((state_val_49812 === (11))){
var inst_49783 = (state_49811[(7)]);
var inst_49794 = (state_49811[(2)]);
var state_49811__$1 = state_49811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49811__$1,(8),inst_49794,inst_49783);
} else {
if((state_val_49812 === (9))){
var state_49811__$1 = state_49811;
var statearr_49829_52242 = state_49811__$1;
(statearr_49829_52242[(2)] = tc);

(statearr_49829_52242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (5))){
var inst_49787 = cljs.core.async.close_BANG_(tc);
var inst_49788 = cljs.core.async.close_BANG_(fc);
var state_49811__$1 = (function (){var statearr_49832 = state_49811;
(statearr_49832[(8)] = inst_49787);

return statearr_49832;
})();
var statearr_49833_52244 = state_49811__$1;
(statearr_49833_52244[(2)] = inst_49788);

(statearr_49833_52244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (14))){
var inst_49802 = (state_49811[(2)]);
var state_49811__$1 = state_49811;
var statearr_49834_52246 = state_49811__$1;
(statearr_49834_52246[(2)] = inst_49802);

(statearr_49834_52246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (10))){
var state_49811__$1 = state_49811;
var statearr_49835_52250 = state_49811__$1;
(statearr_49835_52250[(2)] = fc);

(statearr_49835_52250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49812 === (8))){
var inst_49796 = (state_49811[(2)]);
var state_49811__$1 = state_49811;
if(cljs.core.truth_(inst_49796)){
var statearr_49838_52251 = state_49811__$1;
(statearr_49838_52251[(1)] = (12));

} else {
var statearr_49839_52252 = state_49811__$1;
(statearr_49839_52252[(1)] = (13));

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
});})(c__49232__auto___52216,tc,fc))
;
return ((function (switch__49057__auto__,c__49232__auto___52216,tc,fc){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_49844 = [null,null,null,null,null,null,null,null,null];
(statearr_49844[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_49844[(1)] = (1));

return statearr_49844;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_49811){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49811);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49846){var ex__49061__auto__ = e49846;
var statearr_49851_52256 = state_49811;
(statearr_49851_52256[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49811[(4)]))){
var statearr_49853_52258 = state_49811;
(statearr_49853_52258[(1)] = cljs.core.first((state_49811[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52261 = state_49811;
state_49811 = G__52261;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_49811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_49811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52216,tc,fc))
})();
var state__49234__auto__ = (function (){var statearr_49860 = f__49233__auto__();
(statearr_49860[(6)] = c__49232__auto___52216);

return statearr_49860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52216,tc,fc))
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
var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__){
return (function (state_49898){
var state_val_49899 = (state_49898[(1)]);
if((state_val_49899 === (7))){
var inst_49893 = (state_49898[(2)]);
var state_49898__$1 = state_49898;
var statearr_49904_52265 = state_49898__$1;
(statearr_49904_52265[(2)] = inst_49893);

(statearr_49904_52265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (1))){
var inst_49876 = init;
var inst_49877 = inst_49876;
var state_49898__$1 = (function (){var statearr_49909 = state_49898;
(statearr_49909[(7)] = inst_49877);

return statearr_49909;
})();
var statearr_49910_52266 = state_49898__$1;
(statearr_49910_52266[(2)] = null);

(statearr_49910_52266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (4))){
var inst_49880 = (state_49898[(8)]);
var inst_49880__$1 = (state_49898[(2)]);
var inst_49881 = (inst_49880__$1 == null);
var state_49898__$1 = (function (){var statearr_49912 = state_49898;
(statearr_49912[(8)] = inst_49880__$1);

return statearr_49912;
})();
if(cljs.core.truth_(inst_49881)){
var statearr_49914_52269 = state_49898__$1;
(statearr_49914_52269[(1)] = (5));

} else {
var statearr_49917_52270 = state_49898__$1;
(statearr_49917_52270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (6))){
var inst_49880 = (state_49898[(8)]);
var inst_49877 = (state_49898[(7)]);
var inst_49884 = (state_49898[(9)]);
var inst_49884__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49877,inst_49880) : f.call(null,inst_49877,inst_49880));
var inst_49885 = cljs.core.reduced_QMARK_(inst_49884__$1);
var state_49898__$1 = (function (){var statearr_49918 = state_49898;
(statearr_49918[(9)] = inst_49884__$1);

return statearr_49918;
})();
if(inst_49885){
var statearr_49919_52276 = state_49898__$1;
(statearr_49919_52276[(1)] = (8));

} else {
var statearr_49920_52277 = state_49898__$1;
(statearr_49920_52277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (3))){
var inst_49895 = (state_49898[(2)]);
var state_49898__$1 = state_49898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49898__$1,inst_49895);
} else {
if((state_val_49899 === (2))){
var state_49898__$1 = state_49898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49898__$1,(4),ch);
} else {
if((state_val_49899 === (9))){
var inst_49884 = (state_49898[(9)]);
var inst_49877 = inst_49884;
var state_49898__$1 = (function (){var statearr_49923 = state_49898;
(statearr_49923[(7)] = inst_49877);

return statearr_49923;
})();
var statearr_49924_52279 = state_49898__$1;
(statearr_49924_52279[(2)] = null);

(statearr_49924_52279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (5))){
var inst_49877 = (state_49898[(7)]);
var state_49898__$1 = state_49898;
var statearr_49929_52282 = state_49898__$1;
(statearr_49929_52282[(2)] = inst_49877);

(statearr_49929_52282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (10))){
var inst_49891 = (state_49898[(2)]);
var state_49898__$1 = state_49898;
var statearr_49930_52287 = state_49898__$1;
(statearr_49930_52287[(2)] = inst_49891);

(statearr_49930_52287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49899 === (8))){
var inst_49884 = (state_49898[(9)]);
var inst_49887 = cljs.core.deref(inst_49884);
var state_49898__$1 = state_49898;
var statearr_49935_52288 = state_49898__$1;
(statearr_49935_52288[(2)] = inst_49887);

(statearr_49935_52288[(1)] = (10));


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
});})(c__49232__auto__))
;
return ((function (switch__49057__auto__,c__49232__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49058__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49058__auto____0 = (function (){
var statearr_49936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49936[(0)] = cljs$core$async$reduce_$_state_machine__49058__auto__);

(statearr_49936[(1)] = (1));

return statearr_49936;
});
var cljs$core$async$reduce_$_state_machine__49058__auto____1 = (function (state_49898){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49898);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49937){var ex__49061__auto__ = e49937;
var statearr_49938_52297 = state_49898;
(statearr_49938_52297[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49898[(4)]))){
var statearr_49939_52298 = state_49898;
(statearr_49939_52298[(1)] = cljs.core.first((state_49898[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52299 = state_49898;
state_49898 = G__52299;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49058__auto__ = function(state_49898){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49058__auto____1.call(this,state_49898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49058__auto____0;
cljs$core$async$reduce_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49058__auto____1;
return cljs$core$async$reduce_$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__))
})();
var state__49234__auto__ = (function (){var statearr_49942 = f__49233__auto__();
(statearr_49942[(6)] = c__49232__auto__);

return statearr_49942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__))
);

return c__49232__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__,f__$1){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__,f__$1){
return (function (state_49952){
var state_val_49953 = (state_49952[(1)]);
if((state_val_49953 === (1))){
var inst_49947 = cljs.core.async.reduce(f__$1,init,ch);
var state_49952__$1 = state_49952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49952__$1,(2),inst_49947);
} else {
if((state_val_49953 === (2))){
var inst_49949 = (state_49952[(2)]);
var inst_49950 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49949) : f__$1.call(null,inst_49949));
var state_49952__$1 = state_49952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49952__$1,inst_49950);
} else {
return null;
}
}
});})(c__49232__auto__,f__$1))
;
return ((function (switch__49057__auto__,c__49232__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__49058__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49058__auto____0 = (function (){
var statearr_49963 = [null,null,null,null,null,null,null];
(statearr_49963[(0)] = cljs$core$async$transduce_$_state_machine__49058__auto__);

(statearr_49963[(1)] = (1));

return statearr_49963;
});
var cljs$core$async$transduce_$_state_machine__49058__auto____1 = (function (state_49952){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_49952);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e49964){var ex__49061__auto__ = e49964;
var statearr_49965_52309 = state_49952;
(statearr_49965_52309[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_49952[(4)]))){
var statearr_49966_52310 = state_49952;
(statearr_49966_52310[(1)] = cljs.core.first((state_49952[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52316 = state_49952;
state_49952 = G__52316;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49058__auto__ = function(state_49952){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49058__auto____1.call(this,state_49952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49058__auto____0;
cljs$core$async$transduce_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49058__auto____1;
return cljs$core$async$transduce_$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__,f__$1))
})();
var state__49234__auto__ = (function (){var statearr_49967 = f__49233__auto__();
(statearr_49967[(6)] = c__49232__auto__);

return statearr_49967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__,f__$1))
);

return c__49232__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49971 = arguments.length;
switch (G__49971) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__){
return (function (state_50006){
var state_val_50007 = (state_50006[(1)]);
if((state_val_50007 === (7))){
var inst_49983 = (state_50006[(2)]);
var state_50006__$1 = state_50006;
var statearr_50011_52326 = state_50006__$1;
(statearr_50011_52326[(2)] = inst_49983);

(statearr_50011_52326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (1))){
var inst_49977 = cljs.core.seq(coll);
var inst_49978 = inst_49977;
var state_50006__$1 = (function (){var statearr_50012 = state_50006;
(statearr_50012[(7)] = inst_49978);

return statearr_50012;
})();
var statearr_50013_52328 = state_50006__$1;
(statearr_50013_52328[(2)] = null);

(statearr_50013_52328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (4))){
var inst_49978 = (state_50006[(7)]);
var inst_49981 = cljs.core.first(inst_49978);
var state_50006__$1 = state_50006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50006__$1,(7),ch,inst_49981);
} else {
if((state_val_50007 === (13))){
var inst_49995 = (state_50006[(2)]);
var state_50006__$1 = state_50006;
var statearr_50019_52332 = state_50006__$1;
(statearr_50019_52332[(2)] = inst_49995);

(statearr_50019_52332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (6))){
var inst_49986 = (state_50006[(2)]);
var state_50006__$1 = state_50006;
if(cljs.core.truth_(inst_49986)){
var statearr_50020_52335 = state_50006__$1;
(statearr_50020_52335[(1)] = (8));

} else {
var statearr_50021_52336 = state_50006__$1;
(statearr_50021_52336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (3))){
var inst_49999 = (state_50006[(2)]);
var state_50006__$1 = state_50006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50006__$1,inst_49999);
} else {
if((state_val_50007 === (12))){
var state_50006__$1 = state_50006;
var statearr_50022_52337 = state_50006__$1;
(statearr_50022_52337[(2)] = null);

(statearr_50022_52337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (2))){
var inst_49978 = (state_50006[(7)]);
var state_50006__$1 = state_50006;
if(cljs.core.truth_(inst_49978)){
var statearr_50023_52339 = state_50006__$1;
(statearr_50023_52339[(1)] = (4));

} else {
var statearr_50024_52340 = state_50006__$1;
(statearr_50024_52340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (11))){
var inst_49992 = cljs.core.async.close_BANG_(ch);
var state_50006__$1 = state_50006;
var statearr_50028_52343 = state_50006__$1;
(statearr_50028_52343[(2)] = inst_49992);

(statearr_50028_52343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (9))){
var state_50006__$1 = state_50006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50029_52346 = state_50006__$1;
(statearr_50029_52346[(1)] = (11));

} else {
var statearr_50030_52347 = state_50006__$1;
(statearr_50030_52347[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (5))){
var inst_49978 = (state_50006[(7)]);
var state_50006__$1 = state_50006;
var statearr_50031_52348 = state_50006__$1;
(statearr_50031_52348[(2)] = inst_49978);

(statearr_50031_52348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (10))){
var inst_49997 = (state_50006[(2)]);
var state_50006__$1 = state_50006;
var statearr_50032_52350 = state_50006__$1;
(statearr_50032_52350[(2)] = inst_49997);

(statearr_50032_52350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50007 === (8))){
var inst_49978 = (state_50006[(7)]);
var inst_49988 = cljs.core.next(inst_49978);
var inst_49978__$1 = inst_49988;
var state_50006__$1 = (function (){var statearr_50034 = state_50006;
(statearr_50034[(7)] = inst_49978__$1);

return statearr_50034;
})();
var statearr_50036_52357 = state_50006__$1;
(statearr_50036_52357[(2)] = null);

(statearr_50036_52357[(1)] = (2));


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
});})(c__49232__auto__))
;
return ((function (switch__49057__auto__,c__49232__auto__){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_50037 = [null,null,null,null,null,null,null,null];
(statearr_50037[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_50037[(1)] = (1));

return statearr_50037;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_50006){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_50006);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e50039){var ex__49061__auto__ = e50039;
var statearr_50040_52366 = state_50006;
(statearr_50040_52366[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_50006[(4)]))){
var statearr_50041_52367 = state_50006;
(statearr_50041_52367[(1)] = cljs.core.first((state_50006[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52368 = state_50006;
state_50006 = G__52368;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_50006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_50006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__))
})();
var state__49234__auto__ = (function (){var statearr_50042 = f__49233__auto__();
(statearr_50042[(6)] = c__49232__auto__);

return statearr_50042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__))
);

return c__49232__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50046 = arguments.length;
switch (G__50046) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50067 = (function (ch,cs,meta50068){
this.ch = ch;
this.cs = cs;
this.meta50068 = meta50068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50069,meta50068__$1){
var self__ = this;
var _50069__$1 = this;
return (new cljs.core.async.t_cljs$core$async50067(self__.ch,self__.cs,meta50068__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50069){
var self__ = this;
var _50069__$1 = this;
return self__.meta50068;
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50068","meta50068",-1870367201,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50067";

cljs.core.async.t_cljs$core$async50067.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50067");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50067.
 */
cljs.core.async.__GT_t_cljs$core$async50067 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50067(ch__$1,cs__$1,meta50068){
return (new cljs.core.async.t_cljs$core$async50067(ch__$1,cs__$1,meta50068));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50067(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49232__auto___52409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52409,cs,m,dchan,dctr,done){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52409,cs,m,dchan,dctr,done){
return (function (state_50214){
var state_val_50215 = (state_50214[(1)]);
if((state_val_50215 === (7))){
var inst_50210 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50216_52414 = state_50214__$1;
(statearr_50216_52414[(2)] = inst_50210);

(statearr_50216_52414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (20))){
var inst_50114 = (state_50214[(7)]);
var inst_50126 = cljs.core.first(inst_50114);
var inst_50127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50126,(0),null);
var inst_50128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50126,(1),null);
var state_50214__$1 = (function (){var statearr_50218 = state_50214;
(statearr_50218[(8)] = inst_50127);

return statearr_50218;
})();
if(cljs.core.truth_(inst_50128)){
var statearr_50219_52418 = state_50214__$1;
(statearr_50219_52418[(1)] = (22));

} else {
var statearr_50220_52420 = state_50214__$1;
(statearr_50220_52420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (27))){
var inst_50156 = (state_50214[(9)]);
var inst_50163 = (state_50214[(10)]);
var inst_50082 = (state_50214[(11)]);
var inst_50158 = (state_50214[(12)]);
var inst_50163__$1 = cljs.core._nth(inst_50156,inst_50158);
var inst_50164 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50163__$1,inst_50082,done);
var state_50214__$1 = (function (){var statearr_50221 = state_50214;
(statearr_50221[(10)] = inst_50163__$1);

return statearr_50221;
})();
if(cljs.core.truth_(inst_50164)){
var statearr_50223_52428 = state_50214__$1;
(statearr_50223_52428[(1)] = (30));

} else {
var statearr_50225_52430 = state_50214__$1;
(statearr_50225_52430[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (1))){
var state_50214__$1 = state_50214;
var statearr_50226_52432 = state_50214__$1;
(statearr_50226_52432[(2)] = null);

(statearr_50226_52432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (24))){
var inst_50114 = (state_50214[(7)]);
var inst_50133 = (state_50214[(2)]);
var inst_50134 = cljs.core.next(inst_50114);
var inst_50091 = inst_50134;
var inst_50092 = null;
var inst_50093 = (0);
var inst_50094 = (0);
var state_50214__$1 = (function (){var statearr_50231 = state_50214;
(statearr_50231[(13)] = inst_50091);

(statearr_50231[(14)] = inst_50093);

(statearr_50231[(15)] = inst_50092);

(statearr_50231[(16)] = inst_50133);

(statearr_50231[(17)] = inst_50094);

return statearr_50231;
})();
var statearr_50232_52433 = state_50214__$1;
(statearr_50232_52433[(2)] = null);

(statearr_50232_52433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (39))){
var state_50214__$1 = state_50214;
var statearr_50242_52434 = state_50214__$1;
(statearr_50242_52434[(2)] = null);

(statearr_50242_52434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (4))){
var inst_50082 = (state_50214[(11)]);
var inst_50082__$1 = (state_50214[(2)]);
var inst_50083 = (inst_50082__$1 == null);
var state_50214__$1 = (function (){var statearr_50243 = state_50214;
(statearr_50243[(11)] = inst_50082__$1);

return statearr_50243;
})();
if(cljs.core.truth_(inst_50083)){
var statearr_50244_52436 = state_50214__$1;
(statearr_50244_52436[(1)] = (5));

} else {
var statearr_50245_52437 = state_50214__$1;
(statearr_50245_52437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (15))){
var inst_50091 = (state_50214[(13)]);
var inst_50093 = (state_50214[(14)]);
var inst_50092 = (state_50214[(15)]);
var inst_50094 = (state_50214[(17)]);
var inst_50110 = (state_50214[(2)]);
var inst_50111 = (inst_50094 + (1));
var tmp50235 = inst_50091;
var tmp50240 = inst_50093;
var tmp50241 = inst_50092;
var inst_50091__$1 = tmp50235;
var inst_50092__$1 = tmp50241;
var inst_50093__$1 = tmp50240;
var inst_50094__$1 = inst_50111;
var state_50214__$1 = (function (){var statearr_50246 = state_50214;
(statearr_50246[(13)] = inst_50091__$1);

(statearr_50246[(18)] = inst_50110);

(statearr_50246[(14)] = inst_50093__$1);

(statearr_50246[(15)] = inst_50092__$1);

(statearr_50246[(17)] = inst_50094__$1);

return statearr_50246;
})();
var statearr_50247_52442 = state_50214__$1;
(statearr_50247_52442[(2)] = null);

(statearr_50247_52442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (21))){
var inst_50137 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50251_52446 = state_50214__$1;
(statearr_50251_52446[(2)] = inst_50137);

(statearr_50251_52446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (31))){
var inst_50163 = (state_50214[(10)]);
var inst_50167 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50163);
var state_50214__$1 = state_50214;
var statearr_50252_52450 = state_50214__$1;
(statearr_50252_52450[(2)] = inst_50167);

(statearr_50252_52450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (32))){
var inst_50155 = (state_50214[(19)]);
var inst_50156 = (state_50214[(9)]);
var inst_50157 = (state_50214[(20)]);
var inst_50158 = (state_50214[(12)]);
var inst_50169 = (state_50214[(2)]);
var inst_50170 = (inst_50158 + (1));
var tmp50248 = inst_50155;
var tmp50249 = inst_50156;
var tmp50250 = inst_50157;
var inst_50155__$1 = tmp50248;
var inst_50156__$1 = tmp50249;
var inst_50157__$1 = tmp50250;
var inst_50158__$1 = inst_50170;
var state_50214__$1 = (function (){var statearr_50255 = state_50214;
(statearr_50255[(19)] = inst_50155__$1);

(statearr_50255[(9)] = inst_50156__$1);

(statearr_50255[(21)] = inst_50169);

(statearr_50255[(20)] = inst_50157__$1);

(statearr_50255[(12)] = inst_50158__$1);

return statearr_50255;
})();
var statearr_50256_52454 = state_50214__$1;
(statearr_50256_52454[(2)] = null);

(statearr_50256_52454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (40))){
var inst_50182 = (state_50214[(22)]);
var inst_50186 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50182);
var state_50214__$1 = state_50214;
var statearr_50257_52456 = state_50214__$1;
(statearr_50257_52456[(2)] = inst_50186);

(statearr_50257_52456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (33))){
var inst_50173 = (state_50214[(23)]);
var inst_50175 = cljs.core.chunked_seq_QMARK_(inst_50173);
var state_50214__$1 = state_50214;
if(inst_50175){
var statearr_50260_52459 = state_50214__$1;
(statearr_50260_52459[(1)] = (36));

} else {
var statearr_50262_52460 = state_50214__$1;
(statearr_50262_52460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (13))){
var inst_50104 = (state_50214[(24)]);
var inst_50107 = cljs.core.async.close_BANG_(inst_50104);
var state_50214__$1 = state_50214;
var statearr_50264_52463 = state_50214__$1;
(statearr_50264_52463[(2)] = inst_50107);

(statearr_50264_52463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (22))){
var inst_50127 = (state_50214[(8)]);
var inst_50130 = cljs.core.async.close_BANG_(inst_50127);
var state_50214__$1 = state_50214;
var statearr_50265_52465 = state_50214__$1;
(statearr_50265_52465[(2)] = inst_50130);

(statearr_50265_52465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (36))){
var inst_50173 = (state_50214[(23)]);
var inst_50177 = cljs.core.chunk_first(inst_50173);
var inst_50178 = cljs.core.chunk_rest(inst_50173);
var inst_50179 = cljs.core.count(inst_50177);
var inst_50155 = inst_50178;
var inst_50156 = inst_50177;
var inst_50157 = inst_50179;
var inst_50158 = (0);
var state_50214__$1 = (function (){var statearr_50268 = state_50214;
(statearr_50268[(19)] = inst_50155);

(statearr_50268[(9)] = inst_50156);

(statearr_50268[(20)] = inst_50157);

(statearr_50268[(12)] = inst_50158);

return statearr_50268;
})();
var statearr_50269_52469 = state_50214__$1;
(statearr_50269_52469[(2)] = null);

(statearr_50269_52469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (41))){
var inst_50173 = (state_50214[(23)]);
var inst_50188 = (state_50214[(2)]);
var inst_50189 = cljs.core.next(inst_50173);
var inst_50155 = inst_50189;
var inst_50156 = null;
var inst_50157 = (0);
var inst_50158 = (0);
var state_50214__$1 = (function (){var statearr_50272 = state_50214;
(statearr_50272[(19)] = inst_50155);

(statearr_50272[(9)] = inst_50156);

(statearr_50272[(20)] = inst_50157);

(statearr_50272[(25)] = inst_50188);

(statearr_50272[(12)] = inst_50158);

return statearr_50272;
})();
var statearr_50273_52476 = state_50214__$1;
(statearr_50273_52476[(2)] = null);

(statearr_50273_52476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (43))){
var state_50214__$1 = state_50214;
var statearr_50274_52478 = state_50214__$1;
(statearr_50274_52478[(2)] = null);

(statearr_50274_52478[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (29))){
var inst_50198 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50275_52480 = state_50214__$1;
(statearr_50275_52480[(2)] = inst_50198);

(statearr_50275_52480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (44))){
var inst_50207 = (state_50214[(2)]);
var state_50214__$1 = (function (){var statearr_50276 = state_50214;
(statearr_50276[(26)] = inst_50207);

return statearr_50276;
})();
var statearr_50277_52484 = state_50214__$1;
(statearr_50277_52484[(2)] = null);

(statearr_50277_52484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (6))){
var inst_50147 = (state_50214[(27)]);
var inst_50146 = cljs.core.deref(cs);
var inst_50147__$1 = cljs.core.keys(inst_50146);
var inst_50148 = cljs.core.count(inst_50147__$1);
var inst_50149 = cljs.core.reset_BANG_(dctr,inst_50148);
var inst_50154 = cljs.core.seq(inst_50147__$1);
var inst_50155 = inst_50154;
var inst_50156 = null;
var inst_50157 = (0);
var inst_50158 = (0);
var state_50214__$1 = (function (){var statearr_50287 = state_50214;
(statearr_50287[(19)] = inst_50155);

(statearr_50287[(9)] = inst_50156);

(statearr_50287[(20)] = inst_50157);

(statearr_50287[(28)] = inst_50149);

(statearr_50287[(12)] = inst_50158);

(statearr_50287[(27)] = inst_50147__$1);

return statearr_50287;
})();
var statearr_50289_52489 = state_50214__$1;
(statearr_50289_52489[(2)] = null);

(statearr_50289_52489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (28))){
var inst_50173 = (state_50214[(23)]);
var inst_50155 = (state_50214[(19)]);
var inst_50173__$1 = cljs.core.seq(inst_50155);
var state_50214__$1 = (function (){var statearr_50291 = state_50214;
(statearr_50291[(23)] = inst_50173__$1);

return statearr_50291;
})();
if(inst_50173__$1){
var statearr_50292_52492 = state_50214__$1;
(statearr_50292_52492[(1)] = (33));

} else {
var statearr_50293_52493 = state_50214__$1;
(statearr_50293_52493[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (25))){
var inst_50157 = (state_50214[(20)]);
var inst_50158 = (state_50214[(12)]);
var inst_50160 = (inst_50158 < inst_50157);
var inst_50161 = inst_50160;
var state_50214__$1 = state_50214;
if(cljs.core.truth_(inst_50161)){
var statearr_50298_52495 = state_50214__$1;
(statearr_50298_52495[(1)] = (27));

} else {
var statearr_50299_52496 = state_50214__$1;
(statearr_50299_52496[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (34))){
var state_50214__$1 = state_50214;
var statearr_50308_52497 = state_50214__$1;
(statearr_50308_52497[(2)] = null);

(statearr_50308_52497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (17))){
var state_50214__$1 = state_50214;
var statearr_50315_52501 = state_50214__$1;
(statearr_50315_52501[(2)] = null);

(statearr_50315_52501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (3))){
var inst_50212 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50214__$1,inst_50212);
} else {
if((state_val_50215 === (12))){
var inst_50142 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50321_52504 = state_50214__$1;
(statearr_50321_52504[(2)] = inst_50142);

(statearr_50321_52504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (2))){
var state_50214__$1 = state_50214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50214__$1,(4),ch);
} else {
if((state_val_50215 === (23))){
var state_50214__$1 = state_50214;
var statearr_50322_52506 = state_50214__$1;
(statearr_50322_52506[(2)] = null);

(statearr_50322_52506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (35))){
var inst_50196 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50325_52509 = state_50214__$1;
(statearr_50325_52509[(2)] = inst_50196);

(statearr_50325_52509[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (19))){
var inst_50114 = (state_50214[(7)]);
var inst_50118 = cljs.core.chunk_first(inst_50114);
var inst_50119 = cljs.core.chunk_rest(inst_50114);
var inst_50120 = cljs.core.count(inst_50118);
var inst_50091 = inst_50119;
var inst_50092 = inst_50118;
var inst_50093 = inst_50120;
var inst_50094 = (0);
var state_50214__$1 = (function (){var statearr_50326 = state_50214;
(statearr_50326[(13)] = inst_50091);

(statearr_50326[(14)] = inst_50093);

(statearr_50326[(15)] = inst_50092);

(statearr_50326[(17)] = inst_50094);

return statearr_50326;
})();
var statearr_50327_52516 = state_50214__$1;
(statearr_50327_52516[(2)] = null);

(statearr_50327_52516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (11))){
var inst_50114 = (state_50214[(7)]);
var inst_50091 = (state_50214[(13)]);
var inst_50114__$1 = cljs.core.seq(inst_50091);
var state_50214__$1 = (function (){var statearr_50328 = state_50214;
(statearr_50328[(7)] = inst_50114__$1);

return statearr_50328;
})();
if(inst_50114__$1){
var statearr_50331_52519 = state_50214__$1;
(statearr_50331_52519[(1)] = (16));

} else {
var statearr_50333_52520 = state_50214__$1;
(statearr_50333_52520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (9))){
var inst_50144 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50335_52523 = state_50214__$1;
(statearr_50335_52523[(2)] = inst_50144);

(statearr_50335_52523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (5))){
var inst_50089 = cljs.core.deref(cs);
var inst_50090 = cljs.core.seq(inst_50089);
var inst_50091 = inst_50090;
var inst_50092 = null;
var inst_50093 = (0);
var inst_50094 = (0);
var state_50214__$1 = (function (){var statearr_50338 = state_50214;
(statearr_50338[(13)] = inst_50091);

(statearr_50338[(14)] = inst_50093);

(statearr_50338[(15)] = inst_50092);

(statearr_50338[(17)] = inst_50094);

return statearr_50338;
})();
var statearr_50339_52525 = state_50214__$1;
(statearr_50339_52525[(2)] = null);

(statearr_50339_52525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (14))){
var state_50214__$1 = state_50214;
var statearr_50341_52528 = state_50214__$1;
(statearr_50341_52528[(2)] = null);

(statearr_50341_52528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (45))){
var inst_50204 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50342_52531 = state_50214__$1;
(statearr_50342_52531[(2)] = inst_50204);

(statearr_50342_52531[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (26))){
var inst_50147 = (state_50214[(27)]);
var inst_50200 = (state_50214[(2)]);
var inst_50201 = cljs.core.seq(inst_50147);
var state_50214__$1 = (function (){var statearr_50346 = state_50214;
(statearr_50346[(29)] = inst_50200);

return statearr_50346;
})();
if(inst_50201){
var statearr_50347_52533 = state_50214__$1;
(statearr_50347_52533[(1)] = (42));

} else {
var statearr_50348_52534 = state_50214__$1;
(statearr_50348_52534[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (16))){
var inst_50114 = (state_50214[(7)]);
var inst_50116 = cljs.core.chunked_seq_QMARK_(inst_50114);
var state_50214__$1 = state_50214;
if(inst_50116){
var statearr_50349_52537 = state_50214__$1;
(statearr_50349_52537[(1)] = (19));

} else {
var statearr_50350_52540 = state_50214__$1;
(statearr_50350_52540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (38))){
var inst_50193 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50351_52541 = state_50214__$1;
(statearr_50351_52541[(2)] = inst_50193);

(statearr_50351_52541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (30))){
var state_50214__$1 = state_50214;
var statearr_50352_52542 = state_50214__$1;
(statearr_50352_52542[(2)] = null);

(statearr_50352_52542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (10))){
var inst_50092 = (state_50214[(15)]);
var inst_50094 = (state_50214[(17)]);
var inst_50102 = cljs.core._nth(inst_50092,inst_50094);
var inst_50104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50102,(0),null);
var inst_50105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50102,(1),null);
var state_50214__$1 = (function (){var statearr_50353 = state_50214;
(statearr_50353[(24)] = inst_50104);

return statearr_50353;
})();
if(cljs.core.truth_(inst_50105)){
var statearr_50354_52550 = state_50214__$1;
(statearr_50354_52550[(1)] = (13));

} else {
var statearr_50358_52554 = state_50214__$1;
(statearr_50358_52554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (18))){
var inst_50140 = (state_50214[(2)]);
var state_50214__$1 = state_50214;
var statearr_50359_52556 = state_50214__$1;
(statearr_50359_52556[(2)] = inst_50140);

(statearr_50359_52556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (42))){
var state_50214__$1 = state_50214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50214__$1,(45),dchan);
} else {
if((state_val_50215 === (37))){
var inst_50173 = (state_50214[(23)]);
var inst_50082 = (state_50214[(11)]);
var inst_50182 = (state_50214[(22)]);
var inst_50182__$1 = cljs.core.first(inst_50173);
var inst_50183 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50182__$1,inst_50082,done);
var state_50214__$1 = (function (){var statearr_50360 = state_50214;
(statearr_50360[(22)] = inst_50182__$1);

return statearr_50360;
})();
if(cljs.core.truth_(inst_50183)){
var statearr_50361_52562 = state_50214__$1;
(statearr_50361_52562[(1)] = (39));

} else {
var statearr_50362_52564 = state_50214__$1;
(statearr_50362_52564[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50215 === (8))){
var inst_50093 = (state_50214[(14)]);
var inst_50094 = (state_50214[(17)]);
var inst_50096 = (inst_50094 < inst_50093);
var inst_50097 = inst_50096;
var state_50214__$1 = state_50214;
if(cljs.core.truth_(inst_50097)){
var statearr_50363_52568 = state_50214__$1;
(statearr_50363_52568[(1)] = (10));

} else {
var statearr_50364_52570 = state_50214__$1;
(statearr_50364_52570[(1)] = (11));

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
});})(c__49232__auto___52409,cs,m,dchan,dctr,done))
;
return ((function (switch__49057__auto__,c__49232__auto___52409,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49058__auto__ = null;
var cljs$core$async$mult_$_state_machine__49058__auto____0 = (function (){
var statearr_50368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50368[(0)] = cljs$core$async$mult_$_state_machine__49058__auto__);

(statearr_50368[(1)] = (1));

return statearr_50368;
});
var cljs$core$async$mult_$_state_machine__49058__auto____1 = (function (state_50214){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_50214);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e50369){var ex__49061__auto__ = e50369;
var statearr_50370_52580 = state_50214;
(statearr_50370_52580[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_50214[(4)]))){
var statearr_50371_52581 = state_50214;
(statearr_50371_52581[(1)] = cljs.core.first((state_50214[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52582 = state_50214;
state_50214 = G__52582;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49058__auto__ = function(state_50214){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49058__auto____1.call(this,state_50214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49058__auto____0;
cljs$core$async$mult_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49058__auto____1;
return cljs$core$async$mult_$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52409,cs,m,dchan,dctr,done))
})();
var state__49234__auto__ = (function (){var statearr_50372 = f__49233__auto__();
(statearr_50372[(6)] = c__49232__auto___52409);

return statearr_50372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52409,cs,m,dchan,dctr,done))
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
var G__50377 = arguments.length;
switch (G__50377) {
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
var len__4730__auto___52620 = arguments.length;
var i__4731__auto___52622 = (0);
while(true){
if((i__4731__auto___52622 < len__4730__auto___52620)){
args__4736__auto__.push((arguments[i__4731__auto___52622]));

var G__52624 = (i__4731__auto___52622 + (1));
i__4731__auto___52622 = G__52624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50403){
var map__50404 = p__50403;
var map__50404__$1 = (((((!((map__50404 == null))))?(((((map__50404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50404):map__50404);
var opts = map__50404__$1;
var statearr_50406_52641 = state;
(statearr_50406_52641[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts(((function (map__50404,map__50404__$1,opts){
return (function (val){
var statearr_50407_52642 = state;
(statearr_50407_52642[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__50404,map__50404__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50408_52644 = state;
(statearr_50408_52644[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50396){
var G__50397 = cljs.core.first(seq50396);
var seq50396__$1 = cljs.core.next(seq50396);
var G__50398 = cljs.core.first(seq50396__$1);
var seq50396__$2 = cljs.core.next(seq50396__$1);
var G__50399 = cljs.core.first(seq50396__$2);
var seq50396__$3 = cljs.core.next(seq50396__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50397,G__50398,G__50399,seq50396__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50415 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50416){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50416 = meta50416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50417,meta50416__$1){
var self__ = this;
var _50417__$1 = this;
return (new cljs.core.async.t_cljs$core$async50415(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50417){
var self__ = this;
var _50417__$1 = this;
return self__.meta50416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async50415.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50416","meta50416",-1060057762,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50415";

cljs.core.async.t_cljs$core$async50415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50415.
 */
cljs.core.async.__GT_t_cljs$core$async50415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async50415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50416){
return (new cljs.core.async.t_cljs$core$async50415(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async50415(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49232__auto___52680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50542){
var state_val_50543 = (state_50542[(1)]);
if((state_val_50543 === (7))){
var inst_50446 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
var statearr_50546_52682 = state_50542__$1;
(statearr_50546_52682[(2)] = inst_50446);

(statearr_50546_52682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (20))){
var inst_50461 = (state_50542[(7)]);
var state_50542__$1 = state_50542;
var statearr_50547_52683 = state_50542__$1;
(statearr_50547_52683[(2)] = inst_50461);

(statearr_50547_52683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (27))){
var state_50542__$1 = state_50542;
var statearr_50550_52686 = state_50542__$1;
(statearr_50550_52686[(2)] = null);

(statearr_50550_52686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (1))){
var inst_50430 = (state_50542[(8)]);
var inst_50430__$1 = calc_state();
var inst_50432 = (inst_50430__$1 == null);
var inst_50433 = cljs.core.not(inst_50432);
var state_50542__$1 = (function (){var statearr_50551 = state_50542;
(statearr_50551[(8)] = inst_50430__$1);

return statearr_50551;
})();
if(inst_50433){
var statearr_50552_52689 = state_50542__$1;
(statearr_50552_52689[(1)] = (2));

} else {
var statearr_50557_52690 = state_50542__$1;
(statearr_50557_52690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (24))){
var inst_50497 = (state_50542[(9)]);
var inst_50511 = (state_50542[(10)]);
var inst_50485 = (state_50542[(11)]);
var inst_50511__$1 = (inst_50485.cljs$core$IFn$_invoke$arity$1 ? inst_50485.cljs$core$IFn$_invoke$arity$1(inst_50497) : inst_50485.call(null,inst_50497));
var state_50542__$1 = (function (){var statearr_50558 = state_50542;
(statearr_50558[(10)] = inst_50511__$1);

return statearr_50558;
})();
if(cljs.core.truth_(inst_50511__$1)){
var statearr_50559_52694 = state_50542__$1;
(statearr_50559_52694[(1)] = (29));

} else {
var statearr_50562_52695 = state_50542__$1;
(statearr_50562_52695[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (4))){
var inst_50449 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50449)){
var statearr_50563_52698 = state_50542__$1;
(statearr_50563_52698[(1)] = (8));

} else {
var statearr_50564_52699 = state_50542__$1;
(statearr_50564_52699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (15))){
var inst_50479 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50479)){
var statearr_50565_52701 = state_50542__$1;
(statearr_50565_52701[(1)] = (19));

} else {
var statearr_50566_52702 = state_50542__$1;
(statearr_50566_52702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (21))){
var inst_50484 = (state_50542[(12)]);
var inst_50484__$1 = (state_50542[(2)]);
var inst_50485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50542__$1 = (function (){var statearr_50571 = state_50542;
(statearr_50571[(11)] = inst_50485);

(statearr_50571[(12)] = inst_50484__$1);

(statearr_50571[(13)] = inst_50486);

return statearr_50571;
})();
return cljs.core.async.ioc_alts_BANG_(state_50542__$1,(22),inst_50487);
} else {
if((state_val_50543 === (31))){
var inst_50519 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50519)){
var statearr_50572_52709 = state_50542__$1;
(statearr_50572_52709[(1)] = (32));

} else {
var statearr_50573_52710 = state_50542__$1;
(statearr_50573_52710[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (32))){
var inst_50496 = (state_50542[(14)]);
var state_50542__$1 = state_50542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50542__$1,(35),out,inst_50496);
} else {
if((state_val_50543 === (33))){
var inst_50484 = (state_50542[(12)]);
var inst_50461 = inst_50484;
var state_50542__$1 = (function (){var statearr_50576 = state_50542;
(statearr_50576[(7)] = inst_50461);

return statearr_50576;
})();
var statearr_50581_52718 = state_50542__$1;
(statearr_50581_52718[(2)] = null);

(statearr_50581_52718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (13))){
var inst_50461 = (state_50542[(7)]);
var inst_50468 = inst_50461.cljs$lang$protocol_mask$partition0$;
var inst_50469 = (inst_50468 & (64));
var inst_50470 = inst_50461.cljs$core$ISeq$;
var inst_50471 = (cljs.core.PROTOCOL_SENTINEL === inst_50470);
var inst_50472 = ((inst_50469) || (inst_50471));
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50472)){
var statearr_50582_52720 = state_50542__$1;
(statearr_50582_52720[(1)] = (16));

} else {
var statearr_50583_52721 = state_50542__$1;
(statearr_50583_52721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (22))){
var inst_50497 = (state_50542[(9)]);
var inst_50496 = (state_50542[(14)]);
var inst_50495 = (state_50542[(2)]);
var inst_50496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50495,(0),null);
var inst_50497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50495,(1),null);
var inst_50498 = (inst_50496__$1 == null);
var inst_50499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50497__$1,change);
var inst_50500 = ((inst_50498) || (inst_50499));
var state_50542__$1 = (function (){var statearr_50586 = state_50542;
(statearr_50586[(9)] = inst_50497__$1);

(statearr_50586[(14)] = inst_50496__$1);

return statearr_50586;
})();
if(cljs.core.truth_(inst_50500)){
var statearr_50587_52724 = state_50542__$1;
(statearr_50587_52724[(1)] = (23));

} else {
var statearr_50588_52725 = state_50542__$1;
(statearr_50588_52725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (36))){
var inst_50484 = (state_50542[(12)]);
var inst_50461 = inst_50484;
var state_50542__$1 = (function (){var statearr_50589 = state_50542;
(statearr_50589[(7)] = inst_50461);

return statearr_50589;
})();
var statearr_50590_52727 = state_50542__$1;
(statearr_50590_52727[(2)] = null);

(statearr_50590_52727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (29))){
var inst_50511 = (state_50542[(10)]);
var state_50542__$1 = state_50542;
var statearr_50591_52729 = state_50542__$1;
(statearr_50591_52729[(2)] = inst_50511);

(statearr_50591_52729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (6))){
var state_50542__$1 = state_50542;
var statearr_50596_52731 = state_50542__$1;
(statearr_50596_52731[(2)] = false);

(statearr_50596_52731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (28))){
var inst_50507 = (state_50542[(2)]);
var inst_50508 = calc_state();
var inst_50461 = inst_50508;
var state_50542__$1 = (function (){var statearr_50597 = state_50542;
(statearr_50597[(7)] = inst_50461);

(statearr_50597[(15)] = inst_50507);

return statearr_50597;
})();
var statearr_50598_52733 = state_50542__$1;
(statearr_50598_52733[(2)] = null);

(statearr_50598_52733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (25))){
var inst_50533 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
var statearr_50600_52736 = state_50542__$1;
(statearr_50600_52736[(2)] = inst_50533);

(statearr_50600_52736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (34))){
var inst_50531 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
var statearr_50601_52740 = state_50542__$1;
(statearr_50601_52740[(2)] = inst_50531);

(statearr_50601_52740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (17))){
var state_50542__$1 = state_50542;
var statearr_50602_52741 = state_50542__$1;
(statearr_50602_52741[(2)] = false);

(statearr_50602_52741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (3))){
var state_50542__$1 = state_50542;
var statearr_50603_52742 = state_50542__$1;
(statearr_50603_52742[(2)] = false);

(statearr_50603_52742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (12))){
var inst_50535 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50542__$1,inst_50535);
} else {
if((state_val_50543 === (2))){
var inst_50430 = (state_50542[(8)]);
var inst_50438 = inst_50430.cljs$lang$protocol_mask$partition0$;
var inst_50439 = (inst_50438 & (64));
var inst_50440 = inst_50430.cljs$core$ISeq$;
var inst_50441 = (cljs.core.PROTOCOL_SENTINEL === inst_50440);
var inst_50442 = ((inst_50439) || (inst_50441));
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50442)){
var statearr_50609_52743 = state_50542__$1;
(statearr_50609_52743[(1)] = (5));

} else {
var statearr_50610_52744 = state_50542__$1;
(statearr_50610_52744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (23))){
var inst_50496 = (state_50542[(14)]);
var inst_50502 = (inst_50496 == null);
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50502)){
var statearr_50611_52746 = state_50542__$1;
(statearr_50611_52746[(1)] = (26));

} else {
var statearr_50612_52749 = state_50542__$1;
(statearr_50612_52749[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (35))){
var inst_50522 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
if(cljs.core.truth_(inst_50522)){
var statearr_50614_52751 = state_50542__$1;
(statearr_50614_52751[(1)] = (36));

} else {
var statearr_50615_52752 = state_50542__$1;
(statearr_50615_52752[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (19))){
var inst_50461 = (state_50542[(7)]);
var inst_50481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50461);
var state_50542__$1 = state_50542;
var statearr_50618_52755 = state_50542__$1;
(statearr_50618_52755[(2)] = inst_50481);

(statearr_50618_52755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (11))){
var inst_50461 = (state_50542[(7)]);
var inst_50465 = (inst_50461 == null);
var inst_50466 = cljs.core.not(inst_50465);
var state_50542__$1 = state_50542;
if(inst_50466){
var statearr_50619_52758 = state_50542__$1;
(statearr_50619_52758[(1)] = (13));

} else {
var statearr_50620_52759 = state_50542__$1;
(statearr_50620_52759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (9))){
var inst_50430 = (state_50542[(8)]);
var state_50542__$1 = state_50542;
var statearr_50621_52760 = state_50542__$1;
(statearr_50621_52760[(2)] = inst_50430);

(statearr_50621_52760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (5))){
var state_50542__$1 = state_50542;
var statearr_50622_52762 = state_50542__$1;
(statearr_50622_52762[(2)] = true);

(statearr_50622_52762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (14))){
var state_50542__$1 = state_50542;
var statearr_50623_52764 = state_50542__$1;
(statearr_50623_52764[(2)] = false);

(statearr_50623_52764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (26))){
var inst_50497 = (state_50542[(9)]);
var inst_50504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50497);
var state_50542__$1 = state_50542;
var statearr_50624_52768 = state_50542__$1;
(statearr_50624_52768[(2)] = inst_50504);

(statearr_50624_52768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (16))){
var state_50542__$1 = state_50542;
var statearr_50625_52769 = state_50542__$1;
(statearr_50625_52769[(2)] = true);

(statearr_50625_52769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (38))){
var inst_50527 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
var statearr_50626_52771 = state_50542__$1;
(statearr_50626_52771[(2)] = inst_50527);

(statearr_50626_52771[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (30))){
var inst_50497 = (state_50542[(9)]);
var inst_50485 = (state_50542[(11)]);
var inst_50486 = (state_50542[(13)]);
var inst_50514 = cljs.core.empty_QMARK_(inst_50485);
var inst_50515 = (inst_50486.cljs$core$IFn$_invoke$arity$1 ? inst_50486.cljs$core$IFn$_invoke$arity$1(inst_50497) : inst_50486.call(null,inst_50497));
var inst_50516 = cljs.core.not(inst_50515);
var inst_50517 = ((inst_50514) && (inst_50516));
var state_50542__$1 = state_50542;
var statearr_50631_52772 = state_50542__$1;
(statearr_50631_52772[(2)] = inst_50517);

(statearr_50631_52772[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (10))){
var inst_50430 = (state_50542[(8)]);
var inst_50455 = (state_50542[(2)]);
var inst_50457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50455,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50455,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50461 = inst_50430;
var state_50542__$1 = (function (){var statearr_50632 = state_50542;
(statearr_50632[(16)] = inst_50460);

(statearr_50632[(17)] = inst_50458);

(statearr_50632[(7)] = inst_50461);

(statearr_50632[(18)] = inst_50457);

return statearr_50632;
})();
var statearr_50634_52776 = state_50542__$1;
(statearr_50634_52776[(2)] = null);

(statearr_50634_52776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (18))){
var inst_50476 = (state_50542[(2)]);
var state_50542__$1 = state_50542;
var statearr_50638_52777 = state_50542__$1;
(statearr_50638_52777[(2)] = inst_50476);

(statearr_50638_52777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (37))){
var state_50542__$1 = state_50542;
var statearr_50639_52779 = state_50542__$1;
(statearr_50639_52779[(2)] = null);

(statearr_50639_52779[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50543 === (8))){
var inst_50430 = (state_50542[(8)]);
var inst_50452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50430);
var state_50542__$1 = state_50542;
var statearr_50640_52781 = state_50542__$1;
(statearr_50640_52781[(2)] = inst_50452);

(statearr_50640_52781[(1)] = (10));


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
});})(c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49057__auto__,c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49058__auto__ = null;
var cljs$core$async$mix_$_state_machine__49058__auto____0 = (function (){
var statearr_50644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50644[(0)] = cljs$core$async$mix_$_state_machine__49058__auto__);

(statearr_50644[(1)] = (1));

return statearr_50644;
});
var cljs$core$async$mix_$_state_machine__49058__auto____1 = (function (state_50542){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_50542);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e50645){var ex__49061__auto__ = e50645;
var statearr_50646_52783 = state_50542;
(statearr_50646_52783[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_50542[(4)]))){
var statearr_50647_52785 = state_50542;
(statearr_50647_52785[(1)] = cljs.core.first((state_50542[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52790 = state_50542;
state_50542 = G__52790;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49058__auto__ = function(state_50542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49058__auto____1.call(this,state_50542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49058__auto____0;
cljs$core$async$mix_$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49058__auto____1;
return cljs$core$async$mix_$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__49234__auto__ = (function (){var statearr_50652 = f__49233__auto__();
(statearr_50652[(6)] = c__49232__auto___52680);

return statearr_50652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__50663 = arguments.length;
switch (G__50663) {
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
var G__50671 = arguments.length;
switch (G__50671) {
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
return (function (p1__50669_SHARP_){
if(cljs.core.truth_((p1__50669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50669_SHARP_.call(null,topic)))){
return p1__50669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50674 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50675){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50675 = meta50675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50676,meta50675__$1){
var self__ = this;
var _50676__$1 = this;
return (new cljs.core.async.t_cljs$core$async50674(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50675__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50676){
var self__ = this;
var _50676__$1 = this;
return self__.meta50675;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50675","meta50675",-1729578578,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50674";

cljs.core.async.t_cljs$core$async50674.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50674");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50674.
 */
cljs.core.async.__GT_t_cljs$core$async50674 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50675){
return (new cljs.core.async.t_cljs$core$async50674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50675));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50674(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49232__auto___52837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52837,mults,ensure_mult,p){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52837,mults,ensure_mult,p){
return (function (state_50779){
var state_val_50780 = (state_50779[(1)]);
if((state_val_50780 === (7))){
var inst_50775 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50783_52842 = state_50779__$1;
(statearr_50783_52842[(2)] = inst_50775);

(statearr_50783_52842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (20))){
var state_50779__$1 = state_50779;
var statearr_50784_52843 = state_50779__$1;
(statearr_50784_52843[(2)] = null);

(statearr_50784_52843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (1))){
var state_50779__$1 = state_50779;
var statearr_50785_52844 = state_50779__$1;
(statearr_50785_52844[(2)] = null);

(statearr_50785_52844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (24))){
var inst_50752 = (state_50779[(7)]);
var inst_50767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50752);
var state_50779__$1 = state_50779;
var statearr_50786_52846 = state_50779__$1;
(statearr_50786_52846[(2)] = inst_50767);

(statearr_50786_52846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (4))){
var inst_50692 = (state_50779[(8)]);
var inst_50692__$1 = (state_50779[(2)]);
var inst_50693 = (inst_50692__$1 == null);
var state_50779__$1 = (function (){var statearr_50793 = state_50779;
(statearr_50793[(8)] = inst_50692__$1);

return statearr_50793;
})();
if(cljs.core.truth_(inst_50693)){
var statearr_50794_52849 = state_50779__$1;
(statearr_50794_52849[(1)] = (5));

} else {
var statearr_50795_52852 = state_50779__$1;
(statearr_50795_52852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (15))){
var inst_50746 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50796_52853 = state_50779__$1;
(statearr_50796_52853[(2)] = inst_50746);

(statearr_50796_52853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (21))){
var inst_50772 = (state_50779[(2)]);
var state_50779__$1 = (function (){var statearr_50797 = state_50779;
(statearr_50797[(9)] = inst_50772);

return statearr_50797;
})();
var statearr_50798_52854 = state_50779__$1;
(statearr_50798_52854[(2)] = null);

(statearr_50798_52854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (13))){
var inst_50724 = (state_50779[(10)]);
var inst_50726 = cljs.core.chunked_seq_QMARK_(inst_50724);
var state_50779__$1 = state_50779;
if(inst_50726){
var statearr_50799_52855 = state_50779__$1;
(statearr_50799_52855[(1)] = (16));

} else {
var statearr_50800_52856 = state_50779__$1;
(statearr_50800_52856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (22))){
var inst_50764 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
if(cljs.core.truth_(inst_50764)){
var statearr_50801_52857 = state_50779__$1;
(statearr_50801_52857[(1)] = (23));

} else {
var statearr_50802_52858 = state_50779__$1;
(statearr_50802_52858[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (6))){
var inst_50752 = (state_50779[(7)]);
var inst_50754 = (state_50779[(11)]);
var inst_50692 = (state_50779[(8)]);
var inst_50752__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50692) : topic_fn.call(null,inst_50692));
var inst_50753 = cljs.core.deref(mults);
var inst_50754__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50753,inst_50752__$1);
var state_50779__$1 = (function (){var statearr_50803 = state_50779;
(statearr_50803[(7)] = inst_50752__$1);

(statearr_50803[(11)] = inst_50754__$1);

return statearr_50803;
})();
if(cljs.core.truth_(inst_50754__$1)){
var statearr_50804_52859 = state_50779__$1;
(statearr_50804_52859[(1)] = (19));

} else {
var statearr_50805_52860 = state_50779__$1;
(statearr_50805_52860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (25))){
var inst_50769 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50806_52862 = state_50779__$1;
(statearr_50806_52862[(2)] = inst_50769);

(statearr_50806_52862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (17))){
var inst_50724 = (state_50779[(10)]);
var inst_50733 = cljs.core.first(inst_50724);
var inst_50734 = cljs.core.async.muxch_STAR_(inst_50733);
var inst_50735 = cljs.core.async.close_BANG_(inst_50734);
var inst_50740 = cljs.core.next(inst_50724);
var inst_50704 = inst_50740;
var inst_50705 = null;
var inst_50706 = (0);
var inst_50707 = (0);
var state_50779__$1 = (function (){var statearr_50809 = state_50779;
(statearr_50809[(12)] = inst_50735);

(statearr_50809[(13)] = inst_50707);

(statearr_50809[(14)] = inst_50704);

(statearr_50809[(15)] = inst_50706);

(statearr_50809[(16)] = inst_50705);

return statearr_50809;
})();
var statearr_50810_52870 = state_50779__$1;
(statearr_50810_52870[(2)] = null);

(statearr_50810_52870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (3))){
var inst_50777 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50779__$1,inst_50777);
} else {
if((state_val_50780 === (12))){
var inst_50748 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50811_52874 = state_50779__$1;
(statearr_50811_52874[(2)] = inst_50748);

(statearr_50811_52874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (2))){
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50779__$1,(4),ch);
} else {
if((state_val_50780 === (23))){
var state_50779__$1 = state_50779;
var statearr_50812_52876 = state_50779__$1;
(statearr_50812_52876[(2)] = null);

(statearr_50812_52876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (19))){
var inst_50754 = (state_50779[(11)]);
var inst_50692 = (state_50779[(8)]);
var inst_50762 = cljs.core.async.muxch_STAR_(inst_50754);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50779__$1,(22),inst_50762,inst_50692);
} else {
if((state_val_50780 === (11))){
var inst_50704 = (state_50779[(14)]);
var inst_50724 = (state_50779[(10)]);
var inst_50724__$1 = cljs.core.seq(inst_50704);
var state_50779__$1 = (function (){var statearr_50817 = state_50779;
(statearr_50817[(10)] = inst_50724__$1);

return statearr_50817;
})();
if(inst_50724__$1){
var statearr_50818_52879 = state_50779__$1;
(statearr_50818_52879[(1)] = (13));

} else {
var statearr_50819_52880 = state_50779__$1;
(statearr_50819_52880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (9))){
var inst_50750 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50820_52881 = state_50779__$1;
(statearr_50820_52881[(2)] = inst_50750);

(statearr_50820_52881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (5))){
var inst_50701 = cljs.core.deref(mults);
var inst_50702 = cljs.core.vals(inst_50701);
var inst_50703 = cljs.core.seq(inst_50702);
var inst_50704 = inst_50703;
var inst_50705 = null;
var inst_50706 = (0);
var inst_50707 = (0);
var state_50779__$1 = (function (){var statearr_50821 = state_50779;
(statearr_50821[(13)] = inst_50707);

(statearr_50821[(14)] = inst_50704);

(statearr_50821[(15)] = inst_50706);

(statearr_50821[(16)] = inst_50705);

return statearr_50821;
})();
var statearr_50822_52884 = state_50779__$1;
(statearr_50822_52884[(2)] = null);

(statearr_50822_52884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (14))){
var state_50779__$1 = state_50779;
var statearr_50826_52886 = state_50779__$1;
(statearr_50826_52886[(2)] = null);

(statearr_50826_52886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (16))){
var inst_50724 = (state_50779[(10)]);
var inst_50728 = cljs.core.chunk_first(inst_50724);
var inst_50729 = cljs.core.chunk_rest(inst_50724);
var inst_50730 = cljs.core.count(inst_50728);
var inst_50704 = inst_50729;
var inst_50705 = inst_50728;
var inst_50706 = inst_50730;
var inst_50707 = (0);
var state_50779__$1 = (function (){var statearr_50827 = state_50779;
(statearr_50827[(13)] = inst_50707);

(statearr_50827[(14)] = inst_50704);

(statearr_50827[(15)] = inst_50706);

(statearr_50827[(16)] = inst_50705);

return statearr_50827;
})();
var statearr_50828_52891 = state_50779__$1;
(statearr_50828_52891[(2)] = null);

(statearr_50828_52891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (10))){
var inst_50707 = (state_50779[(13)]);
var inst_50704 = (state_50779[(14)]);
var inst_50706 = (state_50779[(15)]);
var inst_50705 = (state_50779[(16)]);
var inst_50712 = cljs.core._nth(inst_50705,inst_50707);
var inst_50714 = cljs.core.async.muxch_STAR_(inst_50712);
var inst_50715 = cljs.core.async.close_BANG_(inst_50714);
var inst_50719 = (inst_50707 + (1));
var tmp50823 = inst_50704;
var tmp50824 = inst_50706;
var tmp50825 = inst_50705;
var inst_50704__$1 = tmp50823;
var inst_50705__$1 = tmp50825;
var inst_50706__$1 = tmp50824;
var inst_50707__$1 = inst_50719;
var state_50779__$1 = (function (){var statearr_50833 = state_50779;
(statearr_50833[(17)] = inst_50715);

(statearr_50833[(13)] = inst_50707__$1);

(statearr_50833[(14)] = inst_50704__$1);

(statearr_50833[(15)] = inst_50706__$1);

(statearr_50833[(16)] = inst_50705__$1);

return statearr_50833;
})();
var statearr_50834_52892 = state_50779__$1;
(statearr_50834_52892[(2)] = null);

(statearr_50834_52892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (18))){
var inst_50743 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50835_52894 = state_50779__$1;
(statearr_50835_52894[(2)] = inst_50743);

(statearr_50835_52894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (8))){
var inst_50707 = (state_50779[(13)]);
var inst_50706 = (state_50779[(15)]);
var inst_50709 = (inst_50707 < inst_50706);
var inst_50710 = inst_50709;
var state_50779__$1 = state_50779;
if(cljs.core.truth_(inst_50710)){
var statearr_50839_52899 = state_50779__$1;
(statearr_50839_52899[(1)] = (10));

} else {
var statearr_50840_52901 = state_50779__$1;
(statearr_50840_52901[(1)] = (11));

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
});})(c__49232__auto___52837,mults,ensure_mult,p))
;
return ((function (switch__49057__auto__,c__49232__auto___52837,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_50841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50841[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_50841[(1)] = (1));

return statearr_50841;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_50779){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_50779);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e50842){var ex__49061__auto__ = e50842;
var statearr_50843_52906 = state_50779;
(statearr_50843_52906[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_50779[(4)]))){
var statearr_50844_52908 = state_50779;
(statearr_50844_52908[(1)] = cljs.core.first((state_50779[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52909 = state_50779;
state_50779 = G__52909;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_50779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_50779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52837,mults,ensure_mult,p))
})();
var state__49234__auto__ = (function (){var statearr_50846 = f__49233__auto__();
(statearr_50846[(6)] = c__49232__auto___52837);

return statearr_50846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52837,mults,ensure_mult,p))
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
var G__50852 = arguments.length;
switch (G__50852) {
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
var G__50859 = arguments.length;
switch (G__50859) {
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
return cljs.core.async.unsub_all_STAR_(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__50862 = arguments.length;
switch (G__50862) {
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
var c__49232__auto___52931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50923){
var state_val_50924 = (state_50923[(1)]);
if((state_val_50924 === (7))){
var state_50923__$1 = state_50923;
var statearr_50932_52932 = state_50923__$1;
(statearr_50932_52932[(2)] = null);

(statearr_50932_52932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (1))){
var state_50923__$1 = state_50923;
var statearr_50933_52936 = state_50923__$1;
(statearr_50933_52936[(2)] = null);

(statearr_50933_52936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (4))){
var inst_50880 = (state_50923[(7)]);
var inst_50881 = (state_50923[(8)]);
var inst_50883 = (inst_50881 < inst_50880);
var state_50923__$1 = state_50923;
if(cljs.core.truth_(inst_50883)){
var statearr_50934_52940 = state_50923__$1;
(statearr_50934_52940[(1)] = (6));

} else {
var statearr_50935_52941 = state_50923__$1;
(statearr_50935_52941[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (15))){
var inst_50909 = (state_50923[(9)]);
var inst_50914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50909);
var state_50923__$1 = state_50923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50923__$1,(17),out,inst_50914);
} else {
if((state_val_50924 === (13))){
var inst_50909 = (state_50923[(9)]);
var inst_50909__$1 = (state_50923[(2)]);
var inst_50910 = cljs.core.some(cljs.core.nil_QMARK_,inst_50909__$1);
var state_50923__$1 = (function (){var statearr_50938 = state_50923;
(statearr_50938[(9)] = inst_50909__$1);

return statearr_50938;
})();
if(cljs.core.truth_(inst_50910)){
var statearr_50939_52953 = state_50923__$1;
(statearr_50939_52953[(1)] = (14));

} else {
var statearr_50940_52954 = state_50923__$1;
(statearr_50940_52954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (6))){
var state_50923__$1 = state_50923;
var statearr_50941_52955 = state_50923__$1;
(statearr_50941_52955[(2)] = null);

(statearr_50941_52955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (17))){
var inst_50916 = (state_50923[(2)]);
var state_50923__$1 = (function (){var statearr_50943 = state_50923;
(statearr_50943[(10)] = inst_50916);

return statearr_50943;
})();
var statearr_50944_52957 = state_50923__$1;
(statearr_50944_52957[(2)] = null);

(statearr_50944_52957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (3))){
var inst_50921 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50923__$1,inst_50921);
} else {
if((state_val_50924 === (12))){
var _ = (function (){var statearr_50948 = state_50923;
(statearr_50948[(4)] = cljs.core.rest((state_50923[(4)])));

return statearr_50948;
})();
var state_50923__$1 = state_50923;
var ex50942 = (state_50923__$1[(2)]);
var statearr_50949_52962 = state_50923__$1;
(statearr_50949_52962[(5)] = ex50942);


if((ex50942 instanceof Object)){
var statearr_50950_52964 = state_50923__$1;
(statearr_50950_52964[(1)] = (11));

(statearr_50950_52964[(5)] = null);

} else {
throw ex50942;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (2))){
var inst_50876 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50880 = cnt;
var inst_50881 = (0);
var state_50923__$1 = (function (){var statearr_50951 = state_50923;
(statearr_50951[(11)] = inst_50876);

(statearr_50951[(7)] = inst_50880);

(statearr_50951[(8)] = inst_50881);

return statearr_50951;
})();
var statearr_50952_52973 = state_50923__$1;
(statearr_50952_52973[(2)] = null);

(statearr_50952_52973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (11))){
var inst_50885 = (state_50923[(2)]);
var inst_50887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50923__$1 = (function (){var statearr_50953 = state_50923;
(statearr_50953[(12)] = inst_50885);

return statearr_50953;
})();
var statearr_50954_52977 = state_50923__$1;
(statearr_50954_52977[(2)] = inst_50887);

(statearr_50954_52977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (9))){
var inst_50881 = (state_50923[(8)]);
var _ = (function (){var statearr_50955 = state_50923;
(statearr_50955[(4)] = cljs.core.cons((12),(state_50923[(4)])));

return statearr_50955;
})();
var inst_50895 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50881) : chs__$1.call(null,inst_50881));
var inst_50896 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50881) : done.call(null,inst_50881));
var inst_50897 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50895,inst_50896);
var ___$1 = (function (){var statearr_50956 = state_50923;
(statearr_50956[(4)] = cljs.core.rest((state_50923[(4)])));

return statearr_50956;
})();
var state_50923__$1 = state_50923;
var statearr_50959_52982 = state_50923__$1;
(statearr_50959_52982[(2)] = inst_50897);

(statearr_50959_52982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (5))){
var inst_50907 = (state_50923[(2)]);
var state_50923__$1 = (function (){var statearr_50960 = state_50923;
(statearr_50960[(13)] = inst_50907);

return statearr_50960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50923__$1,(13),dchan);
} else {
if((state_val_50924 === (14))){
var inst_50912 = cljs.core.async.close_BANG_(out);
var state_50923__$1 = state_50923;
var statearr_50962_52985 = state_50923__$1;
(statearr_50962_52985[(2)] = inst_50912);

(statearr_50962_52985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (16))){
var inst_50919 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
var statearr_50963_52989 = state_50923__$1;
(statearr_50963_52989[(2)] = inst_50919);

(statearr_50963_52989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (10))){
var inst_50881 = (state_50923[(8)]);
var inst_50900 = (state_50923[(2)]);
var inst_50901 = (inst_50881 + (1));
var inst_50881__$1 = inst_50901;
var state_50923__$1 = (function (){var statearr_50964 = state_50923;
(statearr_50964[(8)] = inst_50881__$1);

(statearr_50964[(14)] = inst_50900);

return statearr_50964;
})();
var statearr_50968_52992 = state_50923__$1;
(statearr_50968_52992[(2)] = null);

(statearr_50968_52992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (8))){
var inst_50905 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
var statearr_50969_52993 = state_50923__$1;
(statearr_50969_52993[(2)] = inst_50905);

(statearr_50969_52993[(1)] = (5));


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
});})(c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49057__auto__,c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_50970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50970[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_50970[(1)] = (1));

return statearr_50970;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_50923){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_50923);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e50971){var ex__49061__auto__ = e50971;
var statearr_50972_53003 = state_50923;
(statearr_50972_53003[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_50923[(4)]))){
var statearr_50973_53004 = state_50923;
(statearr_50973_53004[(1)] = cljs.core.first((state_50923[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53005 = state_50923;
state_50923 = G__53005;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_50923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_50923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__49234__auto__ = (function (){var statearr_50974 = f__49233__auto__();
(statearr_50974[(6)] = c__49232__auto___52931);

return statearr_50974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___52931,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__50977 = arguments.length;
switch (G__50977) {
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
var c__49232__auto___53008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53008,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53008,out){
return (function (state_51010){
var state_val_51011 = (state_51010[(1)]);
if((state_val_51011 === (7))){
var inst_50990 = (state_51010[(7)]);
var inst_50989 = (state_51010[(8)]);
var inst_50989__$1 = (state_51010[(2)]);
var inst_50990__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50989__$1,(0),null);
var inst_50991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50989__$1,(1),null);
var inst_50992 = (inst_50990__$1 == null);
var state_51010__$1 = (function (){var statearr_51018 = state_51010;
(statearr_51018[(7)] = inst_50990__$1);

(statearr_51018[(9)] = inst_50991);

(statearr_51018[(8)] = inst_50989__$1);

return statearr_51018;
})();
if(cljs.core.truth_(inst_50992)){
var statearr_51019_53013 = state_51010__$1;
(statearr_51019_53013[(1)] = (8));

} else {
var statearr_51020_53014 = state_51010__$1;
(statearr_51020_53014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (1))){
var inst_50978 = cljs.core.vec(chs);
var inst_50979 = inst_50978;
var state_51010__$1 = (function (){var statearr_51021 = state_51010;
(statearr_51021[(10)] = inst_50979);

return statearr_51021;
})();
var statearr_51022_53018 = state_51010__$1;
(statearr_51022_53018[(2)] = null);

(statearr_51022_53018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (4))){
var inst_50979 = (state_51010[(10)]);
var state_51010__$1 = state_51010;
return cljs.core.async.ioc_alts_BANG_(state_51010__$1,(7),inst_50979);
} else {
if((state_val_51011 === (6))){
var inst_51006 = (state_51010[(2)]);
var state_51010__$1 = state_51010;
var statearr_51023_53025 = state_51010__$1;
(statearr_51023_53025[(2)] = inst_51006);

(statearr_51023_53025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (3))){
var inst_51008 = (state_51010[(2)]);
var state_51010__$1 = state_51010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51010__$1,inst_51008);
} else {
if((state_val_51011 === (2))){
var inst_50979 = (state_51010[(10)]);
var inst_50981 = cljs.core.count(inst_50979);
var inst_50982 = (inst_50981 > (0));
var state_51010__$1 = state_51010;
if(cljs.core.truth_(inst_50982)){
var statearr_51026_53029 = state_51010__$1;
(statearr_51026_53029[(1)] = (4));

} else {
var statearr_51028_53030 = state_51010__$1;
(statearr_51028_53030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (11))){
var inst_50979 = (state_51010[(10)]);
var inst_50999 = (state_51010[(2)]);
var tmp51024 = inst_50979;
var inst_50979__$1 = tmp51024;
var state_51010__$1 = (function (){var statearr_51029 = state_51010;
(statearr_51029[(10)] = inst_50979__$1);

(statearr_51029[(11)] = inst_50999);

return statearr_51029;
})();
var statearr_51030_53034 = state_51010__$1;
(statearr_51030_53034[(2)] = null);

(statearr_51030_53034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (9))){
var inst_50990 = (state_51010[(7)]);
var state_51010__$1 = state_51010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51010__$1,(11),out,inst_50990);
} else {
if((state_val_51011 === (5))){
var inst_51004 = cljs.core.async.close_BANG_(out);
var state_51010__$1 = state_51010;
var statearr_51037_53036 = state_51010__$1;
(statearr_51037_53036[(2)] = inst_51004);

(statearr_51037_53036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (10))){
var inst_51002 = (state_51010[(2)]);
var state_51010__$1 = state_51010;
var statearr_51038_53039 = state_51010__$1;
(statearr_51038_53039[(2)] = inst_51002);

(statearr_51038_53039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51011 === (8))){
var inst_50979 = (state_51010[(10)]);
var inst_50990 = (state_51010[(7)]);
var inst_50991 = (state_51010[(9)]);
var inst_50989 = (state_51010[(8)]);
var inst_50994 = (function (){var cs = inst_50979;
var vec__50984 = inst_50989;
var v = inst_50990;
var c = inst_50991;
return ((function (cs,vec__50984,v,c,inst_50979,inst_50990,inst_50991,inst_50989,state_val_51011,c__49232__auto___53008,out){
return (function (p1__50975_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50975_SHARP_);
});
;})(cs,vec__50984,v,c,inst_50979,inst_50990,inst_50991,inst_50989,state_val_51011,c__49232__auto___53008,out))
})();
var inst_50995 = cljs.core.filterv(inst_50994,inst_50979);
var inst_50979__$1 = inst_50995;
var state_51010__$1 = (function (){var statearr_51040 = state_51010;
(statearr_51040[(10)] = inst_50979__$1);

return statearr_51040;
})();
var statearr_51041_53053 = state_51010__$1;
(statearr_51041_53053[(2)] = null);

(statearr_51041_53053[(1)] = (2));


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
});})(c__49232__auto___53008,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53008,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51046[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51046[(1)] = (1));

return statearr_51046;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51010){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51010);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51047){var ex__49061__auto__ = e51047;
var statearr_51048_53059 = state_51010;
(statearr_51048_53059[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51010[(4)]))){
var statearr_51049_53062 = state_51010;
(statearr_51049_53062[(1)] = cljs.core.first((state_51010[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53066 = state_51010;
state_51010 = G__53066;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53008,out))
})();
var state__49234__auto__ = (function (){var statearr_51056 = f__49233__auto__();
(statearr_51056[(6)] = c__49232__auto___53008);

return statearr_51056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53008,out))
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
var G__51059 = arguments.length;
switch (G__51059) {
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
var c__49232__auto___53076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53076,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53076,out){
return (function (state_51093){
var state_val_51094 = (state_51093[(1)]);
if((state_val_51094 === (7))){
var inst_51072 = (state_51093[(7)]);
var inst_51072__$1 = (state_51093[(2)]);
var inst_51073 = (inst_51072__$1 == null);
var inst_51074 = cljs.core.not(inst_51073);
var state_51093__$1 = (function (){var statearr_51104 = state_51093;
(statearr_51104[(7)] = inst_51072__$1);

return statearr_51104;
})();
if(inst_51074){
var statearr_51105_53080 = state_51093__$1;
(statearr_51105_53080[(1)] = (8));

} else {
var statearr_51106_53081 = state_51093__$1;
(statearr_51106_53081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (1))){
var inst_51067 = (0);
var state_51093__$1 = (function (){var statearr_51107 = state_51093;
(statearr_51107[(8)] = inst_51067);

return statearr_51107;
})();
var statearr_51108_53088 = state_51093__$1;
(statearr_51108_53088[(2)] = null);

(statearr_51108_53088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (4))){
var state_51093__$1 = state_51093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51093__$1,(7),ch);
} else {
if((state_val_51094 === (6))){
var inst_51086 = (state_51093[(2)]);
var state_51093__$1 = state_51093;
var statearr_51110_53094 = state_51093__$1;
(statearr_51110_53094[(2)] = inst_51086);

(statearr_51110_53094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (3))){
var inst_51088 = (state_51093[(2)]);
var inst_51089 = cljs.core.async.close_BANG_(out);
var state_51093__$1 = (function (){var statearr_51111 = state_51093;
(statearr_51111[(9)] = inst_51088);

return statearr_51111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51093__$1,inst_51089);
} else {
if((state_val_51094 === (2))){
var inst_51067 = (state_51093[(8)]);
var inst_51069 = (inst_51067 < n);
var state_51093__$1 = state_51093;
if(cljs.core.truth_(inst_51069)){
var statearr_51112_53100 = state_51093__$1;
(statearr_51112_53100[(1)] = (4));

} else {
var statearr_51113_53102 = state_51093__$1;
(statearr_51113_53102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (11))){
var inst_51067 = (state_51093[(8)]);
var inst_51077 = (state_51093[(2)]);
var inst_51078 = (inst_51067 + (1));
var inst_51067__$1 = inst_51078;
var state_51093__$1 = (function (){var statearr_51115 = state_51093;
(statearr_51115[(10)] = inst_51077);

(statearr_51115[(8)] = inst_51067__$1);

return statearr_51115;
})();
var statearr_51116_53105 = state_51093__$1;
(statearr_51116_53105[(2)] = null);

(statearr_51116_53105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (9))){
var state_51093__$1 = state_51093;
var statearr_51118_53108 = state_51093__$1;
(statearr_51118_53108[(2)] = null);

(statearr_51118_53108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (5))){
var state_51093__$1 = state_51093;
var statearr_51121_53113 = state_51093__$1;
(statearr_51121_53113[(2)] = null);

(statearr_51121_53113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (10))){
var inst_51082 = (state_51093[(2)]);
var state_51093__$1 = state_51093;
var statearr_51122_53115 = state_51093__$1;
(statearr_51122_53115[(2)] = inst_51082);

(statearr_51122_53115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51094 === (8))){
var inst_51072 = (state_51093[(7)]);
var state_51093__$1 = state_51093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51093__$1,(11),out,inst_51072);
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
});})(c__49232__auto___53076,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53076,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51126[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51126[(1)] = (1));

return statearr_51126;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51093){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51093);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51129){var ex__49061__auto__ = e51129;
var statearr_51130_53122 = state_51093;
(statearr_51130_53122[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51093[(4)]))){
var statearr_51132_53125 = state_51093;
(statearr_51132_53125[(1)] = cljs.core.first((state_51093[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53128 = state_51093;
state_51093 = G__53128;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53076,out))
})();
var state__49234__auto__ = (function (){var statearr_51134 = f__49233__auto__();
(statearr_51134[(6)] = c__49232__auto___53076);

return statearr_51134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53076,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51136 = (function (f,ch,meta51137){
this.f = f;
this.ch = ch;
this.meta51137 = meta51137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51138,meta51137__$1){
var self__ = this;
var _51138__$1 = this;
return (new cljs.core.async.t_cljs$core$async51136(self__.f,self__.ch,meta51137__$1));
});

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51138){
var self__ = this;
var _51138__$1 = this;
return self__.meta51137;
});

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51145 = (function (f,ch,meta51137,_,fn1,meta51146){
this.f = f;
this.ch = ch;
this.meta51137 = meta51137;
this._ = _;
this.fn1 = fn1;
this.meta51146 = meta51146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51147,meta51146__$1){
var self__ = this;
var _51147__$1 = this;
return (new cljs.core.async.t_cljs$core$async51145(self__.f,self__.ch,self__.meta51137,self__._,self__.fn1,meta51146__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51147){
var self__ = this;
var _51147__$1 = this;
return self__.meta51146;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51135_SHARP_){
var G__51150 = (((p1__51135_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51135_SHARP_) : self__.f.call(null,p1__51135_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51150) : f1.call(null,G__51150));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51137","meta51137",-1039479407,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51136","cljs.core.async/t_cljs$core$async51136",2043219813,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51146","meta51146",-694678815,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51145";

cljs.core.async.t_cljs$core$async51145.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51145");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51145.
 */
cljs.core.async.__GT_t_cljs$core$async51145 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51145(f__$1,ch__$1,meta51137__$1,___$2,fn1__$1,meta51146){
return (new cljs.core.async.t_cljs$core$async51145(f__$1,ch__$1,meta51137__$1,___$2,fn1__$1,meta51146));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async51145(self__.f,self__.ch,self__.meta51137,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51161 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51161) : self__.f.call(null,G__51161));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async51136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51137","meta51137",-1039479407,null)], null);
});

cljs.core.async.t_cljs$core$async51136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51136";

cljs.core.async.t_cljs$core$async51136.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51136");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51136.
 */
cljs.core.async.__GT_t_cljs$core$async51136 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51136(f__$1,ch__$1,meta51137){
return (new cljs.core.async.t_cljs$core$async51136(f__$1,ch__$1,meta51137));
});

}

return (new cljs.core.async.t_cljs$core$async51136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51167 = (function (f,ch,meta51168){
this.f = f;
this.ch = ch;
this.meta51168 = meta51168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51169,meta51168__$1){
var self__ = this;
var _51169__$1 = this;
return (new cljs.core.async.t_cljs$core$async51167(self__.f,self__.ch,meta51168__$1));
});

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51169){
var self__ = this;
var _51169__$1 = this;
return self__.meta51168;
});

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async51167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51168","meta51168",-2026168819,null)], null);
});

cljs.core.async.t_cljs$core$async51167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51167";

cljs.core.async.t_cljs$core$async51167.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51167.
 */
cljs.core.async.__GT_t_cljs$core$async51167 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51167(f__$1,ch__$1,meta51168){
return (new cljs.core.async.t_cljs$core$async51167(f__$1,ch__$1,meta51168));
});

}

return (new cljs.core.async.t_cljs$core$async51167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51186 = (function (p,ch,meta51187){
this.p = p;
this.ch = ch;
this.meta51187 = meta51187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51188,meta51187__$1){
var self__ = this;
var _51188__$1 = this;
return (new cljs.core.async.t_cljs$core$async51186(self__.p,self__.ch,meta51187__$1));
});

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51188){
var self__ = this;
var _51188__$1 = this;
return self__.meta51187;
});

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async51186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51187","meta51187",-1504332966,null)], null);
});

cljs.core.async.t_cljs$core$async51186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51186";

cljs.core.async.t_cljs$core$async51186.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51186");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51186.
 */
cljs.core.async.__GT_t_cljs$core$async51186 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51186(p__$1,ch__$1,meta51187){
return (new cljs.core.async.t_cljs$core$async51186(p__$1,ch__$1,meta51187));
});

}

return (new cljs.core.async.t_cljs$core$async51186(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51205 = arguments.length;
switch (G__51205) {
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
var c__49232__auto___53180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53180,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53180,out){
return (function (state_51231){
var state_val_51232 = (state_51231[(1)]);
if((state_val_51232 === (7))){
var inst_51227 = (state_51231[(2)]);
var state_51231__$1 = state_51231;
var statearr_51236_53182 = state_51231__$1;
(statearr_51236_53182[(2)] = inst_51227);

(statearr_51236_53182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (1))){
var state_51231__$1 = state_51231;
var statearr_51237_53184 = state_51231__$1;
(statearr_51237_53184[(2)] = null);

(statearr_51237_53184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (4))){
var inst_51212 = (state_51231[(7)]);
var inst_51212__$1 = (state_51231[(2)]);
var inst_51213 = (inst_51212__$1 == null);
var state_51231__$1 = (function (){var statearr_51239 = state_51231;
(statearr_51239[(7)] = inst_51212__$1);

return statearr_51239;
})();
if(cljs.core.truth_(inst_51213)){
var statearr_51240_53186 = state_51231__$1;
(statearr_51240_53186[(1)] = (5));

} else {
var statearr_51241_53188 = state_51231__$1;
(statearr_51241_53188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (6))){
var inst_51212 = (state_51231[(7)]);
var inst_51217 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51212) : p.call(null,inst_51212));
var state_51231__$1 = state_51231;
if(cljs.core.truth_(inst_51217)){
var statearr_51242_53190 = state_51231__$1;
(statearr_51242_53190[(1)] = (8));

} else {
var statearr_51244_53192 = state_51231__$1;
(statearr_51244_53192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (3))){
var inst_51229 = (state_51231[(2)]);
var state_51231__$1 = state_51231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51231__$1,inst_51229);
} else {
if((state_val_51232 === (2))){
var state_51231__$1 = state_51231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51231__$1,(4),ch);
} else {
if((state_val_51232 === (11))){
var inst_51220 = (state_51231[(2)]);
var state_51231__$1 = state_51231;
var statearr_51246_53196 = state_51231__$1;
(statearr_51246_53196[(2)] = inst_51220);

(statearr_51246_53196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (9))){
var state_51231__$1 = state_51231;
var statearr_51247_53199 = state_51231__$1;
(statearr_51247_53199[(2)] = null);

(statearr_51247_53199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (5))){
var inst_51215 = cljs.core.async.close_BANG_(out);
var state_51231__$1 = state_51231;
var statearr_51249_53202 = state_51231__$1;
(statearr_51249_53202[(2)] = inst_51215);

(statearr_51249_53202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (10))){
var inst_51224 = (state_51231[(2)]);
var state_51231__$1 = (function (){var statearr_51250 = state_51231;
(statearr_51250[(8)] = inst_51224);

return statearr_51250;
})();
var statearr_51251_53204 = state_51231__$1;
(statearr_51251_53204[(2)] = null);

(statearr_51251_53204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51232 === (8))){
var inst_51212 = (state_51231[(7)]);
var state_51231__$1 = state_51231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51231__$1,(11),out,inst_51212);
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
});})(c__49232__auto___53180,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53180,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51254 = [null,null,null,null,null,null,null,null,null];
(statearr_51254[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51254[(1)] = (1));

return statearr_51254;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51231){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51231);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51255){var ex__49061__auto__ = e51255;
var statearr_51256_53212 = state_51231;
(statearr_51256_53212[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51231[(4)]))){
var statearr_51258_53213 = state_51231;
(statearr_51258_53213[(1)] = cljs.core.first((state_51231[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53215 = state_51231;
state_51231 = G__53215;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53180,out))
})();
var state__49234__auto__ = (function (){var statearr_51261 = f__49233__auto__();
(statearr_51261[(6)] = c__49232__auto___53180);

return statearr_51261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51265 = arguments.length;
switch (G__51265) {
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
var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__){
return (function (state_51336){
var state_val_51338 = (state_51336[(1)]);
if((state_val_51338 === (7))){
var inst_51331 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51341_53225 = state_51336__$1;
(statearr_51341_53225[(2)] = inst_51331);

(statearr_51341_53225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (20))){
var inst_51300 = (state_51336[(7)]);
var inst_51312 = (state_51336[(2)]);
var inst_51313 = cljs.core.next(inst_51300);
var inst_51284 = inst_51313;
var inst_51285 = null;
var inst_51286 = (0);
var inst_51287 = (0);
var state_51336__$1 = (function (){var statearr_51344 = state_51336;
(statearr_51344[(8)] = inst_51284);

(statearr_51344[(9)] = inst_51287);

(statearr_51344[(10)] = inst_51312);

(statearr_51344[(11)] = inst_51285);

(statearr_51344[(12)] = inst_51286);

return statearr_51344;
})();
var statearr_51346_53227 = state_51336__$1;
(statearr_51346_53227[(2)] = null);

(statearr_51346_53227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (1))){
var state_51336__$1 = state_51336;
var statearr_51347_53228 = state_51336__$1;
(statearr_51347_53228[(2)] = null);

(statearr_51347_53228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (4))){
var inst_51273 = (state_51336[(13)]);
var inst_51273__$1 = (state_51336[(2)]);
var inst_51274 = (inst_51273__$1 == null);
var state_51336__$1 = (function (){var statearr_51348 = state_51336;
(statearr_51348[(13)] = inst_51273__$1);

return statearr_51348;
})();
if(cljs.core.truth_(inst_51274)){
var statearr_51353_53234 = state_51336__$1;
(statearr_51353_53234[(1)] = (5));

} else {
var statearr_51355_53235 = state_51336__$1;
(statearr_51355_53235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (15))){
var state_51336__$1 = state_51336;
var statearr_51360_53236 = state_51336__$1;
(statearr_51360_53236[(2)] = null);

(statearr_51360_53236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (21))){
var state_51336__$1 = state_51336;
var statearr_51362_53240 = state_51336__$1;
(statearr_51362_53240[(2)] = null);

(statearr_51362_53240[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (13))){
var inst_51284 = (state_51336[(8)]);
var inst_51287 = (state_51336[(9)]);
var inst_51285 = (state_51336[(11)]);
var inst_51286 = (state_51336[(12)]);
var inst_51296 = (state_51336[(2)]);
var inst_51297 = (inst_51287 + (1));
var tmp51357 = inst_51284;
var tmp51358 = inst_51285;
var tmp51359 = inst_51286;
var inst_51284__$1 = tmp51357;
var inst_51285__$1 = tmp51358;
var inst_51286__$1 = tmp51359;
var inst_51287__$1 = inst_51297;
var state_51336__$1 = (function (){var statearr_51368 = state_51336;
(statearr_51368[(8)] = inst_51284__$1);

(statearr_51368[(9)] = inst_51287__$1);

(statearr_51368[(14)] = inst_51296);

(statearr_51368[(11)] = inst_51285__$1);

(statearr_51368[(12)] = inst_51286__$1);

return statearr_51368;
})();
var statearr_51372_53259 = state_51336__$1;
(statearr_51372_53259[(2)] = null);

(statearr_51372_53259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (22))){
var state_51336__$1 = state_51336;
var statearr_51378_53262 = state_51336__$1;
(statearr_51378_53262[(2)] = null);

(statearr_51378_53262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (6))){
var inst_51273 = (state_51336[(13)]);
var inst_51282 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51273) : f.call(null,inst_51273));
var inst_51283 = cljs.core.seq(inst_51282);
var inst_51284 = inst_51283;
var inst_51285 = null;
var inst_51286 = (0);
var inst_51287 = (0);
var state_51336__$1 = (function (){var statearr_51384 = state_51336;
(statearr_51384[(8)] = inst_51284);

(statearr_51384[(9)] = inst_51287);

(statearr_51384[(11)] = inst_51285);

(statearr_51384[(12)] = inst_51286);

return statearr_51384;
})();
var statearr_51386_53264 = state_51336__$1;
(statearr_51386_53264[(2)] = null);

(statearr_51386_53264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (17))){
var inst_51300 = (state_51336[(7)]);
var inst_51304 = cljs.core.chunk_first(inst_51300);
var inst_51306 = cljs.core.chunk_rest(inst_51300);
var inst_51307 = cljs.core.count(inst_51304);
var inst_51284 = inst_51306;
var inst_51285 = inst_51304;
var inst_51286 = inst_51307;
var inst_51287 = (0);
var state_51336__$1 = (function (){var statearr_51389 = state_51336;
(statearr_51389[(8)] = inst_51284);

(statearr_51389[(9)] = inst_51287);

(statearr_51389[(11)] = inst_51285);

(statearr_51389[(12)] = inst_51286);

return statearr_51389;
})();
var statearr_51390_53269 = state_51336__$1;
(statearr_51390_53269[(2)] = null);

(statearr_51390_53269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (3))){
var inst_51333 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51336__$1,inst_51333);
} else {
if((state_val_51338 === (12))){
var inst_51321 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51392_53276 = state_51336__$1;
(statearr_51392_53276[(2)] = inst_51321);

(statearr_51392_53276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (2))){
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51336__$1,(4),in$);
} else {
if((state_val_51338 === (23))){
var inst_51329 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51393_53281 = state_51336__$1;
(statearr_51393_53281[(2)] = inst_51329);

(statearr_51393_53281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (19))){
var inst_51316 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51395_53282 = state_51336__$1;
(statearr_51395_53282[(2)] = inst_51316);

(statearr_51395_53282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (11))){
var inst_51284 = (state_51336[(8)]);
var inst_51300 = (state_51336[(7)]);
var inst_51300__$1 = cljs.core.seq(inst_51284);
var state_51336__$1 = (function (){var statearr_51397 = state_51336;
(statearr_51397[(7)] = inst_51300__$1);

return statearr_51397;
})();
if(inst_51300__$1){
var statearr_51398_53290 = state_51336__$1;
(statearr_51398_53290[(1)] = (14));

} else {
var statearr_51400_53291 = state_51336__$1;
(statearr_51400_53291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (9))){
var inst_51323 = (state_51336[(2)]);
var inst_51324 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51336__$1 = (function (){var statearr_51401 = state_51336;
(statearr_51401[(15)] = inst_51323);

return statearr_51401;
})();
if(cljs.core.truth_(inst_51324)){
var statearr_51402_53294 = state_51336__$1;
(statearr_51402_53294[(1)] = (21));

} else {
var statearr_51404_53295 = state_51336__$1;
(statearr_51404_53295[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (5))){
var inst_51276 = cljs.core.async.close_BANG_(out);
var state_51336__$1 = state_51336;
var statearr_51406_53296 = state_51336__$1;
(statearr_51406_53296[(2)] = inst_51276);

(statearr_51406_53296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (14))){
var inst_51300 = (state_51336[(7)]);
var inst_51302 = cljs.core.chunked_seq_QMARK_(inst_51300);
var state_51336__$1 = state_51336;
if(inst_51302){
var statearr_51408_53304 = state_51336__$1;
(statearr_51408_53304[(1)] = (17));

} else {
var statearr_51413_53306 = state_51336__$1;
(statearr_51413_53306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (16))){
var inst_51319 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51414_53309 = state_51336__$1;
(statearr_51414_53309[(2)] = inst_51319);

(statearr_51414_53309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51338 === (10))){
var inst_51287 = (state_51336[(9)]);
var inst_51285 = (state_51336[(11)]);
var inst_51294 = cljs.core._nth(inst_51285,inst_51287);
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51336__$1,(13),out,inst_51294);
} else {
if((state_val_51338 === (18))){
var inst_51300 = (state_51336[(7)]);
var inst_51310 = cljs.core.first(inst_51300);
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51336__$1,(20),out,inst_51310);
} else {
if((state_val_51338 === (8))){
var inst_51287 = (state_51336[(9)]);
var inst_51286 = (state_51336[(12)]);
var inst_51290 = (inst_51287 < inst_51286);
var inst_51291 = inst_51290;
var state_51336__$1 = state_51336;
if(cljs.core.truth_(inst_51291)){
var statearr_51420_53319 = state_51336__$1;
(statearr_51420_53319[(1)] = (10));

} else {
var statearr_51421_53320 = state_51336__$1;
(statearr_51421_53320[(1)] = (11));

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
});})(c__49232__auto__))
;
return ((function (switch__49057__auto__,c__49232__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____0 = (function (){
var statearr_51426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__);

(statearr_51426[(1)] = (1));

return statearr_51426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____1 = (function (state_51336){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51336);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51427){var ex__49061__auto__ = e51427;
var statearr_51428_53334 = state_51336;
(statearr_51428_53334[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51336[(4)]))){
var statearr_51429_53336 = state_51336;
(statearr_51429_53336[(1)] = cljs.core.first((state_51336[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53340 = state_51336;
state_51336 = G__53340;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__ = function(state_51336){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____1.call(this,state_51336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49058__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__))
})();
var state__49234__auto__ = (function (){var statearr_51433 = f__49233__auto__();
(statearr_51433[(6)] = c__49232__auto__);

return statearr_51433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__))
);

return c__49232__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51440 = arguments.length;
switch (G__51440) {
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
var G__51449 = arguments.length;
switch (G__51449) {
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
var G__51458 = arguments.length;
switch (G__51458) {
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
var c__49232__auto___53363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53363,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53363,out){
return (function (state_51491){
var state_val_51492 = (state_51491[(1)]);
if((state_val_51492 === (7))){
var inst_51486 = (state_51491[(2)]);
var state_51491__$1 = state_51491;
var statearr_51501_53365 = state_51491__$1;
(statearr_51501_53365[(2)] = inst_51486);

(statearr_51501_53365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (1))){
var inst_51467 = null;
var state_51491__$1 = (function (){var statearr_51504 = state_51491;
(statearr_51504[(7)] = inst_51467);

return statearr_51504;
})();
var statearr_51505_53368 = state_51491__$1;
(statearr_51505_53368[(2)] = null);

(statearr_51505_53368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (4))){
var inst_51470 = (state_51491[(8)]);
var inst_51470__$1 = (state_51491[(2)]);
var inst_51471 = (inst_51470__$1 == null);
var inst_51472 = cljs.core.not(inst_51471);
var state_51491__$1 = (function (){var statearr_51507 = state_51491;
(statearr_51507[(8)] = inst_51470__$1);

return statearr_51507;
})();
if(inst_51472){
var statearr_51508_53370 = state_51491__$1;
(statearr_51508_53370[(1)] = (5));

} else {
var statearr_51509_53372 = state_51491__$1;
(statearr_51509_53372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (6))){
var state_51491__$1 = state_51491;
var statearr_51511_53374 = state_51491__$1;
(statearr_51511_53374[(2)] = null);

(statearr_51511_53374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (3))){
var inst_51488 = (state_51491[(2)]);
var inst_51489 = cljs.core.async.close_BANG_(out);
var state_51491__$1 = (function (){var statearr_51513 = state_51491;
(statearr_51513[(9)] = inst_51488);

return statearr_51513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51491__$1,inst_51489);
} else {
if((state_val_51492 === (2))){
var state_51491__$1 = state_51491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51491__$1,(4),ch);
} else {
if((state_val_51492 === (11))){
var inst_51470 = (state_51491[(8)]);
var inst_51480 = (state_51491[(2)]);
var inst_51467 = inst_51470;
var state_51491__$1 = (function (){var statearr_51516 = state_51491;
(statearr_51516[(7)] = inst_51467);

(statearr_51516[(10)] = inst_51480);

return statearr_51516;
})();
var statearr_51518_53382 = state_51491__$1;
(statearr_51518_53382[(2)] = null);

(statearr_51518_53382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (9))){
var inst_51470 = (state_51491[(8)]);
var state_51491__$1 = state_51491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51491__$1,(11),out,inst_51470);
} else {
if((state_val_51492 === (5))){
var inst_51470 = (state_51491[(8)]);
var inst_51467 = (state_51491[(7)]);
var inst_51474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51470,inst_51467);
var state_51491__$1 = state_51491;
if(inst_51474){
var statearr_51528_53385 = state_51491__$1;
(statearr_51528_53385[(1)] = (8));

} else {
var statearr_51529_53389 = state_51491__$1;
(statearr_51529_53389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (10))){
var inst_51483 = (state_51491[(2)]);
var state_51491__$1 = state_51491;
var statearr_51533_53390 = state_51491__$1;
(statearr_51533_53390[(2)] = inst_51483);

(statearr_51533_53390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51492 === (8))){
var inst_51467 = (state_51491[(7)]);
var tmp51520 = inst_51467;
var inst_51467__$1 = tmp51520;
var state_51491__$1 = (function (){var statearr_51539 = state_51491;
(statearr_51539[(7)] = inst_51467__$1);

return statearr_51539;
})();
var statearr_51540_53394 = state_51491__$1;
(statearr_51540_53394[(2)] = null);

(statearr_51540_53394[(1)] = (2));


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
});})(c__49232__auto___53363,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53363,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51546[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51546[(1)] = (1));

return statearr_51546;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51491){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51491);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51549){var ex__49061__auto__ = e51549;
var statearr_51551_53402 = state_51491;
(statearr_51551_53402[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51491[(4)]))){
var statearr_51552_53403 = state_51491;
(statearr_51552_53403[(1)] = cljs.core.first((state_51491[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53408 = state_51491;
state_51491 = G__53408;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53363,out))
})();
var state__49234__auto__ = (function (){var statearr_51553 = f__49233__auto__();
(statearr_51553[(6)] = c__49232__auto___53363);

return statearr_51553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53363,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51566 = arguments.length;
switch (G__51566) {
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
var c__49232__auto___53411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53411,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53411,out){
return (function (state_51624){
var state_val_51625 = (state_51624[(1)]);
if((state_val_51625 === (7))){
var inst_51616 = (state_51624[(2)]);
var state_51624__$1 = state_51624;
var statearr_51644_53417 = state_51624__$1;
(statearr_51644_53417[(2)] = inst_51616);

(statearr_51644_53417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (1))){
var inst_51578 = (new Array(n));
var inst_51579 = inst_51578;
var inst_51580 = (0);
var state_51624__$1 = (function (){var statearr_51647 = state_51624;
(statearr_51647[(7)] = inst_51579);

(statearr_51647[(8)] = inst_51580);

return statearr_51647;
})();
var statearr_51649_53424 = state_51624__$1;
(statearr_51649_53424[(2)] = null);

(statearr_51649_53424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (4))){
var inst_51583 = (state_51624[(9)]);
var inst_51583__$1 = (state_51624[(2)]);
var inst_51584 = (inst_51583__$1 == null);
var inst_51585 = cljs.core.not(inst_51584);
var state_51624__$1 = (function (){var statearr_51651 = state_51624;
(statearr_51651[(9)] = inst_51583__$1);

return statearr_51651;
})();
if(inst_51585){
var statearr_51652_53425 = state_51624__$1;
(statearr_51652_53425[(1)] = (5));

} else {
var statearr_51653_53426 = state_51624__$1;
(statearr_51653_53426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (15))){
var inst_51610 = (state_51624[(2)]);
var state_51624__$1 = state_51624;
var statearr_51657_53432 = state_51624__$1;
(statearr_51657_53432[(2)] = inst_51610);

(statearr_51657_53432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (13))){
var state_51624__$1 = state_51624;
var statearr_51658_53434 = state_51624__$1;
(statearr_51658_53434[(2)] = null);

(statearr_51658_53434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (6))){
var inst_51580 = (state_51624[(8)]);
var inst_51606 = (inst_51580 > (0));
var state_51624__$1 = state_51624;
if(cljs.core.truth_(inst_51606)){
var statearr_51659_53436 = state_51624__$1;
(statearr_51659_53436[(1)] = (12));

} else {
var statearr_51660_53437 = state_51624__$1;
(statearr_51660_53437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (3))){
var inst_51622 = (state_51624[(2)]);
var state_51624__$1 = state_51624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51624__$1,inst_51622);
} else {
if((state_val_51625 === (12))){
var inst_51579 = (state_51624[(7)]);
var inst_51608 = cljs.core.vec(inst_51579);
var state_51624__$1 = state_51624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51624__$1,(15),out,inst_51608);
} else {
if((state_val_51625 === (2))){
var state_51624__$1 = state_51624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51624__$1,(4),ch);
} else {
if((state_val_51625 === (11))){
var inst_51599 = (state_51624[(2)]);
var inst_51601 = (new Array(n));
var inst_51579 = inst_51601;
var inst_51580 = (0);
var state_51624__$1 = (function (){var statearr_51676 = state_51624;
(statearr_51676[(7)] = inst_51579);

(statearr_51676[(8)] = inst_51580);

(statearr_51676[(10)] = inst_51599);

return statearr_51676;
})();
var statearr_51677_53445 = state_51624__$1;
(statearr_51677_53445[(2)] = null);

(statearr_51677_53445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (9))){
var inst_51579 = (state_51624[(7)]);
var inst_51597 = cljs.core.vec(inst_51579);
var state_51624__$1 = state_51624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51624__$1,(11),out,inst_51597);
} else {
if((state_val_51625 === (5))){
var inst_51579 = (state_51624[(7)]);
var inst_51580 = (state_51624[(8)]);
var inst_51592 = (state_51624[(11)]);
var inst_51583 = (state_51624[(9)]);
var inst_51591 = (inst_51579[inst_51580] = inst_51583);
var inst_51592__$1 = (inst_51580 + (1));
var inst_51593 = (inst_51592__$1 < n);
var state_51624__$1 = (function (){var statearr_51682 = state_51624;
(statearr_51682[(11)] = inst_51592__$1);

(statearr_51682[(12)] = inst_51591);

return statearr_51682;
})();
if(cljs.core.truth_(inst_51593)){
var statearr_51683_53454 = state_51624__$1;
(statearr_51683_53454[(1)] = (8));

} else {
var statearr_51684_53456 = state_51624__$1;
(statearr_51684_53456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (14))){
var inst_51613 = (state_51624[(2)]);
var inst_51614 = cljs.core.async.close_BANG_(out);
var state_51624__$1 = (function (){var statearr_51686 = state_51624;
(statearr_51686[(13)] = inst_51613);

return statearr_51686;
})();
var statearr_51689_53457 = state_51624__$1;
(statearr_51689_53457[(2)] = inst_51614);

(statearr_51689_53457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (10))){
var inst_51604 = (state_51624[(2)]);
var state_51624__$1 = state_51624;
var statearr_51693_53458 = state_51624__$1;
(statearr_51693_53458[(2)] = inst_51604);

(statearr_51693_53458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51625 === (8))){
var inst_51579 = (state_51624[(7)]);
var inst_51592 = (state_51624[(11)]);
var tmp51685 = inst_51579;
var inst_51579__$1 = tmp51685;
var inst_51580 = inst_51592;
var state_51624__$1 = (function (){var statearr_51697 = state_51624;
(statearr_51697[(7)] = inst_51579__$1);

(statearr_51697[(8)] = inst_51580);

return statearr_51697;
})();
var statearr_51700_53462 = state_51624__$1;
(statearr_51700_53462[(2)] = null);

(statearr_51700_53462[(1)] = (2));


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
});})(c__49232__auto___53411,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53411,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51706[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51706[(1)] = (1));

return statearr_51706;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51624){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51624);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51708){var ex__49061__auto__ = e51708;
var statearr_51709_53469 = state_51624;
(statearr_51709_53469[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51624[(4)]))){
var statearr_51710_53472 = state_51624;
(statearr_51710_53472[(1)] = cljs.core.first((state_51624[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53474 = state_51624;
state_51624 = G__53474;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53411,out))
})();
var state__49234__auto__ = (function (){var statearr_51719 = f__49233__auto__();
(statearr_51719[(6)] = c__49232__auto___53411);

return statearr_51719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53411,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51729 = arguments.length;
switch (G__51729) {
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
var c__49232__auto___53486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto___53486,out){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto___53486,out){
return (function (state_51780){
var state_val_51781 = (state_51780[(1)]);
if((state_val_51781 === (7))){
var inst_51776 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51792_53487 = state_51780__$1;
(statearr_51792_53487[(2)] = inst_51776);

(statearr_51792_53487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (1))){
var inst_51732 = [];
var inst_51733 = inst_51732;
var inst_51734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51780__$1 = (function (){var statearr_51794 = state_51780;
(statearr_51794[(7)] = inst_51733);

(statearr_51794[(8)] = inst_51734);

return statearr_51794;
})();
var statearr_51798_53489 = state_51780__$1;
(statearr_51798_53489[(2)] = null);

(statearr_51798_53489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (4))){
var inst_51741 = (state_51780[(9)]);
var inst_51741__$1 = (state_51780[(2)]);
var inst_51742 = (inst_51741__$1 == null);
var inst_51743 = cljs.core.not(inst_51742);
var state_51780__$1 = (function (){var statearr_51799 = state_51780;
(statearr_51799[(9)] = inst_51741__$1);

return statearr_51799;
})();
if(inst_51743){
var statearr_51800_53494 = state_51780__$1;
(statearr_51800_53494[(1)] = (5));

} else {
var statearr_51804_53496 = state_51780__$1;
(statearr_51804_53496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (15))){
var inst_51770 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51814_53498 = state_51780__$1;
(statearr_51814_53498[(2)] = inst_51770);

(statearr_51814_53498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (13))){
var state_51780__$1 = state_51780;
var statearr_51815_53501 = state_51780__$1;
(statearr_51815_53501[(2)] = null);

(statearr_51815_53501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (6))){
var inst_51733 = (state_51780[(7)]);
var inst_51765 = inst_51733.length;
var inst_51766 = (inst_51765 > (0));
var state_51780__$1 = state_51780;
if(cljs.core.truth_(inst_51766)){
var statearr_51817_53503 = state_51780__$1;
(statearr_51817_53503[(1)] = (12));

} else {
var statearr_51819_53504 = state_51780__$1;
(statearr_51819_53504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (3))){
var inst_51778 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51780__$1,inst_51778);
} else {
if((state_val_51781 === (12))){
var inst_51733 = (state_51780[(7)]);
var inst_51768 = cljs.core.vec(inst_51733);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51780__$1,(15),out,inst_51768);
} else {
if((state_val_51781 === (2))){
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51780__$1,(4),ch);
} else {
if((state_val_51781 === (11))){
var inst_51745 = (state_51780[(10)]);
var inst_51741 = (state_51780[(9)]);
var inst_51758 = (state_51780[(2)]);
var inst_51759 = [];
var inst_51760 = inst_51759.push(inst_51741);
var inst_51733 = inst_51759;
var inst_51734 = inst_51745;
var state_51780__$1 = (function (){var statearr_51828 = state_51780;
(statearr_51828[(7)] = inst_51733);

(statearr_51828[(11)] = inst_51760);

(statearr_51828[(8)] = inst_51734);

(statearr_51828[(12)] = inst_51758);

return statearr_51828;
})();
var statearr_51829_53513 = state_51780__$1;
(statearr_51829_53513[(2)] = null);

(statearr_51829_53513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (9))){
var inst_51733 = (state_51780[(7)]);
var inst_51756 = cljs.core.vec(inst_51733);
var state_51780__$1 = state_51780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51780__$1,(11),out,inst_51756);
} else {
if((state_val_51781 === (5))){
var inst_51745 = (state_51780[(10)]);
var inst_51741 = (state_51780[(9)]);
var inst_51734 = (state_51780[(8)]);
var inst_51745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51741) : f.call(null,inst_51741));
var inst_51747 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51745__$1,inst_51734);
var inst_51749 = cljs.core.keyword_identical_QMARK_(inst_51734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51750 = ((inst_51747) || (inst_51749));
var state_51780__$1 = (function (){var statearr_51835 = state_51780;
(statearr_51835[(10)] = inst_51745__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51750)){
var statearr_51836_53520 = state_51780__$1;
(statearr_51836_53520[(1)] = (8));

} else {
var statearr_51837_53521 = state_51780__$1;
(statearr_51837_53521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (14))){
var inst_51773 = (state_51780[(2)]);
var inst_51774 = cljs.core.async.close_BANG_(out);
var state_51780__$1 = (function (){var statearr_51844 = state_51780;
(statearr_51844[(13)] = inst_51773);

return statearr_51844;
})();
var statearr_51845_53525 = state_51780__$1;
(statearr_51845_53525[(2)] = inst_51774);

(statearr_51845_53525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (10))){
var inst_51763 = (state_51780[(2)]);
var state_51780__$1 = state_51780;
var statearr_51847_53528 = state_51780__$1;
(statearr_51847_53528[(2)] = inst_51763);

(statearr_51847_53528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51781 === (8))){
var inst_51745 = (state_51780[(10)]);
var inst_51733 = (state_51780[(7)]);
var inst_51741 = (state_51780[(9)]);
var inst_51753 = inst_51733.push(inst_51741);
var tmp51840 = inst_51733;
var inst_51733__$1 = tmp51840;
var inst_51734 = inst_51745;
var state_51780__$1 = (function (){var statearr_51848 = state_51780;
(statearr_51848[(14)] = inst_51753);

(statearr_51848[(7)] = inst_51733__$1);

(statearr_51848[(8)] = inst_51734);

return statearr_51848;
})();
var statearr_51849_53533 = state_51780__$1;
(statearr_51849_53533[(2)] = null);

(statearr_51849_53533[(1)] = (2));


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
});})(c__49232__auto___53486,out))
;
return ((function (switch__49057__auto__,c__49232__auto___53486,out){
return (function() {
var cljs$core$async$state_machine__49058__auto__ = null;
var cljs$core$async$state_machine__49058__auto____0 = (function (){
var statearr_51853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51853[(0)] = cljs$core$async$state_machine__49058__auto__);

(statearr_51853[(1)] = (1));

return statearr_51853;
});
var cljs$core$async$state_machine__49058__auto____1 = (function (state_51780){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_51780);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e51854){var ex__49061__auto__ = e51854;
var statearr_51855_53535 = state_51780;
(statearr_51855_53535[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_51780[(4)]))){
var statearr_51856_53536 = state_51780;
(statearr_51856_53536[(1)] = cljs.core.first((state_51780[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53541 = state_51780;
state_51780 = G__53541;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
cljs$core$async$state_machine__49058__auto__ = function(state_51780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49058__auto____1.call(this,state_51780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49058__auto____0;
cljs$core$async$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49058__auto____1;
return cljs$core$async$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto___53486,out))
})();
var state__49234__auto__ = (function (){var statearr_51858 = f__49233__auto__();
(statearr_51858[(6)] = c__49232__auto___53486);

return statearr_51858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto___53486,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
