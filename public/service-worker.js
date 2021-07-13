const FILES_TO_CACHE = [
    "/",
    "manifest.webmanifest",
    "index.html",
    "assets/css/styles.css",
    "assets/js/index.js",
    "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
    "assets/js/db.js",
    "assets/images/icons/icon-192x192.png",
    "assets/images/icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});