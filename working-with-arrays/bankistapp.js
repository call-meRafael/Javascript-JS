
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



// SLICE METHOD
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // Indicamos que o índice inicial é 2, ou seja, o elemento 'c'. O método slice() retornará um novo array, contendo os elementos a partir da posição 2 até o final do array. ['c', 'd', 'e']

console.log(arr.slice(2, 4)); // O indice inicial aqui é 2, e o indice final é 4. O método retornará 'c' e 'd' do array original. Tudo o que estiver entre os dois indices é 'cortado' e aplicado ao novo array.

console.log(arr.slice(-2)); // Neste caso, o método slice() retornará os dois ultimos elementos do array. Possui apenas um parâmetro, o indice final. ['d', 'e']

console.log(arr.slice(-1)); // O método slice() retornará o último elemento do array. ['e']. O indice -1 é amplamente utilizado para designar o ultimo elemento de um array.

console.log(arr.slice(1, -2)); // Com um parametro positivo e um negativo, o método slice() retornará os elementos do array a partir do indice start até o indice end. Neste caso, o indice start é 1, e o indice end é -2. O resultado é ['b', 'c', 'd'].

console.log([...arr]); // O operador de espalhamento (spread operator) é uma forma alternativa de criar um novo array com todos os elementos do array original. ['a', 'b', 'c', 'd', 'e']


// SPLICE METHOD

const arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(-1); // O método splice() é utilizado para remover elementos de um array. Neste caso, o indice -1 indica que o ultimo elemento do array deve ser removido. O resultado é ['a', 'b', 'c', 'd']. Diferentemente do método slice(), o método splice() não retorna um novo array, ele modifica o array raiz original.


// REVERSE METHOD
const arr3 = ['j', 'i', 'h', 'g', 'f'];
arr3.reverse(); // O método reverse() inverte a ordem dos elementos do array, alterando o array original
console.log(arr3); // ['f', 'g', 'h', 'i', 'j']


// CONCAT METHOD
const letters = arr.concat(arr3);
console.log(letters); // O método concat() é utilizado para concatenar dois ou mais arrays, retornando um novo array que contem todos os elementos dos arrays originais. ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j']


// JOIN METHOD
console.log(letters.join(' - ')); // O método join() é utilizado para juntar todos os elementos de um array em uma string, utilizando um separador especificado pelo parâmetro.



// AT METHOD

const testArr = [23, 11, 64];
// O método at() é uma forma alternativa e moderna de acessar elementos de um array e também de uma string. Ele retorna o valor do elemento especificado pelo índice. O método at() aceita índices positivos e negativos, como o clássico (- 1) para acessar o ultimo elemento de um array.
console.log(testArr[0]);
console.log(testArr.at(0));



console.log("---------------------------//----------------------------------------------------");

// forEach METHOD

