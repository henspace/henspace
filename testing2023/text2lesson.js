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
(function(){"use strict"
;if(!String.prototype.replaceAll)String.prototype.replaceAll=function stringReplaceAll(pattern,replacement){
if(pattern instanceof RegExp){
if(pattern.flags.indexOf("g")<0)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument")
;return this.replace(pattern,replacement)
}else return this.replace(new RegExp(pattern,"g"),replacement)}
;const BuildInfo={isBuilt:()=>BuildInfo.getMode().indexOf("$")<0,
getBuildDate:()=>"2023-08-24 15:45:29Z",getBundleName:()=>"text2lesson.js",
getProductName:()=>"Text2Lesson",getMode:()=>"development",
getVersion:()=>"1.0.11 "};const blockReps=[{re:/(?:(.+)\n=+\n)/g,
rep:"\n\n<h1>$1</h1>\n\n"},{re:/(?:(.+)\n-+\n)/g,rep:"\n\n<h2>$1</h2>\n\n"},{
re:/^(#+)(?: *)(.+?)(?:#*)[ \t]*$/gm,rep:(matched,hashes,txt)=>{
const level=Math.min(hashes.length,6)
;return`\n\n<h${level}>${txt.trim()}</h${level}>\n`}
},reAllLinesStartWith(">[ \t]*",{blockPrefix:"<blockquote>",
blockSuffix:"</blockquote>"}),reAllLinesStartWith("(?: {4}|\t)",{
blockPrefix:"<pre><code>",blockSuffix:"</code></pre>"}),{
re:/^(?:[*_-] *){3,}\s*$/gm,rep:"\n\n<hr>\n\n"
},reAllLinesStartWith(" {0,3}[*+-][ \t]*",{blockPrefix:"<ul>",
blockSuffix:"</ul>",linePrefix:"<li>",lineSuffix:"</li>"
}),reAllLinesStartWith(" {0,3}\\d+\\.[ \t]*",{blockPrefix:"<ol>",
blockSuffix:"</ol>",linePrefix:"<li>",lineSuffix:"</li>"}),{
re:/(?:(?:^|\n{2,})(?!<\w+>))((?:.(?:\n(?!\n))?)+)/g,rep:"\n\n<p>$1</p>\n\n"},{
re:/\n{2,}/g,rep:"\n\n"}];const spanReps=[{
re:/!\[(.*)\]\((https?:\/\/[-\w@:%.+~#=/]+)(?: +"(.*)")?\)/gm,
rep:`<img alt="$1" src="$2" title="$3"/>`},{
re:/\[(.*)\]\((https?:\/\/[-\w@:%.+~#=/]+)(?: +"(.*)")?\)/gm,
rep:`<a target="_blank" href="$2" title="$3">$1</a>`},{
re:/(?:&lt;|<)(https?:\/\/[-\w@:%.+~#=/]+)>/gm,
rep:'<a target="_blank" href="$1">$1</a>'},{
re:/(?:&lt;|<)(\w+(?:[.-]?\w+)*@\w+(?:[.-]?\w+)*(?:\.\w{2,4})+)>/gm,
rep:(match,address)=>{const encoded=encodeToEntities(address)
;return`<a href="${encoded}">${encoded}</a>`}},{
re:/(?:`{2,}(.*?)`{2,}|`(.*?)`)/gm,
rep:(match,codeA,codeB)=>`<code>${codeA??codeB}</code>`},{
re:/\*\*([^\s])(.*?)([^\s])\*\*/gm,rep:"<strong>$1$2$3</strong>"},{
re:/__([^\s])(.*?)([^\s])__/gm,rep:"<strong>$1$2$3</strong>"},{
re:/\*([^\s])(.*?)([^\s])\*/gm,rep:"<em>$1$2$3</em>"},{
re:/_([^\s])(.*?)([^\s])_/gm,rep:"<em>$1$2$3</em>"}];const markdownEscReps=[{
re:/\\([\\`*_{}[\]()#+.!-])/g,rep:(match,chr)=>encodeCharToEntity(chr)}]
;const securityReps=[{re:"\0",rep:"�"}];const htmlEscIgnoringBrReps=[{
re:/&(?![\w#]+?;)/gm,rep:"&amp;"},{re:/<(?!br>)/gim,rep:"&lt;"}]
;const htmlEscAllReps=[{re:/&(?![\w#]+?;)/gm,rep:"&amp;"},{re:/</gim,rep:"&lt;"
}];const htmlCleanUpReps=[{re:/^\s*$/gm,rep:""},{
re:/<(?:p|div)>\s*?<\/(?:p|div)>/gim,rep:""}]
;function processReplacements(data,replacements){if(!data)return data
;replacements.forEach((sub=>{data=data.replaceAll(sub.re,sub.rep)}));return data
}function reAllLinesStartWith(reStart,options){
const reBlockSearchRe=new RegExp(`(?:^|\\n)${reStart}(?:.|\\n)*?(?:(\\n(?!${reStart}))|$)`,"g")
;const lineReplacementRe=new RegExp(`^${reStart}(\\s*.*)$`,"gm")
;const lineReplacement=`${options?.linePrefix??""}$1${options?.lineSuffix??""}`
;return{re:reBlockSearchRe,
rep:match=>`\n\n${options?.blockPrefix??""}${match.replaceAll(lineReplacementRe,lineReplacement)}${options?.blockSuffix??""}\n\n`
}}function encodeCharToEntity(chr){return`&#${chr.charCodeAt(0).toString()};`}
function encodeToEntities(data){let result=""
;for(const chr of data)result+=encodeCharToEntity(chr);return result}
function parseMarkdown(data,options){var result=data.replaceAll(/\r/g,"")
;result=processReplacements(result,securityReps)
;if(options?.pre)result=processReplacements(result,options.pre)
;result=processReplacements(result,htmlEscIgnoringBrReps)
;result=processReplacements(result,markdownEscReps)
;result=processReplacements(result,blockReps)
;result=processReplacements(result,spanReps)
;result=processReplacements(result,htmlCleanUpReps)
;if(options?.post)result=processReplacements(result,options.post);return result}
function escapeHtml(data){data=processReplacements(data,securityReps)
;return processReplacements(data,htmlEscAllReps)}
function getPlainTextFromHtml(html){
return html.replace(/<[^>]*>/g,"").replace(/\s+/g," ")}
function stringToBase64(str){return window.btoa(encodeURIComponent(str))}
function base64ToString(base64){return decodeURIComponent(window.atob(base64))}
let activeTranslations=null;let fallbackTranslations=null
;function setActiveTranslations(translations){sanitiseTranslations(translations)
;if(activeTranslations)fallbackTranslations=activeTranslations
;activeTranslations=translations}function sanitiseTranslations(translations){
for(const key in translations)translations[key]=escapeHtml(translations[key])}
function completeTemplate(template,values){let defaultIndex=0
;return template.replace(/\${(.*?)}/g,((match,index)=>{index=parseInt(index)
;if(isNaN(index))index=defaultIndex++
;if(index<values.length)return values[index];else{
console.error(`Cannot find {${index}} for "${template}"`);return"${?}"}}))}
function i18n(strings,...values){const keyMatch=strings[0].match(/(\w+?)::(.*)/)
;let keyword="";let result=[];if(keyMatch){keyword=keyMatch[1]
;result.push(keyMatch[2])}else result.push(strings[0])
;let template=activeTranslations?activeTranslations[keyword]:null
;if(!template)template=fallbackTranslations?fallbackTranslations[keyword]:null
;let output;if(template)output=completeTemplate(template,values);else{
values.forEach(((value,i)=>{result.push(value);result.push(strings[i+1])}))
;output=result.join("")}return output}function getPreferredLanguages(){
return navigator.languages}function extractLanguageSubTags(languageTag){
languageTag=languageTag.toLowerCase();var language="";var extlang=""
;var script="";var region=""
;const matches=languageTag.match(/^([a-z]{2,3})(-[a-z]{3}(?:-[a-z]{3}){0,2})?(-[a-z]{4})?(-(?:[a-z]{2}|[0-9]{3}))?([-].{5,})?$/)
;if(matches){language=matches[1];extlang=matches[2]?matches[2].substring(1):""
;script=matches[3]?matches[3].substring(1):""
;region=matches[4]?matches[4].substring(1):""}return{language:language,
extlang:extlang,script:script,region:region}}
function getBestLanguageFile(preferredLanguages,availableLanguageFiles){
const availableSubTags=availableLanguageFiles.map((entry=>{
const languageTag=entry.toLowerCase().replace(/\.json$/i,"")
;return extractLanguageSubTags(languageTag)}))
;const preferredSubTags=preferredLanguages.map((entry=>extractLanguageSubTags(entry)))
;let bestMatch={weight:0,file:null}
;preferredSubTags.forEach(((prefSubTag,prefIndexIgnored)=>{
const languageIndex=preferredSubTags.findIndex((element=>element.language===prefSubTag.language))
;const prefSubTagRank=preferredSubTags.length-languageIndex
;availableSubTags.forEach(((availSubTag,availIndex)=>{let weight=0
;if(prefSubTag.language===availSubTag.language){weight+=100*prefSubTagRank
;if(prefSubTag.region!==""&&prefSubTag.region===availSubTag.region)weight+=10
;if(prefSubTag.script!==""&&prefSubTag.script===availSubTag.script)weight+=1
;if(weight>bestMatch.weight){bestMatch.weight=weight
;bestMatch.file=availableLanguageFiles[availIndex]}}}))}));return bestMatch.file
}function getBase64Translations(){return stringToBase64(JSON.stringify({
active:activeTranslations,fallback:fallbackTranslations}))}
function RGB(red,green,blue){this.red=red;this.green=green;this.blue=blue}
function HSL(hue,saturation,luminance){this.hue=hue;this.saturation=saturation
;this.luminance=luminance}function relativeLuminance(rgbColor){
const RsRGB=rgbColor.red/255;const GsRGB=rgbColor.green/255
;const BsRGB=rgbColor.blue/255
;const R=RsRGB<=.03928?RsRGB/12.92:((RsRGB+.055)/1.055)**2.4
;const G=GsRGB<=.03928?GsRGB/12.92:((GsRGB+.055)/1.055)**2.4
;const B=BsRGB<=.03928?BsRGB/12.92:((BsRGB+.055)/1.055)**2.4
;const L=.2126*R+.7152*G+.0722*B;return L*100}function isDark(rgbColor){
return relativeLuminance(rgbColor)<50}function rgbToHsl(rgbValue){
const RsRGB=rgbValue.red/255;const GsRGB=rgbValue.green/255
;const BsRGB=rgbValue.blue/255;const minChannelValue=Math.min(RsRGB,GsRGB,BsRGB)
;const maxChannelValue=Math.max(RsRGB,GsRGB,BsRGB)
;const channelRange=maxChannelValue-minChannelValue
;const luminance=(minChannelValue+maxChannelValue)/2
;if(Math.abs(channelRange)<.001)return{hue:0,saturation:0,
luminance:Math.round(luminance*100)};let saturation=0
;if(luminance<=.5)saturation=channelRange/(minChannelValue+maxChannelValue);else saturation=channelRange/(2-maxChannelValue-minChannelValue)
;let hue=0
;if(channelRange!==0)if(Math.abs(maxChannelValue-RsRGB)<.001)hue=(GsRGB-BsRGB)/channelRange;else if(Math.abs(maxChannelValue-GsRGB)<.001)hue=2+(BsRGB-RsRGB)/channelRange;else hue=4+(RsRGB-GsRGB)/channelRange
;hue*=60;if(hue<0)hue+=360;return{hue:Math.round(hue),
saturation:Math.round(saturation*100),luminance:Math.round(luminance*100)}}
function hslToRgb(hslValue){const S=hslValue.saturation/100
;const L=hslValue.luminance/100;const C=(1-Math.abs(2*L-1))*S
;const Htick=hslValue.hue/60;const X=C*(1-Math.abs(Htick%2-1));let RGBtick={}
;if(0<=Htick&&Htick<1)RGBtick={red:C,green:X,blue:0};else if(Htick<2)RGBtick={
red:X,green:C,blue:0};else if(Htick<3)RGBtick={red:0,green:C,blue:X
};else if(Htick<4)RGBtick={red:0,green:X,blue:C};else if(Htick<5)RGBtick={red:X,
green:0,blue:C};else RGBtick={red:C,green:0,blue:X};const m=L-C/2
;return new RGB(Math.round(255*(RGBtick.red+m)),Math.round(255*(RGBtick.green+m)),Math.round(255*(RGBtick.blue+m)))
}function getDarker(rgbColor,delta){const hslColor=rgbToHsl(rgbColor)
;hslColor.luminance-=delta;hslColor.luminance=Math.max(hslColor.luminance,0)
;return hslToRgb(hslColor)}function getLighter(rgbColor,delta){
const hslColor=rgbToHsl(rgbColor);hslColor.luminance+=delta
;hslColor.luminance=Math.min(hslColor.luminance,100);return hslToRgb(hslColor)}
function getContrast$1(rgbColorA,rgbColorB){
const relLuminanceA=relativeLuminance(rgbColorA)/100
;const relLuminanceB=relativeLuminance(rgbColorB)/100
;const contrast=(relLuminanceA+.05)/(relLuminanceB+.05)
;return contrast<1?1/contrast:contrast}
function ensureContrast(rgbColor,rgbColorReference,minContrast){
const refIsDark=isDark(rgbColorReference);const deltaL=5
;let loopLimit=Math.floor(100/deltaL)
;while(loopLimit--&&getContrast$1(rgbColor,rgbColorReference)<minContrast)rgbColor=refIsDark?getLighter(rgbColor,deltaL):getDarker(rgbColor,deltaL)
;return rgbColor}function shiftHue(rgbValue,degrees){
const hsl=rgbToHsl(rgbValue);hsl.hue;hsl.hue+=degrees;hsl.hue%=360
;if(hsl.hue<0)hsl.hue+=360;return hslToRgb(hsl)}function rgbToCss(rgbColor){
return`rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`}
const root=document.querySelector(":root")
;function setProperty(propertyName,propertyValue){
root.style.setProperty(propertyName,propertyValue)}
function PaletteEntry(base,contrast,highlight){this.base=base
;this.contrast=contrast;this.highlight=highlight}function Palette(config){
this.primary=config.primary;this.secondary=config.secondary
;this.tertiary=config.tertiary;this.background=config.background
;this.window=config.window;this.error=config.error}
function getContrast(rgbColor){if(isDark(rgbColor))return{red:255,green:255,
blue:255};else return{red:0,green:0,blue:0}}function getPaletteEntry(rgbColor){
const tintShadeAdjustment=10;let highlight
;if(isDark(rgbColor))highlight=getLighter(rgbColor,tintShadeAdjustment);else highlight=getDarker(rgbColor,tintShadeAdjustment)
;const contrastColor=getContrast(rgbColor)
;rgbColor=ensureContrast(rgbColor,contrastColor,7.5)
;return new PaletteEntry(rgbColor,contrastColor,highlight)}
function createPalette(settings){
const primaryHsl=new HSL(settings.hue,settings.saturation,settings.dark?70:30)
;const primaryRgb=hslToRgb(primaryHsl);const colors=[primaryRgb]
;let complementA=shiftHue(primaryRgb,settings.spread)
;let complementB=shiftHue(primaryRgb,-settings.spread)
;colors.push(complementA,complementB);colors.sort(((a,b)=>{
const relLuminanceA=relativeLuminance(a)
;const relLuminanceB=relativeLuminance(b)
;if(relLuminanceA>relLuminanceB)return 1;else if(relLuminanceA<relLuminanceB)return-1
;return 0}));colors[0]=getDarker(colors[0],5);colors[2]=getLighter(colors[0],5)
;const errorHsl=new HSL(0,settings.saturation,50)
;const backgroundHsl=new HSL(settings.hue,0,settings.dark?5:95)
;const windowHsl=new HSL(settings.hue,0,settings.dark?0:100)
;return new Palette({primary:getPaletteEntry(primaryRgb),
secondary:getPaletteEntry(complementA),tertiary:getPaletteEntry(complementB),
background:getPaletteEntry(hslToRgb(backgroundHsl)),
window:getPaletteEntry(hslToRgb(windowHsl)),
error:getPaletteEntry(hslToRgb(errorHsl))})}
function setCssFromPaletteEntry(key,paletteEntry){
for(const subkey in paletteEntry){
(relativeLuminance(paletteEntry.base)+.05)/(relativeLuminance(paletteEntry.contrast)+.05)
;setProperty(`--${key}-${subkey}`,rgbToCss(paletteEntry[subkey]))}}
function setCssFromPalette(palette){
for(const entryKey in palette)setCssFromPaletteEntry(entryKey,palette[entryKey])
}function fetchJson(url){return fetchFile(url,"json")}function fetchText(url){
return fetchFile(url,"text")}function fetchFile(url,responseType){
console.debug(`Fetch ${url}`);return fetch(url).then((response=>{
if(!response.ok)return Promise.reject(new Error(`${response.status}: ${response.statusText}; ${url}`))
;if(responseType.toLocaleLowerCase()==="json")return response.json()
;return response.text()}))}class CachedLesson{#info;#content
;constructor(info,content){this.#info=info;this.#content=content}
set content(content){this.#content=content}get content(){return this.#content}
get info(){return this.#info}static clone(other){
const cloned=new CachedLesson(null);cloned.#info={...other.info}
;cloned.#content=other.content;return cloned}}class ManagedElement{#element
;#listeningTargets;#managedChildren;#elementRemovable
;constructor(tagOrElement,className){if(tagOrElement instanceof Element){
this.#element=tagOrElement;this.#elementRemovable=false}else{
this.#element=document.createElement(tagOrElement);this.#elementRemovable=true}
if(className)this.#element.className=className;this.#listeningTargets=[]
;this.#managedChildren=[]}static getElement(item){
return item instanceof ManagedElement?item.element:item}static $(item){
return item instanceof ManagedElement?item.element:item}get element(){
return this.#element}get $(){return this.#element}get disabled(){
return this.#element.disabled}set disabled(value){this.#element.disabled=value}
get id(){return this.#element.id}set id(value){this.#element.id=value}
get managedChildren(){return this.#managedChildren}get classList(){
return this.#element.classList}get className(){return this.#element.className}
set className(value){this.#element.className=value}get checked(){
return this.#element.checked}set checked(state){this.#element.checked=state}
get children(){return this.#element.children}get innerHTML(){
return this.#element.innerHTML}set innerHTML(data){this.#element.innerHTML=data}
get lastElementChild(){return this.#element.lastElementChild}get offsetHeight(){
return this.#element.offsetHeight}get offsetWidth(){
return this.#element.offsetWidth}get parentElement(){
return this.#element.parentElement}get style(){return this.#element.style}
get tagName(){return this.#element.tagName}get textContent(){
return this.#element.textContent}set textContent(data){
this.#element.textContent=data}get value(){return this.#element.value}
set value(data){this.#element.value=data}appendChild(managedElement){
this.#element.appendChild(managedElement.element)
;this.#managedChildren.push(managedElement);return managedElement}
appendChildTo(managedElement,parent){
parent.appendChild(managedElement.element??managedElement)
;this.#managedChildren.push(managedElement)}appendTo(parent){
parent.appendChild(this.#element)}createAndAppendChild(tagName,cssClass,html){
const managedElement=new ManagedElement(tagName)
;if(cssClass)managedElement.classList.add(cssClass)
;if(html)managedElement.innerHTML=html;this.appendChild(managedElement)
;return managedElement}static decodeString(value){return base64ToString(value)}
static encodeString(value){return stringToBase64(value)}dispatchEvent(event){
return this.#element.dispatchEvent(event)}fadeOut(){
this.#element.classList.remove("fade-in")
;this.#element.classList.add("fade-out")}fadeIn(){
this.#element.classList.remove("fade-out")
;this.#element.classList.add("fade-in")}focus(){this.#element.focus()}
getBoundingClientRect(){return this.#element.getBoundingClientRect()}
static getSafeAttribute(element,name){
return ManagedElement.decodeString(element.getAttribute(name))}
handleEvent(event){
console.debug(`Event ${event.type} fired on <${event.currentTarget.tagName}>: class ${event.target.className}.`)
;const handlerName="handle"+event.type.charAt(0).toUpperCase()+event.type.substring(1)+"Event"
;const eventId=event.currentTarget.getAttribute("data-event-id")
;this[handlerName]?.(event,eventId)}hide(){this.#element.style.display="none"}
insertChildAtTop(managedElement){
this.#element.insertBefore(managedElement.element??managedElement,this.#element.firstChild)
;this.#managedChildren.push(managedElement);return managedElement}
listenToOwnEvent(eventType,eventIdOrHandler){
this.listenToEventOn(eventType,this,eventIdOrHandler)}
listenToEventOn(eventType,target,eventIdOrHandler){
if(!(target instanceof ManagedElement))throw new Error("Expect ManagedElement")
;this.#listeningTargets.push({managedElement:target,eventType:eventType})
;if(eventIdOrHandler instanceof Function)target.$.addEventListener(eventType,eventIdOrHandler);else{
if(eventIdOrHandler!==null&&eventIdOrHandler!==void 0)target.setAttribute("data-event-id",eventIdOrHandler)
;target.$.addEventListener(eventType,this)}}querySelector(selectors){
return this.#element.querySelector(selectors)}querySelectorAll(selectors){
return this.#element.querySelectorAll(selectors)}remove(){this.removeListeners()
;this.removeChildren();if(this.#elementRemovable)this.#element.remove()}
removeChildren(){this.#managedChildren.forEach((child=>{child.remove()}))
;this.#managedChildren=[]
;while(this.#element.firstChild)this.#element.removeChild(this.#element.lastChild)
}removeListeners(){this.#listeningTargets.forEach((target=>{
const element=target.managedElement.element
;element.removeEventListener(target.eventType,this)}))
;this.#managedChildren.forEach((child=>{child.removeListeners()}))
;this.#listeningTargets=[]}setSafeAttribute(name,value){
this.#element.setAttribute(name,ManagedElement.encodeString(value))}
setAttribute(name,value){return this.#element.setAttribute(name,value)}show(){
this.#element.style.display="unset"}getSafeAttribute(name){
return ManagedElement.decodeString(this.#element.getAttribute(name))}
setAttributes(attributes){for(const key in attributes){
const value=attributes[key]
;if(value!=null&&value!=void 0&&value!=="")this.#element.setAttribute(key,value)
}}}const HTML_SEMANTIC_ROLES={A:"link",BUTTON:"button"};class IconGenerator{
#cache=new Map;#hideText;get hideText(){return this.#hideText}
set hideText(value){this.#hideText=value}#getIconHtml(key){
if(!this.#cache.has(key)){
let cssValue=getComputedStyle(document.documentElement).getPropertyValue(key)
;cssValue=cssValue.trim()
;this.#cache.set(key,cssValue.substring(1,cssValue.length-1).replace(/\\"/g,`"`))
}return this.#cache.get(key)??"!?"}get addLesson(){return{
content:this.#getIconHtml("--icon-add-lesson-html"),
accessibleName:i18n`d6e44bc735e33192ee2ddce4af2f2be6::`}}get back(){return{
content:this.#getIconHtml("--icon-back-nav-html"),
accessibleName:i18n`0557fa923dcee4d0f86b1409f5c2167f::`}}get cancel(){return{
content:this.#getIconHtml("--icon-cancel-html"),
accessibleName:i18n`ea4788705e6873b424c65e91c2846b19::`}}get closeEditor(){
return{content:this.#getIconHtml("--icon-close-editor-html"),
accessibleName:i18n`218ed7e6bf7ff30555652c87feff7cd7::`}}get closeMenu(){return{
content:this.#getIconHtml("--icon-close-menu-html"),
accessibleName:i18n`68f18f6b55f955ad05e4a174341bf3f1::`}}get delete(){return{
content:this.#getIconHtml("--icon-delete-html"),
accessibleName:i18n`f2a6c498fb90ee345d997f888fce3b18::`}}get edit(){return{
content:this.#getIconHtml("--icon-edit-html"),
accessibleName:i18n`7dce122004969d56ae2e0245cb754d35::`}}get error(){return{
content:this.#getIconHtml("--icon-error-html"),
accessibleName:i18n`64d2cc43035360eddf790efbef5ddb30::`}}get exit(){return{
content:this.#getIconHtml("--icon-exit-html"),
accessibleName:i18n`cfce38c3725a96fb69d437d1f6af351c::`}}get export(){return{
content:this.#getIconHtml("--icon-export-html"),
accessibleName:i18n`3a7ff7e7931df81408c4e1465364c699::`}}get exportAutoRun(){
return{content:this.#getIconHtml("--icon-export-autorun-html"),
accessibleName:i18n`65b03512ff197b6b8899ba755db630f9::`}}get fatal(){return{
content:this.#getIconHtml("--icon-fatal-html"),
accessibleName:i18n`64d2cc43035360eddf790efbef5ddb30::`}}get flag(){return{
content:this.#getIconHtml("--icon-flagged-html"),
accessibleName:i18n`c5836008c1649301e29351a55db8f65c::`}}get openFolder(){
return{content:this.#getIconHtml("--icon-open-folder-html"),
accessibleName:i18n`a6e75eb31dc77e8d077fb6f92909e191::`}}get forward(){return{
content:this.#getIconHtml("--icon-forward-nav-html"),
accessibleName:i18n`67d2f6740a8eaebf4d5c6f79be8da481::`}}get help(){return{
content:this.#getIconHtml("--icon-help-html"),
accessibleName:i18n`6a26f548831e6a8c26bfbbd9f6ec61e0::`}}get home(){return{
content:this.#getIconHtml("--icon-home-html"),
accessibleName:i18n`8cf04a9734132302f96da8e113e80ce5::`}}get import(){return{
content:this.#getIconHtml("--icon-import-html"),
accessibleName:i18n`28dd16bcceda4431550c96dfc257dd22::`}}get info(){return{
content:this.#getIconHtml("--icon-info-html"),
accessibleName:i18n`c5836008c1649301e29351a55db8f65c::`}}get selectLesson(){
return{content:this.#getIconHtml("--icon-lesson-html"),
accessibleName:i18n`666258634f2ea689eac1e01b184a3cea::`}}get library(){return{
content:this.#getIconHtml("--icon-library-html"),
accessibleName:i18n`d6e5c296474cad126efdfa515a47f1f8::`}}get load(){return{
content:this.#getIconHtml("--icon-load-html"),
accessibleName:i18n`74540c79e377bea903e1023a46df5574::`}}get nextProblem(){
return{content:this.#getIconHtml("--icon-next-problem-html"),
accessibleName:i18n`a0bfb8e59e6c13fc8d990781f77694fe::`}}get no(){return{
content:this.#getIconHtml("--icon-no-html"),
accessibleName:i18n`bafd7322c6e97d25b6299b5d6fe8920b::`}}get ok(){return{
content:this.#getIconHtml("--icon-ok-html"),
accessibleName:i18n`e0aa021e21dddbd6d8cecec71e9cf564::`}}get pause(){return{
content:this.#getIconHtml("--icon-pause-html"),
accessibleName:i18n`105b296a83f9c105355403f3332af50f::`}}get play(){return{
content:this.#getIconHtml("--icon-play-html"),
accessibleName:i18n`de3c731be5633838089a07179d301d7b::`}}get playLesson(){
return{content:this.#getIconHtml("--icon-play-html"),
accessibleName:i18n`afd061e2316f7ab6f934ef5b43f994b6::`}}get privacy(){return{
content:this.#getIconHtml("--icon-privacy-html"),
accessibleName:i18n`c5f29bb36f9158d2e00f5d4dc213a0ff::`}}get question(){return{
content:this.#getIconHtml("--icon-question-html"),
accessibleName:i18n`c5836008c1649301e29351a55db8f65c::`}}get repeatLesson(){
return{content:this.#getIconHtml("--icon-repeat-lesson-html"),
accessibleName:i18n`87a0a633db4ae5246df7ebf3e417a805::`}}get resetToFactory(){
return{content:this.#getIconHtml("--icon-reset-to-factory-html"),
accessibleName:i18n`5dcd7aaf263cdf5f7d1de6aa2264e29f::`}}get save(){return{
content:this.#getIconHtml("--icon-save-html"),
accessibleName:i18n`35d29613e7c8ecabf12dfa188ab862f8::`}}get settings(){return{
content:this.#getIconHtml("--icon-settings-html"),
accessibleName:i18n`f4f70727dc34561dfde1a3c529b6205c::`}}get skip(){return{
content:this.#getIconHtml("--icon-skip-html"),
accessibleName:i18n`72ef2b9b6965d078e3c7f95487a82d1c::`}}get submitAnswer(){
return{content:this.#getIconHtml("--icon-submit-answer-html"),
accessibleName:i18n`4e095ee5de137300bfa0042a6b442b0e::`}}get openMenu(){return{
content:this.#getIconHtml("--icon-open-menu-html"),
accessibleName:i18n`64d2cc43035360eddf790efbef5ddb30::`}}get warning(){return{
content:this.#getIconHtml("--icon-warning-html"),
accessibleName:i18n`64d2cc43035360eddf790efbef5ddb30::`}}get yes(){return{
content:this.#getIconHtml("--icon-yes-html"),
accessibleName:i18n`93cba07454f06a4a960172bbd6e2a435::`}}
semanticsAddressRole(element,role){if(!role)return true
;const htmlSemanticRole=HTML_SEMANTIC_ROLES[element.tagName]
;return htmlSemanticRole[element.tagName]==role}
applyIconToElement(icon,item,options={}){
const hideText=options.hideText??this.#hideText
;const label=options.overrideText??icon.accessibleName
;const element=ManagedElement.getElement(item)
;const role=options.role?.toLowerCase();element.innerHTML=icon.content
;if(icon.accessibleName&&!hideText)element.innerHTML+=`&nbsp;${label}`;else element.title=label
;if(this.semanticsAddressRole(element,role)){
if(options.hideText)element.setAttribute("aria-label",label);return}
element.setAttribute("role",role);element.setAttribute("aria-label",label)}}
const icons=new IconGenerator;class FocusManager{constructor(){
window.addEventListener("focus",(event=>{
console.debug(`Window has focus. Restore focus to active element. Active element ${document.activeElement.tagName} ${document.activeElement.className}`,document.activeElement,event.relatedTarget)
;if(document.activeElement!==document.body)document.activeElement.focus();else this.findBestFocus()
}))}focusWithin(containingElement=document.body){
const element=containingElement.element??containingElement
;const candidates=element.querySelectorAll("button,select,input,.selectable")
;for(const candidate of candidates.values())if(candidate.style.display!=="none"&&candidate.style.visibility!=="hidden"){
candidate.focus();return true}
console.debug(`Couldn't find anything to focus on within ${element?.tagName}:${element?.className}`)
;return false}findBestFocus(){
let element=document.querySelector(".selectable.always-on-top");if(element){
element.focus();return}element=document.querySelector(".modal")
;if(element)this.focusWithin(element);else{
element=document.querySelector("#content");this.focusWithin(element)}}
setFocus(element){element.focus();return document.activeElement===element}}
const focusManager=new FocusManager;class Toast extends ManagedElement{
constructor(message,rawHtml){super("div","utils-toast")
;this.classList.add("selectable","always-on-top");this.setAttributes({
"aria-role":"alert",tabindex:"0"})
;const content=new ManagedElement("div","container")
;const icon=new ManagedElement("div")
;icons.applyIconToElement(icons.closeMenu,icon.element,{hideText:true})
;this.appendChild(content);this.appendChild(icon)
;if(rawHtml)content.innerHTML=message;else content.textContent=message
;this.listenToOwnEvent("click","");this.listenToOwnEvent("keydown","")}
#dismiss(){this.style.opacity=0;this.remove();focusManager.findBestFocus()}
handleClickEvent(eventIgnored){this.#dismiss()}handleKeydownEvent(event){
console.debug(`Key ${event.key}`)
;if(event.key==="Escape"||event.key===" "||event.key==="Enter")this.#dismiss()}}
function toast(message){const toast=new Toast(message,true)
;document.body.appendChild(toast.element);setTimeout((()=>{
toast.style.top="45vh";toast.focus()}))}class DataStoreManager{#storage
;#keyPrefix="app";constructor(storage){this.#storage=storage}
createStorageKey(key){return`${this.#keyPrefix}${key}`}
getFromStorage(key,defaultValue){key=this.createStorageKey(key)
;const value=this.#storage.getItem(key);if(value)try{
const parsedValue=JSON.parse(value)
;if(parsedValue===null||parsedValue===void 0)return defaultValue;else return parsedValue
}catch(error){console.error(error)}return defaultValue}saveToStorage(key,value){
key=this.createStorageKey(key);try{
this.#storage.setItem(key,JSON.stringify(value))}catch(error){
toast(i18n`e6b3e01861eefd23bb3caa9acd6d0c42::${error.message}`)}return}
removeFromStorage(key){key=this.createStorageKey(key)
;this.#storage.removeItem(key)}setStorageKeyPrefix(prefix){
this.#keyPrefix=prefix}}const persistentData=new DataStoreManager(localStorage)
;const rootUrl=window.location.href.replace(/index\.html(\?.*)?$/,"")
;const mdExtension=window.location.host.match(/^127\.0\.0\.1:808[0-2]/)?"md":"html"
;const Urls={LOGO:"assets/images/logo.png",
HELP:`${rootUrl}assets/docs/help.${mdExtension}`,
PRIVACY:`${rootUrl}assets/docs/privacy.${mdExtension}`};class LocalLibrary{
static LOCAL_LIBRARY_KEY="LOCAL_LIBRARY"
;static LOCAL_LIBRARY_INDEX_KEY="LOCAL_LIBRARY_INDEX"
;static LOCAL_LESSON_KEY_PREFIX="LocalLesson_"
;static NUMBER_OF_INITIAL_LESSONS=4;#key;#title;#contentLoader;constructor(){
this.#key=LocalLibrary.LOCAL_LIBRARY_KEY
;this.#title=i18n`72393b3cb338d9556ecd072e26907479::`
;this.#contentLoader=()=>this.#getLibraryContent()}get key(){return this.#key}
get info(){return{title:this.#title,contentLoader:this.#contentLoader}}
#getDefaultLessonKeys(){const indexes=[]
;for(let index=0;index<LocalLibrary.NUMBER_OF_INITIAL_LESSONS;index++)indexes.push(index)
;return indexes}#getLessonKeys(){
return persistentData.getFromStorage(LocalLibrary.LOCAL_LIBRARY_INDEX_KEY,this.#getDefaultLessonKeys())
}#saveLessonKeys(keys){
persistentData.saveToStorage(LocalLibrary.LOCAL_LIBRARY_INDEX_KEY,keys)}
#getLibraryContent(){const book={title:i18n`c025e43a825a053fc668cef35cfa9ef5::`,
location:"",chapters:[{title:i18n`8fe1f2e455ff223c81a6441733982773::`,lessons:[]
}]};const lessonKeys=this.#getLessonKeys();lessonKeys.forEach((key=>{
const localLesson=this.#loadLocalLesson(key);book.chapters[0].lessons.push({
title:localLesson.title,contentLoader:()=>localLesson.content})}));return[book]}
#getStorageKeyForLessonKey(key){
return`${LocalLibrary.LOCAL_LESSON_KEY_PREFIX}${key}`}#loadLocalLesson(key){
const lessonHelpLink=`[How to write lessons](${Urls.HELP})`
;const defaultLesson={title:i18n`3e485231bbe46dac20bd0ed40c513dd7::`,
content:i18n`0c61e973e1e23347be794197b57f91ab::${lessonHelpLink}`}
;return persistentData.getFromStorage(this.#getStorageKeyForLessonKey(key),defaultLesson)
}saveLocalLessonAtIndex(index,localLesson){const keys=this.#getLessonKeys()
;if(index<0||index>=keys.length){
console.error(`Attempt to store to index ${index} ignored.`);return}
const key=keys[index]
;persistentData.saveToStorage(this.#getStorageKeyForLessonKey(key),localLesson)}
#getFreeKey(){const indexes=this.#getLessonKeys();indexes.sort()
;for(let n=0;n<indexes.length-1;n++)if(indexes[n+1]-indexes[n]>1)return indexes[n]+1
;return indexes[indexes.length-1]+1}addNewLessonSlot(){
const key=this.#getFreeKey();const keys=this.#getLessonKeys();keys.push(key)
;this.#saveLessonKeys(keys)}deleteLessonAtIndex(index){
const keys=this.#getLessonKeys();const key=keys[index];if(key!=void 0){
console.debug(`Removing lesson storage index: ${index}; key:${key}`)
;persistentData.removeFromStorage(this.#getStorageKeyForLessonKey(key))
;keys.splice(index,1);this.#saveLessonKeys(keys)}}}
function escapeAttribute(content){return stringToBase64(content)}
function getErrorAttributeHtml(message){
return`data-error="${escapeAttribute(message)}"`}const PREDEFINED_EMOJIS={
GRINNING:"&#x1F600;",")":"@GRINNING","-)":"@GRINNING",SMILEY:"@GRINNING",
SMILING:"@GRINNING",HAPPY:"@GRINNING",WORRIED:"&#x1F61F;",SAD:"@WORRIED",
LAUGHING:"&#x1F602;",LAUGH:"@LAUGHING",CRYING:"&#x1F622;",TEAR:"@CRYING",
FROWNING:"&#x1F641;","(":"@FROWNING","-(":"@FROWNING",NEUTRAL:"&#x1F610;",
ANGRY:"&#x1F620;",GRUMPY:"@ANGRY",WINK:"&#x1F609;",WINKY:"@WINK",
WINKING:"@WINK",WARNING:"&#x26A0;&#xFE0F;",ALERT:"@WARNING",ERROR:"@WARNING",
"WHITE-QUESTION-MARK":"&#x2754;"};function getEmojiHtml(originalDefinition){
if(!originalDefinition)return" "
;const definition=originalDefinition.toUpperCase()
;if(definition.startsWith("U+"))return definition.replaceAll(/U\+([A-F0-9]+)/g,"&#x$1;");else{
let code=PREDEFINED_EMOJIS[definition]
;if(code?.startsWith("@"))code=PREDEFINED_EMOJIS[code.substring(1)];if(!code){
const errorAttribute=getErrorAttributeHtml(i18n`5da57f8cd9336099a601a9cb7b512982::${originalDefinition}`)
;return`<span ${errorAttribute}>${PREDEFINED_EMOJIS["WHITE-QUESTION-MARK"]}</span>`
}return code}}
const SAFE_CLASSES=["big","bigger","biggest","small","smaller","smallest"]
;function makeClassSafe(requestedClass){if(!requestedClass)return""
;const index=SAFE_CLASSES.indexOf(requestedClass.toLowerCase())
;return index<0?"":SAFE_CLASSES[index]}class TrackedReplacements{#missingWords
;#replacements;get missingWords(){return[...this.#missingWords]}
get replacements(){return this.#replacements}constructor(metadata){
this.#missingWords=[];const tracker=this;this.#replacements=[{re:/\\>/g,
rep:"&gt;"},getItemReplacement("[.]{3}",((match,startChr,word)=>{
tracker.#missingWords.push(word)
;return`${startChr}<span class="missing-word" data-missing-word="${ManagedElement.encodeString(word)}"></span>`
})),getItemReplacement("emoji:",((match,startChr,word,emojiClass)=>{
let requiredClasses="emoji";emojiClass=makeClassSafe(emojiClass)
;if(emojiClass)requiredClasses=`${requiredClasses} ${emojiClass}`
;return`${startChr}<span class="${requiredClasses}">${getEmojiHtml(word)}</span>`
})),getItemReplacement("meta:",((match,startChr,word)=>{
const metavalue=metadata?.getValue(word);if(!metavalue){
const errorAttribute=getErrorAttributeHtml(i18n`20f59a970faebddc0d41220837f3b4ad::${word}`)
;return`${startChr}<span ${errorAttribute}>${word}</span>`}
return`${startChr}${metavalue}`}))]}}class TextItem{static#isConstructing=false
;#html="";#missingWords=[];#metadata;constructor(metadata){
if(!TextItem.#isConstructing)throw new Error("Private constructor. Use createTextItem")
;this.#metadata=metadata}get html(){return this.#html}get plainText(){
const elidedHtml=this.#html.replace(/<(?:[^>]*missing-word[^>]*)>/g,"...")
;return getPlainTextFromHtml(elidedHtml)}get missingWords(){
return this.#missingWords}static createFromSource(source,metadata){
TextItem.#isConstructing=true;const textItem=new TextItem
;TextItem.#isConstructing=false;if(source){
const tracker=new TrackedReplacements(metadata)
;textItem.#html=parseMarkdown(source,{post:tracker.replacements})
;textItem.#missingWords=tracker.missingWords}return textItem}get firstWord(){
const match=this.#html?.match(/^(?:\s*(?:<\/?[^\r\n\f\t]*?>)*\s*)*([^\s<]*)/)
;if(match)return match[1];else return""}}
function getItemReplacement(prefix,replace){const startCapture="(^|[ >])"
;const wordCapture="((?:&#?[a-zA-Z0-9]+?;|[^\\s<>])+?)?"
;const classCapture="(?:>([a-zA_Z]*))?"
;const endLookAhead="(?=[\\s,;:.?!]|$|</.+?>)"
;const re=new RegExp(`${startCapture}${prefix}${wordCapture}${classCapture}${endLookAhead}`,"gmi")
;return{re:re,rep:replace}}class Metadata{static#isConstructing=false
;#map=new Map;constructor(){
if(!Metadata.#isConstructing)throw new Error("Private constructor. Use createMetaData")
}getValue(key,defaultValue){const value=this.#map.get(key.toUpperCase())
;return value??defaultValue}static createFromSource(source){
Metadata.#isConstructing=true;const metadata=new Metadata
;Metadata.#isConstructing=false;const lines=source.split("\n")
;lines.forEach((element=>{
const match=element.match(/^\s*(\w+)\s*[:;.]-?\s*(.*?)\s*$/)
;if(match)metadata.#map.set(match[1].toUpperCase(),escapeHtml(match[2]))}))
;return metadata}}const QuestionType={SIMPLE:"simple",MULTI:"multi",FILL:"fill",
ORDER:"order",SLIDE:"slide"};class Problem{#intro;#question;#explanation
;#rightAnswers;#wrongAnswers;#questionType=QuestionType.SLIDE;constructor(){}
get intro(){return this.#intro}set intro(value){this.#intro=value}
get question(){return this.#question}set question(value){this.#question=value
;this.#deriveQuestionType()}get explanation(){return this.#explanation}
set explanation(value){this.#explanation=value}get rightAnswers(){
return this.#rightAnswers}set rightAnswers(value){this.#rightAnswers=value
;this.#deriveQuestionType()}get wrongAnswers(){return this.#wrongAnswers}
get firstWordsOfWrongAnswers(){return this.#extractFirstWords(this.wrongAnswers)
}get firstWordsOfRightAnswers(){
return this.#extractFirstWords(this.rightAnswers)}#extractFirstWords(data){
const words=[];data.forEach((textItem=>{words.push(textItem.firstWord)}))
;return words}set wrongAnswers(value){this.#wrongAnswers=value
;this.#deriveQuestionType()}get questionType(){return this.#questionType}
#deriveQuestionType(){if(!this.#question?.html)return QuestionType.SLIDE
;if(this.#isOrderQuestion())this.#questionType=QuestionType.ORDER;else if(this.#isFillQuestion())this.#questionType=QuestionType.FILL;else if(this.#isMultiQuestion())this.#questionType=QuestionType.MULTI;else if(this.#isSimpleQuestion())this.#questionType=QuestionType.SIMPLE;else this.#questionType=QuestionType.SLIDE
}#isSimpleQuestion(){
return this.#rightAnswers?this.#rightAnswers.length===1:false}
#isMultiQuestion(){return this.#rightAnswers?this.#rightAnswers.length>1:false}
#isFillQuestion(){if(this.#question.missingWords.length===0)return false
;for(const content of this.#question.missingWords)if(!content)return false
;return true}#isOrderQuestion(){
const missingAtEnd=this.#question.html.match(/<span +class *= *"missing-word".*?><\/span>(?:\s*<\/p>\s*)*$/)
;return missingAtEnd&&this.#question.missingWords.length===1&&!this.#question.missingWords[0]
}}const MarkState={UNDEFINED:-1,CORRECT:0,INCORRECT:1,SKIPPED:2}
;class ItemMarker{#markedItems;constructor(){this.reset()}reset(){
this.#markedItems=[]}get marks(){const marks={correct:0,incorrect:0,skipped:0,
markedItems:this.#markedItems};this.#markedItems.forEach((markedItem=>{
switch(markedItem.state){case MarkState.CORRECT:marks.correct++;break
;case MarkState.INCORRECT:marks.incorrect++;break;case MarkState.SKIPPED:
marks.skipped++;break}}));return marks}markItem(item,state){
this.#markedItems.push({item:item,state:state})}}class Lesson{#metadata
;#problems=[];#problemIndex=0;#marker=new ItemMarker;constructor(){
this.#marker.reset()}get metadata(){return this.#metadata}set metadata(value){
this.#metadata=value}get problems(){return this.#problems}get marks(){
return this.#marker.marks}addProblem(problem){this.#problems.push(problem)}
restart(){this.#problemIndex=0}get hasMoreProblems(){
return this.#problemIndex<this.#problems.length}getNextProblem(){
return this.#problemIndex<this.#problems.length?this.#problems[this.#problemIndex++]:null
}peekAtNextProblem(){
return this.#problemIndex<this.#problems.length?this.#problems[this.#problemIndex]:null
}markProblem(problem,state){this.#marker.markItem(problem,state)}}
class ProblemSource{#introSource;#questionSource;#rightAnswerSources
;#wrongAnswerSources;#explanationSource;constructor(){this.#introSource=""
;this.#questionSource="";this.#rightAnswerSources=[];this.#wrongAnswerSources=[]
;this.#explanationSource=""}get introSource(){return this.#introSource}
set introSource(data){this.#introSource=data}get questionSource(){
return this.#questionSource}set questionSource(data){this.#questionSource=data}
get explanationSource(){return this.#explanationSource}
set explanationSource(data){this.#explanationSource=data}
get rightAnswerSources(){return this.#rightAnswerSources}
get wrongAnswerSources(){return this.#wrongAnswerSources}
addRightAnswerSource(data){this.#rightAnswerSources.push(data)}
addWrongAnswerSource(data){this.#wrongAnswerSources.push(data)}}
const ProblemItemKey={INTRO:"i",QUESTION:"?",RIGHT_ANSWER:"=",WRONG_ANSWER:"x",
EXPLANATION:"&",QUESTION_BREAK:"/"};class LessonSource{
static#isConstructing=false;#metaSource;#problemSources;constructor(){
if(!LessonSource.#isConstructing)throw new Error("Private constructor. Use createFromSource")
;this.#problemSources=[]}set metaSource(value){this.#metaSource=value}
get metaSource(){return this.#metaSource}get problemSources(){
return this.#problemSources}static createFromSource(source){
LessonSource.#isConstructing=true;const lessonSource=new LessonSource
;LessonSource.#isConstructing=false;const lines=source.split(/\r\n|\n/)
;let currentItemKey=null;let problemSource=lessonSource.createProblemSource()
;let data="";lines.forEach((line=>{
const details=lessonSource.getLineDetails(line)
;if(!details.key)data+=`${details.content}\n`;else{
lessonSource.addDataToProblemSource(problemSource,currentItemKey,data)
;data=details.content?`${details.content}\n`:""
;if(lessonSource.isNewProblem(currentItemKey,details.key,problemSource))problemSource=lessonSource.createProblemSource()
;currentItemKey=details.key}}))
;if(data)lessonSource.addDataToProblemSource(problemSource,currentItemKey,data)
;return lessonSource}isNewProblem(lastKey,newKey,currentProblem){
if(lastKey===ProblemItemKey.QUESTION_BREAK)return true;switch(newKey){
case ProblemItemKey.INTRO:return!!currentProblem.introSource
;case ProblemItemKey.QUESTION:return!!currentProblem.questionSource}return false
}addDataToProblemSource(problem,itemType,data){switch(itemType){
case ProblemItemKey.INTRO:problem.introSource=data;break
;case ProblemItemKey.QUESTION:problem.questionSource=data;break
;case ProblemItemKey.RIGHT_ANSWER:problem.addRightAnswerSource(data);break
;case ProblemItemKey.WRONG_ANSWER:problem.addWrongAnswerSource(data);break
;case ProblemItemKey.EXPLANATION:problem.explanationSource=data;break
;case ProblemItemKey.QUESTION_BREAK:break;default:this.metaSource=data}}
createProblemSource(){const block=new ProblemSource
;this.problemSources.push(block);return block}getLineDetails(line){
const match=line.match(/^ {0,3}(?:\(*([i?=xX&/])\1*[/) ]+)(.*)$/)
;if(!match)return{key:void 0,content:line};return{key:match[1].toLowerCase(),
content:match[2]??""}}convertToLesson(){const lesson=new Lesson
;lesson.metadata=Metadata.createFromSource(this.metaSource)
;this.problemSources.forEach((problemSource=>{const problem=new Problem
;problem.intro=TextItem.createFromSource(problemSource.introSource,lesson.metadata)
;problem.question=TextItem.createFromSource(problemSource.questionSource,lesson.metadata)
;problem.explanation=TextItem.createFromSource(problemSource.explanationSource,lesson.metadata)
;problem.rightAnswers=problemSource.rightAnswerSources.map((source=>TextItem.createFromSource(source,lesson.metadata)))
;problem.wrongAnswers=problemSource.wrongAnswerSources.map((source=>TextItem.createFromSource(source,lesson.metadata)))
;lesson.addProblem(problem)}));return lesson}}class UnmanagedLesson{#data;#title
;#lesson;#origin;constructor(title,data,origin){this.#title=title
;if(data)this.#lesson=this.#convertDataToLesson(data);this.#origin=origin}
#convertDataToLesson(data){
const lessonSource=LessonSource.createFromSource(data)
;return lessonSource.convertToLesson()}get hasLesson(){return!!this.#lesson}
get lesson(){return this.#lesson}get lessonInfo(){
return this.#getUnmanagedLessonInfo(escapeHtml(this.#title),this.#origin)}
#getUnmanagedLessonInfo(lessonTitle,origin){return{origin:origin,
usingLocalLibrary:false,libraryKey:void 0,file:void 0,url:void 0,indexes:{
book:0,chapter:0,lesson:0},titles:{library:"",book:"",chapter:"",
lesson:lessonTitle}}}}const LessonOrigin={REMOTE:"remote",LOCAL:"local",
SESSION:"session",EMBEDDED:"embedded",FILE_SYSTEM:"file_system"}
;class EmbeddedLesson extends UnmanagedLesson{constructor(){
super(EmbeddedLesson.#getEmbeddedItem("LESSON_TITLE_B64",window.LESSON_TITLE_B64),EmbeddedLesson.#getEmbeddedItem("LESSON_SOURCE_B64",window.LESSON_SOURCE_B64),LessonOrigin.EMBEDDED)
}static#getEmbeddedItem(name,data){if(data)try{return base64ToString(data)
}catch(error){
console.error(`Could not decoded embedded variable ${name}. Data: ${data} `)}
return null}}const embeddedLesson=new EmbeddedLesson;class LessonManager{
#usingLocalLibrary=false;#libraries=new Map;#remoteLibraryKey;#currentLibraryKey
;#currentBookIndex=0;#currentChapterIndex=0;#currentLessonIndex=0;#cachedLesson
;constructor(){}set remoteLibraryKey(key){if(!this.#libraries.has(key)){
console.error(`Ignored attempt to set remote invalid remote library key ${key}.`)
;this.#usingLocalLibrary=true;return}this.#remoteLibraryKey=key
;if(!this.#usingLocalLibrary)this.#currentLibraryKey=this.#remoteLibraryKey}
set usingLocalLibrary(value){this.#usingLocalLibrary=value
;this.#currentLibraryKey=this.#usingLocalLibrary?LocalLibrary.LOCAL_LIBRARY_KEY:this.#remoteLibraryKey
}get usingLocalLibrary(){return this.#usingLocalLibrary}set bookIndex(index){
const library=this.#libraries.get(this.#currentLibraryKey);if(!library){
this.#currentBookIndex=0;return}
this.#currentBookIndex=this.#ensurePositiveInt(index)}set chapterIndex(index){
this.#currentChapterIndex=this.#ensurePositiveInt(index)}set lessonIndex(index){
this.#currentLessonIndex=this.#ensurePositiveInt(index)}get libraryTitle(){
const title=this.#libraries.get(this.#currentLibraryKey)?.title;return title??""
}get libraryTitles(){const options=new Map
;this.#libraries.forEach(((value,key)=>{options.set(key,value.title)}))
;return options}get remoteLibraryTitles(){const options=new Map
;this.#libraries.forEach(((value,key)=>{
if(key!==LocalLibrary.LOCAL_LIBRARY_KEY)options.set(key,value.title)}))
;return options}get bookTitle(){const title=this.#getCurrentBook()?.title
;return title??""}get bookTitles(){const titles=[]
;this.#libraries.get(this.#currentLibraryKey)?.books.forEach((value=>{
titles.push(value.title)}));return titles}get chapterTitle(){
const title=this.#getCurrentBook()?.chapters[this.#currentChapterIndex]?.title
;return title??""}get chapterTitles(){const titles=[]
;this.#getCurrentBook().chapters.forEach((value=>{titles.push(value.title)}))
;return titles}get lessonTitle(){
const title=this.#getCurrentBook()?.chapters[this.#currentChapterIndex]?.lessons[this.#currentLessonIndex]?.title
;return title??""}get lessonTitles(){const titles=[]
;this.#getCurrentBook().chapters[this.#currentChapterIndex].lessons.forEach((value=>{
titles.push(value.title)}));return titles}get currentLessonInfo(){
return this.#buildCurrentLessonInfo()}#buildCurrentLessonInfo(url){
this.#ensureIndexesValid();const book=this.#getCurrentBook();return{
origin:this.#usingLocalLibrary?LessonOrigin.LOCAL:LessonOrigin.REMOTE,
usingLocalLibrary:this.#usingLocalLibrary,libraryKey:this.#currentLibraryKey,
file:book?.chapters[this.#currentChapterIndex]?.lessons[this.#currentLessonIndex]?.file,
url:url,indexes:{book:this.#currentBookIndex,chapter:this.#currentChapterIndex,
lesson:this.#currentLessonIndex},titles:{
library:this.#libraries.get(this.#currentLibraryKey)?.title,book:book?.title,
chapter:book?.chapters[this.#currentChapterIndex]?.title,
lesson:book?.chapters[this.#currentChapterIndex]?.lessons[this.#currentLessonIndex]?.title
}}}formUrlForLesson(){
const books=this.#libraries.get(this.#currentLibraryKey).books
;const fileLocation=books[this.#currentBookIndex].location
;const fileName=books[this.#currentBookIndex].chapters[this.#currentChapterIndex].lessons[this.#currentLessonIndex].file
;return`${fileLocation}${fileName}`}#ensurePositiveInt(index){
index=parseInt(index);return isNaN(index)||index<0?0:index}
#ensureIndexesValid(){const library=this.#libraries.get(this.#currentLibraryKey)
;if(this.#indexInvalid(this.#currentBookIndex,library?.books))this.#currentBookIndex=0
;const book=library?.books[this.#currentBookIndex]
;if(this.#indexInvalid(this.#currentChapterIndex,book?.chapters))this.#currentChapterIndex=0
;const chapter=book?.chapters[this.#currentChapterIndex]
;if(this.#indexInvalid(this.#currentLessonIndex,chapter?.lessons.length))this.#currentLessonIndex=0
}#indexInvalid(index,arrayData){
if(arrayData===null||arrayData===void 0)return false
;return isNaN(index)||index<0||index>=arrayData.length}#getCurrentBook(){
return this.#libraries.get(this.#currentLibraryKey).books[this.#currentBookIndex]
}loadAllLibraries(librariesFileLocation){this.#libraries=new Map
;const localLibrary=new LocalLibrary
;this.#libraries.set(localLibrary.key,localLibrary.info)
;if(!librariesFileLocation)return Promise.resolve(this.#libraries.size)
;return fetchJson(librariesFileLocation).then((entries=>{
for(const key in entries){const entry=entries[key]
;entry.title=escapeHtml(entry.title);this.#libraries.set(key,entries[key])
;this.#libraries.get(key).books=[]}return this.#libraries.size}))}
loadAllLibraryContent(){
return this.#loadLibraryContent(LocalLibrary.LOCAL_LIBRARY_KEY).then((()=>this.#loadLibraryContent(this.#remoteLibraryKey)))
}#loadLibraryContent(key,force){const library=this.#libraries.get(key)
;if(library.books?.length>0&&!force)return Promise.resolve()
;if(library.contentLoader){library.books=library.contentLoader()
;this.#escapeAllTitles(library.books);this.#ensureIndexesValid()
;return Promise.resolve()}return fetchJson(library.url).then((value=>{
library.books=value;this.#escapeAllTitles(library.books)
;this.#ensureIndexesValid();return}))}#escapeAllTitles(books){
books.forEach((book=>{book.title=escapeHtml(book.title)
;book.chapters.forEach((chapter=>{chapter.title=escapeHtml(chapter.title)
;chapter.lessons.forEach((lesson=>{lesson.title=escapeHtml(lesson.title)}))}))
}))}loadCurrentLesson(){this.#ensureIndexesValid()
;const contentLoader=this.#getCurrentBook().chapters[this.#currentChapterIndex].lessons[this.#currentLessonIndex].contentLoader
;if(contentLoader)return this.#loadLessonUsingContentLoader(contentLoader);else return this.#loadRemoteLesson()
}#loadLessonUsingContentLoader(contentLoader){
return Promise.resolve(new CachedLesson(this.#buildCurrentLessonInfo(""),contentLoader()))
}#loadRemoteLesson(){const url=this.formUrlForLesson()
;if(this.#cachedLesson?.info.url===url){
console.info(`Using cached version of lesson: ${url}`)
;return Promise.resolve(CachedLesson.clone(this.#cachedLesson))}
this.#cachedLesson=new CachedLesson(this.#buildCurrentLessonInfo(url))
;return fetchText(url).then((text=>{console.info(`Loaded lesson: ${url}`)
;this.#cachedLesson.content=text;return CachedLesson.clone(this.#cachedLesson)
}))}updateCurrentLessonContent(title,content){
if(!this.#usingLocalLibrary)throw new Error("Attempt made to update a remote library.")
;(new LocalLibrary).saveLocalLessonAtIndex(this.#currentLessonIndex,{
title:title,content:content})
;return this.#loadLibraryContent(LocalLibrary.LOCAL_LIBRARY_KEY,true)}
addLessonToLocalLibrary(){const localLibrary=new LocalLibrary
;localLibrary.addNewLessonSlot()
;this.#libraries.set(localLibrary.key,localLibrary.info)
;return this.#loadLibraryContent(localLibrary.key,true)}
deleteLocalLibraryCurrentLesson(){if(!this.#usingLocalLibrary){
console.error("Ignored attempt to delete local library when it is not the active library.")
;return Promise.resolve()}const localLibrary=new LocalLibrary
;localLibrary.deleteLessonAtIndex(this.#currentLessonIndex)
;this.#libraries.set(localLibrary.key,localLibrary.info)
;return this.#loadLibraryContent(localLibrary.key,true)}}
class EmbeddedLessonManager{loadAllLibraries(librariesFileLocation){
console.debug(`Embedded lesson manager ignore attempt to load ${librariesFileLocation}`)
}loadAllLibraryContent(){
console.debug(`Embedded lesson manager ignored attempt to load all library content`)
}}
const lessonManager=embeddedLesson.hasLesson?new EmbeddedLessonManager:new LessonManager
;const DEFAULT_HUE=120;const DEFAULT_SATURATION=50
;const DEFAULT_COLOR_SPREAD=120;const DEFAULT_DARK_MODE=false
;const DEFAULT_FONT_SIZE=15;const DEFAULT_LIBRARY_KEY="EN"
;const DEFAULT_READING_SPEED="180";function setPalette(settings){
settings.hue=settings.hue??persistentData.getFromStorage("hue",DEFAULT_HUE)
;settings.saturation=settings.saturation??persistentData.getFromStorage("saturation",DEFAULT_SATURATION)
;settings.spread=settings.spread??persistentData.getFromStorage("spread",DEFAULT_COLOR_SPREAD)
;settings.dark=settings.dark??persistentData.getFromStorage("darkMode",DEFAULT_DARK_MODE)
;setCssFromPalette(createPalette(settings))}function getSettingDefinitions(){
return{palette:{type:"separator",label:i18n`54016c9d89a98aa8bf2e8a8e7ba6f352::`
},hue:{type:"range",label:i18n`d86cbd21656e6a16eeebdf3041f7d9b0::`,
defaultValue:DEFAULT_HUE,min:0,max:360,onupdate:value=>{value=parseInt(value)
;setPalette({hue:value})}},saturation:{type:"range",
label:i18n`0b0d1a40638f299b733e0c7c90344698::`,defaultValue:DEFAULT_SATURATION,
min:0,max:100,onupdate:value=>{value=parseInt(value);setPalette({
saturation:value})}},spread:{type:"range",
label:i18n`c13970d8379e2f9daef71a2d63e2233d::`,
defaultValue:DEFAULT_COLOR_SPREAD,min:0,max:180,onupdate:value=>{
value=parseInt(value);setPalette({spread:value})}},darkMode:{type:"checkbox",
label:i18n`3924c958175e666737225e86a68ac4b4::`,defaultValue:DEFAULT_DARK_MODE,
onupdate:value=>{setPalette({dark:value})}},fontSize:{type:"range",
label:i18n`c4943062b634c56348c67fdebba808eb::`,defaultValue:DEFAULT_FONT_SIZE,
min:10,max:22,onupdate:value=>{setProperty("--font-base-size",`${value}px`)}},
hideButtonText:{type:"checkbox",label:i18n`63d171a5c8e1018a70b682bc3eca413f::`,
defaultValue:false,onupdate:value=>{icons.hideText=value}},readingSpeed:{
type:"range",label:i18n`23944ac1bff1399fe70064067e3e4804::`,
defaultValue:DEFAULT_READING_SPEED,min:80,max:1e3},lessonInfo:{type:"separator",
label:i18n`16c6a433b76133c6204c165f24374006::`},library:{type:"select",
label:i18n`b0ef546d26b0e0a6ad6a89b8f81b9170::`,defaultValue:DEFAULT_LIBRARY_KEY,
onupdate:value=>{lessonManager.remoteLibraryKey=value},
options:()=>lessonManager.remoteLibraryTitles,reloadIfChanged:true},
showFirstUseMessage:{type:"checkbox",
label:i18n`5bb6f06649fe039d8738eab53560e644::`,defaultValue:true}}}
class BarButton extends ManagedElement{constructor(detail){super("button")
;if(detail.content)icons.applyIconToElement(detail,this.element);else this.innerHTML=detail
}}class ButtonBar extends ManagedElement{constructor(){
super("div","utils-button-bar")}showButtons(buttons){
if(!buttons?.length)buttons=[icons.ok];this.resolutionFunction=null
;const promise=new Promise((resolve=>{this.resolutionFunction=resolve}))
;buttons.forEach(((value,index)=>{const button=new BarButton(value)
;button.setAttribute("data-index",index);this.appendChild(button,index)
;this.listenToEventOn("click",button,index)}));focusManager.findBestFocus()
;return promise}handleClickEvent(eventIgnored,eventId){
const index=parseInt(eventId);this.resolutionFunction(index)}}
const mask=document.getElementById("modal-mask")
;const standardSelectionIds=["title-bar","content","footer"]
;let referenceCount=0;let itemsToRestore=[];function deactivateElement(element){
console.debug(`Deactivating ${element.tagName}: ${element.className}`)
;const elementDetails={element:element,
"aria-hidden":element.getAttribute("aria-hidden"),disabled:element.disabled,
tabIndex:element.tabIndex};itemsToRestore.push(elementDetails)
;element.setAttribute("aria-hidden",true)
;if(element.disabled!==void 0)element.disabled=true;element.tabIndex=-1}
function reactivateItems(){itemsToRestore.forEach((item=>{
if(!item.ariaHidden)item.element.removeAttribute("aria-hidden");else item.element.setAttribute("aria-hidden",item.ariaHidden)
;if(item.disabled!==void 0)item.element.disabled=item.disabled
;if(item.tabIndex!==void 0)item.element.tabIndex=item.tabIndex}))
;itemsToRestore=[]}function deactivateItems(){
standardSelectionIds.forEach((id=>{
document.getElementById(id).querySelectorAll("button,.selectable,input,textarea").forEach((element=>{
deactivateElement(element)}))}))}function showMask(){
mask.style.visibility="visible"
;if(referenceCount===0)deactivateItems();else console.debug(`Reference count ${referenceCount} is > 0 so mask already in place.`)
;referenceCount++}function hideMask(){if(--referenceCount>0){
console.debug(`Reference count ${referenceCount} is > 0 so leave mask in place.`)
;return}reactivateItems();mask.style.visibility="hidden"}
function getIconDetailsForType(dialogType){switch(dialogType){
case ModalDialog.DialogType.WARNING:return icons.warning
;case ModalDialog.DialogType.ERROR:return icons.error
;case ModalDialog.DialogType.FATAL:return icons.fatal
;case ModalDialog.DialogType.QUESTION:return icons.question
;case ModalDialog.DialogType.SETTINGS:return icons.settings
;case ModalDialog.DialogType.INFO:default:return icons.info}}class ModalDialog{
static DialogType={ERROR:"error",FATAL:"fatal",INFO:"info",QUESTION:"question",
SETTINGS:"settings",WARNING:"warning"};static DialogIndex={SETTINGS_OK:0,
SETTINGS_RESET:1,CONFIRM_YES:0,CONFIRM_NO:1};static#isConstructing=false;#dialog
;#titleText;#icon;#content;#buttonBar;constructor(){
if(!ModalDialog.#isConstructing)throw new Error("ModalDialog should be instantiated via factory method.")
;this.#createHtml()}static#constructDialog(){ModalDialog.#isConstructing=true
;const dialog=new ModalDialog;ModalDialog.#isConstructing=false;return dialog}
#createHtml(){this.#dialog=new ManagedElement("div","utils-dialog")
;this.#dialog.classList.add("framed","modal")
;const titleBar=new ManagedElement("div","utils-title-bar")
;titleBar.classList.add("container")
;this.#icon=new ManagedElement("span","utils-dialog-icon")
;titleBar.appendChild(this.#icon);this.#titleText=new ManagedElement("span")
;titleBar.appendChild(this.#titleText)
;const contentFrame=new ManagedElement("div","utils-dialog-content-frame")
;contentFrame.classList.add("container")
;this.#content=new ManagedElement("div","utils-dialog-content")
;contentFrame.appendChild(this.#content);this.#buttonBar=new ButtonBar
;this.#dialog.appendChild(titleBar);this.#dialog.appendChild(contentFrame)
;this.#dialog.appendChild(this.#buttonBar);this.#dialog.appendTo(document.body)}
#showDialogDefinition(dialogDefinition){
this.#titleText.textContent=dialogDefinition.title
;if(dialogDefinition.content instanceof Element||dialogDefinition.content instanceof ManagedElement){
this.#content.textContent="";this.#content.appendChild(dialogDefinition.content)
}else this.#content.innerHTML=dialogDefinition.content
;icons.applyIconToElement(dialogDefinition.iconDetails,this.#icon,{hideText:true
});showMask()
;return this.#buttonBar.showButtons(dialogDefinition.buttons).then((index=>{
this.#hideDialog();focusManager.findBestFocus();return index}))}#hideDialog(){
hideMask();this.#dialog.remove()}static#addReloadWarning(content){
let reloadText=i18n`b33bb0b4617140c80c80b10436a0dbb2::`
;if(reloadText==="")reloadText="A serious error has occurred and languages cannot be loaded. Wait a few minutes and then close this dialog to try to reload the application."
;if(content instanceof Element){const para=document.createElement("p")
;para.textContent=reloadText;content.appendChild(para);return content}
return`${content}<p>${reloadText}</p>`}static showDialog(title,content,options){
const dialog=ModalDialog.#constructDialog()
;if(options?.dialogType===ModalDialog.DialogType.FATAL)content=ModalDialog.#addReloadWarning(content)
;const iconDetails=getIconDetailsForType(options?.dialogType)
;const dialogDefinition={title:title&&title.length>0?title:":",
buttons:options?.buttons,content:content,dialogType:options?.dialogType,
iconDetails:iconDetails};return dialog.#showDialogDefinition(dialogDefinition)}
static showSettingsDialog(content){const options={
dialogType:ModalDialog.DialogType.SETTINGS,
buttons:[icons.ok,icons.resetToFactory]}
;return ModalDialog.showDialog(i18n`f4f70727dc34561dfde1a3c529b6205c::`,content,options)
}static showWarning(content,title){
return ModalDialog.showDialog(title??i18n`0eaadb4fcb48a0a0ed7bc9868be9fbaa::`,content,{
dialogType:ModalDialog.DialogType.WARNING})}static showError(content,title){
return ModalDialog.showDialog(title??i18n`902b0d55fddef6f8d651fe1035b7d4bd::`,content,{
dialogType:ModalDialog.DialogType.ERROR})}static showInfo(content,title){
return ModalDialog.showDialog(title??i18n`a82be0f551b8708bc08eb33cd9ded0cf::`,content,{
dialogType:ModalDialog.DialogType.INFO})}static showConfirm(content,title){
return ModalDialog.showDialog(title??i18n`a97ea56b0e00b2379736ae60869ff66a::`,content,{
dialogType:ModalDialog.DialogType.QUESTION,buttons:[icons.yes,icons.no]})}
static showFatal(content,title){
return ModalDialog.showDialog(title??i18n`355f26b47eff3302c93a1c49676f078e::`,content,{
dialogType:ModalDialog.DialogType.FATAL})}}class Reloader{#reloadRequired=false
;#reason="";constructor(){}flagAsRequired(reason){this.#reason=reason
;this.#reloadRequired=true}reloadIfRequired(){if(this.#reloadRequired){
const warning=i18n`5a1ee4a311c51fa4b76d3c7edd6bdda6::`
;return ModalDialog.showWarning(`<p>${warning}</p><p>${this.#reason}</p>`).then((()=>{
window.location.reload()}))}else return Promise.resolve()}}
const reloader=new Reloader;class SettingsValueCache{#storedValues=new Map
;constructor(definitions){
for(const key in definitions)if(definitions[key].reloadIfChanged){
const cachedValue={value:persistentData.getFromStorage(key),
label:definitions[key].label};this.#storedValues.set(key,cachedValue)}}
get changes(){let labels=[];this.#storedValues.forEach(((cachedValue,key)=>{
const newValue=persistentData.getFromStorage(key)
;if(newValue!==cachedValue.value)labels.push(cachedValue.label)}))
;return labels.join(", ")}}class RangeIndicator extends ManagedElement{
constructor(control){super("div","utils-range-value")
;this.classList.add("on-top");this.control=control
;this.listenToEventOn("input",this.control,"");this.hide()}
handleInputEvent(event){if(!this.timerId)this.timerId=setTimeout((()=>{
this.hide();this.timerId=null}),500);const controlEl=this.control.element
;const minValue=parseFloat(controlEl.min??0)
;const maxValue=parseFloat(controlEl.max??100)
;const currentValue=parseFloat(controlEl.value)
;const proportion=(currentValue-minValue)/(maxValue-minValue)
;this.textContent=event.target.value;this.style.opacity=100
;const top=controlEl.offsetTop-this.offsetHeight
;let left=controlEl.offsetLeft+controlEl.offsetWidth*proportion-this.offsetWidth/2
;left=Math.max(controlEl.offsetLeft,left)
;left=Math.min(controlEl.offsetLeft+controlEl.offsetWidth-this.offsetWidth,left)
;this.style.left=`${left}px`;this.style.top=`${top}px`;this.show()}hide(){
this.style.opacity=0;this.style.visibility="hidden"}show(){
this.style.visibility="visible";this.style.opacity=100}}
class SeparatorControl extends ManagedElement{constructor(key,definition){
super("div","utils-separator")
;this.innerHTML='<span class="utils-hr"><hr></span>'+`<span> ${escapeHtml(definition.label)} </span>`+'<span class="utils-hr"><hr></span>'
}}class InputControl extends ManagedElement{constructor(key,definition){
super("input");this.type=definition.type
;this.setAttribute("type",definition.type)
;this.setAttribute("min",definition.min);this.setAttribute("max",definition.max)
;this.className=definition.type}setValue(value){switch(this.type){
case"checkbox":this.checked=value;return;default:this.value=value;return}}
getValue(){switch(this.type){case"checkbox":return this.checked;case"range":
return parseFloat(this.value);default:return this.value}}}
class SelectControl extends ManagedElement{constructor(key,definition){
super("select");this.definition=definition
;if(definition.type)this.className=definition.type;this.#addOptions()}
setValue(value){console.log(value);const options=[...this.$.options]
;const index=options.findIndex((option=>option.value===value))
;if(index>=0)this.$.selectedIndex=index;else console.warn(`Could not set select control to value of ${value}`)
}getValue(){return this.$.selectedOptions[0].value}getText(){
return this.$.selectedOptions[0].text}#addOptions(){
this.options=this.definition.options
;if(typeof this.options==="function")this.options=this.options.call(this)
;if(typeof this.options==="function")this.options=this.options.call(this)
;this.options?.forEach(((value,key)=>{const option=new Option(value,key)
;this.$.add(option)}))}reloadOptions(){this.options=this.definition.options
;if(typeof this.definition.options==="function"){let n=this.$.length
;while(n-- >0)this.$.remove(0)}this.#addOptions()}}class LabeledControlManager{
#managedControls=[];constructor(){}createLabeledControl(key,definition,storage){
const options={storage:storage,manager:this}
;const control=new LabeledControl(key,definition,options)
;this.#managedControls.push(control);return control}removeControls(){
this.#managedControls.forEach((control=>{control.remove()}))}
reloadSelectOptions(keys){keys?.forEach((value=>{
const dependentControl=this.#managedControls.find((control=>control.key===value))
;if(dependentControl)if(dependentControl.control instanceof SelectControl)dependentControl.control.reloadOptions();else console.log(`Ignoring dependent ${value} as it is not a select type.`)
}))}}class LabeledControl extends ManagedElement{#storage;#manager
;constructor(key,definition,options){super("div");this.#storage=options?.storage
;this.#manager=options?.manager;this.className="labeled-control-container"
;this.label=new ManagedElement("label");this.appendChild(this.label)
;this.key=key;this.definition=definition
;this.label.innerHTML=`<span>${escapeHtml(definition.label)}</span>`
;if(definition.type==="select")this.control=new SelectControl(key,definition);else this.control=new InputControl(key,definition)
;this.control.setValue(this.#storage?this.#storage.getFromStorage(key,definition.defaultValue):definition.defaultValue)
;this.label.appendChild(this.control)
;this.error=this.appendChild(new ManagedElement("div","utils-input-error-message"))
;if(definition.type==="range")this.label.appendChild(new RangeIndicator(this.control))
;this.listenToEventOn("input",this.control,"")}setValue(value){
this.control?.setValue(value)}handleInputEvent(eventIgnored){
const value=this.control.getValue();if(this.definition.validate){
const validation=this.definition.validate(value);if(!validation.pass){
this.error.textContent=validation.errorMessage;this.classList.add("utils-error")
;return}}this.classList.remove("utils-error")
;this.#storage?.saveToStorage(this.key,value);if(this.definition.onupdate){
this.definition.onupdate(value)
;if(this.#manager)this.#manager.reloadSelectOptions(this.definition.dependents);else console.warn("LabeledControl has no manager, so unable to handle dependencies.")
}}}let manager=null;let settingDefinitions={}
;function setSettingDefinitions(definitions){settingDefinitions=definitions
;for(const key in settingDefinitions)if(!isSeparator(settingDefinitions[key])){
const storedValue=persistentData.getFromStorage(key,settingDefinitions[key].defaultValue)
;settingDefinitions[key].onupdate?.call(this,storedValue)}}
function resetIfConfirmed(){
return ModalDialog.showConfirm(i18n`0ee1cf8d6fe2d39a293bc82ddbc60666::`).then((value=>{
if(value===ModalDialog.DialogIndex.CONFIRM_YES)return resetAll()}))}
function isSeparator(definition){return definition.type==="separator"}
function resetAll(){for(const key in settingDefinitions){
console.info(`Resetting ${key} to its default.`)
;const definition=settingDefinitions[key];if(!isSeparator(definition)){
const value=definition.defaultValue;persistentData.saveToStorage(key,value)
;definition.onupdate?.(value)}}}
function initialiseSettingDefinitions(definitions){
for(const key in definitions)definitions[key].initialise?.()}
function loadSettingDefinitions(definitions){
initialiseSettingDefinitions(definitions);setSettingDefinitions(definitions)}
function showAllSettings(){
if(manager)return Promise.reject(new Error("Attempt made to show settings on top of another."))
;manager=new LabeledControlManager;const dialogContent=new ManagedElement("div")
;dialogContent.innerHTML=`\n    <div class='utils-palette'>\n    <span class='utils-primary'></span>\n    <span class='utils-secondary'></span>\n    <span class='utils-tertiary'></span>\n    </div>\n  `
;for(const key in settingDefinitions){const setting=settingDefinitions[key]
;let control
;if(isSeparator(setting))control=new SeparatorControl(key,setting);else control=manager.createLabeledControl(key,setting,persistentData)
;dialogContent.appendChild(control)}
const settingsValueCache=new SettingsValueCache(settingDefinitions)
;return ModalDialog.showSettingsDialog(dialogContent).then((value=>{
if(value===ModalDialog.DialogIndex.SETTINGS_RESET)return resetIfConfirmed();else return value
})).then((value=>{manager.removeControls();manager=null
;reloader.reloadIfRequired();return value})).then((value=>{
const changes=settingsValueCache.changes;if(changes!==""){
reloader.flagAsRequired(`${i18n`3c5d22824f5b26b56b4edfc952f083f7::`} ${changes}.`)
;reloader.reloadIfRequired()}return value}))}function getMainMenuItems(){
return[{iconDetails:icons.settings,command:{execute:()=>showAllSettings()}},{
iconDetails:null,command:null},{iconDetails:icons.privacy,command:{
execute:()=>window.open(Urls.PRIVACY,"_blank")}}]}
function performRegistrationIfPossible(buildMode){
if(buildMode==="production"&&"serviceWorker"in navigator)window.addEventListener("load",(()=>{
navigator.serviceWorker.register("./sw.js").then((registration=>{
console.info("SW registered: ",registration)
;let controller=navigator.serviceWorker.controller
;console.info(`Page controlled by ${controller}.`)
})).catch((registrationError=>{
console.error("SW registration failed: ",registrationError)}))}))}
function registerServiceWorker(buildMode){try{
performRegistrationIfPossible(buildMode)}catch(error){
console.error("Error during service worker registration",error)}}
class I18nResolutionError extends Error{constructor(error,fetchSummary){
if(error instanceof Error){super(error.message);this.cause=error
}else super(error);this.fetchSummary=fetchSummary}}
function resolveLanguages(languagesListingUrl){let languagesListing={}
;let languagesBaseUrl="";let fetchSummary=[]
;return fetchJson(languagesListingUrl).then((languages=>{
languagesListing=languages
;languagesBaseUrl=new URL(languages.location,window.location.href)
;const url=new URL(languages.meta.master,languagesBaseUrl);fetchSummary.push({
url:url,read:false});return fetchJson(url.href)})).then((masterTranslations=>{
fetchSummary[0].read=true;setActiveTranslations(masterTranslations)
;const bestFile=getBestLanguageFile(getPreferredLanguages(),languagesListing.files)
;if(bestFile===languagesListing.meta.master)return Promise.resolve(null)
;const url=new URL(bestFile,languagesBaseUrl);fetchSummary.push({url:url,
read:false});return fetchJson(url.href)})).then((bestTranslations=>{
if(bestTranslations){fetchSummary[1].read=true
;setActiveTranslations(bestTranslations)}return fetchSummary
})).catch((error=>Promise.reject(new I18nResolutionError(error,fetchSummary))))}
function getLanguages(embeddedLanguages){
if(!BuildInfo.isBuilt())return Promise.resolve(void 0);if(embeddedLanguages)try{
const languages=JSON.parse(base64ToString(embeddedLanguages))
;if(languages.fallback)setActiveTranslations(languages.fallback)
;setActiveTranslations(languages.active);return Promise.resolve(void 0)
}catch(error){
console.error("Unable to decode embedded languages ${embeddedLanguages}.",error)
}return getLanguagesFromJson()}function getLanguagesFromJson(){
return resolveLanguages("./languages.json").then((()=>{
console.info(`Build information: ${BuildInfo.getBundleName} ${BuildInfo.getVersion()} ${BuildInfo.getMode()}`)
;return})).catch((error=>{const fetchSummary=error.fetchSummary
;if(fetchSummary&&fetchSummary.length>0&&fetchSummary[0].read)console.error(`${error}\nUsing translation ${fetchSummary[0].url}`);else{
console.error(error.message);return Promise.reject(error)}return}))}
class StageManager{#stage;constructor(stageElement){
this.#stage=new ManagedElement(stageElement)}async startShow(presenter){
this.#stage.removeChildren();for(;;){
presenter=await presenter.presentOnStage(this.#stage)
;this.#stage.removeChildren();if(presenter===null)return}}}
class SessionLesson extends UnmanagedLesson{static DATA_KEY="data"
;static TITLE_KEY="title";constructor(){
super(SessionLesson.#getSessionItem(SessionLesson.TITLE_KEY),SessionLesson.#getSessionItem(SessionLesson.DATA_KEY),LessonOrigin.SESSION)
}static#getSessionItem(key){const storedValue=sessionStorage.getItem(key)
;if(storedValue)return base64ToString(storedValue);else return storedValue}}
const sessionLesson=new SessionLesson;class ArrayIndexer{#items;#wrap;#index
;constructor(items,wrap=true){this.#items=items;this.#wrap=wrap;this.#index=0}
get items(){return this.#items}reset(){this.#index=0}decrement(){
if(this.#index>0)--this.#index;else this.#index=this.#wrap?this.#items.length-1:this.#index-1
;return this.#items[this.#index]}increment(){
if(this.#index<this.#items.length-1)++this.#index;else this.#index=this.#wrap?0:this.#index
;return this.#items[this.#index]}}class HelpButton extends ManagedElement{
constructor(){super("button","help-button")
;this.classList.add("icon-only-button")
;icons.applyIconToElement(icons.help,this,{hideText:true})
;this.listenToOwnEvent("click","HELP")}
handleClickEvent(eventIgnored,eventIdIgnored){
const presenter=document.querySelector(".Presenter")
;console.debug(`Help triggered from ${presenter?.className}`)
;window.open(Urls.HELP,"_blank")}static createInside(container){
const button=new HelpButton(container);button.appendTo(container);return button}
}class Menu extends ManagedElement{#menuContent;#menuItems;constructor(){
super("button");this.setAttribute("aria-haspopup",true)
;icons.applyIconToElement(icons.openMenu,this,{hideText:true})
;this.classList.add("utils-menu-icon-open","icon-only-button")
;this.#createMenuContentHtml();this.#menuItems=new MenuItems}
#createMenuContentHtml(){const menuTitleBar=new ManagedElement("div")
;menuTitleBar.classList.add("utils-menu-title")
;this.#menuContent=new ManagedElement("div","utils-menu-content")
;this.#menuContent.style.visibility="hidden"
;document.body.insertBefore(this.#menuContent.element,document.getElementById("modal-mask").nextSibling)
;const menuItemsElement=new ManagedElement("div")
;menuItemsElement.classList.add("container","utils-menu-items")
;menuItemsElement.setAttribute("aria-role","menu")
;this.#menuContent.appendChild(menuTitleBar)
;this.#menuContent.appendChild(menuItemsElement)
;this.listenToOwnEvent("click","OPEN")
;this.listenToEventOn("click",this.#menuContent,"CONTENT-ACTION")
;this.listenToEventOn("keydown",this.#menuContent,"CONTENT-ACTION")}
setMenuItems(items){this.#menuItems.setMenuItems(items)}#showMenuItems(){
showMask();this.style.visibility="hidden"
;this.#menuContent.classList.add("modal")
;this.#menuContent.style.visibility="visible"
;this.#menuContent.style.transform="translateX(0)"
;this.#menuContent.querySelector("button.utils-menu-item").focus()}
#hideMenuItems(){hideMask();this.style.visibility="visible"
;this.#menuContent.style.transform="translateX(-100%)"
;this.#menuContent.style.visibility="hidden"
;this.#menuContent.classList.remove("modal");focusManager.findBestFocus()}
handleClickEvent(eventIgnored,eventId){switch(eventId){case"OPEN":
this.#showMenuItems();break;default:this.#hideMenuItems()}}
handleKeydownEvent(event,eventIdIgnored){
if(event.key==="Escape")this.#hideMenuItems()}}
class MenuItem extends ManagedElement{constructor(iconDetails){
super("button","utils-menu-item");icons.applyIconToElement(iconDetails,this)
;this.setAttributes({"aria-role":"menuitem"})}}
class MenuItems extends ManagedElement{static CLOSE_EVENT_ID="close";#navigator
;#menuIconClose;constructor(){
const parent=document.querySelector(".utils-menu-items")
;if(!parent)throw"Html structure not in place. createMenuHtml should have been called."
;super(parent);this.setAttributes({"aria-role":"menu"});this.menuDefinition=null
;this.#menuIconClose=new ManagedElement("button")
;icons.applyIconToElement(icons.closeMenu,this.#menuIconClose,{hideText:true})
;this.#menuIconClose.classList.add("utils-menu-icon-close","icon-only-button")
;const logo=new ManagedElement("img");logo.setAttribute("src",Urls.LOGO)
;const title=document.querySelector(".utils-menu-title")
;title.appendChild(logo.element);title.appendChild(this.#menuIconClose.element)
;this.listenToEventOn("click",this.#menuIconClose,MenuItems.CLOSE_EVENT_ID)}
setMenuItems(menuDefinition){if(this.menuDefinition)this.remove()
;this.menuDefinition=menuDefinition;const commandItems=[this.#menuIconClose]
;this.menuDefinition.forEach(((menuDef,index)=>{let item;if(menuDef.command){
item=new MenuItem(menuDef.iconDetails);this.listenToEventOn("click",item,index)
;this.listenToEventOn("keydown",item,index);commandItems.push(item)
}else item=new ManagedElement("hr");this.appendChild(item)
;this.#navigator=new ArrayIndexer(commandItems)}))}
handleClickEvent(event,eventId){const index=parseInt(eventId)
;if(isNaN(index))return
;console.debug(`Handling event ${event.type} with id ${eventId}`)
;this.menuDefinition[index].command.execute().then((value=>{
console.debug(`Finished handling menu option ${value}.`)}))}}class Header{
constructor(){}setup(menuItems){
const titleElement=document.getElementById("title-bar");if(!titleElement){
console.error('Cannot find element with id of "title-bar".');return}
if(titleElement.children?.length>0){
console.error("Second attempt made to setup title bar ignored.");return}
const headerTextContainer=document.createElement("span")
;headerTextContainer.innerHTML=BuildInfo.getProductName()
;const helpButtonContainer=document.createElement("span")
;HelpButton.createInside(helpButtonContainer);const menu=new Menu
;menu.setMenuItems(menuItems);titleElement.appendChild(menu.element)
;titleElement.appendChild(headerTextContainer)
;titleElement.appendChild(helpButtonContainer)}}class Footer{#buttonBar
;constructor(){}get buttonBar(){return this.#buttonBar}setup(){
const footerElement=document.getElementById("footer");if(!footerElement){
console.error('Cannot find element with id of "footer".');return}
if(footerElement.children?.length>0){
console.error("Second attempt made to setup footer ignored.");return}
this.#buttonBar=new ManagedElement("div","button-bar")
;footerElement.appendChild(this.#buttonBar.element)
;const footerTextContainer=document.createElement("div")
;footerTextContainer.className="footer-text"
;const devTag=BuildInfo.getMode().toUpperCase()!=="PRODUCTION"?`[${BuildInfo.getMode()}]`:""
;footerTextContainer.innerHTML=`${BuildInfo.getProductName()} ${BuildInfo.getVersion()}${devTag} ${BuildInfo.getBuildDate()}`
;footerElement.appendChild(footerTextContainer)}}const footer=new Footer
;const header=new Header;function setHeaderAndFooter(menuItems){
header.setup(menuItems);footer.setup()}class Presenter extends ManagedElement{
static HOME_ID="HOME";static PREVIOUS_ID="BACKWARDS";static NEXT_ID="FORWARDS"
;#resolutionExecutor;config;#navigator;#preamble;#presentation
;get presentation(){return this.#presentation}#buttonBar;#homeButton
;#backwardsButton;#forwardsButton;constructor(config,presentationTagName="div"){
super("div");this.#addClassNames();this.config=config
;footer.buttonBar.removeChildren();this.#buildContent(presentationTagName)}
#addClassNames(){let item=this;do{this.classList.add(item.constructor.name)
;item=Object.getPrototypeOf(item)}while(item.constructor.name!=="Object")}
#buildContent(presentationTagName){
this.#preamble=new ManagedElement("div","preamble")
;this.#presentation=new ManagedElement(presentationTagName,"presentation")
;this.#buttonBar=footer.buttonBar;this.#addNavigationButtons()
;this.appendChild(this.#preamble);this.appendChild(this.#presentation)}
expandPresentation(){this.#presentation.classList.add("expanded")}
addButtonToBar(managedButton){
this.#buttonBar.element.insertBefore(managedButton.element,this.#buttonBar.element.lastElementChild)
}addPreamble(data){this.#preamble.removeChildren()
;if(typeof data==="string")this.#preamble.innerHTML=data;else this.#preamble.appendChild(data)
}#addNavigationButtons(){
this.#homeButton=new ManagedElement("button","home-navigation")
;icons.applyIconToElement(icons.home,this.#homeButton)
;this.listenToEventOn("click",this.#homeButton,Presenter.HOME_ID)
;this.#buttonBar.appendChild(this.#homeButton)
;this.#backwardsButton=new ManagedElement("button","back-navigation")
;icons.applyIconToElement(icons.back,this.#backwardsButton)
;this.listenToEventOn("click",this.#backwardsButton,Presenter.PREVIOUS_ID)
;this.#buttonBar.appendChild(this.#backwardsButton);this.#backwardsButton.hide()
;this.#forwardsButton=new ManagedElement("button","forward-navigation")
;icons.applyIconToElement(icons.forward,this.#forwardsButton)
;this.listenToEventOn("click",this.#forwardsButton,Presenter.NEXT_ID)
;this.#buttonBar.appendChild(this.#forwardsButton);this.#forwardsButton.hide()}
hideHomeButton(){this.#homeButton.hide()}showBackButton(){
this.#backwardsButton.show();if(focus)this.#backwardsButton.focus()}
showNextButton(focus){this.#forwardsButton.show()
;if(focus)this.#forwardsButton.focus()}
applyIconToNextButton(iconDetails,overrideText){
icons.applyIconToElement(iconDetails,this.#forwardsButton,{
overrideText:overrideText})}autoAddKeydownEvents(managedElements){
if(this.#navigator){
console.error("autoAddKeydownEvents can only be called once.");return}
const items=managedElements??this.#presentation.managedChildren
;this.#navigator=new ArrayIndexer(items,true);items.forEach(((item,index)=>{
this.listenToEventOn("keydown",item,index)}))}next(indexIgnored){
return this.config.factory.getNext(this,this.config)}previous(){
return this.config.factory.getPrevious(this,this.config)}
presentOnStage(stageElement){return new Promise((resolve=>{
this.#resolutionExecutor=resolve;stageElement.appendChild(this)
;focusManager.focusWithin(stageElement)}))}async askIfOkayToLeave(message){
const confirmation=await ModalDialog.showConfirm(message)
;return confirmation===ModalDialog.DialogIndex.CONFIRM_YES}
async allowNavigation(eventIgnored,eventIdIgnored){return true}
async handleClickEvent(event,eventId){const index=parseInt(eventId)
;const upperCaseId=!eventId?"":eventId.toString().toUpperCase()
;if(upperCaseId===Presenter.HOME_ID||upperCaseId===Presenter.PREVIOUS_ID||upperCaseId===Presenter.NEXT_ID)if(!await this.allowNavigation(event,eventId))return true
;let nextPresenter=null
;if(upperCaseId===Presenter.PREVIOUS_ID)nextPresenter=this.previous();else if(upperCaseId===Presenter.NEXT_ID)nextPresenter=this.next(Presenter.NEXT_ID);else if(upperCaseId===Presenter.HOME_ID)nextPresenter=this.config.factory.getHome(this.config);else nextPresenter=this.next(isNaN(index)?eventId:index)
;if(nextPresenter)this.#resolutionExecutor(nextPresenter)}
handleKeydownEvent(event,eventId){const index=parseInt(eventId)
;console.debug(`Key ${event.key} down for index ${index}`)
;if(isNaN(index))return;switch(event.key){case" ":case"Enter":
this.handleClickEvent(event,eventId);break}}}
const getHomeText=()=>i18n`5a62ae5db3f4f824aa6f41465bab07da::${BuildInfo.getProductName()}`
;class FileInputButton extends ManagedElement{
static DATA_AVAILABLE_EVENT_NAME="dataAvailable";#input;constructor(options){
super("label","file-input-button");this.classList.add("selectable")
;this.#input=new ManagedElement("input");this.#input.setAttribute("type","file")
;icons.applyIconToElement(icons.import,this,options)
;this.#input.style.visibility="hidden";this.#input.style.height="1em"
;this.appendChild(this.#input);this.listenToEventOn("change",this.#input)}
handleChangeEvent(eventIgnored,eventIdIgnored){
const file=this.#input.element.files[0];if(!file)return
;const reader=new FileReader;const control=this
;reader.addEventListener("load",(()=>{reader.result
;control.dispatchEvent(new CustomEvent(FileInputButton.DATA_AVAILABLE_EVENT_NAME,{
detail:{file:file,content:reader.result}}))}));reader.readAsText(file)}}
function getAutorunHtml(data){
const rootUrl=window.location.href.replace(/index\.html(\?.*)?$/,"")
;const loaderUrl=`${rootUrl}session-data-builder.html`
;const appUrl=`${rootUrl}index.html`
;return`<!DOCTYPE html>\n\x3c!-- \nText2Lesson loader.\n--\x3e\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Text2Lesson: Embedded lesson runner</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html {\n        height: -webkit-fill-available; \n      }\n      body {\n        overflow: hidden;\n      }\n      noscript {\n        left: 0;\n        position: absolute;\n        top: 0;\n      }\n      #progress {\n        padding: 1em;\n        position: absolute;\n        width: 60vw;\n        margin-top: 50vh;\n        left: 0;\n        top: 0;\n        z-index: 10;\n      }\n      iframe {\n        border: 0;\n        width: 100vw;\n        height: 100vh;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe id="data-loader"></iframe>\n    <div id="progress"></div>\n    <noscript class="always-on-top">\n      <p>\n        Your browser does not support scripts and so this application cannot\n        run. If you've disabled scripts, you will need to enable them to\n        proceed. Sorry.\n      </p>\n    </noscript>\n  </body>\n  <script>\n    var LESSON_TITLE_B64 = "${data.b64Title}";\n    var LESSON_SOURCE_B64 = "${data.b64LessonData}";\n    var LESSON_TRANSLATIONS_B64 = "${data.b64Translations}";\n    const LOADER_URL = '${loaderUrl}';\n    const APPLICATION_URL = '${appUrl}';\n    const loader = document.getElementById('data-loader');\n    const progress = document.getElementById('progress');\n    const dataChunks = LESSON_SOURCE_B64.match(/.{1,1800}/g);\n    progress.innerHTML = 'Loading: ';\n    let index = -1;\n    loaded = false;\n    const eventListener = loader.addEventListener('load', () => {\n      if (loaded) {\n        return;\n      }\n      progress.innerHTML += ' .';\n      if (index < dataChunks.length) {\n        if (index < 0) {\n          loader.src = \`\${LOADER_URL}?title=\${encodeURI(LESSON_TITLE_B64)}\`;\n          index++;\n        } else {\n          loader.src = \`\${LOADER_URL}?data=\${encodeURI(dataChunks[index++])}\`;\n        }\n      } else {\n        window.location.replace(APPLICATION_URL);\n        loaded = true;\n        progress.style.display = 'none';\n      }\n    });\n    loader.src = \`\${LOADER_URL}\`;\n  <\/script>\n</html>\n`
}class LessonExporter{#title;#content;constructor(title,content){
this.#title=title;this.#content=content}#getDataUri(data){
return`data:text/plain;charset=utf-8,${encodeURIComponent(data)}`}
get#lessonAsString(){return JSON.stringify({title:this.#title,
content:this.#content})}#getFilename(extension){
const safename=this.#title.replace(/[^A-Za-z0-9_-]/g,"_").substring(0,32)
;return`${safename}.${extension}`}exportLesson(){
return ModalDialog.showDialog(i18n`b68686a697ec08b09db6d729aed81c71::`,i18n`5ae903bf09202faef9d5fcedbf21cf14::`,{
dialogType:ModalDialog.DialogType.QUESTION,
buttons:[icons.export,icons.exportAutoRun]}).then((index=>{
if(index===0)return this.exportBase64Lesson();else return this.exportAutorunLesson()
}))}exportBase64Lesson(){
this.saveDataToFile(stringToBase64(this.#lessonAsString),"txt")}
exportAutorunLesson(){const b64Title=stringToBase64(this.#title)
;const b64Data=stringToBase64(this.#content);const html=getAutorunHtml({
b64Title:b64Title,b64LessonData:b64Data,b64Translations:getBase64Translations()
});this.saveDataToFile(html,"html")}saveDataToFile(data,extension){
const tempA=document.createElement("a")
;tempA.setAttribute("href",this.#getDataUri(data))
;tempA.setAttribute("download",this.#getFilename(extension))
;tempA.addEventListener("click",(()=>{document.body.removeChild(tempA)}))
;document.body.appendChild(tempA);tempA.click()}}class LessonImporter{
constructor(){}convert(exportedData){
let result=this.#getSummaryFromBase64File(exportedData);if(result)return result
;result=this.#getSummaryFromAutorunFile(exportedData);if(result){
console.log(result.languages);return result}
return this.#getSummaryFromPlainTextFile(exportedData)}
#getSummaryFromBase64File(data){const match=data.match(/^[a-zA-Z0-9+/=]+$/)
;if(match)try{return JSON.parse(base64ToString(data))}catch(error){
console.error(error)}return null}#getSummaryFromAutorunFile(data){
const match=data.match(/const LESSON_TITLE_B64\s*=\s*['"]([a-zA-Z0-9+/=]+)['"];\s*const LESSON_SOURCE_B64\s*=\s*['"]([a-zA-Z0-9+/=]+)['"];/)
;if(match)try{return{title:base64ToString(match[1]),
content:base64ToString(match[2])}}catch(error){console.error(error)}return null}
#getSummaryFromPlainTextFile(data){
if(data.match(/^ {0,3}(?:\(*([i?])\1*[) ]+)(.*)$/m))return{title:"",content:data
};else return null}}class HomePresenter extends Presenter{
static REMOTE_LIBRARY_ID="REMOTE";static LOCAL_LIBRARY_ID="LOCAL"
;static FILE_LIBRARY_ID="FILE_SYSTEM";#importSummary;constructor(config){
config.titles=[i18n`d6e5c296474cad126efdfa515a47f1f8::`,i18n`d63e17b8da99189aff04b37070c61c8e::`]
;config.itemClassName="library";super(config);this.#buildContent()
;this.hideHomeButton()}#buildContent(){let button=new ManagedElement("button")
;icons.applyIconToElement(icons.library,button,{
overrideText:i18n`adc4c5f402b068fae17cc33ecf648d5d::`,hideText:false})
;this.presentation.appendChild(button)
;this.listenToEventOn("click",button,HomePresenter.REMOTE_LIBRARY_ID)
;button=new ManagedElement("button")
;icons.applyIconToElement(icons.library,button,{
overrideText:i18n`38e69d0f533dbbdcb17089ef96094b43::`,hideText:false})
;this.presentation.appendChild(button)
;this.listenToEventOn("click",button,HomePresenter.LOCAL_LIBRARY_ID)
;button=new FileInputButton({
overrideText:i18n`9148a8aa9f535484f03b98ae018a76b6::`,hideText:false})
;this.presentation.appendChild(button)
;this.listenToEventOn(FileInputButton.DATA_AVAILABLE_EVENT_NAME,button,HomePresenter.FILE_LIBRARY_ID)
;this.addPreamble(parseMarkdown(getHomeText()))}
handleDataAvailableEvent(event,eventIdIgnored){const importer=new LessonImporter
;this.#importSummary=importer.convert(event.detail.content)
;if(!this.#importSummary){
toast(`Unable to import the file ${event.detail?.file?.name}. The file may be corrupt or the wrong type of file.`)
;return}this.handleClickEvent(event,HomePresenter.FILE_LIBRARY_ID)}next(index){
if(index===HomePresenter.FILE_LIBRARY_ID){
const unmanagedLesson=new UnmanagedLesson(this.#importSummary.title,this.#importSummary.content,LessonOrigin.FILE_SYSTEM)
;this.config.lesson=unmanagedLesson.lesson
;this.config.lessonInfo=unmanagedLesson.lessonInfo
;return this.config.factory.getSuitableProblemPresenter(this.config)}else{
lessonManager.usingLocalLibrary=index===HomePresenter.LOCAL_LIBRARY_ID
;return super.next(index)}}}class ListPresenter extends Presenter{
constructor(config){super(config,"ul");this.#buildContent()}#buildContent(){
this.config?.titles?.forEach(((title,index)=>{
const itemElement=new ManagedElement("li",this.config.itemClassName)
;itemElement.setAttribute("tabindex","0")
;itemElement.classList.add("selectable")
;this.presentation.appendChild(itemElement);itemElement.innerHTML=title
;this.listenToEventOn("click",itemElement,index)}))
;if(this.config?.factory?.hasPrevious(this))this.showBackButton()}}
class LibraryPresenter extends ListPresenter{constructor(config){
config.titles=lessonManager.bookTitles;config.itemClassName="book";super(config)
;this.#buildPreamble();this.autoAddKeydownEvents()}#buildPreamble(){
this.addPreamble(`<span class='library-title'>${lessonManager.libraryTitle}</span>`)
}next(index){lessonManager.bookIndex=index;return super.next(index)}}
class BookPresenter extends ListPresenter{constructor(config){
config.titles=lessonManager.chapterTitles;config.itemClassName="chapter"
;super(config);this.autoAddKeydownEvents();this.#buildPreamble()}
#buildPreamble(){
this.addPreamble(`<span class='library-title'>${lessonManager.libraryTitle}</span>\n    <span class='book-title'>${lessonManager.bookTitle}</span>\n    `)
}next(index){lessonManager.chapterIndex=index;return super.next(index)}}
class ChapterPresenter extends ListPresenter{ADD_LESSON_EVENT_ID="add-lesson"
;constructor(config){config.titles=lessonManager.lessonTitles
;config.itemClassName="lesson";super(config);this.#buildPreamble()
;if(lessonManager.usingLocalLibrary)this.#addNewSlotButton()
;this.autoAddKeydownEvents()}#buildPreamble(){
if(lessonManager.usingLocalLibrary)this.addPreamble(`<span class='library-title'>${lessonManager.libraryTitle}</span>`);else this.addPreamble(`<span class='library-title'>${lessonManager.libraryTitle}</span>\n        <span class='book-title'>${lessonManager.bookTitle}</span>\n        <span class='chapter-title'>${lessonManager.chapterTitle}</span>\n        `)
}#addNewSlotButton(){const button=new ManagedElement("button")
;icons.applyIconToElement(icons.addLesson,button)
;this.listenToEventOn("click",button,this.ADD_LESSON_EVENT_ID)
;this.addButtonToBar(button)}handleClickEvent(event,eventId){
if(eventId===this.ADD_LESSON_EVENT_ID)return lessonManager.addLessonToLocalLibrary().then((()=>{
super.handleClickEvent(event,eventId)}));super.handleClickEvent(event,eventId)}
next(index){
if(index===this.ADD_LESSON_EVENT_ID)return new ChapterPresenter(this.config);else{
lessonManager.lessonIndex=index;return super.next(index)}}}
class LessonPresenter extends Presenter{static EDIT_EVENT_ID="EDIT_LESSON"
;constructor(config){config.titles=["placeholder"]
;config.itemClassName="lesson-summary";super(config)
;this.config.lessonInfo=lessonManager.currentLessonInfo
;this.#buildCustomContent();this.autoAddKeydownEvents()
;if(this.config?.factory?.hasPrevious(this))this.showBackButton()}
#buildCustomContent(){
this.presentation.createAndAppendChild("h2",null,i18n`8f8bfb5f6d96fb3113a39f781f6fffe4::`)
;const summaryBlock=this.presentation.createAndAppendChild("div","lesson-summary")
;summaryBlock.createAndAppendChild("span","lesson-title",this.config.lessonInfo.titles.lesson)
;summaryBlock.createAndAppendChild("p",null,i18n`d6cd575eb2dab528448d6c6810598452::`)
;summaryBlock.createAndAppendChild("span","library-title",this.config.lessonInfo.titles.library)
;if(!lessonManager.usingLocalLibrary){
summaryBlock.createAndAppendChild("span","book-title",this.config.lessonInfo.titles.book)
;summaryBlock.createAndAppendChild("span","chapter-title",this.config.lessonInfo.titles.chapter)
}this.presentation.appendChild(summaryBlock)
;this.applyIconToNextButton(icons.playLesson);this.showNextButton()
;this.#addEditButtonIfLocal()}#addEditButtonIfLocal(){
if(this.config.lessonInfo.usingLocalLibrary){
const editButton=new ManagedElement("button")
;icons.applyIconToElement(icons.edit,editButton);this.addButtonToBar(editButton)
;this.listenToEventOn("click",editButton,LessonPresenter.EDIT_EVENT_ID)}}
next(eventId){
if(eventId===LessonPresenter.EDIT_EVENT_ID)return this.config.factory.getEditor(this,this.config);else return lessonManager.loadCurrentLesson().then((cachedLesson=>{
const lessonSource=LessonSource.createFromSource(cachedLesson.content)
;this.config.lesson=lessonSource.convertToLesson()
;return this.config.factory.getNext(this,this.config)}))}previous(){
return this.config.factory.getPrevious(this,this.config)}}
class LessonEditorPresenter extends Presenter{static SAVE_EVENT_ID="SAVE"
;static EXPORT_EVENT_ID="EXPORT";static IMPORT_EVENT_ID="IMPORT"
;static DELETE_EVENT_ID="DELETE";#lessonTitleElement;#lessonTitleValue
;#mainEditorElement;#saveButton;#importForm;#importButton;#exportButton;#dirty
;constructor(config){config.titles=["placeholder"]
;config.itemClassName="lesson-editor";super(config);this.#buildCustomContent()
;this.#addSaveButton();this.#addImportButton();this.#addExportButton()
;this.#addDeleteButton();this.expandPresentation();this.#setEditorAsClean()
;this.applyIconToNextButton(icons.closeEditor);this.showNextButton()
;this.#dirty=false}async#buildCustomContent(){
const cachedLesson=await lessonManager.loadCurrentLesson()
;this.#lessonTitleValue=this.config.lessonInfo.titles.lesson
;this.#lessonTitleElement=new LabeledControl(LocalLibrary,{
defaultValue:this.#lessonTitleValue,
label:i18n`b78a3223503896721cca1303f776159b::`,type:"input",onupdate:value=>{
this.#lessonTitleValue=value;this.#setEditorAsDirty()}},{storage:null})
;this.addPreamble(this.#lessonTitleElement)
;this.#mainEditorElement=this.presentation.createAndAppendChild("textarea","lesson-editor",cachedLesson.content)
;this.listenToEventOn("input",this.#mainEditorElement)}#setEditorAsDirty(){
this.#saveButton.disabled=false;this.#dirty=true}#setEditorAsClean(){
this.#saveButton.disabled=true;this.#dirty=false}#addSaveButton(){
this.#saveButton=new ManagedElement("button")
;icons.applyIconToElement(icons.save,this.#saveButton)
;this.listenToEventOn("click",this.#saveButton,LessonEditorPresenter.SAVE_EVENT_ID)
;this.addButtonToBar(this.#saveButton)}#addImportButton(){
this.#importForm=new ManagedElement("form","button-wrapper")
;this.#importButton=new FileInputButton
;this.#importForm.appendChild(this.#importButton)
;this.listenToEventOn(FileInputButton.DATA_AVAILABLE_EVENT_NAME,this.#importButton,LessonEditorPresenter.IMPORT_EVENT_ID)
;this.addButtonToBar(this.#importForm)}#addExportButton(){
this.#exportButton=new ManagedElement("button")
;icons.applyIconToElement(icons.export,this.#exportButton)
;this.listenToEventOn("click",this.#exportButton,LessonEditorPresenter.EXPORT_EVENT_ID)
;this.addButtonToBar(this.#exportButton)}#addDeleteButton(){
const deleteButton=new ManagedElement("button")
;icons.applyIconToElement(icons.delete,deleteButton)
;this.listenToEventOn("click",deleteButton,LessonEditorPresenter.DELETE_EVENT_ID)
;this.addButtonToBar(deleteButton)}
handleDataAvailableEvent(event,eventIdIgnored){this.#importForm.element.reset()
;const importer=new LessonImporter
;const importSummary=importer.convert(event.detail.content);if(!importSummary){
toast(`Unable to import the file ${event.detail?.file?.name}. The file may be corrupt or the wrong type of file.`)
;return}
return ModalDialog.showConfirm(i18n`b087a0f6368816df1cbbf2700e7de192::`).then((answer=>{
if(answer===ModalDialog.DialogIndex.CONFIRM_YES){
this.#lessonTitleElement.setValue(importSummary.title)
;this.#lessonTitleValue=importSummary.title
;this.#mainEditorElement.value=importSummary.content;this.#setEditorAsDirty()}
return}))}handleInputEvent(eventIgnored,eventIdIgnored){this.#setEditorAsDirty()
}async allowNavigation(eventIgnored,eventIdIgnored){
if(this.#dirty)return this.askIfOkayToLeave(i18n`0fd040b4b27f744bd6c771e624f1a466::`);else return true
}async handleClickEvent(event,eventId){switch(eventId){
case LessonEditorPresenter.DELETE_EVENT_ID:{
const deleted=await this.#deleteLessonIfConfirmed();if(!deleted)return}break
;case LessonEditorPresenter.SAVE_EVENT_ID:return this.#saveLessonLocally()
;case LessonEditorPresenter.EXPORT_EVENT_ID:return this.#exportLesson()}
return super.handleClickEvent(event,eventId)}next(eventId){
if(eventId===LessonEditorPresenter.DELETE_EVENT_ID)return this.config.factory.getLibraryPresenter(this,this.config);else return super.next(eventId)
}#deleteLessonIfConfirmed(){
return ModalDialog.showConfirm(i18n`784dc4bc7f2a0374bd038e01caf85d4d::`,i18n`f89bc18e7afb05b3ac03300bec624b63::`).then((response=>{
if(response===ModalDialog.DialogIndex.CONFIRM_YES)return this.#deleteLesson();else return false
}))}#deleteLesson(){
return lessonManager.deleteLocalLibraryCurrentLesson().then((()=>true))}
#saveLessonLocally(){
lessonManager.updateCurrentLessonContent(this.#lessonTitleValue,this.#mainEditorElement.value)
;this.#setEditorAsClean()}#exportLesson(){
const exporter=new LessonExporter(this.#lessonTitleValue,this.#mainEditorElement.value)
;exporter.exportLesson()}}const CelebrationType={HAPPY:"smiley-face",
SAD:"sad-face"};class Celebrator extends ManagedElement{#animationClass;#busy
;constructor(){super("div","celebrator");this.appendTo(document.body)
;this.listenToOwnEvent("animationend");this.#busy=false;this.hide()}
handleAnimationendEvent(eventIgnored,eventIdIgnored){
console.debug("Celebration ended.");this.hide();this.#busy=false}
celebrate(celebration=CelebrationType.HAPPY){if(this.#busy){
console.warn("Celebration busy so new celebration ignored.");return}this.show()
;if(this.#animationClass)this.classList.remove(this.#animationClass)
;this.#animationClass=celebration;this.classList.add(this.#animationClass)}}
const celebrator=new Celebrator;const ClassName={ANSWER:"problem-answer",
ANSWERS:"problem-answers",EXPLANATION:"problem-explanation",
INCORRECT_ANSWER:"incorrect-answer",CORRECT_ANSWER:"correct-answer",
MISSED_ANSWER:"missed-answer",AVOIDED_ANSWER:"avoided-answer",
QUESTION:"problem-question",SELECTED_ANSWER:"selected-answer"};const ElementId={
CLICKED_ANSWER:"answer",CLICKED_SUBMIT:"submit",CLICKED_NEXT:"next"}
;const Attribute={RIGHT_OR_WRONG:"data-code"};const AnswerSelectionState={
UNDEFINED:0,CORRECT:1,INCORRECT:2,MISSED:3,AVOIDED:4}
;class ProblemPresenter extends Presenter{#problem;#questionElement
;#answerElement;#explanationElement;#submitButton;#freezeAnswers
;constructor(config){config.titles=[];config.itemClassName=""
;super(config,"div");this.#problem=config.lesson.getNextProblem()
;this.#questionElement=new ManagedElement("div",ClassName.QUESTION)
;this.#questionElement.innerHTML=this.#problem.question.html
;this.#answerElement=new ManagedElement("div",ClassName.ANSWERS)
;this.#explanationElement=new ManagedElement("div",ClassName.EXPLANATION)
;this.#explanationElement.innerHTML=this.#problem.explanation.html
;this.#explanationElement.hide()
;this.presentation.appendChild(this.#questionElement)
;this.presentation.appendChild(this.#answerElement)
;this.presentation.appendChild(this.#explanationElement);this.addButtons()
;this.#submitButton.show();this.#freezeAnswers=false
;if(!this.config.lessonInfo.managed)this.hideHomeButton()}get problem(){
return this.#problem}get questionElement(){return this.#questionElement}
get answerElement(){return this.#answerElement}get explanationElement(){
return this.#explanationElement}get submitButton(){return this.#submitButton}
addButtons(){this.#addSubmitButton()}#addSubmitButton(){
this.#submitButton=new ManagedElement("button",ClassName.ANSWER_SUBMIT)
;icons.applyIconToElement(icons.submitAnswer,this.#submitButton.element)
;this.listenToEventOn("click",this.#submitButton,ElementId.CLICKED_SUBMIT)
;this.addButtonToBar(this.#submitButton)}presentOnStage(stage){
if(this.#problem.intro.html!==""&&this.#problem.questionType!==QuestionType.SLIDE)return ModalDialog.showInfo(this.#problem.intro.html).then((()=>super.presentOnStage(stage)));else return super.presentOnStage(stage)
}handleClickEvent(event,eventId){switch(eventId){case ElementId.CLICKED_ANSWER:
if(!this.#freezeAnswers)this.processClickedAnswer(event.currentTarget);break
;case ElementId.CLICKED_SUBMIT:this.#freezeAnswers=true
;this.#processClickedSubmit();break;default:
super.handleClickEvent(event,eventId)}}async allowNavigation(event,eventId){
if(eventId===Presenter.HOME_ID||eventId===Presenter.PREVIOUS_ID)return this.askIfOkayToLeave(i18n`d54132fd8e2fa9a6c89e8c27bc122fc2::`);else return true
}processClickedAnswer(target){
console.debug(`Process ${target.tagName}:${target.className}`)}
#processClickedSubmit(){const correct=this.areAnswersCorrect()
;this.config.lesson.markProblem(this.#problem,correct?MarkState.CORRECT:MarkState.INCORRECT)
;this.#submitButton.hide();this.showNextButton(true)
;celebrator.celebrate(correct?CelebrationType.HAPPY:CelebrationType.SAD)}
areAnswersCorrect(){console.debug(`Override markAnswers should be overridden.`)
;return false}}function shuffle(data){var count=data.length;while(count){
const index=Math.floor(Math.random()*count--)
;[data[count],data[index]]=[data[index],data[count]]}return data}
class ChoiceProblemPresenter extends ProblemPresenter{#answerListElement
;constructor(config){super(config);this.#buildSimpleOrMultiple()}
#buildSimpleOrMultiple(){this.#buildAnswers()
;this.autoAddKeydownEvents(this.answerElement.managedChildren)}#buildAnswers(){
this.#answerListElement=new ManagedElement("ul")
;this.answerElement.appendChild(this.#answerListElement)
;this.#answerListElement.setAttributes({
"aria-label":i18n`3e67adbbda024584ca573026d35039d0::`,
"aria-role":this.problem.questionType===QuestionType.MULTI?"":"radiogroup"})
;const answers=[]
;this.#pushAnswerElementsToArray(this.problem.rightAnswers,answers,true)
;this.#pushAnswerElementsToArray(this.problem.wrongAnswers,answers,false)
;shuffle(answers);answers.forEach((element=>{
this.#answerListElement.appendChild(element)
;this.listenToEventOn("click",element,ElementId.CLICKED_ANSWER)
;this.listenToEventOn("keydown",element,ElementId.CLICKED_ANSWER)}))
;setTimeout((()=>this.#answerListElement.children[0].focus()))}
#pushAnswerElementsToArray(answers,destination,areRight){
const role=this.problem.questionType===QuestionType.MULTI?"checkbox":"radio"
;answers.forEach((value=>{
const element=new ManagedElement("li",ClassName.ANSWER)
;element.classList.add("selectable");element.innerHTML=value.html
;element.setSafeAttribute(Attribute.RIGHT_OR_WRONG,areRight)
;element.setAttributes({tabindex:"0","aria-role":role,"aria-checked":false,
"aria-label":i18n`e5f965d7cf958839a31acefa71728846::`})
;destination.push(element)}))}processClickedAnswer(element){
switch(this.problem.questionType){case QuestionType.MULTI:
element.classList.toggle(ClassName.SELECTED_ANSWER);break
;case QuestionType.SIMPLE:{
const selected=element.classList.contains(ClassName.SELECTED_ANSWER)
;this.#deselectAllAnswers();if(!selected)this.#selectAnswer(element)}break
;default:
console.error(`Wrong presenter ${this.constructor.name} being used for ${this.problem.questionType}`)
;break}}#selectAnswer(element){element.setAttribute("aria-checked","true")
;element.classList.add(ClassName.SELECTED_ANSWER)}#deselectAnswer(element){
element.setAttribute("aria-checked","false")
;element.classList.remove(ClassName.SELECTED_ANSWER)}#deselectAllAnswers(){
const allAnswers=document.querySelectorAll(`.${ClassName.ANSWER}`)
;allAnswers.forEach((element=>{this.#deselectAnswer(element)}))}
areAnswersCorrect(){let correct=true
;const allAnswers=document.querySelectorAll(`.${ClassName.ANSWER}`)
;allAnswers.forEach((element=>{
if(!this.#processAnswerState(element))correct=false
;element.classList.replace("selectable","selectable-off")
;element.setAttribute("tabindex","-1")}));return correct}
#processAnswerState(element){this.freezeAnswers=true
;const elementIsCorrect=ManagedElement.getSafeAttribute(element,Attribute.RIGHT_OR_WRONG).toLowerCase()==="true"
;const selected=element.classList.contains(ClassName.SELECTED_ANSWER)
;let answerState
;if(elementIsCorrect)answerState=selected?AnswerSelectionState.CORRECT:AnswerSelectionState.MISSED;else answerState=selected?AnswerSelectionState.INCORRECT:AnswerSelectionState.AVOIDED
;this.#showAnswerState(element,answerState)
;return answerState===AnswerSelectionState.CORRECT||answerState===AnswerSelectionState.AVOIDED
}#showAnswerState(element,answerState){let className="";switch(answerState){
case AnswerSelectionState.AVOIDED:className=ClassName.AVOIDED_ANSWER;break
;case AnswerSelectionState.CORRECT:className=ClassName.CORRECT_ANSWER;break
;case AnswerSelectionState.INCORRECT:className=ClassName.INCORRECT_ANSWER;break
;case AnswerSelectionState.MISSED:className=ClassName.MISSED_ANSWER;break}
element.classList.add(className)}handleKeydownEvent(event,eventId){
if(eventId===ElementId.CLICKED_ANSWER)switch(event.key){case" ":case"Enter":
event.stopPropagation();this.handleClickEvent(event,eventId);break
}else return super.handleKeydownEvent(event,eventId)}}
class FillProblemPresenter extends ProblemPresenter{#missingWordSelectors
;#missingWordCorrectAnswers;constructor(config){super(config)
;this.#createMissingWordSelectors();this.answerElement.hide()}
#createMissingWordSelectors(){
const questionWordElements=this.questionElement.querySelectorAll(".missing-word")
;this.#missingWordCorrectAnswers=[];questionWordElements.forEach((element=>{
const correctAnswer=ManagedElement.getSafeAttribute(element,"data-missing-word")
;this.#missingWordCorrectAnswers.push(correctAnswer)}))
;const redHerrings=this.problem.firstWordsOfWrongAnswers
;const options=["...",...this.#missingWordCorrectAnswers,...redHerrings]
;options.sort();const settingDefinition={defaultValue:"...",options:options}
;this.#missingWordSelectors=[];questionWordElements.forEach(((element,index)=>{
const selector=new SelectControl(index,settingDefinition)
;element.appendChild(selector.element);this.#missingWordSelectors.push(selector)
}));this.autoAddKeydownEvents(this.#missingWordSelectors)}areAnswersCorrect(){
let correct=true;this.#missingWordSelectors.forEach(((selectControl,index)=>{
const givenAnswer=selectControl.getText()
;const container=selectControl.parentElement;selectControl.remove()
;container.textContent=givenAnswer
;if(givenAnswer===this.#missingWordCorrectAnswers[index])this.#showAnswerState(container,AnswerSelectionState.CORRECT);else{
this.#showAnswerState(container,AnswerSelectionState.INCORRECT);correct=false}
}));return correct}#showAnswerState(element,answerState){let className=""
;switch(answerState){case AnswerSelectionState.AVOIDED:
className=ClassName.AVOIDED_ANSWER;break;case AnswerSelectionState.CORRECT:
className=ClassName.CORRECT_ANSWER;break;case AnswerSelectionState.INCORRECT:
className=ClassName.INCORRECT_ANSWER;break;case AnswerSelectionState.MISSED:
className=ClassName.MISSED_ANSWER;break}element.classList.add(className)}}
class OrderProblemPresenter extends ProblemPresenter{#missingWordSelectors
;#missingWordCorrectAnswers;constructor(config){super(config);this.#buildOrder()
}#buildOrder(){
this.#missingWordCorrectAnswers=this.problem.firstWordsOfRightAnswers
;const redHerrings=this.problem.firstWordsOfWrongAnswers
;const options=["...",...this.#missingWordCorrectAnswers,...redHerrings]
;options.sort();const settingDefinition={defaultValue:"...",options:options}
;const orderedAnswers=new ManagedElement("div","problem-ordered-answers")
;this.#missingWordSelectors=[]
;for(let index=0;index<this.problem.rightAnswers.length;index++){
const span=new ManagedElement("span","missing-word")
;const selectControl=new SelectControl(index,settingDefinition)
;this.#missingWordSelectors.push(selectControl);span.appendChild(selectControl)
;orderedAnswers.appendChild(span)}this.answerElement.appendChild(orderedAnswers)
;this.autoAddKeydownEvents(this.#missingWordSelectors)}areAnswersCorrect(){
let correct=true;this.#missingWordSelectors.forEach(((selectControl,index)=>{
const givenAnswer=selectControl.getText()
;const container=selectControl.parentElement;selectControl.remove()
;container.textContent=givenAnswer
;if(givenAnswer===this.#missingWordCorrectAnswers[index])this.#showAnswerState(container,AnswerSelectionState.CORRECT);else{
this.#showAnswerState(container,AnswerSelectionState.INCORRECT);correct=false}
}));return correct}#showAnswerState(element,answerState){let className=""
;switch(answerState){case AnswerSelectionState.AVOIDED:
className=ClassName.AVOIDED_ANSWER;break;case AnswerSelectionState.CORRECT:
className=ClassName.CORRECT_ANSWER;break;case AnswerSelectionState.INCORRECT:
className=ClassName.INCORRECT_ANSWER;break;case AnswerSelectionState.MISSED:
className=ClassName.MISSED_ANSWER;break}element.classList.add(className)}}
const AVERAGE_WORDS_PER_MINUTE=130;class ReadSpeedCalculator{static MIN_WPM=80
;static MAX_WPM=1e3;#secondsPerWord
;constructor(wordsPerMinute=AVERAGE_WORDS_PER_MINUTE){
this.setWordsPerMinute(wordsPerMinute)}setWordsPerMinute(wordsPerMinute){
let wpm=parseInt(wordsPerMinute);if(isNaN(wpm)){
console.error(`Attempt made to set words per minute to non-numeric value of ${wordsPerMinute}`)
;return}wpm=Math.max(wordsPerMinute,ReadSpeedCalculator.MIN_WPM)
;wpm=Math.min(wpm,ReadSpeedCalculator.MAX_WPM);this.#secondsPerWord=60/wpm}
getSecondsToRead(data){const plainText=getPlainTextFromHtml(data)
;const words=plainText.trim().split(/\s+/)
;return words.length*this.#secondsPerWord}}class DisplayCards{#blocks;#index
;#readSpeedCalculator;constructor(html){this.#blocks=this.#splitHtml(html)
;this.#index=0;this.#readSpeedCalculator=new ReadSpeedCalculator}
#splitHtml(html){const blocks=html.split(/(<\/(?:p|div)>)/i);const result=[]
;const iterations=Math.ceil(blocks.length/2)
;for(let index=0;index<iterations;index++){const tail=blocks[index*2+1]??""
;result.push(`${blocks[index*2]}${tail}`.trim())}return result.filter((e=>e))}
getNext(){if(this.#index<this.#blocks.length){
const html=this.#blocks[this.#index++];return{html:html,
readTimeSecs:this.#readSpeedCalculator.getSecondsToRead(html)}}return null}
get hasMore(){return this.#index<this.#blocks.length}reset(){this.#index=0}
setWordsPerMinute(wpm){this.#readSpeedCalculator.setWordsPerMinute(wpm)}}
const MediaClass={PAUSE:"pause",PLAY:"play",SKIP:"skip"};const MediaID={
PAUSE:"pause",PLAY:"play",SKIP:"skip"};const CardState={INACTIVE:0,ARRIVING:1,
READING:2,LEAVING:3};class SlideProblemPresenter extends ProblemPresenter{#cards
;#visualCard;#skipButton;#playButton;#pauseButton;#readTimerId
;#cardState=CardState.INACTIVE;#currentCardDetail;#paused;constructor(config){
super(config);this.#buildSlideShow();this.submitButton.hide()}#buildSlideShow(){
this.#cards=new DisplayCards(this.problem.intro.html||this.problem.question.html)
;this.#visualCard=new ManagedElement("div","display-card")
;this.listenToEventOn("animationend",this.#visualCard)
;this.questionElement.removeChildren()
;this.questionElement.appendChild(this.#visualCard);this.expandPresentation()
;this.#addMediaButtons()}#addMediaButtons(){
this.#playButton=new ManagedElement("button",MediaClass.PLAY)
;this.#addButtonToButtonBar(this.#playButton,icons.play,MediaID.PLAY)
;this.#pauseButton=new ManagedElement("button",MediaClass.PAUSE)
;this.#addButtonToButtonBar(this.#pauseButton,icons.pause,MediaID.PAUSE)
;this.#skipButton=new ManagedElement("button",MediaClass.SKIP)
;this.#addButtonToButtonBar(this.#skipButton,icons.skip,MediaID.SKIP)}
#addButtonToButtonBar(button,icon,eventId){
icons.applyIconToElement(icon,button.element)
;this.listenToEventOn("click",button,eventId);this.addButtonToBar(button)}
presentOnStage(stageElement){this.#showMediaButtons(true)
;setTimeout((()=>this.#showNextCard()))
;return super.presentOnStage(stageElement)}#setCardState(cardState){
switch(cardState){case CardState.ARRIVING:
this.#visualCard.classList.remove("card-offscreen")
;this.#visualCard.classList.add("card-onscreen");break;case CardState.LEAVING:
this.#visualCard.classList.remove("card-onscreen")
;this.#visualCard.classList.add("card-offscreen");break}
this.#cardState=cardState}#showNextCard(){console.log("Show the next card")
;if(this.#endShowIfLastCard()){
this.handleClickEvent(new Event("click"),Presenter.NEXT_ID);return}
const readingSpeed=persistentData.getFromStorage("readingSpeed",130)
;this.#cards.setWordsPerMinute(readingSpeed)
;this.#currentCardDetail=this.#cards.getNext()
;this.#visualCard.innerHTML=this.#currentCardDetail.html
;const cardRect=this.#visualCard.getBoundingClientRect()
;const presentationRect=this.presentation.getBoundingClientRect()
;const verticalSpace=presentationRect.height-cardRect.height
;if(verticalSpace>0)this.#visualCard.style.marginTop=`${Math.floor(verticalSpace/2)}px`;else this.#visualCard.style.marginTop=`0px`
;this.#setCardState(CardState.ARRIVING);this.#endShowIfLastCard()}#readCard(){
this.#setCardState(CardState.READING)
;if(!this.#paused)this.#readTimerId=setTimeout((()=>{this.#removeCard()
}),this.#currentCardDetail.readTimeSecs*1e3)}#removeCard(){
this.#setCardState(CardState.LEAVING)}#endShowIfLastCard(){
if(!this.#cards.hasMore){this.#pauseButton.hide();this.#playButton.hide()
;this.#skipButton.hide();this.showNextButton(true);return true}return false}
handleClickEvent(event,eventId){switch(eventId){case MediaID.PAUSE:
clearTimeout(this.#readTimerId);this.#showMediaButtons(false);this.#paused=true
;return;case MediaID.PLAY:clearTimeout(this.#readTimerId)
;this.#showMediaButtons(true)
;if(this.#cardState===CardState.READING)this.#removeCard();this.#paused=false
;return;case MediaID.SKIP:clearTimeout(this.#readTimerId)
;this.#showMediaButtons(true)
;if(this.#cardState===CardState.ARRIVING||this.#cardState===CardState.READING)this.#removeCard()
;this.#paused=false;return}super.handleClickEvent(event,eventId)}
handleAnimationendEvent(eventIgnored,eventIdIgnored){switch(this.#cardState){
case CardState.ARRIVING:this.#readCard();break;case CardState.LEAVING:
this.#showNextCard();break;default:
console.error(`Animation unexpectedly ended with card in state ${this.#cardState}`)
}}#showMediaButtons(playing){if(playing){this.#pauseButton.show()
;this.#playButton.hide();this.#skipButton.show();this.#pauseButton.focus()}else{
this.#pauseButton.hide();this.#playButton.show();this.#skipButton.hide()
;this.#playButton.focus()}}}const MedalDetails={POOR:{upperLimit:25,
cssClass:"poor"},BAD:{upperLimit:50,cssClass:"bad"},GOOD:{upperLimit:75,
cssClass:"good"},EXCELLENT:{upperLimit:100,cssClass:"excellent"}}
;class MarksPresenter extends Presenter{static RETRY_LESSON_ID="RETRY_LESSON"
;#marks;constructor(config){super(config);this.#buildContent()}#buildContent(){
this.#addHeadings();this.#addAnswers();this.#addResult();this.#addRetryButton()
;this.#adjustButtonsForOrigin()}#adjustButtonsForOrigin(){
switch(this.config.lessonInfo.origin){case LessonOrigin.SESSION:
case LessonOrigin.EMBEDDED:this.hideHomeButton()
;this.applyIconToNextButton(icons.exit);this.showNextButton();break
;case LessonOrigin.REMOTE:this.applyIconToNextButton(icons.selectLesson)
;this.showNextButton();break}}#addHeadings(){
const lessonTitle=this.config.lessonInfo.titles.lesson||this.config.lesson.metadata.getValue("TITLE",i18n`80ba26f176878a8c09fed91eec1847ac::`)
;this.presentation.createAndAppendChild("h1",null,i18n`8a7b5ed72835af8c2804d8f5047da3d3::`)
;this.presentation.createAndAppendChild("h2",null,lessonTitle)
;this.#addBookDetailsIfManaged()}#addBookDetailsIfManaged(){
if(this.config.lessonInfo.managed){let bookDetails="<p>from:</p>"
;if(lessonManager.usingLocalLibrary)bookDetails+=`<span class='library-title'>${this.config.lessonInfo.titles.library}</span>`;else bookDetails+=`<span class='library-title'>${this.config.lessonInfo.titles.library}</span> \n        <span class='book-title'>${this.config.lessonInfo.titles.book}</span>\n        <span class='chapter-title'>${this.config.lessonInfo.titles.chapter}</span>`
;this.presentation.createAndAppendChild("div",null,bookDetails)}}
#addRetryButton(){const repeatButton=new ManagedElement("button")
;icons.applyIconToElement(icons.repeatLesson,repeatButton)
;this.addButtonToBar(repeatButton)
;this.listenToEventOn("click",repeatButton,MarksPresenter.RETRY_LESSON_ID)}
#addAnswers(){const answers=new ManagedElement("ul")
;this.config.lesson.marks.markedItems.forEach((markedItem=>{
const li=new ManagedElement("li")
;li.innerHTML=`${markedItem.item.question.plainText}`
;li.classList.add(this.#getClassForMarkState(markedItem.state))
;answers.appendChild(li)}));this.presentation.appendChild(answers)}#addResult(){
const marks=this.config.lesson.marks
;const totalQuestions=marks.correct+marks.incorrect+marks.skipped
;const percent=totalQuestions==0?0:Math.round(100*marks.correct/totalQuestions)
;const summary=i18n`dba099f02fa6e674228bce51535a5cc4::${percent}${marks.correct}${totalQuestions}`
;const summaryItem=this.presentation.createAndAppendChild("p","result-summary",summary)
;summaryItem.classList.add(this.#calcMedalClass(percent))}
#calcMedalClass(percent){for(const key in MedalDetails){
const details=MedalDetails[key]
;if(percent<details.upperLimit)return details.cssClass}
return MedalDetails.EXCELLENT.cssClass}#getClassForMarkState(state){
switch(state){case MarkState.CORRECT:return"correct";case MarkState.INCORRECT:
return"incorrect";case MarkState.SKIPPED:return"skipped"}return"unknown-state"}
next(eventId){switch(eventId){case MarksPresenter.RETRY_LESSON_ID:
return this.config.factory.getProblemAgain(this,this.config)
;case Presenter.NEXT_ID:
if(this.config.lessonInfo.origin===LessonOrigin.SESSION){sessionStorage.clear()
;window.top.location.replace(window.location.href);return}}
return super.next(eventId)}}const NAVIGATION={HomePresenter:{previous:null,
next:LibraryPresenter},LibraryPresenter:{previous:HomePresenter,
next:BookPresenter},BookPresenter:{previous:LibraryPresenter,
next:ChapterPresenter},ChapterPresenter:{previous:BookPresenter,
next:LessonPresenter},LessonPresenter:{previous:ChapterPresenter,
next:ProblemPresenter},LessonEditorPresenter:{previous:LessonPresenter,
next:LessonPresenter},ProblemPresenter:{previous:null,next:ProblemPresenter},
ChoiceProblemPresenter:{previous:null,next:ProblemPresenter},
FillProblemPresenter:{previous:null,next:ProblemPresenter},
OrderProblemPresenter:{previous:null,next:ProblemPresenter},
SlideProblemPresenter:{previous:null,next:ProblemPresenter},MarksPresenter:{
previous:null,next:ChapterPresenter}};class PresenterFactory{
getSuitableProblemPresenter(config){
const problem=config.lesson.peekAtNextProblem();switch(problem.questionType){
case QuestionType.ORDER:return new OrderProblemPresenter(config)
;case QuestionType.FILL:return new FillProblemPresenter(config)
;case QuestionType.MULTI:return new ChoiceProblemPresenter(config)
;case QuestionType.SIMPLE:return new ChoiceProblemPresenter(config)
;case QuestionType.SLIDE:default:return new SlideProblemPresenter(config)}}
hasNext(caller){return!!NAVIGATION[caller.constructor.name].next}
hasPrevious(caller){return!!NAVIGATION[caller.constructor.name].previous}
getHome(config){return new HomePresenter(config)}getEditor(caller,config){
if(caller instanceof LessonPresenter)return new LessonEditorPresenter(config);else{
console.error(`Attempt to edit a presenter for which there is no editor. Going home.`)
;return new HomePresenter(config)}}getNext(caller,config){
if(caller instanceof ProblemPresenter||caller instanceof LessonPresenter)if(config.lesson.hasMoreProblems)return this.getSuitableProblemPresenter(config);else return new MarksPresenter(config);else{
const klass=this.#skipUnnecessaryListPresenters(NAVIGATION[caller.constructor.name].next)
;return klass?new klass(config):null}}getPrevious(caller,config){
const klass=NAVIGATION[caller.constructor.name].previous
;return klass?new klass(config):null}getProblemAgain(caller,config){
if(!(caller instanceof MarksPresenter)){
console.error("Attempt to retry problem from other than a MarksPresenter.")
;return this.getHome(config)}else{config.lesson.restart()
;if(config.lesson.hasMoreProblems)return this.getSuitableProblemPresenter(config);else return new MarksPresenter(config)
}}getLibraryPresenter(callerIgnored,config){
const klass=this.#skipUnnecessaryListPresenters(LibraryPresenter)
;return new klass(config)}#skipUnnecessaryListPresenters(presenterClass){
for(;;){const nextClass=this.#moveToNextPresenterIfUnnecessary(presenterClass)
;if(nextClass===presenterClass)return presenterClass;presenterClass=nextClass}}
#moveToNextPresenterIfUnnecessary(presenterClass){switch(presenterClass.name){
case"LibraryPresenter":if(lessonManager.bookTitles.length<=1){
lessonManager.bookIndex=0;return BookPresenter}break;case"BookPresenter":
if(lessonManager.chapterTitles.length<=1){lessonManager.chapterIndex=0
;return ChapterPresenter}break;case"ChapterPresenter":
if(lessonManager.lessonTitles.length<=1){lessonManager.lessonIndex=0
;return LessonPresenter}break}return presenterClass}static getInitial(){
const config={factory:new PresenterFactory};if(sessionLesson.hasLesson){
config.lesson=sessionLesson.lesson;config.lessonInfo=sessionLesson.lessonInfo
;if(config.lesson.hasMoreProblems)return config.factory.getSuitableProblemPresenter(config);else return new MarksPresenter(config)
}return new HomePresenter(config)}}function showFirstUseMessageIfAppropriate(){
const FIRST_TIME_USE_KEY="showFirstUseMessage"
;const firstUse=persistentData.getFromStorage(FIRST_TIME_USE_KEY,true)
;if(firstUse){const appName=BuildInfo.getProductName()
;const privacyLinkLabel=i18n`c5f29bb36f9158d2e00f5d4dc213a0ff::`
;const privacyLink=`[${privacyLinkLabel}](${Urls.PRIVACY})`
;const message=[i18n`a7c4b7db96ceb235072a13b2f6d0a47c::${appName}`,i18n`f1c6d62749c0daf6f811d81d8e81a0ac::`,"",i18n`09c78e9bf1c7828280e85b6422d6e712::${appName}`,i18n`645a1e1fef8324f7061e6cd82b966b02::`,i18n`85320d2bf19b4540dfca0365564a452e::`,i18n`9c56fddb40ff68400351826fd5d07d45::`,i18n`d41d8cd98f00b204e9800998ecf8427e::`,i18n`a62dab340866f8adb127a1e46f48260d::`,i18n`4b1efead862e496bfa2302b9f91e5bca::`,i18n`4cf4f87c6d6b28c3fbae03a4293fba33::`,i18n`132a6f73c02f839e6a2d24a34c1dadca::`,i18n`9bd174b9a9276996e5c09a5454060925::`,i18n`687f14ded82f8e827555532b3857829f::`,i18n`d41d8cd98f00b204e9800998ecf8427e::`,i18n`8b73f389cf0286a63a4adfb231300c05::`,i18n`d41d8cd98f00b204e9800998ecf8427e::`,i18n`f3d5c4e36b478dff85e2fec9c9be9a35::${privacyLink}`].join("\n")
;return ModalDialog.showInfo(parseMarkdown(message),i18n`83218ac34c1834c26781fe4bde918ee4::`).then((()=>persistentData.saveToStorage(FIRST_TIME_USE_KEY,false)))
}else return Promise.resolve()}let throttleTimer=null
;function setVhCssVariable(){const vh=window.innerHeight*.01
;document.documentElement.style.setProperty("--vh",`${vh}px`)}
window.addEventListener("resize",(()=>{if(throttleTimer!==null)return
;throttleTimer=window.setTimeout((()=>{throttleTimer=null;setVhCssVariable()
}),200)}));setVhCssVariable();function showFatalError(error){
const html=`<h1>Whoops!</h1>\n  <p>An error has occured from which I can't recover on my own.</p>\n  <ul>\n  <li>Name: ${error.name}</li>\n  <li>Cause: ${error.cause}</li>\n  <li>Message: ${error.message}</li>\n  </ul>\n  <p>Try reloading the application.</p>\n  `
;console.error(error);document.getElementById("content").innerHTML=html}
function loadApplication(){console.info("Launching application.")
;persistentData.setStorageKeyPrefix(`LR_${BuildInfo.getBundleName().replace(".","_")}`)
;return getLanguages(window.LESSON_TRANSLATIONS_B64).then((()=>lessonManager.loadAllLibraries("assets/lessons/libraries.json"))).then((()=>loadSettingDefinitions(getSettingDefinitions()))).then((()=>{
const language=i18n`language::`;if(language!==""){
console.info(`Language ${language}`)
;document.documentElement.setAttribute("lang",language)}return true
})).then((()=>setHeaderAndFooter(getMainMenuItems()))).then((()=>lessonManager.loadAllLibraryContent())).then((()=>toast('<span style="font-size:3rem;">&#x1F631;</span>'+"This application is work in progress and not released yet. "+"Things may change and things may break. Documentation may not be correct."))).then((()=>showFirstUseMessageIfAppropriate())).then((()=>{
const stage=document.getElementById("stage")
;return new StageManager(stage).startShow(PresenterFactory.getInitial())
})).then((()=>{console.warn("Did not expect to get here.")
;ModalDialog.showInfo(i18n`c55bdbb47fee32f4ca56a977427374bf::`).then((()=>window.location.reload()))
})).catch((error=>{showFatalError(error)
;ModalDialog.showFatal(error).then((()=>window.location.reload()))}))}
function registerServiceWorkerIfBuilt(){
if(BuildInfo.isBuilt())registerServiceWorker(BuildInfo.getMode())}
window.addEventListener("load",(()=>{try{registerServiceWorkerIfBuilt()
;return loadApplication()}catch(error){showFatalError(error)}}))})();