goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');

var options__57867__auto___81861 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(props)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__57867__auto___81861){
return (function app$client$Sample(props__57868__auto__){
var this__57869__auto__ = this;
var temp__5751__auto___81862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__57867__auto___81861,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___81862)){
var init_state__57870__auto___81863 = temp__5751__auto___81862;
this__57869__auto__.state = (function (){var obj81856 = ({"fulcro$state":(function (){var G__81857 = this__57869__auto__;
var G__81858 = goog.object.get(props__57868__auto__,"fulcro$value");
return (init_state__57870__auto___81863.cljs$core$IFn$_invoke$arity$2 ? init_state__57870__auto___81863.cljs$core$IFn$_invoke$arity$2(G__81857,G__81858) : init_state__57870__auto___81863.call(null,G__81857,G__81858));
})()});
return obj81856;
})();
} else {
this__57869__auto__.state = (function (){var obj81860 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj81860;
})();
}

return null;
});})(options__57867__auto___81861))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__57867__auto___81861);
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
app.client.f = (function app$client$f(x){
return (x * x);
});
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
