const menu = document.querySelector(".none");
const boton = document.querySelector(".bx-menu-alt-right");

boton.addEventListener("click", (event) => {
    menu.classList.toggle("none");
    event.stopPropagation(); 
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !boton.contains(event.target)) {
        menu.classList.add("none");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".elemento");

    elementos.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`; 
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
  });
