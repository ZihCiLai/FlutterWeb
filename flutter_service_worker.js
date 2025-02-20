'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "57d0f9be20fef4c5b78158de2a986ffc",
"version.json": "f4bf1883938fef44a09245381a365c33",
"index.html": "4cea2121b169348e8415b6537799ffa7",
"/": "4cea2121b169348e8415b6537799ffa7",
"main.dart.js": "ba7a387b0ccb12098445d1d37e48d498",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "986464fa44233abde09f2ee1f7d5eb65",
".git/config": "49bb973ec8ea694c8e4425e322bbe00a",
".git/objects/92/bcd028343c0299b8f450bd4461d6b59eb4808f": "4c94c9ec364649e5bc69eac6e082d9e1",
".git/objects/92/8e933673f09b70719309ea44bd8e9572125a10": "b6350f2c0f36d7344c195ffc0151bb96",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/04/8e164987f584d8724b9f2cb289bde6388f2ecf": "a1807711a5280bfc27587ba068a53b88",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3d/92ee1afb12c41484fe33e33ca1b402a6673ef0": "ee61cd0a56b63cf21131c4a31c4446d8",
".git/objects/67/bd1bd2d76668c139a79dc39c6eed90a3a34917": "004369acd6762f47c7be3bad4f26d7a8",
".git/objects/0b/d088d48f03285263e431c2a3963a91ededc013": "d6ca7249d4f3653f1f81e5a65e53a1b3",
".git/objects/34/182cabf03246eb69c0a6ab5bc6153092e0425a": "f9162d21e21a07a5673e2a522d36eccf",
".git/objects/d7/2e11a2e0ad261ea787605e7ca91efda512181c": "1d9a2339cf82d1561423d5eda014b7c3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/568a9bf57f4f807c08a463f51aa9720789c5a8": "afd3a701fb4c9833aeab941e732b7493",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/8065f0c754a45eea7d039295e4b13367413f6a": "ebe9756670e21f1772547445f65d9a04",
".git/objects/fc/5ef2e90a54c6298305b5a8c4a54ddb698b9e8f": "dd143c98a4229666f8ee23fd5023a159",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/b05b06bcc3dca810525d8295682dc3effe5c5c": "fa5921e954315f65e6bcf8ce2a24699c",
".git/objects/29/f18ed770cecb0a2c89577fcfb1de0d55622ca2": "13f157b40b4b24f3e1394f50a098b12c",
".git/objects/16/ecd400c616003eaa3f8efa5eb8706be6b76564": "6a8057421564444bf973d82111bb17fa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/7fc72c0cae0c7a0970c14c2c9fb960c3843f79": "a21aac90a86a1188e9c3d1325bf62cce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/eb8eb2cea543ceedf255a52ab6e8909af2e56c": "025185f0e452b462bfeda3a0171763f4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/09/ff7a487b1e3ecdd48130ef9bf579e9fee68e95": "e1fd748aa294a1a062d4057ef529d172",
".git/objects/5d/72f56048a45edc8a4fe303ec88c1962eaf38bf": "a1e3e92aeca20d8fa4db220a7a038ddc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/b1c2802931e86e0a610683b9d5ffd212b5b117": "859e8da80027919c67161a3ce6775091",
".git/objects/5e/49a8c0c40a4f831a156b7aedd92661f5905a1d": "ef7166b4e372dd8a8613bbb0111d11d4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/87cffabf121998592d8ceba5dc75d8cc3f85c7": "6664f5d657ba1fd96e1ce5c8a01f5c27",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/206977ab9721f2cee01fe8faf5c0a601fd2cde": "9821427ffdb52cdaedfb10b779462966",
".git/objects/af/8cf1dd94d892b8cbf351c796c54424cc47d5d9": "e2ae27f2aa56ecf10efa30195e6ee3da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/58b8cb0ab53cf06d8ecefaccdd5972b2441c57": "0d3c8339adff5cb59b615bc92cd71773",
".git/objects/a6/56d99f572854cfa4ac67bdb976a3d043282cf4": "c06c8fda8070585a57899655fe219de7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ab3309cff346e343455beb671d80f9cc358b9c": "b2f3c5679c08ebc2b2864c24b851c37a",
".git/objects/cd/3f417913519997b9d81879675cf9f25e07ca51": "1ba4a9425169e670cfbd050c1c7fa184",
".git/objects/e8/8ab14acad92b45958e5794d385ac71ce983209": "718e007d472a4aacdee90be3400af950",
".git/objects/c5/9c704ef16f19d73eb40d4b1ea0cf623d32590b": "100638587e7354bd1ff5be4649b9579a",
".git/objects/f6/d9f0b034164135eab0c2e154c727b4c37a2113": "0cc6a2f249e07628edc3e2a797c19efd",
".git/objects/f6/2783b495a8ef1f6366821ed0935a5887cc7300": "04ef10b9fbcf609845c5ebb6e0d882f0",
".git/objects/f1/8730a2bff40d2a83451353b8aed1115be755b1": "2ea8e6577c61e442a853b2de8501dd32",
".git/objects/e7/adf2de940adc13d3d168cb1406176b854ed543": "2bf6578a95e0210ebb4355129ca0cb59",
".git/objects/f8/94284aae2e52f9a201730d8aa20da86c9d5a3e": "63862924345bdf4de1fff75ee32a5aeb",
".git/objects/46/12c43811a83e56143770c1aee0dcf650101b3c": "3dd714d24dca792485beff5eb885661a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a4238e1ad54e00c3a4f83cd9565aa5045c9b0f": "20a56bab6421dce4bd4e761abb0558af",
".git/objects/2d/bb5d454f4b162e2cf35cad7b07fc05ea3ac4af": "b2cb572353546da31dad73615f6fbda9",
".git/objects/70/f9fd6365c82c46fc8f056bafe387d7c2199e64": "ab853c965e262e7bcf4a2115a4473305",
".git/objects/70/1bd9ae5056bb059b8f43a47bf3ebcab2e55e41": "b9533f50b27b798f273c676e111e1438",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/d09cbd7b40dd5f18a523a5e9a98c220c8bd5a2": "67caf38a0f795551fc5b65c08c17d72f",
".git/objects/15/61d2a103b8cd45dd1108f11b29ee5b8a48c000": "5785a971c796fda274ddedef875d6caa",
".git/objects/8c/9c190c94530d28ef17b166ffa861ee4ae9939a": "c9cef49e5bf870400874e24ce1a5751c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/4b65e259c477fe8277db774d3dfb94a8839008": "ac1cd5bbc1c160aff745e36b8b182673",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/14/c7d0b18129f59a52c6ae2216152f4320e41bbe": "73502d6f23f9427f3f1b54a47247c3da",
".git/objects/22/6f08f1b85f54896e1fb44cf4652c6f1571ac7b": "a30c013d2d3e13010af5963e1ce484ed",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a36c52372e2834c67e276b55e88a1f8e",
".git/logs/refs/heads/master": "a36c52372e2834c67e276b55e88a1f8e",
".git/logs/refs/remotes/Flutter_Web/master": "365348cea19f24e455970455b20e4a44",
".git/logs/refs/remotes/Flutter_Web/main": "40e68eb551971005de66cac69917c899",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "c59cc3b78591ce801b071f880a6c01f4",
".git/refs/remotes/Flutter_Web/master": "c59cc3b78591ce801b071f880a6c01f4",
".git/refs/remotes/Flutter_Web/main": "3222fab69aa20572660ec257c5eba867",
".git/index": "d51660baf9806e7789f312e6061525a9",
".git/COMMIT_EDITMSG": "6fc235025f3a331fa1247949dd99b552",
".git/FETCH_HEAD": "fca7a92250f80b2c80360e41de59bcfa",
".git/sourcetreeconfig": "3d7bc1d47b3b2daa04aeecca8adbdc08",
"assets/AssetManifest.json": "903f0fb2dd3b7c42ea81388067f5f35a",
"assets/NOTICES": "66d7cb015b0fe3df522bedc92959b64d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f430b999e15d3d90531fa7a547bc9166",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/l10n/app_en.arb": "9e510519bc7c9a09ed6ab9d1cd5277d3",
"assets/lib/l10n/app_vi.arb": "f9777b43566eba03ded3b9014dfa7daf",
"assets/lib/l10n/app_zh_TW.arb": "618bf035bd202907668a16d0c79f1c7f",
"assets/lib/l10n/app_zh.arb": "f6998ca7c8d0c05df5ab2b691d0e1c24",
"assets/lib/l10n/app_zh_CN.arb": "44f2ff9ea402d7a4adc47245f70f7765",
"assets/AssetManifest.bin": "b83c3c665e6cfb9bc6bea9d4f4bdf53c",
"assets/fonts/MaterialIcons-Regular.otf": "3ad9dcbc14406c5e211986fb4db01cc6",
"assets/assets/images/contact_logo.png": "4e3e45411035670d5436bae069f7db86",
"assets/assets/images/logo512.png": "a72117686719bab5c049f5b4d274189d",
"assets/assets/images/jyb_coupon.png": "67956dc690d07cd6ca5a6daf1dbe0511",
"assets/assets/documents/2024_joybon_privacy.md": "20c7f58040a67abd2eafcc4c2062b959",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
