goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39497){
var vec__39498 = p__39497;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39498,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39505 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39505,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39505,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39505,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39532 = arguments.length;
switch (G__39532) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39583_39808 = clojure.data.equality_partition;
var G__39584_39809 = "null";
var G__39585_39810 = ((function (G__39583_39808,G__39584_39809){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39583_39808,G__39584_39809))
;
goog.object.set(G__39583_39808,G__39584_39809,G__39585_39810);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39588_39815 = clojure.data.equality_partition;
var G__39589_39816 = "string";
var G__39590_39817 = ((function (G__39588_39815,G__39589_39816){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39588_39815,G__39589_39816))
;
goog.object.set(G__39588_39815,G__39589_39816,G__39590_39817);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39597_39827 = clojure.data.equality_partition;
var G__39598_39828 = "number";
var G__39599_39829 = ((function (G__39597_39827,G__39598_39828){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39597_39827,G__39598_39828))
;
goog.object.set(G__39597_39827,G__39598_39828,G__39599_39829);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39602_39833 = clojure.data.equality_partition;
var G__39603_39834 = "array";
var G__39604_39835 = ((function (G__39602_39833,G__39603_39834){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__39602_39833,G__39603_39834))
;
goog.object.set(G__39602_39833,G__39603_39834,G__39604_39835);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39611_39839 = clojure.data.equality_partition;
var G__39612_39840 = "function";
var G__39613_39841 = ((function (G__39611_39839,G__39612_39840){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39611_39839,G__39612_39840))
;
goog.object.set(G__39611_39839,G__39612_39840,G__39613_39841);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39619_39846 = clojure.data.equality_partition;
var G__39620_39847 = "boolean";
var G__39621_39848 = ((function (G__39619_39846,G__39620_39847){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39619_39846,G__39620_39847))
;
goog.object.set(G__39619_39846,G__39620_39847,G__39621_39848);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39629_39855 = clojure.data.equality_partition;
var G__39630_39856 = "_";
var G__39631_39857 = ((function (G__39629_39855,G__39630_39856){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39629_39855,G__39630_39856))
;
goog.object.set(G__39629_39855,G__39630_39856,G__39631_39857);
goog.object.set(clojure.data.Diff,"null",true);

var G__39663_39871 = clojure.data.diff_similar;
var G__39664_39872 = "null";
var G__39665_39873 = ((function (G__39663_39871,G__39664_39872){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39663_39871,G__39664_39872))
;
goog.object.set(G__39663_39871,G__39664_39872,G__39665_39873);

goog.object.set(clojure.data.Diff,"string",true);

var G__39671_39883 = clojure.data.diff_similar;
var G__39672_39884 = "string";
var G__39673_39885 = ((function (G__39671_39883,G__39672_39884){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39671_39883,G__39672_39884))
;
goog.object.set(G__39671_39883,G__39672_39884,G__39673_39885);

goog.object.set(clojure.data.Diff,"number",true);

var G__39677_39892 = clojure.data.diff_similar;
var G__39678_39893 = "number";
var G__39679_39894 = ((function (G__39677_39892,G__39678_39893){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39677_39892,G__39678_39893))
;
goog.object.set(G__39677_39892,G__39678_39893,G__39679_39894);

goog.object.set(clojure.data.Diff,"array",true);

var G__39683_39901 = clojure.data.diff_similar;
var G__39684_39902 = "array";
var G__39685_39903 = ((function (G__39683_39901,G__39684_39902){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39683_39901,G__39684_39902))
;
goog.object.set(G__39683_39901,G__39684_39902,G__39685_39903);

goog.object.set(clojure.data.Diff,"function",true);

var G__39690_39912 = clojure.data.diff_similar;
var G__39691_39913 = "function";
var G__39692_39914 = ((function (G__39690_39912,G__39691_39913){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39690_39912,G__39691_39913))
;
goog.object.set(G__39690_39912,G__39691_39913,G__39692_39914);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39696_39915 = clojure.data.diff_similar;
var G__39697_39916 = "boolean";
var G__39698_39917 = ((function (G__39696_39915,G__39697_39916){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39696_39915,G__39697_39916))
;
goog.object.set(G__39696_39915,G__39697_39916,G__39698_39917);

goog.object.set(clojure.data.Diff,"_",true);

var G__39703_39924 = clojure.data.diff_similar;
var G__39704_39925 = "_";
var G__39705_39926 = ((function (G__39703_39924,G__39704_39925){
return (function (a,b){
var fexpr__39708 = (function (){var G__39709 = clojure.data.equality_partition(a);
var G__39709__$1 = (((G__39709 instanceof cljs.core.Keyword))?G__39709.fqn:null);
switch (G__39709__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39709__$1)].join('')));

}
})();
return (fexpr__39708.cljs$core$IFn$_invoke$arity$2 ? fexpr__39708.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39708.call(null,a,b));
});})(G__39703_39924,G__39704_39925))
;
goog.object.set(G__39703_39924,G__39704_39925,G__39705_39926);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
