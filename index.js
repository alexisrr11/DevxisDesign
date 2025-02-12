document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.querySelector(".animacion");
    const textos = [
        "Queremos facilitar tu trabajo con nuestro trabajo",
        "Consulte ante cualquier duda, Estamos esperando su mensaje"
    ];
    let indice = 0;

    function animarTexto(elemento, texto, callback) {
        let i = texto.length;
        const intervalo = setInterval(() => {
            if (i >= 0) {
                elemento.textContent = texto.slice(0, i);
                i--;
            } else {
                clearInterval(intervalo);
                if (callback) callback();
            }
        }, 50);
    }

    function aparecerTexto(elemento, texto, callback) {
        let i = 0;
        const intervalo = setInterval(() => {
            if (i <= texto.length) {
                elemento.textContent = texto.slice(0, i);
                i++;
            } else {
                clearInterval(intervalo);
                if (callback) callback();
            }
        }, 50);
    }

    function cicloAnimacion() {
        animarTexto(elemento, textos[indice], () => {
            setTimeout(() => {
                indice = (indice + 1) % textos.length;
                aparecerTexto(elemento, textos[indice], () => {
                    setTimeout(cicloAnimacion, 3000);
                });
            }, 500);
        });
    }

    setTimeout(cicloAnimacion, 3000);
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