goog.provide('app.client');

var options__56561__auto___62966 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","model","car/model",331054627)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","id","car/id",-1388434848).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62891 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62891__$1 = (((((!((map__62891 == null))))?(((((map__62891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62891):map__62891);
var props = map__62891__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62891__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62891__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "field"}),com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Car = ((function (options__56561__auto___62966){
return (function app$client$Car(props__56562__auto__){
var this__56563__auto__ = this;
var temp__5751__auto___62967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56561__auto___62966,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___62967)){
var init_state__56564__auto___62968 = temp__5751__auto___62967;
this__56563__auto__.state = (function (){var obj62913 = ({"fulcro$state":(function (){var G__62914 = this__56563__auto__;
var G__62915 = goog.object.get(props__56562__auto__,"fulcro$value");
return (init_state__56564__auto___62968.cljs$core$IFn$_invoke$arity$2 ? init_state__56564__auto___62968.cljs$core$IFn$_invoke$arity$2(G__62914,G__62915) : init_state__56564__auto___62968.call(null,G__62914,G__62915));
})()});
return obj62913;
})();
} else {
this__56563__auto__.state = (function (){var obj62917 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj62917;
})();
}

return null;
});})(options__56561__auto___62966))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__56561__auto___62966);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__56561__auto___62969 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Car)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("person","age","person/age",387881455),(20),new cljs.core.Keyword("person","cars","person/cars",1835683721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(40),new cljs.core.Keyword(null,"model","model",331153215),"Ford"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(41),new cljs.core.Keyword(null,"model","model",331153215),"Escort"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(42),new cljs.core.Keyword(null,"model","model",331153215),"Volvo"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),app.client.Car], null),params);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,props){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
return console.log(">Click");
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62932 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62932__$1 = (((((!((map__62932 == null))))?(((((map__62932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62932):map__62932);
var props = map__62932__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62932__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62932__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62932__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62932__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
var onClick = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "field"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "field"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),"Name :"], null),null)),com.fulcrologic.fulcro.components.force_children(name)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "field"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Age: "])),com.fulcrologic.fulcro.components.force_children(age)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Cars"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ul",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars))]))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Person = ((function (options__56561__auto___62969){
return (function app$client$Person(props__56562__auto__){
var this__56563__auto__ = this;
var temp__5751__auto___62970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56561__auto___62969,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___62970)){
var init_state__56564__auto___62971 = temp__5751__auto___62970;
this__56563__auto__.state = (function (){var obj62942 = ({"fulcro$state":(function (){var G__62943 = this__56563__auto__;
var G__62944 = goog.object.get(props__56562__auto__,"fulcro$value");
return (init_state__56564__auto___62971.cljs$core$IFn$_invoke$arity$2 ? init_state__56564__auto___62971.cljs$core$IFn$_invoke$arity$2(G__62943,G__62944) : init_state__56564__auto___62971.call(null,G__62943,G__62944));
})()});
return obj62942;
})();
} else {
this__56563__auto__.state = (function (){var obj62946 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj62946;
})();
}

return null;
});})(options__56561__auto___62969))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__56561__auto___62969);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__56561__auto___62972 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__62947,_,___$1){
var map__62948 = p__62947;
var map__62948__$1 = (((((!((map__62948 == null))))?(((((map__62948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62948):map__62948);
var props = map__62948__$1;
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62948__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Bob"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Sally"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),app.client.Person], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62950 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62950__$1 = (((((!((map__62950 == null))))?(((((map__62950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62950):map__62950);
var props = map__62950__$1;
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62950__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"-People"]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_person,people)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonList = ((function (options__56561__auto___62972){
return (function app$client$PersonList(props__56562__auto__){
var this__56563__auto__ = this;
var temp__5751__auto___62973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56561__auto___62972,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___62973)){
var init_state__56564__auto___62974 = temp__5751__auto___62973;
this__56563__auto__.state = (function (){var obj62953 = ({"fulcro$state":(function (){var G__62954 = this__56563__auto__;
var G__62955 = goog.object.get(props__56562__auto__,"fulcro$value");
return (init_state__56564__auto___62974.cljs$core$IFn$_invoke$arity$2 ? init_state__56564__auto___62974.cljs$core$IFn$_invoke$arity$2(G__62954,G__62955) : init_state__56564__auto___62974.call(null,G__62954,G__62955));
})()});
return obj62953;
})();
} else {
this__56563__auto__.state = (function (){var obj62957 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj62957;
})();
}

return null;
});})(options__56561__auto___62972))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonList,new cljs.core.Keyword("app.client","PersonList","app.client/PersonList",746982741),options__56561__auto___62972);
app.client.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonList);

var options__56561__auto___62975 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),app.client.PersonList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62958 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62958__$1 = (((((!((map__62958 == null))))?(((((map__62958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62958):map__62958);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62958__$1,new cljs.core.Keyword("root","people","root/people",1439769370));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(people)?(app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1(people) : app.client.ui_person_list.call(null,people)):null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Sample = ((function (options__56561__auto___62975){
return (function app$client$Sample(props__56562__auto__){
var this__56563__auto__ = this;
var temp__5751__auto___62976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56561__auto___62975,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___62976)){
var init_state__56564__auto___62977 = temp__5751__auto___62976;
this__56563__auto__.state = (function (){var obj62961 = ({"fulcro$state":(function (){var G__62962 = this__56563__auto__;
var G__62963 = goog.object.get(props__56562__auto__,"fulcro$value");
return (init_state__56564__auto___62977.cljs$core$IFn$_invoke$arity$2 ? init_state__56564__auto___62977.cljs$core$IFn$_invoke$arity$2(G__62962,G__62963) : init_state__56564__auto___62977.call(null,G__62962,G__62963));
})()});
return obj62961;
})();
} else {
this__56563__auto__.state = (function (){var obj62965 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj62965;
})();
}

return null;
});})(options__56561__auto___62975))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__56561__auto___62975);
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
app.client.f = (function app$client$f(x){
return (x * x);
});
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
