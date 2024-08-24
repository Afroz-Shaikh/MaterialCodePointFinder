'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5758e025a7f063708a9823312686b86a",
"version.json": "3b8c805f66a6fe4e8308dfae58954ffd",
"index.html": "fe685a6cf4daab1ce43ba695a818c209",
"/": "fe685a6cf4daab1ce43ba695a818c209",
"main.dart.js": "e4d8f5f8a9cc4059541ceff3cfaaad3b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "b6058d9621d8daa96eeee1ba72564303",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "248a20ec0928da4bf7971508595cac08",
"main.dart.wasm": "356e01a84c108deebdb3ae73cb67d39e",
".git/config": "61baa38915de2b112dd8c226f95f8ffd",
".git/objects/61/928f51ce91c79b7e64558de52a0198ec21dc9b": "d509dc1e948040362a370f5a4754383f",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9b/f99d29726b22d851c91f0b9bdf6f16e54f6aba": "ff7ed31460296e13572a734da9c92819",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/fb721c2de9388f2a0ee574ddeca09517819f4e": "2712ddaf56f1cba43e37a8503ec15d8b",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/37e042d856c7087f7b87553c43765c42fc94ce": "0a5025a48d7ddd88779934d434836676",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/9a0073b986929a4a4a6b25477ff0e4d1d76db8": "0737d8b609d200117fa1a4bb29111088",
".git/objects/a3/660c33da801d8b3e781e8654189a6bb7f46f41": "eceddb205777be7a99bb5066f9005495",
".git/objects/a3/ccdb0803139632b653ba2fc5b488608a30abc4": "28f1dd609c31c086ac0e53e89af5269a",
".git/objects/ac/cd99fed24a8b5fb0f6b0a9bddfb072641bda69": "5cf7ccc009b5a7a52b621e62a63980f9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/44a541aaf4b12c87f0942d1eec4f52f8086c58": "3cc0023145551179e685110ecfc49a1d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/201edd4d3d180e5af170501a6c4196cd6de539": "dfe0dbbde471ff549237f892a87d593c",
".git/objects/bd/1f52078dc1f5e47390f4b514bf587935a7d847": "52b787d87f5fb3eb71cf80e72686d8dd",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/e23385b5015a620d54655d5da92f63074e36fa": "979528fa3b7968e24517920a2dcb23c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/e3/009a0415c9aaff6a1befd5c8bf52c1de61e38a": "b2e2305e0055ff986ff4f046204f26d4",
".git/objects/fe/fd0f5f16f22a334665e09a8f8f74612a1f15b9": "07202f7b7bb9560273ef0bef05f08972",
".git/objects/c8/71c3f6bf0ddc8ff5ab82019d49d6c879517160": "c1e74c1e96327a14c5933152f0bd1866",
".git/objects/c8/26135c7bc0bc05c418bbe4a21b2dd9e2c92a51": "9a3f1684aaf17ec63a3882a8d8e97382",
".git/objects/fb/45cf43533589d115028dba59944ca40f66ecfb": "7c94da3d564fd69b744c6bfc9c1289dd",
".git/objects/fb/f06ba21b247908d19a2ee0694ade872767cb1e": "5d971c7b6ebaa06ccb2a46b36fc80112",
".git/objects/ed/81871fabe35e26a415c1f95a8dcca20678513f": "540f06796800b6ac1d7072e708ea2d25",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/8b5d831b481ca648a5100efd9ddc393812a7eb": "54239eda675812ce642f587264922ca2",
".git/objects/7c/00433b33f5dd4910971084f85136953df8a476": "f4ed3c13f3b9fab57d6dd8c080c37bea",
".git/objects/7c/c5eaa8b1d311ccbb62e186bd9a97a6b8aea5df": "156f424f3aac02aef6834272fb17661a",
".git/objects/1f/194ec73251f6175e8d71a2fb4e34bbcb003a8e": "b4d9540867801a0ff2041ba71123973c",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e0649d915adb8b537b678acf7224b6af584ec8": "fa1e3f6cebbad63cc866cf57c0bfb6e0",
".git/objects/4c/d626fe7fb66631f62d9eb5e7fef4a7f4a0b85d": "8050fe07f1eacc7fdbc263be4d93a1cf",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/4030fd335b3afc44ba87d7fac0818abcced4dd": "ffbbbcf192e64483aef9e7a1823e8d26",
".git/objects/96/a2234357283d38cc1b38bb23414c097420f611": "d52b99047d424a6e0e3b6c05b2dbed4b",
".git/objects/3a/a49a130a564b3b764fcd9ea25c2520ad0a8f63": "e904ea1a190d8a616d217088e78a0175",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/90295c25f84f6c5f916578b5f587c52bb7fbfe": "e63c00ea1c5b84b3ebe74059e269e993",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/63bec5b100c6883727f5f370b4f9dcd4f70060": "7ff53bebbde958d6d5475c3ee6149bbd",
".git/objects/c3/1fa189f48238e2d29108a595ccdb35191520d7": "6a3ad3f20e1ae424c2cf75e964d9fc5d",
".git/objects/c4/e117b301c62c2b851e88b107c8c13dd157bbcb": "1f2e43183faa031bd044f01271fe8636",
".git/objects/ff/5f761fdcad3078e89408e4d08329d23c305338": "265688d8f97e8e1e0919c45870650606",
".git/objects/f1/46914c8ab7d306b7029960ba5053661f48e693": "67b11019c0fe559e76514fdd1f0e3426",
".git/objects/48/ba012f2211d9905c3623342293a5b43d9d1b95": "eaf06c723904b8b91acf78ec08fece3e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/383956d8d53265a4a91787a9bd4b75025b6bbf": "37f39a8e8b7c2080863dcf3e96c7f0d3",
".git/objects/15/124026ca811a3e85c01d1151e05cfb4801aef2": "3be0c3df452609bd319ec776d2803573",
".git/objects/12/2e243c640a60b9a88c06609eb8ab60dfcd7f75": "07de24f9854c86597dad81afb40984d7",
".git/objects/8c/23fc20d1ccee2e23032fd0b008633be47a5e32": "bfec4fce6b69b4fd44fbd23dcf7ce881",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/fe344e4ca9b8b63a6e44bfbf33ca529955e2af": "8b4933a5f651165b510a86f474eb5e4e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/22/489950cfdc65bb2d0d9efb1efae5a3bc10a5ef": "ebb886515cd3b29c964d180b38f7fae0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e2e10f8787605cdf4573f4e54d496ab",
".git/logs/refs/heads/main": "01775db1c2a7058731d03474edfc1669",
".git/logs/refs/remotes/origin/main": "8eff6e35bfe594ac5b94555f614a86b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b3dda9e136b0f396089ae70af096c8be",
".git/refs/remotes/origin/main": "b3dda9e136b0f396089ae70af096c8be",
".git/index": "21a2340a75d1ee52a3fe75a44cc5d190",
".git/COMMIT_EDITMSG": "4dbe593a8ff4d0a2b1a9f2ba554e210e",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "ad70b575429787f8e9f84ed64ca9e708",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "90909a689460e1d8ebb341a790c32088",
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
"main.dart.wasm",
"main.dart.mjs",
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
