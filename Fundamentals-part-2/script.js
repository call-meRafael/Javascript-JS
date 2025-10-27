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