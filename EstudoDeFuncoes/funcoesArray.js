
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

//console.log(umaCara)

//somando valores de um array com o Reduce

const rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }

]

//esse 0 aí está definindo que a contagem desse reduce começa em zero
const totalLaunches = rockets.reduce(( prevVal, elem ) => prevVal + elem.launches, 0)

//console.log(totalLaunches)

// verifcando valores de um array com o every

const verificador = [ 12, 3, 8, 130, 44]

//console.log(verificador.every(elem => elem > 10)) 

//verificador de idades

const tchurma = [
    {id: 12, name: 'Frederico', age: 8},
    {id: 12, name: 'Francisca', age: 7},
    {id: 12, name: 'Freddie', age: 48},
    {id: 12, name: 'Fabricia', age: 52}
]

//console.log(`o resultado é ` + tchurma.every(p => p.age >= 18))

// Verificador de numeros primos com o Some()

function numsPrimo( value ){
    for (let i = 2; i < value; i++){
        if(value % i == 0){
            return false
        }
    }

    return value > 1
}

const arrayPrimo = [6, 8, 11, 14, 42]

//console.log( arrayPrimo.some(numsPrimo))

//Verificador de condições em valores/objetos com some

const team = [
    {id: 12, nome: 'topper Harley', pilot: true},
    {id: 44, nome: 'Ramada Thompson', pilot: true},
    {id: 59, nome: 'Pete Thompson', pilot: false},
    {id: 122, nome: 'Kowalski', pilot: false},
]

// console.log( team.some(person => person.pilot))

//Procurando pizzas com o find()

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

const foundPizza = pizzas.find(p => p.startsWith('m')) 

//console.log(foundPizza)

//buscando frutas com o find

const frutas = [
    {name: 'jaca', quantidade: 2},
    {name: 'banana', quantidade: 0},
    {name: 'cereja', quantidade: 5}
]

const findFrutas = frutas.find(fruta => fruta.name == 'cereja')

//console.log(findFrutas)

// usando o includes

//console.log( [1, 2, 3, 4].includes(NaN))

const pessoas = ['Adamastor', 'Joana', 'Mauricio', 'Laulau' ]

//console.log( pessoas.includes('Joana'))

const pessoas2 = [
    {id: 11, name: 'Adamastor', age: 23, group: 'editor'},
    {id: 47, name: 'Joana', age: 28, group: 'user'},
    {id: 85, name: 'Mauricio', age: 34, group: 'editor'},
    {id: 97, name: 'Lalau', age: 74, group: 'admin'}
]

const filteredUsers = pessoas2.filter( p => p.name.includes('au'))

//console.log(filteredUsers)