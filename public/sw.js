// Oddiy xizmat fayli: ilovani o'rnatish imkonini beradi, ma'lumotni keshlamaydi
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => new Response("Internet yo'q", { status: 503 })));
});
