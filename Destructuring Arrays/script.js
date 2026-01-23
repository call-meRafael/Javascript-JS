"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] }= restaurant;
console.log(menu, starters);


// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b);


//* Nested objects
const { fri: { open, close } } = openingHours
console.log(open, close);
*/

/*
//*! desstructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// === Switching variables === //
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);


// 2 values received from a function 
const [starter, mainCourse] = (restaurant.order(2, 0));
console.log(starter, mainCourse);

// === Nested destructuring === //
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

//========= Spread Operator ==========//
// Expande um array em todos os seus elementos individualmente
const arr = [7, 8, 9];

//The hardcoding form
const newArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(newArray);

//Using the spread operator
const optNewArray = [1, 2, ...arr];
console.log(optNewArray);

// TODO: O spread operator pode ser utilizado em qualque rlugar onde se espera valores separados por vírgula.
// TODO: Ele não cria variáveis novas, e também não permite expandir um determinado elemento de um array, apenas o todo.
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const newMenuCopy = [...restaurant.mainMenu];

// TODO:Aqui criamos um novo menu para o restaurant, utilizando o spread operator, unimos o menu principal com o menu de entrada.
// Ambos os menus são expandidos, mantendo a formatação original dos métodos na estrutura do objeto restaurant.
////testando
////testando novamente
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

////Iterables: arrays, strings, maps, sets, NOT objects
const str = "Rafael";
const letters = [...str, " ", "S."];
console.log(letters);

const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);