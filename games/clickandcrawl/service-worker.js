!function(){let e=[],_="";e=["index.html","manifest.webmanifest","logo_16.fc0a1638.png","logo_32.a2644029.png","logo_48.36ae5f9e.png","logo_128.fa5a02fb.png","logo_167.92d4cd6c.png","logo_180.1f5a85e0.png","logo_192.5589849d.png","logo_512.26f96609.png","index.02850911.css","BabelStoneRunicElderFuthark.26f2b7eb.woff","dungeon-splash.69472037.jpg","wall.28fe420e.jpg","button-texture.ae62a420.jpg","tile-texture.4ba9754d.jpg","index.4afa4f93.js","about.17717e71.md","armour.bfc2be64.txt","artefacts.e636b805.txt","magic.4a13b173.txt","monsters.058b3f4d.txt","heroes.591e0f85.txt","money.46aa8910.txt","traders.1d8d82a4.txt","weapons.b3ea886f.txt","keys.f3b71340.txt","traps.57e309f4.txt","plants.4dd5938e.txt","portals.7bb576d2.txt","dungeon-completed.6e49dc4f.md","dungeon_script.34f994bb.txt","dungeon-welcome.e6dcb2ff.md","dungeon-welcome-casual.65517b23.md","help.006b9517.md","do-alto-do-trono-da-desolacao-trimmed_mono.215d559f.mp3","startupTips.02a317f6.md","quickStart.c6af80e6.md","punch-trimmed_mono.64c2f4ab.mp3","punch-trimmed-double_mono.7b9296a8.mp3","long-medium-swish-trimmed_mono.b327a476.mp3","bubbling-trimmed_mono.db7424d8.mp3","male-hurt-sound-trimmed_mono.4ec7c74d.mp3","pig-oink-47167_mono.2ac3313b.mp3","squeal-thing-103111_mono.d714c27c.mp3","zombie-6851_derived_mono.f7fb675b.mp3","metal-blade-slice-32-195321_mono.8d7c86a7.mp3","spell_chant2_mono.43eff101.mp3","door-43633_trimmed_exit_mono.ef3b57d8.mp3","door-43633_trimmed_enter_mono.1a48c8fe.mp3","sci-fi-portal-83746-trimmed_mono.c930e3c9.mp3","weapon_break.68534dec.mp3","click-and-crawl.f128c6c6.png","guide-move.d93b5484.jpg","guide-attack.d8b123a1.jpg","guide-hero.4145cb66.jpg","guide-cast.2d065439.jpg","guide-portal.4f9b8a3b.jpg","guide-door.5c04ee47.jpg","guide-target.e53830d2.png","guide-weapon-break.ee992992.jpg","dungeon.4a74dd17.png","index.d6d665f9.js","about.17717e71.md","armour.bfc2be64.txt","artefacts.e636b805.txt","magic.4a13b173.txt","monsters.058b3f4d.txt","heroes.591e0f85.txt","money.46aa8910.txt","traders.1d8d82a4.txt","weapons.b3ea886f.txt","keys.f3b71340.txt","traps.57e309f4.txt","plants.4dd5938e.txt","portals.7bb576d2.txt","dungeon-completed.6e49dc4f.md","dungeon_script.34f994bb.txt","dungeon-welcome.e6dcb2ff.md","dungeon-welcome-casual.65517b23.md","help.006b9517.md","do-alto-do-trono-da-desolacao-trimmed_mono.215d559f.mp3","startupTips.02a317f6.md","quickStart.c6af80e6.md","punch-trimmed_mono.64c2f4ab.mp3","punch-trimmed-double_mono.7b9296a8.mp3","long-medium-swish-trimmed_mono.b327a476.mp3","bubbling-trimmed_mono.db7424d8.mp3","male-hurt-sound-trimmed_mono.4ec7c74d.mp3","pig-oink-47167_mono.2ac3313b.mp3","squeal-thing-103111_mono.d714c27c.mp3","zombie-6851_derived_mono.f7fb675b.mp3","metal-blade-slice-32-195321_mono.8d7c86a7.mp3","spell_chant2_mono.43eff101.mp3","door-43633_trimmed_exit_mono.ef3b57d8.mp3","door-43633_trimmed_enter_mono.1a48c8fe.mp3","sci-fi-portal-83746-trimmed_mono.c930e3c9.mp3","weapon_break.68534dec.mp3","click-and-crawl.f128c6c6.png","guide-move.d93b5484.jpg","guide-attack.d8b123a1.jpg","guide-hero.4145cb66.jpg","guide-cast.2d065439.jpg","guide-portal.4f9b8a3b.jpg","guide-door.5c04ee47.jpg","guide-target.e53830d2.png","guide-weapon-break.ee992992.jpg","dungeon.4a74dd17.png"],_="de4766ab",Object.defineProperty({},"deleteAllCaches",{get:function(){return t},set:void 0,enumerable:!0,configurable:!0});let a="ClickAndCrawl:";function d(){return`${a}[${_}]`}function H(e){return e.startsWith(a)}async function c(){var a;console.debug(`[Service worker] Installing version ${_} and pre-caching`);let H=await caches.open(d());for(let _ of e)console.debug(`Manifest ${_}`);await H.addAll((a=e).filter((e,_)=>a.indexOf(e)===_))}async function o(){console.debug("[Service worker] Activating");let e=await caches.keys(),_=[];for(let a of e)H(a)&&a!==d()&&_.push(caches.delete(a));await Promise.all(_)}async function t(){console.info("Deleting all service worker caches.");let e=[];for(let _ of(await caches.keys()))H(_)&&_!==d()&&e.push(caches.delete(_));await Promise.all(e)}async function n(e){let _=d(),a=await caches.match(e,{cacheName:_});return a?(console.log("[Service worker] Found response in cache:",a),a):(a=await caches.match(e,{ignoreSearch:!0,cacheName:_}))?(console.log("[Service worker] Found response in cache ignoring search:",a),a):(console.log("[Service worker] No cache so resorting to network"),fetch(e))}self.addEventListener("install",e=>e.waitUntil(c())),self.addEventListener("activate",e=>e.waitUntil(o())),self.addEventListener("fetch",e=>e.respondWith(n(e.request)))}();