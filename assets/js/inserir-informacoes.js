document.addEventListener("DOMContentLoaded", () => {
    const informacoes = JSON.parse(localStorage.getItem("formulario"));
    const campoNome = document.querySelector('.descricao__nome');
    const campoIngresso = document.querySelector('.descricao__ingresso');
    const campoSetor = document.querySelector('.descricao__setor');
    const campoDia = document.querySelector('.descricao__data');

    campoNome.innerHTML = informacoes.nome;
    campoIngresso.innerHTML = `Tipo: ${informacoes.ingresso}`;
    campoSetor.innerHTML = `Setor: ${informacoes.setor}`;
    campoDia.innerHTML = `Dia: ${informacoes.dia}`;

    console.log(localStorage)
})