// Nombre de la caché que almacenará nuestro App Shell
const CACHE_NAME = 'tienda-campus-shell-v1';

// Lista de archivos que componen el App Shell y que queremos cachear
const urlsToCache = [
    '/',
    'index.html',
    'style.css',
    'script.js'
];

// Evento 'install': se ejecuta cuando el navegador instala el Service Worker
self.addEventListener('install', event => {
  // waitUntil espera a que la promesa se resuelva para terminar la instalación
  event.waitUntil(
    // Abrimos la caché con el nombre que definimos
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierta. Guardando App Shell...');
        // Agregamos todos los archivos de nuestra lista a la caché
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch': se ejecuta cada vez que la página solicita un recurso (CSS, JS, imagen, etc.)
self.addEventListener('fetch', event => {
  // respondWith intercepta la petición y nos permite controlarla
  event.respondWith(
    // Buscamos si el recurso solicitado ya existe en nuestra caché
    caches.match(event.request)
      .then(response => {
        // Si encontramos una respuesta en la caché, la retornamos.
        // Si no, realizamos la petición a la red (fetch).
        return response || fetch(event.request);
      })
  );
});
