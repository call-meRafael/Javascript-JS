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
