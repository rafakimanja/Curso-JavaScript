function Tabuada(){

    let num = document.getElementById('numero').value
    let res = document.querySelector('select#seltab')

    let n = Number(num)

    if(n == 0){
        alert('Digite um numero')
    }else{

        res.innerHTML = ''

        for(let i=0; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${i*num}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    }
    
}