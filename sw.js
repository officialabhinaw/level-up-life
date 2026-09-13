self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('level-up-life-store').then((cache) => {
      return cache.addAll(['/level-up-life/', '/level-up-life/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});