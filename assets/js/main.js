import MaiorDeIdade from "./validar-idade.js";
import ehUmCPF from "./validar-cpf.js";

const campoDoFormulario = document.querySelectorAll("[required]")
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "ingresso": e.target.elements["ingresso"].value,
        "aniversario": e.target.elements["aniversario"].value,
        "cpf": e.target.elements["cpf"].value,
        "setor": e.target.elements["setor"].value,
        "dia": e.target.elements["dia"].value
    };

    localStorage.setItem("formulario", JSON.stringify(listaRespostas));

    window.location.href = '../ingressoComprado.html';

    // inserirInformacoes()
})

campoDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha com um nome válido.",
        tooShort: "Por favor, preencha com um nome válido."
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "Por favor, preencha com um email válido.",
        tooShort: "O campo de email não tem caractéres suficientes."
    },
    ingresso: {
        valueMissing: "O campo tipo de ingresso não pode estar vazio"
    },
    dia: {
        valueMissing: "O campo dia do evento não pode estar vazio"
    },
    setor: {
        valueMissing: "O campo setor não pode estar vazio"
    },
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior de 18 anos para se cadastrar.",
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha com um CPF válido.",
        customError: "O CPF digitado não existe",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "aniversario") {
        MaiorDeIdade(campo);
    } else if (campo.name == "cpf" && campo.value.length >= 11 && !campo.validity.patternMismatch) {
        ehUmCPF(campo);
    }

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.formulario-container__mensagem-erro');
    const validadorDosCampos = campo.checkValidity();

    if(!validadorDosCampos) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}