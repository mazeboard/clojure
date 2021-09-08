// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6917){
var map__6918 = p__6917;
var map__6918__$1 = cljs.core.__destructure_map.call(null,map__6918);
var m = map__6918__$1;
var n = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6919_6947 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6920_6948 = null;
var count__6921_6949 = (0);
var i__6922_6950 = (0);
while(true){
if((i__6922_6950 < count__6921_6949)){
var f_6951 = cljs.core._nth.call(null,chunk__6920_6948,i__6922_6950);
cljs.core.println.call(null,"  ",f_6951);


var G__6952 = seq__6919_6947;
var G__6953 = chunk__6920_6948;
var G__6954 = count__6921_6949;
var G__6955 = (i__6922_6950 + (1));
seq__6919_6947 = G__6952;
chunk__6920_6948 = G__6953;
count__6921_6949 = G__6954;
i__6922_6950 = G__6955;
continue;
} else {
var temp__5753__auto___6956 = cljs.core.seq.call(null,seq__6919_6947);
if(temp__5753__auto___6956){
var seq__6919_6957__$1 = temp__5753__auto___6956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6919_6957__$1)){
var c__4649__auto___6958 = cljs.core.chunk_first.call(null,seq__6919_6957__$1);
var G__6959 = cljs.core.chunk_rest.call(null,seq__6919_6957__$1);
var G__6960 = c__4649__auto___6958;
var G__6961 = cljs.core.count.call(null,c__4649__auto___6958);
var G__6962 = (0);
seq__6919_6947 = G__6959;
chunk__6920_6948 = G__6960;
count__6921_6949 = G__6961;
i__6922_6950 = G__6962;
continue;
} else {
var f_6963 = cljs.core.first.call(null,seq__6919_6957__$1);
cljs.core.println.call(null,"  ",f_6963);


var G__6964 = cljs.core.next.call(null,seq__6919_6957__$1);
var G__6965 = null;
var G__6966 = (0);
var G__6967 = (0);
seq__6919_6947 = G__6964;
chunk__6920_6948 = G__6965;
count__6921_6949 = G__6966;
i__6922_6950 = G__6967;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6968 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6968);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6968)))?cljs.core.second.call(null,arglists_6968):arglists_6968));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6923_6969 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6924_6970 = null;
var count__6925_6971 = (0);
var i__6926_6972 = (0);
while(true){
if((i__6926_6972 < count__6925_6971)){
var vec__6935_6973 = cljs.core._nth.call(null,chunk__6924_6970,i__6926_6972);
var name_6974 = cljs.core.nth.call(null,vec__6935_6973,(0),null);
var map__6938_6975 = cljs.core.nth.call(null,vec__6935_6973,(1),null);
var map__6938_6976__$1 = cljs.core.__destructure_map.call(null,map__6938_6975);
var doc_6977 = cljs.core.get.call(null,map__6938_6976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6978 = cljs.core.get.call(null,map__6938_6976__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6974);

cljs.core.println.call(null," ",arglists_6978);

if(cljs.core.truth_(doc_6977)){
cljs.core.println.call(null," ",doc_6977);
} else {
}


var G__6979 = seq__6923_6969;
var G__6980 = chunk__6924_6970;
var G__6981 = count__6925_6971;
var G__6982 = (i__6926_6972 + (1));
seq__6923_6969 = G__6979;
chunk__6924_6970 = G__6980;
count__6925_6971 = G__6981;
i__6926_6972 = G__6982;
continue;
} else {
var temp__5753__auto___6983 = cljs.core.seq.call(null,seq__6923_6969);
if(temp__5753__auto___6983){
var seq__6923_6984__$1 = temp__5753__auto___6983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923_6984__$1)){
var c__4649__auto___6985 = cljs.core.chunk_first.call(null,seq__6923_6984__$1);
var G__6986 = cljs.core.chunk_rest.call(null,seq__6923_6984__$1);
var G__6987 = c__4649__auto___6985;
var G__6988 = cljs.core.count.call(null,c__4649__auto___6985);
var G__6989 = (0);
seq__6923_6969 = G__6986;
chunk__6924_6970 = G__6987;
count__6925_6971 = G__6988;
i__6926_6972 = G__6989;
continue;
} else {
var vec__6939_6990 = cljs.core.first.call(null,seq__6923_6984__$1);
var name_6991 = cljs.core.nth.call(null,vec__6939_6990,(0),null);
var map__6942_6992 = cljs.core.nth.call(null,vec__6939_6990,(1),null);
var map__6942_6993__$1 = cljs.core.__destructure_map.call(null,map__6942_6992);
var doc_6994 = cljs.core.get.call(null,map__6942_6993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6995 = cljs.core.get.call(null,map__6942_6993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6991);

cljs.core.println.call(null," ",arglists_6995);

if(cljs.core.truth_(doc_6994)){
cljs.core.println.call(null," ",doc_6994);
} else {
}


var G__6996 = cljs.core.next.call(null,seq__6923_6984__$1);
var G__6997 = null;
var G__6998 = (0);
var G__6999 = (0);
seq__6923_6969 = G__6996;
chunk__6924_6970 = G__6997;
count__6925_6971 = G__6998;
i__6926_6972 = G__6999;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__6943 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6944 = null;
var count__6945 = (0);
var i__6946 = (0);
while(true){
if((i__6946 < count__6945)){
var role = cljs.core._nth.call(null,chunk__6944,i__6946);
var temp__5753__auto___7000__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___7000__$1)){
var spec_7001 = temp__5753__auto___7000__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7001));
} else {
}


var G__7002 = seq__6943;
var G__7003 = chunk__6944;
var G__7004 = count__6945;
var G__7005 = (i__6946 + (1));
seq__6943 = G__7002;
chunk__6944 = G__7003;
count__6945 = G__7004;
i__6946 = G__7005;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__6943);
if(temp__5753__auto____$1){
var seq__6943__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6943__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__6943__$1);
var G__7006 = cljs.core.chunk_rest.call(null,seq__6943__$1);
var G__7007 = c__4649__auto__;
var G__7008 = cljs.core.count.call(null,c__4649__auto__);
var G__7009 = (0);
seq__6943 = G__7006;
chunk__6944 = G__7007;
count__6945 = G__7008;
i__6946 = G__7009;
continue;
} else {
var role = cljs.core.first.call(null,seq__6943__$1);
var temp__5753__auto___7010__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___7010__$2)){
var spec_7011 = temp__5753__auto___7010__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7011));
} else {
}


