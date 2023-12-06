let show = true; 

const BODY = document.querySelector("body");
const MENU_SECTION = document.querySelector(".menu-section");
const MENU_TOGGLE = MENU_SECTION.querySelector(".menu-toggle");
const NAV = MENU_SECTION.querySelector("nav");
const NAV_LIST = MENU_SECTION.querySelectorAll("nav ul li a");

MENU_TOGGLE.addEventListener("click", () => {

    BODY.style.overflow = show ? "hidden" : "initial";      // tira a barra de rolagem

    MENU_SECTION.classList.toggle("on", show) ;       // colocando o show garante que o toggle não vai bugar
    show = !show;
})

// Voltar ao estado inicial ao clicar sobre um item do menu (recolhe o toggle)
NAV_LIST.forEach((item) => {
    item.addEventListener("click", () => {
        BODY.style.overflow = "initial";
        NAV.classList.toggle("on", show);

        show = !show;
    })
})