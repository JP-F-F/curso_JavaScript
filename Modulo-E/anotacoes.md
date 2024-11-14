# Repetições/Laços de repetição

## Falando um pouco de estruturas de controle:

**sequencias**: que básicamente são blocos de códigos que acontecem numa sequencia específica.

**condições**: básicamente são testes para saber o que se fazer em casos que não se pode fazer uma sequencia especifica, pois há mais de um possivel caminho ou resultado.

**repetições**: assim como nas condições ele tambem testa o resultado, caso o resultado seja true ele executar o bloco de código e depois vai voltar para a condição, até que ela seja false, e quando isso ocorrer ela vai sair do bloco sem realiza-lo, assim terminando o loop 

O _WHILE_ é considerado uma **estrutura de repetição com teste logico no inicio**, pois ele realiza primeiro um teste e depois o bloco.

Podemos também fazer o _contrario_ usando o **do** primeiro e depois o **while**

### Estruturas de repetição com váriaveis de controle

Nesse tipo de estrutura acontecem _Tres coisas principais:_
    1 - Inicialização;
    2 - Teste lógico;
    3 - Incremento;
Se o teste lógico for verdadeiro ele vai realizar o bloco, vai voltar pro teste e assim incrementar.

O **For** tem as três partes _ditas acima_
ficando assim **for(inicio; teste; incremento)**
#### inicio:
A variavel que sera utilizada no teste lógico _EX: c = 0_
#### teste:
O teste lógico que falidará se o bloco de código deve ser realizado _EX: c<=23_
#### Incremento:
O incremento da váriavel usada no começo do teste _EX: c++_

##### curiosidade
Para usarmos _emojis_ no JS a gente pega o **codigo** do emoji e escreve ele assim _\u{1f603}_

##### importante
Podemos criar elementos html com o comando document.createElement('tag a ser criada') geralmente se atribui isso á uma variavel