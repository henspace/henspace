/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-fd9479e2'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "text2lesson"
  });
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/styles/candy.css",
    "revision": "4c045d66476e490bfea8d61f801b5e33"
  }, {
    "url": "assets/styles/cards.css",
    "revision": "202590e432996df541bd306bf3e55f8a"
  }, {
    "url": "assets/styles/lessons.css",
    "revision": "7b8c7a61c8a33770facfeb63da27767f"
  }, {
    "url": "assets/styles/style.css",
    "revision": "43405a9b0c889a1aed92d5af344228bd"
  }, {
    "url": "assets/styles/utils-controls.css",
    "revision": "89066e3f2fedf8b08cac8c84d43ff638"
  }, {
    "url": "assets/styles/utils-dialogs.css",
    "revision": "08902c2e09b226b706b0b514361e0cba"
  }, {
    "url": "assets/styles/utils-icons.css",
    "revision": "c674e76141c146af43ba5b983cd532f0"
  }, {
    "url": "assets/styles/utils-menu.css",
    "revision": "181c587b474ae18a8c3b408efc4a3914"
  }, {
    "url": "assets/styles/utils.css",
    "revision": "14bef8eb619405ddcb2eb652d5f0ff1e"
  }, {
    "url": "assets/third-party/font-awesome/css/brands.min.css",
    "revision": "120cd1fc94476fc0d8df485f8f937e20"
  }, {
    "url": "assets/third-party/font-awesome/css/fontawesome.min.css",
    "revision": "835b264d24ffdf8fe3800a61266fa76a"
  }, {
    "url": "assets/third-party/font-awesome/css/solid.min.css",
    "revision": "7c68b1b1aad853b83d0c29a5eefc6eb5"
  }, {
    "url": "index.html",
    "revision": "dd3ac00f6cd2fb08f71921d042ffc1cd"
  }, {
    "url": "session-data-builder.html",
    "revision": "186ad465389531bf37538df51a78c6a9"
  }, {
    "url": "text2lesson.js",
    "revision": "bd40c0050c6e7a5ffa9f013e19fdca0f"
  }], {});

}));
//# sourceMappingURL=sw.js.map
