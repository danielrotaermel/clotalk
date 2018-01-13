// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__49267__auto__,k__49268__auto__){
var self__ = this;
var this__49267__auto____$1 = this;
return this__49267__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__49268__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__49269__auto__,k67041,else__49270__auto__){
var self__ = this;
var this__49269__auto____$1 = this;
var G__67045 = k67041;
var G__67045__$1 = (((G__67045 instanceof cljs.core.Keyword))?G__67045.fqn:null);
switch (G__67045__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67041,else__49270__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__67046,opts){
var self__ = this;
var map__67047 = p__67046;
var map__67047__$1 = ((((!((map__67047 == null)))?((((map__67047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67047):map__67047);
var request__$1 = cljs.core.get.call(null,map__67047__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__67049 = this;
var map__67049__$1 = ((((!((map__67049 == null)))?((((map__67049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67049):map__67049);
var request__$2 = cljs.core.get.call(null,map__67049__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__67051,xhrio){
var self__ = this;
var map__67052 = p__67051;
var map__67052__$1 = ((((!((map__67052 == null)))?((((map__67052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67052):map__67052);
var response__$1 = cljs.core.get.call(null,map__67052__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__67054 = this;
var map__67054__$1 = ((((!((map__67054 == null)))?((((map__67054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67054):map__67054);
var response__$2 = cljs.core.get.call(null,map__67054__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__49281__auto__,writer__49282__auto__,opts__49283__auto__){
var self__ = this;
var this__49281__auto____$1 = this;
var pr_pair__49284__auto__ = ((function (this__49281__auto____$1){
return (function (keyval__49285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,cljs.core.pr_writer,""," ","",opts__49283__auto__,keyval__49285__auto__);
});})(this__49281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,pr_pair__49284__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__49283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67040){
var self__ = this;
var G__67040__$1 = this;
return (new cljs.core.RecordIter((0),G__67040__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__49265__auto__){
var self__ = this;
var this__49265__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__49262__auto__){
var self__ = this;
var this__49262__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__49271__auto__){
var self__ = this;
var this__49271__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__49263__auto__){
var self__ = this;
var this__49263__auto____$1 = this;
var h__49035__auto__ = self__.__hash;
if(!((h__49035__auto__ == null))){
return h__49035__auto__;
} else {
var h__49035__auto____$1 = ((function (h__49035__auto__,this__49263__auto____$1){
return (function (coll__49264__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__49264__auto__));
});})(h__49035__auto__,this__49263__auto____$1))
.call(null,this__49263__auto____$1);
self__.__hash = h__49035__auto____$1;

return h__49035__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67042,other67043){
var self__ = this;
var this67042__$1 = this;
return (!((other67043 == null))) && ((this67042__$1.constructor === other67043.constructor)) && (cljs.core._EQ_.call(null,this67042__$1.name,other67043.name)) && (cljs.core._EQ_.call(null,this67042__$1.request,other67043.request)) && (cljs.core._EQ_.call(null,this67042__$1.response,other67043.response)) && (cljs.core._EQ_.call(null,this67042__$1.__extmap,other67043.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__49276__auto__,k__49277__auto__){
var self__ = this;
var this__49276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__49277__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__49276__auto____$1),self__.__meta),k__49277__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__49277__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__49274__auto__,k__49275__auto__,G__67040){
var self__ = this;
var this__49274__auto____$1 = this;
var pred__67056 = cljs.core.keyword_identical_QMARK_;
var expr__67057 = k__49275__auto__;
if(cljs.core.truth_(pred__67056.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__67057))){
return (new ajax.interceptors.StandardInterceptor(G__67040,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67056.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__67057))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__67040,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67056.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__67057))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__67040,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__49275__auto__,G__67040),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__49279__auto__){
var self__ = this;
var this__49279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__49266__auto__,G__67040){
var self__ = this;
var this__49266__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__67040,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__49272__auto__,entry__49273__auto__){
var self__ = this;
var this__49272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__49273__auto__)){
return this__49272__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__49273__auto__,(0)),cljs.core._nth.call(null,entry__49273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__49272__auto____$1,entry__49273__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__49305__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__49305__auto__,writer__49306__auto__){
return cljs.core._write.call(null,writer__49306__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__67044){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__67044),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__67044),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__67044),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__67044,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__67060,xhrio){
var map__67061 = p__67060;
var map__67061__$1 = ((((!((map__67061 == null)))?((((map__67061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67061):map__67061);
var description = cljs.core.get.call(null,map__67061__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67067 = arguments.length;
var i__49859__auto___67068 = (0);
while(true){
if((i__49859__auto___67068 < len__49858__auto___67067)){
args__49865__auto__.push((arguments[i__49859__auto___67068]));

var G__67069 = (i__49859__auto___67068 + (1));
i__49859__auto___67068 = G__67069;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((3) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49866__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq67063){
var G__67064 = cljs.core.first.call(null,seq67063);
var seq67063__$1 = cljs.core.next.call(null,seq67063);
var G__67065 = cljs.core.first.call(null,seq67063__$1);
var seq67063__$2 = cljs.core.next.call(null,seq67063__$1);
var G__67066 = cljs.core.first.call(null,seq67063__$2);
var seq67063__$3 = cljs.core.next.call(null,seq67063__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__67064,G__67065,G__67066,seq67063__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__49267__auto__,k__49268__auto__){
var self__ = this;
var this__49267__auto____$1 = this;
return this__49267__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__49268__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__49269__auto__,k67072,else__49270__auto__){
var self__ = this;
var this__49269__auto____$1 = this;
var G__67076 = k67072;
var G__67076__$1 = (((G__67076 instanceof cljs.core.Keyword))?G__67076.fqn:null);
switch (G__67076__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67072,else__49270__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__67077,request){
var self__ = this;
var map__67078 = p__67077;
var map__67078__$1 = ((((!((map__67078 == null)))?((((map__67078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67078):map__67078);
var content_type__$1 = cljs.core.get.call(null,map__67078__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__67080 = this;
var map__67080__$1 = ((((!((map__67080 == null)))?((((map__67080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67080):map__67080);
var content_type__$2 = cljs.core.get.call(null,map__67080__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__67080,map__67080__$1,content_type__$2,map__67078,map__67078__$1,content_type__$1){
return (function (p1__67070_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__48579__auto__ = p1__67070_SHARP_;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__67080,map__67080__$1,content_type__$2,map__67078,map__67078__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__67082,xhrio){
var self__ = this;
var map__67083 = p__67082;
var map__67083__$1 = ((((!((map__67083 == null)))?((((map__67083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67083):map__67083);
var format = map__67083__$1;
var read__$1 = cljs.core.get.call(null,map__67083__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__67085 = this;
var map__67085__$1 = ((((!((map__67085 == null)))?((((map__67085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67085):map__67085);
var format__$1 = map__67085__$1;
var read__$2 = cljs.core.get.call(null,map__67085__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__67088 = status;
switch (G__67088) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e67089){if((e67089 instanceof Object)){
var e = e67089;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e67089;

}
}
}
}catch (e67087){if((e67087 instanceof Object)){
var e = e67087;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e67087;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__49281__auto__,writer__49282__auto__,opts__49283__auto__){
var self__ = this;
var this__49281__auto____$1 = this;
var pr_pair__49284__auto__ = ((function (this__49281__auto____$1){
return (function (keyval__49285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,cljs.core.pr_writer,""," ","",opts__49283__auto__,keyval__49285__auto__);
});})(this__49281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,pr_pair__49284__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__49283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67071){
var self__ = this;
var G__67071__$1 = this;
return (new cljs.core.RecordIter((0),G__67071__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__49265__auto__){
var self__ = this;
var this__49265__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__49262__auto__){
var self__ = this;
var this__49262__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__49271__auto__){
var self__ = this;
var this__49271__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__49263__auto__){
var self__ = this;
var this__49263__auto____$1 = this;
var h__49035__auto__ = self__.__hash;
if(!((h__49035__auto__ == null))){
return h__49035__auto__;
} else {
var h__49035__auto____$1 = ((function (h__49035__auto__,this__49263__auto____$1){
return (function (coll__49264__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__49264__auto__));
});})(h__49035__auto__,this__49263__auto____$1))
.call(null,this__49263__auto____$1);
self__.__hash = h__49035__auto____$1;

return h__49035__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67073,other67074){
var self__ = this;
var this67073__$1 = this;
return (!((other67074 == null))) && ((this67073__$1.constructor === other67074.constructor)) && (cljs.core._EQ_.call(null,this67073__$1.read,other67074.read)) && (cljs.core._EQ_.call(null,this67073__$1.description,other67074.description)) && (cljs.core._EQ_.call(null,this67073__$1.content_type,other67074.content_type)) && (cljs.core._EQ_.call(null,this67073__$1.__extmap,other67074.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__49276__auto__,k__49277__auto__){
var self__ = this;
var this__49276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__49277__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__49276__auto____$1),self__.__meta),k__49277__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__49277__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__49274__auto__,k__49275__auto__,G__67071){
var self__ = this;
var this__49274__auto____$1 = this;
var pred__67090 = cljs.core.keyword_identical_QMARK_;
var expr__67091 = k__49275__auto__;
if(cljs.core.truth_(pred__67090.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__67091))){
return (new ajax.interceptors.ResponseFormat(G__67071,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67090.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__67091))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__67071,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67090.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__67091))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__67071,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__49275__auto__,G__67071),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__49279__auto__){
var self__ = this;
var this__49279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__49266__auto__,G__67071){
var self__ = this;
var this__49266__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__67071,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__49272__auto__,entry__49273__auto__){
var self__ = this;
var this__49272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__49273__auto__)){
return this__49272__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__49273__auto__,(0)),cljs.core._nth.call(null,entry__49273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__49272__auto____$1,entry__49273__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__49305__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__49305__auto__,writer__49306__auto__){
return cljs.core._write.call(null,writer__49306__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__67075){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__67075),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__67075),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__67075),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__67075,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__49267__auto__,k__49268__auto__){
var self__ = this;
var this__49267__auto____$1 = this;
return this__49267__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__49268__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__49269__auto__,k67096,else__49270__auto__){
var self__ = this;
var this__49269__auto____$1 = this;
var G__67100 = k67096;
switch (G__67100) {
default:
return cljs.core.get.call(null,self__.__extmap,k67096,else__49270__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67101){
var self__ = this;
var map__67102 = p__67101;
var map__67102__$1 = ((((!((map__67102 == null)))?((((map__67102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67102):map__67102);
var request = map__67102__$1;
var uri = cljs.core.get.call(null,map__67102__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__67102__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__67102__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__67102__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__67102__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__67104 = ajax.interceptors.get_request_format.call(null,format);
var map__67104__$1 = ((((!((map__67104 == null)))?((((map__67104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67104):map__67104);
var write = cljs.core.get.call(null,map__67104__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__67104__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__48579__auto__ = headers;
if(cljs.core.truth_(or__48579__auto__)){
return or__48579__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__49281__auto__,writer__49282__auto__,opts__49283__auto__){
var self__ = this;
var this__49281__auto____$1 = this;
var pr_pair__49284__auto__ = ((function (this__49281__auto____$1){
return (function (keyval__49285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,cljs.core.pr_writer,""," ","",opts__49283__auto__,keyval__49285__auto__);
});})(this__49281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,pr_pair__49284__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__49283__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67095){
var self__ = this;
var G__67095__$1 = this;
return (new cljs.core.RecordIter((0),G__67095__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__49265__auto__){
var self__ = this;
var this__49265__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__49262__auto__){
var self__ = this;
var this__49262__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__49271__auto__){
var self__ = this;
var this__49271__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__49263__auto__){
var self__ = this;
var this__49263__auto____$1 = this;
var h__49035__auto__ = self__.__hash;
if(!((h__49035__auto__ == null))){
return h__49035__auto__;
} else {
var h__49035__auto____$1 = ((function (h__49035__auto__,this__49263__auto____$1){
return (function (coll__49264__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__49264__auto__));
});})(h__49035__auto__,this__49263__auto____$1))
.call(null,this__49263__auto____$1);
self__.__hash = h__49035__auto____$1;

return h__49035__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67097,other67098){
var self__ = this;
var this67097__$1 = this;
return (!((other67098 == null))) && ((this67097__$1.constructor === other67098.constructor)) && (cljs.core._EQ_.call(null,this67097__$1.__extmap,other67098.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__49276__auto__,k__49277__auto__){
var self__ = this;
var this__49276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__49277__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__49276__auto____$1),self__.__meta),k__49277__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__49277__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__49274__auto__,k__49275__auto__,G__67095){
var self__ = this;
var this__49274__auto____$1 = this;
var pred__67106 = cljs.core.keyword_identical_QMARK_;
var expr__67107 = k__49275__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__49275__auto__,G__67095),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__49279__auto__){
var self__ = this;
var this__49279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__49266__auto__,G__67095){
var self__ = this;
var this__49266__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__67095,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__49272__auto__,entry__49273__auto__){
var self__ = this;
var this__49272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__49273__auto__)){
return this__49272__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__49273__auto__,(0)),cljs.core._nth.call(null,entry__49273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__49272__auto____$1,entry__49273__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__49305__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__49305__auto__,writer__49306__auto__){
return cljs.core._write.call(null,writer__49306__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__67099){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__67099)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__67111 = arguments.length;
switch (G__67111) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__67112,uri){
var map__67113 = p__67112;
var map__67113__$1 = ((((!((map__67113 == null)))?((((map__67113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67113):map__67113);
var vec_strategy = cljs.core.get.call(null,map__67113__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__67113__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__67115){
var map__67116 = p__67115;
var map__67116__$1 = ((((!((map__67116 == null)))?((((map__67116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67116):map__67116);
var vec_strategy = cljs.core.get.call(null,map__67116__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__67116__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__67116,map__67116__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__67116,map__67116__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__49267__auto__,k__49268__auto__){
var self__ = this;
var this__49267__auto____$1 = this;
return this__49267__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__49268__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__49269__auto__,k67120,else__49270__auto__){
var self__ = this;
var this__49269__auto____$1 = this;
var G__67124 = k67120;
switch (G__67124) {
default:
return cljs.core.get.call(null,self__.__extmap,k67120,else__49270__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67125){
var self__ = this;
var map__67126 = p__67125;
var map__67126__$1 = ((((!((map__67126 == null)))?((((map__67126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67126):map__67126);
var request = map__67126__$1;
var method = cljs.core.get.call(null,map__67126__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__49281__auto__,writer__49282__auto__,opts__49283__auto__){
var self__ = this;
var this__49281__auto____$1 = this;
var pr_pair__49284__auto__ = ((function (this__49281__auto____$1){
return (function (keyval__49285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,cljs.core.pr_writer,""," ","",opts__49283__auto__,keyval__49285__auto__);
});})(this__49281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,pr_pair__49284__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__49283__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67119){
var self__ = this;
var G__67119__$1 = this;
return (new cljs.core.RecordIter((0),G__67119__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__49265__auto__){
var self__ = this;
var this__49265__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__49262__auto__){
var self__ = this;
var this__49262__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__49271__auto__){
var self__ = this;
var this__49271__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__49263__auto__){
var self__ = this;
var this__49263__auto____$1 = this;
var h__49035__auto__ = self__.__hash;
if(!((h__49035__auto__ == null))){
return h__49035__auto__;
} else {
var h__49035__auto____$1 = ((function (h__49035__auto__,this__49263__auto____$1){
return (function (coll__49264__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__49264__auto__));
});})(h__49035__auto__,this__49263__auto____$1))
.call(null,this__49263__auto____$1);
self__.__hash = h__49035__auto____$1;

return h__49035__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67121,other67122){
var self__ = this;
var this67121__$1 = this;
return (!((other67122 == null))) && ((this67121__$1.constructor === other67122.constructor)) && (cljs.core._EQ_.call(null,this67121__$1.__extmap,other67122.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__49276__auto__,k__49277__auto__){
var self__ = this;
var this__49276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__49277__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__49276__auto____$1),self__.__meta),k__49277__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__49277__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__49274__auto__,k__49275__auto__,G__67119){
var self__ = this;
var this__49274__auto____$1 = this;
var pred__67128 = cljs.core.keyword_identical_QMARK_;
var expr__67129 = k__49275__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__49275__auto__,G__67119),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__49279__auto__){
var self__ = this;
var this__49279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__49266__auto__,G__67119){
var self__ = this;
var this__49266__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__67119,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__49272__auto__,entry__49273__auto__){
var self__ = this;
var this__49272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__49273__auto__)){
return this__49272__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__49273__auto__,(0)),cljs.core._nth.call(null,entry__49273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__49272__auto____$1,entry__49273__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__49305__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__49305__auto__,writer__49306__auto__){
return cljs.core._write.call(null,writer__49306__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__67123){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__67123)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__49267__auto__,k__49268__auto__){
var self__ = this;
var this__49267__auto____$1 = this;
return this__49267__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__49268__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__49269__auto__,k67133,else__49270__auto__){
var self__ = this;
var this__49269__auto____$1 = this;
var G__67137 = k67133;
switch (G__67137) {
default:
return cljs.core.get.call(null,self__.__extmap,k67133,else__49270__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__67138){
var self__ = this;
var map__67139 = p__67138;
var map__67139__$1 = ((((!((map__67139 == null)))?((((map__67139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67139):map__67139);
var request = map__67139__$1;
var body = cljs.core.get.call(null,map__67139__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__49281__auto__,writer__49282__auto__,opts__49283__auto__){
var self__ = this;
var this__49281__auto____$1 = this;
var pr_pair__49284__auto__ = ((function (this__49281__auto____$1){
return (function (keyval__49285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,cljs.core.pr_writer,""," ","",opts__49283__auto__,keyval__49285__auto__);
});})(this__49281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__49282__auto__,pr_pair__49284__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__49283__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67132){
var self__ = this;
var G__67132__$1 = this;
return (new cljs.core.RecordIter((0),G__67132__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__49265__auto__){
var self__ = this;
var this__49265__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__49262__auto__){
var self__ = this;
var this__49262__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__49271__auto__){
var self__ = this;
var this__49271__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__49263__auto__){
var self__ = this;
var this__49263__auto____$1 = this;
var h__49035__auto__ = self__.__hash;
if(!((h__49035__auto__ == null))){
return h__49035__auto__;
} else {
var h__49035__auto____$1 = ((function (h__49035__auto__,this__49263__auto____$1){
return (function (coll__49264__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__49264__auto__));
});})(h__49035__auto__,this__49263__auto____$1))
.call(null,this__49263__auto____$1);
self__.__hash = h__49035__auto____$1;

return h__49035__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67134,other67135){
var self__ = this;
var this67134__$1 = this;
return (!((other67135 == null))) && ((this67134__$1.constructor === other67135.constructor)) && (cljs.core._EQ_.call(null,this67134__$1.__extmap,other67135.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__49276__auto__,k__49277__auto__){
var self__ = this;
var this__49276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__49277__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__49276__auto____$1),self__.__meta),k__49277__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__49277__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__49274__auto__,k__49275__auto__,G__67132){
var self__ = this;
var this__49274__auto____$1 = this;
var pred__67141 = cljs.core.keyword_identical_QMARK_;
var expr__67142 = k__49275__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__49275__auto__,G__67132),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__49279__auto__){
var self__ = this;
var this__49279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__49266__auto__,G__67132){
var self__ = this;
var this__49266__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__67132,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__49272__auto__,entry__49273__auto__){
var self__ = this;
var this__49272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__49273__auto__)){
return this__49272__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__49273__auto__,(0)),cljs.core._nth.call(null,entry__49273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__49272__auto____$1,entry__49273__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__49305__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__49305__auto__,writer__49306__auto__){
return cljs.core._write.call(null,writer__49306__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__67136){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__67136)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__67145){
var map__67146 = p__67145;
var map__67146__$1 = ((((!((map__67146 == null)))?((((map__67146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67146):map__67146);
var opts = map__67146__$1;
var response_format = cljs.core.get.call(null,map__67146__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1515662038665
