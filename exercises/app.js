'use strict';

// // Designação do exercício // //
// // Cenário: Você está construindo o sistema de um jogo de RPG. Sempre que um personagem entra em uma batalha, o sistema precisa ler seus dados para exibir na tela. Em vez de escrever *personagem.status.hp* repetidas vezes, você usará a desestruturação para criar variáveis mais curtas e diretas.

// // 1. OS DADOS
const aventureiro = {
    nome: 'Aragorn',
    classe: 'Patrulheiro',
    nivel: 45,
    status: {
        vida: 1200,
        mana: 300,
        defesa: 85
    },
    inventario: ['Espada Longa', 'Arco Curto de Madeira', 'Poção de Cura', 'Corda'],
    apresentar() {
        return `Eu sou ${this.nome}, ${this.classe} de nível ${this.nivel}.`;
    },

    statusDeBatalha() {
        const { vida, mana, defesa } = this.status;
        return `Vida: ${vida} | Mana: ${mana} | Defesa: ${defesa}`;
    },

    usarItem(item) {
        if (this.inventario.includes(item)) {
            return `${this.nome} usou: ${item}`;
        }
        return 'Item não encontrado no inventário.';
    }
};

const equipamentoLendario = {
  inventario: ["Andúril, a Chama do Oeste", "Cota de Malha Élfica"],
  titulo: "Rei de Gondor",
  nivel: 99,
};

const heroiLendario = {
    ...aventureiro,
    ...equipamentoLendario,

    descreverHeroi() {
        return `${this.titulo}, ${this.nome} empunha ${this.inventario[0]} em batalha!`;
    }
};



const buffDeBatalha = {
    nivel: 50,
    titulo: 'Campeão do Norte'
};

console.log(aventureiro.apresentar());
console.log(aventureiro.statusDeBatalha());
console.log(aventureiro.usarItem('Poção de Cura'));
console.log(aventureiro.usarItem('Poção de Mana'));
console.log(heroiLendario.descreverHeroi());
console.log(heroiLendario);
console.log(aventureiro);

//=========================1==========================\\
const { nome: heroi, classe: tipo } = aventureiro;
console.log(heroi, tipo);
//====================================================\\

//=========================2==========================\\
const { vida: hp, defesa: def } = aventureiro.status;
console.log(hp, def);
//====================================================\\

//=========================3==========================\\
const [ armaPrincipal, armaSecundaria ] = aventureiro.inventario;
console.log(armaPrincipal, armaSecundaria);
//====================================================\\

const formatarInfoHeroi = `O ${tipo} ${heroi} entrou na batalha! Sua vida atual é: ${hp}, defesa: ${def}, armas prontas: ${armaPrincipal} e ${armaSecundaria}.`;
console.log(formatarInfoHeroi);

//==================buffs.1=======================\\
const aventureiroBuffado = { ...buffDeBatalha, ...aventureiro };
console.log(aventureiroBuffado);
aventureiroBuffado.status.vida = 1;
console.log(aventureiro.status.vida);

//==================buffs.2=======================\\
console.log(aventureiro);

//==================buffs.3=======================\\
const inventarioAtualizado = [...aventureiro.inventario, 'Escudo Rúnico'];
console.log(inventarioAtualizado);



// // 2. Você deve escrever o código abaixo do objeto, seguindo estas 3 etapas rigorosamente usando apenas a sintaxe de desestruturação:

//TODO: Extraia as propriedades *nome* e *classe* do objeto *aventureiro* e transforme-as em constantes.

//TODO: Extraia as prorpiedades *vida* e *defesa* de dentro do objeto *status*(que está dentro de *aventureiro*).

//TODO: Extraia os dois primeiros itens do array *inventario* e chame-os de *armaPrincipal* e *armaSecundaria*. Ignore os outros itens.

//=========================================BUFFS===========================================//
// // Evolução do exercício // //

// TODO 1: Crie uma constante chamada 'aventureiroBuffado' que contenha
// todos os dados do aventureiro original + as propriedades de buffDeBatalha.
// // Use apenas spread operator.

// TODO 2: Usando console.log, prove que 'aventureiro' original
// // não foi modificado — nível ainda é 45.

// TODO 3: O inventário ganhou um novo item: 'Escudo Rúnico'.
// // Crie 'inventarioAtualizado' com os itens originais + o novo item.
// // Use spread. Não reatribua o array original.

//=========================================APRESENTAÇÃO========================================//
// // Evolução do exercício // //

// TODO 1: Crie um método chamado 'apresentar'. Ele deve retornar uma string usando template literal: "Eu sou Aragorn, Patrulheiro de nível 45." Use this para acessar as propriedades. Não use arrow function.

// TODO 2: // TODO 2: Crie um método chamado 'statusDeBatalha'.
    // // Ele deve retornar: "Vida: 1200 | Mana: 300 | Defesa: 85"
    // // Use this para acessar o objeto status.

// TODO 3: Crie um método chamado 'usarItem'.
    // // Ele recebe um parâmetro 'item'.
    // // Se o item existir no inventário, retorna: "Aragorn usou: Poção de Cura"
    // // Se não existir, retorna: "Item não encontrado no inventário."


//==================================LEGENDARY====================================//
// // Evolução do exercício // //
// TODO 1: Crie 'aragornLendario' combinando aventureiro e equipamentoLendario
// // com spread. O equipamento lendário deve sobrescrever os conflitos.

// TODO 2: Adicione um método 'descreverHeroi' diretamente em 'aragornLendario'
// // que retorne: "Rei de Gondor Aragorn empunha Andúril em batalha!"
// // Use this. O nome da arma deve vir do inventário, não hardcoded.

// TODO 3: Prove com console.log que o inventario do aventureiro
// // original permanece intacto.