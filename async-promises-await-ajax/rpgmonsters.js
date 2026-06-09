"use strict";
// Dia 1: Fetch Básico e Transformação de Arrays
const monsters = [
  { name: "Tiamat", hp: 100, title: "The Dragon Queen", type: "Dragon" },
  {
    name: "Gilgamesh",
    hp: 85,
    title: "King of All Heroes",
    type: "Heroic Spirit",
  },
  {
    name: "Dalamadurr",
    hp: 90,
    title: "The King of Serpents",
    type: "Serpent",
  },
  {
    name: "Hoddrik",
    hp: 35,
    title: "The Gray Horror",
    type: "Great Orc",
  },
  {
    name: "Rue",
    hp: 20,
    title: "The Faraway Slime",
    type: "Ancestral Slime",
  },
];

// Isolando o fetch dos dados
fetch("https://api.open5e.com/v1/monsters/")
  .then((response) => {
    // Verifica se a resposta foi bem sucedida (status 200-299), caso não, retorna uma mensagem de erro com status e texto da resposta para melhor identificação do problema. (nota: Teste referente ao DIA 2 de exercícios.)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: (${response.status}: ${response.statusText})`,
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Intercalação de manipulação de Arrays com os dados obtidos da API
    const dragons = data.results.filter((monster) => monster.type === "Dragon");


    // Intercalação referente ao DIA 2, onde somamos o total de HP dos inimigos determinados pelo procedimento de filtragem. (Nota: A API retorna o hp como number por padrão, decidi explicitamente converter para Number para garantir a consistência, no mundo real, não podemos confiar que os dados da API estejam sempre no formato esperado.)
    const totalHitPoints = dragons.reduce(
      (acc, specEnemy) => acc + Number(specEnemy.hit_points),
      0,
    );
    
    // Intercalação referente ao DIA 3. Verifica se o nível de desafio dos inimigos é maior ou igual a 15. Se for, interrompe a execução imediatamente e lança uma mensagem de erro.
    const highLevelChallenge = data.results.some(({ cr }) => cr >= 15);

    if (highLevelChallenge) {
      throw new Error("Run! The threat is beyond your limits to take.");
    }
    //
    console.log(dragons, totalHitPoints);
    console.log("-------------------DIA 2-------------------");

    return {
      dragons,
      totalHitPoints,
      highLevelChallenge,
    }
  })
  // Catch básico para lidar com erros de rede ou problemas na resposta da API
  .catch((err) => console.error(err.message));
// Criando um array básico isolado e aplicando desestruturação direta
const dangerousMonsters = monsters
  .filter(({ hp }) => hp >= 50)
  .map((monster) => ({ ...monster, dangerous: true }));
console.log(dangerousMonsters);
console.log(monsters);

////-------------------------------------DIA 2---------------------------------

//Part 1.
// Build an Array of of items from the hero's inventory, using reduce() sum the weight of all items carried by the hero and after that, using find(), search for the item of the lighest weight and return a formated string of the whole process.
const inventoryList = [
  { name: "Diamond Sword", type: "Weapon", rarity: "Legendary", weight: 2.2 },
  { name: "Healing Potion", type: "Consumable", rarity: "Common", weight: 0.2 },
  { name: "Emperor's Armor", type: "Armor", rarity: "Epic", weight: 12.8 },
  { name: "Hermes Boots", type: "Armor", rarity: "Divine", weight: 1.7 },
  {
    name: "Dragonslayer's Shield",
    type: "Armor",
    rarity: "Legendary",
    weight: 5.7,
  },
];

// Aqui, temos o código separado das requisições do exercício, decidi transformá-las em uma única função reutilizável mesmo que não fosse necessário.
// const totalWeight = inventoryList.reduce((acc, weight) => acc + weight.weight, 0);
// const findItem = inventoryList.find(({ name }) => name === 'Healing Potion');

const formatOutput = (data) => {
  const totalWeight = data.reduce((acc, weight) => acc + weight.weight, 0);
  const lightestItem = data.reduce((lightest, current) => {
    return current.weight < lightest.weight ? current : lightest;
  }, data[0]); // Começa assumindo que o primeiro item é o mais leve

  return `
    The heroe is carrying ${totalWeight}kg of items and the lightest one is: (${lightestItem.name}) with only ${lightestItem.weight}kg!
    `;
};
console.log(formatOutput(inventoryList));

// ---------------------------------------DIA 3---------------------------------
// Part 1.
// Build an Array of character's stats, use .some() to verify if the character has any value less than 10 (return true or false). Using .every() check if all stats are greater than 8.

const defineStats = (str, dex, con, int, wis, cha) => {
  return {
    strength: str,
    dexterity: dex,
    constitution: con,
    intelligence: int,
    wisdom: wis,
    charisma: cha,
  }
};

const heroStats = [
  {
    stats: defineStats(12, 8, 15, 9, 14, 11)
  }
];


const checkStats = heroStats.map(({ stats }) => {
  const lowStats = Object.keys(stats).some((key) => stats[key] < 10);
  const highStats = Object.keys(stats).every((key) => stats[key] >= 8);
  
  return  { lowStats, highStats };
});

const heroActions = () => {
  
  return new Promise((resolve, reject) => {
    const rollTheDice = Math.trunc(Math.random() * 20 + 1); // Simulates a D20 roll
    console.log(`Rolling the dice: ${rollTheDice}`);

    if (rollTheDice >= 16) {
      
      resolve("Critical hit!");
    } else if (rollTheDice <= 3) {
      reject(new Error("You failed to hit!"));
    } else {
      resolve("You hit!");
    }
  });

};
heroActions().then((res => console.log(res))).catch(err => console.log(err));
console.log(checkStats);


// ---------------------------------------- DIA 4----------------------------------//


