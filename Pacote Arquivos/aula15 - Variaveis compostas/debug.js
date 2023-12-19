let lista = [9, 4, 7, 1, 2]

lista.sort()

// for(let i=0; i<lista.length; i++){
//     console.log(lista[i])
// }

for(let i in lista){
    console.log(`Lista posição ${i}: ${lista[i]}`)
}