"use strict";

// // Default Parameters

const bookings = [];

// ES6 default parameters assigment on numPassengers and price
// The default values accept any expression that can be evaluated.
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5 default parameters assigment
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", undefined, 1000);

//==============================================================================\\

const flight = "LH234";
const rafael = {
  name: "Rafael Araujo",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Check in successful!");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, rafael);
console.log(flight);
console.log(rafael);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(rafael);
checkIn(flight, rafael);

//=========================================================\\

// // First Class and High-order functions