goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('cljs.core');
goog.require('edn_query_language.core');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.inspect.diff');
goog.require('com.fulcrologic.fulcro.inspect.transit');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');

/** @define {boolean} */
goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__53699 = arguments.length;
switch (G__53699) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4131__auto__ = (function (){var G__53710 = obj;
var G__53711 = (function (){var G__53712 = k;
if((G__53712 == null)){
return null;
} else {
return cljs.core.name(G__53712);
}
})();
return goog.object.get(G__53710,G__53711);
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3;

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app__$1){
var G__53718 = app__$1;
var G__53718__$1 = (((G__53718 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__53718));
if((G__53718__$1 == null)){
return null;
} else {
return cljs.core.deref(G__53718__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app__$1){
var G__53721 = app__$1;
if((G__53721 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__53721);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app__$1){
var G__53730 = app__$1;
if((G__53730 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__53730);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app__$1){
var G__53734 = app__$1;
var G__53734__$1 = (((G__53734 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__53734));
var G__53734__$2 = (((G__53734__$1 == null))?null:cljs.core.deref(G__53734__$1));
if((G__53734__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__53734__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app__$1){
var G__53741 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__53741__$1 = (((G__53741 == null))?null:cljs.core.deref(G__53741));
if((G__53741__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__53741__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app__$1){
var G__53749 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
if((G__53749 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__53749);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__53764 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__53764 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__53764);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app__$1,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options) : tx_BANG_.call(null,app__$1,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc = (function com$fulcrologic$fulcro$inspect$inspect_client$fixed_size_assoc(size,db,key,value){
var map__53782 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,value),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),key);
var map__53782__$1 = (((((!((map__53782 == null))))?(((((map__53782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53782):map__53782);
var db_SINGLEQUOTE_ = map__53782__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964));
if((cljs.core.count(history) > size)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE_,cljs.core.first(history)),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),((function (map__53782,map__53782__$1,db_SINGLEQUOTE_,history){
return (function (p1__53775_SHARP_){
return cljs.core.vec(cljs.core.next(p1__53775_SHARP_));
});})(map__53782,map__53782__$1,db_SINGLEQUOTE_,history))
);
} else {
return db_SINGLEQUOTE_;
}
});
/**
 * Record a snapshot of history on the app itself for inspect to reference via events to do things like preview
 * history.
 */
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history = (function com$fulcrologic$fulcro$inspect$inspect_client$update_state_history(app__$1,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__53796_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc(com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE,p1__53796_SHARP_,cljs.core.hash(state),state);
}));
});
com.fulcrologic.fulcro.inspect.inspect_client.db_from_history = (function com$fulcrologic$fulcro$inspect$inspect_client$db_from_history(app__$1,state_hash){
var G__53809 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__53809__$1 = (((G__53809 == null))?null:cljs.core.deref(G__53809));
var G__53809__$2 = (((G__53809__$1 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__53809__$1));
if((G__53809__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__53809__$2,state_hash);
}
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app__$1,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,new_state);

var diff = com.fulcrologic.fulcro.inspect.diff.diff(old_state,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__53824 = event;
var G__53824__$1 = (((G__53824 == null))?null:goog.object.getValueByKeys(G__53824,"data","fulcro-inspect-devtool-message"));
if((G__53824__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__53824__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__50030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50030__auto__){
return (function (){
var f__50031__auto__ = (function (){var switch__49505__auto__ = ((function (c__50030__auto__){
return (function (state_53860){
var state_val_53862 = (state_53860[(1)]);
if((state_val_53862 === (1))){
var state_53860__$1 = state_53860;
var statearr_53870_54312 = state_53860__$1;
(statearr_53870_54312[(2)] = null);

(statearr_53870_54312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53862 === (2))){
var state_53860__$1 = state_53860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53860__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_53862 === (3))){
var inst_53856 = (state_53860[(2)]);
var state_53860__$1 = state_53860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53860__$1,inst_53856);
} else {
if((state_val_53862 === (4))){
var inst_53831 = (state_53860[(7)]);
var inst_53831__$1 = (state_53860[(2)]);
var state_53860__$1 = (function (){var statearr_53875 = state_53860;
(statearr_53875[(7)] = inst_53831__$1);

return statearr_53875;
})();
if(cljs.core.truth_(inst_53831__$1)){
var statearr_53877_54326 = state_53860__$1;
(statearr_53877_54326[(1)] = (5));

} else {
var statearr_53878_54330 = state_53860__$1;
(statearr_53878_54330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53862 === (5))){
var inst_53831 = (state_53860[(7)]);
var inst_53837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53831,(0),null);
var inst_53839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53831,(1),null);
var inst_53840 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_53842 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_53843 = (new Date());
var inst_53844 = [inst_53837,inst_53839,inst_53843];
var inst_53845 = cljs.core.PersistentHashMap.fromArrays(inst_53842,inst_53844);
var inst_53846 = com.fulcrologic.fulcro.inspect.transit.write(inst_53845);
var inst_53847 = [inst_53846];
var inst_53848 = cljs.core.PersistentHashMap.fromArrays(inst_53840,inst_53847);
var inst_53849 = cljs.core.clj__GT_js(inst_53848);
var inst_53850 = window.postMessage(inst_53849,"*");
var state_53860__$1 = (function (){var statearr_53897 = state_53860;
(statearr_53897[(8)] = inst_53850);

return statearr_53897;
})();
var statearr_53898_54352 = state_53860__$1;
(statearr_53898_54352[(2)] = null);

(statearr_53898_54352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53862 === (6))){
var state_53860__$1 = state_53860;
var statearr_53907_54354 = state_53860__$1;
(statearr_53907_54354[(2)] = null);

(statearr_53907_54354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53862 === (7))){
var inst_53854 = (state_53860[(2)]);
var state_53860__$1 = state_53860;
var statearr_53913_54358 = state_53860__$1;
(statearr_53913_54358[(2)] = inst_53854);

(statearr_53913_54358[(1)] = (3));


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
});})(c__50030__auto__))
;
return ((function (switch__49505__auto__,c__50030__auto__){
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____0 = (function (){
var statearr_53915 = [null,null,null,null,null,null,null,null,null];
(statearr_53915[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__);

(statearr_53915[(1)] = (1));

return statearr_53915;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____1 = (function (state_53860){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_53860);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e53916){if((e53916 instanceof Object)){
var ex__49509__auto__ = e53916;
var statearr_53918_54365 = state_53860;
(statearr_53918_54365[(5)] = ex__49509__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54370 = state_53860;
state_53860 = G__54370;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__ = function(state_53860){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____1.call(this,state_53860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__49506__auto__;
})()
;})(switch__49505__auto__,c__50030__auto__))
})();
var state__50032__auto__ = (function (){var statearr_53921 = (f__50031__auto__.cljs$core$IFn$_invoke$arity$0 ? f__50031__auto__.cljs$core$IFn$_invoke$arity$0() : f__50031__auto__.call(null));
(statearr_53921[(6)] = c__50030__auto__);

return statearr_53921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50032__auto__);
});})(c__50030__auto__))
);

return c__50030__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message");
} else {
return and__4120__auto__;
}
})())){
var G__53934 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__53934) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__53934));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume");
} else {
return and__4120__auto__;
}
})())){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__53946 = arguments.length;
switch (G__53946) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app__$1,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app__$1,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app__$1,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__54016){
var map__54017 = p__54016;
var map__54017__$1 = (((((!((map__54017 == null))))?(((((map__54017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54017):map__54017);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54017__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__54023 = type;
var G__54023__$1 = (((G__54023 instanceof cljs.core.Keyword))?G__54023.fqn:null);
switch (G__54023__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__54024 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__54025 = null;
var count__54026 = (0);
var i__54027 = (0);
while(true){
if((i__54027 < count__54026)){
var app__$1 = chunk__54025.cljs$core$IIndexed$_nth$arity$2(null,i__54027);
var state_54432 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_54433 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__54024,chunk__54025,count__54026,i__54027,state_54432,remote_names_54433,app__$1,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (p1__54008_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54008_SHARP_);
});})(seq__54024,chunk__54025,count__54026,i__54027,state_54432,remote_names_54433,app__$1,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,cljs.core.str),remote_names_54433),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_54432,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_54432)]));


var G__54441 = seq__54024;
var G__54442 = chunk__54025;
var G__54443 = count__54026;
var G__54444 = (i__54027 + (1));
seq__54024 = G__54441;
chunk__54025 = G__54442;
count__54026 = G__54443;
i__54027 = G__54444;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54024);
if(temp__5753__auto__){
var seq__54024__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54024__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54024__$1);
var G__54463 = cljs.core.chunk_rest(seq__54024__$1);
var G__54464 = c__4550__auto__;
var G__54465 = cljs.core.count(c__4550__auto__);
var G__54466 = (0);
seq__54024 = G__54463;
chunk__54025 = G__54464;
count__54026 = G__54465;
i__54027 = G__54466;
continue;
} else {
var app__$1 = cljs.core.first(seq__54024__$1);
var state_54468 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_54469 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__54024,chunk__54025,count__54026,i__54027,state_54468,remote_names_54469,app__$1,seq__54024__$1,temp__5753__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (p1__54008_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54008_SHARP_);
});})(seq__54024,chunk__54025,count__54026,i__54027,state_54468,remote_names_54469,app__$1,seq__54024__$1,temp__5753__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,cljs.core.str),remote_names_54469),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_54468,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_54468)]));


