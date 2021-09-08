goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__59807){
return cljs.core.vector_QMARK_(G__59807);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__59830){
var map__59831 = p__59830;
var map__59831__$1 = (((((!((map__59831 == null))))?(((((map__59831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59831):map__59831);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59831__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__59823 = cljs.core.group_by(parallel_QMARK_,sends);
var map__59823__$1 = (((((!((map__59823 == null))))?(((((map__59823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59823):map__59823);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

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
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__59875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__59875_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__59888_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__59888_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__59896 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59896,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59896,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__59896,active_queue,send_queue__$1){
return (function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
});})(vec__59896,active_queue,send_queue__$1))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__59900 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__59896,active_queue,send_queue__$1,id_sequence,clusters){
return (function (result,id){
var vec__59916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__59917 = cljs.core.seq(vec__59916);
var first__59918 = cljs.core.first(seq__59917);
var seq__59917__$1 = cljs.core.next(seq__59917);
var map__59919 = first__59918;
var map__59919__$1 = (((((!((map__59919 == null))))?(((((map__59919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59919):map__59919);
var n = map__59919__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59919__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__59917__$1;
var cluster = vec__59916;
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
});})(vec__59896,active_queue,send_queue__$1,id_sequence,clusters))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__59900__$1 = (((((!((map__59900 == null))))?(((((map__59900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59900):map__59900);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59900__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59900__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__59929){
var map__59930 = p__59929;
var map__59930__$1 = (((((!((map__59930 == null))))?(((((map__59930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59930):map__59930);
var ast = map__59930__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),((function (map__59930,map__59930__$1,ast,type,key,children){
return (function (G__59933){
return cljs.core.coll_QMARK_(G__59933);
});})(map__59930,map__59930__$1,ast,type,key,children))
,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796))], null),null)], null);

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
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__59939){
return cljs.core.map_QMARK_(G__59939);
}),(function (G__59939){
return cljs.core.contains_QMARK_(G__59939,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__59939){
return ((cljs.core.map_QMARK_(G__59939)) && (cljs.core.contains_QMARK_(G__59939,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var vec__59953 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59953,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59953,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__59956 = cljs.core.split_with(((function (vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options){
return (function (p1__59934_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__59934_SHARP_));
});})(vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options))
,send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59956,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59956,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer){
return (function (acc,p__59963){
var map__59964 = p__59963;
var map__59964__$1 = (((((!((map__59964 == null))))?(((((map__59964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59964):map__59964);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59964__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
});})(vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer))
,cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__59969){
var map__59970 = p__59969;
var map__59970__$1 = (((((!((map__59970 == null))))?(((((map__59970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59970):map__59970);
var combined_result = map__59970__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59970__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__59974 = cljs.core.seq(to_send);
var chunk__59975 = null;
var count__59976 = (0);
var i__59977 = (0);
while(true){
if((i__59977 < count__59976)){
var map__59985 = chunk__59975.cljs$core$IIndexed$_nth$arity$2(null,i__59977);
var map__59985__$1 = (((((!((map__59985 == null))))?(((((map__59985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59985):map__59985);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59985__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__60497 = seq__59974;
var G__60498 = chunk__59975;
var G__60499 = count__59976;
var G__60500 = (i__59977 + (1));
seq__59974 = G__60497;
chunk__59975 = G__60498;
count__59976 = G__60499;
i__59977 = G__60500;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59974);
if(temp__5753__auto__){
var seq__59974__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59974__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59974__$1);
var G__60501 = cljs.core.chunk_rest(seq__59974__$1);
var G__60502 = c__4550__auto__;
var G__60503 = cljs.core.count(c__4550__auto__);
var G__60504 = (0);
seq__59974 = G__60501;
chunk__59975 = G__60502;
count__59976 = G__60503;
i__59977 = G__60504;
continue;
} else {
var map__59989 = cljs.core.first(seq__59974__$1);
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__60505 = cljs.core.next(seq__59974__$1);
var G__60506 = null;
var G__60507 = (0);
var G__60508 = (0);
seq__59974 = G__60505;
chunk__59975 = G__60506;
count__59976 = G__60507;
i__59977 = G__60508;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__59997){
var map__59998 = p__59997;
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var combined_result = map__59998__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__60000_60513 = cljs.core.seq(to_send);
var chunk__60001_60514 = null;
var count__60002_60515 = (0);
var i__60003_60516 = (0);
while(true){
if((i__60003_60516 < count__60002_60515)){
var map__60023_60518 = chunk__60001_60514.cljs$core$IIndexed$_nth$arity$2(null,i__60003_60516);
var map__60023_60519__$1 = (((((!((map__60023_60518 == null))))?(((((map__60023_60518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60023_60518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60023_60518):map__60023_60518);
var ast_60520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023_60519__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_60521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023_60519__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_60524 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_60520__$1)):body);
var result_60525 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_60524);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var map__60030_60529 = result_60525;
var map__60030_60530__$1 = (((((!((map__60030_60529 == null))))?(((((map__60030_60529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60030_60529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60030_60529):map__60030_60529);
var status_code_60531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60030_60530__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_60532__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60030_60530__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_60531)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_60532__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_60531));
}
}catch (e60028){var e_60534 = e60028;
}} else {
}

(result_handler_60521.cljs$core$IFn$_invoke$arity$1 ? result_handler_60521.cljs$core$IFn$_invoke$arity$1(result_60525) : result_handler_60521.call(null,result_60525));


var G__60535 = seq__60000_60513;
var G__60536 = chunk__60001_60514;
var G__60537 = count__60002_60515;
var G__60538 = (i__60003_60516 + (1));
seq__60000_60513 = G__60535;
chunk__60001_60514 = G__60536;
count__60002_60515 = G__60537;
i__60003_60516 = G__60538;
continue;
} else {
var temp__5753__auto___60539 = cljs.core.seq(seq__60000_60513);
if(temp__5753__auto___60539){
var seq__60000_60540__$1 = temp__5753__auto___60539;
if(cljs.core.chunked_seq_QMARK_(seq__60000_60540__$1)){
var c__4550__auto___60541 = cljs.core.chunk_first(seq__60000_60540__$1);
var G__60542 = cljs.core.chunk_rest(seq__60000_60540__$1);
var G__60543 = c__4550__auto___60541;
var G__60544 = cljs.core.count(c__4550__auto___60541);
var G__60545 = (0);
seq__60000_60513 = G__60542;
chunk__60001_60514 = G__60543;
count__60002_60515 = G__60544;
i__60003_60516 = G__60545;
continue;
} else {
var map__60034_60546 = cljs.core.first(seq__60000_60540__$1);
var map__60034_60547__$1 = (((((!((map__60034_60546 == null))))?(((((map__60034_60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60034_60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60034_60546):map__60034_60546);
var ast_60548__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60034_60547__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_60549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60034_60547__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_60553 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_60548__$1)):body);
var result_60554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_60553);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var map__60038_60557 = result_60554;
var map__60038_60558__$1 = (((((!((map__60038_60557 == null))))?(((((map__60038_60557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60038_60557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60038_60557):map__60038_60557);
var status_code_60559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60038_60558__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_60560__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60038_60558__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_60559)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_60560__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_60559));
}
}catch (e60037){var e_60563 = e60037;
}} else {
}

(result_handler_60549.cljs$core$IFn$_invoke$arity$1 ? result_handler_60549.cljs$core$IFn$_invoke$arity$1(result_60554) : result_handler_60549.call(null,result_60554));


var G__60564 = cljs.core.next(seq__60000_60540__$1);
var G__60565 = null;
var G__60566 = (0);
var G__60567 = (0);
seq__60000_60513 = G__60564;
chunk__60001_60514 = G__60565;
count__60002_60515 = G__60566;
i__60003_60516 = G__60567;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
});})(vec__59953,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__59956,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
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
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__44459__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__44459__auto__)){
var remote = b2__44459__auto__;
var b2__44459__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__44459__auto____$1)){
var transmit_BANG_ = b2__44459__auto____$1;
try{if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_60582 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_60582);
}catch (e60050){var e_60583 = e60050;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e60042){var e = e60042;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,transmit_BANG_,b2__44459__auto____$1,remote,b2__44459__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
});})(e,transmit_BANG_,b2__44459__auto____$1,remote,b2__44459__auto__))
,null)),null,933493316,null);

try{if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}catch (e60045){var e_60587__$1 = e60045;
}} else {
}

var G__60047 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__60046 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60046.cljs$core$IFn$_invoke$arity$1 ? fexpr__60046.cljs$core$IFn$_invoke$arity$1(G__60047) : fexpr__60046.call(null,G__60047));
}catch (e60044){var e__$1 = e60044;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,e,transmit_BANG_,b2__44459__auto____$1,remote,b2__44459__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
});})(e__$1,e,transmit_BANG_,b2__44459__auto____$1,remote,b2__44459__auto__))
,null)),null,-807535529,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__44459__auto____$1,remote,b2__44459__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
});})(b2__44459__auto____$1,remote,b2__44459__auto__))
,null)),null,-1522718243,null);

var G__60052 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__60051 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60051.cljs$core$IFn$_invoke$arity$1 ? fexpr__60051.cljs$core$IFn$_invoke$arity$1(G__60052) : fexpr__60051.call(null,G__60052));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__44459__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
});})(b2__44459__auto__))
,null)),null,688025678,null);

var G__60054 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__60053 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60053.cljs$core$IFn$_invoke$arity$1 ? fexpr__60053.cljs$core$IFn$_invoke$arity$1(G__60054) : fexpr__60053.call(null,G__60054));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__60056){
var map__60057 = p__60056;
var map__60057__$1 = (((((!((map__60057 == null))))?(((((map__60057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60057):map__60057);
var app__$1 = map__60057__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60057__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom){
return (function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__60060 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(1),null);
var front = cljs.core.first(serial);
var seq__60064_60602 = cljs.core.seq(p);
var chunk__60065_60603 = null;
var count__60066_60604 = (0);
var i__60067_60605 = (0);
while(true){
if((i__60067_60605 < count__60066_60604)){
var item_60606 = chunk__60065_60603.cljs$core$IIndexed$_nth$arity$2(null,i__60067_60605);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__60064_60602,chunk__60065_60603,count__60066_60604,i__60067_60605,item_60606,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_60606,remote);
});})(seq__60064_60602,chunk__60065_60603,count__60066_60604,i__60067_60605,item_60606,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom))
);


var G__60609 = seq__60064_60602;
var G__60610 = chunk__60065_60603;
var G__60611 = count__60066_60604;
var G__60612 = (i__60067_60605 + (1));
seq__60064_60602 = G__60609;
chunk__60065_60603 = G__60610;
count__60066_60604 = G__60611;
i__60067_60605 = G__60612;
continue;
} else {
var temp__5753__auto___60615 = cljs.core.seq(seq__60064_60602);
if(temp__5753__auto___60615){
var seq__60064_60621__$1 = temp__5753__auto___60615;
if(cljs.core.chunked_seq_QMARK_(seq__60064_60621__$1)){
var c__4550__auto___60622 = cljs.core.chunk_first(seq__60064_60621__$1);
var G__60623 = cljs.core.chunk_rest(seq__60064_60621__$1);
var G__60624 = c__4550__auto___60622;
var G__60625 = cljs.core.count(c__4550__auto___60622);
var G__60626 = (0);
seq__60064_60602 = G__60623;
chunk__60065_60603 = G__60624;
count__60066_60604 = G__60625;
i__60067_60605 = G__60626;
continue;
} else {
var item_60627 = cljs.core.first(seq__60064_60621__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__60064_60602,chunk__60065_60603,count__60066_60604,i__60067_60605,item_60627,seq__60064_60621__$1,temp__5753__auto___60615,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_60627,remote);
});})(seq__60064_60602,chunk__60065_60603,count__60066_60604,i__60067_60605,item_60627,seq__60064_60621__$1,temp__5753__auto___60615,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom))
);


