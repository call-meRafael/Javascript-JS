"use strict";

const bookings = [];

// On ES6, we can set default parameters directly in the function definition. If the value is not provided by an input, it will be set to the default value seted in the definition.
// We can also use the value of a previous parameter as part of an expression
const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers) {

  // ES5 syntax for default parameters
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

console.log("========================================================================");


const flight = 'LH234';
const rafael = {
  name: 'Rafael Araújo',
  passport: 123456789,
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    console.log('You are checked in!');
  } else {
    console.log('Wrong passport!');
  }

}

checkIn(flight, rafael);
console.log(flight);
console.log(rafael);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(rafael);
checkIn(flight, rafael);


console.log("========================================================================");

const oneWord = (str) => str.replace(/ /g, '').toLowerCase();
console.log(oneWord('Hello World!'));

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);

}
console.log();
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);



console.log("=======================EXERCISE==============================================");

const funcaoPrincipal = (callback) => {

  callback(processarNumero(5));
}

function processarNumero(numero, fn) {
  if (typeof numero !== 'number') {
    return 'O valor deve ser um número válido!';
  }

  if (numero > 0) {
    console.log(`O dobro do número é: ${numero * 2}`);
    
  } else if (numero < 0) {
    return 'O número não pode ser negativo!';
  }

  return `${fn(numero)} é o resultado da operação ${fn.name} com o número ${numero}`;
}

console.log(processarNumero(5));
console.log(funcaoPrincipal(processarNumero(5)));