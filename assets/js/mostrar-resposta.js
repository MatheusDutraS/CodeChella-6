const mostrarResposta = document.querySelectorAll(".mostrar-resposta");
const respostas = document.querySelectorAll(".container-resposta")

for (let i = 0; i < respostas.length; i++) {
    mostrarResposta[i].addEventListener("click", () => {
        if (respostas[i].style.display == "block") {
            respostas[i].style.display = "none";
            mostrarResposta[i].style.transform = "rotate(0deg)"
        } else {
            respostas[i].style.display = "block";
            mostrarResposta[i].style.transform = "rotate(180deg)"
        }
    })
}
