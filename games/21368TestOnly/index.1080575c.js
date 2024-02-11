let e,t,i,r,o,n,s,a,h,l,c,d;function u(e){return e&&e.__esModule?e.default:e}const p="'UnifrakturCook', cursive",g={normal:{size:15,fontName:"'UnifrakturCook', cursive"},h1:{size:30,fontName:p},h2:{size:22,fontName:p},h3:{size:18,fontName:p},emojiSprite:{size:18,fontName:"'UnifrakturCook', cursive"}};function f(e){let t=g[e]??g.normal;return`${t.size}px ${t.fontName}`}/**
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
 */class m{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new m(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class w{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getDirection(){return Math.atan2(-this.y,this.x)}}class x extends m{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new x(e.x,e.y,0)}static copy(e){return new x(e.x,e.y,e.rotation)}getRelativeTo(e){return new x(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class y{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new m(this.x+this.width,this.y+this.height)}getTopLeft(){return new m(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new m(Number.MIN_VALUE,Number.MIN_VALUE),new m(Number.MAX_VALUE,Number.MAX_VALUE);let T=null,S=null,E=null,v=0,C=0,P=!0,M=null,R=null,I=null,B=new y(0,0,0,0),O=0,b=0,A=1,L=1,_=.1,k="COVER",z=new x(0,0,0);function N(){return{width:window.innerWidth,height:window.innerHeight}}function D(){let e=N(),t=E.width/E.height,i=0,r=0,o=e.width/e.height;("COVER"===k?t>o:t<o)?r=(i=e.height)*t:i=(r=e.width)/t,(A=r/E.width)>L?(r=(A=L)*E.width,i=A*E.height):A<_&&(r=(A=_)*E.width,i=A*E.height),O=(e.width-r)/2,b=(e.height-i)/2,S.style.left=`${O}px`,S.style.top=`${b}px`,S.style.width=`${r}px`,S.style.height=`${i}px`;let n=Math.min(e.width/A,r/A),s=Math.min(e.height/A,i/A);M=new y(.5*(E.width-n),.5*(E.height-s),n,s)}function G(){let e=N(),t=Math.max(parseInt(S.style.left),0),i=Math.max(parseInt(S.style.top),0),r=Math.min(parseInt(S.style.width),e.width),o=Math.min(parseInt(S.style.height),e.height);I.style.left=`${t}px`,I.style.top=`${i}px`,I.style.width=`${r}px`,I.style.height=`${o}px`,function(){let e=g.normal.size*A;document.documentElement.style.fontSize=`${e}px`}(),B=new y(t,i,r,o)}function F(){return S.getContext("2d",{alpha:P})}function W(){let e=document.getElementById("glass-content");return I.style.opacity=0,new Promise(t=>{window.setTimeout(()=>{e.innerHTML="",I.style.display="none",t()},2e3)})}function H(e){return new x(e.x+z.x,e.y+z.y,e.rotation)}window.addEventListener("resize",()=>{null===T&&(T=window.setTimeout(()=>{T=null,D(),G()},200))});var U={canvasPositionToWorld:H,centreCanvasOn:function(e){z.x=e.x-v,z.y=e.y-C},clearCanvas:function(){F().clearRect(0,0,E.width,E.height)},displayOnGlass:function(e,t){let i=document.getElementById("glass-content");return i.replaceChildren(e),I.style.display="block",I.style.opacity=1,new Promise(e=>{t?t.forEach(t=>{t.element.addEventListener("click",()=>e(t.response))}):i.addEventListener("click",()=>e())}).then(()=>W())},getCanvas:()=>S,getContext2D:F,getCanvasDimensions:function(){return{width:E.width,height:E.height}},getGlassRect:function(){return B},getVisibleCanvasBounds:function(){let e=(B.x-E.x)*A,t=(B.y-E.y)*A,i=e+B.width*A,r=t+B.height*A;return e=Math.max(e,E.x),new y(e,t=Math.max(t,E.y),(i=Math.min(i,E.x+E.width))-e,(r=Math.min(r,E.y+E.height))-t)},geWorldInCanvasBounds:function(){return new y(z.x,z.y,E.width,E.height)},glassPositionToWorld:function(e){let t=e.x<0?M.x+M.width:M.x,i=e.y<0?M.y+M.height:M.y;return H(new x(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(E)},isOnScreen:function(e){return e.overlaps(E)},panCamera:function(e,t){z.x+=e,z.y+=t},setOpacity:function(e){F().globalAlpha=e},setOptions:function(e){var t;if(S){console.error("Multiple calls to setScreen ignored.");return}R=document.getElementById("game-content"),t=e.width,g.normal.size=15+t/100*.390625,g.h1.size=2*g.normal.size,g.h2.size=1.5*g.normal.size,g.h3.size=1.2*g.normal.size,g.emojiSprite.size=t/10,(S=document.createElement("canvas")).setAttribute("width",e.width),S.setAttribute("height",e.height),S.innerText="Loading the app.",E=new y(0,0,e.width,e.height),v=e.width/2,C=e.height/2,R.appendChild(S),L=e.maxScale,_=e.minScale,k=e.sizingMethod,P=e.alpha,D(),function(){(I=document.createElement("div")).id="glass",R.appendChild(I),I.style.display="none";let e=document.createElement("div");e.id="glass-content",I.appendChild(e)}(),G()},wipeGlass:W,worldPositionToCanvas:function(e){return new x(e.x-z.x,e.y-z.y,e.rotation)},worldToUi:function(e){return e*A},uiCoordsToMappedPositions:function(e,t){return{canvas:new x(Math.round(e/=A),Math.round(t/=A)),world:new x(Math.round(e+z.x),Math.round(t+z.y),-z.rotation)}},uiToWorld:function(e){return e/A}};const $=new Map,V=new Map;function X(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),$.delete(t)}function Y(e){console.debug("Remove passive sprite."),V.delete(e)}function K(){e=null}var q={addActor:function(t){$.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){V.set(e,e)},clearAll:function(){$.forEach(e=>X(e)),V.forEach(e=>Y(e)),K()},getActors:function(){return $},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():U.getCanvasDimensions()},removeTileMap:K,resolveCancel:function(e){return!1},resolveClick:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},resolveContextMenu:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionContextClick(t.world),!0)},removeActor:X,removePassiveSprite:Y,setTileMap:function(t){e=t},update:function(t){e?.update(t),$.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let o=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,o)}),V.forEach(e=>e.update(t))}};function Z(e,t,i,r){if(e.font=f(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var o=t.split("\n");for(let t=0;t<o.length;t++)r.y=function(e,t,i,r){let o;let n=t.split(" "),s=i.x??0,a=i.y??0,h=r.xWrapPosition-s,l=r.lineSpacing??1,c="";for(let t=0;t<n.length;t++){let i=c+n[t]+" ",r=/**
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
 */function(e,t){let i=e.measureText(void 0);return{width:i.width,height:i.fontBoundingBoxAscent+i.fontBoundingBoxDescent,offsetTop:-i.fontBoundingBoxAscent,offsetCentreY:.5*(i.fontBoundingBoxDescent-i.fontBoundingBoxAscent)}}(e);o||(o=l*r.height),r.width>h&&t>0?(e.fillText(c,s,a),c=n[t]+" ",a+=o):c=i}return e.fillText(c,s,a),a+o}(e,o[t],i,r)}else e.fillText(t,i.x??0,i.y??0)}/**
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
 */const j={spriteBoxes:!1,showFps:!0};/**
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
 */let J=[];function Q(e){return new Promise(t=>{let i=new Image;i.addEventListener("load",()=>{console.debug("Image loaded."),t(i)}),i.src=e})}var ee={getSpriteBitmap:function(e,t){let i=J[e].get(t);return i||console.debug(`Failed to find image ${t} at index ${e}`),i},loadImage:Q,loadImages:function(e){let t=[];return e.forEach(e=>t.push(Q(e))),Promise.all(t)},loadSpriteMap:function(e,t){return Q(t).then(t=>(function(e,t){let i=[],r=new Map;return J.push(r),e.frames.forEach(e=>{i.push(createImageBitmap(t,e.frame.x,e.frame.y,e.frame.w,e.frame.h).then(t=>{let i={image:t,width:e.frame.w,height:e.frame.h,centreX:e.sourceSize.w/2-e.spriteSourceSize.x,centreY:e.sourceSize.h/2-e.spriteSourceSize.y};return r.set(e.filename,i),e.filename}))}),Promise.all(i)})(e,t))}};/**
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
 */let et=0;var ei={updateTimeNow:function(e){et=e},getFrameCount:function(e){return Math.floor(et/e)}};/**
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
 */const er={DEG_22_5:1/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_157_7:7/8*Math.PI},eo={N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7};function en(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}function es(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}const ea={WRAP:0,REVERSE:1,STOP:2};class eh{#e;#t;#i;#r;#o;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#o=0}get index(){return this.#o}set index(e){var t;this.#o=(t=this.#e-1,e<0?0:e>t?t:e)}advanceBy(e){if(this.#e<1)return this.#o;switch(this.#i){case ea.WRAP:return this.#n(e);case ea.REVERSE:return this.#s(e);case ea.NONE:default:return this.#a(e)}}#n(e){return e%=this.#e,this.#o+=e%this.#e,this.#o>=this.#e&&(this.#o=this.#o-this.#e),this.#o}#s(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#o+=e;let t=this.#o-this.#t;t>0&&(this.#o=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#o-=e,this.#o<0&&(this.#o=-this.#o,this.#r=1));return this.#o}#a(e){return this.#r>0?this.#o=Math.min(this.#t,this.#o+e):this.#r<0&&(this.#o=Math.max(0,this.#o-e)),this.#o}}class el{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,this.#d=Math.max(1,i.framePeriodMs),"string"==typeof t){this.#h.push(ee.getFrame(e,t));return}let o=t.startIndex??0,n=t.padding??0;do{let i=`${t.prefix}${o.toString().padStart(n,"0")}${t.suffix}`;(r=ee.getSpriteBitmap(e,i))&&this.#h.push(r),o++}while(r)this.#l=new eh(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(this.playing){let e=ei.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.playing=!1,this.#l.index=e}getCurrentIndex(){return this.#l.index}}class ec{#u;#p;constructor(e,t){this.#u={},this.#u[e]=t,this.#p=t}get image(){return this.#p}addAnimatedImage(e,t){this.#u[e]=t}setCurrentImage(e){this.#u.hasOwnProperty(e)?this.#p=this.#u[e]:console.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#p.getCurrentFrame()}}/**
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
 */class ed{#g=new x(0,0,0);#f=new w(0,0,0);#m;#w;modifier;visible;opacity;constructor(e){this.#m=e?.renderer,this.#w=Array.isArray(this.#m),this.visible=!0,this.opacity=1}get position(){return this.#g}set position(e){this.#g.x=this.valueOrZero(e.x),this.#g.y=this.valueOrZero(e.y),this.#g.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#f}set velocity(e){this.#f.x=this.valueOrZero(e.x),this.#f.y=this.valueOrZero(e.y),this.#f.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#x()}#x(){this.#m&&(this.#m.forEach?this.#m.forEach(e=>e.render(this.#g,this.opacity)):this.#m.render(this.#g,this.opacity))}getBoundingBox(){let e=this.#m.getBoundingBoxCanvas();return new y(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class eu{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new y(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=U.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),j.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){console.error("_doRender method should be overridden.")}isOnScreen(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return U.isOnScreen(t)}isOnCanvas(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return U.isOnCanvas(t)}}class ep extends eu{#y;#T;#S;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#y=i}#E(e){this._context.font=f(this.#y);let t=this._context.measureText(e);this.#S={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#T=e}_doRender(e){var t;this.text!==this.#T&&this.#E(this.text);let i={x:e.x+this.#S.origin.x,y:e.y+this.#S.origin.y,rotation:e.rotation};Z(this._context,this.#T,i,{styleName:this.#y}),this._boundingBoxCanvas=(t=this.#S,new y(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class eg extends eu{#v;#C;#P;#M;#R;#I;constructor(e,t){super(e),this.#v=t.width??10,this.#C=t.height??10,this.#P=this.#v/2,this.#M=this.#C/2,this.#R=t.fillStyle,this.#I=t.strokeStyle}_doRender(e){let t=e.x-this.#P,i=e.y-this.#M;this.#R&&(this._context.fillStyle=this.#R,this._context.fillRect(t,i,this.#v,this.#C)),this.#I&&(this._context.strokeStyle=this.#I,this._context.strokeRect(t,i,this.#v,this.#C)),this._boundingBoxCanvas=new y(t,i,this.#v,this.#C)}}class ef extends eu{#C;#M;#v;#P;#R;#I;#B;#O;#b;#A;constructor(e,t){super(e),this.#C=t.height,this.#M=this.#C/2,this.#v=t.width,this.#P=this.#v/2,this.#R=t.fillStyle,this.#I=t.strokeStyle,this.#B=t.offsetX??0,this.#O=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#b=Math.min(e,1)*this.#C,this.#A=.5*this.#b}_doRender(e){let t=e.y-this.#M+this.#O,i=e.y+this.#M-this.#b+this.#O,r=e.x-this.#P+this.#B;this.#R&&(this._context.fillStyle=this.#R,this._context.fillRect(r,i,this.#v,this.#b)),this.#I&&(this._context.strokeStyle=this.#I,this._context.strokeRect(r,t,this.#v,this.#C)),this._boundingBoxCanvas=new y(r,t,this.#v,this.#C)}}class em extends eu{#L;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){console.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#L=[];let r=t.tileSize/i,o=-t.tileSize/2+r/2;for(let n=0;n<i;n++)this.#L.push(new ef(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[n],strokeStyle:t.strokeStyles?.[n],offsetX:o+r*n,offsetY:0}))}setLevel(e,t){this.#L[e]?.setLevel(t)}render(e){this.#L?.forEach(t=>t.render(e))}}class ew extends eu{#_;#k;constructor(e,t){super(e),t?.getCurrentFrame?(this.#k=t,this.#_=this.#k.getCurrentFrame()):this.#_=t,this.#_?(this._boundingBoxCanvas.width=this.#_?.width??0,this._boundingBoxCanvas.height=this.#_?.height??0):console.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#_)return;let t=this.#k?this.#k.getCurrentFrame():this.#_;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}/**
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
 */class ex{#z;#N;#D;#G;setOnClick(e){this.#z=e}setOnContextClick(e){this.#N=e}setOnPointerDown(e){this.#D=e}setOnPointerUp(e){this.#G=e}actionClick(e){this.#z?.(this,e)}actionContextClick(e){this.#N?.(this,e)}actionPointerDown(e){this.#D?.(this,e)}actionPointerUp(e){this.#G?.(this,e)}}class ey extends ex{maxTilesPerMove;sprite;traits;constructor(e){super(),this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}const eT=new Map;let eS=!1;function eE(e,t){let i=U.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new y(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}function ev(e){if(!eS||!eS)return!1;for(let[t,i]of eT)if(eE(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1}var eC={addButton:function(e,t,i){let r=new ey(new ed({renderer:new ew(U.getContext2D(),e)}));return eT.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),e.setCurrentIndex(0),r},addMomentaryButton:function(e,t,i){let r=new ey(new ed({renderer:new ew(U.getContext2D(),e)}));return eT.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){eT.clear()},removeButton:function(e){eT.delete(e)},update:function(e){eS&&eT.forEach(t=>{let i=x.copy(t.position);t.position=U.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolvePointerCancel:function(e){return ev(e)},resolveClick:function(e){if(!eS)return!1;for(let[t,i]of eT)if(eE(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolveContextMenu:function(e){return!1},resolvePointerDown:function(e){if(!eS||!eS)return!1;for(let[t,i]of eT)if(eE(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:ev,setVisible:function(e){eS=e}};/**
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
 */const eP={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
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
 */var eM={};eM=new URL("dungeon_script.8a2dd4bc.txt",import.meta.url).toString();const eR={DUNGEON_SCRIPT:new URL(eM)};class eI extends em{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}function eB(e){let t=new ew(U.getContext2D(),new ec("idle",new el(0,{prefix:e,suffix:".png",startIndex:1,padding:3},{framePeriodMs:100,loopMethod:ea.REVERSE}))),i=new eI(U.getContext2D(),{tileSize:q.getTileMap().getGridSize()-2,fillStyles:["rgba(255, 0, 0, 0.2)","rgba(0, 0, 255, 0.2)"],strokeStyles:[]}),r=new ey(new ed({renderer:[i,t]}));return i.actor=r,r.position=new x(48,48,0),r.velocity={x:-500,y:-70,rotation:.1},r}const eO=new Map([["HERO",{create:()=>eB("hero")}],["MONSTER",{create:()=>eB("orc")}]]);/**
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
 */var eb={};eb=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":1,"y":95,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":435,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":435,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":1071,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":1080,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":485,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":485,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":535,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":535,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":585,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":585,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":635,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero001.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero002.png","frame":{"x":985,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":48},"sourceSize":{"w":48,"h":49}},{"filename":"hero003.png","frame":{"x":1033,"y":51,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":45,"h":48},"sourceSize":{"w":49,"h":49}},{"filename":"hero004.png","frame":{"x":389,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":44,"h":49},"sourceSize":{"w":49,"h":49}},{"filename":"hud-arrow-down-000.png","frame":{"x":147,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":195,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":243,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":291,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":339,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":387,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":1220,"y":51,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":1246,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":1268,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":1294,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-000.png","frame":{"x":1316,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-001.png","frame":{"x":1342,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":97,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc001.png","frame":{"x":295,"y":1,"w":46,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc002.png","frame":{"x":147,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc003.png","frame":{"x":197,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc004.png","frame":{"x":246,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"RIP.png","frame":{"x":97,"y":52,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":635,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":1106,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":685,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":1035,"y":1,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":685,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":735,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":735,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":1115,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":1141,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":1150,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":1176,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":785,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":1185,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":785,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":1211,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":835,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":835,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":885,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":885,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":935,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":935,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":985,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1389,"h":100},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:60d7f34bb4039828e16477df24a24f9d:e3ffb4491e81187d2ee6cd8cabbf73f0:9c0fba27a8a0c106083a8713f6c67b32$"}}');var eA={};/**
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
 */function eL(e,t,i){return{centre:e[t]?.[i],tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}function e_(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]];return e}eA=new URL("dungeon.2988913d.png",import.meta.url).toString();const ek={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},ez={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},eN={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};class eD{matrix;entryPointByDoor;exitPointByDoor;constructor(){this.entryPointByDoor=new m(0,0),this.exitPointByDoor=new m(0,0)}static generateTileMapPlan(e,t){let i=new eD,r=i.convertToMatrix(e);return r=i.clarifyMatrix(r),i.createPlan(r,t),i}convertToMatrix(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}clarifyMatrix(e){let t=[];return e.forEach((i,r)=>{let o=[];t.push(o),i.forEach((t,i)=>{var n,s,a,h;let l;let c=eL(e,r,i);(n=t,ek.VOID.includes(n))?t=" ":eW(t)?(s=t,eH(c.above)&&(eH(c.tl)?s+=eN.BELOW_WALL:s+=eN.BELOW_END_WALL),a=t=s,eG(c.left)||eG(c.above)||eG(c.right)||eG(c.below))?this.entryPointByDoor=new m(i,r):(eF(c.right)||eF(c.below)||eF(c.left)||eF(c.above))&&(this.exitPointByDoor=new m(i,r)):eH(t)&&(l=h=t,eH(c.above)&&eH(c.right)&&eH(c.below)&&eH(c.left)?l+=ez.INTERNAL_CROSS:eW(c.left)&&eW(c.right)?l+=ez.INTERNAL_VERTICAL:eW(c.above)&&eW(c.below)?l+=ez.INTERNAL_HORIZONTAL:eH(c.left)&&eH(c.right)&&eH(c.below)?l+=ez.TOP_TEE:eH(c.above)&&eH(c.below)&&eH(c.left)?l+=ez.RIGHT_TEE:eH(c.left)&&eH(c.right)&&eH(c.above)?l+=ez.BOTTOM_TEE:eH(c.above)&&eH(c.below)&&eH(c.right)?l+=ez.LEFT_TEE:eH(c.right)&&eH(c.below)?l+=eW(c.br)?ez.TOP_LEFT:ez.TOP_LEFT_INTERNAL:eH(c.left)&&eH(c.below)?l+=eW(c.bl)?ez.TOP_RIGHT:ez.TOP_RIGHT_INTERNAL:eH(c.left)&&eH(c.above)?l+=eW(c.tl)?ez.BOTTOM_RIGHT:ez.BOTTOM_RIGHT_INTERNAL:eH(c.right)&&eH(c.above)?l+=eW(c.tr)?ez.BOTTOM_LEFT:ez.BOTTOM_LEFT_INTERNAL:eH(c.above)&&eH(c.below)?l+=eW(c.right)?ez.LEFT:ez.RIGHT:eH(c.right)&&eH(c.left)&&(l+=eW(c.below)?ez.TOP:ez.BOTTOM),t=eH(c.above)?l+eN.BELOW_WALL:l),o.push(t)})}),t}createPlan(e,t){let i=[];e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),o=i.get(t);if(!o&&r[2]&&r[3]&&(o=i.get(`${r[1]}${r[2]}`)),!o&&r[2]&&(o=i.get(r[1])),!o){let o=function(e){for(let t in ek)if(ek[t].includes(e))return ek[t][0];return null}(r[1]);if(o&&o!==r[1]){var n,s;let t;return e((n=r[2],s=r[3],t=o,n&&(t+=n),s&&(t+=s),t),i)}console.error(`Failed to find symbol for ${t}`)}return o}(e,t))})}),this.matrix=i}}function eG(e){return ek.DOOR_IN.includes(e)}function eF(e){return ek.DOOR_OUT.includes(e)}function eW(e){return ek.GROUND.includes(e)}function eH(e){var t;return ek.WALL.includes(e)||eG(t=e)||eF(t)}/**
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
 */class eU{#F;#W;constructor(e){this.#W=e,this.#F=new Map}setRouteToCoords(e,t,i){this.#F.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#F.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#F.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new m(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#F.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#F.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#W.gridPointToWorldPoint(e)):t}}class e${actor;#F;#W;#H;constructor(e,t){this.#W=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#U(e,t);if(r.coincident(e))return[];this.#W.isGridPointPassableByActor(r,this.actor)||(r=this.#$(r,t));let o=[],n=Math.sign(r.x-e.x),s=Math.sign(r.y-e.y),a=m.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=m.copy(a),c=!1;if(h&&0!==n&&a.x!=r.x?(t.x+=n,c=!0):h||0===s||a.y==r.y||(t.y+=s,c=!0),c=c&&this.#W.isGridPointPassableByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||o.push(this.#W.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||o.push(this.#W.gridPointToWorldPoint(a)),o}getAllRoutesFrom(e,t){return this.#F=new eU(this.#W),this.#H=e,this.#V(e.x,e.y,t,null),this.#F}#V(e,t,i,r){if(r){if(e===this.#H.x&&t===this.#H.y||!this.#X(e,t))return;let o=this.#F.getRouteToCoords(e,t);if(o&&!(r.length<o.length-1))return;r.push(new m(e,t)),this.#F.setRouteToCoords(r,e,t),i--}else r=[new m(e,t)];i>0&&(this.#V(e,t-1,i,[...r]),this.#V(e+1,t,i,[...r]),this.#V(e,t+1,i,[...r]),this.#V(e-1,t,i,[...r]))}#X(e,t){return this.#W.isGridPointPassableByActor(new m(e,t),this.actor)}#U(e,t){let i=t.x-e.x,r=t.y-e.y,o=t.x,n=t.y;return Math.abs(i)>Math.abs(r)?o-=Math.sign(i):n-=Math.sign(r),new m(o,n)}#$(e,t){return e.x===t.x&&e.y<t.y?new m(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new m(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new m(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new m(e.x+1,e.y-1):e}}class eV{#Y;#K;#W;#q;#Z;#j;#J;constructor(e,t){this.#W=e,this.#Y=t}findReachedTiles(){return this.#K=this.#W.worldPointToGrid(this.#Y.position),this.#j=this.#W.getVisibleGridPointRect(),this.#Z&&this.#Z.coincident(this.#K)&&this.#j&&this.#j.equals(this.#J)||(this.#q=new Map,this.#q.set(this.#K.toString(),this.#K),this.#Q().forEach(e=>{this.#ee(e)}),this.#Z=this.#K,this.#J=this.#j),this.#q}isGridPointInRays(e){return!!this.#q&&this.#q.has(e.toString())}#Q(){let e=[];for(let t=this.#j.x;t<=this.#j.x+this.#j.width;t++)e.push(new m(t,this.#j.y)),e.push(new m(t,this.#j.y+this.#j.height));for(let t=this.#j.y+1;t<=this.#j.y+this.#j.height-1;t++)e.push(new m(this.#j.x,t)),e.push(new m(this.#j.x+this.#j.width,t));return e}#ee(e){let t,i,r;let o=function(e){let t=Math.abs(e);return t<=er.DEG_22_5?eo.E:t<=er.DEG_67_5?Math.sign(e)>0?eo.NE:eo.SE:t<=er.DEG_112_5?Math.sign(e)>0?eo.N:eo.S:t<=er.DEG_157_7?Math.sign(e)>0?eo.NW:eo.SW:eo.W}(this.#K.getScreenAngleTo(e));Math.abs(e.x-this.#K.x)>=Math.abs(e.y-this.#K.y)?(t=Math.sign(e.x-this.#K.x),i=(r=Math.abs(e.x-this.#K.x))<1?0:(e.y-this.#K.y)/r):(i=Math.sign(e.y-this.#K.y),t=(r=Math.abs(e.y-this.#K.y))<1?0:(e.x-this.#K.x)/r);let n=this.#K.x,s=this.#K.y,a=!0;for(;r>=0;){let e=new m(Math.round(n),Math.round(s));if(a||this.#W.isSeeThrough(e,this.#Y))this.#et(e,o);else break;a=!1,n+=t,s+=i,r--}}#et(e,t){switch(this.#q.set(e.toString(),e),t){case eo.N:this.#ei(new m(e.x-1,e.y-1)),this.#ei(new m(e.x,e.y-1)),this.#ei(new m(e.x+1,e.y-1));break;case eo.NE:this.#ei(new m(e.x,e.y-1)),this.#ei(new m(e.x+1,e.y-1)),this.#ei(new m(e.x+1,e.y));break;case eo.E:this.#ei(new m(e.x+1,e.y-1)),this.#ei(new m(e.x+1,e.y)),this.#ei(new m(e.x+1,e.y+1));break;case eo.SE:this.#ei(new m(e.x+1,e.y)),this.#ei(new m(e.x+1,e.y+1)),this.#ei(new m(e.x,e.y+1));break;case eo.S:this.#ei(new m(e.x-1,e.y+1)),this.#ei(new m(e.x,e.y+1)),this.#ei(new m(e.x+1,e.y+1));break;case eo.SW:this.#ei(new m(e.x-1,e.y)),this.#ei(new m(e.x-1,e.y+1)),this.#ei(new m(e.x,e.y+1));break;case eo.W:this.#ei(new m(e.x-1,e.y-1)),this.#ei(new m(e.x-1,e.y)),this.#ei(new m(e.x-1,e.y+1));break;case eo.NW:this.#ei(new m(e.x-1,e.y)),this.#ei(new m(e.x-1,e.y-1)),this.#ei(new m(e.x,e.y-1))}}#ei(e){this.#W.isSeeThrough(e)||this.#q.set(e.toString(),e)}}class eX{decoratedModifier;#er;#eo;#en;constructor(e){this.#eo=0,this.#en=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#en=t,new Promise(t=>{this.#er=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#er&&(this.#eo+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#eo>this.#en?(this.#er?.(null),null):i}doUpdate(e,t){return console.error("doUpdate should be overridden."),this}}class eY extends eX{#es;#ea;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class eK extends eX{#eh;#el;#ec;constructor(e,t){super(t),this.#eh=e.prey,this.#el=e.maxSeparation,this.#ec=e.speed}doUpdate(e,t){let i=this.#eh.position,r=e.position;if(!r.withinSquare(i,this.#el)){let o=r.getCartesianAngleTo(i);e.velocity.x=this.#ec*Math.cos(o),e.velocity.y=this.#ec*Math.sin(o);let n=e.velocity.x*t,s=e.velocity.y*t;e.position.x+=this.getMinMove(n,i.x,r.x),e.position.y+=this.getMinMove(s,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class eq extends eX{#ed;#o;#eu;#ec;constructor(e,t){super(t),this.#ed=e.path,this.#o=0,this.#eu=e.path[0],this.#ec=e.speed}doUpdate(e,t){let i=e.position,r=i.getCartesianAngleTo(this.#eu);e.velocity.x=this.#ec*Math.cos(r),e.velocity.y=this.#ec*Math.sin(r);let o=e.velocity.x*t,n=e.velocity.y*t;if(i.x+=this.getMinMove(o,this.#eu.x,i.x),i.y+=this.getMinMove(n,this.#eu.y,i.y),i.isCoincident(this.#eu)){if(++this.#o>=this.#ed.length)return this.decoratedModifier;this.#eu=this.#ed[this.#o]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}/**
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
 */class eZ extends eX{#ep;constructor(e,t){super(t),this.#ep=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#ep),e.opacity>0?this:null}}function ej(e,t){let i=new ed({renderer:e});i.position=t.position,i.velocity=t.velocity,q.addPassiveSprite(i),new eZ(t.lifetimeSecs,new eY).applyAsTransientToSprite(i,20).then(()=>q.removePassiveSprite(i))}function eJ(e,t){ej(new ew(U.getContext2D(),e),t)}function eQ(e,t){ej(new ep(U.getContext2D(),e),t)}/**
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
 */function e0(e=6){return es(1,e)}function e4(e,t){return(function(e,t){let i=m.copy(e.position);return new eq({path:[new m(e.position.x+.2*(t.position.x-e.position.x),e.position.y+.2*(t.position.y-e.position.y)),i],speed:100}).applyAsTransientToSprite(e.sprite)})(e,t).then(()=>new Promise(e=>{if(e0(20)>10)eJ(ee.getSpriteBitmap(0,"blood-splat.png"),{lifetimeSecs:1,position:t.position,velocity:new w(0,0,0)});else{eQ("Missed",{lifetimeSecs:2,position:t.position,velocity:new w(0,-100,0)}),e();return}let i=t.traits.get("HP"),r=e0(6);i=Math.max(0,i-r),t.traits.set("HP",i),0===i?(q.removeActor(t),eJ(ee.getSpriteBitmap(0,"RIP.png"),{lifetimeSecs:5,position:t.position,velocity:new w(0,0,0)})):eQ(`-${r} HP`,{lifetimeSecs:2,position:t.position,velocity:new w(0,-200,0)}),e(i)}))}function e1(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var e8={showMessage:function(e){let t=e1(e);U.displayOnGlass(t)},showOkDialog:function(e,t="OK"){let i=document.createElement("div");i.appendChild(e1(e));let r=document.createElement("button");return r.appendChild(document.createTextNode(t)),i.appendChild(r),U.displayOnGlass(i,[{element:r,response:0}])}};/**
 * @file Navigation button set for the HUD
 *
 * @module utils/game/hudNavSet
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
 */const e2={OFF:0,HERO:1,VELOCITY:2};class e3{#eg;#ef;#em;#ew;constructor(e,t,i=0){let r=U.getCanvasDimensions(),o=i*Math.min(r.width,r.height);this.#eg=new ed,this.#ef=new eK({prey:e,speed:t,maxSeparation:o}),this.#em=new eY,this.#ef.applyAsContinuousToSprite(this.#eg)}update(e){this.#ew!==e2.OFF&&(this.#eg.update(e),U.centreCanvasOn(this.#eg.position))}setVelocity(e,t){this.setTrackingMethod(e2.VELOCITY),this.#eg.velocity.x=e,this.#eg.velocity.y=t}setTrackingMethod(e){if(e!==this.#ew)switch(this.#ew=e,e){case e2.HERO:this.#ef.applyAsContinuousToSprite(this.#eg);break;case e2.VELOCITY:this.#em.applyAsContinuousToSprite(this.#eg);break;case e2.OFF:break;default:console.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const e5={TR:0,BR:1,BL:2,TL:3};class e6{#ex;#ey;#eT;constructor(e,t,i){this.#ex=e,this.#eS(t,i)}#eS(e,t){let i,r;switch(t){case e5.TL:i=2*e,r=2*e;break;case e5.TR:i=-2*e,r=2*e;break;case e5.BR:i=-2*e,r=-2*e;break;case e5.BL:i=2*e,r=-2*e}this.#eE(i,r),this.#ev(i,r,e)}#eE(e,t){this.#eT=new el(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),this.#ey=eC.addButton(this.#eT,()=>{this.#eC(!0)},()=>{this.#eC(!1)}),this.#ey.position.x=e,this.#ey.position.y=t,this.#ey.actionClick(null)}#eC(e){e?(this.#eT.setCurrentIndex(1),this.#ex.setTrackingMethod(e2.HERO)):(this.#eT.setCurrentIndex(0),this.#ex.setTrackingMethod(e2.OFF))}#ev(e,t,i){let r=3*i;this.#eP("hud-arrow-up-",e,t-i,()=>{this.#eC(!1),this.#ex.setVelocity(0,-r)},()=>this.#ex.setTrackingMethod(e2.OFF)),this.#eP("hud-arrow-right-",e+i,t,()=>{this.#eC(!1),this.#ex.setVelocity(r,0)},()=>this.#ex.setTrackingMethod(e2.OFF)),this.#eP("hud-arrow-down-",e,t+i,()=>{this.#eC(!1),this.#ex.setVelocity(0,r)},()=>this.#ex.setTrackingMethod(e2.OFF)),this.#eP("hud-arrow-left-",e-i,t,()=>{this.#eC(!1),this.#ex.setVelocity(-r,0)},()=>this.#ex.setTrackingMethod(e2.OFF))}#eP(e,t,i,r,o){let n=new el(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),s=eC.addMomentaryButton(n,r,o);s.position.x=t,s.position.y=i,n.setCurrentIndex(0)}}function e9(e){var o;return e?(o=s,(q.clearAll(),o)?o.unload().then(()=>(s=null,eC.clear(),eC.setVisible(!1),Promise.resolve())):Promise.resolve(null)).then(()=>e.load().then(()=>e.initialise()).then(()=>{new e6(r,48,e5.BR),addEventListener("fullscreenchange",()=>{document.fullscreenElement?(console.debug("Entering fullscreen mode"),i.setCurrentIndex(1)):(console.debug("Exiting fullscreen mode."),i.setCurrentIndex(0))}),i=new el(0,{prefix:"hud-fullscreen-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),(t=eC.addButton(i,()=>{var e;(e=document.body).requestFullscreen?e.requestFullscreen({navigationUI:"hide"}):Promise.reject(Error("Fullscreen requests not supported by browser"))},()=>{document.exitFullscreen()})).position.x=48,t.position.y=-48,eC.setVisible(!0),s=e})):(console.error("Attempt made to switch to the next scene when there are no more."),Promise.reject())}function e7(){return++n<o.length?function(e){let t=new tB;return t.doLoad=()=>ee.loadSpriteMap(u(eb),u(eA)),t.doInitialise=function(e){let t=eD.generateTileMapPlan(e.mapDesign,tM);return()=>{let i=new tE(U.getContext2D(),t,48);return q.setTileMap(i),this.heroActor=eO.get("HERO").create(),this.heroActor.traits=new tI,(function(e){let t=[];return e.enemies.forEach(e=>{let i=eO.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(e).forEach(e=>{e.position=i.getRandomFreeGroundTile().worldPoint,q.addActor(e)}),te.setCameraToTrack(this.heroActor.sprite,200,0),q.addActor(this.heroActor),tx.setHero(this.heroActor),e8.showMessage(e.intro)}}(e),t.doUpdate=()=>{},t.doUnload=()=>Promise.resolve(null),t}(o[n]):null}var te={areThereMoreScenes:function(){return n<o.length-1},setCameraToTrack:function(e,t,i){r=new e3(e,t,i)},setSceneDefinitions:function(e){o=e,n=-1},switchToFirstScene:function(){return e9((n=-1,e7()))},switchToNextScene:function(){return e9(e7())},update:function(e){s&&(U.clearCanvas(),U.setOpacity(s.getOpacity()),q.update(e),s.update(e),eC.update(e),U.setOpacity(1),r?.update(e))}};const tt={START_GAME:0,CLICKED_FREE_GROUND:1,CLICKED_ENTRANCE:2,CLICKED_EXIT:3};class ti{#Y;#eM;#eR;#W;#eI;constructor(e,t,i){this.#Y=e,this.#W=t,this.#eI=i}moveInstantly(){this.#eR=x.copy(this.#Y.position);let e=this.#W.worldPointToGrid(a.position),t=this.#W.worldPointToGrid(this.#Y.position);if(Math.abs(e.x-t.x)+Math.abs(e.y-t.y)<=2*this.#Y.maxTilesPerMove&&this.#W.canHeroSeeGridPoint(t)){this.#eI.actor=this.#Y;let i=this.#eI.getDumbRouteNextTo(t,e,this.#Y.maxTilesPerMove);i.length>0&&(this.#eM=new eq({path:i,speed:100},this.#Y.sprite.modifier),this.#eB(i[i.length-1]))}}#eB(e){let t=this.#W.worldPointToGrid(this.#Y.position);this.#Y.position=e;let i=this.#W.worldPointToGrid(this.#Y.position);this.#W.moveTileOccupancyGridPoint(this.#Y,t,i)}#eO(){this.#eB(this.#eR)}replay(){return(this.#eO(),this.#eM)?this.#eM.applyAsTransientToSprite(this.#Y.sprite):Promise.resolve()}}class tr{#W;#eI;#eb;constructor(e,t){this.#eb=[],this.#W=e,this.#eI=t}addAndMoveActor(e){let t=new ti(e,this.#W,this.#eI);t.moveInstantly(),this.#eb.push(t)}replay(){let e=[];return this.#eb.forEach(t=>e.push(t.replay())),Promise.all(e)}}class to{constructor(){}async transitionTo(e){await this.onExit().then(()=>(tm=e,e.onEntry()))}onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}onExit(){return Promise.resolve(null)}}class tn extends to{onEntry(){console.log("Enter AtStart"),e8.showOkDialog("You are in a dark and dingy dungeon.","Conquer it!").then(()=>tg(this))}}class ts extends to{async onEntry(){console.log("Enter AtGameOver"),eQ("YOU DIED!",{lifetimeSecs:2,position:a.position,velocity:new w(0,-100,0)}),await new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>e8.showOkDialog("Game over. You died.","Try again")).then(()=>tg(this))}}class ta extends to{async onEntry(){console.log("Enter AtGameCompleted"),await e8.showOkDialog("You've done it. Well done.","Try again").then(()=>tg(this))}}class th extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnIdle"),await tu()}async onEvent(e,t,i){switch(e){case tt.CLICKED_FREE_GROUND:i?.filter===ty.COMBAT_TILE?console.error("Unexpected click on combat tile ignored."):await tp(t),this.transitionTo(new tc);break;case tt.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tt.CLICKED_EXIT:console.log("Escaping"),await tp(t),te.areThereMoreScenes()?await tf(this):this.transitionTo(new ta)}return Promise.resolve(null)}}class tl extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnFighting"),await tu()}async onEvent(e,t,i){switch(e){case tt.CLICKED_FREE_GROUND:i?.filter===ty.COMBAT_TILE?await this.#eA(t):await this.#eL(t),0===q.getTileMap().getParticipants(a).length?this.transitionTo(new tc):this.transitionTo(new td);break;case tt.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tt.CLICKED_EXIT:console.log("Escaping"),await tp(t),te.areThereMoreScenes()?await tf(this):this.transitionTo(new ta)}return Promise.resolve(null)}#eA(e){let t=q.getTileMap().getTileAtWorldPoint(e).getOccupants(),i=[];for(let e of t.values())i.push(e4(a,e));return Promise.all(i)}#eL(e){for(let e of q.getTileMap().getParticipants(a)){var t,i;if(t=a,i=0,!(e0(20)>10)&&(eQ("Failed to run.",{lifetimeSecs:2,position:t.position,velocity:new w(0,-100,0)}),1))return Promise.resolve(!1)}return tp(e)}}class tc extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnIdle");let e=q.getTileMap(),t=new e$(e),i=new tr(e,t);for(let e of q.getActors().values())e!==a&&i.addAndMoveActor(e);return await i.replay(),0===e.getParticipants(a).length?this.transitionTo(new th):this.transitionTo(new tl),Promise.resolve(null)}}class td extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnFighting");let e=q.getTileMap(),t=new e$(e),i=new tr(e,t),r=e.getParticipants(a);for(let e of q.getActors().values())e!==a&&(r.includes(e)?await e4(e,a):i.addAndMoveActor(e));return await i.replay(),0===a.traits.get("HP")?this.transitionTo(new ts):0===r.length?this.transitionTo(new th):this.transitionTo(new tl),Promise.resolve(null)}}function tu(){let e=q.getTileMap(),t=new e$(e,a).getAllRoutesFrom(e.worldPointToGrid(a.sprite.position),a.maxTilesPerMove);return e.setMovementRoutes(t),e.setCombatActors(e.getParticipants(a)),Promise.resolve(null)}function tp(e){let t=q.getTileMap(),i=t.getWaypointsToWorldPoint(e);return(t.setMovementRoutes(null),t.setCombatActors(null),i)?new eq({path:i,speed:100},a.sprite.modifier).applyAsTransientToSprite(a.sprite):Promise.resolve()}function tg(e){return te.switchToFirstScene().then(()=>(a.sprite.position=q.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new th)))}function tf(e){return te.switchToNextScene().then(()=>(a.sprite.position=q.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new th)))}let tm=new class extends to{onEntry(){console.log("WaitingToStart state")}async onEvent(e,t,i){e===tt.START_GAME&&this.transitionTo(new tn)}},tw=!1;var tx={EventId:tt,getHeroActor:function(){return a},setHero:function(e){a=e},triggerEvent:function(e,t,i){if(tw){console.debug(`Ignoring event ${e} as still processing earlier event.`);return}tw=!0,tm.onEvent(e,t,i).then(()=>{tw=!1})}};const ty={MOVEMENT_TILE:0,COMBAT_TILE:1},tT={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class tS extends ex{sprite;obstacle;#e_;#ek;#ez;#eN;constructor(e,t){super(),this.sprite=e,this.#e_=new Map,this.obstacle=t.obstacle,this.#ek=t.gridPoint,this.#ez=t.worldPoint,this.#eN=t.role}get role(){return this.#eN}get gridPoint(){return this.#ek}get worldPoint(){return this.#ez}addOccupant(e){this.#e_.set(e,e)}deleteOccupant(e){this.#e_.delete(e)}getOccupants(){return this.#e_}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#e_.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#e_.values())if(t!==e&&t.obstacle)return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#eN!==tT.ENTRANCE&&this.#eN!==tT.EXIT}}class tE{#eD;#eG;#eF;#eW;#eH;#v;#C;#eU;#e$;#eV;#eX;#eY;#eK;#eq;#eZ;#ej;#eJ;#eQ;constructor(e,t,i){let r=t.matrix;this.#eK=t.entryPointByDoor,this.#eq=t.exitPointByDoor,this.#eD=e,this.#eV=new ed({renderer:new eg(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#eQ=new ed({renderer:new eg(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#eH=i,this.#eG=[],this.#eW=r.length,this.#eF=r[0].length,this.#v=i*this.tilesX,this.#C=i*this.tilesY,this.#eZ=[],r.forEach((t,i)=>{let r=[];this.#eG.push(r),t.forEach((t,o)=>{if(t){let n=new ed({renderer:new ew(e,ee.getSpriteBitmap(0,t.image))}),s=new m(o,i),a=this.gridPointToWorldPoint(s),h=new tS(n,{obstacle:t.role===tT.OBSTACLE,gridPoint:s,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#e0(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),n.position.x=o*this.#eH+this.#eH/2,n.position.y=i*this.#eH+this.#eH/2}else r.push(null)})}),this.#eX||(console.error("No entrance has been set. Setting to the first ground tile"),this.#eX=this.#eZ[0])}processTileRole(e){switch(e.role){case tT.ENTRANCE:if(this.#eX){let t=e.gridPoint;console.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#eX=e;break;case tT.EXIT:if(this.#eY){let t=e.gridPoint;console.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#eY=e;break;case tT.GROUND:e.gridPoint.coincident(this.#eK)||this.#eZ.push(e)}}update(e){this.#e4();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#ej?.isGridPointInRays(new m(r,i))){let t=this.#eG[i][r];t?.sprite.update(e)}this.#e1(e)}#e4(){let e=tx.getHeroActor();if(e){this.#ej||(this.#ej=new eV(this,e));let t=this.getTileAtWorldPoint(e.position);if(t){let e=t.role;e!=tT.ENTRANCE&&e!=tT.EXIT&&this.#ej.findReachedTiles()}else console.error(`Hero at ${e.position.toString()} but no tile found.`)}}getVisibleGridPointRect(){let e=U.geWorldInCanvasBounds(),t=this.worldPointToGrid(new m(e.x,e.y)),i=this.worldPointToGrid(new m(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),o=Math.min(this.#eF-1,i.x),n=Math.max(0,t.y);return new y(r,n,o-r,Math.min(this.#eW-1,i.y)-n)}getGridSize(){return this.#eH}getDimensions(){return{width:this.#v,height:this.#C}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#eF&&t<this.#eW?this.#eG[t][i]:null}worldPointToGrid(e){return new m(Math.floor(e.x/this.#eH),Math.floor(e.y/this.#eH))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#eH;return new m(e.x*this.#eH+t,e.y*this.#eH+t)}getWorldPositionOfTileByEntry(){return this.gridPointToWorldPoint(this.#eK)}getGridPositionOfEntrance(){return this.#eX.gridPoint}setMovementRoutes(e){this.#eU=e,e?(this.#e$=new Map,this.#eU.forEach(e=>e.forEach(e=>{this.#e$.set(e,e)}))):this.#e$=null}setCombatActors(e){this.#eJ=[],e?.forEach(e=>{this.#eJ.push(this.worldPointToGrid(e.position))})}#e1(e){this.#e8(e),this.#e2(e)}#e8(e){this.#e$?.forEach(t=>{this.#eV.position=this.gridPointToWorldPoint(t),this.#eV.update(e)})}#e2(e){this.#eJ?.forEach(t=>{this.#eQ.position=this.gridPointToWorldPoint(t),this.#eQ.update(e)})}#e0(e,t,i){if(this.#eU?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:ty.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#eJ?.forEach(o=>{if(o.isCoincident(r)){i(e,t,{filter:ty.COMBAT_TILE});return}}),console.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#eU?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(e_(this.#eZ),this.#eZ))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canHeroSeeGridPoint(e){return this.#ej?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return eL(this.#eG,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
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
 */function tv(e){return{role:tT.GROUND,onClick:(e,t,i)=>tx.triggerEvent(tx.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function tC(e){return{role:tT.ENTRANCE,onClick:(e,t,i)=>tx.triggerEvent(tx.EventId.CLICKED_ENTRANCE,t,i),image:e}}function tP(e){return{role:tT.EXIT,onClick:(e,t,i)=>tx.triggerEvent(tx.EventId.CLICKED_EXIT,t,i),image:e}}const tM=new Map([["x",{role:tT.OBSTACLE,image:"block.png"}],["#-TL",{role:tT.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:tT.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:tT.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:tT.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:tT.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:tT.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:tT.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:tT.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:tT.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:tT.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:tT.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:tT.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:tT.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:tT.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:tT.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:tT.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:tT.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:tT.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:tT.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:tT.OBSTACLE,image:"block.png"}],["=-T",tP("door-T.png")],["=-R",tP("door-R.png")],["=-B",tP("door-B.png")],["=-L",tP("door-L.png")],["--T",tC("door-T.png")],["--R",tC("door-R.png")],["--B",tC("door-B.png")],["--L",tC("door-L.png")],["=",{role:tT.OBSTACLE,image:"block.png"}],["-",{role:tT.OBSTACLE,image:"block.png"}],[".",tv("floor.png")],[".-SBW",tv("floor-SBW.png")],[".-SBE",tv("floor-SBE.png")],[",-SBE",tv("floor2-SBE.png")],[",-SBW",tv("floor2-SBW.png")],[",",tv("floor2.png")]]);/**
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
 */class tR{#e3;#e5;constructor(e){e?(this.#e3=e,this.#e5=!1):(this.#e3=new Map,this.#e5=!0)}set(e,t){if(this.#e5||this.#e3.has(e))this.#e3.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#e3.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#e6(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#e6(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#e3.set(e,i[1]),this.#e3.set(`${e}_MAX`,i[2])):this.#e3.set(e,t)}}class tI extends tR{constructor(){super(new Map([["NAME","mystery"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
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
 */class tB{#e9;#ep;#e7;#te;#tt;heroActor;constructor(e=2,t=2){e>0?(this.#e9=0,this.#ep=1/e):this.#ep=1,this.#e7=e,this.#te=t}getOpacity(){return this.#e9}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){this.doUpdate(e),0!==this.#ep&&(this.#e9+=e*this.#ep,this.#e9>1?(this.#ep=0,this.#e9=1):this.#e9<0&&(this.#ep=0,this.#e9=0)),this.#tt&&0===this.#e9&&(this.#tt(),this.#tt=null)}unload(){return this.#ti().then(()=>this.doUnload())}#ti(){return this.#te>0?(this.#ep=-1/this.#te,new Promise(e=>{this.#tt=e})):Promise.resolve()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}class tO{intro;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}/**
 * @file Random room generator
 *
 * @module utils/tileMaps/roomGenerator
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
 */class tb{#tr;#to;#tn;#ts;#ta;#th;#tl;#tc;#td;#tu;constructor(e){this.#tr=es(e.minCols,e.maxCols),this.#to=es(e.minRows,e.maxRows),this.#tn=e.maxRoomCols,this.#ts=e.maxRoomRows,this.#ta=ek.WALL[0],this.#th=ek.GROUND[0],this.#td=ek.VOID[0],this.#tl=ek.DOOR_IN[0],this.#tc=ek.DOOR_OUT[0]}generate(){this.#tu=[];let e=0,t=this.#tr;for(;this.#tu.length<this.#to-4;){let i=e+t-4-2,r=i>0?en(0,i):0,o=Math.max(e-r+4,4),n=Math.min(this.#tn,this.#tr-r),s=n>o?en(o,n):o,a=this.#tr-r-s,h=en(4,Math.min(this.#ts,this.#to-this.#tu.length));this.#tp(r,s,a,h),e=r,t=s}return this.#tg(),this.#tf(),this.getMatrixAsStrings()}getMatrixAsStrings(){return this.#tu.map(e=>e.join(""))}#tp(e,t,i,r){console.log(`Create room ${e} ${t} ${i} ${r}`);let o="";o+=this.#td.repeat(e)+this.#ta.repeat(t)+this.#td.repeat(i),this.#tu.push(o.split(""));for(let n=0;n<r-2;n++)o=""+this.#td.repeat(e)+this.#ta+this.#th.repeat(t-2)+this.#ta+this.#td.repeat(i),this.#tu.push(o.split(""));o=""+this.#td.repeat(e)+this.#ta.repeat(t)+this.#td.repeat(i),this.#tu.push(o.split(""))}#tg(){for(let e=1;e<this.#tu.length-1;e++)for(let t=1;t<this.#tu[0].length-2;t++)this.#tu[e][t]===this.#ta&&this.#tu[e+1][t]===this.#ta&&this.#tu[e-1][t]===this.#th&&this.#tu[e+2][t]===this.#th&&(this.#tu[e][t]=this.#th,this.#tu[e+1][t]=this.#th)}#tm(e){return e.above===this.#ta&&e.centre===this.#ta&&e.below===this.#ta}#tw(e){return e.left===this.#ta&&e.centre===this.#ta&&e.right===this.#ta}#tf(){let e=[];this.#tu.forEach((t,i)=>t.forEach((t,r)=>{let o=eL(this.#tu,i,r);(this.#tw(o)||this.#tm(o))&&e.push({row:i,col:r})}));let t=e_(e),i=t[0];this.#tu[i.row][i.col]=this.#tl,i=t[1],this.#tu[i.row][i.col]=this.#tc}}const tA={LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class tL{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=tL.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=tL.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){console.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class t_ extends tL{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class tk extends tL{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#tx(t):this.#ty(e)}#tx(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],o=e[4];for(let e=0;e<i;e++)if(eO.has(t))try{let e=new tI().setFromString(o);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#ty(e){this.fatalError("Long form actors not supported.")}}class tz extends tL{#tT;#tS;constructor(e,t,i){super(e,t,i),this.#tT=!1,this.#tS=/^\s*random\s*$/i}parseLine(e){if(!this.#tT&&""!==e){if(this.#tS.test(e)){let e=new tb({minCols:12,maxCols:40,maxRoomCols:10,minRows:12,maxRows:40,maxRoomRows:6});this.sceneDefn.mapDesign=e.generate(),this.#tT=!0,console.debug("Random map"),this.sceneDefn.mapDesign.forEach(e=>console.debug(e))}else this.sceneDefn.mapDesign.push(e)}}}function tN(e,t,i){switch(e){case tA.LEVEL:return new t_(h,t+1,i);case tA.CAST:return new tk(h,t+1,i);case tA.MAP:return new tz(h,t+1,i)}return null}/**
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
 */const tD="custom-pointer-down-event",tG="custom-pointer-up-event",tF="custom-pointer-cancel-event",tW="custom-click-event";function tH(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}function tU(e){if(ei.updateTimeNow(e),d){var t;let i=(e-d)/1e3;te.update(i),j.showFps&&(t=1/i,Z(U.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:U.getCanvasDimensions().height},{color:"green"}))}d=e,window.requestAnimationFrame(tU)}var t$={initialise:async function(e){U.setOptions(e),function(e){let t=0;for(let i in eP){let r=e.measureText(eP[i]),o=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,n=.5*o-r.fontBoundingBoxDescent;e.fillText(eP[i],-.5*r.width,n),e.getImageData(0,0,1,1).data[3]<=0&&(console.debug(`Emoji ${i} not supported.`),eP[i]=`[${t++}]`),e.clearRect(0,0,r.width,o)}}(U.getContext2D()),function(){let e=U.getCanvas();e.addEventListener("mousedown",t=>tH(e,tD,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("mouseup",t=>tH(e,tG,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("touchstart",t=>{if(1===t.changedTouches.length){let i=function(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}(t);c=new m(i.x,i.y),tH(e,tD,{x:i.x,y:i.y})}},{passive:!0}),e.addEventListener("touchend",t=>{1===t.changedTouches.length&&tH(e,tG,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("touchcancel",t=>{tH(e,tF,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("click",t=>{tH(e,tW,{x:t.offsetX,y:t.offsetY})}),e.addEventListener(tW,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);eC.resolveClick(r)||q.resolveClick(r)}),e.addEventListener(tD,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);eC.resolvePointerDown(r)}),e.addEventListener(tG,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);eC.resolvePointerUp(r)}),e.addEventListener(tF,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);eC.resolvePointerCancel(r)}),e.addEventListener("contextmenu",e=>{console.debug("Context menu");let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);eC.resolveContextMenu(r)||q.resolveContextMenu(r),e.preventDefault()})}(),e8.showOkDialog("Welcome to the Scripted Dungeon","Let's start").then(()=>{var e;return e=eR.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(console.error(`Error fetching ${e}: ${t}`),null))}).then(e=>te.setSceneDefinitions(function(e){h=e.split(/\r?\n/),l=[];let t=new tO,i=tL.findFirstSection(h);if(!i)throw Error("Invalid script. No section identifiers found.");let r=tN(i.nextSectionId,i.nextLineIndex,t);for(;r;){let e=r.parse();e?.nextSectionId&&e.nextSectionId!==tA.LEVEL||(l.push(t),t=new tO),r=e?tN(e.nextSectionId,e.nextLineIndex,t):null}return l}(e))).then(()=>tx.triggerEvent(tx.EventId.START_GAME)).then(()=>void window.requestAnimationFrame(tU)).catch(e=>{console.error(e),alert(`Fatal error in main game. ${e.message}`)})}};window.addEventListener("load",()=>{t$.initialise({width:800,height:600,maxScale:2.4,minScale:1,sizingMethod:"COVER",alpha:!1})});
//# sourceMappingURL=index.1080575c.js.map
