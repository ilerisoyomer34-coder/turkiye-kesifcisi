/* ============================================================
   SERVICE WORKER — Türkiye'yi Keşfet PWA
   Versiyon: 1.0
   Strateji: Cache-First (oyun tamamen çevrimdışı çalışır)
   ============================================================ */

const CACHE_VERSION = 'tkf-v14';
const FONT_CACHE    = 'tkf-fonts-v4';

const GAME_ASSETS = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './region-badges.js',
  './questions-extended.js',
  './manifest.json',
  './regions.geojson',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Nunito:wght@400;600;700&display=swap',
];

// ── INSTALL: Tüm oyun varlıklarını önbelleğe al ──────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(
        GAME_ASSETS.filter(url => !url.includes('icon-192') && !url.includes('icon-512'))
      ))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: Eski önbellekleri temizle ──────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_VERSION && k !== FONT_CACHE)
          .map(k => {
            console.log('[SW] Eski önbellek siliniyor:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: Akıllı önbellek stratejisi ───────────────────────
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Google Fonts — Stale-While-Revalidate
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(staleWhileRevalidate(event.request, FONT_CACHE));
    return;
  }

  // HTML dosyaları — Network First (her zaman taze HTML)
  if (event.request.method === 'GET' && (url.endsWith('.html') || url.endsWith('/'))) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Diğer oyun varlıkları — Cache First, Network Fallback
  if (event.request.method === 'GET') {
    event.respondWith(cacheFirst(event.request));
  }
});

// ── NETWORK-FIRST stratejisi (HTML için) ─────────────────────
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match('./index.html');
  }
}

// ── CACHE-FIRST stratejisi ───────────────────────────────────
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Çevrimdışı fallback: index.html'i döndür
    return caches.match('./index.html');
  }
}

// ── STALE-WHILE-REVALIDATE stratejisi ───────────────────────
async function staleWhileRevalidate(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Arka planda güncelle
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || fetchPromise;
}

// ── MESAJ: Zorla güncelleme ──────────────────────────────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
