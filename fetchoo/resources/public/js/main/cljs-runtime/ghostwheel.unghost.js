goog.provide('ghostwheel.unghost');
goog.require('cljs.core');
/**
 * This removes the gspec and returns a
 *   clean defn for use in production builds.
 */
ghostwheel.unghost.clean_defn = (function ghostwheel$unghost$clean_defn(op,forms){
var single_arity_QMARK_ = (function (fn_forms){
return cljs.core.boolean$(cljs.core.some(cljs.core.vector_QMARK_,fn_forms));
});
var strip_gspec = ((function (single_arity_QMARK_){
return (function (body){
var vec__55154 = body;
var seq__55155 = cljs.core.seq(vec__55154);
var first__55156 = cljs.core.first(seq__55155);
var seq__55155__$1 = cljs.core.next(seq__55155);
var args = first__55156;
var first__55156__$1 = cljs.core.first(seq__55155__$1);
var seq__55155__$2 = cljs.core.next(seq__55155__$1);
var _gspec = first__55156__$1;
var more = seq__55155__$2;
return cljs.core.cons(args,more);
});})(single_arity_QMARK_))
;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((single_arity_QMARK_(forms))?(function (){var vec__55167 = cljs.core.split_with(cljs.core.complement(cljs.core.vector_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55167,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55167,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strip_gspec(body_forms)], 0))));
})():(function (){var vec__55178 = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.seq_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(1),null);
var tail_attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(strip_gspec,body_forms),tail_attr_map], 0))));
})()));
});

//# sourceMappingURL=ghostwheel.unghost.js.map
