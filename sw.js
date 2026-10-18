// üMed — offline support.
// Strategy: network-first for the page (so updates always arrive),
// cache-first for static assets; everything falls back to cache offline.
const CACHE = 'umed-v3';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-512.png', './privacy.html',
  './fonts.css', './jspdf.umd.min.js', './fonts/fraunces-latin-63f165.woff2', './fonts/fraunces-latin-ext-1fba8b.woff2', './fonts/inter-latin-1ab1ad.woff2', './fonts/inter-latin-ext-749a30.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate' || e.request.url.endsWith('/index.html');
  if (isPage) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
  } else {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    })));
  }
});
