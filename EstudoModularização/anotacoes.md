# O JS em módulos Usando o EXPORT e o IMPORT

A ideia de usar o JS em módulos é que assim podemos quebrar nosso código em pequenas partes, pra assim importarmos essas funcionalidades em outras aplicações, facilitando assim a manutenção e leitura de código.
O foco principal dessa tecnologia é a possibilidade do **maior reaproveitameto de código**.
Básicamente um módulo concentra pedaços de código dentro deles, podendo assim reutilizar um módulo dentro de outro ou em outros arquivos, _Os módulos são os arquivos JS_

Detalhe importante caso nós estejamos usando uma página web(HTML) junto do JS, precisamos informar na tag _SCRIPT_ que estamos usando importações, para que assim o navegador e etc recebam corretamente a informação, para isso nós colocamos o atributo _TYPE="MODULE"_.

**Principais regrinhas para a utilização de módulos**

Nós precisamos que a nossa aplicação esteja rodando dentro de um servidor, a extensão do live server também serve pra isso.


**O que são os módulos em JS?**

Básicamente é importar e exportar funcionalidades entre arquivos, Podendo assim reutilizar códigos.

**Os dois tipos de exportação**

_Tipo 1:_ A exportação padrão que é feita usando o _EXPORT DEFAULT seguido por aquilo que queremos exportar_. Nessa exportação nós precisamos declarar o nome que vai receber o valor dessa váriavel.

_Tipo 2:_ E a exportação comum que é feita somente com o _EXPORT e o nome da váriavel_. Nessa forma de exportação Nós obrigatoriamente precisamos usar o nome que demos pra funcionalidade exportada.

E caso estejamos exportando uma classe nós declaramos isso após o default ou o export com o _CLASS_.

**A importação**

Já para importarmos algo nós usamos a declaração _IMPORT_, e dependendo do tipo de export, caso estejamos usando o export default o nome que estamos usando na exportação não precisa necessáriamente ser o mesmo na importação já que estamos exportando o _valor_, depois de colocarmos o nome da váriavel importada nós indicamos de que arquivo aquela informação está sendo importada com o _FROM_, **EX: import banana from fruteira;**.
Já no caso de estarmos fazendo uma exportação sem o default, nós colocamos dentro de chaves caso seja uma função e colocamos o exato mesmo nome da função.

Dá pra importar mais de uma função na mesma chaves é só separar os nomes das funções com vírgula.

Nós podemos colocar apelidos nós nossos imports usando o _AS_. **EX: import{expremerAlgumaFruta as Expremer} from 'Utensilios.js';**