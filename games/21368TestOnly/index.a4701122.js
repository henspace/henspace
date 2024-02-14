let e,t,i,r,o,n,s,a,h,l,c,d;function u(e){return e&&e.__esModule?e.default:e}/**
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
 */let m=[];window.addEventListener("error",e=>{alert(`ERROR: ${e.filename}; line ${e.lineno}
${e.message}
:Stack:
${e.error.stack}`)});var f={log:function(...e){console.log(...e)},info:function(...e){console.debug(...e)},debug:function(...e){console.debug(...e)},error:function(...e){console.error(...e),m=m.concat(e)},fatal:function(e){let t;console.error(e),t=e.message?`${e.message}
Stack:
${e.stack}`:e,alert(`Fatal error: ${t}
Previous errors:
${m.join("\n")}`),m.push(t)}};const p="'UnifrakturCook', cursive",w={normal:{size:15,fontName:"'UnifrakturCook', cursive"},h1:{size:30,fontName:p},h2:{size:22,fontName:p},h3:{size:18,fontName:p},emojiSprite:{size:18,fontName:"'UnifrakturCook', cursive"}};function g(e){let t=w[e]??w.normal;return`${t.size}px ${t.fontName}`}/**
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
 */const y={DEG_22_5:1/8*Math.PI,DEG_45:2/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_135:6/8*Math.PI,DEG_157_7:7/8*Math.PI};function x(e,t,i){return e<t?t:e>i?i:e}const S={NONE:-1,N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7};function T(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}function E(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}class v{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new v(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class P{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getCartesianDirection(){return Math.atan2(this.y,this.x)}getScreenDirection(){return Math.atan2(-this.y,this.x)}isZero(e){return Math.abs(this.x)<e&&Math.abs(this.y)<e}}class C extends v{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new C(e.x,e.y,0)}static copy(e){return new C(e.x,e.y,e.rotation)}getRelativeTo(e){return new C(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class M{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new v(this.x+this.width,this.y+this.height)}getTopLeft(){return new v(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new v(Number.MIN_VALUE,Number.MIN_VALUE),new v(Number.MAX_VALUE,Number.MAX_VALUE);let R=null,z=null,O=null,k=0,I=0,B=!0,b=null,A=null,L=null,_=new M(0,0,0,0),D=0,N=0,G=1,W=1,F=.1,H="COVER",$=new C(0,0,0);function U(){return{width:window.innerWidth,height:window.innerHeight}}function V(){let e=U(),t=O.width/O.height,i=0,r=0,o=e.width/e.height;("COVER"===H?t>o:t<o)?r=(i=e.height)*t:i=(r=e.width)/t,(G=r/O.width)>W?(r=(G=W)*O.width,i=G*O.height):G<F&&(r=(G=F)*O.width,i=G*O.height),D=(e.width-r)/2,N=(e.height-i)/2,z.style.left=`${D}px`,z.style.top=`${N}px`,z.style.width=`${r}px`,z.style.height=`${i}px`;let n=Math.min(e.width/G,r/G),s=Math.min(e.height/G,i/G);b=new M(.5*(O.width-n),.5*(O.height-s),n,s)}function K(){let e=U(),t=Math.max(parseInt(z.style.left),0),i=Math.max(parseInt(z.style.top),0),r=Math.min(parseInt(z.style.width),e.width),o=Math.min(parseInt(z.style.height),e.height);L.style.left=`${t}px`,L.style.top=`${i}px`,L.style.width=`${r}px`,L.style.height=`${o}px`,function(){let e=w.normal.size*G;document.documentElement.style.fontSize=`${e}px`}(),_=new M(t,i,r,o)}function X(){return z.getContext("2d",{alpha:B})}function Y(){let e=document.getElementById("glass-content");return L.style.opacity=0,new Promise(t=>{window.setTimeout(()=>{e.innerHTML="",L.style.display="none",t()},500)})}function Z(e){return new C(e.x+$.x,e.y+$.y,e.rotation)}window.addEventListener("resize",()=>{null===R&&(R=window.setTimeout(()=>{R=null,V(),K()},200))});var q={canvasPositionToWorld:Z,centreCanvasOn:function(e){$.x=e.x-k,$.y=e.y-I},clearCanvas:function(){X().clearRect(0,0,O.width,O.height)},displayOnGlass:function(e,t){let i=document.getElementById("glass-content");return i.replaceChildren(e),L.style.display="block",L.style.opacity=1,new Promise(e=>{t?t.forEach(t=>{t.element.addEventListener("click",()=>e(t.response))}):i.addEventListener("click",()=>e())}).then(()=>Y())},getCanvas:()=>z,getContext2D:X,getCanvasDimensions:function(){return{width:O.width,height:O.height}},getGlassRect:function(){return _},getVisibleCanvasBounds:function(){let e=(_.x-O.x)*G,t=(_.y-O.y)*G,i=e+_.width*G,r=t+_.height*G;return e=Math.max(e,O.x),new M(e,t=Math.max(t,O.y),(i=Math.min(i,O.x+O.width))-e,(r=Math.min(r,O.y+O.height))-t)},geWorldInCanvasBounds:function(){return new M($.x,$.y,O.width,O.height)},glassPositionToWorld:function(e){let t=e.x<0?b.x+b.width:b.x,i=e.y<0?b.y+b.height:b.y;return Z(new C(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(O)},isOnScreen:function(e){return e.overlaps(O)},panCamera:function(e,t){$.x+=e,$.y+=t},setOpacity:function(e){X().globalAlpha=e},setOptions:function(e){var t;if(z){f.error("Multiple calls to setScreen ignored.");return}A=document.getElementById("game-content"),t=e.width,w.normal.size=15+t/100*.390625,w.h1.size=2*w.normal.size,w.h2.size=1.5*w.normal.size,w.h3.size=1.2*w.normal.size,w.emojiSprite.size=t/10,(z=document.createElement("canvas")).setAttribute("width",e.width),z.setAttribute("height",e.height),z.innerText="Loading the app.",O=new M(0,0,e.width,e.height),k=e.width/2,I=e.height/2,A.appendChild(z),W=e.maxScale,F=e.minScale,H=e.sizingMethod,B=e.alpha,V(),function(){(L=document.createElement("div")).id="glass",A.appendChild(L),L.style.display="none";let e=document.createElement("div");e.id="glass-content",L.appendChild(e)}(),K()},wipeGlass:Y,worldPositionToCanvas:function(e){return new C(e.x-$.x,e.y-$.y,e.rotation)},worldToUi:function(e){return e*G},uiCoordsToMappedPositions:function(e,t){return{canvas:new C(Math.round(e/=G),Math.round(t/=G)),world:new C(Math.round(e+$.x),Math.round(t+$.y),-$.rotation)}},uiToWorld:function(e){return e/G}};const j=new Map,J=new Map;function Q(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),j.delete(t)}function ee(e){f.debug("Remove passive sprite."),J.delete(e)}function et(){e=null}var ei={addActor:function(t){j.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){J.set(e,e)},clearAll:function(){j.forEach(e=>Q(e)),J.forEach(e=>ee(e)),et()},getActors:function(){return j},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():q.getCanvasDimensions()},removeTileMap:et,resolveCancel:function(e){return!1},resolveClick:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},resolveContextMenu:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionContextClick(t.world),!0)},removeActor:Q,removePassiveSprite:ee,setTileMap:function(t){e=t},update:function(t){e?.update(t),j.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let o=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,o)}),J.forEach(e=>e.update(t))}};function er(e,t,i,r){if(e.font=g(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var o=t.split("\n");for(let t=0;t<o.length;t++)r.y=function(e,t,i,r){let o;let n=t.split(" "),s=i.x??0,a=i.y??0,h=r.xWrapPosition-s,l=r.lineSpacing??1,c="";for(let t=0;t<n.length;t++){let i=c+n[t]+" ",r=/**
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
 */let en=[];function es(e){return new Promise(t=>{let i=new Image;i.addEventListener("load",()=>{f.debug("Image loaded."),t(i)}),i.src=e})}var ea={getSpriteBitmap:function(e,t){let i=en[e].get(t);return i||f.debug(`Failed to find image ${t} at index ${e}`),i},loadImage:es,loadImages:function(e){let t=[];return e.forEach(e=>t.push(es(e))),Promise.all(t)},loadSpriteMap:function(e,t){return es(t).then(t=>(function(e,t){let i=[],r=new Map;return en.push(r),e.frames.forEach(e=>{i.push(createImageBitmap(t,e.frame.x,e.frame.y,e.frame.w,e.frame.h).then(t=>{let i={image:t,width:e.frame.w,height:e.frame.h,centreX:e.sourceSize.w/2-e.spriteSourceSize.x,centreY:e.sourceSize.h/2-e.spriteSourceSize.y};return r.set(e.filename,i),e.filename}))}),Promise.all(i)})(e,t))}};/**
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
 */let eh=0;var el={updateTimeNow:function(e){eh=e},getFrameCount:function(e){return Math.floor(eh/e)}};/**
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
 */const ec={WRAP:0,REVERSE:1,STOP:2};class ed{#e;#t;#i;#r;#o;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#o=0}get index(){return this.#o}set index(e){this.#o=x(e,0,this.#e-1)}advanceBy(e){if(this.#e<1)return this.#o;switch(this.#i){case ec.WRAP:return this.#n(e);case ec.REVERSE:return this.#s(e);case ec.NONE:default:return this.#a(e)}}#n(e){return e%=this.#e,this.#o+=e%this.#e,this.#o>=this.#e&&(this.#o=this.#o-this.#e),this.#o}#s(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#o+=e;let t=this.#o-this.#t;t>0&&(this.#o=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#o-=e,this.#o<0&&(this.#o=-this.#o,this.#r=1));return this.#o}#a(e){return this.#r>0?this.#o=Math.min(this.#t,this.#o+e):this.#r<0&&(this.#o=Math.max(0,this.#o-e)),this.#o}}class eu{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,"string"==typeof t){this.#h.push(ea.getSpriteBitmap(e,t));return}this.#d=Math.max(1,i.framePeriodMs);let o=t.startIndex??0,n=t.padding??0;do{let i=`${t.prefix}${o.toString().padStart(n,"0")}${t.suffix}`;(r=ea.getSpriteBitmap(e,i))&&this.#h.push(r),o++}while(r)this.#l=new ed(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(!(this.#h.length>1))return this.#h[0];if(this.playing){let e=el.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.#h.length>1&&(this.playing=!1,this.#l.index=e)}getCurrentIndex(){return this.#h.length>1?this.#l.index:0}}class em{#u;#m;constructor(e,t){this.#u={},this.#u[e]=t,this.#m=t}get image(){return this.#m}addAnimatedImage(e,t){this.#u[e]=t}setCurrentKey(e){this.#u.hasOwnProperty(e)?this.#m=this.#u[e]:f.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#m.getCurrentFrame()}}class ef{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new M(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=q.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),eo.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){f.error("_doRender method should be overridden.")}isOnScreen(e){let t=new M(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return q.isOnScreen(t)}isOnCanvas(e){let t=new M(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return q.isOnCanvas(t)}}class ep extends ef{#f;#p;#w;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#f=i}#g(e){this._context.font=g(this.#f);let t=this._context.measureText(e);this.#w={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#p=e}_doRender(e){var t;this.text!==this.#p&&this.#g(this.text);let i={x:e.x+this.#w.origin.x,y:e.y+this.#w.origin.y,rotation:e.rotation};er(this._context,this.#p,i,{styleName:this.#f}),this._boundingBoxCanvas=(t=this.#w,new M(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class ew extends ef{#y;#x;#S;#T;#E;#v;constructor(e,t){super(e),this.#y=t.width??10,this.#x=t.height??10,this.#S=this.#y/2,this.#T=this.#x/2,this.#E=t.fillStyle,this.#v=t.strokeStyle}_doRender(e){let t=e.x-this.#S,i=e.y-this.#T;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(t,i,this.#y,this.#x)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(t,i,this.#y,this.#x)),this._boundingBoxCanvas=new M(t,i,this.#y,this.#x)}}class eg extends ef{#x;#T;#y;#S;#E;#v;#P;#C;#M;#R;constructor(e,t){super(e),this.#x=t.height,this.#T=this.#x/2,this.#y=t.width,this.#S=this.#y/2,this.#E=t.fillStyle,this.#v=t.strokeStyle,this.#P=t.offsetX??0,this.#C=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#M=Math.min(e,1)*this.#x,this.#R=.5*this.#M}_doRender(e){let t=e.y-this.#T+this.#C,i=e.y+this.#T-this.#M+this.#C,r=e.x-this.#S+this.#P;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(r,i,this.#y,this.#M)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(r,t,this.#y,this.#x)),this._boundingBoxCanvas=new M(r,t,this.#y,this.#x)}}class ey extends ef{#z;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){f.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#z=[];let r=t.tileSize/i,o=-t.tileSize/2+r/2;for(let n=0;n<i;n++)this.#z.push(new eg(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[n],strokeStyle:t.strokeStyles?.[n],offsetX:o+r*n,offsetY:0}))}setLevel(e,t){this.#z[e]?.setLevel(t)}render(e){this.#z?.forEach(t=>t.render(e))}}class ex extends ef{#O;#k;constructor(e,t){super(e),t?.getCurrentFrame?(this.#k=t,this.#O=this.#k.getCurrentFrame()):this.#O=t,this.#O?(this._boundingBoxCanvas.width=this.#O?.width??0,this._boundingBoxCanvas.height=this.#O?.height??0):f.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#O)return;let t=this.#k?this.#k.getCurrentFrame():this.#O;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}class eS{#I=new C(0,0,0);#B=new P(0,0,0);#b;#A;modifier;visible;opacity;constructor(e){this.#b=e?.renderer,this.#A=Array.isArray(this.#b),this.visible=!0,this.opacity=1}get position(){return this.#I}set position(e){this.#I.x=this.valueOrZero(e.x),this.#I.y=this.valueOrZero(e.y),this.#I.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#B}set velocity(e){this.#B.x=this.valueOrZero(e.x),this.#B.y=this.valueOrZero(e.y),this.#B.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#L()}#L(){this.#b&&(this.#b.forEach?this.#b.forEach(e=>e.render(this.#I,this.opacity)):this.#b.render(this.#I,this.opacity))}getBoundingBox(){let e=this.#b.getBoundingBoxCanvas();return new M(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class eT{decoratedModifier;#_;#D;#N;constructor(e){this.#D=0,this.#N=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#N=t,new Promise(t=>{this.#_=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#_&&(this.#D+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#D>this.#N?(this.#_?.(null),null):i}doUpdate(e,t){return f.error("doUpdate should be overridden."),this}}class eE extends eT{#G;constructor(e,t){super(t),this.#G=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#G),e.opacity>0?this:null}}/**
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
 */class ev extends eT{#W;#F;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class eP extends eT{#H;#$;#U;constructor(e,t){super(t),this.#H=e.prey,this.#$=e.maxSeparation,this.#U=e.speed}doUpdate(e,t){let i=this.#H.position,r=e.position;if(!r.withinSquare(i,this.#$)){let o=r.getCartesianAngleTo(i);e.velocity.x=this.#U*Math.cos(o),e.velocity.y=this.#U*Math.sin(o);let n=e.velocity.x*t,s=e.velocity.y*t;e.position.x+=this.getMinMove(n,i.x,r.x),e.position.y+=this.getMinMove(s,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class eC extends eT{#V;#o;#K;#U;constructor(e,t){super(t),this.#V=e.path,this.#o=0,this.#K=e.path[0],this.#U=e.speed}doUpdate(e,t){let i=e.position,r=i.getCartesianAngleTo(this.#K);e.velocity.x=this.#U*Math.cos(r),e.velocity.y=this.#U*Math.sin(r);let o=e.velocity.x*t,n=e.velocity.y*t;if(i.x+=this.getMinMove(o,this.#K.x,i.x),i.y+=this.getMinMove(n,this.#K.y,i.y),i.isCoincident(this.#K)){if(++this.#o>=this.#V.length)return e.velocity.x=0,e.velocity.y=0,this.decoratedModifier;this.#K=this.#V[this.#o]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}function eM(e,t){let i=new eS({renderer:e});i.position=t.position,i.velocity=t.velocity,ei.addPassiveSprite(i),new eE(t.lifetimeSecs,new ev).applyAsTransientToSprite(i,20).then(()=>ei.removePassiveSprite(i))}function eR(e,t){eM(new ep(q.getContext2D(),e),t)}/**
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
 */function ez(e=6){return E(1,e)}function eO(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var ek={showMessage:function(e){let t=eO(e);q.displayOnGlass(t)},showOkDialog:function(e,t="OK"){let i=document.createElement("div");i.appendChild(eO(e));let r=document.createElement("button");return r.appendChild(document.createTextNode(t)),i.appendChild(r),q.displayOnGlass(i,[{element:r,response:0}])}};class eI{actor;constructor(e){this.actor=e}enact(e){return Promise.resolve()}react(e){return Promise.resolve()}allowEscape(e){return!0}}class eB extends eI{constructor(e){super(e)}enact(e){return this.#X(this.actor,e)}react(e){return this.#X(e,this.actor)}allowEscape(e){return this.actor,ez(20)>10||(eR("Failed to run.",{lifetimeSecs:2,position:e.position,velocity:new P(0,-100,0)}),!1)}#Y(e,t){let i=v.copy(e.position);return new eC({path:[new v(e.position.x+.2*(t.position.x-e.position.x),e.position.y+.2*(t.position.y-e.position.y)),i],speed:100}).applyAsTransientToSprite(e.sprite)}#Z(e,t){return new Promise(e=>{var i,r;if(ez(20)>10)i=ea.getSpriteBitmap(0,"blood-splat.png"),r={lifetimeSecs:1,position:t.position,velocity:new P(0,0,0)},eM(new ex(q.getContext2D(),i),r);else{eR("Missed",{lifetimeSecs:2,position:t.position,velocity:new P(0,-100,0)}),e();return}let o=t.traits.get("HP"),n=ez(6);o=Math.max(0,o-n),t.traits.set("HP",o),0===o?(f.info("Killed actor."),t.interaction=new eb,t.alive=!1):eR(`-${n} HP`,{lifetimeSecs:2,position:t.position,velocity:new P(0,-200,0)}),e(o)})}#X(e,t){return this.#Y(e,t).then(()=>this.#Z(e,t))}}class eb extends eI{constructor(e){super(e)}react(e){return ek.showOkDialog("A bit macabre, but you're trying to search a corpse. I haven't written the code yet.")}}class eA extends eI{constructor(e){super(e)}react(e){return ek.showOkDialog("Time to trade. I haven't written the code yet.")}}/**
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
 */class eL{#q;#j;#J;#Q;setOnClick(e){this.#q=e}setOnContextClick(e){this.#j=e}setOnPointerDown(e){this.#J=e}setOnPointerUp(e){this.#Q=e}actionClick(e){this.#q?.(this,e)}actionContextClick(e){this.#j?.(this,e)}actionPointerDown(e){this.#J?.(this,e)}actionPointerUp(e){this.#Q?.(this,e)}}class e_ extends eL{maxTilesPerMove;sprite;traits;interaction;alive;constructor(e){super(),this.interaction=new eI,this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4,this.alive=!0}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}isWandering(){return this?.traits.get("MOVE")==="wander"}isPassableByActor(e){return!this.alive||!this.obstacle}canShareLocationWithActor(e){return!this.obstacle}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}const eD=new Map;let eN=!1;function eG(e,t){let i=q.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new M(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}function eW(e){if(!eN||!eN)return!1;for(let[t,i]of eD)if(eG(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1}var eF={addButton:function(e,t,i){let r=new e_(new eS({renderer:new ex(q.getContext2D(),e)}));return eD.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),e.setCurrentIndex(0),r},addMomentaryButton:function(e,t,i){let r=new e_(new eS({renderer:new ex(q.getContext2D(),e)}));return eD.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){eD.clear()},removeButton:function(e){eD.delete(e)},update:function(e){eN&&eD.forEach(t=>{let i=C.copy(t.position);t.position=q.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolvePointerCancel:function(e){return eW(e)},resolveClick:function(e){if(!eN)return!1;for(let[t,i]of eD)if(eG(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolveContextMenu:function(e){return!1},resolvePointerDown:function(e){if(!eN||!eN)return!1;for(let[t,i]of eD)if(eG(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:eW,setVisible:function(e){eN=e}};/**
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
 */const eH={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
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
 */var e$={};e$=new URL("dungeon_script.1e174dd4.txt",import.meta.url).toString();const eU={DUNGEON_SCRIPT:new URL(e$)},eV={DEAD:{keyName:"DEAD",suffix:"dead",options:{framePeriodMs:100,loopMethod:ec.STOP}},IDLE:{keyName:"IDLE",suffix:"idle",options:{framePeriodMs:300,loopMethod:ec.REVERSE}},WALK_NORTH:{keyName:"WALK_N",suffix:"walk-n",options:{framePeriodMs:100,loopMethod:ec.REVERSE}},WALK_EAST:{keyName:"WALK_E",suffix:"walk-e",options:{framePeriodMs:100,loopMethod:ec.REVERSE}},WALK_SOUTH:{keyName:"WALK_S",suffix:"walk-s",options:{framePeriodMs:100,loopMethod:ec.REVERSE}},WALK_WEST:{keyName:"WALK_W",suffix:"walk-w",options:{framePeriodMs:100,loopMethod:ec.REVERSE}}};var eK={definitions:eV,formFrameNameRoot:function(e,t){let i=eV[e]?.suffix;if(!i)throw Error(`Attempt made to use invalid standard animation key of '${e}'`);return`${t}-${i}`}};class eX extends ey{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}class eY extends em{#ee;#et;#ei;constructor(e,t){super(e,t),this.#et=S.NONE}setActor(e){this.#ee=e,this.#ei=this.#ee.alive}getCurrentFrame(){let e=this.#er();return(e!==this.#et||this.#ei!=this.#ee?.alive)&&(this.#et=e,this.#ei=this.#ee?.alive,this.#eo()),super.getCurrentFrame()}#er(){return!this.#ee||this.#ee.velocity.isZero(.1)?S.NONE:function(e){let t=Math.abs(e);return t<=y.DEG_45?S.E:t<=y.DEG_135?Math.sign(e)>0?S.N:S.S:S.W}(this.#ee.velocity.getScreenDirection())}#eo(){if(!this.#ee.alive)return this.setCurrentKey(eK.definitions.DEAD.keyName);switch(this.#et){case S.NONE:this.setCurrentKey(eK.definitions.IDLE.keyName);break;case S.E:this.setCurrentKey(eK.definitions.WALK_EAST.keyName);break;case S.N:case S.NW:case S.NE:this.setCurrentKey(eK.definitions.WALK_NORTH.keyName);break;case S.W:this.setCurrentKey(eK.definitions.WALK_WEST.keyName);break;default:this.setCurrentKey(eK.definitions.WALK_SOUTH.keyName)}}}function eZ(e){let t=function(e){let t=new eY("still",new eu(0,`${e}.png`));for(let i in eK.definitions){let r=eK.definitions[i];t.addAnimatedImage(eK.definitions[i].keyName,new eu(0,{prefix:eK.formFrameNameRoot(i,e),suffix:".png",startIndex:0,padding:2},r.options))}return t.setCurrentKey(eK.definitions.IDLE.keyName),t}(e),i=new ex(q.getContext2D(),t),r=new eX(q.getContext2D(),{tileSize:ei.getTileMap().getGridSize()-2,fillStyles:["rgba(255, 0, 0, 0.2)","rgba(0, 0, 255, 0.2)"],strokeStyles:[]}),o=new e_(new eS({renderer:[r,i]}));return t.setActor(o),r.actor=o,o.position=new C(48,48,0),o.velocity={x:0,y:0,rotation:.1},o}const eq=new Map([["HERO",{create:()=>eZ("hero")}],["MONSTER",{create:()=>(function(e){let t=eZ("orc");return t.interaction=new eB(t),t})(0)}],["TRADER",{create:()=>(function(e){let t=eZ(e);return t.interaction=new eA(t),t})("trader")}]]);/**
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
 */var ej={};ej=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":97,"y":90,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":1,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":1,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":711,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":746,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":1,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":51,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":97,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":51,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":51,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":101,"y":95,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":147,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-dead00.png","frame":{"x":197,"y":51,"w":48,"h":33},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":7,"w":48,"h":33},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle00.png","frame":{"x":817,"y":101,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle01.png","frame":{"x":101,"y":145,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle02.png","frame":{"x":851,"y":150,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-idle03.png","frame":{"x":301,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e00.png","frame":{"x":1008,"y":1,"w":34,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":1,"w":34,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e01.png","frame":{"x":999,"y":99,"w":35,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":1,"w":35,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e02.png","frame":{"x":629,"y":101,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-e03.png","frame":{"x":817,"y":51,"w":30,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":10,"y":0,"w":30,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n00.png","frame":{"x":877,"y":199,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n01.png","frame":{"x":301,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n02.png","frame":{"x":877,"y":199,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-n03.png","frame":{"x":587,"y":101,"w":40,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":40,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s00.png","frame":{"x":849,"y":50,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s01.png","frame":{"x":101,"y":195,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s02.png","frame":{"x":849,"y":50,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-s03.png","frame":{"x":448,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w00.png","frame":{"x":630,"y":51,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w01.png","frame":{"x":497,"y":51,"w":43,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w02.png","frame":{"x":958,"y":99,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hero-walk-w03.png","frame":{"x":672,"y":1,"w":37,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":37,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":868,"y":1,"w":46,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-000.png","frame":{"x":301,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":349,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":397,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":445,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":493,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":541,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":589,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":637,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":685,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":733,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-000.png","frame":{"x":781,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-001.png","frame":{"x":829,"y":201,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc-dead00.png","frame":{"x":147,"y":51,"w":48,"h":34},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":11,"w":48,"h":34},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle00.png","frame":{"x":350,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle01.png","frame":{"x":351,"y":51,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle02.png","frame":{"x":397,"y":1,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-idle03.png","frame":{"x":350,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e00.png","frame":{"x":671,"y":51,"w":38,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":38,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e01.png","frame":{"x":711,"y":1,"w":36,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":36,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e02.png","frame":{"x":747,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-e03.png","frame":{"x":631,"y":1,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n00.png","frame":{"x":495,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n01.png","frame":{"x":399,"y":101,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n02.png","frame":{"x":448,"y":101,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-n03.png","frame":{"x":589,"y":151,"w":40,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":40,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s00.png","frame":{"x":819,"y":1,"w":47,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":47,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s01.png","frame":{"x":400,"y":51,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s02.png","frame":{"x":819,"y":1,"w":47,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":47,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-s03.png","frame":{"x":496,"y":101,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w00.png","frame":{"x":587,"y":51,"w":41,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":41,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w01.png","frame":{"x":543,"y":1,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w02.png","frame":{"x":446,"y":1,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc-walk-w03.png","frame":{"x":543,"y":101,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":399,"y":151,"w":47,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":47,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"RIP.png","frame":{"x":251,"y":201,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"trader-dead00.png","frame":{"x":97,"y":51,"w":48,"h":37},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":5,"w":48,"h":37},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle-s03.png","frame":{"x":449,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle00.png","frame":{"x":916,"y":1,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle01.png","frame":{"x":542,"y":51,"w":43,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":43,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-idle02.png","frame":{"x":899,"y":148,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e00.png","frame":{"x":987,"y":148,"w":37,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":37,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e01.png","frame":{"x":945,"y":148,"w":40,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":40,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e02.png","frame":{"x":711,"y":51,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-e03.png","frame":{"x":672,"y":151,"w":37,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n00.png","frame":{"x":912,"y":99,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n01.png","frame":{"x":587,"y":1,"w":42,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":0,"w":42,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n02.png","frame":{"x":944,"y":50,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-n03.png","frame":{"x":631,"y":151,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s00.png","frame":{"x":865,"y":99,"w":45,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":45,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s01.png","frame":{"x":542,"y":151,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":0,"w":45,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s02.png","frame":{"x":897,"y":50,"w":45,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":45,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-s03.png","frame":{"x":495,"y":1,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w00.png","frame":{"x":670,"y":101,"w":39,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":0,"w":39,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w01.png","frame":{"x":925,"y":197,"w":43,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":5,"y":1,"w":43,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w02.png","frame":{"x":990,"y":50,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader-walk-w03.png","frame":{"x":970,"y":197,"w":39,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":9,"y":1,"w":39,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"trader.png","frame":{"x":962,"y":1,"w":44,"h":47},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":1,"w":44,"h":47},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":151,"y":87,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":749,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":197,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":711,"y":101,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":151,"y":137,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":151,"y":187,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":201,"y":86,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":747,"y":101,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":781,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":782,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":784,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":247,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":782,"y":101,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":201,"y":136,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":816,"y":151,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":201,"y":186,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":251,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":297,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":251,"y":101,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":251,"y":151,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":301,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":347,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1043,"h":248},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:9c3d04ae7c2053f1027d0287f237a716:e0f8f74e8d291f6c432336c55e023cb8:9c0fba27a8a0c106083a8713f6c67b32$"}}');var eJ={};/**
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
 */function eQ(e,t,i){return{centre:e[t]?.[i],tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}function e4(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]];return e}eJ=new URL("dungeon.9a2ec21c.png",import.meta.url).toString();const e0={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},e1={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},e8={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};class e2{matrix;entryPointByDoor;exitPointByDoor;constructor(){this.entryPointByDoor=new v(0,0),this.exitPointByDoor=new v(0,0)}static generateTileMapPlan(e,t){let i=new e2,r=i.convertToMatrix(e);return r=i.clarifyMatrix(r),i.createPlan(r,t),i}convertToMatrix(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}clarifyMatrix(e){let t=[];return e.forEach((i,r)=>{let o=[];t.push(o),i.forEach((t,i)=>{var n,s,a,h;let l;let c=eQ(e,r,i);(n=t,e0.VOID.includes(n))?t=" ":e5(t)?(s=t,e6(c.above)&&(e6(c.tl)?s+=e8.BELOW_WALL:s+=e8.BELOW_END_WALL),a=t=s,e3(c.left)||e3(c.above)||e3(c.right)||e3(c.below))?this.entryPointByDoor=new v(i,r):(e7(c.right)||e7(c.below)||e7(c.left)||e7(c.above))&&(this.exitPointByDoor=new v(i,r)):e6(t)&&(l=h=t,e6(c.above)&&e6(c.right)&&e6(c.below)&&e6(c.left)?l+=e1.INTERNAL_CROSS:e5(c.left)&&e5(c.right)?l+=e1.INTERNAL_VERTICAL:e5(c.above)&&e5(c.below)?l+=e1.INTERNAL_HORIZONTAL:e6(c.left)&&e6(c.right)&&e6(c.below)?l+=e1.TOP_TEE:e6(c.above)&&e6(c.below)&&e6(c.left)?l+=e1.RIGHT_TEE:e6(c.left)&&e6(c.right)&&e6(c.above)?l+=e1.BOTTOM_TEE:e6(c.above)&&e6(c.below)&&e6(c.right)?l+=e1.LEFT_TEE:e6(c.right)&&e6(c.below)?l+=e5(c.br)?e1.TOP_LEFT:e1.TOP_LEFT_INTERNAL:e6(c.left)&&e6(c.below)?l+=e5(c.bl)?e1.TOP_RIGHT:e1.TOP_RIGHT_INTERNAL:e6(c.left)&&e6(c.above)?l+=e5(c.tl)?e1.BOTTOM_RIGHT:e1.BOTTOM_RIGHT_INTERNAL:e6(c.right)&&e6(c.above)?l+=e5(c.tr)?e1.BOTTOM_LEFT:e1.BOTTOM_LEFT_INTERNAL:e6(c.above)&&e6(c.below)?l+=e5(c.right)?e1.LEFT:e1.RIGHT:e6(c.right)&&e6(c.left)&&(l+=e5(c.below)?e1.TOP:e1.BOTTOM),t=e6(c.above)?l+e8.BELOW_WALL:l),o.push(t)})}),t}createPlan(e,t){let i=[];e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),o=i.get(t);if(!o&&r[2]&&r[3]&&(o=i.get(`${r[1]}${r[2]}`)),!o&&r[2]&&(o=i.get(r[1])),!o){let o=function(e){for(let t in e0)if(e0[t].includes(e))return e0[t][0];return null}(r[1]);if(o&&o!==r[1]){var n,s;let t;return e((n=r[2],s=r[3],t=o,n&&(t+=n),s&&(t+=s),t),i)}f.error(`Failed to find symbol for ${t}`)}return o}(e,t))})}),this.matrix=i}}function e3(e){return e0.DOOR_IN.includes(e)}function e7(e){return e0.DOOR_OUT.includes(e)}function e5(e){return e0.GROUND.includes(e)}function e6(e){var t;return e0.WALL.includes(e)||e3(t=e)||e7(t)}/**
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
 */class e9{#en;#es;constructor(e){this.#es=e,this.#en=new Map}setRouteToCoords(e,t,i){this.#en.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#en.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#en.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new v(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#en.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#en.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#es.gridPointToWorldPoint(e)):t}}class te{actor;#en;#es;#ea;constructor(e,t){this.#es=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#eh(e,t);if(r.coincident(e))return[];this.#es.canGridPointBeOccupiedByActor(r,this.actor)||(r=this.#el(r,t));let o=[],n=Math.sign(r.x-e.x),s=Math.sign(r.y-e.y),a=v.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=v.copy(a),c=!1;if(h&&0!==n&&a.x!=r.x?(t.x+=n,c=!0):h||0===s||a.y==r.y||(t.y+=s,c=!0),c=c&&this.#es.canGridPointBeOccupiedByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||o.push(this.#es.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||o.push(this.#es.gridPointToWorldPoint(a)),o}getAllRoutesFrom(e,t){return this.#en=new e9(this.#es),this.#ea=e,this.#ec(e.x,e.y,t,null),this.#en}#ec(e,t,i,r){if(r){if(e===this.#ea.x&&t===this.#ea.y||!this.#ed(e,t))return;let o=this.#en.getRouteToCoords(e,t);if(o&&!(r.length<o.length-1))return;r.push(new v(e,t)),this.#eu(e,t)&&this.#en.setRouteToCoords(r,e,t),i--}else r=[new v(e,t)];i>0&&(this.#ec(e,t-1,i,[...r]),this.#ec(e+1,t,i,[...r]),this.#ec(e,t+1,i,[...r]),this.#ec(e-1,t,i,[...r]))}#ed(e,t){return this.#es.isGridPointPassableByActor(new v(e,t),this.actor)}#eu(e,t){return this.#es.canGridPointBeOccupiedByActor(new v(e,t),this.actor)}#eh(e,t){let i=t.x-e.x,r=t.y-e.y,o=t.x,n=t.y;return Math.abs(i)>Math.abs(r)?o-=Math.sign(i):n-=Math.sign(r),new v(o,n)}#el(e,t){return e.x===t.x&&e.y<t.y?new v(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new v(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new v(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new v(e.x+1,e.y-1):e}}class tt{#ee;#em;#es;#ef;#ep;#ew;#eg;constructor(e,t){this.#es=e,this.#ee=t}findReachedTiles(){return this.#em=this.#es.worldPointToGrid(this.#ee.position),this.#ew=this.#es.getVisibleGridPointRect(),this.#ep&&this.#ep.coincident(this.#em)&&this.#ew&&this.#ew.equals(this.#eg)||(this.#ef=new Map,this.#ef.set(this.#em.toString(),this.#em),this.#ey().forEach(e=>{this.#ex(e)}),this.#ep=this.#em,this.#eg=this.#ew),this.#ef}isGridPointInRays(e){return!!this.#ef&&this.#ef.has(e.toString())}#ey(){let e=[];for(let t=this.#ew.x;t<=this.#ew.x+this.#ew.width;t++)e.push(new v(t,this.#ew.y)),e.push(new v(t,this.#ew.y+this.#ew.height));for(let t=this.#ew.y+1;t<=this.#ew.y+this.#ew.height-1;t++)e.push(new v(this.#ew.x,t)),e.push(new v(this.#ew.x+this.#ew.width,t));return e}#ex(e){let t,i,r;let o=function(e){let t=Math.abs(e);return t<=y.DEG_22_5?S.E:t<=y.DEG_67_5?Math.sign(e)>0?S.NE:S.SE:t<=y.DEG_112_5?Math.sign(e)>0?S.N:S.S:t<=y.DEG_157_7?Math.sign(e)>0?S.NW:S.SW:S.W}(this.#em.getScreenAngleTo(e));Math.abs(e.x-this.#em.x)>=Math.abs(e.y-this.#em.y)?(t=Math.sign(e.x-this.#em.x),i=(r=Math.abs(e.x-this.#em.x))<1?0:(e.y-this.#em.y)/r):(i=Math.sign(e.y-this.#em.y),t=(r=Math.abs(e.y-this.#em.y))<1?0:(e.x-this.#em.x)/r);let n=this.#em.x,s=this.#em.y,a=!0;for(;r>=0;){let e=new v(Math.round(n),Math.round(s));if(a||this.#es.isSeeThrough(e,this.#ee))this.#eS(e,o);else break;a=!1,n+=t,s+=i,r--}}#eS(e,t){switch(this.#ef.set(e.toString(),e),t){case S.N:this.#eT(new v(e.x-1,e.y-1)),this.#eT(new v(e.x,e.y-1)),this.#eT(new v(e.x+1,e.y-1));break;case S.NE:this.#eT(new v(e.x,e.y-1)),this.#eT(new v(e.x+1,e.y-1)),this.#eT(new v(e.x+1,e.y));break;case S.E:this.#eT(new v(e.x+1,e.y-1)),this.#eT(new v(e.x+1,e.y)),this.#eT(new v(e.x+1,e.y+1));break;case S.SE:this.#eT(new v(e.x+1,e.y)),this.#eT(new v(e.x+1,e.y+1)),this.#eT(new v(e.x,e.y+1));break;case S.S:this.#eT(new v(e.x-1,e.y+1)),this.#eT(new v(e.x,e.y+1)),this.#eT(new v(e.x+1,e.y+1));break;case S.SW:this.#eT(new v(e.x-1,e.y)),this.#eT(new v(e.x-1,e.y+1)),this.#eT(new v(e.x,e.y+1));break;case S.W:this.#eT(new v(e.x-1,e.y-1)),this.#eT(new v(e.x-1,e.y)),this.#eT(new v(e.x-1,e.y+1));break;case S.NW:this.#eT(new v(e.x-1,e.y)),this.#eT(new v(e.x-1,e.y-1)),this.#eT(new v(e.x,e.y-1))}}#eT(e){this.#es.isSeeThrough(e)||this.#ef.set(e.toString(),e)}}/**
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
 */const ti={OFF:0,HERO:1,VELOCITY:2};class tr{#eE;#ev;#eP;#eC;constructor(e,t,i=0){let r=q.getCanvasDimensions(),o=i*Math.min(r.width,r.height);this.#eE=new eS,this.#ev=new eP({prey:e,speed:t,maxSeparation:o}),this.#eP=new ev,this.#ev.applyAsContinuousToSprite(this.#eE)}update(e){this.#eC!==ti.OFF&&(this.#eE.update(e),q.centreCanvasOn(this.#eE.position))}setVelocity(e,t){this.setTrackingMethod(ti.VELOCITY),this.#eE.velocity.x=e,this.#eE.velocity.y=t}setTrackingMethod(e){if(e!==this.#eC)switch(this.#eC=e,e){case ti.HERO:this.#ev.applyAsContinuousToSprite(this.#eE);break;case ti.VELOCITY:this.#eP.applyAsContinuousToSprite(this.#eE);break;case ti.OFF:break;default:f.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const to={TR:0,BR:1,BL:2,TL:3};class tn{#eM;#eR;#ez;constructor(e,t,i){this.#eM=e,this.#eO(t,i)}#eO(e,t){let i,r;switch(t){case to.TL:i=2*e,r=2*e;break;case to.TR:i=-2*e,r=2*e;break;case to.BR:i=-2*e,r=-2*e;break;case to.BL:i=2*e,r=-2*e}this.#ek(i,r),this.#eI(i,r,e)}#ek(e,t){this.#ez=new eu(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ec.STOP}),this.#eR=eF.addButton(this.#ez,()=>{this.#eB(!0)},()=>{this.#eB(!1)}),this.#eR.position.x=e,this.#eR.position.y=t,this.#eR.actionClick(null)}#eB(e){e?(this.#ez.setCurrentIndex(1),this.#eM.setTrackingMethod(ti.HERO)):(this.#ez.setCurrentIndex(0),this.#eM.setTrackingMethod(ti.OFF))}#eI(e,t,i){let r=3*i;this.#eb("hud-arrow-up-",e,t-i,()=>{this.#eB(!1),this.#eM.setVelocity(0,-r)},()=>this.#eM.setTrackingMethod(ti.OFF)),this.#eb("hud-arrow-right-",e+i,t,()=>{this.#eB(!1),this.#eM.setVelocity(r,0)},()=>this.#eM.setTrackingMethod(ti.OFF)),this.#eb("hud-arrow-down-",e,t+i,()=>{this.#eB(!1),this.#eM.setVelocity(0,r)},()=>this.#eM.setTrackingMethod(ti.OFF)),this.#eb("hud-arrow-left-",e-i,t,()=>{this.#eB(!1),this.#eM.setVelocity(-r,0)},()=>this.#eM.setTrackingMethod(ti.OFF))}#eb(e,t,i,r,o){let n=new eu(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ec.STOP}),s=eF.addMomentaryButton(n,r,o);s.position.x=t,s.position.y=i,n.setCurrentIndex(0)}}function ts(e){var o;return e?(o=s,(ei.clearAll(),o)?o.unload().then(()=>(s=null,eF.clear(),eF.setVisible(!1),Promise.resolve())):Promise.resolve(null)).then(()=>e.load().then(()=>e.initialise()).then(()=>{new tn(r,48,to.BR),addEventListener("fullscreenchange",()=>{document.fullscreenElement?(f.debug("Entering fullscreen mode"),i.setCurrentIndex(1)):(f.debug("Exiting fullscreen mode."),i.setCurrentIndex(0))}),i=new eu(0,{prefix:"hud-fullscreen-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ec.STOP}),(t=eF.addButton(i,()=>{var e;(e=document.body).requestFullscreen?e.requestFullscreen({navigationUI:"hide"}):Promise.reject(Error("Fullscreen requests not supported by browser"))},()=>{document.exitFullscreen()})).position.x=48,t.position.y=-48,eF.setVisible(!0),s=e})):(f.error("Attempt made to switch to the next scene when there are no more."),Promise.reject())}function ta(){return++n<o.length?new tG(o[n]):null}var th={areThereMoreScenes:function(){return n<o.length-1},setCameraToTrack:function(e,t,i){r=new tr(e,t,i)},setSceneDefinitions:function(e){o=e,n=-1},switchToFirstScene:function(){return ts((n=-1,ta()))},switchToNextScene:function(){return ts(ta())},update:function(e){s?.update(e),r?.update(e)}};const tl={START_GAME:0,CLICKED_FREE_GROUND:1,CLICKED_ENTRANCE:2,CLICKED_EXIT:3};class tc{#ee;#eA;#eL;#es;#e_;constructor(e,t,i){this.#ee=e,this.#es=t,this.#e_=i}moveInstantly(){this.#eL=C.copy(this.#ee.position);let e=this.#es.worldPointToGrid(this.#ee.position),t=this.#ee.isWandering()?this.#eD(e,this.#ee.maxTilesPerMove):this.#es.worldPointToGrid(a.position);if(Math.abs(t.x-e.x)+Math.abs(t.y-e.y)<=2*this.#ee.maxTilesPerMove&&this.#es.canHeroSeeGridPoint(e)){this.#e_.actor=this.#ee;let i=this.#e_.getDumbRouteNextTo(e,t,this.#ee.maxTilesPerMove);i.length>0&&(this.#eA=new eC({path:i,speed:100},this.#ee.sprite.modifier),this.#eN(i[i.length-1]))}}#eD(e,t){let i=E(e.x-t,e.x+t),r=E(e.y-t,e.y+t),o=this.#es.getDimsInTiles();return new v(x(i,0,o.width-1),x(r,0,o.height-1))}#eN(e){let t=this.#es.worldPointToGrid(this.#ee.position);this.#ee.position=e;let i=this.#es.worldPointToGrid(this.#ee.position);this.#es.moveTileOccupancyGridPoint(this.#ee,t,i)}#eG(){this.#eN(this.#eL)}replay(){return(this.#eG(),this.#eA)?this.#eA.applyAsTransientToSprite(this.#ee.sprite):Promise.resolve()}}class td{#es;#e_;#eW;constructor(e,t){this.#eW=[],this.#es=e,this.#e_=t}addAndMoveActor(e){let t=new tc(e,this.#es,this.#e_);t.moveInstantly(),this.#eW.push(t)}replay(){let e=[];return this.#eW.forEach(t=>e.push(t.replay())),Promise.all(e)}}class tu{constructor(){}async transitionTo(e){await this.onExit().then(()=>(tP=e,e.onEntry()))}onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}onExit(){return Promise.resolve(null)}}class tm extends tu{onEntry(){f.log("Enter AtStart"),ek.showOkDialog("You are in a dark and dingy dungeon.","Conquer it!").then(()=>tE(this))}}class tf extends tu{async onEntry(){f.log("Enter AtGameOver"),eR("YOU DIED!",{lifetimeSecs:2,position:a.position,velocity:new P(0,-100,0)}),await new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>ek.showOkDialog("Game over. You died.","Try again")).then(()=>tE(this))}}class tp extends tu{async onEntry(){f.log("Enter AtGameCompleted"),await ek.showOkDialog("You've done it. Well done.","Try again").then(()=>tE(this))}}class tw extends tu{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter HeroTurnIdle"),await tS()}async onEvent(e,t,i){switch(e){case tl.CLICKED_FREE_GROUND:i?.filter===tR.COMBAT_TILE?f.error("Unexpected click on combat tile ignored."):await tT(t),this.transitionTo(new ty);break;case tl.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tl.CLICKED_EXIT:f.log("Escaping"),await tT(t),th.areThereMoreScenes()?await tv(this):this.transitionTo(new tp)}return Promise.resolve(null)}}class tg extends tu{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter HeroTurnFighting"),await tS()}async onEvent(e,t,i){switch(e){case tl.CLICKED_FREE_GROUND:i?.filter===tR.COMBAT_TILE?await this.#eF(t):await this.#eH(t),0===ei.getTileMap().getParticipants(a).length?this.transitionTo(new ty):this.transitionTo(new tx);break;case tl.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case tl.CLICKED_EXIT:f.log("Escaping"),await tT(t),th.areThereMoreScenes()?await tv(this):this.transitionTo(new tp)}return Promise.resolve(null)}#eF(e){let t=ei.getTileMap().getTileAtWorldPoint(e).getOccupants(),i=[];for(let e of t.values())e.interaction&&i.push(e.interaction.react(a));return Promise.all(i)}#eH(e){for(let e of ei.getTileMap().getParticipants(a))if(e.alive&&!e.interaction.allowEscape(a))return Promise.resolve(!1);return tT(e)}}class ty extends tu{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter ComputerTurnIdle");let e=ei.getTileMap(),t=new te(e),i=new td(e,t);for(let e of ei.getActors().values())e!==a&&e.alive&&i.addAndMoveActor(e);return await i.replay(),0===e.getParticipants(a).length?this.transitionTo(new tw):this.transitionTo(new tg),Promise.resolve(null)}}class tx extends tu{constructor(){super()}async onEntry(){await super.onEntry(),f.log("Enter ComputerTurnFighting");let e=ei.getTileMap(),t=new te(e),i=new td(e,t),r=e.getParticipants(a);for(let e of ei.getActors().values())e!==a&&e.alive&&(r.includes(e)?await e.interaction.enact(a):i.addAndMoveActor(e));return await i.replay(),0===a.traits.get("HP")?this.transitionTo(new tf):0===r.length?this.transitionTo(new tw):this.transitionTo(new tg),Promise.resolve(null)}}function tS(){let e=ei.getTileMap(),t=new te(e,a).getAllRoutesFrom(e.worldPointToGrid(a.sprite.position),a.maxTilesPerMove);return e.setMovementRoutes(t),e.setCombatActors(e.getParticipants(a)),Promise.resolve(null)}function tT(e){let t=ei.getTileMap(),i=t.getWaypointsToWorldPoint(e);return(t.setMovementRoutes(null),t.setCombatActors(null),i)?new eC({path:i,speed:100},a.sprite.modifier).applyAsTransientToSprite(a.sprite):Promise.resolve()}function tE(e){return th.switchToFirstScene().then(()=>(a.sprite.position=ei.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new tw)))}function tv(e){return th.switchToNextScene().then(()=>(a.sprite.position=ei.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new tw)))}let tP=new class extends tu{onEntry(){f.log("WaitingToStart state")}async onEvent(e,t,i){e===tl.START_GAME&&this.transitionTo(new tm)}},tC=!1;var tM={EventId:tl,getHeroActor:function(){return a},setHero:function(e){a=e},triggerEvent:function(e,t,i){if(tC){f.debug(`Ignoring event ${e} as still processing earlier event.`);return}tC=!0,tP.onEvent(e,t,i).then(()=>{tC=!1})}};const tR={MOVEMENT_TILE:0,COMBAT_TILE:1},tz={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class tO extends eL{sprite;obstacle;#e$;#eU;#eV;#eK;constructor(e,t){super(),this.sprite=e,this.#e$=new Map,this.obstacle=t.obstacle,this.#eU=t.gridPoint,this.#eV=t.worldPoint,this.#eK=t.role}get role(){return this.#eK}get gridPoint(){return this.#eU}get worldPoint(){return this.#eV}addOccupant(e){this.#e$.set(e,e)}deleteOccupant(e){this.#e$.delete(e)}getOccupants(){return this.#e$}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#e$.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#e$.values())if(t!==e&&!t.isPassableByActor(e))return!1;return!0}canBeOccupiedByActor(e){if(this.obstacle)return!1;for(let t of this.#e$.values())if(t!==e&&!t.canShareLocationWithActor(e))return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#eK!==tz.ENTRANCE&&this.#eK!==tz.EXIT}}class tk{#eX;#eY;#eZ;#eq;#ej;#y;#x;#eJ;#eQ;#e4;#e0;#e1;#e8;#e2;#e3;#e7;#e5;#e6;constructor(e,t,i){let r=t.matrix;this.#e8=t.entryPointByDoor,this.#e2=t.exitPointByDoor,this.#eX=e,this.#e4=new eS({renderer:new ew(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#e6=new eS({renderer:new ew(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#ej=i,this.#eY=[],this.#eq=r.length,this.#eZ=r[0].length,this.#y=i*this.tilesX,this.#x=i*this.tilesY,this.#e3=[],r.forEach((t,i)=>{let r=[];this.#eY.push(r),t.forEach((t,o)=>{if(t){let n=new eS({renderer:new ex(e,ea.getSpriteBitmap(0,t.image))}),s=new v(o,i),a=this.gridPointToWorldPoint(s),h=new tO(n,{obstacle:t.role===tz.OBSTACLE,gridPoint:s,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#e9(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),n.position.x=o*this.#ej+this.#ej/2,n.position.y=i*this.#ej+this.#ej/2}else r.push(null)})}),this.#e0||(f.error("No entrance has been set. Setting to the first ground tile"),this.#e0=this.#e3[0])}getDimsInTiles(){return{width:this.#eZ,height:this.#eq}}processTileRole(e){switch(e.role){case tz.ENTRANCE:if(this.#e0){let t=e.gridPoint;f.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#e0=e;break;case tz.EXIT:if(this.#e1){let t=e.gridPoint;f.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#e1=e;break;case tz.GROUND:e.gridPoint.coincident(this.#e8)||this.#e3.push(e)}}update(e){this.#te();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#e7?.isGridPointInRays(new v(r,i))){let t=this.#eY[i][r];t?.sprite.update(e)}this.#tt(e)}#te(){let e=tM.getHeroActor();if(e){this.#e7||(this.#e7=new tt(this,e));let t=this.getTileAtWorldPoint(e.position);if(t){let e=t.role;e!=tz.ENTRANCE&&e!=tz.EXIT&&this.#e7.findReachedTiles()}else f.error(`Hero at ${e.position.toString()} but no tile found.`)}}getVisibleGridPointRect(){let e=q.geWorldInCanvasBounds(),t=this.worldPointToGrid(new v(e.x,e.y)),i=this.worldPointToGrid(new v(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),o=Math.min(this.#eZ-1,i.x),n=Math.max(0,t.y);return new M(r,n,o-r,Math.min(this.#eq-1,i.y)-n)}getGridSize(){return this.#ej}getDimensions(){return{width:this.#y,height:this.#x}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#eZ&&t<this.#eq?this.#eY[t][i]:null}worldPointToGrid(e){return new v(Math.floor(e.x/this.#ej),Math.floor(e.y/this.#ej))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#ej;return new v(e.x*this.#ej+t,e.y*this.#ej+t)}getWorldPositionOfTileByEntry(){return this.gridPointToWorldPoint(this.#e8)}getGridPositionOfEntrance(){return this.#e0.gridPoint}setMovementRoutes(e){this.#eJ=e,e?(this.#eQ=new Map,this.#eJ.forEach(e=>e.forEach(e=>{this.#eQ.set(e,e)}))):this.#eQ=null}setCombatActors(e){this.#e5=[],e?.forEach(e=>{this.#e5.push(this.worldPointToGrid(e.position))})}#tt(e){this.#ti(e),this.#tr(e)}#ti(e){this.#eQ?.forEach(t=>{this.#e4.position=this.gridPointToWorldPoint(t),this.#e4.update(e)})}#tr(e){this.#e5?.forEach(t=>{this.#e6.position=this.gridPointToWorldPoint(t),this.#e6.update(e)})}#e9(e,t,i){if(this.#eJ?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:tR.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#e5?.forEach(o=>{if(o.isCoincident(r)){i(e,t,{filter:tR.COMBAT_TILE});return}}),f.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#eJ?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(e4(this.#e3),this.#e3))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canGridPointBeOccupiedByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.canBeOccupiedByActor(t)}canHeroSeeGridPoint(e){return this.#e7?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return eQ(this.#eY,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
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
 */function tI(e){return{role:tz.GROUND,onClick:(e,t,i)=>tM.triggerEvent(tM.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function tB(e){return{role:tz.ENTRANCE,onClick:(e,t,i)=>tM.triggerEvent(tM.EventId.CLICKED_ENTRANCE,t,i),image:e}}function tb(e){return{role:tz.EXIT,onClick:(e,t,i)=>tM.triggerEvent(tM.EventId.CLICKED_EXIT,t,i),image:e}}const tA=new Map([["x",{role:tz.OBSTACLE,image:"block.png"}],["#-TL",{role:tz.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:tz.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:tz.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:tz.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:tz.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:tz.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:tz.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:tz.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:tz.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:tz.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:tz.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:tz.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:tz.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:tz.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:tz.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:tz.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:tz.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:tz.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:tz.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:tz.OBSTACLE,image:"block.png"}],["=-T",tb("door-T.png")],["=-R",tb("door-R.png")],["=-B",tb("door-B.png")],["=-L",tb("door-L.png")],["--T",tB("door-T.png")],["--R",tB("door-R.png")],["--B",tB("door-B.png")],["--L",tB("door-L.png")],["=",{role:tz.OBSTACLE,image:"block.png"}],["-",{role:tz.OBSTACLE,image:"block.png"}],[".",tI("floor.png")],[".-SBW",tI("floor-SBW.png")],[".-SBE",tI("floor-SBE.png")],[",-SBE",tI("floor2-SBE.png")],[",-SBW",tI("floor2-SBW.png")],[",",tI("floor2.png")]]);/**
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
 */class tL{#to;#tn;constructor(e){e?(this.#to=e,this.#tn=!1):(this.#to=new Map,this.#tn=!0)}set(e,t){if(this.#tn||this.#to.has(e))this.#to.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#to.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#ts(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#ts(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#to.set(e,i[1]),this.#to.set(`${e}_MAX`,i[2])):this.#to.set(e,t)}}class t_ extends tL{constructor(){super(new Map([["NAME","mystery"],["MOVEMENT","wander"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
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
 */class tD{#ta;#G;#th;#tl;#tc;heroActor;constructor(e=2,t=2){e>0?(this.#ta=0,this.#G=1/e):this.#G=1,this.#th=e,this.#tl=t}getOpacity(){return this.#ta}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){q.clearCanvas(),q.setOpacity(this.#ta),ei.update(e),this.doUpdate(e),eF.update(e),q.setOpacity(1),0!==this.#G&&(this.#ta+=e*this.#G,this.#ta>1?(this.#G=0,this.#ta=1):this.#ta<0&&(this.#G=0,this.#ta=0)),this.#tc&&0===this.#ta&&(this.#tc(),this.#tc=null)}unload(){return this.#td().then(()=>this.doUnload())}#td(){return this.#tl>0?(this.#G=-1/this.#tl,new Promise(e=>{this.#tc=e})):Promise.resolve()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}class tN{intro;hero;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}class tG extends tD{#tu;constructor(e){super(),this.#tu=e}doLoad(){return ea.loadSpriteMap(u(ej),u(eJ))}doInitialise(){let e=e2.generateTileMapPlan(this.#tu.mapDesign,tA),t=new tk(q.getContext2D(),e,48);return ei.setTileMap(t),this.heroActor=function(e){let t=eq.get(e.hero.id).create();return t.traits=e.hero.traits,t}(this.#tu),(function(e){let t=[];return e.enemies.forEach(e=>{let i=eq.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(this.#tu).forEach(e=>{e.position=t.getRandomFreeGroundTile().worldPoint,ei.addActor(e)}),th.setCameraToTrack(this.heroActor.sprite,200,0),ei.addActor(this.heroActor),tM.setHero(this.heroActor),ek.showMessage(this.#tu.intro)}doUpdate(e){}doUnload(){return Promise.resolve(null)}}/**
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
 */class tW{#tm;#tf;#tp;#tw;#tg;#ty;#tx;#tS;#tT;#tE;constructor(e){this.#tm=E(e.minCols,e.maxCols),this.#tf=E(e.minRows,e.maxRows),this.#tp=e.maxRoomCols,this.#tw=e.maxRoomRows,this.#tg=e0.WALL[0],this.#ty=e0.GROUND[0],this.#tT=e0.VOID[0],this.#tx=e0.DOOR_IN[0],this.#tS=e0.DOOR_OUT[0]}generate(){this.#tE=[];let e=0,t=this.#tm;for(;this.#tE.length<this.#tf-4;){let i=e+t-4-2,r=i>0?T(0,i):0,o=Math.max(e-r+4,4),n=Math.min(this.#tp,this.#tm-r),s=n>o?T(o,n):o,a=this.#tm-r-s,h=T(4,Math.min(this.#tw,this.#tf-this.#tE.length));this.#tv(r,s,a,h),e=r,t=s}return this.#tP(),this.#tC(),this.getMatrixAsStrings()}getMatrixAsStrings(){return this.#tE.map(e=>e.join(""))}#tv(e,t,i,r){f.log(`Create room ${e} ${t} ${i} ${r}`);let o="";o+=this.#tT.repeat(e)+this.#tg.repeat(t)+this.#tT.repeat(i),this.#tE.push(o.split(""));for(let n=0;n<r-2;n++)o=""+this.#tT.repeat(e)+this.#tg+this.#ty.repeat(t-2)+this.#tg+this.#tT.repeat(i),this.#tE.push(o.split(""));o=""+this.#tT.repeat(e)+this.#tg.repeat(t)+this.#tT.repeat(i),this.#tE.push(o.split(""))}#tP(){for(let e=1;e<this.#tE.length-1;e++)for(let t=1;t<this.#tE[0].length-2;t++)this.#tE[e][t]===this.#tg&&this.#tE[e+1][t]===this.#tg&&this.#tE[e-1][t]===this.#ty&&this.#tE[e+2][t]===this.#ty&&(this.#tE[e][t]=this.#ty,this.#tE[e+1][t]=this.#ty)}#tM(e){return e.above===this.#tg&&e.centre===this.#tg&&e.below===this.#tg}#tR(e){return e.left===this.#tg&&e.centre===this.#tg&&e.right===this.#tg}#tC(){let e=[];this.#tE.forEach((t,i)=>t.forEach((t,r)=>{let o=eQ(this.#tE,i,r);(this.#tR(o)||this.#tM(o))&&e.push({row:i,col:r})}));let t=e4(e),i=t[0];this.#tE[i.row][i.col]=this.#tx,i=t[1],this.#tE[i.row][i.col]=this.#tS}}const tF={HERO:"HERO",LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class tH{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=tH.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=tH.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){f.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class t$ extends tH{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class tU extends tH{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *: *([\w,:= /]*)/);t?this.#tz(t):this.#tO(e)}#tz(e){let t=e[1],i=e[2];try{let e=new t_().setFromString(i);this.sceneDefn.hero={id:"HERO",name:t||"mystery",traits:e}}catch(e){this.fatalError(e.message)}}#tO(e){this.fatalError("Long form actors not supported.")}}class tV extends tH{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#tk(t):this.#tI(e)}#tk(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],o=e[4];for(let e=0;e<i;e++)if(eq.has(t))try{let e=new t_().setFromString(o);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#tI(e){this.fatalError("Long form actors not supported.")}}class tK extends tH{#tB;#tb;constructor(e,t,i){super(e,t,i),this.#tB=!1,this.#tb=/^\s*random\s*$/i}parseLine(e){if(!this.#tB&&""!==e){if(this.#tb.test(e)){let e=new tW({minCols:12,maxCols:40,maxRoomCols:10,minRows:12,maxRows:40,maxRoomRows:6});this.sceneDefn.mapDesign=e.generate(),this.#tB=!0,f.debug("Random map"),this.sceneDefn.mapDesign.forEach(e=>f.debug(e))}else this.sceneDefn.mapDesign.push(e)}}}function tX(e,t,i){switch(e){case tF.HERO:return new tU(h,t+1,i);case tF.LEVEL:return new t$(h,t+1,i);case tF.CAST:return new tV(h,t+1,i);case tF.MAP:return new tK(h,t+1,i)}return null}/**
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
 */const tY="custom-pointer-down-event",tZ="custom-pointer-up-event",tq="custom-pointer-cancel-event",tj="custom-click-event";function tJ(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}function tQ(e){if(el.updateTimeNow(e),d){var t;let i=(e-d)/1e3;th.update(i),eo.showFps&&(t=1/i,er(q.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:q.getCanvasDimensions().height},{color:"green"}))}d=e,window.requestAnimationFrame(tQ)}var t4={initialise:async function(e){q.setOptions(e),function(e){let t=0;for(let i in eH){let r=e.measureText(eH[i]),o=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,n=.5*o-r.fontBoundingBoxDescent;e.fillText(eH[i],-.5*r.width,n),e.getImageData(0,0,1,1).data[3]<=0&&(f.debug(`Emoji ${i} not supported.`),eH[i]=`[${t++}]`),e.clearRect(0,0,r.width,o)}}(q.getContext2D()),function(){let e=q.getCanvas();e.addEventListener("mousedown",t=>tJ(e,tY,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("mouseup",t=>tJ(e,tZ,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("touchstart",t=>{if(1===t.changedTouches.length){let i=function(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}(t);c=new v(i.x,i.y),tJ(e,tY,{x:i.x,y:i.y})}},{passive:!0}),e.addEventListener("touchend",t=>{1===t.changedTouches.length&&tJ(e,tZ,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("touchcancel",t=>{tJ(e,tq,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("click",t=>{tJ(e,tj,{x:t.offsetX,y:t.offsetY})}),e.addEventListener(tj,e=>{let t=e.detail.x,i=e.detail.y,r=q.uiCoordsToMappedPositions(t,i);eF.resolveClick(r)||ei.resolveClick(r)}),e.addEventListener(tY,e=>{let t=e.detail.x,i=e.detail.y,r=q.uiCoordsToMappedPositions(t,i);eF.resolvePointerDown(r)}),e.addEventListener(tZ,e=>{let t=e.detail.x,i=e.detail.y,r=q.uiCoordsToMappedPositions(t,i);eF.resolvePointerUp(r)}),e.addEventListener(tq,e=>{let t=e.detail.x,i=e.detail.y,r=q.uiCoordsToMappedPositions(t,i);eF.resolvePointerCancel(r)}),e.addEventListener("contextmenu",e=>{f.debug("Context menu");let t=e.detail.x,i=e.detail.y,r=q.uiCoordsToMappedPositions(t,i);eF.resolveContextMenu(r)||ei.resolveContextMenu(r),e.preventDefault()})}(),ek.showOkDialog("Welcome to the Scripted Dungeon","Let's start").then(()=>{var e;return e=eU.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(f.error(`Error fetching ${e}: ${t}`),null))}).then(e=>th.setSceneDefinitions(function(e){h=e.split(/\r?\n/),l=[];let t=new tN,i=tH.findFirstSection(h);if(!i)throw Error("Invalid script. No section identifiers found.");let r=tX(i.nextSectionId,i.nextLineIndex,t);for(;r;){let e=r.parse();e?.nextSectionId&&e.nextSectionId!==tF.LEVEL||(l.push(t),t=new tN),r=e?tX(e.nextSectionId,e.nextLineIndex,t):null}return l}(e))).then(()=>tM.triggerEvent(tM.EventId.START_GAME)).then(()=>void window.requestAnimationFrame(tQ)).catch(e=>{f.error(e),alert(`Fatal error in main game. ${e.message}`)})}};window.addEventListener("load",()=>{try{t4.initialise({width:800,height:600,maxScale:2.4,minScale:1,sizingMethod:"COVER",alpha:!1})}catch(e){f.fatal(e)}});
//# sourceMappingURL=index.a4701122.js.map
