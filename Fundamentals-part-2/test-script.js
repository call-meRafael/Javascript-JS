/*
// 1 Crie uma função que receba dois números e retorne sua soma.
const num1 = 5;
const num2 = 3;
function somaSimples(num1, num2) { // Função declarada com dois parâmetros. 
    return num1 + num2; // Função retorna o valor da soma dos dois parâmetros.
}

console.log(somaSimples(5, 3));
console.log(somaSimples(num1, num2));


// 2 Desenvolva uma função que receba um número e retorne true (se for divisível por 2) ou false caso contrário.

const ePar = function (num) {  // Expressão de Função - A variável ePar recebe uma função anônima.
    //return num % 2 === 0;
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ePar(10));


// 3 Faça uma função que receba um nome e retorne uma string como "Olá, [nome]!".

function Ola(nome) { // Função declarada com um parâmetro.
    return `Olá, ${nome}!`;
}
console.log(Ola('Milena'));

const saudacao = (nome) => `Olá, ${nome}!`; // Arrow function com um parâmetro
console.log(saudacao('Rafael'));


// 4 Crie uma função que multiplique um número por outro.

function multiplicar(num1, multiplicador) {
    return num1 * multiplicador;
}

console.log(multiplicar(5));
console.log(multiplicar(5, 3));



// 5 Faça uma função que recebe uma string e retorna o número de caracteres dessa string.

const contaChars = function (texto) {  // Função anônima atribuida a uma variável.
    return texto.length;
}

console.log(contaChars('JavaScript'));



// 6 Desenvolva uma função que verifique se uma pessoa é maior de idade ou não.

const verificarIdade = (idade) => {  // Arrow function com um parâmetro e teste condicional.
    if (idade >= 18) {
        return 'Maior de idade', true;
    } else {
        return 'Menor de idade', !true;
    }
}

console.log(verificarIdade(10));


// 7 Crie uma função que recebe um número e retorna um array com a tabuada de 1 a 10 (ex: [2, 4, 6,..., 20] para 2)

*/



/*
// 1 - Crie uma função que receba dois números e retorne a subtração do segundo pelo primeiro.

function subtrair(first, second) {  // Função declarada com dois parâmetros.
    return second - first;  // operação de subtração requerida. (segundo - primeiro)
}

console.log(subtrair(4, 10));



// 2 - Crie uma função que receba uma base e um expoente (sempre 2 para quadrado) e retorne base elevado a 2.

const quadrado = function (base) {
    return base * base;
}

console.log(quadrado(4));



// 3 - Crie uma função que receba dois números e retorne uma string como "Soma: [número1 + número2]".

const concatenaSoma = (num1, num2) => `A soma do número ${num1} e do número ${num2} é: ${num1 + num2}.`;    // Arrow Function com dois parêmetros e uma string concatenada através de template literals.
console.log(concatenaSoma(3, 7));






// 4 - Crie uma função que receba dividendo e divisor; se o divisor for 0, retorne "Erro: Divisão por zero"; se não, retorne o quociente da divisão.

function divisaoSegura (dividendo, divisor) {
    if (divisor === 0) {
        return 'Erro: Divisão por zero';
    } else {
        return dividendo / divisor;
    }
}
console.log(divisaoSegura(100, 2));
console.log(divisaoSegura(100, 0));





// 5 - Crie uma função que receba uma temperatua em graus Celsius e retorne "Quente" se for maior que 30, "Frio" se for menor que 10 ou "Agradável" caso contrário.



const avaliarTemperatura = function (temperatura) {
    if (temperatura > 30) {
        return 'Quente! Hidrate-se bastante.';
    } else if (temperatura < 10) {
        return `Frio! Lá fora está fazendo ${temperatura}°C, vista-se adequadamente.`;
    } else {
        return 'Agradável! Aproveite o clima ameno.';
    }
}
console.log(avaliarTemperatura(8));
console.log(avaliarTemperatura(22));






// 6 - Desenvolva uma função que receba uma senha (string) e retorne true se tiver mais de 6 caracteres, senão, retorne false.


const verificarSenha = (senha) => {
    if (senha.length > 6) {
        return true;
    } else {
        return false;
        
    }
}
console.log(verificarSenha('123abcd'));
console.log(verificarSenha('abc'));





// 7 - Crie uma função que recebe valor de compra e tipo de cliente ("premium" ou "normal"); aplique 20% de desconto para premium, 10% de desconto para normal e retorne o valor final.


function aplicarDesconto (valor, tipo) {
    if (tipo === 'premium') {
        return valor * 0.8;
    } else {
        return valor * 0.9;
    }
}

console.log(aplicarDesconto(1000, 'premium'));
console.log(aplicarDesconto(1000, 'normal'));





// 8 - Crie uma função que receba três lados(a,b,c); retorne "Equilátero" se todos iguais, se dois iguais, "Escaleno" senão.

const tipoTriangulo = function (a, b, c) {
    if (a === b && b === c) {
        return 'Equilátero';
    }  if (a === b || a === c || b === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

console.log(tipoTriangulo(3, 3, 3));
console.log(tipoTriangulo(3, 3, 5));
console.log(tipoTriangulo(3, 4, 5));


*/


// 1 - Crie uma função que recee um número e retorne uma string informando se é "positivo", "negativo" ou "zero".

function classificarNumero (numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else if (numero === 0){
        return 'Zero';
    } else if (typeof numero !== 'number') {
        return 'Entrada invalida! Por favor, insira um número.';
    } 
}

console.log(classificarNumero(10));
console.log(classificarNumero(-5));
console.log(classificarNumero(0));



// 2 - Crie uma função que recebe a idade e retorna true se for maior de 18 anos, false se não.
const checkIdade = 16;
function podeDirigir (idade) {
    typeof idade === 'number' && idade >= 0;
    if (idade >= 18) {
        console.log(`${checkIdade} anos`)
        return true;
    } else {
        console.log(`${checkIdade < 18 ? 'Não pode dirigir!' : 'pode dirigir!' }`)
        return false;
    }
       
}


console.log(podeDirigir(checkIdade));