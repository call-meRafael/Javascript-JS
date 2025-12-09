// getting started with Strict Mode
/* strict mode show us any error in our syntax making our code more secure. It's also preveent us from using undeclared variables and functions. Strict mode also prevent the usage of some variable names which are or will be reserved by the Javascript language.  */

/* 'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!'); */


// Functions
/*

function logger() { // function declaration without parameters
    console.log('My name is Rafael');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) { // function declaration with parameters(arguments)
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); /* our variable appleJuice will store the value returned from the function fruitProcessor when we call it with 5 apples and 0 oranges as arguments */ /*
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/


/*
// Function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(1992);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age1, age2);
*/

/*

// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, 'Rafael' ));

*/



// Function calling other Functions
/*
function cutPieces(fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) { // function declaration with parameters(arguments)
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/


// Reviewing functions
/*
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired.`);
      return -1;
    }
}


console.log(yearsUntilRetirement(1992, 'Rafael'));
console.log(yearsUntilRetirement(1950, 'Satoru'));

*/


// Arrays
/*
const friend1 = 'Jarbson';
const friend2 = 'Carlos';
const friend3 = 'Max';

const friends = ['Jarbson', 'Carlos', 'Max'];
console.log(friends);

// Exercise

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
const friends = ['Jarbson', 'Carlos', 'Max'];
friends.push('Milena');
console.log(friends);

friends.unshift('Jefferson');
console.log(friends);

// friends.pop();
const lastFriend = friends.pop();
console.log(friends, lastFriend);

const firstFriendOffset = friends.shift();
console.log(friends, firstFriendOffset);



console.log(friends.indexOf('Jarbson'));

if (friends.includes('Carlos')) {
    console.log('Carlos is in the friends list!');
}
*/

/*
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return `Your bill was ${bill.toLocaleString('us-US', {style: 'currency', currency: 'USD'})} and the tip is ${(bill * 0.15).toLocaleString('us-US', {style: 'currency', currency: 'USD'})}. Your total bill is ${(bill + (bill * 0.15)).toLocaleString('us-US', {style: 'currency', currency: 'USD'})}`;
    } else {
        return `Your bill was ${bill.toLocaleString('us-US', {style: 'currency', currency: 'USD'})} and the tip is ${(bill * 0.20).toLocaleString('us-US', {style: 'currency', currency: 'USD'})}. Your total bill is ${(bill + (bill * 0.20)).toLocaleString('us-US', {style: 'currency', currency: 'USD'})}`;
    }
}
const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];


console.log(bills, tips);
console.log(calcTip(40));

*/

/*
// .slice() and .splice()

const letters = ['A', 'B', 'C', 'D'];
const letters2 = letters.slice(-2);
const letters3 = letters.slice(0, -1);
console.log(letters, letters2, letters3);

const removeLetters = letters.splice(2, 1);
console.log(removeLetters);

*/

/*
function customMessage(name) {
    const fruits = ['apple', 'banana', 'orange'];
    fruits.push('pineapple');
    console.log(fruits);
    const message = `Hello ${name}! I'm Rafael, a Javascript developer.`;
    return `${message}  Would you like to drink a juice of ${fruits[3]} with me?`;
}

console.log(customMessage('Milena'));


*/



