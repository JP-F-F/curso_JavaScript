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