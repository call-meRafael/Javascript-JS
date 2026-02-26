'use strict';

let guardioes = [
    {
        nome: 'Jon Snow',
        titulo: 'Rei do Norte',
        casa: 'Stark',
        nivel: 62,
        status: {
            vida: 950, 
            mana: 120, 
            defesa: 78
        },
        inventario: [
            'Garra Longa',
            'Cota de Malha'
        ]

    },
    {
        nome: 'Samwell Tarly',
        titulo: 'Sem Título',
        casa: 'Tarly',
        nivel: 28,
        status: {
            vida: 420,
            mana: 180,
            defesa: 35
        },
        inventario: [
            'Livro Antigo',
            'Punhal de Vidro de Dragão'
        ]
    },
    {
        nome: 'Eddison Tollett',
        titulo: 'Sem Título',
        casa: 'Nenhuma',
        nivel: 41,
        status: {
            vida: 680,
            mana: 90,
            defesa: 55
        },
        inventario: [
            'Espada Longa da Patrulha da Noite',
            'Manto da Patrulha da Noite'
        ]
    },
    {
        nome: 'Alliser Thorne',
        titulo: 'Primeiro Patrulheiro',
        casa: 'Thorne',
        nivel: 55,
        status: {
            vida: 750,
            mana: 65,
            defesa: 82
        },
        inventario: [
            'Espada Longa da Patrulha da Noite',
            'Armadura Pesada da Patrulha da Noite'
        ]
    }
];

function adicionarGuardiao({ 
    nome,
    titulo = "Sem Título",
    casa = "Nenhuma",
    nivel = 30,
    status = {
        vida: 500,
        mana: 100,
        defesa: 50
    },
    inventario = []
}) {
    const novoGuardiao = {
        nome,
        titulo,
        casa,
        nivel,
        status,
        inventario
    }
    guardioes = [...guardioes, novoGuardiao];

    return `${nome} foi recrutado para a Patrulha!`;
}
console.log(guardioes);
console.log(adicionarGuardiao({ nome: 'Hikari Ku', titulo: 'Príncipe Deposto das Terras Orientais', casa: 'Ku', nivel: 45, status: { vida: 800, mana: 150, defesa: 70 }, inventario: ['Ichimonji', 'Armadura Leve do Príncipe de Ku'] }));
console.log(guardioes);

function removerGuardiao(nome) {

    for (let i = 0; i < guardioes.length; i++) {
        if (guardioes[i].nome === nome) {
            guardioes.splice(i, 1);
        }
    }
    return `${nome} foi destituido da Patrulha!`;
}
console.log(removerGuardiao());
console.log(guardioes);

function listarGuardioes() {

    for (const guardiao of guardioes) {
        console.log("=====  PATRULHA DA NOITE - LISTA DE GUARDIÕES ======");
        const { nome: nomeGuardiao, titulo: tituloGuardiao, nivel: nivelGuardiao } = guardiao;

        console.log(`${nomeGuardiao} é um ${tituloGuardiao} de nivel ${nivelGuardiao}.`);
    }
    return "Lista de guardiões foi exibida!";
}
console.log(listarGuardioes());


function gerarRelatorio() {
    console.log("===== RELATÓRIO DA PATRULHA ======");

    const guardioesDoReino = Object.keys(guardioes).length;

    let totalGuardioes = 0;
    let somaNiveis = 0;
    let semTitulo = 0;

    for (const relatorioGuardioes of guardioes) {
        const { nivel: nivelGuardiao, titulo: tituloGuardiao } = relatorioGuardioes;
        totalGuardioes += guardioesDoReino + 1;
        somaNiveis += nivelGuardiao;
        if (tituloGuardiao === 'Sem Título') {
            semTitulo++;
        }

    }

    console.log(`Total de Guardiões: ${totalGuardioes}`);
    console.log(`Soma dos Níveis: ${somaNiveis}`);
    console.log(`Guardiões sem Título: ${semTitulo}`);
}
console.log(gerarRelatorio());