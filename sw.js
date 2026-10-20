/* Offline support: the programme keeps working with no signal at the venue.
   Strategy: network first (so edits show up immediately when online), falling back to the cache
   after 3 seconds or when offline. Everything is cached as it is fetched. */
var CACHE = 'prog26-v1';
var CORE = ['./', 'index.html', 'assets/style.css', 'assets/app.js', 'assets/favicon.svg', 'assets/icon-192.png',
  'data/meta.js', 'data/talks-1.js', 'data/talks-2.js', 'data/talks-3.js', 'data/speakers.js', 'manifest.webmanifest'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(new Promise(function (resolve) {
    var settled = false;
    var fromCache = function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined); });
    };
    var timer = setTimeout(function () { fromCache().then(function (hit) { if (hit && !settled) { settled = true; resolve(hit); } }); }, 3000);
    fetch(req).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      clearTimeout(timer);
      if (!settled) { settled = true; resolve(res); }
    }).catch(function () {
      clearTimeout(timer);
      fromCache().then(function (hit) { if (!settled) { settled = true; resolve(hit || Response.error()); } });
    });
  }));
});
