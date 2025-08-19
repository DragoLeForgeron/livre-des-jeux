let deferredPrompt;
let installAppButton;

function isIos() {
  console.log("isIos()", /iphone|ipad|ipod/i.test(window.navigator.userAgent));
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}


function isInStandaloneMode() {
    console.log("isInStandaloneMode()", ("standalone" in window.navigator && window.navigator.standalone) || window.matchMedia('(display-mode: standalone)').matches);
    return ("standalone" in window.navigator && window.navigator.standalone) || window.matchMedia('(display-mode: standalone)').matches;
}


window.addEventListener('beforeinstallprompt', event => {
    console.log("beforeinstallprompt", event);
    if(event.isTrusted) {
        installAppButton = document.getElementById("installApp");
        installAppButton.style.display = "";

        event.preventDefault();
        deferredPrompt = event;
    }
});


window.addEventListener('appinstalled', event => {
    console.log('appinstalled', event);
    if(event.isTrusted) {
        installAppButton.style.display = "none";

        deferredPrompt = null;
        toast("Application installée");
    }
});


async function promptAppInstallation() {
    console.log("promptAppInstallation()");
    if(deferredPrompt && deferredPrompt?.isTrusted) {
        deferredPrompt.prompt();
    }
}

async function promptAppInstallationTest() {
    console.log("promptAppInstallation()");

    if (isIos() && !isInStandaloneMode()) {
        installAppButton.onclick = () => {
            console.log("iOS installation instructions");
            alert("📲 Pour installer l’application sur iOS :\n\n" +
                "1. Appuie sur le bouton 'Partager' (icône ⬆️ en bas)\n" +
                "2. Sélectionne 'Sur l’écran d’accueil'\n" +
                "3. Valide le nom et c’est installé !");
        };
    }
    else if (!window.BeforeInstallPromptEvent && !isIos() && !isInStandaloneMode()) {
        installAppButton.onclick = () => {
            console.log("Non-supported browser installation instructions");
            alert("ℹ️ Ton navigateur ne propose pas l’installation directe.\n\n" +
                "👉 Ouvre ce site dans Chrome (Android) ou Safari (iOS) " +
                "pour pouvoir l’ajouter à ton écran d’accueil.");
        };
    }
    else if(deferredPrompt && deferredPrompt?.isTrusted) {
        deferredPrompt.prompt();
    }
    else {
        console.warn("Aucune méthode d'installation disponible");
        alert("ℹ️ Aucune méthode d'installation disponible pour ce navigateur.");
    }
}