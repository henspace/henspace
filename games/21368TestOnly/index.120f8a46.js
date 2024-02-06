let e,t,i,r,n,s,o,a,h;function l(e){return e&&e.__esModule?e.default:e}const c="'Space Grotesk', sans-serif",d={normal:{size:15,fontName:"Arial, Helvetica, sans-serif"},h1:{size:30,fontName:c},h2:{size:22,fontName:c},h3:{size:18,fontName:c},emojiSprite:{size:18,fontName:"'Space Grotesk', sans-serif"}};function u(e){let t=d[e]??d.normal;return`${t.size}px ${t.fontName}`}/**
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
 */class p{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new p(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class g{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getDirection(){return Math.atan2(-this.y,this.x)}}class f extends p{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new f(e.x,e.y,0)}static copy(e){return new f(e.x,e.y,e.rotation)}getRelativeTo(e){return new f(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class m{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new p(this.x+this.width,this.y+this.height)}getTopLeft(){return new p(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new p(Number.MIN_VALUE,Number.MIN_VALUE),new p(Number.MAX_VALUE,Number.MAX_VALUE);let w=null,x=null,y=null,S=0,T=0,E=!0,v=null,P=null,C=null,M=new m(0,0,0,0),R=0,I=0,B=1,b=1,O=.1,L="COVER",A=new f(0,0,0);function _(){var e;let t=window.innerWidth,i=window.innerHeight,r=y.width/y.height,n=0,s=0;(e=t/i,"COVER"===L?r>e:r<e)?s=(n=i)*r:n=(s=t)/r,(B=s/y.width)>b?(s=(B=b)*y.width,n=B*y.height):B<O&&(s=(B=O)*y.width,n=B*y.height),R=(t-s)/2,I=(i-n)/2,x.style.left=`${R}px`,x.style.top=`${I}px`,x.style.width=`${s}px`,x.style.height=`${n}px`;let o=Math.min(t/B,s/B),a=Math.min(i/B,n/B);v=new m(.5*(y.width-o),.5*(y.height-a),o,a)}function k(){let e=window.innerWidth,t=window.innerHeight,i=Math.max(parseInt(x.style.left),0),r=Math.max(parseInt(x.style.top),0),n=Math.min(parseInt(x.style.width),e),s=Math.min(parseInt(x.style.height),t);P.style.left=`${i}px`,P.style.top=`${r}px`,P.style.width=`${n}px`,P.style.height=`${s}px`,function(){let e=d.normal.size*B;document.documentElement.style.fontSize=`${e}px`}(),M=new m(i,r,n,s)}function z(){return x.getContext("2d",{alpha:E})}function N(){let e=document.getElementById("glass-content");e.innerHTML="",P.style.display="none",C&&e.removeEventListener("click",C)}function G(e){return new f(e.x+A.x,e.y+A.y,e.rotation)}window.addEventListener("resize",()=>{null===w&&(w=window.setTimeout(()=>{w=null,_(),k()},200))});var D={canvasPositionToWorld:G,centreCanvasOn:function(e){A.x=e.x-S,A.y=e.y-T},clearCanvas:function(){z().clearRect(0,0,y.width,y.height)},displayOnGlass:function(e,t){N();let i=document.getElementById("glass-content");i.replaceChildren(e),P.style.display="block",t&&(i.addEventListener("click",t),C=t)},getCanvas:()=>x,getContext2D:z,getCanvasDimensions:function(){return{width:y.width,height:y.height}},getGlassRect:function(){return M},getVisibleCanvasBounds:function(){let e=(M.x-y.x)*B,t=(M.y-y.y)*B,i=e+M.width*B,r=t+M.height*B;return e=Math.max(e,y.x),new m(e,t=Math.max(t,y.y),(i=Math.min(i,y.x+y.width))-e,(r=Math.min(r,y.y+y.height))-t)},geWorldInCanvasBounds:function(){return new m(A.x,A.y,y.width,y.height)},glassPositionToWorld:function(e){let t=e.x<0?v.x+v.width:v.x,i=e.x<0?v.y+v.height:v.y;return G(new f(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(y)},isOnScreen:function(e){return e.overlaps(y)},panCamera:function(e,t){A.x+=e,A.y+=t},setOpacity:function(e){z().globalAlpha=e},setOptions:function(e){var t;if(x){console.error("Multiple calls to setScreen ignored.");return}t=e.width,d.normal.size=15+t/100*.390625,d.h1.size=2*d.normal.size,d.h2.size=1.5*d.normal.size,d.h3.size=1.2*d.normal.size,d.emojiSprite.size=t/10,(x=document.createElement("canvas")).setAttribute("width",e.width),x.setAttribute("height",e.height),x.innerText="Loading the app.",y=new m(0,0,e.width,e.height),S=e.width/2,T=e.height/2,document.body.appendChild(x),x.style.position="absolute",b=e.maxScale,O=e.minScale,L=e.sizingMethod,E=e.alpha,_(),function(){(P=document.createElement("div")).id="glass",document.body.appendChild(P),P.style.display="none",P.style.position="absolute";let e=document.createElement("div");e.id="glass-content",P.appendChild(e)}(),k()},wipeGlass:N,worldPositionToCanvas:function(e){return new f(e.x-A.x,e.y-A.y,e.rotation)},worldToUi:function(e){return e*B},uiCoordsToMappedPositions:function(e,t){return{canvas:new f(Math.round(e/=B),Math.round(t/=B)),world:new f(Math.round(e+A.x),Math.round(t+A.y),-A.rotation)}},uiToWorld:function(e){return e/B}};const W=new Map,F=new Map;var $={addActor:function(t){W.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){F.set(e,e)},getActors:function(){return W},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():D.getCanvasDimensions()},removeTileMap:function(){e=null},resolveClick:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},removeActor:function(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),W.delete(t)},removePassiveSprite:function(e){console.debug("Remove passive sprite."),F.delete(e)},setTileMap:function(t){e=t},update:function(t){e?.update(t),W.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let n=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,n)}),F.forEach(e=>e.update(t))}};/**
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
 */let H=[];function U(e){return new Promise(t=>{let i=new Image;i.addEventListener("load",()=>{console.debug("Image loaded."),t(i)}),i.src=e})}var V={getSpriteBitmap:function(e,t){let i=H[e].get(t);return i||console.debug(`Failed to find image ${t} at index ${e}`),i},loadImage:U,loadImages:function(e){let t=[];return e.forEach(e=>t.push(U(e))),Promise.all(t)},loadSpriteMap:function(e,t){return U(t).then(t=>(function(e,t){let i=[],r=new Map;return H.push(r),e.frames.forEach(e=>{i.push(createImageBitmap(t,e.frame.x,e.frame.y,e.frame.w,e.frame.h).then(t=>{let i={image:t,width:e.frame.w,height:e.frame.h,centreX:e.sourceSize.w/2-e.spriteSourceSize.x,centreY:e.sourceSize.h/2-e.spriteSourceSize.y};return r.set(e.filename,i),e.filename}))}),Promise.all(i)})(e,t))}};/**
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
 */let X=0;var Y={updateTimeNow:function(e){X=e},getFrameCount:function(e){return Math.floor(X/e)}};/**
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
 */const K={DEG_22_5:1/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_157_7:7/8*Math.PI},Z={N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7},q={WRAP:0,REVERSE:1,STOP:2};class j{#e;#t;#i;#r;#n;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#n=0}get index(){return this.#n}set index(e){var t;this.#n=(t=this.#e-1,e<0?0:e>t?t:e)}advanceBy(e){if(this.#e<1)return this.#n;switch(this.#i){case q.WRAP:return this.#s(e);case q.REVERSE:return this.#o(e);case q.NONE:default:return this.#a(e)}}#s(e){return e%=this.#e,this.#n+=e%this.#e,this.#n>=this.#e&&(this.#n=this.#n-this.#e),this.#n}#o(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#n+=e;let t=this.#n-this.#t;t>0&&(this.#n=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#n-=e,this.#n<0&&(this.#n=-this.#n,this.#r=1));return this.#n}#a(e){return this.#r>0?this.#n=Math.min(this.#t,this.#n+e):this.#r<0&&(this.#n=Math.max(0,this.#n-e)),this.#n}}class J{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,this.#d=Math.max(1,i.framePeriodMs),"string"==typeof t){this.#h.push(V.getFrame(e,t));return}let n=t.startIndex??0,s=t.padding??0;do{let i=`${t.prefix}${n.toString().padStart(s,"0")}${t.suffix}`;(r=V.getSpriteBitmap(e,i))&&this.#h.push(r),n++}while(r)this.#l=new j(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(this.playing){let e=Y.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.playing=!1,this.#l.index=e}getCurrentIndex(){return this.#l.index}}class Q{#u;#p;constructor(e,t){this.#u={},this.#u[e]=t,this.#p=t}get image(){return this.#p}addAnimatedImage(e,t){this.#u[e]=t}setCurrentImage(e){this.#u.hasOwnProperty(e)?this.#p=this.#u[e]:console.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#p.getCurrentFrame()}}function ee(e,t,i,r){if(e.font=u(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var n=t.split("\n");for(let t=0;t<n.length;t++)r.y=function(e,t,i,r){let n;let s=t.split(" "),o=i.x??0,a=i.y??0,h=r.xWrapPosition-o,l=r.lineSpacing??1,c="";for(let t=0;t<s.length;t++){let i=c+s[t]+" ",r=/**
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
 */function(e,t){let i=e.measureText(void 0);return{width:i.width,height:i.fontBoundingBoxAscent+i.fontBoundingBoxDescent,offsetTop:-i.fontBoundingBoxAscent,offsetCentreY:.5*(i.fontBoundingBoxDescent-i.fontBoundingBoxAscent)}}(e);n||(n=l*r.height),r.width>h&&t>0?(e.fillText(c,o,a),c=s[t]+" ",a+=n):c=i}return e.fillText(c,o,a),a+n}(e,n[t],i,r)}else e.fillText(t,i.x??0,i.y??0)}/**
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
 */const et={spriteBoxes:!1,showFps:!0};/**
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
 */class ei{#g=new f(0,0,0);#f=new g(0,0,0);#m;#w;modifier;visible;opacity;constructor(e){this.#m=e?.renderer,this.#w=Array.isArray(this.#m),this.visible=!0,this.opacity=1}get position(){return this.#g}set position(e){this.#g.x=this.valueOrZero(e.x),this.#g.y=this.valueOrZero(e.y),this.#g.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#f}set velocity(e){this.#f.x=this.valueOrZero(e.x),this.#f.y=this.valueOrZero(e.y),this.#f.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#x()}#x(){this.#m&&(this.#m.forEach?this.#m.forEach(e=>e.render(this.#g,this.opacity)):this.#m.render(this.#g,this.opacity))}getBoundingBox(){let e=this.#m.getBoundingBoxCanvas();return new m(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class er{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new m(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=D.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),et.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){console.error("_doRender method should be overridden.")}isOnScreen(e){let t=new m(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return D.isOnScreen(t)}isOnCanvas(e){let t=new m(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return D.isOnCanvas(t)}}class en extends er{#y;#S;#T;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#y=i}#E(e){this._context.font=u(this.#y);let t=this._context.measureText(e);this.#T={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#S=e}_doRender(e){var t;this.text!==this.#S&&this.#E(this.text);let i={x:e.x+this.#T.origin.x,y:e.y+this.#T.origin.y,rotation:e.rotation};ee(this._context,this.#S,i,{styleName:this.#y}),this._boundingBoxCanvas=(t=this.#T,new m(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class es extends er{#v;#P;#C;#M;#R;#I;constructor(e,t){super(e),this.#v=t.width??10,this.#P=t.height??10,this.#C=this.#v/2,this.#M=this.#P/2,this.#R=t.fillStyle,this.#I=t.strokeStyle}_doRender(e){let t=e.x-this.#C,i=e.y-this.#M;this.#R&&(this._context.fillStyle=this.#R,this._context.fillRect(t,i,this.#v,this.#P)),this.#I&&(this._context.strokeStyle=this.#I,this._context.strokeRect(t,i,this.#v,this.#P)),this._boundingBoxCanvas=new m(t,i,this.#v,this.#P)}}class eo extends er{#P;#M;#v;#C;#R;#I;#B;#b;#O;#L;constructor(e,t){super(e),this.#P=t.height,this.#M=this.#P/2,this.#v=t.width,this.#C=this.#v/2,this.#R=t.fillStyle,this.#I=t.strokeStyle,this.#B=t.offsetX??0,this.#b=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#O=Math.min(e,1)*this.#P,this.#L=.5*this.#O}_doRender(e){let t=e.y-this.#M+this.#b,i=e.y+this.#M-this.#O+this.#b,r=e.x-this.#C+this.#B;this.#R&&(this._context.fillStyle=this.#R,this._context.fillRect(r,i,this.#v,this.#O)),this.#I&&(this._context.strokeStyle=this.#I,this._context.strokeRect(r,t,this.#v,this.#P)),this._boundingBoxCanvas=new m(r,t,this.#v,this.#P)}}class ea extends er{#A;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){console.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#A=[];let r=t.tileSize/i,n=-t.tileSize/2+r/2;for(let s=0;s<i;s++)this.#A.push(new eo(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[s],strokeStyle:t.strokeStyles?.[s],offsetX:n+r*s,offsetY:0}))}setLevel(e,t){this.#A[e]?.setLevel(t)}render(e){this.#A?.forEach(t=>t.render(e))}}class eh extends er{#_;#k;constructor(e,t){super(e),t?.getCurrentFrame?(this.#k=t,this.#_=this.#k.getCurrentFrame()):this.#_=t,this.#_?(this._boundingBoxCanvas.width=this.#_?.width??0,this._boundingBoxCanvas.height=this.#_?.height??0):console.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#_)return;let t=this.#k?this.#k.getCurrentFrame():this.#_;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}/**
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
 */class el{#z;#N;#G;#D;setOnClick(e){this.#z=e}setOnContextClick(e){this.#N=e}setOnPointerDown(e){this.#G=e}setOnPointerUp(e){this.#D=e}actionClick(e){this.#z?.(this,e)}actionContextClick(e){this.#N?.(this,e)}actionPointerDown(e){this.#G?.(this,e)}actionPointerUp(e){this.#D?.(this,e)}}class ec extends el{maxTilesPerMove;sprite;traits;constructor(e){super(),this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}const ed=new Map;let eu=!1;function ep(e,t){let i=D.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new m(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}var eg={addButton:function(e,t,i){let r=new ec(new ei({renderer:new eh(D.getContext2D(),e)}));return ed.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),r},addMomentaryButton:function(e,t,i){let r=new ec(new ei({renderer:new eh(D.getContext2D(),e)}));return ed.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){ed.clear()},removeButton:function(e){ed.delete(e)},update:function(e){eu&&ed.forEach(t=>{let i=f.copy(t.position);t.position=D.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolveClick:function(e){if(!eu)return!1;for(let[t,i]of ed)if(ep(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolvePointerDown:function(e){if(!eu||!eu)return!1;for(let[t,i]of ed)if(ep(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:function(e){if(!eu||!eu)return!1;for(let[t,i]of ed)if(ep(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1},setVisible:function(e){eu=e}};/**
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
 */const ef={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
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
 */var em={};em=new URL("dungeon_script.38627fc8.txt",import.meta.url).toString();const ew={DUNGEON_SCRIPT:new URL(em)};/**
 * @file File that actually processes the script.
 * The script parser acts as a state machine as it parses the script.
 * Dungeons work as levels.
 *
 * @module scriptReaders/scriptParser
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
 * @file Map of names to actor factories in the dungeon.
 *
 * @module scriptReaders/actorMap
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
 */class ex extends ea{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}function ey(e){let t=new eh(D.getContext2D(),new Q("idle",new J(0,{prefix:e,suffix:".png",startIndex:1,padding:3},{framePeriodMs:100,loopMethod:q.REVERSE}))),i=new ex(D.getContext2D(),{tileSize:$.getTileMap().getGridSize()-2,fillStyles:["red","blue"],strokeStyles:[]}),r=new ec(new ei({renderer:[i,t]}));return i.actor=r,r.position=new f(48,48,0),r.velocity={x:-500,y:-70,rotation:.1},r}const eS=new Map([["HERO",{create:()=>ey("hero")}],["MONSTER",{create:()=>ey("orc")}]]);/**
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
 */var eT={};eT=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":1,"y":95,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":435,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":435,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":1071,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":1080,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":485,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":485,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":535,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":535,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":585,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":585,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":635,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero001.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero002.png","frame":{"x":985,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":48},"sourceSize":{"w":48,"h":49}},{"filename":"hero003.png","frame":{"x":1033,"y":51,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":45,"h":48},"sourceSize":{"w":49,"h":49}},{"filename":"hero004.png","frame":{"x":389,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":44,"h":49},"sourceSize":{"w":49,"h":49}},{"filename":"hud-arrow-down-000.png","frame":{"x":147,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":195,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":243,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":291,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":339,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":387,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":1220,"y":51,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":1246,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":1268,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":1294,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":97,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc001.png","frame":{"x":295,"y":1,"w":46,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc002.png","frame":{"x":147,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc003.png","frame":{"x":197,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc004.png","frame":{"x":246,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"RIP.png","frame":{"x":97,"y":52,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":635,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":1106,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":685,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":1035,"y":1,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":685,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":735,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":735,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":1115,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":1141,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":1150,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":1176,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":785,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":1185,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":785,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":1211,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":835,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":835,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":885,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":885,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":935,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":935,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":985,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1341,"h":100},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:5b9f108ea06ab16fd677f7a7c0110162:1578bcb2c28a1c67406749ce63fc8b19:9c0fba27a8a0c106083a8713f6c67b32$"}}');var eE={};/**
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
 */function ev(e,t,i){return{tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}eE=new URL("dungeon.ec2251a7.png",import.meta.url).toString();const eP={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},eC={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},eM={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};function eR(e){return eP.GROUND.includes(e)}function eI(e){return eP.WALL.includes(e)||eP.DOOR_IN.includes(e)||eP.DOOR_OUT.includes(e)}/**
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
 */class eB{#W;#F;constructor(e){this.#F=e,this.#W=new Map}setRouteToCoords(e,t,i){this.#W.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#W.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#W.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new p(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#W.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#W.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#F.gridPointToWorldPoint(e)):t}}class eb{actor;#W;#F;#$;constructor(e,t){this.#F=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#H(e,t);if(r.coincident(e))return[];this.#F.isGridPointPassableByActor(r,this.actor)||(r=this.#U(r,t));let n=[],s=Math.sign(r.x-e.x),o=Math.sign(r.y-e.y),a=p.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=p.copy(a),c=!1;if(h&&0!==s&&a.x!=r.x?(t.x+=s,c=!0):h||0===o||a.y==r.y||(t.y+=o,c=!0),c=c&&this.#F.isGridPointPassableByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||n.push(this.#F.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||n.push(this.#F.gridPointToWorldPoint(a)),n}getAllRoutesFrom(e,t){return this.#W=new eB(this.#F),this.#$=e,this.#V(e.x,e.y,t,null),this.#W}#V(e,t,i,r){if(r){if(e===this.#$.x&&t===this.#$.y||!this.#X(e,t))return;let n=this.#W.getRouteToCoords(e,t);if(n&&!(r.length<n.length-1))return;r.push(new p(e,t)),this.#W.setRouteToCoords(r,e,t),i--}else r=[new p(e,t)];i>0&&(this.#V(e,t-1,i,[...r]),this.#V(e+1,t,i,[...r]),this.#V(e,t+1,i,[...r]),this.#V(e-1,t,i,[...r]))}#X(e,t){return this.#F.isGridPointPassableByActor(new p(e,t),this.actor)}#H(e,t){let i=t.x-e.x,r=t.y-e.y,n=t.x,s=t.y;return Math.abs(i)>Math.abs(r)?n-=Math.sign(i):s-=Math.sign(r),new p(n,s)}#U(e,t){return e.x===t.x&&e.y<t.y?new p(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new p(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new p(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new p(e.x+1,e.y-1):e}}class eO{#Y;#K;#F;#Z;#q;#j;#J;constructor(e,t){this.#F=e,this.#Y=t}findReachedTiles(){return this.#K=this.#F.worldPointToGrid(this.#Y.position),this.#j=this.#F.getVisibleGridPointRect(),this.#q&&this.#q.coincident(this.#K)&&this.#j&&this.#j.equals(this.#J)||(this.#Z=new Map,this.#Z.set(this.#K.toString(),this.#K),this.#Q().forEach(e=>{this.#ee(e)}),this.#q=this.#K,this.#J=this.#j),this.#Z}isGridPointInRays(e){return!!this.#Z&&this.#Z.has(e.toString())}#Q(){let e=[];for(let t=this.#j.x;t<=this.#j.x+this.#j.width;t++)e.push(new p(t,this.#j.y)),e.push(new p(t,this.#j.y+this.#j.height));for(let t=this.#j.y+1;t<=this.#j.y+this.#j.height-1;t++)e.push(new p(this.#j.x,t)),e.push(new p(this.#j.x+this.#j.width,t));return e}#ee(e){let t,i,r;let n=function(e){let t=Math.abs(e);return t<=K.DEG_22_5?Z.E:t<=K.DEG_67_5?Math.sign(e)>0?Z.NE:Z.SE:t<=K.DEG_112_5?Math.sign(e)>0?Z.N:Z.S:t<=K.DEG_157_7?Math.sign(e)>0?Z.NW:Z.SW:Z.W}(this.#K.getScreenAngleTo(e));Math.abs(e.x-this.#K.x)>=Math.abs(e.y-this.#K.y)?(t=Math.sign(e.x-this.#K.x),i=(r=Math.abs(e.x-this.#K.x))<1?0:(e.y-this.#K.y)/r):(i=Math.sign(e.y-this.#K.y),t=(r=Math.abs(e.y-this.#K.y))<1?0:(e.x-this.#K.x)/r);let s=this.#K.x,o=this.#K.y,a=!0;for(;r>=0;){let e=new p(Math.round(s),Math.round(o));if(a||this.#F.isSeeThrough(e,this.#Y))this.#et(e,n);else break;a=!1,s+=t,o+=i,r--}}#et(e,t){switch(this.#Z.set(e.toString(),e),t){case Z.N:this.#ei(new p(e.x-1,e.y-1)),this.#ei(new p(e.x,e.y-1)),this.#ei(new p(e.x+1,e.y-1));break;case Z.NE:this.#ei(new p(e.x,e.y-1)),this.#ei(new p(e.x+1,e.y-1)),this.#ei(new p(e.x+1,e.y));break;case Z.E:this.#ei(new p(e.x+1,e.y-1)),this.#ei(new p(e.x+1,e.y)),this.#ei(new p(e.x+1,e.y+1));break;case Z.SE:this.#ei(new p(e.x+1,e.y)),this.#ei(new p(e.x+1,e.y+1)),this.#ei(new p(e.x,e.y+1));break;case Z.S:this.#ei(new p(e.x-1,e.y+1)),this.#ei(new p(e.x,e.y+1)),this.#ei(new p(e.x+1,e.y+1));break;case Z.SW:this.#ei(new p(e.x-1,e.y)),this.#ei(new p(e.x-1,e.y+1)),this.#ei(new p(e.x,e.y+1));break;case Z.W:this.#ei(new p(e.x-1,e.y-1)),this.#ei(new p(e.x-1,e.y)),this.#ei(new p(e.x-1,e.y+1));break;case Z.NW:this.#ei(new p(e.x-1,e.y)),this.#ei(new p(e.x-1,e.y-1)),this.#ei(new p(e.x,e.y-1))}}#ei(e){this.#F.isSeeThrough(e)||this.#Z.set(e.toString(),e)}}class eL{decoratedModifier;#er;#en;#es;constructor(e){this.#en=0,this.#es=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#es=t,new Promise(t=>{this.#er=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#er&&(this.#en+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#en>this.#es?(this.#er?.(null),null):i}doUpdate(e,t){return console.error("doUpdate should be overridden."),this}}class eA extends eL{#eo;#ea;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class e_ extends eL{#eh;#el;#ec;constructor(e,t){super(t),this.#eh=e.prey,this.#el=e.maxSeparation,this.#ec=e.speed}doUpdate(e,t){let i=this.#eh.position,r=e.position;if(!r.withinSquare(i,this.#el)){let n=r.getCartesianAngleTo(i);e.velocity.x=this.#ec*Math.cos(n),e.velocity.y=this.#ec*Math.sin(n);let s=e.velocity.x*t,o=e.velocity.y*t;e.position.x+=this.getMinMove(s,i.x,r.x),e.position.y+=this.getMinMove(o,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class ek extends eL{#ed;#n;#eu;#ec;constructor(e,t){super(t),this.#ed=e.path,this.#n=0,this.#eu=e.path[0],this.#ec=e.speed}doUpdate(e,t){let i=e.position,r=i.getCartesianAngleTo(this.#eu);e.velocity.x=this.#ec*Math.cos(r),e.velocity.y=this.#ec*Math.sin(r);let n=e.velocity.x*t,s=e.velocity.y*t;if(i.x+=this.getMinMove(n,this.#eu.x,i.x),i.y+=this.getMinMove(s,this.#eu.y,i.y),i.isCoincident(this.#eu)){if(++this.#n>=this.#ed.length)return this.decoratedModifier;this.#eu=this.#ed[this.#n]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}function ez(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var eN={showMessage:function(e){return new Promise(t=>{let i=ez(e);D.displayOnGlass(i,()=>{D.wipeGlass(),t(null)})})},showOkDialog:function(e,t="OK"){return new Promise(i=>{let r=document.createElement("div");r.appendChild(ez(e)),D.displayOnGlass(ez(e));let n=document.createElement("button");n.appendChild(document.createTextNode(t)),n.onclick=()=>{D.wipeGlass(),i(0)},r.appendChild(n),D.displayOnGlass(r)})}};/**
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
 */class eG extends eL{#ep;constructor(e,t){super(t),this.#ep=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#ep),e.opacity>0?this:null}}function eD(e,t){let i=new ei({renderer:e});i.position=t.position,i.velocity=t.velocity,$.addPassiveSprite(i),new eG(t.lifetimeSecs,new eA).applyAsTransientToSprite(i,20).then(()=>$.removePassiveSprite(i))}function eW(e,t){eD(new eh(D.getContext2D(),e),t)}function eF(e,t){if(10>/**
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
 */function(e=6){return function(e,t){let i=Math.ceil(1);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}(0,e)}(20)){var i;i={lifetimeSecs:2,position:t.position,velocity:new g(0,-100,0)},eD(new en(D.getContext2D(),"Missed"),i);return}eW(V.getSpriteBitmap(0,"blood-splat.png"),{lifetimeSecs:1,position:t.position,velocity:new g(0,0,0)});let r=t.traits.get("HP");0==(r=r>1?r-1:0)&&($.removeActor(t),eW(V.getSpriteBitmap(0,"RIP.png"),{lifetimeSecs:2,position:t.position,velocity:new g(0,0,0)})),t.traits.set("HP",r)}const e$={CLICKED_FREE_GROUND:0,CLICKED_ENTRANCE:1,CLICKED_EXIT:2};class eH{constructor(){}transitionTo(e){this._onExit().then(()=>(eX=e,e._onEntry()))}_onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}_onExit(){return Promise.resolve(null)}}class eU extends eH{constructor(){super()}async _onEntry(){let e=$.getTileMap(),i=new eb(e,t).getAllRoutesFrom(e.worldPointToGrid(t.sprite.position),t.maxTilesPerMove);return e.setMovementRoutes(i),e.setCombatActors(e.getParticipants(t)),Promise.resolve(null)}onEvent(e,t,i){switch(e){case e$.CLICKED_FREE_GROUND:console.log(`DETAIL ${i}`),(i?.filter===eK.COMBAT_TILE?this.#eg(t):this.#ef(t)).then(()=>this.transitionTo(new eV));break;case e$.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case e$.CLICKED_EXIT:alert("Trying to escape. That bit of code is not ready yet.")}return Promise.resolve(null)}#ef(e){let i=$.getTileMap(),r=i.getWaypointsToWorldPoint(e);return(i.setMovementRoutes(null),i.setCombatActors(null),r)?new ek({path:r,speed:100},t.sprite.modifier).applyAsTransientToSprite(t.sprite):Promise.resolve()}#eg(e){for(let i of $.getTileMap().getTileAtWorldPoint(e).getOccupants().values())eF(t,i);return Promise.resolve()}}class eV extends eH{constructor(){super()}async _onEntry(){await super._onEntry();let e=$.getTileMap(),i=new eb(e),r=e.getParticipants(t);for(let n of $.getActors().values())n!==t&&(r.includes(n)?eF(n,t):await this.moveActorUsingRouteFinder(n,e,i));return this.transitionTo(new eU),Promise.resolve(null)}async moveActorUsingRouteFinder(e,i,r){let n=i.worldPointToGrid(t.position),s=i.worldPointToGrid(e.position);if(Math.abs(n.x-s.x)+Math.abs(n.y-s.y)<=2*e.maxTilesPerMove&&i.canHeroSeeGridPoint(s)){r.actor=e;let t=r.getDumbRouteNextTo(s,n,e.maxTilesPerMove);if(t.length>0){let i=new ek({path:t,speed:200},e.sprite.modifier);await i.applyAsTransientToSprite(e.sprite)}}}}let eX=new class extends eH{_onExit(){return t.sprite.position=$.getTileMap().getWorldPositionOfEntrance(),Promise.resolve(null)}};var eY={EventId:e$,getHeroActor:function(){return t},startWithHero:function(e){t=e,eX.transitionTo(new eU)},triggerEvent:function(e,t,i){eX.onEvent(e,t,i)}};const eK={MOVEMENT_TILE:0,COMBAT_TILE:1},eZ={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class eq extends el{sprite;obstacle;#em;#ew;#ex;#ey;constructor(e,t){super(),this.sprite=e,this.#em=new Map,this.obstacle=t.obstacle,this.#ew=t.gridPoint,this.#ex=t.worldPoint,this.#ey=t.role}get role(){return this.#ey}get gridPoint(){return this.#ew}get worldPoint(){return this.#ex}addOccupant(e){this.#em.set(e,e)}deleteOccupant(e){this.#em.delete(e)}getOccupants(){return this.#em}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#em.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#em.values())if(t!==e&&t.obstacle)return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#ey!==eZ.ENTRANCE&&this.#ey!==eZ.EXIT}}class ej{#eS;#eT;#eE;#ev;#eP;#v;#P;#eC;#eM;#eR;#eI;#eB;#eb;#eO;#eL;#eA;constructor(e,t,i){this.#eS=e,this.#eR=new ei({renderer:new es(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#eA=new ei({renderer:new es(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#eP=i,this.#eT=[],this.#ev=t.length,this.#eE=t[0].length,this.#v=i*this.tilesX,this.#P=i*this.tilesY,this.#eb=[],t.forEach((t,i)=>{let r=[];this.#eT.push(r),t.forEach((t,n)=>{if(t){let s=new ei({renderer:new eh(e,V.getSpriteBitmap(0,t.image))}),o=new p(n,i),a=this.gridPointToWorldPoint(o),h=new eq(s,{obstacle:t.role===eZ.OBSTACLE,gridPoint:o,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#e_(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),s.position.x=n*this.#eP+this.#eP/2,s.position.y=i*this.#eP+this.#eP/2}else r.push(null)})}),this.#eI||(console.error("No entrance has been set. Setting to the first ground tile"),this.#eI=this.#eb[0])}processTileRole(e){switch(e.role){case eZ.ENTRANCE:if(this.#eI){let t=e.gridPoint;console.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#eI=e;break;case eZ.EXIT:if(this.#eB){let t=e.gridPoint;console.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#eB=e;break;case eZ.GROUND:this.#eb.push(e)}}update(e){this.#ek();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#eO?.isGridPointInRays(new p(r,i))){let t=this.#eT[i][r];t?.sprite.update(e)}this.#ez(e)}#ek(){if(!this.#eO){let e=eY.getHeroActor();e&&(this.#eO=new eO(this,e))}this.#eO.findReachedTiles()}getVisibleGridPointRect(){let e=D.geWorldInCanvasBounds(),t=this.worldPointToGrid(new p(e.x,e.y)),i=this.worldPointToGrid(new p(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),n=Math.min(this.#eE-1,i.x),s=Math.max(0,t.y);return new m(r,s,n-r,Math.min(this.#ev-1,i.y)-s)}getGridSize(){return this.#eP}getDimensions(){return{width:this.#v,height:this.#P}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#eE&&t<this.#ev?this.#eT[t][i]:null}worldPointToGrid(e){return new p(Math.floor(e.x/this.#eP),Math.floor(e.y/this.#eP))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#eP;return new p(e.x*this.#eP+t,e.y*this.#eP+t)}getWorldPositionOfEntrance(){return this.gridPointToWorldPoint(this.getGridPositionOfEntrance())}getGridPositionOfEntrance(){return this.#eI.gridPoint}setMovementRoutes(e){this.#eC=e,e?(this.#eM=new Map,this.#eC.forEach(e=>e.forEach(e=>{this.#eM.set(e,e)}))):this.#eM=null}setCombatActors(e){this.#eL=[],e?.forEach(e=>{this.#eL.push(this.worldPointToGrid(e.position))})}#ez(e){this.#eN(e),this.#eG(e)}#eN(e){this.#eM?.forEach(t=>{this.#eR.position=this.gridPointToWorldPoint(t),this.#eR.update(e)})}#eG(e){this.#eL?.forEach(t=>{this.#eA.position=this.gridPointToWorldPoint(t),this.#eA.update(e)})}#e_(e,t,i){if(this.#eC?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:eK.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#eL?.forEach(n=>{if(n.isCoincident(r)){i(e,t,{filter:eK.COMBAT_TILE});return}}),console.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#eC?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(!function(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]]}(this.#eb),this.#eb))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canHeroSeeGridPoint(e){return this.#eO?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return ev(this.#eT,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
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
 */function eJ(e){return{role:eZ.GROUND,onClick:(e,t,i)=>eY.triggerEvent(eY.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function eQ(e){return{role:eZ.ENTRANCE,onClick:(e,t,i)=>eY.triggerEvent(eY.EventId.CLICKED_ENTRANCE,t,i),image:e}}function e0(e){return{role:eZ.EXIT,onClick:(e,t,i)=>eY.triggerEvent(eY.EventId.CLICKED_EXIT,t,i),image:e}}const e4=new Map([["x",{role:eZ.OBSTACLE,image:"block.png"}],["#-TL",{role:eZ.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:eZ.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:eZ.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:eZ.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:eZ.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:eZ.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:eZ.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:eZ.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:eZ.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:eZ.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:eZ.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:eZ.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:eZ.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:eZ.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:eZ.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:eZ.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:eZ.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:eZ.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:eZ.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:eZ.OBSTACLE,image:"block.png"}],["=-T",e0("door-T.png")],["=-R",e0("door-R.png")],["=-B",e0("door-B.png")],["=-L",e0("door-L")],["--T",eQ("door-T.png")],["--R",eQ("door-R.png")],["--B",eQ("door-B.png")],["--L",eQ("door-L.png")],["=",{role:eZ.OBSTACLE,image:"block.png"}],["-",{role:eZ.OBSTACLE,image:"block.png"}],[".",eJ("floor.png")],[".-SBW",eJ("floor-SBW.png")],[".-SBE",eJ("floor-SBE.png")],[",-SBE",eJ("floor2-SBE.png")],[",-SBW",eJ("floor2-SBW.png")],[",",eJ("floor2.png")]]);/**
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
 */class e1{#eD;#eW;constructor(e){e?(this.#eD=e,this.#eW=!1):(this.#eD=new Map,this.#eW=!0)}set(e,t){if(this.#eW||this.#eD.has(e))this.#eD.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#eD.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#eF(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#eF(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#eD.set(e,i[1]),this.#eD.set(`${e}_MAX`,i[2])):this.#eD.set(e,t)}}class e8 extends e1{constructor(){super(new Map([["NAME","mystery"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
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
 */class e2{#e$;#ep;#eH;#eU;constructor(e=2,t=2){e>0?(this.#e$=0,this.#ep=1/e):this.#ep=1,this.#eH=e,this.#eU=t}getOpacity(){return this.#e$}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){var t;this.doUpdate(e),0!==this.#ep&&(this.#e$=(t=this.#e$+e*this.#ep)<0?0:t>1?1:t)}unload(){return this.doUnload()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}class e5{intro;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}const e3={LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class e6{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=e6.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=e6.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){console.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class e9 extends e6{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class e7 extends e6{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#eV(t):this.#eX(e)}#eV(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],n=e[4];for(let e=0;e<i;e++)if(eS.has(t))try{let e=new e8().setFromString(n);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#eX(e){this.fatalError("Long form actors not supported.")}}class te extends e6{constructor(e,t,i){super(e,t,i)}parseLine(e){""!==e&&this.sceneDefn.mapDesign.push(e)}}function tt(e,t,r){switch(e){case e3.LEVEL:return new e9(i,t+1,r);case e3.CAST:return new e7(i,t+1,r);case e3.MAP:return new te(i,t+1,r)}return null}var ti={setSceneDefinitions:function(e){n=e},getScene:function(e){return function(e){let t=new e2;return t.doLoad=()=>V.loadSpriteMap(l(eT),l(eE)),t.doInitialise=()=>{let t=new ej(D.getContext2D(),function(e,t){let i=[];return e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),n=i.get(t);if(!n&&r[2]&&r[3]&&(n=i.get(`${r[1]}${r[2]}`)),!n&&r[2]&&(n=i.get(r[1])),!n){let n=function(e){for(let t in eP)if(eP[t].includes(e))return eP[t][0];return null}(r[1]);if(n&&n!==r[1]){var s,o;let t;return e((s=r[2],o=r[3],t=n,s&&(t+=s),o&&(t+=o),t),i)}console.error(`Failed to find symbol for ${t}`)}return n}(e,t))})}),i}(function(e){let t=[];return e.forEach((i,r)=>{let n=[];t.push(n),i.forEach((t,i)=>{var s,o,a;let h;let l=ev(e,r,i);(s=t,eP.VOID.includes(s))?t=" ":eR(t)?(o=t,t=eI(l.above)?eI(l.tl)?o+=eM.BELOW_WALL:o+=eM.BELOW_END_WALL:o):eI(t)&&(h=a=t,eI(l.above)&&eI(l.right)&&eI(l.below)&&eI(l.left)?h+=eC.INTERNAL_CROSS:eR(l.left)&&eR(l.right)?h+=eC.INTERNAL_VERTICAL:eR(l.above)&&eR(l.below)?h+=eC.INTERNAL_HORIZONTAL:eI(l.left)&&eI(l.right)&&eI(l.below)?h+=eC.TOP_TEE:eI(l.above)&&eI(l.below)&&eI(l.left)?h+=eC.RIGHT_TEE:eI(l.left)&&eI(l.right)&&eI(l.above)?h+=eC.BOTTOM_TEE:eI(l.above)&&eI(l.below)&&eI(l.right)?h+=eC.LEFT_TEE:eI(l.right)&&eI(l.below)?h+=eR(l.br)?eC.TOP_LEFT:eC.TOP_LEFT_INTERNAL:eI(l.left)&&eI(l.below)?h+=eR(l.bl)?eC.TOP_RIGHT:eC.TOP_RIGHT_INTERNAL:eI(l.left)&&eI(l.above)?h+=eR(l.tl)?eC.BOTTOM_RIGHT:eC.BOTTOM_RIGHT_INTERNAL:eI(l.right)&&eI(l.above)?h+=eR(l.tr)?eC.BOTTOM_LEFT:eC.BOTTOM_LEFT_INTERNAL:eI(l.above)&&eI(l.below)?h+=eR(l.right)?eC.LEFT:eC.RIGHT:eI(l.right)&&eI(l.left)&&(h+=eR(l.below)?eC.TOP:eC.BOTTOM),t=eI(l.above)?h+eM.BELOW_WALL:h),n.push(t)})}),t}(function(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}(e.mapDesign)),e4),48);$.setTileMap(t);let i=eS.get("HERO").create();return i.traits=new e8,(function(e){let t=[];return e.enemies.forEach(e=>{let i=eS.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(e).forEach(e=>{e.position=t.getRandomFreeGroundTile().worldPoint,$.addActor(e)}),tg.setCameraToTrack(i.sprite,200,0),$.addActor(i),eY.startWithHero(i),eN.showMessage(e.intro),Promise.resolve(null)},t.doUpdate=()=>{},t.doUnload=()=>Promise.resolve(null),t}(n[e])}};/**
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
 */const tr={OFF:0,HERO:1,VELOCITY:2};class tn{#eY;#eK;#eZ;#eq;constructor(e,t,i=0){let r=D.getCanvasDimensions(),n=i*Math.min(r.width,r.height);this.#eY=new ei,this.#eK=new e_({prey:e,speed:t,maxSeparation:n}),this.#eZ=new eA,this.#eK.applyAsContinuousToSprite(this.#eY)}update(e){this.#eq!==tr.OFF&&(this.#eY.update(e),D.centreCanvasOn(this.#eY.position))}setVelocity(e,t){this.setTrackingMethod(tr.VELOCITY),this.#eY.velocity.x=e,this.#eY.velocity.y=t}setTrackingMethod(e){if(e!==this.#eq)switch(this.#eq=e,e){case tr.HERO:this.#eK.applyAsContinuousToSprite(this.#eY);break;case tr.VELOCITY:this.#eZ.applyAsContinuousToSprite(this.#eY);break;case tr.OFF:console.debug("Camera tracking off.");break;default:console.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const ts={TR:0,BR:1,BL:2,TL:3};class to{#ej;#eJ;#eQ;constructor(e,t,i){this.#ej=e,this.#e0(t,i)}#e0(e,t){let i,r;switch(t){case ts.TL:i=2*e,r=2*e;break;case ts.TR:i=-2*e,r=2*e;break;case ts.BR:i=-2*e,r=-2*e;break;case ts.BL:i=2*e,r=-2*e}this.#e4(i,r),this.#e1(i,r,e)}#e4(e,t){this.#eQ=new J(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:q.STOP}),this.#eJ=eg.addButton(this.#eQ,()=>{this.#e8(!0)},()=>{this.#e8(!1)}),this.#eJ.position.x=e,this.#eJ.position.y=t,this.#eJ.actionClick(null)}#e8(e){e?(this.#eQ.setCurrentIndex(1),this.#ej.setTrackingMethod(tr.HERO)):(this.#eQ.setCurrentIndex(0),this.#ej.setTrackingMethod(tr.OFF))}#e1(e,t,i){let r=3*i;this.#e2("hud-arrow-up-",e,t-i,()=>{this.#e8(!1),this.#ej.setVelocity(0,-r)},()=>this.#ej.setTrackingMethod(tr.OFF)),this.#e2("hud-arrow-right-",e+i,t,()=>{this.#e8(!1),this.#ej.setVelocity(r,0)},()=>this.#ej.setTrackingMethod(tr.OFF)),this.#e2("hud-arrow-down-",e,t+i,()=>{this.#e8(!1),this.#ej.setVelocity(0,r)},()=>this.#ej.setTrackingMethod(tr.OFF)),this.#e2("hud-arrow-left-",e-i,t,()=>{this.#e8(!1),this.#ej.setVelocity(-r,0)},()=>this.#ej.setTrackingMethod(tr.OFF))}#e2(e,t,i,r,n){let s=new J(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:q.STOP}),o=eg.addMomentaryButton(s,r,n);o.position.x=t,o.position.y=i,s.setCurrentIndex(0)}}/**
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
 */const ta="custom-pointer-down-event",th="custom-pointer-up-event",tl="custom-click-event";function tc(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}let td=!1;function tu(e){var t;td=!1,((t=o)?t.unload().then(()=>void(eg.clear(),eg.setVisible(!1))):Promise.resolve(null)).then(()=>(o=e,e.load().then(()=>e.initialise()).then(()=>void(h||(h=new to(a,48,ts.BR)),eg.setVisible(!0))))).then(()=>void(td=!0,window.requestAnimationFrame(tp)))}function tp(e){if(td){if(Y.updateTimeNow(e),s){var t;let i=(e-s)/1e3;D.clearCanvas(),D.setOpacity(o.getOpacity()),$.update(i),o.update(i),D.setOpacity(1),eg.update(i),a?.update(i),et.showFps&&(t=1/i,ee(D.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:D.getCanvasDimensions().height},{color:"green"}))}s=e,window.requestAnimationFrame(tp)}}var tg={initialise:async function(e){D.setOptions(e),function(e){let t=0;for(let i in ef){let r=e.measureText(ef[i]),n=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,s=.5*n-r.fontBoundingBoxDescent;e.fillText(ef[i],-.5*r.width,s),e.getImageData(0,0,1,1).data[3]<=0&&(console.debug(`Emoji ${i} not supported.`),ef[i]=`[${t++}]`),e.clearRect(0,0,r.width,n)}}(D.getContext2D()),function(){let e=D.getCanvas();e.addEventListener("mousedown",t=>tc(e,ta,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("mouseup",t=>tc(e,th,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("touchstart",t=>{if(1===t.changedTouches.length){let i=function(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}(t);tc(e,ta,{x:i.x,y:i.y})}},{passive:!0}),e.addEventListener("touchend",t=>{1===t.changedTouches.length&&tc(e,th,null)},{passive:!0}),e.addEventListener("click",t=>{tc(e,tl,{x:t.offsetX,y:t.offsetY})}),e.addEventListener(tl,e=>{let t=e.detail.x,i=e.detail.y,r=D.uiCoordsToMappedPositions(t,i);console.debug(`Canvas click at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eg.resolveClick(r)||$.resolveClick(r)}),e.addEventListener(ta,e=>{let t=e.detail.x,i=e.detail.y,r=D.uiCoordsToMappedPositions(t,i);console.debug(`Canvas pointer down at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eg.resolvePointerDown(r)}),e.addEventListener(th,e=>{let t=e.detail.x,i=e.detail.y,r=D.uiCoordsToMappedPositions(t,i);console.debug(`Canvas pointer up at (${t}, ${i}): canvas (${r.canvas.x}, ${r.canvas.y}), world (${r.world.x}, ${r.world.y})`),eg.resolvePointerUp(r)})}(),eN.showOkDialog("Welcome to the Scripted Dungeon","Let's start").then(()=>{var e;return e=ew.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(console.error(`Error fetching ${e}: ${t}`),null))}).then(e=>{ti.setSceneDefinitions(function(e){i=e.split(/\r?\n/),r=[];let t=new e5,n=e6.findFirstSection(i);if(!n)throw Error("Invalid script. No section identifiers found.");let s=tt(n.nextSectionId,n.nextLineIndex,t);for(;s;){let e=s.parse();e?.nextSectionId&&e.nextSectionId!==e3.LEVEL||(r.push(t),t=new e5),s=e?tt(e.nextSectionId,e.nextLineIndex,t):null}return r}(e)),tu(ti.getScene(0))}).catch(e=>alert(e.message))},setScene:tu,setCameraToTrack:function(e,t,i){a=new tn(e,t,i)}};window.addEventListener("load",()=>{tg.initialise({width:640,height:480,maxScale:2,minScale:1,sizingMethod:"COVER",alpha:!1})});
//# sourceMappingURL=index.120f8a46.js.map
