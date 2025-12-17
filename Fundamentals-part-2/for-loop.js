// loop for
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