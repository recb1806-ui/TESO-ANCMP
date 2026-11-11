// =========================================================================================
// SERVICE WORKER (sw.js) - PWA AUTORIDAD NACIONAL DE CONTROL DEL MINISTERIO PÚBLICO (UE 012)
// =========================================================================================

const CACHE_NAME = "anc-mp-ue012-pwa-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./config.js",
  "./manifest.json",
  "./logo-anc.svg",
  "./icon-192.png",
  "./icon-512.png"
];

// Instalación y precarga de recursos base
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activación y limpieza de versiones antiguas de caché
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia Network-First para consultas a Supabase y Cache-First con actualización para estáticos
self.addEventListener("fetch", (event) => {
  const reqUrl = new URL(event.request.url);

  // No cachear peticiones mutables o API de Supabase
  if (reqUrl.hostname.includes("supabase.co") || event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
