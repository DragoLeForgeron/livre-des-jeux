self.addEventListener('install', event => {
    console.log("install");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("activate");
    clients.claim();
});

self.addEventListener('fetch', event => {
    console.log("fetch", event.request.url);
    console.log("event", event);
});
