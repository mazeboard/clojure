goog.provide('edn_query_language.core');
/**
 * Dynamic var.  When bound to true in the current thread calls to query->ast will no go past the
 *   first level of children.  This is useful when you just want the AST for one layer of a query.
 */
edn_query_language.core._STAR_shallow_conversion_STAR_ = false;
/**
 * @define {boolean}
 */
edn_query_language.core.INCLUDE_SPECS = goog.define("edn_query_language.core.INCLUDE_SPECS",true);
if(edn_query_language.core.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"*","*",345799209,null)),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident-value","edn-query-language.core/ident-value",-715964249)], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__43826){
return ((cljs.core.map_QMARK_(G__43826)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.bounded_count((1),G__43826))));
}),cljs.core.map_QMARK_,(1),(function (i__14572__auto__,v__14573__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14573__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","join-key","edn-query-language.core/join-key",-2056428321),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword(null,"count","count",2139924085),(1))]),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"min-count","min-count",1594709013),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__43833){
return ((cljs.core.map_QMARK_(G__43833)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__43833))) && ((cljs.core.bounded_count((1)
,G__43833) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),(1),cljs.core.map_QMARK_,(function (i__14572__auto__,v__14573__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14573__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))]),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.Keyword(null,"unbounded","unbounded",-2054589494),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"unbounded","unbounded",-2054589494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","recursion-depth","edn-query-language.core/recursion-depth",-1726216891),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"recursion","recursion",-749738765)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","union","edn-query-language.core/union",-1766530903),new cljs.core.Keyword("edn-query-language.core","recursion","edn-query-language.core/recursion",2090214849)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","param-expr-key","edn-query-language.core/param-expr-key",1108092539),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","join-key-param-expr","edn-query-language.core/join-key-param-expr",496601666),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","join-key-param-key","edn-query-language.core/join-key-param-key",339850713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutate-key","mutate-key",-468386111),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673))], null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),true,(function (G__43997){
return ((cljs.core.map_QMARK_(G__43997)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.bounded_count((1),G__43997))));
}),cljs.core.map_QMARK_,(1),(function (i__14572__auto__,v__14573__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14573__auto__,(0));
}),true,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword(null,"count","count",2139924085),(1))]),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword(null,"mutation-join","mutation-join",1363539465),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"mutation-join","mutation-join",1363539465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","mutation-expr","edn-query-language.core/mutation-expr",-2127055036),new cljs.core.Keyword("edn-query-language.core","mutation-join","edn-query-language.core/mutation-join",2054928671)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword(null,"special","special",-1125941630),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"param-exp","param-exp",-594699720),new cljs.core.Keyword(null,"special","special",-1125941630)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","join","edn-query-language.core/join",2091674288),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation","edn-query-language.core/mutation",137261372),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","special-property","edn-query-language.core/special-property",-1016508506)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__44023){
return cljs.core.vector_QMARK_(G__44023);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.core","query-expr","edn-query-language.core/query-expr",-1903182083),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.symbol_QMARK_], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.symbol_QMARK_], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__44090){
return cljs.core.coll_QMARK_(G__44090);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43573#","p1__43573#",901125349,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__43573#","p1__43573#",901125349,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43574#","p1__43574#",-1311466391,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__43574#","p1__43574#",-1311466391,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43574#","p1__43574#",-1311466391,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__43574#","p1__43574#",-1311466391,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44133){
return cljs.core.map_QMARK_(G__44133);
}),(function (G__44133){
return cljs.core.contains_QMARK_(G__44133,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44133){
return cljs.core.contains_QMARK_(G__44133,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__44133){
return ((cljs.core.map_QMARK_(G__44133)) && (cljs.core.contains_QMARK_(G__44133,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44133,new cljs.core.Keyword(null,"children","children",-940561982))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (p1__43573_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43573_SHARP_));
}),(function (x){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__43574_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__43574_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null));

if((typeof edn_query_language !== 'undefined') && (typeof edn_query_language.core !== 'undefined') && (typeof edn_query_language.core.node_type !== 'undefined')){
} else {
edn_query_language.core.node_type = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44167 = cljs.core.get_global_hierarchy;
return (fexpr__44167.cljs$core$IFn$_invoke$arity$0 ? fexpr__44167.cljs$core$IFn$_invoke$arity$0() : fexpr__44167.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("edn-query-language.core","node-type"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (_){
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44171){
return cljs.core.map_QMARK_(G__44171);
}),(function (G__44171){
return cljs.core.contains_QMARK_(G__44171,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__44171){
return cljs.core.contains_QMARK_(G__44171,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
})], null),(function (G__44171){
return ((cljs.core.map_QMARK_(G__44171)) && (cljs.core.contains_QMARK_(G__44171,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_(G__44171,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)))], null),null]));
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"prop","prop",-515168332),(function (_){
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44198){
return cljs.core.map_QMARK_(G__44198);
}),(function (G__44198){
return cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44198){
return cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__44198){
return cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
})], null),(function (G__44198){
return ((cljs.core.map_QMARK_(G__44198)) && (cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_(G__44198,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)))], null),null]));
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"join","join",-758861890),(function (_){
return cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Keyword(null,"recursion","recursion",-749738765))),new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43577#","p1__43577#",2005549662,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"union","union",2142937499),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__43577#","p1__43577#",2005549662,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44239){
return cljs.core.map_QMARK_(G__44239);
}),(function (G__44239){
return cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44239){
return cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__44239){
return cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
}),(function (G__44239){
return cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"query","query",-1288509510));
})], null),(function (G__44239){
return ((cljs.core.map_QMARK_(G__44239)) && (cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))) && (cljs.core.contains_QMARK_(G__44239,new cljs.core.Keyword(null,"query","query",-1288509510))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"query","query",-1288509510)))], null),null])),(function (p1__43576_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__43576_SHARP_)),new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return p1__43576_SHARP_;
} else {
if(cljs.core.contains_QMARK_(p1__43576_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982))){
return p1__43576_SHARP_;
} else {
return false;
}
}
}),(function (x){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__43577_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"union","union",2142937499),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__43577_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (_){
return cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"union-entry","union-entry",223335750),"null"], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44316){
return cljs.core.map_QMARK_(G__44316);
}),(function (G__44316){
return cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44316){
return cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"query","query",-1288509510));
}),(function (G__44316){
return cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__44316){
return ((cljs.core.map_QMARK_(G__44316)) && (cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"query","query",-1288509510))) && (cljs.core.contains_QMARK_(G__44316,new cljs.core.Keyword(null,"children","children",-940561982))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"query","query",-1288509510))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (p1__43579_SHARP_){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"union-entry","union-entry",223335750),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__43579_SHARP_));
})], null),null);
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union-entry","union-entry",223335750),(function (_){
return cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43581#","p1__43581#",-1108882919,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__43581#","p1__43581#",-1108882919,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44346){
return cljs.core.map_QMARK_(G__44346);
}),(function (G__44346){
return cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44346){
return cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
}),(function (G__44346){
return cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"query","query",-1288509510));
}),(function (G__44346){
return cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"children","children",-940561982));
})], null),(function (G__44346){
return ((cljs.core.map_QMARK_(G__44346)) && (cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"union-key","union-key",1529707234))) && (cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"query","query",-1288509510))) && (cljs.core.contains_QMARK_(G__44346,new cljs.core.Keyword(null,"children","children",-940561982))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","union-key","edn-query-language.ast/union-key",-682972655),new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-key","union-key",1529707234),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"union-key","union-key",1529707234))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"query","query",-1288509510))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982)))], null),null])),(function (x){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__43581_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__43581_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (_){
return cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__43582#","p1__43582#",662625847,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Keyword(null,"call","call",-519999866),"null",new cljs.core.Keyword(null,"prop","prop",-515168332),"null",new cljs.core.Keyword(null,"join","join",-758861890),"null"], null), null),new cljs.core.Symbol(null,"p1__43582#","p1__43582#",662625847,null))),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.list(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44431){
return cljs.core.map_QMARK_(G__44431);
}),(function (G__44431){
return cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__44431){
return cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"key","key",-1516042587));
}),(function (G__44431){
return cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
}),(function (G__44431){
return cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"params","params",710516235));
})], null),(function (G__44431){
return ((cljs.core.map_QMARK_(G__44431)) && (cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"key","key",-1516042587))) && (cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))) && (cljs.core.contains_QMARK_(G__44431,new cljs.core.Keyword(null,"params","params",710516235))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","dispatch-key","edn-query-language.ast/dispatch-key",-1369369141),new cljs.core.Keyword("edn-query-language.core","params","edn-query-language.core/params",429907673)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","query","edn-query-language.ast/query",780932719),new cljs.core.Keyword("edn-query-language.ast","children","edn-query-language.ast/children",1247091825)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"key","key",-1516042587))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"params","params",710516235)))], null),null])),(function (x){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__43582_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"join","join",-758861890),null], null), null),p1__43582_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x));
})], null),null);
}));

