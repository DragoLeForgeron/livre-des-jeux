const cacheName = "LdJ_vAlpha1.0.0";
const precachedResources = [
    "/index.html",
    "/style/style.css",
    "/style/pages/gamesList/gameList.css",
    "/src/toast.js",
    "/src/search.js",
    "/img/logo/complet-noir-transparent.png",
    "/img/pictos/beer.svg",
    "/img/pictos/clock.svg",
    "/img/pictos/dice.svg",
    "/img/pictos/users_group.svg",
    "/img/pictos/infinity-light.svg",
    "/img/QRCode_Games.png",
    "/img/games/5Temps/presentation.png",
    "/img/games/7/presentation.png",
    "/img/games/98/presentation.png",
    "/img/games/Bixit/presentation.png",
    "/img/games/Boilotte/presentation.png",
    "/img/games/CarréMagique/presentation.png",
    "/img/games/D1P2C/presentation.png",
    "/img/games/Dealer/presentation.png",
    "/img/games/H/presentation.png",
    "/img/games/IndianaJones/presentation.png",
    "/img/games/Japonais/presentation.png",
    "/img/games/Kamikaze/presentation.png",
    "/img/games/Killer/presentation.png",
    "/img/games/Mémo/presentation.png",
    "/img/games/PMU/presentation.png",
    "/img/games/Palmier/presentation.png",
    "/img/games/Pyramide/presentation.png",
    "/img/games/Snake/presentation.png",
    "/img/games/Squiz/presentation.png",
    "/img/games/TimeBomb/presentation.png",
    "/img/games/Trébuchet/presentation.png"
];


self.addEventListener('install', event => {
    console.log("install");
    self.skipWaiting();
    event.waitUntil(precache());
});

self.addEventListener("activate", event => {
    console.log("activate");
    clients.claim();
    event.waitUntil(clearOldCache());
});

self.addEventListener('fetch', event => {
    console.log("fetch", event.request.url);
    console.log("event", event);

    // if(event.request.mode === "navigate") {
    //     event.respondWith(
    //         (async () => {
    //             try {
    //                 const preloadResponse = await event.preloadResponse;
    //                 if(preloadResponse) return preloadResponse;

    //                 return await fetch(event.request);
    //             }
    //             catch (error) {
    //                 return new Response("Bonjour les gens");
    //             }
    //         })()
    //     );
    // }

    event.respondWith(cacheFirstWithRefresh(event.request));
});


async function precache() {
    const cache = await caches.open(cacheName);
    return cache.addAll(precachedResources);
}

async function clearOldCache() {
    const keys = await caches.keys();
    await Promise.all(
        keys.map(key => {
            if(key !== cacheName) return caches.delete(key);
        })
    )
}

async function cacheFirstWithRefresh(request) {
    const fetcResponsePromise = fetch(request).then(async (networkResponse) => {
        if(networkResponse.ok && !request.url.startsWith("chrome-extension")) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    });

    return (await caches.match(request)) || (await fetcResponsePromise);
}