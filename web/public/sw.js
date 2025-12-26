// Service Worker for OurChatStory PWA
const CACHE_NAME = "ourchatstory-v1";
const urlsToCache = ["/", "/static/compress/logo2.webp"];

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch event - handle share target and serve from cache when offline
self.addEventListener("fetch", (event) => {
  // Handle Web Share Target API POST requests
  if (event.request.method === "POST" && event.request.url.includes("/share")) {
    event.respondWith(
      event.request.formData().then((formData) => {
        const file = formData.get("file");
        
        if (file) {
          // Store the file in IndexedDB or sessionStorage temporarily
          const reader = new FileReader();
          reader.onload = () => {
            // Notify all clients about the shared file
            self.clients.matchAll().then((clients) => {
              clients.forEach((client) => {
                client.postMessage({
                  action: "load-image",
                  file: {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    data: reader.result,
                  },
                });
              });
            });
          };
          reader.readAsArrayBuffer(file);
        }
        
        // Return a response to the share request
        return new Response("Share received", { status: 200 });
      })
    );
  } else {
    // Default cache-first strategy for other requests
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

