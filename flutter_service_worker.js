'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c99c5ce1ede17986b0d75baa4ed8f5d2",
"assets/AssetManifest.json": "e2f58464c554a013bd0bada0265d26ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2cb44696c58d294ff65b336344c9e712",
"assets/NOTICES": "5d6583197d2cee395156e42b35c9392d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/resources/images/backgrounds/not_zen.jpg": "d9e7cf19e0d36363b9f43703cf8bfa5f",
"assets/resources/images/backgrounds/wooden_study.png": "31864bc4c7ed8e5e24cc1fef47e51686",
"assets/resources/images/dotnet_bot.svg": "5530910c8d802a87bc394ce246aa1b38",
"assets/resources/images/tile_images/a_tile.png": "7df2abf6110536b8b99c403a67a6dedb",
"assets/resources/images/tile_images/b_tile.png": "9c946cdc0c0ede9ecac79262d5c1a22c",
"assets/resources/images/tile_images/c_tile.png": "24bbf614690098da1d63671f86eb60ca",
"assets/resources/images/tile_images/d_tile.png": "54277c99ccebfb3558244716cd36a75f",
"assets/resources/images/tile_images/e_tile.png": "d91b8e44265178d56e9da6afe13d929f",
"assets/resources/images/tile_images/f_tile.png": "c8aa60b92c1333bea954ea172f2f0b6f",
"assets/resources/images/tile_images/g_tile.png": "8000dfcccebd944054a8d6f8367e1245",
"assets/resources/images/tile_images/h_tile.png": "9bf07fb858e6b89a5232634a500c538a",
"assets/resources/images/tile_images/i_tile.png": "d432703ee1f9bf02c1f36c4f5fdf891e",
"assets/resources/images/tile_images/j_tile.png": "678e0ae21e875717024a33565ec66a61",
"assets/resources/images/tile_images/k_tile.png": "0533e352fe187670300f9758b35a7336",
"assets/resources/images/tile_images/l_tile.png": "8e4f8aa9fc386c5c3fc3a500eb1c0dda",
"assets/resources/images/tile_images/m_tile.png": "83c0c6380ed81d8e0c1042dac7081d3b",
"assets/resources/images/tile_images/n_tile.png": "344adcc30bd4d93c1978797672b4ae95",
"assets/resources/images/tile_images/o_tile.png": "db18bb3dbe28f8a838be74fa20ccfb3c",
"assets/resources/images/tile_images/p_tile.png": "41eb736cde6228d9922b659544b2fef7",
"assets/resources/images/tile_images/q_tile.png": "85a33247d9cb58a086b04622c1f24fd5",
"assets/resources/images/tile_images/r_tile.png": "24d4b3eaf94a722980341203fe7760b8",
"assets/resources/images/tile_images/s_tile.png": "0e88ddde309a43241dc63a9d6347852f",
"assets/resources/images/tile_images/t_tile.png": "70faed92065a0ff7496bc1546b1abd1e",
"assets/resources/images/tile_images/u_tile.png": "9b290986db0f3dfa83f4578900f73296",
"assets/resources/images/tile_images/v_tile.png": "53a22b50062341ed7767381c11bcf7ab",
"assets/resources/images/tile_images/w_tile.png": "2b0a14a5a801310e0b0a9fdeefdea5dc",
"assets/resources/images/tile_images/x_tile.png": "92e1b6877606cc362c1f8c389cc4df1d",
"assets/resources/images/tile_images/y_tile.png": "11ea7fc609b51394437483867dfd5293",
"assets/resources/images/tile_images/z_tile.png": "1bcfae47c0288ffee6e3ab1f7b230d51",
"assets/resources/images/title_screen_image.png": "766e312b4c7be74a5772a47f95828233",
"assets/resources/raw/csw22.txt": "bb5d6b45fdc6b32bd4785e41cdf36fbc",
"assets/resources/raw/dice_classic.txt": "a101026bcb0b61eb5b5c746c13ba6afa",
"assets/resources/raw/dice_modern.txt": "0a2674823da3626f7ef0ebe916eb32a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "0321021ab688107e72c7168f8fc7decd",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "5160d2e90afcd53d06c23d67f2885f83",
"icons/Icon-512.png": "9b61a79ad0a00c33392d9024d0f78096",
"icons/Icon-maskable-192.png": "5160d2e90afcd53d06c23d67f2885f83",
"icons/Icon-maskable-512.png": "9b61a79ad0a00c33392d9024d0f78096",
"index.html": "ffce30d9edd43622c52d332800ea3c48",
"/": "ffce30d9edd43622c52d332800ea3c48",
"main.dart.js": "e66ed1e9344c57b055ef026802e91093",
"manifest.json": "da9b47bdfa6f40a7dabc7ca61e99dfd5",
"version.json": "988c8e814b0634eccfdd9273e8823a56"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
