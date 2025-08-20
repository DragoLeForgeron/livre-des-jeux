/**
 * Show a modal dialog with a title and message.
 * @param {string} title Title of the modal
 * @param {Array<string>} messages Messages to display in the modal
 * @returns {void}
 */
function showModal(title, messages) {

    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const titleElement = document.createElement("h2");
    titleElement.innerText = title;
    modal.appendChild(titleElement);

    messages.forEach(message => {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = message; // Use innerHTML to allow HTML content
        modal.appendChild(messageElement);
    });

    const closeButton = document.createElement("button");
    closeButton.innerText = "Fermer";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
    modal.appendChild(closeButton);

}