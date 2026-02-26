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

    console.log(`${nome} foi recrutado para a Patrulha!`);
}
console.log(adicionarGuardiao(novoGuardiao));
