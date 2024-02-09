let e,t,i,r,n,o,s,a,h,l,c;function d(e){return e&&e.__esModule?e.default:e}const u="'Space Grotesk', sans-serif",g={normal:{size:15,fontName:"Arial, Helvetica, sans-serif"},h1:{size:30,fontName:u},h2:{size:22,fontName:u},h3:{size:18,fontName:u},emojiSprite:{size:18,fontName:"'Space Grotesk', sans-serif"}};function p(e){let t=g[e]??g.normal;return`${t.size}px ${t.fontName}`}/**
 * @file Functions for dealing with geometry
 *
 * @module utils/geometry
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class f{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new f(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class m{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getDirection(){return Math.atan2(-this.y,this.x)}}class w extends f{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new w(e.x,e.y,0)}static copy(e){return new w(e.x,e.y,e.rotation)}getRelativeTo(e){return new w(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class y{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new f(this.x+this.width,this.y+this.height)}getTopLeft(){return new f(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new f(Number.MIN_VALUE,Number.MIN_VALUE),new f(Number.MAX_VALUE,Number.MAX_VALUE);let x=null,S=null,T=null,E=0,v=0,P=!0,C=null,M=null,I=null,R=new y(0,0,0,0),B=0,b=0,O=1,L=1,A=.1,_="COVER",k=new w(0,0,0);function z(){return{width:window.innerWidth,height:window.innerHeight}}function N(){let e=z(),t=T.width/T.height,i=0,r=0,n=e.width/e.height;("COVER"===_?t>n:t<n)?r=(i=e.height)*t:i=(r=e.width)/t,(O=r/T.width)>L?(r=(O=L)*T.width,i=O*T.height):O<A&&(r=(O=A)*T.width,i=O*T.height),B=(e.width-r)/2,b=(e.height-i)/2,S.style.left=`${B}px`,S.style.top=`${b}px`,S.style.width=`${r}px`,S.style.height=`${i}px`;let o=Math.min(e.width/O,r/O),s=Math.min(e.height/O,i/O);C=new y(.5*(T.width-o),.5*(T.height-s),o,s)}function D(){let e=z(),t=Math.max(parseInt(S.style.left),0),i=Math.max(parseInt(S.style.top),0),r=Math.min(parseInt(S.style.width),e.width),n=Math.min(parseInt(S.style.height),e.height);I.style.left=`${t}px`,I.style.top=`${i}px`,I.style.width=`${r}px`,I.style.height=`${n}px`,function(){let e=g.normal.size*O;document.documentElement.style.fontSize=`${e}px`}(),R=new y(t,i,r,n)}function G(){return S.getContext("2d",{alpha:P})}function F(){let e=document.getElementById("glass-content");return I.style.opacity=0,new Promise(t=>{window.setTimeout(()=>{e.innerHTML="",I.style.display="none",t()},2e3)})}function W(e){return new w(e.x+k.x,e.y+k.y,e.rotation)}window.addEventListener("resize",()=>{null===x&&(x=window.setTimeout(()=>{x=null,N(),D()},200))});var $={canvasPositionToWorld:W,centreCanvasOn:function(e){k.x=e.x-E,k.y=e.y-v},clearCanvas:function(){G().clearRect(0,0,T.width,T.height)},displayOnGlass:function(e,t){let i=document.getElementById("glass-content");return i.replaceChildren(e),I.style.display="block",I.style.opacity=1,new Promise(e=>{t?t.forEach(t=>{t.element.addEventListener("click",()=>e(t.response))}):i.addEventListener("click",()=>e())}).then(()=>F())},getCanvas:()=>S,getContext2D:G,getCanvasDimensions:function(){return{width:T.width,height:T.height}},getGlassRect:function(){return R},getVisibleCanvasBounds:function(){let e=(R.x-T.x)*O,t=(R.y-T.y)*O,i=e+R.width*O,r=t+R.height*O;return e=Math.max(e,T.x),new y(e,t=Math.max(t,T.y),(i=Math.min(i,T.x+T.width))-e,(r=Math.min(r,T.y+T.height))-t)},geWorldInCanvasBounds:function(){return new y(k.x,k.y,T.width,T.height)},glassPositionToWorld:function(e){let t=e.x<0?C.x+C.width:C.x,i=e.y<0?C.y+C.height:C.y;return W(new w(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(T)},isOnScreen:function(e){return e.overlaps(T)},panCamera:function(e,t){k.x+=e,k.y+=t},setOpacity:function(e){G().globalAlpha=e},setOptions:function(e){var t;if(S){console.error("Multiple calls to setScreen ignored.");return}M=document.getElementById("game-content"),t=e.width,g.normal.size=15+t/100*.390625,g.h1.size=2*g.normal.size,g.h2.size=1.5*g.normal.size,g.h3.size=1.2*g.normal.size,g.emojiSprite.size=t/10,(S=document.createElement("canvas")).setAttribute("width",e.width),S.setAttribute("height",e.height),S.innerText="Loading the app.",T=new y(0,0,e.width,e.height),E=e.width/2,v=e.height/2,M.appendChild(S),L=e.maxScale,A=e.minScale,_=e.sizingMethod,P=e.alpha,N(),function(){(I=document.createElement("div")).id="glass",M.appendChild(I),I.style.display="none";let e=document.createElement("div");e.id="glass-content",I.appendChild(e)}(),D()},wipeGlass:F,worldPositionToCanvas:function(e){return new w(e.x-k.x,e.y-k.y,e.rotation)},worldToUi:function(e){return e*O},uiCoordsToMappedPositions:function(e,t){return{canvas:new w(Math.round(e/=O),Math.round(t/=O)),world:new w(Math.round(e+k.x),Math.round(t+k.y),-k.rotation)}},uiToWorld:function(e){return e/O}};const H=new Map,U=new Map;function V(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),H.delete(t)}function X(e){console.debug("Remove passive sprite."),U.delete(e)}function Y(){e=null}var K={addActor:function(t){H.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){U.set(e,e)},clearAll:function(){H.forEach(e=>V(e)),U.forEach(e=>X(e)),Y()},getActors:function(){return H},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():$.getCanvasDimensions()},removeTileMap:Y,resolveCancel:function(e){return!1},resolveClick:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},resolveContextMenu:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionContextClick(t.world),!0)},removeActor:V,removePassiveSprite:X,setTileMap:function(t){e=t},update:function(t){e?.update(t),H.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let n=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,n)}),U.forEach(e=>e.update(t))}};/**
 * @file Heads-up display. Unlike the world, this never pans and so positions are
 * locked to the canvas coordinates.
 *
 * @module utils/game/hud
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Animation support
 *
 * @module utils/sprites/animation
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Load and manage images. The image manager is implemented as a singleton.
 *
 * @module utils/sprites/imageManager
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */let q=[];function Z(e){return new Promise(t=>{let i=new Image;i.addEventListener("load",()=>{console.debug("Image loaded."),t(i)}),i.src=e})}var j={getSpriteBitmap:function(e,t){let i=q[e].get(t);return i||console.debug(`Failed to find image ${t} at index ${e}`),i},loadImage:Z,loadImages:function(e){let t=[];return e.forEach(e=>t.push(Z(e))),Promise.all(t)},loadSpriteMap:function(e,t){return Z(t).then(t=>(function(e,t){let i=[],r=new Map;return q.push(r),e.frames.forEach(e=>{i.push(createImageBitmap(t,e.frame.x,e.frame.y,e.frame.w,e.frame.h).then(t=>{let i={image:t,width:e.frame.w,height:e.frame.h,centreX:e.sourceSize.w/2-e.spriteSourceSize.x,centreY:e.sourceSize.h/2-e.spriteSourceSize.y};return r.set(e.filename,i),e.filename}))}),Promise.all(i)})(e,t))}};/**
 * @file Time utilities. Two clocks exist in the games: real and turn based.
 *
 * @module utils/time/clock
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */let J=0;var Q={updateTimeNow:function(e){J=e},getFrameCount:function(e){return Math.floor(J/e)}};/**
 * @file Simple indexer for arrays.
 *
 * @module utils/arrays/indexer
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Maths utilities
 *
 * @module utils/maths
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const ee={DEG_22_5:1/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_157_7:7/8*Math.PI},et={N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7},ei={WRAP:0,REVERSE:1,STOP:2};class er{#e;#t;#i;#r;#n;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#n=0}get index(){return this.#n}set index(e){var t;this.#n=(t=this.#e-1,e<0?0:e>t?t:e)}advanceBy(e){if(this.#e<1)return this.#n;switch(this.#i){case ei.WRAP:return this.#o(e);case ei.REVERSE:return this.#s(e);case ei.NONE:default:return this.#a(e)}}#o(e){return e%=this.#e,this.#n+=e%this.#e,this.#n>=this.#e&&(this.#n=this.#n-this.#e),this.#n}#s(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#n+=e;let t=this.#n-this.#t;t>0&&(this.#n=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#n-=e,this.#n<0&&(this.#n=-this.#n,this.#r=1));return this.#n}#a(e){return this.#r>0?this.#n=Math.min(this.#t,this.#n+e):this.#r<0&&(this.#n=Math.max(0,this.#n-e)),this.#n}}class en{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,this.#d=Math.max(1,i.framePeriodMs),"string"==typeof t){this.#h.push(j.getFrame(e,t));return}let n=t.startIndex??0,o=t.padding??0;do{let i=`${t.prefix}${n.toString().padStart(o,"0")}${t.suffix}`;(r=j.getSpriteBitmap(e,i))&&this.#h.push(r),n++}while(r)this.#l=new er(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(this.playing){let e=Q.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.playing=!1,this.#l.index=e}getCurrentIndex(){return this.#l.index}}class eo{#u;#g;constructor(e,t){this.#u={},this.#u[e]=t,this.#g=t}get image(){return this.#g}addAnimatedImage(e,t){this.#u[e]=t}setCurrentImage(e){this.#u.hasOwnProperty(e)?this.#g=this.#u[e]:console.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#g.getCurrentFrame()}}function es(e,t,i,r){if(e.font=p(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var n=t.split("\n");for(let t=0;t<n.length;t++)r.y=function(e,t,i,r){let n;let o=t.split(" "),s=i.x??0,a=i.y??0,h=r.xWrapPosition-s,l=r.lineSpacing??1,c="";for(let t=0;t<o.length;t++){let i=c+o[t]+" ",r=/**
 * @file Actor classes. Actors encapsulate a Sprite and represent moving objects
 * that can interact with the game.
 *
 * @module utils/game/actors
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Handle sprite rendering on the canvas
 *
 * @module utils/sprites/spriteRenderers
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Canvas functions for handling text.
 *
 * @module utils/text/text
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */function(e,t){let i=e.measureText(void 0);return{width:i.width,height:i.fontBoundingBoxAscent+i.fontBoundingBoxDescent,offsetTop:-i.fontBoundingBoxAscent,offsetCentreY:.5*(i.fontBoundingBoxDescent-i.fontBoundingBoxAscent)}}(e);n||(n=l*r.height),r.width>h&&t>0?(e.fillText(c,s,a),c=o[t]+" ",a+=n):c=i}return e.fillText(c,s,a),a+n}(e,n[t],i,r)}else e.fillText(t,i.x??0,i.y??0)}/**
 * @file Debug utilities
 *
 * @module utils/debug
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const ea={spriteBoxes:!1,showFps:!0};/**
 * @file Basic sprite control
 *
 * @module utils/sprites/sprite
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class eh{#p=new w(0,0,0);#f=new m(0,0,0);#m;#w;modifier;visible;opacity;constructor(e){this.#m=e?.renderer,this.#w=Array.isArray(this.#m),this.visible=!0,this.opacity=1}get position(){return this.#p}set position(e){this.#p.x=this.valueOrZero(e.x),this.#p.y=this.valueOrZero(e.y),this.#p.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#f}set velocity(e){this.#f.x=this.valueOrZero(e.x),this.#f.y=this.valueOrZero(e.y),this.#f.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#y()}#y(){this.#m&&(this.#m.forEach?this.#m.forEach(e=>e.render(this.#p,this.opacity)):this.#m.render(this.#p,this.opacity))}getBoundingBox(){let e=this.#m.getBoundingBoxCanvas();return new y(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class el{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new y(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=$.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),ea.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){console.error("_doRender method should be overridden.")}isOnScreen(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return $.isOnScreen(t)}isOnCanvas(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return $.isOnCanvas(t)}}class ec extends el{#x;#S;#T;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#x=i}#E(e){this._context.font=p(this.#x);let t=this._context.measureText(e);this.#T={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#S=e}_doRender(e){var t;this.text!==this.#S&&this.#E(this.text);let i={x:e.x+this.#T.origin.x,y:e.y+this.#T.origin.y,rotation:e.rotation};es(this._context,this.#S,i,{styleName:this.#x}),this._boundingBoxCanvas=(t=this.#T,new y(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class ed extends el{#v;#P;#C;#M;#I;#R;constructor(e,t){super(e),this.#v=t.width??10,this.#P=t.height??10,this.#C=this.#v/2,this.#M=this.#P/2,this.#I=t.fillStyle,this.#R=t.strokeStyle}_doRender(e){let t=e.x-this.#C,i=e.y-this.#M;this.#I&&(this._context.fillStyle=this.#I,this._context.fillRect(t,i,this.#v,this.#P)),this.#R&&(this._context.strokeStyle=this.#R,this._context.strokeRect(t,i,this.#v,this.#P)),this._boundingBoxCanvas=new y(t,i,this.#v,this.#P)}}class eu extends el{#P;#M;#v;#C;#I;#R;#B;#b;#O;#L;constructor(e,t){super(e),this.#P=t.height,this.#M=this.#P/2,this.#v=t.width,this.#C=this.#v/2,this.#I=t.fillStyle,this.#R=t.strokeStyle,this.#B=t.offsetX??0,this.#b=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#O=Math.min(e,1)*this.#P,this.#L=.5*this.#O}_doRender(e){let t=e.y-this.#M+this.#b,i=e.y+this.#M-this.#O+this.#b,r=e.x-this.#C+this.#B;this.#I&&(this._context.fillStyle=this.#I,this._context.fillRect(r,i,this.#v,this.#O)),this.#R&&(this._context.strokeStyle=this.#R,this._context.strokeRect(r,t,this.#v,this.#P)),this._boundingBoxCanvas=new y(r,t,this.#v,this.#P)}}class eg extends el{#A;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){console.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#A=[];let r=t.tileSize/i,n=-t.tileSize/2+r/2;for(let o=0;o<i;o++)this.#A.push(new eu(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[o],strokeStyle:t.strokeStyles?.[o],offsetX:n+r*o,offsetY:0}))}setLevel(e,t){this.#A[e]?.setLevel(t)}render(e){this.#A?.forEach(t=>t.render(e))}}class ep extends el{#_;#k;constructor(e,t){super(e),t?.getCurrentFrame?(this.#k=t,this.#_=this.#k.getCurrentFrame()):this.#_=t,this.#_?(this._boundingBoxCanvas.width=this.#_?.width??0,this._boundingBoxCanvas.height=this.#_?.height??0):console.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#_)return;let t=this.#k?this.#k.getCurrentFrame():this.#_;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}/**
 * @file Interactions with the ui
 *
 * @module utils/ui/interactions
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class ef{#z;#N;#D;#G;setOnClick(e){this.#z=e}setOnContextClick(e){this.#N=e}setOnPointerDown(e){this.#D=e}setOnPointerUp(e){this.#G=e}actionClick(e){this.#z?.(this,e)}actionContextClick(e){this.#N?.(this,e)}actionPointerDown(e){this.#D?.(this,e)}actionPointerUp(e){this.#G?.(this,e)}}class em extends ef{maxTilesPerMove;sprite;traits;constructor(e){super(),this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}const ew=new Map;let ey=!1;function ex(e,t){let i=$.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new y(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}function eS(e){if(!ey||!ey)return!1;for(let[t,i]of ew)if(ex(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1}var eT={addButton:function(e,t,i){let r=new em(new eh({renderer:new ep($.getContext2D(),e)}));return ew.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),e.setCurrentIndex(0),r},addMomentaryButton:function(e,t,i){let r=new em(new eh({renderer:new ep($.getContext2D(),e)}));return ew.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){ew.clear()},removeButton:function(e){ew.delete(e)},update:function(e){ey&&ew.forEach(t=>{let i=w.copy(t.position);t.position=$.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolvePointerCancel:function(e){return eS(e)},resolveClick:function(e){if(!ey)return!1;for(let[t,i]of ew)if(ex(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolveContextMenu:function(e){return!1},resolvePointerDown:function(e){if(!ey||!ey)return!1;for(let[t,i]of ew)if(ex(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:eS,setVisible:function(e){ey=e}};/**
 * @file Support for emojis, especially as sprites.
 *
 * @module utils/text/emojis
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const eE={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
 * @file Load assets. This module is placed in the assets folder to simplify
 * dynamic imports using Parcel's import.meta.url property.
 *
 * @module utils\assetLoaders.js
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */var ev={};ev=new URL("dungeon_script.11f8a4bd.txt",import.meta.url).toString();const eP={DUNGEON_SCRIPT:new URL(ev)};class eC extends eg{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}function eM(e){let t=new ep($.getContext2D(),new eo("idle",new en(0,{prefix:e,suffix:".png",startIndex:1,padding:3},{framePeriodMs:100,loopMethod:ei.REVERSE}))),i=new eC($.getContext2D(),{tileSize:K.getTileMap().getGridSize()-2,fillStyles:["rgba(255, 0, 0, 0.2)","rgba(0, 0, 255, 0.2)"],strokeStyles:[]}),r=new em(new eh({renderer:[i,t]}));return i.actor=r,r.position=new w(48,48,0),r.velocity={x:-500,y:-70,rotation:.1},r}const eI=new Map([["HERO",{create:()=>eM("hero")}],["MONSTER",{create:()=>eM("orc")}]]);/**
 * @file Convert a screen definition into a scene.
 *
 * @module scriptReaders/sceneDefinitionParser
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */var eR={};eR=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":1,"y":95,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":435,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":435,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":1071,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":1080,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":485,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":485,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":535,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":535,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":585,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":585,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":635,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero001.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero002.png","frame":{"x":985,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":48},"sourceSize":{"w":48,"h":49}},{"filename":"hero003.png","frame":{"x":1033,"y":51,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":45,"h":48},"sourceSize":{"w":49,"h":49}},{"filename":"hero004.png","frame":{"x":389,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":44,"h":49},"sourceSize":{"w":49,"h":49}},{"filename":"hud-arrow-down-000.png","frame":{"x":147,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":195,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":243,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":291,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":339,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":387,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":1220,"y":51,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":1246,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":1268,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":1294,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-000.png","frame":{"x":1316,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-001.png","frame":{"x":1342,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":97,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc001.png","frame":{"x":295,"y":1,"w":46,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc002.png","frame":{"x":147,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc003.png","frame":{"x":197,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc004.png","frame":{"x":246,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"RIP.png","frame":{"x":97,"y":52,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":635,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":1106,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":685,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":1035,"y":1,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":685,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":735,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":735,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":1115,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":1141,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":1150,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":1176,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":785,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":1185,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":785,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":1211,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":835,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":835,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":885,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":885,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":935,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":935,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":985,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1389,"h":100},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:60d7f34bb4039828e16477df24a24f9d:e3ffb4491e81187d2ee6cd8cabbf73f0:9c0fba27a8a0c106083a8713f6c67b32$"}}');var eB={};/**
 * @file Tile map support
 *
 * @module utils/tileMaps/tilePlan
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Various utilities for handling arrays
 *
 * @module utils/arrays/arrayManip
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */function eb(e,t,i){return{tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}eB=new URL("dungeon.2988913d.png",import.meta.url).toString();const eO={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},eL={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},eA={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};class e_{matrix;entryPointByDoor;exitPointByDoor;constructor(){this.entryPointByDoor=new f(0,0),this.exitPointByDoor=new f(0,0)}static generateTileMapPlan(e,t){let i=new e_,r=i.convertToMatrix(e);return r=i.clarifyMatrix(r),i.createPlan(r,t),i}convertToMatrix(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}clarifyMatrix(e){let t=[];return e.forEach((i,r)=>{let n=[];t.push(n),i.forEach((t,i)=>{var o,s,a,h;let l;let c=eb(e,r,i);(o=t,eO.VOID.includes(o))?t=" ":eN(t)?(s=t,eD(c.above)&&(eD(c.tl)?s+=eA.BELOW_WALL:s+=eA.BELOW_END_WALL),a=t=s,ek(c.left)||ek(c.top)||ek(c.right)||ek(c.below))?this.entryPointByDoor=new f(i,r):(ez(c.right)||ez(c.bottom)||ez(c.left)||ez(c.top))&&(this.exitPointByDoor=new f(i,r)):eD(t)&&(l=h=t,eD(c.above)&&eD(c.right)&&eD(c.below)&&eD(c.left)?l+=eL.INTERNAL_CROSS:eN(c.left)&&eN(c.right)?l+=eL.INTERNAL_VERTICAL:eN(c.above)&&eN(c.below)?l+=eL.INTERNAL_HORIZONTAL:eD(c.left)&&eD(c.right)&&eD(c.below)?l+=eL.TOP_TEE:eD(c.above)&&eD(c.below)&&eD(c.left)?l+=eL.RIGHT_TEE:eD(c.left)&&eD(c.right)&&eD(c.above)?l+=eL.BOTTOM_TEE:eD(c.above)&&eD(c.below)&&eD(c.right)?l+=eL.LEFT_TEE:eD(c.right)&&eD(c.below)?l+=eN(c.br)?eL.TOP_LEFT:eL.TOP_LEFT_INTERNAL:eD(c.left)&&eD(c.below)?l+=eN(c.bl)?eL.TOP_RIGHT:eL.TOP_RIGHT_INTERNAL:eD(c.left)&&eD(c.above)?l+=eN(c.tl)?eL.BOTTOM_RIGHT:eL.BOTTOM_RIGHT_INTERNAL:eD(c.right)&&eD(c.above)?l+=eN(c.tr)?eL.BOTTOM_LEFT:eL.BOTTOM_LEFT_INTERNAL:eD(c.above)&&eD(c.below)?l+=eN(c.right)?eL.LEFT:eL.RIGHT:eD(c.right)&&eD(c.left)&&(l+=eN(c.below)?eL.TOP:eL.BOTTOM),t=eD(c.above)?l+eA.BELOW_WALL:l),n.push(t)})}),t}createPlan(e,t){let i=[];e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),n=i.get(t);if(!n&&r[2]&&r[3]&&(n=i.get(`${r[1]}${r[2]}`)),!n&&r[2]&&(n=i.get(r[1])),!n){let n=function(e){for(let t in eO)if(eO[t].includes(e))return eO[t][0];return null}(r[1]);if(n&&n!==r[1]){var o,s;let t;return e((o=r[2],s=r[3],t=n,o&&(t+=o),s&&(t+=s),t),i)}console.error(`Failed to find symbol for ${t}`)}return n}(e,t))})}),this.matrix=i}}function ek(e){return eO.DOOR_IN.includes(e)}function ez(e){return eO.DOOR_OUT.includes(e)}function eN(e){return eO.GROUND.includes(e)}function eD(e){var t;return eO.WALL.includes(e)||ek(t=e)||ez(t)}/**
 * @file Tile map
 *
 * @module utils/tileMaps/tileMap
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Path finders within a tile map
 *
 * @module utils/tileMaps/pathFinder
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class eG{#F;#W;constructor(e){this.#W=e,this.#F=new Map}setRouteToCoords(e,t,i){this.#F.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#F.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#F.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new f(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#F.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#F.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#W.gridPointToWorldPoint(e)):t}}class eF{actor;#F;#W;#$;constructor(e,t){this.#W=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#H(e,t);if(r.coincident(e))return[];this.#W.isGridPointPassableByActor(r,this.actor)||(r=this.#U(r,t));let n=[],o=Math.sign(r.x-e.x),s=Math.sign(r.y-e.y),a=f.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=f.copy(a),c=!1;if(h&&0!==o&&a.x!=r.x?(t.x+=o,c=!0):h||0===s||a.y==r.y||(t.y+=s,c=!0),c=c&&this.#W.isGridPointPassableByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||n.push(this.#W.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||n.push(this.#W.gridPointToWorldPoint(a)),n}getAllRoutesFrom(e,t){return this.#F=new eG(this.#W),this.#$=e,this.#V(e.x,e.y,t,null),this.#F}#V(e,t,i,r){if(r){if(e===this.#$.x&&t===this.#$.y||!this.#X(e,t))return;let n=this.#F.getRouteToCoords(e,t);if(n&&!(r.length<n.length-1))return;r.push(new f(e,t)),this.#F.setRouteToCoords(r,e,t),i--}else r=[new f(e,t)];i>0&&(this.#V(e,t-1,i,[...r]),this.#V(e+1,t,i,[...r]),this.#V(e,t+1,i,[...r]),this.#V(e-1,t,i,[...r]))}#X(e,t){return this.#W.isGridPointPassableByActor(new f(e,t),this.actor)}#H(e,t){let i=t.x-e.x,r=t.y-e.y,n=t.x,o=t.y;return Math.abs(i)>Math.abs(r)?n-=Math.sign(i):o-=Math.sign(r),new f(n,o)}#U(e,t){return e.x===t.x&&e.y<t.y?new f(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new f(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new f(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new f(e.x+1,e.y-1):e}}class eW{#Y;#K;#W;#q;#Z;#j;#J;constructor(e,t){this.#W=e,this.#Y=t}findReachedTiles(){return this.#K=this.#W.worldPointToGrid(this.#Y.position),this.#j=this.#W.getVisibleGridPointRect(),this.#Z&&this.#Z.coincident(this.#K)&&this.#j&&this.#j.equals(this.#J)||(this.#q=new Map,this.#q.set(this.#K.toString(),this.#K),this.#Q().forEach(e=>{this.#ee(e)}),this.#Z=this.#K,this.#J=this.#j),this.#q}isGridPointInRays(e){return!!this.#q&&this.#q.has(e.toString())}#Q(){let e=[];for(let t=this.#j.x;t<=this.#j.x+this.#j.width;t++)e.push(new f(t,this.#j.y)),e.push(new f(t,this.#j.y+this.#j.height));for(let t=this.#j.y+1;t<=this.#j.y+this.#j.height-1;t++)e.push(new f(this.#j.x,t)),e.push(new f(this.#j.x+this.#j.width,t));return e}#ee(e){let t,i,r;let n=function(e){let t=Math.abs(e);return t<=ee.DEG_22_5?et.E:t<=ee.DEG_67_5?Math.sign(e)>0?et.NE:et.SE:t<=ee.DEG_112_5?Math.sign(e)>0?et.N:et.S:t<=ee.DEG_157_7?Math.sign(e)>0?et.NW:et.SW:et.W}(this.#K.getScreenAngleTo(e));Math.abs(e.x-this.#K.x)>=Math.abs(e.y-this.#K.y)?(t=Math.sign(e.x-this.#K.x),i=(r=Math.abs(e.x-this.#K.x))<1?0:(e.y-this.#K.y)/r):(i=Math.sign(e.y-this.#K.y),t=(r=Math.abs(e.y-this.#K.y))<1?0:(e.x-this.#K.x)/r);let o=this.#K.x,s=this.#K.y,a=!0;for(;r>=0;){let e=new f(Math.round(o),Math.round(s));if(a||this.#W.isSeeThrough(e,this.#Y))this.#et(e,n);else break;a=!1,o+=t,s+=i,r--}}#et(e,t){switch(this.#q.set(e.toString(),e),t){case et.N:this.#ei(new f(e.x-1,e.y-1)),this.#ei(new f(e.x,e.y-1)),this.#ei(new f(e.x+1,e.y-1));break;case et.NE:this.#ei(new f(e.x,e.y-1)),this.#ei(new f(e.x+1,e.y-1)),this.#ei(new f(e.x+1,e.y));break;case et.E:this.#ei(new f(e.x+1,e.y-1)),this.#ei(new f(e.x+1,e.y)),this.#ei(new f(e.x+1,e.y+1));break;case et.SE:this.#ei(new f(e.x+1,e.y)),this.#ei(new f(e.x+1,e.y+1)),this.#ei(new f(e.x,e.y+1));break;case et.S:this.#ei(new f(e.x-1,e.y+1)),this.#ei(new f(e.x,e.y+1)),this.#ei(new f(e.x+1,e.y+1));break;case et.SW:this.#ei(new f(e.x-1,e.y)),this.#ei(new f(e.x-1,e.y+1)),this.#ei(new f(e.x,e.y+1));break;case et.W:this.#ei(new f(e.x-1,e.y-1)),this.#ei(new f(e.x-1,e.y)),this.#ei(new f(e.x-1,e.y+1));break;case et.NW:this.#ei(new f(e.x-1,e.y)),this.#ei(new f(e.x-1,e.y-1)),this.#ei(new f(e.x,e.y-1))}}#ei(e){this.#W.isSeeThrough(e)||this.#q.set(e.toString(),e)}}class e${decoratedModifier;#er;#en;#eo;constructor(e){this.#en=0,this.#eo=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#eo=t,new Promise(t=>{this.#er=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#er&&(this.#en+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#en>this.#eo?(this.#er?.(null),null):i}doUpdate(e,t){return console.error("doUpdate should be overridden."),this}}class eH extends e${#es;#ea;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class eU extends e${#eh;#el;#ec;constructor(e,t){super(t),this.#eh=e.prey,this.#el=e.maxSeparation,this.#ec=e.speed}doUpdate(e,t){let i=this.#eh.position,r=e.position;if(!r.withinSquare(i,this.#el)){let n=r.getCartesianAngleTo(i);e.velocity.x=this.#ec*Math.cos(n),e.velocity.y=this.#ec*Math.sin(n);let o=e.velocity.x*t,s=e.velocity.y*t;e.position.x+=this.getMinMove(o,i.x,r.x),e.position.y+=this.getMinMove(s,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class eV extends e${#ed;#n;#eu;#ec;constructor(e,t){super(t),this.#ed=e.path,this.#n=0,this.#eu=e.path[0],this.#ec=e.speed}doUpdate(e,t){let i=e.position,r=i.getCartesianAngleTo(this.#eu);e.velocity.x=this.#ec*Math.cos(r),e.velocity.y=this.#ec*Math.sin(r);let n=e.velocity.x*t,o=e.velocity.y*t;if(i.x+=this.getMinMove(n,this.#eu.x,i.x),i.y+=this.getMinMove(o,this.#eu.y,i.y),i.isCoincident(this.#eu)){if(++this.#n>=this.#ed.length)return this.decoratedModifier;this.#eu=this.#ed[this.#n]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}/**
 * @file Handle fights
 *
 * @module dnd/fight
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Create transient effects.
 *
 * @module utils/effects/transient
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Faders which adjust opacity
 *
 * @module utils/sprites/faders
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class eX extends e${#eg;constructor(e,t){super(t),this.#eg=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#eg),e.opacity>0?this:null}}function eY(e,t){let i=new eh({renderer:e});i.position=t.position,i.velocity=t.velocity,K.addPassiveSprite(i),new eX(t.lifetimeSecs,new eH).applyAsTransientToSprite(i,20).then(()=>K.removePassiveSprite(i))}function eK(e,t){eY(new ep($.getContext2D(),e),t)}function eq(e,t){eY(new ec($.getContext2D(),e),t)}/**
 * @file Resolve events that depend on chance or dix roles.
 *
 * @module dnd/chance
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *//**
 * @file Simulation of dice
 *
 * @module utils/dice
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */function eZ(e=6){return function(e,t){let i=Math.ceil(1);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}(0,e)}function ej(e,t){return(function(e,t){let i=f.copy(e.position);return new eV({path:[new f(e.position.x+.2*(t.position.x-e.position.x),e.position.y+.2*(t.position.y-e.position.y)),i],speed:100}).applyAsTransientToSprite(e.sprite)})(e,t).then(()=>new Promise(e=>{if(eZ(20)>10)eK(j.getSpriteBitmap(0,"blood-splat.png"),{lifetimeSecs:1,position:t.position,velocity:new m(0,0,0)});else{eq("Missed",{lifetimeSecs:2,position:t.position,velocity:new m(0,-100,0)}),e();return}let i=t.traits.get("HP"),r=eZ(6);i=Math.max(0,i-r),t.traits.set("HP",i),0===i?(K.removeActor(t),eK(j.getSpriteBitmap(0,"RIP.png"),{lifetimeSecs:2,position:t.position,velocity:new m(0,0,0)})):eq(`-${r} HP`,{lifetimeSecs:2,position:t.position,velocity:new m(0,-100,0)}),e(i)}))}function eJ(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var eQ={showMessage:function(e){let t=eJ(e);$.displayOnGlass(t)},showOkDialog:function(e,t="OK"){let i=document.createElement("div");i.appendChild(eJ(e));let r=document.createElement("button");return r.appendChild(document.createTextNode(t)),i.appendChild(r),$.displayOnGlass(i,[{element:r,response:0}])}};function e0(){return++i<t.length?function(e){let t=new ty;return t.doLoad=()=>j.loadSpriteMap(d(eR),d(eB)),t.doInitialise=function(e){let t=e_.generateTileMapPlan(e.mapDesign,tf);return()=>{let i=new td($.getContext2D(),t,48);K.setTileMap(i);let r=eI.get("HERO").create();return r.traits=new tw,(function(e){let t=[];return e.enemies.forEach(e=>{let i=eI.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(e).forEach(e=>{e.position=i.getRandomFreeGroundTile().worldPoint,K.addActor(e)}),tN.setCameraToTrack(r.sprite,200,0),K.addActor(r),ta.setHero(r),eQ.showMessage(e.intro)}}(e),t.doUpdate=()=>{},t.doUnload=()=>Promise.resolve(null),t}(t[i]):null}var e4={setSceneDefinitions:function(e){t=e,i=-1},getNextScene:e0,getFirstScene:function(){return i=-1,e0()},areThereMoreScenes:function(){return i<t.length-1}};const e1={START_GAME:0,CLICKED_FREE_GROUND:1,CLICKED_ENTRANCE:2,CLICKED_EXIT:3};class e8{constructor(){}async transitionTo(e){await this.onExit().then(()=>(to=e,e.onEntry()))}onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}onExit(){return Promise.resolve(null)}}class e2 extends e8{onEntry(){console.log("Enter AtStart"),eQ.showOkDialog("You are in a dark and dingy dungeon.","Conquer it!").then(()=>tn(this,e4.getFirstScene()))}}class e3 extends e8{async onEntry(){console.log("Enter AtGameOver"),await eQ.showOkDialog("Game over. You died.","Try again").then(()=>tn(this,e4.getFirstScene()))}}class e5 extends e8{async onEntry(){console.log("Enter AtGameCompleted"),await eQ.showOkDialog("You've done it. Well done.","Try again").then(()=>tn(this,e4.getFirstScene()))}}class e6 extends e8{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnIdle"),await tt()}async onEvent(e,t,i){switch(e){case e1.CLICKED_FREE_GROUND:i?.filter===th.COMBAT_TILE?console.error("Unexpected click on combat tile ignored."):await ti(t),this.transitionTo(new e7);break;case e1.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case e1.CLICKED_EXIT:console.log("Escaping"),await ti(t),e4.areThereMoreScenes()?await tn(this,e4.getNextScene()):this.transitionTo(new e5)}return Promise.resolve(null)}}class e9 extends e8{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnFighting"),await tt()}async onEvent(e,t,i){switch(e){case e1.CLICKED_FREE_GROUND:i?.filter===th.COMBAT_TILE?await this.#ep(t):await this.#ef(t),0===K.getTileMap().getParticipants(r).length?this.transitionTo(new e7):this.transitionTo(new te);break;case e1.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case e1.CLICKED_EXIT:console.log("Escaping"),await ti(t),e4.areThereMoreScenes()?await tn(this,e4.getNextScene()):this.transitionTo(new e5)}return Promise.resolve(null)}#ep(e){let t=K.getTileMap().getTileAtWorldPoint(e).getOccupants(),i=[];for(let e of t.values())i.push(ej(r,e));return Promise.all(i)}#ef(e){for(let e of K.getTileMap().getParticipants(r)){var t,i;if(t=r,i=0,!(eZ(20)>10)&&(eq("Failed to run.",{lifetimeSecs:2,position:t.position,velocity:new m(0,-100,0)}),1))return Promise.resolve(!1)}return ti(e)}}class e7 extends e8{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnIdle");let e=K.getTileMap(),t=new eF(e);for(let i of K.getActors().values())i!==r&&await tr(i,e,t);return 0===e.getParticipants(r).length?this.transitionTo(new e6):this.transitionTo(new e9),Promise.resolve(null)}}class te extends e8{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnFighting");let e=K.getTileMap(),t=new eF(e),i=e.getParticipants(r);for(let n of K.getActors().values())n!==r&&(i.includes(n)?await ej(n,r):await tr(n,e,t));return 0===r.traits.get("HP")?this.transitionTo(new e3):0===i.length?this.transitionTo(new e6):this.transitionTo(new e9),Promise.resolve(null)}}function tt(){let e=K.getTileMap(),t=new eF(e,r).getAllRoutesFrom(e.worldPointToGrid(r.sprite.position),r.maxTilesPerMove);return e.setMovementRoutes(t),e.setCombatActors(e.getParticipants(r)),Promise.resolve(null)}function ti(e){let t=K.getTileMap(),i=t.getWaypointsToWorldPoint(e);return(t.setMovementRoutes(null),t.setCombatActors(null),i)?new eV({path:i,speed:100},r.sprite.modifier).applyAsTransientToSprite(r.sprite):Promise.resolve()}async function tr(e,t,i){let n=t.worldPointToGrid(r.position),o=t.worldPointToGrid(e.position);if(Math.abs(n.x-o.x)+Math.abs(n.y-o.y)<=2*e.maxTilesPerMove&&t.canHeroSeeGridPoint(o)){i.actor=e;let t=i.getDumbRouteNextTo(o,n,e.maxTilesPerMove);if(t.length>0){let i=new eV({path:t,speed:200},e.sprite.modifier);await i.applyAsTransientToSprite(e.sprite)}}}function tn(e,t){K.clearAll(),tN.setScene(t).then(()=>(r.sprite.position=K.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new e6)))}let to=new class extends e8{onEntry(){console.log("WaitingToStart state")}async onEvent(e,t,i){e===e1.START_GAME&&this.transitionTo(new e2)}},ts=!1;var ta={EventId:e1,getHeroActor:function(){return r},setHero:function(e){r=e},triggerEvent:function(e,t,i){if(ts){console.debug(`Ignoring event ${e} as still processing earlier event.`);return}ts=!0,to.onEvent(e,t,i).then(()=>{ts=!1})}};const th={MOVEMENT_TILE:0,COMBAT_TILE:1},tl={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class tc extends ef{sprite;obstacle;#em;#ew;#ey;#ex;constructor(e,t){super(),this.sprite=e,this.#em=new Map,this.obstacle=t.obstacle,this.#ew=t.gridPoint,this.#ey=t.worldPoint,this.#ex=t.role}get role(){return this.#ex}get gridPoint(){return this.#ew}get worldPoint(){return this.#ey}addOccupant(e){this.#em.set(e,e)}deleteOccupant(e){this.#em.delete(e)}getOccupants(){return this.#em}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#em.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#em.values())if(t!==e&&t.obstacle)return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#ex!==tl.ENTRANCE&&this.#ex!==tl.EXIT}}class td{#eS;#eT;#eE;#ev;#eP;#v;#P;#eC;#eM;#eI;#eR;#eB;#eb;#eO;#eL;#eA;#e_;#ek;constructor(e,t,i){let r=t.matrix;this.#eb=t.entryPointByDoor,this.#eO=t.exitPointByDoor,this.#eS=e,this.#eI=new eh({renderer:new ed(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#ek=new eh({renderer:new ed(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#eP=i,this.#eT=[],this.#ev=r.length,this.#eE=r[0].length,this.#v=i*this.tilesX,this.#P=i*this.tilesY,this.#eL=[],r.forEach((t,i)=>{let r=[];this.#eT.push(r),t.forEach((t,n)=>{if(t){let o=new eh({renderer:new ep(e,j.getSpriteBitmap(0,t.image))}),s=new f(n,i),a=this.gridPointToWorldPoint(s),h=new tc(o,{obstacle:t.role===tl.OBSTACLE,gridPoint:s,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#ez(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),o.position.x=n*this.#eP+this.#eP/2,o.position.y=i*this.#eP+this.#eP/2}else r.push(null)})}),this.#eR||(console.error("No entrance has been set. Setting to the first ground tile"),this.#eR=this.#eL[0])}processTileRole(e){switch(e.role){case tl.ENTRANCE:if(this.#eR){let t=e.gridPoint;console.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#eR=e;break;case tl.EXIT:if(this.#eB){let t=e.gridPoint;console.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#eB=e;break;case tl.GROUND:e.gridPoint.coincident(this.#eb)||this.#eL.push(e)}}update(e){this.#eN();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#eA?.isGridPointInRays(new f(r,i))){let t=this.#eT[i][r];t?.sprite.update(e)}this.#eD(e)}#eN(){let e=ta.getHeroActor();if(e){this.#eA||(this.#eA=new eW(this,e));let t=this.getTileAtWorldPoint(e.position).role;t!=tl.ENTRANCE&&t!=tl.EXIT&&this.#eA.findReachedTiles()}}getVisibleGridPointRect(){let e=$.geWorldInCanvasBounds(),t=this.worldPointToGrid(new f(e.x,e.y)),i=this.worldPointToGrid(new f(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),n=Math.min(this.#eE-1,i.x),o=Math.max(0,t.y);return new y(r,o,n-r,Math.min(this.#ev-1,i.y)-o)}getGridSize(){return this.#eP}getDimensions(){return{width:this.#v,height:this.#P}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#eE&&t<this.#ev?this.#eT[t][i]:null}worldPointToGrid(e){return new f(Math.floor(e.x/this.#eP),Math.floor(e.y/this.#eP))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#eP;return new f(e.x*this.#eP+t,e.y*this.#eP+t)}getWorldPositionOfTileByEntry(){return this.gridPointToWorldPoint(this.#eb)}getGridPositionOfEntrance(){return this.#eR.gridPoint}setMovementRoutes(e){this.#eC=e,e?(this.#eM=new Map,this.#eC.forEach(e=>e.forEach(e=>{this.#eM.set(e,e)}))):this.#eM=null}setCombatActors(e){this.#e_=[],e?.forEach(e=>{this.#e_.push(this.worldPointToGrid(e.position))})}#eD(e){this.#eG(e),this.#eF(e)}#eG(e){this.#eM?.forEach(t=>{this.#eI.position=this.gridPointToWorldPoint(t),this.#eI.update(e)})}#eF(e){this.#e_?.forEach(t=>{this.#ek.position=this.gridPointToWorldPoint(t),this.#ek.update(e)})}#ez(e,t,i){if(this.#eC?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:th.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#e_?.forEach(n=>{if(n.isCoincident(r)){i(e,t,{filter:th.COMBAT_TILE});return}}),console.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#eC?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(!function(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]]}(this.#eL),this.#eL))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canHeroSeeGridPoint(e){return this.#eA?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return eb(this.#eT,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
 * @file Conversion of map plan keys to images and tile definitions.
 *
 * @module scriptReaders/symbolMapping
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */function tu(e){return{role:tl.GROUND,onClick:(e,t,i)=>ta.triggerEvent(ta.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function tg(e){return{role:tl.ENTRANCE,onClick:(e,t,i)=>ta.triggerEvent(ta.EventId.CLICKED_ENTRANCE,t,i),image:e}}function tp(e){return{role:tl.EXIT,onClick:(e,t,i)=>ta.triggerEvent(ta.EventId.CLICKED_EXIT,t,i),image:e}}const tf=new Map([["x",{role:tl.OBSTACLE,image:"block.png"}],["#-TL",{role:tl.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:tl.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:tl.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:tl.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:tl.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:tl.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:tl.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:tl.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:tl.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:tl.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:tl.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:tl.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:tl.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:tl.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:tl.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:tl.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:tl.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:tl.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:tl.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:tl.OBSTACLE,image:"block.png"}],["=-T",tp("door-T.png")],["=-R",tp("door-R.png")],["=-B",tp("door-B.png")],["=-L",tp("door-L")],["--T",tg("door-T.png")],["--R",tg("door-R.png")],["--B",tg("door-B.png")],["--L",tg("door-L.png")],["=",{role:tl.OBSTACLE,image:"block.png"}],["-",{role:tl.OBSTACLE,image:"block.png"}],[".",tu("floor.png")],[".-SBW",tu("floor-SBW.png")],[".-SBE",tu("floor-SBE.png")],[",-SBE",tu("floor2-SBE.png")],[",-SBW",tu("floor2-SBW.png")],[",",tu("floor2.png")]]);/**
 * @file Dungeon and dragons properties
 *
 * @module dnd/traits
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler (henspace.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class tm{#eW;#e$;constructor(e){e?(this.#eW=e,this.#e$=!1):(this.#eW=new Map,this.#e$=!0)}set(e,t){if(this.#e$||this.#eW.has(e))this.#eW.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#eW.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#eH(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#eH(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#eW.set(e,i[1]),this.#eW.set(`${e}_MAX`,i[2])):this.#eW.set(e,t)}}class tw extends tm{constructor(){super(new Map([["NAME","mystery"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
 * @file Encapsulation of a Scene. A scene equates normally to a level in a
 * dungeon.
 *
 * @module utils/game/scene
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */class ty{#eU;#eg;#eV;#eX;#eY;constructor(e=2,t=2){e>0?(this.#eU=0,this.#eg=1/e):this.#eg=1,this.#eV=e,this.#eX=t}getOpacity(){return this.#eU}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){this.doUpdate(e),0!==this.#eg&&(this.#eU+=e*this.#eg,this.#eU>1?(this.#eg=0,this.#eU=1):this.#eU<0&&(this.#eg=0,this.#eU=0)),this.#eY&&0===this.#eU&&(this.#eY(),this.#eY=null)}unload(){return this.#eK().then(()=>this.doUnload())}#eK(){return this.#eX>0?(this.#eg=-1/this.#eX,new Promise(e=>{this.#eY=e})):Promise.resolve()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}class tx{intro;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}const tS={LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class tT{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=tT.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=tT.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){console.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class tE extends tT{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class tv extends tT{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#eq(t):this.#eZ(e)}#eq(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],n=e[4];for(let e=0;e<i;e++)if(eI.has(t))try{let e=new tw().setFromString(n);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#eZ(e){this.fatalError("Long form actors not supported.")}}class tP extends tT{constructor(e,t,i){super(e,t,i)}parseLine(e){""!==e&&this.sceneDefn.mapDesign.push(e)}}function tC(e,t,i){switch(e){case tS.LEVEL:return new tE(n,t+1,i);case tS.CAST:return new tv(n,t+1,i);case tS.MAP:return new tP(n,t+1,i)}return null}/**
 * @file Camera dolly class. This provides a mechanism to allow the canvas to
 * track a specified Sprite.
 *
 * @module utils/game/camera
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const tM={OFF:0,HERO:1,VELOCITY:2};class tI{#ej;#eJ;#eQ;#e0;constructor(e,t,i=0){let r=$.getCanvasDimensions(),n=i*Math.min(r.width,r.height);this.#ej=new eh,this.#eJ=new eU({prey:e,speed:t,maxSeparation:n}),this.#eQ=new eH,this.#eJ.applyAsContinuousToSprite(this.#ej)}update(e){this.#e0!==tM.OFF&&(this.#ej.update(e),$.centreCanvasOn(this.#ej.position))}setVelocity(e,t){this.setTrackingMethod(tM.VELOCITY),this.#ej.velocity.x=e,this.#ej.velocity.y=t}setTrackingMethod(e){if(e!==this.#e0)switch(this.#e0=e,e){case tM.HERO:this.#eJ.applyAsContinuousToSprite(this.#ej);break;case tM.VELOCITY:this.#eQ.applyAsContinuousToSprite(this.#ej);break;case tM.OFF:break;default:console.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const tR={TR:0,BR:1,BL:2,TL:3};class tB{#e4;#e1;#e8;constructor(e,t,i){this.#e4=e,this.#e2(t,i)}#e2(e,t){let i,r;switch(t){case tR.TL:i=2*e,r=2*e;break;case tR.TR:i=-2*e,r=2*e;break;case tR.BR:i=-2*e,r=-2*e;break;case tR.BL:i=2*e,r=-2*e}this.#e3(i,r),this.#e5(i,r,e)}#e3(e,t){this.#e8=new en(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ei.STOP}),this.#e1=eT.addButton(this.#e8,()=>{this.#e6(!0)},()=>{this.#e6(!1)}),this.#e1.position.x=e,this.#e1.position.y=t,this.#e1.actionClick(null)}#e6(e){e?(this.#e8.setCurrentIndex(1),this.#e4.setTrackingMethod(tM.HERO)):(this.#e8.setCurrentIndex(0),this.#e4.setTrackingMethod(tM.OFF))}#e5(e,t,i){let r=3*i;this.#e9("hud-arrow-up-",e,t-i,()=>{this.#e6(!1),this.#e4.setVelocity(0,-r)},()=>this.#e4.setTrackingMethod(tM.OFF)),this.#e9("hud-arrow-right-",e+i,t,()=>{this.#e6(!1),this.#e4.setVelocity(r,0)},()=>this.#e4.setTrackingMethod(tM.OFF)),this.#e9("hud-arrow-down-",e,t+i,()=>{this.#e6(!1),this.#e4.setVelocity(0,r)},()=>this.#e4.setTrackingMethod(tM.OFF)),this.#e9("hud-arrow-left-",e-i,t,()=>{this.#e6(!1),this.#e4.setVelocity(-r,0)},()=>this.#e4.setTrackingMethod(tM.OFF))}#e9(e,t,i,r,n){let o=new en(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ei.STOP}),s=eT.addMomentaryButton(o,r,n);s.position.x=t,s.position.y=i,o.setCurrentIndex(0)}}/**
 * @file Functions to allow touch and mouse handling.
 *
 * @module utils/dom/pointerActions
 *
 * @license
 * {@link https://opensource.org/license/mit/|MIT}
 *
 * Copyright 2024 Steve Butler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the “Software”), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const tb="custom-pointer-down-event",tO="custom-pointer-up-event",tL="custom-pointer-cancel-event",tA="custom-click-event";function t_(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}let tk=!1;function tz(e){if(tk){if(Q.updateTimeNow(e),a){var t;let i=(e-a)/1e3;$.clearCanvas(),$.setOpacity(h.getOpacity()),K.update(i),h.update(i),$.setOpacity(1),eT.update(i),l?.update(i),ea.showFps&&(t=1/i,es($.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:$.getCanvasDimensions().height},{color:"green"}))}a=e,window.requestAnimationFrame(tz)}}var tN={initialise:async function(e){$.setOptions(e),function(e){let t=0;for(let i in eE){let r=e.measureText(eE[i]),n=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,o=.5*n-r.fontBoundingBoxDescent;e.fillText(eE[i],-.5*r.width,o),e.getImageData(0,0,1,1).data[3]<=0&&(console.debug(`Emoji ${i} not supported.`),eE[i]=`[${t++}]`),e.clearRect(0,0,r.width,n)}}($.getContext2D()),function(){let e=$.getCanvas();e.addEventListener("mousedown",t=>t_(e,tb,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("mouseup",t=>t_(e,tO,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("touchstart",t=>{if(1===t.changedTouches.length){let i=function(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}(t);s=new f(i.x,i.y),t_(e,tb,{x:i.x,y:i.y})}},{passive:!0}),e.addEventListener("touchend",t=>{1===t.changedTouches.length&&t_(e,tO,{x:s?.x,y:s?.y}),s=null},{passive:!0}),e.addEventListener("touchcancel",t=>{t_(e,tL,{x:s?.x,y:s?.y}),s=null},{passive:!0}),e.addEventListener("click",t=>{t_(e,tA,{x:t.offsetX,y:t.offsetY})}),e.addEventListener(tA,e=>{let t=e.detail.x,i=e.detail.y,r=$.uiCoordsToMappedPositions(t,i);console.debug(`Canvas click at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eT.resolveClick(r)||K.resolveClick(r)}),e.addEventListener(tb,e=>{let t=e.detail.x,i=e.detail.y,r=$.uiCoordsToMappedPositions(t,i);console.debug(`Canvas pointer down at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eT.resolvePointerDown(r)}),e.addEventListener(tO,e=>{let t=e.detail.x,i=e.detail.y,r=$.uiCoordsToMappedPositions(t,i);console.debug(`Canvas pointer up at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eT.resolvePointerUp(r)}),e.addEventListener(tL,e=>{let t=e.detail.x,i=e.detail.y,r=$.uiCoordsToMappedPositions(t,i);console.debug(`Canvas pointer cancel at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eT.resolvePointerCancel(r)}),e.addEventListener("contextmenu",e=>{console.debug("Context menu");let t=e.detail.x,i=e.detail.y,r=$.uiCoordsToMappedPositions(t,i);eT.resolveContextMenu(r)||K.resolveContextMenu(r),e.preventDefault()})}(),eQ.showOkDialog("Welcome to the Scripted Dungeon","Let's start").then(()=>{var e;return e=eP.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(console.error(`Error fetching ${e}: ${t}`),null))}).then(e=>e4.setSceneDefinitions(function(e){n=e.split(/\r?\n/),o=[];let t=new tx,i=tT.findFirstSection(n);if(!i)throw Error("Invalid script. No section identifiers found.");let r=tC(i.nextSectionId,i.nextLineIndex,t);for(;r;){let e=r.parse();e?.nextSectionId&&e.nextSectionId!==tS.LEVEL||(o.push(t),t=new tx),r=e?tC(e.nextSectionId,e.nextLineIndex,t):null}return o}(e))).then(()=>ta.triggerEvent(ta.EventId.START_GAME)).catch(e=>alert(e.message))},setScene:function(e){var t;return((t=h)?t.unload().then(()=>(tk=!1,void(eT.clear(),eT.setVisible(!1)))):Promise.resolve(null)).then(()=>(h=e,e.load().then(()=>e.initialise()).then(()=>void(c||(c=new tB(l,48,tR.BR)),function(){let e=new en(0,{prefix:"hud-fullscreen-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ei.STOP}),t=eT.addButton(e,()=>{var e;(e=document.body).requestFullscreen?e.requestFullscreen({navigationUI:"hide"}):Promise.reject(Error("Fullscreen requests not supported by browser"))},()=>{document.exitFullscreen()});t.position.x=48,t.position.y=-48}(),eT.setVisible(!0))))).then(()=>void(tk=!0,window.requestAnimationFrame(tz)))},setCameraToTrack:function(e,t,i){l=new tI(e,t,i)}};window.addEventListener("load",()=>{tN.initialise({width:800,height:600,maxScale:2.4,minScale:1,sizingMethod:"COVER",alpha:!1})});
//# sourceMappingURL=index.06d201d3.js.map
