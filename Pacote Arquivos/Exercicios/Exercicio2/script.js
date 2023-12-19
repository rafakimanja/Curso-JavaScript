function Verificar(){
    
    let data = new Date()
    let ano = data.getFullYear()
    let ano_form = document.getElementById('ano')
    let res = document.getElementById('resp')

    res.style.textAlign = 'center'

    if(ano_form.value.lenght == 0 || ano_form.value > ano){
        alert('Você digitou um ano inválido')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(ano_form.value)
        let genero = ''
        
        if(fsex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }

        res.innerHTML = `Foi detectado um(a) ${genero} de ${idade} anos`
    }
}
