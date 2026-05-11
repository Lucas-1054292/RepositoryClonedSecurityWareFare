self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/base.css",
        ]),
      ),
  );
  self.skipWaiting(); // activate immediately, don't wait for tabs to close
});

self.addEventListener('activate', (event)=>{
  event.waitUntil(
    caches.keys().then((keys) =>
    Promise.all(keys.filter(k => k !== 'v1').map(k => caches.delete(k))) // delete old caches
  )
);
  self.clients.claim(); // take control of all open pages
});

const cacheFirst = async event => {
  //first check the cache,
  const cachedResponse = await caches.match(event.request); //bij asynchrone functies moet je vaak of altijd afwachten
  //then if found, return that entry,
  if (cachedResponse !== undefined) {
    return cachedResponse; // return cached version if found
  }

  try {
  //otherwise, go to network,
  const networkResponse = await fetch(event.request);
  // return networkEntry
  if (networkResponse.ok) {
    caches
      .open('v1')
      .then(cache => cache.put(event.request, networkResponse.clone()));
    }
    return networkResponse
  } catch {
    return caches.match('/index.html'); // offline fallback
  }
};

const networkFirst = async (event) => {
  try {
    const networkResponse = await fetch(event.request);
    const clonedResponse = networkResponse.clone();
    if (networkResponse.ok) {
      caches
        .open('v1')
        .then(cache => cache.put(event.request, clonedResponse));
      return networkResponse
    }
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse !== undefined) {
      return cachedResponse;
    }

  } catch {
    return new Response({
      status: 408,
      text: 'Network error'
    });
  }
}

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event));
});

