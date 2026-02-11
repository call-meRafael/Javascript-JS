"use strict";

//// Assigments ////
// todo: 1. Create one player array for each team (variables 'players' and 'players2')

// todo: 2. Create a variable 'gk' that will receive the goalkeeper of each team (the first player in the array) and a variable 'fieldPlayers' with all the remaining 10 field players

// todo: 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// todo: 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

// todo: 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// todo: 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and print each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// todo: 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandwski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Brandt",
      "Hazard",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// // 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// // 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// // 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// // 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// // 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// // 7.
team1 < team2 && console.log(`${game.team1} is more likely to win!`);
team2 < team1 && console.log(`${game.team2} is more likely to win!`);

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

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

// ================ CHALLENGE 2 ======================= \\
//TODO 1. loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

//todo 2. Use a loop to calculate the avarage odd and log it to the console (We already studied how to calcukate avarages, you can go check if you don't remember)

//todo 3. Print the 3 odds to the console, but in nice formatted way, exactly like this:
         // // Odd of victory Bayern Munich: 1.33
         // // Odd of draw: 3.25
         // // Odd of victory Borussia Dortmund: 6.5


// // 1.
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// // 2.
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) avarage += odd;
avarage /= odds.length;
console.log(avarage);

// // 3.
for (const [ team, odd ] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}:`);
}