edn_query_language.core.node_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"root","root",-448657453),(function (_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null);
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","type","edn-query-language.ast/type",-1057701829),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.list(new cljs.core.Symbol("cljs.core","methods","cljs.core/methods",-1793562622,null),new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null)))),cljs.core.set(cljs.core.keys(cljs.core.methods$(edn_query_language.core.node_type))));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),new cljs.core.Keyword(null,"type","type",1174270348)),cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),new cljs.core.Var(function(){return edn_query_language.core.node_type;},new cljs.core.Symbol("edn-query-language.core","node-type","edn-query-language.core/node-type",1078374183,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"edn-query-language.core","edn-query-language.core",1253777601,null),new cljs.core.Symbol(null,"node-type","node-type",1770023989,null),"edn_query_language/core.cljc",22,3,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(edn_query_language.core.node_type)?edn_query_language.core.node_type.cljs$lang$test:null)])),new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
}
edn_query_language.core.mark_meta = (function edn_query_language$core$mark_meta(source,target){
var G__44523 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44523,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__44523;
}
});
edn_query_language.core.symbol__GT_ast = (function edn_query_language$core$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
edn_query_language.core.keyword__GT_ast = (function edn_query_language$core$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
edn_query_language.core.union_entry__GT_ast = (function edn_query_language$core$union_entry__GT_ast(p__44527){
var vec__44528 = p__44527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44528,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
edn_query_language.core.union__GT_ast = (function edn_query_language$core$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.union_entry__GT_ast),m)], null);
});
edn_query_language.core.call__GT_ast = (function edn_query_language$core$call__GT_ast(p__44546){
var vec__44547 = p__44546;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44547,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44547,(1),null);
var call = vec__44547;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : edn_query_language.core.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : edn_query_language.core.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__44553 = edn_query_language.core.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__44553;
}
}
});
/**
 * Convert a query to its AST representation.
 */
