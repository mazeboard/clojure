goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49800){
var map__49801 = p__49800;
var map__49801__$1 = (((((!((map__49801 == null))))?(((((map__49801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49801):map__49801);
var m = map__49801__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49805_50205 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49806_50206 = null;
var count__49807_50207 = (0);
var i__49808_50208 = (0);
while(true){
if((i__49808_50208 < count__49807_50207)){
var f_50212 = chunk__49806_50206.cljs$core$IIndexed$_nth$arity$2(null,i__49808_50208);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50212], 0));


var G__50213 = seq__49805_50205;
var G__50214 = chunk__49806_50206;
var G__50215 = count__49807_50207;
var G__50216 = (i__49808_50208 + (1));
seq__49805_50205 = G__50213;
chunk__49806_50206 = G__50214;
count__49807_50207 = G__50215;
i__49808_50208 = G__50216;
continue;
} else {
var temp__5753__auto___50217 = cljs.core.seq(seq__49805_50205);
if(temp__5753__auto___50217){
var seq__49805_50218__$1 = temp__5753__auto___50217;
if(cljs.core.chunked_seq_QMARK_(seq__49805_50218__$1)){
var c__4550__auto___50219 = cljs.core.chunk_first(seq__49805_50218__$1);
var G__50221 = cljs.core.chunk_rest(seq__49805_50218__$1);
var G__50222 = c__4550__auto___50219;
var G__50223 = cljs.core.count(c__4550__auto___50219);
var G__50224 = (0);
seq__49805_50205 = G__50221;
chunk__49806_50206 = G__50222;
count__49807_50207 = G__50223;
i__49808_50208 = G__50224;
continue;
} else {
var f_50226 = cljs.core.first(seq__49805_50218__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50226], 0));


var G__50227 = cljs.core.next(seq__49805_50218__$1);
var G__50228 = null;
var G__50229 = (0);
var G__50230 = (0);
seq__49805_50205 = G__50227;
chunk__49806_50206 = G__50228;
count__49807_50207 = G__50229;
i__49808_50208 = G__50230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50235 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50235], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50235)))?cljs.core.second(arglists_50235):arglists_50235)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49827_50240 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49828_50241 = null;
var count__49829_50242 = (0);
var i__49830_50243 = (0);
while(true){
if((i__49830_50243 < count__49829_50242)){
var vec__49849_50244 = chunk__49828_50241.cljs$core$IIndexed$_nth$arity$2(null,i__49830_50243);
var name_50245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49849_50244,(0),null);
var map__49852_50246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49849_50244,(1),null);
var map__49852_50247__$1 = (((((!((map__49852_50246 == null))))?(((((map__49852_50246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49852_50246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49852_50246):map__49852_50246);
var doc_50248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49852_50247__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49852_50247__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50245], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50249], 0));

if(cljs.core.truth_(doc_50248)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50248], 0));
} else {
}


var G__50253 = seq__49827_50240;
var G__50254 = chunk__49828_50241;
var G__50255 = count__49829_50242;
var G__50256 = (i__49830_50243 + (1));
seq__49827_50240 = G__50253;
chunk__49828_50241 = G__50254;
count__49829_50242 = G__50255;
i__49830_50243 = G__50256;
continue;
} else {
var temp__5753__auto___50257 = cljs.core.seq(seq__49827_50240);
if(temp__5753__auto___50257){
var seq__49827_50258__$1 = temp__5753__auto___50257;
if(cljs.core.chunked_seq_QMARK_(seq__49827_50258__$1)){
var c__4550__auto___50259 = cljs.core.chunk_first(seq__49827_50258__$1);
var G__50260 = cljs.core.chunk_rest(seq__49827_50258__$1);
var G__50261 = c__4550__auto___50259;
var G__50262 = cljs.core.count(c__4550__auto___50259);
var G__50263 = (0);
seq__49827_50240 = G__50260;
chunk__49828_50241 = G__50261;
count__49829_50242 = G__50262;
i__49830_50243 = G__50263;
continue;
} else {
var vec__49860_50265 = cljs.core.first(seq__49827_50258__$1);
var name_50266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49860_50265,(0),null);
var map__49863_50267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49860_50265,(1),null);
var map__49863_50268__$1 = (((((!((map__49863_50267 == null))))?(((((map__49863_50267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49863_50267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49863_50267):map__49863_50267);
var doc_50269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863_50268__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49863_50268__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50266], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50270], 0));

if(cljs.core.truth_(doc_50269)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50269], 0));
} else {
}


