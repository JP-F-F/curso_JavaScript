function contar(){
    var inicio = document.getElementById('numi')
    var fim = document.getElementById('numf')
    var passo = document.getElementById('nump')
    let resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO} Faltam dados')
        resultado.innerHTML = 'impossivel contar'
    }else{
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(passo <= 0){
         window.alert('Passo invalido, considerando o passo como 1')
         p = 1   
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}