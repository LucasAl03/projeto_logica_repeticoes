//Pegando elemenos do DOM
const divFor = document.querySelector('#div-for')

//Estruturas de Repetições
//for(i = 10; i < 10; i++){
    //console.log(i)
    //divFor.innerHTML += `${i} <br>`
//}

//Contador e Acumulador
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0, contPar = 0, contImpar = 0
let acum = 0.0

btnNum1.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum1.value)

    //Declração de Contador
    cont++
    //Declaração de Acumulador
    acum += numDigitado
    //acum -= numDigitado para subtrair

    //numDigitado % 2 == 0 significa se o num Digitado dividido por dois sobra 0
    if(numDigitado % 2 == 0){
        contPar++
    }else{
        contImpar++
    }

    console.log(numDigitado)

    divResult.innerHTML = `Total de números digitados ${cont} <br> A soma dos números digitados ${acum} <br> Par digitado: ${contPar} <br> Ímpar digitado: ${contImpar} <br>`
    divFor.innerHTML += `${numDigitado} <br>`
})

//Repetição com While
const inputFrase = document.querySelector('#msg')
const inputNumRepeticao = document.querySelector('#numRepeticao')
const btnExibir = document.querySelector(`#btn-exibir`)
const divResultFrase = document.querySelector(`#result-frase`)

let contFrase = 0
let totalRepeticao = Number(inputNumRepeticao.value)

btnExibir.addEventListener('click', (evt)=>{
    while(totalRepeticao > contFrase){
        divResultFrase.innerHTML = `${inputFrase.value} <br>`

        contFrase++
    }
})