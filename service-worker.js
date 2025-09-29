// Service worker para habilitar funciones offline
const CACHE_NAME = 'gestor-recetas-v7'; // Actualizado a v7 para forzar limpieza de caché
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './breakeven-chart.js',
  './icon.svg',
  './icon-512.svg',
  './public/icons/icon.svg',
  './public/icons/icon-512.svg'
];

// Instalar el service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache abierta');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar el service worker y limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Tomar control inmediato
  );
});

// Estrategia de caché: Network First (primero red) para todas las solicitudes
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta de la red es válida, la clonamos y la guardamos en caché
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si la red falla, intentamos obtener el recurso desde la caché
        return caches.match(event.request);
      })
  );
});