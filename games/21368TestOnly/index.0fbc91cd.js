// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aJ0Tr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e8a5cd20fbc91cd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fFaKF":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameJs = require("./utils/game/game.js");
var _gameJsDefault = parcelHelpers.interopDefault(_gameJs);
window.addEventListener("load", ()=>{
    const DESIGN_WIDTH = 640;
    const DESIGN_HEIGHT = 480;
    (0, _gameJsDefault.default).initialise({
        width: DESIGN_WIDTH,
        height: DESIGN_HEIGHT,
        maxScale: 2,
        minScale: 1,
        sizingMethod: "COVER",
        alpha: false
    });
});

},{"./utils/game/game.js":"ecf5i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecf5i":[function(require,module,exports) {
/**
 * @file The main game. This is a singleton as there can only be a single game.
 *
 * @module utils/game/game
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screenJs = require("./screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _worldJs = require("./world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
var _hudJs = require("./hud.js");
var _hudJsDefault = parcelHelpers.interopDefault(_hudJs);
var _emojisJs = require("../text/emojis.js");
var _clockJs = require("../time/clock.js");
var _clockJsDefault = parcelHelpers.interopDefault(_clockJs);
var _debugJs = require("../debug.js");
var _textJs = require("../text/text.js");
var _assetLoadersJs = require("../assetLoaders.js");
var _scriptParserJs = require("../../scriptReaders/scriptParser.js");
var _scriptParserJsDefault = parcelHelpers.interopDefault(_scriptParserJs);
var _sceneManagerJs = require("../game/sceneManager.js");
var _sceneManagerJsDefault = parcelHelpers.interopDefault(_sceneManagerJs);
var _uiJs = require("../dom/ui.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
var _cameraJs = require("./camera.js");
var _hudNavSetJs = require("./hudNavSet.js");
var _pointerActionsJs = require("../dom/pointerActions.js");
/** @type {DOMHighResTimeStamp} */ let lastTimeStamp;
/**
 * @type {import('./scene.js').Scene}
 */ let currentScene;
/**
 * @type {boolean}
 */ let updateScene = false;
/** @type {import('../sprites/sprite.js').Sprite}  */ let cameraDolly;
/** @type {NavigationButtons} */ let navigationButtons;
/**
 * Initialise the game engine.
 * @param {Object} screenOptions - @see {@link module:utils/game/screen~setScreen} for
 * details of options.
 */ async function initialise(screenOptions) {
    (0, _screenJsDefault.default).setOptions(screenOptions);
    (0, _emojisJs.checkEmojis)((0, _screenJsDefault.default).getContext2D());
    setupListeners();
    // Need a menu here but for now, just load the test screen.
    (0, _uiJsDefault.default).showOkDialog("Welcome to the Scripted Dungeon", "Let's start").then(()=>_assetLoadersJs.loadTextFromUrl(_assetLoadersJs.Urls.DUNGEON_SCRIPT)).then((script)=>{
        (0, _sceneManagerJsDefault.default).setSceneDefinitions((0, _scriptParserJsDefault.default)(script));
        setScene((0, _sceneManagerJsDefault.default).getScene(0));
    }).catch((error)=>alert(error.message));
}
/**
 * Set up the listeners.
 */ function setupListeners() {
    const canvas = (0, _screenJsDefault.default).getCanvas();
    _pointerActionsJs.addPointerListeners(canvas);
    canvas.addEventListener(_pointerActionsJs.CUSTOM_CLICK_EVENT_NAME, (event)=>{
        const x = event.detail.x;
        const y = event.detail.y;
        const mappedPositions = (0, _screenJsDefault.default).uiCoordsToMappedPositions(x, y);
        console.debug(`Canvas click at (${x}, ${y}): canvas (${mappedPositions.canvas.x}, ${mappedPositions.canvas.y}), world (${mappedPositions.world.x}, ${mappedPositions.world.y})`);
        if (!(0, _hudJsDefault.default).resolveClick(mappedPositions)) (0, _worldJsDefault.default).resolveClick(mappedPositions);
    });
    canvas.addEventListener(_pointerActionsJs.CUSTOM_POINTER_DOWN_EVENT_NAME, (event)=>{
        const x = event.detail.x;
        const y = event.detail.y;
        const mappedPositions = (0, _screenJsDefault.default).uiCoordsToMappedPositions(x, y);
        console.debug(`Canvas pointer down at (${x}, ${y}): canvas (${mappedPositions.canvas.x}, ${mappedPositions.canvas.y}), world (${mappedPositions.world.x}, ${mappedPositions.world.y})`);
        (0, _hudJsDefault.default).resolvePointerDown(mappedPositions);
    });
    canvas.addEventListener(_pointerActionsJs.CUSTOM_POINTER_UP_EVENT_NAME, (event)=>{
        const x = event.detail.x;
        const y = event.detail.y;
        const mappedPositions = (0, _screenJsDefault.default).uiCoordsToMappedPositions(x, y);
        console.debug(`Canvas pointer up at (${x}, ${y}): canvas (${mappedPositions.canvas.x}, ${mappedPositions.canvas.y}), world (${mappedPositions.world.x}, ${mappedPositions.world.y})`);
        (0, _hudJsDefault.default).resolvePointerUp(mappedPositions);
    });
}
/** Set the current scene, unloading any existing scene
 * @param {import('./scene.js').Scene} scene
 */ function setScene(scene) {
    updateScene = false;
    unloadScene(currentScene).then(()=>loadScene(scene)).then(()=>start());
}
/**
 * Load scene
 * @param {import('./scene.js').Scene} scene
 * @returns {Promise} fulfills to null
 */ function loadScene(scene) {
    currentScene = scene;
    return scene.load().then(()=>scene.initialise()).then(()=>createHud());
}
/**
 * Unload scene
 * @param {import('./scene.js').Scene} scene
 * @returns {Promise} fulfills to null
 */ function unloadScene(scene) {
    if (scene) return scene.unload().then(()=>clearHud());
    else return Promise.resolve(null);
}
function start() {
    updateScene = true;
    window.requestAnimationFrame(gameLoop);
}
/**
 * Create the HUD
 */ function createHud() {
    if (!navigationButtons) navigationButtons = new (0, _hudNavSetJs.NavigationButtons)(cameraDolly, 48, (0, _hudNavSetJs.NavigationLocation).BR);
    (0, _hudJsDefault.default).setVisible(true);
}
/**
 * Clear the HUD.
 */ function clearHud() {
    (0, _hudJsDefault.default).clear();
    (0, _hudJsDefault.default).setVisible(false);
}
/**
 * Main animation loop.
 * @param {DOMHighResTimeStamp} timeStamp
 */ function gameLoop(timeStamp) {
    if (!updateScene) return;
    (0, _clockJsDefault.default).updateTimeNow(timeStamp);
    if (lastTimeStamp) {
        const deltaSeconds = (timeStamp - lastTimeStamp) / 1000;
        (0, _screenJsDefault.default).clearCanvas();
        (0, _screenJsDefault.default).setOpacity(currentScene.getOpacity());
        (0, _worldJsDefault.default).update(deltaSeconds);
        currentScene.update(deltaSeconds);
        (0, _screenJsDefault.default).setOpacity(1);
        (0, _hudJsDefault.default).update(deltaSeconds);
        cameraDolly?.update(deltaSeconds);
        if (_debugJs.OPTIONS.showFps) showFps(1 / deltaSeconds);
    }
    lastTimeStamp = timeStamp;
    window.requestAnimationFrame(gameLoop);
}
/**
 * Show frames per second on screen.
 * @param {number} fps - frames per second
 */ function showFps(fps) {
    _textJs.writeText((0, _screenJsDefault.default).getContext2D(), `FPS: ${Math.round(fps)}`, {
        x: 0,
        y: (0, _screenJsDefault.default).getCanvasDimensions().height
    }, {
        color: "green"
    });
}
/**
 * Set camera dolly
 * @param {import('../sprites/sprite.js').Sprite} sprite
 * @param {number} speed - See {@link module:utils/game/camera.createCameraDolly}
 * @param {number} proportionSeparated - See {@link module:utils/game/camera.createCameraDolly}
 */ function setCameraToTrack(sprite, speed, proportionSeparated) {
    cameraDolly = new (0, _cameraJs.CameraDolly)(sprite, speed, proportionSeparated);
}
/**
 * The game singleton
 */ const GAME = {
    initialise: initialise,
    setScene: setScene,
    setCameraToTrack: setCameraToTrack
};
exports.default = GAME;

},{"./screen.js":"kFko1","./world.js":"7yYJp","./hud.js":"2372R","../text/emojis.js":"58K9k","../time/clock.js":"1IXrP","../debug.js":"iAZ6H","../text/text.js":"7DTYO","../assetLoaders.js":"5us2u","../../scriptReaders/scriptParser.js":"7pE1C","../game/sceneManager.js":"kwQEf","../dom/ui.js":"itFhR","./camera.js":"79pEt","./hudNavSet.js":"7hZZq","../dom/pointerActions.js":"4rcPq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFko1":[function(require,module,exports) {
/**
 * @file Utilities for handling the screen size. The screen is implemented as
 * a singleton.
 * The game is configured as a world and a screen. The screen is the area that is
 * rendered with a canvas. The world is the total space in which objects can
 * exist. The world is potentially unbounded.
 *
 * The canvas is set to the same size as the screen and then the canvas is
 * resized to fit the display using CSS.
 *
 * The canvas is centred on the camera, so although the canvas rect and screen
 * rect are the same size, the screen always has its top left at 0, 0 in the world
 * whereas the canvas rect may effectively move around the world.
 *
 * @module utils/screen
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fontsJs = require("../text/fonts.js");
var _geometryJs = require("../geometry.js");
/**
 * @typedef {Object} ScreenDetails
 * @property {HTMLCanvasElement} canvas
 * @property {number} width
 * @property {number} height
 * @property {number} x
 * @property {number} y
 */ let throttleTimer = null;
let canvas = null;
let canvasRect = null;
let canvasHalfWidth = 0;
let canvasHalfHeight = 0;
let canvasAlpha = true;
let visibleCanvasRect = null;
let glass = null;
let glassClickListener = null;
let glassRect = new (0, _geometryJs.Rectangle)(0, 0, 0, 0);
let left = 0;
let top = 0;
//let screenRect;
let scale = 1;
let maxScale = 1;
let minScale = 0.1;
let sizingMethod = "COVER";
let cameraPosition = new (0, _geometryJs.Position)(0, 0, 0);
/**
 * Add event listener to handle resizing of the window.
 */ window.addEventListener("resize", ()=>{
    if (throttleTimer !== null) return; // it will get handled.
    throttleTimer = window.setTimeout(()=>{
        throttleTimer = null;
        sizeScreen();
        sizeGlass();
    }, 200);
});
/**
 * @param {Object} options - config options.
 * @param {number} options.width - the design width for the screen.
 * @param {number} options.height - the design height for the page.
 * @param {number} options.maxScale - maximum scaling allowed
 * @param {string} options.sizingMethod  - 'FIT' or 'COVER'. Defaults to 'FIT'
 * @param {boolean} options.alpha - Should canvas have an alpha channel
 */ function setOptions(options) {
    if (canvas) {
        console.error("Multiple calls to setScreen ignored.");
        return;
    }
    _fontsJs.initialise(options.width);
    canvas = document.createElement("canvas");
    canvas.setAttribute("width", options.width);
    canvas.setAttribute("height", options.height);
    canvas.innerText = "Loading the app.";
    canvasRect = new (0, _geometryJs.Rectangle)(0, 0, options.width, options.height);
    canvasHalfWidth = options.width / 2;
    canvasHalfHeight = options.height / 2;
    document.body.appendChild(canvas);
    canvas.style.position = "absolute";
    maxScale = options.maxScale;
    minScale = options.minScale;
    sizingMethod = options.sizingMethod;
    canvasAlpha = options.alpha;
    sizeScreen();
    addGlass();
    sizeGlass();
}
/**
 * Create a Dom layer over the canvas
 */ function addGlass() {
    glass = document.createElement("div");
    glass.id = "glass";
    document.body.appendChild(glass);
    glass.style.display = "none";
    glass.style.position = "absolute";
    const content = document.createElement("div");
    content.id = "glass-content";
    glass.appendChild(content);
}
/**
 * Size the screen
 * @param {number} aspectRatio - aspect ratio (width / height) of the screen
 * @param {number} windowAspectRatio - aspect ratio (width / height) of the screen
 * @param {string} method - FIT or COVER. Defaults to FIT
 */ function shouldFitHeight(aspectRatio, windowAspectRatio, sizingMethod) {
    if (sizingMethod === "COVER") return aspectRatio > windowAspectRatio;
    else return aspectRatio < windowAspectRatio;
}
/**
 * Resize the screen according to the current inner window dimensions.
 */ function sizeScreen() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let aspectRatio = canvasRect.width / canvasRect.height;
    let displayedHeight = 0;
    let displayedWidth = 0;
    const windowAspectRatio = windowWidth / windowHeight;
    const fitHeight = shouldFitHeight(aspectRatio, windowAspectRatio, sizingMethod);
    if (fitHeight) {
        displayedHeight = windowHeight;
        displayedWidth = displayedHeight * aspectRatio;
    } else {
        displayedWidth = windowWidth;
        displayedHeight = displayedWidth / aspectRatio;
    }
    scale = displayedWidth / canvasRect.width;
    if (scale > maxScale) {
        scale = maxScale;
        displayedWidth = scale * canvasRect.width;
        displayedHeight = scale * canvasRect.height;
    } else if (scale < minScale) {
        scale = minScale;
        displayedWidth = scale * canvasRect.width;
        displayedHeight = scale * canvasRect.height;
    }
    left = (windowWidth - displayedWidth) / 2;
    top = (windowHeight - displayedHeight) / 2;
    canvas.style.left = `${left}px`;
    canvas.style.top = `${top}px`;
    canvas.style.width = `${displayedWidth}px`;
    canvas.style.height = `${displayedHeight}px`;
    const visibleCanvasWidth = Math.min(windowWidth / scale, displayedWidth / scale);
    const visibleCanvasHeight = Math.min(windowHeight / scale, displayedHeight / scale);
    const visibleCanvasOffsetX = 0.5 * (canvasRect.width - visibleCanvasWidth);
    const visibleCanvasOffsetY = 0.5 * (canvasRect.height - visibleCanvasHeight);
    visibleCanvasRect = new (0, _geometryJs.Rectangle)(visibleCanvasOffsetX, visibleCanvasOffsetY, visibleCanvasWidth, visibleCanvasHeight);
}
/**
 * Size the glass layer to fit over the screen
 */ function sizeGlass() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const left = Math.max(parseInt(canvas.style.left), 0);
    const top = Math.max(parseInt(canvas.style.top), 0);
    const width = Math.min(parseInt(canvas.style.width), windowWidth);
    const height = Math.min(parseInt(canvas.style.height), windowHeight);
    glass.style.left = `${left}px`;
    glass.style.top = `${top}px`;
    glass.style.width = `${width}px`;
    glass.style.height = `${height}px`;
    syncDomFonts();
    glassRect = new (0, _geometryJs.Rectangle)(left, top, width, height);
}
/**
 * Adjust the font sizes to ensure glass in sync with canvas.
 */ function syncDomFonts() {
    const rootFontSize = _fontsJs.getRootFontSize() * scale;
    document.documentElement.style.fontSize = `${rootFontSize}px`;
}
/**
 * @typedef {Object} screenDetails
 * @property {HTMLCanvasElement} canvas
 * @property {number} width - design width
 * @property {number} height - design height
 */ /**
 * Clear the canvas.
 */ function clearCanvas() {
    getContext2D().clearRect(0, 0, canvasRect.width, canvasRect.height);
}
/**
 * Get the bounds of the world that are plotted in the canvas.
 * @returns {Rectangle}
 */ function geWorldInCanvasBounds() {
    return new (0, _geometryJs.Rectangle)(cameraPosition.x, cameraPosition.y, canvasRect.width, canvasRect.height);
}
/**
 * Get visible canvas bounds.
 */ function getVisibleCanvasBounds() {
    let left = (glassRect.x - canvasRect.x) * scale;
    let top = (glassRect.y - canvasRect.y) * scale;
    let right = left + glassRect.width * scale;
    let bottom = top + glassRect.height * scale;
    // now clip
    left = Math.max(left, canvasRect.x);
    top = Math.max(top, canvasRect.y);
    right = Math.min(right, canvasRect.x + canvasRect.width);
    bottom = Math.min(bottom, canvasRect.y + canvasRect.height);
    return new (0, _geometryJs.Rectangle)(left, top, right - left, bottom - top);
}
/**
 * Get canvas dimensions.
 * @returns {Dims2D}
 */ function getCanvasDimensions() {
    return {
        width: canvasRect.width,
        height: canvasRect.height
    };
}
/**
 * Get the canvas context.
 * @returns {CanvasRenderingContext2D}
 */ function getContext2D() {
    return canvas.getContext("2d", {
        alpha: canvasAlpha
    });
}
/**
 * Set the content of the glass layer. This clears the glass first.
 * @param {HTMLElement} element
 * @param {function} onClick - callback if glass clicked.
 */ function displayOnGlass(element, onClick) {
    wipeGlass();
    const content = document.getElementById("glass-content");
    content.replaceChildren(element);
    glass.style.display = "block";
    if (onClick) {
        content.addEventListener("click", onClick);
        glassClickListener = onClick;
    }
}
/**
 * Clear and close the glass layer. The layer is hidden and it's content removed.
 */ function wipeGlass() {
    const content = document.getElementById("glass-content");
    content.innerHTML = "";
    glass.style.display = "none";
    if (glassClickListener) content.removeEventListener("click", glassClickListener);
}
/**
 * Pan the camera.
 * @param {number} dx - movement in world units
 * @param {number} dy - movement in world units
 */ function panCamera(dx, dy) {
    cameraPosition.x += dx;
    cameraPosition.y += dy;
}
/**
 * Centre the canvas on a point
 * @param {Point} point
 */ function centreCanvasOn(point) {
    cameraPosition.x = point.x - canvasHalfWidth;
    cameraPosition.y = point.y - canvasHalfHeight;
}
/**
 * Convert a distance from ui units to world units.
 * @param {number} dist
 * @returns {number}
 */ function uiToWorld(dist) {
    return dist / scale;
}
/**
 * Convert a distance from world units to ui units.
 * @param {number} dist
 * @returns {number}
 */ function worldToUi(dist) {
    return dist * scale;
}
/**
 * @typedef {Object} MappedPositions
 * @property {Position} canvas - position on the canvas
 * @property {Position} world - position in the world
 */ /**
 * Convert ui Coordinates to world Position
 * @param {number} x  -position in the ui
 * @param {number} y  -position in the ui
 * @returns {MappedPositions} position on the canvas
 */ function uiCoordsToMappedPositions(x, y) {
    x = uiToWorld(x);
    y = uiToWorld(y);
    const canvasPosition = new (0, _geometryJs.Position)(Math.round(x), Math.round(y));
    const worldPosition = new (0, _geometryJs.Position)(Math.round(x + cameraPosition.x), Math.round(y + cameraPosition.y), -cameraPosition.rotation);
    return {
        canvas: canvasPosition,
        world: worldPosition
    };
}
/**
 * Convert world Position to canvas Position
 * @param {Position} position  -position in the world
 * @returns {Position} position on the canvas
 */ function worldPositionToCanvas(position) {
    return new (0, _geometryJs.Position)(position.x - cameraPosition.x, position.y - cameraPosition.y, position.rotation);
}
/**
 * Convert canvas Position to world Position
 * @param {Position} position  -position on the canvas
 * @returns {Position} position in the world
 */ function canvasPositionToWorld(position) {
    return new (0, _geometryJs.Position)(position.x + cameraPosition.x, position.y + cameraPosition.y, position.rotation);
}
/**
 * Convert glass position to world position. Negative positions are calculated as
 * offsets from the right and bottom of the glass dimensions. Otherwise they are
 * calculated as offsets from the left and top.
 * @returns {Position}
 */ function glassPositionToWorld(position) {
    const xOrigin = position.x < 0 ? visibleCanvasRect.x + visibleCanvasRect.width : visibleCanvasRect.x;
    const yOrigin = position.x < 0 ? visibleCanvasRect.y + visibleCanvasRect.height : visibleCanvasRect.y;
    let x = xOrigin + position.x;
    let y = yOrigin + position.y;
    /*
  let x = position.x < 0 ? glassRect.width + position.x : position.x;
  let y = position.y < 0 ? glassRect.height + position.y : position.y;
  const newPosition = new Position(
    x / scale + 0.5 * (canvasRect.width - glassRect.width / scale),
    y / scale + 0.5 * (canvasRect.height - glassRect.height / scale)
  );
  */ return canvasPositionToWorld(new (0, _geometryJs.Position)(x, y, position.rotation));
}
/**
 * Test if rectangle on screen.
 * @param {Rectangle} rect
 * @return {boolean} true if on screen
 */ function isOnScreen(rect) {
    return rect.overlaps(canvasRect);
}
/**
 * Test if rectangle is visible on the canvas.
 * @param {Rectangle} rect - this should have been converted to canvas coordinates
 * @return {boolean} true if on screen
 */ function isOnCanvas(rect) {
    return rect.overlaps(canvasRect);
}
/**
 * Get the dimensions of the glass rect. This is scaled to fit the canvas and
 * screen, so this rectangle, in canvas dimensions, is always visible.
 * @returns {Rectangle}
 */ function getGlassRect() {
    return glassRect;
}
/**
 * Set the global opacity.
 * @param {number} opacity
 */ function setOpacity(opacity) {
    getContext2D().globalAlpha = opacity;
}
/**
 * Screen object
 */ const SCREEN = {
    canvasPositionToWorld: canvasPositionToWorld,
    centreCanvasOn: centreCanvasOn,
    clearCanvas: clearCanvas,
    displayOnGlass: displayOnGlass,
    getCanvas: ()=>canvas,
    getContext2D: getContext2D,
    getCanvasDimensions: getCanvasDimensions,
    getGlassRect: getGlassRect,
    getVisibleCanvasBounds: getVisibleCanvasBounds,
    geWorldInCanvasBounds: geWorldInCanvasBounds,
    glassPositionToWorld: glassPositionToWorld,
    isOnCanvas: isOnCanvas,
    isOnScreen: isOnScreen,
    panCamera: panCamera,
    setOpacity: setOpacity,
    setOptions: setOptions,
    wipeGlass: wipeGlass,
    worldPositionToCanvas: worldPositionToCanvas,
    worldToUi: worldToUi,
    uiCoordsToMappedPositions: uiCoordsToMappedPositions,
    uiToWorld: uiToWorld
};
exports.default = SCREEN;

},{"../text/fonts.js":"fVkzI","../geometry.js":"oxWLG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVkzI":[function(require,module,exports) {
/**
 * @file Font data
 *
 * @module utils/text/fonts
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Sets up font sizes based on the design display width.
 * The actual normal font size is worked out using the CSS formula normally
 * based on the display width.
 * @param {number} designWidth
 */ parcelHelpers.export(exports, "initialise", ()=>initialise);
/**
 * Get font CSS for styleName.
 * @param {string} styleName - default, h1, h2, or h3. Defaults to default.
 * @returns {string}
 */ parcelHelpers.export(exports, "getCss", ()=>getCss);
/**
 * Get the root font size. This is the size base on the design dimensions and is
 * the size as written to the canvas. It does not allow for any scaling of the
 * canvas by CSS.
 */ parcelHelpers.export(exports, "getRootFontSize", ()=>getRootFontSize);
const baseSize = 15; // minimum pixel size
/*
 * These should be replicated in the CSS.
 */ const H1_FONT_SCALE = 2.0;
const H2_FONT_SCALE = 1.5;
const H3_FONT_SCALE = 1.2;
const NORMAL_FONT = "Arial, Helvetica, sans-serif";
const HEADING_FONT = "'Space Grotesk', sans-serif"; // cspell:disable-line
const EMOJI_SPRITE_FONT = "'Space Grotesk', sans-serif"; // cspell:disable-line
/**
 * @typedef {Object} TextInfo
 * @property {number} size
 * @property {string} fontName
 */ /**
 * Named styles.
 * @type {Object.<String, TextInfo>}
 */ const textInfo = {
    normal: {
        size: 15,
        fontName: NORMAL_FONT
    },
    h1: {
        size: 30,
        fontName: HEADING_FONT
    },
    h2: {
        size: 22,
        fontName: HEADING_FONT
    },
    h3: {
        size: 18,
        fontName: HEADING_FONT
    },
    emojiSprite: {
        size: 18,
        fontName: EMOJI_SPRITE_FONT
    }
};
function initialise(designWidth) {
    textInfo.normal.size = baseSize + 0.390625 * (designWidth / 100);
    textInfo.h1.size = textInfo.normal.size * H1_FONT_SCALE;
    textInfo.h2.size = textInfo.normal.size * H2_FONT_SCALE;
    textInfo.h3.size = textInfo.normal.size * H3_FONT_SCALE;
    textInfo.emojiSprite.size = designWidth / 10;
}
function getCss(styleName) {
    const info = textInfo[styleName] ?? textInfo["normal"];
    return `${info.size}px ${info.fontName}`;
}
function getRootFontSize() {
    return textInfo.normal.size;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"oxWLG":[function(require,module,exports) {
/**
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
 */ /**
 * Simple 2D dimension
 * @typedef {Object} Dims2D
 * @property {number} width
 * @property {number} height
 */ /**
 * Simple encapsulation of a Point
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point);
/**
 * Velocity class
 */ parcelHelpers.export(exports, "Velocity", ()=>Velocity);
/**
 * Simple 2D position. Similar to point but including rotation.
 * @implements {Point}
 */ parcelHelpers.export(exports, "Position", ()=>Position);
/**
 * @typedef {Object} RectangleBounds
 * @property {number} x;
 * @property {number} y;
 * @property {number} right;
 * @property {number} bottom;
 * @property {number} width;
 * @property {number} height;
 */ /**
 * Simple rectangle.
 */ parcelHelpers.export(exports, "Rectangle", ()=>Rectangle);
parcelHelpers.export(exports, "MIN_POINT", ()=>MIN_POINT);
parcelHelpers.export(exports, "MAX_POINT", ()=>MAX_POINT);
class Point {
    /** @type {number}*/ x;
    /** @type {number}*/ y;
    /**
   * Create point
   * @param {number} x
   * @param {number} y
   */ constructor(x, y){
        this.x = x;
        this.y = y;
    }
    /**
   * Create a copy of a point.
   * @param {Point} point
   * @returns {Point}
   */ static copy(point) {
        return new Point(point.x, point.y);
    }
    /**
   * Check if points are coincident.
   * @returns {boolean}
   */ coincident(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
   * Get angle to target using normal cartesian coordinates; i.e up is +ve y.
   * @param {Point} targetPos
   * @returns {number} angle in radians.
   */ getCartesianAngleTo(targetPos) {
        return Math.atan2(targetPos.y - this.y, targetPos.x - this.x);
    }
    /**
   * Get angle to target using normal screen coordinates; i.e down is +ve y.
   * @param {Point} targetPos
   * @returns {number} angle in radians.
   */ getScreenAngleTo(targetPos) {
        return Math.atan2(this.y - targetPos.y, targetPos.x - this.x);
    }
    /**
   * String representation which can be used as key in maps.
   * @returns {string}
   */ toString() {
        return `(${this.x},${this.y})`;
    }
    /**
   * Test if the position is at the same point, rounded to integer as this.
   * Rotation is ignored.
   * @param {Position} position
   * @returns {boolean}
   */ isCoincident(position) {
        return Math.round(this.x) === Math.round(position.x) && Math.round(this.y) === Math.round(position.y);
    }
}
class Velocity {
    /** x velocity @type {number} */ x;
    /** y velocity @type {number} */ y;
    /** rotational velocity @type {number} */ rotation;
    /**
   *
   * @param {number} velX
   * @param {number} velY
   * @param {number} velRot
   */ constructor(velX, velY, velRot){
        this.x = velX;
        this.y = velY;
        this.rotation = velRot;
    }
    /**
   * Get the angle in radians counterclockwise from x axis. Note that in the
   * atan2 calculation the y axis is positive upwards but in the game coordinate
   * system the y axis is positive downwards.
   * @returns {number}
   */ getDirection() {
        return Math.atan2(-this.y, this.x);
    }
}
class Position extends Point {
    /** type {number} */ rotation;
    /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} rotation
   */ constructor(x, y, rotation){
        super(x, y);
        this.y = y;
        this.rotation = rotation;
    }
    /**
   * Create a Position from a Point.
   * @param {Point} point
   * @returns {Position}
   */ static fromPoint(point) {
        return new Position(point.x, point.y, 0);
    }
    /**
   * Create copy
   * @param {Position} position
   */ static copy(position) {
        return new Position(position.x, position.y, position.rotation);
    }
    /** Get a new position representing this position relative to a new origin.
   * @param {Position} origin
   * @returns {Position}
   */ getRelativeTo(origin) {
        return new Position(this.x - origin.x, this.y - origin.y, this.rotation - origin.rotation);
    }
    /**
   * Test that both x and y coordinates are within the length.
   * @param {Position} targetPos
   * @param {number} length
   * @returns {boolean}
   */ withinSquare(targetPos, length) {
        return Math.abs(targetPos.x - this.x) < length && Math.abs(targetPos.y - this.y) < length;
    }
}
class Rectangle {
    /** @type {number} */ x;
    /** @type {number} */ y;
    /** @type {number} */ width;
    /** @type {number} */ height;
    /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */ constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /** Get the bottom right
   * @returns {Point}
   */ getBottomRight() {
        return new Point(this.x + this.width, this.y + this.height);
    }
    /** Get the top left
   * @returns {Point}
   */ getTopLeft() {
        return new Point(this.x, this.y);
    }
    /**
   * Test if this overlaps another rectangle
   * @param {Rectangle} otherRect
   * @returns {boolean} true if overlapping.
   */ overlaps(otherRect) {
        const myBR = this.getBottomRight();
        const otherRectBR = otherRect.getBottomRight();
        const noOverlap = otherRect.x > myBR.x || otherRect.y > myBR.y || otherRectBR.x < this.x || otherRectBR.y < this.y;
        return !noOverlap;
    }
    /**
   * Test if this rectangle contains a point
   * @param {Point | Position} point
   * @returns {boolean} - true if point contained
   */ containsPoint(point) {
        return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
    }
    /**
   * Test if this rectangle contains a coordinate
   * @param {number} x
   * @param {number} y
   * @returns {boolean} - true if point contained
   */ containsCoordinate(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
    /**
   * Test if this rectangle equals another.
   * @param {Rectangle} otherRect
   * @returns {boolean}
   */ equals(other) {
        return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
    }
}
const MIN_POINT = new Point(Number.MIN_VALUE, Number.MIN_VALUE);
const MAX_POINT = new Point(Number.MAX_VALUE, Number.MAX_VALUE);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7yYJp":[function(require,module,exports) {
/**
 * @file World limitations
 *
 * @module utils/game/world
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screenJs = require("./screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
/**
 * @type {TileMap}
 */ let worldTileMap;
/**
 * @type {Map<string, Sprite>}
 */ const actors = new Map();
/**
 * Sprites that do not interact
 * @type {Map<string, Sprite>}
 */ const passiveSprites = new Map();
/**
 * Get the world dimensions. The dimensions are based on the worldTileMap size.
 * It defaults to the screen dimensions if no map has been set.
 * @returns {{number, number}} width and height
 */ function getWorldDims() {
    return worldTileMap ? worldTileMap.getDimensions() : (0, _screenJsDefault.default).getCanvasDimensions();
}
/**
 * Add a actor to the world.
 * @param {import('./actors.js').Actor}
 */ function addActor(target) {
    actors.set(target, target);
    worldTileMap.moveTileOccupancyGridPoint(target, null, worldTileMap.worldPointToGrid(target.position));
}
/**
 * Remove actor from the world.
 * @param {import('./actors.js').Actor}
 */ function removeActor(target) {
    const gridPoint = worldTileMap.worldPointToGrid(target.position);
    worldTileMap.deleteOccupancyOfGridPoint(target, gridPoint);
    actors.delete(target);
}
/**
 * Add effect sprite
 * @param {Sprite} sprite
 */ function addPassiveSprite(sprite) {
    passiveSprites.set(sprite, sprite);
}
/**
 * Add effect sprite
 * @param {Sprite} sprite
 */ function removePassiveSprite(sprite) {
    console.debug("Remove passive sprite.");
    passiveSprites.delete(sprite);
}
/**
 * Set the tile map for the world.
 * @param {TileMap}
 */ function setTileMap(tileMap) {
    worldTileMap = tileMap;
}
/**
 * Get the tile map for the world.
 * @returns {TileMap}
 */ function getTileMap() {
    return worldTileMap;
}
/**
 * Remove the tile map from the world.
 * @param {TileMap}
 */ function removeTileMap() {
    worldTileMap = null;
}
/**
 * Update the world. This calls the update methods of the tile map and all sprites/
 * @param {number} deltaSeconds
 */ function update(deltaSeconds) {
    worldTileMap?.update(deltaSeconds);
    actors.forEach((actor)=>{
        const oldGridPoint = worldTileMap.worldPointToGrid(actor.position);
        actor.visible = worldTileMap.canHeroSeeGridPoint(oldGridPoint);
        actor.update(deltaSeconds);
        const newGridPoint = worldTileMap.worldPointToGrid(actor.position);
        worldTileMap.moveTileOccupancyGridPoint(actor, oldGridPoint, newGridPoint);
    });
    passiveSprites.forEach((sprite)=>sprite.update(deltaSeconds));
}
/**
 * Resolve a ui click
 * @param {import('./screen.js').MappedPositions} positions - click coordinates in canvas and world coordinates.
 * @returns {boolean} true if resolved.
 */ function resolveClick(positions) {
    const tile = worldTileMap.getTileAtWorldPoint(positions.world);
    if (tile) {
        tile.actionClick(positions.world);
        return true;
    }
    return false;
}
/**
 * Get the actors
 * @returns {Map<Actor, Actor>}
 */ function getActors() {
    return actors;
}
/**
 * World object singleton.
 */ const WORLD = {
    addActor: addActor,
    addPassiveSprite: addPassiveSprite,
    getActors: getActors,
    getTileMap: getTileMap,
    getWorldDims: getWorldDims,
    removeTileMap: removeTileMap,
    resolveClick: resolveClick,
    removeActor: removeActor,
    removePassiveSprite: removePassiveSprite,
    setTileMap: setTileMap,
    update: update
};
exports.default = WORLD;

},{"./screen.js":"kFko1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2372R":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animationJs = require("../sprites/animation.js");
var _actorsJs = require("./actors.js");
var _spriteRenderersJs = require("../sprites/spriteRenderers.js");
var _screenJs = require("./screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _spriteJs = require("../sprites/sprite.js");
var _geometryJs = require("../geometry.js");
var _indexerJs = require("../arrays/indexer.js");
var _imageManagerJs = require("../sprites/imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
/**
 * @type {Map<string, Sprite>}
 */ const actors = new Map();
/** @type {boolean} */ let visible = false;
/**
 * Add a button to the hud. If two callbacks are provided, an AnimatedImage
 * is required with two frames.
 * @param {SpriteBitmap | AnimatedImage} image
 * @param {import('../ui/interactions.js').UiClickCallback} callbackOn
 * @param {import('../ui/interactions.js').UiClickCallback} callbackOff
 * @returns {Actor}
 */ function addButton(image, callbackOn, callbackOff) {
    const actor = new (0, _actorsJs.Actor)(new (0, _spriteJs.Sprite)({
        renderer: new (0, _spriteRenderersJs.ImageSpriteCanvasRenderer)((0, _screenJsDefault.default).getContext2D(), image)
    }));
    actors.set(actor, actor);
    actor.setOnClick(()=>{
        if (!callbackOff) callbackOn();
        else if (image.getCurrentIndex() === 0) {
            image.setCurrentIndex(1);
            callbackOn();
        } else {
            image.setCurrentIndex(0);
            callbackOff();
        }
    });
    return actor;
}
/**
 * Add a momentary button to the hud. If two callbacks are provided, an AnimatedImage
 * is required with two frames.
 * @param {SpriteBitmap | AnimatedImage} image
 * @param {import('../ui/interactions.js').UiClickCallback} callbackOn
 * @param {import('../ui/interactions.js').UiClickCallback} callbackOff
 * @returns {Actor}
 */ function addMomentaryButton(image, callbackOn, callbackOff) {
    const actor = new (0, _actorsJs.Actor)(new (0, _spriteJs.Sprite)({
        renderer: new (0, _spriteRenderersJs.ImageSpriteCanvasRenderer)((0, _screenJsDefault.default).getContext2D(), image)
    }));
    actors.set(actor, actor);
    actor.setOnPointerDown(()=>{
        image.setCurrentIndex(1);
        callbackOn?.();
    });
    actor.setOnPointerUp(()=>{
        image.setCurrentIndex(0);
        callbackOff?.();
    });
    return actor;
}
/**
 * Remove sprite from the hud.
 * @param {import('../sprites/sprite.js').Sprite}
 */ function removeButton(target) {
    actors.delete(target);
}
/**
 * Clear the HUD
 */ function clear() {
    actors.clear();
}
/**
 * Update the world. This calls the update methods of the tile map and all sprites/
 * @param {number} deltaSeconds
 */ function update(deltaSeconds) {
    if (!visible) return;
    actors.forEach((sprite)=>{
        const uiPos = (0, _geometryJs.Position).copy(sprite.position);
        sprite.position = (0, _screenJsDefault.default).glassPositionToWorld(sprite.position);
        sprite.update(deltaSeconds);
        sprite.position = uiPos;
    });
}
/**
 * Check if the click is in a actor.
 * @param {import('./screen.js').MappedPositions} positions - canvas and world positions
 * @param {Actor} actor
 */ function isHittingActor(positions, actor) {
    const actorCanvasPos = (0, _screenJsDefault.default).glassPositionToWorld(actor.position);
    let boundingBox = actor.sprite.getBoundingBox();
    const canvasBox = new (0, _geometryJs.Rectangle)(actorCanvasPos.x - boundingBox.width / 2, actorCanvasPos.y - boundingBox.height / 2, boundingBox.width, boundingBox.height);
    return canvasBox.containsCoordinate(positions.world.x, positions.world.y);
}
/**
 * Resolve a ui click
 * @param {import('./screen.js').MappedPositions} positions - click in canvas and world coordinates.
 * @returns {boolean} true if resolved.
 */ function resolveClick(positions) {
    if (!visible) return false;
    for (const [keyUnused, actor] of actors)if (isHittingActor(positions, actor)) {
        actor.actionClick(actor, positions.canvas);
        return true;
    }
    return false;
}
/**
 * Resolve a pointer down
 * @param {import('./screen.js').MappedPositions} positions - click in canvas and world coordinates.
 * @returns {boolean} true if resolved.
 */ function resolvePointerDown(positions) {
    if (!visible) return false;
    if (!visible) return false;
    for (const [keyUnused, actor] of actors)if (isHittingActor(positions, actor)) {
        actor.actionPointerDown(actor, positions.canvas);
        return true;
    }
    return false;
}
/**
 * Resolve a ui pointer up event
 * @param {import('./screen.js').MappedPositions} positions - click in canvas and world coordinates.
 * @returns {boolean} true if resolved.
 */ function resolvePointerUp(positions) {
    if (!visible) return false;
    if (!visible) return false;
    for (const [keyUnused, actor] of actors)if (isHittingActor(positions, actor)) {
        actor.actionPointerUp(actor, positions.canvas);
        return true;
    }
    return false;
}
/**
 * Set the visibility of the HUD.
 * @param {boolean} visibility - true to show.
 */ function setVisible(visibility) {
    visible = visibility;
}
/**
 * HUD object
 */ const HUD = {
    addButton: addButton,
    addMomentaryButton: addMomentaryButton,
    clear: clear,
    removeButton: removeButton,
    update: update,
    resolveClick: resolveClick,
    resolvePointerDown: resolvePointerDown,
    resolvePointerUp: resolvePointerUp,
    setVisible: setVisible
};
exports.default = HUD;

},{"../sprites/animation.js":"S9kq1","./actors.js":"3bsFq","../sprites/spriteRenderers.js":"lGWVU","./screen.js":"kFko1","../sprites/sprite.js":"gSPJO","../geometry.js":"oxWLG","../arrays/indexer.js":"cvgPD","../sprites/imageManager.js":"3hqS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"S9kq1":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Collection of SpriteBitmap objects
 */ parcelHelpers.export(exports, "AnimatedImage", ()=>AnimatedImage);
/**
 * Create keyed animated images.
 */ parcelHelpers.export(exports, "KeyedAnimatedImages", ()=>KeyedAnimatedImages);
var _imageManagerJs = require("./imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
var _clockJs = require("../time/clock.js");
var _clockJsDefault = parcelHelpers.interopDefault(_clockJs);
var _indexerJs = require("../arrays/indexer.js");
class AnimatedImage {
    /** @type {boolean} */ playing;
    /** @type {import('./imageManager.js').SpriteBitmap[]} */ #frames;
    /** @type {Indexer} */ #indexer;
    /** @type {number} */ #lastFrameCount;
    /** Period in ms for frame animations @type {number}*/ #framePeriodMs;
    /**
   * Construct animation.
   * @param {number} textureIndex
   * @param {Object | string} filenamePattern - if a string is parsed then the image is a single frame.
   * @param {string} filenamePattern.prefix
   * @param {number} filenamePattern.startIndex - if undefined, then just a single image is used.
   * @param {number} filePattern.padding - index is padded with leading zeros to padding length
   * @param {string} filenamePattern.suffix
   * @param {Object} options
   * @param {number} options.framePeriodMs - period in ms for frame animations.
   * @param {LoopMethod} options.loopMethod - method of looping animation.
   */ constructor(textureIndex, filenamePattern, options){
        this.#frames = [];
        this.#lastFrameCount = 0;
        this.#framePeriodMs = Math.max(1, options.framePeriodMs);
        if (typeof filenamePattern === "string") {
            this.#frames.push((0, _imageManagerJsDefault.default).getFrame(textureIndex, filenamePattern));
            return;
        }
        let index = filenamePattern.startIndex ?? 0;
        let padding = filenamePattern.padding ?? 0;
        let textureFrame;
        do {
            const fileName = `${filenamePattern.prefix}${index.toString().padStart(padding, "0")}${filenamePattern.suffix}`;
            textureFrame = (0, _imageManagerJsDefault.default).getSpriteBitmap(textureIndex, fileName); // imageManager.getFrame(textureIndex, fileName);
            if (textureFrame) this.#frames.push(textureFrame);
            index++;
        }while (textureFrame);
        this.#indexer = new (0, _indexerJs.Indexer)(this.#frames.length, options.loopMethod);
        this.playing = true;
    }
    /**
   * Get current frame
   * @returns {import('./imageManager.js').SpriteBitmap}
   */ getCurrentFrame() {
        if (this.playing) {
            const frameCount = (0, _clockJsDefault.default).getFrameCount(this.#framePeriodMs);
            if (frameCount !== this.#lastFrameCount) {
                this.#indexer.advanceBy(frameCount - this.#lastFrameCount);
                this.#lastFrameCount = frameCount;
            }
        }
        return this.#frames[this.#indexer.index];
    }
    /**
   * Manual movement of frames. Note this automatically switches off playing.
   * @param {number} index - frame index. This will be clipped to the ends of the
   * array.
   */ setCurrentIndex(index) {
        this.playing = false;
        this.#indexer.index = index;
    }
    /**
   * Get the current index.
   * @returns {number}
   */ getCurrentIndex() {
        return this.#indexer.index;
    }
}
class KeyedAnimatedImages {
    /** @type {Object.<string, AnimatedImage>} */ #animatedImages;
    /** @type {string} */ #currentImage;
    /**
   * Create the keyed animated image
   * @param {string} key
   * @param {AnimatedImage} animatedImage
   */ constructor(key, animatedImage){
        this.#animatedImages = {};
        this.#animatedImages[key] = animatedImage;
        this.#currentImage = animatedImage;
    }
    /**
   * Get the current image.
   */ get image() {
        return this.#currentImage;
    }
    /**
   * Add image to available images.
   * @param {string} key
   * @param {AnimatedImage} animatedImage
   */ addAnimatedImage(key, animatedImage) {
        this.#animatedImages[key] = animatedImage;
    }
    /**
   * Set the current animation key. Ignored if it does not exist.
   * @param {string} key
   */ setCurrentImage(key) {
        //eslint-disable-next-line no-prototype-builtins
        if (this.#animatedImages.hasOwnProperty(key)) this.#currentImage = this.#animatedImages[key];
        else console.error(`Attempt to set current key to nonexistent value of ${key}`);
    }
    /**
   * Get current frame
   * @returns {import('./imageManager.js').SpriteBitmap}
   */ getCurrentFrame() {
        return this.#currentImage.getCurrentFrame();
    }
}

},{"./imageManager.js":"3hqS8","../time/clock.js":"1IXrP","../arrays/indexer.js":"cvgPD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hqS8":[function(require,module,exports) {
/**
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
 */ /**
 * @typedef {Object} SpriteBitmap
 * @property {Image} image
 * @property {number} width
 * @property {number} height
 * @property {number} centreX
 * @property {number} centreY
 */ /** @type {Array.Map<string, SpriteBitmap>} */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let spriteMaps = [];
/**
 * Load an image
 * @param {URL} srcUrl - source URL
 * @returns {Promise} fulfils to @type {Image}.
 */ function loadImage(srcUrl) {
    return new Promise((resolve)=>{
        const image = new Image();
        image.addEventListener("load", ()=>{
            console.debug("Image loaded.");
            resolve(image);
        });
        image.src = srcUrl;
    });
}
/**
 * Load a number of images
 * @param {URL[]} srcUrls - array of source URLs
 * @returns {Promise} fulfils to @type {Image[]}.
 */ function loadImages(srcUrls) {
    const promises = [];
    srcUrls.forEach((url)=>promises.push(loadImage(url)));
    return Promise.all(promises);
}
/**
 * Load sprite map.
 * @param {Object} spriteMapDef Sprite map definition from TexturePacker Array JSON file without multipack
 * @param {URL} textureUrl
 * @returns {Promise} fulfils to array of sprite map keys
 */ function loadSpriteMap(spriteMapDef, textureUrl) {
    return loadImage(textureUrl).then((image)=>buildSpriteMap(spriteMapDef, image));
}
/**
 * Build the sprite map
 * @param {Object} spriteMapDef - map definition from texture mapper. Array JSON no multi pack.
 * @param {Image} texture - images providing texture for sprite map.
 * @returns {Promise} fulfils to array of sprite map keys.
 */ function buildSpriteMap(spriteMapDef, texture) {
    const promises = [];
    const map = new Map();
    spriteMaps.push(map);
    spriteMapDef.frames.forEach((frame)=>{
        promises.push(createImageBitmap(texture, frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h).then((spriteImage)=>{
            const spriteBitmap = {
                image: spriteImage,
                width: frame.frame.w,
                height: frame.frame.h,
                centreX: frame.sourceSize.w / 2 - frame.spriteSourceSize.x,
                centreY: frame.sourceSize.h / 2 - frame.spriteSourceSize.y
            };
            map.set(frame.filename, spriteBitmap);
            return frame.filename;
        }));
    });
    return Promise.all(promises);
}
/**
 * @param {number} spriteMapIndex
 * @param {string} filename
 * @returns {SpriteBitmap} null if filename not found.
 */ function getSpriteBitmap(spriteMapIndex, filename) {
    const result = spriteMaps[spriteMapIndex].get(filename);
    if (!result) console.debug(`Failed to find image ${filename} at index ${spriteMapIndex}`);
    return result;
}
/**
 * Singleton image manager.
 */ const IMAGE_MANAGER = {
    getSpriteBitmap: getSpriteBitmap,
    loadImage: loadImage,
    loadImages: loadImages,
    loadSpriteMap: loadSpriteMap
};
exports.default = IMAGE_MANAGER;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IXrP":[function(require,module,exports) {
/**
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
 */ /**
 * @type {DOMHighResTimeStamp}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let currentTimeMs = 0;
/**
 * @param {DOMHighResTimeStamp} timeNowMs
 */ function updateTimeNow(timeNowMs) {
    currentTimeMs = timeNowMs;
}
/**
 * Get a frame counter.
 * @param {number} framePeriodMs - time between frames
 * @returns {number}
 */ function getFrameCount(framePeriodMs) {
    return Math.floor(currentTimeMs / framePeriodMs);
}
/**
 *  Game clock as singleton.
 */ const GAME_CLOCK = {
    updateTimeNow: updateTimeNow,
    getFrameCount: getFrameCount
};
exports.default = GAME_CLOCK;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvgPD":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoopMethod", ()=>LoopMethod);
/**
 * Class to handle indexing through arrays. This allows an index to be incremented
 * so that it wraps at the end for a circular buffer, reverses for an oscillating
 * index or just stops at the end.
 */ parcelHelpers.export(exports, "Indexer", ()=>Indexer);
var _mathsJs = require("../maths.js");
const LoopMethod = {
    WRAP: 0,
    REVERSE: 1,
    STOP: 2
};
class Indexer {
    /** @type {number} */ #length;
    /** @type {number} */ #maxIndex;
    /** @type {number} */ #loopMethod;
    /** @type {number} */ #direction;
    /** @type {number} */ #index;
    /**
   * @param {number} length
   * @param {LoopMethod} loopMethod
   */ constructor(length, loopMethod){
        this.#length = length;
        this.#maxIndex = length - 1;
        this.#loopMethod = loopMethod;
        this.#direction = 1;
        this.#index = 0;
    }
    /**
   * Get current index.
   */ get index() {
        return this.#index;
    }
    /**
   * Set current index. This will be clipped to a valid value.
   */ set index(value) {
        this.#index = _mathsJs.clip(value, 0, this.#length - 1);
    }
    /** Advance to the index.
   * @param {number} distance - amount to move. This should be positive.
   * @returns {number} the new index
   */ advanceBy(distance) {
        if (this.#length < 1) return this.#index;
        switch(this.#loopMethod){
            case LoopMethod.WRAP:
                return this.#advanceByWrap(distance);
            case LoopMethod.REVERSE:
                return this.#advanceByReverse(distance);
            case LoopMethod.NONE:
            default:
                return this.#advanceByStop(distance);
        }
    }
    /** Advance the index by distance. The direction is maintained by the indexer
   * itself. Wrap at ends.
   * @param {number} distance - amount to move. This should be positive.
   * @returns {number} the new index
   */ #advanceByWrap(distance) {
        distance = distance % this.#length;
        this.#index += distance % this.#length;
        if (this.#index >= this.#length) this.#index = this.#index - this.#length;
        return this.#index;
    }
    /** Advance the index by distance. The direction is maintained by the indexer
   * itself. Reverse at ends.
   * @param {number} distance - amount to move. This should be positive.
   * @returns {number} the new index
   */ #advanceByReverse(distance) {
        const nFullTraversals = Math.floor(distance / this.#length);
        if (nFullTraversals % 2) this.#direction = -this.#direction; // odd so reversing
        distance = distance % this.#length;
        if (this.#direction > 0) {
            this.#index += distance;
            const overshoot = this.#index - this.#maxIndex;
            if (overshoot > 0) {
                this.#index = this.#maxIndex - overshoot;
                this.#direction = -1;
            }
        } else if (this.#direction < 0) {
            this.#index -= distance;
            if (this.#index < 0) {
                this.#index = -this.#index;
                this.#direction = 1;
            }
        }
        return this.#index;
    }
    /** Advance the index by distance. The direction is maintained by the indexer
   * itself. Stop at ends.
   * @param {number} distance - amount to move. This should be positive.
   * @returns {number} the new index
   */ #advanceByStop(distance) {
        if (this.#direction > 0) this.#index = Math.min(this.#maxIndex, this.#index + distance);
        else if (this.#direction < 0) this.#index = Math.max(0, this.#index - distance);
        return this.#index;
    }
}

},{"../maths.js":"f2NB5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f2NB5":[function(require,module,exports) {
/**
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
 */ /**
 * Common angles
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Clip a value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */ parcelHelpers.export(exports, "clip", ()=>clip);
parcelHelpers.export(exports, "CompassEightPoint", ()=>CompassEightPoint);
/**
 * Convert an angle to an eight point compass direction.
 * Converts the angle to a compass direction.
 * @param {number} angle - -PI/2 to +PI/2. This is the same range as values returned
 * from the standard Math trigometric functions. Note that this expects the
 * angle to be based on cartesian coordinates, +y upwards. For angles calculated
 * using screen coordinates, +y downwards, you should negate the angle before
 * calling.
 * @param {number} angle - -PI/2 to +PI/2
 * @returns {number} compass point. From CompassEightPoint enum.
 */ parcelHelpers.export(exports, "angleToEightPointCompass", ()=>angleToEightPointCompass);
/**
 * Get random number between min and max, inclusive
 * @param {number} min - inclusive minimum
 * @param {number} max - exclusive maximum
 * @returns {number}
 */ parcelHelpers.export(exports, "getRandomInt", ()=>getRandomInt);
/**
 * Get random number between min and max, inclusive
 * @param {number} min - inclusive minimum
 * @param {number} max -inclusive maximum
 * @returns {number}
 */ parcelHelpers.export(exports, "getRandomIntInclusive", ()=>getRandomIntInclusive);
const Radians = {
    DEG_22_5: 1 / 8 * Math.PI,
    DEG_45: 2 / 8 * Math.PI,
    DEG_67_5: 3 / 8 * Math.PI,
    DEG_90: 0.5 * Math.PI,
    DEG_112_5: 5 / 8 * Math.PI,
    DEG_135: 6 / 8 * Math.PI,
    DEG_157_7: 7 / 8 * Math.PI,
    DEG_180: Math.PI
};
function clip(value, min, max) {
    if (value < min) return min;
    else if (value > max) return max;
    return value;
}
const CompassEightPoint = {
    N: 0,
    NE: 1,
    E: 2,
    SE: 3,
    S: 4,
    SW: 5,
    W: 6,
    NW: 7
};
function angleToEightPointCompass(angle) {
    const absAngle = Math.abs(angle);
    if (absAngle <= Radians.DEG_22_5) return CompassEightPoint.E;
    if (absAngle <= Radians.DEG_67_5) return Math.sign(angle) > 0 ? CompassEightPoint.NE : CompassEightPoint.SE;
    if (absAngle <= Radians.DEG_112_5) return Math.sign(angle) > 0 ? CompassEightPoint.N : CompassEightPoint.S;
    if (absAngle <= Radians.DEG_157_7) return Math.sign(angle) > 0 ? CompassEightPoint.NW : CompassEightPoint.SW;
    return CompassEightPoint.W;
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bsFq":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Map<string, *>} Traits
 */ /**
 * Actor class. An actor is a sprite that exists in the world and can interact
 * with other actors.
 */ parcelHelpers.export(exports, "Actor", ()=>Actor);
parcelHelpers.export(exports, "DnDActor", ()=>DnDActor);
var _spriteRenderersJs = require("../sprites/spriteRenderers.js");
var _interactionsJs = require("../ui/interactions.js");
class Actor extends (0, _interactionsJs.UiClickHandler) {
    /** @type {number} */ maxTilesPerMove;
    /** @type {import('../sprites/sprite.js').Sprite} */ sprite;
    /** @type {AbstractTraits} */ traits;
    /**
   * Create the actor.
   * @param {import('../sprites/sprite.js').Sprite} sprite
   */ constructor(sprite){
        super();
        this.sprite = sprite;
        this.sprite.obstacle = true;
        this.maxTilesPerMove = 4;
    }
    /** Set the underlying sprite visibility.
   * @param {boolean}
   */ set visible(value) {
        this.sprite.visible = value;
    }
    /** Get the underlying sprite visibility.
   * @returns {boolean}
   */ get visible() {
        return this.sprite.visible;
    }
    /**
   * Get obstacle property. This comes from the underlying sprite.
   * @param {boolean} value
   */ get obstacle() {
        return this.sprite.obstacle;
    }
    /**
   * Set as obstacle. This sets the underlying sprite's property.
   * @param {boolean} value
   */ set obstacle(value) {
        this.sprite.obstacle = value;
    }
    /**
   * Get the actor's position.
   * @returns {import('../geometry.js').Position}
   */ get position() {
        return this.sprite.position;
    }
    /**
   * Set the actor's position.
   * @param {import('../geometry.js').Position} value
   */ set position(value) {
        this.sprite.position = value;
    }
    /**
   * Get the current motion.
   * @returns {Velocity}
   */ get velocity() {
        return this.sprite.velocity;
    }
    /**
   * Set the current Velocity. Invalid values become 0.
   * @param {Velocity} nextVelocity
   */ set velocity(nextVelocity) {
        this.sprite.velocity = nextVelocity;
    }
    /**
   * Call update on the underlying sprite
   * @param {number} deltaSeconds
   */ update(deltaSeconds) {
        this.sprite.update(deltaSeconds);
    }
    /**
   * Handle the click but change the point to the sprite's position
   */ actionClick(pointUnused) {
        super.actionClick(this.sprite.position);
    }
    /**
   * Handle the click but change the point to the sprite's position
   */ actionContextClick(pointUnused) {
        super.actionContextClick(this.sprite.position);
    }
    /**
   * Handle the pointer up event but change the point to the sprite's position
   */ actionPointerUp(pointUnused) {
        super.actionPointerUp(this.sprite.position);
    }
    /**
   * Handle the pointer down event but change the point to the sprite's position
   */ actionPointerDown(pointUnused) {
        super.actionPointerDown(this.sprite.position);
    }
}
class DnDActor extends Actor {
    /** @type {MultiGaugeTileRenderer} */ #healthRenderer;
    /**
   * Create the actor.
   * @param {import('../sprites/sprite.js').Sprite} sprite
   */ constructor(sprite){
        super(sprite);
        this.#healthRenderer = new (0, _spriteRenderersJs.MultiGaugeTileRenderer)(sprite.get);
    }
}

},{"../sprites/spriteRenderers.js":"lGWVU","../ui/interactions.js":"1ChIe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGWVU":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Base class for all sprite renderers.
 * @abstract
 */ parcelHelpers.export(exports, "SpriteCanvasRenderer", ()=>SpriteCanvasRenderer);
/**
 * Renderer for TextSprites.
 */ parcelHelpers.export(exports, "TextSpriteCanvasRenderer", ()=>TextSpriteCanvasRenderer);
/**
 * Renderer for rectangle sprites
 */ parcelHelpers.export(exports, "RectSpriteCanvasRenderer", ()=>RectSpriteCanvasRenderer);
/**
 * Renderer for percentage properties.
 */ parcelHelpers.export(exports, "GaugeSpriteCanvasRenderer", ()=>GaugeSpriteCanvasRenderer);
/** Special renderer for multiple gauges applied over a square tile */ parcelHelpers.export(exports, "MultiGaugeTileRenderer", ()=>MultiGaugeTileRenderer);
/**
 * Renderer for Path Sprites.
 */ parcelHelpers.export(exports, "PathSpriteCanvasRenderer", ()=>PathSpriteCanvasRenderer);
/**
 * Renderer for Image Sprites.
 */ parcelHelpers.export(exports, "ImageSpriteCanvasRenderer", ()=>ImageSpriteCanvasRenderer);
var _textJs = require("../text/text.js");
var _fontsJs = require("../text/fonts.js");
var _debugJs = require("../debug.js");
var _screenJs = require("../game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _geometryJs = require("../geometry.js");
var _animationJs = require("./animation.js"); //eslint-disable-line no-unused-vars
var _hudJs = require("../game/hud.js");
var _hudJsDefault = parcelHelpers.interopDefault(_hudJs);
var _spriteJs = require("./sprite.js");
/**
 * @typedef {Object} RenderGeometry
 * @property {number} width
 * @property {number} height
 * @property {import('../geometry.js').Point} origin - origin relative to the centre
 */ /**
 * Convert RenderGeometry to Rectangle
 * @param {import('../geometry.js').Position} position
 * @param {RenderGeometry} renderGeom
 * @returns {import('../geometry.js').Rectangle}
 */ function renderGeometryToRect(position, renderGeom) {
    return new (0, _geometryJs.Rectangle)(position.x - renderGeom.width / 2, position.y - renderGeom.height / 2, renderGeom.width, renderGeom.height);
}
class SpriteCanvasRenderer {
    /** @type {CanvasRenderingContext2D} */ _context;
    /** @type {import('../geometry.js').Rectangle} */ _boundingBoxCanvas;
    /**
   * Construct base renderer
   * @param {CanvasRenderingContext2D} context
   */ constructor(context){
        this._context = context;
        this._boundingBoxCanvas = new (0, _geometryJs.Rectangle)(0, 0, 0, 0);
    }
    /**
   * Get the context. This is just provided to allow classes other than children
   * to read the context. _context could be used but that is not the intent.
   */ getContext() {
        return this._context;
    }
    /**
   * Get the axis aligned bounding box
   * @returns {import('../geometry.js').Rectangle}
   */ getBoundingBoxCanvas() {
        return this._boundingBoxCanvas;
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position in the world
   * @param {number} opacity
   */ render(position, opacity) {
        position = (0, _screenJsDefault.default).worldPositionToCanvas(position);
        if (!this.isOnCanvas(position)) return;
        const currentAlpha = this._context.globalAlpha;
        this._context.globalAlpha = currentAlpha * opacity;
        const rotated = position.rotation;
        if (rotated) {
            this._context.save();
            this._context.translate(position.x, position.y);
            this._context.rotate(-position.rotation);
            this._context.translate(-position.x, -position.y);
        }
        this._doRender(position);
        if (rotated) this._context.restore();
        if (_debugJs.OPTIONS.spriteBoxes) {
            this._context.strokeStyle = "green";
            this._context.strokeRect(this._boundingBoxCanvas.x, this._boundingBoxCanvas.y, this._boundingBoxCanvas.width, this._boundingBoxCanvas.height);
        }
        this._context.globalAlpha = currentAlpha;
    }
    /**
   * Render the sprite
   * @param {import('../geometry.js').Position} position
   */ _doRender(positionUnused) {
        console.error("_doRender method should be overridden.");
    }
    /**
   * Check if it will be on screen
   * @param {import('../geometry.js').Position} position
   * @returns {boolean} true if on screen.
   */ isOnScreen(position) {
        const rect = new (0, _geometryJs.Rectangle)(position.x - this._boundingBoxCanvas.width / 2, position.y - this._boundingBoxCanvas.height / 2, this._boundingBoxCanvas.width, this._boundingBoxCanvas.height);
        return (0, _screenJsDefault.default).isOnScreen(rect);
    }
    /**
   * Check if it will be on screen
   * @param {import('../geometry.js').Position} position - this should be in canvas coordinates.
   * @returns {boolean} true if on screen.
   */ isOnCanvas(position) {
        const rect = new (0, _geometryJs.Rectangle)(position.x - this._boundingBoxCanvas.width / 2, position.y - this._boundingBoxCanvas.height / 2, this._boundingBoxCanvas.width, this._boundingBoxCanvas.height);
        return (0, _screenJsDefault.default).isOnCanvas(rect);
    }
}
class TextSpriteCanvasRenderer extends SpriteCanvasRenderer {
    /** Name used to access font styles from the fonts.
   * @type {string}
   */ #styleName;
    /** @type {string} */ #lastCalculatedText;
    /** @type {RenderGeometry} */ #renderGeometry;
    /** @type {string} */ text;
    /**
   * @param {CanvasRenderingContext2D} context
   * @param {string} text
   * @param {string} [styleName = 'normal']
   */ constructor(context, text, styleName = "normal"){
        super(context);
        this.text = text;
        this.#styleName = styleName;
    }
    /**
   * Calculate the renderGeometry of the text.
   * @param {string} text
   */ #calculateRenderGeometry(text) {
        this._context.font = _fontsJs.getCss(this.#styleName);
        const metrics = this._context.measureText(text);
        this.#renderGeometry = {
            width: metrics.width,
            height: metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent,
            origin: {
                x: -0.5 * metrics.width,
                y: 0.5 * (metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent)
            }
        };
        this.#lastCalculatedText = text;
    }
    /**
   * Render the sprite
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ _doRender(position) {
        if (this.text !== this.#lastCalculatedText) this.#calculateRenderGeometry(this.text);
        const renderPosition = {
            x: position.x + this.#renderGeometry.origin.x,
            y: position.y + this.#renderGeometry.origin.y,
            rotation: position.rotation
        };
        _textJs.writeText(this._context, this.#lastCalculatedText, renderPosition, {
            styleName: this.#styleName
        });
        this._boundingBoxCanvas = renderGeometryToRect(position, this.#renderGeometry);
    }
}
class RectSpriteCanvasRenderer extends SpriteCanvasRenderer {
    #width;
    #height;
    #halfWidth;
    #halfHeight;
    #fillStyle;
    #strokeStyle;
    /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {Object} options
   * @param {number} options.width
   * @param {number} options.height
   * @param {string} options.fillStyle
   * @param {string} options.strokeStyle
   */ constructor(context, options){
        super(context);
        this.#width = options.width ?? 10;
        this.#height = options.height ?? 10;
        this.#halfWidth = this.#width / 2;
        this.#halfHeight = this.#height / 2;
        this.#fillStyle = options.fillStyle;
        this.#strokeStyle = options.strokeStyle;
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ _doRender(position) {
        const x = position.x - this.#halfWidth;
        const y = position.y - this.#halfHeight;
        if (this.#fillStyle) {
            this._context.fillStyle = this.#fillStyle;
            this._context.fillRect(x, y, this.#width, this.#height);
        }
        if (this.#strokeStyle) {
            this._context.strokeStyle = this.#strokeStyle;
            this._context.strokeRect(x, y, this.#width, this.#height);
        }
        this._boundingBoxCanvas = new (0, _geometryJs.Rectangle)(x, y, this.#width, this.#height);
    }
}
class GaugeSpriteCanvasRenderer extends SpriteCanvasRenderer {
    #height;
    #halfHeight;
    #width;
    #halfWidth;
    #fillStyle;
    #strokeStyle;
    #offsetX;
    #offsetY;
    #fillHeight;
    #halfFillHeight;
    /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {Object} options
   * @param {number} options.width
   * @param {number} options.height
   * @param {string} options.fillStyle
   * @param {string} options.strokeStyle
   * @param {number} options.offsetX - sprite is offset from the normal sprite position.
   * @param {number} options.offsetY - sprite is offset from the normal sprite position.
   */ constructor(context, options){
        super(context);
        this.#height = options.height;
        this.#halfHeight = this.#height / 2;
        this.#width = options.width;
        this.#halfWidth = this.#width / 2;
        this.#fillStyle = options.fillStyle;
        this.#strokeStyle = options.strokeStyle;
        this.#offsetX = options.offsetX ?? 0;
        this.#offsetY = options.offsetY ?? 0;
        this.setLevel(0);
    }
    /** Set the level of the gauge.
   * @param {number} proportion - 0 to 1
   */ setLevel(proportion) {
        this.#fillHeight = Math.min(proportion, 1) * this.#height;
        this.#halfFillHeight = 0.5 * this.#fillHeight;
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ _doRender(position) {
        const topStroke = position.y - this.#halfHeight + this.#offsetY;
        const topFill = position.y + this.#halfHeight - this.#fillHeight + this.#offsetY;
        const x = position.x - this.#halfWidth + this.#offsetX;
        if (this.#fillStyle) {
            this._context.fillStyle = this.#fillStyle;
            this._context.fillRect(x, topFill, this.#width, this.#fillHeight);
        }
        if (this.#strokeStyle) {
            this._context.strokeStyle = this.#strokeStyle;
            this._context.strokeRect(x, topStroke, this.#width, this.#height);
        }
        this._boundingBoxCanvas = new (0, _geometryJs.Rectangle)(x, topStroke, this.#width, this.#height);
    }
}
class MultiGaugeTileRenderer extends SpriteCanvasRenderer {
    #gaugeRenderers;
    /**
   * The number of gauges is determined by the maximum length of the fill styles and
   * stroke styles
   * @param {CanvasRenderingContext2D} context
   * @param {Object} options
   * @param {number} options.tileSize
   * @param {string[]} options.fillStyles
   * @param {string[]} options.strokeStyles
   */ constructor(context, options){
        super(context);
        const nGauges = Math.max(options.fillStyles.length ?? 0, options.strokeStyles.length ?? 0);
        if (nGauges === 0) {
            console.error("Attempt to create MultiGaugeTileRenderer with no gauges.");
            return;
        }
        this.#gaugeRenderers = [];
        const gaugeWidth = options.tileSize / nGauges;
        let gaugePosX = -options.tileSize / 2 + gaugeWidth / 2;
        for(let index = 0; index < nGauges; index++)this.#gaugeRenderers.push(new GaugeSpriteCanvasRenderer(context, {
            width: gaugeWidth,
            height: options.tileSize,
            fillStyle: options.fillStyles?.[index],
            strokeStyle: options.strokeStyles?.[index],
            offsetX: gaugePosX + gaugeWidth * index,
            offsetY: 0
        }));
    }
    /**
   * Set the level of a gauge.
   * @param {number} gaugeIndex
   * @param {number} proportion - 0 to 1
   */ setLevel(gaugeIndex, proportion) {
        this.#gaugeRenderers[gaugeIndex]?.setLevel(proportion);
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ render(position) {
        this.#gaugeRenderers?.forEach((renderer)=>renderer.render(position));
    }
}
class PathSpriteCanvasRenderer extends SpriteCanvasRenderer {
    /** @type {RenderGeometry} */ #renderGeometry;
    /** @type {Point[]} */ path;
    /**
   * Create a path renderer.
   * @param {CanvasRenderingContext2D} context
   * @param {Point[]} path
   */ constructor(context, path){
        super(context);
        this.path = path;
    }
    /** Calculate the rendering geometry.
   * @param {Point[]} path
   * @param {import('../geometry.js').Position} position
   */ #calculateGeometry(path, positionUnused) {
        let minPoint = (0, _geometryJs.MAX_POINT);
        let maxPoint = (0, _geometryJs.MIN_POINT);
        path.forEach((point)=>{
            minPoint.x = Math.min(minPoint.x, point.x);
            minPoint.y = Math.min(minPoint.y, point.y);
            maxPoint.x = Math.max(maxPoint.x, point.x);
            maxPoint.y = Math.max(maxPoint.y, point.y);
        });
        this.#renderGeometry = {
            width: maxPoint.x - minPoint.x,
            height: maxPoint.y - minPoint.y,
            origin: {
                x: 0.5 * (minPoint.x + maxPoint.x),
                y: 0.5 * (minPoint.y + maxPoint.y)
            }
        };
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ _doRender(position) {
        if (this.path.length < 2) {
            console.error("Path sprite needs at least 2 points.");
            return;
        }
        if (!this.#renderGeometry) this.#calculateGeometry(this.path, position);
        this._context.beginPath();
        this._context.strokeStyle = "blue";
        this._context.moveTo(this.path[0].x + position.x, this.path[0].y + position.y);
        for(let n = 1; n < this.path.length; n++)this._context.lineTo(this.path[n].x + position.x, this.path[n].y + position.y);
        this._context.closePath();
        this._context.stroke();
        this._boundingBoxCanvas = renderGeometryToRect(position, this.#renderGeometry);
    }
}
class ImageSpriteCanvasRenderer extends SpriteCanvasRenderer {
    /** @type {import('./imageManager.js').SpriteBitmap} */ #spriteBitmap;
    /** @type {animation.KeyedAnimatedImages} */ #animation;
    /**
   * Create an image renderer.
   * @param {CanvasRenderingContext2D} context
   * @param {SpriteBitmap | animation.AnimatedImage | animation.KeyAnimatedImages} imageDefinition
   */ constructor(context, imageDefinition){
        super(context);
        if (imageDefinition?.getCurrentFrame) {
            this.#animation = imageDefinition;
            this.#spriteBitmap = this.#animation.getCurrentFrame();
        } else this.#spriteBitmap = imageDefinition;
        if (this.#spriteBitmap) {
            this._boundingBoxCanvas.width = this.#spriteBitmap?.width ?? 0;
            this._boundingBoxCanvas.height = this.#spriteBitmap?.height ?? 0;
        } else console.error(`No image frame available for sprite.`, imageDefinition);
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ _doRender(position) {
        if (!this.#spriteBitmap) return;
        const frame = this.#animation ? this.#animation.getCurrentFrame() : this.#spriteBitmap;
        this._boundingBoxCanvas.x = position.x - this._boundingBoxCanvas.width / 2;
        this._boundingBoxCanvas.y = position.y - this._boundingBoxCanvas.height / 2;
        this._context.drawImage(frame.image, position.x - frame.centreX, position.y - frame.centreY);
    }
}

},{"../text/text.js":"7DTYO","../text/fonts.js":"fVkzI","../debug.js":"iAZ6H","../game/screen.js":"kFko1","../geometry.js":"oxWLG","./animation.js":"S9kq1","../game/hud.js":"2372R","./sprite.js":"gSPJO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DTYO":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} TextBounds
 * @property {number} width - width of text
 * @property {number} width - height of text
 * @property {number} offsetTop - offset from text y position to top. This is negative.
 * @property {number} offsetCentreY - offset from text y position to centre. This is negative.
 */ /**
 * Calculate the text bounds. Note that the box surrounds the entire text including
 * descenders.
 * @param {CanvasRenderingContext2D} context
 * @param {string} text
 * @returns {TextBounds}
 */ parcelHelpers.export(exports, "getTextBounds", ()=>getTextBounds);
/**
 * Write text to the canvas. Text can be wrapped if required.
 * @param {CanvasRenderingContext2D} context
 * @param {*} text
 * @param {import('../geometry.js').Position} position
 * @param {Object} options
 * @param {number} [options.wrapAtX] - if null, undefined or zero, no wrapping occurs.
 * @param {number} [options.lineSpacing = 1] - multiplier for line height. 1 shifts lines by the total font height.
 * @param {string} [options.styleName] - named style. Picks up settings from module:utils/fonts
 * @param {string} [options.color] - color
 */ parcelHelpers.export(exports, "writeText", ()=>writeText);
var _fontsJs = require("./fonts.js");
function getTextBounds(context, text) {
    const metrics = context.measureText(text);
    return {
        width: metrics.width,
        height: metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent,
        offsetTop: -metrics.fontBoundingBoxAscent,
        offsetCentreY: 0.5 * (metrics.fontBoundingBoxDescent - metrics.fontBoundingBoxAscent)
    };
}
/**
 * Wrap text based on https://codepen.io/nishiohirokazu/pen/jjNyye
 * @param {CanvasRenderingContext2D} context
 * @param {string} paragraph
 * @param {import('../geometry.js').Position} position
 * @param {Object} options
 * @param {number} options.xWrapPosition - position to wrap text.
 * @param {number} [options.lineSpacing = 1] - multiplier for line height. 1 shifts lines by the total font height.
 * @returns {number} the next line y position.
 */ function wrapParagraph(context, paragraph, position, options) {
    const words = paragraph.split(" ");
    let x = position.x ?? 0;
    let y = position.y ?? 0;
    let maxLineLength = options.xWrapPosition - x;
    let lineSpacing = options.lineSpacing ?? 1;
    let line = "";
    let lineHeight;
    for(let n = 0; n < words.length; n++){
        let testLine = line + words[n] + " ";
        const bounds = getTextBounds(context);
        if (!lineHeight) lineHeight = lineSpacing * bounds.height;
        if (bounds.width > maxLineLength && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
        } else line = testLine;
    }
    context.fillText(line, x, y);
    return y + lineHeight;
}
function writeText(context, text, position, options) {
    context.font = _fontsJs.getCss(options?.styleName);
    context.fillStyle = options?.color ?? "white";
    if (!options?.wrapAtX) context.fillText(text, position.x ?? 0, position.y ?? 0);
    else {
        var paragraphs = text.split("\n");
        for(let n = 0; n < paragraphs.length; n++)options.y = wrapParagraph(context, paragraphs[n], position, options);
    }
}

},{"./fonts.js":"fVkzI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAZ6H":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPTIONS", ()=>OPTIONS);
const OPTIONS = {
    /**
   * Should sprite boxes be drawn.@type {boolean}
   */ spriteBoxes: false,
    /**
   * Show framerate
   */ showFps: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSPJO":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {function} SpriteClickHandler
 * @param {Sprite} target - the sprite that was clicked. This prevents the need
 * to use 'this' which may not be correct in the context.
 * @param {Point} relativePoint - the position in the Sprite relative to its top left corner
 * @param {Object} detail - extended event information.
 */ /**
 * Encapsulated sprite.
 */ parcelHelpers.export(exports, "Sprite", ()=>Sprite);
var _geometryJs = require("../geometry.js");
var _spriteRenderersJs = require("./spriteRenderers.js"); //eslint-disable-line no-unused-vars
class Sprite {
    /** @type {Position}*/ #position = new (0, _geometryJs.Position)(0, 0, 0);
    /** @type {Velocity} */ #velocity = new (0, _geometryJs.Velocity)(0, 0, 0);
    /** @type {SpriteCanvasRenderer[]} */ #renderer;
    /** @type {boolean} */ #multiRenderers;
    /** @type {AbstractModifier} */ modifier;
    /** @type {boolean} */ visible;
    /** @type {number} */ opacity;
    /**
   * @param {Object} options
   * @param {SpriteCanvasRenderer } options.renderer - the renderer or renderers that render the sprite
   * rather than the world.
   */ constructor(options){
        this.#renderer = options?.renderer;
        this.#multiRenderers = Array.isArray(this.#renderer);
        this.visible = true;
        this.opacity = 1;
    }
    /**
   * Get the current position.
   * @returns {Position}
   */ get position() {
        return this.#position;
    }
    /**
   * Set the current position. Invalid values become 0.
   * @param {Position} nextPosition
   */ set position(nextPosition) {
        this.#position.x = this.valueOrZero(nextPosition.x);
        this.#position.y = this.valueOrZero(nextPosition.y);
        this.#position.rotation = this.valueOrZero(nextPosition.rotation);
    }
    /**
   * Get the current motion.
   * @returns {Velocity}
   */ get velocity() {
        return this.#velocity;
    }
    /**
   * Set the current Velocity. Invalid values become 0.
   * @param {Velocity} nextVelocity
   */ set velocity(nextVelocity) {
        this.#velocity.x = this.valueOrZero(nextVelocity.x);
        this.#velocity.y = this.valueOrZero(nextVelocity.y);
        this.#velocity.rotation = this.valueOrZero(nextVelocity.rotation);
    }
    /**
   * Returns the value but converts non-numeric values to 0.
   * @param {number} value
   * @returns {number}
   */ valueOrZero(value) {
        return typeof value === "number" ? value : 0;
    }
    /**
   * Update the sprite. Calls the sprite's mover and then renderer.
   * @param {number} deltaSeconds - elapsed time.
   */ update(deltaSeconds) {
        if (this.modifier) this.modifier = this.modifier.update(this, deltaSeconds);
        if (this.visible) this.#render();
    }
    /**
   * Render the sprite by calling the sprite's renderer
   */ #render() {
        if (!this.#renderer) return;
        if (!this.#renderer.forEach) this.#renderer.render(this.#position, this.opacity);
        else this.#renderer.forEach((renderer)=>renderer.render(this.#position, this.opacity));
    }
    /** Get the bounding box for the sprite.
   * @returns {geometry.Rectangle}
   */ getBoundingBox() {
        const boundsCanvas = this.#renderer.getBoundingBoxCanvas();
        return new (0, _geometryJs.Rectangle)(this.position.x - boundsCanvas.width / 2, this.position.y - boundsCanvas.height / 2, boundsCanvas.width, boundsCanvas.height);
    }
}

},{"../geometry.js":"oxWLG","./spriteRenderers.js":"lGWVU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ChIe":[function(require,module,exports) {
/**
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
 */ /**
 * @typedef {function} UiClickCallback
 * @param {Object} target - initial object that triggered the handler
 * @param {import('../geometry.js').Point} point - the position that was clicked in world coordinates
 */ /**
 * BAse for all UiClickHandlers
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UiClickHandler", ()=>UiClickHandler);
class UiClickHandler {
    /** @type {UiClickCallback} */ #onClick;
    /** @type {UiClickCallback} */ #onContextClick;
    /** @type {UiClickCallback} */ #onPointerDown;
    /** @type {UiClickCallback} */ #onPointerUp;
    /** Set click handler. Note that this does not add a listener for the event.
   * @param {UiClickCallback} handler
   */ setOnClick(handler) {
        this.#onClick = handler;
    }
    /** Set on context Click handler.
   * @param {UiClickCallback} handler
   */ setOnContextClick(handler) {
        this.#onContextClick = handler;
    }
    /** Set pointer down handler. Note that this does not add a listener for the event.
   * @param {UiClickCallback} handler
   */ setOnPointerDown(handler) {
        this.#onPointerDown = handler;
    }
    /** Set pointer up handler. Note that this does not add a listener for the event.
   * @param {UiClickCallback} handler
   */ setOnPointerUp(handler) {
        this.#onPointerUp = handler;
    }
    /**
   * Handle click
   * @param {import('../geometry.js').Point} point
   */ actionClick(point) {
        this.#onClick?.(this, point);
    }
    /**
   * Handle context click
   * @param {import('../geometry.js').Point} point
   */ actionContextClick(point) {
        this.#onContextClick?.(this, point);
    }
    /**
   * Handle pointer down
   * @param {import('../geometry.js').Point} point
   */ actionPointerDown(point) {
        this.#onPointerDown?.(this, point);
    }
    /**
   * Handle pointer up
   * @param {import('../geometry.js').Point} point
   */ actionPointerUp(point) {
        this.#onPointerUp?.(this, point);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58K9k":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emojis", ()=>Emojis);
/**
 * Check to see if the emojis are supported. Any emoji which fails to render,
 * is replaced by a number in square brackets. Note that the function just checks the centre
 * pixel so it may fail in some situations and think that a valid emoji has not
 * rendered.
 * @param {CanvasRenderingContext2D} context
 */ parcelHelpers.export(exports, "checkEmojis", ()=>checkEmojis);
const Emojis = {
    GRINNING: "\uD83D\uDE00",
    SANTA: "\uD83C\uDF85",
    SHAKING: "\uD83E\uDEE8"
};
function checkEmojis(context) {
    let fallbackIndex = 0;
    for(const key in Emojis){
        const metrics = context.measureText(Emojis[key]);
        const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        const centreToBaseLine = 0.5 * height - metrics.fontBoundingBoxDescent;
        context.fillText(Emojis[key], -0.5 * metrics.width, centreToBaseLine);
        const alphaAtCentre = context.getImageData(0, 0, 1, 1).data[3];
        if (alphaAtCentre <= 0) {
            console.debug(`Emoji ${key} not supported.`);
            Emojis[key] = `[${fallbackIndex++}]`;
        }
        context.clearRect(0, 0, metrics.width, height);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5us2u":[function(require,module,exports) {
/**
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
 */ /**
 * @type {Object<string, URL>} Urls for dynamically loading resources
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Urls", ()=>Urls);
/**
 * Load text file from URL.
 * @param {URL} url
 * @return {Promise} fulfils to text or null.
 */ parcelHelpers.export(exports, "loadTextFromUrl", ()=>loadTextFromUrl);
/**
 * Load json from URL.
 * @param {URL} url
 * @return {Promise} fulfils to json object or null.
 */ parcelHelpers.export(exports, "loadJsonFromUrl", ()=>loadJsonFromUrl);
const Urls = {
    DUNGEON_SCRIPT: new URL(require("2200ab531e260ce"))
};
function loadTextFromUrl(url) {
    return fetch(url).then((response)=>response.text()).then((text)=>text).catch((reason)=>{
        console.error(`Error fetching ${url}: ${reason}`);
        return null;
    });
}
function loadJsonFromUrl(url) {
    return fetch(url).then((response)=>response.text()).then((text)=>text).catch((reason)=>{
        console.error(`Error fetching ${url}: ${reason}`);
        return null;
    });
}

},{"2200ab531e260ce":"gLcOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLcOc":[function(require,module,exports) {
module.exports = require("964a894ca6aaea2c").getBundleURL("9up4p") + "dungeon_script.16cd73c2.txt" + "?" + Date.now();

},{"964a894ca6aaea2c":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7pE1C":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseScript);
var _actorMapJs = require("./actorMap.js");
var _actorMapJsDefault = parcelHelpers.interopDefault(_actorMapJs);
var _sceneDefinitionParserJs = require("./sceneDefinitionParser.js");
var _traitsJs = require("../dnd/traits.js");
/**
 * @typedef {Object} SectionParsingResult
 * @property {string} nextSectionId
 * @property {number} nextLineIndex
 */ /**
 * Section IDs
 * @enum {string}
 */ const SectionId = {
    LEVEL: "LEVEL",
    CAST: "CAST",
    MAP: "MAP"
};
/** Basic parser for a section of the script. */ class AbstractSectionParser {
    /** @type {SceneDefinition} */ sceneDefn;
    /** Lines of the script. @type {string[]} */ lines;
    /** @type {number} lineIndex */ lineIndex;
    /**
   * Construct parser.
   * @param {number} lines
   * @param {number} startLine
   * @param {SceneDefinition} sceneDefn
   */ constructor(lines, startLine, sceneDefn){
        this.lines = lines;
        this.lineIndex = startLine;
        this.sceneDefn = sceneDefn;
    }
    /**
   * Parse lines.
   * @returns {SectionParsingResult} next section and line
   * @throws {Exception} parsing error has occurred.
   */ parse() {
        while(this.lineIndex < this.lines.length){
            const line = this.lines[this.lineIndex];
            const nextSectionId = AbstractSectionParser.getSectionIdFromLine(line);
            if (nextSectionId) return {
                nextSectionId: nextSectionId,
                nextLineIndex: this.lineIndex
            };
            else {
                this.parseLine(line);
                this.lineIndex++;
            }
        }
        return null;
    }
    /**
   * Find the first section in an array of lines.
   * @param {string[]} lines 
   * @returns {SectionParsingResult} next section and line. Null if not found.
   
   */ static findFirstSection(lines) {
        for(let index = 0; index < lines.length; index++){
            const id = AbstractSectionParser.getSectionIdFromLine(lines[index].trim());
            if (id) return {
                nextSectionId: id,
                nextLineIndex: index
            };
        }
        return null;
    }
    /**
   * Parse.
   * @param {string} line;
   */ parseLine(lineUnused) {
        throw "Method parseLine should be overridden.";
    }
    /** Check the line to see if it is a section marker.
   * @returns {string} the section section marker. Null if not a section marker.
   */ static getSectionIdFromLine(line) {
        const match = line.match(/^\s*\[ *([\w ]+) *\]/);
        if (match) return match[1].toUpperCase();
        return null;
    }
    /**
   * Handle an error.
   * @param {string} message
   * @throws {Error}
   */ fatalError(message) {
        throw new Error(`Error parsing script on line ${this.lineIndex + 1}: ${message}`);
    }
    /**
   * Handle ignorable error.
   * @param {string} message
   */ ignoreError(message) {
        console.debug(`Ignoring error parsing script on line ${this.lineIndex}: ${message}`);
    }
}
/**
 * Parser for introductions.
 */ class IntroParser extends AbstractSectionParser {
    /**
   * Construct parser.
   * @param {number} lines
   * @param {number} startLine
   * @param {SceneDefinition} sceneDefn
   */ constructor(lines, startLine, sceneDefn){
        super(lines, startLine, sceneDefn);
        this.sceneDefn.intro = "";
    }
    /**
   * Parse a line.
   * @override
   */ parseLine(line) {
        this.sceneDefn.intro += line === "" ? "\n" : line;
    }
}
/**
 * Parser for the cast list.
 */ class CastParser extends AbstractSectionParser {
    /**
   * Construct parser.
   * @param {number} lines
   * @param {number} startLine
   * @param {SceneDefinition} sceneDefn
   */ constructor(lines, startLine, sceneDefn){
        super(lines, startLine, sceneDefn);
    }
    /**
   * Parse a line.
   * @override
   */ parseLine(line) {
        const match = line.match(/^\s*(\w+?) *x(\d{1,2}) *([^:]*): *([\w,:= /]*)/);
        if (match) this.#parseShortFormActor(match);
        else this.#parseLongFormActor(line);
    }
    /**
   * Parse a short form single line actor definition.
   * @param {string[]} matchResults - results from regex match.
   */ #parseShortFormActor(matchResults) {
        const actorId = matchResults[1].toUpperCase();
        const number = parseInt(matchResults[2]);
        const name = matchResults[3];
        const traitsDefn = matchResults[4];
        for(let n = 0; n < number; n++){
            if ((0, _actorMapJsDefault.default).has(actorId)) try {
                const traits = new (0, _traitsJs.CharacterTraits)().setFromString(traitsDefn);
                this.sceneDefn.enemies.push({
                    id: actorId,
                    name: name || "mystery",
                    traits: traits
                });
            } catch (error) {
                this.fatalError(error.message);
            }
            else this.fatalError(`Cast member ${actorId} does not exist.`);
        }
    }
    /**
   * Parse a line to build a long form, multiline actor
   * @param {string} line - current line.
   */ #parseLongFormActor(lineIgnored) {
        this.fatalError("Long form actors not supported.");
    }
}
/**
 * Parser for dungeon map.
 */ class MapParser extends AbstractSectionParser {
    /**
   * Construct parser.
   * @param {number} lines
   * @param {number} startLine
   * @param {SceneDefinition} sceneDefn
   */ constructor(lines, startLine, sceneDefn){
        super(lines, startLine, sceneDefn);
    }
    /**
   * Parse a line.
   * @override
   */ parseLine(line) {
        if (line !== "") this.sceneDefn.mapDesign.push(line);
    }
}
/** Lines of the script. @type {string[]} */ let lines;
/** Scenes @type {SceneDefinition[]} */ let sceneDefinitions;
/**
 * Get a section parser for the section Id.
 * @param {string} sectionId
 * @param {number} lineIndex
 * @param {SceneDefinition} sceneDefn
 * @returns {SectionParser} null if the id is not valid.
 */ function getParserForId(sectionId, lineIndex, sceneDefn) {
    switch(sectionId){
        case SectionId.LEVEL:
            return new IntroParser(lines, lineIndex + 1, sceneDefn); // skip the actual section ID line.
        case SectionId.CAST:
            return new CastParser(lines, lineIndex + 1, sceneDefn); // skip the actual section ID line.
        case SectionId.MAP:
            return new MapParser(lines, lineIndex + 1, sceneDefn); // skip the actual section ID line.
    }
    return null;
}
function parseScript(script) {
    lines = script.split(/\r?\n/);
    sceneDefinitions = [];
    let sceneDefn = new (0, _sceneDefinitionParserJs.SceneDefinition)();
    const sectionHunt = AbstractSectionParser.findFirstSection(lines);
    if (!sectionHunt) throw new Error(`Invalid script. No section identifiers found.`);
    let parser = getParserForId(sectionHunt.nextSectionId, sectionHunt.nextLineIndex, sceneDefn);
    while(parser){
        const result = parser.parse();
        if (!result?.nextSectionId || result.nextSectionId === SectionId.LEVEL) {
            sceneDefinitions.push(sceneDefn);
            sceneDefn = new (0, _sceneDefinitionParserJs.SceneDefinition)();
        }
        parser = !result ? null : getParserForId(result.nextSectionId, result.nextLineIndex, sceneDefn);
    }
    return sceneDefinitions;
}

},{"./actorMap.js":"fmK8F","./sceneDefinitionParser.js":"21sHS","../dnd/traits.js":"e7NvN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmK8F":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteJs = require("../utils/sprites/sprite.js");
var _actorsJs = require("../utils/game/actors.js");
var _spriteRenderersJs = require("../utils/sprites/spriteRenderers.js");
var _imageManagerJs = require("../utils/sprites/imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
var _animationJs = require("../utils/sprites/animation.js");
var _indexerJs = require("../utils/arrays/indexer.js");
var _geometryJs = require("../utils/geometry.js");
var _screenJs = require("../utils/game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _worldJs = require("../utils/game/world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
/**
 * Specialist traits renderer
 */ class ActorTraitsRenderer extends _spriteRenderersJs.MultiGaugeTileRenderer {
    /** @type {Actor} */ actor;
    /**
   * The number of gauges is determined by the maximum length of the fill styles and
   * stroke styles
   * @param {CanvasRenderingContext2D} context
   * @param {Object} options
   * @param {number} options.tileSize
   * @param {string[]} options.fillStyles
   * @param {string[]} options.strokeStyles
   */ constructor(context, options){
        super(context, options);
    }
    /**
   * Render the sprite.
   * @param {import('../geometry.js').Position} position - this will have been adjusted to the screen.
   */ render(position) {
        if (this.actor && this.actor.traits) {
            const hp = this.actor.traits.get("HP");
            const hpMax = this.actor.traits.get("HP_MAX");
            this.setLevel(0, hp / hpMax);
            this.setLevel(1, 1);
        }
        super.render(position);
    }
}
/**
 * Create the actor.
 * @param {string} imageName - no extension
 * @returns {Actor}
 */ function createAnimatedActor(imageName) {
    const imageRenderer = new _spriteRenderersJs.ImageSpriteCanvasRenderer((0, _screenJsDefault.default).getContext2D(), new _animationJs.KeyedAnimatedImages("idle", new _animationJs.AnimatedImage(0, {
        prefix: imageName,
        suffix: ".png",
        startIndex: 1,
        padding: 3
    }, {
        framePeriodMs: 100,
        loopMethod: (0, _indexerJs.LoopMethod).REVERSE
    })));
    const traitsRenderer = new ActorTraitsRenderer((0, _screenJsDefault.default).getContext2D(), {
        tileSize: (0, _worldJsDefault.default).getTileMap().getGridSize() - 2,
        fillStyles: [
            "red",
            "blue"
        ],
        strokeStyles: []
    });
    const actor = new (0, _actorsJs.Actor)(new (0, _spriteJs.Sprite)({
        renderer: [
            traitsRenderer,
            imageRenderer
        ]
    }));
    traitsRenderer.actor = actor;
    actor.position = new (0, _geometryJs.Position)(48, 48, 0);
    actor.velocity = {
        x: -500,
        y: -70,
        rotation: 0.1
    };
    return actor;
}
/**
 * @param {string} imageName - without extension
 * @returns {Actor}
 */ function createUnanimatedActor(imageName) {
    const actor = new (0, _actorsJs.Actor)(new (0, _spriteJs.Sprite)({
        renderer: new _spriteRenderersJs.ImageSpriteCanvasRenderer((0, _screenJsDefault.default).getContext2D(), (0, _imageManagerJsDefault.default).getSpriteBitmap(0, `${imageName}.png`))
    }));
    return actor;
}
/**
 * @typedef {Object} ActorMapCreator
 * @property {function():Actor} create
 */ /**
 * Map of actor creators which are used to create actors based on a key.
 * @type {Map<string, ActorMapCreator>}
 */ const ACTOR_MAP = new Map([
    [
        "HERO",
        {
            create: ()=>createAnimatedActor("hero")
        }
    ],
    [
        "MONSTER",
        {
            create: ()=>createAnimatedActor("orc")
        }
    ]
]);
exports.default = ACTOR_MAP;

},{"../utils/sprites/sprite.js":"gSPJO","../utils/game/actors.js":"3bsFq","../utils/sprites/spriteRenderers.js":"lGWVU","../utils/sprites/imageManager.js":"3hqS8","../utils/sprites/animation.js":"S9kq1","../utils/arrays/indexer.js":"cvgPD","../utils/geometry.js":"oxWLG","../utils/game/screen.js":"kFko1","../utils/game/world.js":"7yYJp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21sHS":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} ActorDefn
 * @property {string} name
 * @property {import('../dnd/traits.js').CharacterTraits} traits
 */ /**
 * Definition of a scene
 */ parcelHelpers.export(exports, "SceneDefinition", ()=>SceneDefinition);
/**
 * Parse the scene definition to create a Scene
 * @param {SceneDefinition} sceneDefn
 * @returns {Scene}
 */ parcelHelpers.export(exports, "parseSceneDefinition", ()=>parseSceneDefinition);
var _imageManagerJs = require("../utils/sprites/imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
var _dungeonJson = require("../../assets/images/dungeon.json");
var _dungeonJsonDefault = parcelHelpers.interopDefault(_dungeonJson);
var _dungeonPng = require("../../assets/images/dungeon.png");
var _dungeonPngDefault = parcelHelpers.interopDefault(_dungeonPng);
var _tilePlanJs = require("../utils/tileMaps/tilePlan.js");
var _tileMapJs = require("../utils/tileMaps/tileMap.js");
var _turnManagerJs = require("../utils/game/turnManager.js");
var _turnManagerJsDefault = parcelHelpers.interopDefault(_turnManagerJs);
var _worldJs = require("../utils/game/world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
var _gameJs = require("../utils/game/game.js");
var _gameJsDefault = parcelHelpers.interopDefault(_gameJs);
var _actorMapJs = require("./actorMap.js");
var _actorMapJsDefault = parcelHelpers.interopDefault(_actorMapJs);
var _screenJs = require("../utils/game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _symbolMappingJs = require("./symbolMapping.js");
var _uiJs = require("../utils/dom/ui.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
var _traitsJs = require("../dnd/traits.js");
var _sceneJs = require("../utils/game/scene.js");
const GRID_SIZE = 48;
class SceneDefinition {
    /** @type {string} */ intro;
    /** @type {Actors} */ enemies;
    /** @type {string[]} */ mapDesign;
    /**
   * Construct an empty scene
   */ constructor(){
        this.enemies = [];
        this.mapDesign = [];
    }
}
/**
 * Create the enemies.
 * @param {SceneDefinition} sceneDefn
 * @returns {Actor[]}
 */ function createEnemies(sceneDefn) {
    const enemies = [];
    sceneDefn.enemies.forEach((enemy)=>{
        const actor = (0, _actorMapJsDefault.default).get(enemy.id).create();
        actor.traits = enemy.traits;
        enemies.push(actor);
    });
    return enemies;
}
/**
 * Add the load method to the scene object.
 * @param {*} sceneDefn - the definition of the scene.
 * @returns {Promise} fulfils to null;
 */ function createLoadFn(sceneDefnUnused) {
    return ()=>{
        return (0, _imageManagerJsDefault.default).loadSpriteMap((0, _dungeonJsonDefault.default), (0, _dungeonPngDefault.default));
    };
}
/**
 * Add the load method to the scene object.
 * @param {*} sceneDefn - the definition of the scene.
 * @returns {Promise} fulfils to null;
 */ function createInitialiseFn(sceneDefn) {
    return ()=>{
        const tileMap = new (0, _tileMapJs.TileMap)((0, _screenJsDefault.default).getContext2D(), (0, _tilePlanJs.generateTileMapPlan)(sceneDefn.mapDesign, (0, _symbolMappingJs.TILE_MAP_KEYS)), GRID_SIZE);
        (0, _worldJsDefault.default).setTileMap(tileMap);
        const heroActor = (0, _actorMapJsDefault.default).get("HERO").create();
        heroActor.traits = new (0, _traitsJs.CharacterTraits)();
        createEnemies(sceneDefn).forEach((enemy)=>{
            enemy.position = tileMap.getRandomFreeGroundTile().worldPoint;
            (0, _worldJsDefault.default).addActor(enemy);
        });
        (0, _gameJsDefault.default).setCameraToTrack(heroActor.sprite, 200, 0);
        (0, _worldJsDefault.default).addActor(heroActor);
        (0, _turnManagerJsDefault.default).startWithHero(heroActor);
        (0, _uiJsDefault.default).showMessage(sceneDefn.intro);
        return Promise.resolve(null);
    };
}
/**
 * Add the load method to the scene object.
 * @param {*} sceneDefn - the definition of the scene.
 */ function createUpdateFn(sceneDefn) {
    return ()=>{
        return;
    };
}
/**
 * Add the load method to the scene object.
 * @param {*} sceneDefn - the definition of the scene.
 * @returns {Promise} fulfils to null;
 */ function createUnloadFn(sceneDefn) {
    return ()=>{
        return Promise.resolve(null);
    };
}
function parseSceneDefinition(sceneDefn) {
    const scene = new (0, _sceneJs.AbstractScene)();
    scene.doLoad = createLoadFn(sceneDefn);
    scene.doInitialise = createInitialiseFn(sceneDefn);
    scene.doUpdate = createUpdateFn(sceneDefn);
    scene.doUnload = createUnloadFn(sceneDefn);
    return scene;
}

},{"../utils/sprites/imageManager.js":"3hqS8","../../assets/images/dungeon.json":"1ZDiz","../../assets/images/dungeon.png":"4Rz4h","../utils/tileMaps/tilePlan.js":"4QBW9","../utils/tileMaps/tileMap.js":"hddTD","../utils/game/turnManager.js":"e3GKX","../utils/game/world.js":"7yYJp","../utils/game/game.js":"ecf5i","./actorMap.js":"fmK8F","../utils/game/screen.js":"kFko1","./symbolMapping.js":"7HNVy","../utils/dom/ui.js":"itFhR","../dnd/traits.js":"e7NvN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils/game/scene.js":"1wK4G"}],"1ZDiz":[function(require,module,exports) {
module.exports = JSON.parse('{"frames":[{"filename":"blank.png","frame":{"x":1,"y":95,"w":3,"h":3},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":3,"h":3},"sourceSize":{"w":48,"h":48}},{"filename":"block.png","frame":{"x":435,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"blood-splat.png","frame":{"x":1,"y":1,"w":94,"h":92},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":4,"w":94,"h":92},"sourceSize":{"w":96,"h":96}},{"filename":"door-B.png","frame":{"x":435,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-L.png","frame":{"x":1071,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-R.png","frame":{"x":1080,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"door-T.png","frame":{"x":485,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBE.png","frame":{"x":485,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor-SBW.png","frame":{"x":535,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor.png","frame":{"x":535,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBE.png","frame":{"x":585,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2-SBW.png","frame":{"x":585,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"floor2.png","frame":{"x":635,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"hero.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero001.png","frame":{"x":343,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":44,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"hero002.png","frame":{"x":985,"y":51,"w":46,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":48},"sourceSize":{"w":48,"h":49}},{"filename":"hero003.png","frame":{"x":1033,"y":51,"w":45,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":1,"w":45,"h":48},"sourceSize":{"w":49,"h":49}},{"filename":"hero004.png","frame":{"x":389,"y":1,"w":44,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":44,"h":49},"sourceSize":{"w":49,"h":49}},{"filename":"hud-arrow-down-000.png","frame":{"x":147,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-down-001.png","frame":{"x":195,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-000.png","frame":{"x":243,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-left-001.png","frame":{"x":291,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-000.png","frame":{"x":339,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-right-001.png","frame":{"x":387,"y":52,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-000.png","frame":{"x":1220,"y":51,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-arrow-up-001.png","frame":{"x":1246,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-000.png","frame":{"x":1268,"y":49,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"hud-auto-centre-001.png","frame":{"x":1294,"y":1,"w":46,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":1,"w":46,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"orc.png","frame":{"x":97,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc001.png","frame":{"x":295,"y":1,"w":46,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":0,"w":46,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc002.png","frame":{"x":147,"y":1,"w":48,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc003.png","frame":{"x":197,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"orc004.png","frame":{"x":246,"y":1,"w":47,"h":49},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":49},"sourceSize":{"w":48,"h":49}},{"filename":"RIP.png","frame":{"x":97,"y":52,"w":48,"h":46},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":48,"h":46},"sourceSize":{"w":48,"h":48}},{"filename":"wall-B.png","frame":{"x":635,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BL.png","frame":{"x":1106,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BLI.png","frame":{"x":685,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BR.png","frame":{"x":1035,"y":1,"w":34,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":34,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BRI.png","frame":{"x":685,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-BTEE.png","frame":{"x":735,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-HI.png","frame":{"x":735,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-L.png","frame":{"x":1115,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-LTEE.png","frame":{"x":1141,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-R.png","frame":{"x":1150,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-RTEE.png","frame":{"x":1176,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-T.png","frame":{"x":785,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TL.png","frame":{"x":1185,"y":51,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TLI.png","frame":{"x":785,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TR.png","frame":{"x":1211,"y":1,"w":33,"h":48},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TRI.png","frame":{"x":835,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-TTEE.png","frame":{"x":835,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-VI.png","frame":{"x":885,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall-XI.png","frame":{"x":885,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-B.png","frame":{"x":935,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-HI.png","frame":{"x":935,"y":51,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}},{"filename":"wall2-T.png","frame":{"x":985,"y":1,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"dungeon.png","format":"RGBA8888","size":{"w":1341,"h":100},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:5b9f108ea06ab16fd677f7a7c0110162:1578bcb2c28a1c67406749ce63fc8b19:9c0fba27a8a0c106083a8713f6c67b32$"}}');

},{}],"4Rz4h":[function(require,module,exports) {
module.exports = require("561c46a0b035043f").getBundleURL("9up4p") + "dungeon.1980a572.png" + "?" + Date.now();

},{"561c46a0b035043f":"lgJ39"}],"4QBW9":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Design created by users for a tile map.
 * The design comprises an array of strings. Each string is row in the tile map.
 * A single character is used for each tile. Users can use any character they want
 * except for the {@link SpecialSymbols} characters which have predefined meanings.
 * These predefined symbols can be ambiguous. E.g. the CORNER could be any of four possible
 * corners. These are clarified automatically and have a suffix added to clarify
 * its position.
 *  @typedef {string[]}TileMapDesign
 */ /**
 * Two dimensional array of tile design information. This is different from the
 * design information as the design now exists as a two dimensional array of
 * TileDefinition.
 *
 * @typedef {Array.TileDefinition[]} TilePlan
 */ /**
 * Tile Design Information.
 * @typedef {Object} TileDefinition
 * @property {string} name
 * @property {string} image
 */ /**
 * Map of symbols to names and image names. The name just allows different tile
 * types to use the same image.
 * @typedef {Map<string, TileDesignInfo>} SymbolMap
 */ /**
 * Converts a tile map design into a tile map plan
 * @param {TileMapDesign} design
 * @param {SymbolMap}} symbolMap
 */ parcelHelpers.export(exports, "generateTileMapPlan", ()=>generateTileMapPlan);
var _arrayManipJs = require("../arrays/arrayManip.js");
/** Symbol used to mark void tiles @type {string} */ const VOID_SYMBOL = " ";
/** Special symbols for constructing the dungeon.
 * The first character in each array is used as the default, so there should be
 * an image for that. Note that the symbols in the arrays must be single characters.
 * @type {Object<string, string[]>}
 */ const SpecialSymbols = {
    WALL: [
        "#",
        "*",
        "|"
    ],
    DOOR_IN: [
        "-"
    ],
    DOOR_OUT: [
        "="
    ],
    GROUND: [
        ".",
        ":",
        ",",
        ";"
    ],
    VOID: [
        " "
    ]
};
/**
 * Clarifiers appended to ambiguous design symbols.
 */ const Clarifiers = {
    TOP_LEFT: "-TL",
    TOP_LEFT_INTERNAL: "-TLI",
    TOP: "-T",
    TOP_RIGHT: "-TR",
    TOP_RIGHT_INTERNAL: "-TRI",
    RIGHT: "-R",
    BOTTOM_RIGHT: "-BR",
    BOTTOM_RIGHT_INTERNAL: "-BRI",
    BOTTOM: "-B",
    BOTTOM_LEFT: "-BL",
    BOTTOM_LEFT_INTERNAL: "-BLI",
    LEFT: "-L",
    TOP_TEE: "-TTEE",
    RIGHT_TEE: "-RTEE",
    BOTTOM_TEE: "-BTEE",
    LEFT_TEE: "-LTEE",
    INTERNAL_CROSS: "-XI",
    INTERNAL_VERTICAL: "-VI",
    INTERNAL_HORIZONTAL: "-HI"
};
/**
 * Shadow clarifiers. Added to some symbols to mark it as being below a top wall.
 */ const ShadowClarifier = {
    BELOW_WALL: "-SBW",
    BELOW_END_WALL: "-SBE"
};
function generateTileMapPlan(design, symbolMap) {
    let matrix = convertToMatrix(design);
    matrix = clarifyDesign(matrix);
    return createPlan(matrix, symbolMap);
}
/**
 * Convert the user's design from array of strings into a 2D array.
 * @returns {Array.string[]}
 */ function convertToMatrix(design) {
    const matrix = [];
    let nColumns = 0;
    design.forEach((row)=>{
        nColumns = Math.max(nColumns, row.length);
    });
    design.forEach((row)=>{
        if (row.length < nColumns) row = row + " ".repeat(nColumns - length);
        matrix.push(row.split(""));
    });
    return matrix;
}
/**
 * Go through the design matrix and convert any ambiguous symbols to more specific
 * ones
 * @param {Array.string[]} matrix
 */ function clarifyDesign(matrix) {
    const unambiguousMatrix = [];
    matrix.forEach((rowValue, rowIndex)=>{
        const correctedRow = [];
        unambiguousMatrix.push(correctedRow);
        rowValue.forEach((colValue, colIndex)=>{
            const surrounds = (0, _arrayManipJs.getSurrounds)(matrix, rowIndex, colIndex);
            if (isVoid(colValue)) colValue = VOID_SYMBOL;
            else if (isGround(colValue)) colValue = clarifyGround(colValue, surrounds);
            else if (isPartOfWall(colValue)) colValue = clarifyWallPart(colValue, surrounds);
            correctedRow.push(colValue);
        });
    });
    return unambiguousMatrix;
}
/**
 * Test if symbol is a void.
 * @returns {boolean}
 */ function isVoid(symbol) {
    return SpecialSymbols.VOID.includes(symbol);
}
/**
 * Test if symbol is a door.
 * @returns {boolean}
 */ function isDoor(symbol) {
    return SpecialSymbols.DOOR_IN.includes(symbol) || SpecialSymbols.DOOR_OUT.includes(symbol);
}
/**
 * Test if symbol is a wall.
 * @returns {boolean}
 */ function isWall(symbol) {
    return SpecialSymbols.WALL.includes(symbol);
}
/**
 * Test if symbol is ground.
 * @returns {boolean}
 */ function isGround(symbol) {
    return SpecialSymbols.GROUND.includes(symbol);
}
/**
 * Test if the symbol, unclarified, is part of a wall.
 * @param {string} symbol
 * @returns {boolean}
 */ function isPartOfWall(symbol) {
    return isWall(symbol) || isDoor(symbol);
}
/**
 * Clarify the ground.
 * @param {string} value
 * @param {import('../arrays/arrayManip.js').Surrounds} surrounds
 * @return {string}
 */ function clarifyGround(value, surrounds) {
    if (isPartOfWall(surrounds.above)) return isPartOfWall(surrounds.tl) ? value += ShadowClarifier.BELOW_WALL : value += ShadowClarifier.BELOW_END_WALL;
    return value;
}
/**
 * Distinguish the type of tile based on its surroundings.
 * This function does not handle corners.
 * @param {string} value
 * @param {import('../arrays/arrayManip.js').Surrounds} surrounds
 * @return {string}
 */ function clarifyWallPart(value, surrounds) {
    let result = value;
    // internals centre cross
    if (isPartOfWall(surrounds.above) && isPartOfWall(surrounds.right) && isPartOfWall(surrounds.below) && isPartOfWall(surrounds.left)) result += Clarifiers.INTERNAL_CROSS;
    else if (isGround(surrounds.left) && isGround(surrounds.right)) result += Clarifiers.INTERNAL_VERTICAL;
    else if (isGround(surrounds.above) && isGround(surrounds.below)) result += Clarifiers.INTERNAL_HORIZONTAL;
    else if (isPartOfWall(surrounds.left) && isPartOfWall(surrounds.right) && isPartOfWall(surrounds.below)) result += Clarifiers.TOP_TEE;
    else if (isPartOfWall(surrounds.above) && isPartOfWall(surrounds.below) && isPartOfWall(surrounds.left)) result += Clarifiers.RIGHT_TEE;
    else if (isPartOfWall(surrounds.left) && isPartOfWall(surrounds.right) && isPartOfWall(surrounds.above)) result += Clarifiers.BOTTOM_TEE;
    else if (isPartOfWall(surrounds.above) && isPartOfWall(surrounds.below) && isPartOfWall(surrounds.right)) result += Clarifiers.LEFT_TEE;
    else if (isPartOfWall(surrounds.right) && isPartOfWall(surrounds.below)) result += isGround(surrounds.br) ? Clarifiers.TOP_LEFT : Clarifiers.TOP_LEFT_INTERNAL;
    else if (isPartOfWall(surrounds.left) && isPartOfWall(surrounds.below)) result += isGround(surrounds.bl) ? Clarifiers.TOP_RIGHT : Clarifiers.TOP_RIGHT_INTERNAL;
    else if (isPartOfWall(surrounds.left) && isPartOfWall(surrounds.above)) result += isGround(surrounds.tl) ? Clarifiers.BOTTOM_RIGHT : Clarifiers.BOTTOM_RIGHT_INTERNAL;
    else if (isPartOfWall(surrounds.right) && isPartOfWall(surrounds.above)) result += isGround(surrounds.tr) ? Clarifiers.BOTTOM_LEFT : Clarifiers.BOTTOM_LEFT_INTERNAL;
    else if (isPartOfWall(surrounds.above) && isPartOfWall(surrounds.below)) // vertical
    result += isGround(surrounds.right) ? Clarifiers.LEFT : Clarifiers.RIGHT;
    else if (isPartOfWall(surrounds.right) && isPartOfWall(surrounds.left)) // horizontal
    result += isGround(surrounds.below) ? Clarifiers.TOP : Clarifiers.BOTTOM;
    if (isPartOfWall(surrounds.above)) return result += ShadowClarifier.BELOW_WALL;
    return result;
}
/**
 * Convert a clarified design plan matrix into a tile plan.
 * @param {string[][]} matrix
 * @param {Map<string, *>} symbolMap
 * @returns {Array.<Array.<*>>}
 */ function createPlan(matrix, symbolMap) {
    const planMatrix = [];
    matrix.forEach((rowValue)=>{
        const planRow = [];
        planMatrix.push(planRow);
        rowValue.forEach((columnValue)=>{
            planRow.push(getDesignInfo(columnValue, symbolMap));
        });
    });
    return planMatrix;
}
/** Get the design info from the symbol map.
 * @param {string} symbol - clarified symbol.
 * @param {Map<string, *>} symbolMap
 * @returns {TileDesignInfo}
 */ function getDesignInfo(symbol, symbolMap) {
    if (symbol === VOID_SYMBOL) return null;
    const match = symbol.match(/(.)(-[^-]*)?(-[^-]*)?/);
    let info = symbolMap.get(symbol);
    if (!info && match[2] && match[3]) info = symbolMap.get(`${match[1]}${match[2]}`); // no shadow clarifier
    if (!info && match[2]) info = symbolMap.get(match[1]); // no clarifiers at all
    if (!info) {
        const fallbackSymbol = getFirstOfCohort(match[1]);
        if (fallbackSymbol && fallbackSymbol !== match[1]) return getDesignInfo(formClarifiedSymbol(fallbackSymbol, match[2], match[3]), symbolMap);
        else console.error(`Failed to find symbol for ${symbol}`);
    }
    return info;
}
/**
 * Searches the SpecialSymbols and finds the first entry in the array that matches
 * the unclarified symbol.
 * @param {string} unclarifiedSymbol
 * @returns {string} null if not found
 */ function getFirstOfCohort(unclarifiedSymbol) {
    for(const prop in SpecialSymbols){
        if (SpecialSymbols[prop].includes(unclarifiedSymbol)) return SpecialSymbols[prop][0];
    }
    return null;
}
/**
 * Add clarifiers onto symbol.
 * @param {string} unclarifiedSymbol
 * @param {string} clarifier
 * @param {string} shadowClarifier
 */ function formClarifiedSymbol(unclarifiedSymbol, clarifier, shadowClarifier) {
    let result = unclarifiedSymbol;
    if (clarifier) result += clarifier;
    if (shadowClarifier) result += shadowClarifier;
    return result;
}

},{"../arrays/arrayManip.js":"8rEzT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rEzT":[function(require,module,exports) {
/**
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
 */ /**
 * @typedef Surrounds
 * @property {*} tl - value to top left
 * @property {*} above - value above
 * @property {*} tr - value to top right
 * @property {*} right - value to right
 * @property {*} br - value to bottom right
 * @property {*} below - value below
 * @property {*} bl - value to bottom
 * @property {*} left - value to left
 */ /**
 * Get the surround values from a 2D matrix
 * @param {Array.<Array.<*>>} matrix
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @returns {Surrounds}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSurrounds", ()=>getSurrounds);
/**
 * Randomise an array.
 * @param {Object[]} source - array to randomise. The original will be modified.
 * @returns {Object[]} The source array which will have been randomised.
 */ parcelHelpers.export(exports, "randomise", ()=>randomise);
function getSurrounds(matrix, rowIndex, columnIndex) {
    return {
        tl: matrix[rowIndex - 1]?.[columnIndex - 1],
        above: matrix[rowIndex - 1]?.[columnIndex],
        tr: matrix[rowIndex - 1]?.[columnIndex + 1],
        right: matrix[rowIndex]?.[columnIndex + 1],
        br: matrix[rowIndex + 1]?.[columnIndex + 1],
        below: matrix[rowIndex + 1]?.[columnIndex],
        bl: matrix[rowIndex + 1]?.[columnIndex - 1],
        left: matrix[rowIndex]?.[columnIndex - 1]
    };
}
function randomise(source) {
    let currentIndex = source.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while(currentIndex > 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // swap
        [source[currentIndex], source[randomIndex]] = [
            source[randomIndex],
            source[currentIndex]
        ];
    }
    return source;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hddTD":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClickEventFilter", ()=>ClickEventFilter);
parcelHelpers.export(exports, "TileRole", ()=>TileRole);
/**
 * @typedef {Object} TileDefinition
 * @property {TileRole} role
 * @property {import('../sprites/sprite.js').SpriteClickHandler} onClick
 * @property {import('../sprites/sprite.js').SpriteClickHandler} onContextClick
 * @property {string} image - used to create the sprite.
 */ /**
 * Tile class
 */ parcelHelpers.export(exports, "Tile", ()=>Tile);
/**
 * Tile map
 */ parcelHelpers.export(exports, "TileMap", ()=>TileMap);
var _spriteJs = require("../sprites/sprite.js");
var _imageManagerJs = require("../sprites/imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
var _spriteRenderersJs = require("../sprites/spriteRenderers.js");
var _geometryJs = require("../geometry.js");
var _interactionsJs = require("../ui/interactions.js");
var _arrayManipJs = require("../arrays/arrayManip.js");
var _screenJs = require("../game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _pathFinderJs = require("./pathFinder.js");
var _turnManagerJs = require("../game/turnManager.js");
var _turnManagerJsDefault = parcelHelpers.interopDefault(_turnManagerJs);
const ClickEventFilter = {
    MOVEMENT_TILE: 0,
    COMBAT_TILE: 1
};
const TileRole = {
    OBSTACLE: -1,
    GROUND: 0,
    ENTRANCE: 1,
    EXIT: 2,
    STAIRS_UP: 3,
    STAIRS_DOWN: 4
};
class Tile extends (0, _interactionsJs.UiClickHandler) {
    /** @type {Sprite} */ sprite;
    /** @type {boolean} */ obstacle;
    /** @type {Object[]} */ #occupants;
    /** @type {Point} */ #gridPoint;
    /** @type {Point} */ #worldPoint;
    /** @type {TileRole} */ #role;
    /** Construct tile
   * @param {Sprite} tileSprite;
   * @param {Object} options;
   * @param {boolean} options.obstacle;
   * @param {!Point} options.gridPoint;
   * @param {!Point} options.worldPoint;
   * @param {TileRole} options.role;
   */ constructor(tileSprite, options){
        super();
        this.sprite = tileSprite;
        this.#occupants = new Map();
        this.obstacle = options.obstacle;
        this.#gridPoint = options.gridPoint;
        this.#worldPoint = options.worldPoint;
        this.#role = options.role;
    }
    /**
   * Get the role.
   */ get role() {
        return this.#role;
    }
    /**
   * Get the grid point.
   * @returns {Point}
   */ get gridPoint() {
        return this.#gridPoint;
    }
    /**
   * Get the world point.
   * @returns {Point}
   */ get worldPoint() {
        return this.#worldPoint;
    }
    /** Add occupant.
   * @param {Object}
   */ addOccupant(occupant) {
        this.#occupants.set(occupant, occupant);
    }
    /** Remove occupant.
   * @param {Object}
   */ deleteOccupant(occupant) {
        this.#occupants.delete(occupant);
    }
    /** get occupants.
   * @param {Object}
   */ getOccupants() {
        return this.#occupants;
    }
    /**
   * Handle the click but change the point to the sprites' position
   */ actionClick(pointUnused) {
        super.actionClick(this.sprite.position);
    }
    /**
   * Handle the click but change the point to the sprites' position
   */ actionContextClick(pointUnused) {
        super.actionClick(this.sprite.position);
    }
    /**
   * Test if occupied
   * @returns {boolean}
   */ isOccupied() {
        return this.#occupants.size > 0;
    }
    /**
   * Test if tile can be passed by the actor
   * @param {Object} actor
   * @returns {boolean}
   */ isPassableByActor(actor) {
        if (this.obstacle) return false;
        for (const occupant of this.#occupants.values()){
            if (occupant !== actor && occupant.obstacle) return false;
        }
        return true;
    }
    /**
   * Test if tile can be seen through by the actor
   * @param {Object} actor
   * @returns {boolean}
   */ isSeeThrough(actorUnused) {
        if (this.obstacle || this.#role === TileRole.ENTRANCE || this.#role === TileRole.EXIT) return false;
        return true;
    }
}
class TileMap {
    /** @type {CanvasRenderingContext2D} */ #context;
    /** @type {Tile[]} */ #tiles;
    #tilesX;
    #tilesY;
    #gridSize;
    #width;
    #height;
    /** @type {import('./pathFinder.js').Routes} */ #movementRoutes;
    /** @type {Point{}} */ #movementGridPoints;
    /** @type {Sprite} */ #movementTileHighlighter;
    /** @type {Tile} */ #entrance;
    /** @type {Tile} */ #exit;
    /** @type {Tile[]} */ #randomGround;
    /** @type {RayTracer} */ #heroRayTracer;
    /** @type {Tile[]} */ #combatTileGridPoints;
    /** @type {Sprite} */ #combatTileHighlighter;
    /**
   * Create tile map from 2D matrix
   * @param {CanvasRenderingContext2D} context
   * @param {Array.<TileDefinition>} plan
   * @param {number} gridSize - in world coordinates
   */ constructor(context, plan, gridSize){
        this.#context = context;
        this.#movementTileHighlighter = new (0, _spriteJs.Sprite)({
            renderer: new (0, _spriteRenderersJs.RectSpriteCanvasRenderer)(context, {
                width: gridSize,
                height: gridSize,
                fillStyle: null,
                strokeStyle: "white"
            })
        });
        this.#combatTileHighlighter = new (0, _spriteJs.Sprite)({
            renderer: new (0, _spriteRenderersJs.RectSpriteCanvasRenderer)(context, {
                width: gridSize,
                height: gridSize,
                fillStyle: null,
                strokeStyle: "red"
            })
        });
        this.#gridSize = gridSize;
        this.#tiles = [];
        this.#tilesY = plan.length;
        this.#tilesX = plan[0].length;
        this.#width = gridSize * this.tilesX;
        this.#height = gridSize * this.tilesY;
        this.#randomGround = [];
        plan.forEach((row, rowIndex)=>{
            const tileRow = [];
            this.#tiles.push(tileRow);
            row.forEach((tileDefn, columnIndex)=>{
                if (tileDefn) {
                    const sprite = new (0, _spriteJs.Sprite)({
                        renderer: new (0, _spriteRenderersJs.ImageSpriteCanvasRenderer)(context, (0, _imageManagerJsDefault.default).getSpriteBitmap(0, tileDefn.image))
                    });
                    const gridPoint = new (0, _geometryJs.Point)(columnIndex, rowIndex);
                    const worldPoint = this.gridPointToWorldPoint(gridPoint);
                    let tile = new Tile(sprite, {
                        obstacle: tileDefn.role === TileRole.OBSTACLE,
                        gridPoint: gridPoint,
                        worldPoint: worldPoint,
                        role: tileDefn.role
                    });
                    if (tileDefn.onClick) {
                        tile.setOnClick((target, point)=>this.#filterClick(target, point, tileDefn.onClick));
                        tile.setOnContextClick(tileDefn.onContextClick);
                    }
                    this.processTileRole(tile);
                    tileRow.push(tile);
                    sprite.position.x = columnIndex * this.#gridSize + this.#gridSize / 2;
                    sprite.position.y = rowIndex * this.#gridSize + this.#gridSize / 2;
                } else tileRow.push(null);
            });
        });
        if (!this.#entrance) {
            console.error("No entrance has been set. Setting to the first ground tile");
            this.#entrance = this.#randomGround[0];
        }
    }
    /**
   * Process a tile's specific role.
   * @param {Tile} tile
   */ processTileRole(tile) {
        switch(tile.role){
            case TileRole.ENTRANCE:
                if (this.#entrance) {
                    const gp = tile.gridPoint;
                    console.error(`Duplicate entrance found at (${gp.x}, ${gp.y}). Ignored.`);
                } else this.#entrance = tile;
                break;
            case TileRole.EXIT:
                if (this.#exit) {
                    const gp = tile.gridPoint;
                    console.error(`Duplicate exit found at (${gp.x}, ${gp.y}). Ignored.`);
                } else this.#exit = tile;
                break;
            case TileRole.GROUND:
                this.#randomGround.push(tile);
                break;
        }
    }
    /**
   * Update method to render tiles.
   * @param {number} deltaSeconds - elapsed time.
   */ update(deltaSeconds) {
        this.#setRayTracer();
        const visibleGridPoints = this.getVisibleGridPointRect();
        for(let row = visibleGridPoints.y; row <= visibleGridPoints.y + visibleGridPoints.height; row++){
            for(let col = visibleGridPoints.x; col <= visibleGridPoints.x + visibleGridPoints.width; col++)if (this.#heroRayTracer?.isGridPointInRays(new (0, _geometryJs.Point)(col, row))) {
                const tile = this.#tiles[row][col];
                tile?.sprite.update(deltaSeconds);
            }
        }
        this.#highlightTiles(deltaSeconds);
    }
    /**
   * Set up the ray tracer if not already set.
   */ #setRayTracer() {
        if (!this.#heroRayTracer) {
            const hero = (0, _turnManagerJsDefault.default).getHeroActor();
            if (hero) this.#heroRayTracer = new (0, _pathFinderJs.RayTracer)(this, hero);
        }
        this.#heroRayTracer.findReachedTiles();
    }
    /**
   * Get the visible bounds as a rectangle in gridpoints.
   * @returns {Rectangle}
   */ getVisibleGridPointRect() {
        const visibleBounds = (0, _screenJsDefault.default).geWorldInCanvasBounds();
        const gridPointTL = this.worldPointToGrid(new (0, _geometryJs.Point)(visibleBounds.x, visibleBounds.y));
        const gridPointBR = this.worldPointToGrid(new (0, _geometryJs.Point)(visibleBounds.x + visibleBounds.width, visibleBounds.y + visibleBounds.height));
        const minCol = Math.max(0, gridPointTL.x);
        const maxCol = Math.min(this.#tilesX - 1, gridPointBR.x);
        const minRow = Math.max(0, gridPointTL.y);
        const maxRow = Math.min(this.#tilesY - 1, gridPointBR.y);
        return new (0, _geometryJs.Rectangle)(minCol, minRow, maxCol - minCol, maxRow - minRow);
    }
    /**
   * Get the gridsize
   * @returns {number}
   */ getGridSize() {
        return this.#gridSize;
    }
    /** Get world dimensions.
   * @returns {import('../geometry.js').Dims2D}
   */ getDimensions() {
        return {
            width: this.#width,
            height: this.#height
        };
    }
    /**
   * Get sprite at position.
   * @param {Point} point - in world coordinates.
   * @returns {Tile} null if no tile.
   */ getTileAtWorldPoint(point) {
        const gridPoint = this.worldPointToGrid(point);
        return this.getTileAtGridPoint(gridPoint);
    }
    /**
   * Get sprite at position.
   * @param {Point} point - in grid coordinates.
   * @returns {Tile} null if no tile.
   */ getTileAtGridPoint(gridPoint) {
        if (!gridPoint) return null;
        const row = gridPoint.y;
        const col = gridPoint.x;
        if (col >= 0 && row >= 0 && col < this.#tilesX && row < this.#tilesY) return this.#tiles[row][col];
        return null;
    }
    /**
   * Convert world coordinate to mad grid reference.
   * @param {Point} point
   * @returns {Point}
   */ worldPointToGrid(point) {
        return new (0, _geometryJs.Point)(Math.floor(point.x / this.#gridSize), Math.floor(point.y / this.#gridSize));
    }
    /**
   * Get a world point aligned to the centre of a tile
   * @param {Point} point
   */ gridAlignedWorldPoint(point) {
        const gridPoint = this.worldPointToGrid(point);
        return this.gridPointToWorldPoint(gridPoint);
    }
    /** Convert a point in tile coordinates to world coordinates.
   * @param {Point}
   * @returns {Point}
   */ gridPointToWorldPoint(point) {
        const halfGrid = 0.5 * this.#gridSize;
        return new (0, _geometryJs.Point)(point.x * this.#gridSize + halfGrid, point.y * this.#gridSize + halfGrid);
    }
    /** Get the world position of the entrance. The default is the first tile if there
   * is no door
   * @returns {Point}
   */ getWorldPositionOfEntrance() {
        return this.gridPointToWorldPoint(this.getGridPositionOfEntrance());
    }
    /** Get the grid position of the door at index. If there are no doors, then
   * the entrance is the first ground tile
   * @returns {Point}
   */ getGridPositionOfEntrance() {
        return this.#entrance.gridPoint;
    }
    /**
   * Set the highlighted routes.
   * @param {*} routes
   */ setMovementRoutes(routes) {
        this.#movementRoutes = routes;
        if (routes) {
            this.#movementGridPoints = new Map();
            this.#movementRoutes.forEach((gridPoints)=>gridPoints.forEach((gridPoint)=>{
                    this.#movementGridPoints.set(gridPoint, gridPoint);
                }));
        } else this.#movementGridPoints = null;
    }
    /**
   * Set combat tiles
   * @param {Actor[]} actors - actors where combat can take place.
   */ setCombatActors(actors) {
        this.#combatTileGridPoints = [];
        actors?.forEach((actor)=>{
            this.#combatTileGridPoints.push(this.worldPointToGrid(actor.position));
        });
    }
    /**
   * Highlight routes marked by the highlighters. There are three possible highlights:
   * movement, combat and interaction.
   * @param {number} deltaSeconds
   */ #highlightTiles(deltaSeconds) {
        this.#highlightMovementTiles(deltaSeconds);
        this.#highlightCombatTiles(deltaSeconds);
    }
    /**
   * Highlight movement routes.
   * @param {number} deltaSeconds
   */ #highlightMovementTiles(deltaSeconds) {
        this.#movementGridPoints?.forEach((gridPoint)=>{
            this.#movementTileHighlighter.position = this.gridPointToWorldPoint(gridPoint);
            this.#movementTileHighlighter.update(deltaSeconds);
        });
    }
    /**
   * Highlight movement routes.
   * @param {number} deltaSeconds
   */ #highlightCombatTiles(deltaSeconds) {
        this.#combatTileGridPoints?.forEach((gp)=>{
            this.#combatTileHighlighter.position = this.gridPointToWorldPoint(gp);
            this.#combatTileHighlighter.update(deltaSeconds);
        });
    }
    /**
   * Handle a tile click.
   * To be actioned a tile must be in the highlightedRoutes
   * @param {Sprite} target - the sprite that was clicked. This prevents the need
   * to use 'this' which may not be correct in the context.
   * @param {Point} point - the position in the world that was clicked
   * @param {import('../sprites/sprite.js').SpriteClickHandler} clickHandler
   */ #filterClick(target, point, clickHandler) {
        if (this.#movementRoutes?.containsGridPoint(this.worldPointToGrid(point))) {
            clickHandler(target, point, {
                filter: ClickEventFilter.MOVEMENT_TILE
            });
            return;
        }
        const gridPoint = this.worldPointToGrid(point);
        this.#combatTileGridPoints?.forEach((gp)=>{
            if (gp.isCoincident(gridPoint)) {
                clickHandler(target, point, {
                    filter: ClickEventFilter.COMBAT_TILE
                });
                return;
            }
        });
        console.debug("Ignore click outside of highlighted area");
    }
    /**
   * Get waypoints to reach destination grid point
   * @param {Point} worldPoint - destination
   * @returns {Point[]} null if no route currently found.
   */ getWaypointsToWorldPoint(worldPoint) {
        const destination = this.worldPointToGrid(worldPoint);
        return this.#movementRoutes?.getWaypointsAsWorldPoints(destination);
    }
    /**
   * Get a random unoccupied ground tile.
   * @returns {Tile} null if no free ground tile.
   */ getRandomFreeGroundTile() {
        (0, _arrayManipJs.randomise)(this.#randomGround);
        for (const tile of this.#randomGround){
            if (!tile.isOccupied()) return tile;
        }
        return null;
    }
    /**
   * Test if point is passable.
   * @param {Point} gridPoint - row and col coordinates.
   * @param {import('../game/actors.js').Actor} actor - actor trying to pass
   * @returns {boolean}
   */ isGridPointPassableByActor(gridPoint, actor) {
        const tile = this.getTileAtGridPoint(gridPoint);
        if (!tile) return false;
        return tile.isPassableByActor(actor);
    }
    /**
   * Is the grid point visible by the hero.
   * @param {Point} gridPoint
   * @returns {boolean}
   */ canHeroSeeGridPoint(gridPoint) {
        return this.#heroRayTracer?.isGridPointInRays(gridPoint) ?? true;
    }
    /**
   * Test if point can be seen through.
   * @param {Point} gridPoint - row and col coordinates.
   * @param {import('../game/actors.js').Actor} actor - actor trying to see
   * @returns {boolean}
   */ isSeeThrough(gridPoint, actor) {
        const tile = this.getTileAtGridPoint(gridPoint);
        if (!tile) return true;
        return tile.isSeeThrough(actor);
    }
    /**
   * Get the tiles surrounding a reference.
   * @param {Point} gridPoint
   */ getSurroundingTiles(gridPoint) {
        return (0, _arrayManipJs.getSurrounds)(this.#tiles, gridPoint.y, gridPoint.x);
    }
    /**
   * Removed occupant from the list of occupants
   * of the tile at the grid point.
   * @param {Object} occupant
   * @param {Point} gridPoint
   */ deleteOccupancyOfGridPoint(occupant, gridPoint) {
        this.getTileAtGridPoint(gridPoint)?.deleteOccupant(occupant);
    }
    /**
   * Set the object's tile occupancy. It is removed from the list of occupants
   * of the tile at the previous point and added to those of the next.
   * @param {Object} occupant
   * @param {Point} oldGridPoint
   * @param {Point} newGridPoint
   */ moveTileOccupancyGridPoint(occupant, oldGridPoint, newGridPoint) {
        if (newGridPoint !== oldGridPoint) {
            this.getTileAtGridPoint(oldGridPoint)?.deleteOccupant(occupant);
            this.getTileAtGridPoint(newGridPoint)?.addOccupant(occupant);
        }
    }
    /**
   * Get all the participants around an actor. Diagonals are not included in
   * potential participants.
   * @param {Actor} actor
   * @returns {Actor[]}
   */ getParticipants(actor) {
        const participants = [];
        const surrounds = this.getSurroundingTiles(this.worldPointToGrid(actor.position));
        const tiles = [
            surrounds.above,
            surrounds.right,
            surrounds.below,
            surrounds.left
        ];
        tiles.forEach((tile)=>{
            let tileOccupants = tile?.getOccupants();
            tileOccupants?.forEach((occupant)=>{
                participants.push(occupant);
            });
        });
        return participants;
    }
}

},{"../sprites/sprite.js":"gSPJO","../sprites/imageManager.js":"3hqS8","../sprites/spriteRenderers.js":"lGWVU","../geometry.js":"oxWLG","../ui/interactions.js":"1ChIe","../arrays/arrayManip.js":"8rEzT","../game/screen.js":"kFko1","./pathFinder.js":"420yd","../game/turnManager.js":"e3GKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"420yd":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Map of located routes.
 * Note that all points are grid references NOT WORLD POINTS.
 */ parcelHelpers.export(exports, "Routes", ()=>Routes);
/**
 * Encapsulation of route finder for finding paths through routes.
 */ parcelHelpers.export(exports, "RouteFinder", ()=>RouteFinder);
/**
 * Ray tracer from a starting point
 */ parcelHelpers.export(exports, "RayTracer", ()=>RayTracer);
var _geometryJs = require("../geometry.js");
var _mathsJs = require("../maths.js");
class Routes {
    /** @type {Map<string, Point[]>} */ #routes;
    /** @type {import('./tileMap.js').TileMap} */ #tileMap;
    /**
   * Create routes.
   * @param {import('./tileMap.js').TileMap} tileMap
   */ constructor(tileMap){
        this.#tileMap = tileMap;
        this.#routes = new Map();
    }
    /**
   * Set route to reach coordinates
   * @param {Point[]} route
   * @param {*} x
   * @param {*} y
   */ setRouteToCoords(route, x, y) {
        this.#routes.set(this.coordsToKey(x, y), route);
    }
    /**
   * Get route to reach coordinates
   * @param {*} x
   * @param {*} y
   * @returns {Point[]} route}
   */ getRouteToCoords(x, y) {
        return this.#routes.get(this.coordsToKey(x, y));
    }
    /** Test if routes has route to coords.
   * @param {number} x - grid position
   * @param {number} y - grid position
   * @returns {boolean}
   */ hasRouteToCoords(x, y) {
        return this.#routes.has(this.coordsToKey(x, y));
    }
    /**
   * Create a key for the routes map from a row and column.
   * @param {number} x
   * @param {number} y
   * @returns {string}
   */ coordsToKey(x, y) {
        return `${x}|${y}`;
    }
    /**
   * Convert a map key to a grid reference.
   * @param {string} key
   * @returns {Point} Point giving the tile map grid reference.
   */ keyToGridPoint(key) {
        const reference = key.split("|");
        return new (0, _geometryJs.Point)(parseInt(reference[0]), parseInt(reference[1]));
    }
    /**
   * Get the entries
   * @returns {Iterator}
   */ forEach(callback) {
        this.#routes.forEach((value, key, map)=>callback(value, key, map));
    }
    /**
   * Check if any routes contains the coordinates
   * @param {Point} point
   * @returns {boolean}
   */ containsGridPoint(point) {
        return this.#routes.has(this.coordsToKey(point.x, point.y));
    }
    /**
   * Get wayPoints to get to destination of x, y. The starting point is stripped
   * off. Points are returned as grid references
   * @param {Point} destination
   * @returns {Point[]} array of points to reach grid reference x, y. Null if no route.
   */ getWaypointsAsGridPoints(destination) {
        const points = this.getRouteToCoords(destination.x, destination.y);
        if (points.length > 1) return points.slice(1);
        else return null;
    }
    /**
   * Get wayPoints to get to destination of x, y. The starting point is stripped
   * off.
   * @param {Point} destination
   * @returns {Point[]} array of points to reach grid reference x, y
   */ getWaypointsAsWorldPoints(destination) {
        const waypoints = this.getWaypointsAsGridPoints(destination);
        if (waypoints) return waypoints.map((gridPoint)=>this.#tileMap.gridPointToWorldPoint(gridPoint));
        else return waypoints;
    }
}
class RouteFinder {
    /** Actor trying to find routes. @type {import('./tileMap.js').Actor} */ actor;
    /** @type {Route[]} */ #routes;
    /** @type {import('./tileMap.js').TileMap} */ #tileMap;
    /** @type {Point} */ #startPoint;
    /** Create the route finder.
   * @param {import('./tileMap.js').TileMap} tileMap
   * @param {import('./tileMap.js').Actor} actor
   */ constructor(tileMap, actor){
        this.#tileMap = tileMap;
        this.actor = actor;
    }
    /**
   * Find a route to the destination gridPoint. Note that it tries to find a route
   * adjacent to the target grid point, not actually on the grid point. The resulting
   * route is dumb, in that it does not try all options to maximise movement.
   * @param {Point} startingGridPoint - starting point
   * @param {Point} targetGridPoint - starting point
   * @param {*} maxMove - maximum number of moves allowed.
   * @returns {Map<string, Point[]>} null if no path available or necessary.
   */ getDumbRouteNextTo(startingGridPoint, targetGridPoint, maxMove) {
        let destination = this.#getAdjacentTarget(startingGridPoint, targetGridPoint);
        if (destination.coincident(startingGridPoint)) return [];
        if (!this.#tileMap.isGridPointPassableByActor(destination, this.actor)) destination = this.#rotateGridPointAbout(destination, targetGridPoint);
        let path = [];
        let dX = Math.sign(destination.x - startingGridPoint.x);
        let dY = Math.sign(destination.y - startingGridPoint.y);
        let waypoint = (0, _geometryJs.Point).copy(startingGridPoint);
        let movingX = Math.random() < 0.5;
        let consecutiveFails = 0;
        while(maxMove > 0){
            let nextPoint = (0, _geometryJs.Point).copy(waypoint);
            let moved = false;
            if (movingX && dX !== 0 && waypoint.x != destination.x) {
                nextPoint.x += dX;
                moved = true;
            } else if (!movingX && dY !== 0 && waypoint.y != destination.y) {
                nextPoint.y += dY;
                moved = true;
            }
            moved = moved && this.#tileMap.isGridPointPassableByActor(nextPoint, this.actor);
            if (moved) {
                consecutiveFails = 0;
                waypoint = nextPoint;
                maxMove--;
            } else {
                if (++consecutiveFails >= 2) break;
                if (!waypoint.coincident(startingGridPoint)) path.push(this.#tileMap.gridPointToWorldPoint(waypoint));
                startingGridPoint = waypoint;
                movingX = !movingX; //flip axi
            }
        }
        if (!waypoint.coincident(startingGridPoint)) path.push(this.#tileMap.gridPointToWorldPoint(waypoint));
        return path;
    }
    /**
   * Get all available routes as a Map of paths.
   * @param {Point} startingGridPoint - starting point
   * @param {*} maxMove - maximum number of moves allowed.
   * @returns {Map<string, Point[]>}
   */ getAllRoutesFrom(startingGridPoint, maxMove) {
        this.#routes = new Routes(this.#tileMap);
        this.#startPoint = startingGridPoint;
        this.#findRoutes(startingGridPoint.x, startingGridPoint.y, maxMove, null);
        return this.#routes;
    }
    /**
   * @param {number} x - tile x index of current tile
   * @param {number} y - tile y index of current tile
   * @param {number} maxTiles - the maximum number of tiles that can be moved.
   * @param {Point[]} [routePoints] - array of points that
   * represent current path taken to get here. If null, this is the start of the
   * route.
   */ #findRoutes(x, y, movesLeft, routePoints) {
        if (!routePoints) /* Initialise route. Don't check if it's clear as it may well be occupied
       * by the sprite seeking a route.
       */ routePoints = [
            new (0, _geometryJs.Point)(x, y)
        ];
        else {
            if (x === this.#startPoint.x && y === this.#startPoint.y) return;
            else if (!this.#isTilePassable(x, y)) return;
            const existingRoute = this.#routes.getRouteToCoords(x, y);
            if (!existingRoute || routePoints.length < existingRoute.length - 1) {
                routePoints.push(new (0, _geometryJs.Point)(x, y)); // we have a route to this point
                this.#routes.setRouteToCoords(routePoints, x, y);
                movesLeft--;
            } else return;
        }
        if (movesLeft > 0) {
            // try all 4 directions
            this.#findRoutes(x, y - 1, movesLeft, [
                ...routePoints
            ]); // up
            this.#findRoutes(x + 1, y, movesLeft, [
                ...routePoints
            ]); // right
            this.#findRoutes(x, y + 1, movesLeft, [
                ...routePoints
            ]); // down
            this.#findRoutes(x - 1, y, movesLeft, [
                ...routePoints
            ]); // left
        }
    }
    /** Check if tile is passable.
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   *
   */ #isTilePassable(x, y) {
        return this.#tileMap.isGridPointPassableByActor(new (0, _geometryJs.Point)(x, y), this.actor);
    }
    #getAdjacentTarget(current, target) {
        const deltaX = target.x - current.x;
        const deltaY = target.y - current.y;
        let adjX = target.x;
        let adjY = target.y;
        if (Math.abs(deltaX) > Math.abs(deltaY)) adjX -= Math.sign(deltaX);
        else adjY -= Math.sign(deltaY);
        return new (0, _geometryJs.Point)(adjX, adjY);
    }
    /**
   * Rotate a grid point about a target grid point. This does not rotate to
   * diagonals.
   */ #rotateGridPointAbout(gridPoint, originPoint) {
        if (gridPoint.x === originPoint.x && gridPoint.y < originPoint.y) return new (0, _geometryJs.Point)(gridPoint.x + 1, gridPoint.y + 1);
        else if (gridPoint.x > originPoint.x && gridPoint.y === originPoint.y) return new (0, _geometryJs.Point)(gridPoint.x - 1, gridPoint.y + 1);
        if (gridPoint.x === originPoint.x && gridPoint.y > originPoint.y) return new (0, _geometryJs.Point)(gridPoint.x - 1, gridPoint.y - 1);
        if (gridPoint.x < originPoint.x && gridPoint.y === originPoint.y) return new (0, _geometryJs.Point)(gridPoint.x + 1, gridPoint.y - 1);
        return gridPoint;
    }
}
class RayTracer {
    /** Actor tracing rays. @type {import('./tileMap.js').Actor} */ #actor;
    /** Start point of the ray. @type {Point} */ #rayStartPoint;
    /** @type {import('./tileMap.js').TileMap} */ #tileMap;
    /** @type {Map<string, Point} */ #reachedPoints;
    /** @type {Point}   */ #lastStartPoint;
    /** @type {Rectangle} */ #bounds;
    /** @type {Rectangle} */ #lastBounds;
    /** Create the ray tracer.
   * @param {import('./tileMap.js').TileMap} tileMap
   * @param {import('./tileMap.js').Actor} actor
   */ constructor(tileMap, actor){
        this.#tileMap = tileMap;
        this.#actor = actor;
    }
    /**
   * Find all the tiles that are reached from the actor.
   * @returns {Map<Point>} grid points of reached tiles.
   */ findReachedTiles() {
        this.#rayStartPoint = this.#tileMap.worldPointToGrid(this.#actor.position);
        this.#bounds = this.#tileMap.getVisibleGridPointRect();
        if (this.#lastStartPoint && this.#lastStartPoint.coincident(this.#rayStartPoint) && this.#bounds && this.#bounds.equals(this.#lastBounds)) return this.#reachedPoints;
        this.#reachedPoints = new Map();
        this.#reachedPoints.set(this.#rayStartPoint.toString(), this.#rayStartPoint);
        this.#getRayEnds().forEach((endPoint)=>{
            this.#traceRayToEnd(endPoint);
        });
        this.#lastStartPoint = this.#rayStartPoint;
        this.#lastBounds = this.#bounds;
        return this.#reachedPoints;
    }
    /**
   * Test if grid point in rays.
   * @param {Point} gridPoint
   * @returns {boolean}
   */ isGridPointInRays(gridPoint) {
        return this.#reachedPoints ? this.#reachedPoints.has(gridPoint.toString()) : false;
    }
    /**
   * Get the end point of the rays.
   * @returns {Point[]} array of the end grid points for each ray.
   */ #getRayEnds() {
        const rayEnds = [];
        for(let col = this.#bounds.x; col <= this.#bounds.x + this.#bounds.width; col++){
            rayEnds.push(new (0, _geometryJs.Point)(col, this.#bounds.y));
            rayEnds.push(new (0, _geometryJs.Point)(col, this.#bounds.y + this.#bounds.height));
        }
        for(let row = this.#bounds.y + 1; row <= this.#bounds.y + this.#bounds.height - 1; row++){
            rayEnds.push(new (0, _geometryJs.Point)(this.#bounds.x, row));
            rayEnds.push(new (0, _geometryJs.Point)(this.#bounds.x + this.#bounds.width, row));
        }
        return rayEnds;
    }
    /**
   * Trace the ray to its end. Note that calculations are done in cartesian coordinates
   * and so Y values need to be negated during calculations.
   * @param {Point} endPoint
   */ #traceRayToEnd(endPoint) {
        let dx;
        let dy;
        let steps;
        const angle = this.#rayStartPoint.getScreenAngleTo(endPoint);
        const compassDirection = _mathsJs.angleToEightPointCompass(angle);
        if (Math.abs(endPoint.x - this.#rayStartPoint.x) >= Math.abs(endPoint.y - this.#rayStartPoint.y)) {
            dx = Math.sign(endPoint.x - this.#rayStartPoint.x);
            steps = Math.abs(endPoint.x - this.#rayStartPoint.x);
            dy = steps < 1 ? 0 : (endPoint.y - this.#rayStartPoint.y) / steps;
        } else {
            dy = Math.sign(endPoint.y - this.#rayStartPoint.y);
            steps = Math.abs(endPoint.y - this.#rayStartPoint.y);
            dx = steps < 1 ? 0 : (endPoint.x - this.#rayStartPoint.x) / steps;
        }
        let x = this.#rayStartPoint.x;
        let y = this.#rayStartPoint.y;
        let firstPoint = true;
        while(steps >= 0){
            const gridPoint = new (0, _geometryJs.Point)(Math.round(x), Math.round(y));
            if (firstPoint || this.#tileMap.isSeeThrough(gridPoint, this.#actor)) this.#markReachedPoint(gridPoint, compassDirection);
            else break; // ray ends.
            firstPoint = false;
            x += dx;
            y += dy;
            steps--;
        }
    }
    /**
   * Mark the point as reached. Note that surrounding obstacle tiles need to be
   * shown as well otherwise wall will not appear.
   * @param {Point} point
   * @param {number} compassDir - eight point compass direction of ray
   */ #markReachedPoint(point, compassDir) {
        this.#reachedPoints.set(point.toString(), point);
        switch(compassDir){
            case _mathsJs.CompassEightPoint.N:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y - 1));
                break;
            case _mathsJs.CompassEightPoint.NE:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y));
                break;
            case _mathsJs.CompassEightPoint.E:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y + 1));
                break;
            case _mathsJs.CompassEightPoint.SE:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y + 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y + 1));
                break;
            case _mathsJs.CompassEightPoint.S:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y + 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y + 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x + 1, point.y + 1));
                break;
            case _mathsJs.CompassEightPoint.SW:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y + 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y + 1));
                break;
            case _mathsJs.CompassEightPoint.W:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y + 1));
                break;
            case _mathsJs.CompassEightPoint.NW:
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x - 1, point.y - 1));
                this.#markReachedIfNotSeeThrough(new (0, _geometryJs.Point)(point.x, point.y - 1));
                break;
        }
    }
    /**
   * Mark a tile as Reached if not see through
   * @param {Point} point
   */ #markReachedIfNotSeeThrough(point) {
        if (!this.#tileMap.isSeeThrough(point)) this.#reachedPoints.set(point.toString(), point);
    }
}

},{"../geometry.js":"oxWLG","../maths.js":"f2NB5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3GKX":[function(require,module,exports) {
/**
 * @file Manage the game turns. The turnManager is a state machine and implemented
 * as a singleton.
 *
 * @module utils/game/turnManager/turnManager
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathFinderJs = require("../tileMaps/pathFinder.js");
var _moversJs = require("../sprites/movers.js");
var _tileMapJs = require("../tileMaps/tileMap.js");
var _worldJs = require("./world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
var _uiJs = require("../dom/ui.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
var _fightingJs = require("../../dnd/fighting.js");
var _diceJs = require("../dice.js");
/**
 * Factor that is multiplied by the maxMovesPerTurn property of an actor to determine
 * if it will bother trying to reach the hero.
 */ const TOO_MANY_TURNS_TO_REACH = 2;
/**
 * Enumeration of supported events
 * @enum {number}
 */ const EventId = {
    CLICKED_FREE_GROUND: 0,
    CLICKED_ENTRANCE: 1,
    CLICKED_EXIT: 2
};
/**
 * Basic State class
 */ class State {
    constructor(){}
    /**
   * Transition to a new state
   * @returns {Promise} fulfills to null
   */ transitionTo(state) {
        this._onExit().then(()=>{
            currentState = state;
            return state._onEntry();
        });
    }
    /**
   * Perform actions on entering the state.
   * @returns {Promise} fulfills to null
   */ _onEntry() {
        return Promise.resolve();
    }
    /**
   * Handle event.
   * @param {number} eventId
   * @param  {import('../sprites/sprite.js').Sprite} sprite - the sprite initiating the event
   * @param {Object} detail - object will depend on the eventId
   * @returns {Promise} fulfills to null
   */ onEvent(eventIdUnused) {
        return Promise.resolve(null);
    }
    /**
   * Actions when the state exits
   * @returns {Promise} fulfills to null
   */ _onExit() {
        return Promise.resolve(null);
    }
}
/**
 * At start state
 */ class AtStart extends State {
    _onExit() {
        heroActor.sprite.position = (0, _worldJsDefault.default).getTileMap().getWorldPositionOfEntrance();
        return Promise.resolve(null);
    }
}
/**
 * State where the hero is in the map.
 */ class HeroInMapIdle extends State {
    constructor(){
        super();
    }
    /**
   * @override
   */ async _onEntry() {
        const tileMap = (0, _worldJsDefault.default).getTileMap();
        const routes = new (0, _pathFinderJs.RouteFinder)(tileMap, heroActor).getAllRoutesFrom(tileMap.worldPointToGrid(heroActor.sprite.position), heroActor.maxTilesPerMove);
        tileMap.setMovementRoutes(routes);
        tileMap.setCombatActors(tileMap.getParticipants(heroActor));
        return Promise.resolve(null);
    }
    /**
   * @override
   * @param {number} eventId
   * @param  {import('../sprites/sprite.js').Sprite} point - the point initiating the event
   * @param {Object} detail - object will depend on the eventId
   */ onEvent(eventId, point, detail) {
        switch(eventId){
            case EventId.CLICKED_FREE_GROUND:
                {
                    console.log(`DETAIL ${detail}`);
                    let promise;
                    if (detail?.filter === (0, _tileMapJs.ClickEventFilter).COMBAT_TILE) promise = this.#fight(point);
                    else promise = this.#move(point);
                    promise.then(()=>this.transitionTo(new ComputerInMap()));
                }
                break;
            case EventId.CLICKED_ENTRANCE:
                alert("Wow! Leaving so early. That bit of code is not ready yet.");
                break;
            case EventId.CLICKED_EXIT:
                alert("Trying to escape. That bit of code is not ready yet.");
                break;
        }
        return Promise.resolve(null);
    }
    /**
   * Move to point
   * @param {Point} point
   * @returns {Promise}
   */ #move(point) {
        const tileMap = (0, _worldJsDefault.default).getTileMap();
        const waypoints = tileMap.getWaypointsToWorldPoint(point);
        tileMap.setMovementRoutes(null);
        tileMap.setCombatActors(null);
        if (waypoints) {
            const modifier = new (0, _moversJs.PathFollower)({
                path: waypoints,
                speed: 100
            }, heroActor.sprite.modifier);
            return modifier.applyAsTransientToSprite(heroActor.sprite);
        } else return Promise.resolve();
    }
    /**
   * Fight point
   * @param {Point} point - position in world.
   * @returns {Promise}
   */ #fight(point) {
        /** @type {import('../tileMaps/tileMap.js').TileMap} */ const tileMap = (0, _worldJsDefault.default).getTileMap();
        const tile = tileMap.getTileAtWorldPoint(point);
        const targets = tile.getOccupants();
        for (const target of targets.values())_fightingJs.resolveAttackerDefender(heroActor, target);
        return Promise.resolve();
    }
}
class ComputerInMap extends State {
    constructor(){
        super();
    }
    async _onEntry() {
        await super._onEntry();
        const tileMap = (0, _worldJsDefault.default).getTileMap();
        const routeFinder = new (0, _pathFinderJs.RouteFinder)(tileMap);
        const participants = tileMap.getParticipants(heroActor);
        for (const actor of (0, _worldJsDefault.default).getActors().values())if (actor !== heroActor) {
            if (participants.includes(actor)) _fightingJs.resolveAttackerDefender(actor, heroActor);
            else await this.moveActorUsingRouteFinder(actor, tileMap, routeFinder);
        }
        this.transitionTo(new HeroInMapIdle());
        return Promise.resolve(null);
    }
    /**
   * Move actor to hero using the route finder
   * @param {Actor} actor
   * @param {TileMap} tileMap
   * @param {RouteFinder} routeFinder
   */ async moveActorUsingRouteFinder(actor, tileMap, routeFinder) {
        const heroGridPos = tileMap.worldPointToGrid(heroActor.position);
        const actorGridPos = tileMap.worldPointToGrid(actor.position);
        const orthoSeparation = Math.abs(heroGridPos.x - actorGridPos.x) + Math.abs(heroGridPos.y - actorGridPos.y);
        const maxSeparation = actor.maxTilesPerMove * TOO_MANY_TURNS_TO_REACH;
        if (orthoSeparation <= maxSeparation && tileMap.canHeroSeeGridPoint(actorGridPos)) {
            routeFinder.actor = actor;
            const waypoints = routeFinder.getDumbRouteNextTo(actorGridPos, heroGridPos, actor.maxTilesPerMove);
            if (waypoints.length > 0) {
                const modifier = new (0, _moversJs.PathFollower)({
                    path: waypoints,
                    speed: 200
                }, actor.sprite.modifier);
                await modifier.applyAsTransientToSprite(actor.sprite);
            }
        }
    }
}
/**
 * Trigger an event. This will then be passed to the current State to handle.
 * @param {number} eventId
 * @param  {import('../sprites/sprite.js').Sprite} sprite - the sprite initiating the event
 * @param {Object} detail - object will depend on the eventId
 */ function triggerEvent(eventId, sprite, detail) {
    currentState.onEvent(eventId, sprite, detail);
}
/**
 * Set the current hero sprite.
 * @returns {import('./actors.js').Actor}
 */ function getHeroActor() {
    return heroActor;
}
/**
 * Start
 * @param {import('./actors.js').Actor} actor - the hero actor
 */ function startWithHero(actor) {
    heroActor = actor;
    currentState.transitionTo(new HeroInMapIdle());
}
/**
 * @type {import('./actors.js').Actor}
 */ let heroActor;
/**
 * @type {State}
 */ let currentState = new AtStart();
/**
 * Single instance of the turn manager.
 */ const TURN_MANAGER = {
    EventId: EventId,
    getHeroActor: getHeroActor,
    startWithHero: startWithHero,
    triggerEvent: triggerEvent
};
exports.default = TURN_MANAGER;

},{"../tileMaps/pathFinder.js":"420yd","../sprites/movers.js":"g8ajD","../tileMaps/tileMap.js":"hddTD","./world.js":"7yYJp","../dom/ui.js":"itFhR","../../dnd/fighting.js":"4I3Gx","../dice.js":"9FfXB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8ajD":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Simple unbounded velocity mover
 */ parcelHelpers.export(exports, "VelocityMover", ()=>VelocityMover);
/**
 * Velocity aligner
 */ parcelHelpers.export(exports, "VelocityAligner", ()=>VelocityAligner);
/**
 * Bouncer mover
 */ parcelHelpers.export(exports, "Bouncer", ()=>Bouncer);
/**
 * Tracker mover.
 */ parcelHelpers.export(exports, "Tracker", ()=>Tracker);
/**
 * PathFollower. Provides a one-off movement.
 * Once it hits its target, it removes itself from the chain.
 */ parcelHelpers.export(exports, "PathFollower", ()=>PathFollower);
var _modifiersJs = require("./modifiers.js");
class VelocityMover extends (0, _modifiersJs.AbstractModifier) {
    /** @type {import('../geometry.js').Point} */ #topLeft;
    /** @type {import('../geometry.js').Point} */ #bottomRight;
    /**
   * @param {AbstractModifier} decoratedModifier
   */ constructor(decoratedModifier){
        super(decoratedModifier);
    }
    /**
   * Move sprite using its velocity
   * @param {import('./sprite.js').Sprite} sprite
   * @param {number} deltaSeconds - elapsed time
   * @returns {AbstractModifier}
   */ doUpdate(sprite, deltaSeconds) {
        const position = sprite.position;
        const velocity = sprite.velocity;
        position.x += velocity.x * deltaSeconds;
        position.y += velocity.y * deltaSeconds;
        sprite.position = position;
        sprite.velocity = velocity;
        return this;
    }
}
class VelocityAligner extends (0, _modifiersJs.AbstractModifier) {
    /** @type {number} */ #baseDirection;
    /**
   * Construct aligner. Rotations are worked out counter clockwise from the positive
   * x axis direction. However, sprites are normally drawn vertically as you look at them;
   * i.e they are pointing downwards or at -90 degrees from the horizontal axis. You can
   * set this using the baseDirection parameter.
   * @param {number} baseDirection - default alignment.
   * @param {AbstractModifier} decoratedModifier
   */ constructor(baseDirection = -Math.PI / 2, decoratedModifier){
        super(decoratedModifier);
        this.#baseDirection = baseDirection;
    }
    /**
   * Create a VelocityAligner. This is a convenience factory method that automatically
   * sets the base direction to -90 degrees which is how sprites are normally drawn; i.e. upright
   * instead of horizontally.
   * @param {AbstractModifier} decoratedModifier
   * @returns {VelocityAligner}
   */ static createUprightAligner(decoratedModifier) {
        return new VelocityAligner(-Math.PI / 2, decoratedModifier);
    }
    /**
   * Align sprite using its velocity.
   * @param {import('./sprite.js').Sprite} sprite
   * @param {number} deltaSeconds - elapsed time
   * @returns {AbstractModifier}
   */ doUpdate(sprite, deltaSecondsIgnored) {
        sprite.position.rotation = sprite.velocity.getDirection() - this.#baseDirection;
        return this;
    }
}
class Bouncer extends (0, _modifiersJs.AbstractModifier) {
    /** @type {import('../geometry.js').Point} */ #topLeft;
    /** @type {import('../geometry.js').Point} */ #bottomRight;
    /**
   * @param {import('../geometry.js').Rectangle} bounds
   * @param {AbstractModifier} decoratedModifier
   */ constructor(bounds, decoratedModifier){
        super(decoratedModifier);
        this.#topLeft = bounds.getTopLeft();
        this.#bottomRight = bounds.getBottomRight();
    }
    /**
   * Move sprite using its velocity and bouncing on screen.
   * @param {import('./sprite.js').Sprite} sprite
   * @param {number} deltaSeconds - elapsed time
   * @returns {AbstractModifier}
   */ doUpdate(sprite, deltaSeconds) {
        const position = sprite.position;
        const velocity = sprite.velocity;
        position.x += velocity.x * deltaSeconds;
        position.y += velocity.y * deltaSeconds;
        position.rotation += velocity.rotation * deltaSeconds;
        if (position.x < this.#topLeft.x || position.x > this.#bottomRight.x) velocity.x *= -1;
        if (position.y < this.#topLeft.y || position.y > this.#bottomRight.y) velocity.y *= -1;
        sprite.position = position;
        sprite.velocity = velocity;
        return this;
    }
}
class Tracker extends (0, _modifiersJs.AbstractModifier) {
    /** @type {import('./sprite.js').Sprite} */ #prey;
    /** @type {number} */ #maxSeparation;
    /** @type {number} */ #speed;
    /**
   *
   * @param {Object} options
   * @param {import('./sprite.js').Sprite} options.prey
   * @param {number} options.maxSeparation - allowable distance between hunter and prey
   * @param {number} options.speed - pixels / second
   * @param {AbstractModifier} decoratedModifier
   */ constructor(options, decoratedModifier){
        super(decoratedModifier);
        this.#prey = options.prey;
        this.#maxSeparation = options.maxSeparation;
        this.#speed = options.speed;
    }
    /**
   * Update the sprite to track the hunter.
   * @param {import('./sprite.js').Sprite} hunter
   * @param {*} deltaSeconds
   * @returns {AbstractModifier}
   */ doUpdate(hunter, deltaSeconds) {
        const preyPos = this.#prey.position;
        const hunterPos = hunter.position;
        if (!hunterPos.withinSquare(preyPos, this.#maxSeparation)) {
            const angle = hunterPos.getCartesianAngleTo(preyPos);
            hunter.velocity.x = this.#speed * Math.cos(angle);
            hunter.velocity.y = this.#speed * Math.sin(angle);
            const dx = hunter.velocity.x * deltaSeconds;
            const dy = hunter.velocity.y * deltaSeconds;
            hunter.position.x += this.getMinMove(dx, preyPos.x, hunterPos.x);
            hunter.position.y += this.getMinMove(dy, preyPos.y, hunterPos.y);
        }
        return this;
    }
    /**
   * Get the minimum movement to go from targetValue to currentValue.
   * @param {number} maxMovement - maximum movement. NB. In this context, max ignores sign.
   * @param {number} targetValue
   * @param {number} currentValue
   */ getMinMove(maxMovement, targetValue, currentValue) {
        const requiredMovement = targetValue - currentValue;
        if (Math.sign(maxMovement) < 0) return Math.max(maxMovement, requiredMovement);
        else return Math.min(maxMovement, requiredMovement);
    }
}
class PathFollower extends (0, _modifiersJs.AbstractModifier) {
    /** @type {Point[]} */ #path;
    /** @type {number} */ #index;
    /** @type {import('../geometry.js').Point} */ #targetPoint;
    /** @type {number} */ #speed;
    /**
   *
   * @param {Object} options
   * @param {Point[]} options.path
   * @param {number} options.speed - pixels / second
   * @param {AbstractModifier} decoratedModifier
   */ constructor(options, decoratedModifier){
        super(decoratedModifier);
        this.#path = options.path;
        this.#index = 0;
        this.#targetPoint = options.path[0];
        this.#speed = options.speed;
    }
    /**
   * Update the sprite to track the hunter.
   * @param {import('./sprite.js').Sprite} subject
   * @param {*} deltaSeconds
   * @returns {AbstractModifier}
   */ doUpdate(subject, deltaSeconds) {
        const subjectPos = subject.position;
        const angle = subjectPos.getCartesianAngleTo(this.#targetPoint);
        subject.velocity.x = this.#speed * Math.cos(angle);
        subject.velocity.y = this.#speed * Math.sin(angle);
        const dx = subject.velocity.x * deltaSeconds;
        const dy = subject.velocity.y * deltaSeconds;
        subjectPos.x += this.getMinMove(dx, this.#targetPoint.x, subjectPos.x);
        subjectPos.y += this.getMinMove(dy, this.#targetPoint.y, subjectPos.y);
        if (subjectPos.isCoincident(this.#targetPoint)) {
            if (++this.#index >= this.#path.length) return this.decoratedModifier; // Remove itself from chain
            else this.#targetPoint = this.#path[this.#index];
        }
        return this;
    }
    /**
   * Get the minimum movement to go from targetValue to currentValue.
   * @param {number} maxMovement - maximum movement. NB. In this context, max ignores sign.
   * @param {number} targetValue
   * @param {number} currentValue
   */ getMinMove(maxMovement, targetValue, currentValue) {
        const requiredMovement = targetValue - currentValue;
        if (Math.sign(maxMovement) < 0) return Math.max(maxMovement, requiredMovement);
        else return Math.min(maxMovement, requiredMovement);
    }
}

},{"./modifiers.js":"gLQTv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLQTv":[function(require,module,exports) {
/**
 * @file Modifiers for updates
 *
 * @module utils\sprites\modifiers
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
 */ /** Default timeout for transient modifiers. @type {number} */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Base for all modifiers
 */ parcelHelpers.export(exports, "AbstractModifier", ()=>AbstractModifier);
const DEFAULT_TIMEOUT_SECS = 10;
class AbstractModifier {
    /** @type {AbstractModifier} */ decoratedModifier;
    /** The resolve function for transient modifiers @type {function(*)} */ #resolveFunc;
    /** Total active time in seconds */ #activeSeconds;
    /** Timeout duration */ #timeoutSeconds;
    /**
   *
   * @param {AbstractModifier} [decoratedModifier]
   */ constructor(decoratedModifier){
        this.#activeSeconds = 0;
        this.#timeoutSeconds = 0;
        this.decoratedModifier = decoratedModifier;
    }
    /**
   * Apply the modifier as transient to a sprite.
   * @param {AbstractModifier} modifier
   * @param {Sprite} sprite
   * @param {number} [timeoutSeconds =
   * @returns {Promise} fulfils to null on completion;
   */ applyAsTransientToSprite(sprite, timeoutSeconds = DEFAULT_TIMEOUT_SECS) {
        this.#timeoutSeconds = timeoutSeconds;
        return new Promise((resolve)=>{
            this.#resolveFunc = resolve;
            sprite.modifier = this;
        });
    }
    /**
   * Apply the modifier as continuous to a sprite.
   * @param {Sprite} sprite
   */ applyAsContinuousToSprite(sprite) {
        sprite.modifier = this;
    }
    /** Do the update modification. If a decoratedModifier has been set, this is then
   * called. If after calling update, the modifier is removed, it is removed from
   * the owning decoratedModifier. Its children are retained.
   * @param {Sprite} sprite
   * @param {number} deltaSeconds - elapsed time since last update.
   * @returns {AbstractModifier} - the modifier required for the next update. This
   * normally returns itself. If null is return, this indicates that the modifier
   * has completed its action and can be removed from the chain of decorated
   * modifiers. This method handles removal of its own decoratedModifier, but removal
   * of the root, if appropriate, is the responsibility of the Sprite.
   */ update(sprite, deltaSeconds) {
        if (this.#resolveFunc) this.#activeSeconds += deltaSeconds;
        if (this.decoratedModifier) this.decoratedModifier = this.decoratedModifier?.update(sprite, deltaSeconds);
        const nextModifier = this.doUpdate(sprite, deltaSeconds);
        if (!nextModifier || this.#activeSeconds > this.#timeoutSeconds) {
            this.#resolveFunc?.(null);
            return null;
        }
        return nextModifier;
    }
    /** Do the update modification for this modifier.
   * @param {Sprite} sprite
   * @param {number} deltaSeconds - elapsed time since last update.
   * @returns {AbstractModifier} - the modifier for the next update.
   */ doUpdate(spriteUnused, deltaSecondsUnused) {
        console.error("doUpdate should be overridden.");
        return this;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itFhR":[function(require,module,exports) {
/**
 * @file Dialogs for use in the game
 *
 * @module utils/dom/ui
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DialogResponse", ()=>DialogResponse);
var _screenJs = require("../game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
const DialogResponse = {
    OK: 0,
    CANCEL: 1,
    YES: 2,
    NO: 3
};
/**
 * Get a message element. This returns a div which contains the message text.
 * @param {string} message
 */ function createMessageElement(message) {
    const element = document.createElement("div");
    element.innerText = message;
    element.classList.add([
        "scrollable"
    ]);
    return element;
}
/** Create a message that is removed on any click.
 * @param {string} message
 * @returns {Promise} fulfils to null
 */ function showMessage(message) {
    return new Promise((resolve)=>{
        const container = createMessageElement(message);
        (0, _screenJsDefault.default).displayOnGlass(container, ()=>{
            (0, _screenJsDefault.default).wipeGlass();
            resolve(null);
        });
    });
}
/** Create an okDialog.
 * @param {string} message
 * @param {string} [okButtonLabel = 'OK']
 * @returns {Promise} fulfils to DialogResponse.OK
 */ function showOkDialog(message, okButtonLabel = "OK") {
    return new Promise((resolve)=>{
        const container = document.createElement("div");
        container.appendChild(createMessageElement(message));
        (0, _screenJsDefault.default).displayOnGlass(createMessageElement(message));
        const buttonEl = document.createElement("button");
        buttonEl.appendChild(document.createTextNode(okButtonLabel));
        buttonEl.onclick = ()=>{
            (0, _screenJsDefault.default).wipeGlass();
            resolve(DialogResponse.OK);
        };
        container.appendChild(buttonEl);
        (0, _screenJsDefault.default).displayOnGlass(container);
    });
}
/**
 * The UI singleton.
 */ const UI = {
    showMessage: showMessage,
    showOkDialog: showOkDialog
};
exports.default = UI;

},{"../game/screen.js":"kFko1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4I3Gx":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Resolve a fight.
 * @param {Actor} attacker
 * @param {Actor} defender
 */ parcelHelpers.export(exports, "resolveAttackerDefender", ()=>resolveAttackerDefender);
var _worldJs = require("../utils/game/world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
var _transientJs = require("../utils/effects/transient.js");
var _geometryJs = require("../utils/geometry.js");
var _imageManagerJs = require("../utils/sprites/imageManager.js");
var _imageManagerJsDefault = parcelHelpers.interopDefault(_imageManagerJs);
var _diceJs = require("../utils/dice.js");
function resolveAttackerDefender(attacker, defender) {
    if ((0, _diceJs.rollDice)(20) < 10) {
        (0, _transientJs.addFadingText)("Missed", {
            lifetimeSecs: 2,
            position: defender.position,
            velocity: new (0, _geometryJs.Velocity)(0, -100, 0)
        });
        return;
    } else (0, _transientJs.addFadingImage)((0, _imageManagerJsDefault.default).getSpriteBitmap(0, "blood-splat.png"), {
        lifetimeSecs: 1,
        position: defender.position,
        velocity: new (0, _geometryJs.Velocity)(0, 0, 0)
    });
    let defenderHP = defender.traits.get("HP");
    defenderHP = defenderHP > 1 ? defenderHP - 1 : 0;
    if (defenderHP === 0) {
        (0, _worldJsDefault.default).removeActor(defender);
        (0, _transientJs.addFadingImage)((0, _imageManagerJsDefault.default).getSpriteBitmap(0, "RIP.png"), {
            lifetimeSecs: 2,
            position: defender.position,
            velocity: new (0, _geometryJs.Velocity)(0, 0, 0)
        });
    }
    defender.traits.set("HP", defenderHP);
}

},{"../utils/game/world.js":"7yYJp","../utils/effects/transient.js":"05fsd","../utils/geometry.js":"oxWLG","../utils/sprites/imageManager.js":"3hqS8","../utils/dice.js":"9FfXB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05fsd":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a transient sprite
 * @param {SpriteCanvasRenderer} renderer
 * @param {Object} options
 * @param {Point} position
 * @param {Velocity} velocity
 * @param {number} lifetimeSecs
 */ parcelHelpers.export(exports, "createFadingSprite", ()=>createFadingSprite);
/**
 * Create a transient image
 * @param {import('../sprites/imageManager.js').SpriteBitmap} imageName
 * @param {Object} options
 * @param {Point} position
 * @param {Velocity} velocity
 * @param {number} lifetimeSecs
 */ parcelHelpers.export(exports, "addFadingImage", ()=>addFadingImage);
/**
 * Create transient text
 * @param {string} text
 * @param {Object} options
 * @param {Point} position
 * @param {Velocity} velocity
 * @param {number} lifetimeSecs
 */ parcelHelpers.export(exports, "addFadingText", ()=>addFadingText);
var _spriteJs = require("../sprites/sprite.js");
var _spriteRenderersJs = require("../sprites/spriteRenderers.js");
var _screenJs = require("../game/screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _fadersJs = require("../sprites/faders.js");
var _worldJs = require("../game/world.js");
var _worldJsDefault = parcelHelpers.interopDefault(_worldJs);
var _moversJs = require("../sprites/movers.js");
function createFadingSprite(renderer, options) {
    const sprite = new (0, _spriteJs.Sprite)({
        renderer: renderer
    });
    sprite.position = options.position;
    sprite.velocity = options.velocity;
    (0, _worldJsDefault.default).addPassiveSprite(sprite);
    new (0, _fadersJs.TimeFader)(options.lifetimeSecs, new (0, _moversJs.VelocityMover)()).applyAsTransientToSprite(sprite, 20).then(()=>(0, _worldJsDefault.default).removePassiveSprite(sprite));
}
function addFadingImage(image, options) {
    createFadingSprite(new (0, _spriteRenderersJs.ImageSpriteCanvasRenderer)((0, _screenJsDefault.default).getContext2D(), image), options);
}
function addFadingText(text, options) {
    createFadingSprite(new (0, _spriteRenderersJs.TextSpriteCanvasRenderer)((0, _screenJsDefault.default).getContext2D(), text), options);
}

},{"../sprites/sprite.js":"gSPJO","../sprites/spriteRenderers.js":"lGWVU","../game/screen.js":"kFko1","../sprites/faders.js":"5JtBV","../game/world.js":"7yYJp","../sprites/movers.js":"g8ajD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JtBV":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Sprite fader
 */ parcelHelpers.export(exports, "TimeFader", ()=>TimeFader);
var _modifiersJs = require("./modifiers.js");
class TimeFader extends (0, _modifiersJs.AbstractModifier) {
    #deltaOpacityPerSec;
    /**
   * Construct aligner. Rotations are worked out counter clockwise from the positive
   * x axis direction. However, sprites are normally drawn vertically as you look at them;
   * i.e they are pointing downwards or at -90 degrees from the horizontal axis. You can
   * set this using the baseDirection parameter.
   * @param {number} lifetimeSecs - default alignment.
   * @param {AbstractModifier} decoratedModifier
   */ constructor(lifetimeSecs, decoratedModifier){
        super(decoratedModifier);
        this.#deltaOpacityPerSec = 1 / Math.max(lifetimeSecs, 0.5);
    }
    /**
   * Adjust sprite opacity depending on time. When the time is complete, this
   * modify returns null to indicate completion.
   * @param {import('./sprite.js').Sprite} sprite
   * @param {number} deltaSeconds - elapsed time
   * @returns {AbstractModifier}
   */ doUpdate(sprite, deltaSeconds) {
        sprite.opacity = Math.max(0, sprite.opacity - deltaSeconds * this.#deltaOpacityPerSec);
        return sprite.opacity > 0 ? this : null;
    }
}

},{"./modifiers.js":"gLQTv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FfXB":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Roll a dice
 * @param {number} [sides = 6] - number of sides on the dice
 * @returns {number}
 */ parcelHelpers.export(exports, "rollDice", ()=>rollDice);
var _mathsJs = require("./maths.js");
function rollDice(sides = 6) {
    return _mathsJs.getRandomIntInclusive(1, sides);
}

},{"./maths.js":"f2NB5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HNVy":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TILE_MAP_KEYS", ()=>TILE_MAP_KEYS);
var _tileMapJs = require("../utils/tileMaps/tileMap.js");
var _turnManagerJs = require("../utils/game/turnManager.js");
var _turnManagerJsDefault = parcelHelpers.interopDefault(_turnManagerJs);
/**
 * @typedef {import('./tileMap.js').TileDefinition} TileDefinition
 */ /**
 * @param {string} imageName
 * @returns {TileDefinition}
 */ function createGroundDefn(imageName) {
    return {
        role: (0, _tileMapJs.TileRole).GROUND,
        onClick: (target, point, detail)=>(0, _turnManagerJsDefault.default).triggerEvent((0, _turnManagerJsDefault.default).EventId.CLICKED_FREE_GROUND, point, detail),
        image: imageName
    };
}
/**
 * @param {string} imageName
 * @returns {TileDefinition}
 */ function createEntranceDefn(imageName) {
    return {
        role: (0, _tileMapJs.TileRole).ENTRANCE,
        onClick: (target, point, detail)=>(0, _turnManagerJsDefault.default).triggerEvent((0, _turnManagerJsDefault.default).EventId.CLICKED_ENTRANCE, point, detail),
        image: imageName
    };
}
/**
 * @param {string} imageName
 * @returns {TileDefinition}
 */ function createExitDefn(imageName) {
    return {
        role: (0, _tileMapJs.TileRole).EXIT,
        onClick: (target, point, detail)=>(0, _turnManagerJsDefault.default).triggerEvent((0, _turnManagerJsDefault.default).EventId.CLICKED_EXIT, point, detail),
        image: imageName
    };
}
const TILE_MAP_KEYS = new Map([
    [
        "x",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "block.png"
        }
    ],
    // wall parts
    [
        "#-TL",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-TL.png"
        }
    ],
    [
        "#-TLI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-TLI.png"
        }
    ],
    [
        "#-T",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-T.png"
        }
    ],
    [
        "#-TR",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-TR.png"
        }
    ],
    [
        "#-TRI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-TRI.png"
        }
    ],
    [
        "#-R",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-R.png"
        }
    ],
    [
        "#-BR",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-BR.png"
        }
    ],
    [
        "#-BRI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-BRI.png"
        }
    ],
    [
        "#-B",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-B.png"
        }
    ],
    [
        "#-BL",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-BL.png"
        }
    ],
    [
        "#-BLI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-BLI.png"
        }
    ],
    [
        "#-L",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-L.png"
        }
    ],
    [
        "#-XI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-XI.png"
        }
    ],
    [
        "#-VI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-VI.png"
        }
    ],
    [
        "#-HI",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-HI.png"
        }
    ],
    [
        "#-TTEE",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-TTEE.png"
        }
    ],
    [
        "#-RTEE",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-RTEE.png"
        }
    ],
    [
        "#-BTEE",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-BTEE.png"
        }
    ],
    [
        "#-LTEE",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "wall-LTEE.png"
        }
    ],
    [
        "#",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "block.png"
        }
    ],
    // doors
    [
        "=-T",
        createExitDefn("door-T.png")
    ],
    [
        "=-R",
        createExitDefn("door-R.png")
    ],
    [
        "=-B",
        createExitDefn("door-B.png")
    ],
    [
        "=-L",
        createExitDefn("door-L")
    ],
    [
        "--T",
        createEntranceDefn("door-T.png")
    ],
    [
        "--R",
        createEntranceDefn("door-R.png")
    ],
    [
        "--B",
        createEntranceDefn("door-B.png")
    ],
    [
        "--L",
        createEntranceDefn("door-L.png")
    ],
    [
        "=",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "block.png"
        }
    ],
    [
        "-",
        {
            role: (0, _tileMapJs.TileRole).OBSTACLE,
            image: "block.png"
        }
    ],
    // ground
    [
        ".",
        createGroundDefn("floor.png")
    ],
    [
        ".-SBW",
        createGroundDefn("floor-SBW.png")
    ],
    [
        ".-SBE",
        createGroundDefn("floor-SBE.png")
    ],
    [
        ",-SBE",
        createGroundDefn("floor2-SBE.png")
    ],
    [
        ",-SBW",
        createGroundDefn("floor2-SBW.png")
    ],
    [
        ",",
        createGroundDefn("floor2.png")
    ]
]);

},{"../utils/tileMaps/tileMap.js":"hddTD","../utils/game/turnManager.js":"e3GKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7NvN":[function(require,module,exports) {
/**
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
 */ /**
 * Abstract traits. This is basically a Map but with the key difference that
 * only keys set during the configuration are allowed. If no keys are provided,
 * the traits are regarded as freeform and any keys are allowed.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractTraits", ()=>AbstractTraits);
/**
 * DnD character traits
 */ parcelHelpers.export(exports, "CharacterTraits", ()=>CharacterTraits);
class AbstractTraits {
    /** Characteristics @type {Map<string, *>} */ #traits;
    /** @type {boolean} */ #freeform;
    /**
   * Initialise the traits.
   * @param {Map<string, *>} initialValues
   */ constructor(initialValues){
        if (initialValues) {
            this.#traits = initialValues;
            this.#freeform = false;
        } else {
            this.#traits = new Map();
            this.#freeform = true;
        }
    }
    /**
   * @param {string} key
   * @param {*} value
   * @throws {Error} thrown if key invalid.
   */ set(key, value) {
        if (this.#freeform || this.#traits.has(key)) this.#traits.set(key, value);
        else throw new Error(`Attempt to set invalid key '${key}'`);
    }
    /**
   * Get the trait value.
   * @param {string} key
   * @returns {*}
   */ get(key) {
        return this.#traits.get(key);
    }
    /**
   * Populate the traits from a string definition. The definition comprises a
   * comma separated list of characteristics with each characteristic comprising
   * a keyword followed by a space or equals sign and then its value.
   * @param {string} definition
   * @returns {AbstractTraits} returns this to allow chaining.
   * @throws {Error} if definition invalid.
   */ setFromString(definition) {
        definition.split(",").forEach((item)=>{
            const match = item.match(/^\s*(\w+)\s*[=: ]\s*(.+?)\s*$/);
            if (match) this.#setAutoMaxValue(match[1], match[2]);
            else throw new Error(`Invalid property definition'${item}'`);
        });
        return this;
    }
    /**
   * Set the trait for key to value. If value is a fraction, then the value for
   * the key is set to the numerator and a new key key_MAX is created, set to the
   * denominator.
   * @param {string} key
   * @param {string} value
   */ #setAutoMaxValue(key, value) {
        const minMaxMatch = value.match(/(\d+) *[/] *(\d+) */);
        if (minMaxMatch) {
            this.#traits.set(key, minMaxMatch[1]);
            this.#traits.set(`${key}_MAX`, minMaxMatch[2]);
        } else this.#traits.set(key, value);
    }
}
class CharacterTraits extends AbstractTraits {
    constructor(){
        super(new Map([
            [
                "NAME",
                "mystery"
            ],
            [
                "HP",
                10
            ],
            [
                "HP_MAX",
                10
            ],
            [
                "STR",
                10
            ],
            [
                "STR_MAX",
                10
            ]
        ]));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wK4G":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractScene", ()=>AbstractScene);
var _mathsJs = require("../maths.js");
class AbstractScene {
    /** @type {number} */ #globalOpacity;
    /** @type {number} */ #deltaOpacityPerSec;
    /** @type {number} */ #fadeInSecs;
    /** @type {number} */ #fadeOutSecs;
    /**
   * Create the scene.
   * @param {number} [fadeInSecs = 2]
   * @param {number} [fadeOutSecs = 2]
   */ constructor(fadeInSecs = 2, fadeOutSecs = 2){
        if (fadeInSecs > 0) {
            this.#globalOpacity = 0;
            this.#deltaOpacityPerSec = 1 / fadeInSecs;
        } else this.#deltaOpacityPerSec = 1;
        this.#fadeInSecs = fadeInSecs;
        this.#fadeOutSecs = fadeOutSecs;
    }
    /**
   * Get the global opacity.
   * @returns {number}
   */ getOpacity() {
        return this.#globalOpacity;
    }
    /**
   * Called at start. Game waits for preload before calling initialise.
   * @function Scene#load
   * @returns {Promise} fulfills to null
   */ load() {
        return this.doLoad();
    }
    /**
   * Called after load. Game waits for initialise before starting the loop.
   * @function Scene#initialise
   * @returns {Promise} fulfills to null
   */ initialise() {
        return this.doInitialise();
    }
    /**
   * Called in animation phase
   * @function Scene#update
   * @param {number} deltaSeconds
   */ update(deltaSeconds) {
        this.doUpdate(deltaSeconds);
        if (this.#deltaOpacityPerSec !== 0) this.#globalOpacity = _mathsJs.clip(this.#globalOpacity + deltaSeconds * this.#deltaOpacityPerSec, 0, 1);
    }
    /**
   * Called when scene swapped out
   * @function Scene#unload
   * @returns {Promise} fulfills to null
   */ unload() {
        return this.doUnload();
    }
    /**
   * Called at start. Game waits for preload before calling initialise.
   * This should be overridden.
   * @returns {Promise} fulfills to null
   */ doLoad() {
        return Promise.resolve();
    }
    /**
   * Called after load. Game waits for initialise before starting the loop.
   * This should be overridden
   * @returns {Promise} fulfills to null
   */ doInitialise() {
        return Promise.resolve();
    }
    /**
   * Called in animation phase
   * This should be overridden
   * @param {number} deltaSeconds
   */ doUpdate(deltaSecondsUnused) {
        return Promise.resolve();
    }
    /**
   * Called when scene swapped out
   * This should be overridden
   * @returns {Promise} fulfills to null
   */ doUnload() {
        return Promise.resolve();
    }
}

},{"../maths.js":"f2NB5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwQEf":[function(require,module,exports) {
/**
 * @file Scene manager
 *
 * @module utils/game/sceneManager
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sceneDefinitionParserJs = require("../../scriptReaders/sceneDefinitionParser.js");
let sceneDefinitions;
/**
 * Configure the scenes from the script.
 * @param {import('../../scriptReaders/index.js').SceneDefinition} sceneDefns
 */ function setSceneDefinitions(sceneDefns) {
    sceneDefinitions = sceneDefns;
}
/**
 *
 * @param {number} index
 * @returns {import('./scene.js').Scene} scene constructed from requested scene definition.
 */ function getScene(index) {
    return (0, _sceneDefinitionParserJs.parseSceneDefinition)(sceneDefinitions[index]);
}
/**
 * SCENE_MANAGER Singleton.
 */ const SCENE_MANAGER = {
    setSceneDefinitions: setSceneDefinitions,
    getScene: getScene
};
exports.default = SCENE_MANAGER;

},{"../../scriptReaders/sceneDefinitionParser.js":"21sHS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79pEt":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CameraTracking", ()=>CameraTracking);
/**
 * Camera dolly class
 */ parcelHelpers.export(exports, "CameraDolly", ()=>CameraDolly);
var _screenJs = require("./screen.js");
var _screenJsDefault = parcelHelpers.interopDefault(_screenJs);
var _spriteJs = require("../sprites/sprite.js");
var _moversJs = require("../sprites/movers.js");
var _modifiersJs = require("../sprites/modifiers.js");
const CameraTracking = {
    OFF: 0,
    HERO: 1,
    VELOCITY: 2
};
class CameraDolly {
    /** @type {import('../sprites/sprite.js').Sprite} */ #sprite;
    /** @type {AbstractModifier} */ #heroTracker;
    /** @type {AbstractModifier} */ #velocityTracker;
    /** @type {number} */ #trackingMethod;
    /**
   * Create a camera dolly. This is a sprite that is designed to track a target.
   * @param {Sprite} target
   * @param {number} speed
   * @param {number} proportionSeparated - max space between camera and target as proportion of minimum screen dimension.
   */ constructor(target, speed, proportionSeparated = 0){
        const canvasDims = (0, _screenJsDefault.default).getCanvasDimensions();
        const separation = proportionSeparated * Math.min(canvasDims.width, canvasDims.height);
        this.#sprite = new (0, _spriteJs.Sprite)();
        this.#heroTracker = new (0, _moversJs.Tracker)({
            prey: target,
            speed: speed,
            maxSeparation: separation
        });
        this.#velocityTracker = new (0, _moversJs.VelocityMover)();
        this.#heroTracker.applyAsContinuousToSprite(this.#sprite);
    }
    /**
   * Update the camera position.
   * @param {number} deltaSeconds - elapsed time since last update.
   */ update(deltaSeconds) {
        if (this.#trackingMethod !== CameraTracking.OFF) {
            this.#sprite.update(deltaSeconds);
            (0, _screenJsDefault.default).centreCanvasOn(this.#sprite.position);
        }
    }
    /**
   * Set the velocity to dX, dY. This will automatically set tracking to velocity.
   * @param {number} dX
   * @param {number} dY
   */ setVelocity(vX, vY) {
        this.setTrackingMethod(CameraTracking.VELOCITY);
        this.#sprite.velocity.x = vX;
        this.#sprite.velocity.y = vY;
    }
    /**
   * Set the trackingMethod
   * @param {number} method - CameraTracking enum
   */ setTrackingMethod(method) {
        if (method === this.#trackingMethod) return;
        this.#trackingMethod = method;
        switch(method){
            case CameraTracking.HERO:
                this.#heroTracker.applyAsContinuousToSprite(this.#sprite);
                break;
            case CameraTracking.VELOCITY:
                this.#velocityTracker.applyAsContinuousToSprite(this.#sprite);
                break;
            case CameraTracking.OFF:
                console.debug(`Camera tracking off.`);
                break;
            default:
                console.error(`Attempt to set invalid tracking method of ${method} ignored.`);
        }
    }
}

},{"./screen.js":"kFko1","../sprites/sprite.js":"gSPJO","../sprites/movers.js":"g8ajD","../sprites/modifiers.js":"gLQTv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hZZq":[function(require,module,exports) {
/**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationLocation", ()=>NavigationLocation);
/** Encapsulation of navigation buttons. */ parcelHelpers.export(exports, "NavigationButtons", ()=>NavigationButtons);
var _hudJs = require("./hud.js");
var _hudJsDefault = parcelHelpers.interopDefault(_hudJs);
var _animationJs = require("../sprites/animation.js");
var _indexerJs = require("../arrays/indexer.js");
var _cameraJs = require("./camera.js");
/**
 * @type {number}
 */ const SCROLL_TILES_PER_SEC = 3;
const NavigationLocation = {
    TR: 0,
    BR: 1,
    BL: 2,
    TL: 3
};
class NavigationButtons {
    /** @type {CameraDolly} */ #cameraDolly;
    /** @type {Actor} */ #trackingButton;
    /** @type {import('../sprites/imageManager.js').SpriteBitmap} */ #trackingButtonImage;
    /**
   *
   * @param {CameraDolly} cameraDolly
   * @param {number} gridSize
   * @param {NavigationLocation} location
   */ constructor(cameraDolly, gridSize, location){
        this.#cameraDolly = cameraDolly;
        this.#createButtonSet(gridSize, location);
    }
    /**
   * Create the buttons.
   * @param {number} gridSize
   * @param {NavigationLocation} location
   */ #createButtonSet(gridSize, location) {
        let centreX;
        let centreY;
        switch(location){
            case NavigationLocation.TL:
                centreX = 2 * gridSize;
                centreY = 2 * gridSize;
                break;
            case NavigationLocation.TR:
                centreX = -2 * gridSize;
                centreY = 2 * gridSize;
                break;
            case NavigationLocation.BR:
                centreX = -2 * gridSize;
                centreY = -2 * gridSize;
                break;
            case NavigationLocation.BL:
                centreX = 2 * gridSize;
                centreY = -2 * gridSize;
                break;
        }
        this.#createCentreButton(centreX, centreY);
        this.#createArrowButtons(centreX, centreY, gridSize);
    }
    /** Create the centre button.
   * @param {number} centreX
   * @param {number} centreY
   */ #createCentreButton(centreX, centreY) {
        this.#trackingButtonImage = new (0, _animationJs.AnimatedImage)(0, {
            prefix: "hud-auto-centre-",
            startIndex: 0,
            padding: 3,
            suffix: ".png"
        }, {
            framePeriodMs: 1,
            loopMethod: (0, _indexerJs.LoopMethod).STOP
        });
        this.#trackingButton = (0, _hudJsDefault.default).addButton(this.#trackingButtonImage, ()=>{
            this.#setTrackingState(true);
        }, ()=>{
            this.#setTrackingState(false);
        });
        this.#trackingButton.position.x = centreX;
        this.#trackingButton.position.y = centreY;
        this.#trackingButton.actionClick(null); // defaulting to selected.
    }
    /**
   * Set the tracking state.
   * @param {boolean} on
   */ #setTrackingState(on) {
        if (on) {
            this.#trackingButtonImage.setCurrentIndex(1);
            this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).HERO);
        } else {
            this.#trackingButtonImage.setCurrentIndex(0);
            this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).OFF);
        }
    }
    /**
   * Create the arrow buttons
   * @param {number} centreX
   * @param {number} centreY
   * @param {number} gridSize
   */ #createArrowButtons(centreX, centreY, gridSize) {
        const scrollSpeed = SCROLL_TILES_PER_SEC * gridSize;
        this.#createMomentaryButton("hud-arrow-up-", centreX, centreY - gridSize, ()=>{
            this.#setTrackingState(false);
            this.#cameraDolly.setVelocity(0, -scrollSpeed);
        }, ()=>this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).OFF));
        this.#createMomentaryButton("hud-arrow-right-", centreX + gridSize, centreY, ()=>{
            this.#setTrackingState(false);
            this.#cameraDolly.setVelocity(scrollSpeed, 0);
        }, ()=>this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).OFF));
        this.#createMomentaryButton("hud-arrow-down-", centreX, centreY + gridSize, ()=>{
            this.#setTrackingState(false);
            this.#cameraDolly.setVelocity(0, scrollSpeed);
        }, ()=>this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).OFF));
        this.#createMomentaryButton("hud-arrow-left-", centreX - gridSize, centreY, ()=>{
            this.#setTrackingState(false);
            this.#cameraDolly.setVelocity(-scrollSpeed, 0);
        }, ()=>this.#cameraDolly.setTrackingMethod((0, _cameraJs.CameraTracking).OFF));
    }
    /**
   * Create a momentary button.
   * @param {string} imageNamePrefix - images are assumed to be imageNamePrefixNNN.png
   * @param {number} x - x position
   * @param {number} y - y position
   * @param {function} callbackDown
   * @param {function} callbackUp
   */ #createMomentaryButton(imageNamePrefix, x, y, callbackDown, callbackUp) {
        const animatedImage = new (0, _animationJs.AnimatedImage)(0, {
            prefix: imageNamePrefix,
            startIndex: 0,
            padding: 3,
            suffix: ".png"
        }, {
            framePeriodMs: 1,
            loopMethod: (0, _indexerJs.LoopMethod).STOP
        });
        let button = (0, _hudJsDefault.default).addMomentaryButton(animatedImage, callbackDown, callbackUp);
        button.position.x = x;
        button.position.y = y;
        animatedImage.setCurrentIndex(0);
    }
}

},{"./hud.js":"2372R","../sprites/animation.js":"S9kq1","../arrays/indexer.js":"cvgPD","./camera.js":"79pEt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rcPq":[function(require,module,exports) {
/**
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
 */ /**
 * Custom event names
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CUSTOM_POINTER_DOWN_EVENT_NAME", ()=>CUSTOM_POINTER_DOWN_EVENT_NAME);
parcelHelpers.export(exports, "CUSTOM_POINTER_UP_EVENT_NAME", ()=>CUSTOM_POINTER_UP_EVENT_NAME);
parcelHelpers.export(exports, "CUSTOM_CLICK_EVENT_NAME", ()=>CUSTOM_CLICK_EVENT_NAME);
/**
 * Add custom listeners which allows an object to listen to touch and mouse events
 * in a consistent manner.
 * the element or clicks. Custom events are sent to differentiate.
 * @param {*} element
 */ parcelHelpers.export(exports, "addPointerListeners", ()=>addPointerListeners);
const CUSTOM_POINTER_DOWN_EVENT_NAME = "custom-pointer-down-event";
const CUSTOM_POINTER_UP_EVENT_NAME = "custom-pointer-up-event";
const CUSTOM_CLICK_EVENT_NAME = "custom-click-event";
/**
 * @typedef {Object} CustomEventDetail
 * @property {number} x
 * @property {number} y
 * @property {number} dx
 * @property {number} dy
 */ /**
 * Dispatch an event. Detail is dispatched in the event detail.
 * @param {Element} element
 * @param {string} eventName
 * @param {Object} detail
 */ function dispatchEvent(element, eventName, detail) {
    const event = new CustomEvent(eventName, {
        detail: detail
    });
    element.dispatchEvent(event);
}
/**
 * Gets offsetX and offsetY equivalent to a MouseEvent
 * @param {TouchEvent} event
 * @returns {Object}
 */ function getOffsetFromTouch(event) {
    const rect = event.target.getBoundingClientRect();
    return {
        x: event.touches[0].pageX - rect.left,
        y: event.touches[0].pageY - rect.top
    };
}
function addPointerListeners(element) {
    element.addEventListener("mousedown", (event)=>dispatchEvent(element, CUSTOM_POINTER_DOWN_EVENT_NAME, {
            x: event.offsetX,
            y: event.offsetY
        }), {
        passive: true
    });
    element.addEventListener("mouseup", (event)=>dispatchEvent(element, CUSTOM_POINTER_UP_EVENT_NAME, {
            x: event.offsetX,
            y: event.offsetY
        }), {
        passive: true
    });
    element.addEventListener("touchstart", (event)=>{
        if (event.changedTouches.length === 1) {
            const offset = getOffsetFromTouch(event);
            dispatchEvent(element, CUSTOM_POINTER_DOWN_EVENT_NAME, {
                x: offset.x,
                y: offset.y
            });
        }
    }, {
        passive: true
    });
    element.addEventListener("touchend", (event)=>{
        if (event.changedTouches.length === 1) dispatchEvent(element, CUSTOM_POINTER_UP_EVENT_NAME, null);
    }, {
        passive: true
    });
    element.addEventListener("click", (event)=>{
        dispatchEvent(element, CUSTOM_CLICK_EVENT_NAME, {
            x: event.offsetX,
            y: event.offsetY
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aJ0Tr","fFaKF"], "fFaKF", "parcelRequire9367")

//# sourceMappingURL=index.0fbc91cd.js.map
