goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__60937 = React.createElement("div",null);
var G__60938 = "$$typeof";
return goog.object.get(G__60937,G__60938);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__60939_SHARP_){
return ((cljs.core.map_QMARK_(p1__60939_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__60939_SHARP_)))));
}),(function (p1__60940_SHARP_){
return ((cljs.core.object_QMARK_(p1__60940_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__60940_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__60941_SHARP_){
return ((cljs.core.vector_QMARK_(p1__60941_SHARP_)) || (cljs.core.seq_QMARK_(p1__60941_SHARP_)) || (cljs.core.array_QMARK_(p1__60941_SHARP_)));
}),cljs.core.nil_QMARK_,com.fulcrologic.fulcro.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60939#","p1__60939#",103628853,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__60940#","p1__60940#",1476695496,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60941#","p1__60941#",1045120967,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))], null)));
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__60963 = arguments.length;
switch (G__60963) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__60965 = component.refs;
var G__60965__$1 = (((G__60965 == null))?null:goog.object.get(G__60965,name));
if((G__60965__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__60965__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__60975 = arguments.length;
switch (G__60975) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___63456 = arguments.length;
var i__4731__auto___63457 = (0);
while(true){
if((i__4731__auto___63457 < len__4730__auto___63456)){
args_arr__4751__auto__.push((arguments[i__4731__auto___63457]));

var G__63458 = (i__4731__auto___63457 + (1));
i__4731__auto___63457 = G__63458;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq60970){
var G__60971 = cljs.core.first(seq60970);
var seq60970__$1 = cljs.core.next(seq60970);
var G__60972 = cljs.core.first(seq60970__$1);
var seq60970__$2 = cljs.core.next(seq60970__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60971,G__60972,seq60970__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__60980_63460 = next_state;
var G__60981_63461 = next_props;
var G__60982_63462 = ({"onChange": on_change});
goog.object.extend(G__60980_63460,G__60981_63461,G__60982_63462);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__60984 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60984) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__60984));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__60990_63463 = state;
var G__60991_63464 = props;
var G__60992_63465 = ({"onChange": (function (){var G__60993 = goog.object.get(this$,"onChange");
var G__60994 = this$;
return goog.bind(G__60993,G__60994);
})()});
goog.object.extend(G__60990_63463,G__60991_63464,G__60992_63465);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x60995_63470 = ctor.prototype;
x60995_63470.onChange = ((function (x60995_63470,ctor){
return (function (event){
var this$ = this;
var temp__5753__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x60995_63470,ctor))
;

x60995_63470.componentWillReceiveProps = ((function (x60995_63470,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__60996 = this_node;
var G__60997 = ((function (G__60996,state_value,this_node,this$,x60995_63470,ctor){
return (function (p1__60987_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__60987_SHARP_);
});})(G__60996,state_value,this_node,this$,x60995_63470,ctor))
;
return goog.dom.findNode(G__60996,G__60997);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x60995_63470,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x60995_63470,ctor))
,null)),null,476042224);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x60995_63470,ctor))
;

x60995_63470.render = ((function (x60995_63470,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x60995_63470,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__63475__delegate = function (props,children){
var temp__5751__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__63475 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__63479__i = 0, G__63479__a = new Array(arguments.length -  1);
while (G__63479__i < G__63479__a.length) {G__63479__a[G__63479__i] = arguments[G__63479__i + 1]; ++G__63479__i;}
  children = new cljs.core.IndexedSeq(G__63479__a,0,null);
} 
return G__63475__delegate.call(this,props,children);};
G__63475.cljs$lang$maxFixedArity = 1;
G__63475.cljs$lang$applyTo = (function (arglist__63480){
var props = cljs.core.first(arglist__63480);
var children = cljs.core.rest(arglist__63480);
return G__63475__delegate(props,children);
});
G__63475.cljs$core$IFn$_invoke$arity$variadic = G__63475__delegate;
return G__63475;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__61011 = tag;
switch (G__61011) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61011)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__61021 = arguments.length;
switch (G__61021) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__61022 = args;
var seq__61023 = cljs.core.seq(vec__61022);
var first__61024 = cljs.core.first(seq__61023);
var seq__61023__$1 = cljs.core.next(seq__61023);
var head = first__61024;
var tail = seq__61023__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__61025 = (function (){var G__61026 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61026,tail);

return G__61026;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61025) : f.call(null,G__61025));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__61028 = (function (){var G__61030 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61030,args);

return G__61030;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61028) : f.call(null,G__61028));
} else {
if(cljs.core.object_QMARK_(head)){
var G__61031 = (function (){var G__61033 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61033,tail);

return G__61033;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61031) : f.call(null,G__61031));
} else {
if(cljs.core.map_QMARK_(head)){
var G__61035 = (function (){var G__61037 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__61037,tail);

return G__61037;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61035) : f.call(null,G__61035));
} else {
var G__61040 = (function (){var G__61041 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61041,args);

return G__61041;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61040) : f.call(null,G__61040));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63500 = arguments.length;
var i__4731__auto___63502 = (0);
while(true){
if((i__4731__auto___63502 < len__4730__auto___63500)){
args__4736__auto__.push((arguments[i__4731__auto___63502]));

var G__63503 = (i__4731__auto___63502 + (1));
i__4731__auto___63502 = G__63503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61074 = conformed_args__59513__auto__;
var map__61074__$1 = (((((!((map__61074 == null))))?(((((map__61074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61074):map__61074);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq61062){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61062));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63505 = arguments.length;
var i__4731__auto___63506 = (0);
while(true){
if((i__4731__auto___63506 < len__4730__auto___63505)){
args__4736__auto__.push((arguments[i__4731__auto___63506]));

var G__63507 = (i__4731__auto___63506 + (1));
i__4731__auto___63506 = G__63507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61102 = conformed_args__59513__auto__;
var map__61102__$1 = (((((!((map__61102 == null))))?(((((map__61102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61102):map__61102);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61102__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61102__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61102__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq61096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61096));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63508 = arguments.length;
var i__4731__auto___63509 = (0);
while(true){
if((i__4731__auto___63509 < len__4730__auto___63508)){
args__4736__auto__.push((arguments[i__4731__auto___63509]));

var G__63510 = (i__4731__auto___63509 + (1));
i__4731__auto___63509 = G__63510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61116 = conformed_args__59513__auto__;
var map__61116__$1 = (((((!((map__61116 == null))))?(((((map__61116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61116):map__61116);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq61111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61111));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63511 = arguments.length;
var i__4731__auto___63513 = (0);
while(true){
if((i__4731__auto___63513 < len__4730__auto___63511)){
args__4736__auto__.push((arguments[i__4731__auto___63513]));

var G__63517 = (i__4731__auto___63513 + (1));
i__4731__auto___63513 = G__63517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61127 = conformed_args__59513__auto__;
var map__61127__$1 = (((((!((map__61127 == null))))?(((((map__61127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61127):map__61127);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq61124){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61124));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63520 = arguments.length;
var i__4731__auto___63521 = (0);
while(true){
if((i__4731__auto___63521 < len__4730__auto___63520)){
args__4736__auto__.push((arguments[i__4731__auto___63521]));

var G__63522 = (i__4731__auto___63521 + (1));
i__4731__auto___63521 = G__63522;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61144 = conformed_args__59513__auto__;
var map__61144__$1 = (((((!((map__61144 == null))))?(((((map__61144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61144):map__61144);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq61134){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61134));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63526 = arguments.length;
var i__4731__auto___63527 = (0);
while(true){
if((i__4731__auto___63527 < len__4730__auto___63526)){
args__4736__auto__.push((arguments[i__4731__auto___63527]));

var G__63529 = (i__4731__auto___63527 + (1));
i__4731__auto___63527 = G__63529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61166 = conformed_args__59513__auto__;
var map__61166__$1 = (((((!((map__61166 == null))))?(((((map__61166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61166):map__61166);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq61162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61162));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63531 = arguments.length;
var i__4731__auto___63532 = (0);
while(true){
if((i__4731__auto___63532 < len__4730__auto___63531)){
args__4736__auto__.push((arguments[i__4731__auto___63532]));

var G__63533 = (i__4731__auto___63532 + (1));
i__4731__auto___63532 = G__63533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61192 = conformed_args__59513__auto__;
var map__61192__$1 = (((((!((map__61192 == null))))?(((((map__61192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61192):map__61192);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq61182){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61182));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63538 = arguments.length;
var i__4731__auto___63539 = (0);
while(true){
if((i__4731__auto___63539 < len__4730__auto___63538)){
args__4736__auto__.push((arguments[i__4731__auto___63539]));

var G__63540 = (i__4731__auto___63539 + (1));
i__4731__auto___63539 = G__63540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61210 = conformed_args__59513__auto__;
var map__61210__$1 = (((((!((map__61210 == null))))?(((((map__61210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61210):map__61210);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq61203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61203));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63547 = arguments.length;
var i__4731__auto___63548 = (0);
while(true){
if((i__4731__auto___63548 < len__4730__auto___63547)){
args__4736__auto__.push((arguments[i__4731__auto___63548]));

var G__63549 = (i__4731__auto___63548 + (1));
i__4731__auto___63548 = G__63549;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61247 = conformed_args__59513__auto__;
var map__61247__$1 = (((((!((map__61247 == null))))?(((((map__61247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61247):map__61247);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq61242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61242));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63553 = arguments.length;
var i__4731__auto___63554 = (0);
while(true){
if((i__4731__auto___63554 < len__4730__auto___63553)){
args__4736__auto__.push((arguments[i__4731__auto___63554]));

var G__63555 = (i__4731__auto___63554 + (1));
i__4731__auto___63554 = G__63555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61286 = conformed_args__59513__auto__;
var map__61286__$1 = (((((!((map__61286 == null))))?(((((map__61286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61286):map__61286);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq61281){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61281));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63558 = arguments.length;
var i__4731__auto___63559 = (0);
while(true){
if((i__4731__auto___63559 < len__4730__auto___63558)){
args__4736__auto__.push((arguments[i__4731__auto___63559]));

var G__63560 = (i__4731__auto___63559 + (1));
i__4731__auto___63559 = G__63560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61300 = conformed_args__59513__auto__;
var map__61300__$1 = (((((!((map__61300 == null))))?(((((map__61300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61300):map__61300);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq61298){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61298));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63561 = arguments.length;
var i__4731__auto___63562 = (0);
while(true){
if((i__4731__auto___63562 < len__4730__auto___63561)){
args__4736__auto__.push((arguments[i__4731__auto___63562]));

var G__63563 = (i__4731__auto___63562 + (1));
i__4731__auto___63562 = G__63563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61320 = conformed_args__59513__auto__;
var map__61320__$1 = (((((!((map__61320 == null))))?(((((map__61320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61320):map__61320);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq61318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61318));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63564 = arguments.length;
var i__4731__auto___63565 = (0);
while(true){
if((i__4731__auto___63565 < len__4730__auto___63564)){
args__4736__auto__.push((arguments[i__4731__auto___63565]));

var G__63566 = (i__4731__auto___63565 + (1));
i__4731__auto___63565 = G__63566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61337 = conformed_args__59513__auto__;
var map__61337__$1 = (((((!((map__61337 == null))))?(((((map__61337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61337):map__61337);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq61329){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61329));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63569 = arguments.length;
var i__4731__auto___63570 = (0);
while(true){
if((i__4731__auto___63570 < len__4730__auto___63569)){
args__4736__auto__.push((arguments[i__4731__auto___63570]));

var G__63572 = (i__4731__auto___63570 + (1));
i__4731__auto___63570 = G__63572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61352 = conformed_args__59513__auto__;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq61343){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61343));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63580 = arguments.length;
var i__4731__auto___63581 = (0);
while(true){
if((i__4731__auto___63581 < len__4730__auto___63580)){
args__4736__auto__.push((arguments[i__4731__auto___63581]));

var G__63582 = (i__4731__auto___63581 + (1));
i__4731__auto___63581 = G__63582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61370 = conformed_args__59513__auto__;
var map__61370__$1 = (((((!((map__61370 == null))))?(((((map__61370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61370):map__61370);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq61362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61362));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63591 = arguments.length;
var i__4731__auto___63592 = (0);
while(true){
if((i__4731__auto___63592 < len__4730__auto___63591)){
args__4736__auto__.push((arguments[i__4731__auto___63592]));

var G__63594 = (i__4731__auto___63592 + (1));
i__4731__auto___63592 = G__63594;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61381 = conformed_args__59513__auto__;
var map__61381__$1 = (((((!((map__61381 == null))))?(((((map__61381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61381):map__61381);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq61378){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61378));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63598 = arguments.length;
var i__4731__auto___63599 = (0);
while(true){
if((i__4731__auto___63599 < len__4730__auto___63598)){
args__4736__auto__.push((arguments[i__4731__auto___63599]));

var G__63600 = (i__4731__auto___63599 + (1));
i__4731__auto___63599 = G__63600;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61388 = conformed_args__59513__auto__;
var map__61388__$1 = (((((!((map__61388 == null))))?(((((map__61388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61388):map__61388);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq61385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61385));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63607 = arguments.length;
var i__4731__auto___63608 = (0);
while(true){
if((i__4731__auto___63608 < len__4730__auto___63607)){
args__4736__auto__.push((arguments[i__4731__auto___63608]));

var G__63609 = (i__4731__auto___63608 + (1));
i__4731__auto___63608 = G__63609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61405 = conformed_args__59513__auto__;
var map__61405__$1 = (((((!((map__61405 == null))))?(((((map__61405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61405):map__61405);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq61399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61399));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63612 = arguments.length;
var i__4731__auto___63613 = (0);
while(true){
if((i__4731__auto___63613 < len__4730__auto___63612)){
args__4736__auto__.push((arguments[i__4731__auto___63613]));

var G__63614 = (i__4731__auto___63613 + (1));
i__4731__auto___63613 = G__63614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61419 = conformed_args__59513__auto__;
var map__61419__$1 = (((((!((map__61419 == null))))?(((((map__61419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61419):map__61419);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq61417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61417));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63619 = arguments.length;
var i__4731__auto___63620 = (0);
while(true){
if((i__4731__auto___63620 < len__4730__auto___63619)){
args__4736__auto__.push((arguments[i__4731__auto___63620]));

var G__63624 = (i__4731__auto___63620 + (1));
i__4731__auto___63620 = G__63624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61432 = conformed_args__59513__auto__;
var map__61432__$1 = (((((!((map__61432 == null))))?(((((map__61432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61432):map__61432);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq61426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61426));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63626 = arguments.length;
var i__4731__auto___63627 = (0);
while(true){
if((i__4731__auto___63627 < len__4730__auto___63626)){
args__4736__auto__.push((arguments[i__4731__auto___63627]));

var G__63631 = (i__4731__auto___63627 + (1));
i__4731__auto___63627 = G__63631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61444 = conformed_args__59513__auto__;
var map__61444__$1 = (((((!((map__61444 == null))))?(((((map__61444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61444):map__61444);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq61437){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61437));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63637 = arguments.length;
var i__4731__auto___63638 = (0);
while(true){
if((i__4731__auto___63638 < len__4730__auto___63637)){
args__4736__auto__.push((arguments[i__4731__auto___63638]));

var G__63639 = (i__4731__auto___63638 + (1));
i__4731__auto___63638 = G__63639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61475 = conformed_args__59513__auto__;
var map__61475__$1 = (((((!((map__61475 == null))))?(((((map__61475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61475):map__61475);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq61459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61459));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63646 = arguments.length;
var i__4731__auto___63647 = (0);
while(true){
if((i__4731__auto___63647 < len__4730__auto___63646)){
args__4736__auto__.push((arguments[i__4731__auto___63647]));

var G__63648 = (i__4731__auto___63647 + (1));
i__4731__auto___63647 = G__63648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61495 = conformed_args__59513__auto__;
var map__61495__$1 = (((((!((map__61495 == null))))?(((((map__61495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61495):map__61495);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq61488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61488));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63651 = arguments.length;
var i__4731__auto___63652 = (0);
while(true){
if((i__4731__auto___63652 < len__4730__auto___63651)){
args__4736__auto__.push((arguments[i__4731__auto___63652]));

var G__63653 = (i__4731__auto___63652 + (1));
i__4731__auto___63652 = G__63653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61504 = conformed_args__59513__auto__;
var map__61504__$1 = (((((!((map__61504 == null))))?(((((map__61504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61504):map__61504);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq61502){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61502));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63654 = arguments.length;
var i__4731__auto___63655 = (0);
while(true){
if((i__4731__auto___63655 < len__4730__auto___63654)){
args__4736__auto__.push((arguments[i__4731__auto___63655]));

var G__63656 = (i__4731__auto___63655 + (1));
i__4731__auto___63655 = G__63656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61516 = conformed_args__59513__auto__;
var map__61516__$1 = (((((!((map__61516 == null))))?(((((map__61516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61516):map__61516);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq61512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61512));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63658 = arguments.length;
var i__4731__auto___63659 = (0);
while(true){
if((i__4731__auto___63659 < len__4730__auto___63658)){
args__4736__auto__.push((arguments[i__4731__auto___63659]));

var G__63660 = (i__4731__auto___63659 + (1));
i__4731__auto___63659 = G__63660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61538 = conformed_args__59513__auto__;
var map__61538__$1 = (((((!((map__61538 == null))))?(((((map__61538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61538):map__61538);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq61531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61531));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63661 = arguments.length;
var i__4731__auto___63662 = (0);
while(true){
if((i__4731__auto___63662 < len__4730__auto___63661)){
args__4736__auto__.push((arguments[i__4731__auto___63662]));

var G__63663 = (i__4731__auto___63662 + (1));
i__4731__auto___63662 = G__63663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61551 = conformed_args__59513__auto__;
var map__61551__$1 = (((((!((map__61551 == null))))?(((((map__61551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61551):map__61551);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq61544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61544));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63666 = arguments.length;
var i__4731__auto___63667 = (0);
while(true){
if((i__4731__auto___63667 < len__4730__auto___63666)){
args__4736__auto__.push((arguments[i__4731__auto___63667]));

var G__63668 = (i__4731__auto___63667 + (1));
i__4731__auto___63667 = G__63668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61559 = conformed_args__59513__auto__;
var map__61559__$1 = (((((!((map__61559 == null))))?(((((map__61559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61559):map__61559);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq61555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61555));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63669 = arguments.length;
var i__4731__auto___63670 = (0);
while(true){
if((i__4731__auto___63670 < len__4730__auto___63669)){
args__4736__auto__.push((arguments[i__4731__auto___63670]));

var G__63671 = (i__4731__auto___63670 + (1));
i__4731__auto___63670 = G__63671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61573 = conformed_args__59513__auto__;
var map__61573__$1 = (((((!((map__61573 == null))))?(((((map__61573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61573):map__61573);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq61566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61566));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63672 = arguments.length;
var i__4731__auto___63673 = (0);
while(true){
if((i__4731__auto___63673 < len__4730__auto___63672)){
args__4736__auto__.push((arguments[i__4731__auto___63673]));

var G__63674 = (i__4731__auto___63673 + (1));
i__4731__auto___63673 = G__63674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61584 = conformed_args__59513__auto__;
var map__61584__$1 = (((((!((map__61584 == null))))?(((((map__61584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61584):map__61584);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq61581){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61581));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63675 = arguments.length;
var i__4731__auto___63676 = (0);
while(true){
if((i__4731__auto___63676 < len__4730__auto___63675)){
args__4736__auto__.push((arguments[i__4731__auto___63676]));

var G__63677 = (i__4731__auto___63676 + (1));
i__4731__auto___63676 = G__63677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61591 = conformed_args__59513__auto__;
var map__61591__$1 = (((((!((map__61591 == null))))?(((((map__61591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61591):map__61591);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq61589){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61589));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63678 = arguments.length;
var i__4731__auto___63679 = (0);
while(true){
if((i__4731__auto___63679 < len__4730__auto___63678)){
args__4736__auto__.push((arguments[i__4731__auto___63679]));

var G__63680 = (i__4731__auto___63679 + (1));
i__4731__auto___63679 = G__63680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61600 = conformed_args__59513__auto__;
var map__61600__$1 = (((((!((map__61600 == null))))?(((((map__61600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61600):map__61600);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq61596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61596));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63681 = arguments.length;
var i__4731__auto___63682 = (0);
while(true){
if((i__4731__auto___63682 < len__4730__auto___63681)){
args__4736__auto__.push((arguments[i__4731__auto___63682]));

var G__63683 = (i__4731__auto___63682 + (1));
i__4731__auto___63682 = G__63683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61616 = conformed_args__59513__auto__;
var map__61616__$1 = (((((!((map__61616 == null))))?(((((map__61616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61616):map__61616);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq61608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61608));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63684 = arguments.length;
var i__4731__auto___63685 = (0);
while(true){
if((i__4731__auto___63685 < len__4730__auto___63684)){
args__4736__auto__.push((arguments[i__4731__auto___63685]));

var G__63686 = (i__4731__auto___63685 + (1));
i__4731__auto___63685 = G__63686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61626 = conformed_args__59513__auto__;
var map__61626__$1 = (((((!((map__61626 == null))))?(((((map__61626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61626):map__61626);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq61623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61623));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63687 = arguments.length;
var i__4731__auto___63688 = (0);
while(true){
if((i__4731__auto___63688 < len__4730__auto___63687)){
args__4736__auto__.push((arguments[i__4731__auto___63688]));

var G__63689 = (i__4731__auto___63688 + (1));
i__4731__auto___63688 = G__63689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61638 = conformed_args__59513__auto__;
var map__61638__$1 = (((((!((map__61638 == null))))?(((((map__61638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61638):map__61638);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq61630){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61630));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63692 = arguments.length;
var i__4731__auto___63693 = (0);
while(true){
if((i__4731__auto___63693 < len__4730__auto___63692)){
args__4736__auto__.push((arguments[i__4731__auto___63693]));

var G__63694 = (i__4731__auto___63693 + (1));
i__4731__auto___63693 = G__63694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61651 = conformed_args__59513__auto__;
var map__61651__$1 = (((((!((map__61651 == null))))?(((((map__61651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61651):map__61651);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq61644){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61644));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63696 = arguments.length;
var i__4731__auto___63697 = (0);
while(true){
if((i__4731__auto___63697 < len__4730__auto___63696)){
args__4736__auto__.push((arguments[i__4731__auto___63697]));

var G__63698 = (i__4731__auto___63697 + (1));
i__4731__auto___63697 = G__63698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61671 = conformed_args__59513__auto__;
var map__61671__$1 = (((((!((map__61671 == null))))?(((((map__61671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61671):map__61671);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq61660){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61660));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63708 = arguments.length;
var i__4731__auto___63709 = (0);
while(true){
if((i__4731__auto___63709 < len__4730__auto___63708)){
args__4736__auto__.push((arguments[i__4731__auto___63709]));

var G__63711 = (i__4731__auto___63709 + (1));
i__4731__auto___63709 = G__63711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61689 = conformed_args__59513__auto__;
var map__61689__$1 = (((((!((map__61689 == null))))?(((((map__61689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61689):map__61689);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq61684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61684));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63715 = arguments.length;
var i__4731__auto___63716 = (0);
while(true){
if((i__4731__auto___63716 < len__4730__auto___63715)){
args__4736__auto__.push((arguments[i__4731__auto___63716]));

var G__63717 = (i__4731__auto___63716 + (1));
i__4731__auto___63716 = G__63717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61713 = conformed_args__59513__auto__;
var map__61713__$1 = (((((!((map__61713 == null))))?(((((map__61713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61713):map__61713);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq61705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61705));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63722 = arguments.length;
var i__4731__auto___63723 = (0);
while(true){
if((i__4731__auto___63723 < len__4730__auto___63722)){
args__4736__auto__.push((arguments[i__4731__auto___63723]));

var G__63726 = (i__4731__auto___63723 + (1));
i__4731__auto___63723 = G__63726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61728 = conformed_args__59513__auto__;
var map__61728__$1 = (((((!((map__61728 == null))))?(((((map__61728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61728):map__61728);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq61726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61726));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63728 = arguments.length;
var i__4731__auto___63729 = (0);
while(true){
if((i__4731__auto___63729 < len__4730__auto___63728)){
args__4736__auto__.push((arguments[i__4731__auto___63729]));

var G__63730 = (i__4731__auto___63729 + (1));
i__4731__auto___63729 = G__63730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61738 = conformed_args__59513__auto__;
var map__61738__$1 = (((((!((map__61738 == null))))?(((((map__61738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61738):map__61738);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq61735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61735));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63735 = arguments.length;
var i__4731__auto___63736 = (0);
while(true){
if((i__4731__auto___63736 < len__4730__auto___63735)){
args__4736__auto__.push((arguments[i__4731__auto___63736]));

var G__63737 = (i__4731__auto___63736 + (1));
i__4731__auto___63736 = G__63737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61750 = conformed_args__59513__auto__;
var map__61750__$1 = (((((!((map__61750 == null))))?(((((map__61750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61750):map__61750);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq61745){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61745));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63739 = arguments.length;
var i__4731__auto___63740 = (0);
while(true){
if((i__4731__auto___63740 < len__4730__auto___63739)){
args__4736__auto__.push((arguments[i__4731__auto___63740]));

var G__63742 = (i__4731__auto___63740 + (1));
i__4731__auto___63740 = G__63742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61767 = conformed_args__59513__auto__;
var map__61767__$1 = (((((!((map__61767 == null))))?(((((map__61767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61767):map__61767);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq61759){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61759));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63748 = arguments.length;
var i__4731__auto___63749 = (0);
while(true){
if((i__4731__auto___63749 < len__4730__auto___63748)){
args__4736__auto__.push((arguments[i__4731__auto___63749]));

var G__63753 = (i__4731__auto___63749 + (1));
i__4731__auto___63749 = G__63753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61777 = conformed_args__59513__auto__;
var map__61777__$1 = (((((!((map__61777 == null))))?(((((map__61777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61777):map__61777);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq61774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61774));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63759 = arguments.length;
var i__4731__auto___63760 = (0);
while(true){
if((i__4731__auto___63760 < len__4730__auto___63759)){
args__4736__auto__.push((arguments[i__4731__auto___63760]));

var G__63761 = (i__4731__auto___63760 + (1));
i__4731__auto___63760 = G__63761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61793 = conformed_args__59513__auto__;
var map__61793__$1 = (((((!((map__61793 == null))))?(((((map__61793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61793):map__61793);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq61790){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61790));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63767 = arguments.length;
var i__4731__auto___63768 = (0);
while(true){
if((i__4731__auto___63768 < len__4730__auto___63767)){
args__4736__auto__.push((arguments[i__4731__auto___63768]));

var G__63769 = (i__4731__auto___63768 + (1));
i__4731__auto___63768 = G__63769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61811 = conformed_args__59513__auto__;
var map__61811__$1 = (((((!((map__61811 == null))))?(((((map__61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61811):map__61811);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq61802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61802));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63770 = arguments.length;
var i__4731__auto___63771 = (0);
while(true){
if((i__4731__auto___63771 < len__4730__auto___63770)){
args__4736__auto__.push((arguments[i__4731__auto___63771]));

var G__63772 = (i__4731__auto___63771 + (1));
i__4731__auto___63771 = G__63772;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61822 = conformed_args__59513__auto__;
var map__61822__$1 = (((((!((map__61822 == null))))?(((((map__61822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61822):map__61822);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq61819){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61819));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63775 = arguments.length;
var i__4731__auto___63776 = (0);
while(true){
if((i__4731__auto___63776 < len__4730__auto___63775)){
args__4736__auto__.push((arguments[i__4731__auto___63776]));

var G__63777 = (i__4731__auto___63776 + (1));
i__4731__auto___63776 = G__63777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61833 = conformed_args__59513__auto__;
var map__61833__$1 = (((((!((map__61833 == null))))?(((((map__61833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61833):map__61833);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq61828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61828));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63780 = arguments.length;
var i__4731__auto___63781 = (0);
while(true){
if((i__4731__auto___63781 < len__4730__auto___63780)){
args__4736__auto__.push((arguments[i__4731__auto___63781]));

var G__63782 = (i__4731__auto___63781 + (1));
i__4731__auto___63781 = G__63782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61850 = conformed_args__59513__auto__;
var map__61850__$1 = (((((!((map__61850 == null))))?(((((map__61850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61850):map__61850);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq61841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61841));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63784 = arguments.length;
var i__4731__auto___63785 = (0);
while(true){
if((i__4731__auto___63785 < len__4730__auto___63784)){
args__4736__auto__.push((arguments[i__4731__auto___63785]));

var G__63786 = (i__4731__auto___63785 + (1));
i__4731__auto___63785 = G__63786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61863 = conformed_args__59513__auto__;
var map__61863__$1 = (((((!((map__61863 == null))))?(((((map__61863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61863):map__61863);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq61857){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61857));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63790 = arguments.length;
var i__4731__auto___63791 = (0);
while(true){
if((i__4731__auto___63791 < len__4730__auto___63790)){
args__4736__auto__.push((arguments[i__4731__auto___63791]));

var G__63792 = (i__4731__auto___63791 + (1));
i__4731__auto___63791 = G__63792;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61884 = conformed_args__59513__auto__;
var map__61884__$1 = (((((!((map__61884 == null))))?(((((map__61884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61884):map__61884);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq61874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61874));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63796 = arguments.length;
var i__4731__auto___63797 = (0);
while(true){
if((i__4731__auto___63797 < len__4730__auto___63796)){
args__4736__auto__.push((arguments[i__4731__auto___63797]));

var G__63798 = (i__4731__auto___63797 + (1));
i__4731__auto___63797 = G__63798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61897 = conformed_args__59513__auto__;
var map__61897__$1 = (((((!((map__61897 == null))))?(((((map__61897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61897):map__61897);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq61892){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61892));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63802 = arguments.length;
var i__4731__auto___63803 = (0);
while(true){
if((i__4731__auto___63803 < len__4730__auto___63802)){
args__4736__auto__.push((arguments[i__4731__auto___63803]));

var G__63804 = (i__4731__auto___63803 + (1));
i__4731__auto___63803 = G__63804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61914 = conformed_args__59513__auto__;
var map__61914__$1 = (((((!((map__61914 == null))))?(((((map__61914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61914):map__61914);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq61908){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61908));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63806 = arguments.length;
var i__4731__auto___63807 = (0);
while(true){
if((i__4731__auto___63807 < len__4730__auto___63806)){
args__4736__auto__.push((arguments[i__4731__auto___63807]));

var G__63808 = (i__4731__auto___63807 + (1));
i__4731__auto___63807 = G__63808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61932 = conformed_args__59513__auto__;
var map__61932__$1 = (((((!((map__61932 == null))))?(((((map__61932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61932):map__61932);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq61926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61926));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63810 = arguments.length;
var i__4731__auto___63811 = (0);
while(true){
if((i__4731__auto___63811 < len__4730__auto___63810)){
args__4736__auto__.push((arguments[i__4731__auto___63811]));

var G__63812 = (i__4731__auto___63811 + (1));
i__4731__auto___63811 = G__63812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61951 = conformed_args__59513__auto__;
var map__61951__$1 = (((((!((map__61951 == null))))?(((((map__61951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61951):map__61951);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq61945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61945));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63813 = arguments.length;
var i__4731__auto___63814 = (0);
while(true){
if((i__4731__auto___63814 < len__4730__auto___63813)){
args__4736__auto__.push((arguments[i__4731__auto___63814]));

var G__63815 = (i__4731__auto___63814 + (1));
i__4731__auto___63814 = G__63815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61967 = conformed_args__59513__auto__;
var map__61967__$1 = (((((!((map__61967 == null))))?(((((map__61967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61967):map__61967);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq61963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61963));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63816 = arguments.length;
var i__4731__auto___63817 = (0);
while(true){
if((i__4731__auto___63817 < len__4730__auto___63816)){
args__4736__auto__.push((arguments[i__4731__auto___63817]));

var G__63818 = (i__4731__auto___63817 + (1));
i__4731__auto___63817 = G__63818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__61987 = conformed_args__59513__auto__;
var map__61987__$1 = (((((!((map__61987 == null))))?(((((map__61987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61987):map__61987);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq61977){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61977));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63819 = arguments.length;
var i__4731__auto___63820 = (0);
while(true){
if((i__4731__auto___63820 < len__4730__auto___63819)){
args__4736__auto__.push((arguments[i__4731__auto___63820]));

var G__63821 = (i__4731__auto___63820 + (1));
i__4731__auto___63820 = G__63821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62011 = conformed_args__59513__auto__;
var map__62011__$1 = (((((!((map__62011 == null))))?(((((map__62011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62011):map__62011);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq62002){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62002));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63822 = arguments.length;
var i__4731__auto___63823 = (0);
while(true){
if((i__4731__auto___63823 < len__4730__auto___63822)){
args__4736__auto__.push((arguments[i__4731__auto___63823]));

var G__63826 = (i__4731__auto___63823 + (1));
i__4731__auto___63823 = G__63826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62028 = conformed_args__59513__auto__;
var map__62028__$1 = (((((!((map__62028 == null))))?(((((map__62028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62028):map__62028);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62028__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62028__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq62022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62022));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63831 = arguments.length;
var i__4731__auto___63832 = (0);
while(true){
if((i__4731__auto___63832 < len__4730__auto___63831)){
args__4736__auto__.push((arguments[i__4731__auto___63832]));

var G__63833 = (i__4731__auto___63832 + (1));
i__4731__auto___63832 = G__63833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62046 = conformed_args__59513__auto__;
var map__62046__$1 = (((((!((map__62046 == null))))?(((((map__62046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62046):map__62046);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq62037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62037));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63837 = arguments.length;
var i__4731__auto___63838 = (0);
while(true){
if((i__4731__auto___63838 < len__4730__auto___63837)){
args__4736__auto__.push((arguments[i__4731__auto___63838]));

var G__63842 = (i__4731__auto___63838 + (1));
i__4731__auto___63838 = G__63842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62066 = conformed_args__59513__auto__;
var map__62066__$1 = (((((!((map__62066 == null))))?(((((map__62066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62066):map__62066);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq62055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62055));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63847 = arguments.length;
var i__4731__auto___63848 = (0);
while(true){
if((i__4731__auto___63848 < len__4730__auto___63847)){
args__4736__auto__.push((arguments[i__4731__auto___63848]));

var G__63849 = (i__4731__auto___63848 + (1));
i__4731__auto___63848 = G__63849;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62081 = conformed_args__59513__auto__;
var map__62081__$1 = (((((!((map__62081 == null))))?(((((map__62081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62081):map__62081);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq62076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62076));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63854 = arguments.length;
var i__4731__auto___63855 = (0);
while(true){
if((i__4731__auto___63855 < len__4730__auto___63854)){
args__4736__auto__.push((arguments[i__4731__auto___63855]));

var G__63856 = (i__4731__auto___63855 + (1));
i__4731__auto___63855 = G__63856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62092 = conformed_args__59513__auto__;
var map__62092__$1 = (((((!((map__62092 == null))))?(((((map__62092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62092):map__62092);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq62089){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62089));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63859 = arguments.length;
var i__4731__auto___63860 = (0);
while(true){
if((i__4731__auto___63860 < len__4730__auto___63859)){
args__4736__auto__.push((arguments[i__4731__auto___63860]));

var G__63862 = (i__4731__auto___63860 + (1));
i__4731__auto___63860 = G__63862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62104 = conformed_args__59513__auto__;
var map__62104__$1 = (((((!((map__62104 == null))))?(((((map__62104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62104):map__62104);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq62099){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62099));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63866 = arguments.length;
var i__4731__auto___63867 = (0);
while(true){
if((i__4731__auto___63867 < len__4730__auto___63866)){
args__4736__auto__.push((arguments[i__4731__auto___63867]));

var G__63868 = (i__4731__auto___63867 + (1));
i__4731__auto___63867 = G__63868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62118 = conformed_args__59513__auto__;
var map__62118__$1 = (((((!((map__62118 == null))))?(((((map__62118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62118):map__62118);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq62113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62113));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63869 = arguments.length;
var i__4731__auto___63870 = (0);
while(true){
if((i__4731__auto___63870 < len__4730__auto___63869)){
args__4736__auto__.push((arguments[i__4731__auto___63870]));

var G__63872 = (i__4731__auto___63870 + (1));
i__4731__auto___63870 = G__63872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62130 = conformed_args__59513__auto__;
var map__62130__$1 = (((((!((map__62130 == null))))?(((((map__62130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62130):map__62130);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62130__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62130__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq62127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62127));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63877 = arguments.length;
var i__4731__auto___63878 = (0);
while(true){
if((i__4731__auto___63878 < len__4730__auto___63877)){
args__4736__auto__.push((arguments[i__4731__auto___63878]));

var G__63879 = (i__4731__auto___63878 + (1));
i__4731__auto___63878 = G__63879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62143 = conformed_args__59513__auto__;
var map__62143__$1 = (((((!((map__62143 == null))))?(((((map__62143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62143):map__62143);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq62138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62138));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63881 = arguments.length;
var i__4731__auto___63882 = (0);
while(true){
if((i__4731__auto___63882 < len__4730__auto___63881)){
args__4736__auto__.push((arguments[i__4731__auto___63882]));

var G__63883 = (i__4731__auto___63882 + (1));
i__4731__auto___63882 = G__63883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62159 = conformed_args__59513__auto__;
var map__62159__$1 = (((((!((map__62159 == null))))?(((((map__62159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62159):map__62159);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq62153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62153));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63887 = arguments.length;
var i__4731__auto___63888 = (0);
while(true){
if((i__4731__auto___63888 < len__4730__auto___63887)){
args__4736__auto__.push((arguments[i__4731__auto___63888]));

var G__63889 = (i__4731__auto___63888 + (1));
i__4731__auto___63888 = G__63889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62176 = conformed_args__59513__auto__;
var map__62176__$1 = (((((!((map__62176 == null))))?(((((map__62176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62176):map__62176);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq62163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62163));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63899 = arguments.length;
var i__4731__auto___63900 = (0);
while(true){
if((i__4731__auto___63900 < len__4730__auto___63899)){
args__4736__auto__.push((arguments[i__4731__auto___63900]));

var G__63901 = (i__4731__auto___63900 + (1));
i__4731__auto___63900 = G__63901;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62194 = conformed_args__59513__auto__;
var map__62194__$1 = (((((!((map__62194 == null))))?(((((map__62194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62194):map__62194);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq62188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62188));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63907 = arguments.length;
var i__4731__auto___63908 = (0);
while(true){
if((i__4731__auto___63908 < len__4730__auto___63907)){
args__4736__auto__.push((arguments[i__4731__auto___63908]));

var G__63910 = (i__4731__auto___63908 + (1));
i__4731__auto___63908 = G__63910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62210 = conformed_args__59513__auto__;
var map__62210__$1 = (((((!((map__62210 == null))))?(((((map__62210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62210):map__62210);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq62205){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62205));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63916 = arguments.length;
var i__4731__auto___63917 = (0);
while(true){
if((i__4731__auto___63917 < len__4730__auto___63916)){
args__4736__auto__.push((arguments[i__4731__auto___63917]));

var G__63918 = (i__4731__auto___63917 + (1));
i__4731__auto___63917 = G__63918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62219 = conformed_args__59513__auto__;
var map__62219__$1 = (((((!((map__62219 == null))))?(((((map__62219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62219):map__62219);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq62215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62215));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63926 = arguments.length;
var i__4731__auto___63927 = (0);
while(true){
if((i__4731__auto___63927 < len__4730__auto___63926)){
args__4736__auto__.push((arguments[i__4731__auto___63927]));

var G__63928 = (i__4731__auto___63927 + (1));
i__4731__auto___63927 = G__63928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62228 = conformed_args__59513__auto__;
var map__62228__$1 = (((((!((map__62228 == null))))?(((((map__62228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62228):map__62228);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq62225){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62225));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63932 = arguments.length;
var i__4731__auto___63933 = (0);
while(true){
if((i__4731__auto___63933 < len__4730__auto___63932)){
args__4736__auto__.push((arguments[i__4731__auto___63933]));

var G__63934 = (i__4731__auto___63933 + (1));
i__4731__auto___63933 = G__63934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62237 = conformed_args__59513__auto__;
var map__62237__$1 = (((((!((map__62237 == null))))?(((((map__62237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62237):map__62237);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq62231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62231));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63939 = arguments.length;
var i__4731__auto___63940 = (0);
while(true){
if((i__4731__auto___63940 < len__4730__auto___63939)){
args__4736__auto__.push((arguments[i__4731__auto___63940]));

var G__63941 = (i__4731__auto___63940 + (1));
i__4731__auto___63940 = G__63941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62250 = conformed_args__59513__auto__;
var map__62250__$1 = (((((!((map__62250 == null))))?(((((map__62250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62250):map__62250);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq62242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62242));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63942 = arguments.length;
var i__4731__auto___63943 = (0);
while(true){
if((i__4731__auto___63943 < len__4730__auto___63942)){
args__4736__auto__.push((arguments[i__4731__auto___63943]));

var G__63944 = (i__4731__auto___63943 + (1));
i__4731__auto___63943 = G__63944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62265 = conformed_args__59513__auto__;
var map__62265__$1 = (((((!((map__62265 == null))))?(((((map__62265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62265):map__62265);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq62258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62258));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63948 = arguments.length;
var i__4731__auto___63949 = (0);
while(true){
if((i__4731__auto___63949 < len__4730__auto___63948)){
args__4736__auto__.push((arguments[i__4731__auto___63949]));

var G__63950 = (i__4731__auto___63949 + (1));
i__4731__auto___63949 = G__63950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62280 = conformed_args__59513__auto__;
var map__62280__$1 = (((((!((map__62280 == null))))?(((((map__62280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62280):map__62280);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq62274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62274));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63955 = arguments.length;
var i__4731__auto___63956 = (0);
while(true){
if((i__4731__auto___63956 < len__4730__auto___63955)){
args__4736__auto__.push((arguments[i__4731__auto___63956]));

var G__63957 = (i__4731__auto___63956 + (1));
i__4731__auto___63956 = G__63957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62293 = conformed_args__59513__auto__;
var map__62293__$1 = (((((!((map__62293 == null))))?(((((map__62293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62293):map__62293);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq62288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62288));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63958 = arguments.length;
var i__4731__auto___63959 = (0);
while(true){
if((i__4731__auto___63959 < len__4730__auto___63958)){
args__4736__auto__.push((arguments[i__4731__auto___63959]));

var G__63960 = (i__4731__auto___63959 + (1));
i__4731__auto___63959 = G__63960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62301 = conformed_args__59513__auto__;
var map__62301__$1 = (((((!((map__62301 == null))))?(((((map__62301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62301):map__62301);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq62297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62297));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63962 = arguments.length;
var i__4731__auto___63963 = (0);
while(true){
if((i__4731__auto___63963 < len__4730__auto___63962)){
args__4736__auto__.push((arguments[i__4731__auto___63963]));

var G__63965 = (i__4731__auto___63963 + (1));
i__4731__auto___63963 = G__63965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62313 = conformed_args__59513__auto__;
var map__62313__$1 = (((((!((map__62313 == null))))?(((((map__62313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62313):map__62313);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq62311){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62311));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63968 = arguments.length;
var i__4731__auto___63969 = (0);
while(true){
if((i__4731__auto___63969 < len__4730__auto___63968)){
args__4736__auto__.push((arguments[i__4731__auto___63969]));

var G__63970 = (i__4731__auto___63969 + (1));
i__4731__auto___63969 = G__63970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62329 = conformed_args__59513__auto__;
var map__62329__$1 = (((((!((map__62329 == null))))?(((((map__62329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62329):map__62329);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq62325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62325));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63977 = arguments.length;
var i__4731__auto___63978 = (0);
while(true){
if((i__4731__auto___63978 < len__4730__auto___63977)){
args__4736__auto__.push((arguments[i__4731__auto___63978]));

var G__63979 = (i__4731__auto___63978 + (1));
i__4731__auto___63978 = G__63979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62346 = conformed_args__59513__auto__;
var map__62346__$1 = (((((!((map__62346 == null))))?(((((map__62346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62346):map__62346);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq62340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63985 = arguments.length;
var i__4731__auto___63986 = (0);
while(true){
if((i__4731__auto___63986 < len__4730__auto___63985)){
args__4736__auto__.push((arguments[i__4731__auto___63986]));

var G__63987 = (i__4731__auto___63986 + (1));
i__4731__auto___63986 = G__63987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62367 = conformed_args__59513__auto__;
var map__62367__$1 = (((((!((map__62367 == null))))?(((((map__62367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62367):map__62367);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq62357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62357));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63992 = arguments.length;
var i__4731__auto___63993 = (0);
while(true){
if((i__4731__auto___63993 < len__4730__auto___63992)){
args__4736__auto__.push((arguments[i__4731__auto___63993]));

var G__63994 = (i__4731__auto___63993 + (1));
i__4731__auto___63993 = G__63994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62380 = conformed_args__59513__auto__;
var map__62380__$1 = (((((!((map__62380 == null))))?(((((map__62380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62380):map__62380);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq62375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62375));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63999 = arguments.length;
var i__4731__auto___64000 = (0);
while(true){
if((i__4731__auto___64000 < len__4730__auto___63999)){
args__4736__auto__.push((arguments[i__4731__auto___64000]));

var G__64001 = (i__4731__auto___64000 + (1));
i__4731__auto___64000 = G__64001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62398 = conformed_args__59513__auto__;
var map__62398__$1 = (((((!((map__62398 == null))))?(((((map__62398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62398):map__62398);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq62389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62389));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64005 = arguments.length;
var i__4731__auto___64006 = (0);
while(true){
if((i__4731__auto___64006 < len__4730__auto___64005)){
args__4736__auto__.push((arguments[i__4731__auto___64006]));

var G__64007 = (i__4731__auto___64006 + (1));
i__4731__auto___64006 = G__64007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62410 = conformed_args__59513__auto__;
var map__62410__$1 = (((((!((map__62410 == null))))?(((((map__62410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62410):map__62410);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq62407){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62407));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64009 = arguments.length;
var i__4731__auto___64010 = (0);
while(true){
if((i__4731__auto___64010 < len__4730__auto___64009)){
args__4736__auto__.push((arguments[i__4731__auto___64010]));

var G__64011 = (i__4731__auto___64010 + (1));
i__4731__auto___64010 = G__64011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62418 = conformed_args__59513__auto__;
var map__62418__$1 = (((((!((map__62418 == null))))?(((((map__62418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62418):map__62418);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq62415){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62415));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64012 = arguments.length;
var i__4731__auto___64013 = (0);
while(true){
if((i__4731__auto___64013 < len__4730__auto___64012)){
args__4736__auto__.push((arguments[i__4731__auto___64013]));

var G__64014 = (i__4731__auto___64013 + (1));
i__4731__auto___64013 = G__64014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62434 = conformed_args__59513__auto__;
var map__62434__$1 = (((((!((map__62434 == null))))?(((((map__62434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62434):map__62434);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq62427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62427));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64018 = arguments.length;
var i__4731__auto___64019 = (0);
while(true){
if((i__4731__auto___64019 < len__4730__auto___64018)){
args__4736__auto__.push((arguments[i__4731__auto___64019]));

var G__64021 = (i__4731__auto___64019 + (1));
i__4731__auto___64019 = G__64021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62452 = conformed_args__59513__auto__;
var map__62452__$1 = (((((!((map__62452 == null))))?(((((map__62452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62452):map__62452);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq62443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62443));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64025 = arguments.length;
var i__4731__auto___64026 = (0);
while(true){
if((i__4731__auto___64026 < len__4730__auto___64025)){
args__4736__auto__.push((arguments[i__4731__auto___64026]));

var G__64027 = (i__4731__auto___64026 + (1));
i__4731__auto___64026 = G__64027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62487 = conformed_args__59513__auto__;
var map__62487__$1 = (((((!((map__62487 == null))))?(((((map__62487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62487):map__62487);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq62475){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62475));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64030 = arguments.length;
var i__4731__auto___64031 = (0);
while(true){
if((i__4731__auto___64031 < len__4730__auto___64030)){
args__4736__auto__.push((arguments[i__4731__auto___64031]));

var G__64032 = (i__4731__auto___64031 + (1));
i__4731__auto___64031 = G__64032;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62510 = conformed_args__59513__auto__;
var map__62510__$1 = (((((!((map__62510 == null))))?(((((map__62510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62510):map__62510);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq62504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62504));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64039 = arguments.length;
var i__4731__auto___64041 = (0);
while(true){
if((i__4731__auto___64041 < len__4730__auto___64039)){
args__4736__auto__.push((arguments[i__4731__auto___64041]));

var G__64042 = (i__4731__auto___64041 + (1));
i__4731__auto___64041 = G__64042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62533 = conformed_args__59513__auto__;
var map__62533__$1 = (((((!((map__62533 == null))))?(((((map__62533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62533):map__62533);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq62523){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62523));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64049 = arguments.length;
var i__4731__auto___64050 = (0);
while(true){
if((i__4731__auto___64050 < len__4730__auto___64049)){
args__4736__auto__.push((arguments[i__4731__auto___64050]));

var G__64051 = (i__4731__auto___64050 + (1));
i__4731__auto___64050 = G__64051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62547 = conformed_args__59513__auto__;
var map__62547__$1 = (((((!((map__62547 == null))))?(((((map__62547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62547):map__62547);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq62543){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62543));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64057 = arguments.length;
var i__4731__auto___64058 = (0);
while(true){
if((i__4731__auto___64058 < len__4730__auto___64057)){
args__4736__auto__.push((arguments[i__4731__auto___64058]));

var G__64059 = (i__4731__auto___64058 + (1));
i__4731__auto___64058 = G__64059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62562 = conformed_args__59513__auto__;
var map__62562__$1 = (((((!((map__62562 == null))))?(((((map__62562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62562):map__62562);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq62556){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62556));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64065 = arguments.length;
var i__4731__auto___64066 = (0);
while(true){
if((i__4731__auto___64066 < len__4730__auto___64065)){
args__4736__auto__.push((arguments[i__4731__auto___64066]));

var G__64068 = (i__4731__auto___64066 + (1));
i__4731__auto___64066 = G__64068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62572 = conformed_args__59513__auto__;
var map__62572__$1 = (((((!((map__62572 == null))))?(((((map__62572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62572):map__62572);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq62566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62566));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64073 = arguments.length;
var i__4731__auto___64074 = (0);
while(true){
if((i__4731__auto___64074 < len__4730__auto___64073)){
args__4736__auto__.push((arguments[i__4731__auto___64074]));

var G__64075 = (i__4731__auto___64074 + (1));
i__4731__auto___64074 = G__64075;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62581 = conformed_args__59513__auto__;
var map__62581__$1 = (((((!((map__62581 == null))))?(((((map__62581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62581):map__62581);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq62577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62577));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64080 = arguments.length;
var i__4731__auto___64081 = (0);
while(true){
if((i__4731__auto___64081 < len__4730__auto___64080)){
args__4736__auto__.push((arguments[i__4731__auto___64081]));

var G__64082 = (i__4731__auto___64081 + (1));
i__4731__auto___64081 = G__64082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62604 = conformed_args__59513__auto__;
var map__62604__$1 = (((((!((map__62604 == null))))?(((((map__62604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62604):map__62604);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq62590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62590));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64087 = arguments.length;
var i__4731__auto___64089 = (0);
while(true){
if((i__4731__auto___64089 < len__4730__auto___64087)){
args__4736__auto__.push((arguments[i__4731__auto___64089]));

var G__64090 = (i__4731__auto___64089 + (1));
i__4731__auto___64089 = G__64090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62630 = conformed_args__59513__auto__;
var map__62630__$1 = (((((!((map__62630 == null))))?(((((map__62630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62630):map__62630);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq62615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62615));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64095 = arguments.length;
var i__4731__auto___64096 = (0);
while(true){
if((i__4731__auto___64096 < len__4730__auto___64095)){
args__4736__auto__.push((arguments[i__4731__auto___64096]));

var G__64097 = (i__4731__auto___64096 + (1));
i__4731__auto___64096 = G__64097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62648 = conformed_args__59513__auto__;
var map__62648__$1 = (((((!((map__62648 == null))))?(((((map__62648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62648):map__62648);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq62642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62642));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64104 = arguments.length;
var i__4731__auto___64105 = (0);
while(true){
if((i__4731__auto___64105 < len__4730__auto___64104)){
args__4736__auto__.push((arguments[i__4731__auto___64105]));

var G__64106 = (i__4731__auto___64105 + (1));
i__4731__auto___64105 = G__64106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62655 = conformed_args__59513__auto__;
var map__62655__$1 = (((((!((map__62655 == null))))?(((((map__62655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62655):map__62655);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq62653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62653));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64122 = arguments.length;
var i__4731__auto___64123 = (0);
while(true){
if((i__4731__auto___64123 < len__4730__auto___64122)){
args__4736__auto__.push((arguments[i__4731__auto___64123]));

var G__64124 = (i__4731__auto___64123 + (1));
i__4731__auto___64123 = G__64124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62666 = conformed_args__59513__auto__;
var map__62666__$1 = (((((!((map__62666 == null))))?(((((map__62666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62666):map__62666);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq62664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62664));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64134 = arguments.length;
var i__4731__auto___64135 = (0);
while(true){
if((i__4731__auto___64135 < len__4730__auto___64134)){
args__4736__auto__.push((arguments[i__4731__auto___64135]));

var G__64136 = (i__4731__auto___64135 + (1));
i__4731__auto___64135 = G__64136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62675 = conformed_args__59513__auto__;
var map__62675__$1 = (((((!((map__62675 == null))))?(((((map__62675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62675):map__62675);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq62672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62672));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64144 = arguments.length;
var i__4731__auto___64145 = (0);
while(true){
if((i__4731__auto___64145 < len__4730__auto___64144)){
args__4736__auto__.push((arguments[i__4731__auto___64145]));

var G__64146 = (i__4731__auto___64145 + (1));
i__4731__auto___64145 = G__64146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62695 = conformed_args__59513__auto__;
var map__62695__$1 = (((((!((map__62695 == null))))?(((((map__62695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62695):map__62695);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq62685){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62685));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64149 = arguments.length;
var i__4731__auto___64150 = (0);
while(true){
if((i__4731__auto___64150 < len__4730__auto___64149)){
args__4736__auto__.push((arguments[i__4731__auto___64150]));

var G__64152 = (i__4731__auto___64150 + (1));
i__4731__auto___64150 = G__64152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62718 = conformed_args__59513__auto__;
var map__62718__$1 = (((((!((map__62718 == null))))?(((((map__62718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62718):map__62718);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq62712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62712));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64156 = arguments.length;
var i__4731__auto___64158 = (0);
while(true){
if((i__4731__auto___64158 < len__4730__auto___64156)){
args__4736__auto__.push((arguments[i__4731__auto___64158]));

var G__64159 = (i__4731__auto___64158 + (1));
i__4731__auto___64158 = G__64159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62732 = conformed_args__59513__auto__;
var map__62732__$1 = (((((!((map__62732 == null))))?(((((map__62732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62732):map__62732);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq62729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62729));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64164 = arguments.length;
var i__4731__auto___64165 = (0);
while(true){
if((i__4731__auto___64165 < len__4730__auto___64164)){
args__4736__auto__.push((arguments[i__4731__auto___64165]));

var G__64166 = (i__4731__auto___64165 + (1));
i__4731__auto___64165 = G__64166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62754 = conformed_args__59513__auto__;
var map__62754__$1 = (((((!((map__62754 == null))))?(((((map__62754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62754):map__62754);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq62744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62744));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64171 = arguments.length;
var i__4731__auto___64172 = (0);
while(true){
if((i__4731__auto___64172 < len__4730__auto___64171)){
args__4736__auto__.push((arguments[i__4731__auto___64172]));

var G__64173 = (i__4731__auto___64172 + (1));
i__4731__auto___64172 = G__64173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62771 = conformed_args__59513__auto__;
var map__62771__$1 = (((((!((map__62771 == null))))?(((((map__62771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62771):map__62771);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq62769){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62769));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64189 = arguments.length;
var i__4731__auto___64190 = (0);
while(true){
if((i__4731__auto___64190 < len__4730__auto___64189)){
args__4736__auto__.push((arguments[i__4731__auto___64190]));

var G__64193 = (i__4731__auto___64190 + (1));
i__4731__auto___64190 = G__64193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62777 = conformed_args__59513__auto__;
var map__62777__$1 = (((((!((map__62777 == null))))?(((((map__62777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62777):map__62777);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq62775){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62775));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64201 = arguments.length;
var i__4731__auto___64202 = (0);
while(true){
if((i__4731__auto___64202 < len__4730__auto___64201)){
args__4736__auto__.push((arguments[i__4731__auto___64202]));

var G__64203 = (i__4731__auto___64202 + (1));
i__4731__auto___64202 = G__64203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62787 = conformed_args__59513__auto__;
var map__62787__$1 = (((((!((map__62787 == null))))?(((((map__62787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62787):map__62787);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq62784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62784));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64211 = arguments.length;
var i__4731__auto___64212 = (0);
while(true){
if((i__4731__auto___64212 < len__4730__auto___64211)){
args__4736__auto__.push((arguments[i__4731__auto___64212]));

var G__64213 = (i__4731__auto___64212 + (1));
i__4731__auto___64212 = G__64213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62796 = conformed_args__59513__auto__;
var map__62796__$1 = (((((!((map__62796 == null))))?(((((map__62796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62796):map__62796);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq62792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62792));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64222 = arguments.length;
var i__4731__auto___64223 = (0);
while(true){
if((i__4731__auto___64223 < len__4730__auto___64222)){
args__4736__auto__.push((arguments[i__4731__auto___64223]));

var G__64224 = (i__4731__auto___64223 + (1));
i__4731__auto___64223 = G__64224;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62801 = conformed_args__59513__auto__;
var map__62801__$1 = (((((!((map__62801 == null))))?(((((map__62801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62801):map__62801);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq62798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62798));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64231 = arguments.length;
var i__4731__auto___64232 = (0);
while(true){
if((i__4731__auto___64232 < len__4730__auto___64231)){
args__4736__auto__.push((arguments[i__4731__auto___64232]));

var G__64234 = (i__4731__auto___64232 + (1));
i__4731__auto___64232 = G__64234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62812 = conformed_args__59513__auto__;
var map__62812__$1 = (((((!((map__62812 == null))))?(((((map__62812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62812):map__62812);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq62808){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62808));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64237 = arguments.length;
var i__4731__auto___64238 = (0);
while(true){
if((i__4731__auto___64238 < len__4730__auto___64237)){
args__4736__auto__.push((arguments[i__4731__auto___64238]));

var G__64239 = (i__4731__auto___64238 + (1));
i__4731__auto___64238 = G__64239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62827 = conformed_args__59513__auto__;
var map__62827__$1 = (((((!((map__62827 == null))))?(((((map__62827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62827):map__62827);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq62819){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62819));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64248 = arguments.length;
var i__4731__auto___64249 = (0);
while(true){
if((i__4731__auto___64249 < len__4730__auto___64248)){
args__4736__auto__.push((arguments[i__4731__auto___64249]));

var G__64250 = (i__4731__auto___64249 + (1));
i__4731__auto___64249 = G__64250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62838 = conformed_args__59513__auto__;
var map__62838__$1 = (((((!((map__62838 == null))))?(((((map__62838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62838):map__62838);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq62830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62830));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64258 = arguments.length;
var i__4731__auto___64259 = (0);
while(true){
if((i__4731__auto___64259 < len__4730__auto___64258)){
args__4736__auto__.push((arguments[i__4731__auto___64259]));

var G__64260 = (i__4731__auto___64259 + (1));
i__4731__auto___64259 = G__64260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62856 = conformed_args__59513__auto__;
var map__62856__$1 = (((((!((map__62856 == null))))?(((((map__62856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62856):map__62856);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq62843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62843));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64265 = arguments.length;
var i__4731__auto___64268 = (0);
while(true){
if((i__4731__auto___64268 < len__4730__auto___64265)){
args__4736__auto__.push((arguments[i__4731__auto___64268]));

var G__64269 = (i__4731__auto___64268 + (1));
i__4731__auto___64268 = G__64269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62876 = conformed_args__59513__auto__;
var map__62876__$1 = (((((!((map__62876 == null))))?(((((map__62876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62876):map__62876);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq62865){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62865));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64289 = arguments.length;
var i__4731__auto___64290 = (0);
while(true){
if((i__4731__auto___64290 < len__4730__auto___64289)){
args__4736__auto__.push((arguments[i__4731__auto___64290]));

var G__64291 = (i__4731__auto___64290 + (1));
i__4731__auto___64290 = G__64291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62881 = conformed_args__59513__auto__;
var map__62881__$1 = (((((!((map__62881 == null))))?(((((map__62881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62881):map__62881);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq62880){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62880));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64299 = arguments.length;
var i__4731__auto___64300 = (0);
while(true){
if((i__4731__auto___64300 < len__4730__auto___64299)){
args__4736__auto__.push((arguments[i__4731__auto___64300]));

var G__64301 = (i__4731__auto___64300 + (1));
i__4731__auto___64300 = G__64301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62897 = conformed_args__59513__auto__;
var map__62897__$1 = (((((!((map__62897 == null))))?(((((map__62897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62897):map__62897);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq62888){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62888));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64306 = arguments.length;
var i__4731__auto___64307 = (0);
while(true){
if((i__4731__auto___64307 < len__4730__auto___64306)){
args__4736__auto__.push((arguments[i__4731__auto___64307]));

var G__64309 = (i__4731__auto___64307 + (1));
i__4731__auto___64307 = G__64309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62901 = conformed_args__59513__auto__;
var map__62901__$1 = (((((!((map__62901 == null))))?(((((map__62901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62901):map__62901);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq62899){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62899));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64317 = arguments.length;
var i__4731__auto___64318 = (0);
while(true){
if((i__4731__auto___64318 < len__4730__auto___64317)){
args__4736__auto__.push((arguments[i__4731__auto___64318]));

var G__64319 = (i__4731__auto___64318 + (1));
i__4731__auto___64318 = G__64319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62905 = conformed_args__59513__auto__;
var map__62905__$1 = (((((!((map__62905 == null))))?(((((map__62905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62905):map__62905);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq62903){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62903));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64322 = arguments.length;
var i__4731__auto___64323 = (0);
while(true){
if((i__4731__auto___64323 < len__4730__auto___64322)){
args__4736__auto__.push((arguments[i__4731__auto___64323]));

var G__64324 = (i__4731__auto___64323 + (1));
i__4731__auto___64323 = G__64324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62908 = conformed_args__59513__auto__;
var map__62908__$1 = (((((!((map__62908 == null))))?(((((map__62908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62908):map__62908);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq62907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62907));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64327 = arguments.length;
var i__4731__auto___64328 = (0);
while(true){
if((i__4731__auto___64328 < len__4730__auto___64327)){
args__4736__auto__.push((arguments[i__4731__auto___64328]));

var G__64330 = (i__4731__auto___64328 + (1));
i__4731__auto___64328 = G__64330;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62915 = conformed_args__59513__auto__;
var map__62915__$1 = (((((!((map__62915 == null))))?(((((map__62915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62915):map__62915);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq62910){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62910));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64337 = arguments.length;
var i__4731__auto___64338 = (0);
while(true){
if((i__4731__auto___64338 < len__4730__auto___64337)){
args__4736__auto__.push((arguments[i__4731__auto___64338]));

var G__64339 = (i__4731__auto___64338 + (1));
i__4731__auto___64338 = G__64339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62935 = conformed_args__59513__auto__;
var map__62935__$1 = (((((!((map__62935 == null))))?(((((map__62935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62935):map__62935);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq62926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62926));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64344 = arguments.length;
var i__4731__auto___64345 = (0);
while(true){
if((i__4731__auto___64345 < len__4730__auto___64344)){
args__4736__auto__.push((arguments[i__4731__auto___64345]));

var G__64346 = (i__4731__auto___64345 + (1));
i__4731__auto___64345 = G__64346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62947 = conformed_args__59513__auto__;
var map__62947__$1 = (((((!((map__62947 == null))))?(((((map__62947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62947):map__62947);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq62946){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62946));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64355 = arguments.length;
var i__4731__auto___64356 = (0);
while(true){
if((i__4731__auto___64356 < len__4730__auto___64355)){
args__4736__auto__.push((arguments[i__4731__auto___64356]));

var G__64358 = (i__4731__auto___64356 + (1));
i__4731__auto___64356 = G__64358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62964 = conformed_args__59513__auto__;
var map__62964__$1 = (((((!((map__62964 == null))))?(((((map__62964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62964):map__62964);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq62955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62955));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64392 = arguments.length;
var i__4731__auto___64393 = (0);
while(true){
if((i__4731__auto___64393 < len__4730__auto___64392)){
args__4736__auto__.push((arguments[i__4731__auto___64393]));

var G__64394 = (i__4731__auto___64393 + (1));
i__4731__auto___64393 = G__64394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__62987 = conformed_args__59513__auto__;
var map__62987__$1 = (((((!((map__62987 == null))))?(((((map__62987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62987):map__62987);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq62980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62980));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64404 = arguments.length;
var i__4731__auto___64405 = (0);
while(true){
if((i__4731__auto___64405 < len__4730__auto___64404)){
args__4736__auto__.push((arguments[i__4731__auto___64405]));

var G__64406 = (i__4731__auto___64405 + (1));
i__4731__auto___64405 = G__64406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63006 = conformed_args__59513__auto__;
var map__63006__$1 = (((((!((map__63006 == null))))?(((((map__63006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63006):map__63006);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq62996){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62996));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64417 = arguments.length;
var i__4731__auto___64418 = (0);
while(true){
if((i__4731__auto___64418 < len__4730__auto___64417)){
args__4736__auto__.push((arguments[i__4731__auto___64418]));

var G__64424 = (i__4731__auto___64418 + (1));
i__4731__auto___64418 = G__64424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63026 = conformed_args__59513__auto__;
var map__63026__$1 = (((((!((map__63026 == null))))?(((((map__63026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63026):map__63026);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq63016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63016));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64432 = arguments.length;
var i__4731__auto___64433 = (0);
while(true){
if((i__4731__auto___64433 < len__4730__auto___64432)){
args__4736__auto__.push((arguments[i__4731__auto___64433]));

var G__64435 = (i__4731__auto___64433 + (1));
i__4731__auto___64433 = G__64435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63052 = conformed_args__59513__auto__;
var map__63052__$1 = (((((!((map__63052 == null))))?(((((map__63052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63052):map__63052);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq63042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63042));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64441 = arguments.length;
var i__4731__auto___64442 = (0);
while(true){
if((i__4731__auto___64442 < len__4730__auto___64441)){
args__4736__auto__.push((arguments[i__4731__auto___64442]));

var G__64443 = (i__4731__auto___64442 + (1));
i__4731__auto___64442 = G__64443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63062 = conformed_args__59513__auto__;
var map__63062__$1 = (((((!((map__63062 == null))))?(((((map__63062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63062):map__63062);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq63057){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63057));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64452 = arguments.length;
var i__4731__auto___64453 = (0);
while(true){
if((i__4731__auto___64453 < len__4730__auto___64452)){
args__4736__auto__.push((arguments[i__4731__auto___64453]));

var G__64454 = (i__4731__auto___64453 + (1));
i__4731__auto___64453 = G__64454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63073 = conformed_args__59513__auto__;
var map__63073__$1 = (((((!((map__63073 == null))))?(((((map__63073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63073):map__63073);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq63068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63068));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64463 = arguments.length;
var i__4731__auto___64464 = (0);
while(true){
if((i__4731__auto___64464 < len__4730__auto___64463)){
args__4736__auto__.push((arguments[i__4731__auto___64464]));

var G__64466 = (i__4731__auto___64464 + (1));
i__4731__auto___64464 = G__64466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63093 = conformed_args__59513__auto__;
var map__63093__$1 = (((((!((map__63093 == null))))?(((((map__63093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63093):map__63093);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq63083){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63083));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64483 = arguments.length;
var i__4731__auto___64484 = (0);
while(true){
if((i__4731__auto___64484 < len__4730__auto___64483)){
args__4736__auto__.push((arguments[i__4731__auto___64484]));

var G__64487 = (i__4731__auto___64484 + (1));
i__4731__auto___64484 = G__64487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63102 = conformed_args__59513__auto__;
var map__63102__$1 = (((((!((map__63102 == null))))?(((((map__63102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63102):map__63102);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63102__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63102__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63102__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq63097){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63097));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64496 = arguments.length;
var i__4731__auto___64498 = (0);
while(true){
if((i__4731__auto___64498 < len__4730__auto___64496)){
args__4736__auto__.push((arguments[i__4731__auto___64498]));

var G__64499 = (i__4731__auto___64498 + (1));
i__4731__auto___64498 = G__64499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63117 = conformed_args__59513__auto__;
var map__63117__$1 = (((((!((map__63117 == null))))?(((((map__63117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63117):map__63117);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq63110){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63110));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64507 = arguments.length;
var i__4731__auto___64508 = (0);
while(true){
if((i__4731__auto___64508 < len__4730__auto___64507)){
args__4736__auto__.push((arguments[i__4731__auto___64508]));

var G__64509 = (i__4731__auto___64508 + (1));
i__4731__auto___64508 = G__64509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63125 = conformed_args__59513__auto__;
var map__63125__$1 = (((((!((map__63125 == null))))?(((((map__63125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63125):map__63125);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq63124){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63124));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64522 = arguments.length;
var i__4731__auto___64523 = (0);
while(true){
if((i__4731__auto___64523 < len__4730__auto___64522)){
args__4736__auto__.push((arguments[i__4731__auto___64523]));

var G__64524 = (i__4731__auto___64523 + (1));
i__4731__auto___64523 = G__64524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63128 = conformed_args__59513__auto__;
var map__63128__$1 = (((((!((map__63128 == null))))?(((((map__63128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63128):map__63128);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq63127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63127));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64536 = arguments.length;
var i__4731__auto___64537 = (0);
while(true){
if((i__4731__auto___64537 < len__4730__auto___64536)){
args__4736__auto__.push((arguments[i__4731__auto___64537]));

var G__64538 = (i__4731__auto___64537 + (1));
i__4731__auto___64537 = G__64538;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63135 = conformed_args__59513__auto__;
var map__63135__$1 = (((((!((map__63135 == null))))?(((((map__63135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63135):map__63135);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq63133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63133));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64545 = arguments.length;
var i__4731__auto___64546 = (0);
while(true){
if((i__4731__auto___64546 < len__4730__auto___64545)){
args__4736__auto__.push((arguments[i__4731__auto___64546]));

var G__64551 = (i__4731__auto___64546 + (1));
i__4731__auto___64546 = G__64551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63140 = conformed_args__59513__auto__;
var map__63140__$1 = (((((!((map__63140 == null))))?(((((map__63140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63140):map__63140);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq63139){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63139));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64558 = arguments.length;
var i__4731__auto___64559 = (0);
while(true){
if((i__4731__auto___64559 < len__4730__auto___64558)){
args__4736__auto__.push((arguments[i__4731__auto___64559]));

var G__64563 = (i__4731__auto___64559 + (1));
i__4731__auto___64559 = G__64563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63143 = conformed_args__59513__auto__;
var map__63143__$1 = (((((!((map__63143 == null))))?(((((map__63143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63143):map__63143);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq63142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63142));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64571 = arguments.length;
var i__4731__auto___64572 = (0);
while(true){
if((i__4731__auto___64572 < len__4730__auto___64571)){
args__4736__auto__.push((arguments[i__4731__auto___64572]));

var G__64573 = (i__4731__auto___64572 + (1));
i__4731__auto___64572 = G__64573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63148 = conformed_args__59513__auto__;
var map__63148__$1 = (((((!((map__63148 == null))))?(((((map__63148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63148):map__63148);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq63147){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63147));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64579 = arguments.length;
var i__4731__auto___64580 = (0);
while(true){
if((i__4731__auto___64580 < len__4730__auto___64579)){
args__4736__auto__.push((arguments[i__4731__auto___64580]));

var G__64581 = (i__4731__auto___64580 + (1));
i__4731__auto___64580 = G__64581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63152 = conformed_args__59513__auto__;
var map__63152__$1 = (((((!((map__63152 == null))))?(((((map__63152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63152):map__63152);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq63151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63151));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64589 = arguments.length;
var i__4731__auto___64590 = (0);
while(true){
if((i__4731__auto___64590 < len__4730__auto___64589)){
args__4736__auto__.push((arguments[i__4731__auto___64590]));

var G__64591 = (i__4731__auto___64590 + (1));
i__4731__auto___64590 = G__64591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63155 = conformed_args__59513__auto__;
var map__63155__$1 = (((((!((map__63155 == null))))?(((((map__63155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63155):map__63155);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq63154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63154));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64598 = arguments.length;
var i__4731__auto___64599 = (0);
while(true){
if((i__4731__auto___64599 < len__4730__auto___64598)){
args__4736__auto__.push((arguments[i__4731__auto___64599]));

var G__64600 = (i__4731__auto___64599 + (1));
i__4731__auto___64599 = G__64600;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63158 = conformed_args__59513__auto__;
var map__63158__$1 = (((((!((map__63158 == null))))?(((((map__63158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63158):map__63158);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq63157){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63157));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64605 = arguments.length;
var i__4731__auto___64607 = (0);
while(true){
if((i__4731__auto___64607 < len__4730__auto___64605)){
args__4736__auto__.push((arguments[i__4731__auto___64607]));

var G__64609 = (i__4731__auto___64607 + (1));
i__4731__auto___64607 = G__64609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63161 = conformed_args__59513__auto__;
var map__63161__$1 = (((((!((map__63161 == null))))?(((((map__63161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63161):map__63161);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq63160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63160));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64618 = arguments.length;
var i__4731__auto___64620 = (0);
while(true){
if((i__4731__auto___64620 < len__4730__auto___64618)){
args__4736__auto__.push((arguments[i__4731__auto___64620]));

var G__64621 = (i__4731__auto___64620 + (1));
i__4731__auto___64620 = G__64621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63164 = conformed_args__59513__auto__;
var map__63164__$1 = (((((!((map__63164 == null))))?(((((map__63164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63164):map__63164);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq63163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63163));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64629 = arguments.length;
var i__4731__auto___64630 = (0);
while(true){
if((i__4731__auto___64630 < len__4730__auto___64629)){
args__4736__auto__.push((arguments[i__4731__auto___64630]));

var G__64632 = (i__4731__auto___64630 + (1));
i__4731__auto___64630 = G__64632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63167 = conformed_args__59513__auto__;
var map__63167__$1 = (((((!((map__63167 == null))))?(((((map__63167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63167):map__63167);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq63166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63166));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64638 = arguments.length;
var i__4731__auto___64639 = (0);
while(true){
if((i__4731__auto___64639 < len__4730__auto___64638)){
args__4736__auto__.push((arguments[i__4731__auto___64639]));

var G__64641 = (i__4731__auto___64639 + (1));
i__4731__auto___64639 = G__64641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63170 = conformed_args__59513__auto__;
var map__63170__$1 = (((((!((map__63170 == null))))?(((((map__63170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63170):map__63170);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq63169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63169));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64647 = arguments.length;
var i__4731__auto___64648 = (0);
while(true){
if((i__4731__auto___64648 < len__4730__auto___64647)){
args__4736__auto__.push((arguments[i__4731__auto___64648]));

var G__64649 = (i__4731__auto___64648 + (1));
i__4731__auto___64648 = G__64649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63173 = conformed_args__59513__auto__;
var map__63173__$1 = (((((!((map__63173 == null))))?(((((map__63173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63173):map__63173);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq63172){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63172));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64663 = arguments.length;
var i__4731__auto___64664 = (0);
while(true){
if((i__4731__auto___64664 < len__4730__auto___64663)){
args__4736__auto__.push((arguments[i__4731__auto___64664]));

var G__64668 = (i__4731__auto___64664 + (1));
i__4731__auto___64664 = G__64668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63177 = conformed_args__59513__auto__;
var map__63177__$1 = (((((!((map__63177 == null))))?(((((map__63177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63177):map__63177);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq63176){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63176));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64674 = arguments.length;
var i__4731__auto___64675 = (0);
while(true){
if((i__4731__auto___64675 < len__4730__auto___64674)){
args__4736__auto__.push((arguments[i__4731__auto___64675]));

var G__64676 = (i__4731__auto___64675 + (1));
i__4731__auto___64675 = G__64676;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63180 = conformed_args__59513__auto__;
var map__63180__$1 = (((((!((map__63180 == null))))?(((((map__63180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63180):map__63180);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq63179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63179));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64681 = arguments.length;
var i__4731__auto___64682 = (0);
while(true){
if((i__4731__auto___64682 < len__4730__auto___64681)){
args__4736__auto__.push((arguments[i__4731__auto___64682]));

var G__64683 = (i__4731__auto___64682 + (1));
i__4731__auto___64682 = G__64683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63187 = conformed_args__59513__auto__;
var map__63187__$1 = (((((!((map__63187 == null))))?(((((map__63187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63187):map__63187);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq63184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63184));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64689 = arguments.length;
var i__4731__auto___64690 = (0);
while(true){
if((i__4731__auto___64690 < len__4730__auto___64689)){
args__4736__auto__.push((arguments[i__4731__auto___64690]));

var G__64693 = (i__4731__auto___64690 + (1));
i__4731__auto___64690 = G__64693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63192 = conformed_args__59513__auto__;
var map__63192__$1 = (((((!((map__63192 == null))))?(((((map__63192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63192):map__63192);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq63190){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63190));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64697 = arguments.length;
var i__4731__auto___64698 = (0);
while(true){
if((i__4731__auto___64698 < len__4730__auto___64697)){
args__4736__auto__.push((arguments[i__4731__auto___64698]));

var G__64700 = (i__4731__auto___64698 + (1));
i__4731__auto___64698 = G__64700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63198 = conformed_args__59513__auto__;
var map__63198__$1 = (((((!((map__63198 == null))))?(((((map__63198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63198):map__63198);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq63194){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63194));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64703 = arguments.length;
var i__4731__auto___64704 = (0);
while(true){
if((i__4731__auto___64704 < len__4730__auto___64703)){
args__4736__auto__.push((arguments[i__4731__auto___64704]));

var G__64705 = (i__4731__auto___64704 + (1));
i__4731__auto___64704 = G__64705;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63202 = conformed_args__59513__auto__;
var map__63202__$1 = (((((!((map__63202 == null))))?(((((map__63202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63202):map__63202);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq63201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63201));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64713 = arguments.length;
var i__4731__auto___64714 = (0);
while(true){
if((i__4731__auto___64714 < len__4730__auto___64713)){
args__4736__auto__.push((arguments[i__4731__auto___64714]));

var G__64716 = (i__4731__auto___64714 + (1));
i__4731__auto___64714 = G__64716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63205 = conformed_args__59513__auto__;
var map__63205__$1 = (((((!((map__63205 == null))))?(((((map__63205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63205):map__63205);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq63204){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63204));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64728 = arguments.length;
var i__4731__auto___64729 = (0);
while(true){
if((i__4731__auto___64729 < len__4730__auto___64728)){
args__4736__auto__.push((arguments[i__4731__auto___64729]));

var G__64731 = (i__4731__auto___64729 + (1));
i__4731__auto___64729 = G__64731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63208 = conformed_args__59513__auto__;
var map__63208__$1 = (((((!((map__63208 == null))))?(((((map__63208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63208):map__63208);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq63207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63207));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64734 = arguments.length;
var i__4731__auto___64735 = (0);
while(true){
if((i__4731__auto___64735 < len__4730__auto___64734)){
args__4736__auto__.push((arguments[i__4731__auto___64735]));

var G__64736 = (i__4731__auto___64735 + (1));
i__4731__auto___64735 = G__64736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63211 = conformed_args__59513__auto__;
var map__63211__$1 = (((((!((map__63211 == null))))?(((((map__63211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63211):map__63211);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq63210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63210));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64744 = arguments.length;
var i__4731__auto___64745 = (0);
while(true){
if((i__4731__auto___64745 < len__4730__auto___64744)){
args__4736__auto__.push((arguments[i__4731__auto___64745]));

var G__64746 = (i__4731__auto___64745 + (1));
i__4731__auto___64745 = G__64746;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63215 = conformed_args__59513__auto__;
var map__63215__$1 = (((((!((map__63215 == null))))?(((((map__63215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63215):map__63215);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq63213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63213));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64754 = arguments.length;
var i__4731__auto___64755 = (0);
while(true){
if((i__4731__auto___64755 < len__4730__auto___64754)){
args__4736__auto__.push((arguments[i__4731__auto___64755]));

var G__64756 = (i__4731__auto___64755 + (1));
i__4731__auto___64755 = G__64756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63218 = conformed_args__59513__auto__;
var map__63218__$1 = (((((!((map__63218 == null))))?(((((map__63218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63218):map__63218);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq63217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63217));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64764 = arguments.length;
var i__4731__auto___64765 = (0);
while(true){
if((i__4731__auto___64765 < len__4730__auto___64764)){
args__4736__auto__.push((arguments[i__4731__auto___64765]));

var G__64766 = (i__4731__auto___64765 + (1));
i__4731__auto___64765 = G__64766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63221 = conformed_args__59513__auto__;
var map__63221__$1 = (((((!((map__63221 == null))))?(((((map__63221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63221):map__63221);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq63220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63220));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64776 = arguments.length;
var i__4731__auto___64777 = (0);
while(true){
if((i__4731__auto___64777 < len__4730__auto___64776)){
args__4736__auto__.push((arguments[i__4731__auto___64777]));

var G__64779 = (i__4731__auto___64777 + (1));
i__4731__auto___64777 = G__64779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63224 = conformed_args__59513__auto__;
var map__63224__$1 = (((((!((map__63224 == null))))?(((((map__63224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63224):map__63224);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq63223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63223));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64785 = arguments.length;
var i__4731__auto___64786 = (0);
while(true){
if((i__4731__auto___64786 < len__4730__auto___64785)){
args__4736__auto__.push((arguments[i__4731__auto___64786]));

var G__64787 = (i__4731__auto___64786 + (1));
i__4731__auto___64786 = G__64787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63227 = conformed_args__59513__auto__;
var map__63227__$1 = (((((!((map__63227 == null))))?(((((map__63227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63227):map__63227);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq63226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63226));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64794 = arguments.length;
var i__4731__auto___64795 = (0);
while(true){
if((i__4731__auto___64795 < len__4730__auto___64794)){
args__4736__auto__.push((arguments[i__4731__auto___64795]));

var G__64796 = (i__4731__auto___64795 + (1));
i__4731__auto___64795 = G__64796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63231 = conformed_args__59513__auto__;
var map__63231__$1 = (((((!((map__63231 == null))))?(((((map__63231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63231):map__63231);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq63229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63229));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64806 = arguments.length;
var i__4731__auto___64807 = (0);
while(true){
if((i__4731__auto___64807 < len__4730__auto___64806)){
args__4736__auto__.push((arguments[i__4731__auto___64807]));

var G__64808 = (i__4731__auto___64807 + (1));
i__4731__auto___64807 = G__64808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63235 = conformed_args__59513__auto__;
var map__63235__$1 = (((((!((map__63235 == null))))?(((((map__63235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63235):map__63235);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq63234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63234));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64814 = arguments.length;
var i__4731__auto___64815 = (0);
while(true){
if((i__4731__auto___64815 < len__4730__auto___64814)){
args__4736__auto__.push((arguments[i__4731__auto___64815]));

var G__64816 = (i__4731__auto___64815 + (1));
i__4731__auto___64815 = G__64816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63238 = conformed_args__59513__auto__;
var map__63238__$1 = (((((!((map__63238 == null))))?(((((map__63238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63238):map__63238);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq63237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63237));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64818 = arguments.length;
var i__4731__auto___64819 = (0);
while(true){
if((i__4731__auto___64819 < len__4730__auto___64818)){
args__4736__auto__.push((arguments[i__4731__auto___64819]));

var G__64820 = (i__4731__auto___64819 + (1));
i__4731__auto___64819 = G__64820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63241 = conformed_args__59513__auto__;
var map__63241__$1 = (((((!((map__63241 == null))))?(((((map__63241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63241):map__63241);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq63240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63240));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64821 = arguments.length;
var i__4731__auto___64822 = (0);
while(true){
if((i__4731__auto___64822 < len__4730__auto___64821)){
args__4736__auto__.push((arguments[i__4731__auto___64822]));

var G__64823 = (i__4731__auto___64822 + (1));
i__4731__auto___64822 = G__64823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63245 = conformed_args__59513__auto__;
var map__63245__$1 = (((((!((map__63245 == null))))?(((((map__63245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63245):map__63245);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq63243){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63243));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64825 = arguments.length;
var i__4731__auto___64826 = (0);
while(true){
if((i__4731__auto___64826 < len__4730__auto___64825)){
args__4736__auto__.push((arguments[i__4731__auto___64826]));

var G__64827 = (i__4731__auto___64826 + (1));
i__4731__auto___64826 = G__64827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63250 = conformed_args__59513__auto__;
var map__63250__$1 = (((((!((map__63250 == null))))?(((((map__63250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63250):map__63250);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq63249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63249));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64830 = arguments.length;
var i__4731__auto___64831 = (0);
while(true){
if((i__4731__auto___64831 < len__4730__auto___64830)){
args__4736__auto__.push((arguments[i__4731__auto___64831]));

var G__64832 = (i__4731__auto___64831 + (1));
i__4731__auto___64831 = G__64832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63253 = conformed_args__59513__auto__;
var map__63253__$1 = (((((!((map__63253 == null))))?(((((map__63253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63253):map__63253);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq63252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63252));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64834 = arguments.length;
var i__4731__auto___64835 = (0);
while(true){
if((i__4731__auto___64835 < len__4730__auto___64834)){
args__4736__auto__.push((arguments[i__4731__auto___64835]));

var G__64837 = (i__4731__auto___64835 + (1));
i__4731__auto___64835 = G__64837;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63256 = conformed_args__59513__auto__;
var map__63256__$1 = (((((!((map__63256 == null))))?(((((map__63256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63256):map__63256);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq63255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63255));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64840 = arguments.length;
var i__4731__auto___64841 = (0);
while(true){
if((i__4731__auto___64841 < len__4730__auto___64840)){
args__4736__auto__.push((arguments[i__4731__auto___64841]));

var G__64842 = (i__4731__auto___64841 + (1));
i__4731__auto___64841 = G__64842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63259 = conformed_args__59513__auto__;
var map__63259__$1 = (((((!((map__63259 == null))))?(((((map__63259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63259):map__63259);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq63258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63258));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64846 = arguments.length;
var i__4731__auto___64847 = (0);
while(true){
if((i__4731__auto___64847 < len__4730__auto___64846)){
args__4736__auto__.push((arguments[i__4731__auto___64847]));

var G__64848 = (i__4731__auto___64847 + (1));
i__4731__auto___64847 = G__64848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63264 = conformed_args__59513__auto__;
var map__63264__$1 = (((((!((map__63264 == null))))?(((((map__63264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63264):map__63264);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63264__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63264__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63264__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq63261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63261));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64852 = arguments.length;
var i__4731__auto___64853 = (0);
while(true){
if((i__4731__auto___64853 < len__4730__auto___64852)){
args__4736__auto__.push((arguments[i__4731__auto___64853]));

var G__64854 = (i__4731__auto___64853 + (1));
i__4731__auto___64853 = G__64854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63267 = conformed_args__59513__auto__;
var map__63267__$1 = (((((!((map__63267 == null))))?(((((map__63267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63267):map__63267);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq63266){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63266));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64856 = arguments.length;
var i__4731__auto___64857 = (0);
while(true){
if((i__4731__auto___64857 < len__4730__auto___64856)){
args__4736__auto__.push((arguments[i__4731__auto___64857]));

var G__64861 = (i__4731__auto___64857 + (1));
i__4731__auto___64857 = G__64861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63270 = conformed_args__59513__auto__;
var map__63270__$1 = (((((!((map__63270 == null))))?(((((map__63270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63270):map__63270);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq63269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63269));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64863 = arguments.length;
var i__4731__auto___64864 = (0);
while(true){
if((i__4731__auto___64864 < len__4730__auto___64863)){
args__4736__auto__.push((arguments[i__4731__auto___64864]));

var G__64865 = (i__4731__auto___64864 + (1));
i__4731__auto___64864 = G__64865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63273 = conformed_args__59513__auto__;
var map__63273__$1 = (((((!((map__63273 == null))))?(((((map__63273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63273):map__63273);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq63272){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63272));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64866 = arguments.length;
var i__4731__auto___64867 = (0);
while(true){
if((i__4731__auto___64867 < len__4730__auto___64866)){
args__4736__auto__.push((arguments[i__4731__auto___64867]));

var G__64868 = (i__4731__auto___64867 + (1));
i__4731__auto___64867 = G__64868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63276 = conformed_args__59513__auto__;
var map__63276__$1 = (((((!((map__63276 == null))))?(((((map__63276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63276):map__63276);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq63275){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63275));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64870 = arguments.length;
var i__4731__auto___64871 = (0);
while(true){
if((i__4731__auto___64871 < len__4730__auto___64870)){
args__4736__auto__.push((arguments[i__4731__auto___64871]));

var G__64872 = (i__4731__auto___64871 + (1));
i__4731__auto___64871 = G__64872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63280 = conformed_args__59513__auto__;
var map__63280__$1 = (((((!((map__63280 == null))))?(((((map__63280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63280):map__63280);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq63278){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63278));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64876 = arguments.length;
var i__4731__auto___64877 = (0);
while(true){
if((i__4731__auto___64877 < len__4730__auto___64876)){
args__4736__auto__.push((arguments[i__4731__auto___64877]));

var G__64878 = (i__4731__auto___64877 + (1));
i__4731__auto___64877 = G__64878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63283 = conformed_args__59513__auto__;
var map__63283__$1 = (((((!((map__63283 == null))))?(((((map__63283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63283):map__63283);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq63282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63282));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64881 = arguments.length;
var i__4731__auto___64882 = (0);
while(true){
if((i__4731__auto___64882 < len__4730__auto___64881)){
args__4736__auto__.push((arguments[i__4731__auto___64882]));

var G__64883 = (i__4731__auto___64882 + (1));
i__4731__auto___64882 = G__64883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63286 = conformed_args__59513__auto__;
var map__63286__$1 = (((((!((map__63286 == null))))?(((((map__63286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63286):map__63286);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq63285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63285));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64887 = arguments.length;
var i__4731__auto___64888 = (0);
while(true){
if((i__4731__auto___64888 < len__4730__auto___64887)){
args__4736__auto__.push((arguments[i__4731__auto___64888]));

var G__64889 = (i__4731__auto___64888 + (1));
i__4731__auto___64888 = G__64889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63289 = conformed_args__59513__auto__;
var map__63289__$1 = (((((!((map__63289 == null))))?(((((map__63289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63289):map__63289);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq63288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63288));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64893 = arguments.length;
var i__4731__auto___64894 = (0);
while(true){
if((i__4731__auto___64894 < len__4730__auto___64893)){
args__4736__auto__.push((arguments[i__4731__auto___64894]));

var G__64895 = (i__4731__auto___64894 + (1));
i__4731__auto___64894 = G__64895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63292 = conformed_args__59513__auto__;
var map__63292__$1 = (((((!((map__63292 == null))))?(((((map__63292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63292):map__63292);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq63291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63291));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64896 = arguments.length;
var i__4731__auto___64897 = (0);
while(true){
if((i__4731__auto___64897 < len__4730__auto___64896)){
args__4736__auto__.push((arguments[i__4731__auto___64897]));

var G__64898 = (i__4731__auto___64897 + (1));
i__4731__auto___64897 = G__64898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63298 = conformed_args__59513__auto__;
var map__63298__$1 = (((((!((map__63298 == null))))?(((((map__63298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63298):map__63298);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq63294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63294));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64905 = arguments.length;
var i__4731__auto___64906 = (0);
while(true){
if((i__4731__auto___64906 < len__4730__auto___64905)){
args__4736__auto__.push((arguments[i__4731__auto___64906]));

var G__64907 = (i__4731__auto___64906 + (1));
i__4731__auto___64906 = G__64907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63312 = conformed_args__59513__auto__;
var map__63312__$1 = (((((!((map__63312 == null))))?(((((map__63312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63312):map__63312);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq63307){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63307));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64908 = arguments.length;
var i__4731__auto___64909 = (0);
while(true){
if((i__4731__auto___64909 < len__4730__auto___64908)){
args__4736__auto__.push((arguments[i__4731__auto___64909]));

var G__64910 = (i__4731__auto___64909 + (1));
i__4731__auto___64909 = G__64910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63326 = conformed_args__59513__auto__;
var map__63326__$1 = (((((!((map__63326 == null))))?(((((map__63326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63326):map__63326);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq63320){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63320));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64911 = arguments.length;
var i__4731__auto___64912 = (0);
while(true){
if((i__4731__auto___64912 < len__4730__auto___64911)){
args__4736__auto__.push((arguments[i__4731__auto___64912]));

var G__64916 = (i__4731__auto___64912 + (1));
i__4731__auto___64912 = G__64916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63329 = conformed_args__59513__auto__;
var map__63329__$1 = (((((!((map__63329 == null))))?(((((map__63329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63329):map__63329);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq63328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63328));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64920 = arguments.length;
var i__4731__auto___64921 = (0);
while(true){
if((i__4731__auto___64921 < len__4730__auto___64920)){
args__4736__auto__.push((arguments[i__4731__auto___64921]));

var G__64922 = (i__4731__auto___64921 + (1));
i__4731__auto___64921 = G__64922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63335 = conformed_args__59513__auto__;
var map__63335__$1 = (((((!((map__63335 == null))))?(((((map__63335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63335):map__63335);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq63333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63333));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64923 = arguments.length;
var i__4731__auto___64924 = (0);
while(true){
if((i__4731__auto___64924 < len__4730__auto___64923)){
args__4736__auto__.push((arguments[i__4731__auto___64924]));

var G__64928 = (i__4731__auto___64924 + (1));
i__4731__auto___64924 = G__64928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63338 = conformed_args__59513__auto__;
var map__63338__$1 = (((((!((map__63338 == null))))?(((((map__63338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63338):map__63338);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq63337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63337));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64932 = arguments.length;
var i__4731__auto___64933 = (0);
while(true){
if((i__4731__auto___64933 < len__4730__auto___64932)){
args__4736__auto__.push((arguments[i__4731__auto___64933]));

var G__64934 = (i__4731__auto___64933 + (1));
i__4731__auto___64933 = G__64934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63344 = conformed_args__59513__auto__;
var map__63344__$1 = (((((!((map__63344 == null))))?(((((map__63344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63344):map__63344);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq63340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64936 = arguments.length;
var i__4731__auto___64937 = (0);
while(true){
if((i__4731__auto___64937 < len__4730__auto___64936)){
args__4736__auto__.push((arguments[i__4731__auto___64937]));

var G__64938 = (i__4731__auto___64937 + (1));
i__4731__auto___64937 = G__64938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63352 = conformed_args__59513__auto__;
var map__63352__$1 = (((((!((map__63352 == null))))?(((((map__63352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63352):map__63352);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq63348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63348));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64944 = arguments.length;
var i__4731__auto___64945 = (0);
while(true){
if((i__4731__auto___64945 < len__4730__auto___64944)){
args__4736__auto__.push((arguments[i__4731__auto___64945]));

var G__64946 = (i__4731__auto___64945 + (1));
i__4731__auto___64945 = G__64946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63370 = conformed_args__59513__auto__;
var map__63370__$1 = (((((!((map__63370 == null))))?(((((map__63370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63370):map__63370);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq63355){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63355));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64952 = arguments.length;
var i__4731__auto___64953 = (0);
while(true){
if((i__4731__auto___64953 < len__4730__auto___64952)){
args__4736__auto__.push((arguments[i__4731__auto___64953]));

var G__64954 = (i__4731__auto___64953 + (1));
i__4731__auto___64953 = G__64954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63378 = conformed_args__59513__auto__;
var map__63378__$1 = (((((!((map__63378 == null))))?(((((map__63378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63378):map__63378);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq63377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63377));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64955 = arguments.length;
var i__4731__auto___64956 = (0);
while(true){
if((i__4731__auto___64956 < len__4730__auto___64955)){
args__4736__auto__.push((arguments[i__4731__auto___64956]));

var G__64957 = (i__4731__auto___64956 + (1));
i__4731__auto___64956 = G__64957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63389 = conformed_args__59513__auto__;
var map__63389__$1 = (((((!((map__63389 == null))))?(((((map__63389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63389):map__63389);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq63387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63387));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64958 = arguments.length;
var i__4731__auto___64959 = (0);
while(true){
if((i__4731__auto___64959 < len__4730__auto___64958)){
args__4736__auto__.push((arguments[i__4731__auto___64959]));

var G__64960 = (i__4731__auto___64959 + (1));
i__4731__auto___64959 = G__64960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63396 = conformed_args__59513__auto__;
var map__63396__$1 = (((((!((map__63396 == null))))?(((((map__63396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63396):map__63396);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63396__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63396__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq63393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63393));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64962 = arguments.length;
var i__4731__auto___64963 = (0);
while(true){
if((i__4731__auto___64963 < len__4730__auto___64962)){
args__4736__auto__.push((arguments[i__4731__auto___64963]));

var G__64964 = (i__4731__auto___64963 + (1));
i__4731__auto___64963 = G__64964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63400 = conformed_args__59513__auto__;
var map__63400__$1 = (((((!((map__63400 == null))))?(((((map__63400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63400):map__63400);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq63398){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63398));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64966 = arguments.length;
var i__4731__auto___64967 = (0);
while(true){
if((i__4731__auto___64967 < len__4730__auto___64966)){
args__4736__auto__.push((arguments[i__4731__auto___64967]));

var G__64968 = (i__4731__auto___64967 + (1));
i__4731__auto___64967 = G__64968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63407 = conformed_args__59513__auto__;
var map__63407__$1 = (((((!((map__63407 == null))))?(((((map__63407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63407):map__63407);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq63405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63405));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64981 = arguments.length;
var i__4731__auto___64982 = (0);
while(true){
if((i__4731__auto___64982 < len__4730__auto___64981)){
args__4736__auto__.push((arguments[i__4731__auto___64982]));

var G__64984 = (i__4731__auto___64982 + (1));
i__4731__auto___64982 = G__64984;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63422 = conformed_args__59513__auto__;
var map__63422__$1 = (((((!((map__63422 == null))))?(((((map__63422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63422):map__63422);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq63417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63417));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64988 = arguments.length;
var i__4731__auto___64989 = (0);
while(true){
if((i__4731__auto___64989 < len__4730__auto___64988)){
args__4736__auto__.push((arguments[i__4731__auto___64989]));

var G__64991 = (i__4731__auto___64989 + (1));
i__4731__auto___64989 = G__64991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63425 = conformed_args__59513__auto__;
var map__63425__$1 = (((((!((map__63425 == null))))?(((((map__63425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63425):map__63425);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq63424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63424));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64993 = arguments.length;
var i__4731__auto___64994 = (0);
while(true){
if((i__4731__auto___64994 < len__4730__auto___64993)){
args__4736__auto__.push((arguments[i__4731__auto___64994]));

var G__64995 = (i__4731__auto___64994 + (1));
i__4731__auto___64994 = G__64995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59513__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__63432 = conformed_args__59513__auto__;
var map__63432__$1 = (((((!((map__63432 == null))))?(((((map__63432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63432):map__63432);
var children__59515__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__59516__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59515__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59515__auto__);
var attrs_value__59517__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59514__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59517__auto__], null),children__59515__auto____$1),css__59516__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq63427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63427));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
