# O que é uma função?

Simples, **é um bloco de código que só é executado quando é chamado/invocado**, seja pelo click dum botão, o apertar de uma tecla e por aí vai.

## E como Chama essas função?

Simples também, basta apenas nos escrevermos o nome da nossa function + os parênteses na frente _EX: somar()_ e caso a função invocada seja do tipo que recebe parâmetros a gente passa ele nos parênteses.

# Tipos de Funções

_Função void(Vazia)_: Básicamente uma função que não tem retorno, que não retorna nada.

_Função com Parâmetro(s)_...É uma função que recebe parâmetros... não tem muito mistério aqui.

_Função Return_ É uma função... que tem retorno.. sabe, ela retorna algo.

_Função Arrow/Arrow Function_ As funções de flecha/seta, ela geralmente é definida numa variável, é como se pegassem uma função comum e a separassem em partes ela fica básicamente assim: _nome da função que é uma váriavel(**let somar**), dps vem os parâmetros que ficam depois de um igual ( **= ()** ) e por ultimo o bloco de código  que vai dps da seta (**=>{código aqui}**).
Juntando tudo isso fica básicamente assim _let somar = () => {}_.
Um detalhe legal sobre essas funções é que nós não precisamos necessáriamente colocar as chaves, se após a seta (deixando oq queremos na mesma linha que a seta) nós apenas colocarmos o que queremos que a função faça, ela automaticamente vai fazer um return com aquilo.

# metodos de *Arrays*

O metodo **map**: nós usamos o map quando é necessário Traduzir ou mapear todos os elementos de um array pra outro conjunto de Valores. Essa função _não altera os valores originais do array_, portanto precisamos colocar os novos valores em outra váriavel. Com o map podemos realizar uma função usando cada valor do array.

O metodo **filter**: Se usa o filter quando é necessário remover elementos indesejados com base em algumas condições. Ou seja o filter vai percorrer o array checando cada valor pra ver se ele se enquadra nos requisitos.

O metodo **reduce**: Se usa o reduce quando precisarmos encontrar um valor cumulativo concatenado, aparentemente é bem útil para se usar com objetos meio complexos. Ou seja a gente pode usar esse metodo para somar os valores dentro de um array e retornar o resultado dessa soma. Meio que a gente pega uma serie de elementos e reduzimos a uma coisa só. Esse metodo **_recebe dois valores_** Sendo eles o _prevVal_ que é o valor anterior e o _elem_ que é o elemento atual/ valor atual (os nomes das variaveis não precisam ser esses).

O metodo **every**: Se usa o every quando precisamos testar se todos os elementos de um array passam por um teste em específico. Ela se parece como filter mas tem suas diferenças. Tendo como principal diferença que enquanto o _filter_ retorna um novo array o _every_ retorna um valor booleano. Esse valor booleano vai ser _false_ caso um dos valores do array não passe no teste lógico e _true_ caso todos os valores passem.

O metodo **some**: usa se o some quando é preciso testar se pelo menos um elemento dentro do array passa num teste específico. É tipo um every so que com a lógica contraria.

O metodo **find**: Se usa o find quando se precisa procurar ou verificar por um valor dentro de um array ou objeto, esse metodo retronara o primeiro valor que satisfazer o teste.

O metodo **includes**: Se usa o includes quando for preciso saber se um determinado array ou objeto possui um valor ou elemento em especifico. Esse metodo retorna um valor booleano.