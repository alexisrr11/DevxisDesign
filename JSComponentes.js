const menu = document.querySelector(".none");
const boton = document.querySelector(".bx-menu-alt-right");

boton.addEventListener("click", () => {
    menu.classList.toggle("none");
})

document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".elemento");

    elementos.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`; 
    });
});

