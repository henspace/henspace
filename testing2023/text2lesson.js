/**
 * text2lesson 1.0.11
 * Text2Lesson: create quizzes and lessons from plain text files.
 * Copyright 2023 Steve Butler (henspace.com)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 */
"use strict";function _typeof(obj){
return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){
return typeof obj}:function(obj){
return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj
},_typeof(obj)}
var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_templateObject23,_templateObject24,_templateObject25,_templateObject26,_templateObject27,_templateObject28,_templateObject29,_templateObject30,_templateObject31,_templateObject32,_templateObject33,_templateObject34,_templateObject35,_templateObject36,_templateObject37,_templateObject38,_templateObject39,_templateObject40,_templateObject41,_templateObject42,_templateObject43,_templateObject44,_templateObject45,_templateObject46,_templateObject47,_templateObject48,_templateObject49,_templateObject50,_templateObject51,_templateObject52,_templateObject53,_templateObject54,_templateObject55,_templateObject56,_templateObject57,_templateObject58,_templateObject59,_templateObject60,_templateObject61,_templateObject62,_templateObject63,_templateObject64,_templateObject65,_templateObject66,_templateObject67,_templateObject68,_templateObject69,_templateObject70,_templateObject71,_templateObject72,_templateObject73,_templateObject74,_templateObject75,_templateObject76,_templateObject77,_templateObject78,_templateObject79,_templateObject80,_templateObject81,_templateObject82,_templateObject83,_templateObject84,_templateObject85,_templateObject86,_templateObject87,_templateObject88,_templateObject89,_templateObject90,_templateObject91,_templateObject92,_templateObject93,_templateObject94,_templateObject95,_templateObject96,_templateObject97,_templateObject98,_templateObject99,_templateObject100,_templateObject101,_templateObject102,_templateObject103,_templateObject104,_templateObject105,_templateObject106,_templateObject107,_templateObject108,_templateObject109,_templateObject110
;function _get(){
return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(target,property,receiver){
var base=_superPropBase(target,property);if(base){
var desc=Object.getOwnPropertyDescriptor(base,property)
;return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},
_get.apply(this,arguments)}function _superPropBase(object,property){
for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););
return object}function _regeneratorRuntime(){_regeneratorRuntime=function(){
return exports}
;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){
obj[key]=desc.value
},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag"
;function define(obj,key,value){return Object.defineProperty(obj,key,{
value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{
define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}
function wrap(innerFn,outerFn,self,tryLocsList){
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[])
;return defineProperty(generator,"_invoke",{
value:makeInvokeMethod(innerFn,self,context)}),generator}
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}
}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap
;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}
function GeneratorFunctionPrototype(){}var IteratorPrototype={}
;define(IteratorPrototype,iteratorSymbol,(function(){return this}))
;var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])))
;NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype)
;var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype)
;function defineIteratorMethods(prototype){
["next","throw","return"].forEach((function(method){
define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}
function AsyncIterator(generator,PromiseImpl){
function invoke(method,arg,resolve,reject){
var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){
var result=record.arg,value=result.value
;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){
invoke("next",value,resolve,reject)}),(function(err){
invoke("throw",err,resolve,reject)
})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,
resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)
}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{
value:function(method,arg){function callInvokeWithMethodAndArg(){
return new PromiseImpl((function(resolve,reject){
invoke(method,arg,resolve,reject)}))}
return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()
}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart"
;return function(method,arg){
if("executing"===state)throw new Error("Generator is already running")
;if("completed"===state){if("throw"===method)throw arg;return doneResult()}
for(context.method=method,context.arg=arg;;){var delegate=context.delegate
;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context)
;if(delegateResult){if(delegateResult===ContinueSentinel)continue
;return delegateResult}}
if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){
if("suspendedStart"===state)throw state="completed",context.arg
;context.dispatchException(context.arg)
}else"return"===context.method&&context.abrupt("return",context.arg)
;state="executing";var record=tryCatch(innerFn,self,context)
;if("normal"===record.type){
if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue
;return{value:record.arg,done:context.done}}
"throw"===record.type&&(state="completed",
context.method="throw",context.arg=record.arg)}}}
function maybeInvokeDelegate(delegate,context){
var methodName=context.method,method=delegate.iterator[methodName]
;if(void 0===method)return context.delegate=null,
"throw"===methodName&&delegate.iterator.return&&(context.method="return",
context.arg=void 0,
maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",
context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),
ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg)
;if("throw"===record.type)return context.method="throw",
context.arg=record.arg,context.delegate=null,ContinueSentinel
;var info=record.arg
;return info?info.done?(context[delegate.resultName]=info.value,
context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",
context.arg=void 0),
context.delegate=null,ContinueSentinel):info:(context.method="throw",
context.arg=new TypeError("iterator result is not an object"),
context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={
tryLoc:locs[0]}
;1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],
entry.afterLoc=locs[3]),this.tryEntries.push(entry)}
function resetTryEntry(entry){var record=entry.completion||{}
;record.type="normal",delete record.arg,entry.completion=record}
function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"
}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}
function values(iterable){if(iterable){
var iteratorMethod=iterable[iteratorSymbol]
;if(iteratorMethod)return iteratorMethod.call(iterable)
;if("function"==typeof iterable.next)return iterable
;if(!isNaN(iterable.length)){var i=-1,next=function next(){
for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],
next.done=!1,next;return next.value=void 0,next.done=!0,next}
;return next.next=next}}return{next:doneResult}}function doneResult(){return{
value:void 0,done:!0}}
return GeneratorFunction.prototype=GeneratorFunctionPrototype,
defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,
configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{
value:GeneratorFunction,configurable:!0
}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),
exports.isGeneratorFunction=function(genFun){
var ctor="function"==typeof genFun&&genFun.constructor
;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))
},exports.mark=function(genFun){
return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,
define(genFun,toStringTagSymbol,"GeneratorFunction")),
genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{
__await:arg}
},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){
return this
})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){
void 0===PromiseImpl&&(PromiseImpl=Promise)
;var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl)
;return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){
return result.done?result.value:iter.next()}))
},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),
define(Gp,iteratorSymbol,(function(){return this
})),define(Gp,"toString",(function(){return"[object Generator]"
})),exports.keys=function(val){var object=Object(val),keys=[]
;for(var key in object)keys.push(key);return keys.reverse(),function next(){
for(;keys.length;){var key=keys.pop()
;if(key in object)return next.value=key,next.done=!1,next}
return next.done=!0,next}},exports.values=values,Context.prototype={
constructor:Context,reset:function(skipTempReset){
if(this.prev=0,this.next=0,this.sent=this._sent=void 0,
this.done=!1,this.delegate=null,
this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),
!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)
},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion
;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},
dispatchException:function(exception){if(this.done)throw exception
;var context=this;function handle(loc,caught){
return record.type="throw",record.arg=exception,
context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}
for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i],record=entry.completion
;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){
var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc")
;if(hasCatch&&hasFinally){
if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)
;if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)
}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)
}else{if(!hasFinally)throw new Error("try statement without catch or finally")
;if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},
abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i]
;if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){
var finallyEntry=entry;break}}
finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null)
;var record=finallyEntry?finallyEntry.completion:{}
;return record.type=type,record.arg=arg,
finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,
ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){
if("throw"===record.type)throw record.arg
;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,
this.method="return",
this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),
ContinueSentinel},finish:function(finallyLoc){
for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i]
;if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),
resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){
for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i]
;if(entry.tryLoc===tryLoc){var record=entry.completion
;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}
return thrown}}throw new Error("illegal catch attempt")},
delegateYield:function(iterable,resultName,nextLoc){return this.delegate={
iterator:values(iterable),resultName:resultName,nextLoc:nextLoc
},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{
var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}
info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}
function _asyncToGenerator(fn){return function(){var self=this,args=arguments
;return new Promise((function(resolve,reject){var gen=fn.apply(self,args)
;function _next(value){
asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}
function _throw(err){
asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))
}}function _wrapNativeSuper(Class){
var _cache="function"==typeof Map?new Map:void 0
;return _wrapNativeSuper=function(Class){
if(null===Class||!_isNativeFunction(Class))return Class
;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function")
;if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class)
;_cache.set(Class,Wrapper)}function Wrapper(){
return _construct(Class,arguments,_getPrototypeOf(this).constructor)}
return Wrapper.prototype=Object.create(Class.prototype,{constructor:{
value:Wrapper,enumerable:!1,writable:!0,configurable:!0}
}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}
function _construct(Parent,args,Class){
return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(Parent,args,Class){
var a=[null];a.push.apply(a,args)
;var instance=new(Function.bind.apply(Parent,a))
;return Class&&_setPrototypeOf(instance,Class.prototype),instance
},_construct.apply(null,arguments)}function _isNativeFunction(fn){
return-1!==Function.toString.call(fn).indexOf("[native code]")}
function _toConsumableArray(arr){
return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()
}function _nonIterableSpread(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function _iterableToArray(iter){
if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)
}function _arrayWithoutHoles(arr){
if(Array.isArray(arr))return _arrayLikeToArray(arr)}
function _classStaticPrivateMethodGet(receiver,classConstructor,method){
return _classCheckPrivateStaticAccess(receiver,classConstructor),method}
function _classStaticPrivateFieldSpecSet(receiver,classConstructor,descriptor,value){
return _classCheckPrivateStaticAccess(receiver,classConstructor),
_classCheckPrivateStaticFieldDescriptor(descriptor,"set"),
_classApplyDescriptorSet(receiver,descriptor,value),value}
function _classStaticPrivateFieldSpecGet(receiver,classConstructor,descriptor){
return _classCheckPrivateStaticAccess(receiver,classConstructor),
_classCheckPrivateStaticFieldDescriptor(descriptor,"get"),
_classApplyDescriptorGet(receiver,descriptor)}
function _classCheckPrivateStaticFieldDescriptor(descriptor,action){
if(void 0===descriptor)throw new TypeError("attempted to "+action+" private static field before its declaration")
}function _classCheckPrivateStaticAccess(receiver,classConstructor){
if(receiver!==classConstructor)throw new TypeError("Private static access of wrong provenance")
}function _inherits(subClass,superClass){
if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function")
;subClass.prototype=Object.create(superClass&&superClass.prototype,{
constructor:{value:subClass,writable:!0,configurable:!0}
}),Object.defineProperty(subClass,"prototype",{writable:!1
}),superClass&&_setPrototypeOf(subClass,superClass)}
function _setPrototypeOf(o,p){
return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,p){
return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){
var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){
var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){
var NewTarget=_getPrototypeOf(this).constructor
;result=Reflect.construct(Super,arguments,NewTarget)
}else result=Super.apply(this,arguments)
;return _possibleConstructorReturn(this,result)}}
function _possibleConstructorReturn(self,call){
if(call&&("object"===_typeof(call)||"function"==typeof call))return call
;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined")
;return _assertThisInitialized(self)}function _assertThisInitialized(self){
if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return self}function _isNativeReflectConstruct(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),
!0}catch(e){return!1}}function _getPrototypeOf(o){
return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){
return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}
function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),
Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))
}function _classPrivateMethodInitSpec(obj,privateSet){
_checkPrivateRedeclaration(obj,privateSet),privateSet.add(obj)}
function _classPrivateMethodGet(receiver,privateSet,fn){
if(!privateSet.has(receiver))throw new TypeError("attempted to get private field on non-instance")
;return fn}function ownKeys(object,enumerableOnly){var keys=Object.keys(object)
;if(Object.getOwnPropertySymbols){
var symbols=Object.getOwnPropertySymbols(object)
;enumerableOnly&&(symbols=symbols.filter((function(sym){
return Object.getOwnPropertyDescriptor(object,sym).enumerable
}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){
for(var i=1;i<arguments.length;i++){
var source=null!=arguments[i]?arguments[i]:{}
;i%2?ownKeys(Object(source),!0).forEach((function(key){
_defineProperty(target,key,source[key])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){
Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))
}return target}function _defineProperty(obj,key,value){
return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{
value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}
function _classCallCheck(instance,Constructor){
if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")
}function _defineProperties(target,props){for(var i=0;i<props.length;i++){
var descriptor=props[i]
;descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,
"value"in descriptor&&(descriptor.writable=!0),
Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}
function _createClass(Constructor,protoProps,staticProps){
return protoProps&&_defineProperties(Constructor.prototype,protoProps),
staticProps&&_defineProperties(Constructor,staticProps),
Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}
function _toPropertyKey(arg){var key=_toPrimitive(arg,"string")
;return"symbol"===_typeof(key)?key:String(key)}
function _toPrimitive(input,hint){
if("object"!==_typeof(input)||null===input)return input
;var prim=input[Symbol.toPrimitive];if(void 0!==prim){
var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res
;throw new TypeError("@@toPrimitive must return a primitive value.")}
return("string"===hint?String:Number)(input)}
function _classPrivateFieldInitSpec(obj,privateMap,value){
_checkPrivateRedeclaration(obj,privateMap),privateMap.set(obj,value)}
function _checkPrivateRedeclaration(obj,privateCollection){
if(privateCollection.has(obj))throw new TypeError("Cannot initialize the same private elements twice on an object")
}function _classPrivateFieldGet(receiver,privateMap){
return _classApplyDescriptorGet(receiver,_classExtractFieldDescriptor(receiver,privateMap,"get"))
}function _classApplyDescriptorGet(receiver,descriptor){
return descriptor.get?descriptor.get.call(receiver):descriptor.value}
function _classPrivateFieldSet(receiver,privateMap,value){
return _classApplyDescriptorSet(receiver,_classExtractFieldDescriptor(receiver,privateMap,"set"),value),
value}function _classExtractFieldDescriptor(receiver,privateMap,action){
if(!privateMap.has(receiver))throw new TypeError("attempted to "+action+" private field on non-instance")
;return privateMap.get(receiver)}
function _classApplyDescriptorSet(receiver,descriptor,value){
if(descriptor.set)descriptor.set.call(receiver,value);else{
if(!descriptor.writable)throw new TypeError("attempted to set read only private field")
;descriptor.value=value}}function _createForOfIteratorHelper(o,allowArrayLike){
var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){
if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){
it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{
done:!0}:{done:!1,value:o[i++]}},e:function(_e){throw _e},f:F}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},
n:function(){var step=it.next();return normalCompletion=step.done,step},
e:function(_e2){didErr=!0,err=_e2},f:function(){try{
normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}
function _unsupportedIterableToArray(o,minLen){if(o){
if("string"==typeof o)return _arrayLikeToArray(o,minLen)
;var n=Object.prototype.toString.call(o).slice(8,-1)
;return"Object"===n&&o.constructor&&(n=o.constructor.name),
"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0
}}function _arrayLikeToArray(arr,len){
(null==len||len>arr.length)&&(len=arr.length)
;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}
!function(){
String.prototype.replaceAll||(String.prototype.replaceAll=function(pattern,replacement){
if(pattern instanceof RegExp){
if(pattern.flags.indexOf("g")<0)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument")
;return this.replace(pattern,replacement)}
return this.replace(new RegExp(pattern,"g"),replacement)});var BuildInfo={
isBuilt:function(){return BuildInfo.getMode().indexOf("$")<0},
getBuildDate:function(){return"2023-08-24 14:08:13Z"},getBundleName:function(){
return"text2lesson.js"},getProductName:function(){return"Text2Lesson"},
getMode:function(){return"development"},getVersion:function(){return"1.0.11 "}
},blockReps=[{re:/(?:(.+)\n=+\n)/g,rep:"\n\n<h1>$1</h1>\n\n"},{
re:/(?:(.+)\n-+\n)/g,rep:"\n\n<h2>$1</h2>\n\n"},{
re:/^(#+)(?: *)(.+?)(?:#*)[ \t]*$/gm,rep:function(matched,hashes,txt){
var level=Math.min(hashes.length,6)
;return"\n\n<h".concat(level,">").concat(txt.trim(),"</h").concat(level,">\n")}
},reAllLinesStartWith(">[ \t]*",{blockPrefix:"<blockquote>",
blockSuffix:"</blockquote>"}),reAllLinesStartWith("(?: {4}|\t)",{
blockPrefix:"<pre><code>",blockSuffix:"</code></pre>"}),{
re:/^(?:[*_-] *){3,}\s*$/gm,rep:"\n\n<hr>\n\n"
},reAllLinesStartWith(" {0,3}[*+-][ \t]*",{blockPrefix:"<ul>",
blockSuffix:"</ul>",linePrefix:"<li>",lineSuffix:"</li>"
}),reAllLinesStartWith(" {0,3}\\d+\\.[ \t]*",{blockPrefix:"<ol>",
blockSuffix:"</ol>",linePrefix:"<li>",lineSuffix:"</li>"}),{
re:/(?:(?:^|\n{2,})(?!<\w+>))((?:.(?:\n(?!\n))?)+)/g,rep:"\n\n<p>$1</p>\n\n"},{
re:/\n{2,}/g,rep:"\n\n"}],spanReps=[{
re:/!\[(.*)\]\((https?:\/\/[-\w@:%.+~#=/]+)(?: +"(.*)")?\)/gm,
rep:'<img alt="$1" src="$2" title="$3"/>'},{
re:/\[(.*)\]\((https?:\/\/[-\w@:%.+~#=/]+)(?: +"(.*)")?\)/gm,
rep:'<a target="_blank" href="$2" title="$3">$1</a>'},{
re:/(?:&lt;|<)(https?:\/\/[-\w@:%.+~#=/]+)>/gm,
rep:'<a target="_blank" href="$1">$1</a>'},{
re:/(?:&lt;|<)(\w+(?:[.-]?\w+)*@\w+(?:[.-]?\w+)*(?:\.\w{2,4})+)>/gm,
rep:function(match,address){var encoded=function(data){
var _step,result="",_iterator=_createForOfIteratorHelper(data);try{
for(_iterator.s();!(_step=_iterator.n()).done;){
result+=encodeCharToEntity(_step.value)}}catch(err){_iterator.e(err)}finally{
_iterator.f()}return result}(address)
;return'<a href="'.concat(encoded,'">').concat(encoded,"</a>")}},{
re:/(?:`{2,}(.*?)`{2,}|`(.*?)`)/gm,rep:function(match,codeA,codeB){
return"<code>".concat(null!=codeA?codeA:codeB,"</code>")}},{
re:/\*\*([^\s])(.*?)([^\s])\*\*/gm,rep:"<strong>$1$2$3</strong>"},{
re:/__([^\s])(.*?)([^\s])__/gm,rep:"<strong>$1$2$3</strong>"},{
re:/\*([^\s])(.*?)([^\s])\*/gm,rep:"<em>$1$2$3</em>"},{
re:/_([^\s])(.*?)([^\s])_/gm,rep:"<em>$1$2$3</em>"}],markdownEscReps=[{
re:/\\([\\`*_{}[\]()#+.!-])/g,rep:function(match,chr){
return encodeCharToEntity(chr)}}],securityReps=[{re:"\0",rep:"�"
}],htmlEscIgnoringBrReps=[{re:/&(?![\w#]+?;)/gm,rep:"&amp;"},{re:/<(?!br>)/gim,
rep:"&lt;"}],htmlEscAllReps=[{re:/&(?![\w#]+?;)/gm,rep:"&amp;"},{re:/</gim,
rep:"&lt;"}],htmlCleanUpReps=[{re:/^\s*$/gm,rep:""},{
re:/<(?:p|div)>\s*?<\/(?:p|div)>/gim,rep:""}]
;function processReplacements(data,replacements){
return data?(replacements.forEach((function(sub){
data=data.replaceAll(sub.re,sub.rep)})),data):data}
function reAllLinesStartWith(reStart,options){
var _options$linePrefix,_options$lineSuffix,reBlockSearchRe=new RegExp("(?:^|\\n)".concat(reStart,"(?:.|\\n)*?(?:(\\n(?!").concat(reStart,"))|$)"),"g"),lineReplacementRe=new RegExp("^".concat(reStart,"(\\s*.*)$"),"gm"),lineReplacement="".concat(null!==(_options$linePrefix=null==options?void 0:options.linePrefix)&&void 0!==_options$linePrefix?_options$linePrefix:"","$1").concat(null!==(_options$lineSuffix=null==options?void 0:options.lineSuffix)&&void 0!==_options$lineSuffix?_options$lineSuffix:"")
;return{re:reBlockSearchRe,rep:function(match){
var _options$blockPrefix,_options$blockSuffix
;return"\n\n".concat(null!==(_options$blockPrefix=null==options?void 0:options.blockPrefix)&&void 0!==_options$blockPrefix?_options$blockPrefix:"").concat(match.replaceAll(lineReplacementRe,lineReplacement)).concat(null!==(_options$blockSuffix=null==options?void 0:options.blockSuffix)&&void 0!==_options$blockSuffix?_options$blockSuffix:"","\n\n")
}}}function encodeCharToEntity(chr){
return"&#".concat(chr.charCodeAt(0).toString(),";")}
function parseMarkdown(data,options){var result=data.replaceAll(/\r/g,"")
;return result=processReplacements(result,securityReps),
null!=options&&options.pre&&(result=processReplacements(result,options.pre)),
result=processReplacements(result,htmlEscIgnoringBrReps),
result=processReplacements(result,markdownEscReps),
result=processReplacements(result,blockReps),
result=processReplacements(result,spanReps),
result=processReplacements(result,htmlCleanUpReps),
null!=options&&options.post&&(result=processReplacements(result,options.post)),
result}function escapeHtml(data){
return data=processReplacements(data,securityReps),
processReplacements(data,htmlEscAllReps)}function getPlainTextFromHtml(html){
return html.replace(/<[^>]*>/g,"").replace(/\s+/g," ")}
function stringToBase64(str){return window.btoa(encodeURIComponent(str))}
function base64ToString(base64){return decodeURIComponent(window.atob(base64))}
var activeTranslations=null,fallbackTranslations=null
;function setActiveTranslations(translations){!function(translations){
for(var key in translations)translations[key]=escapeHtml(translations[key])
}(translations),
activeTranslations&&(fallbackTranslations=activeTranslations),activeTranslations=translations
}function i18n(strings){
var keyMatch=strings[0].match(/(\w+?)::(.*)/),keyword="",result=[]
;keyMatch?(keyword=keyMatch[1],result.push(keyMatch[2])):result.push(strings[0])
;var output,template=activeTranslations?activeTranslations[keyword]:null
;template||(template=fallbackTranslations?fallbackTranslations[keyword]:null)
;for(var _len=arguments.length,values=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)values[_key-1]=arguments[_key]
;return template?output=function(template,values){var defaultIndex=0
;return template.replace(/\${(.*?)}/g,(function(match,index){
return index=parseInt(index),
isNaN(index)&&(index=defaultIndex++),index<values.length?values[index]:(console.error("Cannot find {".concat(index,'} for "').concat(template,'"')),
"${?}")}))}(template,values):(values.forEach((function(value,i){
result.push(value),result.push(strings[i+1])})),output=result.join("")),output}
function extractLanguageSubTags(languageTag){
var language="",extlang="",script="",region="",matches=(languageTag=languageTag.toLowerCase()).match(/^([a-z]{2,3})(-[a-z]{3}(?:-[a-z]{3}){0,2})?(-[a-z]{4})?(-(?:[a-z]{2}|[0-9]{3}))?([-].{5,})?$/)
;return matches&&(language=matches[1],
extlang=matches[2]?matches[2].substring(1):"",
script=matches[3]?matches[3].substring(1):"",
region=matches[4]?matches[4].substring(1):""),{language:language,
extlang:extlang,script:script,region:region}}function RGB(red,green,blue){
this.red=red,this.green=green,this.blue=blue}
function HSL(hue,saturation,luminance){
this.hue=hue,this.saturation=saturation,this.luminance=luminance}
function relativeLuminance(rgbColor){
var RsRGB=rgbColor.red/255,GsRGB=rgbColor.green/255,BsRGB=rgbColor.blue/255
;return 100*(.2126*(RsRGB<=.03928?RsRGB/12.92:Math.pow((RsRGB+.055)/1.055,2.4))+.7152*(GsRGB<=.03928?GsRGB/12.92:Math.pow((GsRGB+.055)/1.055,2.4))+.0722*(BsRGB<=.03928?BsRGB/12.92:Math.pow((BsRGB+.055)/1.055,2.4)))
}function isDark(rgbColor){return relativeLuminance(rgbColor)<50}
function rgbToHsl(rgbValue){
var RsRGB=rgbValue.red/255,GsRGB=rgbValue.green/255,BsRGB=rgbValue.blue/255,minChannelValue=Math.min(RsRGB,GsRGB,BsRGB),maxChannelValue=Math.max(RsRGB,GsRGB,BsRGB),channelRange=maxChannelValue-minChannelValue,luminance=(minChannelValue+maxChannelValue)/2
;if(Math.abs(channelRange)<.001)return{hue:0,saturation:0,
luminance:Math.round(100*luminance)};var saturation=0
;saturation=luminance<=.5?channelRange/(minChannelValue+maxChannelValue):channelRange/(2-maxChannelValue-minChannelValue)
;var hue=0
;return 0!==channelRange&&(hue=Math.abs(maxChannelValue-RsRGB)<.001?(GsRGB-BsRGB)/channelRange:Math.abs(maxChannelValue-GsRGB)<.001?2+(BsRGB-RsRGB)/channelRange:4+(RsRGB-GsRGB)/channelRange),
(hue*=60)<0&&(hue+=360),{hue:Math.round(hue),
saturation:Math.round(100*saturation),luminance:Math.round(100*luminance)}}
function hslToRgb(hslValue){
var S=hslValue.saturation/100,L=hslValue.luminance/100,C=(1-Math.abs(2*L-1))*S,Htick=hslValue.hue/60,X=C*(1-Math.abs(Htick%2-1)),RGBtick={}
;RGBtick=0<=Htick&&Htick<1?{red:C,green:X,blue:0}:Htick<2?{red:X,green:C,blue:0
}:Htick<3?{red:0,green:C,blue:X}:Htick<4?{red:0,green:X,blue:C}:Htick<5?{red:X,
green:0,blue:C}:{red:C,green:0,blue:X};var m=L-C/2
;return new RGB(Math.round(255*(RGBtick.red+m)),Math.round(255*(RGBtick.green+m)),Math.round(255*(RGBtick.blue+m)))
}function getDarker(rgbColor,delta){var hslColor=rgbToHsl(rgbColor)
;return hslColor.luminance-=delta,
hslColor.luminance=Math.max(hslColor.luminance,0),hslToRgb(hslColor)}
function getLighter(rgbColor,delta){var hslColor=rgbToHsl(rgbColor)
;return hslColor.luminance+=delta,
hslColor.luminance=Math.min(hslColor.luminance,100),hslToRgb(hslColor)}
function shiftHue(rgbValue,degrees){var hsl=rgbToHsl(rgbValue)
;return hsl.hue,hsl.hue+=degrees,
hsl.hue%=360,hsl.hue<0&&(hsl.hue+=360),hslToRgb(hsl)}
var root=document.querySelector(":root")
;function setProperty(propertyName,propertyValue){
root.style.setProperty(propertyName,propertyValue)}
function PaletteEntry(base,contrast,highlight){
this.base=base,this.contrast=contrast,this.highlight=highlight}
function Palette(config){
this.primary=config.primary,this.secondary=config.secondary,
this.tertiary=config.tertiary,
this.background=config.background,this.window=config.window,
this.error=config.error}function getPaletteEntry(rgbColor){var highlight
;highlight=isDark(rgbColor)?getLighter(rgbColor,10):getDarker(rgbColor,10)
;var contrastColor=function(rgbColor){return isDark(rgbColor)?{red:255,
green:255,blue:255}:{red:0,green:0,blue:0}}(rgbColor)
;return new PaletteEntry(rgbColor=function(rgbColor,rgbColorReference,minContrast){
for(var rgbColorB,contrast,refIsDark=isDark(rgbColorReference),loopLimit=Math.floor(20);loopLimit--&&(rgbColorB=rgbColorReference,
contrast=void 0,
((contrast=(relativeLuminance(rgbColor)/100+.05)/(relativeLuminance(rgbColorB)/100+.05))<1?1/contrast:contrast)<minContrast);)rgbColor=refIsDark?getLighter(rgbColor,5):getDarker(rgbColor,5)
;return rgbColor}(rgbColor,contrastColor,7.5),contrastColor,highlight)}
function setCssFromPaletteEntry(key,paletteEntry){
for(var subkey in paletteEntry)relativeLuminance(paletteEntry.base),
relativeLuminance(paletteEntry.contrast),
setProperty("--".concat(key,"-").concat(subkey),(rgbColor=paletteEntry[subkey],
"rgb(".concat(rgbColor.red,", ").concat(rgbColor.green,", ").concat(rgbColor.blue,")")))
;var rgbColor}function fetchJson(url){return fetchFile(url,"json")}
function fetchFile(url,responseType){return console.debug("Fetch ".concat(url)),
fetch(url).then((function(response){
return response.ok?"json"===responseType.toLocaleLowerCase()?response.json():response.text():Promise.reject(new Error("".concat(response.status,": ").concat(response.statusText,"; ").concat(url)))
}))}var _info=new WeakMap,_content=new WeakMap,CachedLesson=function(){
function CachedLesson(info,content){
_classCallCheck(this,CachedLesson),_classPrivateFieldInitSpec(this,_info,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_content,{
writable:!0,value:void 0
}),_classPrivateFieldSet(this,_info,info),_classPrivateFieldSet(this,_content,content)
}return _createClass(CachedLesson,[{key:"content",get:function(){
return _classPrivateFieldGet(this,_content)},set:function(content){
_classPrivateFieldSet(this,_content,content)}},{key:"info",get:function(){
return _classPrivateFieldGet(this,_info)}}],[{key:"clone",value:function(other){
var cloned=new CachedLesson(null)
;return _classPrivateFieldSet(cloned,_info,_objectSpread({},other.info)),
_classPrivateFieldSet(cloned,_content,other.content),cloned}}]),CachedLesson
}(),_element=new WeakMap,_listeningTargets=new WeakMap,_managedChildren=new WeakMap,_elementRemovable=new WeakMap,ManagedElement=function(){
function ManagedElement(tagOrElement,className){
_classCallCheck(this,ManagedElement),_classPrivateFieldInitSpec(this,_element,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_listeningTargets,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_managedChildren,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_elementRemovable,{
writable:!0,value:void 0
}),tagOrElement instanceof Element?(_classPrivateFieldSet(this,_element,tagOrElement),
_classPrivateFieldSet(this,_elementRemovable,!1)):(_classPrivateFieldSet(this,_element,document.createElement(tagOrElement)),
_classPrivateFieldSet(this,_elementRemovable,!0)),
className&&(_classPrivateFieldGet(this,_element).className=className),
_classPrivateFieldSet(this,_listeningTargets,[]),
_classPrivateFieldSet(this,_managedChildren,[])}
return _createClass(ManagedElement,[{key:"element",get:function(){
return _classPrivateFieldGet(this,_element)}},{key:"$",get:function(){
return _classPrivateFieldGet(this,_element)}},{key:"disabled",get:function(){
return _classPrivateFieldGet(this,_element).disabled},set:function(value){
_classPrivateFieldGet(this,_element).disabled=value}},{key:"id",get:function(){
return _classPrivateFieldGet(this,_element).id},set:function(value){
_classPrivateFieldGet(this,_element).id=value}},{key:"managedChildren",
get:function(){return _classPrivateFieldGet(this,_managedChildren)}},{
key:"classList",get:function(){
return _classPrivateFieldGet(this,_element).classList}},{key:"className",
get:function(){return _classPrivateFieldGet(this,_element).className},
set:function(value){_classPrivateFieldGet(this,_element).className=value}},{
key:"checked",get:function(){return _classPrivateFieldGet(this,_element).checked
},set:function(state){_classPrivateFieldGet(this,_element).checked=state}},{
key:"children",get:function(){
return _classPrivateFieldGet(this,_element).children}},{key:"innerHTML",
get:function(){return _classPrivateFieldGet(this,_element).innerHTML},
set:function(data){_classPrivateFieldGet(this,_element).innerHTML=data}},{
key:"lastElementChild",get:function(){
return _classPrivateFieldGet(this,_element).lastElementChild}},{
key:"offsetHeight",get:function(){
return _classPrivateFieldGet(this,_element).offsetHeight}},{key:"offsetWidth",
get:function(){return _classPrivateFieldGet(this,_element).offsetWidth}},{
key:"parentElement",get:function(){
return _classPrivateFieldGet(this,_element).parentElement}},{key:"style",
get:function(){return _classPrivateFieldGet(this,_element).style}},{
key:"tagName",get:function(){return _classPrivateFieldGet(this,_element).tagName
}},{key:"textContent",get:function(){
return _classPrivateFieldGet(this,_element).textContent},set:function(data){
_classPrivateFieldGet(this,_element).textContent=data}},{key:"value",
get:function(){return _classPrivateFieldGet(this,_element).value},
set:function(data){_classPrivateFieldGet(this,_element).value=data}},{
key:"appendChild",value:function(managedElement){
return _classPrivateFieldGet(this,_element).appendChild(managedElement.element),
_classPrivateFieldGet(this,_managedChildren).push(managedElement),managedElement
}},{key:"appendChildTo",value:function(managedElement,parent){
var _managedElement$eleme
;parent.appendChild(null!==(_managedElement$eleme=managedElement.element)&&void 0!==_managedElement$eleme?_managedElement$eleme:managedElement),
_classPrivateFieldGet(this,_managedChildren).push(managedElement)}},{
key:"appendTo",value:function(parent){
parent.appendChild(_classPrivateFieldGet(this,_element))}},{
key:"createAndAppendChild",value:function(tagName,cssClass,html){
var managedElement=new ManagedElement(tagName)
;return cssClass&&managedElement.classList.add(cssClass),
html&&(managedElement.innerHTML=html),
this.appendChild(managedElement),managedElement}},{key:"dispatchEvent",
value:function(event){
return _classPrivateFieldGet(this,_element).dispatchEvent(event)}},{
key:"fadeOut",value:function(){
_classPrivateFieldGet(this,_element).classList.remove("fade-in"),
_classPrivateFieldGet(this,_element).classList.add("fade-out")}},{key:"fadeIn",
value:function(){
_classPrivateFieldGet(this,_element).classList.remove("fade-out"),
_classPrivateFieldGet(this,_element).classList.add("fade-in")}},{key:"focus",
value:function(){_classPrivateFieldGet(this,_element).focus()}},{
key:"getBoundingClientRect",value:function(){
return _classPrivateFieldGet(this,_element).getBoundingClientRect()}},{
key:"handleEvent",value:function(event){var _this$handlerName
;console.debug("Event ".concat(event.type," fired on <").concat(event.currentTarget.tagName,">: class ").concat(event.target.className,"."))
;var handlerName="handle"+event.type.charAt(0).toUpperCase()+event.type.substring(1)+"Event",eventId=event.currentTarget.getAttribute("data-event-id")
;null===(_this$handlerName=this[handlerName])||void 0===_this$handlerName||_this$handlerName.call(this,event,eventId)
}},{key:"hide",value:function(){
_classPrivateFieldGet(this,_element).style.display="none"}},{
key:"insertChildAtTop",value:function(managedElement){var _managedElement$eleme2
;return _classPrivateFieldGet(this,_element).insertBefore(null!==(_managedElement$eleme2=managedElement.element)&&void 0!==_managedElement$eleme2?_managedElement$eleme2:managedElement,_classPrivateFieldGet(this,_element).firstChild),
_classPrivateFieldGet(this,_managedChildren).push(managedElement),managedElement
}},{key:"listenToOwnEvent",value:function(eventType,eventIdOrHandler){
this.listenToEventOn(eventType,this,eventIdOrHandler)}},{key:"listenToEventOn",
value:function(eventType,target,eventIdOrHandler){
if(!(target instanceof ManagedElement))throw new Error("Expect ManagedElement")
;_classPrivateFieldGet(this,_listeningTargets).push({managedElement:target,
eventType:eventType
}),eventIdOrHandler instanceof Function?target.$.addEventListener(eventType,eventIdOrHandler):(null!=eventIdOrHandler&&target.setAttribute("data-event-id",eventIdOrHandler),
target.$.addEventListener(eventType,this))}},{key:"querySelector",
value:function(selectors){
return _classPrivateFieldGet(this,_element).querySelector(selectors)}},{
key:"querySelectorAll",value:function(selectors){
return _classPrivateFieldGet(this,_element).querySelectorAll(selectors)}},{
key:"remove",value:function(){
this.removeListeners(),this.removeChildren(),_classPrivateFieldGet(this,_elementRemovable)&&_classPrivateFieldGet(this,_element).remove()
}},{key:"removeChildren",value:function(){
for(_classPrivateFieldGet(this,_managedChildren).forEach((function(child){
child.remove()
})),_classPrivateFieldSet(this,_managedChildren,[]);_classPrivateFieldGet(this,_element).firstChild;)_classPrivateFieldGet(this,_element).removeChild(_classPrivateFieldGet(this,_element).lastChild)
}},{key:"removeListeners",value:function(){var _this=this
;_classPrivateFieldGet(this,_listeningTargets).forEach((function(target){
target.managedElement.element.removeEventListener(target.eventType,_this)
})),_classPrivateFieldGet(this,_managedChildren).forEach((function(child){
child.removeListeners()})),_classPrivateFieldSet(this,_listeningTargets,[])}},{
key:"setSafeAttribute",value:function(name,value){
_classPrivateFieldGet(this,_element).setAttribute(name,ManagedElement.encodeString(value))
}},{key:"setAttribute",value:function(name,value){
return _classPrivateFieldGet(this,_element).setAttribute(name,value)}},{
key:"show",value:function(){
_classPrivateFieldGet(this,_element).style.display="unset"}},{
key:"getSafeAttribute",value:function(name){
return ManagedElement.decodeString(_classPrivateFieldGet(this,_element).getAttribute(name))
}},{key:"setAttributes",value:function(attributes){for(var key in attributes){
var value=attributes[key]
;null!=value&&null!=value&&""!==value&&_classPrivateFieldGet(this,_element).setAttribute(key,value)
}}}],[{key:"getElement",value:function(item){
return item instanceof ManagedElement?item.element:item}},{key:"$",
value:function(item){return item instanceof ManagedElement?item.element:item}},{
key:"decodeString",value:function(value){return base64ToString(value)}},{
key:"encodeString",value:function(value){return stringToBase64(value)}},{
key:"getSafeAttribute",value:function(element,name){
return ManagedElement.decodeString(element.getAttribute(name))}
}]),ManagedElement}(),HTML_SEMANTIC_ROLES={A:"link",BUTTON:"button"
},_cache=new WeakMap,_hideText=new WeakMap,_getIconHtml=new WeakSet,IconGenerator=function(){
function IconGenerator(){
_classCallCheck(this,IconGenerator),_classPrivateMethodInitSpec(this,_getIconHtml),
_classPrivateFieldInitSpec(this,_cache,{writable:!0,value:new Map
}),_classPrivateFieldInitSpec(this,_hideText,{writable:!0,value:void 0})}
return _createClass(IconGenerator,[{key:"hideText",get:function(){
return _classPrivateFieldGet(this,_hideText)},set:function(value){
_classPrivateFieldSet(this,_hideText,value)}},{key:"addLesson",get:function(){
return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-add-lesson-html"),
accessibleName:i18n(_templateObject||(_templateObject=_taggedTemplateLiteral(["d6e44bc735e33192ee2ddce4af2f2be6::"])))
}}},{key:"back",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-back-nav-html"),
accessibleName:i18n(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["0557fa923dcee4d0f86b1409f5c2167f::"])))
}}},{key:"cancel",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-cancel-html"),
accessibleName:i18n(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["ea4788705e6873b424c65e91c2846b19::"])))
}}},{key:"closeEditor",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-close-editor-html"),
accessibleName:i18n(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["218ed7e6bf7ff30555652c87feff7cd7::"])))
}}},{key:"closeMenu",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-close-menu-html"),
accessibleName:i18n(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["68f18f6b55f955ad05e4a174341bf3f1::"])))
}}},{key:"delete",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-delete-html"),
accessibleName:i18n(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["f2a6c498fb90ee345d997f888fce3b18::"])))
}}},{key:"edit",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-edit-html"),
accessibleName:i18n(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["7dce122004969d56ae2e0245cb754d35::"])))
}}},{key:"error",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-error-html"),
accessibleName:i18n(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["64d2cc43035360eddf790efbef5ddb30::"])))
}}},{key:"exit",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-exit-html"),
accessibleName:i18n(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["cfce38c3725a96fb69d437d1f6af351c::"])))
}}},{key:"export",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-export-html"),
accessibleName:i18n(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["3a7ff7e7931df81408c4e1465364c699::"])))
}}},{key:"exportAutoRun",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-export-autorun-html"),
accessibleName:i18n(_templateObject11||(_templateObject11=_taggedTemplateLiteral(["65b03512ff197b6b8899ba755db630f9::"])))
}}},{key:"fatal",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-fatal-html"),
accessibleName:i18n(_templateObject12||(_templateObject12=_taggedTemplateLiteral(["64d2cc43035360eddf790efbef5ddb30::"])))
}}},{key:"flag",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-flagged-html"),
accessibleName:i18n(_templateObject13||(_templateObject13=_taggedTemplateLiteral(["c5836008c1649301e29351a55db8f65c::"])))
}}},{key:"openFolder",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-open-folder-html"),
accessibleName:i18n(_templateObject14||(_templateObject14=_taggedTemplateLiteral(["a6e75eb31dc77e8d077fb6f92909e191::"])))
}}},{key:"forward",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-forward-nav-html"),
accessibleName:i18n(_templateObject15||(_templateObject15=_taggedTemplateLiteral(["67d2f6740a8eaebf4d5c6f79be8da481::"])))
}}},{key:"help",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-help-html"),
accessibleName:i18n(_templateObject16||(_templateObject16=_taggedTemplateLiteral(["6a26f548831e6a8c26bfbbd9f6ec61e0::"])))
}}},{key:"home",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-home-html"),
accessibleName:i18n(_templateObject17||(_templateObject17=_taggedTemplateLiteral(["8cf04a9734132302f96da8e113e80ce5::"])))
}}},{key:"import",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-import-html"),
accessibleName:i18n(_templateObject18||(_templateObject18=_taggedTemplateLiteral(["28dd16bcceda4431550c96dfc257dd22::"])))
}}},{key:"info",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-info-html"),
accessibleName:i18n(_templateObject19||(_templateObject19=_taggedTemplateLiteral(["c5836008c1649301e29351a55db8f65c::"])))
}}},{key:"selectLesson",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-lesson-html"),
accessibleName:i18n(_templateObject20||(_templateObject20=_taggedTemplateLiteral(["666258634f2ea689eac1e01b184a3cea::"])))
}}},{key:"library",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-library-html"),
accessibleName:i18n(_templateObject21||(_templateObject21=_taggedTemplateLiteral(["d6e5c296474cad126efdfa515a47f1f8::"])))
}}},{key:"load",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-load-html"),
accessibleName:i18n(_templateObject22||(_templateObject22=_taggedTemplateLiteral(["74540c79e377bea903e1023a46df5574::"])))
}}},{key:"nextProblem",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-next-problem-html"),
accessibleName:i18n(_templateObject23||(_templateObject23=_taggedTemplateLiteral(["a0bfb8e59e6c13fc8d990781f77694fe::"])))
}}},{key:"no",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-no-html"),
accessibleName:i18n(_templateObject24||(_templateObject24=_taggedTemplateLiteral(["bafd7322c6e97d25b6299b5d6fe8920b::"])))
}}},{key:"ok",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-ok-html"),
accessibleName:i18n(_templateObject25||(_templateObject25=_taggedTemplateLiteral(["e0aa021e21dddbd6d8cecec71e9cf564::"])))
}}},{key:"pause",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-pause-html"),
accessibleName:i18n(_templateObject26||(_templateObject26=_taggedTemplateLiteral(["105b296a83f9c105355403f3332af50f::"])))
}}},{key:"play",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-play-html"),
accessibleName:i18n(_templateObject27||(_templateObject27=_taggedTemplateLiteral(["de3c731be5633838089a07179d301d7b::"])))
}}},{key:"playLesson",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-play-html"),
accessibleName:i18n(_templateObject28||(_templateObject28=_taggedTemplateLiteral(["afd061e2316f7ab6f934ef5b43f994b6::"])))
}}},{key:"privacy",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-privacy-html"),
accessibleName:i18n(_templateObject29||(_templateObject29=_taggedTemplateLiteral(["c5f29bb36f9158d2e00f5d4dc213a0ff::"])))
}}},{key:"question",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-question-html"),
accessibleName:i18n(_templateObject30||(_templateObject30=_taggedTemplateLiteral(["c5836008c1649301e29351a55db8f65c::"])))
}}},{key:"repeatLesson",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-repeat-lesson-html"),
accessibleName:i18n(_templateObject31||(_templateObject31=_taggedTemplateLiteral(["87a0a633db4ae5246df7ebf3e417a805::"])))
}}},{key:"resetToFactory",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-reset-to-factory-html"),
accessibleName:i18n(_templateObject32||(_templateObject32=_taggedTemplateLiteral(["5dcd7aaf263cdf5f7d1de6aa2264e29f::"])))
}}},{key:"save",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-save-html"),
accessibleName:i18n(_templateObject33||(_templateObject33=_taggedTemplateLiteral(["35d29613e7c8ecabf12dfa188ab862f8::"])))
}}},{key:"settings",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-settings-html"),
accessibleName:i18n(_templateObject34||(_templateObject34=_taggedTemplateLiteral(["f4f70727dc34561dfde1a3c529b6205c::"])))
}}},{key:"skip",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-skip-html"),
accessibleName:i18n(_templateObject35||(_templateObject35=_taggedTemplateLiteral(["72ef2b9b6965d078e3c7f95487a82d1c::"])))
}}},{key:"submitAnswer",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-submit-answer-html"),
accessibleName:i18n(_templateObject36||(_templateObject36=_taggedTemplateLiteral(["4e095ee5de137300bfa0042a6b442b0e::"])))
}}},{key:"openMenu",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-open-menu-html"),
accessibleName:i18n(_templateObject37||(_templateObject37=_taggedTemplateLiteral(["64d2cc43035360eddf790efbef5ddb30::"])))
}}},{key:"warning",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-warning-html"),
accessibleName:i18n(_templateObject38||(_templateObject38=_taggedTemplateLiteral(["64d2cc43035360eddf790efbef5ddb30::"])))
}}},{key:"yes",get:function(){return{
content:_classPrivateMethodGet(this,_getIconHtml,_getIconHtml2).call(this,"--icon-yes-html"),
accessibleName:i18n(_templateObject39||(_templateObject39=_taggedTemplateLiteral(["93cba07454f06a4a960172bbd6e2a435::"])))
}}},{key:"semanticsAddressRole",value:function(element,role){
return!role||HTML_SEMANTIC_ROLES[element.tagName][element.tagName]==role}},{
key:"applyIconToElement",value:function(icon,item){
var _options$hideText,_options$overrideText,_options$role,options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},hideText=null!==(_options$hideText=options.hideText)&&void 0!==_options$hideText?_options$hideText:_classPrivateFieldGet(this,_hideText),label=null!==(_options$overrideText=options.overrideText)&&void 0!==_options$overrideText?_options$overrideText:icon.accessibleName,element=ManagedElement.getElement(item),role=null===(_options$role=options.role)||void 0===_options$role?void 0:_options$role.toLowerCase()
;element.innerHTML=icon.content,
icon.accessibleName&&!hideText?element.innerHTML+="&nbsp;".concat(label):element.title=label,
this.semanticsAddressRole(element,role)?options.hideText&&element.setAttribute("aria-label",label):(element.setAttribute("role",role),
element.setAttribute("aria-label",label))}}]),IconGenerator}()
;function _getIconHtml2(key){var _classPrivateFieldGet6
;if(!_classPrivateFieldGet(this,_cache).has(key)){
var cssValue=getComputedStyle(document.documentElement).getPropertyValue(key)
;cssValue=cssValue.trim(),
_classPrivateFieldGet(this,_cache).set(key,cssValue.substring(1,cssValue.length-1).replace(/\\"/g,'"'))
}
return null!==(_classPrivateFieldGet6=_classPrivateFieldGet(this,_cache).get(key))&&void 0!==_classPrivateFieldGet6?_classPrivateFieldGet6:"!?"
}var icons=new IconGenerator,FocusManager=function(){function FocusManager(){
var _this2=this
;_classCallCheck(this,FocusManager),window.addEventListener("focus",(function(event){
console.debug("Window has focus. Restore focus to active element. Active element ".concat(document.activeElement.tagName," ").concat(document.activeElement.className),document.activeElement,event.relatedTarget),
document.activeElement!==document.body?document.activeElement.focus():_this2.findBestFocus()
}))}return _createClass(FocusManager,[{key:"focusWithin",value:function(){
var _containingElement$el,_step2,containingElement=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,element=null!==(_containingElement$el=containingElement.element)&&void 0!==_containingElement$el?_containingElement$el:containingElement,_iterator2=_createForOfIteratorHelper(element.querySelectorAll("button,select,input,.selectable").values())
;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){
var candidate=_step2.value
;if("none"!==candidate.style.display&&"hidden"!==candidate.style.visibility)return candidate.focus(),
!0}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}
return console.debug("Couldn't find anything to focus on within ".concat(null==element?void 0:element.tagName,":").concat(null==element?void 0:element.className)),
!1}},{key:"findBestFocus",value:function(){
var element=document.querySelector(".selectable.always-on-top")
;element?element.focus():((element=document.querySelector(".modal"))||(element=document.querySelector("#content")),
this.focusWithin(element))}},{key:"setFocus",value:function(element){
return element.focus(),document.activeElement===element}}]),FocusManager
}(),focusManager=new FocusManager,_dismiss=new WeakSet,Toast=function(_ManagedElement){
_inherits(Toast,_ManagedElement);var _super=_createSuper(Toast)
;function Toast(message,rawHtml){var _this3
;_classCallCheck(this,Toast),_classPrivateMethodInitSpec(_assertThisInitialized(_this3=_super.call(this,"div","utils-toast")),_dismiss),
_this3.classList.add("selectable","always-on-top"),_this3.setAttributes({
"aria-role":"alert",tabindex:"0"})
;var content=new ManagedElement("div","container"),icon=new ManagedElement("div")
;return icons.applyIconToElement(icons.closeMenu,icon.element,{hideText:!0
}),_this3.appendChild(content),
_this3.appendChild(icon),rawHtml?content.innerHTML=message:content.textContent=message,
_this3.listenToOwnEvent("click",""),_this3.listenToOwnEvent("keydown",""),_this3
}return _createClass(Toast,[{key:"handleClickEvent",
value:function(eventIgnored){
_classPrivateMethodGet(this,_dismiss,_dismiss2).call(this)}},{
key:"handleKeydownEvent",value:function(event){
console.debug("Key ".concat(event.key)),
"Escape"!==event.key&&" "!==event.key&&"Enter"!==event.key||_classPrivateMethodGet(this,_dismiss,_dismiss2).call(this)
}}]),Toast}(ManagedElement);function _dismiss2(){
this.style.opacity=0,this.remove(),focusManager.findBestFocus()}
function toast(message){var toast=new Toast(message,!0)
;document.body.appendChild(toast.element),setTimeout((function(){
toast.style.top="45vh",toast.focus()}))}
var _storage=new WeakMap,_keyPrefix=new WeakMap,persistentData=new(function(){
function DataStoreManager(storage){
_classCallCheck(this,DataStoreManager),_classPrivateFieldInitSpec(this,_storage,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_keyPrefix,{
writable:!0,value:"app"}),_classPrivateFieldSet(this,_storage,storage)}
return _createClass(DataStoreManager,[{key:"createStorageKey",
value:function(key){
return"".concat(_classPrivateFieldGet(this,_keyPrefix)).concat(key)}},{
key:"getFromStorage",value:function(key,defaultValue){
key=this.createStorageKey(key)
;var value=_classPrivateFieldGet(this,_storage).getItem(key);if(value)try{
var parsedValue=JSON.parse(value)
;return null==parsedValue?defaultValue:parsedValue}catch(error){
console.error(error)}return defaultValue}},{key:"saveToStorage",
value:function(key,value){key=this.createStorageKey(key);try{
_classPrivateFieldGet(this,_storage).setItem(key,JSON.stringify(value))
}catch(error){
toast(i18n(_templateObject40||(_templateObject40=_taggedTemplateLiteral(["e6b3e01861eefd23bb3caa9acd6d0c42::",""])),error.message))
}}},{key:"removeFromStorage",value:function(key){key=this.createStorageKey(key),
_classPrivateFieldGet(this,_storage).removeItem(key)}},{
key:"setStorageKeyPrefix",value:function(prefix){
_classPrivateFieldSet(this,_keyPrefix,prefix)}}]),DataStoreManager
}())(localStorage),rootUrl=window.location.href.replace(/index\.html(\?.*)?$/,""),mdExtension=window.location.host.match(/^127\.0\.0\.1:808[0-2]/)?"md":"html",Urls={
LOGO:"assets/images/logo.png",
HELP:"".concat(rootUrl,"assets/docs/help.").concat(mdExtension),
PRIVACY:"".concat(rootUrl,"assets/docs/privacy.").concat(mdExtension)
},_key2=new WeakMap,_title=new WeakMap,_contentLoader=new WeakMap,_getDefaultLessonKeys=new WeakSet,_getLessonKeys=new WeakSet,_saveLessonKeys=new WeakSet,_getLibraryContent=new WeakSet,_getStorageKeyForLessonKey=new WeakSet,_loadLocalLesson=new WeakSet,_getFreeKey=new WeakSet,LocalLibrary=function(){
function LocalLibrary(){var _this4=this
;_classCallCheck(this,LocalLibrary),_classPrivateMethodInitSpec(this,_getFreeKey),
_classPrivateMethodInitSpec(this,_loadLocalLesson),
_classPrivateMethodInitSpec(this,_getStorageKeyForLessonKey),
_classPrivateMethodInitSpec(this,_getLibraryContent),
_classPrivateMethodInitSpec(this,_saveLessonKeys),
_classPrivateMethodInitSpec(this,_getLessonKeys),
_classPrivateMethodInitSpec(this,_getDefaultLessonKeys),
_classPrivateFieldInitSpec(this,_key2,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_title,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_contentLoader,{writable:!0,value:void 0
}),_classPrivateFieldSet(this,_key2,LocalLibrary.LOCAL_LIBRARY_KEY),
_classPrivateFieldSet(this,_title,i18n(_templateObject41||(_templateObject41=_taggedTemplateLiteral(["72393b3cb338d9556ecd072e26907479::"])))),
_classPrivateFieldSet(this,_contentLoader,(function(){
return _classPrivateMethodGet(_this4,_getLibraryContent,_getLibraryContent2).call(_this4)
}))}return _createClass(LocalLibrary,[{key:"key",get:function(){
return _classPrivateFieldGet(this,_key2)}},{key:"info",get:function(){return{
title:_classPrivateFieldGet(this,_title),
contentLoader:_classPrivateFieldGet(this,_contentLoader)}}},{
key:"saveLocalLessonAtIndex",value:function(index,localLesson){
var keys=_classPrivateMethodGet(this,_getLessonKeys,_getLessonKeys2).call(this)
;if(index<0||index>=keys.length)console.error("Attempt to store to index ".concat(index," ignored."));else{
var key=keys[index]
;persistentData.saveToStorage(_classPrivateMethodGet(this,_getStorageKeyForLessonKey,_getStorageKeyForLessonKey2).call(this,key),localLesson)
}}},{key:"addNewLessonSlot",value:function(){
var key=_classPrivateMethodGet(this,_getFreeKey,_getFreeKey2).call(this),keys=_classPrivateMethodGet(this,_getLessonKeys,_getLessonKeys2).call(this)
;keys.push(key),
_classPrivateMethodGet(this,_saveLessonKeys,_saveLessonKeys2).call(this,keys)}
},{key:"deleteLessonAtIndex",value:function(index){
var keys=_classPrivateMethodGet(this,_getLessonKeys,_getLessonKeys2).call(this),key=keys[index]
;null!=key&&(console.debug("Removing lesson storage index: ".concat(index,"; key:").concat(key)),
persistentData.removeFromStorage(_classPrivateMethodGet(this,_getStorageKeyForLessonKey,_getStorageKeyForLessonKey2).call(this,key)),
keys.splice(index,1),
_classPrivateMethodGet(this,_saveLessonKeys,_saveLessonKeys2).call(this,keys))}
}]),LocalLibrary}();function _getDefaultLessonKeys2(){
for(var indexes=[],index=0;index<LocalLibrary.NUMBER_OF_INITIAL_LESSONS;index++)indexes.push(index)
;return indexes}function _getLessonKeys2(){
return persistentData.getFromStorage(LocalLibrary.LOCAL_LIBRARY_INDEX_KEY,_classPrivateMethodGet(this,_getDefaultLessonKeys,_getDefaultLessonKeys2).call(this))
}function _saveLessonKeys2(keys){
persistentData.saveToStorage(LocalLibrary.LOCAL_LIBRARY_INDEX_KEY,keys)}
function _getLibraryContent2(){var _this49=this,book={
title:i18n(_templateObject93||(_templateObject93=_taggedTemplateLiteral(["c025e43a825a053fc668cef35cfa9ef5::"]))),
location:"",chapters:[{
title:i18n(_templateObject94||(_templateObject94=_taggedTemplateLiteral(["8fe1f2e455ff223c81a6441733982773::"]))),
lessons:[]}]}
;return _classPrivateMethodGet(this,_getLessonKeys,_getLessonKeys2).call(this).forEach((function(key){
var localLesson=_classPrivateMethodGet(_this49,_loadLocalLesson,_loadLocalLesson2).call(_this49,key)
;book.chapters[0].lessons.push({title:localLesson.title,
contentLoader:function(){return localLesson.content}})})),[book]}
function _getStorageKeyForLessonKey2(key){
return"".concat(LocalLibrary.LOCAL_LESSON_KEY_PREFIX).concat(key)}
function _loadLocalLesson2(key){
var lessonHelpLink="[How to write lessons](".concat(Urls.HELP,")"),defaultLesson={
title:i18n(_templateObject95||(_templateObject95=_taggedTemplateLiteral(["3e485231bbe46dac20bd0ed40c513dd7::"]))),
content:i18n(_templateObject96||(_templateObject96=_taggedTemplateLiteral(["0c61e973e1e23347be794197b57f91ab::",""])),lessonHelpLink)
}
;return persistentData.getFromStorage(_classPrivateMethodGet(this,_getStorageKeyForLessonKey,_getStorageKeyForLessonKey2).call(this,key),defaultLesson)
}function _getFreeKey2(){
var indexes=_classPrivateMethodGet(this,_getLessonKeys,_getLessonKeys2).call(this)
;indexes.sort()
;for(var n=0;n<indexes.length-1;n++)if(indexes[n+1]-indexes[n]>1)return indexes[n]+1
;return indexes[indexes.length-1]+1}
_defineProperty(LocalLibrary,"LOCAL_LIBRARY_KEY","LOCAL_LIBRARY"),
_defineProperty(LocalLibrary,"LOCAL_LIBRARY_INDEX_KEY","LOCAL_LIBRARY_INDEX"),
_defineProperty(LocalLibrary,"LOCAL_LESSON_KEY_PREFIX","LocalLesson_"),
_defineProperty(LocalLibrary,"NUMBER_OF_INITIAL_LESSONS",4);var LessonOrigin={
REMOTE:"remote",LOCAL:"local",SESSION:"session",FILE_SYSTEM:"file_system"
},_usingLocalLibrary=new WeakMap,_libraries=new WeakMap,_remoteLibraryKey=new WeakMap,_currentLibraryKey=new WeakMap,_currentBookIndex=new WeakMap,_currentChapterIndex=new WeakMap,_currentLessonIndex=new WeakMap,_cachedLesson=new WeakMap,_buildCurrentLessonInfo=new WeakSet,_ensurePositiveInt=new WeakSet,_ensureIndexesValid=new WeakSet,_indexInvalid=new WeakSet,_getCurrentBook=new WeakSet,_loadLibraryContent=new WeakSet,_escapeAllTitles=new WeakSet,_loadLessonUsingContentLoader=new WeakSet,_loadRemoteLesson=new WeakSet
;function _buildCurrentLessonInfo2(url){
var _book$chapters$_class,_classPrivateFieldGet7,_book$chapters$_class2,_book$chapters$_class3
;_classPrivateMethodGet(this,_ensureIndexesValid,_ensureIndexesValid2).call(this)
;var book=_classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this)
;return{
origin:_classPrivateFieldGet(this,_usingLocalLibrary)?LessonOrigin.LOCAL:LessonOrigin.REMOTE,
usingLocalLibrary:_classPrivateFieldGet(this,_usingLocalLibrary),
libraryKey:_classPrivateFieldGet(this,_currentLibraryKey),
file:null==book||null===(_book$chapters$_class=book.chapters[_classPrivateFieldGet(this,_currentChapterIndex)])||void 0===_book$chapters$_class||null===(_book$chapters$_class=_book$chapters$_class.lessons[_classPrivateFieldGet(this,_currentLessonIndex)])||void 0===_book$chapters$_class?void 0:_book$chapters$_class.file,
url:url,indexes:{book:_classPrivateFieldGet(this,_currentBookIndex),
chapter:_classPrivateFieldGet(this,_currentChapterIndex),
lesson:_classPrivateFieldGet(this,_currentLessonIndex)},titles:{
library:null===(_classPrivateFieldGet7=_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey)))||void 0===_classPrivateFieldGet7?void 0:_classPrivateFieldGet7.title,
book:null==book?void 0:book.title,
chapter:null==book||null===(_book$chapters$_class2=book.chapters[_classPrivateFieldGet(this,_currentChapterIndex)])||void 0===_book$chapters$_class2?void 0:_book$chapters$_class2.title,
lesson:null==book||null===(_book$chapters$_class3=book.chapters[_classPrivateFieldGet(this,_currentChapterIndex)])||void 0===_book$chapters$_class3||null===(_book$chapters$_class3=_book$chapters$_class3.lessons[_classPrivateFieldGet(this,_currentLessonIndex)])||void 0===_book$chapters$_class3?void 0:_book$chapters$_class3.title
}}}function _ensurePositiveInt2(index){
return index=parseInt(index),isNaN(index)||index<0?0:index}
function _ensureIndexesValid2(){
var library=_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey))
;_classPrivateMethodGet(this,_indexInvalid,_indexInvalid2).call(this,_classPrivateFieldGet(this,_currentBookIndex),null==library?void 0:library.books)&&_classPrivateFieldSet(this,_currentBookIndex,0)
;var book=null==library?void 0:library.books[_classPrivateFieldGet(this,_currentBookIndex)]
;_classPrivateMethodGet(this,_indexInvalid,_indexInvalid2).call(this,_classPrivateFieldGet(this,_currentChapterIndex),null==book?void 0:book.chapters)&&_classPrivateFieldSet(this,_currentChapterIndex,0)
;var chapter=null==book?void 0:book.chapters[_classPrivateFieldGet(this,_currentChapterIndex)]
;_classPrivateMethodGet(this,_indexInvalid,_indexInvalid2).call(this,_classPrivateFieldGet(this,_currentLessonIndex),null==chapter?void 0:chapter.lessons.length)&&_classPrivateFieldSet(this,_currentLessonIndex,0)
}function _indexInvalid2(index,arrayData){
return null!=arrayData&&(isNaN(index)||index<0||index>=arrayData.length)}
function _getCurrentBook2(){
return _classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey)).books[_classPrivateFieldGet(this,_currentBookIndex)]
}function _loadLibraryContent2(key,force){
var _library$books,_this50=this,library=_classPrivateFieldGet(this,_libraries).get(key)
;return(null===(_library$books=library.books)||void 0===_library$books?void 0:_library$books.length)>0&&!force?Promise.resolve():library.contentLoader?(library.books=library.contentLoader(),
_classPrivateMethodGet(this,_escapeAllTitles,_escapeAllTitles2).call(this,library.books),
_classPrivateMethodGet(this,_ensureIndexesValid,_ensureIndexesValid2).call(this),
Promise.resolve()):fetchJson(library.url).then((function(value){
library.books=value,
_classPrivateMethodGet(_this50,_escapeAllTitles,_escapeAllTitles2).call(_this50,library.books),
_classPrivateMethodGet(_this50,_ensureIndexesValid,_ensureIndexesValid2).call(_this50)
}))}function _escapeAllTitles2(books){books.forEach((function(book){
book.title=escapeHtml(book.title),book.chapters.forEach((function(chapter){
chapter.title=escapeHtml(chapter.title),
chapter.lessons.forEach((function(lesson){lesson.title=escapeHtml(lesson.title)
}))}))}))}function _loadLessonUsingContentLoader2(contentLoader){
return Promise.resolve(new CachedLesson(_classPrivateMethodGet(this,_buildCurrentLessonInfo,_buildCurrentLessonInfo2).call(this,""),contentLoader()))
}function _loadRemoteLesson2(){
var _classPrivateFieldGet8,_this51=this,url=this.formUrlForLesson()
;return(null===(_classPrivateFieldGet8=_classPrivateFieldGet(this,_cachedLesson))||void 0===_classPrivateFieldGet8?void 0:_classPrivateFieldGet8.info.url)===url?(console.info("Using cached version of lesson: ".concat(url)),
Promise.resolve(CachedLesson.clone(_classPrivateFieldGet(this,_cachedLesson)))):(_classPrivateFieldSet(this,_cachedLesson,new CachedLesson(_classPrivateMethodGet(this,_buildCurrentLessonInfo,_buildCurrentLessonInfo2).call(this,url))),
function(url){return fetchFile(url,"text")}(url).then((function(text){
return console.info("Loaded lesson: ".concat(url)),
_classPrivateFieldGet(_this51,_cachedLesson).content=text,
CachedLesson.clone(_classPrivateFieldGet(_this51,_cachedLesson))})))}
var lessonManager=new(function(){function LessonManager(){
_classCallCheck(this,LessonManager),
_classPrivateMethodInitSpec(this,_loadRemoteLesson),
_classPrivateMethodInitSpec(this,_loadLessonUsingContentLoader),
_classPrivateMethodInitSpec(this,_escapeAllTitles),
_classPrivateMethodInitSpec(this,_loadLibraryContent),
_classPrivateMethodInitSpec(this,_getCurrentBook),
_classPrivateMethodInitSpec(this,_indexInvalid),
_classPrivateMethodInitSpec(this,_ensureIndexesValid),
_classPrivateMethodInitSpec(this,_ensurePositiveInt),
_classPrivateMethodInitSpec(this,_buildCurrentLessonInfo),
_classPrivateFieldInitSpec(this,_usingLocalLibrary,{writable:!0,value:!1
}),_classPrivateFieldInitSpec(this,_libraries,{writable:!0,value:new Map
}),_classPrivateFieldInitSpec(this,_remoteLibraryKey,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_currentLibraryKey,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_currentBookIndex,{writable:!0,value:0
}),_classPrivateFieldInitSpec(this,_currentChapterIndex,{writable:!0,value:0
}),_classPrivateFieldInitSpec(this,_currentLessonIndex,{writable:!0,value:0
}),_classPrivateFieldInitSpec(this,_cachedLesson,{writable:!0,value:void 0})}
return _createClass(LessonManager,[{key:"remoteLibraryKey",set:function(key){
if(!_classPrivateFieldGet(this,_libraries).has(key))return console.error("Ignored attempt to set remote invalid remote library key ".concat(key,".")),
void _classPrivateFieldSet(this,_usingLocalLibrary,!0)
;_classPrivateFieldSet(this,_remoteLibraryKey,key),
_classPrivateFieldGet(this,_usingLocalLibrary)||_classPrivateFieldSet(this,_currentLibraryKey,_classPrivateFieldGet(this,_remoteLibraryKey))
}},{key:"usingLocalLibrary",get:function(){
return _classPrivateFieldGet(this,_usingLocalLibrary)},set:function(value){
_classPrivateFieldSet(this,_usingLocalLibrary,value),
_classPrivateFieldSet(this,_currentLibraryKey,_classPrivateFieldGet(this,_usingLocalLibrary)?LocalLibrary.LOCAL_LIBRARY_KEY:_classPrivateFieldGet(this,_remoteLibraryKey))
}},{key:"bookIndex",set:function(index){
_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey))?_classPrivateFieldSet(this,_currentBookIndex,_classPrivateMethodGet(this,_ensurePositiveInt,_ensurePositiveInt2).call(this,index)):_classPrivateFieldSet(this,_currentBookIndex,0)
}},{key:"chapterIndex",set:function(index){
_classPrivateFieldSet(this,_currentChapterIndex,_classPrivateMethodGet(this,_ensurePositiveInt,_ensurePositiveInt2).call(this,index))
}},{key:"lessonIndex",set:function(index){
_classPrivateFieldSet(this,_currentLessonIndex,_classPrivateMethodGet(this,_ensurePositiveInt,_ensurePositiveInt2).call(this,index))
}},{key:"libraryTitle",get:function(){
var _classPrivateFieldGet2,title=null===(_classPrivateFieldGet2=_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey)))||void 0===_classPrivateFieldGet2?void 0:_classPrivateFieldGet2.title
;return null!=title?title:""}},{key:"libraryTitles",get:function(){
var options=new Map
;return _classPrivateFieldGet(this,_libraries).forEach((function(value,key){
options.set(key,value.title)})),options}},{key:"remoteLibraryTitles",
get:function(){var options=new Map
;return _classPrivateFieldGet(this,_libraries).forEach((function(value,key){
key!==LocalLibrary.LOCAL_LIBRARY_KEY&&options.set(key,value.title)})),options}
},{key:"bookTitle",get:function(){
var _classPrivateMethodGe,title=null===(_classPrivateMethodGe=_classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this))||void 0===_classPrivateMethodGe?void 0:_classPrivateMethodGe.title
;return null!=title?title:""}},{key:"bookTitles",get:function(){
var _classPrivateFieldGet3,titles=[]
;return null===(_classPrivateFieldGet3=_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey)))||void 0===_classPrivateFieldGet3||_classPrivateFieldGet3.books.forEach((function(value){
titles.push(value.title)})),titles}},{key:"chapterTitle",get:function(){
var _classPrivateMethodGe2,title=null===(_classPrivateMethodGe2=_classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this))||void 0===_classPrivateMethodGe2||null===(_classPrivateMethodGe2=_classPrivateMethodGe2.chapters[_classPrivateFieldGet(this,_currentChapterIndex)])||void 0===_classPrivateMethodGe2?void 0:_classPrivateMethodGe2.title
;return null!=title?title:""}},{key:"chapterTitles",get:function(){var titles=[]
;return _classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this).chapters.forEach((function(value){
titles.push(value.title)})),titles}},{key:"lessonTitle",get:function(){
var _classPrivateMethodGe3,title=null===(_classPrivateMethodGe3=_classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this))||void 0===_classPrivateMethodGe3||null===(_classPrivateMethodGe3=_classPrivateMethodGe3.chapters[_classPrivateFieldGet(this,_currentChapterIndex)])||void 0===_classPrivateMethodGe3||null===(_classPrivateMethodGe3=_classPrivateMethodGe3.lessons[_classPrivateFieldGet(this,_currentLessonIndex)])||void 0===_classPrivateMethodGe3?void 0:_classPrivateMethodGe3.title
;return null!=title?title:""}},{key:"lessonTitles",get:function(){var titles=[]
;return _classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this).chapters[_classPrivateFieldGet(this,_currentChapterIndex)].lessons.forEach((function(value){
titles.push(value.title)})),titles}},{key:"currentLessonInfo",get:function(){
return _classPrivateMethodGet(this,_buildCurrentLessonInfo,_buildCurrentLessonInfo2).call(this)
}},{key:"getUnmanagedLessonInfo",value:function(lessonTitle,origin){return{
origin:origin,usingLocalLibrary:!1,libraryKey:void 0,file:void 0,url:void 0,
indexes:{book:0,chapter:0,lesson:0},titles:{library:"",book:"",chapter:"",
lesson:lessonTitle}}}},{key:"formUrlForLesson",value:function(){
var books=_classPrivateFieldGet(this,_libraries).get(_classPrivateFieldGet(this,_currentLibraryKey)).books,fileLocation=books[_classPrivateFieldGet(this,_currentBookIndex)].location,fileName=books[_classPrivateFieldGet(this,_currentBookIndex)].chapters[_classPrivateFieldGet(this,_currentChapterIndex)].lessons[_classPrivateFieldGet(this,_currentLessonIndex)].file
;return"".concat(fileLocation).concat(fileName)}},{key:"loadAllLibraries",
value:function(librariesFileLocation){var _this5=this
;_classPrivateFieldSet(this,_libraries,new Map)
;var localLibrary=new LocalLibrary
;return _classPrivateFieldGet(this,_libraries).set(localLibrary.key,localLibrary.info),
fetchJson(librariesFileLocation).then((function(entries){
for(var key in entries){var entry=entries[key]
;entry.title=escapeHtml(entry.title),
_classPrivateFieldGet(_this5,_libraries).set(key,entries[key]),
_classPrivateFieldGet(_this5,_libraries).get(key).books=[]}
return _classPrivateFieldGet(_this5,_libraries).size}))}},{
key:"loadAllLibraryContent",value:function(){var _this6=this
;return _classPrivateMethodGet(this,_loadLibraryContent,_loadLibraryContent2).call(this,LocalLibrary.LOCAL_LIBRARY_KEY).then((function(){
return _classPrivateMethodGet(_this6,_loadLibraryContent,_loadLibraryContent2).call(_this6,_classPrivateFieldGet(_this6,_remoteLibraryKey))
}))}},{key:"loadCurrentLesson",value:function(){
_classPrivateMethodGet(this,_ensureIndexesValid,_ensureIndexesValid2).call(this)
;var contentLoader=_classPrivateMethodGet(this,_getCurrentBook,_getCurrentBook2).call(this).chapters[_classPrivateFieldGet(this,_currentChapterIndex)].lessons[_classPrivateFieldGet(this,_currentLessonIndex)].contentLoader
;return contentLoader?_classPrivateMethodGet(this,_loadLessonUsingContentLoader,_loadLessonUsingContentLoader2).call(this,contentLoader):_classPrivateMethodGet(this,_loadRemoteLesson,_loadRemoteLesson2).call(this)
}},{key:"updateCurrentLessonContent",value:function(title,content){
if(!_classPrivateFieldGet(this,_usingLocalLibrary))throw new Error("Attempt made to update a remote library.")
;return(new LocalLibrary).saveLocalLessonAtIndex(_classPrivateFieldGet(this,_currentLessonIndex),{
title:title,content:content
}),_classPrivateMethodGet(this,_loadLibraryContent,_loadLibraryContent2).call(this,LocalLibrary.LOCAL_LIBRARY_KEY,!0)
}},{key:"addLessonToLocalLibrary",value:function(){
var localLibrary=new LocalLibrary
;return localLibrary.addNewLessonSlot(),_classPrivateFieldGet(this,_libraries).set(localLibrary.key,localLibrary.info),
_classPrivateMethodGet(this,_loadLibraryContent,_loadLibraryContent2).call(this,localLibrary.key,!0)
}},{key:"deleteLocalLibraryCurrentLesson",value:function(){
if(!_classPrivateFieldGet(this,_usingLocalLibrary))return console.error("Ignored attempt to delete local library when it is not the active library."),
Promise.resolve();var localLibrary=new LocalLibrary
;return localLibrary.deleteLessonAtIndex(_classPrivateFieldGet(this,_currentLessonIndex)),
_classPrivateFieldGet(this,_libraries).set(localLibrary.key,localLibrary.info),
_classPrivateMethodGet(this,_loadLibraryContent,_loadLibraryContent2).call(this,localLibrary.key,!0)
}}]),LessonManager
}()),DEFAULT_HUE=120,DEFAULT_SATURATION=50,DEFAULT_COLOR_SPREAD=120,DEFAULT_DARK_MODE=!1,DEFAULT_FONT_SIZE=15,DEFAULT_LIBRARY_KEY="EN",DEFAULT_READING_SPEED="180"
;function setPalette(settings){
var _settings$hue,_settings$saturation,_settings$spread,_settings$dark
;settings.hue=null!==(_settings$hue=settings.hue)&&void 0!==_settings$hue?_settings$hue:persistentData.getFromStorage("hue",DEFAULT_HUE),
settings.saturation=null!==(_settings$saturation=settings.saturation)&&void 0!==_settings$saturation?_settings$saturation:persistentData.getFromStorage("saturation",DEFAULT_SATURATION),
settings.spread=null!==(_settings$spread=settings.spread)&&void 0!==_settings$spread?_settings$spread:persistentData.getFromStorage("spread",DEFAULT_COLOR_SPREAD),
settings.dark=null!==(_settings$dark=settings.dark)&&void 0!==_settings$dark?_settings$dark:persistentData.getFromStorage("darkMode",DEFAULT_DARK_MODE),
function(palette){
for(var entryKey in palette)setCssFromPaletteEntry(entryKey,palette[entryKey])
}(function(settings){
var primaryRgb=hslToRgb(new HSL(settings.hue,settings.saturation,settings.dark?70:30)),colors=[primaryRgb],complementA=shiftHue(primaryRgb,settings.spread),complementB=shiftHue(primaryRgb,-settings.spread)
;colors.push(complementA,complementB),colors.sort((function(a,b){
var relLuminanceA=relativeLuminance(a),relLuminanceB=relativeLuminance(b)
;return relLuminanceA>relLuminanceB?1:relLuminanceA<relLuminanceB?-1:0
})),colors[0]=getDarker(colors[0],5),colors[2]=getLighter(colors[0],5)
;var errorHsl=new HSL(0,settings.saturation,50),backgroundHsl=new HSL(settings.hue,0,settings.dark?5:95),windowHsl=new HSL(settings.hue,0,settings.dark?0:100)
;return new Palette({primary:getPaletteEntry(primaryRgb),
secondary:getPaletteEntry(complementA),tertiary:getPaletteEntry(complementB),
background:getPaletteEntry(hslToRgb(backgroundHsl)),
window:getPaletteEntry(hslToRgb(windowHsl)),
error:getPaletteEntry(hslToRgb(errorHsl))})}(settings))}
var BarButton=function(_ManagedElement2){_inherits(BarButton,_ManagedElement2)
;var _super2=_createSuper(BarButton);function BarButton(detail){var _this7
;return _classCallCheck(this,BarButton),
_this7=_super2.call(this,"button"),detail.content?icons.applyIconToElement(detail,_this7.element):_this7.innerHTML=detail,
_this7}return _createClass(BarButton)
}(ManagedElement),ButtonBar=function(_ManagedElement3){
_inherits(ButtonBar,_ManagedElement3);var _super3=_createSuper(ButtonBar)
;function ButtonBar(){
return _classCallCheck(this,ButtonBar),_super3.call(this,"div","utils-button-bar")
}return _createClass(ButtonBar,[{key:"showButtons",value:function(buttons){
var _buttons,_this8=this
;null!==(_buttons=buttons)&&void 0!==_buttons&&_buttons.length||(buttons=[icons.ok]),
this.resolutionFunction=null;var promise=new Promise((function(resolve){
_this8.resolutionFunction=resolve}))
;return buttons.forEach((function(value,index){var button=new BarButton(value)
;button.setAttribute("data-index",index),
_this8.appendChild(button,index),_this8.listenToEventOn("click",button,index)
})),focusManager.findBestFocus(),promise}},{key:"handleClickEvent",
value:function(eventIgnored,eventId){var index=parseInt(eventId)
;this.resolutionFunction(index)}}]),ButtonBar
}(ManagedElement),mask=document.getElementById("modal-mask"),standardSelectionIds=["title-bar","content","footer"],referenceCount=0,itemsToRestore=[]
;function deactivateItems(){standardSelectionIds.forEach((function(id){
document.getElementById(id).querySelectorAll("button,.selectable,input,textarea").forEach((function(element){
!function(element){
console.debug("Deactivating ".concat(element.tagName,": ").concat(element.className))
;var elementDetails={element:element,
"aria-hidden":element.getAttribute("aria-hidden"),disabled:element.disabled,
tabIndex:element.tabIndex}
;itemsToRestore.push(elementDetails),element.setAttribute("aria-hidden",!0),
void 0!==element.disabled&&(element.disabled=!0),element.tabIndex=-1}(element)
}))}))}function showMask(){
mask.style.visibility="visible",0===referenceCount?deactivateItems():console.debug("Reference count ".concat(referenceCount," is > 0 so mask already in place.")),
referenceCount++}function hideMask(){
--referenceCount>0?console.debug("Reference count ".concat(referenceCount," is > 0 so leave mask in place.")):(itemsToRestore.forEach((function(item){
item.ariaHidden?item.element.setAttribute("aria-hidden",item.ariaHidden):item.element.removeAttribute("aria-hidden"),
void 0!==item.disabled&&(item.element.disabled=item.disabled),
void 0!==item.tabIndex&&(item.element.tabIndex=item.tabIndex)
})),itemsToRestore=[],mask.style.visibility="hidden")}
function getIconDetailsForType(dialogType){switch(dialogType){
case ModalDialog.DialogType.WARNING:return icons.warning
;case ModalDialog.DialogType.ERROR:return icons.error
;case ModalDialog.DialogType.FATAL:return icons.fatal
;case ModalDialog.DialogType.QUESTION:return icons.question
;case ModalDialog.DialogType.SETTINGS:return icons.settings
;case ModalDialog.DialogType.INFO:default:return icons.info}}
var _dialog=new WeakMap,_titleText=new WeakMap,_icon=new WeakMap,_content2=new WeakMap,_buttonBar=new WeakMap,_createHtml=new WeakSet,_showDialogDefinition=new WeakSet,_hideDialog=new WeakSet,ModalDialog=function(){
function ModalDialog(){
if(_classCallCheck(this,ModalDialog),_classPrivateMethodInitSpec(this,_hideDialog),
_classPrivateMethodInitSpec(this,_showDialogDefinition),
_classPrivateMethodInitSpec(this,_createHtml),
_classPrivateFieldInitSpec(this,_dialog,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_titleText,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_icon,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_content2,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_buttonBar,{writable:!0,value:void 0
}),!_classStaticPrivateFieldSpecGet(ModalDialog,ModalDialog,_isConstructing))throw new Error("ModalDialog should be instantiated via factory method.")
;_classPrivateMethodGet(this,_createHtml,_createHtml2).call(this)}
return _createClass(ModalDialog,null,[{key:"showDialog",
value:function(title,content,options){
var dialog=_classStaticPrivateMethodGet(ModalDialog,ModalDialog,_constructDialog).call(ModalDialog)
;(null==options?void 0:options.dialogType)===ModalDialog.DialogType.FATAL&&(content=_classStaticPrivateMethodGet(ModalDialog,ModalDialog,_addReloadWarning).call(ModalDialog,content))
;var iconDetails=getIconDetailsForType(null==options?void 0:options.dialogType),dialogDefinition={
title:title&&title.length>0?title:":",
buttons:null==options?void 0:options.buttons,content:content,
dialogType:null==options?void 0:options.dialogType,iconDetails:iconDetails}
;return _classPrivateMethodGet(dialog,_showDialogDefinition,_showDialogDefinition2).call(dialog,dialogDefinition)
}},{key:"showSettingsDialog",value:function(content){var options={
dialogType:ModalDialog.DialogType.SETTINGS,
buttons:[icons.ok,icons.resetToFactory]}
;return ModalDialog.showDialog(i18n(_templateObject53||(_templateObject53=_taggedTemplateLiteral(["f4f70727dc34561dfde1a3c529b6205c::"]))),content,options)
}},{key:"showWarning",value:function(content,title){
return ModalDialog.showDialog(null!=title?title:i18n(_templateObject54||(_templateObject54=_taggedTemplateLiteral(["0eaadb4fcb48a0a0ed7bc9868be9fbaa::"]))),content,{
dialogType:ModalDialog.DialogType.WARNING})}},{key:"showError",
value:function(content,title){
return ModalDialog.showDialog(null!=title?title:i18n(_templateObject55||(_templateObject55=_taggedTemplateLiteral(["902b0d55fddef6f8d651fe1035b7d4bd::"]))),content,{
dialogType:ModalDialog.DialogType.ERROR})}},{key:"showInfo",
value:function(content,title){
return ModalDialog.showDialog(null!=title?title:i18n(_templateObject56||(_templateObject56=_taggedTemplateLiteral(["a82be0f551b8708bc08eb33cd9ded0cf::"]))),content,{
dialogType:ModalDialog.DialogType.INFO})}},{key:"showConfirm",
value:function(content,title){
return ModalDialog.showDialog(null!=title?title:i18n(_templateObject57||(_templateObject57=_taggedTemplateLiteral(["a97ea56b0e00b2379736ae60869ff66a::"]))),content,{
dialogType:ModalDialog.DialogType.QUESTION,buttons:[icons.yes,icons.no]})}},{
key:"showFatal",value:function(content,title){
return ModalDialog.showDialog(null!=title?title:i18n(_templateObject58||(_templateObject58=_taggedTemplateLiteral(["355f26b47eff3302c93a1c49676f078e::"]))),content,{
dialogType:ModalDialog.DialogType.FATAL})}}]),ModalDialog}()
;function _constructDialog(){
_classStaticPrivateFieldSpecSet(ModalDialog,ModalDialog,_isConstructing,!0)
;var dialog=new ModalDialog
;return _classStaticPrivateFieldSpecSet(ModalDialog,ModalDialog,_isConstructing,!1),
dialog}function _createHtml2(){
_classPrivateFieldSet(this,_dialog,new ManagedElement("div","utils-dialog")),
_classPrivateFieldGet(this,_dialog).classList.add("framed","modal")
;var titleBar=new ManagedElement("div","utils-title-bar")
;titleBar.classList.add("container"),
_classPrivateFieldSet(this,_icon,new ManagedElement("span","utils-dialog-icon")),
titleBar.appendChild(_classPrivateFieldGet(this,_icon)),
_classPrivateFieldSet(this,_titleText,new ManagedElement("span")),
titleBar.appendChild(_classPrivateFieldGet(this,_titleText))
;var contentFrame=new ManagedElement("div","utils-dialog-content-frame")
;contentFrame.classList.add("container"),
_classPrivateFieldSet(this,_content2,new ManagedElement("div","utils-dialog-content")),
contentFrame.appendChild(_classPrivateFieldGet(this,_content2)),
_classPrivateFieldSet(this,_buttonBar,new ButtonBar),
_classPrivateFieldGet(this,_dialog).appendChild(titleBar),
_classPrivateFieldGet(this,_dialog).appendChild(contentFrame),
_classPrivateFieldGet(this,_dialog).appendChild(_classPrivateFieldGet(this,_buttonBar)),
_classPrivateFieldGet(this,_dialog).appendTo(document.body)}
function _showDialogDefinition2(dialogDefinition){var _this52=this
;return _classPrivateFieldGet(this,_titleText).textContent=dialogDefinition.title,
dialogDefinition.content instanceof Element||dialogDefinition.content instanceof ManagedElement?(_classPrivateFieldGet(this,_content2).textContent="",
_classPrivateFieldGet(this,_content2).appendChild(dialogDefinition.content)):_classPrivateFieldGet(this,_content2).innerHTML=dialogDefinition.content,
icons.applyIconToElement(dialogDefinition.iconDetails,_classPrivateFieldGet(this,_icon),{
hideText:!0
}),showMask(),_classPrivateFieldGet(this,_buttonBar).showButtons(dialogDefinition.buttons).then((function(index){
return _classPrivateMethodGet(_this52,_hideDialog,_hideDialog2).call(_this52),
focusManager.findBestFocus(),index}))}function _hideDialog2(){
hideMask(),_classPrivateFieldGet(this,_dialog).remove()}
function _addReloadWarning(content){
var reloadText=i18n(_templateObject97||(_templateObject97=_taggedTemplateLiteral(["b33bb0b4617140c80c80b10436a0dbb2::"])))
;if(""===reloadText&&(reloadText="A serious error has occurred and languages cannot be loaded. Wait a few minutes and then close this dialog to try to reload the application."),
content instanceof Element){var para=document.createElement("p")
;return para.textContent=reloadText,content.appendChild(para),content}
return"".concat(content,"<p>").concat(reloadText,"</p>")}
_defineProperty(ModalDialog,"DialogType",{ERROR:"error",FATAL:"fatal",
INFO:"info",QUESTION:"question",SETTINGS:"settings",WARNING:"warning"
}),_defineProperty(ModalDialog,"DialogIndex",{SETTINGS_OK:0,SETTINGS_RESET:1,
CONFIRM_YES:0,CONFIRM_NO:1});var _isConstructing={writable:!0,value:!1
},_reloadRequired=new WeakMap,_reason=new WeakMap,reloader=new(function(){
function Reloader(){
_classCallCheck(this,Reloader),_classPrivateFieldInitSpec(this,_reloadRequired,{
writable:!0,value:!1}),_classPrivateFieldInitSpec(this,_reason,{writable:!0,
value:""})}return _createClass(Reloader,[{key:"flagAsRequired",
value:function(reason){
_classPrivateFieldSet(this,_reason,reason),_classPrivateFieldSet(this,_reloadRequired,!0)
}},{key:"reloadIfRequired",value:function(){
if(_classPrivateFieldGet(this,_reloadRequired)){
var warning=i18n(_templateObject59||(_templateObject59=_taggedTemplateLiteral(["5a1ee4a311c51fa4b76d3c7edd6bdda6::"])))
;return ModalDialog.showWarning("<p>".concat(warning,"</p><p>").concat(_classPrivateFieldGet(this,_reason),"</p>")).then((function(){
window.location.reload()}))}return Promise.resolve()}}]),Reloader
}()),_storedValues=new WeakMap,SettingsValueCache=function(){
function SettingsValueCache(definitions){
for(var key in _classCallCheck(this,SettingsValueCache),
_classPrivateFieldInitSpec(this,_storedValues,{writable:!0,value:new Map
}),definitions)if(definitions[key].reloadIfChanged){var cachedValue={
value:persistentData.getFromStorage(key),label:definitions[key].label}
;_classPrivateFieldGet(this,_storedValues).set(key,cachedValue)}}
return _createClass(SettingsValueCache,[{key:"changes",get:function(){
var labels=[]
;return _classPrivateFieldGet(this,_storedValues).forEach((function(cachedValue,key){
persistentData.getFromStorage(key)!==cachedValue.value&&labels.push(cachedValue.label)
})),labels.join(", ")}}]),SettingsValueCache
}(),RangeIndicator=function(_ManagedElement4){
_inherits(RangeIndicator,_ManagedElement4)
;var _super4=_createSuper(RangeIndicator);function RangeIndicator(control){
var _this9
;return _classCallCheck(this,RangeIndicator),(_this9=_super4.call(this,"div","utils-range-value")).classList.add("on-top"),
_this9.control=control,
_this9.listenToEventOn("input",_this9.control,""),_this9.hide(),_this9}
return _createClass(RangeIndicator,[{key:"handleInputEvent",
value:function(event){var _controlEl$min,_controlEl$max,_this10=this
;this.timerId||(this.timerId=setTimeout((function(){
_this10.hide(),_this10.timerId=null}),500))
;var controlEl=this.control.element,minValue=parseFloat(null!==(_controlEl$min=controlEl.min)&&void 0!==_controlEl$min?_controlEl$min:0),maxValue=parseFloat(null!==(_controlEl$max=controlEl.max)&&void 0!==_controlEl$max?_controlEl$max:100),proportion=(parseFloat(controlEl.value)-minValue)/(maxValue-minValue)
;this.textContent=event.target.value,this.style.opacity=100
;var top=controlEl.offsetTop-this.offsetHeight,left=controlEl.offsetLeft+controlEl.offsetWidth*proportion-this.offsetWidth/2
;left=Math.max(controlEl.offsetLeft,left),
left=Math.min(controlEl.offsetLeft+controlEl.offsetWidth-this.offsetWidth,left),
this.style.left="".concat(left,"px"),
this.style.top="".concat(top,"px"),this.show()}},{key:"hide",value:function(){
this.style.opacity=0,this.style.visibility="hidden"}},{key:"show",
value:function(){this.style.visibility="visible",this.style.opacity=100}
}]),RangeIndicator}(ManagedElement),SeparatorControl=function(_ManagedElement5){
_inherits(SeparatorControl,_ManagedElement5)
;var _super5=_createSuper(SeparatorControl)
;function SeparatorControl(key,definition){var _this11
;return _classCallCheck(this,SeparatorControl),
(_this11=_super5.call(this,"div","utils-separator")).innerHTML='<span class="utils-hr"><hr></span>'+"<span> ".concat(escapeHtml(definition.label)," </span>")+'<span class="utils-hr"><hr></span>',
_this11}return _createClass(SeparatorControl)
}(ManagedElement),InputControl=function(_ManagedElement6){
_inherits(InputControl,_ManagedElement6);var _super6=_createSuper(InputControl)
;function InputControl(key,definition){var _this12
;return _classCallCheck(this,InputControl),
(_this12=_super6.call(this,"input")).type=definition.type,
_this12.setAttribute("type",definition.type),
_this12.setAttribute("min",definition.min),
_this12.setAttribute("max",definition.max),
_this12.className=definition.type,_this12}return _createClass(InputControl,[{
key:"setValue",value:function(value){
"checkbox"!==this.type?this.value=value:this.checked=value}},{key:"getValue",
value:function(){switch(this.type){case"checkbox":return this.checked
;case"range":return parseFloat(this.value);default:return this.value}}
}]),InputControl
}(ManagedElement),_addOptions=new WeakSet,SelectControl=function(_ManagedElement7){
_inherits(SelectControl,_ManagedElement7)
;var _super7=_createSuper(SelectControl)
;function SelectControl(_key3,definition){var _this13
;return _classCallCheck(this,SelectControl),
_classPrivateMethodInitSpec(_assertThisInitialized(_this13=_super7.call(this,"select")),_addOptions),
_this13.definition=definition,
definition.type&&(_this13.className=definition.type),
_classPrivateMethodGet(_assertThisInitialized(_this13),_addOptions,_addOptions2).call(_assertThisInitialized(_this13)),
_this13}return _createClass(SelectControl,[{key:"setValue",
value:function(value){console.log(value)
;var index=_toConsumableArray(this.$.options).findIndex((function(option){
return option.value===value}))
;index>=0?this.$.selectedIndex=index:console.warn("Could not set select control to value of ".concat(value))
}},{key:"getValue",value:function(){return this.$.selectedOptions[0].value}},{
key:"getText",value:function(){return this.$.selectedOptions[0].text}},{
key:"reloadOptions",value:function(){
if(this.options=this.definition.options,"function"==typeof this.definition.options)for(var n=this.$.length;n-- >0;)this.$.remove(0)
;_classPrivateMethodGet(this,_addOptions,_addOptions2).call(this)}
}]),SelectControl}(ManagedElement);function _addOptions2(){
var _this$options,_this53=this
;this.options=this.definition.options,"function"==typeof this.options&&(this.options=this.options.call(this)),
"function"==typeof this.options&&(this.options=this.options.call(this)),
null===(_this$options=this.options)||void 0===_this$options||_this$options.forEach((function(value,key){
var option=new Option(value,key);_this53.$.add(option)}))}
var _managedControls=new WeakMap,LabeledControlManager=function(){
function LabeledControlManager(){
_classCallCheck(this,LabeledControlManager),_classPrivateFieldInitSpec(this,_managedControls,{
writable:!0,value:[]})}return _createClass(LabeledControlManager,[{
key:"createLabeledControl",value:function(key,definition,storage){
var control=new LabeledControl(key,definition,{storage:storage,manager:this})
;return _classPrivateFieldGet(this,_managedControls).push(control),control}},{
key:"removeControls",value:function(){
_classPrivateFieldGet(this,_managedControls).forEach((function(control){
control.remove()}))}},{key:"reloadSelectOptions",value:function(keys){
var _this14=this;null==keys||keys.forEach((function(value){
var dependentControl=_classPrivateFieldGet(_this14,_managedControls).find((function(control){
return control.key===value}))
;dependentControl&&(dependentControl.control instanceof SelectControl?dependentControl.control.reloadOptions():console.log("Ignoring dependent ".concat(value," as it is not a select type.")))
}))}}]),LabeledControlManager
}(),_storage2=new WeakMap,_manager=new WeakMap,LabeledControl=function(_ManagedElement8){
_inherits(LabeledControl,_ManagedElement8)
;var _super8=_createSuper(LabeledControl)
;function LabeledControl(key,definition,options){var _this15
;return _classCallCheck(this,LabeledControl),
_classPrivateFieldInitSpec(_assertThisInitialized(_this15=_super8.call(this,"div")),_storage2,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this15),_manager,{
writable:!0,value:void 0
}),_classPrivateFieldSet(_assertThisInitialized(_this15),_storage2,null==options?void 0:options.storage),
_classPrivateFieldSet(_assertThisInitialized(_this15),_manager,null==options?void 0:options.manager),
_this15.className="labeled-control-container",
_this15.label=new ManagedElement("label"),
_this15.appendChild(_this15.label),_this15.key=key,
_this15.definition=definition,
_this15.label.innerHTML="<span>".concat(escapeHtml(definition.label),"</span>"),
"select"===definition.type?_this15.control=new SelectControl(key,definition):_this15.control=new InputControl(key,definition),
_this15.control.setValue(_classPrivateFieldGet(_assertThisInitialized(_this15),_storage2)?_classPrivateFieldGet(_assertThisInitialized(_this15),_storage2).getFromStorage(key,definition.defaultValue):definition.defaultValue),
_this15.label.appendChild(_this15.control),
_this15.error=_this15.appendChild(new ManagedElement("div","utils-input-error-message")),
"range"===definition.type&&_this15.label.appendChild(new RangeIndicator(_this15.control)),
_this15.listenToEventOn("input",_this15.control,""),_this15}
return _createClass(LabeledControl,[{key:"setValue",value:function(value){
var _this$control
;null===(_this$control=this.control)||void 0===_this$control||_this$control.setValue(value)
}},{key:"handleInputEvent",value:function(eventIgnored){
var _classPrivateFieldGet4,value=this.control.getValue()
;if(this.definition.validate){var validation=this.definition.validate(value)
;if(!validation.pass)return this.error.textContent=validation.errorMessage,
void this.classList.add("utils-error")}
this.classList.remove("utils-error"),null===(_classPrivateFieldGet4=_classPrivateFieldGet(this,_storage2))||void 0===_classPrivateFieldGet4||_classPrivateFieldGet4.saveToStorage(this.key,value),
this.definition.onupdate&&(this.definition.onupdate(value),
_classPrivateFieldGet(this,_manager)?_classPrivateFieldGet(this,_manager).reloadSelectOptions(this.definition.dependents):console.warn("LabeledControl has no manager, so unable to handle dependencies."))
}}]),LabeledControl}(ManagedElement),manager=null,settingDefinitions={}
;function resetIfConfirmed(){
return ModalDialog.showConfirm(i18n(_templateObject60||(_templateObject60=_taggedTemplateLiteral(["0ee1cf8d6fe2d39a293bc82ddbc60666::"])))).then((function(value){
if(value===ModalDialog.DialogIndex.CONFIRM_YES)return function(){
for(var key in settingDefinitions){
console.info("Resetting ".concat(key," to its default."))
;var definition=settingDefinitions[key];if(!isSeparator(definition)){
var _definition$onupdate,value=definition.defaultValue
;persistentData.saveToStorage(key,value),
null===(_definition$onupdate=definition.onupdate)||void 0===_definition$onupdate||_definition$onupdate.call(definition,value)
}}}()}))}function isSeparator(definition){return"separator"===definition.type}
function loadSettingDefinitions(definitions){!function(definitions){
for(var key in definitions){var _definitions$key$init,_definitions$key
;null===(_definitions$key$init=(_definitions$key=definitions[key]).initialise)||void 0===_definitions$key$init||_definitions$key$init.call(_definitions$key)
}}(definitions),function(definitions){
for(var key in settingDefinitions=definitions)if(!isSeparator(settingDefinitions[key])){
var _settingDefinitions$k,storedValue=persistentData.getFromStorage(key,settingDefinitions[key].defaultValue)
;null===(_settingDefinitions$k=settingDefinitions[key].onupdate)||void 0===_settingDefinitions$k||_settingDefinitions$k.call(this,storedValue)
}}(definitions)}function getMainMenuItems(){return[{iconDetails:icons.settings,
command:{execute:function(){return function(){
if(manager)return Promise.reject(new Error("Attempt made to show settings on top of another."))
;manager=new LabeledControlManager;var dialogContent=new ManagedElement("div")
;for(var key in dialogContent.innerHTML="\n    <div class='utils-palette'>\n    <span class='utils-primary'></span>\n    <span class='utils-secondary'></span>\n    <span class='utils-tertiary'></span>\n    </div>\n  ",
settingDefinitions){var setting=settingDefinitions[key],control=void 0
;control=isSeparator(setting)?new SeparatorControl(key,setting):manager.createLabeledControl(key,setting,persistentData),
dialogContent.appendChild(control)}
var settingsValueCache=new SettingsValueCache(settingDefinitions)
;return ModalDialog.showSettingsDialog(dialogContent).then((function(value){
return value===ModalDialog.DialogIndex.SETTINGS_RESET?resetIfConfirmed():value
})).then((function(value){
return manager.removeControls(),manager=null,reloader.reloadIfRequired(),value
})).then((function(value){var changes=settingsValueCache.changes
;return""!==changes&&(reloader.flagAsRequired("".concat(i18n(_templateObject61||(_templateObject61=_taggedTemplateLiteral(["3c5d22824f5b26b56b4edfc952f083f7::"])))," ").concat(changes,".")),
reloader.reloadIfRequired()),value}))}()}}},{iconDetails:null,command:null},{
iconDetails:icons.privacy,command:{execute:function(){
return window.open(Urls.PRIVACY,"_blank")}}}]}
function registerServiceWorker(buildMode){try{!function(buildMode){
"production"===buildMode&&"serviceWorker"in navigator&&window.addEventListener("load",(function(){
navigator.serviceWorker.register("./sw.js").then((function(registration){
console.info("SW registered: ",registration)
;var controller=navigator.serviceWorker.controller
;console.info("Page controlled by ".concat(controller,"."))
})).catch((function(registrationError){
console.error("SW registration failed: ",registrationError)}))}))}(buildMode)
}catch(error){console.error("Error during service worker registration",error)}}
var I18nResolutionError=function(_Error){
_inherits(I18nResolutionError,_wrapNativeSuper(Error))
;var _super9=_createSuper(I18nResolutionError)
;function I18nResolutionError(error,fetchSummary){var _this16
;return _classCallCheck(this,I18nResolutionError),
error instanceof Error?(_this16=_super9.call(this,error.message)).cause=error:_this16=_super9.call(this,error),
_this16.fetchSummary=fetchSummary,_possibleConstructorReturn(_this16)}
return _createClass(I18nResolutionError)}()
;function resolveLanguages(languagesListingUrl){
var languagesListing={},languagesBaseUrl="",fetchSummary=[]
;return fetchJson(languagesListingUrl).then((function(languages){
languagesListing=languages,
languagesBaseUrl=new URL(languages.location,window.location.href)
;var url=new URL(languages.meta.master,languagesBaseUrl)
;return fetchSummary.push({url:url,read:!1}),fetchJson(url.href)
})).then((function(masterTranslations){
fetchSummary[0].read=!0,setActiveTranslations(masterTranslations)
;var preferredLanguages,availableLanguageFiles,availableSubTags,preferredSubTags,bestMatch,bestFile=(preferredLanguages=navigator.languages,
availableLanguageFiles=languagesListing.files,
availableSubTags=availableLanguageFiles.map((function(entry){
return extractLanguageSubTags(entry.toLowerCase().replace(/\.json$/i,""))
})),preferredSubTags=preferredLanguages.map((function(entry){
return extractLanguageSubTags(entry)})),bestMatch={weight:0,file:null
},preferredSubTags.forEach((function(prefSubTag,prefIndexIgnored){
var languageIndex=preferredSubTags.findIndex((function(element){
return element.language===prefSubTag.language
})),prefSubTagRank=preferredSubTags.length-languageIndex
;availableSubTags.forEach((function(availSubTag,availIndex){var weight=0
;prefSubTag.language===availSubTag.language&&(weight+=100*prefSubTagRank,
""!==prefSubTag.region&&prefSubTag.region===availSubTag.region&&(weight+=10),
""!==prefSubTag.script&&prefSubTag.script===availSubTag.script&&(weight+=1),
weight>bestMatch.weight&&(bestMatch.weight=weight,
bestMatch.file=availableLanguageFiles[availIndex]))}))})),bestMatch.file)
;if(bestFile===languagesListing.meta.master)return Promise.resolve(null)
;var url=new URL(bestFile,languagesBaseUrl);return fetchSummary.push({url:url,
read:!1}),fetchJson(url.href)})).then((function(bestTranslations){
return bestTranslations&&(fetchSummary[1].read=!0,
setActiveTranslations(bestTranslations)),fetchSummary})).catch((function(error){
return Promise.reject(new I18nResolutionError(error,fetchSummary))}))}
function getLanguages(embeddedLanguages){
if(!BuildInfo.isBuilt())return Promise.resolve(void 0);if(embeddedLanguages)try{
var languages=JSON.parse(base64ToString(embeddedLanguages))
;return languages.fallback&&setActiveTranslations(languages.fallback),
setActiveTranslations(languages.active),Promise.resolve(void 0)}catch(error){
console.error("Unable to decode embedded languages ${embeddedLanguages}.",error)
}return resolveLanguages("./languages.json").then((function(){
console.info("Build information: ".concat(BuildInfo.getBundleName," ").concat(BuildInfo.getVersion()," ").concat(BuildInfo.getMode()))
})).catch((function(error){var fetchSummary=error.fetchSummary
;if(!(fetchSummary&&fetchSummary.length>0&&fetchSummary[0].read))return console.error(error.message),
Promise.reject(error)
;console.error("".concat(error,"\nUsing translation ").concat(fetchSummary[0].url))
}))}var _stage=new WeakMap,StageManager=function(){
function StageManager(stageElement){
_classCallCheck(this,StageManager),_classPrivateFieldInitSpec(this,_stage,{
writable:!0,value:void 0
}),_classPrivateFieldSet(this,_stage,new ManagedElement(stageElement))}
var _startShow;return _createClass(StageManager,[{key:"startShow",
value:(_startShow=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(presenter){
return _regeneratorRuntime().wrap((function(_context){
for(;;)switch(_context.prev=_context.next){case 0:
return _context.next=2,presenter.presentOnStage(_classPrivateFieldGet(this,_stage))
;case 2:
if(presenter=_context.sent,_classPrivateFieldGet(this,_stage).removeChildren(),
null!==presenter){_context.next=6;break}return _context.abrupt("return");case 6:
_context.next=0;break;case 8:case"end":return _context.stop()}}),_callee,this)
}))),function(_x){return _startShow.apply(this,arguments)})}]),StageManager}()
;function getErrorAttributeHtml(message){
return'data-error="'.concat(stringToBase64(message),'"')}var PREDEFINED_EMOJIS={
GRINNING:"&#x1F600;",")":"@GRINNING","-)":"@GRINNING",SMILEY:"@GRINNING",
SMILING:"@GRINNING",HAPPY:"@GRINNING",WORRIED:"&#x1F61F;",SAD:"@WORRIED",
LAUGHING:"&#x1F602;",LAUGH:"@LAUGHING",CRYING:"&#x1F622;",TEAR:"@CRYING",
FROWNING:"&#x1F641;","(":"@FROWNING","-(":"@FROWNING",NEUTRAL:"&#x1F610;",
ANGRY:"&#x1F620;",GRUMPY:"@ANGRY",WINK:"&#x1F609;",WINKY:"@WINK",
WINKING:"@WINK",WARNING:"&#x26A0;&#xFE0F;",ALERT:"@WARNING",ERROR:"@WARNING",
"WHITE-QUESTION-MARK":"&#x2754;"}
;var SAFE_CLASSES=["big","bigger","biggest","small","smaller","smallest"]
;var _missingWords=new WeakMap,_replacements=new WeakMap,TrackedReplacements=function(){
function TrackedReplacements(metadata){
_classCallCheck(this,TrackedReplacements),
_classPrivateFieldInitSpec(this,_missingWords,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_replacements,{writable:!0,value:void 0
}),_classPrivateFieldSet(this,_missingWords,[]);var tracker=this
;_classPrivateFieldSet(this,_replacements,[{re:/\\>/g,rep:"&gt;"
},getItemReplacement("[.]{3}",(function(match,startChr,word){
return _classPrivateFieldGet(tracker,_missingWords).push(word),
"".concat(startChr,'<span class="missing-word" data-missing-word="').concat(ManagedElement.encodeString(word),'"></span>')
})),getItemReplacement("emoji:",(function(match,startChr,word,emojiClass){
var requiredClasses="emoji";return(emojiClass=function(requestedClass){
if(!requestedClass)return""
;var index=SAFE_CLASSES.indexOf(requestedClass.toLowerCase())
;return index<0?"":SAFE_CLASSES[index]
}(emojiClass))&&(requiredClasses="".concat(requiredClasses," ").concat(emojiClass)),
"".concat(startChr,'<span class="').concat(requiredClasses,'">').concat(function(originalDefinition){
if(!originalDefinition)return" ";var definition=originalDefinition.toUpperCase()
;if(definition.startsWith("U+"))return definition.replaceAll(/U\+([A-F0-9]+)/g,"&#x$1;")
;var _code,code=PREDEFINED_EMOJIS[definition]
;if(null!==(_code=code)&&void 0!==_code&&_code.startsWith("@")&&(code=PREDEFINED_EMOJIS[code.substring(1)]),
!code){
var errorAttribute=getErrorAttributeHtml(i18n(_templateObject62||(_templateObject62=_taggedTemplateLiteral(["5da57f8cd9336099a601a9cb7b512982::",""])),originalDefinition))
;return"<span ".concat(errorAttribute,">").concat(PREDEFINED_EMOJIS["WHITE-QUESTION-MARK"],"</span>")
}return code}(word),"</span>")
})),getItemReplacement("meta:",(function(match,startChr,word){
var metavalue=null==metadata?void 0:metadata.getValue(word);if(!metavalue){
var errorAttribute=getErrorAttributeHtml(i18n(_templateObject63||(_templateObject63=_taggedTemplateLiteral(["20f59a970faebddc0d41220837f3b4ad::",""])),word))
;return"".concat(startChr,"<span ").concat(errorAttribute,">").concat(word,"</span>")
}return"".concat(startChr).concat(metavalue)}))])}
return _createClass(TrackedReplacements,[{key:"missingWords",get:function(){
return _toConsumableArray(_classPrivateFieldGet(this,_missingWords))}},{
key:"replacements",get:function(){
return _classPrivateFieldGet(this,_replacements)}}]),TrackedReplacements
}(),_html=new WeakMap,_missingWords2=new WeakMap,_metadata=new WeakMap,TextItem=function(){
function TextItem(metadata){
if(_classCallCheck(this,TextItem),_classPrivateFieldInitSpec(this,_html,{
writable:!0,value:""}),_classPrivateFieldInitSpec(this,_missingWords2,{
writable:!0,value:[]}),_classPrivateFieldInitSpec(this,_metadata,{writable:!0,
value:void 0
}),!_classStaticPrivateFieldSpecGet(TextItem,TextItem,_isConstructing2))throw new Error("Private constructor. Use createTextItem")
;_classPrivateFieldSet(this,_metadata,metadata)}return _createClass(TextItem,[{
key:"html",get:function(){return _classPrivateFieldGet(this,_html)}},{
key:"plainText",get:function(){
return getPlainTextFromHtml(_classPrivateFieldGet(this,_html).replace(/<(?:[^>]*missing-word[^>]*)>/g,"..."))
}},{key:"missingWords",get:function(){
return _classPrivateFieldGet(this,_missingWords2)}},{key:"firstWord",
get:function(){
var _classPrivateFieldGet5,match=null===(_classPrivateFieldGet5=_classPrivateFieldGet(this,_html))||void 0===_classPrivateFieldGet5?void 0:_classPrivateFieldGet5.match(/^(?:\s*(?:<\/?[^\r\n\f\t]*?>)*\s*)*([^\s<]*)/)
;return match?match[1]:""}}],[{key:"createFromSource",
value:function(source,metadata){
_classStaticPrivateFieldSpecSet(TextItem,TextItem,_isConstructing2,!0)
;var textItem=new TextItem
;if(_classStaticPrivateFieldSpecSet(TextItem,TextItem,_isConstructing2,!1),
source){var tracker=new TrackedReplacements(metadata)
;_classPrivateFieldSet(textItem,_html,parseMarkdown(source,{
post:tracker.replacements
})),_classPrivateFieldSet(textItem,_missingWords2,tracker.missingWords)}
return textItem}}]),TextItem}(),_isConstructing2={writable:!0,value:!1}
;function getItemReplacement(prefix,replace){return{
re:new RegExp("".concat("(^|[ >])").concat(prefix).concat("((?:&#?[a-zA-Z0-9]+?;|[^\\s<>])+?)?").concat("(?:>([a-zA_Z]*))?").concat("(?=[\\s,;:.?!]|$|</.+?>)"),"gmi"),
rep:replace}}var _map=new WeakMap,Metadata=function(){function Metadata(){
if(_classCallCheck(this,Metadata),_classPrivateFieldInitSpec(this,_map,{
writable:!0,value:new Map
}),!_classStaticPrivateFieldSpecGet(Metadata,Metadata,_isConstructing3))throw new Error("Private constructor. Use createMetaData")
}return _createClass(Metadata,[{key:"getValue",value:function(key,defaultValue){
var value=_classPrivateFieldGet(this,_map).get(key.toUpperCase())
;return null!=value?value:defaultValue}}],[{key:"createFromSource",
value:function(source){
_classStaticPrivateFieldSpecSet(Metadata,Metadata,_isConstructing3,!0)
;var metadata=new Metadata
;return _classStaticPrivateFieldSpecSet(Metadata,Metadata,_isConstructing3,!1),
source.split("\n").forEach((function(element){
var match=element.match(/^\s*(\w+)\s*[:;.]-?\s*(.*?)\s*$/)
;match&&_classPrivateFieldGet(metadata,_map).set(match[1].toUpperCase(),escapeHtml(match[2]))
})),metadata}}]),Metadata}(),_isConstructing3={writable:!0,value:!1
},QuestionType={SIMPLE:"simple",MULTI:"multi",FILL:"fill",ORDER:"order",
SLIDE:"slide"
},_intro=new WeakMap,_question=new WeakMap,_explanation=new WeakMap,_rightAnswers=new WeakMap,_wrongAnswers=new WeakMap,_questionType=new WeakMap,_extractFirstWords=new WeakSet,_deriveQuestionType=new WeakSet,_isSimpleQuestion=new WeakSet,_isMultiQuestion=new WeakSet,_isFillQuestion=new WeakSet,_isOrderQuestion=new WeakSet,Problem=function(){
function Problem(){
_classCallCheck(this,Problem),_classPrivateMethodInitSpec(this,_isOrderQuestion),
_classPrivateMethodInitSpec(this,_isFillQuestion),
_classPrivateMethodInitSpec(this,_isMultiQuestion),
_classPrivateMethodInitSpec(this,_isSimpleQuestion),
_classPrivateMethodInitSpec(this,_deriveQuestionType),
_classPrivateMethodInitSpec(this,_extractFirstWords),
_classPrivateFieldInitSpec(this,_intro,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_question,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_explanation,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_rightAnswers,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_wrongAnswers,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_questionType,{writable:!0,
value:QuestionType.SLIDE})}return _createClass(Problem,[{key:"intro",
get:function(){return _classPrivateFieldGet(this,_intro)},set:function(value){
_classPrivateFieldSet(this,_intro,value)}},{key:"question",get:function(){
return _classPrivateFieldGet(this,_question)},set:function(value){
_classPrivateFieldSet(this,_question,value),
_classPrivateMethodGet(this,_deriveQuestionType,_deriveQuestionType2).call(this)
}},{key:"explanation",get:function(){
return _classPrivateFieldGet(this,_explanation)},set:function(value){
_classPrivateFieldSet(this,_explanation,value)}},{key:"rightAnswers",
get:function(){return _classPrivateFieldGet(this,_rightAnswers)},
set:function(value){
_classPrivateFieldSet(this,_rightAnswers,value),_classPrivateMethodGet(this,_deriveQuestionType,_deriveQuestionType2).call(this)
}},{key:"wrongAnswers",get:function(){
return _classPrivateFieldGet(this,_wrongAnswers)},set:function(value){
_classPrivateFieldSet(this,_wrongAnswers,value),
_classPrivateMethodGet(this,_deriveQuestionType,_deriveQuestionType2).call(this)
}},{key:"firstWordsOfWrongAnswers",get:function(){
return _classPrivateMethodGet(this,_extractFirstWords,_extractFirstWords2).call(this,this.wrongAnswers)
}},{key:"firstWordsOfRightAnswers",get:function(){
return _classPrivateMethodGet(this,_extractFirstWords,_extractFirstWords2).call(this,this.rightAnswers)
}},{key:"questionType",get:function(){
return _classPrivateFieldGet(this,_questionType)}}]),Problem}()
;function _extractFirstWords2(data){var words=[]
;return data.forEach((function(textItem){words.push(textItem.firstWord)})),words
}function _deriveQuestionType2(){var _classPrivateFieldGet9
;if(null===(_classPrivateFieldGet9=_classPrivateFieldGet(this,_question))||void 0===_classPrivateFieldGet9||!_classPrivateFieldGet9.html)return QuestionType.SLIDE
;_classPrivateMethodGet(this,_isOrderQuestion,_isOrderQuestion2).call(this)?_classPrivateFieldSet(this,_questionType,QuestionType.ORDER):_classPrivateMethodGet(this,_isFillQuestion,_isFillQuestion2).call(this)?_classPrivateFieldSet(this,_questionType,QuestionType.FILL):_classPrivateMethodGet(this,_isMultiQuestion,_isMultiQuestion2).call(this)?_classPrivateFieldSet(this,_questionType,QuestionType.MULTI):_classPrivateMethodGet(this,_isSimpleQuestion,_isSimpleQuestion2).call(this)?_classPrivateFieldSet(this,_questionType,QuestionType.SIMPLE):_classPrivateFieldSet(this,_questionType,QuestionType.SLIDE)
}function _isSimpleQuestion2(){
return!!_classPrivateFieldGet(this,_rightAnswers)&&1===_classPrivateFieldGet(this,_rightAnswers).length
}function _isMultiQuestion2(){
return!!_classPrivateFieldGet(this,_rightAnswers)&&_classPrivateFieldGet(this,_rightAnswers).length>1
}function _isFillQuestion2(){
if(0===_classPrivateFieldGet(this,_question).missingWords.length)return!1
;var _step3,_iterator3=_createForOfIteratorHelper(_classPrivateFieldGet(this,_question).missingWords)
;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){
if(!_step3.value)return!1}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}
return!0}function _isOrderQuestion2(){
return _classPrivateFieldGet(this,_question).html.match(/<span +class *= *"missing-word".*?><\/span>(?:\s*<\/p>\s*)*$/)&&1===_classPrivateFieldGet(this,_question).missingWords.length&&!_classPrivateFieldGet(this,_question).missingWords[0]
}var MarkState={UNDEFINED:-1,CORRECT:0,INCORRECT:1,SKIPPED:2
},_markedItems=new WeakMap,ItemMarker=function(){function ItemMarker(){
_classCallCheck(this,ItemMarker),_classPrivateFieldInitSpec(this,_markedItems,{
writable:!0,value:void 0}),this.reset()}return _createClass(ItemMarker,[{
key:"reset",value:function(){_classPrivateFieldSet(this,_markedItems,[])}},{
key:"marks",get:function(){var marks={correct:0,incorrect:0,skipped:0,
markedItems:_classPrivateFieldGet(this,_markedItems)}
;return _classPrivateFieldGet(this,_markedItems).forEach((function(markedItem){
switch(markedItem.state){case MarkState.CORRECT:marks.correct++;break
;case MarkState.INCORRECT:marks.incorrect++;break;case MarkState.SKIPPED:
marks.skipped++}})),marks}},{key:"markItem",value:function(item,state){
_classPrivateFieldGet(this,_markedItems).push({item:item,state:state})}
}]),ItemMarker
}(),_metadata2=new WeakMap,_problems=new WeakMap,_problemIndex=new WeakMap,_marker=new WeakMap,Lesson=function(){
function Lesson(){
_classCallCheck(this,Lesson),_classPrivateFieldInitSpec(this,_metadata2,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_problems,{
writable:!0,value:[]}),_classPrivateFieldInitSpec(this,_problemIndex,{
writable:!0,value:0}),_classPrivateFieldInitSpec(this,_marker,{writable:!0,
value:new ItemMarker}),_classPrivateFieldGet(this,_marker).reset()}
return _createClass(Lesson,[{key:"metadata",get:function(){
return _classPrivateFieldGet(this,_metadata2)},set:function(value){
_classPrivateFieldSet(this,_metadata2,value)}},{key:"problems",get:function(){
return _classPrivateFieldGet(this,_problems)}},{key:"marks",get:function(){
return _classPrivateFieldGet(this,_marker).marks}},{key:"addProblem",
value:function(problem){_classPrivateFieldGet(this,_problems).push(problem)}},{
key:"restart",value:function(){_classPrivateFieldSet(this,_problemIndex,0)}},{
key:"hasMoreProblems",get:function(){
return _classPrivateFieldGet(this,_problemIndex)<_classPrivateFieldGet(this,_problems).length
}},{key:"getNextProblem",value:function(){
var _this$problemIndex,_this$problemIndex2
;return _classPrivateFieldGet(this,_problemIndex)<_classPrivateFieldGet(this,_problems).length?_classPrivateFieldGet(this,_problems)[(_classPrivateFieldSet(this,_problemIndex,(_this$problemIndex=_classPrivateFieldGet(this,_problemIndex),
_this$problemIndex2=_this$problemIndex++,
_this$problemIndex)),_this$problemIndex2)]:null}},{key:"peekAtNextProblem",
value:function(){
return _classPrivateFieldGet(this,_problemIndex)<_classPrivateFieldGet(this,_problems).length?_classPrivateFieldGet(this,_problems)[_classPrivateFieldGet(this,_problemIndex)]:null
}},{key:"markProblem",value:function(problem,state){
_classPrivateFieldGet(this,_marker).markItem(problem,state)}}]),Lesson
}(),_introSource=new WeakMap,_questionSource=new WeakMap,_rightAnswerSources=new WeakMap,_wrongAnswerSources=new WeakMap,_explanationSource=new WeakMap,ProblemSource=function(){
function ProblemSource(){
_classCallCheck(this,ProblemSource),_classPrivateFieldInitSpec(this,_introSource,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_questionSource,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_rightAnswerSources,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_wrongAnswerSources,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_explanationSource,{
writable:!0,value:void 0
}),_classPrivateFieldSet(this,_introSource,""),_classPrivateFieldSet(this,_questionSource,""),
_classPrivateFieldSet(this,_rightAnswerSources,[]),
_classPrivateFieldSet(this,_wrongAnswerSources,[]),
_classPrivateFieldSet(this,_explanationSource,"")}
return _createClass(ProblemSource,[{key:"introSource",get:function(){
return _classPrivateFieldGet(this,_introSource)},set:function(data){
_classPrivateFieldSet(this,_introSource,data)}},{key:"questionSource",
get:function(){return _classPrivateFieldGet(this,_questionSource)},
set:function(data){_classPrivateFieldSet(this,_questionSource,data)}},{
key:"explanationSource",get:function(){
return _classPrivateFieldGet(this,_explanationSource)},set:function(data){
_classPrivateFieldSet(this,_explanationSource,data)}},{key:"rightAnswerSources",
get:function(){return _classPrivateFieldGet(this,_rightAnswerSources)}},{
key:"wrongAnswerSources",get:function(){
return _classPrivateFieldGet(this,_wrongAnswerSources)}},{
key:"addRightAnswerSource",value:function(data){
_classPrivateFieldGet(this,_rightAnswerSources).push(data)}},{
key:"addWrongAnswerSource",value:function(data){
_classPrivateFieldGet(this,_wrongAnswerSources).push(data)}}]),ProblemSource
}(),ProblemItemKey_INTRO="i",ProblemItemKey_QUESTION="?",ProblemItemKey_RIGHT_ANSWER="=",ProblemItemKey_WRONG_ANSWER="x",ProblemItemKey_EXPLANATION="&",ProblemItemKey_QUESTION_BREAK="/",_metaSource=new WeakMap,_problemSources=new WeakMap,LessonSource=function(){
function LessonSource(){
if(_classCallCheck(this,LessonSource),_classPrivateFieldInitSpec(this,_metaSource,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_problemSources,{
writable:!0,value:void 0
}),!_classStaticPrivateFieldSpecGet(LessonSource,LessonSource,_isConstructing4))throw new Error("Private constructor. Use createFromSource")
;_classPrivateFieldSet(this,_problemSources,[])}
return _createClass(LessonSource,[{key:"metaSource",get:function(){
return _classPrivateFieldGet(this,_metaSource)},set:function(value){
_classPrivateFieldSet(this,_metaSource,value)}},{key:"problemSources",
get:function(){return _classPrivateFieldGet(this,_problemSources)}},{
key:"isNewProblem",value:function(lastKey,newKey,currentProblem){
if(lastKey===ProblemItemKey_QUESTION_BREAK)return!0;switch(newKey){
case ProblemItemKey_INTRO:return!!currentProblem.introSource
;case ProblemItemKey_QUESTION:return!!currentProblem.questionSource}return!1}},{
key:"addDataToProblemSource",value:function(problem,itemType,data){
switch(itemType){case ProblemItemKey_INTRO:problem.introSource=data;break
;case ProblemItemKey_QUESTION:problem.questionSource=data;break
;case ProblemItemKey_RIGHT_ANSWER:problem.addRightAnswerSource(data);break
;case ProblemItemKey_WRONG_ANSWER:problem.addWrongAnswerSource(data);break
;case ProblemItemKey_EXPLANATION:problem.explanationSource=data;break
;case ProblemItemKey_QUESTION_BREAK:break;default:this.metaSource=data}}},{
key:"createProblemSource",value:function(){var block=new ProblemSource
;return this.problemSources.push(block),block}},{key:"getLineDetails",
value:function(line){
var _match$,match=line.match(/^ {0,3}(?:\(*([i?=xX&/])\1*[/) ]+)(.*)$/)
;return match?{key:match[1].toLowerCase(),
content:null!==(_match$=match[2])&&void 0!==_match$?_match$:""}:{key:void 0,
content:line}}},{key:"convertToLesson",value:function(){var lesson=new Lesson
;return lesson.metadata=Metadata.createFromSource(this.metaSource),
this.problemSources.forEach((function(problemSource){var problem=new Problem
;problem.intro=TextItem.createFromSource(problemSource.introSource,lesson.metadata),
problem.question=TextItem.createFromSource(problemSource.questionSource,lesson.metadata),
problem.explanation=TextItem.createFromSource(problemSource.explanationSource,lesson.metadata),
problem.rightAnswers=problemSource.rightAnswerSources.map((function(source){
return TextItem.createFromSource(source,lesson.metadata)
})),problem.wrongAnswers=problemSource.wrongAnswerSources.map((function(source){
return TextItem.createFromSource(source,lesson.metadata)
})),lesson.addProblem(problem)})),lesson}}],[{key:"createFromSource",
value:function(source){
_classStaticPrivateFieldSpecSet(LessonSource,LessonSource,_isConstructing4,!0)
;var lessonSource=new LessonSource
;_classStaticPrivateFieldSpecSet(LessonSource,LessonSource,_isConstructing4,!1)
;var lines=source.split(/\r\n|\n/),currentItemKey=null,problemSource=lessonSource.createProblemSource(),data=""
;return lines.forEach((function(line){
var details=lessonSource.getLineDetails(line)
;details.key?(lessonSource.addDataToProblemSource(problemSource,currentItemKey,data),
data=details.content?"".concat(details.content,"\n"):"",
lessonSource.isNewProblem(currentItemKey,details.key,problemSource)&&(problemSource=lessonSource.createProblemSource()),
currentItemKey=details.key):data+="".concat(details.content,"\n")
})),data&&lessonSource.addDataToProblemSource(problemSource,currentItemKey,data),
lessonSource}}]),LessonSource}(),_isConstructing4={writable:!0,value:!1
},_data=new WeakMap,_title2=new WeakMap,_lesson=new WeakMap,_origin=new WeakMap,_convertDataToLesson=new WeakSet,UnmanagedLesson=function(){
function UnmanagedLesson(title,_data2,origin){
_classCallCheck(this,UnmanagedLesson),
_classPrivateMethodInitSpec(this,_convertDataToLesson),
_classPrivateFieldInitSpec(this,_data,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_title2,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_lesson,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_origin,{writable:!0,value:void 0
}),_classPrivateFieldSet(this,_title2,title),
_data2&&_classPrivateFieldSet(this,_lesson,_classPrivateMethodGet(this,_convertDataToLesson,_convertDataToLesson2).call(this,_data2)),
_classPrivateFieldSet(this,_origin,origin)}
return _createClass(UnmanagedLesson,[{key:"hasLesson",get:function(){
return!!_classPrivateFieldGet(this,_lesson)}},{key:"lesson",get:function(){
return _classPrivateFieldGet(this,_lesson)}},{key:"lessonInfo",get:function(){
return lessonManager.getUnmanagedLessonInfo(escapeHtml(_classPrivateFieldGet(this,_title2)),_classPrivateFieldGet(this,_origin))
}}]),UnmanagedLesson}();function _convertDataToLesson2(data){
return LessonSource.createFromSource(data).convertToLesson()}
_defineProperty(UnmanagedLesson,"DATA_KEY","data"),
_defineProperty(UnmanagedLesson,"TITLE_KEY","title")
;var SessionLesson=function(_UnmanagedLesson){
_inherits(SessionLesson,_UnmanagedLesson)
;var _super10=_createSuper(SessionLesson);function SessionLesson(){
return _classCallCheck(this,SessionLesson),
_super10.call(this,_classStaticPrivateMethodGet(SessionLesson,SessionLesson,_getSessionItem).call(SessionLesson,SessionLesson.TITLE_KEY),_classStaticPrivateMethodGet(SessionLesson,SessionLesson,_getSessionItem).call(SessionLesson,SessionLesson.DATA_KEY),LessonOrigin.SESSION)
}return _createClass(SessionLesson)}(UnmanagedLesson)
;function _getSessionItem(key){var storedValue=sessionStorage.getItem(key)
;return storedValue?base64ToString(storedValue):storedValue}
_defineProperty(SessionLesson,"DATA_KEY","data"),
_defineProperty(SessionLesson,"TITLE_KEY","title")
;var sessionLesson=new SessionLesson,_items=new WeakMap,_wrap=new WeakMap,_index=new WeakMap,ArrayIndexer=function(){
function ArrayIndexer(items){
var wrap=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
;_classCallCheck(this,ArrayIndexer),_classPrivateFieldInitSpec(this,_items,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_wrap,{writable:!0,
value:void 0}),_classPrivateFieldInitSpec(this,_index,{writable:!0,value:void 0
}),
_classPrivateFieldSet(this,_items,items),_classPrivateFieldSet(this,_wrap,wrap),
_classPrivateFieldSet(this,_index,0)}return _createClass(ArrayIndexer,[{
key:"items",get:function(){return _classPrivateFieldGet(this,_items)}},{
key:"reset",value:function(){_classPrivateFieldSet(this,_index,0)}},{
key:"decrement",value:function(){var _this$index
;_classPrivateFieldGet(this,_index)>0?_classPrivateFieldSet(this,_index,(_this$index=_classPrivateFieldGet(this,_index),
--_this$index)):_classPrivateFieldSet(this,_index,_classPrivateFieldGet(this,_wrap)?_classPrivateFieldGet(this,_items).length-1:_classPrivateFieldGet(this,_index)-1)
;return _classPrivateFieldGet(this,_items)[_classPrivateFieldGet(this,_index)]}
},{key:"increment",value:function(){var _this$index2
;_classPrivateFieldGet(this,_index)<_classPrivateFieldGet(this,_items).length-1?_classPrivateFieldSet(this,_index,(_this$index2=_classPrivateFieldGet(this,_index),
++_this$index2)):_classPrivateFieldSet(this,_index,_classPrivateFieldGet(this,_wrap)?0:_classPrivateFieldGet(this,_index))
;return _classPrivateFieldGet(this,_items)[_classPrivateFieldGet(this,_index)]}
}]),ArrayIndexer}(),HelpButton=function(_ManagedElement9){
_inherits(HelpButton,_ManagedElement9);var _super11=_createSuper(HelpButton)
;function HelpButton(){var _this17
;return _classCallCheck(this,HelpButton),(_this17=_super11.call(this,"button","help-button")).classList.add("icon-only-button"),
icons.applyIconToElement(icons.help,_assertThisInitialized(_this17),{hideText:!0
}),_this17.listenToOwnEvent("click","HELP"),_this17}
return _createClass(HelpButton,[{key:"handleClickEvent",
value:function(eventIgnored,eventIdIgnored){
var presenter=document.querySelector(".Presenter")
;console.debug("Help triggered from ".concat(null==presenter?void 0:presenter.className)),
window.open(Urls.HELP,"_blank")}}],[{key:"createInside",
value:function(container){var button=new HelpButton(container)
;return button.appendTo(container),button}}]),HelpButton
}(ManagedElement),_menuContent=new WeakMap,_menuItems=new WeakMap,_createMenuContentHtml=new WeakSet,_showMenuItems=new WeakSet,_hideMenuItems=new WeakSet,Menu=function(_ManagedElement10){
_inherits(Menu,_ManagedElement10);var _super12=_createSuper(Menu)
;function Menu(){var _this18
;return _classCallCheck(this,Menu),_classPrivateMethodInitSpec(_assertThisInitialized(_this18=_super12.call(this,"button")),_hideMenuItems),
_classPrivateMethodInitSpec(_assertThisInitialized(_this18),_showMenuItems),
_classPrivateMethodInitSpec(_assertThisInitialized(_this18),_createMenuContentHtml),
_classPrivateFieldInitSpec(_assertThisInitialized(_this18),_menuContent,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this18),_menuItems,{
writable:!0,value:void 0
}),_this18.setAttribute("aria-haspopup",!0),icons.applyIconToElement(icons.openMenu,_assertThisInitialized(_this18),{
hideText:!0
}),_this18.classList.add("utils-menu-icon-open","icon-only-button"),_classPrivateMethodGet(_assertThisInitialized(_this18),_createMenuContentHtml,_createMenuContentHtml2).call(_assertThisInitialized(_this18)),
_classPrivateFieldSet(_assertThisInitialized(_this18),_menuItems,new MenuItems),
_this18}return _createClass(Menu,[{key:"setMenuItems",value:function(items){
_classPrivateFieldGet(this,_menuItems).setMenuItems(items)}},{
key:"handleClickEvent",value:function(eventIgnored,eventId){
if("OPEN"===eventId)_classPrivateMethodGet(this,_showMenuItems,_showMenuItems2).call(this);else _classPrivateMethodGet(this,_hideMenuItems,_hideMenuItems2).call(this)
}},{key:"handleKeydownEvent",value:function(event,eventIdIgnored){
"Escape"===event.key&&_classPrivateMethodGet(this,_hideMenuItems,_hideMenuItems2).call(this)
}}]),Menu}(ManagedElement);function _createMenuContentHtml2(){
var menuTitleBar=new ManagedElement("div")
;menuTitleBar.classList.add("utils-menu-title"),
_classPrivateFieldSet(this,_menuContent,new ManagedElement("div","utils-menu-content")),
_classPrivateFieldGet(this,_menuContent).style.visibility="hidden",
document.body.insertBefore(_classPrivateFieldGet(this,_menuContent).element,document.getElementById("modal-mask").nextSibling)
;var menuItemsElement=new ManagedElement("div")
;menuItemsElement.classList.add("container","utils-menu-items"),
menuItemsElement.setAttribute("aria-role","menu"),
_classPrivateFieldGet(this,_menuContent).appendChild(menuTitleBar),
_classPrivateFieldGet(this,_menuContent).appendChild(menuItemsElement),
this.listenToOwnEvent("click","OPEN"),
this.listenToEventOn("click",_classPrivateFieldGet(this,_menuContent),"CONTENT-ACTION"),
this.listenToEventOn("keydown",_classPrivateFieldGet(this,_menuContent),"CONTENT-ACTION")
}function _showMenuItems2(){
showMask(),this.style.visibility="hidden",_classPrivateFieldGet(this,_menuContent).classList.add("modal"),
_classPrivateFieldGet(this,_menuContent).style.visibility="visible",
_classPrivateFieldGet(this,_menuContent).style.transform="translateX(0)",
_classPrivateFieldGet(this,_menuContent).querySelector("button.utils-menu-item").focus()
}function _hideMenuItems2(){
hideMask(),this.style.visibility="visible",_classPrivateFieldGet(this,_menuContent).style.transform="translateX(-100%)",
_classPrivateFieldGet(this,_menuContent).style.visibility="hidden",
_classPrivateFieldGet(this,_menuContent).classList.remove("modal"),
focusManager.findBestFocus()}var MenuItem=function(_ManagedElement11){
_inherits(MenuItem,_ManagedElement11);var _super13=_createSuper(MenuItem)
;function MenuItem(iconDetails){var _this19
;return _classCallCheck(this,MenuItem),
_this19=_super13.call(this,"button","utils-menu-item"),
icons.applyIconToElement(iconDetails,_assertThisInitialized(_this19)),
_this19.setAttributes({"aria-role":"menuitem"}),_this19}
return _createClass(MenuItem)
}(ManagedElement),_navigator=new WeakMap,_menuIconClose=new WeakMap,MenuItems=function(_ManagedElement12){
_inherits(MenuItems,_ManagedElement12);var _super14=_createSuper(MenuItems)
;function MenuItems(){var _this20;_classCallCheck(this,MenuItems)
;var parent=document.querySelector(".utils-menu-items")
;if(!parent)throw"Html structure not in place. createMenuHtml should have been called."
;_classPrivateFieldInitSpec(_assertThisInitialized(_this20=_super14.call(this,parent)),_navigator,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this20),_menuIconClose,{
writable:!0,value:void 0}),_this20.setAttributes({"aria-role":"menu"
}),_this20.menuDefinition=null,
_classPrivateFieldSet(_assertThisInitialized(_this20),_menuIconClose,new ManagedElement("button")),
icons.applyIconToElement(icons.closeMenu,_classPrivateFieldGet(_assertThisInitialized(_this20),_menuIconClose),{
hideText:!0
}),_classPrivateFieldGet(_assertThisInitialized(_this20),_menuIconClose).classList.add("utils-menu-icon-close","icon-only-button")
;var logo=new ManagedElement("img");logo.setAttribute("src",Urls.LOGO)
;var title=document.querySelector(".utils-menu-title")
;return title.appendChild(logo.element),
title.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this20),_menuIconClose).element),
_this20.listenToEventOn("click",_classPrivateFieldGet(_assertThisInitialized(_this20),_menuIconClose),MenuItems.CLOSE_EVENT_ID),
_this20}return _createClass(MenuItems,[{key:"setMenuItems",
value:function(menuDefinition){var _this21=this
;this.menuDefinition&&this.remove(),this.menuDefinition=menuDefinition
;var commandItems=[_classPrivateFieldGet(this,_menuIconClose)]
;this.menuDefinition.forEach((function(menuDef,index){var item
;menuDef.command?(item=new MenuItem(menuDef.iconDetails),
_this21.listenToEventOn("click",item,index),
_this21.listenToEventOn("keydown",item,index),
commandItems.push(item)):item=new ManagedElement("hr"),
_this21.appendChild(item),
_classPrivateFieldSet(_this21,_navigator,new ArrayIndexer(commandItems))}))}},{
key:"handleClickEvent",value:function(event,eventId){var index=parseInt(eventId)
;isNaN(index)||(console.debug("Handling event ".concat(event.type," with id ").concat(eventId)),
this.menuDefinition[index].command.execute().then((function(value){
console.debug("Finished handling menu option ".concat(value,"."))})))}
}]),MenuItems}(ManagedElement)
;_defineProperty(MenuItems,"CLOSE_EVENT_ID","close");var Header=function(){
function Header(){_classCallCheck(this,Header)}return _createClass(Header,[{
key:"setup",value:function(menuItems){
var _titleElement$childre,titleElement=document.getElementById("title-bar")
;if(titleElement)if((null===(_titleElement$childre=titleElement.children)||void 0===_titleElement$childre?void 0:_titleElement$childre.length)>0)console.error("Second attempt made to setup title bar ignored.");else{
var headerTextContainer=document.createElement("span")
;headerTextContainer.innerHTML=BuildInfo.getProductName()
;var helpButtonContainer=document.createElement("span")
;HelpButton.createInside(helpButtonContainer);var menu=new Menu
;menu.setMenuItems(menuItems),
titleElement.appendChild(menu.element),titleElement.appendChild(headerTextContainer),
titleElement.appendChild(helpButtonContainer)
}else console.error('Cannot find element with id of "title-bar".')}}]),Header
}(),_buttonBar2=new WeakMap,footer=new(function(){function Footer(){
_classCallCheck(this,Footer),_classPrivateFieldInitSpec(this,_buttonBar2,{
writable:!0,value:void 0})}return _createClass(Footer,[{key:"buttonBar",
get:function(){return _classPrivateFieldGet(this,_buttonBar2)}},{key:"setup",
value:function(){
var _footerElement$childr,footerElement=document.getElementById("footer")
;if(footerElement)if((null===(_footerElement$childr=footerElement.children)||void 0===_footerElement$childr?void 0:_footerElement$childr.length)>0)console.error("Second attempt made to setup footer ignored.");else{
_classPrivateFieldSet(this,_buttonBar2,new ManagedElement("div","button-bar")),
footerElement.appendChild(_classPrivateFieldGet(this,_buttonBar2).element)
;var footerTextContainer=document.createElement("div")
;footerTextContainer.className="footer-text"
;var devTag="PRODUCTION"!==BuildInfo.getMode().toUpperCase()?"[".concat(BuildInfo.getMode(),"]"):""
;footerTextContainer.innerHTML="".concat(BuildInfo.getProductName()," ").concat(BuildInfo.getVersion()).concat(devTag," ").concat(BuildInfo.getBuildDate()),
footerElement.appendChild(footerTextContainer)
}else console.error('Cannot find element with id of "footer".')}}]),Footer
}()),header=new Header
;var _resolutionExecutor=new WeakMap,_navigator2=new WeakMap,_preamble=new WeakMap,_presentation=new WeakMap,_buttonBar3=new WeakMap,_homeButton=new WeakMap,_backwardsButton=new WeakMap,_forwardsButton=new WeakMap,_addClassNames=new WeakSet,_buildContent=new WeakSet,_addNavigationButtons=new WeakSet,Presenter=function(_ManagedElement13){
_inherits(Presenter,_ManagedElement13)
;var _handleClickEvent,_allowNavigation,_askIfOkayToLeave,_super15=_createSuper(Presenter)
;function Presenter(config){
var _this22,_presentationTagName=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div"
;return _classCallCheck(this,Presenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this22=_super15.call(this,"div")),_addNavigationButtons),
_classPrivateMethodInitSpec(_assertThisInitialized(_this22),_buildContent),
_classPrivateMethodInitSpec(_assertThisInitialized(_this22),_addClassNames),
_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_resolutionExecutor,{
writable:!0,value:void 0
}),_defineProperty(_assertThisInitialized(_this22),"config",void 0),
_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_navigator2,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_preamble,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_presentation,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_buttonBar3,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_homeButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_backwardsButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this22),_forwardsButton,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this22),_addClassNames,_addClassNames2).call(_assertThisInitialized(_this22)),
_this22.config=config,
footer.buttonBar.removeChildren(),_classPrivateMethodGet(_assertThisInitialized(_this22),_buildContent,_buildContent2).call(_assertThisInitialized(_this22),_presentationTagName),
_this22}return _createClass(Presenter,[{key:"presentation",get:function(){
return _classPrivateFieldGet(this,_presentation)}},{key:"expandPresentation",
value:function(){
_classPrivateFieldGet(this,_presentation).classList.add("expanded")}},{
key:"addButtonToBar",value:function(managedButton){
_classPrivateFieldGet(this,_buttonBar3).element.insertBefore(managedButton.element,_classPrivateFieldGet(this,_buttonBar3).element.lastElementChild)
}},{key:"addPreamble",value:function(data){
_classPrivateFieldGet(this,_preamble).removeChildren(),
"string"==typeof data?_classPrivateFieldGet(this,_preamble).innerHTML=data:_classPrivateFieldGet(this,_preamble).appendChild(data)
}},{key:"hideHomeButton",value:function(){
_classPrivateFieldGet(this,_homeButton).hide()}},{key:"showBackButton",
value:function(){
_classPrivateFieldGet(this,_backwardsButton).show(),focus&&_classPrivateFieldGet(this,_backwardsButton).focus()
}},{key:"showNextButton",value:function(focus){
_classPrivateFieldGet(this,_forwardsButton).show(),
focus&&_classPrivateFieldGet(this,_forwardsButton).focus()}},{
key:"applyIconToNextButton",value:function(iconDetails,overrideText){
icons.applyIconToElement(iconDetails,_classPrivateFieldGet(this,_forwardsButton),{
overrideText:overrideText})}},{key:"autoAddKeydownEvents",
value:function(managedElements){var _this23=this
;if(_classPrivateFieldGet(this,_navigator2))console.error("autoAddKeydownEvents can only be called once.");else{
var items=null!=managedElements?managedElements:_classPrivateFieldGet(this,_presentation).managedChildren
;_classPrivateFieldSet(this,_navigator2,new ArrayIndexer(items,!0)),
items.forEach((function(item,index){
_this23.listenToEventOn("keydown",item,index)}))}}},{key:"next",
value:function(indexIgnored){
return this.config.factory.getNext(this,this.config)}},{key:"previous",
value:function(){return this.config.factory.getPrevious(this,this.config)}},{
key:"presentOnStage",value:function(stageElement){var _this24=this
;return new Promise((function(resolve){
_classPrivateFieldSet(_this24,_resolutionExecutor,resolve),
stageElement.appendChild(_this24),focusManager.focusWithin(stageElement)}))}},{
key:"askIfOkayToLeave",
value:(_askIfOkayToLeave=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(message){
var confirmation;return _regeneratorRuntime().wrap((function(_context2){
for(;;)switch(_context2.prev=_context2.next){case 0:
return _context2.next=2,ModalDialog.showConfirm(message);case 2:
return confirmation=_context2.sent,
_context2.abrupt("return",confirmation===ModalDialog.DialogIndex.CONFIRM_YES)
;case 4:case"end":return _context2.stop()}}),_callee2)}))),function(_x2){
return _askIfOkayToLeave.apply(this,arguments)})},{key:"allowNavigation",
value:(_allowNavigation=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(eventIgnored,eventIdIgnored){
return _regeneratorRuntime().wrap((function(_context3){
for(;;)switch(_context3.prev=_context3.next){case 0:
return _context3.abrupt("return",!0);case 1:case"end":return _context3.stop()}
}),_callee3)}))),function(_x3,_x4){return _allowNavigation.apply(this,arguments)
})},{key:"handleClickEvent",
value:(_handleClickEvent=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(event,eventId){
var index,upperCaseId,nextPresenter
;return _regeneratorRuntime().wrap((function(_context4){
for(;;)switch(_context4.prev=_context4.next){case 0:
if(index=parseInt(eventId),(upperCaseId=eventId?eventId.toString().toUpperCase():"")!==Presenter.HOME_ID&&upperCaseId!==Presenter.PREVIOUS_ID&&upperCaseId!==Presenter.NEXT_ID){
_context4.next=7;break}
return _context4.next=5,this.allowNavigation(event,eventId);case 5:
if(_context4.sent){_context4.next=7;break}return _context4.abrupt("return",!0)
;case 7:
nextPresenter=null,(nextPresenter=upperCaseId===Presenter.PREVIOUS_ID?this.previous():upperCaseId===Presenter.NEXT_ID?this.next(Presenter.NEXT_ID):upperCaseId===Presenter.HOME_ID?this.config.factory.getHome(this.config):this.next(isNaN(index)?eventId:index))&&_classPrivateFieldGet(this,_resolutionExecutor).call(this,nextPresenter)
;case 10:case"end":return _context4.stop()}}),_callee4,this)
}))),function(_x5,_x6){return _handleClickEvent.apply(this,arguments)})},{
key:"handleKeydownEvent",value:function(event,eventId){
var index=parseInt(eventId)
;if(console.debug("Key ".concat(event.key," down for index ").concat(index)),
!isNaN(index))switch(event.key){case" ":case"Enter":
this.handleClickEvent(event,eventId)}}}]),Presenter}(ManagedElement)
;function _addClassNames2(){var item=this;do{
this.classList.add(item.constructor.name),item=Object.getPrototypeOf(item)
}while("Object"!==item.constructor.name)}
function _buildContent2(presentationTagName){
_classPrivateFieldSet(this,_preamble,new ManagedElement("div","preamble")),
_classPrivateFieldSet(this,_presentation,new ManagedElement(presentationTagName,"presentation")),
_classPrivateFieldSet(this,_buttonBar3,footer.buttonBar),
_classPrivateMethodGet(this,_addNavigationButtons,_addNavigationButtons2).call(this),
this.appendChild(_classPrivateFieldGet(this,_preamble)),
this.appendChild(_classPrivateFieldGet(this,_presentation))}
function _addNavigationButtons2(){
_classPrivateFieldSet(this,_homeButton,new ManagedElement("button","home-navigation")),
icons.applyIconToElement(icons.home,_classPrivateFieldGet(this,_homeButton)),
this.listenToEventOn("click",_classPrivateFieldGet(this,_homeButton),Presenter.HOME_ID),
_classPrivateFieldGet(this,_buttonBar3).appendChild(_classPrivateFieldGet(this,_homeButton)),
_classPrivateFieldSet(this,_backwardsButton,new ManagedElement("button","back-navigation")),
icons.applyIconToElement(icons.back,_classPrivateFieldGet(this,_backwardsButton)),
this.listenToEventOn("click",_classPrivateFieldGet(this,_backwardsButton),Presenter.PREVIOUS_ID),
_classPrivateFieldGet(this,_buttonBar3).appendChild(_classPrivateFieldGet(this,_backwardsButton)),
_classPrivateFieldGet(this,_backwardsButton).hide(),
_classPrivateFieldSet(this,_forwardsButton,new ManagedElement("button","forward-navigation")),
icons.applyIconToElement(icons.forward,_classPrivateFieldGet(this,_forwardsButton)),
this.listenToEventOn("click",_classPrivateFieldGet(this,_forwardsButton),Presenter.NEXT_ID),
_classPrivateFieldGet(this,_buttonBar3).appendChild(_classPrivateFieldGet(this,_forwardsButton)),
_classPrivateFieldGet(this,_forwardsButton).hide()}
_defineProperty(Presenter,"HOME_ID","HOME"),
_defineProperty(Presenter,"PREVIOUS_ID","BACKWARDS"),
_defineProperty(Presenter,"NEXT_ID","FORWARDS")
;var _input=new WeakMap,FileInputButton=function(_ManagedElement14){
_inherits(FileInputButton,_ManagedElement14)
;var _super16=_createSuper(FileInputButton);function FileInputButton(options){
var _this25
;return _classCallCheck(this,FileInputButton),_classPrivateFieldInitSpec(_assertThisInitialized(_this25=_super16.call(this,"label","file-input-button")),_input,{
writable:!0,value:void 0
}),_this25.classList.add("selectable"),_classPrivateFieldSet(_assertThisInitialized(_this25),_input,new ManagedElement("input")),
_classPrivateFieldGet(_assertThisInitialized(_this25),_input).setAttribute("type","file"),
icons.applyIconToElement(icons.import,_assertThisInitialized(_this25),options),
_classPrivateFieldGet(_assertThisInitialized(_this25),_input).style.visibility="hidden",
_classPrivateFieldGet(_assertThisInitialized(_this25),_input).style.height="1em",
_this25.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this25),_input)),
_this25.listenToEventOn("change",_classPrivateFieldGet(_assertThisInitialized(_this25),_input)),
_this25}return _createClass(FileInputButton,[{key:"handleChangeEvent",
value:function(eventIgnored,eventIdIgnored){
var file=_classPrivateFieldGet(this,_input).element.files[0];if(file){
var reader=new FileReader,control=this
;reader.addEventListener("load",(function(){
reader.result,control.dispatchEvent(new CustomEvent(FileInputButton.DATA_AVAILABLE_EVENT_NAME,{
detail:{file:file,content:reader.result}}))})),reader.readAsText(file)}}
}]),FileInputButton}(ManagedElement)
;_defineProperty(FileInputButton,"DATA_AVAILABLE_EVENT_NAME","dataAvailable")
;var _title3=new WeakMap,_content3=new WeakMap,_getDataUri=new WeakSet,_lessonAsString=new WeakMap,_getFilename=new WeakSet,LessonExporter=function(){
function LessonExporter(title,content){
_classCallCheck(this,LessonExporter),_classPrivateMethodInitSpec(this,_getFilename),
_classPrivateFieldInitSpec(this,_lessonAsString,{get:_get_lessonAsString,
set:void 0
}),_classPrivateMethodInitSpec(this,_getDataUri),_classPrivateFieldInitSpec(this,_title3,{
writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_content3,{
writable:!0,value:void 0
}),_classPrivateFieldSet(this,_title3,title),_classPrivateFieldSet(this,_content3,content)
}return _createClass(LessonExporter,[{key:"exportLesson",value:function(){
var _this26=this
;return ModalDialog.showDialog(i18n(_templateObject65||(_templateObject65=_taggedTemplateLiteral(["b68686a697ec08b09db6d729aed81c71::"]))),i18n(_templateObject66||(_templateObject66=_taggedTemplateLiteral(["5ae903bf09202faef9d5fcedbf21cf14::"]))),{
dialogType:ModalDialog.DialogType.QUESTION,
buttons:[icons.export,icons.exportAutoRun]}).then((function(index){
return 0===index?_this26.exportBase64Lesson():_this26.exportAutorunLesson()}))}
},{key:"exportBase64Lesson",value:function(){
this.saveDataToFile(stringToBase64(_classPrivateFieldGet(this,_lessonAsString)),"txt")
}},{key:"exportAutorunLesson",value:function(){var html=function(data){
var rootUrl=window.location.href.replace(/index\.html(\?.*)?$/,""),loaderUrl="".concat(rootUrl,"session-data-builder.html"),appUrl="".concat(rootUrl,"index.html")
;return'<!DOCTYPE html>\n\x3c!-- \nText2Lesson loader.\n--\x3e\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Text2Lesson: Embedded lesson runner</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html {\n        height: -webkit-fill-available; \n      }\n      body {\n        overflow: hidden;\n      }\n      noscript {\n        left: 0;\n        position: absolute;\n        top: 0;\n      }\n      #progress {\n        padding: 1em;\n        position: absolute;\n        width: 60vw;\n        margin-top: 50vh;\n        left: 0;\n        top: 0;\n        z-index: 10;\n      }\n      iframe {\n        border: 0;\n        width: 100vw;\n        height: 100vh;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe id="data-loader"></iframe>\n    <div id="progress"></div>\n    <noscript class="always-on-top">\n      <p>\n        Your browser does not support scripts and so this application cannot\n        run. If you\'ve disabled scripts, you will need to enable them to\n        proceed. Sorry.\n      </p>\n    </noscript>\n  </body>\n  <script>\n    const LESSON_TITLE_B64 = "'.concat(data.b64Title,'";\n    const LESSON_SOURCE_B64 = "').concat(data.b64LessonData,'";\n    const LESSON_TRANSLATIONS_B64 = "').concat(data.b64Translations,"\";\n    const LOADER_URL = '").concat(loaderUrl,"';\n    const APPLICATION_URL = '").concat(appUrl,"';\n    const loader = document.getElementById('data-loader');\n    const progress = document.getElementById('progress');\n    const dataChunks = LESSON_SOURCE_B64.match(/.{1,1800}/g);\n    progress.innerHTML = 'Loading: ';\n    let index = -1;\n    loaded = false;\n    const eventListener = loader.addEventListener('load', () => {\n      if (loaded) {\n        return;\n      }\n      progress.innerHTML += ' .';\n      if (index < dataChunks.length) {\n        if (index < 0) {\n          loader.src = `${LOADER_URL}?title=${encodeURI(LESSON_TITLE_B64)}`;\n          index++;\n        } else {\n          loader.src = `${LOADER_URL}?data=${encodeURI(dataChunks[index++])}`;\n        }\n      } else {\n        window.location.replace(APPLICATION_URL);\n        loaded = true;\n        progress.style.display = 'none';\n      }\n    });\n    loader.src = `${LOADER_URL}`;\n  <\/script>\n</html>\n")
}({b64Title:stringToBase64(_classPrivateFieldGet(this,_title3)),
b64LessonData:stringToBase64(_classPrivateFieldGet(this,_content3)),
b64Translations:stringToBase64(JSON.stringify({active:activeTranslations,
fallback:fallbackTranslations}))});this.saveDataToFile(html,"html")}},{
key:"saveDataToFile",value:function(data,extension){
var tempA=document.createElement("a")
;tempA.setAttribute("href",_classPrivateMethodGet(this,_getDataUri,_getDataUri2).call(this,data)),
tempA.setAttribute("download",_classPrivateMethodGet(this,_getFilename,_getFilename2).call(this,extension)),
tempA.addEventListener("click",(function(){document.body.removeChild(tempA)
})),document.body.appendChild(tempA),tempA.click()}}]),LessonExporter}()
;function _getDataUri2(data){
return"data:text/plain;charset=utf-8,".concat(encodeURIComponent(data))}
function _get_lessonAsString(){return JSON.stringify({
title:_classPrivateFieldGet(this,_title3),
content:_classPrivateFieldGet(this,_content3)})}
function _getFilename2(extension){
var safename=_classPrivateFieldGet(this,_title3).replace(/[^A-Za-z0-9_-]/g,"_").substring(0,32)
;return"".concat(safename,".").concat(extension)}
var _getSummaryFromBase64File=new WeakSet,_getSummaryFromAutorunFile=new WeakSet,_getSummaryFromPlainTextFile=new WeakSet,LessonImporter=function(){
function LessonImporter(){
_classCallCheck(this,LessonImporter),_classPrivateMethodInitSpec(this,_getSummaryFromPlainTextFile),
_classPrivateMethodInitSpec(this,_getSummaryFromAutorunFile),
_classPrivateMethodInitSpec(this,_getSummaryFromBase64File)}
return _createClass(LessonImporter,[{key:"convert",value:function(exportedData){
var result=_classPrivateMethodGet(this,_getSummaryFromBase64File,_getSummaryFromBase64File2).call(this,exportedData)
;return result||((result=_classPrivateMethodGet(this,_getSummaryFromAutorunFile,_getSummaryFromAutorunFile2).call(this,exportedData))?(console.log(result.languages),
result):_classPrivateMethodGet(this,_getSummaryFromPlainTextFile,_getSummaryFromPlainTextFile2).call(this,exportedData))
}}]),LessonImporter}();function _getSummaryFromBase64File2(data){
if(data.match(/^[a-zA-Z0-9+/=]+$/))try{return JSON.parse(base64ToString(data))
}catch(error){console.error(error)}return null}
function _getSummaryFromAutorunFile2(data){
var match=data.match(/const LESSON_TITLE_B64\s*=\s*['"]([a-zA-Z0-9+/=]+)['"];\s*const LESSON_SOURCE_B64\s*=\s*['"]([a-zA-Z0-9+/=]+)['"];/)
;if(match)try{return{title:base64ToString(match[1]),
content:base64ToString(match[2])}}catch(error){console.error(error)}return null}
function _getSummaryFromPlainTextFile2(data){
return data.match(/^ {0,3}(?:\(*([i?])\1*[) ]+)(.*)$/m)?{title:"",content:data
}:null}
var _importSummary=new WeakMap,_buildContent3=new WeakSet,HomePresenter=function(_Presenter){
_inherits(HomePresenter,_Presenter);var _super17=_createSuper(HomePresenter)
;function HomePresenter(config){var _this27
;return _classCallCheck(this,HomePresenter),
config.titles=[i18n(_templateObject67||(_templateObject67=_taggedTemplateLiteral(["d6e5c296474cad126efdfa515a47f1f8::"]))),i18n(_templateObject68||(_templateObject68=_taggedTemplateLiteral(["d63e17b8da99189aff04b37070c61c8e::"])))],
config.itemClassName="library",
_classPrivateMethodInitSpec(_assertThisInitialized(_this27=_super17.call(this,config)),_buildContent3),
_classPrivateFieldInitSpec(_assertThisInitialized(_this27),_importSummary,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this27),_buildContent3,_buildContent4).call(_assertThisInitialized(_this27)),
_this27.hideHomeButton(),_this27}return _createClass(HomePresenter,[{
key:"handleDataAvailableEvent",value:function(event,eventIdIgnored){
var _event$detail,importer=new LessonImporter
;(_classPrivateFieldSet(this,_importSummary,importer.convert(event.detail.content)),
_classPrivateFieldGet(this,_importSummary))?this.handleClickEvent(event,HomePresenter.FILE_LIBRARY_ID):toast("Unable to import the file ".concat(null===(_event$detail=event.detail)||void 0===_event$detail||null===(_event$detail=_event$detail.file)||void 0===_event$detail?void 0:_event$detail.name,". The file may be corrupt or the wrong type of file."))
}},{key:"next",value:function(index){if(index===HomePresenter.FILE_LIBRARY_ID){
var unmanagedLesson=new UnmanagedLesson(_classPrivateFieldGet(this,_importSummary).title,_classPrivateFieldGet(this,_importSummary).content,LessonOrigin.FILE_SYSTEM)
;return this.config.lesson=unmanagedLesson.lesson,
this.config.lessonInfo=unmanagedLesson.lessonInfo,
this.config.factory.getSuitableProblemPresenter(this.config)}
return lessonManager.usingLocalLibrary=index===HomePresenter.LOCAL_LIBRARY_ID,
_get(_getPrototypeOf(HomePresenter.prototype),"next",this).call(this,index)}}]),
HomePresenter}(Presenter);function _buildContent4(){
var button=new ManagedElement("button")
;icons.applyIconToElement(icons.library,button,{
overrideText:i18n(_templateObject98||(_templateObject98=_taggedTemplateLiteral(["adc4c5f402b068fae17cc33ecf648d5d::"]))),
hideText:!1
}),this.presentation.appendChild(button),this.listenToEventOn("click",button,HomePresenter.REMOTE_LIBRARY_ID),
button=new ManagedElement("button"),
icons.applyIconToElement(icons.library,button,{
overrideText:i18n(_templateObject99||(_templateObject99=_taggedTemplateLiteral(["38e69d0f533dbbdcb17089ef96094b43::"]))),
hideText:!1
}),this.presentation.appendChild(button),this.listenToEventOn("click",button,HomePresenter.LOCAL_LIBRARY_ID),
button=new FileInputButton({
overrideText:i18n(_templateObject100||(_templateObject100=_taggedTemplateLiteral(["9148a8aa9f535484f03b98ae018a76b6::"]))),
hideText:!1
}),this.presentation.appendChild(button),this.listenToEventOn(FileInputButton.DATA_AVAILABLE_EVENT_NAME,button,HomePresenter.FILE_LIBRARY_ID),
this.addPreamble(parseMarkdown(i18n(_templateObject64||(_templateObject64=_taggedTemplateLiteral(["5a62ae5db3f4f824aa6f41465bab07da::",""])),BuildInfo.getProductName())))
}
_defineProperty(HomePresenter,"REMOTE_LIBRARY_ID","REMOTE"),_defineProperty(HomePresenter,"LOCAL_LIBRARY_ID","LOCAL"),
_defineProperty(HomePresenter,"FILE_LIBRARY_ID","FILE_SYSTEM")
;var _buildContent5=new WeakSet,ListPresenter=function(_Presenter2){
_inherits(ListPresenter,_Presenter2);var _super18=_createSuper(ListPresenter)
;function ListPresenter(config){var _this28
;return _classCallCheck(this,ListPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this28=_super18.call(this,config,"ul")),_buildContent5),
_classPrivateMethodGet(_assertThisInitialized(_this28),_buildContent5,_buildContent6).call(_assertThisInitialized(_this28)),
_this28}return _createClass(ListPresenter)}(Presenter)
;function _buildContent6(){var _this$config,_this$config2,_this54=this
;null===(_this$config=this.config)||void 0===_this$config||null===(_this$config=_this$config.titles)||void 0===_this$config||_this$config.forEach((function(title,index){
var itemElement=new ManagedElement("li",_this54.config.itemClassName)
;itemElement.setAttribute("tabindex","0"),
itemElement.classList.add("selectable"),
_this54.presentation.appendChild(itemElement),
itemElement.innerHTML=title,_this54.listenToEventOn("click",itemElement,index)
})),
null!==(_this$config2=this.config)&&void 0!==_this$config2&&null!==(_this$config2=_this$config2.factory)&&void 0!==_this$config2&&_this$config2.hasPrevious(this)&&this.showBackButton()
}var _buildPreamble=new WeakSet,LibraryPresenter=function(_ListPresenter){
_inherits(LibraryPresenter,_ListPresenter)
;var _super19=_createSuper(LibraryPresenter);function LibraryPresenter(config){
var _this29
;return _classCallCheck(this,LibraryPresenter),config.titles=lessonManager.bookTitles,
config.itemClassName="book",
_classPrivateMethodInitSpec(_assertThisInitialized(_this29=_super19.call(this,config)),_buildPreamble),
_classPrivateMethodGet(_assertThisInitialized(_this29),_buildPreamble,_buildPreamble2).call(_assertThisInitialized(_this29)),
_this29.autoAddKeydownEvents(),_this29}return _createClass(LibraryPresenter,[{
key:"next",value:function(index){
return lessonManager.bookIndex=index,_get(_getPrototypeOf(LibraryPresenter.prototype),"next",this).call(this,index)
}}]),LibraryPresenter}(ListPresenter);function _buildPreamble2(){
this.addPreamble("<span class='library-title'>".concat(lessonManager.libraryTitle,"</span>"))
}var _buildPreamble3=new WeakSet,BookPresenter=function(_ListPresenter2){
_inherits(BookPresenter,_ListPresenter2)
;var _super20=_createSuper(BookPresenter);function BookPresenter(config){
var _this30
;return _classCallCheck(this,BookPresenter),config.titles=lessonManager.chapterTitles,
config.itemClassName="chapter",
_classPrivateMethodInitSpec(_assertThisInitialized(_this30=_super20.call(this,config)),_buildPreamble3),
_this30.autoAddKeydownEvents(),
_classPrivateMethodGet(_assertThisInitialized(_this30),_buildPreamble3,_buildPreamble4).call(_assertThisInitialized(_this30)),
_this30}return _createClass(BookPresenter,[{key:"next",value:function(index){
return lessonManager.chapterIndex=index,
_get(_getPrototypeOf(BookPresenter.prototype),"next",this).call(this,index)}}]),
BookPresenter}(ListPresenter);function _buildPreamble4(){
this.addPreamble("<span class='library-title'>".concat(lessonManager.libraryTitle,"</span>\n    <span class='book-title'>").concat(lessonManager.bookTitle,"</span>\n    "))
}
var _buildPreamble5=new WeakSet,_addNewSlotButton=new WeakSet,ChapterPresenter=function(_ListPresenter3){
_inherits(ChapterPresenter,_ListPresenter3)
;var _super21=_createSuper(ChapterPresenter);function ChapterPresenter(config){
var _this31
;return _classCallCheck(this,ChapterPresenter),config.titles=lessonManager.lessonTitles,
config.itemClassName="lesson",
_classPrivateMethodInitSpec(_assertThisInitialized(_this31=_super21.call(this,config)),_addNewSlotButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this31),_buildPreamble5),
_defineProperty(_assertThisInitialized(_this31),"ADD_LESSON_EVENT_ID","add-lesson"),
_classPrivateMethodGet(_assertThisInitialized(_this31),_buildPreamble5,_buildPreamble6).call(_assertThisInitialized(_this31)),
lessonManager.usingLocalLibrary&&_classPrivateMethodGet(_assertThisInitialized(_this31),_addNewSlotButton,_addNewSlotButton2).call(_assertThisInitialized(_this31)),
_this31.autoAddKeydownEvents(),_this31}return _createClass(ChapterPresenter,[{
key:"handleClickEvent",value:function(event,eventId){var _this32=this
;if(eventId===this.ADD_LESSON_EVENT_ID)return lessonManager.addLessonToLocalLibrary().then((function(){
_get(_getPrototypeOf(ChapterPresenter.prototype),"handleClickEvent",_this32).call(_this32,event,eventId)
}))
;_get(_getPrototypeOf(ChapterPresenter.prototype),"handleClickEvent",this).call(this,event,eventId)
}},{key:"next",value:function(index){
return index===this.ADD_LESSON_EVENT_ID?new ChapterPresenter(this.config):(lessonManager.lessonIndex=index,
_get(_getPrototypeOf(ChapterPresenter.prototype),"next",this).call(this,index))}
}]),ChapterPresenter}(ListPresenter);function _buildPreamble6(){
lessonManager.usingLocalLibrary?this.addPreamble("<span class='library-title'>".concat(lessonManager.libraryTitle,"</span>")):this.addPreamble("<span class='library-title'>".concat(lessonManager.libraryTitle,"</span>\n        <span class='book-title'>").concat(lessonManager.bookTitle,"</span>\n        <span class='chapter-title'>").concat(lessonManager.chapterTitle,"</span>\n        "))
}function _addNewSlotButton2(){var button=new ManagedElement("button")
;icons.applyIconToElement(icons.addLesson,button),
this.listenToEventOn("click",button,this.ADD_LESSON_EVENT_ID),
this.addButtonToBar(button)}
var _buildCustomContent=new WeakSet,_addEditButtonIfLocal=new WeakSet,LessonPresenter=function(_Presenter3){
_inherits(LessonPresenter,_Presenter3)
;var _super22=_createSuper(LessonPresenter);function LessonPresenter(config){
var _this33$config,_this33
;return _classCallCheck(this,LessonPresenter),config.titles=["placeholder"],
config.itemClassName="lesson-summary",
_classPrivateMethodInitSpec(_assertThisInitialized(_this33=_super22.call(this,config)),_addEditButtonIfLocal),
_classPrivateMethodInitSpec(_assertThisInitialized(_this33),_buildCustomContent),
_this33.config.lessonInfo=lessonManager.currentLessonInfo,
_classPrivateMethodGet(_assertThisInitialized(_this33),_buildCustomContent,_buildCustomContent2).call(_assertThisInitialized(_this33)),
_this33.autoAddKeydownEvents(),
null!==(_this33$config=_this33.config)&&void 0!==_this33$config&&null!==(_this33$config=_this33$config.factory)&&void 0!==_this33$config&&_this33$config.hasPrevious(_assertThisInitialized(_this33))&&_this33.showBackButton(),
_this33}return _createClass(LessonPresenter,[{key:"next",
value:function(eventId){var _this34=this
;return eventId===LessonPresenter.EDIT_EVENT_ID?this.config.factory.getEditor(this,this.config):lessonManager.loadCurrentLesson().then((function(cachedLesson){
var lessonSource=LessonSource.createFromSource(cachedLesson.content)
;return _this34.config.lesson=lessonSource.convertToLesson(),
_this34.config.factory.getNext(_this34,_this34.config)}))}},{key:"previous",
value:function(){return this.config.factory.getPrevious(this,this.config)}
}]),LessonPresenter}(Presenter);function _buildCustomContent2(){
this.presentation.createAndAppendChild("h2",null,i18n(_templateObject101||(_templateObject101=_taggedTemplateLiteral(["8f8bfb5f6d96fb3113a39f781f6fffe4::"]))))
;var summaryBlock=this.presentation.createAndAppendChild("div","lesson-summary")
;summaryBlock.createAndAppendChild("span","lesson-title",this.config.lessonInfo.titles.lesson),
summaryBlock.createAndAppendChild("p",null,i18n(_templateObject102||(_templateObject102=_taggedTemplateLiteral(["d6cd575eb2dab528448d6c6810598452::"])))),
summaryBlock.createAndAppendChild("span","library-title",this.config.lessonInfo.titles.library),
lessonManager.usingLocalLibrary||(summaryBlock.createAndAppendChild("span","book-title",this.config.lessonInfo.titles.book),
summaryBlock.createAndAppendChild("span","chapter-title",this.config.lessonInfo.titles.chapter)),
this.presentation.appendChild(summaryBlock),
this.applyIconToNextButton(icons.playLesson),
this.showNextButton(),_classPrivateMethodGet(this,_addEditButtonIfLocal,_addEditButtonIfLocal2).call(this)
}function _addEditButtonIfLocal2(){if(this.config.lessonInfo.usingLocalLibrary){
var editButton=new ManagedElement("button")
;icons.applyIconToElement(icons.edit,editButton),
this.addButtonToBar(editButton),
this.listenToEventOn("click",editButton,LessonPresenter.EDIT_EVENT_ID)}}
_defineProperty(LessonPresenter,"EDIT_EVENT_ID","EDIT_LESSON")
;var _lessonTitleElement=new WeakMap,_lessonTitleValue=new WeakMap,_mainEditorElement=new WeakMap,_saveButton=new WeakMap,_importForm=new WeakMap,_importButton=new WeakMap,_exportButton=new WeakMap,_dirty=new WeakMap,_buildCustomContent3=new WeakSet,_setEditorAsDirty=new WeakSet,_setEditorAsClean=new WeakSet,_addSaveButton=new WeakSet,_addImportButton=new WeakSet,_addExportButton=new WeakSet,_addDeleteButton=new WeakSet,_deleteLessonIfConfirmed=new WeakSet,_deleteLesson=new WeakSet,_saveLessonLocally=new WeakSet,_exportLesson=new WeakSet,LessonEditorPresenter=function(_Presenter4){
_inherits(LessonEditorPresenter,_Presenter4)
;var _handleClickEvent2,_allowNavigation2,_super23=_createSuper(LessonEditorPresenter)
;function LessonEditorPresenter(config){var _this35
;return _classCallCheck(this,LessonEditorPresenter),
config.titles=["placeholder"],
config.itemClassName="lesson-editor",_classPrivateMethodInitSpec(_assertThisInitialized(_this35=_super23.call(this,config)),_exportLesson),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_saveLessonLocally),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_deleteLesson),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_deleteLessonIfConfirmed),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_addDeleteButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_addExportButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_addImportButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_addSaveButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_setEditorAsClean),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_setEditorAsDirty),
_classPrivateMethodInitSpec(_assertThisInitialized(_this35),_buildCustomContent3),
_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_lessonTitleElement,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_lessonTitleValue,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_mainEditorElement,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_saveButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_importForm,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_importButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_exportButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this35),_dirty,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this35),_buildCustomContent3,_buildCustomContent4).call(_assertThisInitialized(_this35)),
_classPrivateMethodGet(_assertThisInitialized(_this35),_addSaveButton,_addSaveButton2).call(_assertThisInitialized(_this35)),
_classPrivateMethodGet(_assertThisInitialized(_this35),_addImportButton,_addImportButton2).call(_assertThisInitialized(_this35)),
_classPrivateMethodGet(_assertThisInitialized(_this35),_addExportButton,_addExportButton2).call(_assertThisInitialized(_this35)),
_classPrivateMethodGet(_assertThisInitialized(_this35),_addDeleteButton,_addDeleteButton2).call(_assertThisInitialized(_this35)),
_this35.expandPresentation(),
_classPrivateMethodGet(_assertThisInitialized(_this35),_setEditorAsClean,_setEditorAsClean2).call(_assertThisInitialized(_this35)),
_this35.applyIconToNextButton(icons.closeEditor),
_this35.showNextButton(),_classPrivateFieldSet(_assertThisInitialized(_this35),_dirty,!1),
_this35}return _createClass(LessonEditorPresenter,[{
key:"handleDataAvailableEvent",value:function(event,eventIdIgnored){
var _this36=this;_classPrivateFieldGet(this,_importForm).element.reset()
;var _event$detail2,importSummary=(new LessonImporter).convert(event.detail.content)
;if(importSummary)return ModalDialog.showConfirm(i18n(_templateObject69||(_templateObject69=_taggedTemplateLiteral(["b087a0f6368816df1cbbf2700e7de192::"])))).then((function(answer){
answer===ModalDialog.DialogIndex.CONFIRM_YES&&(_classPrivateFieldGet(_this36,_lessonTitleElement).setValue(importSummary.title),
_classPrivateFieldSet(_this36,_lessonTitleValue,importSummary.title),
_classPrivateFieldGet(_this36,_mainEditorElement).value=importSummary.content,
_classPrivateMethodGet(_this36,_setEditorAsDirty,_setEditorAsDirty2).call(_this36))
}))
;toast("Unable to import the file ".concat(null===(_event$detail2=event.detail)||void 0===_event$detail2||null===(_event$detail2=_event$detail2.file)||void 0===_event$detail2?void 0:_event$detail2.name,". The file may be corrupt or the wrong type of file."))
}},{key:"handleInputEvent",value:function(eventIgnored,eventIdIgnored){
_classPrivateMethodGet(this,_setEditorAsDirty,_setEditorAsDirty2).call(this)}},{
key:"allowNavigation",
value:(_allowNavigation2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee5(eventIgnored,eventIdIgnored){
return _regeneratorRuntime().wrap((function(_context5){
for(;;)switch(_context5.prev=_context5.next){case 0:
if(!_classPrivateFieldGet(this,_dirty)){_context5.next=4;break}
return _context5.abrupt("return",this.askIfOkayToLeave(i18n(_templateObject70||(_templateObject70=_taggedTemplateLiteral(["0fd040b4b27f744bd6c771e624f1a466::"])))))
;case 4:return _context5.abrupt("return",!0);case 5:case"end":
return _context5.stop()}}),_callee5,this)}))),function(_x7,_x8){
return _allowNavigation2.apply(this,arguments)})},{key:"handleClickEvent",
value:(_handleClickEvent2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee6(event,eventId){
return _regeneratorRuntime().wrap((function(_context6){
for(;;)switch(_context6.prev=_context6.next){case 0:
_context6.t0=eventId,_context6.next=_context6.t0===LessonEditorPresenter.DELETE_EVENT_ID?3:_context6.t0===LessonEditorPresenter.SAVE_EVENT_ID?9:_context6.t0===LessonEditorPresenter.EXPORT_EVENT_ID?10:11
;break;case 3:
return _context6.next=5,_classPrivateMethodGet(this,_deleteLessonIfConfirmed,_deleteLessonIfConfirmed2).call(this)
;case 5:if(_context6.sent){_context6.next=8;break}
return _context6.abrupt("return");case 8:return _context6.abrupt("break",11)
;case 9:
return _context6.abrupt("return",_classPrivateMethodGet(this,_saveLessonLocally,_saveLessonLocally2).call(this))
;case 10:
return _context6.abrupt("return",_classPrivateMethodGet(this,_exportLesson,_exportLesson2).call(this))
;case 11:
return _context6.abrupt("return",_get(_getPrototypeOf(LessonEditorPresenter.prototype),"handleClickEvent",this).call(this,event,eventId))
;case 12:case"end":return _context6.stop()}}),_callee6,this)
}))),function(_x9,_x10){return _handleClickEvent2.apply(this,arguments)})},{
key:"next",value:function(eventId){
return eventId===LessonEditorPresenter.DELETE_EVENT_ID?this.config.factory.getLibraryPresenter(this,this.config):_get(_getPrototypeOf(LessonEditorPresenter.prototype),"next",this).call(this,eventId)
}}]),LessonEditorPresenter}(Presenter);function _buildCustomContent4(){
return _buildCustomContent5.apply(this,arguments)}
function _buildCustomContent5(){
return(_buildCustomContent5=_asyncToGenerator(_regeneratorRuntime().mark((function _callee8(){
var cachedLesson,_this61=this
;return _regeneratorRuntime().wrap((function(_context8){
for(;;)switch(_context8.prev=_context8.next){case 0:
return _context8.next=2,lessonManager.loadCurrentLesson();case 2:
cachedLesson=_context8.sent,
_classPrivateFieldSet(this,_lessonTitleValue,this.config.lessonInfo.titles.lesson),
_classPrivateFieldSet(this,_lessonTitleElement,new LabeledControl(LocalLibrary,{
defaultValue:_classPrivateFieldGet(this,_lessonTitleValue),
label:i18n(_templateObject110||(_templateObject110=_taggedTemplateLiteral(["b78a3223503896721cca1303f776159b::"]))),
type:"input",onupdate:function(value){
_classPrivateFieldSet(_this61,_lessonTitleValue,value),
_classPrivateMethodGet(_this61,_setEditorAsDirty,_setEditorAsDirty2).call(_this61)
}},{storage:null
})),this.addPreamble(_classPrivateFieldGet(this,_lessonTitleElement)),
_classPrivateFieldSet(this,_mainEditorElement,this.presentation.createAndAppendChild("textarea","lesson-editor",cachedLesson.content)),
this.listenToEventOn("input",_classPrivateFieldGet(this,_mainEditorElement))
;case 8:case"end":return _context8.stop()}}),_callee8,this)
})))).apply(this,arguments)}function _setEditorAsDirty2(){
_classPrivateFieldGet(this,_saveButton).disabled=!1,
_classPrivateFieldSet(this,_dirty,!0)}function _setEditorAsClean2(){
_classPrivateFieldGet(this,_saveButton).disabled=!0,
_classPrivateFieldSet(this,_dirty,!1)}function _addSaveButton2(){
_classPrivateFieldSet(this,_saveButton,new ManagedElement("button")),
icons.applyIconToElement(icons.save,_classPrivateFieldGet(this,_saveButton)),
this.listenToEventOn("click",_classPrivateFieldGet(this,_saveButton),LessonEditorPresenter.SAVE_EVENT_ID),
this.addButtonToBar(_classPrivateFieldGet(this,_saveButton))}
function _addImportButton2(){
_classPrivateFieldSet(this,_importForm,new ManagedElement("form","button-wrapper")),
_classPrivateFieldSet(this,_importButton,new FileInputButton),
_classPrivateFieldGet(this,_importForm).appendChild(_classPrivateFieldGet(this,_importButton)),
this.listenToEventOn(FileInputButton.DATA_AVAILABLE_EVENT_NAME,_classPrivateFieldGet(this,_importButton),LessonEditorPresenter.IMPORT_EVENT_ID),
this.addButtonToBar(_classPrivateFieldGet(this,_importForm))}
function _addExportButton2(){
_classPrivateFieldSet(this,_exportButton,new ManagedElement("button")),
icons.applyIconToElement(icons.export,_classPrivateFieldGet(this,_exportButton)),
this.listenToEventOn("click",_classPrivateFieldGet(this,_exportButton),LessonEditorPresenter.EXPORT_EVENT_ID),
this.addButtonToBar(_classPrivateFieldGet(this,_exportButton))}
function _addDeleteButton2(){var deleteButton=new ManagedElement("button")
;icons.applyIconToElement(icons.delete,deleteButton),
this.listenToEventOn("click",deleteButton,LessonEditorPresenter.DELETE_EVENT_ID),
this.addButtonToBar(deleteButton)}function _deleteLessonIfConfirmed2(){
var _this55=this
;return ModalDialog.showConfirm(i18n(_templateObject103||(_templateObject103=_taggedTemplateLiteral(["784dc4bc7f2a0374bd038e01caf85d4d::"]))),i18n(_templateObject104||(_templateObject104=_taggedTemplateLiteral(["f89bc18e7afb05b3ac03300bec624b63::"])))).then((function(response){
return response===ModalDialog.DialogIndex.CONFIRM_YES&&_classPrivateMethodGet(_this55,_deleteLesson,_deleteLesson2).call(_this55)
}))}function _deleteLesson2(){
return lessonManager.deleteLocalLibraryCurrentLesson().then((function(){return!0
}))}function _saveLessonLocally2(){
lessonManager.updateCurrentLessonContent(_classPrivateFieldGet(this,_lessonTitleValue),_classPrivateFieldGet(this,_mainEditorElement).value),
_classPrivateMethodGet(this,_setEditorAsClean,_setEditorAsClean2).call(this)}
function _exportLesson2(){
new LessonExporter(_classPrivateFieldGet(this,_lessonTitleValue),_classPrivateFieldGet(this,_mainEditorElement).value).exportLesson()
}
_defineProperty(LessonEditorPresenter,"SAVE_EVENT_ID","SAVE"),_defineProperty(LessonEditorPresenter,"EXPORT_EVENT_ID","EXPORT"),
_defineProperty(LessonEditorPresenter,"IMPORT_EVENT_ID","IMPORT"),
_defineProperty(LessonEditorPresenter,"DELETE_EVENT_ID","DELETE")
;var CelebrationType_HAPPY="smiley-face",CelebrationType_SAD="sad-face",_animationClass=new WeakMap,_busy=new WeakMap,Celebrator=function(_ManagedElement15){
_inherits(Celebrator,_ManagedElement15);var _super24=_createSuper(Celebrator)
;function Celebrator(){var _this37
;return _classCallCheck(this,Celebrator),_classPrivateFieldInitSpec(_assertThisInitialized(_this37=_super24.call(this,"div","celebrator")),_animationClass,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this37),_busy,{
writable:!0,value:void 0
}),_this37.appendTo(document.body),_this37.listenToOwnEvent("animationend"),
_classPrivateFieldSet(_assertThisInitialized(_this37),_busy,!1),
_this37.hide(),_this37}return _createClass(Celebrator,[{
key:"handleAnimationendEvent",value:function(eventIgnored,eventIdIgnored){
console.debug("Celebration ended."),
this.hide(),_classPrivateFieldSet(this,_busy,!1)}},{key:"celebrate",
value:function(){
var celebration=arguments.length>0&&void 0!==arguments[0]?arguments[0]:CelebrationType_HAPPY
;_classPrivateFieldGet(this,_busy)?console.warn("Celebration busy so new celebration ignored."):(this.show(),
_classPrivateFieldGet(this,_animationClass)&&this.classList.remove(_classPrivateFieldGet(this,_animationClass)),
_classPrivateFieldSet(this,_animationClass,celebration),
this.classList.add(_classPrivateFieldGet(this,_animationClass)))}}]),Celebrator
}(ManagedElement),celebrator=new Celebrator,ClassName={ANSWER:"problem-answer",
ANSWERS:"problem-answers",EXPLANATION:"problem-explanation",
INCORRECT_ANSWER:"incorrect-answer",CORRECT_ANSWER:"correct-answer",
MISSED_ANSWER:"missed-answer",AVOIDED_ANSWER:"avoided-answer",
QUESTION:"problem-question",SELECTED_ANSWER:"selected-answer"},ElementId={
CLICKED_ANSWER:"answer",CLICKED_SUBMIT:"submit",CLICKED_NEXT:"next"},Attribute={
RIGHT_OR_WRONG:"data-code"},AnswerSelectionState={UNDEFINED:0,CORRECT:1,
INCORRECT:2,MISSED:3,AVOIDED:4
},_problem=new WeakMap,_questionElement=new WeakMap,_answerElement=new WeakMap,_explanationElement=new WeakMap,_submitButton=new WeakMap,_freezeAnswers=new WeakMap,_addSubmitButton=new WeakSet,_processClickedSubmit=new WeakSet,ProblemPresenter=function(_Presenter5){
_inherits(ProblemPresenter,_Presenter5)
;var _allowNavigation3,_super25=_createSuper(ProblemPresenter)
;function ProblemPresenter(config){var _this38
;return _classCallCheck(this,ProblemPresenter),
config.titles=[],config.itemClassName="",
_classPrivateMethodInitSpec(_assertThisInitialized(_this38=_super25.call(this,config,"div")),_processClickedSubmit),
_classPrivateMethodInitSpec(_assertThisInitialized(_this38),_addSubmitButton),
_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_problem,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_questionElement,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_answerElement,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_explanationElement,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_submitButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this38),_freezeAnswers,{
writable:!0,value:void 0
}),_classPrivateFieldSet(_assertThisInitialized(_this38),_problem,config.lesson.getNextProblem()),
_classPrivateFieldSet(_assertThisInitialized(_this38),_questionElement,new ManagedElement("div",ClassName.QUESTION)),
_classPrivateFieldGet(_assertThisInitialized(_this38),_questionElement).innerHTML=_classPrivateFieldGet(_assertThisInitialized(_this38),_problem).question.html,
_classPrivateFieldSet(_assertThisInitialized(_this38),_answerElement,new ManagedElement("div",ClassName.ANSWERS)),
_classPrivateFieldSet(_assertThisInitialized(_this38),_explanationElement,new ManagedElement("div",ClassName.EXPLANATION)),
_classPrivateFieldGet(_assertThisInitialized(_this38),_explanationElement).innerHTML=_classPrivateFieldGet(_assertThisInitialized(_this38),_problem).explanation.html,
_classPrivateFieldGet(_assertThisInitialized(_this38),_explanationElement).hide(),
_this38.presentation.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this38),_questionElement)),
_this38.presentation.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this38),_answerElement)),
_this38.presentation.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this38),_explanationElement)),
_this38.addButtons(),
_classPrivateFieldGet(_assertThisInitialized(_this38),_submitButton).show(),
_classPrivateFieldSet(_assertThisInitialized(_this38),_freezeAnswers,!1),
_this38.config.lessonInfo.managed||_this38.hideHomeButton(),_this38}
return _createClass(ProblemPresenter,[{key:"problem",get:function(){
return _classPrivateFieldGet(this,_problem)}},{key:"questionElement",
get:function(){return _classPrivateFieldGet(this,_questionElement)}},{
key:"answerElement",get:function(){
return _classPrivateFieldGet(this,_answerElement)}},{key:"explanationElement",
get:function(){return _classPrivateFieldGet(this,_explanationElement)}},{
key:"submitButton",get:function(){
return _classPrivateFieldGet(this,_submitButton)}},{key:"addButtons",
value:function(){
_classPrivateMethodGet(this,_addSubmitButton,_addSubmitButton2).call(this)}},{
key:"presentOnStage",value:function(stage){var _this39=this
;return""!==_classPrivateFieldGet(this,_problem).intro.html&&_classPrivateFieldGet(this,_problem).questionType!==QuestionType.SLIDE?ModalDialog.showInfo(_classPrivateFieldGet(this,_problem).intro.html).then((function(){
return _get(_getPrototypeOf(ProblemPresenter.prototype),"presentOnStage",_this39).call(_this39,stage)
})):_get(_getPrototypeOf(ProblemPresenter.prototype),"presentOnStage",this).call(this,stage)
}},{key:"handleClickEvent",value:function(event,eventId){switch(eventId){
case ElementId.CLICKED_ANSWER:
_classPrivateFieldGet(this,_freezeAnswers)||this.processClickedAnswer(event.currentTarget)
;break;case ElementId.CLICKED_SUBMIT:
_classPrivateFieldSet(this,_freezeAnswers,!0),
_classPrivateMethodGet(this,_processClickedSubmit,_processClickedSubmit2).call(this)
;break;default:
_get(_getPrototypeOf(ProblemPresenter.prototype),"handleClickEvent",this).call(this,event,eventId)
}}},{key:"allowNavigation",
value:(_allowNavigation3=_asyncToGenerator(_regeneratorRuntime().mark((function _callee7(event,eventId){
return _regeneratorRuntime().wrap((function(_context7){
for(;;)switch(_context7.prev=_context7.next){case 0:
if(eventId!==Presenter.HOME_ID&&eventId!==Presenter.PREVIOUS_ID){
_context7.next=4;break}
return _context7.abrupt("return",this.askIfOkayToLeave(i18n(_templateObject71||(_templateObject71=_taggedTemplateLiteral(["d54132fd8e2fa9a6c89e8c27bc122fc2::"])))))
;case 4:return _context7.abrupt("return",!0);case 5:case"end":
return _context7.stop()}}),_callee7,this)}))),function(_x11,_x12){
return _allowNavigation3.apply(this,arguments)})},{key:"processClickedAnswer",
value:function(target){
console.debug("Process ".concat(target.tagName,":").concat(target.className))}
},{key:"areAnswersCorrect",value:function(){
return console.debug("Override markAnswers should be overridden."),!1}
}]),ProblemPresenter}(Presenter);function _addSubmitButton2(){
_classPrivateFieldSet(this,_submitButton,new ManagedElement("button",ClassName.ANSWER_SUBMIT)),
icons.applyIconToElement(icons.submitAnswer,_classPrivateFieldGet(this,_submitButton).element),
this.listenToEventOn("click",_classPrivateFieldGet(this,_submitButton),ElementId.CLICKED_SUBMIT),
this.addButtonToBar(_classPrivateFieldGet(this,_submitButton))}
function _processClickedSubmit2(){var correct=this.areAnswersCorrect()
;this.config.lesson.markProblem(_classPrivateFieldGet(this,_problem),correct?MarkState.CORRECT:MarkState.INCORRECT),
_classPrivateFieldGet(this,_submitButton).hide(),
this.showNextButton(!0),celebrator.celebrate(correct?CelebrationType_HAPPY:CelebrationType_SAD)
}
var _answerListElement=new WeakMap,_buildSimpleOrMultiple=new WeakSet,_buildAnswers=new WeakSet,_pushAnswerElementsToArray=new WeakSet,_selectAnswer=new WeakSet,_deselectAnswer=new WeakSet,_deselectAllAnswers=new WeakSet,_processAnswerState=new WeakSet,_showAnswerState=new WeakSet,ChoiceProblemPresenter=function(_ProblemPresenter){
_inherits(ChoiceProblemPresenter,_ProblemPresenter)
;var _super26=_createSuper(ChoiceProblemPresenter)
;function ChoiceProblemPresenter(config){var _this40
;return _classCallCheck(this,ChoiceProblemPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40=_super26.call(this,config)),_showAnswerState),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_processAnswerState),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_deselectAllAnswers),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_deselectAnswer),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_selectAnswer),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_pushAnswerElementsToArray),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_buildAnswers),
_classPrivateMethodInitSpec(_assertThisInitialized(_this40),_buildSimpleOrMultiple),
_classPrivateFieldInitSpec(_assertThisInitialized(_this40),_answerListElement,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this40),_buildSimpleOrMultiple,_buildSimpleOrMultiple2).call(_assertThisInitialized(_this40)),
_this40}return _createClass(ChoiceProblemPresenter,[{key:"processClickedAnswer",
value:function(element){switch(this.problem.questionType){
case QuestionType.MULTI:element.classList.toggle(ClassName.SELECTED_ANSWER)
;break;case QuestionType.SIMPLE:
var selected=element.classList.contains(ClassName.SELECTED_ANSWER)
;_classPrivateMethodGet(this,_deselectAllAnswers,_deselectAllAnswers2).call(this),
selected||_classPrivateMethodGet(this,_selectAnswer,_selectAnswer2).call(this,element)
;break;default:
console.error("Wrong presenter ".concat(this.constructor.name," being used for ").concat(this.problem.questionType))
}}},{key:"areAnswersCorrect",value:function(){var _this41=this,correct=!0
;return document.querySelectorAll(".".concat(ClassName.ANSWER)).forEach((function(element){
_classPrivateMethodGet(_this41,_processAnswerState,_processAnswerState2).call(_this41,element)||(correct=!1),
element.classList.replace("selectable","selectable-off"),
element.setAttribute("tabindex","-1")})),correct}},{key:"handleKeydownEvent",
value:function(event,eventId){
if(eventId!==ElementId.CLICKED_ANSWER)return _get(_getPrototypeOf(ChoiceProblemPresenter.prototype),"handleKeydownEvent",this).call(this,event,eventId)
;switch(event.key){case" ":case"Enter":
event.stopPropagation(),this.handleClickEvent(event,eventId)}}
}]),ChoiceProblemPresenter}(ProblemPresenter)
;function _buildSimpleOrMultiple2(){
_classPrivateMethodGet(this,_buildAnswers,_buildAnswers2).call(this),
this.autoAddKeydownEvents(this.answerElement.managedChildren)}
function _buildAnswers2(){var _this56=this
;_classPrivateFieldSet(this,_answerListElement,new ManagedElement("ul")),
this.answerElement.appendChild(_classPrivateFieldGet(this,_answerListElement)),
_classPrivateFieldGet(this,_answerListElement).setAttributes({
"aria-label":i18n(_templateObject105||(_templateObject105=_taggedTemplateLiteral(["3e67adbbda024584ca573026d35039d0::"]))),
"aria-role":this.problem.questionType===QuestionType.MULTI?"":"radiogroup"})
;var answers=[]
;_classPrivateMethodGet(this,_pushAnswerElementsToArray,_pushAnswerElementsToArray2).call(this,this.problem.rightAnswers,answers,!0),
_classPrivateMethodGet(this,_pushAnswerElementsToArray,_pushAnswerElementsToArray2).call(this,this.problem.wrongAnswers,answers,!1),
function(data){for(var count=data.length;count;){
var index=Math.floor(Math.random()*count--),_ref=[data[index],data[count]]
;data[count]=_ref[0],data[index]=_ref[1]}
}(answers),answers.forEach((function(element){
_classPrivateFieldGet(_this56,_answerListElement).appendChild(element),
_this56.listenToEventOn("click",element,ElementId.CLICKED_ANSWER),
_this56.listenToEventOn("keydown",element,ElementId.CLICKED_ANSWER)
})),setTimeout((function(){
return _classPrivateFieldGet(_this56,_answerListElement).children[0].focus()}))}
function _pushAnswerElementsToArray2(answers,destination,areRight){
var role=this.problem.questionType===QuestionType.MULTI?"checkbox":"radio"
;answers.forEach((function(value){
var element=new ManagedElement("li",ClassName.ANSWER)
;element.classList.add("selectable"),
element.innerHTML=value.html,element.setSafeAttribute(Attribute.RIGHT_OR_WRONG,areRight),
element.setAttributes({tabindex:"0","aria-role":role,"aria-checked":!1,
"aria-label":i18n(_templateObject106||(_templateObject106=_taggedTemplateLiteral(["e5f965d7cf958839a31acefa71728846::"])))
}),destination.push(element)}))}function _selectAnswer2(element){
element.setAttribute("aria-checked","true"),
element.classList.add(ClassName.SELECTED_ANSWER)}
function _deselectAnswer2(element){element.setAttribute("aria-checked","false"),
element.classList.remove(ClassName.SELECTED_ANSWER)}
function _deselectAllAnswers2(){var _this57=this
;document.querySelectorAll(".".concat(ClassName.ANSWER)).forEach((function(element){
_classPrivateMethodGet(_this57,_deselectAnswer,_deselectAnswer2).call(_this57,element)
}))}function _processAnswerState2(element){this.freezeAnswers=!0
;var answerState,elementIsCorrect="true"===ManagedElement.getSafeAttribute(element,Attribute.RIGHT_OR_WRONG).toLowerCase(),selected=element.classList.contains(ClassName.SELECTED_ANSWER)
;return answerState=elementIsCorrect?selected?AnswerSelectionState.CORRECT:AnswerSelectionState.MISSED:selected?AnswerSelectionState.INCORRECT:AnswerSelectionState.AVOIDED,
_classPrivateMethodGet(this,_showAnswerState,_showAnswerState2).call(this,element,answerState),
answerState===AnswerSelectionState.CORRECT||answerState===AnswerSelectionState.AVOIDED
}function _showAnswerState2(element,answerState){var className=""
;switch(answerState){case AnswerSelectionState.AVOIDED:
className=ClassName.AVOIDED_ANSWER;break;case AnswerSelectionState.CORRECT:
className=ClassName.CORRECT_ANSWER;break;case AnswerSelectionState.INCORRECT:
className=ClassName.INCORRECT_ANSWER;break;case AnswerSelectionState.MISSED:
className=ClassName.MISSED_ANSWER}element.classList.add(className)}
var _missingWordSelectors=new WeakMap,_missingWordCorrectAnswers=new WeakMap,_createMissingWordSelectors=new WeakSet,_showAnswerState3=new WeakSet,FillProblemPresenter=function(_ProblemPresenter2){
_inherits(FillProblemPresenter,_ProblemPresenter2)
;var _super27=_createSuper(FillProblemPresenter)
;function FillProblemPresenter(config){var _this42
;return _classCallCheck(this,FillProblemPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this42=_super27.call(this,config)),_showAnswerState3),
_classPrivateMethodInitSpec(_assertThisInitialized(_this42),_createMissingWordSelectors),
_classPrivateFieldInitSpec(_assertThisInitialized(_this42),_missingWordSelectors,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this42),_missingWordCorrectAnswers,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this42),_createMissingWordSelectors,_createMissingWordSelectors2).call(_assertThisInitialized(_this42)),
_this42.answerElement.hide(),_this42}return _createClass(FillProblemPresenter,[{
key:"areAnswersCorrect",value:function(){var _this43=this,correct=!0
;return _classPrivateFieldGet(this,_missingWordSelectors).forEach((function(selectControl,index){
var givenAnswer=selectControl.getText(),container=selectControl.parentElement
;selectControl.remove(),
container.textContent=givenAnswer,givenAnswer===_classPrivateFieldGet(_this43,_missingWordCorrectAnswers)[index]?_classPrivateMethodGet(_this43,_showAnswerState3,_showAnswerState4).call(_this43,container,AnswerSelectionState.CORRECT):(_classPrivateMethodGet(_this43,_showAnswerState3,_showAnswerState4).call(_this43,container,AnswerSelectionState.INCORRECT),
correct=!1)})),correct}}]),FillProblemPresenter}(ProblemPresenter)
;function _createMissingWordSelectors2(){
var _this58=this,questionWordElements=this.questionElement.querySelectorAll(".missing-word")
;_classPrivateFieldSet(this,_missingWordCorrectAnswers,[]),
questionWordElements.forEach((function(element){
var correctAnswer=ManagedElement.getSafeAttribute(element,"data-missing-word")
;_classPrivateFieldGet(_this58,_missingWordCorrectAnswers).push(correctAnswer)
}))
;var redHerrings=this.problem.firstWordsOfWrongAnswers,options=["..."].concat(_toConsumableArray(_classPrivateFieldGet(this,_missingWordCorrectAnswers)),_toConsumableArray(redHerrings))
;options.sort();var settingDefinition={defaultValue:"...",options:options}
;_classPrivateFieldSet(this,_missingWordSelectors,[]),
questionWordElements.forEach((function(element,index){
var selector=new SelectControl(index,settingDefinition)
;element.appendChild(selector.element),
_classPrivateFieldGet(_this58,_missingWordSelectors).push(selector)
})),this.autoAddKeydownEvents(_classPrivateFieldGet(this,_missingWordSelectors))
}function _showAnswerState4(element,answerState){var className=""
;switch(answerState){case AnswerSelectionState.AVOIDED:
className=ClassName.AVOIDED_ANSWER;break;case AnswerSelectionState.CORRECT:
className=ClassName.CORRECT_ANSWER;break;case AnswerSelectionState.INCORRECT:
className=ClassName.INCORRECT_ANSWER;break;case AnswerSelectionState.MISSED:
className=ClassName.MISSED_ANSWER}element.classList.add(className)}
var _missingWordSelectors2=new WeakMap,_missingWordCorrectAnswers2=new WeakMap,_buildOrder=new WeakSet,_showAnswerState5=new WeakSet,OrderProblemPresenter=function(_ProblemPresenter3){
_inherits(OrderProblemPresenter,_ProblemPresenter3)
;var _super28=_createSuper(OrderProblemPresenter)
;function OrderProblemPresenter(config){var _this44
;return _classCallCheck(this,OrderProblemPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this44=_super28.call(this,config)),_showAnswerState5),
_classPrivateMethodInitSpec(_assertThisInitialized(_this44),_buildOrder),
_classPrivateFieldInitSpec(_assertThisInitialized(_this44),_missingWordSelectors2,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this44),_missingWordCorrectAnswers2,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this44),_buildOrder,_buildOrder2).call(_assertThisInitialized(_this44)),
_this44}return _createClass(OrderProblemPresenter,[{key:"areAnswersCorrect",
value:function(){var _this45=this,correct=!0
;return _classPrivateFieldGet(this,_missingWordSelectors2).forEach((function(selectControl,index){
var givenAnswer=selectControl.getText(),container=selectControl.parentElement
;selectControl.remove(),
container.textContent=givenAnswer,givenAnswer===_classPrivateFieldGet(_this45,_missingWordCorrectAnswers2)[index]?_classPrivateMethodGet(_this45,_showAnswerState5,_showAnswerState6).call(_this45,container,AnswerSelectionState.CORRECT):(_classPrivateMethodGet(_this45,_showAnswerState5,_showAnswerState6).call(_this45,container,AnswerSelectionState.INCORRECT),
correct=!1)})),correct}}]),OrderProblemPresenter}(ProblemPresenter)
;function _buildOrder2(){
_classPrivateFieldSet(this,_missingWordCorrectAnswers2,this.problem.firstWordsOfRightAnswers)
;var redHerrings=this.problem.firstWordsOfWrongAnswers,options=["..."].concat(_toConsumableArray(_classPrivateFieldGet(this,_missingWordCorrectAnswers2)),_toConsumableArray(redHerrings))
;options.sort();var settingDefinition={defaultValue:"...",options:options
},orderedAnswers=new ManagedElement("div","problem-ordered-answers")
;_classPrivateFieldSet(this,_missingWordSelectors2,[])
;for(var index=0;index<this.problem.rightAnswers.length;index++){
var span=new ManagedElement("span","missing-word"),selectControl=new SelectControl(index,settingDefinition)
;_classPrivateFieldGet(this,_missingWordSelectors2).push(selectControl),
span.appendChild(selectControl),orderedAnswers.appendChild(span)}
this.answerElement.appendChild(orderedAnswers),
this.autoAddKeydownEvents(_classPrivateFieldGet(this,_missingWordSelectors2))}
function _showAnswerState6(element,answerState){var className=""
;switch(answerState){case AnswerSelectionState.AVOIDED:
className=ClassName.AVOIDED_ANSWER;break;case AnswerSelectionState.CORRECT:
className=ClassName.CORRECT_ANSWER;break;case AnswerSelectionState.INCORRECT:
className=ClassName.INCORRECT_ANSWER;break;case AnswerSelectionState.MISSED:
className=ClassName.MISSED_ANSWER}element.classList.add(className)}
var _secondsPerWord=new WeakMap,ReadSpeedCalculator=function(){
function ReadSpeedCalculator(){
var wordsPerMinute=arguments.length>0&&void 0!==arguments[0]?arguments[0]:130
;_classCallCheck(this,ReadSpeedCalculator),
_classPrivateFieldInitSpec(this,_secondsPerWord,{writable:!0,value:void 0
}),this.setWordsPerMinute(wordsPerMinute)}
return _createClass(ReadSpeedCalculator,[{key:"setWordsPerMinute",
value:function(wordsPerMinute){var wpm=parseInt(wordsPerMinute)
;isNaN(wpm)?console.error("Attempt made to set words per minute to non-numeric value of ".concat(wordsPerMinute)):(wpm=Math.max(wordsPerMinute,ReadSpeedCalculator.MIN_WPM),
wpm=Math.min(wpm,ReadSpeedCalculator.MAX_WPM),
_classPrivateFieldSet(this,_secondsPerWord,60/wpm))}},{key:"getSecondsToRead",
value:function(data){
return getPlainTextFromHtml(data).trim().split(/\s+/).length*_classPrivateFieldGet(this,_secondsPerWord)
}}]),ReadSpeedCalculator}()
;_defineProperty(ReadSpeedCalculator,"MIN_WPM",80),_defineProperty(ReadSpeedCalculator,"MAX_WPM",1e3)
;var _blocks=new WeakMap,_index2=new WeakMap,_readSpeedCalculator=new WeakMap,_splitHtml=new WeakSet,DisplayCards=function(){
function DisplayCards(_html2){
_classCallCheck(this,DisplayCards),_classPrivateMethodInitSpec(this,_splitHtml),
_classPrivateFieldInitSpec(this,_blocks,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_index2,{writable:!0,value:void 0
}),_classPrivateFieldInitSpec(this,_readSpeedCalculator,{writable:!0,
value:void 0
}),_classPrivateFieldSet(this,_blocks,_classPrivateMethodGet(this,_splitHtml,_splitHtml2).call(this,_html2)),
_classPrivateFieldSet(this,_index2,0),
_classPrivateFieldSet(this,_readSpeedCalculator,new ReadSpeedCalculator)}
return _createClass(DisplayCards,[{key:"getNext",value:function(){
if(_classPrivateFieldGet(this,_index2)<_classPrivateFieldGet(this,_blocks).length){
var _this$index3,_this$index4,html=_classPrivateFieldGet(this,_blocks)[(_classPrivateFieldSet(this,_index2,(_this$index3=_classPrivateFieldGet(this,_index2),
_this$index4=_this$index3++,_this$index3)),_this$index4)];return{html:html,
readTimeSecs:_classPrivateFieldGet(this,_readSpeedCalculator).getSecondsToRead(html)
}}return null}},{key:"hasMore",get:function(){
return _classPrivateFieldGet(this,_index2)<_classPrivateFieldGet(this,_blocks).length
}},{key:"reset",value:function(){_classPrivateFieldSet(this,_index2,0)}},{
key:"setWordsPerMinute",value:function(wpm){
_classPrivateFieldGet(this,_readSpeedCalculator).setWordsPerMinute(wpm)}
}]),DisplayCards}();function _splitHtml2(html){
for(var blocks=html.split(/(<\/(?:p|div)>)/i),result=[],iterations=Math.ceil(blocks.length/2),index=0;index<iterations;index++){
var _blocks2,tail=null!==(_blocks2=blocks[2*index+1])&&void 0!==_blocks2?_blocks2:""
;result.push("".concat(blocks[2*index]).concat(tail).trim())}
return result.filter((function(e){return e}))}var MediaClass={PAUSE:"pause",
PLAY:"play",SKIP:"skip"},MediaID={PAUSE:"pause",PLAY:"play",SKIP:"skip"
},CardState={INACTIVE:0,ARRIVING:1,READING:2,LEAVING:3
},_cards=new WeakMap,_visualCard=new WeakMap,_skipButton=new WeakMap,_playButton=new WeakMap,_pauseButton=new WeakMap,_readTimerId=new WeakMap,_cardState=new WeakMap,_currentCardDetail=new WeakMap,_paused=new WeakMap,_buildSlideShow=new WeakSet,_addMediaButtons=new WeakSet,_addButtonToButtonBar=new WeakSet,_setCardState=new WeakSet,_showNextCard=new WeakSet,_readCard=new WeakSet,_removeCard=new WeakSet,_endShowIfLastCard=new WeakSet,_showMediaButtons=new WeakSet,SlideProblemPresenter=function(_ProblemPresenter4){
_inherits(SlideProblemPresenter,_ProblemPresenter4)
;var _super29=_createSuper(SlideProblemPresenter)
;function SlideProblemPresenter(config){var _this46
;return _classCallCheck(this,SlideProblemPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46=_super29.call(this,config)),_showMediaButtons),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_endShowIfLastCard),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_removeCard),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_readCard),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_showNextCard),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_setCardState),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_addButtonToButtonBar),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_addMediaButtons),
_classPrivateMethodInitSpec(_assertThisInitialized(_this46),_buildSlideShow),
_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_cards,{writable:!0,
value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_visualCard,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_skipButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_playButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_pauseButton,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_readTimerId,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_cardState,{
writable:!0,value:CardState.INACTIVE
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_currentCardDetail,{
writable:!0,value:void 0
}),_classPrivateFieldInitSpec(_assertThisInitialized(_this46),_paused,{
writable:!0,value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this46),_buildSlideShow,_buildSlideShow2).call(_assertThisInitialized(_this46)),
_this46.submitButton.hide(),_this46}return _createClass(SlideProblemPresenter,[{
key:"presentOnStage",value:function(stageElement){var _this47=this
;return _classPrivateMethodGet(this,_showMediaButtons,_showMediaButtons2).call(this,!0),
setTimeout((function(){
return _classPrivateMethodGet(_this47,_showNextCard,_showNextCard2).call(_this47)
})),
_get(_getPrototypeOf(SlideProblemPresenter.prototype),"presentOnStage",this).call(this,stageElement)
}},{key:"handleClickEvent",value:function(event,eventId){switch(eventId){
case MediaID.PAUSE:
return clearTimeout(_classPrivateFieldGet(this,_readTimerId)),
_classPrivateMethodGet(this,_showMediaButtons,_showMediaButtons2).call(this,!1),
void _classPrivateFieldSet(this,_paused,!0);case MediaID.PLAY:
return clearTimeout(_classPrivateFieldGet(this,_readTimerId)),
_classPrivateMethodGet(this,_showMediaButtons,_showMediaButtons2).call(this,!0),
_classPrivateFieldGet(this,_cardState)===CardState.READING&&_classPrivateMethodGet(this,_removeCard,_removeCard2).call(this),
void _classPrivateFieldSet(this,_paused,!1);case MediaID.SKIP:
return clearTimeout(_classPrivateFieldGet(this,_readTimerId)),
_classPrivateMethodGet(this,_showMediaButtons,_showMediaButtons2).call(this,!0),
_classPrivateFieldGet(this,_cardState)!==CardState.ARRIVING&&_classPrivateFieldGet(this,_cardState)!==CardState.READING||_classPrivateMethodGet(this,_removeCard,_removeCard2).call(this),
void _classPrivateFieldSet(this,_paused,!1)}
_get(_getPrototypeOf(SlideProblemPresenter.prototype),"handleClickEvent",this).call(this,event,eventId)
}},{key:"handleAnimationendEvent",value:function(eventIgnored,eventIdIgnored){
switch(_classPrivateFieldGet(this,_cardState)){case CardState.ARRIVING:
_classPrivateMethodGet(this,_readCard,_readCard2).call(this);break
;case CardState.LEAVING:
_classPrivateMethodGet(this,_showNextCard,_showNextCard2).call(this);break
;default:
console.error("Animation unexpectedly ended with card in state ".concat(_classPrivateFieldGet(this,_cardState)))
}}}]),SlideProblemPresenter}(ProblemPresenter);function _buildSlideShow2(){
_classPrivateFieldSet(this,_cards,new DisplayCards(this.problem.intro.html||this.problem.question.html)),
_classPrivateFieldSet(this,_visualCard,new ManagedElement("div","display-card")),
this.listenToEventOn("animationend",_classPrivateFieldGet(this,_visualCard)),
this.questionElement.removeChildren(),
this.questionElement.appendChild(_classPrivateFieldGet(this,_visualCard)),
this.expandPresentation(),
_classPrivateMethodGet(this,_addMediaButtons,_addMediaButtons2).call(this)}
function _addMediaButtons2(){
_classPrivateFieldSet(this,_playButton,new ManagedElement("button",MediaClass.PLAY)),
_classPrivateMethodGet(this,_addButtonToButtonBar,_addButtonToButtonBar2).call(this,_classPrivateFieldGet(this,_playButton),icons.play,MediaID.PLAY),
_classPrivateFieldSet(this,_pauseButton,new ManagedElement("button",MediaClass.PAUSE)),
_classPrivateMethodGet(this,_addButtonToButtonBar,_addButtonToButtonBar2).call(this,_classPrivateFieldGet(this,_pauseButton),icons.pause,MediaID.PAUSE),
_classPrivateFieldSet(this,_skipButton,new ManagedElement("button",MediaClass.SKIP)),
_classPrivateMethodGet(this,_addButtonToButtonBar,_addButtonToButtonBar2).call(this,_classPrivateFieldGet(this,_skipButton),icons.skip,MediaID.SKIP)
}function _addButtonToButtonBar2(button,icon,eventId){
icons.applyIconToElement(icon,button.element),
this.listenToEventOn("click",button,eventId),this.addButtonToBar(button)}
function _setCardState2(cardState){switch(cardState){case CardState.ARRIVING:
_classPrivateFieldGet(this,_visualCard).classList.remove("card-offscreen"),
_classPrivateFieldGet(this,_visualCard).classList.add("card-onscreen");break
;case CardState.LEAVING:
_classPrivateFieldGet(this,_visualCard).classList.remove("card-onscreen"),
_classPrivateFieldGet(this,_visualCard).classList.add("card-offscreen")}
_classPrivateFieldSet(this,_cardState,cardState)}function _showNextCard2(){
if(console.log("Show the next card"),
_classPrivateMethodGet(this,_endShowIfLastCard,_endShowIfLastCard2).call(this))this.handleClickEvent(new Event("click"),Presenter.NEXT_ID);else{
var readingSpeed=persistentData.getFromStorage("readingSpeed",130)
;_classPrivateFieldGet(this,_cards).setWordsPerMinute(readingSpeed),
_classPrivateFieldSet(this,_currentCardDetail,_classPrivateFieldGet(this,_cards).getNext()),
_classPrivateFieldGet(this,_visualCard).innerHTML=_classPrivateFieldGet(this,_currentCardDetail).html
;var cardRect=_classPrivateFieldGet(this,_visualCard).getBoundingClientRect(),verticalSpace=this.presentation.getBoundingClientRect().height-cardRect.height
;_classPrivateFieldGet(this,_visualCard).style.marginTop=verticalSpace>0?"".concat(Math.floor(verticalSpace/2),"px"):"0px",
_classPrivateMethodGet(this,_setCardState,_setCardState2).call(this,CardState.ARRIVING),
_classPrivateMethodGet(this,_endShowIfLastCard,_endShowIfLastCard2).call(this)}}
function _readCard2(){var _this59=this
;_classPrivateMethodGet(this,_setCardState,_setCardState2).call(this,CardState.READING),
_classPrivateFieldGet(this,_paused)||_classPrivateFieldSet(this,_readTimerId,setTimeout((function(){
_classPrivateMethodGet(_this59,_removeCard,_removeCard2).call(_this59)
}),1e3*_classPrivateFieldGet(this,_currentCardDetail).readTimeSecs))}
function _removeCard2(){
_classPrivateMethodGet(this,_setCardState,_setCardState2).call(this,CardState.LEAVING)
}function _endShowIfLastCard2(){
return!_classPrivateFieldGet(this,_cards).hasMore&&(_classPrivateFieldGet(this,_pauseButton).hide(),
_classPrivateFieldGet(this,_playButton).hide(),
_classPrivateFieldGet(this,_skipButton).hide(),this.showNextButton(!0),!0)}
function _showMediaButtons2(playing){
playing?(_classPrivateFieldGet(this,_pauseButton).show(),
_classPrivateFieldGet(this,_playButton).hide(),
_classPrivateFieldGet(this,_skipButton).show(),
_classPrivateFieldGet(this,_pauseButton).focus()):(_classPrivateFieldGet(this,_pauseButton).hide(),
_classPrivateFieldGet(this,_playButton).show(),
_classPrivateFieldGet(this,_skipButton).hide(),
_classPrivateFieldGet(this,_playButton).focus())}var MedalDetails={POOR:{
upperLimit:25,cssClass:"poor"},BAD:{upperLimit:50,cssClass:"bad"},GOOD:{
upperLimit:75,cssClass:"good"},EXCELLENT:{upperLimit:100,cssClass:"excellent"}
},_marks=new WeakMap,_buildContent7=new WeakSet,_adjustButtonsForOrigin=new WeakSet,_addHeadings=new WeakSet,_addBookDetailsIfManaged=new WeakSet,_addRetryButton=new WeakSet,_addAnswers=new WeakSet,_addResult=new WeakSet,_calcMedalClass=new WeakSet,_getClassForMarkState=new WeakSet,MarksPresenter=function(_Presenter6){
_inherits(MarksPresenter,_Presenter6);var _super30=_createSuper(MarksPresenter)
;function MarksPresenter(config){var _this48
;return _classCallCheck(this,MarksPresenter),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48=_super30.call(this,config)),_getClassForMarkState),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_calcMedalClass),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_addResult),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_addAnswers),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_addRetryButton),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_addBookDetailsIfManaged),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_addHeadings),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_adjustButtonsForOrigin),
_classPrivateMethodInitSpec(_assertThisInitialized(_this48),_buildContent7),
_classPrivateFieldInitSpec(_assertThisInitialized(_this48),_marks,{writable:!0,
value:void 0
}),_classPrivateMethodGet(_assertThisInitialized(_this48),_buildContent7,_buildContent8).call(_assertThisInitialized(_this48)),
_this48}return _createClass(MarksPresenter,[{key:"next",value:function(eventId){
switch(eventId){case MarksPresenter.RETRY_LESSON_ID:
return this.config.factory.getProblemAgain(this,this.config)
;case Presenter.NEXT_ID:
if(this.config.lessonInfo.origin===LessonOrigin.SESSION)return sessionStorage.clear(),
void window.top.location.replace(window.location.href)}
return _get(_getPrototypeOf(MarksPresenter.prototype),"next",this).call(this,eventId)
}}]),MarksPresenter}(Presenter);function _buildContent8(){
_classPrivateMethodGet(this,_addHeadings,_addHeadings2).call(this),
_classPrivateMethodGet(this,_addAnswers,_addAnswers2).call(this),
_classPrivateMethodGet(this,_addResult,_addResult2).call(this),
_classPrivateMethodGet(this,_addRetryButton,_addRetryButton2).call(this),
_classPrivateMethodGet(this,_adjustButtonsForOrigin,_adjustButtonsForOrigin2).call(this)
}function _adjustButtonsForOrigin2(){switch(this.config.lessonInfo.origin){
case LessonOrigin.SESSION:
this.hideHomeButton(),this.applyIconToNextButton(icons.exit),
this.showNextButton();break;case LessonOrigin.REMOTE:
this.applyIconToNextButton(icons.selectLesson),this.showNextButton()}}
function _addHeadings2(){
var lessonTitle=this.config.lessonInfo.titles.lesson||this.config.lesson.metadata.getValue("TITLE",i18n(_templateObject107||(_templateObject107=_taggedTemplateLiteral(["80ba26f176878a8c09fed91eec1847ac::"]))))
;this.presentation.createAndAppendChild("h1",null,i18n(_templateObject108||(_templateObject108=_taggedTemplateLiteral(["8a7b5ed72835af8c2804d8f5047da3d3::"])))),
this.presentation.createAndAppendChild("h2",null,lessonTitle),
_classPrivateMethodGet(this,_addBookDetailsIfManaged,_addBookDetailsIfManaged2).call(this)
}function _addBookDetailsIfManaged2(){if(this.config.lessonInfo.managed){
var bookDetails="<p>from:</p>"
;lessonManager.usingLocalLibrary?bookDetails+="<span class='library-title'>".concat(this.config.lessonInfo.titles.library,"</span>"):bookDetails+="<span class='library-title'>".concat(this.config.lessonInfo.titles.library,"</span> \n        <span class='book-title'>").concat(this.config.lessonInfo.titles.book,"</span>\n        <span class='chapter-title'>").concat(this.config.lessonInfo.titles.chapter,"</span>"),
this.presentation.createAndAppendChild("div",null,bookDetails)}}
function _addRetryButton2(){var repeatButton=new ManagedElement("button")
;icons.applyIconToElement(icons.repeatLesson,repeatButton),
this.addButtonToBar(repeatButton),
this.listenToEventOn("click",repeatButton,MarksPresenter.RETRY_LESSON_ID)}
function _addAnswers2(){var _this60=this,answers=new ManagedElement("ul")
;this.config.lesson.marks.markedItems.forEach((function(markedItem){
var li=new ManagedElement("li")
;li.innerHTML="".concat(markedItem.item.question.plainText),
li.classList.add(_classPrivateMethodGet(_this60,_getClassForMarkState,_getClassForMarkState2).call(_this60,markedItem.state)),
answers.appendChild(li)})),this.presentation.appendChild(answers)}
function _addResult2(){
var marks=this.config.lesson.marks,totalQuestions=marks.correct+marks.incorrect+marks.skipped,percent=0==totalQuestions?0:Math.round(100*marks.correct/totalQuestions),summary=i18n(_templateObject109||(_templateObject109=_taggedTemplateLiteral(["dba099f02fa6e674228bce51535a5cc4::","","",""])),percent,marks.correct,totalQuestions)
;this.presentation.createAndAppendChild("p","result-summary",summary).classList.add(_classPrivateMethodGet(this,_calcMedalClass,_calcMedalClass2).call(this,percent))
}function _calcMedalClass2(percent){for(var key in MedalDetails){
var details=MedalDetails[key]
;if(percent<details.upperLimit)return details.cssClass}
return MedalDetails.EXCELLENT.cssClass}function _getClassForMarkState2(state){
switch(state){case MarkState.CORRECT:return"correct";case MarkState.INCORRECT:
return"incorrect";case MarkState.SKIPPED:return"skipped"}return"unknown-state"}
_defineProperty(MarksPresenter,"RETRY_LESSON_ID","RETRY_LESSON")
;var NAVIGATION={HomePresenter:{previous:null,next:LibraryPresenter},
LibraryPresenter:{previous:HomePresenter,next:BookPresenter},BookPresenter:{
previous:LibraryPresenter,next:ChapterPresenter},ChapterPresenter:{
previous:BookPresenter,next:LessonPresenter},LessonPresenter:{
previous:ChapterPresenter,next:ProblemPresenter},LessonEditorPresenter:{
previous:LessonPresenter,next:LessonPresenter},ProblemPresenter:{previous:null,
next:ProblemPresenter},ChoiceProblemPresenter:{previous:null,
next:ProblemPresenter},FillProblemPresenter:{previous:null,next:ProblemPresenter
},OrderProblemPresenter:{previous:null,next:ProblemPresenter},
SlideProblemPresenter:{previous:null,next:ProblemPresenter},MarksPresenter:{
previous:null,next:ChapterPresenter}
},_skipUnnecessaryListPresenters=new WeakSet,_moveToNextPresenterIfUnnecessary=new WeakSet,PresenterFactory=function(){
function PresenterFactory(){
_classCallCheck(this,PresenterFactory),_classPrivateMethodInitSpec(this,_moveToNextPresenterIfUnnecessary),
_classPrivateMethodInitSpec(this,_skipUnnecessaryListPresenters)}
return _createClass(PresenterFactory,[{key:"getSuitableProblemPresenter",
value:function(config){switch(config.lesson.peekAtNextProblem().questionType){
case QuestionType.ORDER:return new OrderProblemPresenter(config)
;case QuestionType.FILL:return new FillProblemPresenter(config)
;case QuestionType.MULTI:case QuestionType.SIMPLE:
return new ChoiceProblemPresenter(config);case QuestionType.SLIDE:default:
return new SlideProblemPresenter(config)}}},{key:"hasNext",
value:function(caller){return!!NAVIGATION[caller.constructor.name].next}},{
key:"hasPrevious",value:function(caller){
return!!NAVIGATION[caller.constructor.name].previous}},{key:"getHome",
value:function(config){return new HomePresenter(config)}},{key:"getEditor",
value:function(caller,config){
return caller instanceof LessonPresenter?new LessonEditorPresenter(config):(console.error("Attempt to edit a presenter for which there is no editor. Going home."),
new HomePresenter(config))}},{key:"getNext",value:function(caller,config){
if(caller instanceof ProblemPresenter||caller instanceof LessonPresenter)return config.lesson.hasMoreProblems?this.getSuitableProblemPresenter(config):new MarksPresenter(config)
;var klass=_classPrivateMethodGet(this,_skipUnnecessaryListPresenters,_skipUnnecessaryListPresenters2).call(this,NAVIGATION[caller.constructor.name].next)
;return klass?new klass(config):null}},{key:"getPrevious",
value:function(caller,config){
var klass=NAVIGATION[caller.constructor.name].previous
;return klass?new klass(config):null}},{key:"getProblemAgain",
value:function(caller,config){
return caller instanceof MarksPresenter?(config.lesson.restart(),
config.lesson.hasMoreProblems?this.getSuitableProblemPresenter(config):new MarksPresenter(config)):(console.error("Attempt to retry problem from other than a MarksPresenter."),
this.getHome(config))}},{key:"getLibraryPresenter",
value:function(callerIgnored,config){
return new(_classPrivateMethodGet(this,_skipUnnecessaryListPresenters,_skipUnnecessaryListPresenters2).call(this,LibraryPresenter))(config)
}}],[{key:"getInitial",value:function(){var config={factory:new PresenterFactory
}
;return sessionLesson.hasLesson?(config.lesson=sessionLesson.lesson,config.lessonInfo=sessionLesson.lessonInfo,
config.lesson.hasMoreProblems?config.factory.getSuitableProblemPresenter(config):new MarksPresenter(config)):new HomePresenter(config)
}}]),PresenterFactory}()
;function _skipUnnecessaryListPresenters2(presenterClass){for(;;){
var nextClass=_classPrivateMethodGet(this,_moveToNextPresenterIfUnnecessary,_moveToNextPresenterIfUnnecessary2).call(this,presenterClass)
;if(nextClass===presenterClass)return presenterClass;presenterClass=nextClass}}
function _moveToNextPresenterIfUnnecessary2(presenterClass){
switch(presenterClass.name){case"LibraryPresenter":
if(lessonManager.bookTitles.length<=1)return lessonManager.bookIndex=0,
BookPresenter;break;case"BookPresenter":
if(lessonManager.chapterTitles.length<=1)return lessonManager.chapterIndex=0,
ChapterPresenter;break;case"ChapterPresenter":
if(lessonManager.lessonTitles.length<=1)return lessonManager.lessonIndex=0,
LessonPresenter}return presenterClass}var throttleTimer=null
;function setVhCssVariable(){var vh=.01*window.innerHeight
;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))}
function showFatalError(error){
var html="<h1>Whoops!</h1>\n  <p>An error has occured from which I can't recover on my own.</p>\n  <ul>\n  <li>Name: ".concat(error.name,"</li>\n  <li>Cause: ").concat(error.cause,"</li>\n  <li>Message: ").concat(error.message,"</li>\n  </ul>\n  <p>Try reloading the application.</p>\n  ")
;console.error(error),document.getElementById("content").innerHTML=html}
function loadApplication(){
console.info("Launching application."),persistentData.setStorageKeyPrefix("LR_".concat(BuildInfo.getBundleName().replace(".","_")))
;var embeddedTranslations="undefined"!=typeof LESSON_TRANSLATIONS_B64?LESSON_TRANSLATIONS_B64:null
;return console.log("Embedded translations = ".concat(embeddedTranslations)),
getLanguages(embeddedTranslations).then((function(){
return lessonManager.loadAllLibraries("assets/lessons/libraries.json")
})).then((function(){return loadSettingDefinitions({palette:{type:"separator",
label:i18n(_templateObject42||(_templateObject42=_taggedTemplateLiteral(["54016c9d89a98aa8bf2e8a8e7ba6f352::"])))
},hue:{type:"range",
label:i18n(_templateObject43||(_templateObject43=_taggedTemplateLiteral(["d86cbd21656e6a16eeebdf3041f7d9b0::"]))),
defaultValue:DEFAULT_HUE,min:0,max:360,onupdate:function(value){setPalette({
hue:value=parseInt(value)})}},saturation:{type:"range",
label:i18n(_templateObject44||(_templateObject44=_taggedTemplateLiteral(["0b0d1a40638f299b733e0c7c90344698::"]))),
defaultValue:DEFAULT_SATURATION,min:0,max:100,onupdate:function(value){
setPalette({saturation:value=parseInt(value)})}},spread:{type:"range",
label:i18n(_templateObject45||(_templateObject45=_taggedTemplateLiteral(["c13970d8379e2f9daef71a2d63e2233d::"]))),
defaultValue:DEFAULT_COLOR_SPREAD,min:0,max:180,onupdate:function(value){
setPalette({spread:value=parseInt(value)})}},darkMode:{type:"checkbox",
label:i18n(_templateObject46||(_templateObject46=_taggedTemplateLiteral(["3924c958175e666737225e86a68ac4b4::"]))),
defaultValue:DEFAULT_DARK_MODE,onupdate:function(value){setPalette({dark:value})
}},fontSize:{type:"range",
label:i18n(_templateObject47||(_templateObject47=_taggedTemplateLiteral(["c4943062b634c56348c67fdebba808eb::"]))),
defaultValue:DEFAULT_FONT_SIZE,min:10,max:22,onupdate:function(value){
setProperty("--font-base-size","".concat(value,"px"))}},hideButtonText:{
type:"checkbox",
label:i18n(_templateObject48||(_templateObject48=_taggedTemplateLiteral(["63d171a5c8e1018a70b682bc3eca413f::"]))),
defaultValue:!1,onupdate:function(value){icons.hideText=value}},readingSpeed:{
type:"range",
label:i18n(_templateObject49||(_templateObject49=_taggedTemplateLiteral(["23944ac1bff1399fe70064067e3e4804::"]))),
defaultValue:DEFAULT_READING_SPEED,min:80,max:1e3},lessonInfo:{type:"separator",
label:i18n(_templateObject50||(_templateObject50=_taggedTemplateLiteral(["16c6a433b76133c6204c165f24374006::"])))
},library:{type:"select",
label:i18n(_templateObject51||(_templateObject51=_taggedTemplateLiteral(["b0ef546d26b0e0a6ad6a89b8f81b9170::"]))),
defaultValue:DEFAULT_LIBRARY_KEY,onupdate:function(value){
lessonManager.remoteLibraryKey=value},options:function(){
return lessonManager.remoteLibraryTitles},reloadIfChanged:!0},
showFirstUseMessage:{type:"checkbox",
label:i18n(_templateObject52||(_templateObject52=_taggedTemplateLiteral(["5bb6f06649fe039d8738eab53560e644::"]))),
defaultValue:!0}})})).then((function(){
var language=i18n(_templateObject91||(_templateObject91=_taggedTemplateLiteral(["language::"])))
;return""!==language&&(console.info("Language ".concat(language)),
document.documentElement.setAttribute("lang",language)),!0})).then((function(){
return menuItems=getMainMenuItems(),header.setup(menuItems),void footer.setup()
;var menuItems})).then((function(){return lessonManager.loadAllLibraryContent()
})).then((function(){
return toast('<span style="font-size:3rem;">&#x1F631;</span>This application is work in progress and not released yet. Things may change and things may break. Documentation may not be correct.')
})).then((function(){return function(){
if(persistentData.getFromStorage("showFirstUseMessage",!0)){
var appName=BuildInfo.getProductName(),privacyLinkLabel=i18n(_templateObject72||(_templateObject72=_taggedTemplateLiteral(["c5f29bb36f9158d2e00f5d4dc213a0ff::"]))),privacyLink="[".concat(privacyLinkLabel,"](").concat(Urls.PRIVACY,")"),message=[i18n(_templateObject73||(_templateObject73=_taggedTemplateLiteral(["a7c4b7db96ceb235072a13b2f6d0a47c::",""])),appName),i18n(_templateObject74||(_templateObject74=_taggedTemplateLiteral(["f1c6d62749c0daf6f811d81d8e81a0ac::"]))),"",i18n(_templateObject75||(_templateObject75=_taggedTemplateLiteral(["09c78e9bf1c7828280e85b6422d6e712::",""])),appName),i18n(_templateObject76||(_templateObject76=_taggedTemplateLiteral(["645a1e1fef8324f7061e6cd82b966b02::"]))),i18n(_templateObject77||(_templateObject77=_taggedTemplateLiteral(["85320d2bf19b4540dfca0365564a452e::"]))),i18n(_templateObject78||(_templateObject78=_taggedTemplateLiteral(["9c56fddb40ff68400351826fd5d07d45::"]))),i18n(_templateObject79||(_templateObject79=_taggedTemplateLiteral(["d41d8cd98f00b204e9800998ecf8427e::"]))),i18n(_templateObject80||(_templateObject80=_taggedTemplateLiteral(["a62dab340866f8adb127a1e46f48260d::"]))),i18n(_templateObject81||(_templateObject81=_taggedTemplateLiteral(["4b1efead862e496bfa2302b9f91e5bca::"]))),i18n(_templateObject82||(_templateObject82=_taggedTemplateLiteral(["4cf4f87c6d6b28c3fbae03a4293fba33::"]))),i18n(_templateObject83||(_templateObject83=_taggedTemplateLiteral(["132a6f73c02f839e6a2d24a34c1dadca::"]))),i18n(_templateObject84||(_templateObject84=_taggedTemplateLiteral(["9bd174b9a9276996e5c09a5454060925::"]))),i18n(_templateObject85||(_templateObject85=_taggedTemplateLiteral(["687f14ded82f8e827555532b3857829f::"]))),i18n(_templateObject86||(_templateObject86=_taggedTemplateLiteral(["d41d8cd98f00b204e9800998ecf8427e::"]))),i18n(_templateObject87||(_templateObject87=_taggedTemplateLiteral(["8b73f389cf0286a63a4adfb231300c05::"]))),i18n(_templateObject88||(_templateObject88=_taggedTemplateLiteral(["d41d8cd98f00b204e9800998ecf8427e::"]))),i18n(_templateObject89||(_templateObject89=_taggedTemplateLiteral(["f3d5c4e36b478dff85e2fec9c9be9a35::",""])),privacyLink)].join("\n")
;return ModalDialog.showInfo(parseMarkdown(message),i18n(_templateObject90||(_templateObject90=_taggedTemplateLiteral(["83218ac34c1834c26781fe4bde918ee4::"])))).then((function(){
return persistentData.saveToStorage("showFirstUseMessage",!1)}))}
return Promise.resolve()}()})).then((function(){
var stage=document.getElementById("stage")
;return new StageManager(stage).startShow(PresenterFactory.getInitial())
})).then((function(){
console.warn("Did not expect to get here."),ModalDialog.showInfo(i18n(_templateObject92||(_templateObject92=_taggedTemplateLiteral(["c55bdbb47fee32f4ca56a977427374bf::"])))).then((function(){
return window.location.reload()}))})).catch((function(error){
showFatalError(error),ModalDialog.showFatal(error).then((function(){
return window.location.reload()}))}))}
window.addEventListener("resize",(function(){
null===throttleTimer&&(throttleTimer=window.setTimeout((function(){
throttleTimer=null,setVhCssVariable()}),200))
})),setVhCssVariable(),window.addEventListener("load",(function(){try{
return BuildInfo.isBuilt()&&registerServiceWorker(BuildInfo.getMode()),
loadApplication()}catch(error){showFatalError(error)}}))}();