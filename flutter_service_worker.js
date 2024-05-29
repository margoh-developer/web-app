'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "76c0538455bc04d354c9da43533a4f30",
"assets/AssetManifest.bin.json": "64175e17051323e643f4c45fce81802d",
"assets/AssetManifest.json": "0aa83fc710e076e4074c8bee3b580d92",
"assets/assets/icons/all_categories.svg": "24865ef88423d27c848b894af36da77c",
"assets/assets/icons/cash.svg": "59a2ead483c3c7f6b6c0958b837a5de1",
"assets/assets/icons/closing_news.svg": "64ff27141675e62ba4b309a57fd0d877",
"assets/assets/icons/dashboard.svg": "87621a980c790e7c2b6a5221bcaae3fb",
"assets/assets/icons/debit.svg": "b70addaca80ee1c8453efa98aa134b5b",
"assets/assets/icons/delete.svg": "48a6a1d42b9c57afc0ee5022e106c8da",
"assets/assets/icons/done.svg": "7bb1f674056b30e9d99482088d6962cd",
"assets/assets/icons/drink.svg": "161440b8cd9393233b67b8c9ed02aa9f",
"assets/assets/icons/flag-bug-report-1493-svgrepo-com.svg": "025dfd9d30881a32e1c0d46ee56b2827",
"assets/assets/icons/food.svg": "584d3acb1b2260c6de8d12d19cb18188",
"assets/assets/icons/history.svg": "dd1b245655b4b700b7035056c07c3e34",
"assets/assets/icons/home.svg": "51dc3894347e5dc318af6b04c9a0570e",
"assets/assets/icons/houses.svg": "d338f166ac937d1effaf1c30343ab47a",
"assets/assets/icons/image.svg": "ae684c10c910db958ca3268437ada3ba",
"assets/assets/icons/instagram.png": "9aefd702f146208c698329fc41d1c1ee",
"assets/assets/icons/megaphone-775-svgrepo-com.svg": "a27a2049c9e627fc418c37a8864155bb",
"assets/assets/icons/orders.svg": "1448860c0561016affbba3209aefbe6e",
"assets/assets/icons/payments.svg": "d86575f878d15b5dfb1c7c07ab669a2c",
"assets/assets/icons/print.svg": "0fd65699a30583279bce589ee7cdf6a1",
"assets/assets/icons/qr_code.svg": "8addd647769d62a5e5eb1485eb93009e",
"assets/assets/icons/showcase-round-724-svgrepo-com.svg": "99a5d725330baef5fa3c67a24dc9167b",
"assets/assets/icons/sign-731-svgrepo-com.svg": "f0331fae40edba26d5821adcf80b8954",
"assets/assets/icons/snack.svg": "4a2db04a67fe239d461289d0bf03f6de",
"assets/assets/icons/target-784-svgrepo-com.svg": "f5f9d033cef92a742cc161ca8d093c6c",
"assets/assets/icons/volume-low-929-svgrepo-com.svg": "12edde2b754713012ff5a6d6b3af61a0",
"assets/assets/images/rels-blue.png": "9e7126c718c66e822d86b773589a29fa",
"assets/assets/images/rels-gold.png": "a9b4d470dca3c50620c02b4fb807060c",
"assets/assets/images/Rexvin-Confuse.png": "daad4e7181d3db50b3ad041df7428b4c",
"assets/assets/images/Rexvin-Cool.png": "559344517463722e3ddca6be1dfaf3e9",
"assets/assets/images/Rexvin-Fighting.png": "596952ec8024c32bfde7968344203188",
"assets/assets/images/Rexvin-Hi.png": "9dfbef114a93e8310c58d5f490ade943",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a6aebe453b1d36085cf83ca97adff41e",
"assets/NOTICES": "f3b7c4d59c978864ca76da6d51b134ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/rels-gold.png": "a9b4d470dca3c50620c02b4fb807060c",
"index.html": "5259ecec14514592bab2de060fbdc702",
"/": "5259ecec14514592bab2de060fbdc702",
"main.dart.js": "e058d386e953c81805abadb0b7a4490c",
"manifest.json": "95301fe995e8bbe8f9b4b48db7d40797",
"version.json": "25203ce87bf844439203716f65f76a41"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
