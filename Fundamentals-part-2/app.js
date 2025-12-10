
// Crie uma função que receba dois números e retorne sua soma, incentivando você a refletir sobre como funções podem encapsular operações simples e reutilizáveis.

const resultado = function soma(num1, num2) {
    return num1 + num2;
}
// console.log(soma(5, 3)); 
console.log(resultado(-2, 2));


/* ----- Arrow function referente ao exemplo acima ----- */
const result = (num1, num2) => num1 + num2;

console.log(result(5, 3));

/* Desafio opcional: E se você adaptasse isso para somar idades de duas pessoas em um array? Crie um array com [25, 30], passe como parâmetro único e some os dois itens. */

const idades = [25, 30]
const somaIdades = function soma(idades) {
    return idades[0] + idades[1];
}
console.log(somaIdades(idades));

/* -------------------------------------------------------------------------------- */


/* 1 - Construa uma função que receba um nome e imprima uma saudação amigável, explorando como parâmetros tornam o código dinâmico e pessoal. */

// Analogia visual: Pense na função como um bilhete de boas-vindas em uma festa: você insere o nome do convidade (parâmetro), e ela gera a mensagem exata na hora, sem repetir trabalho manual.

function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo!`;
}

console.log(saudacao('Rafael'));

/* ------ Arrow function referente ao código acima incrementanto um segundo parâmetro e tornando o código mais limpo. ----- */
const saudacaoConvidado = (titulo, nome) => `Bem-vindo, ${titulo} ${nome}!`;
console.log(saudacaoConvidado('Lorde Comandante', 'Rafael'));


/* -------------------------------------------------------------------------------- */



/* 2 - Desenvolva uma função que devolva um número constante, destacando o poder do return para "exportar" resultados para outras partes do seu código. */

// Analogia visual: Essa função é como uma lata de refrigerante selada: você a "abre" (chama), e ela sempre entrega o mesmo conteúdo refrescante (o número), pronto para usar em qualquer receita.

const inteiro = function refrigerante() {
    return 33;
}
console.log(inteiro());


/* ----- Arrow function referente ao código acima ----- */
// Incrementado com o método Math.random() para gerar números aleatórios.
const sorteio = () => Math.random() * 10 +1;
console.log(sorteio());




/* -------------------------------------------------------------------------------- */



/* 3 - Monte um array simples e extraia um item específico, entendendo arrays como coleções ordenadas e acessíveis. */

// Analogia visual: Um array é como uma fruteira na cozinha: você enche com frutas variadas (itens como strings ou números), e acessa o que precisa sem derrubar tudo.


const frutas = ['maçã', 'banana', 'abacaxi', 'uva'];
console.log(frutas);
console.log(frutas.indexOf('uva')); // checando se o array contém um determinado item
frutas.push('laranja'); // adicionando um item ao final do array
console.log(frutas);


/* ----- Aplicando uma Arrow function ao array do execício anterior ----- */ 
const frutaFavorita = (frutas) => `Minha fruta favorita é ${frutas[0]}.`;
console.log(frutaFavorita(frutas));



/* -------------------------------------------------------------------------------- */

/* 4 - Crie um array numérico, busque o menor valor dentro dele e retorne-o. Você pode usar o método Math.min() para encontrar o menor número dentro de um array simples. */

// Analogia visual: Como um boletim escolar: o array numera uma série de notas de uma avaliação, e você movimenta, extrai, insere e manipula os itens (notas) conforme a necessidade.

const notas = [7, 9, 5, 8];
const menorNota = Math.min(...notas).toFixed(1); // Utilizando o operador de propagação (spread operator - ...) para extrair o menor número da lista de notas.
console.log(notas, menorNota);



/* ----- Aplicando uma Arrow function ao nosso array de notas e atribuindo a menor nota ao resultado ----- */
const notaFinal = (notas) => `Você obteve nota ${Math.min(...notas).toFixed(1)} nessa avaliação, estude mais!`;
console.log(notaFinal(notas));




/* -------------------------------------------------------------------------------- */

/* 5 - Contrua um array inicialmente vazio, adicione e remova itens, explorando como o método .push() e .pop() funcionam em arrays. */


// Analogia visual: Push e pop são como uma pilha de pratos: você adiciona ao topo (.push) e retira do topo (.pop) pratos conforme a necessidade.

const pratos = [];
pratos.push('macarronada');
pratos.unshift('lasanha');
console.log(pratos);

let pratoRemovido = pratos.pop();
console.log(pratos, pratoRemovido);
pratoRemovido = pratos.push('Baião de dois');
console.log(pratos, pratoRemovido);


/* -------------------------------------------------------------------------------- */

/* 6 - Passe um array e receba um sinal se ele precisa de "recarga", praticando condições lógicas simples em funções. */

// Analogia visual: Imagine a função como um alarme de geladeira vazia: ela "olha" dentro do array (parâmetro) e te abisa se está vazio ou cheio de suprimentos (retorna true ou false).


let suprimentos = ['aspirina', 'anti-inflamatório'];
let verficarSuprimentos = (suprimentos) => {
    if (suprimentos.length === 0) {
        return false && 'Você precisa abastecer!';
    } else if (suprimentos.length > 0) {
        return true && `No momento, você possui ${suprimentos[0]} e ${suprimentos[1]} no estoque.`;

    }
}

console.log(verficarSuprimentos(suprimentos));

