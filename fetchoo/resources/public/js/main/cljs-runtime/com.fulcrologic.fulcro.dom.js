goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__58615){
var vec__58617 = p__58615;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58617,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58617,(1),null);
var pair = vec__58617;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__58621){
var vec__58622 = p__58621;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(1),null);
var pair = vec__58622;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__58628){
var vec__58629 = p__58628;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58629,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58629,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__58632 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58632,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__58632;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__58636 = arguments.length;
switch (G__58636) {
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
var G__58639 = component.refs;
var G__58639__$1 = (((G__58639 == null))?null:goog.object.get(G__58639,name));
if((G__58639__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__58639__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return ((function (factory){
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__58643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (ref,temp__5751__auto__,factory){
return (function (r){
var G__58644 = (function (){var G__58645 = r;
if((G__58645 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__58645);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__58644) : ref.call(null,G__58644));
});})(ref,temp__5751__auto__,factory))
);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__58643) : factory.call(null,G__58643));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
;})(factory))
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__58652 = arguments.length;
switch (G__58652) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___61487 = arguments.length;
var i__4731__auto___61488 = (0);
while(true){
if((i__4731__auto___61488 < len__4730__auto___61487)){
args_arr__4751__auto__.push((arguments[i__4731__auto___61488]));

var G__61490 = (i__4731__auto___61488 + (1));
i__4731__auto___61488 = G__61490;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq58649){
var G__58650 = cljs.core.first(seq58649);
var seq58649__$1 = cljs.core.next(seq58649);
var G__58651 = cljs.core.first(seq58649__$1);
var seq58649__$2 = cljs.core.next(seq58649__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58650,G__58651,seq58649__$2);
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
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__58666 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58666) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__58666));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x58672_61502 = ctor.prototype;
x58672_61502.onChange = ((function (x58672_61502,ctor){
return (function (event){
var this$ = this;
var temp__5753__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x58672_61502,ctor))
;

x58672_61502.UNSAFE_componentWillReceiveProps = ((function (x58672_61502,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,((function (state_value,this_node,this$,x58672_61502,ctor){
return (function (p1__58670_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__58670_SHARP_);
});})(state_value,this_node,this$,x58672_61502,ctor))
));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x58672_61502,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
});})(state_value,this_node,value_node,element_value,this$,x58672_61502,ctor))
,null)),null,-280894601,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x58672_61502,ctor))
;

x58672_61502.render = ((function (x58672_61502,ctor){
return (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
});})(x58672_61502,ctor))
;


var real_factory = ((function (ctor){
return (function() { 
var G__61508__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__61508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61509__i = 0, G__61509__a = new Array(arguments.length -  0);
while (G__61509__i < G__61509__a.length) {G__61509__a[G__61509__i] = arguments[G__61509__i + 0]; ++G__61509__i;}
  args = new cljs.core.IndexedSeq(G__61509__a,0,null);
} 
return G__61508__delegate.call(this,args);};
G__61508.cljs$lang$maxFixedArity = 0;
G__61508.cljs$lang$applyTo = (function (arglist__61512){
var args = cljs.core.seq(arglist__61512);
return G__61508__delegate(args);
});
G__61508.cljs$core$IFn$_invoke$arity$variadic = G__61508__delegate;
return G__61508;
})()
;})(ctor))
;
return ((function (real_factory,ctor){
return (function() { 
var G__61513__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
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
}
};
var G__61513 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61515__i = 0, G__61515__a = new Array(arguments.length -  1);
while (G__61515__i < G__61515__a.length) {G__61515__a[G__61515__i] = arguments[G__61515__i + 1]; ++G__61515__i;}
  children = new cljs.core.IndexedSeq(G__61515__a,0,null);
} 
return G__61513__delegate.call(this,props,children);};
G__61513.cljs$lang$maxFixedArity = 1;
G__61513.cljs$lang$applyTo = (function (arglist__61516){
var props = cljs.core.first(arglist__61516);
var children = cljs.core.rest(arglist__61516);
return G__61513__delegate(props,children);
});
G__61513.cljs$core$IFn$_invoke$arity$variadic = G__61513__delegate;
return G__61513;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__58680 = tag;
switch (G__58680) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58680)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__58685 = arguments.length;
switch (G__58685) {
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
var vec__58696 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58697 = cljs.core.seq(vec__58696);
var first__58698 = cljs.core.first(seq__58697);
var seq__58697__$1 = cljs.core.next(seq__58697);
var head = first__58698;
var tail = seq__58697__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58701 = (function (){var G__58702 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58702,tail);

return G__58702;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58701) : f.call(null,G__58701));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58705 = (function (){var G__58706 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58706,args);

return G__58706;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58705) : f.call(null,G__58705));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58709 = (function (){var G__58710 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58710,tail);

return G__58710;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58709) : f.call(null,G__58709));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58715 = (function (){var G__58716 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58716,tail);

return G__58716;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58715) : f.call(null,G__58715));
} else {
var G__58719 = (function (){var G__58720 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58720,args);

return G__58720;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58719) : f.call(null,G__58719));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__58723 = arguments.length;
switch (G__58723) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58725 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58726 = cljs.core.seq(vec__58725);
var first__58727 = cljs.core.first(seq__58726);
var seq__58726__$1 = cljs.core.next(seq__58726);
var head = first__58727;
var tail = seq__58726__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58730 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58730,tail);

return G__58730;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58731 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58731,args);

return G__58731;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58733 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58733,tail);

return G__58733;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58735 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58735,tail);

return G__58735;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58738 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58738,args);

