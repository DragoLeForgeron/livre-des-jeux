function search(term) {
    const gamesList = document.getElementById("gamesList")?.children;

    Object.values(gamesList).forEach(game => {
        const contents = game.innerText.split("\n\n");

        if(contents.some(content => content.toLowerCase().includes(term.toLowerCase()))) game.style.display = "";
        else game.style.display = "none";
    });
}