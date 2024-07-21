const cacheName = "LdJ_v1.0.0";
const excludedResources = [
    'chrome-extension',
    '.webmanifest',
    'manifest',
    'install-app.js',
    'serviceWorkRegistration.js',
    'download-app.svg'
]
const precachedResources = [
    "/img/logo/complet-noir-transparent.png",
    "/img/logo/picto-noir-transparent.png",
    "/style/style.css",
    "/style/pages/games/game.css",
    "/src/toast.js",
    "/src/search.js",

    "/img/pictos/beer.svg",
    "/img/pictos/clock.svg",
    "/img/pictos/dice.svg",
    "/img/pictos/users_group.svg",
    "/img/pictos/infinity-light.svg",
    "/img/pictos/right.svg",
    "/img/pictos/wrong.svg",
    "/img/pictos/cards/A.png",
    "/img/pictos/cards/2.png",
    "/img/pictos/cards/3.png",
    "/img/pictos/cards/4.png",
    "/img/pictos/cards/5.png",
    "/img/pictos/cards/6.png",
    "/img/pictos/cards/7.png",
    "/img/pictos/cards/8.png",
    "/img/pictos/cards/9.png",
    "/img/pictos/cards/10.png",
    "/img/pictos/cards/V.png",
    "/img/pictos/cards/D.png",
    "/img/pictos/cards/R.png",
    "/img/pictos/cards/spades.svg",
    "/img/pictos/cards/clover.svg",
    "/img/pictos/cards/diamond.svg",
    "/img/pictos/cards/heart.svg",
    "/img/pictos/dice/T-2.png",
    "/img/pictos/dice/T-3.png",
    // "/img/pictos/dice/T-4.png",
    // "/img/pictos/dice/T-5.png",
    "/img/pictos/dice/T-6.png",
    "/img/pictos/dice/T-7.png",
    // "/img/pictos/dice/T-8.png",
    "/img/pictos/dice/T-9.png",
    "/img/pictos/dice/T-10.png",
    "/img/pictos/dice/T-11.png",
    "/img/pictos/dice/T-12.png",
    "/img/pictos/dice/1.svg",
    "/img/pictos/dice/2.svg",
    "/img/pictos/dice/3.svg",
    "/img/pictos/dice/4.svg",
    "/img/pictos/dice/5.svg",
    "/img/pictos/dice/6.svg",
    "/img/pictos/plus.svg",
    "/img/pictos/minus.svg",
    "/img/pictos/equal.svg",
    "/img/pictos/inside.svg",
    "/img/pictos/outside.svg",

    "/index.html",
    "/style/pages/gamesList/gameList.css",
    "/img/QRCode_Games.png",

    "/RèglesGénérales.html",
    "/img/QRCode_RèglesGénérales.png",

    "/MentionsLégales.html",

    "/5Temps.html",
    "/img/games/5Temps/presentation.png",
    "/img/games/5Temps/QRCode.png",

    "/7.html",
    "/style/pages/games/7/7.css",
    "/img/games/7/presentation.png",
    "/img/games/7/preparation.png",
    "/img/games/7/QRCode.png",

    "/98.html",
    "/style/pages/games/98/98.css",
    "/img/games/98/presentation.png",
    "/img/games/98/preparation.png",
    "/img/games/98/QRCode.png",

    "/Bixit.html",
    "/style/pages/games/Bixit/Bixit.css",
    "/img/games/Bixit/presentation.png",
    "/img/games/Bixit/QRCode.png",

    "/Boilotte.html",
    "/img/games/Boilotte/presentation.png",
    "/img/games/Boilotte/QRCode.png",

    "/BusMagique.html",
    "/img/games/BusMagique/presentation.png",
    "/img/games/BusMagique/QRCode.png",
    
    "/CarréMagique.html",
    "/img/games/CarréMagique/presentation.png",
    "/img/games/CarréMagique/QRCode.png",

    "/D1P2C.html",
    "/style/pages/games/D1P2C/D1P2C.css",
    "/img/games/D1P2C/presentation.png",
    "/img/games/D1P2C/QRCode.png",

    "/Dealer.html",
    "/style/pages/games/Dealer/Dealer.css",
    "/img/games/Dealer/presentation.png",
    "/img/games/Dealer/QRCode.png",

    "/Formule1.html",
    "/img/games/Formule1/presentation.png",
    "/img/games/Formule1/QRCode.png",

    "/H.html",
    "/img/games/H/presentation.png",
    "/img/games/H/QRCode.png",

    "/IndianaJones.html",
    "/style/pages/games/IndianaJones/IndianaJones.css",
    "/img/games/IndianaJones/presentation.png",
    "/img/games/IndianaJones/evenShape.jpg",
    "/img/games/IndianaJones/oddShape.jpg",
    "/img/games/IndianaJones/pyramid.jpg",
    "/img/games/IndianaJones/QRCode.png",

    "/Japonais.html",
    "/style/pages/games/Japonais/Japonais.css",
    "/img/games/Japonais/presentation.png",
    "/img/games/Japonais/QRCode.png",

    "/Kamikaze.html",
    "/img/games/Kamikaze/presentation.png",
    "/img/games/Kamikaze/QRCode.png",

    "/Killer.html",
    "/img/games/Killer/presentation.png",
    "/img/games/Killer/QRCode.png",

    "/Mémo.html",
    "/img/games/Mémo/presentation.png",
    "/img/games/Mémo/QRCode.png",

    "/Palmier.html",
    "/style/pages/games/Palmier/Palmier.css",
    "/img/games/Palmier/presentation.png",
    "/img/games/Palmier/preparation.png",
    "/img/games/Palmier/QRCode.png",

    "/PMU.html",
    "/style/pages/games/PMU/PMU.css",
    "/img/games/PMU/presentation.png",
    "/img/games/PMU/preparation.png",
    "/img/games/PMU/QRCode.png",

    "/Purple.html",
    "/img/games/Purple/presentation.png",
    "/img/games/Purple/QRCode.png",

    "/Pyramide.html",
    "/img/games/Pyramide/presentation.png",
    "/img/games/Pyramide/QRCode.png",

    "/Snake.html",
    "/style/pages/games/Snake/Snake.css",
    "/img/games/Snake/presentation.png",
    "/img/games/Snake/preparation.png",
    "/img/games/Snake/QRCode.png",

    "/Squiz.html",
    "/img/games/Squiz/presentation.png",
    "/img/games/Squiz/QRCode.png",

    "/TimeBomb.html",
    "/img/games/TimeBomb/presentation.png",
    "/img/games/TimeBomb/QRCode.png",

    "/Trébuchet.html",
    "/img/games/Trébuchet/presentation.png",
    "/img/games/Trébuchet/QRCode.png",

    "/Trio.html",
    "/img/games/Trio/presentation.png",
    "/img/games/Trio/QRCode.png",

    "/ÉchelleDeRichcard.html",
    "/img/QRCode_%C3%89chelleDeRichcard.png"
];