return G__58738;
})());

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3;

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
var len__4730__auto___61541 = arguments.length;
var i__4731__auto___61542 = (0);
while(true){
if((i__4731__auto___61542 < len__4730__auto___61541)){
args__4736__auto__.push((arguments[i__4731__auto___61542]));

var G__61546 = (i__4731__auto___61542 + (1));
i__4731__auto___61542 = G__61546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58758 = conformed_args__57216__auto__;
var map__58758__$1 = (((((!((map__58758 == null))))?(((((map__58758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58758):map__58758);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq58754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58754));
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
var len__4730__auto___61558 = arguments.length;
var i__4731__auto___61562 = (0);
while(true){
if((i__4731__auto___61562 < len__4730__auto___61558)){
args__4736__auto__.push((arguments[i__4731__auto___61562]));

var G__61564 = (i__4731__auto___61562 + (1));
i__4731__auto___61562 = G__61564;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58769 = conformed_args__57216__auto__;
var map__58769__$1 = (((((!((map__58769 == null))))?(((((map__58769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58769):map__58769);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq58762){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58762));
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
var len__4730__auto___61572 = arguments.length;
var i__4731__auto___61573 = (0);
while(true){
if((i__4731__auto___61573 < len__4730__auto___61572)){
args__4736__auto__.push((arguments[i__4731__auto___61573]));

var G__61574 = (i__4731__auto___61573 + (1));
i__4731__auto___61573 = G__61574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58778 = conformed_args__57216__auto__;
var map__58778__$1 = (((((!((map__58778 == null))))?(((((map__58778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58778):map__58778);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq58775){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58775));
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
var len__4730__auto___61579 = arguments.length;
var i__4731__auto___61580 = (0);
while(true){
if((i__4731__auto___61580 < len__4730__auto___61579)){
args__4736__auto__.push((arguments[i__4731__auto___61580]));

var G__61581 = (i__4731__auto___61580 + (1));
i__4731__auto___61580 = G__61581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58791 = conformed_args__57216__auto__;
var map__58791__$1 = (((((!((map__58791 == null))))?(((((map__58791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58791):map__58791);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq58783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58783));
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
var len__4730__auto___61589 = arguments.length;
var i__4731__auto___61591 = (0);
while(true){
if((i__4731__auto___61591 < len__4730__auto___61589)){
args__4736__auto__.push((arguments[i__4731__auto___61591]));

var G__61593 = (i__4731__auto___61591 + (1));
i__4731__auto___61591 = G__61593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58814 = conformed_args__57216__auto__;
var map__58814__$1 = (((((!((map__58814 == null))))?(((((map__58814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58814):map__58814);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq58806){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58806));
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
var len__4730__auto___61600 = arguments.length;
var i__4731__auto___61601 = (0);
while(true){
if((i__4731__auto___61601 < len__4730__auto___61600)){
args__4736__auto__.push((arguments[i__4731__auto___61601]));

var G__61602 = (i__4731__auto___61601 + (1));
i__4731__auto___61601 = G__61602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58822 = conformed_args__57216__auto__;
var map__58822__$1 = (((((!((map__58822 == null))))?(((((map__58822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58822):map__58822);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq58817){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58817));
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
var len__4730__auto___61609 = arguments.length;
var i__4731__auto___61610 = (0);
while(true){
if((i__4731__auto___61610 < len__4730__auto___61609)){
args__4736__auto__.push((arguments[i__4731__auto___61610]));

var G__61611 = (i__4731__auto___61610 + (1));
i__4731__auto___61610 = G__61611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58833 = conformed_args__57216__auto__;
var map__58833__$1 = (((((!((map__58833 == null))))?(((((map__58833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58833):map__58833);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq58830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58830));
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
var len__4730__auto___61619 = arguments.length;
var i__4731__auto___61620 = (0);
while(true){
if((i__4731__auto___61620 < len__4730__auto___61619)){
args__4736__auto__.push((arguments[i__4731__auto___61620]));

var G__61622 = (i__4731__auto___61620 + (1));
i__4731__auto___61620 = G__61622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58839 = conformed_args__57216__auto__;
var map__58839__$1 = (((((!((map__58839 == null))))?(((((map__58839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58839):map__58839);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58837));
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
var len__4730__auto___61627 = arguments.length;
var i__4731__auto___61628 = (0);
while(true){
if((i__4731__auto___61628 < len__4730__auto___61627)){
args__4736__auto__.push((arguments[i__4731__auto___61628]));

var G__61631 = (i__4731__auto___61628 + (1));
i__4731__auto___61628 = G__61631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58849 = conformed_args__57216__auto__;
var map__58849__$1 = (((((!((map__58849 == null))))?(((((map__58849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58849):map__58849);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq58847){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58847));
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
var len__4730__auto___61639 = arguments.length;
var i__4731__auto___61640 = (0);
while(true){
if((i__4731__auto___61640 < len__4730__auto___61639)){
args__4736__auto__.push((arguments[i__4731__auto___61640]));

var G__61641 = (i__4731__auto___61640 + (1));
i__4731__auto___61640 = G__61641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58858 = conformed_args__57216__auto__;
var map__58858__$1 = (((((!((map__58858 == null))))?(((((map__58858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58858):map__58858);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq58855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58855));
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
var len__4730__auto___61643 = arguments.length;
var i__4731__auto___61646 = (0);
while(true){
if((i__4731__auto___61646 < len__4730__auto___61643)){
args__4736__auto__.push((arguments[i__4731__auto___61646]));

var G__61649 = (i__4731__auto___61646 + (1));
i__4731__auto___61646 = G__61649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58880 = conformed_args__57216__auto__;
var map__58880__$1 = (((((!((map__58880 == null))))?(((((map__58880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58880):map__58880);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq58876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58876));
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
var len__4730__auto___61661 = arguments.length;
var i__4731__auto___61662 = (0);
while(true){
if((i__4731__auto___61662 < len__4730__auto___61661)){
args__4736__auto__.push((arguments[i__4731__auto___61662]));

var G__61664 = (i__4731__auto___61662 + (1));
i__4731__auto___61662 = G__61664;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58894 = conformed_args__57216__auto__;
var map__58894__$1 = (((((!((map__58894 == null))))?(((((map__58894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58894):map__58894);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq58891){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58891));
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
var len__4730__auto___61667 = arguments.length;
var i__4731__auto___61669 = (0);
while(true){
if((i__4731__auto___61669 < len__4730__auto___61667)){
args__4736__auto__.push((arguments[i__4731__auto___61669]));

var G__61670 = (i__4731__auto___61669 + (1));
i__4731__auto___61669 = G__61670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58913 = conformed_args__57216__auto__;
var map__58913__$1 = (((((!((map__58913 == null))))?(((((map__58913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58913):map__58913);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq58907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58907));
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
var len__4730__auto___61679 = arguments.length;
var i__4731__auto___61680 = (0);
while(true){
if((i__4731__auto___61680 < len__4730__auto___61679)){
args__4736__auto__.push((arguments[i__4731__auto___61680]));

var G__61681 = (i__4731__auto___61680 + (1));
i__4731__auto___61680 = G__61681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58924 = conformed_args__57216__auto__;
var map__58924__$1 = (((((!((map__58924 == null))))?(((((map__58924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58924):map__58924);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq58922){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58922));
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
var len__4730__auto___61687 = arguments.length;
var i__4731__auto___61688 = (0);
while(true){
if((i__4731__auto___61688 < len__4730__auto___61687)){
args__4736__auto__.push((arguments[i__4731__auto___61688]));

var G__61689 = (i__4731__auto___61688 + (1));
i__4731__auto___61688 = G__61689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58936 = conformed_args__57216__auto__;
var map__58936__$1 = (((((!((map__58936 == null))))?(((((map__58936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58936):map__58936);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq58930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58930));
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
var len__4730__auto___61708 = arguments.length;
var i__4731__auto___61709 = (0);
while(true){
if((i__4731__auto___61709 < len__4730__auto___61708)){
args__4736__auto__.push((arguments[i__4731__auto___61709]));

var G__61710 = (i__4731__auto___61709 + (1));
i__4731__auto___61709 = G__61710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58954 = conformed_args__57216__auto__;
var map__58954__$1 = (((((!((map__58954 == null))))?(((((map__58954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58954):map__58954);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq58944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58944));
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
var len__4730__auto___61720 = arguments.length;
var i__4731__auto___61721 = (0);
while(true){
if((i__4731__auto___61721 < len__4730__auto___61720)){
args__4736__auto__.push((arguments[i__4731__auto___61721]));

var G__61723 = (i__4731__auto___61721 + (1));
i__4731__auto___61721 = G__61723;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58973 = conformed_args__57216__auto__;
var map__58973__$1 = (((((!((map__58973 == null))))?(((((map__58973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58973):map__58973);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq58968){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58968));
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
var len__4730__auto___61735 = arguments.length;
var i__4731__auto___61736 = (0);
while(true){
if((i__4731__auto___61736 < len__4730__auto___61735)){
args__4736__auto__.push((arguments[i__4731__auto___61736]));

var G__61738 = (i__4731__auto___61736 + (1));
i__4731__auto___61736 = G__61738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58981 = conformed_args__57216__auto__;
var map__58981__$1 = (((((!((map__58981 == null))))?(((((map__58981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58981):map__58981);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq58977){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58977));
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
var len__4730__auto___61748 = arguments.length;
var i__4731__auto___61749 = (0);
while(true){
if((i__4731__auto___61749 < len__4730__auto___61748)){
args__4736__auto__.push((arguments[i__4731__auto___61749]));

var G__61751 = (i__4731__auto___61749 + (1));
i__4731__auto___61749 = G__61751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59003 = conformed_args__57216__auto__;
var map__59003__$1 = (((((!((map__59003 == null))))?(((((map__59003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59003):map__59003);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq58992){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58992));
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
var len__4730__auto___61759 = arguments.length;
var i__4731__auto___61760 = (0);
while(true){
if((i__4731__auto___61760 < len__4730__auto___61759)){
args__4736__auto__.push((arguments[i__4731__auto___61760]));

var G__61761 = (i__4731__auto___61760 + (1));
i__4731__auto___61760 = G__61761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59009 = conformed_args__57216__auto__;
var map__59009__$1 = (((((!((map__59009 == null))))?(((((map__59009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59009):map__59009);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq59007){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59007));
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
var len__4730__auto___61767 = arguments.length;
var i__4731__auto___61768 = (0);
while(true){
if((i__4731__auto___61768 < len__4730__auto___61767)){
args__4736__auto__.push((arguments[i__4731__auto___61768]));

var G__61770 = (i__4731__auto___61768 + (1));
i__4731__auto___61768 = G__61770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59026 = conformed_args__57216__auto__;
var map__59026__$1 = (((((!((map__59026 == null))))?(((((map__59026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59026):map__59026);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq59022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59022));
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
var len__4730__auto___61774 = arguments.length;
var i__4731__auto___61776 = (0);
while(true){
if((i__4731__auto___61776 < len__4730__auto___61774)){
args__4736__auto__.push((arguments[i__4731__auto___61776]));

var G__61777 = (i__4731__auto___61776 + (1));
i__4731__auto___61776 = G__61777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59036 = conformed_args__57216__auto__;
var map__59036__$1 = (((((!((map__59036 == null))))?(((((map__59036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59036):map__59036);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq59034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59034));
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
var len__4730__auto___61780 = arguments.length;
var i__4731__auto___61781 = (0);
while(true){
if((i__4731__auto___61781 < len__4730__auto___61780)){
args__4736__auto__.push((arguments[i__4731__auto___61781]));

var G__61783 = (i__4731__auto___61781 + (1));
i__4731__auto___61781 = G__61783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59046 = conformed_args__57216__auto__;
var map__59046__$1 = (((((!((map__59046 == null))))?(((((map__59046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59046):map__59046);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq59041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59041));
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
var len__4730__auto___61786 = arguments.length;
var i__4731__auto___61787 = (0);
while(true){
if((i__4731__auto___61787 < len__4730__auto___61786)){
args__4736__auto__.push((arguments[i__4731__auto___61787]));

var G__61789 = (i__4731__auto___61787 + (1));
i__4731__auto___61787 = G__61789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59059 = conformed_args__57216__auto__;
var map__59059__$1 = (((((!((map__59059 == null))))?(((((map__59059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59059):map__59059);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq59055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59055));
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
var len__4730__auto___61792 = arguments.length;
var i__4731__auto___61793 = (0);
while(true){
if((i__4731__auto___61793 < len__4730__auto___61792)){
args__4736__auto__.push((arguments[i__4731__auto___61793]));

var G__61794 = (i__4731__auto___61793 + (1));
i__4731__auto___61793 = G__61794;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59067 = conformed_args__57216__auto__;
var map__59067__$1 = (((((!((map__59067 == null))))?(((((map__59067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59067):map__59067);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq59065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59065));
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
var len__4730__auto___61798 = arguments.length;
var i__4731__auto___61799 = (0);
while(true){
if((i__4731__auto___61799 < len__4730__auto___61798)){
args__4736__auto__.push((arguments[i__4731__auto___61799]));

var G__61800 = (i__4731__auto___61799 + (1));
i__4731__auto___61799 = G__61800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59077 = conformed_args__57216__auto__;
var map__59077__$1 = (((((!((map__59077 == null))))?(((((map__59077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59077):map__59077);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq59073){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59073));
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
var len__4730__auto___61811 = arguments.length;
var i__4731__auto___61814 = (0);
while(true){
if((i__4731__auto___61814 < len__4730__auto___61811)){
args__4736__auto__.push((arguments[i__4731__auto___61814]));

var G__61816 = (i__4731__auto___61814 + (1));
i__4731__auto___61814 = G__61816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59085 = conformed_args__57216__auto__;
var map__59085__$1 = (((((!((map__59085 == null))))?(((((map__59085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59085):map__59085);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq59082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59082));
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
var len__4730__auto___61824 = arguments.length;
var i__4731__auto___61825 = (0);
while(true){
if((i__4731__auto___61825 < len__4730__auto___61824)){
args__4736__auto__.push((arguments[i__4731__auto___61825]));

var G__61826 = (i__4731__auto___61825 + (1));
i__4731__auto___61825 = G__61826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59095 = conformed_args__57216__auto__;
var map__59095__$1 = (((((!((map__59095 == null))))?(((((map__59095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59095):map__59095);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq59093){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59093));
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
var len__4730__auto___61834 = arguments.length;
var i__4731__auto___61835 = (0);
while(true){
if((i__4731__auto___61835 < len__4730__auto___61834)){
args__4736__auto__.push((arguments[i__4731__auto___61835]));

var G__61836 = (i__4731__auto___61835 + (1));
i__4731__auto___61835 = G__61836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59110 = conformed_args__57216__auto__;
var map__59110__$1 = (((((!((map__59110 == null))))?(((((map__59110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59110):map__59110);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq59104){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59104));
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
var len__4730__auto___61842 = arguments.length;
var i__4731__auto___61844 = (0);
while(true){
if((i__4731__auto___61844 < len__4730__auto___61842)){
args__4736__auto__.push((arguments[i__4731__auto___61844]));

var G__61846 = (i__4731__auto___61844 + (1));
i__4731__auto___61844 = G__61846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59122 = conformed_args__57216__auto__;
var map__59122__$1 = (((((!((map__59122 == null))))?(((((map__59122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59122):map__59122);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq59120){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59120));
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
var len__4730__auto___61853 = arguments.length;
var i__4731__auto___61855 = (0);
while(true){
if((i__4731__auto___61855 < len__4730__auto___61853)){
args__4736__auto__.push((arguments[i__4731__auto___61855]));

var G__61856 = (i__4731__auto___61855 + (1));
i__4731__auto___61855 = G__61856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59129 = conformed_args__57216__auto__;
var map__59129__$1 = (((((!((map__59129 == null))))?(((((map__59129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59129):map__59129);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq59126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59126));
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
var len__4730__auto___61862 = arguments.length;
var i__4731__auto___61863 = (0);
while(true){
if((i__4731__auto___61863 < len__4730__auto___61862)){
args__4736__auto__.push((arguments[i__4731__auto___61863]));

var G__61864 = (i__4731__auto___61863 + (1));
i__4731__auto___61863 = G__61864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59140 = conformed_args__57216__auto__;
var map__59140__$1 = (((((!((map__59140 == null))))?(((((map__59140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59140):map__59140);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq59137){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59137));
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
var len__4730__auto___61865 = arguments.length;
var i__4731__auto___61866 = (0);
while(true){
if((i__4731__auto___61866 < len__4730__auto___61865)){
args__4736__auto__.push((arguments[i__4731__auto___61866]));

var G__61867 = (i__4731__auto___61866 + (1));
i__4731__auto___61866 = G__61867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59154 = conformed_args__57216__auto__;
var map__59154__$1 = (((((!((map__59154 == null))))?(((((map__59154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59154):map__59154);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq59147){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59147));
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
var len__4730__auto___61873 = arguments.length;
var i__4731__auto___61874 = (0);
while(true){
if((i__4731__auto___61874 < len__4730__auto___61873)){
args__4736__auto__.push((arguments[i__4731__auto___61874]));

var G__61877 = (i__4731__auto___61874 + (1));
i__4731__auto___61874 = G__61877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59163 = conformed_args__57216__auto__;
var map__59163__$1 = (((((!((map__59163 == null))))?(((((map__59163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59163):map__59163);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq59158){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59158));
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
var len__4730__auto___61885 = arguments.length;
var i__4731__auto___61886 = (0);
while(true){
if((i__4731__auto___61886 < len__4730__auto___61885)){
args__4736__auto__.push((arguments[i__4731__auto___61886]));

var G__61887 = (i__4731__auto___61886 + (1));
i__4731__auto___61886 = G__61887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59172 = conformed_args__57216__auto__;
var map__59172__$1 = (((((!((map__59172 == null))))?(((((map__59172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59172):map__59172);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq59171){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59171));
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
var len__4730__auto___61897 = arguments.length;
var i__4731__auto___61898 = (0);
while(true){
if((i__4731__auto___61898 < len__4730__auto___61897)){
args__4736__auto__.push((arguments[i__4731__auto___61898]));

var G__61899 = (i__4731__auto___61898 + (1));
i__4731__auto___61898 = G__61899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59186 = conformed_args__57216__auto__;
var map__59186__$1 = (((((!((map__59186 == null))))?(((((map__59186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59186):map__59186);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq59180){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59180));
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
var len__4730__auto___61905 = arguments.length;
var i__4731__auto___61906 = (0);
while(true){
if((i__4731__auto___61906 < len__4730__auto___61905)){
args__4736__auto__.push((arguments[i__4731__auto___61906]));

var G__61908 = (i__4731__auto___61906 + (1));
i__4731__auto___61906 = G__61908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59198 = conformed_args__57216__auto__;
var map__59198__$1 = (((((!((map__59198 == null))))?(((((map__59198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59198):map__59198);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq59194){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59194));
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
var len__4730__auto___61915 = arguments.length;
var i__4731__auto___61916 = (0);
while(true){
if((i__4731__auto___61916 < len__4730__auto___61915)){
args__4736__auto__.push((arguments[i__4731__auto___61916]));

var G__61917 = (i__4731__auto___61916 + (1));
i__4731__auto___61916 = G__61917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59205 = conformed_args__57216__auto__;
var map__59205__$1 = (((((!((map__59205 == null))))?(((((map__59205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59205):map__59205);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq59202){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59202));
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
var len__4730__auto___61925 = arguments.length;
var i__4731__auto___61926 = (0);
while(true){
if((i__4731__auto___61926 < len__4730__auto___61925)){
args__4736__auto__.push((arguments[i__4731__auto___61926]));

var G__61927 = (i__4731__auto___61926 + (1));
i__4731__auto___61926 = G__61927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59216 = conformed_args__57216__auto__;
var map__59216__$1 = (((((!((map__59216 == null))))?(((((map__59216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59216):map__59216);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq59212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59212));
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
var len__4730__auto___61942 = arguments.length;
var i__4731__auto___61943 = (0);
while(true){
if((i__4731__auto___61943 < len__4730__auto___61942)){
args__4736__auto__.push((arguments[i__4731__auto___61943]));

var G__61944 = (i__4731__auto___61943 + (1));
i__4731__auto___61943 = G__61944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59228 = conformed_args__57216__auto__;
var map__59228__$1 = (((((!((map__59228 == null))))?(((((map__59228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59228):map__59228);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq59225){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59225));
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
var len__4730__auto___61959 = arguments.length;
var i__4731__auto___61960 = (0);
while(true){
if((i__4731__auto___61960 < len__4730__auto___61959)){
args__4736__auto__.push((arguments[i__4731__auto___61960]));

var G__61965 = (i__4731__auto___61960 + (1));
i__4731__auto___61960 = G__61965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59234 = conformed_args__57216__auto__;
var map__59234__$1 = (((((!((map__59234 == null))))?(((((map__59234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59234):map__59234);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq59231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59231));
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
var len__4730__auto___61975 = arguments.length;
var i__4731__auto___61976 = (0);
while(true){
if((i__4731__auto___61976 < len__4730__auto___61975)){
args__4736__auto__.push((arguments[i__4731__auto___61976]));

var G__61977 = (i__4731__auto___61976 + (1));
i__4731__auto___61976 = G__61977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59248 = conformed_args__57216__auto__;
var map__59248__$1 = (((((!((map__59248 == null))))?(((((map__59248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59248):map__59248);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq59239){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59239));
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
var len__4730__auto___61985 = arguments.length;
var i__4731__auto___61986 = (0);
while(true){
if((i__4731__auto___61986 < len__4730__auto___61985)){
args__4736__auto__.push((arguments[i__4731__auto___61986]));

var G__61989 = (i__4731__auto___61986 + (1));
i__4731__auto___61986 = G__61989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59262 = conformed_args__57216__auto__;
var map__59262__$1 = (((((!((map__59262 == null))))?(((((map__59262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59262):map__59262);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq59258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59258));
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
var len__4730__auto___61991 = arguments.length;
var i__4731__auto___61992 = (0);
while(true){
if((i__4731__auto___61992 < len__4730__auto___61991)){
args__4736__auto__.push((arguments[i__4731__auto___61992]));

var G__61993 = (i__4731__auto___61992 + (1));
i__4731__auto___61992 = G__61993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59278 = conformed_args__57216__auto__;
var map__59278__$1 = (((((!((map__59278 == null))))?(((((map__59278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59278):map__59278);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq59273){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59273));
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
var len__4730__auto___62001 = arguments.length;
var i__4731__auto___62002 = (0);
while(true){
if((i__4731__auto___62002 < len__4730__auto___62001)){
args__4736__auto__.push((arguments[i__4731__auto___62002]));

var G__62003 = (i__4731__auto___62002 + (1));
i__4731__auto___62002 = G__62003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59287 = conformed_args__57216__auto__;
var map__59287__$1 = (((((!((map__59287 == null))))?(((((map__59287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59287):map__59287);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq59283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59283));
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
var len__4730__auto___62008 = arguments.length;
var i__4731__auto___62009 = (0);
while(true){
if((i__4731__auto___62009 < len__4730__auto___62008)){
args__4736__auto__.push((arguments[i__4731__auto___62009]));

var G__62011 = (i__4731__auto___62009 + (1));
i__4731__auto___62009 = G__62011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59291 = conformed_args__57216__auto__;
var map__59291__$1 = (((((!((map__59291 == null))))?(((((map__59291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59291):map__59291);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq59289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59289));
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
var len__4730__auto___62016 = arguments.length;
var i__4731__auto___62018 = (0);
while(true){
if((i__4731__auto___62018 < len__4730__auto___62016)){
args__4736__auto__.push((arguments[i__4731__auto___62018]));

var G__62019 = (i__4731__auto___62018 + (1));
i__4731__auto___62018 = G__62019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59302 = conformed_args__57216__auto__;
var map__59302__$1 = (((((!((map__59302 == null))))?(((((map__59302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59302):map__59302);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq59300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59300));
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
var len__4730__auto___62029 = arguments.length;
var i__4731__auto___62030 = (0);
while(true){
if((i__4731__auto___62030 < len__4730__auto___62029)){
args__4736__auto__.push((arguments[i__4731__auto___62030]));

var G__62031 = (i__4731__auto___62030 + (1));
i__4731__auto___62030 = G__62031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59315 = conformed_args__57216__auto__;
var map__59315__$1 = (((((!((map__59315 == null))))?(((((map__59315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59315):map__59315);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq59308){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59308));
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
var len__4730__auto___62039 = arguments.length;
var i__4731__auto___62040 = (0);
while(true){
if((i__4731__auto___62040 < len__4730__auto___62039)){
args__4736__auto__.push((arguments[i__4731__auto___62040]));

var G__62041 = (i__4731__auto___62040 + (1));
i__4731__auto___62040 = G__62041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59325 = conformed_args__57216__auto__;
var map__59325__$1 = (((((!((map__59325 == null))))?(((((map__59325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59325):map__59325);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq59318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59318));
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
var len__4730__auto___62045 = arguments.length;
var i__4731__auto___62046 = (0);
while(true){
if((i__4731__auto___62046 < len__4730__auto___62045)){
args__4736__auto__.push((arguments[i__4731__auto___62046]));

var G__62047 = (i__4731__auto___62046 + (1));
i__4731__auto___62046 = G__62047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59340 = conformed_args__57216__auto__;
var map__59340__$1 = (((((!((map__59340 == null))))?(((((map__59340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59340):map__59340);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq59334){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59334));
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
var len__4730__auto___62051 = arguments.length;
var i__4731__auto___62053 = (0);
while(true){
if((i__4731__auto___62053 < len__4730__auto___62051)){
args__4736__auto__.push((arguments[i__4731__auto___62053]));

var G__62054 = (i__4731__auto___62053 + (1));
i__4731__auto___62053 = G__62054;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59355 = conformed_args__57216__auto__;
var map__59355__$1 = (((((!((map__59355 == null))))?(((((map__59355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59355):map__59355);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq59347){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59347));
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
var len__4730__auto___62057 = arguments.length;
var i__4731__auto___62058 = (0);
while(true){
if((i__4731__auto___62058 < len__4730__auto___62057)){
args__4736__auto__.push((arguments[i__4731__auto___62058]));

var G__62059 = (i__4731__auto___62058 + (1));
i__4731__auto___62058 = G__62059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59368 = conformed_args__57216__auto__;
var map__59368__$1 = (((((!((map__59368 == null))))?(((((map__59368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59368):map__59368);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq59361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59361));
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
var len__4730__auto___62060 = arguments.length;
var i__4731__auto___62061 = (0);
while(true){
if((i__4731__auto___62061 < len__4730__auto___62060)){
args__4736__auto__.push((arguments[i__4731__auto___62061]));

var G__62062 = (i__4731__auto___62061 + (1));
i__4731__auto___62061 = G__62062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59383 = conformed_args__57216__auto__;
var map__59383__$1 = (((((!((map__59383 == null))))?(((((map__59383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59383):map__59383);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq59377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59377));
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
var len__4730__auto___62075 = arguments.length;
var i__4731__auto___62076 = (0);
while(true){
if((i__4731__auto___62076 < len__4730__auto___62075)){
args__4736__auto__.push((arguments[i__4731__auto___62076]));

var G__62077 = (i__4731__auto___62076 + (1));
i__4731__auto___62076 = G__62077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59404 = conformed_args__57216__auto__;
var map__59404__$1 = (((((!((map__59404 == null))))?(((((map__59404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59404):map__59404);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq59395){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59395));
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
var len__4730__auto___62084 = arguments.length;
var i__4731__auto___62086 = (0);
while(true){
if((i__4731__auto___62086 < len__4730__auto___62084)){
args__4736__auto__.push((arguments[i__4731__auto___62086]));

var G__62087 = (i__4731__auto___62086 + (1));
i__4731__auto___62086 = G__62087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59427 = conformed_args__57216__auto__;
var map__59427__$1 = (((((!((map__59427 == null))))?(((((map__59427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59427):map__59427);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq59417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59417));
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
var len__4730__auto___62092 = arguments.length;
var i__4731__auto___62093 = (0);
while(true){
if((i__4731__auto___62093 < len__4730__auto___62092)){
args__4736__auto__.push((arguments[i__4731__auto___62093]));

var G__62094 = (i__4731__auto___62093 + (1));
i__4731__auto___62093 = G__62094;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59440 = conformed_args__57216__auto__;
var map__59440__$1 = (((((!((map__59440 == null))))?(((((map__59440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59440):map__59440);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq59434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59434));
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
var len__4730__auto___62098 = arguments.length;
var i__4731__auto___62099 = (0);
while(true){
if((i__4731__auto___62099 < len__4730__auto___62098)){
args__4736__auto__.push((arguments[i__4731__auto___62099]));

var G__62100 = (i__4731__auto___62099 + (1));
i__4731__auto___62099 = G__62100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59458 = conformed_args__57216__auto__;
var map__59458__$1 = (((((!((map__59458 == null))))?(((((map__59458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59458):map__59458);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq59449){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59449));
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
var len__4730__auto___62101 = arguments.length;
var i__4731__auto___62102 = (0);
while(true){
if((i__4731__auto___62102 < len__4730__auto___62101)){
args__4736__auto__.push((arguments[i__4731__auto___62102]));

var G__62103 = (i__4731__auto___62102 + (1));
i__4731__auto___62102 = G__62103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59479 = conformed_args__57216__auto__;
var map__59479__$1 = (((((!((map__59479 == null))))?(((((map__59479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59479):map__59479);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq59473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59473));
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
var len__4730__auto___62104 = arguments.length;
var i__4731__auto___62105 = (0);
while(true){
if((i__4731__auto___62105 < len__4730__auto___62104)){
args__4736__auto__.push((arguments[i__4731__auto___62105]));

var G__62106 = (i__4731__auto___62105 + (1));
i__4731__auto___62105 = G__62106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59495 = conformed_args__57216__auto__;
var map__59495__$1 = (((((!((map__59495 == null))))?(((((map__59495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59495):map__59495);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq59489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59489));
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
var len__4730__auto___62112 = arguments.length;
var i__4731__auto___62113 = (0);
while(true){
if((i__4731__auto___62113 < len__4730__auto___62112)){
args__4736__auto__.push((arguments[i__4731__auto___62113]));

var G__62114 = (i__4731__auto___62113 + (1));
i__4731__auto___62113 = G__62114;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59512 = conformed_args__57216__auto__;
var map__59512__$1 = (((((!((map__59512 == null))))?(((((map__59512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59512):map__59512);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq59509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59509));
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
var len__4730__auto___62117 = arguments.length;
var i__4731__auto___62118 = (0);
while(true){
if((i__4731__auto___62118 < len__4730__auto___62117)){
args__4736__auto__.push((arguments[i__4731__auto___62118]));

var G__62119 = (i__4731__auto___62118 + (1));
i__4731__auto___62118 = G__62119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59538 = conformed_args__57216__auto__;
var map__59538__$1 = (((((!((map__59538 == null))))?(((((map__59538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59538):map__59538);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq59524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59524));
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
var len__4730__auto___62121 = arguments.length;
var i__4731__auto___62122 = (0);
while(true){
if((i__4731__auto___62122 < len__4730__auto___62121)){
args__4736__auto__.push((arguments[i__4731__auto___62122]));

var G__62123 = (i__4731__auto___62122 + (1));
i__4731__auto___62122 = G__62123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59555 = conformed_args__57216__auto__;
var map__59555__$1 = (((((!((map__59555 == null))))?(((((map__59555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59555):map__59555);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq59544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59544));
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
var len__4730__auto___62127 = arguments.length;
var i__4731__auto___62128 = (0);
while(true){
if((i__4731__auto___62128 < len__4730__auto___62127)){
args__4736__auto__.push((arguments[i__4731__auto___62128]));

var G__62129 = (i__4731__auto___62128 + (1));
i__4731__auto___62128 = G__62129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59571 = conformed_args__57216__auto__;
var map__59571__$1 = (((((!((map__59571 == null))))?(((((map__59571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59571):map__59571);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq59567){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59567));
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
var len__4730__auto___62133 = arguments.length;
var i__4731__auto___62134 = (0);
while(true){
if((i__4731__auto___62134 < len__4730__auto___62133)){
args__4736__auto__.push((arguments[i__4731__auto___62134]));

var G__62135 = (i__4731__auto___62134 + (1));
i__4731__auto___62134 = G__62135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59588 = conformed_args__57216__auto__;
var map__59588__$1 = (((((!((map__59588 == null))))?(((((map__59588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59588):map__59588);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq59582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59582));
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
var len__4730__auto___62137 = arguments.length;
var i__4731__auto___62138 = (0);
while(true){
if((i__4731__auto___62138 < len__4730__auto___62137)){
args__4736__auto__.push((arguments[i__4731__auto___62138]));

var G__62139 = (i__4731__auto___62138 + (1));
i__4731__auto___62138 = G__62139;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59602 = conformed_args__57216__auto__;
var map__59602__$1 = (((((!((map__59602 == null))))?(((((map__59602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59602):map__59602);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq59595){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59595));
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
var len__4730__auto___62143 = arguments.length;
var i__4731__auto___62144 = (0);
while(true){
if((i__4731__auto___62144 < len__4730__auto___62143)){
args__4736__auto__.push((arguments[i__4731__auto___62144]));

var G__62145 = (i__4731__auto___62144 + (1));
i__4731__auto___62144 = G__62145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59617 = conformed_args__57216__auto__;
var map__59617__$1 = (((((!((map__59617 == null))))?(((((map__59617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59617):map__59617);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq59613){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59613));
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
var len__4730__auto___62149 = arguments.length;
var i__4731__auto___62150 = (0);
while(true){
if((i__4731__auto___62150 < len__4730__auto___62149)){
args__4736__auto__.push((arguments[i__4731__auto___62150]));

var G__62151 = (i__4731__auto___62150 + (1));
i__4731__auto___62150 = G__62151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59631 = conformed_args__57216__auto__;
var map__59631__$1 = (((((!((map__59631 == null))))?(((((map__59631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59631):map__59631);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq59624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59624));
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
var len__4730__auto___62153 = arguments.length;
var i__4731__auto___62154 = (0);
while(true){
if((i__4731__auto___62154 < len__4730__auto___62153)){
args__4736__auto__.push((arguments[i__4731__auto___62154]));

var G__62156 = (i__4731__auto___62154 + (1));
i__4731__auto___62154 = G__62156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59642 = conformed_args__57216__auto__;
var map__59642__$1 = (((((!((map__59642 == null))))?(((((map__59642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59642):map__59642);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq59640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59640));
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
var len__4730__auto___62158 = arguments.length;
var i__4731__auto___62159 = (0);
while(true){
if((i__4731__auto___62159 < len__4730__auto___62158)){
args__4736__auto__.push((arguments[i__4731__auto___62159]));

var G__62160 = (i__4731__auto___62159 + (1));
i__4731__auto___62159 = G__62160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59655 = conformed_args__57216__auto__;
var map__59655__$1 = (((((!((map__59655 == null))))?(((((map__59655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59655):map__59655);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq59654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59654));
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
var len__4730__auto___62161 = arguments.length;
var i__4731__auto___62162 = (0);
while(true){
if((i__4731__auto___62162 < len__4730__auto___62161)){
args__4736__auto__.push((arguments[i__4731__auto___62162]));

var G__62163 = (i__4731__auto___62162 + (1));
i__4731__auto___62162 = G__62163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59670 = conformed_args__57216__auto__;
var map__59670__$1 = (((((!((map__59670 == null))))?(((((map__59670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59670):map__59670);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq59659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59659));
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
var len__4730__auto___62167 = arguments.length;
var i__4731__auto___62168 = (0);
while(true){
if((i__4731__auto___62168 < len__4730__auto___62167)){
args__4736__auto__.push((arguments[i__4731__auto___62168]));

var G__62169 = (i__4731__auto___62168 + (1));
i__4731__auto___62168 = G__62169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59676 = conformed_args__57216__auto__;
var map__59676__$1 = (((((!((map__59676 == null))))?(((((map__59676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59676):map__59676);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq59672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59672));
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
var len__4730__auto___62173 = arguments.length;
var i__4731__auto___62174 = (0);
while(true){
if((i__4731__auto___62174 < len__4730__auto___62173)){
args__4736__auto__.push((arguments[i__4731__auto___62174]));

var G__62175 = (i__4731__auto___62174 + (1));
i__4731__auto___62174 = G__62175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59688 = conformed_args__57216__auto__;
var map__59688__$1 = (((((!((map__59688 == null))))?(((((map__59688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59688):map__59688);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq59686){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59686));
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
var len__4730__auto___62180 = arguments.length;
var i__4731__auto___62181 = (0);
while(true){
if((i__4731__auto___62181 < len__4730__auto___62180)){
args__4736__auto__.push((arguments[i__4731__auto___62181]));

var G__62182 = (i__4731__auto___62181 + (1));
i__4731__auto___62181 = G__62182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59703 = conformed_args__57216__auto__;
var map__59703__$1 = (((((!((map__59703 == null))))?(((((map__59703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59703):map__59703);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq59700){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59700));
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
var len__4730__auto___62186 = arguments.length;
var i__4731__auto___62187 = (0);
while(true){
if((i__4731__auto___62187 < len__4730__auto___62186)){
args__4736__auto__.push((arguments[i__4731__auto___62187]));

var G__62188 = (i__4731__auto___62187 + (1));
i__4731__auto___62187 = G__62188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59716 = conformed_args__57216__auto__;
var map__59716__$1 = (((((!((map__59716 == null))))?(((((map__59716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59716):map__59716);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq59709){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59709));
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
var len__4730__auto___62192 = arguments.length;
var i__4731__auto___62193 = (0);
while(true){
if((i__4731__auto___62193 < len__4730__auto___62192)){
args__4736__auto__.push((arguments[i__4731__auto___62193]));

var G__62194 = (i__4731__auto___62193 + (1));
i__4731__auto___62193 = G__62194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59730 = conformed_args__57216__auto__;
var map__59730__$1 = (((((!((map__59730 == null))))?(((((map__59730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59730):map__59730);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq59722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59722));
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
var len__4730__auto___62198 = arguments.length;
var i__4731__auto___62199 = (0);
while(true){
if((i__4731__auto___62199 < len__4730__auto___62198)){
args__4736__auto__.push((arguments[i__4731__auto___62199]));

var G__62200 = (i__4731__auto___62199 + (1));
i__4731__auto___62199 = G__62200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59735 = conformed_args__57216__auto__;
var map__59735__$1 = (((((!((map__59735 == null))))?(((((map__59735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59735):map__59735);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq59732){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59732));
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
var len__4730__auto___62212 = arguments.length;
var i__4731__auto___62213 = (0);
while(true){
if((i__4731__auto___62213 < len__4730__auto___62212)){
args__4736__auto__.push((arguments[i__4731__auto___62213]));

var G__62214 = (i__4731__auto___62213 + (1));
i__4731__auto___62213 = G__62214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59746 = conformed_args__57216__auto__;
var map__59746__$1 = (((((!((map__59746 == null))))?(((((map__59746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59746):map__59746);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq59743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59743));
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
var len__4730__auto___62215 = arguments.length;
var i__4731__auto___62216 = (0);
while(true){
if((i__4731__auto___62216 < len__4730__auto___62215)){
args__4736__auto__.push((arguments[i__4731__auto___62216]));

var G__62217 = (i__4731__auto___62216 + (1));
i__4731__auto___62216 = G__62217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59766 = conformed_args__57216__auto__;
var map__59766__$1 = (((((!((map__59766 == null))))?(((((map__59766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59766):map__59766);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq59761){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59761));
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
var len__4730__auto___62220 = arguments.length;
var i__4731__auto___62221 = (0);
while(true){
if((i__4731__auto___62221 < len__4730__auto___62220)){
args__4736__auto__.push((arguments[i__4731__auto___62221]));

var G__62222 = (i__4731__auto___62221 + (1));
i__4731__auto___62221 = G__62222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59776 = conformed_args__57216__auto__;
var map__59776__$1 = (((((!((map__59776 == null))))?(((((map__59776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776):map__59776);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq59772){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59772));
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
var len__4730__auto___62230 = arguments.length;
var i__4731__auto___62231 = (0);
while(true){
if((i__4731__auto___62231 < len__4730__auto___62230)){
args__4736__auto__.push((arguments[i__4731__auto___62231]));

var G__62232 = (i__4731__auto___62231 + (1));
i__4731__auto___62231 = G__62232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59780 = conformed_args__57216__auto__;
var map__59780__$1 = (((((!((map__59780 == null))))?(((((map__59780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59780):map__59780);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq59779){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59779));
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
var len__4730__auto___62233 = arguments.length;
var i__4731__auto___62234 = (0);
while(true){
if((i__4731__auto___62234 < len__4730__auto___62233)){
args__4736__auto__.push((arguments[i__4731__auto___62234]));

var G__62236 = (i__4731__auto___62234 + (1));
i__4731__auto___62234 = G__62236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59792 = conformed_args__57216__auto__;
var map__59792__$1 = (((((!((map__59792 == null))))?(((((map__59792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59792):map__59792);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq59787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59787));
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
var len__4730__auto___62245 = arguments.length;
var i__4731__auto___62246 = (0);
while(true){
if((i__4731__auto___62246 < len__4730__auto___62245)){
args__4736__auto__.push((arguments[i__4731__auto___62246]));

var G__62247 = (i__4731__auto___62246 + (1));
i__4731__auto___62246 = G__62247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59802 = conformed_args__57216__auto__;
var map__59802__$1 = (((((!((map__59802 == null))))?(((((map__59802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59802):map__59802);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq59801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59801));
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
var len__4730__auto___62248 = arguments.length;
var i__4731__auto___62249 = (0);
while(true){
if((i__4731__auto___62249 < len__4730__auto___62248)){
args__4736__auto__.push((arguments[i__4731__auto___62249]));

var G__62250 = (i__4731__auto___62249 + (1));
i__4731__auto___62249 = G__62250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59857 = conformed_args__57216__auto__;
var map__59857__$1 = (((((!((map__59857 == null))))?(((((map__59857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59857):map__59857);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq59842){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59842));
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
var len__4730__auto___62253 = arguments.length;
var i__4731__auto___62254 = (0);
while(true){
if((i__4731__auto___62254 < len__4730__auto___62253)){
args__4736__auto__.push((arguments[i__4731__auto___62254]));

var G__62255 = (i__4731__auto___62254 + (1));
i__4731__auto___62254 = G__62255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59893 = conformed_args__57216__auto__;
var map__59893__$1 = (((((!((map__59893 == null))))?(((((map__59893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59893):map__59893);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq59881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59881));
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
var len__4730__auto___62263 = arguments.length;
var i__4731__auto___62264 = (0);
while(true){
if((i__4731__auto___62264 < len__4730__auto___62263)){
args__4736__auto__.push((arguments[i__4731__auto___62264]));

var G__62265 = (i__4731__auto___62264 + (1));
i__4731__auto___62264 = G__62265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59923 = conformed_args__57216__auto__;
var map__59923__$1 = (((((!((map__59923 == null))))?(((((map__59923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59923):map__59923);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq59907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59907));
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
var len__4730__auto___62266 = arguments.length;
var i__4731__auto___62267 = (0);
while(true){
if((i__4731__auto___62267 < len__4730__auto___62266)){
args__4736__auto__.push((arguments[i__4731__auto___62267]));

var G__62268 = (i__4731__auto___62267 + (1));
i__4731__auto___62267 = G__62268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59935 = conformed_args__57216__auto__;
var map__59935__$1 = (((((!((map__59935 == null))))?(((((map__59935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59935):map__59935);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq59932){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59932));
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
var len__4730__auto___62271 = arguments.length;
var i__4731__auto___62276 = (0);
while(true){
if((i__4731__auto___62276 < len__4730__auto___62271)){
args__4736__auto__.push((arguments[i__4731__auto___62276]));

var G__62277 = (i__4731__auto___62276 + (1));
i__4731__auto___62276 = G__62277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59944 = conformed_args__57216__auto__;
var map__59944__$1 = (((((!((map__59944 == null))))?(((((map__59944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59944):map__59944);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq59941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59941));
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
var len__4730__auto___62278 = arguments.length;
var i__4731__auto___62279 = (0);
while(true){
if((i__4731__auto___62279 < len__4730__auto___62278)){
args__4736__auto__.push((arguments[i__4731__auto___62279]));

var G__62280 = (i__4731__auto___62279 + (1));
i__4731__auto___62279 = G__62280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59948 = conformed_args__57216__auto__;
var map__59948__$1 = (((((!((map__59948 == null))))?(((((map__59948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59948):map__59948);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq59947){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59947));
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
var len__4730__auto___62284 = arguments.length;
var i__4731__auto___62285 = (0);
while(true){
if((i__4731__auto___62285 < len__4730__auto___62284)){
args__4736__auto__.push((arguments[i__4731__auto___62285]));

var G__62286 = (i__4731__auto___62285 + (1));
i__4731__auto___62285 = G__62286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59972 = conformed_args__57216__auto__;
var map__59972__$1 = (((((!((map__59972 == null))))?(((((map__59972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59972):map__59972);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq59968){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59968));
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
var len__4730__auto___62287 = arguments.length;
var i__4731__auto___62288 = (0);
while(true){
if((i__4731__auto___62288 < len__4730__auto___62287)){
args__4736__auto__.push((arguments[i__4731__auto___62288]));

var G__62289 = (i__4731__auto___62288 + (1));
i__4731__auto___62288 = G__62289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59986 = conformed_args__57216__auto__;
var map__59986__$1 = (((((!((map__59986 == null))))?(((((map__59986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59986):map__59986);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq59980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59980));
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
var len__4730__auto___62293 = arguments.length;
var i__4731__auto___62294 = (0);
while(true){
if((i__4731__auto___62294 < len__4730__auto___62293)){
args__4736__auto__.push((arguments[i__4731__auto___62294]));

var G__62295 = (i__4731__auto___62294 + (1));
i__4731__auto___62294 = G__62295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59995 = conformed_args__57216__auto__;
var map__59995__$1 = (((((!((map__59995 == null))))?(((((map__59995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59995):map__59995);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq59990){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59990));
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
var len__4730__auto___62298 = arguments.length;
var i__4731__auto___62299 = (0);
while(true){
if((i__4731__auto___62299 < len__4730__auto___62298)){
args__4736__auto__.push((arguments[i__4731__auto___62299]));

var G__62300 = (i__4731__auto___62299 + (1));
i__4731__auto___62299 = G__62300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60007 = conformed_args__57216__auto__;
var map__60007__$1 = (((((!((map__60007 == null))))?(((((map__60007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60007):map__60007);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq60006){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60006));
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
var len__4730__auto___62304 = arguments.length;
var i__4731__auto___62306 = (0);
while(true){
if((i__4731__auto___62306 < len__4730__auto___62304)){
args__4736__auto__.push((arguments[i__4731__auto___62306]));

var G__62307 = (i__4731__auto___62306 + (1));
i__4731__auto___62306 = G__62307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60015 = conformed_args__57216__auto__;
var map__60015__$1 = (((((!((map__60015 == null))))?(((((map__60015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60015):map__60015);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq60012){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60012));
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
var len__4730__auto___62309 = arguments.length;
var i__4731__auto___62310 = (0);
while(true){
if((i__4731__auto___62310 < len__4730__auto___62309)){
args__4736__auto__.push((arguments[i__4731__auto___62310]));

var G__62311 = (i__4731__auto___62310 + (1));
i__4731__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60022 = conformed_args__57216__auto__;
var map__60022__$1 = (((((!((map__60022 == null))))?(((((map__60022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60022):map__60022);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq60021){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60021));
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
var len__4730__auto___62313 = arguments.length;
var i__4731__auto___62314 = (0);
while(true){
if((i__4731__auto___62314 < len__4730__auto___62313)){
args__4736__auto__.push((arguments[i__4731__auto___62314]));

var G__62315 = (i__4731__auto___62314 + (1));
i__4731__auto___62314 = G__62315;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60032 = conformed_args__57216__auto__;
var map__60032__$1 = (((((!((map__60032 == null))))?(((((map__60032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60032):map__60032);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq60029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60029));
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
var len__4730__auto___62319 = arguments.length;
var i__4731__auto___62321 = (0);
while(true){
if((i__4731__auto___62321 < len__4730__auto___62319)){
args__4736__auto__.push((arguments[i__4731__auto___62321]));

var G__62323 = (i__4731__auto___62321 + (1));
i__4731__auto___62321 = G__62323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60040 = conformed_args__57216__auto__;
var map__60040__$1 = (((((!((map__60040 == null))))?(((((map__60040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60040):map__60040);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq60036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60036));
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
var len__4730__auto___62326 = arguments.length;
var i__4731__auto___62327 = (0);
while(true){
if((i__4731__auto___62327 < len__4730__auto___62326)){
args__4736__auto__.push((arguments[i__4731__auto___62327]));

var G__62328 = (i__4731__auto___62327 + (1));
i__4731__auto___62327 = G__62328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60048 = conformed_args__57216__auto__;
var map__60048__$1 = (((((!((map__60048 == null))))?(((((map__60048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60048):map__60048);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq60043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60043));
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
var len__4730__auto___62331 = arguments.length;
var i__4731__auto___62332 = (0);
while(true){
if((i__4731__auto___62332 < len__4730__auto___62331)){
args__4736__auto__.push((arguments[i__4731__auto___62332]));

var G__62333 = (i__4731__auto___62332 + (1));
i__4731__auto___62332 = G__62333;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60059 = conformed_args__57216__auto__;
var map__60059__$1 = (((((!((map__60059 == null))))?(((((map__60059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60059):map__60059);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq60055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60055));
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
var len__4730__auto___62334 = arguments.length;
var i__4731__auto___62335 = (0);
while(true){
if((i__4731__auto___62335 < len__4730__auto___62334)){
args__4736__auto__.push((arguments[i__4731__auto___62335]));

var G__62336 = (i__4731__auto___62335 + (1));
i__4731__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60070 = conformed_args__57216__auto__;
var map__60070__$1 = (((((!((map__60070 == null))))?(((((map__60070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60070):map__60070);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60070__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60070__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60070__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq60068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60068));
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
var len__4730__auto___62337 = arguments.length;
var i__4731__auto___62338 = (0);
while(true){
if((i__4731__auto___62338 < len__4730__auto___62337)){
args__4736__auto__.push((arguments[i__4731__auto___62338]));

var G__62339 = (i__4731__auto___62338 + (1));
i__4731__auto___62338 = G__62339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60078 = conformed_args__57216__auto__;
var map__60078__$1 = (((((!((map__60078 == null))))?(((((map__60078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60078):map__60078);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq60077){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60077));
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
var len__4730__auto___62343 = arguments.length;
var i__4731__auto___62344 = (0);
while(true){
if((i__4731__auto___62344 < len__4730__auto___62343)){
args__4736__auto__.push((arguments[i__4731__auto___62344]));

var G__62345 = (i__4731__auto___62344 + (1));
i__4731__auto___62344 = G__62345;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60083 = conformed_args__57216__auto__;
var map__60083__$1 = (((((!((map__60083 == null))))?(((((map__60083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60083):map__60083);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq60082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60082));
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
var len__4730__auto___62349 = arguments.length;
var i__4731__auto___62350 = (0);
while(true){
if((i__4731__auto___62350 < len__4730__auto___62349)){
args__4736__auto__.push((arguments[i__4731__auto___62350]));

var G__62351 = (i__4731__auto___62350 + (1));
i__4731__auto___62350 = G__62351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60091 = conformed_args__57216__auto__;
var map__60091__$1 = (((((!((map__60091 == null))))?(((((map__60091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60091):map__60091);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq60087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60087));
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
var len__4730__auto___62355 = arguments.length;
var i__4731__auto___62357 = (0);
while(true){
if((i__4731__auto___62357 < len__4730__auto___62355)){
args__4736__auto__.push((arguments[i__4731__auto___62357]));

var G__62360 = (i__4731__auto___62357 + (1));
i__4731__auto___62357 = G__62360;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60100 = conformed_args__57216__auto__;
var map__60100__$1 = (((((!((map__60100 == null))))?(((((map__60100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60100):map__60100);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq60096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60096));
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
var len__4730__auto___62361 = arguments.length;
var i__4731__auto___62362 = (0);
while(true){
if((i__4731__auto___62362 < len__4730__auto___62361)){
args__4736__auto__.push((arguments[i__4731__auto___62362]));

var G__62363 = (i__4731__auto___62362 + (1));
i__4731__auto___62362 = G__62363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60110 = conformed_args__57216__auto__;
var map__60110__$1 = (((((!((map__60110 == null))))?(((((map__60110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60110):map__60110);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq60104){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60104));
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
var len__4730__auto___62385 = arguments.length;
var i__4731__auto___62386 = (0);
while(true){
if((i__4731__auto___62386 < len__4730__auto___62385)){
args__4736__auto__.push((arguments[i__4731__auto___62386]));

var G__62388 = (i__4731__auto___62386 + (1));
i__4731__auto___62386 = G__62388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60118 = conformed_args__57216__auto__;
var map__60118__$1 = (((((!((map__60118 == null))))?(((((map__60118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60118):map__60118);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq60113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60113));
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
var len__4730__auto___62398 = arguments.length;
var i__4731__auto___62399 = (0);
while(true){
if((i__4731__auto___62399 < len__4730__auto___62398)){
args__4736__auto__.push((arguments[i__4731__auto___62399]));

var G__62400 = (i__4731__auto___62399 + (1));
i__4731__auto___62399 = G__62400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60128 = conformed_args__57216__auto__;
var map__60128__$1 = (((((!((map__60128 == null))))?(((((map__60128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60128):map__60128);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq60122){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60122));
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
var len__4730__auto___62405 = arguments.length;
var i__4731__auto___62406 = (0);
while(true){
if((i__4731__auto___62406 < len__4730__auto___62405)){
args__4736__auto__.push((arguments[i__4731__auto___62406]));

var G__62407 = (i__4731__auto___62406 + (1));
i__4731__auto___62406 = G__62407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60133 = conformed_args__57216__auto__;
var map__60133__$1 = (((((!((map__60133 == null))))?(((((map__60133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60133):map__60133);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq60130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60130));
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
var len__4730__auto___62411 = arguments.length;
var i__4731__auto___62413 = (0);
while(true){
if((i__4731__auto___62413 < len__4730__auto___62411)){
args__4736__auto__.push((arguments[i__4731__auto___62413]));

var G__62416 = (i__4731__auto___62413 + (1));
i__4731__auto___62413 = G__62416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60140 = conformed_args__57216__auto__;
var map__60140__$1 = (((((!((map__60140 == null))))?(((((map__60140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60140):map__60140);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq60137){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60137));
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
var len__4730__auto___62422 = arguments.length;
var i__4731__auto___62423 = (0);
while(true){
if((i__4731__auto___62423 < len__4730__auto___62422)){
args__4736__auto__.push((arguments[i__4731__auto___62423]));

var G__62424 = (i__4731__auto___62423 + (1));
i__4731__auto___62423 = G__62424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60147 = conformed_args__57216__auto__;
var map__60147__$1 = (((((!((map__60147 == null))))?(((((map__60147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60147):map__60147);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq60142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60142));
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
var len__4730__auto___62433 = arguments.length;
var i__4731__auto___62434 = (0);
while(true){
if((i__4731__auto___62434 < len__4730__auto___62433)){
args__4736__auto__.push((arguments[i__4731__auto___62434]));

var G__62435 = (i__4731__auto___62434 + (1));
i__4731__auto___62434 = G__62435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60156 = conformed_args__57216__auto__;
var map__60156__$1 = (((((!((map__60156 == null))))?(((((map__60156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60156):map__60156);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq60155){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60155));
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
var len__4730__auto___62438 = arguments.length;
var i__4731__auto___62439 = (0);
while(true){
if((i__4731__auto___62439 < len__4730__auto___62438)){
args__4736__auto__.push((arguments[i__4731__auto___62439]));

var G__62440 = (i__4731__auto___62439 + (1));
i__4731__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60161 = conformed_args__57216__auto__;
var map__60161__$1 = (((((!((map__60161 == null))))?(((((map__60161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60161):map__60161);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq60159){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60159));
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
var len__4730__auto___62442 = arguments.length;
var i__4731__auto___62443 = (0);
while(true){
if((i__4731__auto___62443 < len__4730__auto___62442)){
args__4736__auto__.push((arguments[i__4731__auto___62443]));

var G__62444 = (i__4731__auto___62443 + (1));
i__4731__auto___62443 = G__62444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60170 = conformed_args__57216__auto__;
var map__60170__$1 = (((((!((map__60170 == null))))?(((((map__60170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60170):map__60170);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq60166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60166));
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
var len__4730__auto___62447 = arguments.length;
var i__4731__auto___62448 = (0);
while(true){
if((i__4731__auto___62448 < len__4730__auto___62447)){
args__4736__auto__.push((arguments[i__4731__auto___62448]));

var G__62449 = (i__4731__auto___62448 + (1));
i__4731__auto___62448 = G__62449;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60176 = conformed_args__57216__auto__;
var map__60176__$1 = (((((!((map__60176 == null))))?(((((map__60176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60176):map__60176);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq60174){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60174));
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
var len__4730__auto___62453 = arguments.length;
var i__4731__auto___62454 = (0);
while(true){
if((i__4731__auto___62454 < len__4730__auto___62453)){
args__4736__auto__.push((arguments[i__4731__auto___62454]));

var G__62455 = (i__4731__auto___62454 + (1));
i__4731__auto___62454 = G__62455;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60185 = conformed_args__57216__auto__;
var map__60185__$1 = (((((!((map__60185 == null))))?(((((map__60185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60185):map__60185);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq60181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60181));
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
var len__4730__auto___62458 = arguments.length;
var i__4731__auto___62459 = (0);
while(true){
if((i__4731__auto___62459 < len__4730__auto___62458)){
args__4736__auto__.push((arguments[i__4731__auto___62459]));

var G__62460 = (i__4731__auto___62459 + (1));
i__4731__auto___62459 = G__62460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60196 = conformed_args__57216__auto__;
var map__60196__$1 = (((((!((map__60196 == null))))?(((((map__60196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60196):map__60196);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq60190){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60190));
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
var len__4730__auto___62483 = arguments.length;
var i__4731__auto___62488 = (0);
while(true){
if((i__4731__auto___62488 < len__4730__auto___62483)){
args__4736__auto__.push((arguments[i__4731__auto___62488]));

var G__62489 = (i__4731__auto___62488 + (1));
i__4731__auto___62488 = G__62489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60204 = conformed_args__57216__auto__;
var map__60204__$1 = (((((!((map__60204 == null))))?(((((map__60204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60204):map__60204);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq60200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60200));
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
var len__4730__auto___62499 = arguments.length;
var i__4731__auto___62500 = (0);
while(true){
if((i__4731__auto___62500 < len__4730__auto___62499)){
args__4736__auto__.push((arguments[i__4731__auto___62500]));

var G__62501 = (i__4731__auto___62500 + (1));
i__4731__auto___62500 = G__62501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60210 = conformed_args__57216__auto__;
var map__60210__$1 = (((((!((map__60210 == null))))?(((((map__60210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60210):map__60210);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq60209){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60209));
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
var len__4730__auto___62526 = arguments.length;
var i__4731__auto___62527 = (0);
while(true){
if((i__4731__auto___62527 < len__4730__auto___62526)){
args__4736__auto__.push((arguments[i__4731__auto___62527]));

var G__62532 = (i__4731__auto___62527 + (1));
i__4731__auto___62527 = G__62532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60215 = conformed_args__57216__auto__;
var map__60215__$1 = (((((!((map__60215 == null))))?(((((map__60215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60215):map__60215);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq60213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60213));
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
var len__4730__auto___62552 = arguments.length;
var i__4731__auto___62553 = (0);
while(true){
if((i__4731__auto___62553 < len__4730__auto___62552)){
args__4736__auto__.push((arguments[i__4731__auto___62553]));

var G__62554 = (i__4731__auto___62553 + (1));
i__4731__auto___62553 = G__62554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60224 = conformed_args__57216__auto__;
var map__60224__$1 = (((((!((map__60224 == null))))?(((((map__60224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60224):map__60224);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq60218){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60218));
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
var len__4730__auto___62571 = arguments.length;
var i__4731__auto___62572 = (0);
while(true){
if((i__4731__auto___62572 < len__4730__auto___62571)){
args__4736__auto__.push((arguments[i__4731__auto___62572]));

var G__62573 = (i__4731__auto___62572 + (1));
i__4731__auto___62572 = G__62573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60228 = conformed_args__57216__auto__;
var map__60228__$1 = (((((!((map__60228 == null))))?(((((map__60228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60228):map__60228);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq60227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60227));
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
var len__4730__auto___62578 = arguments.length;
var i__4731__auto___62579 = (0);
while(true){
if((i__4731__auto___62579 < len__4730__auto___62578)){
args__4736__auto__.push((arguments[i__4731__auto___62579]));

var G__62580 = (i__4731__auto___62579 + (1));
i__4731__auto___62579 = G__62580;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60235 = conformed_args__57216__auto__;
var map__60235__$1 = (((((!((map__60235 == null))))?(((((map__60235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60235):map__60235);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq60233){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60233));
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
var len__4730__auto___62582 = arguments.length;
var i__4731__auto___62583 = (0);
while(true){
if((i__4731__auto___62583 < len__4730__auto___62582)){
args__4736__auto__.push((arguments[i__4731__auto___62583]));

var G__62584 = (i__4731__auto___62583 + (1));
i__4731__auto___62583 = G__62584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60246 = conformed_args__57216__auto__;
var map__60246__$1 = (((((!((map__60246 == null))))?(((((map__60246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60246):map__60246);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq60242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60242));
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
var len__4730__auto___62585 = arguments.length;
var i__4731__auto___62586 = (0);
while(true){
if((i__4731__auto___62586 < len__4730__auto___62585)){
args__4736__auto__.push((arguments[i__4731__auto___62586]));

var G__62587 = (i__4731__auto___62586 + (1));
i__4731__auto___62586 = G__62587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60252 = conformed_args__57216__auto__;
var map__60252__$1 = (((((!((map__60252 == null))))?(((((map__60252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60252):map__60252);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq60251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60251));
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
var len__4730__auto___62597 = arguments.length;
var i__4731__auto___62598 = (0);
while(true){
if((i__4731__auto___62598 < len__4730__auto___62597)){
args__4736__auto__.push((arguments[i__4731__auto___62598]));

var G__62599 = (i__4731__auto___62598 + (1));
i__4731__auto___62598 = G__62599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60260 = conformed_args__57216__auto__;
var map__60260__$1 = (((((!((map__60260 == null))))?(((((map__60260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60260):map__60260);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq60257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60257));
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
var len__4730__auto___62601 = arguments.length;
var i__4731__auto___62602 = (0);
while(true){
if((i__4731__auto___62602 < len__4730__auto___62601)){
args__4736__auto__.push((arguments[i__4731__auto___62602]));

var G__62603 = (i__4731__auto___62602 + (1));
i__4731__auto___62602 = G__62603;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60266 = conformed_args__57216__auto__;
var map__60266__$1 = (((((!((map__60266 == null))))?(((((map__60266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60266):map__60266);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq60264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60264));
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
var len__4730__auto___62608 = arguments.length;
var i__4731__auto___62609 = (0);
while(true){
if((i__4731__auto___62609 < len__4730__auto___62608)){
args__4736__auto__.push((arguments[i__4731__auto___62609]));

var G__62610 = (i__4731__auto___62609 + (1));
i__4731__auto___62609 = G__62610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60274 = conformed_args__57216__auto__;
var map__60274__$1 = (((((!((map__60274 == null))))?(((((map__60274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60274):map__60274);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq60270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60270));
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
var len__4730__auto___62611 = arguments.length;
var i__4731__auto___62612 = (0);
while(true){
if((i__4731__auto___62612 < len__4730__auto___62611)){
args__4736__auto__.push((arguments[i__4731__auto___62612]));

var G__62613 = (i__4731__auto___62612 + (1));
i__4731__auto___62612 = G__62613;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60287 = conformed_args__57216__auto__;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq60279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60279));
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
var len__4730__auto___62618 = arguments.length;
var i__4731__auto___62619 = (0);
while(true){
if((i__4731__auto___62619 < len__4730__auto___62618)){
args__4736__auto__.push((arguments[i__4731__auto___62619]));

var G__62620 = (i__4731__auto___62619 + (1));
i__4731__auto___62619 = G__62620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60298 = conformed_args__57216__auto__;
var map__60298__$1 = (((((!((map__60298 == null))))?(((((map__60298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60298):map__60298);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq60293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60293));
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
var len__4730__auto___62621 = arguments.length;
var i__4731__auto___62622 = (0);
while(true){
if((i__4731__auto___62622 < len__4730__auto___62621)){
args__4736__auto__.push((arguments[i__4731__auto___62622]));

var G__62623 = (i__4731__auto___62622 + (1));
i__4731__auto___62622 = G__62623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60309 = conformed_args__57216__auto__;
var map__60309__$1 = (((((!((map__60309 == null))))?(((((map__60309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60309):map__60309);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq60304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60304));
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
var len__4730__auto___62627 = arguments.length;
var i__4731__auto___62628 = (0);
while(true){
if((i__4731__auto___62628 < len__4730__auto___62627)){
args__4736__auto__.push((arguments[i__4731__auto___62628]));

var G__62629 = (i__4731__auto___62628 + (1));
i__4731__auto___62628 = G__62629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60316 = conformed_args__57216__auto__;
var map__60316__$1 = (((((!((map__60316 == null))))?(((((map__60316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60316):map__60316);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq60314){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60314));
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
var len__4730__auto___62633 = arguments.length;
var i__4731__auto___62634 = (0);
while(true){
if((i__4731__auto___62634 < len__4730__auto___62633)){
args__4736__auto__.push((arguments[i__4731__auto___62634]));

var G__62635 = (i__4731__auto___62634 + (1));
i__4731__auto___62634 = G__62635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60322 = conformed_args__57216__auto__;
var map__60322__$1 = (((((!((map__60322 == null))))?(((((map__60322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60322):map__60322);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq60321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60321));
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
var len__4730__auto___62637 = arguments.length;
var i__4731__auto___62638 = (0);
while(true){
if((i__4731__auto___62638 < len__4730__auto___62637)){
args__4736__auto__.push((arguments[i__4731__auto___62638]));

var G__62639 = (i__4731__auto___62638 + (1));
i__4731__auto___62638 = G__62639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60331 = conformed_args__57216__auto__;
var map__60331__$1 = (((((!((map__60331 == null))))?(((((map__60331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60331):map__60331);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq60330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60330));
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
var len__4730__auto___62640 = arguments.length;
var i__4731__auto___62641 = (0);
while(true){
if((i__4731__auto___62641 < len__4730__auto___62640)){
args__4736__auto__.push((arguments[i__4731__auto___62641]));

var G__62642 = (i__4731__auto___62641 + (1));
i__4731__auto___62641 = G__62642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60337 = conformed_args__57216__auto__;
var map__60337__$1 = (((((!((map__60337 == null))))?(((((map__60337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60337):map__60337);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq60335){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60335));
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
var len__4730__auto___62643 = arguments.length;
var i__4731__auto___62644 = (0);
while(true){
if((i__4731__auto___62644 < len__4730__auto___62643)){
args__4736__auto__.push((arguments[i__4731__auto___62644]));

var G__62645 = (i__4731__auto___62644 + (1));
i__4731__auto___62644 = G__62645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60344 = conformed_args__57216__auto__;
var map__60344__$1 = (((((!((map__60344 == null))))?(((((map__60344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60344):map__60344);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq60340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60340));
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
var len__4730__auto___62646 = arguments.length;
var i__4731__auto___62647 = (0);
while(true){
if((i__4731__auto___62647 < len__4730__auto___62646)){
args__4736__auto__.push((arguments[i__4731__auto___62647]));

var G__62648 = (i__4731__auto___62647 + (1));
i__4731__auto___62647 = G__62648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60349 = conformed_args__57216__auto__;
var map__60349__$1 = (((((!((map__60349 == null))))?(((((map__60349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60349):map__60349);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq60348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60348));
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
var len__4730__auto___62650 = arguments.length;
var i__4731__auto___62651 = (0);
while(true){
if((i__4731__auto___62651 < len__4730__auto___62650)){
args__4736__auto__.push((arguments[i__4731__auto___62651]));

var G__62652 = (i__4731__auto___62651 + (1));
i__4731__auto___62651 = G__62652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60355 = conformed_args__57216__auto__;
var map__60355__$1 = (((((!((map__60355 == null))))?(((((map__60355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60355):map__60355);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq60351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60351));
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
var len__4730__auto___62655 = arguments.length;
var i__4731__auto___62658 = (0);
while(true){
if((i__4731__auto___62658 < len__4730__auto___62655)){
args__4736__auto__.push((arguments[i__4731__auto___62658]));

var G__62659 = (i__4731__auto___62658 + (1));
i__4731__auto___62658 = G__62659;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60366 = conformed_args__57216__auto__;
var map__60366__$1 = (((((!((map__60366 == null))))?(((((map__60366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60366):map__60366);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq60362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60362));
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
var len__4730__auto___62661 = arguments.length;
var i__4731__auto___62662 = (0);
while(true){
if((i__4731__auto___62662 < len__4730__auto___62661)){
args__4736__auto__.push((arguments[i__4731__auto___62662]));

var G__62663 = (i__4731__auto___62662 + (1));
i__4731__auto___62662 = G__62663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60371 = conformed_args__57216__auto__;
var map__60371__$1 = (((((!((map__60371 == null))))?(((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60371):map__60371);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq60369){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60369));
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
var len__4730__auto___62677 = arguments.length;
var i__4731__auto___62678 = (0);
while(true){
if((i__4731__auto___62678 < len__4730__auto___62677)){
args__4736__auto__.push((arguments[i__4731__auto___62678]));

var G__62680 = (i__4731__auto___62678 + (1));
i__4731__auto___62678 = G__62680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60381 = conformed_args__57216__auto__;
var map__60381__$1 = (((((!((map__60381 == null))))?(((((map__60381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60381):map__60381);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq60379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60379));
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
var len__4730__auto___62682 = arguments.length;
var i__4731__auto___62683 = (0);
while(true){
if((i__4731__auto___62683 < len__4730__auto___62682)){
args__4736__auto__.push((arguments[i__4731__auto___62683]));

var G__62684 = (i__4731__auto___62683 + (1));
i__4731__auto___62683 = G__62684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60388 = conformed_args__57216__auto__;
var map__60388__$1 = (((((!((map__60388 == null))))?(((((map__60388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60388):map__60388);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq60386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60386));
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
var len__4730__auto___62686 = arguments.length;
var i__4731__auto___62687 = (0);
while(true){
if((i__4731__auto___62687 < len__4730__auto___62686)){
args__4736__auto__.push((arguments[i__4731__auto___62687]));

var G__62688 = (i__4731__auto___62687 + (1));
i__4731__auto___62687 = G__62688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60407 = conformed_args__57216__auto__;
var map__60407__$1 = (((((!((map__60407 == null))))?(((((map__60407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60407):map__60407);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq60393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60393));
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
var len__4730__auto___62689 = arguments.length;
var i__4731__auto___62690 = (0);
while(true){
if((i__4731__auto___62690 < len__4730__auto___62689)){
args__4736__auto__.push((arguments[i__4731__auto___62690]));

var G__62691 = (i__4731__auto___62690 + (1));
i__4731__auto___62690 = G__62691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60414 = conformed_args__57216__auto__;
var map__60414__$1 = (((((!((map__60414 == null))))?(((((map__60414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60414):map__60414);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq60412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60412));
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
var len__4730__auto___62692 = arguments.length;
var i__4731__auto___62693 = (0);
while(true){
if((i__4731__auto___62693 < len__4730__auto___62692)){
args__4736__auto__.push((arguments[i__4731__auto___62693]));

var G__62694 = (i__4731__auto___62693 + (1));
i__4731__auto___62693 = G__62694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60420 = conformed_args__57216__auto__;
var map__60420__$1 = (((((!((map__60420 == null))))?(((((map__60420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60420):map__60420);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq60418){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60418));
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
var len__4730__auto___62695 = arguments.length;
var i__4731__auto___62696 = (0);
while(true){
if((i__4731__auto___62696 < len__4730__auto___62695)){
args__4736__auto__.push((arguments[i__4731__auto___62696]));

var G__62697 = (i__4731__auto___62696 + (1));
i__4731__auto___62696 = G__62697;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60428 = conformed_args__57216__auto__;
var map__60428__$1 = (((((!((map__60428 == null))))?(((((map__60428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60428):map__60428);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq60424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60424));
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
var len__4730__auto___62698 = arguments.length;
var i__4731__auto___62699 = (0);
while(true){
if((i__4731__auto___62699 < len__4730__auto___62698)){
args__4736__auto__.push((arguments[i__4731__auto___62699]));

var G__62700 = (i__4731__auto___62699 + (1));
i__4731__auto___62699 = G__62700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60434 = conformed_args__57216__auto__;
var map__60434__$1 = (((((!((map__60434 == null))))?(((((map__60434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60434):map__60434);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq60431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60431));
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
var len__4730__auto___62704 = arguments.length;
var i__4731__auto___62705 = (0);
while(true){
if((i__4731__auto___62705 < len__4730__auto___62704)){
args__4736__auto__.push((arguments[i__4731__auto___62705]));

var G__62706 = (i__4731__auto___62705 + (1));
i__4731__auto___62705 = G__62706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60440 = conformed_args__57216__auto__;
var map__60440__$1 = (((((!((map__60440 == null))))?(((((map__60440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60440):map__60440);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq60438){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60438));
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
var len__4730__auto___62708 = arguments.length;
var i__4731__auto___62709 = (0);
while(true){
if((i__4731__auto___62709 < len__4730__auto___62708)){
args__4736__auto__.push((arguments[i__4731__auto___62709]));

var G__62710 = (i__4731__auto___62709 + (1));
i__4731__auto___62709 = G__62710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60448 = conformed_args__57216__auto__;
var map__60448__$1 = (((((!((map__60448 == null))))?(((((map__60448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60448):map__60448);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq60446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60446));
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
var len__4730__auto___62715 = arguments.length;
var i__4731__auto___62716 = (0);
while(true){
if((i__4731__auto___62716 < len__4730__auto___62715)){
args__4736__auto__.push((arguments[i__4731__auto___62716]));

var G__62717 = (i__4731__auto___62716 + (1));
i__4731__auto___62716 = G__62717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60454 = conformed_args__57216__auto__;
var map__60454__$1 = (((((!((map__60454 == null))))?(((((map__60454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60454):map__60454);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq60452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60452));
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
var len__4730__auto___62719 = arguments.length;
var i__4731__auto___62720 = (0);
while(true){
if((i__4731__auto___62720 < len__4730__auto___62719)){
args__4736__auto__.push((arguments[i__4731__auto___62720]));

var G__62721 = (i__4731__auto___62720 + (1));
i__4731__auto___62720 = G__62721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60461 = conformed_args__57216__auto__;
var map__60461__$1 = (((((!((map__60461 == null))))?(((((map__60461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60461):map__60461);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq60459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60459));
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
var len__4730__auto___62726 = arguments.length;
var i__4731__auto___62727 = (0);
while(true){
if((i__4731__auto___62727 < len__4730__auto___62726)){
args__4736__auto__.push((arguments[i__4731__auto___62727]));

var G__62728 = (i__4731__auto___62727 + (1));
i__4731__auto___62727 = G__62728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60468 = conformed_args__57216__auto__;
var map__60468__$1 = (((((!((map__60468 == null))))?(((((map__60468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60468):map__60468);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq60466){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60466));
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
var len__4730__auto___62730 = arguments.length;
var i__4731__auto___62731 = (0);
while(true){
if((i__4731__auto___62731 < len__4730__auto___62730)){
args__4736__auto__.push((arguments[i__4731__auto___62731]));

var G__62732 = (i__4731__auto___62731 + (1));
i__4731__auto___62731 = G__62732;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60475 = conformed_args__57216__auto__;
var map__60475__$1 = (((((!((map__60475 == null))))?(((((map__60475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60475):map__60475);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq60472){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60472));
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
var len__4730__auto___62733 = arguments.length;
var i__4731__auto___62734 = (0);
while(true){
if((i__4731__auto___62734 < len__4730__auto___62733)){
args__4736__auto__.push((arguments[i__4731__auto___62734]));

var G__62735 = (i__4731__auto___62734 + (1));
i__4731__auto___62734 = G__62735;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60480 = conformed_args__57216__auto__;
var map__60480__$1 = (((((!((map__60480 == null))))?(((((map__60480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60480):map__60480);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq60479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60479));
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
var len__4730__auto___62738 = arguments.length;
var i__4731__auto___62739 = (0);
while(true){
if((i__4731__auto___62739 < len__4730__auto___62738)){
args__4736__auto__.push((arguments[i__4731__auto___62739]));

var G__62741 = (i__4731__auto___62739 + (1));
i__4731__auto___62739 = G__62741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60483 = conformed_args__57216__auto__;
var map__60483__$1 = (((((!((map__60483 == null))))?(((((map__60483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60483):map__60483);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq60482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60482));
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
var len__4730__auto___62744 = arguments.length;
var i__4731__auto___62745 = (0);
while(true){
if((i__4731__auto___62745 < len__4730__auto___62744)){
args__4736__auto__.push((arguments[i__4731__auto___62745]));

var G__62746 = (i__4731__auto___62745 + (1));
i__4731__auto___62745 = G__62746;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60486 = conformed_args__57216__auto__;
var map__60486__$1 = (((((!((map__60486 == null))))?(((((map__60486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60486):map__60486);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq60485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60485));
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
var len__4730__auto___62753 = arguments.length;
var i__4731__auto___62754 = (0);
while(true){
if((i__4731__auto___62754 < len__4730__auto___62753)){
args__4736__auto__.push((arguments[i__4731__auto___62754]));

var G__62755 = (i__4731__auto___62754 + (1));
i__4731__auto___62754 = G__62755;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60489 = conformed_args__57216__auto__;
var map__60489__$1 = (((((!((map__60489 == null))))?(((((map__60489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60489):map__60489);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq60488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60488));
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
var len__4730__auto___62766 = arguments.length;
var i__4731__auto___62767 = (0);
while(true){
if((i__4731__auto___62767 < len__4730__auto___62766)){
args__4736__auto__.push((arguments[i__4731__auto___62767]));

var G__62770 = (i__4731__auto___62767 + (1));
i__4731__auto___62767 = G__62770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60492 = conformed_args__57216__auto__;
var map__60492__$1 = (((((!((map__60492 == null))))?(((((map__60492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60492):map__60492);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq60491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60491));
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
var len__4730__auto___62771 = arguments.length;
var i__4731__auto___62772 = (0);
while(true){
if((i__4731__auto___62772 < len__4730__auto___62771)){
args__4736__auto__.push((arguments[i__4731__auto___62772]));

var G__62773 = (i__4731__auto___62772 + (1));
i__4731__auto___62772 = G__62773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60495 = conformed_args__57216__auto__;
var map__60495__$1 = (((((!((map__60495 == null))))?(((((map__60495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60495):map__60495);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq60494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60494));
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
var len__4730__auto___62777 = arguments.length;
var i__4731__auto___62778 = (0);
while(true){
if((i__4731__auto___62778 < len__4730__auto___62777)){
args__4736__auto__.push((arguments[i__4731__auto___62778]));

var G__62779 = (i__4731__auto___62778 + (1));
i__4731__auto___62778 = G__62779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60527 = conformed_args__57216__auto__;
var map__60527__$1 = (((((!((map__60527 == null))))?(((((map__60527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60527):map__60527);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq60509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60509));
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
var len__4730__auto___62783 = arguments.length;
var i__4731__auto___62784 = (0);
while(true){
if((i__4731__auto___62784 < len__4730__auto___62783)){
args__4736__auto__.push((arguments[i__4731__auto___62784]));

var G__62785 = (i__4731__auto___62784 + (1));
i__4731__auto___62784 = G__62785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60561 = conformed_args__57216__auto__;
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq60551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60551));
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
var len__4730__auto___62789 = arguments.length;
var i__4731__auto___62790 = (0);
while(true){
if((i__4731__auto___62790 < len__4730__auto___62789)){
args__4736__auto__.push((arguments[i__4731__auto___62790]));

var G__62791 = (i__4731__auto___62790 + (1));
i__4731__auto___62790 = G__62791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60577 = conformed_args__57216__auto__;
var map__60577__$1 = (((((!((map__60577 == null))))?(((((map__60577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60577):map__60577);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq60572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60572));
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
var len__4730__auto___62795 = arguments.length;
var i__4731__auto___62796 = (0);
while(true){
if((i__4731__auto___62796 < len__4730__auto___62795)){
args__4736__auto__.push((arguments[i__4731__auto___62796]));

var G__62798 = (i__4731__auto___62796 + (1));
i__4731__auto___62796 = G__62798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60590 = conformed_args__57216__auto__;
var map__60590__$1 = (((((!((map__60590 == null))))?(((((map__60590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60590):map__60590);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq60584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60584));
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
var len__4730__auto___62800 = arguments.length;
var i__4731__auto___62801 = (0);
while(true){
if((i__4731__auto___62801 < len__4730__auto___62800)){
args__4736__auto__.push((arguments[i__4731__auto___62801]));

var G__62802 = (i__4731__auto___62801 + (1));
i__4731__auto___62801 = G__62802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60607 = conformed_args__57216__auto__;
var map__60607__$1 = (((((!((map__60607 == null))))?(((((map__60607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60607):map__60607);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq60597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60597));
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
var len__4730__auto___62805 = arguments.length;
var i__4731__auto___62806 = (0);
while(true){
if((i__4731__auto___62806 < len__4730__auto___62805)){
args__4736__auto__.push((arguments[i__4731__auto___62806]));

var G__62807 = (i__4731__auto___62806 + (1));
i__4731__auto___62806 = G__62807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60643 = conformed_args__57216__auto__;
var map__60643__$1 = (((((!((map__60643 == null))))?(((((map__60643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60643):map__60643);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq60634){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60634));
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
var len__4730__auto___62810 = arguments.length;
var i__4731__auto___62811 = (0);
while(true){
if((i__4731__auto___62811 < len__4730__auto___62810)){
args__4736__auto__.push((arguments[i__4731__auto___62811]));

var G__62812 = (i__4731__auto___62811 + (1));
i__4731__auto___62811 = G__62812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60671 = conformed_args__57216__auto__;
var map__60671__$1 = (((((!((map__60671 == null))))?(((((map__60671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60671):map__60671);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq60666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60666));
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
var len__4730__auto___62815 = arguments.length;
var i__4731__auto___62816 = (0);
while(true){
if((i__4731__auto___62816 < len__4730__auto___62815)){
args__4736__auto__.push((arguments[i__4731__auto___62816]));

var G__62817 = (i__4731__auto___62816 + (1));
i__4731__auto___62816 = G__62817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60680 = conformed_args__57216__auto__;
var map__60680__$1 = (((((!((map__60680 == null))))?(((((map__60680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60680):map__60680);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq60677){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60677));
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
var len__4730__auto___62821 = arguments.length;
var i__4731__auto___62822 = (0);
while(true){
if((i__4731__auto___62822 < len__4730__auto___62821)){
args__4736__auto__.push((arguments[i__4731__auto___62822]));

var G__62823 = (i__4731__auto___62822 + (1));
i__4731__auto___62822 = G__62823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60715 = conformed_args__57216__auto__;
var map__60715__$1 = (((((!((map__60715 == null))))?(((((map__60715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60715):map__60715);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq60701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60701));
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
var len__4730__auto___62824 = arguments.length;
var i__4731__auto___62825 = (0);
while(true){
if((i__4731__auto___62825 < len__4730__auto___62824)){
args__4736__auto__.push((arguments[i__4731__auto___62825]));

var G__62826 = (i__4731__auto___62825 + (1));
i__4731__auto___62825 = G__62826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60733 = conformed_args__57216__auto__;
var map__60733__$1 = (((((!((map__60733 == null))))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60733):map__60733);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq60724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60724));
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
var len__4730__auto___62831 = arguments.length;
var i__4731__auto___62832 = (0);
while(true){
if((i__4731__auto___62832 < len__4730__auto___62831)){
args__4736__auto__.push((arguments[i__4731__auto___62832]));

var G__62833 = (i__4731__auto___62832 + (1));
i__4731__auto___62832 = G__62833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60759 = conformed_args__57216__auto__;
var map__60759__$1 = (((((!((map__60759 == null))))?(((((map__60759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60759):map__60759);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq60748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60748));
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
var len__4730__auto___62836 = arguments.length;
var i__4731__auto___62837 = (0);
while(true){
if((i__4731__auto___62837 < len__4730__auto___62836)){
args__4736__auto__.push((arguments[i__4731__auto___62837]));

var G__62838 = (i__4731__auto___62837 + (1));
i__4731__auto___62837 = G__62838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60777 = conformed_args__57216__auto__;
var map__60777__$1 = (((((!((map__60777 == null))))?(((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60777):map__60777);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq60772){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60772));
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
var len__4730__auto___62839 = arguments.length;
var i__4731__auto___62840 = (0);
while(true){
if((i__4731__auto___62840 < len__4730__auto___62839)){
args__4736__auto__.push((arguments[i__4731__auto___62840]));

var G__62841 = (i__4731__auto___62840 + (1));
i__4731__auto___62840 = G__62841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60793 = conformed_args__57216__auto__;
var map__60793__$1 = (((((!((map__60793 == null))))?(((((map__60793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60793):map__60793);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq60786){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60786));
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
var len__4730__auto___62842 = arguments.length;
var i__4731__auto___62844 = (0);
while(true){
if((i__4731__auto___62844 < len__4730__auto___62842)){
args__4736__auto__.push((arguments[i__4731__auto___62844]));

var G__62845 = (i__4731__auto___62844 + (1));
i__4731__auto___62844 = G__62845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60823 = conformed_args__57216__auto__;
var map__60823__$1 = (((((!((map__60823 == null))))?(((((map__60823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60823):map__60823);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq60808){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60808));
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
var len__4730__auto___62846 = arguments.length;
var i__4731__auto___62847 = (0);
while(true){
if((i__4731__auto___62847 < len__4730__auto___62846)){
args__4736__auto__.push((arguments[i__4731__auto___62847]));

var G__62848 = (i__4731__auto___62847 + (1));
i__4731__auto___62847 = G__62848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60851 = conformed_args__57216__auto__;
var map__60851__$1 = (((((!((map__60851 == null))))?(((((map__60851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60851):map__60851);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq60835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60835));
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
var len__4730__auto___62849 = arguments.length;
var i__4731__auto___62850 = (0);
while(true){
if((i__4731__auto___62850 < len__4730__auto___62849)){
args__4736__auto__.push((arguments[i__4731__auto___62850]));

var G__62851 = (i__4731__auto___62850 + (1));
i__4731__auto___62850 = G__62851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60881 = conformed_args__57216__auto__;
var map__60881__$1 = (((((!((map__60881 == null))))?(((((map__60881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60881):map__60881);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq60866){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60866));
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
var len__4730__auto___62852 = arguments.length;
var i__4731__auto___62853 = (0);
while(true){
if((i__4731__auto___62853 < len__4730__auto___62852)){
args__4736__auto__.push((arguments[i__4731__auto___62853]));

var G__62854 = (i__4731__auto___62853 + (1));
i__4731__auto___62853 = G__62854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60901 = conformed_args__57216__auto__;
var map__60901__$1 = (((((!((map__60901 == null))))?(((((map__60901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60901):map__60901);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq60889){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60889));
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
var len__4730__auto___62856 = arguments.length;
var i__4731__auto___62857 = (0);
while(true){
if((i__4731__auto___62857 < len__4730__auto___62856)){
args__4736__auto__.push((arguments[i__4731__auto___62857]));

var G__62858 = (i__4731__auto___62857 + (1));
i__4731__auto___62857 = G__62858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60925 = conformed_args__57216__auto__;
var map__60925__$1 = (((((!((map__60925 == null))))?(((((map__60925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60925):map__60925);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq60916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60916));
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
var len__4730__auto___62859 = arguments.length;
var i__4731__auto___62860 = (0);
while(true){
if((i__4731__auto___62860 < len__4730__auto___62859)){
args__4736__auto__.push((arguments[i__4731__auto___62860]));

var G__62861 = (i__4731__auto___62860 + (1));
i__4731__auto___62860 = G__62861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60940 = conformed_args__57216__auto__;
var map__60940__$1 = (((((!((map__60940 == null))))?(((((map__60940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60940):map__60940);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq60933){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60933));
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
var len__4730__auto___62862 = arguments.length;
var i__4731__auto___62863 = (0);
while(true){
if((i__4731__auto___62863 < len__4730__auto___62862)){
args__4736__auto__.push((arguments[i__4731__auto___62863]));

var G__62864 = (i__4731__auto___62863 + (1));
i__4731__auto___62863 = G__62864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60960 = conformed_args__57216__auto__;
var map__60960__$1 = (((((!((map__60960 == null))))?(((((map__60960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60960):map__60960);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq60951){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60951));
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
var len__4730__auto___62865 = arguments.length;
var i__4731__auto___62866 = (0);
while(true){
if((i__4731__auto___62866 < len__4730__auto___62865)){
args__4736__auto__.push((arguments[i__4731__auto___62866]));

var G__62867 = (i__4731__auto___62866 + (1));
i__4731__auto___62866 = G__62867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60988 = conformed_args__57216__auto__;
var map__60988__$1 = (((((!((map__60988 == null))))?(((((map__60988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60988):map__60988);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq60973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60973));
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
var len__4730__auto___62868 = arguments.length;
var i__4731__auto___62869 = (0);
while(true){
if((i__4731__auto___62869 < len__4730__auto___62868)){
args__4736__auto__.push((arguments[i__4731__auto___62869]));

var G__62870 = (i__4731__auto___62869 + (1));
i__4731__auto___62869 = G__62870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61017 = conformed_args__57216__auto__;
var map__61017__$1 = (((((!((map__61017 == null))))?(((((map__61017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61017):map__61017);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq61014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61014));
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
var len__4730__auto___62872 = arguments.length;
var i__4731__auto___62873 = (0);
while(true){
if((i__4731__auto___62873 < len__4730__auto___62872)){
args__4736__auto__.push((arguments[i__4731__auto___62873]));

var G__62874 = (i__4731__auto___62873 + (1));
i__4731__auto___62873 = G__62874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61052 = conformed_args__57216__auto__;
var map__61052__$1 = (((((!((map__61052 == null))))?(((((map__61052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61052):map__61052);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq61041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61041));
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
var len__4730__auto___62875 = arguments.length;
var i__4731__auto___62876 = (0);
while(true){
if((i__4731__auto___62876 < len__4730__auto___62875)){
args__4736__auto__.push((arguments[i__4731__auto___62876]));

var G__62877 = (i__4731__auto___62876 + (1));
i__4731__auto___62876 = G__62877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61073 = conformed_args__57216__auto__;
var map__61073__$1 = (((((!((map__61073 == null))))?(((((map__61073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61073):map__61073);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq61069){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61069));
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
var len__4730__auto___62878 = arguments.length;
var i__4731__auto___62879 = (0);
while(true){
if((i__4731__auto___62879 < len__4730__auto___62878)){
args__4736__auto__.push((arguments[i__4731__auto___62879]));

var G__62880 = (i__4731__auto___62879 + (1));
i__4731__auto___62879 = G__62880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61083 = conformed_args__57216__auto__;
var map__61083__$1 = (((((!((map__61083 == null))))?(((((map__61083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61083):map__61083);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq61081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61081));
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
var len__4730__auto___62881 = arguments.length;
var i__4731__auto___62882 = (0);
while(true){
if((i__4731__auto___62882 < len__4730__auto___62881)){
args__4736__auto__.push((arguments[i__4731__auto___62882]));

var G__62883 = (i__4731__auto___62882 + (1));
i__4731__auto___62882 = G__62883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61098 = conformed_args__57216__auto__;
var map__61098__$1 = (((((!((map__61098 == null))))?(((((map__61098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61098):map__61098);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq61095){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61095));
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
var len__4730__auto___62884 = arguments.length;
var i__4731__auto___62885 = (0);
while(true){
if((i__4731__auto___62885 < len__4730__auto___62884)){
args__4736__auto__.push((arguments[i__4731__auto___62885]));

var G__62886 = (i__4731__auto___62885 + (1));
i__4731__auto___62885 = G__62886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61137 = conformed_args__57216__auto__;
var map__61137__$1 = (((((!((map__61137 == null))))?(((((map__61137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61137):map__61137);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq61117){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61117));
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
var len__4730__auto___62888 = arguments.length;
var i__4731__auto___62889 = (0);
while(true){
if((i__4731__auto___62889 < len__4730__auto___62888)){
args__4736__auto__.push((arguments[i__4731__auto___62889]));

var G__62890 = (i__4731__auto___62889 + (1));
i__4731__auto___62889 = G__62890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61160 = conformed_args__57216__auto__;
var map__61160__$1 = (((((!((map__61160 == null))))?(((((map__61160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61160):map__61160);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq61155){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61155));
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
var len__4730__auto___62893 = arguments.length;
var i__4731__auto___62894 = (0);
while(true){
if((i__4731__auto___62894 < len__4730__auto___62893)){
args__4736__auto__.push((arguments[i__4731__auto___62894]));

var G__62895 = (i__4731__auto___62894 + (1));
i__4731__auto___62894 = G__62895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61174 = conformed_args__57216__auto__;
var map__61174__$1 = (((((!((map__61174 == null))))?(((((map__61174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61174):map__61174);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq61165){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61165));
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
var len__4730__auto___62896 = arguments.length;
var i__4731__auto___62897 = (0);
while(true){
if((i__4731__auto___62897 < len__4730__auto___62896)){
args__4736__auto__.push((arguments[i__4731__auto___62897]));

var G__62898 = (i__4731__auto___62897 + (1));
i__4731__auto___62897 = G__62898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61201 = conformed_args__57216__auto__;
var map__61201__$1 = (((((!((map__61201 == null))))?(((((map__61201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61201):map__61201);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq61193){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61193));
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
var len__4730__auto___62900 = arguments.length;
var i__4731__auto___62901 = (0);
while(true){
if((i__4731__auto___62901 < len__4730__auto___62900)){
args__4736__auto__.push((arguments[i__4731__auto___62901]));

var G__62902 = (i__4731__auto___62901 + (1));
i__4731__auto___62901 = G__62902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61217 = conformed_args__57216__auto__;
var map__61217__$1 = (((((!((map__61217 == null))))?(((((map__61217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61217):map__61217);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq61211){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61211));
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
var len__4730__auto___62903 = arguments.length;
var i__4731__auto___62904 = (0);
while(true){
if((i__4731__auto___62904 < len__4730__auto___62903)){
args__4736__auto__.push((arguments[i__4731__auto___62904]));

var G__62905 = (i__4731__auto___62904 + (1));
i__4731__auto___62904 = G__62905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61226 = conformed_args__57216__auto__;
var map__61226__$1 = (((((!((map__61226 == null))))?(((((map__61226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61226):map__61226);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq61221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61221));
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
var len__4730__auto___62906 = arguments.length;
var i__4731__auto___62907 = (0);
while(true){
if((i__4731__auto___62907 < len__4730__auto___62906)){
args__4736__auto__.push((arguments[i__4731__auto___62907]));

var G__62908 = (i__4731__auto___62907 + (1));
i__4731__auto___62907 = G__62908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61246 = conformed_args__57216__auto__;
var map__61246__$1 = (((((!((map__61246 == null))))?(((((map__61246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61246):map__61246);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq61239){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61239));
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
var len__4730__auto___62909 = arguments.length;
var i__4731__auto___62910 = (0);
while(true){
if((i__4731__auto___62910 < len__4730__auto___62909)){
args__4736__auto__.push((arguments[i__4731__auto___62910]));

var G__62911 = (i__4731__auto___62910 + (1));
i__4731__auto___62910 = G__62911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61268 = conformed_args__57216__auto__;
var map__61268__$1 = (((((!((map__61268 == null))))?(((((map__61268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61268):map__61268);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq61260){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61260));
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
var len__4730__auto___62918 = arguments.length;
var i__4731__auto___62919 = (0);
while(true){
if((i__4731__auto___62919 < len__4730__auto___62918)){
args__4736__auto__.push((arguments[i__4731__auto___62919]));

var G__62920 = (i__4731__auto___62919 + (1));
i__4731__auto___62919 = G__62920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61279 = conformed_args__57216__auto__;
var map__61279__$1 = (((((!((map__61279 == null))))?(((((map__61279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61279):map__61279);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq61274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61274));
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
var len__4730__auto___62921 = arguments.length;
var i__4731__auto___62922 = (0);
while(true){
if((i__4731__auto___62922 < len__4730__auto___62921)){
args__4736__auto__.push((arguments[i__4731__auto___62922]));

var G__62923 = (i__4731__auto___62922 + (1));
i__4731__auto___62922 = G__62923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61289 = conformed_args__57216__auto__;
var map__61289__$1 = (((((!((map__61289 == null))))?(((((map__61289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61289):map__61289);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq61285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61285));
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
var len__4730__auto___62924 = arguments.length;
var i__4731__auto___62925 = (0);
while(true){
if((i__4731__auto___62925 < len__4730__auto___62924)){
args__4736__auto__.push((arguments[i__4731__auto___62925]));

var G__62926 = (i__4731__auto___62925 + (1));
i__4731__auto___62925 = G__62926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61309 = conformed_args__57216__auto__;
var map__61309__$1 = (((((!((map__61309 == null))))?(((((map__61309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61309):map__61309);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq61301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61301));
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
var len__4730__auto___62927 = arguments.length;
var i__4731__auto___62928 = (0);
while(true){
if((i__4731__auto___62928 < len__4730__auto___62927)){
args__4736__auto__.push((arguments[i__4731__auto___62928]));

var G__62929 = (i__4731__auto___62928 + (1));
i__4731__auto___62928 = G__62929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61340 = conformed_args__57216__auto__;
var map__61340__$1 = (((((!((map__61340 == null))))?(((((map__61340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61340):map__61340);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq61330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61330));
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
var len__4730__auto___62930 = arguments.length;
var i__4731__auto___62931 = (0);
while(true){
if((i__4731__auto___62931 < len__4730__auto___62930)){
args__4736__auto__.push((arguments[i__4731__auto___62931]));

var G__62933 = (i__4731__auto___62931 + (1));
i__4731__auto___62931 = G__62933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61375 = conformed_args__57216__auto__;
var map__61375__$1 = (((((!((map__61375 == null))))?(((((map__61375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61375):map__61375);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq61371){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61371));
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
var len__4730__auto___62935 = arguments.length;
var i__4731__auto___62936 = (0);
while(true){
if((i__4731__auto___62936 < len__4730__auto___62935)){
args__4736__auto__.push((arguments[i__4731__auto___62936]));

var G__62937 = (i__4731__auto___62936 + (1));
i__4731__auto___62936 = G__62937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61404 = conformed_args__57216__auto__;
var map__61404__$1 = (((((!((map__61404 == null))))?(((((map__61404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61404):map__61404);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq61391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61391));
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
var len__4730__auto___62938 = arguments.length;
var i__4731__auto___62939 = (0);
while(true){
if((i__4731__auto___62939 < len__4730__auto___62938)){
args__4736__auto__.push((arguments[i__4731__auto___62939]));

var G__62940 = (i__4731__auto___62939 + (1));
i__4731__auto___62939 = G__62940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57216__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61422 = conformed_args__57216__auto__;
var map__61422__$1 = (((((!((map__61422 == null))))?(((((map__61422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61422):map__61422);
var attrs__57217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57218__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__57218__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57218__auto__);
var attrs_value__57220__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__57217__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57220__auto__], null),children__57218__auto____$1),css__57219__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq61414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61414));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
