let verifybtn = document.querySelector("#verify")
let img = document.querySelector("#foto")

verifybtn.addEventListener("click", verify)

function verify() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector("#txtano")
    let res = document.querySelector("#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 18) {
                img.src = 'homemkid.png'
            } else if (idade < 65) {
                img.src = 'homemadulto.png'
            } else {
                img.src = 'grandpa.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
         if (idade < 18) {
             img.src = 'girlkid.png'
            } else if (idade < 65) {
             img.src = 'woman.png'
            } else {
             img.src = 'grandmother.png'
         }
                }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}