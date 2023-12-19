
function carregar(){
    let atual = new Date()
    let hora = atual.getHours()
    let horario = document.querySelector("div#hora")
    let img = document.getElementById('imagem')

    horario.innerHTML = `<p>Agora são ${hora} horas</p>`

    if(hora >= 6 && hora < 12){
        img.src = 'imgs/manha.png'
        document.body.style.background = '#FFF2A6'
    }else if(hora <=18){
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#95B8F6'
    }else if(hora >= 0 && hora < 6 || hora > 18){
        img.src = 'imgs/noite.png'
        document.body.style.background = '#2D2C55'
    }
}







