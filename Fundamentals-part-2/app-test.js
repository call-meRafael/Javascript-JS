/*
let elevatorPassengers = [];
let verifyPassengers = function totalPassengers(passengers, limit) {

    if (passengers.length === 0) {
        return elevatorPassengers.unshift('Passenger: Rafael');
    } else if (passengers.length < limit) {
        return elevatorPassengers.unshift('Passenger: Mila');
    } else {
        return `The elevator is full. Please, respect the maximum capacity of ${limit} passengers and wait for the next one!`;
    }
}

console.log(elevatorPassengers, verifyPassengers(elevatorPassengers, 2));
console.log(elevatorPassengers, verifyPassengers(elevatorPassengers, 2));
*/


/*
let elevatorPassengers = [];
let verifyPassengers = (passengers, limit) => {

    if (passengers.length === 0) {
        passengers.unshift('Passenger: Rafael');
        return 'Rafael is the first passenger!';
    } else if (passengers.length < limit) {
        passengers.push('Passenger: Mila');
        return 'Mila is the new passenger!';
    } else {
        return `The limit of ${limit} passengers was reached.`;
    }
}

console.log(elevatorPassengers, verifyPassengers(elevatorPassengers, 2));
console.log(elevatorPassengers, verifyPassengers(elevatorPassengers, 2));


// Aditional task
const todoList = ['Study Javascript', 'Take a bath', 'Get some lunch', 'Kiss my wife'];
const addTask = (task, limit) => {
    
    if (task.length <= 3) {
        task.unshift('URGENT: Improve CSS!');
        return "Don't forget to exercise your CSS skills!";
    } else if (task.length >= limit) {
        return `You have reached the maximum limit of ${limit} tasks for today! Get some rest.`;
    } else {
        return 'You learned a new skill today!';
    }
}

console.log(todoList, addTask(todoList, 3));

*/


/* 1 - Remova o primeiro item só se o array exceder 5 elementos, aplicando lógica de tamanho para "limpeza automática". */

// Analogia visual: Como podar uma árvore alta: a função verifica se o array "cresceu demais" (>5), e remove a raiz (início) para equilibrar, mantendo o resto fresco.

/*

const arvore = ['galho1', 'galho2', 'galho3', 'galho4', 'galho5', 'galho6'];

const podarGalhos = (arvore) => {
    if (arvore.length > 5) {
        arvore.shift();
        return `Os galhos cresceram demais! Vamos podar.`;
    } else {
        
        return `${arvore} estão bem vivos!`;
    }
}
console.log(arvore, podarGalhos(arvore));

*/




