"use strict";
let tart@an =
let $checkOut = false;
$checkOut = 1;
console.log($checkOut);

const owner = {
  name: 'Rafael',
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  owner,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} at ${address}.
        `,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`,
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
// console.log(...menu.entries());

const usuarios = [
  { id: 1, nome: "Ana", ativo: true, idade: 25 },
  { id: 2, nome: "Carlos", ativo: false, idade: 30 },
  { id: 3, nome: "Beatriz", ativo: true, idade: 17 },
  { id: 4, nome: "Daniel", ativo: true, idade: 40 },
];

const activeUsers = [];

for (const { ativo, idade, nome } of usuarios) {
  if (ativo && idade >= 18) {
    activeUsers.push(nome);
  }
}
console.log(activeUsers);






