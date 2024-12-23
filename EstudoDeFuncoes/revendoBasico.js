let valor = 10
function incrementar(){
    valor ++
}

incrementar()
console.log(valor)

function mostrarNome(nome){
    console.log(nome)
}

mostrarNome('juan')

function somar(num1, num2){
    let resultado = num1 + num2
    return resultado
}

const numeros = somar(2,2)

const multiplicar = (num1, num2) => num1 * num2


let multi = multiplicar(8,9)

console.log(multi)