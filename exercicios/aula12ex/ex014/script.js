function carregar () {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       //BOMDIA 
       img.src='manha.png'
       document.body.style.background = '#EECE94'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src='tarde.png'
        document.body.style.background = '#DC7E25'
    } else {
        //BOA NOITE!
        img.src='noite.png'
        document.body.style.background = '#042F5A'
    }
}