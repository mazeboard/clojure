goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__56856 = app__$1;
var map__56856__$1 = (((((!((map__56856 == null))))?(((((map__56856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56856):map__56856);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4131__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__56858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__56859 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__56858,G__56859) : com.fulcrologic.fulcro.components.computed.call(null,G__56858,G__56859));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__56856,map__56856__$1,state_atom,state_map,query,q,prior_computed,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
});})(map__56856,map__56856__$1,state_atom,state_map,query,q,prior_computed,data_tree,new_props))
,null)),null,-1144839461,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (root){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__56860 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__56860) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__56860));
})(),"queries for data that changed, but does not have an ident."], null);
});})(root))
,null)),null,-668672704,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__56867 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__56868 = null;
var count__56869 = (0);
var i__56870 = (0);
while(true){
if((i__56870 < count__56869)){
var c = chunk__56868.cljs$core$IIndexed$_nth$arity$2(null,i__56870);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57114 = seq__56867;
var G__57115 = chunk__56868;
var G__57116 = count__56869;
var G__57117 = (i__56870 + (1));
seq__56867 = G__57114;
chunk__56868 = G__57115;
count__56869 = G__57116;
i__56870 = G__57117;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56867);
if(temp__5753__auto__){
var seq__56867__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56867__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56867__$1);
var G__57128 = cljs.core.chunk_rest(seq__56867__$1);
var G__57129 = c__4550__auto__;
var G__57130 = cljs.core.count(c__4550__auto__);
var G__57131 = (0);
seq__56867 = G__57128;
chunk__56868 = G__57129;
count__56869 = G__57130;
i__56870 = G__57131;
continue;
} else {
var c = cljs.core.first(seq__56867__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57133 = cljs.core.next(seq__56867__$1);
var G__57134 = null;
var G__57135 = (0);
var G__57136 = (0);
seq__56867 = G__57133;
chunk__56868 = G__57134;
count__56869 = G__57135;
i__56870 = G__57136;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__56878 = app__$1;
var map__56878__$1 = (((((!((map__56878 == null))))?(((((map__56878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56878):map__56878);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56878__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56879 = cljs.core.deref(runtime_atom);
var map__56879__$1 = (((((!((map__56879 == null))))?(((((map__56879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56879):map__56879);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56879__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56880 = indexes;
var map__56880__$1 = (((((!((map__56880 == null))))?(((((map__56880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56880):map__56880);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__56886 = cljs.core.seq(classes);
var chunk__56887 = null;
var count__56888 = (0);
var i__56889 = (0);
while(true){
if((i__56889 < count__56888)){
var class$ = chunk__56887.cljs$core$IIndexed$_nth$arity$2(null,i__56889);
var seq__56910_57149 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56912_57150 = null;
var count__56913_57151 = (0);
var i__56914_57152 = (0);
while(true){
if((i__56914_57152 < count__56913_57151)){
var component_57153 = chunk__56912_57150.cljs$core$IIndexed$_nth$arity$2(null,i__56914_57152);
var component_ident_57154 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57153) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57153));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57154,component_57153);


var G__57158 = seq__56910_57149;
var G__57159 = chunk__56912_57150;
var G__57160 = count__56913_57151;
var G__57161 = (i__56914_57152 + (1));
seq__56910_57149 = G__57158;
chunk__56912_57150 = G__57159;
count__56913_57151 = G__57160;
i__56914_57152 = G__57161;
continue;
} else {
var temp__5753__auto___57165 = cljs.core.seq(seq__56910_57149);
if(temp__5753__auto___57165){
var seq__56910_57166__$1 = temp__5753__auto___57165;
if(cljs.core.chunked_seq_QMARK_(seq__56910_57166__$1)){
var c__4550__auto___57167 = cljs.core.chunk_first(seq__56910_57166__$1);
var G__57170 = cljs.core.chunk_rest(seq__56910_57166__$1);
var G__57171 = c__4550__auto___57167;
var G__57172 = cljs.core.count(c__4550__auto___57167);
var G__57173 = (0);
seq__56910_57149 = G__57170;
chunk__56912_57150 = G__57171;
count__56913_57151 = G__57172;
i__56914_57152 = G__57173;
continue;
} else {
var component_57174 = cljs.core.first(seq__56910_57166__$1);
var component_ident_57175 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57174) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57174));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57175,component_57174);


var G__57177 = cljs.core.next(seq__56910_57166__$1);
var G__57178 = null;
var G__57179 = (0);
var G__57180 = (0);
seq__56910_57149 = G__57177;
chunk__56912_57150 = G__57178;
count__56913_57151 = G__57179;
i__56914_57152 = G__57180;
continue;
}
} else {
}
}
break;
}


var G__57181 = seq__56886;
var G__57182 = chunk__56887;
var G__57183 = count__56888;
var G__57184 = (i__56889 + (1));
seq__56886 = G__57181;
chunk__56887 = G__57182;
count__56888 = G__57183;
i__56889 = G__57184;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56886);
if(temp__5753__auto__){
var seq__56886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56886__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56886__$1);
var G__57187 = cljs.core.chunk_rest(seq__56886__$1);
var G__57188 = c__4550__auto__;
var G__57189 = cljs.core.count(c__4550__auto__);
var G__57190 = (0);
seq__56886 = G__57187;
chunk__56887 = G__57188;
count__56888 = G__57189;
i__56889 = G__57190;
continue;
} else {
var class$ = cljs.core.first(seq__56886__$1);
var seq__56927_57191 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56929_57192 = null;
var count__56930_57193 = (0);
var i__56931_57194 = (0);
while(true){
if((i__56931_57194 < count__56930_57193)){
var component_57196 = chunk__56929_57192.cljs$core$IIndexed$_nth$arity$2(null,i__56931_57194);
var component_ident_57197 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57196) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57196));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57197,component_57196);


var G__57200 = seq__56927_57191;
var G__57201 = chunk__56929_57192;
var G__57202 = count__56930_57193;
var G__57203 = (i__56931_57194 + (1));
seq__56927_57191 = G__57200;
chunk__56929_57192 = G__57201;
count__56930_57193 = G__57202;
i__56931_57194 = G__57203;
continue;
} else {
var temp__5753__auto___57204__$1 = cljs.core.seq(seq__56927_57191);
if(temp__5753__auto___57204__$1){
var seq__56927_57210__$1 = temp__5753__auto___57204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56927_57210__$1)){
var c__4550__auto___57211 = cljs.core.chunk_first(seq__56927_57210__$1);
var G__57212 = cljs.core.chunk_rest(seq__56927_57210__$1);
var G__57213 = c__4550__auto___57211;
var G__57214 = cljs.core.count(c__4550__auto___57211);
var G__57215 = (0);
seq__56927_57191 = G__57212;
chunk__56929_57192 = G__57213;
count__56930_57193 = G__57214;
i__56931_57194 = G__57215;
continue;
} else {
var component_57221 = cljs.core.first(seq__56927_57210__$1);
var component_ident_57222 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57221) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57221));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57222,component_57221);


var G__57223 = cljs.core.next(seq__56927_57210__$1);
var G__57224 = null;
var G__57225 = (0);
var G__57226 = (0);
seq__56927_57191 = G__57223;
chunk__56929_57192 = G__57224;
count__56930_57193 = G__57225;
i__56931_57194 = G__57226;
continue;
}
} else {
}
}
break;
}


var G__57227 = cljs.core.next(seq__56886__$1);
var G__57228 = null;
var G__57229 = (0);
var G__57230 = (0);
seq__56886 = G__57227;
chunk__56887 = G__57228;
count__56888 = G__57229;
i__56889 = G__57230;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__56947 = app__$1;
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56948 = cljs.core.deref(runtime_atom);
var map__56948__$1 = (((((!((map__56948 == null))))?(((((map__56948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56948):map__56948);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56949 = indexes;
var map__56949__$1 = (((((!((map__56949 == null))))?(((((map__56949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56949):map__56949);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56949__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56949__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56947,map__56947__$1,runtime_atom,map__56948,map__56948__$1,indexes,map__56949,map__56949__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__56947,map__56947__$1,runtime_atom,map__56948,map__56948__$1,indexes,map__56949,map__56949__$1,prop__GT_classes,class__GT_components){
return (function (p1__56944_SHARP_,p2__56945_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56944_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__56945_SHARP_) : class__GT_components.call(null,p2__56945_SHARP_)));
});})(classes,map__56947,map__56947__$1,runtime_atom,map__56948,map__56948__$1,indexes,map__56949,map__56949__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__56947,map__56947__$1,runtime_atom,map__56948,map__56948__$1,indexes,map__56949,map__56949__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__56965 = app__$1;
var map__56965__$1 = (((((!((map__56965 == null))))?(((((map__56965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56965):map__56965);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__56966 = cljs.core.deref(runtime_atom);
var map__56966__$1 = (((((!((map__56966 == null))))?(((((map__56966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56966):map__56966);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__56967 = indexes;
var map__56967__$1 = (((((!((map__56967 == null))))?(((((map__56967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56967):map__56967);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56979 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56979__$1 = (((((!((map__56979 == null))))?(((((map__56979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56979):map__56979);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__56986_57250 = cljs.core.seq(limited_to_render);
var chunk__56988_57251 = null;
var count__56989_57252 = (0);
var i__56990_57253 = (0);
while(true){
if((i__56990_57253 < count__56989_57252)){
var c_57255 = chunk__56988_57251.cljs$core$IIndexed$_nth$arity$2(null,i__56990_57253);
var ident_57257 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57255) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57255));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57257,c_57255);


var G__57260 = seq__56986_57250;
var G__57261 = chunk__56988_57251;
var G__57262 = count__56989_57252;
var G__57263 = (i__56990_57253 + (1));
seq__56986_57250 = G__57260;
chunk__56988_57251 = G__57261;
count__56989_57252 = G__57262;
i__56990_57253 = G__57263;
continue;
} else {
var temp__5753__auto___57264 = cljs.core.seq(seq__56986_57250);
if(temp__5753__auto___57264){
var seq__56986_57267__$1 = temp__5753__auto___57264;
if(cljs.core.chunked_seq_QMARK_(seq__56986_57267__$1)){
var c__4550__auto___57268 = cljs.core.chunk_first(seq__56986_57267__$1);
var G__57269 = cljs.core.chunk_rest(seq__56986_57267__$1);
var G__57270 = c__4550__auto___57268;
var G__57271 = cljs.core.count(c__4550__auto___57268);
var G__57272 = (0);
seq__56986_57250 = G__57269;
chunk__56988_57251 = G__57270;
count__56989_57252 = G__57271;
i__56990_57253 = G__57272;
continue;
} else {
var c_57273 = cljs.core.first(seq__56986_57267__$1);
var ident_57274 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57273) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57273));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57274,c_57273);


var G__57275 = cljs.core.next(seq__56986_57267__$1);
var G__57276 = null;
var G__57277 = (0);
var G__57278 = (0);
seq__56986_57250 = G__57275;
chunk__56988_57251 = G__57276;
count__56989_57252 = G__57277;
i__56990_57253 = G__57278;
continue;
}
} else {
}
}
break;
}

var seq__57004 = cljs.core.seq(limited_idents);
var chunk__57005 = null;
var count__57006 = (0);
var i__57007 = (0);
while(true){
if((i__57007 < count__57006)){
var i = chunk__57005.cljs$core$IIndexed$_nth$arity$2(null,i__57007);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57281 = seq__57004;
var G__57282 = chunk__57005;
var G__57283 = count__57006;
var G__57284 = (i__57007 + (1));
seq__57004 = G__57281;
chunk__57005 = G__57282;
count__57006 = G__57283;
i__57007 = G__57284;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57004);
if(temp__5753__auto__){
var seq__57004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57004__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57004__$1);
var G__57287 = cljs.core.chunk_rest(seq__57004__$1);
var G__57288 = c__4550__auto__;
var G__57289 = cljs.core.count(c__4550__auto__);
var G__57290 = (0);
seq__57004 = G__57287;
chunk__57005 = G__57288;
count__57006 = G__57289;
i__57007 = G__57290;
continue;
} else {
var i = cljs.core.first(seq__57004__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57293 = cljs.core.next(seq__57004__$1);
var G__57294 = null;
var G__57295 = (0);
var G__57296 = (0);
seq__57004 = G__57293;
chunk__57005 = G__57294;
count__57006 = G__57295;
i__57007 = G__57296;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__56965,map__56965__$1,runtime_atom,state_atom,map__56966,map__56966__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__56967,map__56967__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__56965,map__56965__$1,runtime_atom,state_atom,map__56966,map__56966__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__56967,map__56967__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__57020 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__57020__$1 = (((((!((map__57020 == null))))?(((((map__57020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57020):map__57020);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57020__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57020__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__57031_57311 = cljs.core.seq(all_idents);
var chunk__57032_57312 = null;
var count__57033_57313 = (0);
var i__57034_57314 = (0);
while(true){
if((i__57034_57314 < count__57033_57313)){
var i_57317 = chunk__57032_57312.cljs$core$IIndexed$_nth$arity$2(null,i__57034_57314);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57317);


var G__57318 = seq__57031_57311;
var G__57319 = chunk__57032_57312;
var G__57320 = count__57033_57313;
var G__57321 = (i__57034_57314 + (1));
seq__57031_57311 = G__57318;
chunk__57032_57312 = G__57319;
count__57033_57313 = G__57320;
i__57034_57314 = G__57321;
continue;
} else {
var temp__5753__auto___57324 = cljs.core.seq(seq__57031_57311);
if(temp__5753__auto___57324){
var seq__57031_57325__$1 = temp__5753__auto___57324;
if(cljs.core.chunked_seq_QMARK_(seq__57031_57325__$1)){
var c__4550__auto___57329 = cljs.core.chunk_first(seq__57031_57325__$1);
var G__57330 = cljs.core.chunk_rest(seq__57031_57325__$1);
var G__57331 = c__4550__auto___57329;
var G__57332 = cljs.core.count(c__4550__auto___57329);
var G__57333 = (0);
seq__57031_57311 = G__57330;
chunk__57032_57312 = G__57331;
count__57033_57313 = G__57332;
i__57034_57314 = G__57333;
continue;
} else {
var i_57335 = cljs.core.first(seq__57031_57325__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57335);


var G__57337 = cljs.core.next(seq__57031_57325__$1);
var G__57338 = null;
var G__57339 = (0);
var G__57340 = (0);
seq__57031_57311 = G__57337;
chunk__57032_57312 = G__57338;
count__57033_57313 = G__57339;
i__57034_57314 = G__57340;
continue;
}
} else {
}
}
break;
}

var seq__57060 = cljs.core.seq(extra_to_force);
var chunk__57061 = null;
var count__57062 = (0);
var i__57063 = (0);
while(true){
if((i__57063 < count__57062)){
var c = chunk__57061.cljs$core$IIndexed$_nth$arity$2(null,i__57063);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57343 = seq__57060;
var G__57344 = chunk__57061;
var G__57345 = count__57062;
var G__57346 = (i__57063 + (1));
seq__57060 = G__57343;
chunk__57061 = G__57344;
count__57062 = G__57345;
i__57063 = G__57346;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57060);
if(temp__5753__auto__){
var seq__57060__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57060__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57060__$1);
var G__57349 = cljs.core.chunk_rest(seq__57060__$1);
var G__57350 = c__4550__auto__;
var G__57351 = cljs.core.count(c__4550__auto__);
var G__57352 = (0);
seq__57060 = G__57349;
chunk__57061 = G__57350;
count__57062 = G__57351;
i__57063 = G__57352;
continue;
} else {
var c = cljs.core.first(seq__57060__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57359 = cljs.core.next(seq__57060__$1);
var G__57360 = null;
var G__57361 = (0);
var G__57362 = (0);
seq__57060 = G__57359;
chunk__57061 = G__57360;
count__57062 = G__57361;
i__57063 = G__57362;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__57081 = arguments.length;
switch (G__57081) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__57083){
var map__57084 = p__57083;
var map__57084__$1 = (((((!((map__57084 == null))))?(((((map__57084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57084):map__57084);
var options = map__57084__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57084__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57084__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e57090){var e = e57090;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__57084,map__57084__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__57084,map__57084__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,49978472,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
