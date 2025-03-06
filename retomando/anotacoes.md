# Curso de JavaScript do canal programação web

## Aula 1 - JS interno e externo

O JS no geral só funciona com 100% do seu Potencial se usado com páginas HTML.

### As duas formas de colocar JS numa página web

_-- O JS interno:_ Nesse meio nós básicamente colocamos _uma tag script_ no _body_ da nossa página e _dentro dessa tag_ escrevemos o código JS.

_-- O JS externo:_ É o JS que ficara em um _arquivo separado_, que se conecta com a página HTML _atráves da tag script_ com o **parâmetro src** e nome do arquivo JS, EX: < script src:"java.js">

**Detalhe importante** sempre deixar a tag script na linha superior a tag de fechamento do body.
A sim nós podemos ter mais de um arquivo JS ligado a nossas páginas

## Aula 2 - Tipos de _Saída_

_-- Usando o InnerHTML:_ Esse metodo bascicamente altera o HMTL de uma tag, podendo preencher a tag com informações, nesse metodo é possível colocar outras tags dentro dos dados passados e etc(como < b> e etc).

_-- Document.write:_ nós podemos usar esse metodo com uma tag script dentro da tag que queremos escrever algo. Esse metodo também aceita que tags HTML sejam colocadas dentro do texto. 
Esse metodo também faz contas e mostra váriaveis.
**Detalhe importante do Document.write** Esse metodo geralmente é usado mais para testes, meio que ele não é a forma ideal de se mostrar algo no seu site.
