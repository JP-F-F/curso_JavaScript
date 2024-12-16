# Váriaveis compostas

## A principal diferença entre váriaveis simples e váriaveis compostas

_Váriaveis simples_ só conseguem aramzenar **um valor** por vez.
_Váriaveis compostas_ são capazes de armazenar **vários valores** em uma mesma estrutura.
_Exemplo de Declaração de um **Vetor**:_ let num = [1, 2, 3, 5]

E como raios nós **adicionamos valores** num array sem perder os valores que já estão lá? Simples nós digitamos o nome da váriavel e em seguida entre conchetes a posição a ser preenchida _EX: num[4] = 5_.
Já uma forma mais simples de fazer isso _sem se preocupar em especificar_ a posição do array, nós usamos o comando **num.push(valor)**
Outro comando **bem útil** é o _.sort_ esse comando básicamente vai colocar os valores dentro do array em ordem crescente.
Outro comando útil que serve para _Buscar valores dentro de um vetor_ é o **.indexOf(valor a se procurar)**

##### Um loop do ECMAscript

O ECMAscript tem uma versão do _for_ para váriveis compostas, que serve para simplificar muitos processos.
_ele funciona da seguinte maneira:_ for(let indice in num){ código a se realizar}

# Funções

As _Funções_ são ações executadas assim que são chamadas ou em decorrência de algum evento. 
Elas também podem receber parâmetros e retornar resultados.
**É possível fazer uma váriavel receber uma função como "valor"**

### O que toda função pode ter?

**Chamada**: Essa seria a ordem o "Eventou" que ativa a função.
**Parâmetro**: Nem toda função tem mas muitas tem esses valores de entrada.
**Ação**: É o que a função deverá realizar.
**Retorno**: É o que deve se retornar na função.