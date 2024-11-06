
//exemplo de condição simples
var vel = 50
console.log(`A velocidade do seu carro é ${vel}km/h`)
if(vel > 60){
    console.log('você atropelou uma velha... PARABENS')
}
console.log('dirija com cuidado')

//---------------------------------------------------------------
//EXEMPLO DE CONDIÇÕES COMPOSTAS
var pais = 'Britanico'
if (pais == 'Brasil'){
    console.log('Brasileiro, aeeee caba safado')
}else{
    console.log('gringo otario KKKKK')
}
//-----------------------------------------------------------

//EXEMPLOs DE CONDIÇÕES ANINHADAS

var idade = 90
if (idade < 16){
    console.log('Não vota')

}else if(idade < 18 || idade > 67){
    console.log('Não vota obrigatoriamente')

}else{
    console.log('VOTE VOTE AGORA')

}

//EXEMPLO 2

var hora = 17
console.log(`Agora são ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia flor do dia')
}else if (hora > 12 && hora < 18){
    console.log('Boa tarde')
}else{
    console.log('Boa Noite')
}
//----------------------------------------------------------

//EXEMPLO DE CONDIÇÕES MULTIPLAS
var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Dom')
        break
    case 1:
        console.log('Seg')
        break
    case 2:
        console.log('Ter')
        break
    case 3:
        console.log('Qua')
        break

}