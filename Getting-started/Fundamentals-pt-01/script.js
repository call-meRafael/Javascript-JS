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

// const continent = 'South America', country = 'Brazil', city = 'Fortaleza', population = 2578412;

// const populationFormated = population.toLocaleString('pt-BR');
// console.log(populationFormated);

// console.log(`I´m from ${continent} and I live in ${city}, ${country}.`)
// console.log(`The population of ${city} is ${populationFormated}. Currently, ${city} has the fourth largest population in ${country}.`);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Rafael';
// const job = 'Full Stack developer';
// const birthYear = 1992;
// const year = 2037;

// const rafael = "i'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(rafael)

// const rafaelNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!!!`;
// console.log(rafaelNew)

// console.log(`String
//         with
//         multiple
//         lines`
// );

/* const age = 15;


if (age >= 18) {
    console.log('Sarah can start driving! 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah needs to wait ${yearsLeft} more years to start driving!`)
}

let century;
const birthYear = 1992;
if (birthYear <= 2000) {
    century = '20';
} else {
    century = '21';
}
console.log(century); */


// const age = 18;
// if (age === 18) console.log('You are old enough to drive!');

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Sarah is tired and need a break...');
// }

// SWITCH STATEMENT
/*
const day = 'friday';
if (day === 'monday') { // TRANSCRIBING THE SWITCH-CASE STATEMENT INTO IF-ELSE STATEMENT
    console.log('Plan my course structure');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day in our calendar');
}


switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day in our calendar');
}   

*/


// Statements and Expressions

// These are expressions which return a value and can be inserted in a statement
/*
3 + 4
1992
'Rafael'
true && false && !false
console.log('hello world!')

// This is a statement utilizing some of the types of expressions above ;
if (23 > 10) {
    const str = "I'm a string declared in a const variable inside an if statement!\n 23 is greater than 10.";
    console.log(str);
}

*/

/*
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water instead 🫗');

const drink = age >= 18 ? 'wine 🍷' : 'water 🫗';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🫗';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🫗'}`);

*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
