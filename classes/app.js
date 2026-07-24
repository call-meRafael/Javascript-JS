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

/*

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

*/

/*
class PersonCl {
  // 1, constructor method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2026 - this.birthYear);
  }
}

const milena = new PersonCl("Milena", 1997);
console.log(milena);
*/


const account = {
  owner: "Rafael",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);








/* ========================================== exercise tier 01 ============== */
/*
class Personagem {

  constructor(nome, vida) {
    this.nome = nome;
    this.#vida = vida;
  }

  atacar() {
    return `O herói ${this.nome} atacou!`;
  }

  receberDano(quantidade) {
    this.vida -= quantidade;
    return this.vida;
  }
}

const personagem = new Personagem("Klein", 300);
console.log(personagem.atacar());
console.log(personagem.receberDano(50));
*/
/* ========================================================================== */

/* ========================================== exercise tier 02 ============== */
/*
class Mago extends Personagem {
    constructor(nome, vida, mana) {
        super(nome, vida);
        this.mana = mana;
    }

    atacar(custoMana) {
        if (this.mana >= custoMana) {
            this.mana -= custoMana;
            return `O mago ${this.nome} lançou um feitiço! (Mana restante: ${this.mana})`;
        } else {
            return `O mago ${this.nome} não tem mana suficiente para lançar o feitiço!`;
        }

    }


}

const mago = new Mago("Rudeus", 450, 100);
console.log(mago);
console.log(mago.atacar(10));
console.log(mago.atacar(10));
console.log(mago.atacar(10));

*/


