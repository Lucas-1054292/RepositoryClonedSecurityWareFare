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

// self.addEventListener('fetch', (event) => {
//
//   const request = event.request;
//   console.log(request.url)
//   event.respondWith(caches.match(request));
// });
