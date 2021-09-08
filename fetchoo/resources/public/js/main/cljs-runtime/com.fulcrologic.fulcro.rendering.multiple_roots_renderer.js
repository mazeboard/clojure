goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__59623 = arguments.length;
switch (G__59623) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__59625){
var map__59627 = p__59625;
var map__59627__$1 = (((((!((map__59627 == null))))?(((((map__59627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59627):map__59627);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59627__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59627__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4131__auto__ = app__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__59636 = app__$2;
var G__59636__$1 = (((G__59636 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__59636));
var G__59636__$2 = (((G__59636__$1 == null))?null:cljs.core.deref(G__59636__$1));
if((G__59636__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__59636__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4120__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4120__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__59638_59782 = app__$2;
var G__59639_59783 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__59638_59782,G__59639_59783) : schedule_render_BANG_.call(null,G__59638_59782,G__59639_59783));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (class$,k,initialize_state_BANG_,schedule_render_BANG_,known_roots,initialized_QMARK_,app__$2,map__59627,map__59627__$1,app__$1,initialize_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
});})(class$,k,initialize_state_BANG_,schedule_render_BANG_,known_roots,initialized_QMARK_,app__$2,map__59627,map__59627__$1,app__$1,initialize_QMARK_))
,null)),null,547896872,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$2,map__59627,map__59627__$1,app__$1,initialize_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
});})(app__$2,map__59627,map__59627__$1,app__$1,initialize_QMARK_))
,null)),null,60671600,null);
}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__59645 = arguments.length;
switch (G__59645) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__59649){
var map__59650 = p__59649;
var map__59650__$1 = (((((!((map__59650 == null))))?(((((map__59650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59650):map__59650);
var options = map__59650__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59650__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4131__auto__ = app__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (class$,k,app__$2,map__59650,map__59650__$1,options,app__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
});})(class$,k,app__$2,map__59650,map__59650__$1,options,app__$1))
,null)),null,-1450895890,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$2,map__59650,map__59650__$1,options,app__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
});})(app__$2,map__59650,map__59650__$1,options,app__$1))
,null)),null,47791201,null);
}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__59657 = app__$1;
var G__59657__$1 = (((G__59657 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59657));
if((G__59657__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59657__$1);
}
})();
var known_roots = (function (){var G__59658 = app__$1;
var G__59658__$1 = (((G__59658 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__59658));
var G__59658__$2 = (((G__59658__$1 == null))?null:cljs.core.deref(G__59658__$1));
if((G__59658__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__59658__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__59660 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__59662 = null;
var count__59663 = (0);
var i__59664 = (0);
while(true){
if((i__59664 < count__59663)){
var k = chunk__59662.cljs$core$IIndexed$_nth$arity$2(null,i__59664);
var cls_59804 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_59805 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_59804,state_map);
var root_props_59806 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_59805,state_map,state_map);
var seq__59691_59808 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__59692_59809 = null;
var count__59693_59810 = (0);
var i__59694_59811 = (0);
while(true){
if((i__59694_59811 < count__59693_59810)){
var root_59815 = chunk__59692_59809.cljs$core$IIndexed$_nth$arity$2(null,i__59694_59811);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59815,root_props_59806);


var G__59818 = seq__59691_59808;
var G__59819 = chunk__59692_59809;
var G__59820 = count__59693_59810;
var G__59821 = (i__59694_59811 + (1));
seq__59691_59808 = G__59818;
chunk__59692_59809 = G__59819;
count__59693_59810 = G__59820;
i__59694_59811 = G__59821;
continue;
} else {
var temp__5753__auto___59822 = cljs.core.seq(seq__59691_59808);
if(temp__5753__auto___59822){
var seq__59691_59824__$1 = temp__5753__auto___59822;
if(cljs.core.chunked_seq_QMARK_(seq__59691_59824__$1)){
var c__4550__auto___59825 = cljs.core.chunk_first(seq__59691_59824__$1);
var G__59826 = cljs.core.chunk_rest(seq__59691_59824__$1);
var G__59827 = c__4550__auto___59825;
var G__59828 = cljs.core.count(c__4550__auto___59825);
var G__59829 = (0);
seq__59691_59808 = G__59826;
chunk__59692_59809 = G__59827;
count__59693_59810 = G__59828;
i__59694_59811 = G__59829;
continue;
} else {
var root_59832 = cljs.core.first(seq__59691_59824__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59832,root_props_59806);


var G__59834 = cljs.core.next(seq__59691_59824__$1);
var G__59835 = null;
var G__59836 = (0);
var G__59837 = (0);
seq__59691_59808 = G__59834;
chunk__59692_59809 = G__59835;
count__59693_59810 = G__59836;
i__59694_59811 = G__59837;
continue;
}
} else {
}
}
break;
}


var G__59838 = seq__59660;
var G__59839 = chunk__59662;
var G__59840 = count__59663;
var G__59841 = (i__59664 + (1));
seq__59660 = G__59838;
chunk__59662 = G__59839;
count__59663 = G__59840;
i__59664 = G__59841;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59660);
if(temp__5753__auto__){
var seq__59660__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59660__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59660__$1);
var G__59845 = cljs.core.chunk_rest(seq__59660__$1);
var G__59846 = c__4550__auto__;
var G__59847 = cljs.core.count(c__4550__auto__);
var G__59848 = (0);
seq__59660 = G__59845;
chunk__59662 = G__59846;
count__59663 = G__59847;
i__59664 = G__59848;
continue;
} else {
var k = cljs.core.first(seq__59660__$1);
var cls_59850 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_59851 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_59850,state_map);
var root_props_59852 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_59851,state_map,state_map);
var seq__59705_59858 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__59706_59859 = null;
var count__59707_59860 = (0);
var i__59708_59861 = (0);
while(true){
if((i__59708_59861 < count__59707_59860)){
var root_59863 = chunk__59706_59859.cljs$core$IIndexed$_nth$arity$2(null,i__59708_59861);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59863,root_props_59852);


var G__59864 = seq__59705_59858;
var G__59865 = chunk__59706_59859;
var G__59866 = count__59707_59860;
var G__59867 = (i__59708_59861 + (1));
seq__59705_59858 = G__59864;
chunk__59706_59859 = G__59865;
count__59707_59860 = G__59866;
i__59708_59861 = G__59867;
continue;
} else {
var temp__5753__auto___59868__$1 = cljs.core.seq(seq__59705_59858);
if(temp__5753__auto___59868__$1){
var seq__59705_59869__$1 = temp__5753__auto___59868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59705_59869__$1)){
var c__4550__auto___59870 = cljs.core.chunk_first(seq__59705_59869__$1);
var G__59871 = cljs.core.chunk_rest(seq__59705_59869__$1);
var G__59872 = c__4550__auto___59870;
var G__59873 = cljs.core.count(c__4550__auto___59870);
var G__59874 = (0);
seq__59705_59858 = G__59871;
chunk__59706_59859 = G__59872;
count__59707_59860 = G__59873;
i__59708_59861 = G__59874;
continue;
} else {
var root_59876 = cljs.core.first(seq__59705_59869__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59876,root_props_59852);


var G__59877 = cljs.core.next(seq__59705_59869__$1);
var G__59878 = null;
var G__59879 = (0);
var G__59880 = (0);
seq__59705_59858 = G__59877;
chunk__59706_59859 = G__59878;
count__59707_59860 = G__59879;
i__59708_59861 = G__59880;
continue;
}
} else {
}
}
break;
}


