//código tradicional do percurso em vetores
var num = [5, 8 ,2, 3, 0]
num.sort()
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//for do ECMAscript para váriaveis compostas
var valores = [2, 4, 6]
for( let pos in valores){
    console.log(valores[pos])
}

// funções

function parImpar(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

let resultado = parImpar(4)
console.log(`O numero é ${resultado}`)

//--------------------------------------
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2, 2))

let v = function(x){
    return x*2
}

console.log(v(8))
