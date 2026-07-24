
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
        document.body.style.overflow = "hidden";
    }
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";

        }, 250);
        document.body.style.overflow = "auto";
    }
}
window.onclick = function(event) {
    if(event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
        setTimeout(() => {
            event.target.style.display = "none";

        },250);
        document.body.style.overflow = "auto";
    }
}
document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display="none";
            },250);
        });
        document.body.style.overflow="auto";
    }
});
