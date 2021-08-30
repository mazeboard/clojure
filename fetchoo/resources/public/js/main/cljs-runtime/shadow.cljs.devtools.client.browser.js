goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58692 = arguments.length;
var i__4731__auto___58693 = (0);
while(true){
if((i__4731__auto___58693 < len__4730__auto___58692)){
args__4736__auto__.push((arguments[i__4731__auto___58693]));

var G__58694 = (i__4731__auto___58693 + (1));
i__4731__auto___58693 = G__58694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58253){
var G__58254 = cljs.core.first(seq58253);
var seq58253__$1 = cljs.core.next(seq58253);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58254,seq58253__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5751__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5751__auto__)){
var s = temp__5751__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__58284){
var map__58285 = p__58284;
var map__58285__$1 = (((((!((map__58285 == null))))?(((((map__58285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58285):map__58285);
var src = map__58285__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58294 = cljs.core.seq(sources);
var chunk__58295 = null;
var count__58296 = (0);
var i__58297 = (0);
while(true){
if((i__58297 < count__58296)){
var map__58318 = chunk__58295.cljs$core$IIndexed$_nth$arity$2(null,i__58297);
var map__58318__$1 = (((((!((map__58318 == null))))?(((((map__58318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58318):map__58318);
var src = map__58318__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e58322){var e_58719 = e58322;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58719);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58719.message)].join('')));
}

var G__58720 = seq__58294;
var G__58721 = chunk__58295;
var G__58722 = count__58296;
var G__58723 = (i__58297 + (1));
seq__58294 = G__58720;
chunk__58295 = G__58721;
count__58296 = G__58722;
i__58297 = G__58723;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58294);
if(temp__5753__auto__){
var seq__58294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58294__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58294__$1);
var G__58724 = cljs.core.chunk_rest(seq__58294__$1);
var G__58725 = c__4550__auto__;
var G__58726 = cljs.core.count(c__4550__auto__);
var G__58727 = (0);
seq__58294 = G__58724;
chunk__58295 = G__58725;
count__58296 = G__58726;
i__58297 = G__58727;
continue;
} else {
var map__58327 = cljs.core.first(seq__58294__$1);
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var src = map__58327__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e58330){var e_58738 = e58330;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58738);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58738.message)].join('')));
}

var G__58750 = cljs.core.next(seq__58294__$1);
var G__58751 = null;
var G__58752 = (0);
var G__58753 = (0);
seq__58294 = G__58750;
chunk__58295 = G__58751;
count__58296 = G__58752;
i__58297 = G__58753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58337 = cljs.core.seq(js_requires);
var chunk__58338 = null;
var count__58339 = (0);
var i__58340 = (0);
while(true){
if((i__58340 < count__58339)){
var js_ns = chunk__58338.cljs$core$IIndexed$_nth$arity$2(null,i__58340);
var require_str_58759 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58759);


var G__58760 = seq__58337;
var G__58761 = chunk__58338;
var G__58762 = count__58339;
var G__58763 = (i__58340 + (1));
seq__58337 = G__58760;
chunk__58338 = G__58761;
count__58339 = G__58762;
i__58340 = G__58763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58337);
if(temp__5753__auto__){
var seq__58337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58337__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58337__$1);
var G__58765 = cljs.core.chunk_rest(seq__58337__$1);
var G__58766 = c__4550__auto__;
var G__58767 = cljs.core.count(c__4550__auto__);
var G__58768 = (0);
seq__58337 = G__58765;
chunk__58338 = G__58766;
count__58339 = G__58767;
i__58340 = G__58768;
continue;
} else {
var js_ns = cljs.core.first(seq__58337__$1);
var require_str_58776 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58776);


var G__58777 = cljs.core.next(seq__58337__$1);
var G__58778 = null;
var G__58779 = (0);
var G__58780 = (0);
seq__58337 = G__58777;
chunk__58338 = G__58778;
count__58339 = G__58779;
i__58340 = G__58780;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__58354 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__58354) : callback.call(null,G__58354));
} else {
var G__58355 = shadow.cljs.devtools.client.env.files_url();
var G__58356 = ((function (G__58355){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__58355))
;
var G__58357 = "POST";
var G__58358 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__58359 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58355,G__58356,G__58357,G__58358,G__58359);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__58372){
var map__58374 = p__58372;
var map__58374__$1 = (((((!((map__58374 == null))))?(((((map__58374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58374):map__58374);
var msg = map__58374__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__58376 = info;
var map__58376__$1 = (((((!((map__58376 == null))))?(((((map__58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58376):map__58376);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58382(s__58383){
return (new cljs.core.LazySeq(null,((function (map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info){
return (function (){
var s__58383__$1 = s__58383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58383__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__58392 = cljs.core.first(xs__6308__auto__);
var map__58392__$1 = (((((!((map__58392 == null))))?(((((map__58392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58392):map__58392);
var src = map__58392__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__58383__$1,map__58392,map__58392__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58382_$_iter__58384(s__58385){
return (new cljs.core.LazySeq(null,((function (s__58383__$1,map__58392,map__58392__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info){
return (function (){
var s__58385__$1 = s__58385;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__58385__$1);
if(temp__5753__auto____$1){
var s__58385__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58385__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58385__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58387 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58386 = (0);
while(true){
if((i__58386 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58386);
cljs.core.chunk_append(b__58387,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58803 = (i__58386 + (1));
i__58386 = G__58803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58387),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58382_$_iter__58384(cljs.core.chunk_rest(s__58385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58387),null);
}
} else {
var warning = cljs.core.first(s__58385__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58382_$_iter__58384(cljs.core.rest(s__58385__$2)));
}
} else {
return null;
}
break;
}
});})(s__58383__$1,map__58392,map__58392__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info))
,null,null));
});})(s__58383__$1,map__58392,map__58392__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58382(cljs.core.rest(s__58383__$1)));
} else {
var G__58805 = cljs.core.rest(s__58383__$1);
s__58383__$1 = G__58805;
continue;
}
} else {
var G__58806 = cljs.core.rest(s__58383__$1);
s__58383__$1 = G__58806;
continue;
}
} else {
return null;
}
break;
}
});})(map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info))
,null,null));
});})(map__58376,map__58376__$1,sources,compiled,map__58374,map__58374__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__58410_58811 = cljs.core.seq(warnings);
var chunk__58411_58812 = null;
var count__58412_58813 = (0);
var i__58413_58814 = (0);
while(true){
if((i__58413_58814 < count__58412_58813)){
var map__58429_58815 = chunk__58411_58812.cljs$core$IIndexed$_nth$arity$2(null,i__58413_58814);
var map__58429_58816__$1 = (((((!((map__58429_58815 == null))))?(((((map__58429_58815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58429_58815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58429_58815):map__58429_58815);
var w_58817 = map__58429_58816__$1;
var msg_58818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429_58816__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429_58816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429_58816__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429_58816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58821)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58819),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58820),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58818__$1)].join(''));


var G__58825 = seq__58410_58811;
var G__58826 = chunk__58411_58812;
var G__58827 = count__58412_58813;
var G__58828 = (i__58413_58814 + (1));
seq__58410_58811 = G__58825;
chunk__58411_58812 = G__58826;
count__58412_58813 = G__58827;
i__58413_58814 = G__58828;
continue;
} else {
var temp__5753__auto___58829 = cljs.core.seq(seq__58410_58811);
if(temp__5753__auto___58829){
var seq__58410_58830__$1 = temp__5753__auto___58829;
if(cljs.core.chunked_seq_QMARK_(seq__58410_58830__$1)){
var c__4550__auto___58832 = cljs.core.chunk_first(seq__58410_58830__$1);
var G__58836 = cljs.core.chunk_rest(seq__58410_58830__$1);
var G__58837 = c__4550__auto___58832;
var G__58838 = cljs.core.count(c__4550__auto___58832);
var G__58839 = (0);
seq__58410_58811 = G__58836;
chunk__58411_58812 = G__58837;
count__58412_58813 = G__58838;
i__58413_58814 = G__58839;
continue;
} else {
var map__58445_58841 = cljs.core.first(seq__58410_58830__$1);
var map__58445_58842__$1 = (((((!((map__58445_58841 == null))))?(((((map__58445_58841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58445_58841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58445_58841):map__58445_58841);
var w_58843 = map__58445_58842__$1;
var msg_58844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445_58842__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445_58842__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445_58842__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445_58842__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58847)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58845),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58846),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58844__$1)].join(''));


var G__58848 = cljs.core.next(seq__58410_58830__$1);
var G__58849 = null;
var G__58850 = (0);
var G__58851 = (0);
seq__58410_58811 = G__58848;
chunk__58411_58812 = G__58849;
count__58412_58813 = G__58850;
i__58413_58814 = G__58851;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info){
return (function (p__58454){
var map__58455 = p__58454;
var map__58455__$1 = (((((!((map__58455 == null))))?(((((map__58455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58455):map__58455);
var src = map__58455__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info){
return (function (p__58465){
var map__58467 = p__58465;
var map__58467__$1 = (((((!((map__58467 == null))))?(((((map__58467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58467):map__58467);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info){
return (function (p__58471){
var map__58472 = p__58471;
var map__58472__$1 = (((((!((map__58472 == null))))?(((((map__58472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58472):map__58472);
var rc = map__58472__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info){
return (function (p1__58366_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58366_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__58376,map__58376__$1,sources,compiled,warnings,map__58374,map__58374__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__58484){
var map__58485 = p__58484;
var map__58485__$1 = (((((!((map__58485 == null))))?(((((map__58485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58485):map__58485);
var msg = map__58485__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58487 = cljs.core.seq(updates);
var chunk__58489 = null;
var count__58490 = (0);
var i__58491 = (0);
while(true){
if((i__58491 < count__58490)){
var path = chunk__58489.cljs$core$IIndexed$_nth$arity$2(null,i__58491);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58548_58884 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58551_58885 = null;
var count__58552_58886 = (0);
var i__58553_58887 = (0);
while(true){
if((i__58553_58887 < count__58552_58886)){
var node_58888 = chunk__58551_58885.cljs$core$IIndexed$_nth$arity$2(null,i__58553_58887);
var path_match_58889 = shadow.cljs.devtools.client.browser.match_paths(node_58888.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58889)){
var new_link_58890 = (function (){var G__58560 = node_58888.cloneNode(true);
G__58560.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58889),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58560;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58889], 0));

goog.dom.insertSiblingAfter(new_link_58890,node_58888);

goog.dom.removeNode(node_58888);


var G__58891 = seq__58548_58884;
var G__58892 = chunk__58551_58885;
var G__58893 = count__58552_58886;
var G__58894 = (i__58553_58887 + (1));
seq__58548_58884 = G__58891;
chunk__58551_58885 = G__58892;
count__58552_58886 = G__58893;
i__58553_58887 = G__58894;
continue;
} else {
var G__58895 = seq__58548_58884;
var G__58896 = chunk__58551_58885;
var G__58897 = count__58552_58886;
var G__58898 = (i__58553_58887 + (1));
seq__58548_58884 = G__58895;
chunk__58551_58885 = G__58896;
count__58552_58886 = G__58897;
i__58553_58887 = G__58898;
continue;
}
} else {
var temp__5753__auto___58899 = cljs.core.seq(seq__58548_58884);
if(temp__5753__auto___58899){
var seq__58548_58900__$1 = temp__5753__auto___58899;
if(cljs.core.chunked_seq_QMARK_(seq__58548_58900__$1)){
var c__4550__auto___58901 = cljs.core.chunk_first(seq__58548_58900__$1);
var G__58902 = cljs.core.chunk_rest(seq__58548_58900__$1);
var G__58903 = c__4550__auto___58901;
var G__58904 = cljs.core.count(c__4550__auto___58901);
var G__58905 = (0);
seq__58548_58884 = G__58902;
chunk__58551_58885 = G__58903;
count__58552_58886 = G__58904;
i__58553_58887 = G__58905;
continue;
} else {
var node_58906 = cljs.core.first(seq__58548_58900__$1);
var path_match_58907 = shadow.cljs.devtools.client.browser.match_paths(node_58906.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58907)){
var new_link_58909 = (function (){var G__58567 = node_58906.cloneNode(true);
G__58567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58907),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58567;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58907], 0));

goog.dom.insertSiblingAfter(new_link_58909,node_58906);

goog.dom.removeNode(node_58906);


var G__58914 = cljs.core.next(seq__58548_58900__$1);
var G__58915 = null;
var G__58916 = (0);
var G__58917 = (0);
seq__58548_58884 = G__58914;
chunk__58551_58885 = G__58915;
count__58552_58886 = G__58916;
i__58553_58887 = G__58917;
continue;
} else {
var G__58919 = cljs.core.next(seq__58548_58900__$1);
var G__58920 = null;
var G__58921 = (0);
var G__58922 = (0);
seq__58548_58884 = G__58919;
chunk__58551_58885 = G__58920;
count__58552_58886 = G__58921;
i__58553_58887 = G__58922;
continue;
}
}
} else {
}
}
break;
}


var G__58924 = seq__58487;
var G__58925 = chunk__58489;
var G__58926 = count__58490;
var G__58927 = (i__58491 + (1));
seq__58487 = G__58924;
chunk__58489 = G__58925;
count__58490 = G__58926;
i__58491 = G__58927;
continue;
} else {
var G__58929 = seq__58487;
var G__58930 = chunk__58489;
var G__58931 = count__58490;
var G__58932 = (i__58491 + (1));
seq__58487 = G__58929;
chunk__58489 = G__58930;
count__58490 = G__58931;
i__58491 = G__58932;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58487);
if(temp__5753__auto__){
var seq__58487__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58487__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58487__$1);
var G__58933 = cljs.core.chunk_rest(seq__58487__$1);
var G__58934 = c__4550__auto__;
var G__58935 = cljs.core.count(c__4550__auto__);
var G__58936 = (0);
seq__58487 = G__58933;
chunk__58489 = G__58934;
count__58490 = G__58935;
i__58491 = G__58936;
continue;
} else {
var path = cljs.core.first(seq__58487__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58568_58937 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58571_58938 = null;
var count__58572_58939 = (0);
var i__58573_58940 = (0);
while(true){
if((i__58573_58940 < count__58572_58939)){
var node_58941 = chunk__58571_58938.cljs$core$IIndexed$_nth$arity$2(null,i__58573_58940);
var path_match_58942 = shadow.cljs.devtools.client.browser.match_paths(node_58941.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58942)){
var new_link_58944 = (function (){var G__58595 = node_58941.cloneNode(true);
G__58595.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58942),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58595;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58942], 0));

goog.dom.insertSiblingAfter(new_link_58944,node_58941);

goog.dom.removeNode(node_58941);


var G__58952 = seq__58568_58937;
var G__58953 = chunk__58571_58938;
var G__58954 = count__58572_58939;
var G__58955 = (i__58573_58940 + (1));
seq__58568_58937 = G__58952;
chunk__58571_58938 = G__58953;
count__58572_58939 = G__58954;
i__58573_58940 = G__58955;
continue;
} else {
var G__58956 = seq__58568_58937;
var G__58957 = chunk__58571_58938;
var G__58958 = count__58572_58939;
var G__58959 = (i__58573_58940 + (1));
seq__58568_58937 = G__58956;
chunk__58571_58938 = G__58957;
count__58572_58939 = G__58958;
i__58573_58940 = G__58959;
continue;
}
} else {
var temp__5753__auto___58960__$1 = cljs.core.seq(seq__58568_58937);
if(temp__5753__auto___58960__$1){
var seq__58568_58961__$1 = temp__5753__auto___58960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58568_58961__$1)){
var c__4550__auto___58964 = cljs.core.chunk_first(seq__58568_58961__$1);
var G__58965 = cljs.core.chunk_rest(seq__58568_58961__$1);
var G__58966 = c__4550__auto___58964;
var G__58967 = cljs.core.count(c__4550__auto___58964);
var G__58968 = (0);
seq__58568_58937 = G__58965;
chunk__58571_58938 = G__58966;
count__58572_58939 = G__58967;
i__58573_58940 = G__58968;
continue;
} else {
var node_58971 = cljs.core.first(seq__58568_58961__$1);
var path_match_58972 = shadow.cljs.devtools.client.browser.match_paths(node_58971.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58972)){
var new_link_58973 = (function (){var G__58597 = node_58971.cloneNode(true);
G__58597.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58972),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58597;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58972], 0));

goog.dom.insertSiblingAfter(new_link_58973,node_58971);

goog.dom.removeNode(node_58971);


var G__58975 = cljs.core.next(seq__58568_58961__$1);
var G__58976 = null;
var G__58977 = (0);
var G__58978 = (0);
seq__58568_58937 = G__58975;
chunk__58571_58938 = G__58976;
count__58572_58939 = G__58977;
i__58573_58940 = G__58978;
continue;
} else {
var G__58979 = cljs.core.next(seq__58568_58961__$1);
var G__58980 = null;
var G__58981 = (0);
var G__58982 = (0);
seq__58568_58937 = G__58979;
chunk__58571_58938 = G__58980;
count__58572_58939 = G__58981;
i__58573_58940 = G__58982;
continue;
}
}
} else {
}
}
break;
}


var G__58984 = cljs.core.next(seq__58487__$1);
var G__58985 = null;
var G__58986 = (0);
var G__58987 = (0);
seq__58487 = G__58984;
chunk__58489 = G__58985;
count__58490 = G__58986;
i__58491 = G__58987;
continue;
} else {
var G__58989 = cljs.core.next(seq__58487__$1);
var G__58990 = null;
var G__58991 = (0);
var G__58992 = (0);
seq__58487 = G__58989;
chunk__58489 = G__58990;
count__58490 = G__58991;
i__58491 = G__58992;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__58611){
var map__58612 = p__58611;
var map__58612__$1 = (((((!((map__58612 == null))))?(((((map__58612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58612):map__58612);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__58612,map__58612__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__58612,map__58612__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__58615,done){
var map__58616 = p__58615;
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var msg = map__58616__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__58616,map__58616__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__58626){
var map__58627 = p__58626;
var map__58627__$1 = (((((!((map__58627 == null))))?(((((map__58627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58627):map__58627);
var src = map__58627__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__58616,map__58616__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__58616,map__58616__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e58633){var e = e58633;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__58616,map__58616__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__58638,done){
var map__58639 = p__58638;
var map__58639__$1 = (((((!((map__58639 == null))))?(((((map__58639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58639):map__58639);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__58639,map__58639__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__58639,map__58639__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__58647){
var map__58648 = p__58647;
var map__58648__$1 = (((((!((map__58648 == null))))?(((((map__58648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58648):map__58648);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__58652,done){
var map__58653 = p__58652;
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var msg = map__58653__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__58655_59037 = type;
var G__58655_59038__$1 = (((G__58655_59037 instanceof cljs.core.Keyword))?G__58655_59037.fqn:null);
switch (G__58655_59038__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__58660 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__58661 = ((function (G__58660){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__58660))
;
var G__58662 = "POST";
var G__58663 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__58664 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__58660,G__58661,G__58662,G__58663,G__58664);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5753__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e58678){var e = e58678;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5753__auto___59066 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5753__auto___59066)){
var s_59067 = temp__5753__auto___59066;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_59067.onclose = ((function (s_59067,temp__5753__auto___59066){
return (function (e){
return null;
});})(s_59067,temp__5753__auto___59066))
;

s_59067.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5753__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