var G__59882 = cljs.core.next(seq__59660__$1);
var G__59883 = null;
var G__59884 = (0);
var G__59885 = (0);
seq__59660 = G__59882;
chunk__59662 = G__59883;
count__59663 = G__59884;
i__59664 = G__59885;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__59718 = app__$1;
var map__59718__$1 = (((((!((map__59718 == null))))?(((((map__59718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59718):map__59718);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59718__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59719 = cljs.core.deref(runtime_atom);
var map__59719__$1 = (((((!((map__59719 == null))))?(((((map__59719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59719):map__59719);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59723 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59723__$1 = (((((!((map__59723 == null))))?(((((map__59723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59723):map__59723);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,true);
var seq__59726 = cljs.core.seq(limited_idents);
var chunk__59727 = null;
var count__59728 = (0);
var i__59729 = (0);
while(true){
if((i__59729 < count__59728)){
var i = chunk__59727.cljs$core$IIndexed$_nth$arity$2(null,i__59729);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__59901 = seq__59726;
var G__59902 = chunk__59727;
var G__59903 = count__59728;
var G__59904 = (i__59729 + (1));
seq__59726 = G__59901;
chunk__59727 = G__59902;
count__59728 = G__59903;
i__59729 = G__59904;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59726);
if(temp__5753__auto__){
var seq__59726__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59726__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59726__$1);
var G__59908 = cljs.core.chunk_rest(seq__59726__$1);
var G__59909 = c__4550__auto__;
var G__59910 = cljs.core.count(c__4550__auto__);
var G__59911 = (0);
seq__59726 = G__59908;
chunk__59727 = G__59909;
count__59728 = G__59910;
i__59729 = G__59911;
continue;
} else {
var i = cljs.core.first(seq__59726__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__59912 = cljs.core.next(seq__59726__$1);
var G__59913 = null;
var G__59914 = (0);
var G__59915 = (0);
seq__59726 = G__59912;
chunk__59727 = G__59913;
count__59728 = G__59914;
i__59729 = G__59915;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__59734 = arguments.length;
switch (G__59734) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59738){
var map__59739 = p__59738;
var map__59739__$1 = (((((!((map__59739 == null))))?(((((map__59739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59739):map__59739);
var options = map__59739__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e59741){var e = e59741;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__59739,map__59739__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__59739,map__59739__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,-979727252,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),((function (cls,ui_root){
return (function (){
return false;
});})(cls,ui_root))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (cls,ui_root){
return (function (){
var this$ = this;
var js_props = this$.props;
var app__59583__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro_app;
}
})();
var d__59584__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__59754 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__59755 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__59756 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__59757 = app__59583__auto__;
var _STAR_shared_STAR__temp_val__59758 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__59583__auto__);
var _STAR_depth_STAR__temp_val__59759 = d__59584__auto__;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__59757;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__59758;

com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__59759;

try{var _STAR_denormalize_time_STAR__orig_val__59760 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__59762 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__59762;

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__59763 = fulcro_app;
var G__59763__$1 = (((G__59763 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59763));
if((G__59763__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59763__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__59764 = props;
var G__59765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__59764,G__59765) : ui_root.call(null,G__59764,G__59765));
}finally {com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__59760;
}}finally {com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__59756;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__59755;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__59754;
}});})(cls,ui_root))
], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__59769 = arguments.length;
switch (G__59769) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = ((function (constructor$,ui_factory){
return (function (this$){
var _STAR_denormalize_time_STAR__orig_val__59770 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__59771 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__59771;

try{var state_map = (function (){var G__59773 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__59773__$1 = (((G__59773 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59773));
if((G__59773__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59773__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__59774 = (function (){var or__4131__auto__ = props;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__59775 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__59774,G__59775) : ui_factory.call(null,G__59774,G__59775));
}finally {com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__59770;
}});})(constructor$,ui_factory))
;
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),((function (constructor$,ui_factory,render){
return (function (_,___$1,___$2){
return false;
});})(constructor$,ui_factory,render))
,new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
