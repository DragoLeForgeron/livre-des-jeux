window.addEventListener('load', () => {
    // console.log("window load");
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./serviceWorker.js");
        // console.log("service worker registered !");
    }
});