goog.provide('ghostwheel.reporting');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.test');
goog.require('expound.alpha');
goog.require('clojure.string');
goog.require('ghostwheel.logging');
ghostwheel.reporting._STAR_all_tests_successful = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
ghostwheel.reporting.wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.wrap_line,(80));
ghostwheel.reporting.inc_report_counter_BANG_ = cljs.test.inc_report_counter_BANG_;
ghostwheel.reporting.warning_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
ghostwheel.reporting.snippets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498)," => Test coverage incomplete:",new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005)," => No generative testing performed"], null);
if((typeof ghostwheel !== 'undefined') && (typeof ghostwheel.reporting !== 'undefined') && (typeof ghostwheel.reporting.report !== 'undefined')){
} else {
ghostwheel.reporting.report = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56296 = cljs.core.get_global_hierarchy;
return (fexpr__56296.cljs$core$IFn$_invoke$arity$0 ? fexpr__56296.cljs$core$IFn$_invoke$arity$0() : fexpr__56296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ghostwheel.reporting","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (m){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["Checking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m))," ..."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base01","base01",277019065).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (m){
return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (m){
var map__56310 = m;
var map__56310__$1 = (((((!((map__56310 == null))))?(((((map__56310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56310):map__56310);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"test","test",577538877));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var passed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pass,test);
var warnings_QMARK_ = (function (){var G__56318 = warn;
if((G__56318 == null)){
return null;
} else {
return (G__56318 > (0));
}
})();
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):((passed_QMARK_)?new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
));
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?"No active tests found":((passed_QMARK_)?["Passed all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks"].join(''):["Failed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks",(((error > (0)))?["; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," test error(s)"].join(''):null)].join('')
));
ghostwheel.logging.group_end();

if(cljs.core.truth_((function (){var or__4131__auto__ = (!(passed_QMARK_));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return warnings_QMARK_;
}
})())){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),color], null));

if(cljs.core.truth_(warnings_QMARK_)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(warn)," warning(s)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
} else {
}

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),ghostwheel.logging.group_end));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
var map__56335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__56335__$1 = (((((!((map__56335 == null))))?(((((map__56335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56335):map__56335);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var fspec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275));
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var check_coverage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858));
var marked_unsafe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850));
var report_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword("ghostwheel.reporting","report-output","ghostwheel.reporting/report-output",-1798642788));
var G__56344_56791 = new cljs.core.Keyword(null,"pass","pass",1574159993);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__56344_56791) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__56344_56791));

if(cljs.core.truth_(check_coverage)){
if(cljs.core.truth_(marked_unsafe)){
var G__56345_56795 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__56345_56795) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__56345_56795));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Function marked as unsafe.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(fspec)){
var G__56346_56799 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__56346_56799) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__56346_56799));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Missing fspec(s)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(spec_checks)){
var G__56349_56807 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__56349_56807) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__56349_56807));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Number of tests set to 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
return null;

}
}
}
} else {
return null;
}
}));
ghostwheel.reporting.explain_problem_str = (function ghostwheel$reporting$explain_problem_str(failure_type,problem){
var map__56368 = problem;
var map__56368__$1 = (((((!((map__56368 == null))))?(((((map__56368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56368):map__56368);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"val","val",128701612));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var G__56373 = failure_type;
var G__56373__$1 = (((G__56373 instanceof cljs.core.Keyword))?G__56373.fqn:null);
switch (G__56373__$1) {
case "check-failed":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret","ret",-468222814)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1476951349),path], null):null),((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "instrument":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred,new cljs.core.Keyword(null,"at","at",1476951349),path], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "else":
return problem;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56373__$1)].join('')));

}
});
ghostwheel.reporting.issue_msg = "\nPlease file an issue at https://github.com/gnl/ghostwheel/issues if you encounter false positives or negatives in side effect detection.";
ghostwheel.reporting.report_unexpected_side_effects = (function ghostwheel$reporting$report_unexpected_side_effects(message){
var map__56389 = message;
var map__56389__$1 = (((((!((map__56389 == null))))?(((((map__56389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56389):map__56389);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56389__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var found_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56389__$1,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799));
ghostwheel.logging.log_bold("Possible side effects detected in function marked as safe:\n");

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.log,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56389,map__56389__$1,fn_name,found_fx){
return (function (p__56392){
var vec__56395 = p__56392;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(2),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(cljs.core.truth_(form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"at","at",-1177484420,null),form], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(details)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),details], null):null)], 0)));
});})(map__56389,map__56389__$1,fn_name,found_fx))
,found_fx)));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__56409 = ["=> Either remove the side effects, rename the function to '",[cljs.core.name(fn_name),"!'"].join('')," to mark it as unsafe, or add ^::g/ignore-fx to its metadata to disable this warning and consider the function safe for automated generative testing."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__56409) : ghostwheel.reporting.wrap.call(null,G__56409));
})());