var G__50275 = cljs.core.next(seq__49827_50258__$1);
var G__50276 = null;
var G__50277 = (0);
var G__50278 = (0);
seq__49827_50240 = G__50275;
chunk__49828_50241 = G__50276;
count__49829_50242 = G__50277;
i__49830_50243 = G__50278;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49868 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49869 = null;
var count__49870 = (0);
var i__49871 = (0);
while(true){
if((i__49871 < count__49870)){
var role = chunk__49869.cljs$core$IIndexed$_nth$arity$2(null,i__49871);
var temp__5753__auto___50284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50284__$1)){
var spec_50285 = temp__5753__auto___50284__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50285)], 0));
} else {
}


var G__50286 = seq__49868;
var G__50287 = chunk__49869;
var G__50288 = count__49870;
var G__50289 = (i__49871 + (1));
seq__49868 = G__50286;
chunk__49869 = G__50287;
count__49870 = G__50288;
i__49871 = G__50289;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49868);
if(temp__5753__auto____$1){
var seq__49868__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49868__$1);
var G__50290 = cljs.core.chunk_rest(seq__49868__$1);
var G__50291 = c__4550__auto__;
var G__50292 = cljs.core.count(c__4550__auto__);
var G__50293 = (0);
seq__49868 = G__50290;
chunk__49869 = G__50291;
count__49870 = G__50292;
i__49871 = G__50293;
continue;
} else {
var role = cljs.core.first(seq__49868__$1);
var temp__5753__auto___50294__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50294__$2)){
var spec_50295 = temp__5753__auto___50294__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50295)], 0));
} else {
}


