window.addEventListener("scroll", () => {

    function fade(direccion) {

        let imagen = document.querySelectorAll(".fade_" + direccion);

        for (let i = 0; i < imagen.length; i++) {

            let altura = window.innerHeight / 1.4;

            let distancia = imagen[i].getBoundingClientRect().top;

            console.log(altura);

            console.log(distancia);

            imagen[i].classList.add("transfort_" + direccion);

            if (distancia <= altura) {

                imagen[i].classList.add("aparece");

            } else {

                imagen[i].classList.remove("aparece");

            }
        }
    };

    fade("up");
    fade("left");
    fade("right");
    fade("down");
});

((d) => {
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");

    });
})(document);