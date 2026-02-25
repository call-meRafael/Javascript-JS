"use strict";

const continente = {
  nome: "Westeros",
  clima: "Inverno rigoroso",
  casas: {
    stark: {
      lider: "Jon Snow",
      sede: "Winterfell",
      tesouro: 5000,
      lobos: {
        fantasma: { vivo: true, cor: "branco" },
        nymeria: { vivo: true, cor: "cinza" },
      },
      aliados: ["Mormont", "Tully", "Arryn", "Reed"],
    },

    targaryen: {
      lider: "Daenerys",
      sede: "Dragonstone",
      tesouro: null,
      dragoes: {
        drogon: { tamanho: "gigante", montador: "Daenerys" },
        rhaegal: { tamanho: "grande", montador: "Jon Snow" },
        viserion: { tamanho: "grande", montador: null },
      },
      conselheiros: ["Tyrion Lannister", "Jorah Mormont", "Missandei", "Varys"],
    },

    lannister: {
      lider: "Cersei",
      sede: "Kings Landing",
      tesouro: 6000000,
      aliados: ["Frey", "Bolton", "Greyjoy"],
      dividas: "Banco de Ferro",
    },
  },
};


// // Desafio 1: Focando na casa stark: Desestruture o lider (renomeando para reiDoNorte). Em seguida, desestruture o array de aliados de forma que o primeiro aliado seja salvo numa variável chamada principalAliado, e use o operador rest (...) para agrupar todos os aliados restantes num array chamado forcasDoNorte.
// //Tente fazer tudo em uma única declaração const partindo de continente.casas.stark.

const { lider: reiDoNorte = 'Rei do Norte', aliados:  [principalAliado, ...forcasDoNorte] } = continente.casas.stark;

console.log(reiDoNorte, [principalAliado], forcasDoNorte);

// //Desafio 2: Rest em Objetos (Fogo e Sangue)
// //Focando na casa targaryen: O Meistre quer focar apenas na estratégia de guerra. Desestruture os dragoes em uma variável isolada, e use o operador rest (...) para capturar absolutamente todas as outras propriedades da casa Targaryen (lider, sede, tesouro, conselheiros) dentro de um único objeto chamado dadosCivisTargaryen.

const { dragoes, ...dadosCivisTargaryen } = continente.casas.targaryen;
console.log(dragoes, dadosCivisTargaryen);



// //Desafio 3: O "Boss Final" - Iteração com Rest e Fallbacks (O Jogo dos Tronos)
// //A Cidadela exigiu um relatório dinâmico de todas as casas.
// //Use Object.entries(continente.casas) para iterar sobre as casas usando um loop for...of.

// //Na assinatura do loop:

// //Desestruture a chave (nome da casa).

// //Desestruture os valores extraindo a sede, o tesouro (com fallback rigoroso: se for null ou undefined, defina como 0 localmente ou no console.log usando o ??), e use o operador rest para agrupar o restante dos dados da casa em um objeto chamado segredosDaCasa.

// //Dentro do loop, imprima uma mensagem assim:
// //"A Casa [nome da casa], localizada em [sede], tem [tesouro] moedas de ouro. Possui [quantidade] outros segredos militares."
// //(Dica: use Object.keys() no objeto segredosDaCasa criado pelo rest para descobrir a quantidade).

const casasWesteros = Object.entries(continente.casas);
if (!casasWesteros || casasWesteros.length === 0) {
    console.log('Nenhuma casa foi encontrada!');
}
for (const [nomeCasa, { sede: casaOrigem, tesouro: tesouroDaCasa, ...segredosDaCasa }] of casasWesteros) {
    const tesouros = tesouroDaCasa ?? 0;
    const origem = casaOrigem ?? 'Desconhecido';
    console.log(`A casa ${nomeCasa.charAt(0).toUpperCase() + nomeCasa.slice(1)}, localizada em ${origem}, tem ${tesouros.toLocaleString()} moedas de ouro. Possui ${Object.keys(segredosDaCasa).length} outros segredos militares.`);
}