var G__54491 = cljs.core.next(seq__54024__$1);
var G__54492 = null;
var G__54493 = (0);
var G__54494 = (0);
seq__54024 = G__54491;
chunk__54025 = G__54492;
count__54026 = G__54493;
i__54027 = G__54494;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__54060 = data;
var map__54060__$1 = (((((!((map__54060 == null))))?(((((map__54060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54060):map__54060);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54060__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54060__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(target_state)){
var target_state_54500__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1),target_state_54500__$1);
} else {
}

var G__54074 = app__$1;
var G__54075 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54074,G__54075) : render_BANG_.call(null,G__54074,G__54075));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,198,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5751__auto__,map__54060,map__54060__$1,target_state,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
});})(temp__5751__auto__,map__54060,map__54060__$1,target_state,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,-650194177);
}

break;
case "fulcro.inspect.client/transact":
var map__54078 = data;
var map__54078__$1 = (((((!((map__54078 == null))))?(((((map__54078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54078):map__54078);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5751__auto__,map__54078,map__54078__$1,tx,tx_ref,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid], null);
});})(temp__5751__auto__,map__54078,map__54078__$1,tx,tx_ref,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,-280043194);
}

break;
case "fulcro.inspect.client/pick-element":
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,210,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pick Element Not implemented for Inspect v3"], null);
});})(G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,407791734);

