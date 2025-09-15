'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5cdaa39ffcf51e710aa03e0e9e97377",
"version.json": "b9106a174e540fdff79e429cf52bd493",
"index.html": "5e5beefe8212d18676b0612b2c7284ca",
"/": "5e5beefe8212d18676b0612b2c7284ca",
"main.dart.js": "af417e6c0e6501627a083b17617f11f7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "a28cd77663bc75fb6a311e7520b42ca3",
"icons/Icon-192.png": "c7995f92b2ae05c705c138a753141192",
"icons/Icon-maskable-192.png": "c7995f92b2ae05c705c138a753141192",
"icons/Icon-maskable-512.png": "eb72ad69b8cb4e54ff52e8517ff254e7",
"icons/Icon-512.png": "eb72ad69b8cb4e54ff52e8517ff254e7",
"manifest.json": "c768b19dbe8da1aaf813499295c2c21d",
"assets/AssetManifest.json": "cec64072cbb6d522e74cdc615a0009f1",
"assets/NOTICES": "894297bca692203cf678024c82ad9c6e",
"assets/FontManifest.json": "54fbcb9dc6d82872b0c74afd27288c97",
"assets/AssetManifest.bin.json": "989ef51b14310d80d61c1308290bda72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "db2ad0f2252ca6abb1059cb5631b3f35",
"assets/fonts/MaterialIcons-Regular.otf": "e271c5ff93e1b013dd439a9b614813e0",
"assets/assets/teams_logo/team_logo.png": "f8d693ff3fe78191a6320a65b55ce878",
"assets/assets/teams_logo/vepr.png": "21589ca74f33e9754ab3caa47c6883da",
"assets/assets/teams_logo/Setun.png": "aed749b9205a30e68926696c310cf6cb",
"assets/assets/teams_logo/grom%2520.png": "4dd74854136e6c7b4a031878990c4cc5",
"assets/assets/teams_logo/knights.jpg": "4b26ac037f777ae5cd686f39eb59a65b",
"assets/assets/arena_logo/reutovarena.jpg": "782ffa09cfcbe7ac25305d2d8753cc11",
"assets/assets/arena_logo/hockey_arena.png": "eae4443c8d09f5f45ff5386a35c29c45",
"assets/assets/arena_logo/kolomna.jpg": "0273723000b690d4d9cd44d8765d8c5e",
"assets/assets/arena_logo/vershina.jpg": "6afa17d7258a33064bb6557bb4602b12",
"assets/assets/arena_logo/salut.jpg": "96408f80107753d6829e9964909a69db",
"assets/assets/arena_logo/sporttex.jpg": "4d7a5109f9e6ebc6724890ca4954b15f",
"assets/assets/arena_logo/umka.jpg": "33c93fdc9e325fa5c0c933e5a396445a",
"assets/assets/hockey_puck/puck_128_w.png": "1c5a7248a4d9b7a02bcf4088a91cb17e",
"assets/assets/hockey_puck/puck48_w.png": "7755db529512b7ba66fd853537b5405f",
"assets/assets/hockey_puck/puck48_b.png": "7cfbc87745f6b154a666d7b0bb6b4287",
"assets/assets/hockey_puck/puck128_b.png": "387a80acfe4073063cc0799da16bfcca",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/hockey_assets/hockey_player.png": "f6db3faa59a842a27dd55bb32a571601",
"assets/assets/hockey_assets/arena.jpg": "4a911ae4506456bc178c388a3b1da529",
"assets/assets/hockey_assets/hockey_club.jpg": "60515ba288568a96f18b11c901a00219",
"assets/assets/translations/ru.json": "d92d82ef8c32008e10733c2c7e3e1f5e",
"assets/assets/translations/en.json": "56a81cdc4f6f315370659e1f0f65ac7f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
