export default function MaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);

    if (!validaIdade(dataNascimento) && campo.value != "") {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date()
    const dataMaioridade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMaioridade
}