var G__7012 = cljs.core.next.call(null,seq__6943__$1);
var G__7013 = null;
var G__7014 = (0);
var G__7015 = (0);
seq__6943 = G__7012;
chunk__6944 = G__7013;
count__6945 = G__7014;
i__6946 = G__7015;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7016 = cljs.core.conj.call(null,via,t);
var G__7017 = cljs.core.ex_cause.call(null,t);
via = G__7016;
t = G__7017;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__7020 = datafied_throwable;
var map__7020__$1 = cljs.core.__destructure_map.call(null,map__7020);
var via = cljs.core.get.call(null,map__7020__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7020__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7020__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7021 = cljs.core.last.call(null,via);
var map__7021__$1 = cljs.core.__destructure_map.call(null,map__7021);
var type = cljs.core.get.call(null,map__7021__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7021__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7022 = data;
var map__7022__$1 = cljs.core.__destructure_map.call(null,map__7022);
var problems = cljs.core.get.call(null,map__7022__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7022__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7022__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7023 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7023__$1 = cljs.core.__destructure_map.call(null,map__7023);
var top_data = map__7023__$1;
var source = cljs.core.get.call(null,map__7023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7024 = phase;
var G__7024__$1 = (((G__7024 instanceof cljs.core.Keyword))?G__7024.fqn:null);
switch (G__7024__$1) {
case "read-source":
var map__7025 = data;
var map__7025__$1 = cljs.core.__destructure_map.call(null,map__7025);
var line = cljs.core.get.call(null,map__7025__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7025__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7026 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7026__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7026,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7026);
var G__7026__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7026__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7026__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7026__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7026__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7027 = top_data;
var G__7027__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7027,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7027);
var G__7027__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7027__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7027__$1);
var G__7027__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7027__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7027__$2);
var G__7027__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7027__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7027__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7027__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7027__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7028 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7028,(0),null);
var method = cljs.core.nth.call(null,vec__7028,(1),null);
var file = cljs.core.nth.call(null,vec__7028,(2),null);
var line = cljs.core.nth.call(null,vec__7028,(3),null);
var G__7031 = top_data;
var G__7031__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7031,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7031);
var G__7031__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7031__$1);
var G__7031__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.call(null,G__7031__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7031__$2);
var G__7031__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7031__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7031__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7031__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7031__$4;
}

break;
case "execution":
var vec__7032 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7032,(0),null);
var method = cljs.core.nth.call(null,vec__7032,(1),null);
var file = cljs.core.nth.call(null,vec__7032,(2),null);
var line = cljs.core.nth.call(null,vec__7032,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__7019_SHARP_){
var or__4223__auto__ = (p1__7019_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7019_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__7035 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7035__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7035,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7035);
var G__7035__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7035__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7035__$1);
var G__7035__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7035__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7035__$2);
var G__7035__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7035__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7035__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7035__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7035__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7024__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7039){
var map__7040 = p__7039;
var map__7040__$1 = cljs.core.__destructure_map.call(null,map__7040);
var triage_data = map__7040__$1;
var phase = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7040__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7041 = phase;
var G__7041__$1 = (((G__7041 instanceof cljs.core.Keyword))?G__7041.fqn:null);
switch (G__7041__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7042_7051 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7043_7052 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7044_7053 = true;
var _STAR_print_fn_STAR__temp_val__7045_7054 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7044_7053);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7045_7054);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7037_SHARP_){
return cljs.core.dissoc.call(null,p1__7037_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7043_7052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7042_7051);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7046_7055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7047_7056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7048_7057 = true;
var _STAR_print_fn_STAR__temp_val__7049_7058 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7048_7057);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7049_7058);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7038_SHARP_){
return cljs.core.dissoc.call(null,p1__7038_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7047_7056);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7046_7055);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7041__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
