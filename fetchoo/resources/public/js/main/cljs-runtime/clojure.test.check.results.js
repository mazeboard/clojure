goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__41569_41618 = clojure.test.check.results.pass_QMARK_;
var G__41570_41619 = "_";
var G__41571_41620 = ((function (G__41569_41618,G__41570_41619){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__41569_41618,G__41570_41619))
;
goog.object.set(G__41569_41618,G__41570_41619,G__41571_41620);

var G__41575_41623 = clojure.test.check.results.result_data;
var G__41576_41624 = "_";
var G__41577_41625 = ((function (G__41575_41623,G__41576_41624){
return (function (this$){
return null;
});})(G__41575_41623,G__41576_41624))
;
goog.object.set(G__41575_41623,G__41576_41624,G__41577_41625);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__41582_41630 = clojure.test.check.results.pass_QMARK_;
var G__41583_41631 = "null";
var G__41584_41632 = ((function (G__41582_41630,G__41583_41631){
return (function (this$){
return false;
});})(G__41582_41630,G__41583_41631))
;
goog.object.set(G__41582_41630,G__41583_41631,G__41584_41632);

var G__41591_41634 = clojure.test.check.results.result_data;
var G__41592_41635 = "null";
var G__41593_41636 = ((function (G__41591_41634,G__41592_41635){
return (function (this$){
return null;
});})(G__41591_41634,G__41592_41635))
;
goog.object.set(G__41591_41634,G__41592_41635,G__41593_41636);

//# sourceMappingURL=clojure.test.check.results.js.map
