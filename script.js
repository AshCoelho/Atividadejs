

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let novoArray = []

array.forEach(function(numero) {
    if (numero % 2 === 0) {
        novoArray.push(numero)
    }
})

console.log(novoArray)

// questão 13 

let n1 = 10
let n2 = 5.5
let n3 = 4.9

function calMedia (n1, n2, n3) {
    calMedia = (n1 + n2 + n3)/3
    if (calMedia >= 7) {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Aprovado.`)
    } else if (calMedia >= 5 && calMedia < 7) {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Recuperação.`)
    } else {
        console.log(`Média ${calMedia.toFixed(1)}, resultado: Reprovado.`)
    }
}

calMedia(n1, n2, n3)

//14

let altura = 1.70
let peso  = 60

function calIMC (altura, peso) {
    calIMC = peso/(altura**2)
    if (calIMC <= 18.5) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Abaixo do Peso`)
    } else if (calIMC >= 18.5 && calIMC <=25) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Peso Ideal`)
    } else if (calIMC > 25 && calIMC <=30) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Sobrepeso`)
    } else if (calIMC > 30 && calIMC <=40) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Obesidade`)
    } else if (calIMC > 40) {
        console.log(`Seu IMC é ${calIMC.toFixed(0)}, resultado: Obesidade Mórbida`)
    }
}
calIMC(altura, peso)

//15

let valor = prompt("Digite um valor para a tabuada: ")

function Tabuada(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} X ${i} = ${valor * i}`)
    }
}

Tabuada(valor)

//  17




function CalViagem(distanciapercorrida) {

    let kmL = 9.8
    let litro = 5.24
    let distanciaCompleta = distanciapercorrida * 2 
    let litroTotal = distanciaCompleta / kmL
    let valorTotal = litroTotal * litro
    let resultado = valorTotal 

    console.log(`Para fazer ${distanciapercorrida}kms você deve abastecer R$${resultado.toFixed(2)}`)
}

CalViagem(2900)

// 18



function CalFatorial(fatorial) {
    let valorFactorial = 1
    for (let i = 1; i <= fatorial; i++) {
        valorFactorial *= i;
    }
    console.log(`O fatorial de ${fatorial} é ${valorFactorial}`)
}

CalFatorial(5)

// 19 

function somatorioArray(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 7)
    }
    console.log(newArray) 
}

let Array = [12, 36, 52, 77];
somatorioArray(Array)

// 20

let Identidade = false
let Motorista = false

if (Identidade || Motorista){
    console.log("pode fazer prova")
} else {
    console.log("não pode fazer prova")
}

// 21

var frutas = ["maça", "banana", "laranja"]
console.log(frutas[3])

// saída : undefined