return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));
});
ghostwheel.reporting.report_unexpected_safety = (function ghostwheel$reporting$report_unexpected_safety(message){
var safe_name = clojure.string.replace(cljs.core.name(new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528).cljs$core$IFn$_invoke$arity$1(message)),/!$/,"");
ghostwheel.logging.log_bold("No side effects detected in function marked as unsafe.");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__56416 = ["=> If safe, rename to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(safe_name),"'. If unsafe, rename the called unsafe functions to suffix them with a '!', or add the ^::g/ignore-fx metadata to disable this check."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__56416) : ghostwheel.reporting.wrap.call(null,G__56416));
})());

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));

return ghostwheel.logging.log;
});
ghostwheel.reporting.report_spec_check = (function ghostwheel$reporting$report_spec_check(p__56428){
var map__56429 = p__56428;
var map__56429__$1 = (((((!((map__56429 == null))))?(((((map__56429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56429):map__56429);
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56429__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56429__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var seq__56438 = cljs.core.seq(spec_checks);
var chunk__56442 = null;
var count__56443 = (0);
var i__56444 = (0);
while(true){
if((i__56444 < count__56443)){
var check = chunk__56442.cljs$core$IIndexed$_nth$arity$2(null,i__56444);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_56887 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_56888 = spec_error_56887.data;
var msg_56889 = (function (){try{return spec_error_56887.message;
}catch (e56553){if((e56553 instanceof Object)){
var _ = e56553;
return null;
} else {
throw e56553;

}
}})();
if(cljs.core.not(data_56888)){
ghostwheel.logging.log_bold(msg_56889);
} else {
var temp__5753__auto___56891 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_56888);
if(cljs.core.truth_(temp__5753__auto___56891)){
var args_56895 = temp__5753__auto___56891;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_56895));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_56888),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_56889))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56575_56906 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56576_56907 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56577_56908 = true;
var _STAR_print_fn_STAR__temp_val__56578_56909 = ((function (seq__56438,chunk__56442,count__56443,i__56444,_STAR_print_newline_STAR__orig_val__56575_56906,_STAR_print_fn_STAR__orig_val__56576_56907,_STAR_print_newline_STAR__temp_val__56577_56908,sb__4661__auto__,spec_error_56887,data_56888,msg_56889,test_ret,check,map__56429,map__56429__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__56438,chunk__56442,count__56443,i__56444,_STAR_print_newline_STAR__orig_val__56575_56906,_STAR_print_fn_STAR__orig_val__56576_56907,_STAR_print_newline_STAR__temp_val__56577_56908,sb__4661__auto__,spec_error_56887,data_56888,msg_56889,test_ret,check,map__56429,map__56429__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56577_56908;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56578_56909;

try{var fexpr__56585_56917 = expound.alpha.custom_printer(null);
(fexpr__56585_56917.cljs$core$IFn$_invoke$arity$1 ? fexpr__56585_56917.cljs$core$IFn$_invoke$arity$1(data_56888) : fexpr__56585_56917.call(null,data_56888));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56576_56907;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56575_56906;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_56889);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_56888);

ghostwheel.logging.group_end();
} else {
}
}


var G__56936 = seq__56438;
var G__56937 = chunk__56442;
var G__56938 = count__56443;
var G__56939 = (i__56444 + (1));
seq__56438 = G__56936;
chunk__56442 = G__56937;
count__56443 = G__56938;
i__56444 = G__56939;
continue;
} else {
var G__56944 = seq__56438;
var G__56945 = chunk__56442;
var G__56946 = count__56443;
var G__56947 = (i__56444 + (1));
seq__56438 = G__56944;
chunk__56442 = G__56945;
count__56443 = G__56946;
i__56444 = G__56947;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56438);
if(temp__5753__auto__){
var seq__56438__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56438__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56438__$1);
var G__56952 = cljs.core.chunk_rest(seq__56438__$1);
var G__56953 = c__4550__auto__;
var G__56954 = cljs.core.count(c__4550__auto__);
var G__56955 = (0);
seq__56438 = G__56952;
chunk__56442 = G__56953;
count__56443 = G__56954;
i__56444 = G__56955;
continue;
} else {
var check = cljs.core.first(seq__56438__$1);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_56957 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_56958 = spec_error_56957.data;
var msg_56959 = (function (){try{return spec_error_56957.message;
}catch (e56622){if((e56622 instanceof Object)){
var _ = e56622;
return null;
} else {
throw e56622;

}
}})();
if(cljs.core.not(data_56958)){
ghostwheel.logging.log_bold(msg_56959);
} else {
var temp__5753__auto___56965__$1 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_56958);
if(cljs.core.truth_(temp__5753__auto___56965__$1)){
var args_56966 = temp__5753__auto___56965__$1;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_56966));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_56958),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_56959))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56688_56975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56689_56976 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56690_56977 = true;
var _STAR_print_fn_STAR__temp_val__56691_56978 = ((function (seq__56438,chunk__56442,count__56443,i__56444,_STAR_print_newline_STAR__orig_val__56688_56975,_STAR_print_fn_STAR__orig_val__56689_56976,_STAR_print_newline_STAR__temp_val__56690_56977,sb__4661__auto__,spec_error_56957,data_56958,msg_56959,test_ret,check,seq__56438__$1,temp__5753__auto__,map__56429,map__56429__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__56438,chunk__56442,count__56443,i__56444,_STAR_print_newline_STAR__orig_val__56688_56975,_STAR_print_fn_STAR__orig_val__56689_56976,_STAR_print_newline_STAR__temp_val__56690_56977,sb__4661__auto__,spec_error_56957,data_56958,msg_56959,test_ret,check,seq__56438__$1,temp__5753__auto__,map__56429,map__56429__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56690_56977;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56691_56978;

try{var fexpr__56701_56986 = expound.alpha.custom_printer(null);
(fexpr__56701_56986.cljs$core$IFn$_invoke$arity$1 ? fexpr__56701_56986.cljs$core$IFn$_invoke$arity$1(data_56958) : fexpr__56701_56986.call(null,data_56958));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56689_56976;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56688_56975;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_56959);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_56958);

ghostwheel.logging.group_end();
} else {
}
}


var G__56997 = cljs.core.next(seq__56438__$1);
var G__56998 = null;
var G__56999 = (0);
var G__57000 = (0);
seq__56438 = G__56997;
chunk__56442 = G__56998;
count__56443 = G__56999;
i__56444 = G__57000;
continue;
} else {
var G__57001 = cljs.core.next(seq__56438__$1);
var G__57002 = null;
var G__57003 = (0);
var G__57004 = (0);
seq__56438 = G__57001;
chunk__56442 = G__57002;
count__56443 = G__57003;
i__56444 = G__57004;
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
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__56707 = message;
var map__56707__$1 = (((((!((map__56707 == null))))?(((((map__56707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56707):map__56707);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56707__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56707__$1,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845));
var summary = (function (){var G__56715 = failure;
var G__56715__$1 = (((G__56715 instanceof cljs.core.Keyword))?G__56715.fqn:null);
switch (G__56715__$1) {
case "ghostwheel.reporting/unexpected-fx":
return "Possible side effects detected";

break;
case "ghostwheel.reporting/unexpected-safety":
return "Expected side effects not detected";

break;
case "ghostwheel.reporting/spec-failure":
return "Spec check";

break;
default:
return null;

}
})();
var start_group = ghostwheel.logging.group;
var G__56717_57016 = new cljs.core.Keyword(null,"fail","fail",1706214930);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__56717_57016) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__56717_57016));

var G__56719_57018 = ["FAILED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(summary)].join('');
var G__56720_57019 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
(start_group.cljs$core$IFn$_invoke$arity$2 ? start_group.cljs$core$IFn$_invoke$arity$2(G__56719_57018,G__56720_57019) : start_group.call(null,G__56719_57018,G__56720_57019));

var G__56722_57028 = failure;
var G__56722_57029__$1 = (((G__56722_57028 instanceof cljs.core.Keyword))?G__56722_57028.fqn:null);
switch (G__56722_57029__$1) {
case "ghostwheel.reporting/unexpected-fx":
ghostwheel.reporting.report_unexpected_side_effects(message);

break;
case "ghostwheel.reporting/unexpected-safety":
ghostwheel.reporting.report_unexpected_safety(message);

break;
case "ghostwheel.reporting/spec-failure":
ghostwheel.reporting.report_spec_check(message);

break;
default:
ghostwheel.logging.log_bold(["Undefined failure reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure)].join(''));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(message);

}

return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ghostwheel.reporting._STAR_all_tests_successful,(function (p1__56730_SHARP_,p2__56731_SHARP_){
var and__4120__auto__ = p1__56730_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return p2__56731_SHARP_;
} else {
return and__4120__auto__;
}
}),cljs.test.successful_QMARK_(m));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));

//# sourceMappingURL=ghostwheel.reporting.js.map
