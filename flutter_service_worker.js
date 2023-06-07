'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "f7bfea64c6b1188b94073d7729696ebb",
"assets/AssetManifest.smcbin": "a679881530b534fa6dabbfe6281ddea8",
"assets/assets/constructions/1_tower.png": "f5165ab6478039d9a34950aefeee0be7",
"assets/assets/constructions/2_compound_44.png": "2d9f9c37b2cd049f2635ff5d7b28126d",
"assets/assets/constructions/3_compound_26.png": "c410c3ff733812ac3e7c632696c694e5",
"assets/assets/constructions/4_zahra.png": "b2b16025fb18e816502c0b818f1c55dd",
"assets/assets/constructions/5_ipv.png": "9d46c267eefc25da8d918ec84c8a42be",
"assets/assets/constructions/6_rawdah.png": "4954f72363667e46e7f5453c2dd65235",
"assets/assets/constructions/7_haram.png": "1f0e92ec1ff505156c274253e2201939",
"assets/assets/constructions/8_abrsahra.png": "245e1ac1984d83cf27168ba8f3342771",
"assets/assets/design/60251.jpg": "bd1c8873fb6c092f62164db44ad8b3e0",
"assets/assets/design/background-1.zip": "a987da4b6077b00156268b8088e37d82",
"assets/assets/design/Bg-place-inside-psd.jpg": "612d97313ade34591ceee862e94cc13d",
"assets/assets/design/company-co-business-logo-gold-emboss.jpg": "0f1e9217793b33214bed81f1bca916e1",
"assets/assets/design/jumbotron.jpg": "a4c8eea3b2e4d1ecb60829185a667be1",
"assets/assets/design/jumbotron.png": "e74e3ff826a2fd07804b6e2363e1ca0f",
"assets/assets/design/logo-blue.png": "ecc0486483fa528cd2df4f35c7a344e7",
"assets/assets/design/logo-blue.svg": "4ee4f887354eb3038ef3736640371802",
"assets/assets/design/logo-light.svg": "d78040cba36b95a563cc8b59fdb56629",
"assets/assets/design/PressedCardboardLogoFreeMockup.zip": "9f96f7e50a3bb84e6bd9958808f5f307",
"assets/assets/design/scc-logo-16.png": "8b0553c62d581154f8f57d798ba75c8f",
"assets/assets/design/scc-logo.afdesign": "40911d8d13b3256ec31e2c5e0d70a8ca",
"assets/assets/design/Website-SCC-v1.pdf": "cef9a3cb9f1c7e17cf4ebd83b1df8dbc",
"assets/assets/fonts/NotoNaskhArabic-Bold.ttf": "f02f426690b39f5158187971db10267a",
"assets/assets/fonts/NotoNaskhArabic-Medium.ttf": "19f42fc10313ea627a567c8e4a17427c",
"assets/assets/fonts/NotoNaskhArabic-Regular.ttf": "102bdd69b4853341fdb85fdb1fa02985",
"assets/assets/fonts/NotoNaskhArabic-SemiBold.ttf": "64b9c9a44fc30eda3364dc6ce67126a7",
"assets/assets/icons/ac.svg": "3dd108ba3d01f150e348e5ce2d94c7dd",
"assets/assets/icons/architecture.svg": "f634264e3a4c469116f8e868ea92003f",
"assets/assets/icons/azl.svg": "10339d3b62643344c8d7b4037e8e3645",
"assets/assets/icons/bolt.svg": "6e41d6732564de42a179945634c34343",
"assets/assets/icons/engineering.svg": "2cd876b01d7aff5490662485b662de87",
"assets/assets/icons/language.svg": "9aedcddfbc2d6a6682b05a26060acec7",
"assets/assets/icons/location.svg": "2af0f128297b41a490b3ae46d6ff3dce",
"assets/assets/icons/paint.svg": "0e56896f1396a2160cf25e4621c68869",
"assets/assets/icons/phone.svg": "4785ef8b882c16aef8de219c91aff1f3",
"assets/assets/icons/vat.svg": "3beaf82041a99d73fd698dd421df21ce",
"assets/FontManifest.json": "a0afa50bbc46e425fb1f2ddafd70ded6",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "ac2e98bd9c148e2809f5e98ef7fb5063",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0857536b41a1ae873e73de9e714a81d",
"/": "a0857536b41a1ae873e73de9e714a81d",
"logo-blue.png": "ecc0486483fa528cd2df4f35c7a344e7",
"main.dart.js": "3351c11448aa0e15d02a4d033df05f5b",
"manifest.json": "fe6e3202f4cf072f1b5fc3790f3422ba",
"scc-logo-16.png": "8b0553c62d581154f8f57d798ba75c8f",
"version.json": "ec42a278e836774b97831487161eb8f4"};
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
