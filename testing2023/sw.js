if(!self.define){let s,e={};const t=(t,i)=>(t=new URL(t+".js",i).href,e[t]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=t,s.onload=e,document.head.appendChild(s)}else s=t,importScripts(t),e()})).then((()=>{let s=e[t];if(!s)throw new Error(`Module ${t} didn’t register its module`);return s})));self.define=(i,r)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let a={};const o=s=>t(s,c),l={module:{uri:c},exports:a,require:o};e[c]=Promise.all(i.map((s=>l[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"text2lesson"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/styles/candy.css",revision:"2d244de6baef43cfb6cdb6b631441494"},{url:"assets/styles/cards.css",revision:"7c96b3ba6fdd3227964f10e49411c1fe"},{url:"assets/styles/lessons.css",revision:"285b71eb4ca1aa100913b0e5e0c0c06e"},{url:"assets/styles/style.css",revision:"095a3e5d466cc7e154a1d3e20e252cd8"},{url:"assets/styles/utils-controls.css",revision:"43a2ea9c41709be2a123007f6e7233e5"},{url:"assets/styles/utils-dialogs.css",revision:"ef0c89e65f2199d2faf3614bbfc90b14"},{url:"assets/styles/utils-icons.css",revision:"5e6da588b954dd7c575704b87560bd36"},{url:"assets/styles/utils-menu.css",revision:"ce1f245d67210c5c05a773c8d2bb6a19"},{url:"assets/styles/utils.css",revision:"a57da2773beb1491511b62174fad3503"},{url:"assets/third-party/font-awesome/css/brands.min.css",revision:"120cd1fc94476fc0d8df485f8f937e20"},{url:"assets/third-party/font-awesome/css/fontawesome.min.css",revision:"835b264d24ffdf8fe3800a61266fa76a"},{url:"assets/third-party/font-awesome/css/solid.min.css",revision:"7c68b1b1aad853b83d0c29a5eefc6eb5"},{url:"index.html",revision:"76a91e8ca803abedb4bf736fb158bf2d"},{url:"session-data-builder.html",revision:"186ad465389531bf37538df51a78c6a9"},{url:"text2lesson.js",revision:"80ac0059b43d21aa9649e4753a4b24c3"}],{})}));
//# sourceMappingURL=sw.js.map