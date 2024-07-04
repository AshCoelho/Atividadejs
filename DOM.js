
document.getElementById("olá").innerHTML = "hello world"
document.getElementById("olá").style.background = "red"
const centrais = document.getElementsByClassName("centralizar")

centrais[0].style.textAlign = "center"
centrais[1].style.textAlign = "center"

for ( var i = 0; i < centrais.length; i++) {
    centrais[i].style.backgroundColor = "blue"
}

const btn_aviso = document.querySelector('#btn_aviso')
btn_aviso.addEventListener('click', function() {
    alert('oi')
})

const novo = document.createElement('img')
novo.src = "https://picsum.photos/200/300?random=1"
novo.style.border = "1px solid black"
novo.setAttribute('title', 'inserido')
document.querySelector('body').appendChild(novo)