goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
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
var map__59052 = app__$1;
var map__59052__$1 = (((((!((map__59052 == null))))?(((((map__59052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59052):map__59052);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59052__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__59052,map__59052__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__59052,map__59052__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,-474571332);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__59052,map__59052__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__59052,map__59052__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,-133486909);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59059 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59060 = null;
var count__59061 = (0);
var i__59062 = (0);
while(true){
if((i__59062 < count__59061)){
var c = chunk__59060.cljs$core$IIndexed$_nth$arity$2(null,i__59062);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59245 = seq__59059;
var G__59246 = chunk__59060;
var G__59247 = count__59061;
var G__59248 = (i__59062 + (1));
seq__59059 = G__59245;
chunk__59060 = G__59246;
count__59061 = G__59247;
i__59062 = G__59248;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59059);
if(temp__5753__auto__){
var seq__59059__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59059__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59059__$1);
var G__59251 = cljs.core.chunk_rest(seq__59059__$1);
var G__59252 = c__4550__auto__;
var G__59253 = cljs.core.count(c__4550__auto__);
var G__59254 = (0);
seq__59059 = G__59251;
chunk__59060 = G__59252;
count__59061 = G__59253;
i__59062 = G__59254;
continue;
} else {
var c = cljs.core.first(seq__59059__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59255 = cljs.core.next(seq__59059__$1);
var G__59256 = null;
var G__59257 = (0);
var G__59258 = (0);
seq__59059 = G__59255;
chunk__59060 = G__59256;
count__59061 = G__59257;
i__59062 = G__59258;
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

var map__59073 = app__$1;
var map__59073__$1 = (((((!((map__59073 == null))))?(((((map__59073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59073):map__59073);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59073__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59074 = cljs.core.deref(runtime_atom);
var map__59074__$1 = (((((!((map__59074 == null))))?(((((map__59074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59074):map__59074);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59074__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59075 = indexes;
var map__59075__$1 = (((((!((map__59075 == null))))?(((((map__59075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59075):map__59075);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59075__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__59082 = cljs.core.seq(classes);
var chunk__59083 = null;
var count__59084 = (0);
var i__59085 = (0);
while(true){
if((i__59085 < count__59084)){
var class$ = chunk__59083.cljs$core$IIndexed$_nth$arity$2(null,i__59085);
var seq__59119_59262 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59121_59263 = null;
var count__59122_59264 = (0);
var i__59123_59265 = (0);
while(true){
if((i__59123_59265 < count__59122_59264)){
var component_59269 = chunk__59121_59263.cljs$core$IIndexed$_nth$arity$2(null,i__59123_59265);
var component_ident_59270 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59269);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59270,component_59269);


var G__59271 = seq__59119_59262;
var G__59272 = chunk__59121_59263;
var G__59273 = count__59122_59264;
var G__59274 = (i__59123_59265 + (1));
seq__59119_59262 = G__59271;
chunk__59121_59263 = G__59272;
count__59122_59264 = G__59273;
i__59123_59265 = G__59274;
continue;
} else {
var temp__5753__auto___59275 = cljs.core.seq(seq__59119_59262);
if(temp__5753__auto___59275){
var seq__59119_59276__$1 = temp__5753__auto___59275;
if(cljs.core.chunked_seq_QMARK_(seq__59119_59276__$1)){
var c__4550__auto___59277 = cljs.core.chunk_first(seq__59119_59276__$1);
var G__59278 = cljs.core.chunk_rest(seq__59119_59276__$1);
var G__59279 = c__4550__auto___59277;
var G__59280 = cljs.core.count(c__4550__auto___59277);
var G__59281 = (0);
seq__59119_59262 = G__59278;
chunk__59121_59263 = G__59279;
count__59122_59264 = G__59280;
i__59123_59265 = G__59281;
continue;
} else {
var component_59282 = cljs.core.first(seq__59119_59276__$1);
var component_ident_59283 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59282);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59283,component_59282);


var G__59284 = cljs.core.next(seq__59119_59276__$1);
var G__59285 = null;
var G__59286 = (0);
var G__59287 = (0);
seq__59119_59262 = G__59284;
chunk__59121_59263 = G__59285;
count__59122_59264 = G__59286;
i__59123_59265 = G__59287;
continue;
}
} else {
}
}
break;
}


var G__59290 = seq__59082;
var G__59291 = chunk__59083;
var G__59292 = count__59084;
var G__59293 = (i__59085 + (1));
seq__59082 = G__59290;
chunk__59083 = G__59291;
count__59084 = G__59292;
i__59085 = G__59293;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59082);
if(temp__5753__auto__){
var seq__59082__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59082__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59082__$1);
var G__59294 = cljs.core.chunk_rest(seq__59082__$1);
var G__59295 = c__4550__auto__;
var G__59296 = cljs.core.count(c__4550__auto__);
var G__59297 = (0);
seq__59082 = G__59294;
chunk__59083 = G__59295;
count__59084 = G__59296;
i__59085 = G__59297;
continue;
} else {
var class$ = cljs.core.first(seq__59082__$1);
var seq__59130_59298 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59132_59299 = null;
var count__59133_59300 = (0);
var i__59134_59301 = (0);
while(true){
if((i__59134_59301 < count__59133_59300)){
var component_59302 = chunk__59132_59299.cljs$core$IIndexed$_nth$arity$2(null,i__59134_59301);
var component_ident_59304 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59302);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59304,component_59302);


var G__59306 = seq__59130_59298;
var G__59307 = chunk__59132_59299;
var G__59308 = count__59133_59300;
var G__59309 = (i__59134_59301 + (1));
seq__59130_59298 = G__59306;
chunk__59132_59299 = G__59307;
count__59133_59300 = G__59308;
i__59134_59301 = G__59309;
continue;
} else {
var temp__5753__auto___59311__$1 = cljs.core.seq(seq__59130_59298);
if(temp__5753__auto___59311__$1){
var seq__59130_59312__$1 = temp__5753__auto___59311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59130_59312__$1)){
var c__4550__auto___59313 = cljs.core.chunk_first(seq__59130_59312__$1);
var G__59314 = cljs.core.chunk_rest(seq__59130_59312__$1);
var G__59315 = c__4550__auto___59313;
var G__59316 = cljs.core.count(c__4550__auto___59313);
var G__59317 = (0);
seq__59130_59298 = G__59314;
chunk__59132_59299 = G__59315;
count__59133_59300 = G__59316;
i__59134_59301 = G__59317;
continue;
} else {
var component_59319 = cljs.core.first(seq__59130_59312__$1);
var component_ident_59320 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59319);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59320,component_59319);


var G__59321 = cljs.core.next(seq__59130_59312__$1);
var G__59322 = null;
var G__59323 = (0);
var G__59324 = (0);
seq__59130_59298 = G__59321;
chunk__59132_59299 = G__59322;
count__59133_59300 = G__59323;
i__59134_59301 = G__59324;
continue;
}
} else {
}
}
break;
}


var G__59325 = cljs.core.next(seq__59082__$1);
var G__59326 = null;
var G__59327 = (0);
var G__59328 = (0);
seq__59082 = G__59325;
chunk__59083 = G__59326;
count__59084 = G__59327;
i__59085 = G__59328;
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
var map__59155 = app__$1;
var map__59155__$1 = (((((!((map__59155 == null))))?(((((map__59155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59155):map__59155);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59155__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59156 = cljs.core.deref(runtime_atom);
var map__59156__$1 = (((((!((map__59156 == null))))?(((((map__59156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59156):map__59156);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59156__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59157 = indexes;
var map__59157__$1 = (((((!((map__59157 == null))))?(((((map__59157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59157):map__59157);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59157__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59157__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__59155,map__59155__$1,runtime_atom,map__59156,map__59156__$1,indexes,map__59157,map__59157__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__59155,map__59155__$1,runtime_atom,map__59156,map__59156__$1,indexes,map__59157,map__59157__$1,prop__GT_classes,class__GT_components){
return (function (p1__59153_SHARP_,p2__59154_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59153_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59154_SHARP_) : class__GT_components.call(null,p2__59154_SHARP_)));
});})(classes,map__59155,map__59155__$1,runtime_atom,map__59156,map__59156__$1,indexes,map__59157,map__59157__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__59155,map__59155__$1,runtime_atom,map__59156,map__59156__$1,indexes,map__59157,map__59157__$1,prop__GT_classes,class__GT_components))
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
var map__59170 = app__$1;
var map__59170__$1 = (((((!((map__59170 == null))))?(((((map__59170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59170):map__59170);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59171 = cljs.core.deref(runtime_atom);
var map__59171__$1 = (((((!((map__59171 == null))))?(((((map__59171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59171):map__59171);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59172 = indexes;
var map__59172__$1 = (((((!((map__59172 == null))))?(((((map__59172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59172):map__59172);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59178 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59178__$1 = (((((!((map__59178 == null))))?(((((map__59178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59178):map__59178);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59181_59344 = cljs.core.seq(limited_to_render);
var chunk__59183_59345 = null;
var count__59184_59346 = (0);
var i__59185_59347 = (0);
while(true){
if((i__59185_59347 < count__59184_59346)){
var c_59349 = chunk__59183_59345.cljs$core$IIndexed$_nth$arity$2(null,i__59185_59347);
var ident_59351 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59349);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59351,c_59349);


var G__59352 = seq__59181_59344;
var G__59353 = chunk__59183_59345;
var G__59354 = count__59184_59346;
var G__59355 = (i__59185_59347 + (1));
seq__59181_59344 = G__59352;
chunk__59183_59345 = G__59353;
count__59184_59346 = G__59354;
i__59185_59347 = G__59355;
continue;
} else {
var temp__5753__auto___59357 = cljs.core.seq(seq__59181_59344);
if(temp__5753__auto___59357){
var seq__59181_59358__$1 = temp__5753__auto___59357;
if(cljs.core.chunked_seq_QMARK_(seq__59181_59358__$1)){
var c__4550__auto___59359 = cljs.core.chunk_first(seq__59181_59358__$1);
var G__59360 = cljs.core.chunk_rest(seq__59181_59358__$1);
var G__59361 = c__4550__auto___59359;
var G__59362 = cljs.core.count(c__4550__auto___59359);
var G__59363 = (0);
seq__59181_59344 = G__59360;
chunk__59183_59345 = G__59361;
count__59184_59346 = G__59362;
i__59185_59347 = G__59363;
continue;
} else {
var c_59364 = cljs.core.first(seq__59181_59358__$1);
var ident_59365 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59364);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59365,c_59364);


var G__59366 = cljs.core.next(seq__59181_59358__$1);
var G__59367 = null;
var G__59368 = (0);
var G__59369 = (0);
seq__59181_59344 = G__59366;
chunk__59183_59345 = G__59367;
count__59184_59346 = G__59368;
i__59185_59347 = G__59369;
continue;
}
} else {
}
}
break;
}

var seq__59187 = cljs.core.seq(limited_idents);
var chunk__59188 = null;
var count__59189 = (0);
var i__59190 = (0);
while(true){
if((i__59190 < count__59189)){
var i = chunk__59188.cljs$core$IIndexed$_nth$arity$2(null,i__59190);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59371 = seq__59187;
var G__59372 = chunk__59188;
var G__59373 = count__59189;
var G__59374 = (i__59190 + (1));
seq__59187 = G__59371;
chunk__59188 = G__59372;
count__59189 = G__59373;
i__59190 = G__59374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59187);
if(temp__5753__auto__){
var seq__59187__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59187__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59187__$1);
var G__59378 = cljs.core.chunk_rest(seq__59187__$1);
var G__59379 = c__4550__auto__;
var G__59380 = cljs.core.count(c__4550__auto__);
var G__59381 = (0);
seq__59187 = G__59378;
chunk__59188 = G__59379;
count__59189 = G__59380;
i__59190 = G__59381;
continue;
} else {
var i = cljs.core.first(seq__59187__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59382 = cljs.core.next(seq__59187__$1);
var G__59383 = null;
var G__59384 = (0);
var G__59385 = (0);
seq__59187 = G__59382;
chunk__59188 = G__59383;
count__59189 = G__59384;
i__59190 = G__59385;
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
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__59170,map__59170__$1,runtime_atom,state_atom,map__59171,map__59171__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__59172,map__59172__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__59170,map__59170__$1,runtime_atom,state_atom,map__59171,map__59171__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__59172,map__59172__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__59194 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59194__$1 = (((((!((map__59194 == null))))?(((((map__59194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59194):map__59194);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59194__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59194__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59196_59392 = cljs.core.seq(all_idents);
var chunk__59197_59393 = null;
var count__59198_59394 = (0);
var i__59199_59395 = (0);
while(true){
if((i__59199_59395 < count__59198_59394)){
var i_59398 = chunk__59197_59393.cljs$core$IIndexed$_nth$arity$2(null,i__59199_59395);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59398);


var G__59400 = seq__59196_59392;
var G__59401 = chunk__59197_59393;
var G__59402 = count__59198_59394;
var G__59403 = (i__59199_59395 + (1));
seq__59196_59392 = G__59400;
chunk__59197_59393 = G__59401;
count__59198_59394 = G__59402;
i__59199_59395 = G__59403;
continue;
} else {
var temp__5753__auto___59405 = cljs.core.seq(seq__59196_59392);
if(temp__5753__auto___59405){
var seq__59196_59406__$1 = temp__5753__auto___59405;
if(cljs.core.chunked_seq_QMARK_(seq__59196_59406__$1)){
var c__4550__auto___59407 = cljs.core.chunk_first(seq__59196_59406__$1);
var G__59408 = cljs.core.chunk_rest(seq__59196_59406__$1);
var G__59409 = c__4550__auto___59407;
var G__59410 = cljs.core.count(c__4550__auto___59407);
var G__59411 = (0);
seq__59196_59392 = G__59408;
chunk__59197_59393 = G__59409;
count__59198_59394 = G__59410;
i__59199_59395 = G__59411;
continue;
} else {
var i_59412 = cljs.core.first(seq__59196_59406__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59412);


var G__59413 = cljs.core.next(seq__59196_59406__$1);
var G__59414 = null;
var G__59415 = (0);
var G__59416 = (0);
seq__59196_59392 = G__59413;
chunk__59197_59393 = G__59414;
count__59198_59394 = G__59415;
i__59199_59395 = G__59416;
continue;
}
} else {
}
}
break;
}

var seq__59209 = cljs.core.seq(extra_to_force);
var chunk__59210 = null;
var count__59211 = (0);
var i__59212 = (0);
while(true){
if((i__59212 < count__59211)){
var c = chunk__59210.cljs$core$IIndexed$_nth$arity$2(null,i__59212);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59419 = seq__59209;
var G__59420 = chunk__59210;
var G__59421 = count__59211;
var G__59422 = (i__59212 + (1));
seq__59209 = G__59419;
chunk__59210 = G__59420;
count__59211 = G__59421;
i__59212 = G__59422;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59209);
if(temp__5753__auto__){
var seq__59209__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59209__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59209__$1);
var G__59423 = cljs.core.chunk_rest(seq__59209__$1);
var G__59424 = c__4550__auto__;
var G__59425 = cljs.core.count(c__4550__auto__);
var G__59426 = (0);
seq__59209 = G__59423;
chunk__59210 = G__59424;
count__59211 = G__59425;
i__59212 = G__59426;
continue;
} else {
var c = cljs.core.first(seq__59209__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59428 = cljs.core.next(seq__59209__$1);
var G__59429 = null;
var G__59430 = (0);
var G__59431 = (0);
seq__59209 = G__59428;
chunk__59210 = G__59429;
count__59211 = G__59430;
i__59212 = G__59431;
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
var G__59222 = arguments.length;
switch (G__59222) {
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

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59227){
var map__59229 = p__59227;
var map__59229__$1 = (((((!((map__59229 == null))))?(((((map__59229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59229):map__59229);
var options = map__59229__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59229__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59229__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e59232){var e = e59232;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__59229,map__59229__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__59229,map__59229__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,1173829196);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
