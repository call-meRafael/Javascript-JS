"use strict";

// // Designação do exercício // //
// // Cenário: Você está construindo o sistema de um jogo de RPG. Sempre que um personagem entra em uma batalha, o sistema precisa ler seus dados para exibir na tela. Em vez de escrever *personagem.status.hp* repetidas vezes, você usará a desestruturação para criar variáveis mais curtas e diretas.

// // 1. OS DADOS
const aventureiro = {
  nome: "Aragorn",
  classe: "Patrulheiro",
  nivel: 45,
  status: {
    vida: 1200,
    mana: 300,
    defesa: 85,
  },
  inventario: [
    "Espada Longa",
    "Arco Curto de Madeira",
    "Poção de Cura",
    "Corda",
  ],
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
    return "Item não encontrado no inventário.";
  },
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
  },
};

const buffDeBatalha = {
  nivel: 50,
  titulo: "Campeão do Norte",
};

console.log(aventureiro.apresentar());
console.log(aventureiro.statusDeBatalha());
console.log(aventureiro.usarItem("Poção de Cura"));
console.log(aventureiro.usarItem("Poção de Mana"));
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
const [armaPrincipal, armaSecundaria] = aventureiro.inventario;
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
const inventarioAtualizado = [...aventureiro.inventario, "Escudo Rúnico"];
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

console.log("--------------------------------------------------");

// #1. Crie uma função chamada 'checkDogs' que aceita dois arrays de idades de cães ('dogsJulia' e 'dogsKate'), e retorne o seguinte:
// Julia descobriu que os donos do PRIMEIRO e dos DOIS ultimos cães, na verdade, tem gatos, não cães! Portanto, crie uma cópia rasa do array de Julia e remova as idades dos gatos do array copiado. (Porque é uma prática ruim mutar parametros de funções)

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // "O cão número 1 é um adulto com 5 anos de idade.
  // "O cão número 2 ainda é um filhote 🐶".
  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(
        `O cão número ${i + 1} é um adulto com ${dog} anos de idade.`,
      );
    } else {
      console.log(`O cão número ${i + 1} ainda é um filhote 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log(
  "--------------------exercício map()------------------------------",
);

// #2. Imagine que estamos trabalhando no sistema de um e-commerce. A equipe de maketing decidiu dar um desconto de 10% em uma lista específica de produtos. Sua missão é gerar a lista atualizada para ser exibida na tela.

const carrinho = [
  { produto: "Teclado Mecânico", preco: 250 },
  { produto: "Mouse Gamer", preco: 120 },
  { produto: "Monitor 24 polegadas", preco: 850 },
  { produto: "Headset", preco: 199 },
];

const carrinhoComDesconto = carrinho.map((item, i) => {
  return `Produto ${i + 1}: ${item.produto} - Preço com desconto: R$${(item.preco * 0.9).toFixed(2)}`;
});
console.log(carrinho);
console.log(carrinhoComDesconto);

console.log("--------------------map() 2-----------------------------");

const carrinhoDeCompras = [
  { id: 1, nome: "Camiseta Básica", preco: 29.9, quantidade: 2 },
  { id: 2, nome: "Calça Jeans", preco: 89.9, quantidade: 1 },
  { id: 3, nome: "Tênis Running", preco: 149.9, quantidade: 1 },
  { id: 4, nome: "Boné Snapback", preco: 39.9, quantidade: 3 },
];

const gerarResumoCarrinho = carrinhoDeCompras.map((item) => {
  return [
    {
      nome: item.nome,
      subtotal: Number(item.preco * item.quantidade).toFixed(2),
      temFreteGratis: item.preco * item.quantidade >= 100 ? true : false,
    },
  ];
});
console.log(gerarResumoCarrinho);

const contasBancarias = [
  { cliente: "Milena", saldo: 1500, limite: 500 },
  { cliente: "Rafael", saldo: -200, limite: 1000 },
  { cliente: "Rose", saldo: 5000, limite: 0 },
  { cliente: "Sônia", saldo: -50, limite: 100 },
];

//#1. Use o map() no array para gerar um novo array chamado relatorioContas.
const relatorioContas = contasBancarias.map((conta, i) => {
    const saldoTotal = conta.saldo + conta.limite;
    const situacaoCred = conta.saldo < 0 ? 'Devedor' : 'Regular'

    return {
        titular: `${i + 1 } - ${conta.cliente}`,
        saldoDisponivel: saldoTotal,
        situacao: situacaoCred
    };
})

console.log(contasBancarias, relatorioContas);