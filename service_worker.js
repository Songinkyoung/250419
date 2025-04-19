const CACHE_NAME = '9x9-game-v1';
const urlsToCache = [
    '/250419/',
    '/250419/index.html',
    '/250419/manifest.json',
    'https://i.ibb.co/RkbrWfNG/maskable-icon-x192.png',
    'https://i.ibb.co/RkbrWfNG/maskable-icon-x192.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
