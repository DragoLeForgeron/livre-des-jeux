function search(term) {
    const gamesList = Object.values(document.getElementById("gamesList")?.children);
    const nothingFound = document.getElementById("nothingFound");

    gamesList.forEach(game => {
        const contents = game.innerText.split("\n\n");

        if(contents.some(content => content.toLowerCase().includes(term.toLowerCase()))) game.style.display = "";
        else game.style.display = "none";
    });

    if(gamesList.every(game => game.style.display === "none")) nothingFound.style.display = "";
    else nothingFound.style.display = "none";
}