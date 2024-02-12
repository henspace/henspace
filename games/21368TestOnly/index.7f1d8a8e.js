let e,t,i,r,n,o,s,a,h,l,c,d;function u(e){return e&&e.__esModule?e.default:e}const p="'UnifrakturCook', cursive",g={normal:{size:15,fontName:"'UnifrakturCook', cursive"},h1:{size:30,fontName:p},h2:{size:22,fontName:p},h3:{size:18,fontName:p},emojiSprite:{size:18,fontName:"'UnifrakturCook', cursive"}};function f(e){let t=g[e]??g.normal;return`${t.size}px ${t.fontName}`}/**
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
 */class m{x;y;constructor(e,t){this.x=e,this.y=t}static copy(e){return new m(e.x,e.y)}coincident(e){return this.x===e.x&&this.y===e.y}getCartesianAngleTo(e){return Math.atan2(e.y-this.y,e.x-this.x)}getScreenAngleTo(e){return Math.atan2(this.y-e.y,e.x-this.x)}toString(){return`(${this.x},${this.y})`}isCoincident(e){return Math.round(this.x)===Math.round(e.x)&&Math.round(this.y)===Math.round(e.y)}}class w{x;y;rotation;constructor(e,t,i){this.x=e,this.y=t,this.rotation=i}getDirection(){return Math.atan2(-this.y,this.x)}}class x extends m{rotation;constructor(e,t,i){super(e,t),this.y=t,this.rotation=i}static fromPoint(e){return new x(e.x,e.y,0)}static copy(e){return new x(e.x,e.y,e.rotation)}getRelativeTo(e){return new x(this.x-e.x,this.y-e.y,this.rotation-e.rotation)}withinSquare(e,t){return Math.abs(e.x-this.x)<t&&Math.abs(e.y-this.y)<t}}class y{x;y;width;height;constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}getBottomRight(){return new m(this.x+this.width,this.y+this.height)}getTopLeft(){return new m(this.x,this.y)}overlaps(e){let t=this.getBottomRight(),i=e.getBottomRight();return!(e.x>t.x||e.y>t.y||i.x<this.x||i.y<this.y)}containsPoint(e){return e.x>=this.x&&e.x<=this.x+this.width&&e.y>=this.y&&e.y<=this.y+this.height}containsCoordinate(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}equals(e){return this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}}new m(Number.MIN_VALUE,Number.MIN_VALUE),new m(Number.MAX_VALUE,Number.MAX_VALUE);let T=null,S=null,E=null,v=0,P=0,C=!0,M=null,R=null,I=null,B=new y(0,0,0,0),O=0,b=0,A=1,L=1,k=.1,_="COVER",z=new x(0,0,0);function D(){return{width:window.innerWidth,height:window.innerHeight}}function N(){let e=D(),t=E.width/E.height,i=0,r=0,n=e.width/e.height;("COVER"===_?t>n:t<n)?r=(i=e.height)*t:i=(r=e.width)/t,(A=r/E.width)>L?(r=(A=L)*E.width,i=A*E.height):A<k&&(r=(A=k)*E.width,i=A*E.height),O=(e.width-r)/2,b=(e.height-i)/2,S.style.left=`${O}px`,S.style.top=`${b}px`,S.style.width=`${r}px`,S.style.height=`${i}px`;let o=Math.min(e.width/A,r/A),s=Math.min(e.height/A,i/A);M=new y(.5*(E.width-o),.5*(E.height-s),o,s)}function G(){let e=D(),t=Math.max(parseInt(S.style.left),0),i=Math.max(parseInt(S.style.top),0),r=Math.min(parseInt(S.style.width),e.width),n=Math.min(parseInt(S.style.height),e.height);I.style.left=`${t}px`,I.style.top=`${i}px`,I.style.width=`${r}px`,I.style.height=`${n}px`,function(){let e=g.normal.size*A;document.documentElement.style.fontSize=`${e}px`}(),B=new y(t,i,r,n)}function F(){return S.getContext("2d",{alpha:C})}function W(){let e=document.getElementById("glass-content");return I.style.opacity=0,new Promise(t=>{window.setTimeout(()=>{e.innerHTML="",I.style.display="none",t()},2e3)})}function H(e){return new x(e.x+z.x,e.y+z.y,e.rotation)}window.addEventListener("resize",()=>{null===T&&(T=window.setTimeout(()=>{T=null,N(),G()},200))});var U={canvasPositionToWorld:H,centreCanvasOn:function(e){z.x=e.x-v,z.y=e.y-P},clearCanvas:function(){F().clearRect(0,0,E.width,E.height)},displayOnGlass:function(e,t){let i=document.getElementById("glass-content");return i.replaceChildren(e),I.style.display="block",I.style.opacity=1,new Promise(e=>{t?t.forEach(t=>{t.element.addEventListener("click",()=>e(t.response))}):i.addEventListener("click",()=>e())}).then(()=>W())},getCanvas:()=>S,getContext2D:F,getCanvasDimensions:function(){return{width:E.width,height:E.height}},getGlassRect:function(){return B},getVisibleCanvasBounds:function(){let e=(B.x-E.x)*A,t=(B.y-E.y)*A,i=e+B.width*A,r=t+B.height*A;return e=Math.max(e,E.x),new y(e,t=Math.max(t,E.y),(i=Math.min(i,E.x+E.width))-e,(r=Math.min(r,E.y+E.height))-t)},geWorldInCanvasBounds:function(){return new y(z.x,z.y,E.width,E.height)},glassPositionToWorld:function(e){let t=e.x<0?M.x+M.width:M.x,i=e.y<0?M.y+M.height:M.y;return H(new x(t+e.x,i+e.y,e.rotation))},isOnCanvas:function(e){return e.overlaps(E)},isOnScreen:function(e){return e.overlaps(E)},panCamera:function(e,t){z.x+=e,z.y+=t},setOpacity:function(e){F().globalAlpha=e},setOptions:function(e){var t;if(S){console.error("Multiple calls to setScreen ignored.");return}R=document.getElementById("game-content"),t=e.width,g.normal.size=15+t/100*.390625,g.h1.size=2*g.normal.size,g.h2.size=1.5*g.normal.size,g.h3.size=1.2*g.normal.size,g.emojiSprite.size=t/10,(S=document.createElement("canvas")).setAttribute("width",e.width),S.setAttribute("height",e.height),S.innerText="Loading the app.",E=new y(0,0,e.width,e.height),v=e.width/2,P=e.height/2,R.appendChild(S),L=e.maxScale,k=e.minScale,_=e.sizingMethod,C=e.alpha,N(),function(){(I=document.createElement("div")).id="glass",R.appendChild(I),I.style.display="none";let e=document.createElement("div");e.id="glass-content",I.appendChild(e)}(),G()},wipeGlass:W,worldPositionToCanvas:function(e){return new x(e.x-z.x,e.y-z.y,e.rotation)},worldToUi:function(e){return e*A},uiCoordsToMappedPositions:function(e,t){return{canvas:new x(Math.round(e/=A),Math.round(t/=A)),world:new x(Math.round(e+z.x),Math.round(t+z.y),-z.rotation)}},uiToWorld:function(e){return e/A}};const $=new Map,V=new Map;function X(t){let i=e.worldPointToGrid(t.position);e.deleteOccupancyOfGridPoint(t,i),$.delete(t)}function Y(e){console.debug("Remove passive sprite."),V.delete(e)}function K(){e=null}var q={addActor:function(t){$.set(t,t),e.moveTileOccupancyGridPoint(t,null,e.worldPointToGrid(t.position))},addPassiveSprite:function(e){V.set(e,e)},clearAll:function(){$.forEach(e=>X(e)),V.forEach(e=>Y(e)),K()},getActors:function(){return $},getTileMap:function(){return e},getWorldDims:function(){return e?e.getDimensions():U.getCanvasDimensions()},removeTileMap:K,resolveCancel:function(e){return!1},resolveClick:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionClick(t.world),!0)},resolveContextMenu:function(t){let i=e.getTileAtWorldPoint(t.world);return!!i&&(i.actionContextClick(t.world),!0)},removeActor:X,removePassiveSprite:Y,setTileMap:function(t){e=t},update:function(t){e?.update(t),$.forEach(i=>{let r=e.worldPointToGrid(i.position);i.visible=e.canHeroSeeGridPoint(r),i.update(t);let n=e.worldPointToGrid(i.position);e.moveTileOccupancyGridPoint(i,r,n)}),V.forEach(e=>e.update(t))}};function Z(e,t,i,r){if(e.font=f(r?.styleName),e.fillStyle=r?.color??"white",r?.wrapAtX){var n=t.split("\n");for(let t=0;t<n.length;t++)r.y=function(e,t,i,r){let n;let o=t.split(" "),s=i.x??0,a=i.y??0,h=r.xWrapPosition-s,l=r.lineSpacing??1,c="";for(let t=0;t<o.length;t++){let i=c+o[t]+" ",r=/**
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
 */const er={DEG_22_5:1/8*Math.PI,DEG_67_5:3/8*Math.PI,DEG_112_5:5/8*Math.PI,DEG_157_7:7/8*Math.PI},en={N:0,NE:1,E:2,SE:3,S:4,SW:5,W:6,NW:7};function eo(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}function es(e,t){let i=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-i+1)+i)}const ea={WRAP:0,REVERSE:1,STOP:2};class eh{#e;#t;#i;#r;#n;constructor(e,t){this.#e=e,this.#t=e-1,this.#i=t,this.#r=1,this.#n=0}get index(){return this.#n}set index(e){var t;this.#n=(t=this.#e-1,e<0?0:e>t?t:e)}advanceBy(e){if(this.#e<1)return this.#n;switch(this.#i){case ea.WRAP:return this.#o(e);case ea.REVERSE:return this.#s(e);case ea.NONE:default:return this.#a(e)}}#o(e){return e%=this.#e,this.#n+=e%this.#e,this.#n>=this.#e&&(this.#n=this.#n-this.#e),this.#n}#s(e){if(Math.floor(e/this.#e)%2&&(this.#r=-this.#r),e%=this.#e,this.#r>0){this.#n+=e;let t=this.#n-this.#t;t>0&&(this.#n=this.#t-t,this.#r=-1)}else this.#r<0&&(this.#n-=e,this.#n<0&&(this.#n=-this.#n,this.#r=1));return this.#n}#a(e){return this.#r>0?this.#n=Math.min(this.#t,this.#n+e):this.#r<0&&(this.#n=Math.max(0,this.#n-e)),this.#n}}class el{playing;#h;#l;#c;#d;constructor(e,t,i){let r;if(this.#h=[],this.#c=0,this.#d=Math.max(1,i.framePeriodMs),"string"==typeof t){this.#h.push(ee.getFrame(e,t));return}let n=t.startIndex??0,o=t.padding??0;do{let i=`${t.prefix}${n.toString().padStart(o,"0")}${t.suffix}`;(r=ee.getSpriteBitmap(e,i))&&this.#h.push(r),n++}while(r)this.#l=new eh(this.#h.length,i.loopMethod),this.playing=!0}getCurrentFrame(){if(this.playing){let e=ei.getFrameCount(this.#d);e!==this.#c&&(this.#l.advanceBy(e-this.#c),this.#c=e)}return this.#h[this.#l.index]}setCurrentIndex(e){this.playing=!1,this.#l.index=e}getCurrentIndex(){return this.#l.index}}class ec{#u;#p;constructor(e,t){this.#u={},this.#u[e]=t,this.#p=t}get image(){return this.#p}addAnimatedImage(e,t){this.#u[e]=t}setCurrentImage(e){this.#u.hasOwnProperty(e)?this.#p=this.#u[e]:console.error(`Attempt to set current key to nonexistent value of ${e}`)}getCurrentFrame(){return this.#p.getCurrentFrame()}}class ed{_context;_boundingBoxCanvas;constructor(e){this._context=e,this._boundingBoxCanvas=new y(0,0,0,0)}getContext(){return this._context}getBoundingBoxCanvas(){return this._boundingBoxCanvas}render(e,t){if(e=U.worldPositionToCanvas(e),!this.isOnCanvas(e))return;let i=this._context.globalAlpha;this._context.globalAlpha=i*t;let r=e.rotation;r&&(this._context.save(),this._context.translate(e.x,e.y),this._context.rotate(-e.rotation),this._context.translate(-e.x,-e.y)),this._doRender(e),r&&this._context.restore(),j.spriteBoxes&&(this._context.strokeStyle="green",this._context.strokeRect(this._boundingBoxCanvas.x,this._boundingBoxCanvas.y,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height)),this._context.globalAlpha=i}_doRender(e){console.error("_doRender method should be overridden.")}isOnScreen(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return U.isOnScreen(t)}isOnCanvas(e){let t=new y(e.x-this._boundingBoxCanvas.width/2,e.y-this._boundingBoxCanvas.height/2,this._boundingBoxCanvas.width,this._boundingBoxCanvas.height);return U.isOnCanvas(t)}}class eu extends ed{#g;#f;#m;text;constructor(e,t,i="normal"){super(e),this.text=t,this.#g=i}#w(e){this._context.font=f(this.#g);let t=this._context.measureText(e);this.#m={width:t.width,height:t.fontBoundingBoxAscent+t.fontBoundingBoxDescent,origin:{x:-.5*t.width,y:.5*(t.fontBoundingBoxAscent-t.fontBoundingBoxDescent)}},this.#f=e}_doRender(e){var t;this.text!==this.#f&&this.#w(this.text);let i={x:e.x+this.#m.origin.x,y:e.y+this.#m.origin.y,rotation:e.rotation};Z(this._context,this.#f,i,{styleName:this.#g}),this._boundingBoxCanvas=(t=this.#m,new y(e.x-t.width/2,e.y-t.height/2,t.width,t.height))}}class ep extends ed{#x;#y;#T;#S;#E;#v;constructor(e,t){super(e),this.#x=t.width??10,this.#y=t.height??10,this.#T=this.#x/2,this.#S=this.#y/2,this.#E=t.fillStyle,this.#v=t.strokeStyle}_doRender(e){let t=e.x-this.#T,i=e.y-this.#S;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(t,i,this.#x,this.#y)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(t,i,this.#x,this.#y)),this._boundingBoxCanvas=new y(t,i,this.#x,this.#y)}}class eg extends ed{#y;#S;#x;#T;#E;#v;#P;#C;#M;#R;constructor(e,t){super(e),this.#y=t.height,this.#S=this.#y/2,this.#x=t.width,this.#T=this.#x/2,this.#E=t.fillStyle,this.#v=t.strokeStyle,this.#P=t.offsetX??0,this.#C=t.offsetY??0,this.setLevel(0)}setLevel(e){this.#M=Math.min(e,1)*this.#y,this.#R=.5*this.#M}_doRender(e){let t=e.y-this.#S+this.#C,i=e.y+this.#S-this.#M+this.#C,r=e.x-this.#T+this.#P;this.#E&&(this._context.fillStyle=this.#E,this._context.fillRect(r,i,this.#x,this.#M)),this.#v&&(this._context.strokeStyle=this.#v,this._context.strokeRect(r,t,this.#x,this.#y)),this._boundingBoxCanvas=new y(r,t,this.#x,this.#y)}}class ef extends ed{#I;constructor(e,t){super(e);let i=Math.max(t.fillStyles.length??0,t.strokeStyles.length??0);if(0===i){console.error("Attempt to create MultiGaugeTileRenderer with no gauges.");return}this.#I=[];let r=t.tileSize/i,n=-t.tileSize/2+r/2;for(let o=0;o<i;o++)this.#I.push(new eg(e,{width:r,height:t.tileSize,fillStyle:t.fillStyles?.[o],strokeStyle:t.strokeStyles?.[o],offsetX:n+r*o,offsetY:0}))}setLevel(e,t){this.#I[e]?.setLevel(t)}render(e){this.#I?.forEach(t=>t.render(e))}}class em extends ed{#B;#O;constructor(e,t){super(e),t?.getCurrentFrame?(this.#O=t,this.#B=this.#O.getCurrentFrame()):this.#B=t,this.#B?(this._boundingBoxCanvas.width=this.#B?.width??0,this._boundingBoxCanvas.height=this.#B?.height??0):console.error("No image frame available for sprite.",t)}_doRender(e){if(!this.#B)return;let t=this.#O?this.#O.getCurrentFrame():this.#B;this._boundingBoxCanvas.x=e.x-this._boundingBoxCanvas.width/2,this._boundingBoxCanvas.y=e.y-this._boundingBoxCanvas.height/2,this._context.drawImage(t.image,e.x-t.centreX,e.y-t.centreY)}}class ew{#b=new x(0,0,0);#A=new w(0,0,0);#L;#k;modifier;visible;opacity;constructor(e){this.#L=e?.renderer,this.#k=Array.isArray(this.#L),this.visible=!0,this.opacity=1}get position(){return this.#b}set position(e){this.#b.x=this.valueOrZero(e.x),this.#b.y=this.valueOrZero(e.y),this.#b.rotation=this.valueOrZero(e.rotation)}get velocity(){return this.#A}set velocity(e){this.#A.x=this.valueOrZero(e.x),this.#A.y=this.valueOrZero(e.y),this.#A.rotation=this.valueOrZero(e.rotation)}valueOrZero(e){return"number"==typeof e?e:0}update(e){this.modifier&&(this.modifier=this.modifier.update(this,e)),this.visible&&this.#_()}#_(){this.#L&&(this.#L.forEach?this.#L.forEach(e=>e.render(this.#b,this.opacity)):this.#L.render(this.#b,this.opacity))}getBoundingBox(){let e=this.#L.getBoundingBoxCanvas();return new y(this.position.x-e.width/2,this.position.y-e.height/2,e.width,e.height)}}class ex{decoratedModifier;#z;#D;#N;constructor(e){this.#D=0,this.#N=0,this.decoratedModifier=e}applyAsTransientToSprite(e,t=10){return this.#N=t,new Promise(t=>{this.#z=t,e.modifier=this})}applyAsContinuousToSprite(e){e.modifier=this}update(e,t){this.#z&&(this.#D+=t),this.decoratedModifier&&(this.decoratedModifier=this.decoratedModifier?.update(e,t));let i=this.doUpdate(e,t);return!i||this.#D>this.#N?(this.#z?.(null),null):i}doUpdate(e,t){return console.error("doUpdate should be overridden."),this}}class ey extends ex{#G;constructor(e,t){super(t),this.#G=1/Math.max(e,.5)}doUpdate(e,t){return e.opacity=Math.max(0,e.opacity-t*this.#G),e.opacity>0?this:null}}/**
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
 */class eT extends ex{#F;#W;constructor(e){super(e)}doUpdate(e,t){let i=e.position,r=e.velocity;return i.x+=r.x*t,i.y+=r.y*t,e.position=i,e.velocity=r,this}}class eS extends ex{#H;#U;#$;constructor(e,t){super(t),this.#H=e.prey,this.#U=e.maxSeparation,this.#$=e.speed}doUpdate(e,t){let i=this.#H.position,r=e.position;if(!r.withinSquare(i,this.#U)){let n=r.getCartesianAngleTo(i);e.velocity.x=this.#$*Math.cos(n),e.velocity.y=this.#$*Math.sin(n);let o=e.velocity.x*t,s=e.velocity.y*t;e.position.x+=this.getMinMove(o,i.x,r.x),e.position.y+=this.getMinMove(s,i.y,r.y)}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}class eE extends ex{#V;#n;#X;#$;constructor(e,t){super(t),this.#V=e.path,this.#n=0,this.#X=e.path[0],this.#$=e.speed}doUpdate(e,t){let i=e.position,r=i.getCartesianAngleTo(this.#X);e.velocity.x=this.#$*Math.cos(r),e.velocity.y=this.#$*Math.sin(r);let n=e.velocity.x*t,o=e.velocity.y*t;if(i.x+=this.getMinMove(n,this.#X.x,i.x),i.y+=this.getMinMove(o,this.#X.y,i.y),i.isCoincident(this.#X)){if(++this.#n>=this.#V.length)return this.decoratedModifier;this.#X=this.#V[this.#n]}return this}getMinMove(e,t,i){let r=t-i;return 0>Math.sign(e)?Math.max(e,r):Math.min(e,r)}}function ev(e,t){let i=new ew({renderer:e});i.position=t.position,i.velocity=t.velocity,q.addPassiveSprite(i),new ey(t.lifetimeSecs,new eT).applyAsTransientToSprite(i,20).then(()=>q.removePassiveSprite(i))}function eP(e,t){ev(new em(U.getContext2D(),e),t)}function eC(e,t){ev(new eu(U.getContext2D(),e),t)}/**
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
 */function eM(e=6){return es(1,e)}class eR{perform(e,t){return Promise.resolve()}canMoveAway(e,t){return!0}}class eI{perform(e,t){return this.#Y(e,t)}canMoveAway(e,t){return eM(20)>10||(eC("Failed to run.",{lifetimeSecs:2,position:e.position,velocity:new w(0,-100,0)}),!1)}#K(e,t){let i=m.copy(e.position);return new eE({path:[new m(e.position.x+.2*(t.position.x-e.position.x),e.position.y+.2*(t.position.y-e.position.y)),i],speed:100}).applyAsTransientToSprite(e.sprite)}#q(e,t){return new Promise(e=>{if(eM(20)>10)eP(ee.getSpriteBitmap(0,"blood-splat.png"),{lifetimeSecs:1,position:t.position,velocity:new w(0,0,0)});else{eC("Missed",{lifetimeSecs:2,position:t.position,velocity:new w(0,-100,0)}),e();return}let i=t.traits.get("HP"),r=eM(6);i=Math.max(0,i-r),t.traits.set("HP",i),0===i?(q.removeActor(t),eP(ee.getSpriteBitmap(0,"RIP.png"),{lifetimeSecs:5,position:t.position,velocity:new w(0,0,0)})):eC(`-${r} HP`,{lifetimeSecs:2,position:t.position,velocity:new w(0,-200,0)}),e(i)})}#Y(e,t){return this.#K(e,t).then(()=>this.#q(e,t))}}/**
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
 */class eB{#Z;#j;#J;#Q;setOnClick(e){this.#Z=e}setOnContextClick(e){this.#j=e}setOnPointerDown(e){this.#J=e}setOnPointerUp(e){this.#Q=e}actionClick(e){this.#Z?.(this,e)}actionContextClick(e){this.#j?.(this,e)}actionPointerDown(e){this.#J?.(this,e)}actionPointerUp(e){this.#Q?.(this,e)}}class eO extends eB{maxTilesPerMove;sprite;traits;interaction;constructor(e){super(),this.interaction=new eR,this.sprite=e,this.sprite.obstacle=!0,this.maxTilesPerMove=4}set visible(e){this.sprite.visible=e}get visible(){return this.sprite.visible}get obstacle(){return this.sprite.obstacle}set obstacle(e){this.sprite.obstacle=e}get position(){return this.sprite.position}set position(e){this.sprite.position=e}get velocity(){return this.sprite.velocity}set velocity(e){this.sprite.velocity=e}update(e){this.sprite.update(e)}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionContextClick(this.sprite.position)}actionPointerUp(e){super.actionPointerUp(this.sprite.position)}actionPointerDown(e){super.actionPointerDown(this.sprite.position)}}const eb=new Map;let eA=!1;function eL(e,t){let i=U.glassPositionToWorld(t.position),r=t.sprite.getBoundingBox();return new y(i.x-r.width/2,i.y-r.height/2,r.width,r.height).containsCoordinate(e.world.x,e.world.y)}function ek(e){if(!eA||!eA)return!1;for(let[t,i]of eb)if(eL(e,i))return i.actionPointerUp(i,e.canvas),!0;return!1}var e_={addButton:function(e,t,i){let r=new eO(new ew({renderer:new em(U.getContext2D(),e)}));return eb.set(r,r),r.setOnClick(()=>{i?0===e.getCurrentIndex()?(e.setCurrentIndex(1),t()):(e.setCurrentIndex(0),i()):t()}),e.setCurrentIndex(0),r},addMomentaryButton:function(e,t,i){let r=new eO(new ew({renderer:new em(U.getContext2D(),e)}));return eb.set(r,r),r.setOnPointerDown(()=>{e.setCurrentIndex(1),t?.()}),r.setOnPointerUp(()=>{e.setCurrentIndex(0),i?.()}),r},clear:function(){eb.clear()},removeButton:function(e){eb.delete(e)},update:function(e){eA&&eb.forEach(t=>{let i=x.copy(t.position);t.position=U.glassPositionToWorld(t.position),t.update(e),t.position=i})},resolvePointerCancel:function(e){return ek(e)},resolveClick:function(e){if(!eA)return!1;for(let[t,i]of eb)if(eL(e,i))return i.actionClick(i,e.canvas),!0;return!1},resolveContextMenu:function(e){return!1},resolvePointerDown:function(e){if(!eA||!eA)return!1;for(let[t,i]of eb)if(eL(e,i))return i.actionPointerDown(i,e.canvas),!0;return!1},resolvePointerUp:ek,setVisible:function(e){eA=e}};/**
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
 */const ez={GRINNING:"\uD83D\uDE00",SANTA:"\uD83C\uDF85",SHAKING:"\uD83E\uDEE8"};/**
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
 */var eD={};eD=new URL("dungeon_script.8a2dd4bc.txt",import.meta.url).toString();const eN={DUNGEON_SCRIPT:new URL(eD)};class eG extends ef{actor;constructor(e,t){super(e,t)}render(e){if(this.actor&&this.actor.traits){let e=this.actor.traits.get("HP"),t=this.actor.traits.get("HP_MAX");this.setLevel(0,e/t),this.setLevel(1,1)}super.render(e)}}function eF(e){let t=new em(U.getContext2D(),new ec("idle",new el(0,{prefix:e,suffix:".png",startIndex:0,padding:3},{framePeriodMs:100,loopMethod:ea.REVERSE}))),i=new eG(U.getContext2D(),{tileSize:q.getTileMap().getGridSize()-2,fillStyles:["rgba(255, 0, 0, 0.2)","rgba(0, 0, 255, 0.2)"],strokeStyles:[]}),r=new eO(new ew({renderer:[i,t]}));return i.actor=r,r.position=new x(48,48,0),r.velocity={x:-500,y:-70,rotation:.1},r}const eW=new Map([["HERO",{create:()=>eF("hero")}],["MONSTER",{create:()=>(function(e){let t=eF("orc");return t.interaction=new eI,t})(0)}]]);/**
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
 */var eH={};eH=JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":1,"y":95,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":435,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":435,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":1071,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":1080,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":485,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":485,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":535,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":535,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":585,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":585,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":635,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero001.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero002.png","frame":{"x":985,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":48},"sourceSize":{"w":48,"h":49}},{"filename":"hero003.png","frame":{"x":1033,"y":51,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":45,"h":48},"sourceSize":{"w":49,"h":49}},{"filename":"hero004.png","frame":{"x":389,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":44,"h":49},"sourceSize":{"w":49,"h":49}},{"filename":"hud-arrow-down-000.png","frame":{"x":147,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":195,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":243,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":291,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":339,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":387,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":1220,"y":51,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":1246,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":1268,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":1294,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-000.png","frame":{"x":1316,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-fullscreen-001.png","frame":{"x":1342,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":97,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc001.png","frame":{"x":295,"y":1,"w":46,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc002.png","frame":{"x":147,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc003.png","frame":{"x":197,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc004.png","frame":{"x":246,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"RIP.png","frame":{"x":97,"y":52,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":635,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":1106,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":685,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":1035,"y":1,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":685,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":735,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":735,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":1115,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":1141,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":1150,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":1176,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":785,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":1185,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":785,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":1211,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":835,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":835,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":885,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":885,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":935,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":935,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":985,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1389,"h":100},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:60d7f34bb4039828e16477df24a24f9d:e3ffb4491e81187d2ee6cd8cabbf73f0:9c0fba27a8a0c106083a8713f6c67b32$"}}');var eU={};/**
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
 */function e$(e,t,i){return{centre:e[t]?.[i],tl:e[t-1]?.[i-1],above:e[t-1]?.[i],tr:e[t-1]?.[i+1],right:e[t]?.[i+1],br:e[t+1]?.[i+1],below:e[t+1]?.[i],bl:e[t+1]?.[i-1],left:e[t]?.[i-1]}}function eV(e){let t,i=e.length;for(;i>0;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]];return e}eU=new URL("dungeon.2988913d.png",import.meta.url).toString();const eX={WALL:["#","*","|"],DOOR_IN:["-"],DOOR_OUT:["="],GROUND:[".",":",",",";"],VOID:[" "]},eY={TOP_LEFT:"-TL",TOP_LEFT_INTERNAL:"-TLI",TOP:"-T",TOP_RIGHT:"-TR",TOP_RIGHT_INTERNAL:"-TRI",RIGHT:"-R",BOTTOM_RIGHT:"-BR",BOTTOM_RIGHT_INTERNAL:"-BRI",BOTTOM:"-B",BOTTOM_LEFT:"-BL",BOTTOM_LEFT_INTERNAL:"-BLI",LEFT:"-L",TOP_TEE:"-TTEE",RIGHT_TEE:"-RTEE",BOTTOM_TEE:"-BTEE",LEFT_TEE:"-LTEE",INTERNAL_CROSS:"-XI",INTERNAL_VERTICAL:"-VI",INTERNAL_HORIZONTAL:"-HI"},eK={BELOW_WALL:"-SBW",BELOW_END_WALL:"-SBE"};class eq{matrix;entryPointByDoor;exitPointByDoor;constructor(){this.entryPointByDoor=new m(0,0),this.exitPointByDoor=new m(0,0)}static generateTileMapPlan(e,t){let i=new eq,r=i.convertToMatrix(e);return r=i.clarifyMatrix(r),i.createPlan(r,t),i}convertToMatrix(e){let t=[],i=0;return e.forEach(e=>{i=Math.max(i,e.length)}),e.forEach(e=>{e.length<i&&(e+=" ".repeat(i-length)),t.push(e.split(""))}),t}clarifyMatrix(e){let t=[];return e.forEach((i,r)=>{let n=[];t.push(n),i.forEach((t,i)=>{var o,s,a,h;let l;let c=e$(e,r,i);(o=t,eX.VOID.includes(o))?t=" ":eJ(t)?(s=t,eQ(c.above)&&(eQ(c.tl)?s+=eK.BELOW_WALL:s+=eK.BELOW_END_WALL),a=t=s,eZ(c.left)||eZ(c.above)||eZ(c.right)||eZ(c.below))?this.entryPointByDoor=new m(i,r):(ej(c.right)||ej(c.below)||ej(c.left)||ej(c.above))&&(this.exitPointByDoor=new m(i,r)):eQ(t)&&(l=h=t,eQ(c.above)&&eQ(c.right)&&eQ(c.below)&&eQ(c.left)?l+=eY.INTERNAL_CROSS:eJ(c.left)&&eJ(c.right)?l+=eY.INTERNAL_VERTICAL:eJ(c.above)&&eJ(c.below)?l+=eY.INTERNAL_HORIZONTAL:eQ(c.left)&&eQ(c.right)&&eQ(c.below)?l+=eY.TOP_TEE:eQ(c.above)&&eQ(c.below)&&eQ(c.left)?l+=eY.RIGHT_TEE:eQ(c.left)&&eQ(c.right)&&eQ(c.above)?l+=eY.BOTTOM_TEE:eQ(c.above)&&eQ(c.below)&&eQ(c.right)?l+=eY.LEFT_TEE:eQ(c.right)&&eQ(c.below)?l+=eJ(c.br)?eY.TOP_LEFT:eY.TOP_LEFT_INTERNAL:eQ(c.left)&&eQ(c.below)?l+=eJ(c.bl)?eY.TOP_RIGHT:eY.TOP_RIGHT_INTERNAL:eQ(c.left)&&eQ(c.above)?l+=eJ(c.tl)?eY.BOTTOM_RIGHT:eY.BOTTOM_RIGHT_INTERNAL:eQ(c.right)&&eQ(c.above)?l+=eJ(c.tr)?eY.BOTTOM_LEFT:eY.BOTTOM_LEFT_INTERNAL:eQ(c.above)&&eQ(c.below)?l+=eJ(c.right)?eY.LEFT:eY.RIGHT:eQ(c.right)&&eQ(c.left)&&(l+=eJ(c.below)?eY.TOP:eY.BOTTOM),t=eQ(c.above)?l+eK.BELOW_WALL:l),n.push(t)})}),t}createPlan(e,t){let i=[];e.forEach(e=>{let r=[];i.push(r),e.forEach(e=>{r.push(function e(t,i){if(" "===t)return null;let r=t.match(/(.)(-[^-]*)?(-[^-]*)?/),n=i.get(t);if(!n&&r[2]&&r[3]&&(n=i.get(`${r[1]}${r[2]}`)),!n&&r[2]&&(n=i.get(r[1])),!n){let n=function(e){for(let t in eX)if(eX[t].includes(e))return eX[t][0];return null}(r[1]);if(n&&n!==r[1]){var o,s;let t;return e((o=r[2],s=r[3],t=n,o&&(t+=o),s&&(t+=s),t),i)}console.error(`Failed to find symbol for ${t}`)}return n}(e,t))})}),this.matrix=i}}function eZ(e){return eX.DOOR_IN.includes(e)}function ej(e){return eX.DOOR_OUT.includes(e)}function eJ(e){return eX.GROUND.includes(e)}function eQ(e){var t;return eX.WALL.includes(e)||eZ(t=e)||ej(t)}/**
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
 */class e0{#ee;#et;constructor(e){this.#et=e,this.#ee=new Map}setRouteToCoords(e,t,i){this.#ee.set(this.coordsToKey(t,i),e)}getRouteToCoords(e,t){return this.#ee.get(this.coordsToKey(e,t))}hasRouteToCoords(e,t){return this.#ee.has(this.coordsToKey(e,t))}coordsToKey(e,t){return`${e}|${t}`}keyToGridPoint(e){let t=e.split("|");return new m(parseInt(t[0]),parseInt(t[1]))}forEach(e){this.#ee.forEach((t,i,r)=>e(t,i,r))}containsGridPoint(e){return this.#ee.has(this.coordsToKey(e.x,e.y))}getWaypointsAsGridPoints(e){let t=this.getRouteToCoords(e.x,e.y);return t.length>1?t.slice(1):null}getWaypointsAsWorldPoints(e){let t=this.getWaypointsAsGridPoints(e);return t?t.map(e=>this.#et.gridPointToWorldPoint(e)):t}}class e4{actor;#ee;#et;#ei;constructor(e,t){this.#et=e,this.actor=t}getDumbRouteNextTo(e,t,i){let r=this.#er(e,t);if(r.coincident(e))return[];this.#et.isGridPointPassableByActor(r,this.actor)||(r=this.#en(r,t));let n=[],o=Math.sign(r.x-e.x),s=Math.sign(r.y-e.y),a=m.copy(e),h=.5>Math.random(),l=0;for(;i>0;){let t=m.copy(a),c=!1;if(h&&0!==o&&a.x!=r.x?(t.x+=o,c=!0):h||0===s||a.y==r.y||(t.y+=s,c=!0),c=c&&this.#et.isGridPointPassableByActor(t,this.actor))l=0,a=t,i--;else{if(++l>=2)break;a.coincident(e)||n.push(this.#et.gridPointToWorldPoint(a)),e=a,h=!h}}return a.coincident(e)||n.push(this.#et.gridPointToWorldPoint(a)),n}getAllRoutesFrom(e,t){return this.#ee=new e0(this.#et),this.#ei=e,this.#eo(e.x,e.y,t,null),this.#ee}#eo(e,t,i,r){if(r){if(e===this.#ei.x&&t===this.#ei.y||!this.#es(e,t))return;let n=this.#ee.getRouteToCoords(e,t);if(n&&!(r.length<n.length-1))return;r.push(new m(e,t)),this.#ee.setRouteToCoords(r,e,t),i--}else r=[new m(e,t)];i>0&&(this.#eo(e,t-1,i,[...r]),this.#eo(e+1,t,i,[...r]),this.#eo(e,t+1,i,[...r]),this.#eo(e-1,t,i,[...r]))}#es(e,t){return this.#et.isGridPointPassableByActor(new m(e,t),this.actor)}#er(e,t){let i=t.x-e.x,r=t.y-e.y,n=t.x,o=t.y;return Math.abs(i)>Math.abs(r)?n-=Math.sign(i):o-=Math.sign(r),new m(n,o)}#en(e,t){return e.x===t.x&&e.y<t.y?new m(e.x+1,e.y+1):e.x>t.x&&e.y===t.y?new m(e.x-1,e.y+1):e.x===t.x&&e.y>t.y?new m(e.x-1,e.y-1):e.x<t.x&&e.y===t.y?new m(e.x+1,e.y-1):e}}class e1{#ea;#eh;#et;#el;#ec;#ed;#eu;constructor(e,t){this.#et=e,this.#ea=t}findReachedTiles(){return this.#eh=this.#et.worldPointToGrid(this.#ea.position),this.#ed=this.#et.getVisibleGridPointRect(),this.#ec&&this.#ec.coincident(this.#eh)&&this.#ed&&this.#ed.equals(this.#eu)||(this.#el=new Map,this.#el.set(this.#eh.toString(),this.#eh),this.#ep().forEach(e=>{this.#eg(e)}),this.#ec=this.#eh,this.#eu=this.#ed),this.#el}isGridPointInRays(e){return!!this.#el&&this.#el.has(e.toString())}#ep(){let e=[];for(let t=this.#ed.x;t<=this.#ed.x+this.#ed.width;t++)e.push(new m(t,this.#ed.y)),e.push(new m(t,this.#ed.y+this.#ed.height));for(let t=this.#ed.y+1;t<=this.#ed.y+this.#ed.height-1;t++)e.push(new m(this.#ed.x,t)),e.push(new m(this.#ed.x+this.#ed.width,t));return e}#eg(e){let t,i,r;let n=function(e){let t=Math.abs(e);return t<=er.DEG_22_5?en.E:t<=er.DEG_67_5?Math.sign(e)>0?en.NE:en.SE:t<=er.DEG_112_5?Math.sign(e)>0?en.N:en.S:t<=er.DEG_157_7?Math.sign(e)>0?en.NW:en.SW:en.W}(this.#eh.getScreenAngleTo(e));Math.abs(e.x-this.#eh.x)>=Math.abs(e.y-this.#eh.y)?(t=Math.sign(e.x-this.#eh.x),i=(r=Math.abs(e.x-this.#eh.x))<1?0:(e.y-this.#eh.y)/r):(i=Math.sign(e.y-this.#eh.y),t=(r=Math.abs(e.y-this.#eh.y))<1?0:(e.x-this.#eh.x)/r);let o=this.#eh.x,s=this.#eh.y,a=!0;for(;r>=0;){let e=new m(Math.round(o),Math.round(s));if(a||this.#et.isSeeThrough(e,this.#ea))this.#ef(e,n);else break;a=!1,o+=t,s+=i,r--}}#ef(e,t){switch(this.#el.set(e.toString(),e),t){case en.N:this.#em(new m(e.x-1,e.y-1)),this.#em(new m(e.x,e.y-1)),this.#em(new m(e.x+1,e.y-1));break;case en.NE:this.#em(new m(e.x,e.y-1)),this.#em(new m(e.x+1,e.y-1)),this.#em(new m(e.x+1,e.y));break;case en.E:this.#em(new m(e.x+1,e.y-1)),this.#em(new m(e.x+1,e.y)),this.#em(new m(e.x+1,e.y+1));break;case en.SE:this.#em(new m(e.x+1,e.y)),this.#em(new m(e.x+1,e.y+1)),this.#em(new m(e.x,e.y+1));break;case en.S:this.#em(new m(e.x-1,e.y+1)),this.#em(new m(e.x,e.y+1)),this.#em(new m(e.x+1,e.y+1));break;case en.SW:this.#em(new m(e.x-1,e.y)),this.#em(new m(e.x-1,e.y+1)),this.#em(new m(e.x,e.y+1));break;case en.W:this.#em(new m(e.x-1,e.y-1)),this.#em(new m(e.x-1,e.y)),this.#em(new m(e.x-1,e.y+1));break;case en.NW:this.#em(new m(e.x-1,e.y)),this.#em(new m(e.x-1,e.y-1)),this.#em(new m(e.x,e.y-1))}}#em(e){this.#et.isSeeThrough(e)||this.#el.set(e.toString(),e)}}function e8(e){let t=document.createElement("div");return t.innerText=e,t.classList.add(["scrollable"]),t}var e2={showMessage:function(e){let t=e8(e);U.displayOnGlass(t)},showOkDialog:function(e,t="OK"){let i=document.createElement("div");i.appendChild(e8(e));let r=document.createElement("button");return r.appendChild(document.createTextNode(t)),i.appendChild(r),U.displayOnGlass(i,[{element:r,response:0}])}};/**
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
 */const e3={OFF:0,HERO:1,VELOCITY:2};class e5{#ew;#ex;#ey;#eT;constructor(e,t,i=0){let r=U.getCanvasDimensions(),n=i*Math.min(r.width,r.height);this.#ew=new ew,this.#ex=new eS({prey:e,speed:t,maxSeparation:n}),this.#ey=new eT,this.#ex.applyAsContinuousToSprite(this.#ew)}update(e){this.#eT!==e3.OFF&&(this.#ew.update(e),U.centreCanvasOn(this.#ew.position))}setVelocity(e,t){this.setTrackingMethod(e3.VELOCITY),this.#ew.velocity.x=e,this.#ew.velocity.y=t}setTrackingMethod(e){if(e!==this.#eT)switch(this.#eT=e,e){case e3.HERO:this.#ex.applyAsContinuousToSprite(this.#ew);break;case e3.VELOCITY:this.#ey.applyAsContinuousToSprite(this.#ew);break;case e3.OFF:break;default:console.error(`Attempt to set invalid tracking method of ${e} ignored.`)}}}const e6={TR:0,BR:1,BL:2,TL:3};class e9{#eS;#eE;#ev;constructor(e,t,i){this.#eS=e,this.#eP(t,i)}#eP(e,t){let i,r;switch(t){case e6.TL:i=2*e,r=2*e;break;case e6.TR:i=-2*e,r=2*e;break;case e6.BR:i=-2*e,r=-2*e;break;case e6.BL:i=2*e,r=-2*e}this.#eC(i,r),this.#eM(i,r,e)}#eC(e,t){this.#ev=new el(0,{prefix:"hud-auto-centre-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),this.#eE=e_.addButton(this.#ev,()=>{this.#eR(!0)},()=>{this.#eR(!1)}),this.#eE.position.x=e,this.#eE.position.y=t,this.#eE.actionClick(null)}#eR(e){e?(this.#ev.setCurrentIndex(1),this.#eS.setTrackingMethod(e3.HERO)):(this.#ev.setCurrentIndex(0),this.#eS.setTrackingMethod(e3.OFF))}#eM(e,t,i){let r=3*i;this.#eI("hud-arrow-up-",e,t-i,()=>{this.#eR(!1),this.#eS.setVelocity(0,-r)},()=>this.#eS.setTrackingMethod(e3.OFF)),this.#eI("hud-arrow-right-",e+i,t,()=>{this.#eR(!1),this.#eS.setVelocity(r,0)},()=>this.#eS.setTrackingMethod(e3.OFF)),this.#eI("hud-arrow-down-",e,t+i,()=>{this.#eR(!1),this.#eS.setVelocity(0,r)},()=>this.#eS.setTrackingMethod(e3.OFF)),this.#eI("hud-arrow-left-",e-i,t,()=>{this.#eR(!1),this.#eS.setVelocity(-r,0)},()=>this.#eS.setTrackingMethod(e3.OFF))}#eI(e,t,i,r,n){let o=new el(0,{prefix:e,startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),s=e_.addMomentaryButton(o,r,n);s.position.x=t,s.position.y=i,o.setCurrentIndex(0)}}function e7(e){var n;return e?(n=s,(q.clearAll(),n)?n.unload().then(()=>(s=null,e_.clear(),e_.setVisible(!1),Promise.resolve())):Promise.resolve(null)).then(()=>e.load().then(()=>e.initialise()).then(()=>{new e9(r,48,e6.BR),addEventListener("fullscreenchange",()=>{document.fullscreenElement?(console.debug("Entering fullscreen mode"),i.setCurrentIndex(1)):(console.debug("Exiting fullscreen mode."),i.setCurrentIndex(0))}),i=new el(0,{prefix:"hud-fullscreen-",startIndex:0,padding:3,suffix:".png"},{framePeriodMs:1,loopMethod:ea.STOP}),(t=e_.addButton(i,()=>{var e;(e=document.body).requestFullscreen?e.requestFullscreen({navigationUI:"hide"}):Promise.reject(Error("Fullscreen requests not supported by browser"))},()=>{document.exitFullscreen()})).position.x=48,t.position.y=-48,e_.setVisible(!0),s=e})):(console.error("Attempt made to switch to the next scene when there are no more."),Promise.reject())}function te(){return++o<n.length?new tA(n[o]):null}var tt={areThereMoreScenes:function(){return o<n.length-1},setCameraToTrack:function(e,t,i){r=new e5(e,t,i)},setSceneDefinitions:function(e){n=e,o=-1},switchToFirstScene:function(){return e7((o=-1,te()))},switchToNextScene:function(){return e7(te())},update:function(e){s?.update(e),r?.update(e)}};const ti={START_GAME:0,CLICKED_FREE_GROUND:1,CLICKED_ENTRANCE:2,CLICKED_EXIT:3};class tr{#ea;#eB;#eO;#et;#eb;constructor(e,t,i){this.#ea=e,this.#et=t,this.#eb=i}moveInstantly(){this.#eO=x.copy(this.#ea.position);let e=this.#et.worldPointToGrid(a.position),t=this.#et.worldPointToGrid(this.#ea.position);if(Math.abs(e.x-t.x)+Math.abs(e.y-t.y)<=2*this.#ea.maxTilesPerMove&&this.#et.canHeroSeeGridPoint(t)){this.#eb.actor=this.#ea;let i=this.#eb.getDumbRouteNextTo(t,e,this.#ea.maxTilesPerMove);i.length>0&&(this.#eB=new eE({path:i,speed:100},this.#ea.sprite.modifier),this.#eA(i[i.length-1]))}}#eA(e){let t=this.#et.worldPointToGrid(this.#ea.position);this.#ea.position=e;let i=this.#et.worldPointToGrid(this.#ea.position);this.#et.moveTileOccupancyGridPoint(this.#ea,t,i)}#eL(){this.#eA(this.#eO)}replay(){return(this.#eL(),this.#eB)?this.#eB.applyAsTransientToSprite(this.#ea.sprite):Promise.resolve()}}class tn{#et;#eb;#ek;constructor(e,t){this.#ek=[],this.#et=e,this.#eb=t}addAndMoveActor(e){let t=new tr(e,this.#et,this.#eb);t.moveInstantly(),this.#ek.push(t)}replay(){let e=[];return this.#ek.forEach(t=>e.push(t.replay())),Promise.all(e)}}class to{constructor(){}async transitionTo(e){await this.onExit().then(()=>(tw=e,e.onEntry()))}onEntry(){return Promise.resolve()}onEvent(e){return Promise.resolve(null)}onExit(){return Promise.resolve(null)}}class ts extends to{onEntry(){console.log("Enter AtStart"),e2.showOkDialog("You are in a dark and dingy dungeon.","Conquer it!").then(()=>tf(this))}}class ta extends to{async onEntry(){console.log("Enter AtGameOver"),eC("YOU DIED!",{lifetimeSecs:2,position:a.position,velocity:new w(0,-100,0)}),await new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>e2.showOkDialog("Game over. You died.","Try again")).then(()=>tf(this))}}class th extends to{async onEntry(){console.log("Enter AtGameCompleted"),await e2.showOkDialog("You've done it. Well done.","Try again").then(()=>tf(this))}}class tl extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnIdle"),await tp()}async onEvent(e,t,i){switch(e){case ti.CLICKED_FREE_GROUND:i?.filter===tT.COMBAT_TILE?console.error("Unexpected click on combat tile ignored."):await tg(t),this.transitionTo(new td);break;case ti.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case ti.CLICKED_EXIT:console.log("Escaping"),await tg(t),tt.areThereMoreScenes()?await tm(this):this.transitionTo(new th)}return Promise.resolve(null)}}class tc extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter HeroTurnFighting"),await tp()}async onEvent(e,t,i){switch(e){case ti.CLICKED_FREE_GROUND:i?.filter===tT.COMBAT_TILE?await this.#e_(t):await this.#ez(t),0===q.getTileMap().getParticipants(a).length?this.transitionTo(new td):this.transitionTo(new tu);break;case ti.CLICKED_ENTRANCE:alert("Wow! Leaving so early. That bit of code is not ready yet.");break;case ti.CLICKED_EXIT:console.log("Escaping"),await tg(t),tt.areThereMoreScenes()?await tm(this):this.transitionTo(new th)}return Promise.resolve(null)}#e_(e){let t=q.getTileMap().getTileAtWorldPoint(e).getOccupants(),i=[];for(let e of t.values())e.interaction&&i.push(e.interaction.perform(a,e));return Promise.all(i)}#ez(e){for(let e of q.getTileMap().getParticipants(a))if(!e.interaction.canMoveAway(a,e))return Promise.resolve(!1);return tg(e)}}class td extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnIdle");let e=q.getTileMap(),t=new e4(e),i=new tn(e,t);for(let e of q.getActors().values())e!==a&&i.addAndMoveActor(e);return await i.replay(),0===e.getParticipants(a).length?this.transitionTo(new tl):this.transitionTo(new tc),Promise.resolve(null)}}class tu extends to{constructor(){super()}async onEntry(){await super.onEntry(),console.log("Enter ComputerTurnFighting");let e=q.getTileMap(),t=new e4(e),i=new tn(e,t),r=e.getParticipants(a);for(let e of q.getActors().values())e!==a&&(r.includes(e)?await e.interaction.perform(e,a):i.addAndMoveActor(e));return await i.replay(),0===a.traits.get("HP")?this.transitionTo(new ta):0===r.length?this.transitionTo(new tl):this.transitionTo(new tc),Promise.resolve(null)}}function tp(){let e=q.getTileMap(),t=new e4(e,a).getAllRoutesFrom(e.worldPointToGrid(a.sprite.position),a.maxTilesPerMove);return e.setMovementRoutes(t),e.setCombatActors(e.getParticipants(a)),Promise.resolve(null)}function tg(e){let t=q.getTileMap(),i=t.getWaypointsToWorldPoint(e);return(t.setMovementRoutes(null),t.setCombatActors(null),i)?new eE({path:i,speed:100},a.sprite.modifier).applyAsTransientToSprite(a.sprite):Promise.resolve()}function tf(e){return tt.switchToFirstScene().then(()=>(a.sprite.position=q.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new tl)))}function tm(e){return tt.switchToNextScene().then(()=>(a.sprite.position=q.getTileMap().getWorldPositionOfTileByEntry(),e.transitionTo(new tl)))}let tw=new class extends to{onEntry(){console.log("WaitingToStart state")}async onEvent(e,t,i){e===ti.START_GAME&&this.transitionTo(new ts)}},tx=!1;var ty={EventId:ti,getHeroActor:function(){return a},setHero:function(e){a=e},triggerEvent:function(e,t,i){if(tx){console.debug(`Ignoring event ${e} as still processing earlier event.`);return}tx=!0,tw.onEvent(e,t,i).then(()=>{tx=!1})}};const tT={MOVEMENT_TILE:0,COMBAT_TILE:1},tS={OBSTACLE:-1,GROUND:0,ENTRANCE:1,EXIT:2};class tE extends eB{sprite;obstacle;#eD;#eN;#eG;#eF;constructor(e,t){super(),this.sprite=e,this.#eD=new Map,this.obstacle=t.obstacle,this.#eN=t.gridPoint,this.#eG=t.worldPoint,this.#eF=t.role}get role(){return this.#eF}get gridPoint(){return this.#eN}get worldPoint(){return this.#eG}addOccupant(e){this.#eD.set(e,e)}deleteOccupant(e){this.#eD.delete(e)}getOccupants(){return this.#eD}actionClick(e){super.actionClick(this.sprite.position)}actionContextClick(e){super.actionClick(this.sprite.position)}isOccupied(){return this.#eD.size>0}isPassableByActor(e){if(this.obstacle)return!1;for(let t of this.#eD.values())if(t!==e&&t.obstacle)return!1;return!0}isSeeThrough(e){return!this.obstacle&&this.#eF!==tS.ENTRANCE&&this.#eF!==tS.EXIT}}class tv{#eW;#eH;#eU;#e$;#eV;#x;#y;#eX;#eY;#eK;#eq;#eZ;#ej;#eJ;#eQ;#e0;#e4;#e1;constructor(e,t,i){let r=t.matrix;this.#ej=t.entryPointByDoor,this.#eJ=t.exitPointByDoor,this.#eW=e,this.#eK=new ew({renderer:new ep(e,{width:i,height:i,fillStyle:null,strokeStyle:"white"})}),this.#e1=new ew({renderer:new ep(e,{width:i,height:i,fillStyle:null,strokeStyle:"red"})}),this.#eV=i,this.#eH=[],this.#e$=r.length,this.#eU=r[0].length,this.#x=i*this.tilesX,this.#y=i*this.tilesY,this.#eQ=[],r.forEach((t,i)=>{let r=[];this.#eH.push(r),t.forEach((t,n)=>{if(t){let o=new ew({renderer:new em(e,ee.getSpriteBitmap(0,t.image))}),s=new m(n,i),a=this.gridPointToWorldPoint(s),h=new tE(o,{obstacle:t.role===tS.OBSTACLE,gridPoint:s,worldPoint:a,role:t.role});t.onClick&&(h.setOnClick((e,i)=>this.#e8(e,i,t.onClick)),h.setOnContextClick(t.onContextClick)),this.processTileRole(h),r.push(h),o.position.x=n*this.#eV+this.#eV/2,o.position.y=i*this.#eV+this.#eV/2}else r.push(null)})}),this.#eq||(console.error("No entrance has been set. Setting to the first ground tile"),this.#eq=this.#eQ[0])}processTileRole(e){switch(e.role){case tS.ENTRANCE:if(this.#eq){let t=e.gridPoint;console.error(`Duplicate entrance found at (${t.x}, ${t.y}). Ignored.`)}else this.#eq=e;break;case tS.EXIT:if(this.#eZ){let t=e.gridPoint;console.error(`Duplicate exit found at (${t.x}, ${t.y}). Ignored.`)}else this.#eZ=e;break;case tS.GROUND:e.gridPoint.coincident(this.#ej)||this.#eQ.push(e)}}update(e){this.#e2();let t=this.getVisibleGridPointRect();for(let i=t.y;i<=t.y+t.height;i++)for(let r=t.x;r<=t.x+t.width;r++)if(this.#e0?.isGridPointInRays(new m(r,i))){let t=this.#eH[i][r];t?.sprite.update(e)}this.#e3(e)}#e2(){let e=ty.getHeroActor();if(e){this.#e0||(this.#e0=new e1(this,e));let t=this.getTileAtWorldPoint(e.position);if(t){let e=t.role;e!=tS.ENTRANCE&&e!=tS.EXIT&&this.#e0.findReachedTiles()}else console.error(`Hero at ${e.position.toString()} but no tile found.`)}}getVisibleGridPointRect(){let e=U.geWorldInCanvasBounds(),t=this.worldPointToGrid(new m(e.x,e.y)),i=this.worldPointToGrid(new m(e.x+e.width,e.y+e.height)),r=Math.max(0,t.x),n=Math.min(this.#eU-1,i.x),o=Math.max(0,t.y);return new y(r,o,n-r,Math.min(this.#e$-1,i.y)-o)}getGridSize(){return this.#eV}getDimensions(){return{width:this.#x,height:this.#y}}getTileAtWorldPoint(e){let t=this.worldPointToGrid(e);return this.getTileAtGridPoint(t)}getTileAtGridPoint(e){if(!e)return null;let t=e.y,i=e.x;return i>=0&&t>=0&&i<this.#eU&&t<this.#e$?this.#eH[t][i]:null}worldPointToGrid(e){return new m(Math.floor(e.x/this.#eV),Math.floor(e.y/this.#eV))}gridAlignedWorldPoint(e){let t=this.worldPointToGrid(e);return this.gridPointToWorldPoint(t)}gridPointToWorldPoint(e){let t=.5*this.#eV;return new m(e.x*this.#eV+t,e.y*this.#eV+t)}getWorldPositionOfTileByEntry(){return this.gridPointToWorldPoint(this.#ej)}getGridPositionOfEntrance(){return this.#eq.gridPoint}setMovementRoutes(e){this.#eX=e,e?(this.#eY=new Map,this.#eX.forEach(e=>e.forEach(e=>{this.#eY.set(e,e)}))):this.#eY=null}setCombatActors(e){this.#e4=[],e?.forEach(e=>{this.#e4.push(this.worldPointToGrid(e.position))})}#e3(e){this.#e5(e),this.#e6(e)}#e5(e){this.#eY?.forEach(t=>{this.#eK.position=this.gridPointToWorldPoint(t),this.#eK.update(e)})}#e6(e){this.#e4?.forEach(t=>{this.#e1.position=this.gridPointToWorldPoint(t),this.#e1.update(e)})}#e8(e,t,i){if(this.#eX?.containsGridPoint(this.worldPointToGrid(t))){i(e,t,{filter:tT.MOVEMENT_TILE});return}let r=this.worldPointToGrid(t);this.#e4?.forEach(n=>{if(n.isCoincident(r)){i(e,t,{filter:tT.COMBAT_TILE});return}}),console.debug("Ignore click outside of highlighted area")}getWaypointsToWorldPoint(e){let t=this.worldPointToGrid(e);return this.#eX?.getWaypointsAsWorldPoints(t)}getRandomFreeGroundTile(){for(let e of(eV(this.#eQ),this.#eQ))if(!e.isOccupied())return e;return null}isGridPointPassableByActor(e,t){let i=this.getTileAtGridPoint(e);return!!i&&i.isPassableByActor(t)}canHeroSeeGridPoint(e){return this.#e0?.isGridPointInRays(e)??!0}isSeeThrough(e,t){let i=this.getTileAtGridPoint(e);return!i||i.isSeeThrough(t)}getSurroundingTiles(e){return e$(this.#eH,e.y,e.x)}deleteOccupancyOfGridPoint(e,t){this.getTileAtGridPoint(t)?.deleteOccupant(e)}moveTileOccupancyGridPoint(e,t,i){i!==t&&(this.getTileAtGridPoint(t)?.deleteOccupant(e),this.getTileAtGridPoint(i)?.addOccupant(e))}getParticipants(e){let t=[],i=this.getSurroundingTiles(this.worldPointToGrid(e.position));return[i.above,i.right,i.below,i.left].forEach(e=>{let i=e?.getOccupants();i?.forEach(e=>{t.push(e)})}),t}}/**
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
 */function tP(e){return{role:tS.GROUND,onClick:(e,t,i)=>ty.triggerEvent(ty.EventId.CLICKED_FREE_GROUND,t,i),image:e}}function tC(e){return{role:tS.ENTRANCE,onClick:(e,t,i)=>ty.triggerEvent(ty.EventId.CLICKED_ENTRANCE,t,i),image:e}}function tM(e){return{role:tS.EXIT,onClick:(e,t,i)=>ty.triggerEvent(ty.EventId.CLICKED_EXIT,t,i),image:e}}const tR=new Map([["x",{role:tS.OBSTACLE,image:"block.png"}],["#-TL",{role:tS.OBSTACLE,image:"wall-TL.png"}],["#-TLI",{role:tS.OBSTACLE,image:"wall-TLI.png"}],["#-T",{role:tS.OBSTACLE,image:"wall-T.png"}],["#-TR",{role:tS.OBSTACLE,image:"wall-TR.png"}],["#-TRI",{role:tS.OBSTACLE,image:"wall-TRI.png"}],["#-R",{role:tS.OBSTACLE,image:"wall-R.png"}],["#-BR",{role:tS.OBSTACLE,image:"wall-BR.png"}],["#-BRI",{role:tS.OBSTACLE,image:"wall-BRI.png"}],["#-B",{role:tS.OBSTACLE,image:"wall-B.png"}],["#-BL",{role:tS.OBSTACLE,image:"wall-BL.png"}],["#-BLI",{role:tS.OBSTACLE,image:"wall-BLI.png"}],["#-L",{role:tS.OBSTACLE,image:"wall-L.png"}],["#-XI",{role:tS.OBSTACLE,image:"wall-XI.png"}],["#-VI",{role:tS.OBSTACLE,image:"wall-VI.png"}],["#-HI",{role:tS.OBSTACLE,image:"wall-HI.png"}],["#-TTEE",{role:tS.OBSTACLE,image:"wall-TTEE.png"}],["#-RTEE",{role:tS.OBSTACLE,image:"wall-RTEE.png"}],["#-BTEE",{role:tS.OBSTACLE,image:"wall-BTEE.png"}],["#-LTEE",{role:tS.OBSTACLE,image:"wall-LTEE.png"}],["#",{role:tS.OBSTACLE,image:"block.png"}],["=-T",tM("door-T.png")],["=-R",tM("door-R.png")],["=-B",tM("door-B.png")],["=-L",tM("door-L.png")],["--T",tC("door-T.png")],["--R",tC("door-R.png")],["--B",tC("door-B.png")],["--L",tC("door-L.png")],["=",{role:tS.OBSTACLE,image:"block.png"}],["-",{role:tS.OBSTACLE,image:"block.png"}],[".",tP("floor.png")],[".-SBW",tP("floor-SBW.png")],[".-SBE",tP("floor-SBE.png")],[",-SBE",tP("floor2-SBE.png")],[",-SBW",tP("floor2-SBW.png")],[",",tP("floor2.png")]]);/**
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
 */class tI{#e9;#e7;constructor(e){e?(this.#e9=e,this.#e7=!1):(this.#e9=new Map,this.#e7=!0)}set(e,t){if(this.#e7||this.#e9.has(e))this.#e9.set(e,t);else throw Error(`Attempt to set invalid key '${e}'`)}get(e){return this.#e9.get(e)}setFromString(e){return e.split(",").forEach(e=>{let t=e.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);if(t)this.#te(t[1],t[2]);else throw Error(`Invalid property definition'${e}'`)}),this}#te(e,t){let i=t.match(/(\d+) *[/] *(\d+) */);i?(this.#e9.set(e,i[1]),this.#e9.set(`${e}_MAX`,i[2])):this.#e9.set(e,t)}}class tB extends tI{constructor(){super(new Map([["NAME","mystery"],["HP",10],["HP_MAX",10],["STR",10],["STR_MAX",10]]))}}/**
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
 */class tO{#tt;#G;#ti;#tr;#tn;heroActor;constructor(e=2,t=2){e>0?(this.#tt=0,this.#G=1/e):this.#G=1,this.#ti=e,this.#tr=t}getOpacity(){return this.#tt}load(){return this.doLoad()}initialise(){return this.doInitialise()}update(e){U.clearCanvas(),U.setOpacity(this.#tt),q.update(e),this.doUpdate(e),e_.update(e),U.setOpacity(1),0!==this.#G&&(this.#tt+=e*this.#G,this.#tt>1?(this.#G=0,this.#tt=1):this.#tt<0&&(this.#G=0,this.#tt=0)),this.#tn&&0===this.#tt&&(this.#tn(),this.#tn=null)}unload(){return this.#to().then(()=>this.doUnload())}#to(){return this.#tr>0?(this.#G=-1/this.#tr,new Promise(e=>{this.#tn=e})):Promise.resolve()}doLoad(){return Promise.resolve()}doInitialise(){return Promise.resolve()}doUpdate(e){return Promise.resolve()}doUnload(){return Promise.resolve()}}class tb{intro;enemies;mapDesign;constructor(){this.enemies=[],this.mapDesign=[]}}class tA extends tO{#ts;constructor(e){super(),this.#ts=e}doLoad(){return ee.loadSpriteMap(u(eH),u(eU))}doInitialise(){let e=eq.generateTileMapPlan(this.#ts.mapDesign,tR),t=new tv(U.getContext2D(),e,48);return q.setTileMap(t),this.heroActor=eW.get("HERO").create(),this.heroActor.traits=new tB,(function(e){let t=[];return e.enemies.forEach(e=>{let i=eW.get(e.id).create();i.traits=e.traits,t.push(i)}),t})(this.#ts).forEach(e=>{e.position=t.getRandomFreeGroundTile().worldPoint,q.addActor(e)}),tt.setCameraToTrack(this.heroActor.sprite,200,0),q.addActor(this.heroActor),ty.setHero(this.heroActor),e2.showMessage(this.#ts.intro)}doUpdate(e){}doUnload(){return Promise.resolve(null)}}/**
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
 */class tL{#ta;#th;#tl;#tc;#td;#tu;#tp;#tg;#tf;#tm;constructor(e){this.#ta=es(e.minCols,e.maxCols),this.#th=es(e.minRows,e.maxRows),this.#tl=e.maxRoomCols,this.#tc=e.maxRoomRows,this.#td=eX.WALL[0],this.#tu=eX.GROUND[0],this.#tf=eX.VOID[0],this.#tp=eX.DOOR_IN[0],this.#tg=eX.DOOR_OUT[0]}generate(){this.#tm=[];let e=0,t=this.#ta;for(;this.#tm.length<this.#th-4;){let i=e+t-4-2,r=i>0?eo(0,i):0,n=Math.max(e-r+4,4),o=Math.min(this.#tl,this.#ta-r),s=o>n?eo(n,o):n,a=this.#ta-r-s,h=eo(4,Math.min(this.#tc,this.#th-this.#tm.length));this.#tw(r,s,a,h),e=r,t=s}return this.#tx(),this.#ty(),this.getMatrixAsStrings()}getMatrixAsStrings(){return this.#tm.map(e=>e.join(""))}#tw(e,t,i,r){console.log(`Create room ${e} ${t} ${i} ${r}`);let n="";n+=this.#tf.repeat(e)+this.#td.repeat(t)+this.#tf.repeat(i),this.#tm.push(n.split(""));for(let o=0;o<r-2;o++)n=""+this.#tf.repeat(e)+this.#td+this.#tu.repeat(t-2)+this.#td+this.#tf.repeat(i),this.#tm.push(n.split(""));n=""+this.#tf.repeat(e)+this.#td.repeat(t)+this.#tf.repeat(i),this.#tm.push(n.split(""))}#tx(){for(let e=1;e<this.#tm.length-1;e++)for(let t=1;t<this.#tm[0].length-2;t++)this.#tm[e][t]===this.#td&&this.#tm[e+1][t]===this.#td&&this.#tm[e-1][t]===this.#tu&&this.#tm[e+2][t]===this.#tu&&(this.#tm[e][t]=this.#tu,this.#tm[e+1][t]=this.#tu)}#tT(e){return e.above===this.#td&&e.centre===this.#td&&e.below===this.#td}#tS(e){return e.left===this.#td&&e.centre===this.#td&&e.right===this.#td}#ty(){let e=[];this.#tm.forEach((t,i)=>t.forEach((t,r)=>{let n=e$(this.#tm,i,r);(this.#tS(n)||this.#tT(n))&&e.push({row:i,col:r})}));let t=eV(e),i=t[0];this.#tm[i.row][i.col]=this.#tp,i=t[1],this.#tm[i.row][i.col]=this.#tg}}const tk={LEVEL:"LEVEL",CAST:"CAST",MAP:"MAP"};class t_{sceneDefn;lines;lineIndex;constructor(e,t,i){this.lines=e,this.lineIndex=t,this.sceneDefn=i}parse(){for(;this.lineIndex<this.lines.length;){let e=this.lines[this.lineIndex],t=t_.getSectionIdFromLine(e);if(t)return{nextSectionId:t,nextLineIndex:this.lineIndex};this.parseLine(e),this.lineIndex++}return null}static findFirstSection(e){for(let t=0;t<e.length;t++){let i=t_.getSectionIdFromLine(e[t].trim());if(i)return{nextSectionId:i,nextLineIndex:t}}return null}parseLine(e){throw"Method parseLine should be overridden."}static getSectionIdFromLine(e){let t=e.match(/^\s*\[ *([\w ]+) *\]/);return t?t[1].toUpperCase():null}fatalError(e){throw Error(`Error parsing script on line ${this.lineIndex+1}: ${e}`)}ignoreError(e){console.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${e}`)}}class tz extends t_{constructor(e,t,i){super(e,t,i),this.sceneDefn.intro=""}parseLine(e){this.sceneDefn.intro+=""===e?"\n":e}}class tD extends t_{constructor(e,t,i){super(e,t,i)}parseLine(e){let t=e.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);t?this.#tE(t):this.#tv(e)}#tE(e){let t=e[1].toUpperCase(),i=parseInt(e[2]),r=e[3],n=e[4];for(let e=0;e<i;e++)if(eW.has(t))try{let e=new tB().setFromString(n);this.sceneDefn.enemies.push({id:t,name:r||"mystery",traits:e})}catch(e){this.fatalError(e.message)}else this.fatalError(`Cast member ${t} does not exist.`)}#tv(e){this.fatalError("Long form actors not supported.")}}class tN extends t_{#tP;#tC;constructor(e,t,i){super(e,t,i),this.#tP=!1,this.#tC=/^\s*random\s*$/i}parseLine(e){if(!this.#tP&&""!==e){if(this.#tC.test(e)){let e=new tL({minCols:12,maxCols:40,maxRoomCols:10,minRows:12,maxRows:40,maxRoomRows:6});this.sceneDefn.mapDesign=e.generate(),this.#tP=!0,console.debug("Random map"),this.sceneDefn.mapDesign.forEach(e=>console.debug(e))}else this.sceneDefn.mapDesign.push(e)}}}function tG(e,t,i){switch(e){case tk.LEVEL:return new tz(h,t+1,i);case tk.CAST:return new tD(h,t+1,i);case tk.MAP:return new tN(h,t+1,i)}return null}/**
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
 */const tF="custom-pointer-down-event",tW="custom-pointer-up-event",tH="custom-pointer-cancel-event",tU="custom-click-event";function t$(e,t,i){let r=new CustomEvent(t,{detail:i});e.dispatchEvent(r)}function tV(e){if(ei.updateTimeNow(e),d){var t;let i=(e-d)/1e3;tt.update(i),j.showFps&&(t=1/i,Z(U.getContext2D(),`FPS: ${Math.round(t)}`,{x:0,y:U.getCanvasDimensions().height},{color:"green"}))}d=e,window.requestAnimationFrame(tV)}var tX={initialise:async function(e){U.setOptions(e),function(e){let t=0;for(let i in ez){let r=e.measureText(ez[i]),n=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent,o=.5*n-r.fontBoundingBoxDescent;e.fillText(ez[i],-.5*r.width,o),e.getImageData(0,0,1,1).data[3]<=0&&(console.debug(`Emoji ${i} not supported.`),ez[i]=`[${t++}]`),e.clearRect(0,0,r.width,n)}}(U.getContext2D()),function(){let e=U.getCanvas();e.addEventListener("mousedown",t=>t$(e,tF,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("mouseup",t=>t$(e,tW,{x:t.offsetX,y:t.offsetY}),{passive:!0}),e.addEventListener("touchstart",t=>{if(1===t.changedTouches.length){let i=function(e){let t=e.target.getBoundingClientRect();return{x:e.touches[0].pageX-t.left,y:e.touches[0].pageY-t.top}}(t);c=new m(i.x,i.y),t$(e,tF,{x:i.x,y:i.y})}},{passive:!0}),e.addEventListener("touchend",t=>{1===t.changedTouches.length&&t$(e,tW,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("touchcancel",t=>{t$(e,tH,{x:c?.x,y:c?.y}),c=null},{passive:!0}),e.addEventListener("click",t=>{t$(e,tU,{x:t.offsetX,y:t.offsetY})}),e.addEventListener(tU,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);e_.resolveClick(r)||q.resolveClick(r)}),e.addEventListener(tF,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);e_.resolvePointerDown(r)}),e.addEventListener(tW,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);e_.resolvePointerUp(r)}),e.addEventListener(tH,e=>{let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);e_.resolvePointerCancel(r)}),e.addEventListener("contextmenu",e=>{console.debug("Context menu");let t=e.detail.x,i=e.detail.y,r=U.uiCoordsToMappedPositions(t,i);e_.resolveContextMenu(r)||q.resolveContextMenu(r),e.preventDefault()})}(),e2.showOkDialog("Welcome to the Scripted Dungeon","Let's start").then(()=>{var e;return e=eN.DUNGEON_SCRIPT,fetch(e).then(e=>e.text()).then(e=>e).catch(t=>(console.error(`Error fetching ${e}: ${t}`),null))}).then(e=>tt.setSceneDefinitions(function(e){h=e.split(/\r?\n/),l=[];let t=new tb,i=t_.findFirstSection(h);if(!i)throw Error("Invalid script. No section identifiers found.");let r=tG(i.nextSectionId,i.nextLineIndex,t);for(;r;){let e=r.parse();e?.nextSectionId&&e.nextSectionId!==tk.LEVEL||(l.push(t),t=new tb),r=e?tG(e.nextSectionId,e.nextLineIndex,t):null}return l}(e))).then(()=>ty.triggerEvent(ty.EventId.START_GAME)).then(()=>void window.requestAnimationFrame(tV)).catch(e=>{console.error(e),alert(`Fatal error in main game. ${e.message}`)})}};window.addEventListener("load",()=>{tX.initialise({width:800,height:600,maxScale:2.4,minScale:1,sizingMethod:"COVER",alpha:!1})});
//# sourceMappingURL=index.7f1d8a8e.js.map