edn_query_language.core.query__GT_ast = (function edn_query_language$core$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn_query_language.core.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
/**
 * Call query->ast and return the first children.
 */
edn_query_language.core.query__GT_ast1 = (function edn_query_language$core$query__GT_ast1(query_expr){
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query_expr)));
});
edn_query_language.core.join__GT_ast = (function edn_query_language$core$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__44562 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562,(1),null);
var ast = (edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? edn_query_language.core.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : edn_query_language.core.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,edn_query_language.core.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v)) || (edn_query_language.core._STAR_shallow_conversion_STAR_)))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
edn_query_language.core.ident__GT_ast = (function edn_query_language$core$ident__GT_ast(p__44577){
var vec__44578 = p__44577;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44578,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44578,(1),null);
var ref = vec__44578;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
edn_query_language.core.expr__GT_ast = (function edn_query_language$core$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return edn_query_language.core.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return edn_query_language.core.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return edn_query_language.core.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return edn_query_language.core.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return edn_query_language.core.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
edn_query_language.core.wrap_expr = (function edn_query_language$core$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__44593 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__44593,null,(1),null));
} else {
return G__44593;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
edn_query_language.core.parameterize = (function edn_query_language$core$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
edn_query_language.core.ast__GT_expr = (function edn_query_language$core$ast__GT_expr(var_args){
var G__44620 = arguments.length;
switch (G__44620) {
case 1:
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__44629,unparse_QMARK_){
var map__44630 = p__44629;
var map__44630__$1 = (((((!((map__44630 == null))))?(((((map__44630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44630):map__44630);
var ast = map__44630__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44630__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44630__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44630__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__44641 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44630,map__44630__$1,ast,ast_meta,type,component){
return (function (p1__44606_SHARP_){
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44606_SHARP_,unparse_QMARK_);
});})(map__44630,map__44630__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44641,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44641;
}
} else {
var map__44648 = ast;
var map__44648__$1 = (((((!((map__44648 == null))))?(((((map__44648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44648):map__44648);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44648__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44648__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44648__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44648__$1,new cljs.core.Keyword(null,"params","params",710516235));
return edn_query_language.core.wrap_expr(query_root,(cljs.core.truth_((function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__4120__auto__;
}
})())?(function (){var expr = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return edn_query_language.core.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?edn_query_language.core.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__4120__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__44659 = ast;
var map__44659__$1 = (((((!((map__44659 == null))))?(((((map__44659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44659):map__44659);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__44665 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44665,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44665;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component){
return (function (p__44666){
var map__44667 = p__44666;
var map__44667__$1 = (((((!((map__44667 == null))))?(((((map__44667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44667):map__44667);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__44670 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44667,map__44667__$1,union_key,children__$1,component__$1,map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component){
return (function (p1__44612_SHARP_){
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44612_SHARP_,unparse_QMARK_);
});})(map__44667,map__44667__$1,union_key,children__$1,component__$1,map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44670,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__44670;
}
})()], null);
});})(map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__44672 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component){
return (function (p1__44613_SHARP_){
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44613_SHARP_,unparse_QMARK_);
});})(map__44659,map__44659__$1,children,query_meta,key__$1,map__44648,map__44648__$1,key,query,query_root,params,map__44630,map__44630__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44672,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44672;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
});

edn_query_language.core.ast__GT_expr.cljs$lang$maxFixedArity = 2;

edn_query_language.core.ast__GT_query = (function edn_query_language$core$ast__GT_query(query_ast){

var _LT__GT_ = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
if(cljs.core.vector_QMARK_(_LT__GT_)){
return _LT__GT_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT__GT_], null);
}
});
/**
 * Check if x is a EQL ident.
 */
edn_query_language.core.ident_QMARK_ = (function edn_query_language$core$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))));
});
edn_query_language.core.focus_subquery_union_STAR_ = (function edn_query_language$core$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44689_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__44689_SHARP_),p1__44689_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__44694){
var map__44695 = p__44694;
var map__44695__$1 = (((((!((map__44695 == null))))?(((((map__44695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44695):map__44695);
var union_entry = map__44695__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44695__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5751__auto__)){
var sub = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(edn_query_language.core.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? edn_query_language.core.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : edn_query_language.core.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
/**
 * Internal implementation of focus-subquery, you can use this function directly if
 *   you want to send AST in and get AST out (instead of query in / query out).
 */
edn_query_language.core.focus_subquery_STAR_ = (function edn_query_language$core$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44701_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__44701_SHARP_),p1__44701_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__44704){
var map__44705 = p__44704;
var map__44705__$1 = (((((!((map__44705 == null))))?(((((map__44705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44705):map__44705);
var focus = map__44705__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44705__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44705__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5751__auto__)){
var source = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(edn_query_language.core.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? edn_query_language.core.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source,focus) : edn_query_language.core.focus_subquery_STAR_.call(null,source,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,edn_query_language.core.focus_subquery_union_STAR_(source,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,source);

}
}
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
edn_query_language.core.focus_subquery = (function edn_query_language$core$focus_subquery(query,sub_query){
var query_ast = edn_query_language.core.query__GT_ast(query);
var sub_ast = edn_query_language.core.query__GT_ast(sub_query);
return edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.focus_subquery_STAR_(query_ast,sub_ast),true);
});
/**
 * Recursivelly transduce children on the AST, you can use this to apply filter/transformations
 *   on a whole AST. Each iteration of the transducer will get a single AST node to process.
 * 
 *   ```
 *   (->> [:a {:b [:c :d]} :e]
 *     (p/query->ast)
 *     (p/transduce-children (remove (comp #{:a :c} :key)))
 *     (p/ast->query))
 *   ; => [{:b [:d]} :e]
 *   ```
 */
edn_query_language.core.transduce_children = (function edn_query_language$core$transduce_children(xform,p__44732){
var map__44735 = p__44732;
var map__44735__$1 = (((((!((map__44735 == null))))?(((((map__44735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44735):map__44735);
var node = map__44735__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__44744 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__44744,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__44744,map__44735,map__44735__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__44744,map__44735,map__44735__$1,node,children){
return (function (p1__44726_SHARP_){
return (edn_query_language.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? edn_query_language.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__44726_SHARP_) : edn_query_language.core.transduce_children.call(null,xform,p1__44726_SHARP_));
});})(G__44744,map__44735,map__44735__$1,node,children))
)),children__$1);
});})(G__44744,map__44735,map__44735__$1,node,children))
);
} else {
return G__44744;
}
});
/**
 * Given an AST point, check if the children is a union query type.
 */
edn_query_language.core.union_children_QMARK_ = (function edn_query_language$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__44757 = ast;
var G__44757__$1 = (((G__44757 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__44757));
var G__44757__$2 = (((G__44757__$1 == null))?null:cljs.core.first(G__44757__$1));
if((G__44757__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__44757__$2);
}
})());
});
/**
 * Add property param, eg:
 * 
 *   ```
 *   (p/update-property-param :keyword assoc :foo "bar") => (:keyword {:foo "bar"})
 *   (p/update-property-param '(:keyword {:param "prev"}) assoc :foo "bar") => (:keyword {:foo "bar" :param "prev"})
 *   ```
 *   
 */
edn_query_language.core.update_property_param = (function edn_query_language$core$update_property_param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45433 = arguments.length;
var i__4731__auto___45434 = (0);
while(true){
if((i__4731__auto___45434 < len__4730__auto___45433)){
args__4736__auto__.push((arguments[i__4731__auto___45434]));

var G__45435 = (i__4731__auto___45434 + (1));
i__4731__auto___45434 = G__45435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return edn_query_language.core.update_property_param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

edn_query_language.core.update_property_param.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
if(cljs.core.seq_QMARK_(x)){
var vec__44771 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44771,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

edn_query_language.core.update_property_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
edn_query_language.core.update_property_param.cljs$lang$applyTo = (function (seq44763){
var G__44764 = cljs.core.first(seq44763);
var seq44763__$1 = cljs.core.next(seq44763);
var G__44765 = cljs.core.first(seq44763__$1);
var seq44763__$2 = cljs.core.next(seq44763__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44764,G__44765,seq44763__$2);
});

/**
 * Merges two ast's.
 */
edn_query_language.core.merge_asts = (function edn_query_language$core$merge_asts(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__44781){
var map__44782 = p__44781;
var map__44782__$1 = (((((!((map__44782 == null))))?(((((map__44782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44782):map__44782);
var item_b = map__44782__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44782__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44782__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44782__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5751__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__44782,map__44782__$1,item_b,key,type,params){
return (function (p1__44777_SHARP_,p2__44776_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__44776_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44777_SHARP_,p2__44776_SHARP_], null);
} else {
return null;
}
});})(map__44782,map__44782__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__44788 = temp__5751__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44788,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44788,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),edn_query_language.core.merge_asts,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
});
/**
 * Merges two queries
 */
edn_query_language.core.merge_queries = (function edn_query_language$core$merge_queries(qa,qb){
var G__44799 = edn_query_language.core.merge_asts(edn_query_language.core.query__GT_ast(qa),edn_query_language.core.query__GT_ast(qb));
if((G__44799 == null)){
return null;
} else {
return edn_query_language.core.ast__GT_query(G__44799);
}
});
edn_query_language.core.mask_query_STAR_ = (function edn_query_language$core$mask_query_STAR_(p__44802,mask_ast){
var map__44803 = p__44802;
var map__44803__$1 = (((((!((map__44803 == null))))?(((((map__44803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44803):map__44803);
var source_ast = map__44803__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__44803,map__44803__$1,source_ast,children){
return (function (ast,p__44811){
var map__44812 = p__44811;
var map__44812__$1 = (((((!((map__44812 == null))))?(((((map__44812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44812):map__44812);
var mask_node = map__44812__$1;
var mask_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44812__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587)),children));
if(cljs.core.truth_(temp__5751__auto__)){
var source_node = temp__5751__auto__;
if(((cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(source_node))) && (cljs.core.seq(mask_children)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,(edn_query_language.core.mask_query_STAR_.cljs$core$IFn$_invoke$arity$2 ? edn_query_language.core.mask_query_STAR_.cljs$core$IFn$_invoke$arity$2(source_node,mask_node) : edn_query_language.core.mask_query_STAR_.call(null,source_node,mask_node)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,source_node);
}
} else {
return ast;
}
});})(map__44803,map__44803__$1,source_ast,children))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(source_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(mask_ast));
});
/**
 * Given a source EQL query, use a mask EQL query to filter which elements to pick from
 *   the source. Params will be maintaned from the source, params in mask are ignored.
 */
edn_query_language.core.mask_query = (function edn_query_language$core$mask_query(source,mask){
var source_ast = edn_query_language.core.query__GT_ast(source);
var mask_ast = edn_query_language.core.query__GT_ast(mask);
return edn_query_language.core.ast__GT_query(edn_query_language.core.mask_query_STAR_(source_ast,mask_ast));
});
/**
 * Converts ident values and param values to ::p/var.
 */
edn_query_language.core.normalize_query_variables = (function edn_query_language$core$normalize_query_variables(query){
return edn_query_language.core.ast__GT_query(edn_query_language.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__44826 = x;
var G__44826__$1 = ((edn_query_language.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44826,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("edn-query-language.core","var","edn-query-language.core/var",-1571169875)], null)):G__44826);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__44826__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__44826,G__44826__$1){
return (function (p1__44825_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__44826,G__44826__$1){
return (function (p__44827){
var vec__44828 = p__44827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44828,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44828,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("edn-query-language.core","var","edn-query-language.core/var",-1571169875)], null);
});})(G__44826,G__44826__$1))
),p1__44825_SHARP_);
});})(G__44826,G__44826__$1))
);
} else {
return G__44826__$1;
}
})),edn_query_language.core.query__GT_ast(query)));
});
/**
 * Generates a consistent hash from the query. The query first goes to a process to remove any
 *   variables from idents and params, then we get the Clojure hash of it. You can use this to save
 *   information about a query that can be used to correlate with the query later.
 */
