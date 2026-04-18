//ex 01

let nome = window.prompt('Qual e o seu nome?')
window.alert (`Ola, ${nome}! Seja bem-vindo!`)

//ex02

let n1 = Number(window.prompt('Escreva um numero'))
let n2 = Number(window.prompt('Escolha outro numero'))
let soma = n1 + n2
window.alert(`A soma entre os dois numeros e ${soma}`)

//ex03

let resultado = Number(window.prompt('Quanto voce tirou na prova?'))
if (
    resultado >= 6 ) { 
        window.alert('Aprovado!')
    }  else { window.alert('Reprovado!')
        }
        window.alert(`Voce tirou ${resultado} na prova`)

//ex04

let sname = window.prompt('What is your name?')
let age = window.prompt('How old are you?')
let home = window.prompt('Where do you live?')
window.alert(`${sname} is ${age} and lives in ${home}`)

//ex05

let numb = Number(window.prompt('Say a number'))
if (
    numb >= 10 ) {
    window.alert('Maior que 10!')
    } else {window.alert('Menor que 10!')}

//ex06

let nomes = prompt('Insira seu nome')
let idadess = Number(prompt('Insira sua idade'))
if ( 
    idade >= 18) {
        alert(`${nomes}, voce tem ${idadess} anos e e maior de idade`)
    }
    else {alert(`${nomes}, voce tem ${idadess} anos e e menor de idade`)}

    //ex07

let numero = Number(prompt('Digite um numero'))
esque = numero >= 0 ? 'positivo' : 'negativo'
 alert(`O numero ${numero} e ${esque}`)

//ex08

let salario1 = Number(prompt('Qual o Salario da pessoa 1'))
let salario2 = Number(prompt('Qual o Salario da pessoa 2'))
let salario3 = Number(prompt('Qual o Salario da pessoa 3'))
let media = (salario1 + salario2 + salario3) / 3
alert(`A media de salarios e ${media.toFixed(2)}`)

//ex09

let ysalario = Number(prompt('Qual o seu salario?'))
let formatacao = ysalario.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
alert(`Voce recebe ${formatacao}`)

//ex10 

let valor = Number(prompt('Digite um valor'))
let porcentagem = valor * 0.75
alert(`75% de ${valor} e ${porcentagem}`)

//ex11

let praimp = Number(prompt('Digite um numero'))
if (praimp % 2 === 0) {
  alert('Par')
} else {
  alert('Ímpar')
}

let numeron = 7
if (numeron % 2 === 0) {
  console.log('Par')
} else {
  console.log('Ímpar')
}

//ex12

let num1 = Number(prompt('Digite o primeiro numero'))
let num2 = Number(prompt('Digite o segundo numero'))
if (num1 > num2) {
  alert(`O numero ${num1} e maior que ${num2}`)
} else if (num2 > num1) {
  alert(`O numero ${num2} e maior que ${num1}`)
} else {
  alert('Os numeros sao iguais')
}   

//ex13

let numA = Number(prompt('Digite o primeiro numero'))
let numB = Number(prompt('Digite o segundo numero'))
let numC = Number(prompt('Digite o terceiro numero')) 
if (numA > numB && numA > numC) {
  alert(`O numero ${numA} e o maior`)
} else if (numB > numA && numB > numC) {
  alert(`O numero ${numB} e o maior`)
} else if (numC > numA && numC > numB) {
  alert(`O numero ${numC} e o maior`)
} else {
  alert('Os numeros sao iguais')
}

//ex14 
 
let idades = Number(prompt('Quantos anos voce tem?'))
let temCarteira = prompt('Voce tem carteira de motorista? (sim/nao)')
let acesso = idades >= 18 && temCarteira == 'sim'? 'Pode dirigir':'Nao pode dirigir'
alert(`${acesso}`)

ex//15

let idade = Number(prompt('Quantos anos voce tem?'))
let preco = Number(prompt('Quanto dinheiro voce tem?'))
let idademin = 16
let precoJogo = 60
let comprar = idade >= idademin && preco >= precoJogo? 'Pode comprar':'Nao pode comprar'
alert(comprar)

ex// 16





  





    






    





