const CACHE_NAME = 'weathertunes-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add more static assets as needed
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If both cache and network fail, return offline page
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Background sync for better offline experience
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    // Handle background tasks like updating weather data
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // This would sync weather data when connection is restored
  return Promise.resolve();
}

// Media session for background music control
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'MEDIA_SESSION') {
    // Set up media session metadata
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: event.data.title,
        artist: event.data.artist || 'WeatherTunes',
        album: event.data.mood,
        artwork: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' }
        ]
      });
    }
  }
});