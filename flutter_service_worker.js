'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "537d88c63e8fe7466937a84789f05fe5",
"assets/AssetManifest.bin.json": "152e72dbb305065bb6d46e27c3cf31dd",
"assets/AssetManifest.json": "320d25e54e5ff628e93c41ea8926ae0e",
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
"assets/assets/images/logo-rels.png": "76e94076875fb66ac23e495f65a8c1de",
"assets/assets/images/rels-black.png": "f84be389e9fe8b43b8df86703722fce0",
"assets/assets/images/rels-blue.png": "9e7126c718c66e822d86b773589a29fa",
"assets/assets/images/rels-gold-white.png": "34444f14457cd9b6287a54b39fd4b8a1",
"assets/assets/images/rels-gold.png": "a9b4d470dca3c50620c02b4fb807060c",
"assets/assets/images/rels-transparent-gold.png": "7425fa3a65b7a020cf650b7c4dd8e450",
"assets/assets/images/rels-white-gold.png": "0ef2c691b635007449f750f48e11ca93",
"assets/assets/images/rels-white.png": "330157d8822a4a07ae46c492206e311a",
"assets/assets/images/Rexvin-Confuse.png": "daad4e7181d3db50b3ad041df7428b4c",
"assets/assets/images/Rexvin-Cool.png": "559344517463722e3ddca6be1dfaf3e9",
"assets/assets/images/Rexvin-Fighting.png": "596952ec8024c32bfde7968344203188",
"assets/assets/images/Rexvin-Hi.png": "9dfbef114a93e8310c58d5f490ade943",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2b5502332b35803559537bd65ee09f6d",
"assets/NOTICES": "68591a7c13bddf7b988ca1e2782dcc21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b5079fe100910c52404371ab353d8d19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9c228c16fd2dfe540d11d6771ac7cd94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c5cafb979e2b586a54aba6dc22745561",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5a6515b5bc5acc1621e6fa53223d6c36",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "93358e26e5b15cbf76e85294bcee0ccf",
"icons/Icon-192.png": "bf668970ef46db383e1269a0366ffee1",
"icons/Icon-512.png": "ae82c64d3f3cb2cf7cd6bdc35dd2b5b9",
"icons/Icon-maskable-192.png": "bf668970ef46db383e1269a0366ffee1",
"icons/Icon-maskable-512.png": "ae82c64d3f3cb2cf7cd6bdc35dd2b5b9",
"icons/rels-gold-white.png": "34444f14457cd9b6287a54b39fd4b8a1",
"icons/rels-gold.png": "a9b4d470dca3c50620c02b4fb807060c",
"icons/rels-transparent-gold.png": "7425fa3a65b7a020cf650b7c4dd8e450",
"index.html": "51c53c315699755e33c6e1c5e35a7518",
"/": "51c53c315699755e33c6e1c5e35a7518",
"main.dart.js": "5ff0c3ff0a6536cb82e192f8bf02a198",
"manifest.json": "59bd09bd63e5671a1c403dcb75e065b2",
"version.json": "bc8a19aeafa45aea6ae3e8550e58c063"};
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
