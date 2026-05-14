const CACHE_NAME = 'icf-bingo-v1';
const ASSETS = [
  './',
  './icf-bingo.html', // Stelle sicher, dass der Dateiname exakt stimmt
];

// Installation: Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Abruf: Zuerst im Cache suchen, dann Netzwerk
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});