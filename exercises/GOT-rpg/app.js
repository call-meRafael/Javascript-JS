"use strict";

// TODO 1: Desestruture nome, casa, titulo e nivel de jonSnow.
// // titulo deve ter valor padrão: 'Sem Título'.
// // Faça o mesmo para melisandre.
// // Use console.log para exibir os quatro valores de cada personagem.

// TODO 2: Use Object.keys() em jonSnow com for...of
// // e exiba no console cada chave do objeto.

// TODO 3: Use Object.values() em melisandre com for...of
// // e exiba no console cada valor do objeto.

const jonSnow = {
  nome: "Jon Snow",
  casa: "Stark",
  titulo: "Rei do Norte",
  nivel: 62,
  status: {
    vida: 950,
    mana: 120,
    defesa: 78,
  },
  inventario: [
    "Garra Longa",
    "Cota de Malha",
    "Manto do Lorde Comandante da Patrulha da Noite",
  ],
};

const melisandre = {
  nome: "Melisandre",
  casa: "'R'hllor",
  nivel: 88,
  status: {
    vida: 610,
    mana: 980,
    defesa: 30,
  },
  inventario: [
    "Colar de Rubi do Deus da Luz",
    "Vestes Vermelhas de Sacerdotisa da Luz",
  ],
};

const {
  nome: nomeJon,
  casa: casaJon,
  titulo: tituloJon = 'Sem Título',
  nivel: nivelJon,
} = jonSnow;


for (const keyNames of Object.keys(jonSnow)) {
    console.log(keyNames, jonSnow[keyNames]);
}

const { 
    nome: nomeMel,
    casa: casaMel,
    titulo: tituloMel = 'Sem Título',
    nivel: nivelMel,
} = melisandre;


for (const valueNames of Object.values(melisandre)) {
    console.log(valueNames);
}


console.log(nomeJon, casaJon, tituloJon, nivelJon);
console.log(nomeMel, casaMel, tituloMel, nivelMel);
