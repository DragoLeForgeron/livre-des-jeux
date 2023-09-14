function toastMe(element, message) {

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;
    element.appendChild(toast);

    toast.classList.add('toastLoad');
    setTimeout(() => {
        toast.remove();
    }, 4000)

}