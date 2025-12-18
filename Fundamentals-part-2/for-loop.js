////////////////////////////////////////////////////////////////////////////
// looping arrays, breaking and continuing
// loop for
/*
const rafael = [
    'Rafael',
    'Araujo',
    2025 - 1992,
    'Web Developer',
    ['Coding', 'Reading', 'Gaming'],
    true
];
const types = [];


// ====== i representa a variável legado de contagem ======= //

//   Inicialização // Condição    // Expressão final ou incremento
for(let i = 0; i < rafael.length; i++) {
    // lendo o valor do i baseado no array rafael[]
    console.log(rafael[i], typeof rafael[i]);

    // preenchendo o array types[] com o valor da variável de contagem i aplicada ao array rafael[]
    // types[i] = typeof rafael[i];

    types.push(typeof rafael[i]);
}

console.log(types);

const years = [1992, 1997, 2002, 2007];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);


// continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < rafael.length; i++) {
    if(typeof rafael[i] !== 'string') continue;
    // Se o tipo do atual elemento (rafael[i]) não for string, continue para o próximo elemento
    // Em nosso elemento atual, possuímos valores que não são strings, então iremos ignora-los na iteração.

    console.log(rafael[i], typeof rafael[i]);
}
console.log('---- ONLY NUMBERS ----');
for (let i = 0; i < rafael.length; i++) {
    if(typeof rafael[i] === 'number') break;
    // Aqui, se o tipo do atual elemento iterado dentro do array (rafael[i]) for exatamente um número, paramos a iteração sem imprimi-lo.


    console.log(rafael[i], typeof rafael[i]);
}

*/


const rafael = [
    'Rafael',
    'Araujo',
    2025 - 1992,
    'Web Developer',
    ['Coding', 'Reading', 'Gaming'],
    true
];

for (let i = rafael.length - 1; i >= 0; i-- ) {
    console.log(i, rafael[i]);
}