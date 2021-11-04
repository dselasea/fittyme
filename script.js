const open = document.querySelector("#open");
const navOpen = document.querySelector("#nav-open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    navOpen.classList.add("show");
})

close.addEventListener("click", () => {
    navOpen.classList.remove("show");
})