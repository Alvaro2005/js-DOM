window.addEventListener("scroll", () => {

    function fade(direccion) {

        let imagen = document.querySelectorAll(".fade_" + direccion);

        for (let i = 0; i < imagen.length; i++) {

            let altura = window.innerHeight / 1.4;

            let distancia = imagen[i].getBoundingClientRect().top;

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

/* Menu desplegable*/

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

/*Formulario*/

((d) => {
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/merchyhtml5@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            }).then((res) => (res.ok ? res.json : Promise.reject(res)))
            .then(json => {
                console.log(json);
                $loader.classList.add("none");
                location.hash = "#gracias";
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let message =
                    err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;

            }).finally(() => {
                $loader.classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                }, 3000);
            });
    });
})(document);