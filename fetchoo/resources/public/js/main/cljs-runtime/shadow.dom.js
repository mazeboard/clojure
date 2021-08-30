goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53185 = coll;
var G__53186 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53185,G__53186) : shadow.dom.lazy_native_coll_seq.call(null,G__53185,G__53186));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53248 = arguments.length;
switch (G__53248) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53268 = arguments.length;
switch (G__53268) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53278 = arguments.length;
switch (G__53278) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53289 = arguments.length;
switch (G__53289) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53303 = arguments.length;
switch (G__53303) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__53305 = document;
var G__53306 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53305,G__53306);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__53309 = shadow.dom.dom_node(parent);
var G__53310 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53309,G__53310);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__53313 = shadow.dom.dom_node(el);
var G__53314 = cls;
return goog.dom.classlist.add(G__53313,G__53314);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__53315 = shadow.dom.dom_node(el);
var G__53316 = cls;
return goog.dom.classlist.remove(G__53315,G__53316);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53327 = arguments.length;
switch (G__53327) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__53329 = shadow.dom.dom_node(el);
var G__53330 = cls;
return goog.dom.classlist.toggle(G__53329,G__53330);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53340){if((e53340 instanceof Object)){
var e = e53340;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53340;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__53352 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53353 = null;
var count__53354 = (0);
var i__53355 = (0);
while(true){
if((i__53355 < count__53354)){
var el = chunk__53353.cljs$core$IIndexed$_nth$arity$2(null,i__53355);
var handler_54846__$1 = ((function (seq__53352,chunk__53353,count__53354,i__53355,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53352,chunk__53353,count__53354,i__53355,el))
;
var G__53372_54850 = el;
var G__53373_54851 = cljs.core.name(ev);
var G__53374_54852 = handler_54846__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53372_54850,G__53373_54851,G__53374_54852) : shadow.dom.dom_listen.call(null,G__53372_54850,G__53373_54851,G__53374_54852));


var G__54855 = seq__53352;
var G__54856 = chunk__53353;
var G__54857 = count__53354;
var G__54858 = (i__53355 + (1));
seq__53352 = G__54855;
chunk__53353 = G__54856;
count__53354 = G__54857;
i__53355 = G__54858;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53352);
if(temp__5753__auto__){
var seq__53352__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53352__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53352__$1);
var G__54861 = cljs.core.chunk_rest(seq__53352__$1);
var G__54862 = c__4550__auto__;
var G__54863 = cljs.core.count(c__4550__auto__);
var G__54864 = (0);
seq__53352 = G__54861;
chunk__53353 = G__54862;
count__53354 = G__54863;
i__53355 = G__54864;
continue;
} else {
var el = cljs.core.first(seq__53352__$1);
var handler_54869__$1 = ((function (seq__53352,chunk__53353,count__53354,i__53355,el,seq__53352__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53352,chunk__53353,count__53354,i__53355,el,seq__53352__$1,temp__5753__auto__))
;
var G__53378_54870 = el;
var G__53379_54871 = cljs.core.name(ev);
var G__53380_54872 = handler_54869__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53378_54870,G__53379_54871,G__53380_54872) : shadow.dom.dom_listen.call(null,G__53378_54870,G__53379_54871,G__53380_54872));


var G__54873 = cljs.core.next(seq__53352__$1);
var G__54874 = null;
var G__54875 = (0);
var G__54876 = (0);
seq__53352 = G__54873;
chunk__53353 = G__54874;
count__53354 = G__54875;
i__53355 = G__54876;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__53388 = arguments.length;
switch (G__53388) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__53395 = shadow.dom.dom_node(el);
var G__53396 = cljs.core.name(ev);
var G__53397 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53395,G__53396,G__53397) : shadow.dom.dom_listen.call(null,G__53395,G__53396,G__53397));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__53402 = shadow.dom.dom_node(el);
var G__53403 = cljs.core.name(ev);
var G__53404 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__53402,G__53403,G__53404) : shadow.dom.dom_listen_remove.call(null,G__53402,G__53403,G__53404));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__53405 = cljs.core.seq(events);
var chunk__53406 = null;
var count__53407 = (0);
var i__53408 = (0);
while(true){
if((i__53408 < count__53407)){
var vec__53419 = chunk__53406.cljs$core$IIndexed$_nth$arity$2(null,i__53408);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53419,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54903 = seq__53405;
var G__54904 = chunk__53406;
var G__54905 = count__53407;
var G__54906 = (i__53408 + (1));
seq__53405 = G__54903;
chunk__53406 = G__54904;
count__53407 = G__54905;
i__53408 = G__54906;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53405);
if(temp__5753__auto__){
var seq__53405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53405__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53405__$1);
var G__54914 = cljs.core.chunk_rest(seq__53405__$1);
var G__54915 = c__4550__auto__;
var G__54916 = cljs.core.count(c__4550__auto__);
var G__54917 = (0);
seq__53405 = G__54914;
chunk__53406 = G__54915;
count__53407 = G__54916;
i__53408 = G__54917;
continue;
} else {
var vec__53425 = cljs.core.first(seq__53405__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53425,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54929 = cljs.core.next(seq__53405__$1);
var G__54930 = null;
var G__54931 = (0);
var G__54932 = (0);
seq__53405 = G__54929;
chunk__53406 = G__54930;
count__53407 = G__54931;
i__53408 = G__54932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__53430 = cljs.core.seq(styles);
var chunk__53431 = null;
var count__53432 = (0);
var i__53433 = (0);
while(true){
if((i__53433 < count__53432)){
var vec__53463 = chunk__53431.cljs$core$IIndexed$_nth$arity$2(null,i__53433);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(1),null);
var G__53467_54940 = dom;
var G__53468_54941 = cljs.core.name(k);
var G__53469_54942 = (((v == null))?"":v);
goog.style.setStyle(G__53467_54940,G__53468_54941,G__53469_54942);


var G__54944 = seq__53430;
var G__54945 = chunk__53431;
var G__54946 = count__53432;
var G__54947 = (i__53433 + (1));
seq__53430 = G__54944;
chunk__53431 = G__54945;
count__53432 = G__54946;
i__53433 = G__54947;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53430);
if(temp__5753__auto__){
var seq__53430__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53430__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53430__$1);
var G__54957 = cljs.core.chunk_rest(seq__53430__$1);
var G__54958 = c__4550__auto__;
var G__54959 = cljs.core.count(c__4550__auto__);
var G__54960 = (0);
seq__53430 = G__54957;
chunk__53431 = G__54958;
count__53432 = G__54959;
i__53433 = G__54960;
continue;
} else {
var vec__53481 = cljs.core.first(seq__53430__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53481,(1),null);
var G__53484_54965 = dom;
var G__53485_54966 = cljs.core.name(k);
var G__53486_54967 = (((v == null))?"":v);
goog.style.setStyle(G__53484_54965,G__53485_54966,G__53486_54967);


var G__54970 = cljs.core.next(seq__53430__$1);
var G__54971 = null;
var G__54972 = (0);
var G__54973 = (0);
seq__53430 = G__54970;
chunk__53431 = G__54971;
count__53432 = G__54972;
i__53433 = G__54973;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__53495_54974 = key;
var G__53495_54975__$1 = (((G__53495_54974 instanceof cljs.core.Keyword))?G__53495_54974.fqn:null);
switch (G__53495_54975__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54986 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54986,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54986,"aria-");
}
})())){
el.setAttribute(ks_54986,value);
} else {
(el[ks_54986] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__53524 = shadow.dom.dom_node(el);
var G__53525 = cls;
return goog.dom.classlist.contains(G__53524,G__53525);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53541){
var map__53542 = p__53541;
var map__53542__$1 = (((((!((map__53542 == null))))?(((((map__53542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53542):map__53542);
var props = map__53542__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53542__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53548 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53548,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53548,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53548,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53552 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53552,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53552;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53559 = arguments.length;
switch (G__53559) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53569){
var vec__53570 = p__53569;
var seq__53571 = cljs.core.seq(vec__53570);
var first__53572 = cljs.core.first(seq__53571);
var seq__53571__$1 = cljs.core.next(seq__53571);
var nn = first__53572;
var first__53572__$1 = cljs.core.first(seq__53571__$1);
var seq__53571__$2 = cljs.core.next(seq__53571__$1);
var np = first__53572__$1;
var nc = seq__53571__$2;
var node = vec__53570;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53577 = nn;
var G__53579 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53577,G__53579) : create_fn.call(null,G__53577,G__53579));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53582 = nn;
var G__53583 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53582,G__53583) : create_fn.call(null,G__53582,G__53583));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53586 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53586,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53586,(1),null);
var seq__53592_55038 = cljs.core.seq(node_children);
var chunk__53593_55039 = null;
var count__53594_55040 = (0);
var i__53595_55041 = (0);
while(true){
if((i__53595_55041 < count__53594_55040)){
var child_struct_55042 = chunk__53593_55039.cljs$core$IIndexed$_nth$arity$2(null,i__53595_55041);
var children_55043 = shadow.dom.dom_node(child_struct_55042);
if(cljs.core.seq_QMARK_(children_55043)){
var seq__53650_55044 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55043));
var chunk__53652_55045 = null;
var count__53653_55046 = (0);
var i__53654_55047 = (0);
while(true){
if((i__53654_55047 < count__53653_55046)){
var child_55048 = chunk__53652_55045.cljs$core$IIndexed$_nth$arity$2(null,i__53654_55047);
if(cljs.core.truth_(child_55048)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55048);


var G__55050 = seq__53650_55044;
var G__55051 = chunk__53652_55045;
var G__55052 = count__53653_55046;
var G__55053 = (i__53654_55047 + (1));
seq__53650_55044 = G__55050;
chunk__53652_55045 = G__55051;
count__53653_55046 = G__55052;
i__53654_55047 = G__55053;
continue;
} else {
var G__55055 = seq__53650_55044;
var G__55056 = chunk__53652_55045;
var G__55057 = count__53653_55046;
var G__55058 = (i__53654_55047 + (1));
seq__53650_55044 = G__55055;
chunk__53652_55045 = G__55056;
count__53653_55046 = G__55057;
i__53654_55047 = G__55058;
continue;
}
} else {
var temp__5753__auto___55060 = cljs.core.seq(seq__53650_55044);
if(temp__5753__auto___55060){
var seq__53650_55061__$1 = temp__5753__auto___55060;
if(cljs.core.chunked_seq_QMARK_(seq__53650_55061__$1)){
var c__4550__auto___55062 = cljs.core.chunk_first(seq__53650_55061__$1);
var G__55063 = cljs.core.chunk_rest(seq__53650_55061__$1);
var G__55064 = c__4550__auto___55062;
var G__55065 = cljs.core.count(c__4550__auto___55062);
var G__55066 = (0);
seq__53650_55044 = G__55063;
chunk__53652_55045 = G__55064;
count__53653_55046 = G__55065;
i__53654_55047 = G__55066;
continue;
} else {
var child_55068 = cljs.core.first(seq__53650_55061__$1);
if(cljs.core.truth_(child_55068)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55068);


var G__55071 = cljs.core.next(seq__53650_55061__$1);
var G__55072 = null;
var G__55073 = (0);
var G__55074 = (0);
seq__53650_55044 = G__55071;
chunk__53652_55045 = G__55072;
count__53653_55046 = G__55073;
i__53654_55047 = G__55074;
continue;
} else {
var G__55075 = cljs.core.next(seq__53650_55061__$1);
var G__55076 = null;
var G__55077 = (0);
var G__55078 = (0);
seq__53650_55044 = G__55075;
chunk__53652_55045 = G__55076;
count__53653_55046 = G__55077;
i__53654_55047 = G__55078;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55043);
}


var G__55080 = seq__53592_55038;
var G__55081 = chunk__53593_55039;
var G__55082 = count__53594_55040;
var G__55083 = (i__53595_55041 + (1));
seq__53592_55038 = G__55080;
chunk__53593_55039 = G__55081;
count__53594_55040 = G__55082;
i__53595_55041 = G__55083;
continue;
} else {
var temp__5753__auto___55084 = cljs.core.seq(seq__53592_55038);
if(temp__5753__auto___55084){
var seq__53592_55085__$1 = temp__5753__auto___55084;
if(cljs.core.chunked_seq_QMARK_(seq__53592_55085__$1)){
var c__4550__auto___55090 = cljs.core.chunk_first(seq__53592_55085__$1);
var G__55092 = cljs.core.chunk_rest(seq__53592_55085__$1);
var G__55093 = c__4550__auto___55090;
var G__55094 = cljs.core.count(c__4550__auto___55090);
var G__55095 = (0);
seq__53592_55038 = G__55092;
chunk__53593_55039 = G__55093;
count__53594_55040 = G__55094;
i__53595_55041 = G__55095;
continue;
} else {
var child_struct_55097 = cljs.core.first(seq__53592_55085__$1);
var children_55099 = shadow.dom.dom_node(child_struct_55097);
if(cljs.core.seq_QMARK_(children_55099)){
var seq__53682_55100 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55099));
var chunk__53684_55101 = null;
var count__53685_55102 = (0);
var i__53686_55103 = (0);
while(true){
if((i__53686_55103 < count__53685_55102)){
var child_55105 = chunk__53684_55101.cljs$core$IIndexed$_nth$arity$2(null,i__53686_55103);
if(cljs.core.truth_(child_55105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55105);


var G__55106 = seq__53682_55100;
var G__55107 = chunk__53684_55101;
var G__55108 = count__53685_55102;
var G__55109 = (i__53686_55103 + (1));
seq__53682_55100 = G__55106;
chunk__53684_55101 = G__55107;
count__53685_55102 = G__55108;
i__53686_55103 = G__55109;
continue;
} else {
var G__55110 = seq__53682_55100;
var G__55111 = chunk__53684_55101;
var G__55112 = count__53685_55102;
var G__55113 = (i__53686_55103 + (1));
seq__53682_55100 = G__55110;
chunk__53684_55101 = G__55111;
count__53685_55102 = G__55112;
i__53686_55103 = G__55113;
continue;
}
} else {
var temp__5753__auto___55114__$1 = cljs.core.seq(seq__53682_55100);
if(temp__5753__auto___55114__$1){
var seq__53682_55115__$1 = temp__5753__auto___55114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53682_55115__$1)){
var c__4550__auto___55116 = cljs.core.chunk_first(seq__53682_55115__$1);
var G__55117 = cljs.core.chunk_rest(seq__53682_55115__$1);
var G__55118 = c__4550__auto___55116;
var G__55119 = cljs.core.count(c__4550__auto___55116);
var G__55120 = (0);
seq__53682_55100 = G__55117;
chunk__53684_55101 = G__55118;
count__53685_55102 = G__55119;
i__53686_55103 = G__55120;
continue;
} else {
var child_55127 = cljs.core.first(seq__53682_55115__$1);
if(cljs.core.truth_(child_55127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55127);


var G__55129 = cljs.core.next(seq__53682_55115__$1);
var G__55130 = null;
var G__55131 = (0);
var G__55132 = (0);
seq__53682_55100 = G__55129;
chunk__53684_55101 = G__55130;
count__53685_55102 = G__55131;
i__53686_55103 = G__55132;
continue;
} else {
var G__55136 = cljs.core.next(seq__53682_55115__$1);
var G__55137 = null;
var G__55138 = (0);
var G__55139 = (0);
seq__53682_55100 = G__55136;
chunk__53684_55101 = G__55137;
count__53685_55102 = G__55138;
i__53686_55103 = G__55139;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55099);
}


var G__55141 = cljs.core.next(seq__53592_55085__$1);
var G__55142 = null;
var G__55143 = (0);
var G__55144 = (0);
seq__53592_55038 = G__55141;
chunk__53593_55039 = G__55142;
count__53594_55040 = G__55143;
i__53595_55041 = G__55144;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__53716 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__53716);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53722 = cljs.core.seq(node);
var chunk__53723 = null;
var count__53724 = (0);
var i__53725 = (0);
while(true){
if((i__53725 < count__53724)){
var n = chunk__53723.cljs$core$IIndexed$_nth$arity$2(null,i__53725);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55157 = seq__53722;
var G__55158 = chunk__53723;
var G__55159 = count__53724;
var G__55160 = (i__53725 + (1));
seq__53722 = G__55157;
chunk__53723 = G__55158;
count__53724 = G__55159;
i__53725 = G__55160;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53722);
if(temp__5753__auto__){
var seq__53722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53722__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53722__$1);
var G__55162 = cljs.core.chunk_rest(seq__53722__$1);
var G__55163 = c__4550__auto__;
var G__55164 = cljs.core.count(c__4550__auto__);
var G__55165 = (0);
seq__53722 = G__55162;
chunk__53723 = G__55163;
count__53724 = G__55164;
i__53725 = G__55165;
continue;
} else {
var n = cljs.core.first(seq__53722__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55173 = cljs.core.next(seq__53722__$1);
var G__55174 = null;
var G__55175 = (0);
var G__55176 = (0);
seq__53722 = G__55173;
chunk__53723 = G__55174;
count__53724 = G__55175;
i__53725 = G__55176;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__53750 = shadow.dom.dom_node(new$);
var G__53751 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__53750,G__53751);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53760 = arguments.length;
switch (G__53760) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53780 = arguments.length;
switch (G__53780) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53815 = arguments.length;
switch (G__53815) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55207 = arguments.length;
var i__4731__auto___55208 = (0);
while(true){
if((i__4731__auto___55208 < len__4730__auto___55207)){
args__4736__auto__.push((arguments[i__4731__auto___55208]));

var G__55209 = (i__4731__auto___55208 + (1));
i__4731__auto___55208 = G__55209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53900_55214 = cljs.core.seq(nodes);
var chunk__53901_55215 = null;
var count__53902_55216 = (0);
var i__53903_55217 = (0);
while(true){
if((i__53903_55217 < count__53902_55216)){
var node_55218 = chunk__53901_55215.cljs$core$IIndexed$_nth$arity$2(null,i__53903_55217);
fragment.appendChild(shadow.dom._to_dom(node_55218));


var G__55220 = seq__53900_55214;
var G__55221 = chunk__53901_55215;
var G__55222 = count__53902_55216;
var G__55223 = (i__53903_55217 + (1));
seq__53900_55214 = G__55220;
chunk__53901_55215 = G__55221;
count__53902_55216 = G__55222;
i__53903_55217 = G__55223;
continue;
} else {
var temp__5753__auto___55225 = cljs.core.seq(seq__53900_55214);
if(temp__5753__auto___55225){
var seq__53900_55226__$1 = temp__5753__auto___55225;
if(cljs.core.chunked_seq_QMARK_(seq__53900_55226__$1)){
var c__4550__auto___55228 = cljs.core.chunk_first(seq__53900_55226__$1);
var G__55230 = cljs.core.chunk_rest(seq__53900_55226__$1);
var G__55231 = c__4550__auto___55228;
var G__55232 = cljs.core.count(c__4550__auto___55228);
var G__55233 = (0);
seq__53900_55214 = G__55230;
chunk__53901_55215 = G__55231;
count__53902_55216 = G__55232;
i__53903_55217 = G__55233;
continue;
} else {
var node_55236 = cljs.core.first(seq__53900_55226__$1);
fragment.appendChild(shadow.dom._to_dom(node_55236));


var G__55238 = cljs.core.next(seq__53900_55226__$1);
var G__55239 = null;
var G__55240 = (0);
var G__55241 = (0);
seq__53900_55214 = G__55238;
chunk__53901_55215 = G__55239;
count__53902_55216 = G__55240;
i__53903_55217 = G__55241;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq53876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53876));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53929_55246 = cljs.core.seq(scripts);
var chunk__53930_55247 = null;
var count__53931_55248 = (0);
var i__53932_55249 = (0);
while(true){
if((i__53932_55249 < count__53931_55248)){
var vec__53950_55251 = chunk__53930_55247.cljs$core$IIndexed$_nth$arity$2(null,i__53932_55249);
var script_tag_55252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53950_55251,(0),null);
var script_body_55253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53950_55251,(1),null);
eval(script_body_55253);


var G__55257 = seq__53929_55246;
var G__55258 = chunk__53930_55247;
var G__55259 = count__53931_55248;
var G__55260 = (i__53932_55249 + (1));
seq__53929_55246 = G__55257;
chunk__53930_55247 = G__55258;
count__53931_55248 = G__55259;
i__53932_55249 = G__55260;
continue;
} else {
var temp__5753__auto___55261 = cljs.core.seq(seq__53929_55246);
if(temp__5753__auto___55261){
var seq__53929_55263__$1 = temp__5753__auto___55261;
if(cljs.core.chunked_seq_QMARK_(seq__53929_55263__$1)){
var c__4550__auto___55264 = cljs.core.chunk_first(seq__53929_55263__$1);
var G__55265 = cljs.core.chunk_rest(seq__53929_55263__$1);
var G__55266 = c__4550__auto___55264;
var G__55267 = cljs.core.count(c__4550__auto___55264);
var G__55268 = (0);
seq__53929_55246 = G__55265;
chunk__53930_55247 = G__55266;
count__53931_55248 = G__55267;
i__53932_55249 = G__55268;
continue;
} else {
var vec__53960_55270 = cljs.core.first(seq__53929_55263__$1);
var script_tag_55271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53960_55270,(0),null);
var script_body_55272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53960_55270,(1),null);
eval(script_body_55272);


var G__55274 = cljs.core.next(seq__53929_55263__$1);
var G__55275 = null;
var G__55276 = (0);
var G__55277 = (0);
seq__53929_55246 = G__55274;
chunk__53930_55247 = G__55275;
count__53931_55248 = G__55276;
i__53932_55249 = G__55277;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__53966){
var vec__53968 = p__53966;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__53986 = shadow.dom.dom_node(el);
var G__53987 = cls;
return goog.dom.getAncestorByClass(G__53986,G__53987);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53991 = arguments.length;
switch (G__53991) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__53995 = shadow.dom.dom_node(el);
var G__53996 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__53995,G__53996);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54003 = shadow.dom.dom_node(el);
var G__54004 = cljs.core.name(tag);
var G__54005 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54003,G__54004,G__54005);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54010 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54010);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54014 = shadow.dom.dom_node(dom);
var G__54015 = value;
return goog.dom.forms.setValue(G__54014,G__54015);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54035 = cljs.core.seq(style_keys);
var chunk__54036 = null;
var count__54037 = (0);
var i__54038 = (0);
while(true){
if((i__54038 < count__54037)){
var it = chunk__54036.cljs$core$IIndexed$_nth$arity$2(null,i__54038);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55307 = seq__54035;
var G__55308 = chunk__54036;
var G__55309 = count__54037;
var G__55310 = (i__54038 + (1));
seq__54035 = G__55307;
chunk__54036 = G__55308;
count__54037 = G__55309;
i__54038 = G__55310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54035);
if(temp__5753__auto__){
var seq__54035__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54035__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54035__$1);
var G__55312 = cljs.core.chunk_rest(seq__54035__$1);
var G__55313 = c__4550__auto__;
var G__55314 = cljs.core.count(c__4550__auto__);
var G__55315 = (0);
seq__54035 = G__55312;
chunk__54036 = G__55313;
count__54037 = G__55314;
i__54038 = G__55315;
continue;
} else {
var it = cljs.core.first(seq__54035__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55324 = cljs.core.next(seq__54035__$1);
var G__55325 = null;
var G__55326 = (0);
var G__55327 = (0);
seq__54035 = G__55324;
chunk__54036 = G__55325;
count__54037 = G__55326;
i__54038 = G__55327;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54054,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54081 = k54054;
var G__54081__$1 = (((G__54081 instanceof cljs.core.Keyword))?G__54081.fqn:null);
switch (G__54081__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54054,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54084){
var vec__54085 = p__54084;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54085,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54085,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54053){
var self__ = this;
var G__54053__$1 = this;
return (new cljs.core.RecordIter((0),G__54053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54103 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54103(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54056,other54057){
var self__ = this;
var this54056__$1 = this;
return (((!((other54057 == null)))) && ((this54056__$1.constructor === other54057.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54056__$1.x,other54057.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54056__$1.y,other54057.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54056__$1.__extmap,other54057.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54053){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54119 = cljs.core.keyword_identical_QMARK_;
var expr__54120 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54122 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54123 = expr__54120;
return (pred__54119.cljs$core$IFn$_invoke$arity$2 ? pred__54119.cljs$core$IFn$_invoke$arity$2(G__54122,G__54123) : pred__54119.call(null,G__54122,G__54123));
})())){
return (new shadow.dom.Coordinate(G__54053,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54125 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54126 = expr__54120;
return (pred__54119.cljs$core$IFn$_invoke$arity$2 ? pred__54119.cljs$core$IFn$_invoke$arity$2(G__54125,G__54126) : pred__54119.call(null,G__54125,G__54126));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54053,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54053),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54053){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54053,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54066){
var extmap__4424__auto__ = (function (){var G__54150 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54066,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54150);
} else {
return G__54150;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54066),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54066),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54158 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54158);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54165 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54165);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54168 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54168);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54182,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54198 = k54182;
var G__54198__$1 = (((G__54198 instanceof cljs.core.Keyword))?G__54198.fqn:null);
switch (G__54198__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54182,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54209){
var vec__54210 = p__54209;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54210,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54210,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54181){
var self__ = this;
var G__54181__$1 = this;
return (new cljs.core.RecordIter((0),G__54181__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54244 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54244(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54183,other54184){
var self__ = this;
var this54183__$1 = this;
return (((!((other54184 == null)))) && ((this54183__$1.constructor === other54184.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54183__$1.w,other54184.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54183__$1.h,other54184.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54183__$1.__extmap,other54184.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54181){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54264 = cljs.core.keyword_identical_QMARK_;
var expr__54265 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54268 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54269 = expr__54265;
return (pred__54264.cljs$core$IFn$_invoke$arity$2 ? pred__54264.cljs$core$IFn$_invoke$arity$2(G__54268,G__54269) : pred__54264.call(null,G__54268,G__54269));
})())){
return (new shadow.dom.Size(G__54181,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54270 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54271 = expr__54265;
return (pred__54264.cljs$core$IFn$_invoke$arity$2 ? pred__54264.cljs$core$IFn$_invoke$arity$2(G__54270,G__54271) : pred__54264.call(null,G__54270,G__54271));
})())){
return (new shadow.dom.Size(self__.w,G__54181,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54181),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54181){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54181,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54187){
var extmap__4424__auto__ = (function (){var G__54292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54187,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54187)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54292);
} else {
return G__54292;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54187),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54187),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54303 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54303);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55484 = (i + (1));
var G__55485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55484;
ret = G__55485;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54325){
var vec__54327 = p__54325;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54327,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54346 = arguments.length;
switch (G__54346) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54378_55505 = new_node;
var G__54379_55506 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54378_55505,G__54379_55506);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54388_55508 = new_node;
var G__54389_55509 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54388_55508,G__54389_55509);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55518 = ps;
var G__55519 = (i + (1));
el__$1 = G__55518;
i = G__55519;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54409 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54409);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54425 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54425);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54431 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54431);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54437 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54437,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54437,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54437,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54451_55528 = cljs.core.seq(props);
var chunk__54452_55529 = null;
var count__54453_55530 = (0);
var i__54454_55531 = (0);
while(true){
if((i__54454_55531 < count__54453_55530)){
var vec__54496_55532 = chunk__54452_55529.cljs$core$IIndexed$_nth$arity$2(null,i__54454_55531);
var k_55533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496_55532,(0),null);
var v_55534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496_55532,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_55533);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55533),v_55534);


var G__55535 = seq__54451_55528;
var G__55536 = chunk__54452_55529;
var G__55537 = count__54453_55530;
var G__55538 = (i__54454_55531 + (1));
seq__54451_55528 = G__55535;
chunk__54452_55529 = G__55536;
count__54453_55530 = G__55537;
i__54454_55531 = G__55538;
continue;
} else {
var temp__5753__auto___55539 = cljs.core.seq(seq__54451_55528);
if(temp__5753__auto___55539){
var seq__54451_55540__$1 = temp__5753__auto___55539;
if(cljs.core.chunked_seq_QMARK_(seq__54451_55540__$1)){
var c__4550__auto___55541 = cljs.core.chunk_first(seq__54451_55540__$1);
var G__55542 = cljs.core.chunk_rest(seq__54451_55540__$1);
var G__55543 = c__4550__auto___55541;
var G__55544 = cljs.core.count(c__4550__auto___55541);
var G__55545 = (0);
seq__54451_55528 = G__55542;
chunk__54452_55529 = G__55543;
count__54453_55530 = G__55544;
i__54454_55531 = G__55545;
continue;
} else {
var vec__54516_55546 = cljs.core.first(seq__54451_55540__$1);
var k_55547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516_55546,(0),null);
var v_55548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516_55546,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_55547);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55547),v_55548);


var G__55549 = cljs.core.next(seq__54451_55540__$1);
var G__55550 = null;
var G__55551 = (0);
var G__55552 = (0);
seq__54451_55528 = G__55549;
chunk__54452_55529 = G__55550;
count__54453_55530 = G__55551;
i__54454_55531 = G__55552;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54545 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54545,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54545,(1),null);
var seq__54549_55555 = cljs.core.seq(node_children);
var chunk__54551_55556 = null;
var count__54552_55557 = (0);
var i__54553_55558 = (0);
while(true){
if((i__54553_55558 < count__54552_55557)){
var child_struct_55560 = chunk__54551_55556.cljs$core$IIndexed$_nth$arity$2(null,i__54553_55558);
if((!((child_struct_55560 == null)))){
if(typeof child_struct_55560 === 'string'){
var text_55561 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55561),child_struct_55560].join(''));
} else {
var children_55562 = shadow.dom.svg_node(child_struct_55560);
if(cljs.core.seq_QMARK_(children_55562)){
var seq__54626_55563 = cljs.core.seq(children_55562);
var chunk__54628_55564 = null;
var count__54629_55565 = (0);
var i__54630_55566 = (0);
while(true){
if((i__54630_55566 < count__54629_55565)){
var child_55567 = chunk__54628_55564.cljs$core$IIndexed$_nth$arity$2(null,i__54630_55566);
if(cljs.core.truth_(child_55567)){
node.appendChild(child_55567);


var G__55569 = seq__54626_55563;
var G__55570 = chunk__54628_55564;
var G__55571 = count__54629_55565;
var G__55572 = (i__54630_55566 + (1));
seq__54626_55563 = G__55569;
chunk__54628_55564 = G__55570;
count__54629_55565 = G__55571;
i__54630_55566 = G__55572;
continue;
} else {
var G__55573 = seq__54626_55563;
var G__55574 = chunk__54628_55564;
var G__55575 = count__54629_55565;
var G__55576 = (i__54630_55566 + (1));
seq__54626_55563 = G__55573;
chunk__54628_55564 = G__55574;
count__54629_55565 = G__55575;
i__54630_55566 = G__55576;
continue;
}
} else {
var temp__5753__auto___55577 = cljs.core.seq(seq__54626_55563);
if(temp__5753__auto___55577){
var seq__54626_55578__$1 = temp__5753__auto___55577;
if(cljs.core.chunked_seq_QMARK_(seq__54626_55578__$1)){
var c__4550__auto___55579 = cljs.core.chunk_first(seq__54626_55578__$1);
var G__55580 = cljs.core.chunk_rest(seq__54626_55578__$1);
var G__55581 = c__4550__auto___55579;
var G__55582 = cljs.core.count(c__4550__auto___55579);
var G__55583 = (0);
seq__54626_55563 = G__55580;
chunk__54628_55564 = G__55581;
count__54629_55565 = G__55582;
i__54630_55566 = G__55583;
continue;
} else {
var child_55584 = cljs.core.first(seq__54626_55578__$1);
if(cljs.core.truth_(child_55584)){
node.appendChild(child_55584);


var G__55585 = cljs.core.next(seq__54626_55578__$1);
var G__55586 = null;
var G__55587 = (0);
var G__55588 = (0);
seq__54626_55563 = G__55585;
chunk__54628_55564 = G__55586;
count__54629_55565 = G__55587;
i__54630_55566 = G__55588;
continue;
} else {
var G__55591 = cljs.core.next(seq__54626_55578__$1);
var G__55592 = null;
var G__55593 = (0);
var G__55594 = (0);
seq__54626_55563 = G__55591;
chunk__54628_55564 = G__55592;
count__54629_55565 = G__55593;
i__54630_55566 = G__55594;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55562);
}
}


var G__55595 = seq__54549_55555;
var G__55596 = chunk__54551_55556;
var G__55597 = count__54552_55557;
var G__55598 = (i__54553_55558 + (1));
seq__54549_55555 = G__55595;
chunk__54551_55556 = G__55596;
count__54552_55557 = G__55597;
i__54553_55558 = G__55598;
continue;
} else {
var G__55599 = seq__54549_55555;
var G__55600 = chunk__54551_55556;
var G__55601 = count__54552_55557;
var G__55602 = (i__54553_55558 + (1));
seq__54549_55555 = G__55599;
chunk__54551_55556 = G__55600;
count__54552_55557 = G__55601;
i__54553_55558 = G__55602;
continue;
}
} else {
var temp__5753__auto___55603 = cljs.core.seq(seq__54549_55555);
if(temp__5753__auto___55603){
var seq__54549_55604__$1 = temp__5753__auto___55603;
if(cljs.core.chunked_seq_QMARK_(seq__54549_55604__$1)){
var c__4550__auto___55605 = cljs.core.chunk_first(seq__54549_55604__$1);
var G__55606 = cljs.core.chunk_rest(seq__54549_55604__$1);
var G__55607 = c__4550__auto___55605;
var G__55608 = cljs.core.count(c__4550__auto___55605);
var G__55609 = (0);
seq__54549_55555 = G__55606;
chunk__54551_55556 = G__55607;
count__54552_55557 = G__55608;
i__54553_55558 = G__55609;
continue;
} else {
var child_struct_55610 = cljs.core.first(seq__54549_55604__$1);
if((!((child_struct_55610 == null)))){
if(typeof child_struct_55610 === 'string'){
var text_55611 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55611),child_struct_55610].join(''));
} else {
var children_55612 = shadow.dom.svg_node(child_struct_55610);
if(cljs.core.seq_QMARK_(children_55612)){
var seq__54660_55613 = cljs.core.seq(children_55612);
var chunk__54662_55614 = null;
var count__54663_55615 = (0);
var i__54664_55616 = (0);
while(true){
if((i__54664_55616 < count__54663_55615)){
var child_55621 = chunk__54662_55614.cljs$core$IIndexed$_nth$arity$2(null,i__54664_55616);
if(cljs.core.truth_(child_55621)){
node.appendChild(child_55621);


var G__55622 = seq__54660_55613;
var G__55623 = chunk__54662_55614;
var G__55624 = count__54663_55615;
var G__55625 = (i__54664_55616 + (1));
seq__54660_55613 = G__55622;
chunk__54662_55614 = G__55623;
count__54663_55615 = G__55624;
i__54664_55616 = G__55625;
continue;
} else {
var G__55626 = seq__54660_55613;
var G__55627 = chunk__54662_55614;
var G__55628 = count__54663_55615;
var G__55629 = (i__54664_55616 + (1));
seq__54660_55613 = G__55626;
chunk__54662_55614 = G__55627;
count__54663_55615 = G__55628;
i__54664_55616 = G__55629;
continue;
}
} else {
var temp__5753__auto___55630__$1 = cljs.core.seq(seq__54660_55613);
if(temp__5753__auto___55630__$1){
var seq__54660_55631__$1 = temp__5753__auto___55630__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54660_55631__$1)){
var c__4550__auto___55633 = cljs.core.chunk_first(seq__54660_55631__$1);
var G__55634 = cljs.core.chunk_rest(seq__54660_55631__$1);
var G__55635 = c__4550__auto___55633;
var G__55636 = cljs.core.count(c__4550__auto___55633);
var G__55637 = (0);
seq__54660_55613 = G__55634;
chunk__54662_55614 = G__55635;
count__54663_55615 = G__55636;
i__54664_55616 = G__55637;
continue;
} else {
var child_55638 = cljs.core.first(seq__54660_55631__$1);
if(cljs.core.truth_(child_55638)){
node.appendChild(child_55638);


var G__55639 = cljs.core.next(seq__54660_55631__$1);
var G__55640 = null;
var G__55641 = (0);
var G__55642 = (0);
seq__54660_55613 = G__55639;
chunk__54662_55614 = G__55640;
count__54663_55615 = G__55641;
i__54664_55616 = G__55642;
continue;
} else {
var G__55643 = cljs.core.next(seq__54660_55631__$1);
var G__55644 = null;
var G__55645 = (0);
var G__55646 = (0);
seq__54660_55613 = G__55643;
chunk__54662_55614 = G__55644;
count__54663_55615 = G__55645;
i__54664_55616 = G__55646;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55612);
}
}


var G__55653 = cljs.core.next(seq__54549_55604__$1);
var G__55654 = null;
var G__55655 = (0);
var G__55656 = (0);
seq__54549_55555 = G__55653;
chunk__54551_55556 = G__55654;
count__54552_55557 = G__55655;
i__54553_55558 = G__55656;
continue;
} else {
var G__55657 = cljs.core.next(seq__54549_55604__$1);
var G__55658 = null;
var G__55659 = (0);
var G__55660 = (0);
seq__54549_55555 = G__55657;
chunk__54551_55556 = G__55658;
count__54552_55557 = G__55659;
i__54553_55558 = G__55660;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54678_55665 = shadow.dom._to_svg;
var G__54679_55666 = "string";
var G__54680_55667 = ((function (G__54678_55665,G__54679_55666){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54678_55665,G__54679_55666))
;
goog.object.set(G__54678_55665,G__54679_55666,G__54680_55667);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__54689_55675 = shadow.dom._to_svg;
var G__54690_55676 = "null";
var G__54691_55677 = ((function (G__54689_55675,G__54690_55676){
return (function (_){
return null;
});})(G__54689_55675,G__54690_55676))
;
goog.object.set(G__54689_55675,G__54690_55676,G__54691_55677);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55679 = arguments.length;
var i__4731__auto___55681 = (0);
while(true){
if((i__4731__auto___55681 < len__4730__auto___55679)){
args__4736__auto__.push((arguments[i__4731__auto___55681]));

var G__55682 = (i__4731__auto___55681 + (1));
i__4731__auto___55681 = G__55682;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq54694){
var G__54695 = cljs.core.first(seq54694);
var seq54694__$1 = cljs.core.next(seq54694);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54695,seq54694__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54709 = arguments.length;
switch (G__54709) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__54719_55703 = shadow.dom.dom_node(el);
var G__54720_55704 = cljs.core.name(event);
var G__54721_55705 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54719_55703,G__54720_55704,G__54721_55705) : shadow.dom.dom_listen.call(null,G__54719_55703,G__54720_55704,G__54721_55705));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__50030__auto___55709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto___55709,buf,chan,event_fn){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto___55709,buf,chan,event_fn){
return (function (state_54726){
var state_val_54727 = (state_54726[(1)]);
if((state_val_54727 === (1))){
var state_54726__$1 = state_54726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54726__$1,(2),once_or_cleanup);
} else {
if((state_val_54727 === (2))){
var inst_54723 = (state_54726[(2)]);
var inst_54724 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54726__$1 = (function (){var statearr_54730 = state_54726;
(statearr_54730[(7)] = inst_54723);

return statearr_54730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54726__$1,inst_54724);
} else {
return null;
}
}
});})(c__50030__auto___55709,buf,chan,event_fn))
;
return ((function (switch__49505__auto__,c__50030__auto___55709,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__49506__auto__ = null;
var shadow$dom$state_machine__49506__auto____0 = (function (){
var statearr_54732 = [null,null,null,null,null,null,null,null];
(statearr_54732[(0)] = shadow$dom$state_machine__49506__auto__);

(statearr_54732[(1)] = (1));

return statearr_54732;
});
var shadow$dom$state_machine__49506__auto____1 = (function (state_54726){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_54726);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e54734){if((e54734 instanceof Object)){
var ex__49509__auto__ = e54734;
var statearr_54736_55723 = state_54726;
(statearr_54736_55723[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55725 = state_54726;
state_54726 = G__55725;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
shadow$dom$state_machine__49506__auto__ = function(state_54726){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49506__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49506__auto____1.call(this,state_54726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49506__auto____0;
shadow$dom$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49506__auto____1;
return shadow$dom$state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto___55709,buf,chan,event_fn))
})();
var state__50032__auto__ = (function (){var statearr_54746 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_54746[(6)] = c__50030__auto___55709);

return statearr_54746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto___55709,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