var G__50296 = cljs.core.next(seq__49868__$1);
var G__50297 = null;
var G__50298 = (0);
var G__50299 = (0);
seq__49868 = G__50296;
chunk__49869 = G__50297;
count__49870 = G__50298;
i__49871 = G__50299;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50307 = cljs.core.ex_cause(t);
via = G__50306;
t = G__50307;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49925 = datafied_throwable;
var map__49925__$1 = (((((!((map__49925 == null))))?(((((map__49925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49925):map__49925);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49925__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49926 = cljs.core.last(via);
var map__49926__$1 = (((((!((map__49926 == null))))?(((((map__49926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49926):map__49926);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49926__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49926__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49926__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49927 = data;
var map__49927__$1 = (((((!((map__49927 == null))))?(((((map__49927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49927):map__49927);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49929 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49929__$1 = (((((!((map__49929 == null))))?(((((map__49929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49929):map__49929);
var top_data = map__49929__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49945 = phase;
var G__49945__$1 = (((G__49945 instanceof cljs.core.Keyword))?G__49945.fqn:null);
switch (G__49945__$1) {
case "read-source":
var map__49947 = data;
var map__49947__$1 = (((((!((map__49947 == null))))?(((((map__49947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49947):map__49947);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49952 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49952);
var G__49952__$2 = (cljs.core.truth_((function (){var fexpr__49954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49954.cljs$core$IFn$_invoke$arity$1 ? fexpr__49954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49952__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49952__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49952__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49959 = top_data;
var G__49959__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49959,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49959);
var G__49959__$2 = (cljs.core.truth_((function (){var fexpr__49963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49963.cljs$core$IFn$_invoke$arity$1 ? fexpr__49963.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49963.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49959__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49959__$1);
var G__49959__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49959__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49959__$2);
var G__49959__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49959__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49959__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49959__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49959__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49972 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(3),null);
var G__49976 = top_data;
var G__49976__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49976,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49976);
var G__49976__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49976__$1);
var G__49976__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49976__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49976__$2);
var G__49976__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49976__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49976__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49976__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49976__$4;
}

break;
case "execution":
var vec__49987 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__49987,source__$1,method,file,line,G__49945,G__49945__$1,map__49925,map__49925__$1,via,trace,phase,map__49926,map__49926__$1,type,message,data,map__49927,map__49927__$1,problems,fn,caller,map__49929,map__49929__$1,top_data,source){
return (function (p1__49921_SHARP_){
var or__4131__auto__ = (p1__49921_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__49999 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49999.cljs$core$IFn$_invoke$arity$1 ? fexpr__49999.cljs$core$IFn$_invoke$arity$1(p1__49921_SHARP_) : fexpr__49999.call(null,p1__49921_SHARP_));
}
});})(vec__49987,source__$1,method,file,line,G__49945,G__49945__$1,map__49925,map__49925__$1,via,trace,phase,map__49926,map__49926__$1,type,message,data,map__49927,map__49927__$1,problems,fn,caller,map__49929,map__49929__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__50004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50004__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50004,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50004);
var G__50004__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50004__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50004__$1);
var G__50004__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50004__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50004__$2);
var G__50004__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50004__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50004__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50004__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50004__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49945__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50054){
var map__50057 = p__50054;
var map__50057__$1 = (((((!((map__50057 == null))))?(((((map__50057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50057):map__50057);
var triage_data = map__50057__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50116 = phase;
var G__50116__$1 = (((G__50116 instanceof cljs.core.Keyword))?G__50116.fqn:null);
switch (G__50116__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50123 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50124 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50125 = loc;
var G__50126 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50133_50361 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50134_50362 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50135_50363 = true;
var _STAR_print_fn_STAR__temp_val__50136_50364 = ((function (_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50135_50363;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50136_50364;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,_STAR_print_fn_STAR__temp_val__50136_50364,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,_STAR_print_fn_STAR__temp_val__50136_50364,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__50043_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50043_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,_STAR_print_fn_STAR__temp_val__50136_50364,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__50133_50361,_STAR_print_fn_STAR__orig_val__50134_50362,_STAR_print_newline_STAR__temp_val__50135_50363,_STAR_print_fn_STAR__temp_val__50136_50364,sb__4661__auto__,G__50123,G__50124,G__50125,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50134_50362;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50133_50361;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50123,G__50124,G__50125,G__50126) : format.call(null,G__50123,G__50124,G__50125,G__50126));

break;
case "macroexpansion":
var G__50149 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50150 = cause_type;
var G__50151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50152 = loc;
var G__50153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50149,G__50150,G__50151,G__50152,G__50153) : format.call(null,G__50149,G__50150,G__50151,G__50152,G__50153));

break;
case "compile-syntax-check":
var G__50154 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50155 = cause_type;
var G__50156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50157 = loc;
var G__50158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50154,G__50155,G__50156,G__50157,G__50158) : format.call(null,G__50154,G__50155,G__50156,G__50157,G__50158));

break;
case "compilation":
var G__50159 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50160 = cause_type;
var G__50161 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50162 = loc;
var G__50163 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50159,G__50160,G__50161,G__50162,G__50163) : format.call(null,G__50159,G__50160,G__50161,G__50162,G__50163));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50165 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50166 = symbol;
var G__50167 = loc;
var G__50168 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50175_50367 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50176_50368 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50177_50369 = true;
var _STAR_print_fn_STAR__temp_val__50178_50370 = ((function (_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50177_50369;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50178_50370;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,_STAR_print_fn_STAR__temp_val__50178_50370,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,_STAR_print_fn_STAR__temp_val__50178_50370,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__50045_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50045_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,_STAR_print_fn_STAR__temp_val__50178_50370,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__50175_50367,_STAR_print_fn_STAR__orig_val__50176_50368,_STAR_print_newline_STAR__temp_val__50177_50369,_STAR_print_fn_STAR__temp_val__50178_50370,sb__4661__auto__,G__50165,G__50166,G__50167,G__50116,G__50116__$1,loc,class_name,simple_class,cause_type,format,map__50057,map__50057__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50176_50368;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50175_50367;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50165,G__50166,G__50167,G__50168) : format.call(null,G__50165,G__50166,G__50167,G__50168));
} else {
var G__50189 = "Execution error%s at %s(%s).\n%s\n";
var G__50190 = cause_type;
var G__50191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50192 = loc;
var G__50193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50189,G__50190,G__50191,G__50192,G__50193) : format.call(null,G__50189,G__50190,G__50191,G__50192,G__50193));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50116__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
