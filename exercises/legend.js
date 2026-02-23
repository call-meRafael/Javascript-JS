"use strict";

const heroiLendario = {
  nome: "Aragorn",
  classe: "Patrulheiro",
  nivel: 45,
  status: {
    vida: 1200,
    mana: 300,
    defesa: 85,
  },

  equipamentos: {
    cabeca: "Capuz de Couro",
    corpo: "Cota de Malha Élfica",
    aneis: ["Anel de Fogo", "Anel de Gelo", "Anel de Veneno"],
  },
};

const { nome: heroi, titulo: tituloHeroi = "Andarilho" } = heroiLendario;
console.log(heroi, tituloHeroi);

const {
  equipamentos: {
    aneis: [primeiroAnel, ...aneis],
  },
} = heroiLendario;
console.log(primeiroAnel, aneis);

function exibirLevelUp({ nome, nivel }) {
  return `${nome} subiu para o nível ${nivel + 1}!`;
}

console.log(exibirLevelUp(heroiLendario));


//=========================================PARTE 2========================================//

let armaMaoDireita = 'Tocha';
let armaMaoEsquerda = 'Anduril';

const party = [
    { nome: 'Legolas', raca: 'Elfo', dano: 150 },
    { nome: 'Gimli', raca: 'Anão', dano: 200 },
    { nome: 'Gandalf', raca: 'Maia', dano: 500 }
];

[armaMaoDireita, armaMaoEsquerda] = [armaMaoEsquerda, armaMaoDireita]; // Swapping de valores usando desestruturação.
console.log(armaMaoDireita, armaMaoEsquerda);

for (const { nome: nomeHeroi, raca: racaHeroi } of party) {
    console.log(`${nomeHeroi}, o ${racaHeroi}, está pronto para a batalha!`);
}


console.log("=======================STAR TREK========================");

const controleDeMissoes = {
    agencia: 'Galactic Explorer',
    setores: {
        engenharia: {
            chefe: 'Montgomery Scott',
            equipe: 150,
            naves: {
                entreprise: { classe: 'Constituição', status: 'Em missão', tripulantes: 430 },
                defiant: { classe: 'Escolta', status: 'Em doca', tripulantes: 50 },
            }
        },
        pesquisa: {
            chefe: 'Spock',
            equipe: 85,
            naves: {
                grissom: { classe: 'Oberth', status: 'Destruída', tripulantes: null },
                voyager: { classe: 'Intrepid', status: 'Perdida', tripulantes: 150 }
            }
        }
    }
};

const { engenharia: { chefe: diretorEngenaria = 'Desconhecido' }, pesquisa: { chefe: diretorPesquisa = 'Desconhecido' } } = controleDeMissoes.setores;
console.log(diretorEngenaria, diretorPesquisa);


// // 2. O diretor de operações quer saber quais setores existem na base de dados. Use Object.keys() com desestruturação para capturar o segundo setor listado no objeto setores (neste caso, "pesquisa") em uma variável chamada segundoSetor.

const [ , segundoSetor ] = Object.keys(controleDeMissoes.setores);
console.log(segundoSetor);

// // 3. Use Object.values() para pegar todas as naves do setor de pesquisa. Itere sobre esse array resultante. Para cada nave, desestruture a classe, o status e os tripulantes. Atenção: Como a nave Grissom tem tripulantes: null (ou se fosse undefined), atribua um valor padrão de 0 na hora de desestruturar os tripulantes.

const navesPesquisa = Object.values(controleDeMissoes.setores.pesquisa.naves);
for (const { classe: classeNave, status: statusNave, tripulantes: tripulantesNave } of navesPesquisa) {
    // edge case extra para lidar com a possibilidade de naves não existirem no setor de pesquisa.
    if(!navesPesquisa) {
        console.log('Nave não encontrada!');
    }

    const tripulantesAtuais = tripulantesNave ?? 0; // Usando o operador de coalescência nula para atribuir 0 caso tripulantesNave seja null ou undefined. p.s: eu tentei usar o operador de coalescência nula diretamente na desestruturação, mas vi no console que ele não funciona de forma alguma se usado nesta situação, porém, se eu estiver enganado, corrija-me!
    console.log(classeNave, statusNave, tripulantesAtuais);
}


// // 4. Queremos um relatório apenas das naves do setor de engenharia. Use Object.entries() no objeto controleDeMissoes.setores.engenharia.naves. O método .entries() retorna um array de arrays no formato [chave, valor].
// // Use o método .map() ou um loop for...of desestruturando o array [nomeDaNave, dadosDaNave] diretamente na assinatura do loop/callback para imprimir no console uma string no formato:
// // "A nave [nome] da classe [classe] está atualmente [status]."

const navesEngenharia = Object.entries(controleDeMissoes.setores.engenharia.naves);
for (const [nome, { classe, status }] of navesEngenharia) {
    console.log(`A nave ${nome} da classe ${classe} está atualmente ${status}.`);
}