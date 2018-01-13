// Compiled by ClojureScript 1.9.946 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__5457__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__5457__auto__)){
var next = temp__5457__auto__;
var old = next.prev;
var new$ = (function (){var temp__5455__auto__ = next.thunk;
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null);
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.call(null,new$,old)){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);

var sinks_67843 = next.sinks;
var n__49624__auto___67844 = sinks_67843.length;
var i_67845 = (0);
while(true){
if((i_67845 < n__49624__auto___67844)){
goog.array.binaryInsert(pri_map,(sinks_67843[i_67845]),javelin.core.cmp_rank);

var G__67846 = (i_67845 + (1));
i_67845 = G__67846;
continue;
} else {
}
break;
}
} else {
}

var G__67847 = pri_map;
pri_map = G__67847;
continue;
} else {
return null;
}
break;
}
});
/**
 * If x is a Cell dereferences x and returns the value, otherwise returns x.
 */
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.call(null,a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e67848){if((e67848 instanceof Error)){
var _ = e67848;
return null;
} else {
throw e67848;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__67849 = c;
javelin.core.add_sync_BANG_.call(null,G__67849);

return G__67849;
} else {
var G__67850 = c;
javelin.core.propagate_STAR_.call(null,[G__67850]);

return G__67850;
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var G__67853 = arguments.length;
switch (G__67853) {
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.call(null,this$,null);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keep_watches_QMARK_){
var srcs = this$.sources;
this$.sources = [];

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;

this$.numwatches = (0);
}

var n__49624__auto__ = srcs.length;
var i = (0);
while(true){
if((i < n__49624__auto__)){
var temp__5457__auto___67855 = javelin.core.cell_QMARK_.call(null,(srcs[i]));
if(cljs.core.truth_(temp__5457__auto___67855)){
var c_67856 = temp__5457__auto___67855;
goog.array.removeIf(c_67856.sinks,((function (i,c_67856,temp__5457__auto___67855,n__49624__auto__,srcs){
return (function (p1__67851_SHARP_){
return cljs.core._EQ_.call(null,p1__67851_SHARP_,this$);
});})(i,c_67856,temp__5457__auto___67855,n__49624__auto__,srcs))
);
} else {
}

var G__67857 = (i + (1));
i = G__67857;
continue;
} else {
return null;
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;

javelin.core.set_formula_BANG__STAR_ = (function javelin$core$set_formula_BANG__STAR_(this$,f,sources,updatefn){
if(cljs.core.truth_(f)){
this$.constant = true;

this$.sources = (function (){var G__67858 = sources;
G__67858.push(f);

return G__67858;
})();

var n__49624__auto___67859 = this$.sources.length;
var i_67860 = (0);
while(true){
if((i_67860 < n__49624__auto___67859)){
var source_67861 = (this$.sources[i_67860]);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_67861))){
if(cljs.core.truth_((function (){var and__48567__auto__ = this$.constant;
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.not.call(null,source_67861.constant);
} else {
return and__48567__auto__;
}
})())){
this$.constant = false;
} else {
}

source_67861.sinks.push(this$);

if((source_67861.rank > this$.rank)){
var q_67862 = [source_67861];
while(true){
var temp__5457__auto___67863 = q_67862.shift();
if(cljs.core.truth_(temp__5457__auto___67863)){
var dep_67864 = temp__5457__auto___67863;
dep_67864.rank = javelin.core.next_rank.call(null);

var G__67865 = q_67862.concat(dep_67864.sinks);
q_67862 = G__67865;
continue;
} else {
}
break;
}
} else {
}
} else {
}

var G__67866 = (i_67860 + (1));
i_67860 = G__67866;
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_.call(null,argv.pop());
var n__49624__auto___67867 = argv.length;
var i_67868 = (0);
while(true){
if((i_67868 < n__49624__auto___67867)){
(argv[i_67868] = javelin.core.deref_STAR_.call(null,(argv[i_67868])));

var G__67869 = (i_67868 + (1));
i_67868 = G__67869;
continue;
} else {
}
break;
}

return this$.state = f__$1.apply(null,argv);
});

this$.update = updatefn;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var G__67871 = arguments.length;
switch (G__67871) {
case 1:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),updatefn);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.constant = constant;
this.numwatches = numwatches;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#object [javelin.core.Cell ",cljs.core.pr_str.call(null,self__.state),"]");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update,self__.constant,self__.numwatches));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
var seq__67873 = cljs.core.seq.call(null,self__.watches);
var chunk__67874 = null;
var count__67875 = (0);
var i__67876 = (0);
while(true){
if((i__67876 < count__67875)){
var vec__67877 = cljs.core._nth.call(null,chunk__67874,i__67876);
var key = cljs.core.nth.call(null,vec__67877,(0),null);
var f = cljs.core.nth.call(null,vec__67877,(1),null);
f.call(null,key,this$__$1,o,n);

var G__67883 = seq__67873;
var G__67884 = chunk__67874;
var G__67885 = count__67875;
var G__67886 = (i__67876 + (1));
seq__67873 = G__67883;
chunk__67874 = G__67884;
count__67875 = G__67885;
i__67876 = G__67886;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__67873);
if(temp__5457__auto__){
var seq__67873__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67873__$1)){
var c__49510__auto__ = cljs.core.chunk_first.call(null,seq__67873__$1);
var G__67887 = cljs.core.chunk_rest.call(null,seq__67873__$1);
var G__67888 = c__49510__auto__;
var G__67889 = cljs.core.count.call(null,c__49510__auto__);
var G__67890 = (0);
seq__67873 = G__67887;
chunk__67874 = G__67888;
count__67875 = G__67889;
i__67876 = G__67890;
continue;
} else {
var vec__67880 = cljs.core.first.call(null,seq__67873__$1);
var key = cljs.core.nth.call(null,vec__67880,(0),null);
var f = cljs.core.nth.call(null,vec__67880,(1),null);
f.call(null,key,this$__$1,o,n);

var G__67891 = cljs.core.next.call(null,seq__67873__$1);
var G__67892 = null;
var G__67893 = (0);
var G__67894 = (0);
seq__67873 = G__67891;
chunk__67874 = G__67892;
count__67875 = G__67893;
i__67876 = G__67894;
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
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"constant","constant",1260922224,null),new cljs.core.Symbol(null,"numwatches","numwatches",2058987374,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__49250__auto__,writer__49251__auto__,opt__49252__auto__){
return cljs.core._write.call(null,writer__49251__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__48567__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__48567__auto__)){
return c.thunk;
} else {
return and__48567__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__48567__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__48567__auto__)){
return c.update;
} else {
return and__48567__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__48567__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__48567__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__48567__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__48567__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__48567__auto__)){
return c.constant;
} else {
return and__48567__auto__;
}
})())){
return c;
} else {
return null;
}
});
/**
 * Converts c to an input cell in place, setting its contents to x. It's okay
 *   if c was already an input cell. Changes will be propagated to any cells that
 *   depend on c.
 */
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
/**
 * Returns a function that returns a formula cell with f as its formula, and
 *   if updatefn is provided the returned cell is a lens.
 * 
 *   See also: the javelin.core/cell= macro.
 * 
 *    (def x (cell 100))
 *    (def y (cell 200))
 * 
 *    (def z1 (cell= (+ x y)))
 *    (def z2 ((formula +) x y))
 * 
 *   The formula cells z1 and z2 are equivalent.
 */
