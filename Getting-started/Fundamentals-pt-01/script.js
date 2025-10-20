// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// let firstName = "Rafael";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// firstName = 'Rafael';
// console.log(firstName);
// if (firstName === 'Rafael') {
//     console.log('Rafael is a good name!');
// }

const continent = 'South America', country = 'Brazil', city = 'Fortaleza', population = 2578412;

const populationFormated = population.toLocaleString('pt-BR');
console.log(populationFormated);

console.log(`I´m from ${continent} and I live in ${city}, ${country}.`)
console.log(`The population of ${city} is ${populationFormated}. Currently, ${city} has the fourth largest population in ${country}.`);