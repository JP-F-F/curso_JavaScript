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