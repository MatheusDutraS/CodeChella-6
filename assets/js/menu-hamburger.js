const menuHamburguer = document.querySelector(".cabecalho__menu-hamburguer");
const menu = document.querySelector(".lista-menu");

menuHamburguer.addEventListener("click", () => {
    if (menu.className.endsWith("lista-menu-JS")) {
        menu.classList.remove("lista-menu-JS")
        console.log("funciona")
    } else {
        menu.classList.add("lista-menu-JS")
        console.log("Funcionou2")
    }
})