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
});

const cacheFirst = async event => {
  //first check the cache,
  const cachedResponse = await caches.match(event.request); //bij asynchrone functies moet je vaak of altijd afwachten
  //then if found, return that entry,
  if (cachedResponse !== undefined) {
    return cachedResponse;
  }

  //otherwise, go to network,
  const networkResponse = await fetch(event.request);
  // return networkEntry
  if (networkResponse.ok) {
    caches
      .open('v1')
      .then(cache => cache.put(event.request, networkResponse.clone()));
  }
  return networkResponse;
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

