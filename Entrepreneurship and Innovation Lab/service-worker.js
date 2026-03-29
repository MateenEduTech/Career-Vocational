// ================================================================
//  SERVICE WORKER — Entrepreneurship & Innovation Lab
//  Developed by Mateen Yousuf, School Education Department Kashmir
//  Strategy: Cache-First for assets, Network-First for pages
// ================================================================

const CACHE_NAME = 'einnovation-lab-v1';
const OFFLINE_URL = './index.html';

// Files to pre-cache on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './author.jpg',
  // Google Fonts (will gracefully fail offline if not cached)
];

// ── INSTALL ─────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching app shell');
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        // Non-fatal: some assets may not be available during install
        console.warn('[SW] Pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH ────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (except Google Fonts)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.googleapis.com') && !url.hostname.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        // Cache hit — return cached version, update in background
        event.waitUntil(
          fetch(request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse.clone()));
            }
          }).catch(() => {}) // Ignore network errors in background update
        );
        return cachedResponse;
      }

      // Cache miss — fetch from network, cache the result
      return fetch(request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        return networkResponse;
      }).catch(() => {
        // Network failed — return offline page for navigation requests
        if (request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});

// ── BACKGROUND SYNC (for future use) ─────────────────────────────
self.addEventListener('sync', event => {
  if (event.tag === 'sync-portfolio') {
    console.log('[SW] Background sync: portfolio');
  }
});

// ── PUSH NOTIFICATIONS (for future use) ──────────────────────────
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    self.registration.showNotification(data.title || 'E&I Lab', {
      body: data.body || 'New notification',
      icon: './author.jpg',
      badge: './author.jpg'
    });
  }
});
