var cacheName = 'odrpg-0.0.1';
var filesToCache = [
    '/',
    '/index.html',
    '/assets/css/header.css',
    '/assets/css/main.css',
    '/assets/img/logos.png',
    '/assets/js/list.js',
    '/assets/js/main.js'
];

self.addEventListener('install', function (event) {
    
    event.waitUntil(
        caches
            .open(cacheName)
            .then(function(cache){
                return cache.addAll(filesToCache);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', function (event) {
    
    event.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                if (key !== cacheName) return caches.delete(key);
            }));    
        })
    );
    
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    
    event.respondWith (
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});