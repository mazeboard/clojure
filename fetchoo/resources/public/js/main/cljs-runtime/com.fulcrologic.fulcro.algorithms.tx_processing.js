goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.scheduling');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.specs');
goog.require('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('ghostwheel.core');
goog.require('edn_query_language.core');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
var parallel_QMARK_ = (function (p__64970){
var map__64972 = p__64970;
var map__64972__$1 = (((((!((map__64972 == null))))?(((((map__64972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64972):map__64972);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64972__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__64969 = cljs.core.group_by(parallel_QMARK_,sends);
var map__64969__$1 = (((((!((map__64969 == null))))?(((((map__64969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64969):map__64969);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64969__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64969__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$mutation_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64987_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64987_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64992_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64992_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
var vec__64996 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64996,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64996,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__64996,active_queue,send_queue__$1){
return (function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
});})(vec__64996,active_queue,send_queue__$1))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__64999 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64996,active_queue,send_queue__$1,id_sequence,clusters){
return (function (result,id){
var vec__65000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__65001 = cljs.core.seq(vec__65000);
var first__65002 = cljs.core.first(seq__65001);
var seq__65001__$1 = cljs.core.next(seq__65001);
var map__65003 = first__65002;
var map__65003__$1 = (((((!((map__65003 == null))))?(((((map__65003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65003):map__65003);
var n = map__65003__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65003__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__65001__$1;
var cluster = vec__65000;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
});})(vec__64996,active_queue,send_queue__$1,id_sequence,clusters))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__64999__$1 = (((((!((map__64999 == null))))?(((((map__64999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64999):map__64999);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64999__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64999__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__65007){
var map__65008 = p__65007;
var map__65008__$1 = (((((!((map__65008 == null))))?(((((map__65008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65008):map__65008);
var ast = map__65008__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65008__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65008__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$combine_sends(app__$1,remote_name,send_queue){
var vec__65011 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65011,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65011,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__65014 = cljs.core.split_with(((function (vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options){
return (function (p1__65010_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__65010_SHARP_));
});})(vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options))
,send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65014,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65014,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer){
return (function (acc,p__65017){
var map__65018 = p__65017;
var map__65018__$1 = (((((!((map__65018 == null))))?(((((map__65018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65018):map__65018);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?edn_query_language.core.ast__GT_query(ast):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_query(ast)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
});})(vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer))
,cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__65023){
var map__65024 = p__65023;
var map__65024__$1 = (((((!((map__65024 == null))))?(((((map__65024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65024):map__65024);
var combined_result = map__65024__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__65026 = cljs.core.seq(to_send);
var chunk__65027 = null;
var count__65028 = (0);
var i__65029 = (0);
while(true){
if((i__65029 < count__65028)){
var map__65037 = chunk__65027.cljs$core$IIndexed$_nth$arity$2(null,i__65029);
var map__65037__$1 = (((((!((map__65037 == null))))?(((((map__65037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65037):map__65037);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__65366 = seq__65026;
var G__65367 = chunk__65027;
var G__65368 = count__65028;
var G__65369 = (i__65029 + (1));
seq__65026 = G__65366;
chunk__65027 = G__65367;
count__65028 = G__65368;
i__65029 = G__65369;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65026);
if(temp__5753__auto__){
var seq__65026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65026__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65026__$1);
var G__65371 = cljs.core.chunk_rest(seq__65026__$1);
var G__65372 = c__4550__auto__;
var G__65373 = cljs.core.count(c__4550__auto__);
var G__65374 = (0);
seq__65026 = G__65371;
chunk__65027 = G__65372;
count__65028 = G__65373;
i__65029 = G__65374;
continue;
} else {
var map__65045 = cljs.core.first(seq__65026__$1);
var map__65045__$1 = (((((!((map__65045 == null))))?(((((map__65045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65045):map__65045);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65045__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__65375 = cljs.core.next(seq__65026__$1);
var G__65376 = null;
var G__65377 = (0);
var G__65378 = (0);
seq__65026 = G__65375;
chunk__65027 = G__65376;
count__65028 = G__65377;
i__65029 = G__65378;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__65049){
var map__65050 = p__65049;
var map__65050__$1 = (((((!((map__65050 == null))))?(((((map__65050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65050):map__65050);
var combined_result = map__65050__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__65052_65379 = cljs.core.seq(to_send);
var chunk__65053_65380 = null;
var count__65054_65381 = (0);
var i__65055_65382 = (0);
while(true){
if((i__65055_65382 < count__65054_65381)){
var map__65078_65384 = chunk__65053_65380.cljs$core$IIndexed$_nth$arity$2(null,i__65055_65382);
var map__65078_65385__$1 = (((((!((map__65078_65384 == null))))?(((((map__65078_65384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65078_65384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65078_65384):map__65078_65384);
var ast_65386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65078_65385__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_65387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65078_65385__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_65390 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_65386__$1));
var result_65391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_65390);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__65083_65392 = result_65391;
var map__65083_65393__$1 = (((((!((map__65083_65392 == null))))?(((((map__65083_65392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65083_65392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65083_65392):map__65083_65392);
var status_code_65394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65393__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_65395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083_65393__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_65394)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_65395__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_65394));
}
}catch (e65082){var e_65396 = e65082;
}} else {
}

(result_handler_65387.cljs$core$IFn$_invoke$arity$1 ? result_handler_65387.cljs$core$IFn$_invoke$arity$1(result_65391) : result_handler_65387.call(null,result_65391));


var G__65397 = seq__65052_65379;
var G__65398 = chunk__65053_65380;
var G__65399 = count__65054_65381;
var G__65400 = (i__65055_65382 + (1));
seq__65052_65379 = G__65397;
chunk__65053_65380 = G__65398;
count__65054_65381 = G__65399;
i__65055_65382 = G__65400;
continue;
} else {
var temp__5753__auto___65401 = cljs.core.seq(seq__65052_65379);
if(temp__5753__auto___65401){
var seq__65052_65402__$1 = temp__5753__auto___65401;
if(cljs.core.chunked_seq_QMARK_(seq__65052_65402__$1)){
var c__4550__auto___65403 = cljs.core.chunk_first(seq__65052_65402__$1);
var G__65404 = cljs.core.chunk_rest(seq__65052_65402__$1);
var G__65405 = c__4550__auto___65403;
var G__65406 = cljs.core.count(c__4550__auto___65403);
var G__65407 = (0);
seq__65052_65379 = G__65404;
chunk__65053_65380 = G__65405;
count__65054_65381 = G__65406;
i__65055_65382 = G__65407;
continue;
} else {
var map__65086_65408 = cljs.core.first(seq__65052_65402__$1);
var map__65086_65409__$1 = (((((!((map__65086_65408 == null))))?(((((map__65086_65408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65086_65408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65086_65408):map__65086_65408);
var ast_65410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086_65409__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_65411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086_65409__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_65413 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_65410__$1));
var result_65414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_65413);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__65089_65415 = result_65414;
var map__65089_65416__$1 = (((((!((map__65089_65415 == null))))?(((((map__65089_65415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65089_65415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65089_65415):map__65089_65415);
var status_code_65417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089_65416__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_65418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089_65416__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_65417)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_65418__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_65417));
}
}catch (e65088){var e_65419 = e65088;
}} else {
}

(result_handler_65411.cljs$core$IFn$_invoke$arity$1 ? result_handler_65411.cljs$core$IFn$_invoke$arity$1(result_65414) : result_handler_65411.call(null,result_65414));


var G__65420 = cljs.core.next(seq__65052_65402__$1);
var G__65421 = null;
var G__65422 = (0);
var G__65423 = (0);
seq__65052_65379 = G__65420;
chunk__65053_65380 = G__65421;
count__65054_65381 = G__65422;
i__65055_65382 = G__65423;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
});})(vec__65011,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__65014,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if(cljs.core.seq(to_send)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_defer], 0)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$net_send_BANG_(app__$1,send_node,remote_name){
var b2__45871__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__45871__auto__)){
var remote = b2__45871__auto__;
var b2__45871__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__45871__auto____$1)){
var transmit_BANG_ = b2__45871__auto____$1;
var b2__45871__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
if(cljs.core.truth_(b2__45871__auto____$2)){
var query_transform = b2__45871__auto____$2;
var b2__45871__auto____$3 = (cljs.core.truth_(query_transform)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(send_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),query_transform):send_node);
if(cljs.core.truth_(b2__45871__auto____$3)){
var send_node__$1 = b2__45871__auto____$3;
try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_65431 = edn_query_language.core.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node__$1));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),tx_65431);
}catch (e65104){var e_65432 = e65104;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node__$1) : transmit_BANG_.call(null,remote,send_node__$1));
}catch (e65097){var e = e65097;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,send_node__$1,b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception!"], null);
});})(e,send_node__$1,b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__))
,null)),null,56699819);

try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),"Transmit Exception");
}catch (e65100){var e_65433__$1 = e65100;
}} else {
}

var G__65102 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__65101 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node__$1);
return (fexpr__65101.cljs$core$IFn$_invoke$arity$1 ? fexpr__65101.cljs$core$IFn$_invoke$arity$1(G__65102) : fexpr__65101.call(null,G__65102));
}catch (e65098){var e__$1 = e65098;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,e,send_node__$1,b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
});})(e__$1,e,send_node__$1,b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__))
,null)),null,-1291924180);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__45871__auto____$3,query_transform,b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__))
,null)),null,-1497276543);

var G__65106 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__65105 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__65105.cljs$core$IFn$_invoke$arity$1 ? fexpr__65105.cljs$core$IFn$_invoke$arity$1(G__65106) : fexpr__65105.call(null,G__65106));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__45871__auto____$2,transmit_BANG_,b2__45871__auto____$1,remote,b2__45871__auto__))
,null)),null,-745635682);

var G__65108 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__65107 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__65107.cljs$core$IFn$_invoke$arity$1 ? fexpr__65107.cljs$core$IFn$_invoke$arity$1(G__65108) : fexpr__65107.call(null,G__65108));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto____$1,remote,b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__45871__auto____$1,remote,b2__45871__auto__))
,null)),null,-1156719470);

var G__65110 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__65109 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__65109.cljs$core$IFn$_invoke$arity$1 ? fexpr__65109.cljs$core$IFn$_invoke$arity$1(G__65110) : fexpr__65109.call(null,G__65110));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__45871__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__45871__auto__))
,null)),null,495919220);

var G__65112 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__65111 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__65111.cljs$core$IFn$_invoke$arity$1 ? fexpr__65111.cljs$core$IFn$_invoke$arity$1(G__65112) : fexpr__65111.call(null,G__65112));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__65116){
var map__65117 = p__65116;
var map__65117__$1 = (((((!((map__65117 == null))))?(((((map__65117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65117):map__65117);
var app__$1 = map__65117__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65117__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (send_queues,remote_names,map__65117,map__65117__$1,app__$1,runtime_atom){
return (function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__65121 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65121,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65121,(1),null);
var front = cljs.core.first(serial);
var seq__65124_65446 = cljs.core.seq(p);
var chunk__65125_65447 = null;
var count__65126_65448 = (0);
var i__65127_65449 = (0);
while(true){
if((i__65127_65449 < count__65126_65448)){
var item_65450 = chunk__65125_65447.cljs$core$IIndexed$_nth$arity$2(null,i__65127_65449);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_65450,remote);


var G__65451 = seq__65124_65446;
var G__65452 = chunk__65125_65447;
var G__65453 = count__65126_65448;
var G__65454 = (i__65127_65449 + (1));
seq__65124_65446 = G__65451;
chunk__65125_65447 = G__65452;
count__65126_65448 = G__65453;
i__65127_65449 = G__65454;
continue;
} else {
var temp__5753__auto___65455 = cljs.core.seq(seq__65124_65446);
if(temp__5753__auto___65455){
var seq__65124_65456__$1 = temp__5753__auto___65455;
if(cljs.core.chunked_seq_QMARK_(seq__65124_65456__$1)){
var c__4550__auto___65457 = cljs.core.chunk_first(seq__65124_65456__$1);
var G__65458 = cljs.core.chunk_rest(seq__65124_65456__$1);
var G__65459 = c__4550__auto___65457;
var G__65460 = cljs.core.count(c__4550__auto___65457);
var G__65461 = (0);
seq__65124_65446 = G__65458;
chunk__65125_65447 = G__65459;
count__65126_65448 = G__65460;
i__65127_65449 = G__65461;
continue;
} else {
var item_65462 = cljs.core.first(seq__65124_65456__$1);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_65462,remote);


var G__65463 = cljs.core.next(seq__65124_65456__$1);
var G__65464 = null;
var G__65465 = (0);
var G__65466 = (0);
seq__65124_65446 = G__65463;
chunk__65125_65447 = G__65464;
count__65126_65448 = G__65465;
i__65127_65449 = G__65466;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__65129 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__65129__$1 = (((((!((map__65129 == null))))?(((((map__65129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65129):map__65129);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65129__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65129__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
});})(send_queues,remote_names,map__65117,map__65117__$1,app__$1,runtime_atom))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__65137 = arguments.length;
switch (G__65137) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
});})(ast,ast_nodes))
),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
});})(ast,ast_nodes))
)),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.algorithms.tx_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$build_env(var_args){
var G__65142 = arguments.length;
switch (G__65142) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__65143,addl){
var map__65144 = p__65143;
var map__65144__$1 = (((((!((map__65144 == null))))?(((((map__65144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65144):map__65144);
var tx_node = map__65144__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65144__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__65146 = options;
var map__65146__$1 = (((((!((map__65146 == null))))?(((((map__65146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65146):map__65146);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__65148 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__65148__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65148,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__65148);
var G__65148__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65148__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__65148__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65148__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__65148__$2;
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__65152){
var map__65153 = p__65152;
var map__65153__$1 = (((((!((map__65153 == null))))?(((((map__65153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65153):map__65153);
var tx_node = map__65153__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3;

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e65160){var e = e65160;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,241,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch of mutation failed with an exception. No dispatch generated."], null);
});})(e))
,null)),null,-406492111);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = ((function (do_dispatch){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__65161){
var map__65162 = p__65161;
var map__65162__$1 = (((((!((map__65162 == null))))?(((((map__65162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65162):map__65162);
var ele = map__65162__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65162__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__65165 = original_ast_node;
var map__65165__$1 = (((((!((map__65165 == null))))?(((((map__65165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65165):map__65165);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__65168 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65168,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__65168;
}
});})(do_dispatch))
;
var dispatch_all = ((function (do_dispatch,dispatch){
return (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});})(do_dispatch,dispatch))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__65173){
var map__65174 = p__65173;
var map__65174__$1 = (((((!((map__65174 == null))))?(((((map__65174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65174):map__65174);
var app__$1 = map__65174__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65174__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__65174,map__65174__$1,app__$1,runtime_atom){
return (function (p1__65169_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__65169_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__65169_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
});})(map__65174,map__65174__$1,app__$1,runtime_atom))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (dispatched_nodes,map__65174,map__65174__$1,app__$1,runtime_atom){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),((function (dispatched_nodes,map__65174,map__65174__$1,app__$1,runtime_atom){
return (function (p1__65170_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__65170_SHARP_,dispatched_nodes);
});})(dispatched_nodes,map__65174,map__65174__$1,app__$1,runtime_atom))
),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.PersistentVector.EMPTY);
});})(dispatched_nodes,map__65174,map__65174__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__65179 = arguments.length;
switch (G__65179) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__65183 = arguments.length;
switch (G__65183) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__65185 = arguments.length;
switch (G__65185) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__65191){
var map__65192 = p__65191;
var map__65192__$1 = (((((!((map__65192 == null))))?(((((map__65192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65192):map__65192);
var node = map__65192__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,map__65192,map__65192__$1,node,id,elements){
return (function (p__65196,element){
var map__65197 = p__65196;
var map__65197__$1 = (((((!((map__65197 == null))))?(((((map__65197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65197):map__65197);
var acc = map__65197__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__65201 = element;
var map__65201__$1 = (((((!((map__65201 == null))))?(((((map__65201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65201):map__65201);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65201__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65201__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65201__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65201__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__65202 = dispatch;
var map__65202__$1 = (((((!((map__65202 == null))))?(((((map__65202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65202):map__65202);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65206 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65206) : complete_QMARK_.call(null,G__65206));
}
})());
} else {
return and__4120__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4120__auto__ = (function (){var or__4131__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__65208 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65208) : complete_QMARK_.call(null,G__65208));
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e65209){var e_65504 = e65209;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,319,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_65504,map__65201,map__65201__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__65202,map__65202__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__65197,map__65197__$1,acc,done_QMARK_,new_elements,remotes,map__65192,map__65192__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65504,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_65504,map__65201,map__65201__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__65202,map__65202__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__65197,map__65197__$1,acc,done_QMARK_,new_elements,remotes,map__65192,map__65192__$1,node,id,elements))
,null)),null,-1623490856);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_65505 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_65505], null));
}catch (e65210){var e_65506 = e65210;
}} else {
}
} else {
}

return new_acc;
}
});})(remotes,map__65192,map__65192__$1,node,id,elements))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__65213){
var map__65214 = p__65213;
var map__65214__$1 = (((((!((map__65214 == null))))?(((((map__65214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65214):map__65214);
var node = map__65214__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65214,map__65214__$1,node,id,elements){
return (function (new_elements,element){
var map__65216 = element;
var map__65216__$1 = (((((!((map__65216 == null))))?(((((map__65216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65216):map__65216);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__65217 = dispatch;
var map__65217__$1 = (((((!((map__65217 == null))))?(((((map__65217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65217):map__65217);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var G__65220 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65220) : complete_QMARK_.call(null,G__65220));
})());
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e65221){var e_65507 = e65221;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,348,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_65507,map__65216,map__65216__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__65217,map__65217__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__65214,map__65214__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65507,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_65507,map__65216,map__65216__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__65217,map__65217__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__65214,map__65214__$1,node,id,elements))
,null)),null,1148059568);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_65508 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_65508], null));
}catch (e65224){var e_65509 = e65224;
}} else {
}
} else {
}

return new_acc;
});})(map__65214,map__65214__$1,node,id,elements))
,cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__65225){
var map__65226 = p__65225;
var map__65226__$1 = (((((!((map__65226 == null))))?(((((map__65226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65226):map__65226);
var tx_node = map__65226__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65226__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var element_complete_QMARK_ = ((function (map__65226,map__65226__$1,tx_node,elements){
return (function (p__65228){
var map__65229 = p__65228;
var map__65229__$1 = (((((!((map__65229 == null))))?(((((map__65229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65229):map__65229);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});})(map__65226,map__65226__$1,tx_node,elements))
;
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__65235,remote,txn_id,ele_idx){
var map__65236 = p__65235;
var map__65236__$1 = (((((!((map__65236 == null))))?(((((map__65236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65236):map__65236);
var app__$1 = map__65236__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__65241 = cljs.core.deref(runtime_atom);
var map__65241__$1 = (((((!((map__65241 == null))))?(((((map__65241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65241):map__65241);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65241__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue__$1 = cljs.core.filterv(((function (map__65241,map__65241__$1,send_queues,queue,map__65236,map__65236__$1,app__$1,runtime_atom){
return (function (p__65243){
var map__65244 = p__65243;
var map__65244__$1 = (((((!((map__65244 == null))))?(((((map__65244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65244):map__65244);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65244__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65244__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
});})(map__65241,map__65241__$1,send_queues,queue,map__65236,map__65236__$1,app__$1,runtime_atom))
,queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue__$1);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__65252 = arguments.length;
switch (G__65252) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__65256,txn_id,ele_idx,remote,result,result_key){
var map__65257 = p__65256;
var map__65257__$1 = (((((!((map__65257 == null))))?(((((map__65257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65257):map__65257);
var app__$1 = map__65257__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_queue,map__65257,map__65257__$1,app__$1,runtime_atom){
return (function (idx,p__65259){
var map__65260 = p__65259;
var map__65260__$1 = (((((!((map__65260 == null))))?(((((map__65260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65260):map__65260);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
});})(active_queue,map__65257,map__65257__$1,app__$1,runtime_atom))
,(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,394,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (active_queue,txn_idx,not_found_QMARK_,map__65257,map__65257__$1,app__$1,runtime_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
});})(active_queue,txn_idx,not_found_QMARK_,map__65257,map__65257__$1,app__$1,runtime_atom))
,null)),null,990055454);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6;

/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__65267,p__65268,ele_idx,remote){
var map__65269 = p__65267;
var map__65269__$1 = (((((!((map__65269 == null))))?(((((map__65269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65269):map__65269);
var app__$1 = map__65269__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__65270 = p__65268;
var map__65270__$1 = (((((!((map__65270 == null))))?(((((map__65270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65270):map__65270);
var tx_node = map__65270__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var handler = ((function (map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options))
;
var update_handler = ((function (handler,map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(handler,map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options))
;
var map__65275 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null));
var map__65275__$1 = (((((!((map__65275 == null))))?(((((map__65275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65275):map__65275);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handler,update_handler,map__65275,map__65275__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire], null);
});})(handler,update_handler,map__65275,map__65275__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__65269,map__65269__$1,app__$1,runtime_atom,map__65270,map__65270__$1,tx_node,id,options))
,null)),null,-600760155);

return remote_desire;
})()

))));
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"The remote AST was empty!"], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__65280){
var map__65281 = p__65280;
var map__65281__$1 = (((((!((map__65281 == null))))?(((((map__65281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65281):map__65281);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,to_dispatch,map__65281,map__65281__$1,idx,dispatch,started_QMARK_){
return (function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,node,idx,remote);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
}
});})(remotes,to_dispatch,map__65281,map__65281__$1,idx,dispatch,started_QMARK_))
,tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__65283){
var map__65284 = p__65283;
var map__65284__$1 = (((((!((map__65284 == null))))?(((((map__65284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65284):map__65284);
var tx_node = map__65284__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.every_QMARK_(((function (map__65284,map__65284__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__65286){
var map__65287 = p__65286;
var map__65287__$1 = (((((!((map__65287 == null))))?(((((map__65287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65287):map__65287);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
});})(map__65284,map__65284__$1,tx_node,elements))
,elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__65289){
var map__65290 = p__65289;
var map__65290__$1 = (((((!((map__65290 == null))))?(((((map__65290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65290):map__65290);
var element = map__65290__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__65292){
var map__65293 = p__65292;
var map__65293__$1 = (((((!((map__65293 == null))))?(((((map__65293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65293):map__65293);
var tx_node = map__65293__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
if(com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__65296){
var map__65297 = p__65296;
var map__65297__$1 = (((((!((map__65297 == null))))?(((((map__65297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65297):map__65297);
var tx_node = map__65297__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (optimistic_QMARK_,map__65297,map__65297__$1,tx_node,options,elements){
return (function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
});})(optimistic_QMARK_,map__65297,map__65297__$1,tx_node,options,elements))
,tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__65301,remote){
var map__65303 = p__65301;
var map__65303__$1 = (((((!((map__65303 == null))))?(((((map__65303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65303):map__65303);
var tx_element = map__65303__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_65554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_65555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_65555)){
var env_65556 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"result","result",1415092211),result_65554], null));
try{(handler_65555.cljs$core$IFn$_invoke$arity$1 ? handler_65555.cljs$core$IFn$_invoke$arity$1(env_65556) : handler_65555.call(null,env_65556));
}catch (e65305){var e_65557 = e65305;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,523,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_65557,env_65556,result_65554,handler_65555,map__65303,map__65303__$1,tx_element,results,dispatch,original_ast_node){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65557,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
});})(e_65557,env_65556,result_65554,handler_65555,map__65303,map__65303__$1,tx_element,results,dispatch,original_ast_node))
,null)),null,1167359481);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__65306){
var map__65307 = p__65306;
var map__65307__$1 = (((((!((map__65307 == null))))?(((((map__65307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65307):map__65307);
var tx_element = map__65307__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65307,map__65307__$1,tx_element,results,complete_QMARK_){
return (function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
});})(map__65307,map__65307__$1,tx_element,results,complete_QMARK_))
,tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__65309){
var map__65310 = p__65309;
var map__65310__$1 = (((((!((map__65310 == null))))?(((((map__65310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65310):map__65310);
var tx_node = map__65310__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65310__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__65310,map__65310__$1,tx_node,elements){
return (function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
});})(map__65310,map__65310__$1,tx_node,elements))
,elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__65312){
var map__65313 = p__65312;
var map__65313__$1 = (((((!((map__65313 == null))))?(((((map__65313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65313):map__65313);
var tx_node = map__65313__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65313__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var get_env = ((function (map__65313,map__65313__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});})(map__65313,map__65313__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_env,map__65313,map__65313__$1,tx_node,elements){
return (function (node,p__65315){
var map__65316 = p__65315;
var map__65316__$1 = (((((!((map__65316 == null))))?(((((map__65316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65316):map__65316);
var element = map__65316__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var seq__65318_65565 = cljs.core.seq(progress);
var chunk__65319_65566 = null;
var count__65320_65567 = (0);
var i__65321_65568 = (0);
while(true){
if((i__65321_65568 < count__65320_65567)){
var vec__65330_65569 = chunk__65319_65566.cljs$core$IIndexed$_nth$arity$2(null,i__65321_65568);
var remote_65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65330_65569,(0),null);
var value_65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65330_65569,(1),null);
var env_65572 = get_env(remote_65570,value_65571);
var action_65573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_65573)){
try{(action_65573.cljs$core$IFn$_invoke$arity$1 ? action_65573.cljs$core$IFn$_invoke$arity$1(env_65572) : action_65573.call(null,env_65572));
}catch (e65333){var e_65574 = e65333;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65318_65565,chunk__65319_65566,count__65320_65567,i__65321_65568,e_65574,env_65572,action_65573,vec__65330_65569,remote_65570,value_65571,map__65316,map__65316__$1,element,idx,progress,dispatch,get_env,map__65313,map__65313__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65574,"Progress action threw an exception for txn element",element], null);
});})(seq__65318_65565,chunk__65319_65566,count__65320_65567,i__65321_65568,e_65574,env_65572,action_65573,vec__65330_65569,remote_65570,value_65571,map__65316,map__65316__$1,element,idx,progress,dispatch,get_env,map__65313,map__65313__$1,tx_node,elements))
,null)),null,-418068208);
}} else {
}


var G__65575 = seq__65318_65565;
var G__65576 = chunk__65319_65566;
var G__65577 = count__65320_65567;
var G__65578 = (i__65321_65568 + (1));
seq__65318_65565 = G__65575;
chunk__65319_65566 = G__65576;
count__65320_65567 = G__65577;
i__65321_65568 = G__65578;
continue;
} else {
var temp__5753__auto___65579 = cljs.core.seq(seq__65318_65565);
if(temp__5753__auto___65579){
var seq__65318_65580__$1 = temp__5753__auto___65579;
if(cljs.core.chunked_seq_QMARK_(seq__65318_65580__$1)){
var c__4550__auto___65581 = cljs.core.chunk_first(seq__65318_65580__$1);
var G__65582 = cljs.core.chunk_rest(seq__65318_65580__$1);
var G__65583 = c__4550__auto___65581;
var G__65584 = cljs.core.count(c__4550__auto___65581);
var G__65585 = (0);
seq__65318_65565 = G__65582;
chunk__65319_65566 = G__65583;
count__65320_65567 = G__65584;
i__65321_65568 = G__65585;
continue;
} else {
var vec__65334_65586 = cljs.core.first(seq__65318_65580__$1);
var remote_65587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65334_65586,(0),null);
var value_65588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65334_65586,(1),null);
var env_65591 = get_env(remote_65587,value_65588);
var action_65592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_65592)){
try{(action_65592.cljs$core$IFn$_invoke$arity$1 ? action_65592.cljs$core$IFn$_invoke$arity$1(env_65591) : action_65592.call(null,env_65591));
}catch (e65337){var e_65594 = e65337;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65318_65565,chunk__65319_65566,count__65320_65567,i__65321_65568,e_65594,env_65591,action_65592,vec__65334_65586,remote_65587,value_65588,seq__65318_65580__$1,temp__5753__auto___65579,map__65316,map__65316__$1,element,idx,progress,dispatch,get_env,map__65313,map__65313__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65594,"Progress action threw an exception for txn element",element], null);
});})(seq__65318_65565,chunk__65319_65566,count__65320_65567,i__65321_65568,e_65594,env_65591,action_65592,vec__65334_65586,remote_65587,value_65588,seq__65318_65580__$1,temp__5753__auto___65579,map__65316,map__65316__$1,element,idx,progress,dispatch,get_env,map__65313,map__65313__$1,tx_node,elements))
,null)),null,483705937);
}} else {
}


var G__65596 = cljs.core.next(seq__65318_65580__$1);
var G__65597 = null;
var G__65598 = (0);
var G__65599 = (0);
seq__65318_65565 = G__65596;
chunk__65319_65566 = G__65597;
count__65320_65567 = G__65598;
i__65321_65568 = G__65599;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
});})(get_env,map__65313,map__65313__$1,tx_node,elements))
,tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__65338){
var map__65339 = p__65338;
var map__65339__$1 = (((((!((map__65339 == null))))?(((((map__65339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65339):map__65339);
var tx_node = map__65339__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__65342 = tx_node;
var G__65342__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__65342):G__65342);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__65342__$1);
} else {
return G__65342__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env){
return (function (acc,element){
var map__65343 = element;
var map__65343__$1 = (((((!((map__65343 == null))))?(((((map__65343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65343):map__65343);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
});})(env))
,outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__65345,remotes){
var map__65346 = p__65345;
var map__65346__$1 = (((((!((map__65346 == null))))?(((((map__65346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65346):map__65346);
var tx_node = map__65346__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65346__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var active_on_element = ((function (map__65346,map__65346__$1,tx_node,elements){
return (function (p__65348){
var map__65349 = p__65348;
var map__65349__$1 = (((((!((map__65349 == null))))?(((((map__65349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65349):map__65349);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});})(map__65346,map__65346__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_on_element,map__65346,map__65346__$1,tx_node,elements){
return (function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
});})(active_on_element,map__65346,map__65346__$1,tx_node,elements))
,cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__65353){
var map__65354 = p__65353;
var map__65354__$1 = (((((!((map__65354 == null))))?(((((map__65354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65354):map__65354);
var app__$1 = map__65354__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65354,map__65354__$1,app__$1,state_atom,runtime_atom){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
});})(map__65354,map__65354__$1,app__$1,state_atom,runtime_atom))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = ((function (new_queue,map__65354,map__65354__$1,app__$1,state_atom,runtime_atom){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(new_queue,map__65354,map__65354__$1,app__$1,state_atom,runtime_atom))
;
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
