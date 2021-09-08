goog.provide('com.fulcrologic.fulcro.algorithms.react_interop');
/**
 * Returns a factory for raw JS React classes.
 * 
 *   ```
 *   (def ui-thing (react-factory SomeReactLibComponent))
 * 
 *   ...
 *   (defsc X [_ _]
 *  (ui-thing {:value 1}))
 *   ```
 * 
 *   The returned function will accept CLJS maps as props (not optional) and then any number of children. The CLJS props
 *   will be converted to js for interop. You may pass js props as an optimization.
 */
com.fulcrologic.fulcro.algorithms.react_interop.react_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$react_factory(js_component_class){
return (function() { 
var G__62078__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.dom.create_element,js_component_class,com.fulcrologic.fulcro.dom.convert_props(props),children);
};
var G__62078 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62079__i = 0, G__62079__a = new Array(arguments.length -  1);
while (G__62079__i < G__62079__a.length) {G__62079__a[G__62079__i] = arguments[G__62079__i + 1]; ++G__62079__i;}
  children = new cljs.core.IndexedSeq(G__62079__a,0,null);
} 
return G__62078__delegate.call(this,props,children);};
G__62078.cljs$lang$maxFixedArity = 1;
G__62078.cljs$lang$applyTo = (function (arglist__62080){
var props = cljs.core.first(arglist__62080);
var children = cljs.core.rest(arglist__62080);
return G__62078__delegate(props,children);
});
G__62078.cljs$core$IFn$_invoke$arity$variadic = G__62078__delegate;
return G__62078;
})()
;
});
/**
 * Returns a factory for raw JS React class that acts like an input. Use this on custom raw React controls are
 *   controlled via :value to make them behave properly with Fulcro.
 * 
 *   ```
 *   (def ui-thing (react-input-factory SomeInputComponent))
 * 
 *   ...
 *   (defsc X [_ _]
 *  (ui-thing {:value 1}))
 *   ```
 * 
 *   The returned function will accept CLJS maps as props (not optional) and then any number of children. The CLJS props
 *   will be converted to js for interop. You may pass js props as an optimization.
 */
com.fulcrologic.fulcro.algorithms.react_interop.react_input_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$react_input_factory(js_component_class){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(js_component_class);
return ((function (factory){
return (function() { 
var G__62081__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__62081 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62082__i = 0, G__62082__a = new Array(arguments.length -  1);
while (G__62082__i < G__62082__a.length) {G__62082__a[G__62082__i] = arguments[G__62082__i + 1]; ++G__62082__i;}
  children = new cljs.core.IndexedSeq(G__62082__a,0,null);
} 
return G__62081__delegate.call(this,props,children);};
G__62081.cljs$lang$maxFixedArity = 1;
G__62081.cljs$lang$applyTo = (function (arglist__62083){
var props = cljs.core.first(arglist__62083);
var children = cljs.core.rest(arglist__62083);
return G__62081__delegate(props,children);
});
G__62081.cljs$core$IFn$_invoke$arity$variadic = G__62081__delegate;
return G__62081;
})()
;
;})(factory))
});
/**
 * Creates a React factory `(fn [parent fulcro-props & children])` for a component that has had an HOC applied,
 *   and passes Fulcro's parent/props through to 'fulcro_hoc$parent' and 'fulcro_hoc_childprops' in the js props.
 * 
 *   See hoc-factory, which is more likely what you want, as it further wraps the parent context for proper interop.
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_wrapper_factory(component_class){
return (function() { 
var G__62085__delegate = function (this$,props,children){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,this$)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The first argument to an HOC factory MUST be the parent component instance. See https://book.fulcrologic.com/#err-interop-1st-arg-not-parent"], null);
}),null)),null,359943100,null);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,component_class,({"fulcro_hoc$parent": this$, "fulcro_hoc$childprops": props}),children);
};
var G__62085 = function (this$,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__62090__i = 0, G__62090__a = new Array(arguments.length -  2);
while (G__62090__i < G__62090__a.length) {G__62090__a[G__62090__i] = arguments[G__62090__i + 2]; ++G__62090__i;}
  children = new cljs.core.IndexedSeq(G__62090__a,0,null);
} 
return G__62085__delegate.call(this,this$,props,children);};
G__62085.cljs$lang$maxFixedArity = 2;
G__62085.cljs$lang$applyTo = (function (arglist__62091){
var this$ = cljs.core.first(arglist__62091);
arglist__62091 = cljs.core.next(arglist__62091);
var props = cljs.core.first(arglist__62091);
var children = cljs.core.rest(arglist__62091);
return G__62085__delegate(this$,props,children);
});
G__62085.cljs$core$IFn$_invoke$arity$variadic = G__62085__delegate;
return G__62085;
})()
;
});
/**
 * Returns a (fn [parent-component props & children] ...) that will render the target-fulcro-class, but as
 *   wrapped by the `hoc` function.
 * 
 *   Use this when you have a JS React pattern that tells you:
 * 
 *   ```
 *   var WrappedComponent = injectCrap(Component);
 *   ```
 * 
 *   where `injectCrap` is the `hoc` parameter to this function.
 * 
 *   Any injected data will appear as `:injected-props` (a js map) in the computed parameter of the target Fulcro component.
 * 
 *   You can this use the function returned from `hoc-factory` as a normal component factory in fulcro.
 *   
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_factory(target_fulcro_class,hoc){
if(com.fulcrologic.fulcro.components.component_class_QMARK_(target_fulcro_class)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,85,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hoc-factory MUST be used with a Fulcro Class. See https://book.fulcrologic.com/#err-interop-not-fulcro-class"], null);
}),null)),null,-1063216294,null);
}

var target_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(target_fulcro_class);
var target_factory_interop = ((function (target_factory){
return (function (js_props){
var parent = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$parent") : com.fulcrologic.fulcro.components.isoget.call(null,js_props,"fulcro_hoc$parent"));
var fulcro_props = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$childprops") : com.fulcrologic.fulcro.components.isoget.call(null,js_props,"fulcro_hoc$childprops"));
var parent__56452__auto__ = parent;
var app__56453__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__56452__auto__);
}
})();
var d__56454__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__56452__auto__) + (1));
}
})();
var s__56455__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__56453__auto__);
var p__56456__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return parent__56452__auto__;
}
})();
var _STAR_app_STAR__orig_val__62065 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__62066 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__62067 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__62068 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__62069 = app__56453__auto__;
var _STAR_depth_STAR__temp_val__62070 = d__56454__auto__;
var _STAR_shared_STAR__temp_val__62071 = s__56455__auto__;
var _STAR_parent_STAR__temp_val__62072 = p__56456__auto__;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__62069;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__62070;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__62071;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__62072;

try{var G__62073 = fulcro_props;
var G__62074 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"injected-props","injected-props",366631973),js_props], null);
return (target_factory.cljs$core$IFn$_invoke$arity$2 ? target_factory.cljs$core$IFn$_invoke$arity$2(G__62073,G__62074) : target_factory.call(null,G__62073,G__62074));
}finally {com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__62068;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__62067;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__62066;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__62065;
}});})(target_factory))
;
var factory = (function (){var WrappedComponent = (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(target_factory_interop) : hoc.call(null,target_factory_interop));
return com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory(WrappedComponent);
})();
return factory;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.react_interop.js.map