self.addEventListener('install', event => {
    // console.log("install");
    self.skipWaiting();
    event.waitUntil(precache());
});

self.addEventListener("activate", event => {
    // console.log("activate");
    clients.claim();
    event.waitUntil(clearOldCache());
});

self.addEventListener('fetch', event => {
    // console.log("fetch", event.request.url);
    // if(!excludedResources.some(resource => event.request.url.includes(resource)) && !precachedResources.some(resource => event.request.url.includes(resource))) console.log("fetch", event.request.url);
    // console.log("event", event);
    // console.log("host", window.location.host);
    // console.log("host", self.location.hostname);

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
    return cache.addAll(getPrecachedResourcesDependOfHost());
}

async function clearOldCache() {
    const keys = await caches.keys();
    await Promise.all(
        keys.map(key => {
            if(key !== cacheName) return caches.delete(key);
        })
    );
}

async function cacheFirstWithRefresh(request) {
    const fetcResponsePromise = fetch(request).then(async networkResponse => {
        if(networkResponse.ok && !excludedResources.some(resource => request.url.includes(resource))) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    });

    return (await caches.match(request)) || (await fetcResponsePromise);
}

function getPrecachedResourcesDependOfHost() {
    const host = self.location.hostname;
    const specificHosts = [
        "dragoleforgeron.github.io"
    ];

    if(specificHosts.includes(host)) return precachedResources.map(resource => "/livre-des-jeux" + resource);
    else return precachedResources;
}