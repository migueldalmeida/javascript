let nota1 = Number(prompt('DIgite a nota 1'))
let nota2 = Number(prompt('DIgite a nota 2'))
let media = (nota1 + nota2) / 2
if (media >= 7) {
    alert(`Aprovado! Sua media foi de ${media.toFixed(1)}`)
}
else if (media >= 5) {
   alert(`Voce esta de recuperacao! Sua media foi de ${media.toFixed(1)}`)
}
else {
    alert(`Voce foi reprovado! Sua media foi de ${media.toFixed(1)}`)
}