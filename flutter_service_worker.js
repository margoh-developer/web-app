'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e77f41a53e214086dfa38784e51f9e40",
"assets/AssetManifest.bin.json": "15589bf6a4e13d306e64976ac06e3110",
"assets/AssetManifest.json": "9c3013ae4fb59b25679235ce03ed1497",
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
"assets/assets/icons/logo-rexvin.png": "1b05108e6f4961e2b15ee271de184d88",
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
"assets/assets/images/logo-rexvin-r.png": "767b0ec3cac04a0d6ea3c7881671cfd3",
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
"assets/fonts/MaterialIcons-Regular.otf": "82098b702eeb8cadb402fb1fedc5db24",
"assets/NOTICES": "dbf309324538b2ea1cb63b8c721c3224",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b5079fe100910c52404371ab353d8d19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9c228c16fd2dfe540d11d6771ac7cd94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b5ccecc94516ddc8c07b60203a2e777c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4574baf4c51488c4293a5d3440f56c64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5a6515b5bc5acc1621e6fa53223d6c36",
"firebase-messaging-sw.js": "505709e58b7359da78cc865422014422",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "512c444d76b32c26d68b9ffe74881418",
"icons/Icon-192.png": "bf668970ef46db383e1269a0366ffee1",
"icons/Icon-512.png": "ae82c64d3f3cb2cf7cd6bdc35dd2b5b9",
"icons/Icon-maskable-192.png": "bf668970ef46db383e1269a0366ffee1",
"icons/Icon-maskable-512.png": "ae82c64d3f3cb2cf7cd6bdc35dd2b5b9",
"icons/rels-gold-white.png": "34444f14457cd9b6287a54b39fd4b8a1",
"icons/rels-gold.png": "a9b4d470dca3c50620c02b4fb807060c",
"icons/rels-transparent-gold.png": "7425fa3a65b7a020cf650b7c4dd8e450",
"index.html": "a0fba88fa36fa9a428908d4eb45f6b4c",
"/": "a0fba88fa36fa9a428908d4eb45f6b4c",
"main.dart.js": "fdf3ffcd4a296d136c01d2b75e316060",
"manifest.json": "1b012442ca237d548455fb68c2c20219",
"version.json": "da38811338764615c2dbf9b4dcac9245"};
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