break;
case "fulcro.inspect.client/show-dom-preview":
var b2__45871__auto__ = data;
if(cljs.core.truth_(b2__45871__auto__)){
var map__54088 = b2__45871__auto__;
var map__54088__$1 = (((((!((map__54088 == null))))?(((((map__54088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54088):map__54088);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__45871__auto____$1 = (function (){var G__54091 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__54091 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54091,app_uuid);
}
})();
if(cljs.core.truth_(b2__45871__auto____$1)){
var app__$1 = b2__45871__auto____$1;
var b2__45871__auto____$2 = com.fulcrologic.fulcro.inspect.inspect_client.db_from_history(app__$1,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(b2__45871__auto____$2)){
var historical_state = b2__45871__auto____$2;
var b2__45871__auto____$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(historical_state));
if(cljs.core.truth_(b2__45871__auto____$3)){
var historical_app = b2__45871__auto____$3;
var b2__45871__auto____$4 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__45871__auto____$4)){
var render_BANG_ = b2__45871__auto____$4;
var G__54096 = historical_app;
var G__54097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54096,G__54097) : render_BANG_.call(null,G__54096,G__54097));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$4,historical_app,b2__45871__auto____$3,historical_state,b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__45871__auto____$4,historical_app,b2__45871__auto____$3,historical_state,b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,-1019957051);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$3,historical_state,b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__45871__auto____$3,historical_state,b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,489348506);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__45871__auto____$2,app__$1,b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,-1325130003);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__45871__auto____$1,map__54088,map__54088__$1,app_uuid,b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,-1002449656);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__45871__auto__,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,930293860);
}

