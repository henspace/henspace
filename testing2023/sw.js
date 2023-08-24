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
    "revision": "2d244de6baef43cfb6cdb6b631441494"
  }, {
    "url": "assets/styles/cards.css",
    "revision": "7c96b3ba6fdd3227964f10e49411c1fe"
  }, {
    "url": "assets/styles/lessons.css",
    "revision": "caf428b02af10ec2d326f0c9339bff99"
  }, {
    "url": "assets/styles/style.css",
    "revision": "a5157f3c6f2178370374a5bc348cc2e3"
  }, {
    "url": "assets/styles/utils-controls.css",
    "revision": "43a2ea9c41709be2a123007f6e7233e5"
  }, {
    "url": "assets/styles/utils-dialogs.css",
    "revision": "ef0c89e65f2199d2faf3614bbfc90b14"
  }, {
    "url": "assets/styles/utils-icons.css",
    "revision": "5e6da588b954dd7c575704b87560bd36"
  }, {
    "url": "assets/styles/utils-menu.css",
    "revision": "ce1f245d67210c5c05a773c8d2bb6a19"
  }, {
    "url": "assets/styles/utils.css",
    "revision": "a57da2773beb1491511b62174fad3503"
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
    "revision": "76a91e8ca803abedb4bf736fb158bf2d"
  }, {
    "url": "session-data-builder.html",
    "revision": "186ad465389531bf37538df51a78c6a9"
  }, {
    "url": "text2lesson.js",
    "revision": "df99254afa4c3e146895bf1458febf28"
  }], {});

}));
//# sourceMappingURL=sw.js.map
