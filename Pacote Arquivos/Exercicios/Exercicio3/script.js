function Contagem(){

    let init = document.getElementById('inicio').value 
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value 
    let resp = document.querySelector('div#contagem')

    if(init.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO] Faltam dados!')
        resp.innerHTML = 'Não é possível fazer a contagem!'
    }else{

        resp.innerHTML = 'Contagem: '

        let i = Number(init)
        let f = Number(fim)
        let p = Number(passo)

        if(i < f){
            for(let c = i; c <= f; c += p){
                resp.innerHTML += `${c} \u{1F449}`
            }    
        }else{
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += `${c} \u{1F449}`
            }
        }
        resp.innerHTML += '\u{1F3C1}'
    }

}