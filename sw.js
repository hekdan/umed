// Retire earlier üMed offline caches; never cache decrypted content.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const name of await caches.keys()) {
    if (name.startsWith('umed-')) await caches.delete(name);
  }
  await self.clients.claim();
  await self.registration.unregister();
})()));
