"use strict";

// Constructor function

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    /*
    Never create a method inside the constructor function
    this.calcAge = function () {
        console.log(2026 - this.birthYear);
    }
    */

    
}

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