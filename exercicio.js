
// 01
/*let nome = prompt("Qual o seu nome? ")

const novo_nome = document.createElement('h1')
novo_nome.innerHTML = `Seja bem Vindo(a), ${nome}!👋`
document.querySelector('body').appendChild(novo_nome)*/

// 02

function ligar() {
    document.getElementById('lampada').src = 'lampada_acesa.jpg'
}

function desligar() {
    document.getElementById('lampada').src = 'lampada.jpg'
}