var G__60630 = cljs.core.next(seq__60064_60621__$1);
var G__60631 = null;
var G__60632 = (0);
var G__60633 = (0);
seq__60064_60602 = G__60630;
chunk__60065_60603 = G__60631;
count__60066_60604 = G__60632;
i__60067_60605 = G__60633;
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
var map__60069 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__60069__$1 = (((((!((map__60069 == null))))?(((((map__60069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60069):map__60069);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (map__60069,map__60069__$1,send_queue__$1,send_node,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
});})(map__60069,map__60069__$1,send_queue__$1,send_node,send_queue,vec__60060,p,serial,front,send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom))
);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
});})(send_queues,remote_names,operations,map__60057,map__60057__$1,app__$1,runtime_atom))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__60073_60638 = cljs.core.seq(cljs.core.deref(operations));
var chunk__60074_60639 = null;
var count__60075_60640 = (0);
var i__60076_60641 = (0);
while(true){
if((i__60076_60641 < count__60075_60640)){
var op_60645 = chunk__60074_60639.cljs$core$IIndexed$_nth$arity$2(null,i__60076_60641);
(op_60645.cljs$core$IFn$_invoke$arity$0 ? op_60645.cljs$core$IFn$_invoke$arity$0() : op_60645.call(null));


var G__60646 = seq__60073_60638;
var G__60647 = chunk__60074_60639;
var G__60648 = count__60075_60640;
var G__60649 = (i__60076_60641 + (1));
seq__60073_60638 = G__60646;
chunk__60074_60639 = G__60647;
count__60075_60640 = G__60648;
i__60076_60641 = G__60649;
continue;
} else {
var temp__5753__auto___60650 = cljs.core.seq(seq__60073_60638);
if(temp__5753__auto___60650){
var seq__60073_60651__$1 = temp__5753__auto___60650;
if(cljs.core.chunked_seq_QMARK_(seq__60073_60651__$1)){
var c__4550__auto___60653 = cljs.core.chunk_first(seq__60073_60651__$1);
var G__60654 = cljs.core.chunk_rest(seq__60073_60651__$1);
var G__60655 = c__4550__auto___60653;
var G__60656 = cljs.core.count(c__4550__auto___60653);
var G__60657 = (0);
seq__60073_60638 = G__60654;
chunk__60074_60639 = G__60655;
count__60075_60640 = G__60656;
i__60076_60641 = G__60657;
continue;
} else {
var op_60658 = cljs.core.first(seq__60073_60651__$1);
(op_60658.cljs$core$IFn$_invoke$arity$0 ? op_60658.cljs$core$IFn$_invoke$arity$0() : op_60658.call(null));


var G__60659 = cljs.core.next(seq__60073_60651__$1);
var G__60660 = null;
var G__60661 = (0);
var G__60662 = (0);
seq__60073_60638 = G__60659;
chunk__60074_60639 = G__60660;
count__60075_60640 = G__60661;
i__60076_60641 = G__60662;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__60081 = arguments.length;
switch (G__60081) {
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
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

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
var G__60086 = arguments.length;
switch (G__60086) {
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

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__60088,addl){
var map__60089 = p__60088;
var map__60089__$1 = (((((!((map__60089 == null))))?(((((map__60089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60089):map__60089);
var tx_node = map__60089__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60089__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__60093 = options;
var map__60093__$1 = (((((!((map__60093 == null))))?(((((map__60093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60093):map__60093);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__60095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__60095__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60095,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__60095);
var G__60095__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60095__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__60095__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60095__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__60095__$2;
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__60097){
var map__60098 = p__60097;
var map__60098__$1 = (((((!((map__60098 == null))))?(((((map__60098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60098):map__60098);
var tx_node = map__60098__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3;

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e60102){var e = e60102;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__60103 = env__$1;
var G__60103__$1 = (((G__60103 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__60103));
if((G__60103__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__60103__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
});})(e))
,null)),null,-333423423,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = ((function (do_dispatch){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__60105){
var map__60106 = p__60105;
var map__60106__$1 = (((((!((map__60106 == null))))?(((((map__60106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60106):map__60106);
var ele = map__60106__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__60108 = original_ast_node;
var map__60108__$1 = (((((!((map__60108 == null))))?(((((map__60108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60108):map__60108);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__60112 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60112,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__60112;
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
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$application_rendered_BANG_(p__60115,options){
var map__60116 = p__60115;
var map__60116__$1 = (((((!((map__60116 == null))))?(((((map__60116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60116):map__60116);
var app__$1 = map__60116__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60116__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some(((function (map__60116,map__60116__$1,app__$1,runtime_atom){
return (function (p1__60114_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__60114_SHARP_)));
});})(map__60116,map__60116__$1,app__$1,runtime_atom))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),((function (map__60116,map__60116__$1,app__$1,runtime_atom){
return (function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__60116,map__60116__$1,app__$1,runtime_atom){
return (function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
});})(map__60116,map__60116__$1,app__$1,runtime_atom))
,queue);
});})(map__60116,map__60116__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.call(null,app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__60123){
var map__60124 = p__60123;
var map__60124__$1 = (((((!((map__60124 == null))))?(((((map__60124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60124):map__60124);
var app__$1 = map__60124__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60126 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__60126__$1 = (((((!((map__60126 == null))))?(((((map__60126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60126):map__60126);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60126__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60126__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__60126,map__60126__$1,blocked,ready,map__60124,map__60124__$1,app__$1,runtime_atom){
return (function (p1__60120_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__60120_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__60120_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
});})(map__60126,map__60126__$1,blocked,ready,map__60124,map__60124__$1,app__$1,runtime_atom))
,ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (map__60126,map__60126__$1,blocked,ready,dispatched_nodes,map__60124,map__60124__$1,app__$1,runtime_atom){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),((function (map__60126,map__60126__$1,blocked,ready,dispatched_nodes,map__60124,map__60124__$1,app__$1,runtime_atom){
return (function (p1__60121_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__60121_SHARP_,dispatched_nodes);
});})(map__60126,map__60126__$1,blocked,ready,dispatched_nodes,map__60124,map__60124__$1,app__$1,runtime_atom))
),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
});})(map__60126,map__60126__$1,blocked,ready,dispatched_nodes,map__60124,map__60124__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__60132 = arguments.length;
switch (G__60132) {
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
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__60136 = arguments.length;
switch (G__60136) {
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
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__60139 = arguments.length;
switch (G__60139) {
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
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__60143){
var map__60144 = p__60143;
var map__60144__$1 = (((((!((map__60144 == null))))?(((((map__60144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60144):map__60144);
var node = map__60144__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60144__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60144__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,map__60144,map__60144__$1,node,id,elements){
return (function (p__60146,element){
var map__60148 = p__60146;
var map__60148__$1 = (((((!((map__60148 == null))))?(((((map__60148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60148):map__60148);
var acc = map__60148__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__60151 = element;
var map__60151__$1 = (((((!((map__60151 == null))))?(((((map__60151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60151):map__60151);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__60152 = dispatch;
var map__60152__$1 = (((((!((map__60152 == null))))?(((((map__60152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60152):map__60152);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60152__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
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
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4120__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e60158){var e_60806 = e60158;
var mutation_symbol_60807 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,340,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (mutation_symbol_60807,e_60806,map__60151,map__60151__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__60152,map__60152__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_id_before,state,state_before,updated_element,done_QMARK___$1,new_acc,env,map__60148,map__60148__$1,acc,done_QMARK_,new_elements,remotes,map__60144,map__60144__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_60806,"The `action` section of mutation",mutation_symbol_60807,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
});})(mutation_symbol_60807,e_60806,map__60151,map__60151__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__60152,map__60152__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_id_before,state,state_before,updated_element,done_QMARK___$1,new_acc,env,map__60148,map__60148__$1,acc,done_QMARK_,new_elements,remotes,map__60144,map__60144__$1,node,id,elements))
,null)),null,503142597,null);
}
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_60817 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_60817], null));
}catch (e60160){var e_60820 = e60160;
}} else {
}
} else {
}

return new_acc;
}
});})(remotes,map__60144,map__60144__$1,node,id,elements))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__60163){
var map__60164 = p__60163;
var map__60164__$1 = (((((!((map__60164 == null))))?(((((map__60164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60164):map__60164);
var node = map__60164__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60164__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60164__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60164,map__60164__$1,node,id,elements){
return (function (new_elements,element){
var map__60167 = element;
var map__60167__$1 = (((((!((map__60167 == null))))?(((((map__60167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60167):map__60167);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__60168 = dispatch;
var map__60168__$1 = (((((!((map__60168 == null))))?(((((map__60168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60168):map__60168);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60168__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__4120__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e60173){var e_60853 = e60173;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,373,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_60853,map__60167,map__60167__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__60168,map__60168__$1,action,exec_QMARK_,state_id_before,state,state_before,updated_node,new_acc,env,map__60164,map__60164__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_60853,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
});})(e_60853,map__60167,map__60167__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__60168,map__60168__$1,action,exec_QMARK_,state_id_before,state,state_before,updated_node,new_acc,env,map__60164,map__60164__$1,node,id,elements))
,null)),null,556895419,null);
}
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_60861 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_60861], null));
}catch (e60175){var e_60865 = e60175;
}} else {
}
} else {
}

return new_acc;
});})(map__60164,map__60164__$1,node,id,elements))
,cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__60178){
var map__60179 = p__60178;
var map__60179__$1 = (((((!((map__60179 == null))))?(((((map__60179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60179):map__60179);
var tx_node = map__60179__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60179__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = ((function (map__60179,map__60179__$1,tx_node,elements){
return (function (p__60182){
var map__60183 = p__60182;
var map__60183__$1 = (((((!((map__60183 == null))))?(((((map__60183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60183):map__60183);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});})(map__60179,map__60179__$1,tx_node,elements))
;
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__60187,remote,txn_id,ele_idx){
var map__60188 = p__60187;
var map__60188__$1 = (((((!((map__60188 == null))))?(((((map__60188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60188):map__60188);
var app__$1 = map__60188__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60188__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60191 = cljs.core.deref(runtime_atom);
var map__60191__$1 = (((((!((map__60191 == null))))?(((((map__60191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60191):map__60191);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv(((function (map__60191,map__60191__$1,send_queues,old_queue,map__60188,map__60188__$1,app__$1,runtime_atom){
return (function (p__60193){
var map__60194 = p__60193;
var map__60194__$1 = (((((!((map__60194 == null))))?(((((map__60194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60194):map__60194);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60194__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60194__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
});})(map__60191,map__60191__$1,send_queues,old_queue,map__60188,map__60188__$1,app__$1,runtime_atom))
,old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__60199 = arguments.length;
switch (G__60199) {
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

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__60201,txn_id,ele_idx,remote,result,result_key){
var map__60202 = p__60201;
var map__60202__$1 = (((((!((map__60202 == null))))?(((((map__60202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60202):map__60202);
var app__$1 = map__60202__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_queue,map__60202,map__60202__$1,app__$1,runtime_atom){
return (function (idx,p__60206){
var map__60207 = p__60206;
var map__60207__$1 = (((((!((map__60207 == null))))?(((((map__60207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60207):map__60207);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60207__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
});})(active_queue,map__60202,map__60202__$1,app__$1,runtime_atom))
,(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,421,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (active_queue,txn_idx,not_found_QMARK_,map__60202,map__60202__$1,app__$1,runtime_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
});})(active_queue,txn_idx,not_found_QMARK_,map__60202,map__60202__$1,app__$1,runtime_atom))
,null)),null,-249584569,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6;

/**
 * Add the ::desired-ast-nodes and ::transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

var map__60212 = tx_element;
var map__60212__$1 = (((((!((map__60212 == null))))?(((((map__60212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60212):map__60212);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,442,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__60212,map__60212__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
});})(map__60212,map__60212__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire))
,null)),null,-1389360853,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__4120__auto__ = desired_ast;
if(cljs.core.truth_(and__4120__auto__)){
return query_transform;
} else {
return and__4120__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__60217 = tx_element;
var G__60217__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__60217,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__60217);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__60217__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__60217__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__60219,p__60220,ele_idx,remote){
var map__60221 = p__60219;
var map__60221__$1 = (((((!((map__60221 == null))))?(((((map__60221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60221):map__60221);
var app__$1 = map__60221__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60221__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60222 = p__60220;
var map__60222__$1 = (((((!((map__60222 == null))))?(((((map__60222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60222):map__60222);
var tx_node = map__60222__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60222__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60222__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = ((function (map__60221,map__60221__$1,app__$1,runtime_atom,map__60222,map__60222__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(map__60221,map__60221__$1,app__$1,runtime_atom,map__60222,map__60222__$1,tx_node,id,options))
;
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = ((function (update_handler,ast,map__60221,map__60221__$1,app__$1,runtime_atom,map__60222,map__60222__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(update_handler,ast,map__60221,map__60221__$1,app__$1,runtime_atom,map__60222,map__60222__$1,tx_node,id,options))
;
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__60230){
var map__60231 = p__60230;
var map__60231__$1 = (((((!((map__60231 == null))))?(((((map__60231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60231):map__60231);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60231__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60231__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60231__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,to_dispatch,map__60231,map__60231__$1,idx,dispatch,started_QMARK_){
return (function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),((function (remotes,to_dispatch,map__60231,map__60231__$1,idx,dispatch,started_QMARK_){
return (function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
});})(remotes,to_dispatch,map__60231,map__60231__$1,idx,dispatch,started_QMARK_))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
});})(remotes,to_dispatch,map__60231,map__60231__$1,idx,dispatch,started_QMARK_))
,tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__60234){
var map__60237 = p__60234;
var map__60237__$1 = (((((!((map__60237 == null))))?(((((map__60237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60237):map__60237);
var tx_node = map__60237__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_(((function (map__60237,map__60237__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__60239){
var map__60240 = p__60239;
var map__60240__$1 = (((((!((map__60240 == null))))?(((((map__60240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60240):map__60240);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60240__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60240__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
});})(map__60237,map__60237__$1,tx_node,elements))
,elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__60243){
var map__60244 = p__60243;
var map__60244__$1 = (((((!((map__60244 == null))))?(((((map__60244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60244):map__60244);
var element = map__60244__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),null)], null);

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
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__60248){
var map__60249 = p__60248;
var map__60249__$1 = (((((!((map__60249 == null))))?(((((map__60249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60249):map__60249);
var tx_node = map__60249__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60249__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

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
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__60254){
var map__60255 = p__60254;
var map__60255__$1 = (((((!((map__60255 == null))))?(((((map__60255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60255):map__60255);
var tx_node = map__60255__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60255__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60255__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (optimistic_QMARK_,map__60255,map__60255__$1,tx_node,options,elements){
return (function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
});})(optimistic_QMARK_,map__60255,map__60255__$1,tx_node,options,elements))
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
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__60258,remote){
var map__60259 = p__60258;
var map__60259__$1 = (((((!((map__60259 == null))))?(((((map__60259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60259):map__60259);
var tx_element = map__60259__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_61074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_61075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_61075)){
var env_61078 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_61074], null));
try{(handler_61075.cljs$core$IFn$_invoke$arity$1 ? handler_61075.cljs$core$IFn$_invoke$arity$1(env_61078) : handler_61075.call(null,env_61078));
}catch (e60263){var e_61079 = e60263;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,574,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_61079,env_61078,result_61074,handler_61075,map__60259,map__60259__$1,tx_element,results,dispatch,desired_ast_nodes,transmitted_ast_nodes,original_ast_node){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61079,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
});})(e_61079,env_61078,result_61074,handler_61075,map__60259,map__60259__$1,tx_element,results,dispatch,desired_ast_nodes,transmitted_ast_nodes,original_ast_node))
,null)),null,-1237061909,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__60265){
var map__60267 = p__60265;
var map__60267__$1 = (((((!((map__60267 == null))))?(((((map__60267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60267):map__60267);
var tx_element = map__60267__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60267__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60267__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60267,map__60267__$1,tx_element,results,complete_QMARK_){
return (function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
});})(map__60267,map__60267__$1,tx_element,results,complete_QMARK_))
,tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__60271){
var map__60272 = p__60271;
var map__60272__$1 = (((((!((map__60272 == null))))?(((((map__60272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60272):map__60272);
var tx_node = map__60272__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60272__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__60272,map__60272__$1,tx_node,elements){
return (function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
});})(map__60272,map__60272__$1,tx_node,elements))
,elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__60276){
var map__60277 = p__60276;
var map__60277__$1 = (((((!((map__60277 == null))))?(((((map__60277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60277):map__60277);
var tx_node = map__60277__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60277__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var get_env = ((function (map__60277,map__60277__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});})(map__60277,map__60277__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_env,map__60277,map__60277__$1,tx_node,elements){
return (function (node,p__60280){
var map__60281 = p__60280;
var map__60281__$1 = (((((!((map__60281 == null))))?(((((map__60281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60281):map__60281);
var element = map__60281__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__60283_61101 = cljs.core.seq(progress);
var chunk__60284_61102 = null;
var count__60285_61103 = (0);
var i__60286_61104 = (0);
while(true){
if((i__60286_61104 < count__60285_61103)){
var vec__60300_61106 = chunk__60284_61102.cljs$core$IIndexed$_nth$arity$2(null,i__60286_61104);
var remote_61107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60300_61106,(0),null);
var value_61108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60300_61106,(1),null);
var env_61111 = get_env(remote_61107,value_61108);
var action_61112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_61112)){
try{(action_61112.cljs$core$IFn$_invoke$arity$1 ? action_61112.cljs$core$IFn$_invoke$arity$1(env_61111) : action_61112.call(null,env_61111));
}catch (e60303){var e_61114 = e60303;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60283_61101,chunk__60284_61102,count__60285_61103,i__60286_61104,e_61114,env_61111,action_61112,vec__60300_61106,remote_61107,value_61108,map__60281,map__60281__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60277,map__60277__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61114,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__60283_61101,chunk__60284_61102,count__60285_61103,i__60286_61104,e_61114,env_61111,action_61112,vec__60300_61106,remote_61107,value_61108,map__60281,map__60281__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60277,map__60277__$1,tx_node,elements))
,null)),null,2076792779,null);
}} else {
}


var G__61119 = seq__60283_61101;
var G__61120 = chunk__60284_61102;
var G__61121 = count__60285_61103;
var G__61122 = (i__60286_61104 + (1));
seq__60283_61101 = G__61119;
chunk__60284_61102 = G__61120;
count__60285_61103 = G__61121;
i__60286_61104 = G__61122;
continue;
} else {
var temp__5753__auto___61123 = cljs.core.seq(seq__60283_61101);
if(temp__5753__auto___61123){
var seq__60283_61124__$1 = temp__5753__auto___61123;
if(cljs.core.chunked_seq_QMARK_(seq__60283_61124__$1)){
var c__4550__auto___61125 = cljs.core.chunk_first(seq__60283_61124__$1);
var G__61126 = cljs.core.chunk_rest(seq__60283_61124__$1);
var G__61127 = c__4550__auto___61125;
var G__61128 = cljs.core.count(c__4550__auto___61125);
var G__61129 = (0);
seq__60283_61101 = G__61126;
chunk__60284_61102 = G__61127;
count__60285_61103 = G__61128;
i__60286_61104 = G__61129;
continue;
} else {
var vec__60305_61134 = cljs.core.first(seq__60283_61124__$1);
var remote_61135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60305_61134,(0),null);
var value_61136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60305_61134,(1),null);
var env_61141 = get_env(remote_61135,value_61136);
var action_61142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_61142)){
try{(action_61142.cljs$core$IFn$_invoke$arity$1 ? action_61142.cljs$core$IFn$_invoke$arity$1(env_61141) : action_61142.call(null,env_61141));
}catch (e60308){var e_61144 = e60308;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60283_61101,chunk__60284_61102,count__60285_61103,i__60286_61104,e_61144,env_61141,action_61142,vec__60305_61134,remote_61135,value_61136,seq__60283_61124__$1,temp__5753__auto___61123,map__60281,map__60281__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60277,map__60277__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61144,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__60283_61101,chunk__60284_61102,count__60285_61103,i__60286_61104,e_61144,env_61141,action_61142,vec__60305_61134,remote_61135,value_61136,seq__60283_61124__$1,temp__5753__auto___61123,map__60281,map__60281__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60277,map__60277__$1,tx_node,elements))
,null)),null,1247080324,null);
}} else {
}


var G__61150 = cljs.core.next(seq__60283_61124__$1);
var G__61151 = null;
var G__61152 = (0);
var G__61153 = (0);
seq__60283_61101 = G__61150;
chunk__60284_61102 = G__61151;
count__60285_61103 = G__61152;
i__60286_61104 = G__61153;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
});})(get_env,map__60277,map__60277__$1,tx_node,elements))
,tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__60311){
var map__60312 = p__60311;
var map__60312__$1 = (((((!((map__60312 == null))))?(((((map__60312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60312):map__60312);
var tx_node = map__60312__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60312__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__60315 = tx_node;
var G__60315__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__60315):G__60315);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__60315__$1);
} else {
return G__60315__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60318){
return cljs.core.coll_QMARK_(G__60318);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env){
return (function (acc,element){
var map__60319 = element;
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
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
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__60324,remotes){
var map__60325 = p__60324;
var map__60325__$1 = (((((!((map__60325 == null))))?(((((map__60325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60325):map__60325);
var tx_node = map__60325__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60325__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = ((function (map__60325,map__60325__$1,tx_node,elements){
return (function (p__60327){
var map__60328 = p__60327;
var map__60328__$1 = (((((!((map__60328 == null))))?(((((map__60328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60328):map__60328);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});})(map__60325,map__60325__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_on_element,map__60325,map__60325__$1,tx_node,elements){
return (function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
});})(active_on_element,map__60325,map__60325__$1,tx_node,elements))
,cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__60333){
var map__60334 = p__60333;
var map__60334__$1 = (((((!((map__60334 == null))))?(((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60334):map__60334);
var app__$1 = map__60334__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60334,map__60334__$1,app__$1,state_atom,runtime_atom){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
});})(map__60334,map__60334__$1,app__$1,state_atom,runtime_atom))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = ((function (new_queue,map__60334,map__60334__$1,app__$1,state_atom,runtime_atom){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(new_queue,map__60334,map__60334__$1,app__$1,state_atom,runtime_atom))
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
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$transact_sync_BANG_(app__$1,tx,p__60341){
var map__60342 = p__60341;
var map__60342__$1 = (((((!((map__60342 == null))))?(((((map__60342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60342):map__60342);
var options = map__60342__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mutation_nodes,map__60342,map__60342__$1,options,component,ref){
return (function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
});})(mutation_nodes,map__60342,map__60342__$1,options,component,ref))
,mutation_nodes));
var map__60346 = cljs.core.group_by(((function (mutation_nodes,ast_node__GT_operation,map__60342,map__60342__$1,options,component,ref){
return (function (p1__60339_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__60339_SHARP_) : ast_node__GT_operation.call(null,p1__60339_SHARP_)))));
});})(mutation_nodes,ast_node__GT_operation,map__60342,map__60342__$1,options,component,ref))
,mutation_nodes);
var map__60346__$1 = (((((!((map__60346 == null))))?(((((map__60346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60346):map__60346);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_61219 = com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_61220 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_61219));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_61220,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_61219], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__4120__auto____$1)){
return com.fulcrologic.fulcro.components.has_ident_QMARK_(component);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
if(cljs.core.truth_(ref)){
var r_BANG__61222 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__61222)){
(r_BANG__61222.cljs$core$IFn$_invoke$arity$1 ? r_BANG__61222.cljs$core$IFn$_invoke$arity$1(app__$1) : r_BANG__61222.call(null,app__$1));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,744,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (mutation_nodes,ast_node__GT_operation,map__60346,map__60346__$1,optimistic,mixed,optimistic_tx_node,mixed_tx_node,resulting_node_id,map__60342,map__60342__$1,options,component,ref){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
});})(mutation_nodes,ast_node__GT_operation,map__60346,map__60346__$1,optimistic,mixed,optimistic_tx_node,mixed_tx_node,resulting_node_id,map__60342,map__60342__$1,options,component,ref))
,null)),null,1758357967,null);
} else {
}

}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$default_tx_BANG_(var_args){
var G__60354 = arguments.length;
switch (G__60354) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__60357,tx,p__60358){
var map__60359 = p__60357;
var map__60359__$1 = (((((!((map__60359 == null))))?(((((map__60359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60359):map__60359);
var app__$1 = map__60359__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60360 = p__60358;
var map__60360__$1 = (((((!((map__60360 == null))))?(((((map__60360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60360):map__60360);
var options = map__60360__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__60364 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__60364__$1 = (((((!((map__60364 == null))))?(((((map__60364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60364):map__60364);
var options__$1 = map__60364__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_){
return (function (p1__60352_SHARP_){
return (((p1__60352_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__60352_SHARP_)));
});})(map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_))
,tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = ((function (map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_))
;
var refresh__$1 = (function (){var G__60368 = cljs.core.set(refresh);
var G__60368__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__60368,follow_on_reads):G__60368);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60368__$1,ref);
} else {
return G__60368__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_){
return (function (s){
var G__60370 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),((function (map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_){
return (function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
});})(map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_))
,node);
var G__60370__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60370,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__60370);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60370__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__60370__$1;
}
});})(map__60364,map__60364__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__60359,map__60359__$1,app__$1,runtime_atom,map__60360,map__60360__$1,options,synchronous_QMARK_))
);

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_elements_BANG_(p__60373,send_queue,abort_id){
var map__60374 = p__60373;
var map__60374__$1 = (((((!((map__60374 == null))))?(((((map__60374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60374):map__60374);
var remote = map__60374__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60374,map__60374__$1,remote,abort_BANG_){
return (function (result,p__60376){
var map__60377 = p__60376;
var map__60377__$1 = (((((!((map__60377 == null))))?(((((map__60377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60377):map__60377);
var send_node = map__60377__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__60380_61275 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__60380_61275) : result_handler.call(null,G__60380_61275));

return result;

}
}
});})(map__60374,map__60374__$1,remote,abort_BANG_))
,cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,822,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__60374,map__60374__$1,remote,abort_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
});})(map__60374,map__60374__$1,remote,abort_BANG_))
,null)),null,540765417,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_BANG_(app__$1,abort_id){
var map__60383 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__60383__$1 = (((((!((map__60383 == null))))?(((((map__60383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60383):map__60383);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__60384 = runtime_state;
var map__60384__$1 = (((((!((map__60384 == null))))?(((((map__60384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60384):map__60384);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60384__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60384__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60383,map__60383__$1,runtime_atom,runtime_state,map__60384,map__60384__$1,remotes,send_queues,remote_names){
return (function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
});})(map__60383,map__60383__$1,runtime_atom,runtime_state,map__60384,map__60384__$1,remotes,send_queues,remote_names))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var map__60390 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__60390__$1 = (((((!((map__60390 == null))))?(((((map__60390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60390):map__60390);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__60391__$1 = (((((!((map__60391 == null))))?(((((map__60391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60391):map__60391);
var the_remote = map__60391__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60391__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__60395 = cljs.core.seq(old_send_queue);
var chunk__60400 = null;
var count__60401 = (0);
var i__60402 = (0);
while(true){
if((i__60402 < count__60401)){
var map__60444 = chunk__60400.cljs$core$IIndexed$_nth$arity$2(null,i__60402);
var map__60444__$1 = (((((!((map__60444 == null))))?(((((map__60444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60444):map__60444);
var send_node = map__60444__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60444__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__60403_61294 = cljs.core.seq((function (){var or__4131__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__60404_61295 = null;
var count__60405_61296 = (0);
var i__60406_61297 = (0);
while(true){
if((i__60406_61297 < count__60405_61296)){
var aid_61300 = chunk__60404_61295.cljs$core$IIndexed$_nth$arity$2(null,i__60406_61297);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61300) : abort_network_BANG_.call(null,the_remote,aid_61300));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,862,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,aid_61300,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,aid_61300,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2058885131,null);
}
} else {
}

var G__60457_61306 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__60457_61306) : result_handler.call(null,G__60457_61306));
}catch (e60455){var e_61313 = e60455;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,e_61313,aid_61300,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61313,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,e_61313,aid_61300,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,344528247,null);
}

var G__61316 = seq__60403_61294;
var G__61317 = chunk__60404_61295;
var G__61318 = count__60405_61296;
var G__61319 = (i__60406_61297 + (1));
seq__60403_61294 = G__61316;
chunk__60404_61295 = G__61317;
count__60405_61296 = G__61318;
i__60406_61297 = G__61319;
continue;
} else {
var temp__5753__auto___61320 = cljs.core.seq(seq__60403_61294);
if(temp__5753__auto___61320){
var seq__60403_61321__$1 = temp__5753__auto___61320;
if(cljs.core.chunked_seq_QMARK_(seq__60403_61321__$1)){
var c__4550__auto___61322 = cljs.core.chunk_first(seq__60403_61321__$1);
var G__61323 = cljs.core.chunk_rest(seq__60403_61321__$1);
var G__61324 = c__4550__auto___61322;
var G__61325 = cljs.core.count(c__4550__auto___61322);
var G__61326 = (0);
seq__60403_61294 = G__61323;
chunk__60404_61295 = G__61324;
count__60405_61296 = G__61325;
i__60406_61297 = G__61326;
continue;
} else {
var aid_61329 = cljs.core.first(seq__60403_61321__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61329) : abort_network_BANG_.call(null,the_remote,aid_61329));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,862,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,aid_61329,seq__60403_61321__$1,temp__5753__auto___61320,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,aid_61329,seq__60403_61321__$1,temp__5753__auto___61320,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-734386094,null);
}
} else {
}

var G__60460_61337 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__60460_61337) : result_handler.call(null,G__60460_61337));
}catch (e60458){var e_61339 = e60458;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,e_61339,aid_61329,seq__60403_61321__$1,temp__5753__auto___61320,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61339,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__60403_61294,chunk__60404_61295,count__60405_61296,i__60406_61297,seq__60395,chunk__60400,count__60401,i__60402,e_61339,aid_61329,seq__60403_61321__$1,temp__5753__auto___61320,map__60444,map__60444__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2098618661,null);
}

var G__61344 = cljs.core.next(seq__60403_61321__$1);
var G__61345 = null;
var G__61346 = (0);
var G__61347 = (0);
seq__60403_61294 = G__61344;
chunk__60404_61295 = G__61345;
count__60405_61296 = G__61346;
i__60406_61297 = G__61347;
continue;
}
} else {
}
}
break;
}

var G__61349 = seq__60395;
var G__61350 = chunk__60400;
var G__61351 = count__60401;
var G__61352 = (i__60402 + (1));
seq__60395 = G__61349;
chunk__60400 = G__61350;
count__60401 = G__61351;
i__60402 = G__61352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60395);
if(temp__5753__auto__){
var seq__60395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60395__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60395__$1);
var G__61354 = cljs.core.chunk_rest(seq__60395__$1);
var G__61355 = c__4550__auto__;
var G__61356 = cljs.core.count(c__4550__auto__);
var G__61357 = (0);
seq__60395 = G__61354;
chunk__60400 = G__61355;
count__60401 = G__61356;
i__60402 = G__61357;
continue;
} else {
var map__60463 = cljs.core.first(seq__60395__$1);
var map__60463__$1 = (((((!((map__60463 == null))))?(((((map__60463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60463):map__60463);
var send_node = map__60463__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__60396_61362 = cljs.core.seq((function (){var or__4131__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__60397_61363 = null;
var count__60398_61364 = (0);
var i__60399_61365 = (0);
while(true){
if((i__60399_61365 < count__60398_61364)){
var aid_61369 = chunk__60397_61363.cljs$core$IIndexed$_nth$arity$2(null,i__60399_61365);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61369) : abort_network_BANG_.call(null,the_remote,aid_61369));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,862,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,aid_61369,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,aid_61369,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1306130475,null);
}
} else {
}

var G__60474_61372 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__60474_61372) : result_handler.call(null,G__60474_61372));
}catch (e60473){var e_61373 = e60473;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,e_61373,aid_61369,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61373,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,e_61373,aid_61369,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1007519044,null);
}

var G__61377 = seq__60396_61362;
var G__61378 = chunk__60397_61363;
var G__61379 = count__60398_61364;
var G__61380 = (i__60399_61365 + (1));
seq__60396_61362 = G__61377;
chunk__60397_61363 = G__61378;
count__60398_61364 = G__61379;
i__60399_61365 = G__61380;
continue;
} else {
var temp__5753__auto___61381__$1 = cljs.core.seq(seq__60396_61362);
if(temp__5753__auto___61381__$1){
var seq__60396_61382__$1 = temp__5753__auto___61381__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60396_61382__$1)){
var c__4550__auto___61383 = cljs.core.chunk_first(seq__60396_61382__$1);
var G__61384 = cljs.core.chunk_rest(seq__60396_61382__$1);
var G__61385 = c__4550__auto___61383;
var G__61386 = cljs.core.count(c__4550__auto___61383);
var G__61387 = (0);
seq__60396_61362 = G__61384;
chunk__60397_61363 = G__61385;
count__60398_61364 = G__61386;
i__60399_61365 = G__61387;
continue;
} else {
var aid_61388 = cljs.core.first(seq__60396_61382__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61388) : abort_network_BANG_.call(null,the_remote,aid_61388));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,862,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,aid_61388,seq__60396_61382__$1,temp__5753__auto___61381__$1,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,aid_61388,seq__60396_61382__$1,temp__5753__auto___61381__$1,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1941886005,null);
}
} else {
}

var G__60478_61390 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__60478_61390) : result_handler.call(null,G__60478_61390));
}catch (e60477){var e_61393 = e60477;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,e_61393,aid_61388,seq__60396_61382__$1,temp__5753__auto___61381__$1,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61393,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__60396_61362,chunk__60397_61363,count__60398_61364,i__60399_61365,seq__60395,chunk__60400,count__60401,i__60402,e_61393,aid_61388,seq__60396_61382__$1,temp__5753__auto___61381__$1,map__60463,map__60463__$1,send_node,active_QMARK_,options,result_handler,seq__60395__$1,temp__5753__auto__,app__$1,map__60390,map__60390__$1,state_atom,runtime_atom,map__60391,map__60391__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1826292259,null);
}

var G__61394 = cljs.core.next(seq__60396_61382__$1);
var G__61395 = null;
var G__61396 = (0);
var G__61397 = (0);
seq__60396_61362 = G__61394;
chunk__60397_61363 = G__61395;
count__60398_61364 = G__61396;
i__60399_61365 = G__61397;
continue;
}
} else {
}
}
break;
}

var G__61398 = cljs.core.next(seq__60395__$1);
var G__61399 = null;
var G__61400 = (0);
var G__61401 = (0);
seq__60395 = G__61398;
chunk__60400 = G__61399;
count__60401 = G__61400;
i__60402 = G__61401;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
