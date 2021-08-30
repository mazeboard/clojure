goog.provide('com.fulcrologic.fulcro.algorithms.indexing');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('ghostwheel.core');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_query_STAR_(prop__GT_classes,p__63700){
var map__63702 = p__63700;
var map__63702__$1 = (((((!((map__63702 == null))))?(((((map__63702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63702):map__63702);
var ast = map__63702__$1;
var parent_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63702__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var parent_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var parent_key = com.fulcrologic.fulcro.components.class__GT_registry_key(parent_component);
var parent_children__$1 = cljs.core.seq(parent_children);
var update_index = ((function (parent_key,parent_children__$1,map__63702,map__63702__$1,ast,parent_component,parent_children){
return (function (idx,k,c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
});})(parent_key,parent_children__$1,map__63702,map__63702__$1,ast,parent_component,parent_children))
;
if(parent_children__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parent_key,parent_children__$1,update_index,map__63702,map__63702__$1,ast,parent_component,parent_children){
return (function (idx,p__63706){
var map__63707 = p__63706;
var map__63707__$1 = (((((!((map__63707 == null))))?(((((map__63707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63707):map__63707);
var child_ast = map__63707__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63707__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63707__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__63712 = idx;
var G__63712__$1 = ((((cljs.core.vector_QMARK_(key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))))?update_index(G__63712,dispatch_key,parent_key):G__63712);
var G__63712__$2 = ((((cljs.core.vector_QMARK_(key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))))?update_index(G__63712__$1,key,parent_key):G__63712__$1);
var G__63712__$3 = (((key instanceof cljs.core.Keyword))?update_index(G__63712__$2,key,parent_key):G__63712__$2);
if(cljs.core.seq(children)){
return (com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.cljs$core$IFn$_invoke$arity$2(G__63712__$3,child_ast) : com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.call(null,G__63712__$3,child_ast));
} else {
return G__63712__$3;
}
});})(parent_key,parent_children__$1,update_index,map__63702,map__63702__$1,ast,parent_component,parent_children))
,prop__GT_classes,parent_children__$1);
} else {
return prop__GT_classes;
}
});
/**
 * Create an index of the given component-annotated query. Returns a map from query keyword to the component
 *   class(es) that query for that keyword.
 */
com.fulcrologic.fulcro.algorithms.indexing.index_query = (function com$fulcrologic$fulcro$algorithms$indexing$index_query(query){
var ast = edn_query_language.core.query__GT_ast(query);
return com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_(cljs.core.PersistentArrayMap.EMPTY,ast);
});
/**
 * Return a set of keywords that are in the top-level of the given AST
 */
com.fulcrologic.fulcro.algorithms.indexing.top_level_keys = (function com$fulcrologic$fulcro$algorithms$indexing$top_level_keys(ast){
var map__63718 = ast;
var map__63718__$1 = (((((!((map__63718 == null))))?(((((map__63718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63718):map__63718);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_)),children);
});
/**
 * Returns a set of all of the keys that appear in link refs `[:k '_]` in the entire ast.
 */
com.fulcrologic.fulcro.algorithms.indexing.link_query_props = (function com$fulcrologic$fulcro$algorithms$indexing$link_query_props(p__63724){
var map__63725 = p__63724;
var map__63725__$1 = (((((!((map__63725 == null))))?(((((map__63725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63725):map__63725);
var ast = map__63725__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63725__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_(key)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(key)]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.indexing.link_query_props,children));
} else {
if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.indexing.link_query_props,children));
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
});
/**
 * Index the root query (see index-query) and side-effect the result (`prop->classes`) into the given app.
 *   This function assumes the `root-class` has already been supplied to the app (i.e. is has been mounted).
 */
com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_root_BANG_(app__$1){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.indexing",null,57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(Re)indexing application query for prop->classes"], null);
}),null)),null,975419981);

var map__63731 = app__$1;
var map__63731__$1 = (((((!((map__63731 == null))))?(((((map__63731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63731):map__63731);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63731__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63731__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63732 = cljs.core.deref(runtime_atom);
var map__63732__$1 = (((((!((map__63732 == null))))?(((((map__63732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63732):map__63732);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63732__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var state_map = cljs.core.deref(state_atom);
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var prop__GT_classes = com.fulcrologic.fulcro.algorithms.indexing.index_query(root_query);
var idents_in_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.ident_QMARK_),cljs.core.keys(prop__GT_classes));
var root_props = com.fulcrologic.fulcro.algorithms.indexing.top_level_keys(ast);
var linked_props = com.fulcrologic.fulcro.algorithms.indexing.link_query_props(ast);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (map__63731,map__63731__$1,state_atom,runtime_atom,map__63732,map__63732__$1,root_class,state_map,root_query,ast,prop__GT_classes,idents_in_joins,root_props,linked_props){
return (function (s){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"root-props","root-props",-1015460595)], null),root_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"linked-props","linked-props",1547374714)], null),linked_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035)], null),idents_in_joins),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717)], null),prop__GT_classes);
});})(map__63731,map__63731__$1,state_atom,runtime_atom,map__63732,map__63732__$1,root_class,state_map,root_query,ast,prop__GT_classes,idents_in_joins,root_props,linked_props))
);
});
com.fulcrologic.fulcro.algorithms.indexing.index_component_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_component_STAR_(runtime_state,instance,ident,cls){
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(cls);
var G__63738 = runtime_state;
var G__63738__$1 = (cljs.core.truth_(k)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__63738,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"class->components","class->components",436435919),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),instance):G__63738);
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__63738__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),instance);
} else {
return G__63738__$1;
}
});
/**
 * Add a component instance to the app index. This adds the component to the `class->components` and
 * `ident->components` indexes.
 */
