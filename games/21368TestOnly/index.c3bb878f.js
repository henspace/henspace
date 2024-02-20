let e,t,i,r,n,s,o,a,h,l,c,d,u;function m(e){return e&&e.__esModule?e.default:e}/**
 * @file Main entry point
 *
 * @module index
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
 * @file Handle logging. This allows easier access to logs on mobile devices.
 *
 * @module utils/logging
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
 */let p=[];window.addEventListener("error",e=>{alert(`ERROR: ${e.filename}; line ${e.lineno}
${e.message}
:Stack:
${e.error.stack}`)});var f={log:function(...e){console.log(...e)},info:function(...e){console.debug(...e)},debug:function(...e){console.debug(...e)},error:function(...e){console.error(...e),p=p.concat(e)},fatal:function(e){let t;console.error(e),t=e.message?`${e.message}
Stack:
${e.stack}`:e,alert(`Fatal error: ${t}
Previous errors:
${p.join("\n")}`),p.push(t)}};const g="'UnifrakturCook', cursive",w={normal:{size:15,fontName:"'UnifrakturCook', cursive"},h1:{size:30,fontName:g},h2:{size:22,fontName:g},h3:{size:18,fontName:g},emojiSprite:{size:18,fontName:"'UnifrakturCook', cursive"}};function y(e){let t=w[e]??w.normal;return`${t.size}px ${t.fontName}`}/**
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
 */const x={DEG_22_5:1/8*Math.PI,DEG_45:2/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_135:6/8*Math.PI,DEG_157_7:7/8*Math.PI};function S(e,t,i){return e<t?t:e>i?i:e}const T={NONE:-1,N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7};function E(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}function v(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}class C{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new C(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class P{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getCartesianDirection(){return Math.atan2(this.y,this.x)}getScreenDirection(){return Math.atan2(-this.y,this.x)}isZero(e){return Math.abs(this.x)<e&&Math.abs(this.y)<e}}class M extends C{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new M(e.x,e.y,0)}static copy(e){return new M(e.x,e.y,e.rotation)}getRelativeTo(e){return new M(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class I{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new C(this.x+this.width,this.y+this.height)}getTopLeft(){return new C(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new C(Number.MIN_VALUE,Number.MIN_VALUE),new C(Number.MAX_VALUE,Number.MAX_VALUE);let b=null,z=null,R=null,O=0,k=0,B=!0,L=null,A=null,_=null,N=new I(0,0,0,0),D=0,G=0,W=1,F=1,H=.1,$="COVER",U=new M(0,0,0);function V(){return{width:window.innerWidth,height:window.innerHeight}}function X(){let e,t,i,r;let n=V(),s=R.width/R.height,o=0,a=0,h=n.width/n.height;("COVER"===$?s>h:s<h)?a=(o=n.height)*s:o=(a=n.width)/s,(W=a/R.width)>F?(a=(W=F)*R.width,o=W*R.height):W<H&&(a=(W=H)*R.width,o=W*R.height),D=(n.width-a)/2,G=(n.height-o)/2,z.style.left=`${D}px`,z.style.top=`${G}px`,z.style.width=`${a}px`,z.style.height=`${o}px`,D<0?(i=-D/W,e=n.width/W):(i=0,e=R.width),G<0?(r=-G/W,t=n.height/W):(r=0,t=R.height),L=new I(i,r,e,t),f.debug(`Scale: ${W}`),f.debug(`Window: width: ${n.width}, height: ${n.height}`),f.debug(`Display: left: ${D}, top: ${G}, width: ${a}, height: ${o}`),f.debug(`Visible canvas: left: ${i}, top: ${r}, width: ${e}, height: ${t}`)}function K(){let e=V(),t=Math.max(parseInt(z.style.left),0),i=Math.max(parseInt(z.style.top),0),r=Math.min(parseInt(z.style.width),e.width),n=Math.min(parseInt(z.style.height),e.height);_.style.left=`${t}px`,_.style.top=`${i}px`,_.style.width=`${r}px`,_.style.height=`${n}px`,function(){let e=w.normal.size*W;document.documentElement.style.fontSize=`${e}px`}(),N=new I(t,i,r,n)}function Y(){X(),K()}function Z(){return z.getContext("2d",{alpha:B})}function q(){let e=document.getElementById("glass-content");return _.style.opacity=0,new Promise(t=>{window.setTimeout(()=>{e.innerHTML="",_.style.display="none",t()},500)})}function j(e){return new M(e.x+U.x,e.y+U.y,e.rotation)}window.addEventListener("resize",()=>{null===b&&(b=window.setTimeout(()=>{Y(),b=null},200))});var J={canvasPositionToWorld:j,centreCanvasOn:function(e){U.x=e.x-O,U.y=e.y-k},clearCanvas:function(){Z().clearRect(0,0,R.width,R.height)},displayOnGlass:function(e,t,i){let r;let n=document.getElementById("glass-content");if(n.childNodes.length>0)return f.error("Attempt to display additional message on glass when one is already present."),Promise.resolve();n.replaceChildren(e),i?_.className=i:_.className="",_.style.display="block",_.style.opacity=1;let s=[];if(t)t.forEach(e=>{let t=new Promise(t=>{e.element.addEventListener("click",async()=>{e.execute&&await e.execute(),t(e.response)})});s.push(t)});else{let e=new Promise(e=>n.addEventListener("click",()=>e()));s.push(e)}return Promise.race(s).then(e=>(r=e,q())).then(()=>r)},getCanvas:()=>z,getContext2D:Z,getCanvasDimensions:function(){return{width:R.width,height:R.height}},getGlassRect:function(){return N},getWorldInCanvasBounds:function(){return new I(U.x,U.y,R.width,R.height)},getVisibleCanvasRect:function(){return L},glassPositionToWorld:function(e){let t=e.x<0?L.x+L.width:L.x,i=e.y<0?L.y+L.height:L.y;return j(new M(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(R)},isOnScreen:function(e){return e.overlaps(R)},panCamera:function(e,t){U.x+=e,U.y+=t},resize:Y,setOpacity:function(e){Z().globalAlpha=e},setOptions:function(e){var t;if(z){f.error("Multiple calls to setScreen ignored.");return}A=document.getElementById("game-content"),t=e.width,w.normal.size=15+t/100*.390625,w.h1.size=2*w.normal.size,w.h2.size=1.5*w.normal.size,w.h3.size=1.2*w.normal.size,w.emojiSprite.size=t/10,(z=document.createElement("canvas")).id="game-canvas",z.setAttribute("width",e.width),z.setAttribute("height",e.height),z.innerText="Loading the app.",R=new I(0,0,e.width,e.height),O=e.width/2,k=e.height/2,A.appendChild(z),F=e.maxScale,H=e.minScale,$=e.sizingMethod,B=e.alpha,X(),function(){(_=document.createElement("div")).id="glass",A.appendChild(_),_.style.display="none";let e=document.createElement("div");e.id="glass-content",_.appendChild(e)}(),K()},wipeGlass:q,worldPositionToCanvas:function(e){return new M(e.x-U.x,e.y-U.y,e.rotation)},worldToUi:function(e){return e*W},uiCoordsToMappedPositions:function(e,t){return{canvas:new M(Math.round(e/=W),Math.round(t/=W)),world:new M(Math.round(e+U.x),Math.round(t+U.y),-U.rotation)}},uiToWorld:function(e){return e/W}};const Q=new Map,ee=new Map;function et(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),Q.delete(t)}function ei(e){f.debug("Remove passive sprite."),ee.delete(e)}function er(){e=null}var en={addActor:function(t){Q.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){ee.set(e,e)},clearAll:function(){Q.forEach(e=>et(e)),ee.forEach(e=>ei(e)),er()},getActors:function(){return Q},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():J.getCanvasDimensions()},removeTileMap:er,resolveCancel:function(e){return!1},resolveClick:function(t){let i=e?.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},resolveContextMenu:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionContextClick(t.world),!0)},removeActor:et,removePassiveSprite:ei,setTileMap:function(t){e=t},update:function(t){e?.update(t),Q.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let n=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,n)}),ee.forEach(e=>e.update(t))}};function es(e,t,i,r){if(e.font=y(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var n=t.split("\n");for(let t=0;t<n.length;t++)r.y=function(e,t,i,r){let n;let s=t.split(" "),o=i.x??0,a=i.y??0,h=r.xWrapPosition-o,l=r.lineSpacing??1,c="";for(let t=0;t<s.length;t++){let i=c+s[t]+" ",r=/**
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
 * @file Handle fights and other interactions.
 *
 * @module dnd/interact
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
 */const eo={spriteBoxes:!1,showFps:!0};/**
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
 */let ea=[];function eh(e){return new Promise(t=>{let i=new Image;i.addEventListener("load",()=>{f.debug("Image loaded."),t(i)}),i.src=e})}var el={getSpriteBitmap:function(e,t){let i=ea[e].get(t);return i||f.debug(`Failed to find image ${t} at index ${e}`),i},loadImage:eh,loadImages:function(e){let t=[];return e.forEach(e=>t.push(eh(e))),Promise.all(t)},loadSpriteMap:function(e,t){return eh(t).then(t=>(function(e,t){let i=[],r=new Map;return ea.push(r),e.frames.forEach(e=>{i.push(createImageBitmap(t,e.frame.x,e.frame.y,e.frame.w,e.frame.h).then(t=>{let i={image:t,width:e.frame.w,height:e.frame.h,centreX:e.sourceSize.w/2-e.spriteSourceSize.x,centreY:e.sourceSize.h/2-e.spriteSourceSize.y};return r.set(e.filename,i),e.filename}))}),Promise.all(i)})(e,t))}};/**
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
 */let ec=0;var ed={updateTimeNow:function(e){ec=e},getFrameCount:function(e){return Math.floor(ec/e)}};/**
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
 */const eu={WRAP:0,REVERSE:1,STOP:2};class em{#e;#t;#i;#r;#n;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#n=0}get index(){return this.#n}set index(e){this.#n=S(e,0,this.#e-1)}advanceBy(e){if(this.#e<1)return this.#n;switch(this.#i){case eu.WRAP:return this.#s(e);case eu.REVERSE:return this.#o(e);case eu.NONE:default:return this.#a(e)}}#s(e){return e%=this.#e,this.#n+=e%this.#e,this.#n>=this.#e&&(this.#n=this.#n-this.#e),this.#n}#o(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#n+=e;let t=this.#n-this.#t;t>0&&(this.#n=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#n-=e,this.#n<0&&(this.#n=-this.#n,this.#r=1));return this.#n}#a(e){return this.#r>0?this.#n=Math.min(this.#t,this.#n+e):this.#r<0&&(this.#n=Math.max(0,this.#n-e)),this.#n}}class ep{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,"string"==typeof t){this.#h.push(el.getSpriteBitmap(e,t));return}this.#d=Math.max(1,i.framePeriodMs);let n=t.startIndex??0,s=t.padding??0;do{let i=`${t.prefix}${n.toString().padStart(s,"0")}${t.suffix}`;(r=el.getSpriteBitmap(e,i))&&this.#h.push(r),n++}while(r)this.#l=new em(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(!(this.#h.length>1))return this.#h[0];if(this.playing){let e=ed.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.#h.length>1&&(this.playing=!1,this.#l.index=e)}getCurrentIndex(){return this.#h.length>1?this.#l.index:0}}class ef{#u;#m;constructor(e,t){this.#u={},this.#u[e]=t,this.#m=t}get image(){return this.#m}addAnimatedImage(e,t){this.#u[e]=t}setCurrentKey(e){this.#u.hasOwnProperty(e)?this.#m=this.#u[e]:f.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#m.getCurrentFrame()}}class eg{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new I(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=J.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),eo.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){f.error("_doRender method should be overridden.")}isOnScreen(e){let t=new I(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return J.isOnScreen(t)}isOnCanvas(e){let t=new I(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return J.isOnCanvas(t)}}class ew extends eg{#p;#f;#g;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#p=i}#w(e){this._context.font=y(this.#p);let t=this._context.measureText(e);this.#g={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#f=e}_doRender(e){var t;this.text!==this.#f&&this.#w(this.text);let i={x:e.x+this.#g.origin.x,y:e.y+this.#g.origin.y,rotation:e.rotation};es(this._context,this.#f,i,{styleName:this.#p}),this._boundingBoxCanvas=(t=this.#g,new I(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class ey extends eg{#y;#x;#S;#T;#E;#v;constructor(e,t){super(e),this.#y=t.width??10,this.#x=t.height??10,this.#S=this.#y/2,this.#T=this.#x/2,this.#E=t.fillStyle,this.#v=t.strokeStyle}_doRender(e){let t=e.x-this.#S,i=e.y-this.#T;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(t,i,this.#y,this.#x)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(t,i,this.#y,this.#x)),this._boundingBoxCanvas=new I(t,i,this.#y,this.#x)}}class ex extends eg{#x;#T;#y;#S;#E;#v;#C;#P;#M;#I;constructor(e,t){super(e),this.#x=t.height,this.#T=this.#x/2,this.#y=t.width,this.#S=this.#y/2,this.#E=t.fillStyle,this.#v=t.strokeStyle,this.#C=t.offsetX??0,this.#P=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#M=Math.min(e,1)*this.#x,this.#I=.5*this.#M}_doRender(e){let t=e.y-this.#T+this.#P,i=e.y+this.#T-this.#M+this.#P,r=e.x-this.#S+this.#C;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(r,i,this.#y,this.#M)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(r,t,this.#y,this.#x)),this._boundingBoxCanvas=new I(r,t,this.#y,this.#x)}}class eS extends eg{#b;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){f.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#b=[];let r=t.tileSize/i,n=-t.tileSize/2+r/2;for(let s=0;s<i;s++)this.#b.push(new ex(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[s],strokeStyle:t.strokeStyles?.[s],offsetX:n+r*s,offsetY:0}))}setLevel(e,t){this.#b[e]?.setLevel(t)}render(e){this.#b?.forEach(t=>t.render(e))}}class eT extends eg{#z;#R;constructor(e,t){super(e),t?.getCurrentFrame?(this.#R=t,this.#z=this.#R.getCurrentFrame()):this.#z=t,this.#z?(this._boundingBoxCanvas.width=this.#z?.width??0,this._boundingBoxCanvas.height=this.#z?.height??0):f.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#z)return;let t=this.#R?this.#R.getCurrentFrame():this.#z;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}class eE{#O=new M(0,0,0);#k=new P(0,0,0);#B;#L;modifier;visible;opacity;constructor(e){this.#B=e?.renderer,this.#L=Array.isArray(this.#B),this.visible=!0,this.opacity=1}get position(){return this.#O}set position(e){this.#O.x=this.valueOrZero(e.x),this.#O.y=this.valueOrZero(e.y),this.#O.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#k}set velocity(e){this.#k.x=this.valueOrZero(e.x),this.#k.y=this.valueOrZero(e.y),this.#k.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#A()}#A(){this.#B&&(this.#B.forEach?this.#B.forEach(e=>e.render(this.#O,this.opacity)):this.#B.render(this.#O,this.opacity))}getBoundingBox(){let e=this.#B.getBoundingBoxCanvas();return new I(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class ev{decoratedModifier;#_;#N;#D;constructor(e){this.#N=0,this.#D=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#D=t,new Promise(t=>{this.#_=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#_&&(this.#N+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#N>this.#D?(this.#_?.(null),null):i}doUpdate(e,t){return f.error("doUpdate should be overridden."),this}}class eC extends ev{#G;constructor(e,t){super(t),this.#G=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#G),e.opacity>0?this:null}}/**
 * @file Movers for sprites
 *
 * @module utils/sprites/movers
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
 */class eP{#W;#F;constructor(e,t){this.#W=e,this.#F=t}getSpeedBetweenPoints(e,t){return this.#F?this.#W:(1+.1*(Math.abs(e.x-t.x)+Math.abs(e.y-t.y)))*this.#W}}class eM extends ev{#H;#$;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class eI extends ev{#U;#V;#X;constructor(e,t){super(t),this.#U=e.prey,this.#V=e.maxSeparation,this.#X=new eP(e.speed,e.linear)}doUpdate(e,t){let i=this.#U.position,r=e.position,n=this.#X.getSpeedBetweenPoints(i,r);if(!r.withinSquare(i,this.#V)){let s=r.getCartesianAngleTo(i);e.velocity.x=n*Math.cos(s),e.velocity.y=n*Math.sin(s);let o=e.velocity.x*t,a=e.velocity.y*t;e.position.x+=this.getMinMove(o,i.x,r.x),e.position.y+=this.getMinMove(a,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class eb extends ev{#K;#n;#Y;#X;constructor(e,t){super(t),this.#K=e.path,this.#n=0,this.#Y=e.path[0],this.#X=new eP(e.speed,e.linear)}doUpdate(e,t){let i=e.position,r=this.#X.getSpeedBetweenPoints(this.#Y,i),n=i.getCartesianAngleTo(this.#Y);e.velocity.x=r*Math.cos(n),e.velocity.y=r*Math.sin(n);let s=e.velocity.x*t,o=e.velocity.y*t;if(i.x+=this.getMinMove(s,this.#Y.x,i.x),i.y+=this.getMinMove(o,this.#Y.y,i.y),i.isCoincident(this.#Y)){if(++this.#n>=this.#K.length)return e.velocity.x=0,e.velocity.y=0,this.decoratedModifier;this.#Y=this.#K[this.#n]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}function ez(e,t){let i=new eE({renderer:e});i.position=t.position,i.velocity=t.velocity,en.addPassiveSprite(i),new eC(t.lifetimeSecs,new eM).applyAsTransientToSprite(i,20).then(()=>en.removePassiveSprite(i))}function eR(e,t){ez(new ew(J.getContext2D(),e),t)}/**
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
 */function eO(e=6){return v(1,e)}function ek(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var eB={showMessage:function(e){let t=document.createElement("div");t.appendChild(document.createTextNode(e)),t.className="popup",t.style.opacity=1,document.body.appendChild(t),t.addEventListener("click",()=>t.remove())},showOkDialog:function(e,t="OK",i){let r=document.createElement("div");r.appendChild(ek(e));let n=document.createElement("button");return n.appendChild(document.createTextNode(t)),r.appendChild(n),J.displayOnGlass(r,[{element:n,response:0,execute:null}],i)},showMenuDialog:function(e,t,i){let r=document.createElement("div");r.appendChild(ek(e));let n=[];return t.forEach(e=>{r.appendChild(e.element),n.push({element:e.element,response:e.id})}),J.displayOnGlass(r,n,i)}};class eL{actor;constructor(e){this.actor=e}enact(e){return Promise.resolve()}react(e){return Promise.resolve()}allowEscape(e){return!0}}class eA extends eL{constructor(e){super(e)}enact(e){return this.#Z(this.actor,e)}react(e){return this.#Z(e,this.actor)}allowEscape(e){return this.actor,eO(20)>10||(eR("Failed to run.",{lifetimeSecs:2,position:e.position,velocity:new P(0,-100,0)}),!1)}#q(e,t){let i=C.copy(e.position);return new eb({path:[new C(e.position.x+.2*(t.position.x-e.position.x),e.position.y+.2*(t.position.y-e.position.y)),i],speed:100}).applyAsTransientToSprite(e.sprite)}#j(e,t){return new Promise(e=>{var i,r;if(eO(20)>10)i=el.getSpriteBitmap(0,"blood-splat.png"),r={lifetimeSecs:1,position:t.position,velocity:new P(0,0,0)},ez(new eT(J.getContext2D(),i),r);else{eR("Missed",{lifetimeSecs:2,position:t.position,velocity:new P(0,-100,0)}),e();return}let n=t.traits.get("HP"),s=eO(6);n=Math.max(0,n-s),t.traits.set("HP",n),0===n?(f.info("Killed actor."),t.interaction=new e_,t.alive=!1):eR(`-${s} HP`,{lifetimeSecs:2,position:t.position,velocity:new P(0,-200,0)}),e(n)})}#Z(e,t){return this.#q(e,t).then(()=>this.#j(e,t))}}class e_ extends eL{constructor(e){super(e)}react(e){return eB.showOkDialog("A bit macabre, but you're trying to search a corpse. I haven't written the code yet.")}}class eN extends eL{constructor(e){super(e)}react(e){return eB.showOkDialog("Time to trade. I haven't written the code yet.")}}/**
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
 */class eD{#J;#Q;#ee;#et;setOnClick(e){this.#J=e}setOnContextClick(e){this.#Q=e}setOnPointerDown(e){this.#ee=e}setOnPointerUp(e){this.#et=e}actionClick(e){this.#J?.(this,e)}actionContextClick(e){this.#Q?.(this,e)}actionPointerDown(e){this.#ee?.(this,e)}actionPointerUp(e){this.#et?.(this,e)}}class eG extends eD{maxTilesPerMove;sprite;traits;interaction;alive;constructor(e){super(),this.interaction=new eL,this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4,this.alive=!0}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}isWandering(){return this?.traits.get("MOVE")==="wander"}isPassableByActor(e){return!this.alive||!this.obstacle}canShareLocationWithActor(e){return!this.obstacle}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}/**
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
 */const eW={OFF:0,HERO:1,VELOCITY:2};class eF{#ei;#er;#en;#es;constructor(e,t,i=0){let r=J.getCanvasDimensions(),n=i*Math.min(r.width,r.height);this.#ei=new eE,this.#er=new eI({prey:e,speed:t,maxSeparation:n}),this.#en=new eM,this.#er.applyAsContinuousToSprite(this.#ei)}update(e){this.#es!==eW.OFF&&(this.#ei.update(e),J.centreCanvasOn(this.#ei.position))}setVelocity(e,t){this.setTrackingMethod(eW.VELOCITY),this.#ei.velocity.x=e,this.#ei.velocity.y=t}panBy(e,t){this.#ei.position.x+=e,this.#ei.position.y+=t,J.centreCanvasOn(this.#ei.position)}setTrackingMethod(e){if(e!==this.#es)switch(this.#es=e,e){case eW.HERO:this.#er.applyAsContinuousToSprite(this.#ei);break;case eW.VELOCITY:this.#en.applyAsContinuousToSprite(this.#ei);break;case eW.OFF:break;default:f.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const eH={TR:0,BR:1,BL:2,TL:3};class e${#eo;#ea;#eh;constructor(e,t,i){this.#eo=e,this.#el(t,i)}#el(e,t){let i,r;switch(t){case eH.TL:i=2*e,r=2*e;break;case eH.TR:i=-2*e,r=2*e;break;case eH.BR:i=-2*e,r=-2*e;break;case eH.BL:i=2*e,r=-2*e}this.#ec(i,r),this.#ed(i,r,e)}#ec(e,t){this.#eh=new ep(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:eu.STOP}),this.#ea=eY.addButton(this.#eh,()=>{this.setTrackingState(!0)},()=>{this.setTrackingState(!1)}),this.#ea.position.x=e,this.#ea.position.y=t,this.#ea.actionClick(null)}setTrackingState(e){e?(this.#eh.setCurrentIndex(1),this.#eo.setTrackingMethod(eW.HERO)):(this.#eh.setCurrentIndex(0),this.#eo.setTrackingMethod(eW.OFF))}#ed(e,t,i){let r=3*i;this.#eu("hud-arrow-up-",e,t-i,()=>{this.setTrackingState(!1),this.#eo.setVelocity(0,-r)},()=>this.#eo.setTrackingMethod(eW.OFF)),this.#eu("hud-arrow-right-",e+i,t,()=>{this.setTrackingState(!1),this.#eo.setVelocity(r,0)},()=>this.#eo.setTrackingMethod(eW.OFF)),this.#eu("hud-arrow-down-",e,t+i,()=>{this.setTrackingState(!1),this.#eo.setVelocity(0,r)},()=>this.#eo.setTrackingMethod(eW.OFF)),this.#eu("hud-arrow-left-",e-i,t,()=>{this.setTrackingState(!1),this.#eo.setVelocity(-r,0)},()=>this.#eo.setTrackingMethod(eW.OFF))}#eu(e,t,i,r,n){let s=new ep(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:eu.STOP}),o=eY.addMomentaryButton(s,r,n);o.position.x=t,o.position.y=i,s.setCurrentIndex(0)}}const eU=new Map;let eV=!1;function eX(e,t){let i=J.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new I(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}function eK(e){if(!eV||!eV)return!1;for(let[t,i]of eU)if(eX(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1}var eY={addButton:function(e,t,i){let r=new eG(new eE({renderer:new eT(J.getContext2D(),e)}));return eU.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),e.setCurrentIndex(0),r},addMomentaryButton:function(e,t,i){let r=new eG(new eE({renderer:new eT(J.getContext2D(),e)}));return eU.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){eU.clear()},removeButton:function(e){eU.delete(e)},update:function(e){eV&&eU.forEach(t=>{let i=M.copy(t.position);t.position=J.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolvePointerCancel:function(e){return eK(e)},resolveClick:function(e){if(!eV)return!1;for(let[t,i]of eU)if(eX(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolveContextMenu:function(e){return!1},resolvePointerDown:function(e){if(!eV||!eV)return!1;for(let[t,i]of eU)if(eX(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:eK,setVisible:function(e){eV=e}};/**
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
 */const eZ={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
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
 */var eq={};eq=new URL("dungeon_script.e102251e.txt",import.meta.url).toString();const ej={DUNGEON_SCRIPT:new URL(eq)},eJ={DEAD:{keyName:"DEAD",suffix:"dead",options:{framePeriodMs:100,loopMethod:eu.STOP}},IDLE:{keyName:"IDLE",suffix:"idle",options:{framePeriodMs:300,loopMethod:eu.REVERSE}},WALK_NORTH:{keyName:"WALK_N",suffix:"walk-n",options:{framePeriodMs:100,loopMethod:eu.REVERSE}},WALK_EAST:{keyName:"WALK_E",suffix:"walk-e",options:{framePeriodMs:100,loopMethod:eu.REVERSE}},WALK_SOUTH:{keyName:"WALK_S",suffix:"walk-s",options:{framePeriodMs:100,loopMethod:eu.REVERSE}},WALK_WEST:{keyName:"WALK_W",suffix:"walk-w",options:{framePeriodMs:100,loopMethod:eu.REVERSE}}};var eQ={definitions:eJ,formFrameNameRoot:function(e,t){let i=eJ[e]?.suffix;if(!i)throw Error(`Attempt made to use invalid standard animation key of '${e}'`);return`${t}-${i}`}},e4={TILE_SIZE:48};class e0 extends eS{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}class e1 extends ef{#em;#ep;#ef;constructor(e,t){super(e,t),this.#ep=T.NONE}setActor(e){this.#em=e,this.#ef=this.#em.alive}getCurrentFrame(){let e=this.#eg();return(e!==this.#ep||this.#ef!=this.#em?.alive)&&(this.#ep=e,this.#ef=this.#em?.alive,this.#ew()),super.getCurrentFrame()}#eg(){return!this.#em||this.#em.velocity.isZero(.1)?T.NONE:function(e){let t=Math.abs(e);return t<=x.DEG_45?T.E:t<=x.DEG_135?Math.sign(e)>0?T.N:T.S:T.W}(this.#em.velocity.getScreenDirection())}#ew(){if(!this.#em.alive)return this.setCurrentKey(eQ.definitions.DEAD.keyName);switch(this.#ep){case T.NONE:this.setCurrentKey(eQ.definitions.IDLE.keyName);break;case T.E:this.setCurrentKey(eQ.definitions.WALK_EAST.keyName);break;case T.N:case T.NW:case T.NE:this.setCurrentKey(eQ.definitions.WALK_NORTH.keyName);break;case T.W:this.setCurrentKey(eQ.definitions.WALK_WEST.keyName);break;default:this.setCurrentKey(eQ.definitions.WALK_SOUTH.keyName)}}}function e8(e){let t=function(e){let t=new e1("still",new ep(0,`${e}.png`));for(let i in eQ.definitions){let r=eQ.definitions[i];t.addAnimatedImage(eQ.definitions[i].keyName,new ep(0,{prefix:eQ.formFrameNameRoot(i,e),suffix:".png",startIndex:0,padding:2},r.options))}return t.setCurrentKey(eQ.definitions.IDLE.keyName),t}(e),i=new eT(J.getContext2D(),t),r=new e0(J.getContext2D(),{tileSize:en.getTileMap().getGridSize()-2,fillStyles:["rgba(255, 0, 0, 0.2)","rgba(0, 0, 255, 0.2)"],strokeStyles:[]}),n=new eG(new eE({renderer:[r,i]}));return t.setActor(n),r.actor=n,n.position=new M(e4.TILE_SIZE,e4.TILE_SIZE,0),n.velocity={x:0,y:0,rotation:.1},n}const e2=new Map([["HERO",{create:()=>e8("hero")}],["MONSTER",{create:()=>(function(e){let t=e8("orc");return t.interaction=new eA(t),t})(0)}],["TRADER",{create:()=>(function(e){let t=e8(e);return t.interaction=new eN(t),t})("trader")}]]);/**
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
 *//**
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
 */function e3(e,t,i){return{centre:e[t]?.[i],tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}function e7(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]];return e}const e5={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},e6={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},e9={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};class te{matrix;entryPointByDoor;exitPointByDoor;constructor(){this.entryPointByDoor=new C(0,0),this.exitPointByDoor=new C(0,0)}static generateTileMapPlan(e,t){let i=new te,r=i.convertToMatrix(e);return r=i.clarifyMatrix(r),i.createPlan(r,t),i}convertToMatrix(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}clarifyMatrix(e){let t=[];return e.forEach((i,r)=>{let n=[];t.push(n),i.forEach((t,i)=>{var s,o,a,h;let l;let c=e3(e,r,i);(s=t,e5.VOID.includes(s))?t=" ":tr(t)?(o=t,tn(c.above)&&(tn(c.tl)?o+=e9.BELOW_WALL:o+=e9.BELOW_END_WALL),a=t=o,tt(c.left)||tt(c.above)||tt(c.right)||tt(c.below))?this.entryPointByDoor=new C(i,r):(ti(c.right)||ti(c.below)||ti(c.left)||ti(c.above))&&(this.exitPointByDoor=new C(i,r)):tn(t)&&(l=h=t,tn(c.above)&&tn(c.right)&&tn(c.below)&&tn(c.left)?l+=e6.INTERNAL_CROSS:tr(c.left)&&tr(c.right)?l+=e6.INTERNAL_VERTICAL:tr(c.above)&&tr(c.below)?l+=e6.INTERNAL_HORIZONTAL:tn(c.left)&&tn(c.right)&&tn(c.below)?l+=e6.TOP_TEE:tn(c.above)&&tn(c.below)&&tn(c.left)?l+=e6.RIGHT_TEE:tn(c.left)&&tn(c.right)&&tn(c.above)?l+=e6.BOTTOM_TEE:tn(c.above)&&tn(c.below)&&tn(c.right)?l+=e6.LEFT_TEE:tn(c.right)&&tn(c.below)?l+=tr(c.br)?e6.TOP_LEFT:e6.TOP_LEFT_INTERNAL:tn(c.left)&&tn(c.below)?l+=tr(c.bl)?e6.TOP_RIGHT:e6.TOP_RIGHT_INTERNAL:tn(c.left)&&tn(c.above)?l+=tr(c.tl)?e6.BOTTOM_RIGHT:e6.BOTTOM_RIGHT_INTERNAL:tn(c.right)&&tn(c.above)?l+=tr(c.tr)?e6.BOTTOM_LEFT:e6.BOTTOM_LEFT_INTERNAL:tn(c.above)&&tn(c.below)?l+=tr(c.right)?e6.LEFT:e6.RIGHT:tn(c.right)&&tn(c.left)&&(l+=tr(c.below)?e6.TOP:e6.BOTTOM),t=tn(c.above)?l+e9.BELOW_WALL:l),n.push(t)})}),t}createPlan(e,t){let i=[];e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),n=i.get(t);if(!n&&r[2]&&r[3]&&(n=i.get(`${r[1]}${r[2]}`)),!n&&r[2]&&(n=i.get(r[1])),!n){let n=function(e){for(let t in e5)if(e5[t].includes(e))return e5[t][0];return null}(r[1]);if(n&&n!==r[1]){var s,o;let t;return e((s=r[2],o=r[3],t=n,s&&(t+=s),o&&(t+=o),t),i)}f.error(`Failed to find symbol for ${t}`)}return n}(e,t))})}),this.matrix=i}}function tt(e){return e5.DOOR_IN.includes(e)}function ti(e){return e5.DOOR_OUT.includes(e)}function tr(e){return e5.GROUND.includes(e)}function tn(e){var t;return e5.WALL.includes(e)||tt(t=e)||ti(t)}/**
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
 */class ts{#ey;#ex;constructor(e){this.#ex=e,this.#ey=new Map}setRouteToCoords(e,t,i){this.#ey.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#ey.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#ey.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new C(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#ey.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#ey.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#ex.gridPointToWorldPoint(e)):t}}class to{actor;#ey;#ex;#eS;constructor(e,t){this.#ex=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#eT(e,t);if(r.coincident(e))return[];this.#ex.canGridPointBeOccupiedByActor(r,this.actor)||(r=this.#eE(r,t));let n=[],s=Math.sign(r.x-e.x),o=Math.sign(r.y-e.y),a=C.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=C.copy(a),c=!1;if(h&&0!==s&&a.x!=r.x?(t.x+=s,c=!0):h||0===o||a.y==r.y||(t.y+=o,c=!0),c=c&&this.#ex.canGridPointBeOccupiedByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||n.push(this.#ex.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||n.push(this.#ex.gridPointToWorldPoint(a)),n}getAllRoutesFrom(e,t){return this.#ey=new ts(this.#ex),this.#eS=e,this.#ev(e.x,e.y,t,null),this.#ey}#ev(e,t,i,r){if(r){if(e===this.#eS.x&&t===this.#eS.y||!this.#eC(e,t))return;let n=this.#ey.getRouteToCoords(e,t);if(n&&!(r.length<n.length-1))return;r.push(new C(e,t)),this.#eP(e,t)&&this.#ey.setRouteToCoords(r,e,t),i--}else r=[new C(e,t)];i>0&&(this.#ev(e,t-1,i,[...r]),this.#ev(e+1,t,i,[...r]),this.#ev(e,t+1,i,[...r]),this.#ev(e-1,t,i,[...r]))}#eC(e,t){return this.#ex.isGridPointPassableByActor(new C(e,t),this.actor)}#eP(e,t){return this.#ex.canGridPointBeOccupiedByActor(new C(e,t),this.actor)}#eT(e,t){let i=t.x-e.x,r=t.y-e.y,n=t.x,s=t.y;return Math.abs(i)>Math.abs(r)?n-=Math.sign(i):s-=Math.sign(r),new C(n,s)}#eE(e,t){return e.x===t.x&&e.y<t.y?new C(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new C(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new C(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new C(e.x+1,e.y-1):e}}class ta{#em;#eM;#ex;#eI;#eb;#ez;#eR;constructor(e,t){this.#ex=e,this.#em=t}findReachedTiles(){return this.#eM=this.#ex.worldPointToGrid(this.#em.position),this.#ez=this.#ex.getMapGridPointRect(),this.#eb&&this.#eb.coincident(this.#eM)&&this.#ez&&this.#ez.equals(this.#eR)||(this.#eI=new Map,this.#eI.set(this.#eM.toString(),this.#eM),this.#eO().forEach(e=>{this.#ek(e)}),this.#eb=this.#eM,this.#eR=this.#ez),this.#eI}isGridPointInRays(e){return!!this.#eI&&this.#eI.has(e.toString())}#eO(){let e=[];for(let t=this.#ez.x;t<=this.#ez.x+this.#ez.width;t++)e.push(new C(t,this.#ez.y)),e.push(new C(t,this.#ez.y+this.#ez.height));for(let t=this.#ez.y+1;t<=this.#ez.y+this.#ez.height-1;t++)e.push(new C(this.#ez.x,t)),e.push(new C(this.#ez.x+this.#ez.width,t));return e}#ek(e){let t,i,r;let n=function(e){let t=Math.abs(e);return t<=x.DEG_22_5?T.E:t<=x.DEG_67_5?Math.sign(e)>0?T.NE:T.SE:t<=x.DEG_112_5?Math.sign(e)>0?T.N:T.S:t<=x.DEG_157_7?Math.sign(e)>0?T.NW:T.SW:T.W}(this.#eM.getScreenAngleTo(e));Math.abs(e.x-this.#eM.x)>=Math.abs(e.y-this.#eM.y)?(t=Math.sign(e.x-this.#eM.x),i=(r=Math.abs(e.x-this.#eM.x))<1?0:(e.y-this.#eM.y)/r):(i=Math.sign(e.y-this.#eM.y),t=(r=Math.abs(e.y-this.#eM.y))<1?0:(e.x-this.#eM.x)/r);let s=this.#eM.x,o=this.#eM.y,a=!0;for(;r>=0;){let e=new C(Math.round(s),Math.round(o));if(a||this.#ex.isSeeThrough(e,this.#em))this.#eB(e,n);else break;a=!1,s+=t,o+=i,r--}}#eB(e,t){switch(this.#eI.set(e.toString(),e),t){case T.N:this.#eL(new C(e.x-1,e.y-1)),this.#eL(new C(e.x,e.y-1)),this.#eL(new C(e.x+1,e.y-1));break;case T.NE:this.#eL(new C(e.x,e.y-1)),this.#eL(new C(e.x+1,e.y-1)),this.#eL(new C(e.x+1,e.y));break;case T.E:this.#eL(new C(e.x+1,e.y-1)),this.#eL(new C(e.x+1,e.y)),this.#eL(new C(e.x+1,e.y+1));break;case T.SE:this.#eL(new C(e.x+1,e.y)),this.#eL(new C(e.x+1,e.y+1)),this.#eL(new C(e.x,e.y+1));break;case T.S:this.#eL(new C(e.x-1,e.y+1)),this.#eL(new C(e.x,e.y+1)),this.#eL(new C(e.x+1,e.y+1));break;case T.SW:this.#eL(new C(e.x-1,e.y)),this.#eL(new C(e.x-1,e.y+1)),this.#eL(new C(e.x,e.y+1));break;case T.W:this.#eL(new C(e.x-1,e.y-1)),this.#eL(new C(e.x-1,e.y)),this.#eL(new C(e.x-1,e.y+1));break;case T.NW:this.#eL(new C(e.x-1,e.y)),this.#eL(new C(e.x-1,e.y-1)),this.#eL(new C(e.x,e.y-1))}}#eL(e){this.#ex.isSeeThrough(e)||this.#eI.set(e.toString(),e)}}function th(e){return e?tl(o).then(()=>e.load().then(()=>e.initialise()).then(()=>{a=new e$(r,48,eH.BR),addEventListener("fullscreenchange",()=>{document.fullscreenElement?(f.debug("Entering fullscreen mode"),i.setCurrentIndex(1)):(f.debug("Exiting fullscreen mode."),i.setCurrentIndex(0))}),i=new ep(0,{prefix:"hud-fullscreen-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:eu.STOP}),(t=eY.addButton(i,()=>{var e;(e=document.body).requestFullscreen?e.requestFullscreen({navigationUI:"hide"}):Promise.reject(Error("Fullscreen requests not supported by browser"))},()=>{document.exitFullscreen()})).position.x=e4.TILE_SIZE,t.position.y=-e4.TILE_SIZE,eY.setVisible(!0),o=e})):(f.error("Attempt made to switch to the next scene when there are no more."),Promise.reject())}function tl(e){return e?e.unload().then(()=>(en.clearAll(),o=null,a=null,eY.clear(),eY.setVisible(!1),Promise.resolve())):Promise.resolve(null)}function tc(){return++s<n.length?new tH(n[s]):null}var td={areThereMoreScenes:function(){return s<n.length-1},setCameraToTrack:function(e,t,i){r=new eF(e,t,i)},panCameraBy:function(e,t){r.panBy(e,t),r.setTrackingMethod(eW.OFF),a.setTrackingState(!1)},setSceneDefinitions:function(e){n=e,s=-1},switchToFirstScene:function(){return th((s=-1,tc()))},switchToNextScene:function(){return th(tc())},unloadCurrentScene:function(){return tl(o)},update:function(e){o?.update(e),r?.update(e)}};class tu{#eA;#e_;#eN;#eD;#eG;#eW;id;constructor(e){if(!e.imageNameDown&&!e.action)throw Error("Attempt to create a button with no down image and no action. One or other must be supplied.");this.id=e.id,this.#eA=el.getSpriteBitmap(0,e.imageNameUp),this.#e_=e.imageNameDown?el.getSpriteBitmap(0,e.imageNameDown):this.#eA;let t=document.createElement("button"),i=document.createElement("canvas");i.setAttribute("width",e4.TILE_SIZE),i.setAttribute("height",e4.TILE_SIZE),this.#eD=i.getContext("2d"),t.appendChild(i),e.internalLabel?(this.#eN=t,this.#eN.appendChild(document.createTextNode(e.label))):(this.#eN=document.createElement("label"),this.#eN.appendChild(document.createTextNode(e.label)),this.#eN.appendChild(t)),this.#eN.addEventListener("mousedown",()=>this.#eF()),this.#eN.addEventListener("touchstart",()=>this.#eF()),this.#eN.addEventListener("mouseup",async()=>this.#eH()),this.#eN.addEventListener("touchend",async()=>this.#eH()),this.#eN.addEventListener("touchcancel",()=>this.#e$()),this.selected=!1,this.#eW=e.action}get element(){return this.#eN}get selected(){return this.#eG}set selected(e){this.#eG=e,this.#eU()}#eF(){this.#eV(this.#e_)}#eH(){this.#eG=!this.#eG,this.#eU()}#e$(){this.#eU()}#eU(){this.#eV(this.#eG?this.#e_:this.#eA)}#eV(e){this.#eD.clearRect(0,0,e4.TILE_SIZE,e4.TILE_SIZE),this.#eD.drawImage(e.image,.5*(e4.TILE_SIZE-e.width),.5*(e4.TILE_SIZE-e.height))}execute(){return this.#eW?this.#eW():Promise.resolve()}}const tm={MAIN_MENU:0,CLICKED_FREE_GROUND:1,CLICKED_ENTRANCE:2,CLICKED_EXIT:3};class tp{#em;#eX;#eK;#ex;#eY;constructor(e,t,i){this.#em=e,this.#ex=t,this.#eY=i}moveInstantly(){this.#eK=M.copy(this.#em.position);let e=this.#ex.worldPointToGrid(this.#em.position),t=this.#em.isWandering()?this.#eZ(e,this.#em.maxTilesPerMove):this.#ex.worldPointToGrid(h.position);if(Math.abs(t.x-e.x)+Math.abs(t.y-e.y)<=2*this.#em.maxTilesPerMove&&this.#ex.canHeroSeeGridPoint(e)){this.#eY.actor=this.#em;let i=this.#eY.getDumbRouteNextTo(e,t,this.#em.maxTilesPerMove);i.length>0&&(this.#eX=new eb({path:i,speed:100},this.#em.sprite.modifier),this.#eq(i[i.length-1]))}}#eZ(e,t){let i=v(e.x-t,e.x+t),r=v(e.y-t,e.y+t),n=this.#ex.getDimsInTiles();return new C(S(i,0,n.width-1),S(r,0,n.height-1))}#eq(e){let t=this.#ex.worldPointToGrid(this.#em.position);this.#em.position=e;let i=this.#ex.worldPointToGrid(this.#em.position);this.#ex.moveTileOccupancyGridPoint(this.#em,t,i)}#ej(){this.#eq(this.#eK)}replay(){return(this.#ej(),this.#eX)?this.#eX.applyAsTransientToSprite(this.#em.sprite):Promise.resolve()}}class tf{#ex;#eY;#eJ;constructor(e,t){this.#eJ=[],this.#ex=e,this.#eY=t}addAndMoveActor(e){let t=new tp(e,this.#ex,this.#eY);t.moveInstantly(),this.#eJ.push(t)}replay(){let e=[];return this.#eJ.forEach(t=>e.push(t.replay())),Promise.all(e)}}class tg{constructor(){}async transitionTo(e){await this.onExit().then(()=>(tb=e,e.onEntry()))}onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}onExit(){return Promise.resolve(null)}}class tw extends tg{onEntry(){let e=new tu({id:"PLAY",label:"Play",imageNameUp:"hero-idle00.png",imageNameDown:"hero-idle01.png",internalLabel:!0});return eB.showMenuDialog("Welcome to the Scripted Dungeon",[e],"door").then(e=>alert(e)).then(()=>this.transitionTo(new ty))}}class ty extends tg{onEntry(){return f.log("Enter AtStart"),eB.showOkDialog("You are in a dark and dingy dungeon.","Conquer it!","wall").then(()=>td.switchToFirstScene()).then(()=>(h.sprite.position=en.getTileMap().getWorldPositionOfTileByEntry(),tb.transitionTo(new tT)))}}class tx extends tg{async onEntry(){f.log("Enter AtGameOver"),eR("YOU DIED!",{lifetimeSecs:2,position:h.position,velocity:new P(0,-100,0)}),await new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>eB.showOkDialog("Game over. You died.","Try again")).then(()=>td.unloadCurrentScene()).then(()=>this.transitionTo(new tw))}}class tS extends tg{async onEntry(){f.log("Enter AtGameCompleted"),await eB.showOkDialog("You've done it. Well done.","Try again").then(()=>td.unloadCurrentScene()).then(()=>this.transitionTo(new tw))}}class tT extends tg{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter HeroTurnIdle"),await tP()}async onEvent(e,t,i){switch(e){case tm.CLICKED_FREE_GROUND:i?.filter===tO.COMBAT_TILE?f.error("Unexpected click on combat tile ignored."):await tM(t),this.transitionTo(new tv);break;case tm.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tm.CLICKED_EXIT:f.log("Escaping"),await tM(t),td.areThereMoreScenes()?await tI(this):this.transitionTo(new tS)}return Promise.resolve(null)}}class tE extends tg{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter HeroTurnFighting"),await tP()}async onEvent(e,t,i){switch(e){case tm.CLICKED_FREE_GROUND:i?.filter===tO.COMBAT_TILE?await this.#eQ(t):await this.#e4(t),0===en.getTileMap().getParticipants(h).length?this.transitionTo(new tv):this.transitionTo(new tC);break;case tm.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tm.CLICKED_EXIT:f.log("Escaping"),await tM(t),td.areThereMoreScenes()?await tI(this):this.transitionTo(new tS)}return Promise.resolve(null)}#eQ(e){let t=en.getTileMap().getTileAtWorldPoint(e).getOccupants(),i=[];for(let e of t.values())e.interaction&&i.push(e.interaction.react(h));return Promise.all(i)}#e4(e){for(let e of en.getTileMap().getParticipants(h))if(e.alive&&!e.interaction.allowEscape(h))return Promise.resolve(!1);return tM(e)}}class tv extends tg{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter ComputerTurnIdle");let e=en.getTileMap(),t=new to(e),i=new tf(e,t);for(let e of en.getActors().values())e!==h&&e.alive&&i.addAndMoveActor(e);return await i.replay(),0===e.getParticipants(h).length?this.transitionTo(new tT):this.transitionTo(new tE),Promise.resolve(null)}}class tC extends tg{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter ComputerTurnFighting");let e=en.getTileMap(),t=new to(e),i=new tf(e,t),r=e.getParticipants(h);for(let e of en.getActors().values())e!==h&&e.alive&&(r.includes(e)?await e.interaction.enact(h):i.addAndMoveActor(e));return await i.replay(),0===h.traits.get("HP")?this.transitionTo(new tx):0===r.length?this.transitionTo(new tT):this.transitionTo(new tE),Promise.resolve(null)}}function tP(){let e=en.getTileMap(),t=new to(e,h).getAllRoutesFrom(e.worldPointToGrid(h.sprite.position),h.maxTilesPerMove);return e.setMovementRoutes(t),e.setCombatActors(e.getParticipants(h)),Promise.resolve(null)}function tM(e){let t=en.getTileMap(),i=t.getWaypointsToWorldPoint(e);return(t.setMovementRoutes(null),t.setCombatActors(null),i)?new eb({path:i,speed:100},h.sprite.modifier).applyAsTransientToSprite(h.sprite):Promise.resolve()}function tI(e){return td.switchToNextScene().then(()=>(h.sprite.position=en.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new tT)))}let tb=new class extends tg{onEntry(){f.log("WaitingToStart state")}async onEvent(e,t,i){e===tm.MAIN_MENU&&this.transitionTo(new tw)}},tz=!1;var tR={EventId:tm,getHeroActor:function(){return h},setHero:function(e){h=e},triggerEvent:function(e,t,i){if(tz){f.debug(`Ignoring event ${e} as still processing earlier event.`);return}tz=!0,tb.onEvent(e,t,i).then(()=>{tz=!1})}};const tO={MOVEMENT_TILE:0,COMBAT_TILE:1},tk={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class tB extends eD{sprite;obstacle;#e0;#e1;#e8;#e2;constructor(e,t){super(),this.sprite=e,this.#e0=new Map,this.obstacle=t.obstacle,this.#e1=t.gridPoint,this.#e8=t.worldPoint,this.#e2=t.role}get role(){return this.#e2}get gridPoint(){return this.#e1}get worldPoint(){return this.#e8}addOccupant(e){this.#e0.set(e,e)}deleteOccupant(e){this.#e0.delete(e)}getOccupants(){return this.#e0}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#e0.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#e0.values())if(t!==e&&!t.isPassableByActor(e))return!1;return!0}canBeOccupiedByActor(e){if(this.obstacle)return!1;for(let t of this.#e0.values())if(t!==e&&!t.canShareLocationWithActor(e))return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#e2!==tk.ENTRANCE&&this.#e2!==tk.EXIT}}class tL{#eD;#e3;#e7;#e5;#e6;#y;#x;#e9;#te;#tt;#ti;#tr;#tn;#ts;#to;#ta;#th;#tl;constructor(e,t,i){let r=t.matrix;this.#tn=t.entryPointByDoor,this.#ts=t.exitPointByDoor,this.#eD=e,this.#tt=new eE({renderer:new ey(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#tl=new eE({renderer:new ey(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#e6=i,this.#e3=[],this.#e5=r.length,this.#e7=r[0].length,this.#y=i*this.tilesX,this.#x=i*this.tilesY,this.#to=[],r.forEach((t,i)=>{let r=[];this.#e3.push(r),t.forEach((t,n)=>{if(t){let s=new eE({renderer:new eT(e,el.getSpriteBitmap(0,t.image))}),o=new C(n,i),a=this.gridPointToWorldPoint(o),h=new tB(s,{obstacle:t.role===tk.OBSTACLE,gridPoint:o,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#tc(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),s.position.x=n*this.#e6+this.#e6/2,s.position.y=i*this.#e6+this.#e6/2}else r.push(null)})}),this.#ti||(f.error("No entrance has been set. Setting to the first ground tile"),this.#ti=this.#to[0])}getDimsInTiles(){return{width:this.#e7,height:this.#e5}}processTileRole(e){switch(e.role){case tk.ENTRANCE:if(this.#ti){let t=e.gridPoint;f.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#ti=e;break;case tk.EXIT:if(this.#tr){let t=e.gridPoint;f.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#tr=e;break;case tk.GROUND:e.gridPoint.coincident(this.#tn)||this.#to.push(e)}}update(e){this.#td();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#ta?.isGridPointInRays(new C(r,i))){let t=this.#e3[i][r];t?.sprite.update(e)}this.#tu(e)}#td(){let e=tR.getHeroActor();if(e){this.#ta||(this.#ta=new ta(this,e));let t=this.getTileAtWorldPoint(e.position);if(t){let e=t.role;e!=tk.ENTRANCE&&e!=tk.EXIT&&this.#ta.findReachedTiles()}else f.error(`Hero at ${e.position.toString()} but no tile found.`)}}getMapGridPointRect(){return new I(0,0,this.#e7,this.#e5)}getVisibleGridPointRect(){let e=J.getWorldInCanvasBounds(),t=this.worldPointToGrid(new C(e.x,e.y)),i=this.worldPointToGrid(new C(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),n=Math.min(this.#e7-1,i.x),s=Math.max(0,t.y);return new I(r,s,n-r,Math.min(this.#e5-1,i.y)-s)}getGridSize(){return this.#e6}getDimensions(){return{width:this.#y,height:this.#x}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#e7&&t<this.#e5?this.#e3[t][i]:null}worldPointToGrid(e){return new C(Math.floor(e.x/this.#e6),Math.floor(e.y/this.#e6))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#e6;return new C(e.x*this.#e6+t,e.y*this.#e6+t)}getWorldPositionOfTileByEntry(){return this.gridPointToWorldPoint(this.#tn)}getGridPositionOfEntrance(){return this.#ti.gridPoint}setMovementRoutes(e){this.#e9=e,e?(this.#te=new Map,this.#e9.forEach(e=>e.forEach(e=>{this.#te.set(e,e)}))):this.#te=null}setCombatActors(e){this.#th=[],e?.forEach(e=>{this.#th.push(this.worldPointToGrid(e.position))})}#tu(e){this.#tm(e),this.#tp(e)}#tm(e){this.#te?.forEach(t=>{this.#tt.position=this.gridPointToWorldPoint(t),this.#tt.update(e)})}#tp(e){this.#th?.forEach(t=>{this.#tl.position=this.gridPointToWorldPoint(t),this.#tl.update(e)})}#tc(e,t,i){if(this.#e9?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:tO.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#th?.forEach(n=>{if(n.isCoincident(r)){i(e,t,{filter:tO.COMBAT_TILE});return}}),f.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#e9?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(e7(this.#to),this.#to))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canGridPointBeOccupiedByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.canBeOccupiedByActor(t)}canHeroSeeGridPoint(e){return this.#ta?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return e3(this.#e3,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
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
 */function tA(e){return{role:tk.GROUND,onClick:(e,t,i)=>tR.triggerEvent(tR.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function t_(e){return{role:tk.ENTRANCE,onClick:(e,t,i)=>tR.triggerEvent(tR.EventId.CLICKED_ENTRANCE,t,i),image:e}}function tN(e){return{role:tk.EXIT,onClick:(e,t,i)=>tR.triggerEvent(tR.EventId.CLICKED_EXIT,t,i),image:e}}const tD=new Map([["x",{role:tk.OBSTACLE,image:"block.png"}],["#-TL",{role:tk.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:tk.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:tk.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:tk.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:tk.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:tk.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:tk.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:tk.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:tk.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:tk.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:tk.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:tk.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:tk.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:tk.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:tk.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:tk.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:tk.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:tk.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:tk.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:tk.OBSTACLE,image:"block.png"}],["=-T",tN("door-T.png")],["=-R",tN("door-R.png")],["=-B",tN("door-B.png")],["=-L",tN("door-L.png")],["--T",t_("door-T.png")],["--R",t_("door-R.png")],["--B",t_("door-B.png")],["--L",t_("door-L.png")],["=",{role:tk.OBSTACLE,image:"block.png"}],["-",{role:tk.OBSTACLE,image:"block.png"}],[".",tA("floor.png")],[".-SBW",tA("floor-SBW.png")],[".-SBE",tA("floor-SBE.png")],[",-SBE",tA("floor2-SBE.png")],[",-SBW",tA("floor2-SBW.png")],[",",tA("floor2.png")]]);/**
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
 */class tG{#tf;#G;#tg;#tw;#ty;heroActor;constructor(e=2,t=2){e>0?(this.#tf=0,this.#G=1/e):this.#G=1,this.#tg=e,this.#tw=t}getOpacity(){return this.#tf}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){J.clearCanvas(),J.setOpacity(this.#tf),en.update(e),this.doUpdate(e),eY.update(e),J.setOpacity(1),0!==this.#G&&(this.#tf+=e*this.#G,this.#tf>1?(this.#G=0,this.#tf=1):this.#tf<0&&(this.#G=0,this.#tf=0)),this.#ty&&0===this.#tf&&(this.#ty(),this.#ty=null)}unload(){return this.#tx().then(()=>this.doUnload())}#tx(){return this.#tw>0?(this.#G=-1/this.#tw,new Promise(e=>{this.#ty=e})):Promise.resolve()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}const tW=e4.TILE_SIZE;class tF{intro;hero;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}class tH extends tG{#tS;constructor(e){super(),this.#tS=e}doLoad(){return Promise.resolve()}doInitialise(){let e=te.generateTileMapPlan(this.#tS.mapDesign,tD),t=new tL(J.getContext2D(),e,tW);return en.setTileMap(t),this.heroActor=function(e){if(e.hero){let t=e2.get(e.hero.id).create();return t.traits=e.hero.traits.clone(),l=t,t}if(!l)throw Error("No hero has been defined.");return l}(this.#tS),(function(e){let t=[];return e.enemies.forEach(e=>{let i=e2.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(this.#tS).forEach(e=>{e.position=t.getRandomFreeGroundTile().worldPoint,en.addActor(e)}),td.setCameraToTrack(this.heroActor.sprite,200,0),en.addActor(this.heroActor),tR.setHero(this.heroActor),Promise.resolve()}doUpdate(e){}doUnload(){return Promise.resolve(null)}}/**
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
 */class t${#tT;#tE;constructor(e){e?(this.#tT=new Map(e),this.#tE=!1):(this.#tT=new Map,this.#tE=!0)}set(e,t){if(this.#tE||this.#tT.has(e))this.#tT.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#tT.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#tv(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#tv(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#tT.set(e,i[1]),this.#tT.set(`${e}_MAX`,i[2])):this.#tT.set(e,t)}clone(){let e=new t$(this.#tT);return e.#tE=this.#tE,e}}class tU extends t${constructor(e){super(e??new Map([["NAME","mystery"],["MOVEMENT","wander"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
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
 */class tV{#tC;#tP;#tM;#tI;#tb;#tz;#tR;#tO;#tk;#tB;constructor(e){this.#tC=v(e.minCols,e.maxCols),this.#tP=v(e.minRows,e.maxRows),this.#tM=e.maxRoomCols,this.#tI=e.maxRoomRows,this.#tb=e5.WALL[0],this.#tz=e5.GROUND[0],this.#tk=e5.VOID[0],this.#tR=e5.DOOR_IN[0],this.#tO=e5.DOOR_OUT[0]}generate(){this.#tB=[];let e=0,t=this.#tC;for(;this.#tB.length<this.#tP-4;){let i=e+t-4-2,r=i>0?E(0,i):0,n=Math.max(e-r+4,4),s=Math.min(this.#tM,this.#tC-r),o=s>n?E(n,s):n,a=this.#tC-r-o,h=E(4,Math.min(this.#tI,this.#tP-this.#tB.length));this.#tL(r,o,a,h),e=r,t=o}return this.#tA(),this.#t_(),this.getMatrixAsStrings()}getMatrixAsStrings(){return this.#tB.map(e=>e.join(""))}#tL(e,t,i,r){f.log(`Create room ${e} ${t} ${i} ${r}`);let n="";n+=this.#tk.repeat(e)+this.#tb.repeat(t)+this.#tk.repeat(i),this.#tB.push(n.split(""));for(let s=0;s<r-2;s++)n=""+this.#tk.repeat(e)+this.#tb+this.#tz.repeat(t-2)+this.#tb+this.#tk.repeat(i),this.#tB.push(n.split(""));n=""+this.#tk.repeat(e)+this.#tb.repeat(t)+this.#tk.repeat(i),this.#tB.push(n.split(""))}#tA(){for(let e=1;e<this.#tB.length-1;e++)for(let t=1;t<this.#tB[0].length-2;t++)this.#tB[e][t]===this.#tb&&this.#tB[e+1][t]===this.#tb&&this.#tB[e-1][t]===this.#tz&&this.#tB[e+2][t]===this.#tz&&(this.#tB[e][t]=this.#tz,this.#tB[e+1][t]=this.#tz)}#tN(e){return e.above===this.#tb&&e.centre===this.#tb&&e.below===this.#tb}#tD(e){return e.left===this.#tb&&e.centre===this.#tb&&e.right===this.#tb}#t_(){let e=[];this.#tB.forEach((t,i)=>t.forEach((t,r)=>{let n=e3(this.#tB,i,r);(this.#tD(n)||this.#tN(n))&&e.push({row:i,col:r})}));let t=e7(e),i=t[0];this.#tB[i.row][i.col]=this.#tR,i=t[1],this.#tB[i.row][i.col]=this.#tO}}const tX={HERO:"HERO",LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class tK{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=tK.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=tK.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){f.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class tY extends tK{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class tZ extends tK{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *: *([\w,:= /]*)/);t?this.#tG(t):this.#tW(e)}#tG(e){let t=e[1],i=e[2];try{let e=new tU().setFromString(i);this.sceneDefn.hero={id:"HERO",name:t||"mystery",traits:e}}catch(e){this.fatalError(e.message)}}#tW(e){this.fatalError("Long form actors not supported.")}}class tq extends tK{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#tF(t):this.#tH(e)}#tF(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],n=e[4];for(let e=0;e<i;e++)if(e2.has(t))try{let e=new tU().setFromString(n);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#tH(e){this.fatalError("Long form actors not supported.")}}class tj extends tK{#t$;#tU;constructor(e,t,i){super(e,t,i),this.#t$=!1,this.#tU=/^\s*random\s*$/i}parseLine(e){if(!this.#t$&&""!==e){if(this.#tU.test(e)){let e=new tV({minCols:12,maxCols:40,maxRoomCols:10,minRows:12,maxRows:40,maxRoomRows:6});this.sceneDefn.mapDesign=e.generate(),this.#t$=!0,f.debug("Random map"),this.sceneDefn.mapDesign.forEach(e=>f.debug(e))}else this.sceneDefn.mapDesign.push(e)}}}function tJ(e,t,i){switch(e){case tX.HERO:return new tZ(c,t+1,i);case tX.LEVEL:return new tY(c,t+1,i);case tX.CAST:return new tq(c,t+1,i);case tX.MAP:return new tj(c,t+1,i)}return null}/**
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
 */const tQ="custom-pointer-down-event",t4="custom-pointer-up-event",t0="custom-pointer-cancel-event",t1="custom-click-event",t8="custom-pointer-drag-event",t2={MOUSE:0,TOUCH:1};function t3(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}function t7(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}function t5(e,t,i,r){r.actionStarted=!0,r.dragging=!1,r.distance=0,r.lastX=t,r.lastY=i,r.startX=t,r.startY=i,t3(r.element,tQ,{x:t,y:i})}function t6(e,t,i,r){let n=r.dragging?"custom-pointer-drag-end-event":t4;r.actionStarted=!1,r.dragging=!1,r.distance=0,r.lastX=t,r.lastY=i,r.startX=t,r.startY=i,t3(r.element,n,{x:t,y:i})}function t9(e,t,i,r){let n=t-r.lastX,s=i-r.lastY;if(r.lastX=t,r.lastY=i,r.dragging){let e=new CustomEvent(t8,{detail:{x:t,y:i,dx:n,dy:s}});r.element.dispatchEvent(e)}else(Math.abs(t-r.startX)>10||Math.abs(i-r.startY)>10)&&(r.dragging=!0,r.suppressClickEvent=!0)}var ie={};ie=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":97,"y":90,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":1,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":1,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":711,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":746,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":1,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":51,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":97,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":51,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":51,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":101,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":147,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-dead00.png","frame":{"x":197,"y":51,"w":48,"h":33},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":7,"w":48,"h":33},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle00.png","frame":{"x":817,"y":101,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle01.png","frame":{"x":101,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle02.png","frame":{"x":851,"y":150,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle03.png","frame":{"x":301,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e00.png","frame":{"x":1008,"y":1,"w":34,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":1,"w":34,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e01.png","frame":{"x":999,"y":99,"w":35,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":1,"w":35,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e02.png","frame":{"x":629,"y":101,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e03.png","frame":{"x":817,"y":51,"w":30,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":0,"w":30,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n00.png","frame":{"x":877,"y":199,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n01.png","frame":{"x":301,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n02.png","frame":{"x":877,"y":199,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n03.png","frame":{"x":587,"y":101,"w":40,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":40,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s00.png","frame":{"x":849,"y":50,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s01.png","frame":{"x":101,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s02.png","frame":{"x":849,"y":50,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s03.png","frame":{"x":448,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w00.png","frame":{"x":630,"y":51,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w01.png","frame":{"x":497,"y":51,"w":43,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w02.png","frame":{"x":958,"y":99,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w03.png","frame":{"x":672,"y":1,"w":37,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":37,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":868,"y":1,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-000.png","frame":{"x":301,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":349,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":397,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":445,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":493,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":541,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":589,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":637,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":685,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":733,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-000.png","frame":{"x":781,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-001.png","frame":{"x":829,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc-dead00.png","frame":{"x":147,"y":51,"w":48,"h":34},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":48,"h":34},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle00.png","frame":{"x":350,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle01.png","frame":{"x":351,"y":51,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle02.png","frame":{"x":397,"y":1,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle03.png","frame":{"x":350,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e00.png","frame":{"x":671,"y":51,"w":38,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":38,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e01.png","frame":{"x":711,"y":1,"w":36,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":36,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e02.png","frame":{"x":747,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e03.png","frame":{"x":631,"y":1,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n00.png","frame":{"x":495,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n01.png","frame":{"x":399,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n02.png","frame":{"x":448,"y":101,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n03.png","frame":{"x":589,"y":151,"w":40,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":40,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s00.png","frame":{"x":819,"y":1,"w":47,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":47,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s01.png","frame":{"x":400,"y":51,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s02.png","frame":{"x":819,"y":1,"w":47,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":47,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s03.png","frame":{"x":496,"y":101,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w00.png","frame":{"x":587,"y":51,"w":41,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":41,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w01.png","frame":{"x":543,"y":1,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w02.png","frame":{"x":446,"y":1,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w03.png","frame":{"x":543,"y":101,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":399,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"RIP.png","frame":{"x":251,"y":201,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"trader-dead00.png","frame":{"x":97,"y":51,"w":48,"h":37},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":5,"w":48,"h":37},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle-s03.png","frame":{"x":449,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle00.png","frame":{"x":916,"y":1,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle01.png","frame":{"x":542,"y":51,"w":43,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":43,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle02.png","frame":{"x":899,"y":148,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e00.png","frame":{"x":987,"y":148,"w":37,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":37,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e01.png","frame":{"x":945,"y":148,"w":40,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":40,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e02.png","frame":{"x":711,"y":51,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e03.png","frame":{"x":672,"y":151,"w":37,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n00.png","frame":{"x":912,"y":99,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n01.png","frame":{"x":587,"y":1,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n02.png","frame":{"x":944,"y":50,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n03.png","frame":{"x":631,"y":151,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s00.png","frame":{"x":865,"y":99,"w":45,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":45,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s01.png","frame":{"x":542,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s02.png","frame":{"x":897,"y":50,"w":45,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":45,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s03.png","frame":{"x":495,"y":1,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w00.png","frame":{"x":670,"y":101,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w01.png","frame":{"x":925,"y":197,"w":43,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":5,"y":1,"w":43,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w02.png","frame":{"x":990,"y":50,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w03.png","frame":{"x":970,"y":197,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader.png","frame":{"x":962,"y":1,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":151,"y":87,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":749,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":197,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":711,"y":101,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":151,"y":137,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":151,"y":187,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":201,"y":86,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":747,"y":101,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":781,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":782,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":784,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":247,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":782,"y":101,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":201,"y":136,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":816,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":201,"y":186,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":251,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":297,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":251,"y":101,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":251,"y":151,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":301,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":347,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1043,"h":248},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:9c3d04ae7c2053f1027d0287f237a716:e0f8f74e8d291f6c432336c55e023cb8:9c0fba27a8a0c106083a8713f6c67b32$"}}');var it={};function ii(e){if(ed.updateTimeNow(e),u){var t;let i=(e-u)/1e3;td.update(i),eo.showFps&&(t=1/i,es(J.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:J.getCanvasDimensions().height},{color:"green"}))}u=e,window.requestAnimationFrame(ii)}it=new URL("dungeon.9a2ec21c.png",import.meta.url).toString();var ir={TILE_SIZE:48,initialise:async function(e){J.setOptions(e),function(e){let t=0;for(let i in eZ){let r=e.measureText(eZ[i]),n=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,s=.5*n-r.fontBoundingBoxDescent;e.fillText(eZ[i],-.5*r.width,s),e.getImageData(0,0,1,1).data[3]<=0&&(f.debug(`Emoji ${i} not supported.`),eZ[i]=`[${t++}]`),e.clearRect(0,0,r.width,n)}}(J.getContext2D()),function(){let e;let t=J.getCanvas();e={element:t,actionStarted:!1,dragging:!1,x:0,y:0,lastTouchStartPoint:null,suppressClickEvent:!1},t.addEventListener("mousedown",t=>(f.debug("mousedown"),t5(t2.MOUSE,t.offsetX,t.offsetY,e)),{passive:!0}),t.addEventListener("mouseup",t=>(f.debug("mouseup"),t6(t2.MOUSE,t.offsetX,t.offsetY,e)),{passive:!0}),t.addEventListener("mousemove",t=>{f.debug("mousemove"),1&t.buttons&&t9(t2.MOUSE,t.offsetX,t.offsetY,e)},{passive:!0}),t.addEventListener("touchstart",t=>{if(f.debug("touchstart"),1===t.changedTouches.length){let i=t7(t);e.lastTouchStartPoint=new C(i.x,i.y),t5(t2.TOUCH,i.x,i.y,e)}},{passive:!0}),t.addEventListener("touchend",t=>{f.debug("touchend"),1===t.changedTouches.length&&t6(t2.TOUCH,e.lastTouchStartPoint?.x,e.lastTouchStartPoint?.y,e),e.lastTouchStartPoint=null,e.suppressClickEvent=!1},{passive:!0}),t.addEventListener("touchmove",t=>{if(f.debug("touchmove"),1===t.changedTouches.length){let i=t7(t);t9(t2.TOUCH,i.x,i.y,e),e.suppressClickEvent=!0}},{passive:!0}),t.addEventListener("touchcancel",t=>{var i,r;f.debug("touchcancel"),t2.TOUCH,i=e.lastTouchStartPoint?.x,r=e.lastTouchStartPoint?.y,e.actionStarted=!1,e.dragging=!1,e.distance=0,e.lastX=i,e.lastY=r,e.startX=i,e.startY=r,t3(e.element,t0,{x:i,y:r}),e.lastTouchStartPoint=null},{passive:!0}),t.addEventListener("click",i=>{f.debug("click"),e.suppressClickEvent||t3(t,t1,{x:i.offsetX,y:i.offsetY}),e.suppressClickEvent=!1}),t.addEventListener(t1,e=>{let t=e.detail.x,i=e.detail.y,r=J.uiCoordsToMappedPositions(t,i);eY.resolveClick(r)||en.resolveClick(r)}),t.addEventListener(tQ,e=>{let t=e.detail.x,i=e.detail.y,r=J.uiCoordsToMappedPositions(t,i);eY.resolvePointerDown(r)}),t.addEventListener(t4,e=>{let t=e.detail.x,i=e.detail.y,r=J.uiCoordsToMappedPositions(t,i);eY.resolvePointerUp(r)}),t.addEventListener(t0,e=>{let t=e.detail.x,i=e.detail.y,r=J.uiCoordsToMappedPositions(t,i);eY.resolvePointerCancel(r)}),t.addEventListener(t8,e=>{td.panCameraBy(-e.detail.dx,-e.detail.dy)}),t.addEventListener("contextmenu",e=>{f.debug("Context menu");let t=e.detail.x,i=e.detail.y,r=J.uiCoordsToMappedPositions(t,i);eY.resolveContextMenu(r)||en.resolveContextMenu(r),e.preventDefault()})}(),eB.showOkDialog("Welcome to the Scripted Dungeon","Let's start","door").then(()=>el.loadSpriteMap(m(ie),m(it))).then(()=>{var e;return e=ej.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(f.error(`Error fetching ${e}: ${t}`),null))}).then(e=>td.setSceneDefinitions(function(e){c=e.split(/\r?\n/),d=[];let t=new tF,i=tK.findFirstSection(c);if(!i)throw Error("Invalid script. No section identifiers found.");let r=tJ(i.nextSectionId,i.nextLineIndex,t);for(;r;){let e=r.parse();e?.nextSectionId&&e.nextSectionId!==tX.LEVEL||(d.push(t),t=new tF),r=e?tJ(e.nextSectionId,e.nextLineIndex,t):null}return d}(e))).then(()=>{}).then(()=>tR.triggerEvent(tR.EventId.MAIN_MENU)).then(()=>void window.requestAnimationFrame(ii)).catch(e=>{f.error(e),alert(`Fatal error in main game. ${e.message}`)})}};window.addEventListener("load",()=>{try{ir.initialise({width:800,height:600,maxScale:2.4,minScale:1,sizingMethod:"COVER",alpha:!1})}catch(e){f.fatal(e)}});
//# sourceMappingURL=index.c3bb878f.js.map
