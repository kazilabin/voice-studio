// Offline cache for the app shell and its libraries (the voice model is cached by the engine itself)
const C = 'voice-studio-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = e.request.url;
  if (e.request.method !== 'GET') return;
  if (u.includes('huggingface.co') || u.includes('hf.co')) return;          // model files: handled by the engine's own cache
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (u.startsWith(self.location.origin) || u.includes('cdn.jsdelivr.net') || u.includes('cdnjs.cloudflare.com'))) { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); }
    return r; }).catch(() => hit)));
});
