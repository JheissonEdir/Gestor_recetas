// Proxy service worker para el directorio public
// Este archivo existe para evitar errores 404 al intentar acceder al service worker desde la ruta /public/

// Redirigir al service worker principal
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const mainWorkerUrl = new URL('../service-worker.js', self.location.href);
  const mainWorkerResponse = fetch(mainWorkerUrl);
  event.respondWith(mainWorkerResponse);
});