javelin.core.formula = (function javelin$core$formula(var_args){
var G__67896 = arguments.length;
switch (G__67896) {
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.call(null,f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
return javelin.core.set_formula_BANG__STAR_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
return javelin.core.formula.call(null,cljs.core.identity,f).call(null,c);
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
var G__67901 = arguments.length;
switch (G__67901) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__49881__auto__ = [];
var len__49858__auto___67906 = arguments.length;
var i__49859__auto___67907 = (0);
while(true){
if((i__49859__auto___67907 < len__49858__auto___67906)){
args_arr__49881__auto__.push((arguments[i__49859__auto___67907]));

var G__67908 = (i__49859__auto___67907 + (1));
i__49859__auto___67907 = G__67908;
continue;
} else {
}
break;
}

var argseq__49882__auto__ = (new cljs.core.IndexedSeq(args_arr__49881__auto__.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49882__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67902){
var map__67903 = p__67902;
var map__67903__$1 = ((((!((map__67903 == null)))?((((map__67903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67903):map__67903);
var meta = cljs.core.get.call(null,map__67903__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq67899){
var G__67900 = cljs.core.first.call(null,seq67899);
var seq67899__$1 = cljs.core.next.call(null,seq67899);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__67900,seq67899__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

/**
 * This function is deprecated, please use #'javelin.core/formula instead.
 */
javelin.core.lift = javelin.core.formula;
/**
 * Calls the thunk with no arguments within a transaction. Propagation of
 *   updates to formula cells is deferred until the transaction is complete.
 *   Input cells *will* update during the transaction. Transactions may be
 *   nested.
 * 
 *   See also: the javelin.core/dosync macro.
 */
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
var _STAR_tx_STAR_67909 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = [];

try{thunk.call(null);

var tx = javelin.core._STAR_tx_STAR_;
var _STAR_tx_STAR_67910 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_67910;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_67909;
}}
});
/**
 * Given a number of cells, returns a formula cell whose value is a seq of
 *   values from cells that changed in the last update. Note that multiple cells
 *   may update atomically, which is why the formula's value is a seq.
 * 
 *   Consider:
 * 
 *    (def a (cell {:x 1 :y 2}))
 *    (def x (cell= (:x a)))
 *    (def y (cell= (:y a)))
 *    (def z (alts! x y))
 * 
 *   then,
 * 
 *    (deref z) ;=> (1 2)
 * 
 *    (swap! a assoc :x 42)
 *    (deref z) ;=> (42)
 * 
 *    (reset! a {:x 10 :y 20})
 *    (deref z) ;=> (10 20)
 *   
 */
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__49865__auto__ = [];
var len__49858__auto___67917 = arguments.length;
var i__49859__auto___67918 = (0);
while(true){
if((i__49859__auto___67918 < len__49858__auto___67917)){
args__49865__auto__.push((arguments[i__49859__auto___67918]));

var G__67919 = (i__49859__auto___67918 + (1));
i__49859__auto___67918 = G__67919;
continue;
} else {
}
break;
}

var argseq__49866__auto__ = ((((0) < args__49865__auto__.length))?(new cljs.core.IndexedSeq(args__49865__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__49866__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__67911_SHARP_,p2__67912_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__67911_SHARP_,p2__67912_SHARP_),p2__67912_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__67914_SHARP_,p2__67913_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__67914_SHARP_,p2__67913_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__67920__delegate = function (rest__67915_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__67915_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__67915_SHARP_);

return news;
};
var G__67920 = function (var_args){
var rest__67915_SHARP_ = null;
if (arguments.length > 0) {
var G__67921__i = 0, G__67921__a = new Array(arguments.length -  0);
while (G__67921__i < G__67921__a.length) {G__67921__a[G__67921__i] = arguments[G__67921__i + 0]; ++G__67921__i;}
  rest__67915_SHARP_ = new cljs.core.IndexedSeq(G__67921__a,0,null);
} 
return G__67920__delegate.call(this,rest__67915_SHARP_);};
G__67920.cljs$lang$maxFixedArity = 0;
G__67920.cljs$lang$applyTo = (function (arglist__67922){
var rest__67915_SHARP_ = cljs.core.seq(arglist__67922);
return G__67920__delegate(rest__67915_SHARP_);
});
G__67920.cljs$core$IFn$_invoke$arity$variadic = G__67920__delegate;
return G__67920;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq67916){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67916));
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__67923_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__67923_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   calls f for side effects once for each item in c, passing one argument: a
 *   formula cell equivalent to (cell= (nth c i)) for the ith item in c. Whenever
 *   c grows beyond its previous maximum size f is called as above for each item
 *   beyond the maximum size. Nothing happens when c shrinks.
 * 
 *   See also: the javelin.core/cell-doseq macro.
 * 
 *   Consider:
 * 
 *    (def things (cell [:a :b :c]))
 *    (cell-doseq*
 *      things
 *      (fn doit [x]
 *        (prn :creating @x)
 *        (add-watch x nil #(prn :updating %3 %4))))
 * 
 *    ;; the following is printed:
 * 
 *    :creating :a
 *    :creating :b
 *    :creating :c
 * 
 *   Shrink things by removing the last item:
 * 
 *    (swap! things pop)
 * 
 *    ;; the following is printed (because the 3rd item in things is now nil,
 *    ;; since things only contains 2 items) -- note that the doit function is
 *    ;; not called (or we would see a :creating message):
 * 
 *    :updating :c nil
 * 
 *   Grow things such that it is one item larger than it ever was:
 * 
 *    (swap! things into [:u :v])
 * 
 *    ;; the following is printed (because things now has 4 items, so the 3rd
 *    ;; item is now :u and the max size increases by one with the new item :v):
 * 
 *    :updating nil :u
 *    :creating :v
 * 
 *   A weird imagination is most useful to gain full advantage of all the features.
 */
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(c,f){
var pool_size = cljs.core.atom.call(null,(0));
return javelin.core.formula.call(null,((function (pool_size){
return (function (items){
var cnt = cljs.core.count.call(null,items);
if((cljs.core.deref.call(null,pool_size) < cnt)){
var n__49624__auto___67924 = (cnt - cljs.core.deref.call(null,pool_size));
var i_67925 = (0);
while(true){
if((i_67925 < n__49624__auto___67924)){
f.call(null,javelin.core.formula.call(null,javelin.core.safe_nth).call(null,c,(i_67925 + cljs.core.deref.call(null,pool_size))));

var G__67926 = (i_67925 + (1));
i_67925 = G__67926;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_.call(null,pool_size,cnt);
} else {
return null;
}
});})(pool_size))
).call(null,c);
});

//# sourceMappingURL=core.js.map?rel=1515662039568