edn_query_language.core.query_id = (function edn_query_language$core$query_id(query){
return cljs.core.hash(edn_query_language.core.normalize_query_variables(query));
});
/**
 * Like query->ast, but does not follow joins.  Useful for efficiently getting just the top-level entries in
 * a large query.
 */
edn_query_language.core.query__GT_shallow_ast = (function edn_query_language$core$query__GT_shallow_ast(query){
var _STAR_shallow_conversion_STAR__orig_val__44835 = edn_query_language.core._STAR_shallow_conversion_STAR_;
var _STAR_shallow_conversion_STAR__temp_val__44836 = true;
edn_query_language.core._STAR_shallow_conversion_STAR_ = _STAR_shallow_conversion_STAR__temp_val__44836;

try{return edn_query_language.core.query__GT_ast(query);
}finally {edn_query_language.core._STAR_shallow_conversion_STAR_ = _STAR_shallow_conversion_STAR__orig_val__44835;
}});

/**
 * @interface
 */
edn_query_language.core.IProvideEQLAst = function(){};

edn_query_language.core._eql_ast = (function edn_query_language$core$_eql_ast(this$){
if((((!((this$ == null)))) && ((!((this$.edn_query_language$core$IProvideEQLAst$_eql_ast$arity$1 == null)))))){
return this$.edn_query_language$core$IProvideEQLAst$_eql_ast$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (edn_query_language.core._eql_ast[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (edn_query_language.core._eql_ast["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IProvideEQLAst.-eql-ast",this$);
}
}
}
});

cljs.core.PersistentVector.prototype.edn_query_language$core$IProvideEQLAst$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.edn_query_language$core$IProvideEQLAst$_eql_ast$arity$1 = (function (this$){
var this$__$1 = this;
return edn_query_language.core.query__GT_ast(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.edn_query_language$core$IProvideEQLAst$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.edn_query_language$core$IProvideEQLAst$_eql_ast$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.edn_query_language$core$IProvideEQLAst$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.edn_query_language$core$IProvideEQLAst$_eql_ast$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
/**
 * If param is a vector it assumes its an EEQL query and converts to AST. If its an map,
 *   it assumes its already and AST and returns as is. The implementation uses protocols
 *   for high performance dispatch.
 */
edn_query_language.core.eql_ast = (function edn_query_language$core$eql_ast(eql_query_or_ast){
return edn_query_language.core._eql_ast(eql_query_or_ast);
});
if(edn_query_language.core.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","query->ast","edn-query-language.core/query->ast",1749339811,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","query->ast1","edn-query-language.core/query->ast1",-1127394108,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","ast->query","edn-query-language.core/ast->query",1361699420,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","focus-subquery","edn-query-language.core/focus-subquery",167014332,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword(null,"sub-query","sub-query",-1930580307),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","transduce-children","edn-query-language.core/transduce-children",966659322,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"node","node",581201198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","union-children?","edn-query-language.core/union-children?",730690780,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","update-property-param","edn-query-language.core/update-property-param",213758125,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"expr","expr",745722291)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)], null),null),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901)),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),null,null),new cljs.core.Keyword("edn-query-language.core","param-expr","edn-query-language.core/param-expr",-1530253901),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","merge-asts","edn-query-language.core/merge-asts",807253317,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword(null,"qb","qb",-1714166232)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword(null,"qb","qb",-1714166232),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("edn-query-language.core","merge-queries","edn-query-language.core/merge-queries",-229392415,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qa","qa",-1970946508),new cljs.core.Keyword(null,"qb","qb",-1714166232)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qa","qa",-1970946508),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"qb","qb",-1714166232),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),null,null,null));
} else {
}

//# sourceMappingURL=edn_query_language.core.js.map
