goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__49232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49232__auto__){
return (function (){
var f__49233__auto__ = (function (){var switch__49057__auto__ = ((function (c__49232__auto__){
return (function (state_54954){
var state_val_54955 = (state_54954[(1)]);
if((state_val_54955 === (7))){
var inst_54950 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54956_55047 = state_54954__$1;
(statearr_54956_55047[(2)] = inst_54950);

(statearr_54956_55047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (1))){
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54954__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_54955 === (4))){
var inst_54952 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54954__$1,inst_54952);
} else {
if((state_val_54955 === (6))){
var inst_54948 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_54954__$1 = state_54954;
var statearr_54958_55048 = state_54954__$1;
(statearr_54958_55048[(2)] = inst_54948);

(statearr_54958_55048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (3))){
var inst_54928 = (state_54954[(7)]);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54928)){
var statearr_54962_55050 = state_54954__$1;
(statearr_54962_55050[(1)] = (5));

} else {
var statearr_54963_55051 = state_54954__$1;
(statearr_54963_55051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (12))){
var inst_54945 = (state_54954[(2)]);
var inst_54928 = inst_54945;
var state_54954__$1 = (function (){var statearr_54966 = state_54954;
(statearr_54966[(7)] = inst_54928);

return statearr_54966;
})();
var statearr_54968_55052 = state_54954__$1;
(statearr_54968_55052[(2)] = null);

(statearr_54968_55052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (2))){
var inst_54927 = (state_54954[(2)]);
var inst_54928 = inst_54927;
var state_54954__$1 = (function (){var statearr_54970 = state_54954;
(statearr_54970[(7)] = inst_54928);

return statearr_54970;
})();
var statearr_54972_55054 = state_54954__$1;
(statearr_54972_55054[(2)] = null);

(statearr_54972_55054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (11))){
var _ = (function (){var statearr_54976 = state_54954;
(statearr_54976[(4)] = cljs.core.rest((state_54954[(4)])));

return statearr_54976;
})();
var state_54954__$1 = state_54954;
var ex54964 = (state_54954__$1[(2)]);
var statearr_54977_55055 = state_54954__$1;
(statearr_54977_55055[(5)] = ex54964);


var statearr_54978_55056 = state_54954__$1;
(statearr_54978_55056[(1)] = (10));

(statearr_54978_55056[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (9))){
var inst_54943 = (state_54954[(2)]);
var state_54954__$1 = (function (){var statearr_54979 = state_54954;
(statearr_54979[(8)] = inst_54943);

return statearr_54979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54954__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_54955 === (5))){
var state_54954__$1 = state_54954;
var statearr_54980_55058 = state_54954__$1;
(statearr_54980_55058[(2)] = null);

(statearr_54980_55058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (10))){
var inst_54931 = (state_54954[(2)]);
var state_54954__$1 = (function (){var statearr_54982 = state_54954;
(statearr_54982[(9)] = inst_54931);

return statearr_54982;
})();
var statearr_54983_55060 = state_54954__$1;
(statearr_54983_55060[(2)] = null);

(statearr_54983_55060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (8))){
var inst_54928 = (state_54954[(7)]);
var _ = (function (){var statearr_54984 = state_54954;
(statearr_54984[(4)] = cljs.core.cons((11),(state_54954[(4)])));

return statearr_54984;
})();
var inst_54940 = (inst_54928.cljs$core$IFn$_invoke$arity$0 ? inst_54928.cljs$core$IFn$_invoke$arity$0() : inst_54928.call(null));
var ___$1 = (function (){var statearr_54987 = state_54954;
(statearr_54987[(4)] = cljs.core.rest((state_54954[(4)])));

return statearr_54987;
})();
var state_54954__$1 = state_54954;
var statearr_54989_55061 = state_54954__$1;
(statearr_54989_55061[(2)] = inst_54940);

(statearr_54989_55061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__49232__auto__))
;
return ((function (switch__49057__auto__,c__49232__auto__){
return (function() {
var com$fulcrologic$guardrails$core$state_machine__49058__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__49058__auto____0 = (function (){
var statearr_54990 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54990[(0)] = com$fulcrologic$guardrails$core$state_machine__49058__auto__);

(statearr_54990[(1)] = (1));

return statearr_54990;
});
var com$fulcrologic$guardrails$core$state_machine__49058__auto____1 = (function (state_54954){
while(true){
var ret_value__49059__auto__ = (function (){try{while(true){
var result__49060__auto__ = switch__49057__auto__(state_54954);
if(cljs.core.keyword_identical_QMARK_(result__49060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49060__auto__;
}
break;
}
}catch (e54991){var ex__49061__auto__ = e54991;
var statearr_54992_55064 = state_54954;
(statearr_54992_55064[(2)] = ex__49061__auto__);


if(cljs.core.seq((state_54954[(4)]))){
var statearr_54993_55065 = state_54954;
(statearr_54993_55065[(1)] = cljs.core.first((state_54954[(4)])));

} else {
throw ex__49061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55066 = state_54954;
state_54954 = G__55066;
continue;
} else {
return ret_value__49059__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__49058__auto__ = function(state_54954){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__49058__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__49058__auto____1.call(this,state_54954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__49058__auto____0;
com$fulcrologic$guardrails$core$state_machine__49058__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__49058__auto____1;
return com$fulcrologic$guardrails$core$state_machine__49058__auto__;
})()
;})(switch__49057__auto__,c__49232__auto__))
})();
var state__49234__auto__ = (function (){var statearr_54998 = f__49233__auto__();
(statearr_54998[(6)] = c__49232__auto__);

return statearr_54998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49234__auto__);
});})(c__49232__auto__))
);

return c__49232__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__54999 = data;
var map__54999__$1 = (((((!((map__54999 == null))))?(((((map__54999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54999):map__54999);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__55007,spec,value){
var map__55008 = p__55007;
var map__55008__$1 = (((((!((map__55008 == null))))?(((((map__55008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55008):map__55008);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_55069 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__55070 = (function (){var and__4120__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return vararg_QMARK_;
} else {
return and__4120__auto__;
}
})();
var varg_55071 = (cljs.core.truth_(vargs_QMARK__55070)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_55072 = (cljs.core.truth_(vargs_QMARK__55070)?((cljs.core.map_QMARK_(varg_55071))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_55071))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_55071))):value);
var valid_exception_55073 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_55072)){
} else {
var problem_55074 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_55072,expound_opts);
var description_55075 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_55074)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_55073,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_55075,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_55072], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_55075,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = callsite;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e55010){var e_55076 = e55010;
com.fulcrologic.guardrails.utils.report_exception(e_55076,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_55077 = (com.fulcrologic.guardrails.core.now_ms() - start_55069);
if((duration_55077 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_55077),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_55073))){
throw cljs.core.deref(valid_exception_55073);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