break;
case "fulcro.inspect.client/hide-dom-preview":
var b2__45871__auto__ = data;
if(cljs.core.truth_(b2__45871__auto__)){
var map__54105 = b2__45871__auto__;
var map__54105__$1 = (((((!((map__54105 == null))))?(((((map__54105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54105):map__54105);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__45871__auto____$1 = (function (){var G__54107 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__54107 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54107,app_uuid);
}
})();
if(cljs.core.truth_(b2__45871__auto____$1)){
var app__$1 = b2__45871__auto____$1;
var b2__45871__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__45871__auto____$2)){
var render_BANG_ = b2__45871__auto____$2;
var G__54111 = app__$1;
var G__54112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54111,G__54112) : render_BANG_.call(null,G__54111,G__54112));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/network-request":
var map__54117 = data;
var map__54117__$1 = (((((!((map__54117 == null))))?(((((map__54117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54117):map__54117);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__45871__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__45871__auto__)){
var app__$1 = b2__45871__auto__;
var b2__45871__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__45871__auto____$1)){
var remote = b2__45871__auto____$1;
var b2__45871__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__45871__auto____$2)){
var transmit_BANG_ = b2__45871__auto____$2;
var b2__45871__auto____$3 = edn_query_language.core.query__GT_ast(query);
if(cljs.core.truth_(b2__45871__auto____$3)){
var ast = b2__45871__auto____$3;
var b2__45871__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__45871__auto____$4)){
var tx_id = b2__45871__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,tx_id,query);

var G__54139 = remote;
var G__54140 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (G__54139,tx_id,b2__45871__auto____$4,ast,b2__45871__auto____$3,transmit_BANG_,b2__45871__auto____$2,remote,b2__45871__auto____$1,app__$1,b2__45871__auto__,map__54117,map__54117__$1,remote_name,query,msg_id,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (p__54142){
var map__54143 = p__54142;
var map__54143__$1 = (((((!((map__54143 == null))))?(((((map__54143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54143):map__54143);
var result = map__54143__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__54633 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__54633.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__54633.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__54633.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
});})(G__54139,tx_id,b2__45871__auto____$4,ast,b2__45871__auto____$3,transmit_BANG_,b2__45871__auto____$2,remote,b2__45871__auto____$1,app__$1,b2__45871__auto__,map__54117,map__54117__$1,remote_name,query,msg_id,app_uuid,G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__54139,G__54140) : transmit_BANG_.call(null,G__54139,G__54140));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__54149 = data;
var map__54149__$1 = (((((!((map__54149 == null))))?(((((map__54149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54149):map__54149);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"2.2.5"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,271,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__54023,G__54023__$1,map__54017,map__54017__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
});})(G__54023,G__54023__$1,map__54017,map__54017__$1,type,data))
,null)),null,3185933);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,280,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,-624466342);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app__$1){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app__$1);

com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (networking,state_STAR_,app_uuid){
return (function (p1__54173_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54173_SHARP_);
});})(networking,state_STAR_,app_uuid))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

return cljs.core.add_watch(state_STAR_,app_uuid,((function (networking,state_STAR_,app_uuid){
return (function (p1__54177_SHARP_,p2__54178_SHARP_,p3__54175_SHARP_,p4__54176_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app__$1,p3__54175_SHARP_,p4__54176_SHARP_);
});})(networking,state_STAR_,app_uuid))
);
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app__$1,p__54202,p__54203){
var map__54205 = p__54202;
var map__54205__$1 = (((((!((map__54205 == null))))?(((((map__54205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54205):map__54205);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__54206 = p__54203;
var map__54206__$1 = (((((!((map__54206 == null))))?(((((map__54206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54206):map__54206);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54206__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54206__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54206__$1,new cljs.core.Keyword(null,"state-before","state-before",759087843));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var tx__$1 = (function (){var G__54228 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-hash","fulcro.history/db-before-hash",-1020674495),cljs.core.hash(state_before),new cljs.core.Keyword("fulcro.history","db-after-hash","fulcro.history/db-after-hash",-1603617752),cljs.core.hash(cljs.core.deref(state)),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__54228__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54228,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__54228);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54228__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__54228__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
