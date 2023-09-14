function toast(message) {

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;
    document.body.appendChild(toast);

    toast.classList.add('toastLoad');
    setTimeout(() => {
        toast.remove();
    }, 4000);

}