com.fulcrologic.fulcro.algorithms.indexing.index_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_component_BANG_(this$){
var map__63741 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var map__63741__$1 = (((((!((map__63741 == null))))?(((((map__63741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63741):map__63741);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63741__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var get_ident = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
var ident = (cljs.core.truth_(get_ident)?(function (){var G__63744 = this$;
var G__63745 = com.fulcrologic.fulcro.components.props(this$);
return (get_ident.cljs$core$IFn$_invoke$arity$2 ? get_ident.cljs$core$IFn$_invoke$arity$2(G__63744,G__63745) : get_ident.call(null,G__63744,G__63745));
})():null);
var cls = com.fulcrologic.fulcro.components.react_type(this$);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = ident;
if(cljs.core.truth_(and__4120__auto__)){
return (!(edn_query_language.core.ident_QMARK_(ident)));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.indexing",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.components.component_name(this$),"supplied an invalid ident",ident], null);
});})(ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident))
,null)),null,-1614079887);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = ident;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.second(ident) == null);
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.algorithms.indexing",null,98,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(this$)),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join('')], null);
});})(ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident))
,null)),null,-97469364);
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.indexing",null,101,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding",com.fulcrologic.fulcro.components.component_name(this$),"instance to class index"], null);
});})(ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident))
,null)),null,-666769831);

if(cljs.core.truth_(ident)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.indexing",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding",com.fulcrologic.fulcro.components.component_name(this$),"with ident",ident,"to ident index"], null);
});})(ident,cls,map__63741,map__63741__$1,runtime_atom,get_ident))
,null)),null,-6648868);
} else {
}
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,com.fulcrologic.fulcro.algorithms.indexing.index_component_STAR_,this$,ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cls], 0));
});
com.fulcrologic.fulcro.algorithms.indexing.drop_component_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$drop_component_STAR_(runtime_state,instance,ident,cls){
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(cls);
var G__63758 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(runtime_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"class->components","class->components",436435919),k], null),cljs.core.disj,instance);
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__63758,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),ident], null),cljs.core.disj,instance);
} else {
return G__63758;
}
});
/**
 * Remove the component instance from the indexes. If ident is supplied it uses that, otherwise it gets the
 *   ident from the component itself.
 */
com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$drop_component_BANG_(var_args){
var G__63764 = arguments.length;
switch (G__63764) {
case 2:
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,ident){
var map__63765 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var map__63765__$1 = (((((!((map__63765 == null))))?(((((map__63765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63765):map__63765);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var cls = com.fulcrologic.fulcro.components.react_type(this$);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.indexing",null,122,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__63765,map__63765__$1,runtime_atom,cls){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropping component instance with ident ",ident,"from indexes"], null);
});})(map__63765,map__63765__$1,runtime_atom,cls))
,null)),null,-230965380);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,com.fulcrologic.fulcro.algorithms.indexing.drop_component_STAR_,this$,ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cls], 0));
});

com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var old_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident);
});

com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.indexing.js.map
