let agora = new Date ()
let hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('Bom Madrugada!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora < 12) {
    console.log('Boa dia!')
} else {
    console.log('Boa noite!')
}