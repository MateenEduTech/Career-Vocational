// ============================================================
// SERVICE WORKER – Career Explorer PWA
// Author: Mateen Yousuf – Teacher, SED J&K
// Aligned with NEP 2020 & NCF 2023
// ============================================================

const CACHE_NAME = 'career-explorer-v1';

// Files to cache for offline use
const CACHE_FILES = [
  './index.html',
  './manifest.json',
  './author.jpg',
  './conceptual-background.html',
  './user-manual.html'
];

// Install event – pre-cache all app files
self.addEventListener('install', event => {
  console.log('[SW] Installing Career Explorer Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell files');
      return cache.addAll(CACHE_FILES);
    }).then(() => self.skipWaiting())
  );
});

// Activate event – clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating new service worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[SW] Removing old cache:', key);
          return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event – serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache (offline mode)
        return cachedResponse;
      }
      // Try network, then cache new response
      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // Network failed and no cache – return offline fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
