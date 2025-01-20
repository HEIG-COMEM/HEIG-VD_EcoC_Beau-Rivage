const STATIC_CACHE = 'static-cache-v1';
const STATIC_FILES = [
    '/',
];
const CACHE_EXPIRATION = 14 * 24 * 60 * 60 * 1000;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            return cache.addAll(STATIC_FILES);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                const dateHeader = response.headers.get('date');
                if (dateHeader) {
                    const age = Date.now() - new Date(dateHeader).getTime();
                    if (age > CACHE_EXPIRATION) {
                        return fetchAndCache(event.request);
                    }
                }
                return response;
            }
            return fetchAndCache(event.request);
        })
    );
});

function fetchAndCache(request) {
    return fetch(request).then(networkResponse => {
        return caches.open(STATIC_CACHE).then(cache => {
            const responseToCache = networkResponse.clone();
            const headers = new Headers(networkResponse.headers);
            headers.append('date', new Date().toUTCString());
            const responseWithDate = new Response(responseToCache.body, {
                status: responseToCache.status,
                statusText: responseToCache.statusText,
                headers: headers
            });
            cache.put(request, responseWithDate);
            return networkResponse;
        });
    });
}