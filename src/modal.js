function showModal(title, message) {

    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const titleElement = document.createElement("h2");
    titleElement.innerText = title;
    modal.appendChild(titleElement);

    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    modal.appendChild(messageElement);

    const closeButton = document.createElement("button");
    closeButton.innerText = "Fermer";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
    modal.appendChild(closeButton);

}