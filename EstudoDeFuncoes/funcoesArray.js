
// Função para dobrar valores de um array
let numeros =[34,5,67,898,9 ]

const dobrarValores = numeros.map(function( elem ){
    return elem * 2
})

// console.log(dobrarValores)


//Conversor de farenheit pra celsius
const farenheit = [0, 32, 45, 50, 75, 80, 120]

const celsius = farenheit.map( function(elem){
    return Math.round( (elem - 32) * 5/9 )
})

// console.log(celsius)

//Removendo elementos duplicados de um array com Filter

const duasCaras = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const umaCara = duasCaras.filter( (elem, index, arr) => arr.indexOf(elem) == index)

console.log(umaCara)