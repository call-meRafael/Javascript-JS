"use strict";

// Constructor function

/*
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};



const rafa = new Person("Rafael", 1992);
console.log(rafa);

// // -> {} stands for "empty object"
// 1. step: New {} is created
// 2. step: Function is called, this = {}
// 3. step: {} linked to prototype
// 4. setp: function automaticaly return {}


const milena = new Person("Milena", 1997);
const rose = new Person("Rose", 1960);
console.log(milena, rose);


//Prototypes
Person.prototype.calcAge = function () {
    console.log(2026 - this.birthYear);
};


rafa.calcAge();
milena.calcAge();
rose.calcAge(); 

*/


const Car = function (model, speed) {
    this.model = model;
    this.speed = speed;
}

Car.prototype.accelerate = function (increaseSpeed) {
    this.speed += increaseSpeed;
    return `${this.model} going at ${this.speed} km/h`;
}

Car.prototype.brake = function (decreaseSpeed) {
    this.speed -= decreaseSpeed;
    return `${this.model} braking at ${this.speed} km/h`;
}

const car1 = new Car("BMW", 120);

console.log(car1.accelerate(10)); // "BMW going at 130 km/h"
console.log(car1.brake(20));      // "BMW braking at 110 km/h"
