let deferredPrompt;
let installAppButton;


window.addEventListener('beforeinstallprompt', event => {
    // console.log("beforeinstallprompt", event);
    if(event.isTrusted) {
        installAppButton = document.getElementById("installApp");
        installAppButton.style.display = "";

        event.preventDefault();
        deferredPrompt = event;
    }
});


window.addEventListener('appinstalled', event => {
    // console.log('appinstalled', event);
    if(event.isTrusted) {
        installAppButton.style.display = "none";

        deferredPrompt = null;
        toast("Application installée");
    }
});


async function promptAppInstallation() {
    // console.log("promptAppInstallation()");
    if(deferredPrompt && deferredPrompt?.isTrusted) {
        deferredPrompt.prompt();
    }
}