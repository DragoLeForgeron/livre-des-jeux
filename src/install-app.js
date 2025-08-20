let deferredPrompt;
let installAppButton;


function isInStandaloneMode() {
    return ("standalone" in window.navigator && window.navigator.standalone) || window.matchMedia('(display-mode: standalone)').matches;
}


window.addEventListener('beforeinstallprompt', event => {
    if(event.isTrusted) {
        event.preventDefault();
        deferredPrompt = event;
    }
});


window.addEventListener('appinstalled', event => {
    if(event.isTrusted) {
        deferredPrompt = null;
        toast("Application installée");
    }
});


async function promptAppInstallation() {
    const { browser, os } = detectBrowserAndOS();

    if(isInStandaloneMode()) {
        toast("Application déjà installée");
    }
    else if(deferredPrompt && deferredPrompt?.isTrusted) {
        deferredPrompt.prompt();
    }
    else {
        const instructions = getInstallInstructions(browser, os);
        showModal(instructions.title, instructions.steps);
    }
}


function detectBrowserAndOS() {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let os = 'Unknown';

    // OS detection
    if (/Windows/i.test(userAgent)) os = 'Windows';
    else if (/Macintosh|Mac OS X/i.test(userAgent)) os = 'macOS';
    else if (/Linux/i.test(userAgent)) os = 'Linux';
    else if (/Android/i.test(userAgent)) os = 'Android';
    else if (/iPhone|iPad|iPod/i.test(userAgent)) os = 'iOS';

    // Navigator detection
    if (/Chrome/i.test(userAgent) && !/Edge|OPR|Samsung/i.test(userAgent)) browser = 'Chrome';
    else if (/Firefox/i.test(userAgent)) browser = 'Firefox';
    else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) browser = 'Safari';
    else if (/Edge/i.test(userAgent)) browser = 'Edge';
    else if (/OPR|Opera/i.test(userAgent)) browser = 'Opera';
    else if (/Samsung/i.test(userAgent)) browser = 'Samsung Internet';

    return { browser, os };
}


function getInstallInstructions(browser, os) {
    if (os === 'iOS') {
        if (browser === 'Safari') {
            return {
                title: "Installation sur iOS Safari",
                steps: [
                    `1. Appuyez sur le bouton de partage (carré avec flèche vers le haut situé dans la barre d'adresse)`,
                    `2. Faites défiler et sélectionnez "Sur l'écran d'accueil"`,
                    `3. Appuyez sur "Ajouter" pour confirmer`
                ]
            };
        } else {
            return {
                title: "Installation sur iOS",
                steps: [
                    `1. Ouvrez ce site dans Safari`,
                    `2. Suivez les instructions pour Safari iOS`
                ]
            };
        }
    }

    if (os === 'Android') {
        if (browser === 'Chrome' || browser === 'Edge') {
            return {
                title: `Installation sur Android ${browser}`,
                steps: [
                    `1. Appuyez sur le menu (3 points) en haut à droite`,
                    `2. Sélectionnez 'Ajouter à l'écran d'accueil'`,
                    `3. Confirmez en appuyant sur "Ajouter"`
                ]
            };
        } else if (browser === 'Firefox') {
            return {
                title: "Installation sur Android Firefox",
                steps: [
                    `1. Appuyez sur le menu (3 lignes) en haut à droite`,
                    `2. Sélectionnez "Installer"`,
                    `3. Confirmez l'installation`
                ]
            };
        } else if (browser === 'Samsung Internet') {
            return {
                title: "Installation sur Samsung Internet",
                steps: [
                    `1. Appuyez sur le menu en bas de l'écran`,
                    `2. Sélectionnez "Ajouter à l'écran d'accueil"`,
                    `3. Confirmez en appuyant sur "Ajouter"`
                ]
            };
        }
    }

    if (os === 'Windows') {
        if (browser === 'Chrome' || browser === 'Edge') {
            return {
                title: `Installation sur Windows ${browser}`,
                steps: [
                    `1. Cliquez sur l'icône d'installation dans la barre d'adresse ou utilisez le menu (3 points) et cliquer sur "Installer"`,
                    `2. Confirmez l'installation`
                ]
            };
        }
    }

    if (os === 'macOS') {
        if (browser === 'Chrome' || browser === 'Edge') {
            return {
                title: `Installation sur macOS ${browser}`,
                steps: [
                    `1. Cliquez sur l'icône d'installation dans la barre d'adresse ou utilisez le menu (3 points) et cliquer sur "Installer"`,
                    `2. Confirmez l'installation`
                ]
            };
        } else if (browser === 'Safari') {
            return {
                title: "Installation sur macOS Safari",
                steps: [
                    `1. Cliquez sur "Fichier" dans la barre de menu`,
                    `2. Sélectionnez "Ajouter au Dock"`,
                    `3. L'application sera accessible depuis le Dock`
                ]
            };
        }
    }

    // default
    return {
        title: "Installation non supportée",
        steps: [
            `Votre navigateur ${browser} sur ${os} ne supporte pas l'installation de l'application.`,
            `Essayez d'utiliser Chrome, Edge, Firefox ou Safari.`,
            `Vous pouvez toujours ajouter un marque-page pour un accès rapide.`
        ]
    };
}