/*
const listaDeAcesso = [];
const limiteMaximo = 3;


// ============ Checa capacidade da sala ==========
function capacidadeDaSala(listaDeAcesso) {
    return listaDeAcesso.length < limiteMaximo;
}

// ============ Verifica se o nome ja está na lista ==========
function verificarNomeRepetido(listaDeAcesso, pessoa) {
    return listaDeAcesso.includes(pessoa.nome);
}

// ============ Adicionar Pessoa ==========
function adicionarPessoaNaLista(listaDeAcesso, pessoa) {

    const nomeListado = verificarNomeRepetido(listaDeAcesso, pessoa);

    if (!nomeListado) {
        listaDeAcesso.unshift(pessoa.nome);
        return true;
    }
    return false;
}

// ============ Controlar Acesso ===========
function controlarAcessoParaSala(listaDeAcesso, pessoa) {
    
    if (!pessoa.aptoParaEntrar()) {
        return pessoa.pegarSumario();
    }

    if (verificarNomeRepetido(listaDeAcesso, pessoa)) {
        return `${pessoa.nome} ja está na sala especial!`;
    }

    if (capacidadeDaSala(listaDeAcesso)) {
        adicionarPessoaNaLista(listaDeAcesso, pessoa);
        return `${pessoa.nome} entrou na sala especial!`
    } else {
        return `${pessoa.nome} não pode entrar na sala especial! A sala está cheia!`;
    }
}


// ============= Objetos (pessoas) ============
const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992,

    aptoParaEntrar: function () {
        return this.idade >= 18;
    },

    pegarSumario: function () {
        return this.aptoParaEntrar() 
        ? `${this.nome} possui idade (${this.idade}) adequada. Pode adentrar na sala!`
        : `${this.nome} é menor de idade (${this.idade}) e segundo nossas diretrizes, não pode adentrar na sala. Sentimos muito!`;
    }
};

const milena = {
    nome: 'Milena',
    idade: 2025 - 1997,

    aptoParaEntrar: function () {
        return this.idade >= 18;
    },

    pegarSumario: function () {
        return this.aptoParaEntrar() 
        ? `${this.nome} possui idade (${this.idade}) adequada. Pode adentrar na sala!`
        : `${this.nome} é menor de idade (${this.idade}) e segundo nossas diretrizes, não pode adentrar na sala. Sentimos muito!`;
    }
};

const george = {
    nome: 'George',
    idade: 2025 - 2013,

    aptoParaEntrar: function () {
        return this.idade >= 18;
    },

    pegarSumario: function () {
        return this.aptoParaEntrar() 
        ? `${this.nome} possui idade (${this.idade}) adequada. Pode adentrar na sala!`
        : `${this.nome} é menor de idade (${this.idade}) e segundo nossas diretrizes, não pode adentrar na sala. Sentimos muito!`;
    }
};

const richy = {
    nome: 'Richard',
    idade: 2025 - 2005,

    aptoParaEntrar: function () {
        return this.idade >= 18;
    },

    pegarSumario: function () {
        return this.aptoParaEntrar() 
        ? `${this.nome} possui idade (${this.idade}) adequada. Pode adentrar na sala!`
        : `${this.nome} é menor de idade (${this.idade}) e segundo nossas diretrizes, não pode adentrar na sala. Sentimos muito!`;
    }
};

const lilly = {
    nome: 'Lilly',
    idade: 2025 - 2005,

    aptoParaEntrar: function () {
        return this.idade >= 18;
    },

    pegarSumario: function () {
        return this.aptoParaEntrar() 
        ? `${this.nome} possui idade (${this.idade}) adequada. Pode adentrar na sala!`
        : `${this.nome} é menor de idade (${this.idade}) e segundo nossas diretrizes, não pode adentrar na sala. Sentimos muito!`;
    }
};

// ======== Chamada do sistema ========
console.log(controlarAcessoParaSala(listaDeAcesso, rafael));
console.log(controlarAcessoParaSala(listaDeAcesso, rafael));
console.log(controlarAcessoParaSala(listaDeAcesso, milena));
console.log(controlarAcessoParaSala(listaDeAcesso, milena));
console.log(controlarAcessoParaSala(listaDeAcesso, george));
console.log(controlarAcessoParaSala(listaDeAcesso, richy));
console.log(controlarAcessoParaSala(listaDeAcesso, lilly));

*/
/*
// ===== Paridade de cores =====
const cores = ['vermelho', 'azul', 'verde'];
function trocaDeCores(cores) {
    if (cores % 2 !== 0) {
        cores.push('branco');
    }
    
}
console.log(cores, trocaDeCores(cores));
// ======================================= //

// ===== Limite superior ===== //
const novasCores = ['vermelho', 'azul', 'verde', 'amarelo', 'rosa', 'roxo', 'marrom'];
function acrescentarCorSe(novasCores) {
    if (novasCores.length > 6) {
        novasCores.unshift('preto');
    } 
}
console.log(novasCores, acrescentarCorSe(novasCores));
// ======================================= //




// ===== Orquestração mínima ===== //
const arcoIris = ['vermelho', 'azul', 'verde', 'amarelo', 'rosa', 'roxo'];
function paridadeDeCores(arcoIris) {
    if (arcoIris.length % 2 !== 0) {

    }
}

function limiteSuperior(arcoIris) {
    if (arcoIris.length > 6) {

    }
}
function controlarMovimentoDeCores(arcoIris) {
    const checarParidade = paridadeDeCores(arcoIris);
    const checarLimite = limiteSuperior(arcoIris);

    if (checarParidade !== true) {
        arcoIris.push('branco');
    }
    
    if (checarLimite !== false) {
        arcoIris.unshift('preto');
    }
    
    if (arcoIris.length >= 8) {

        return true;
    } else {
        return false;
    }
    
}
console.log(arcoIris,controlarMovimentoDeCores(arcoIris));
// ======================================= //

*/

/*
const listaDeAcesso = [];
const limiteDaSala = 5;

function checarIdade(pessoa) {
    return pessoa.idade >= 18;
}

function checarPresencaNaLista(listaDeAcesso, pessoa) {
    return listaDeAcesso.includes(pessoa);
}

function checarLimiteDeAcesso(listaDeAcesso) {
    return listaDeAcesso.length < limiteDaSala;
}

function controlarAcessoNaSala(listaDeAcesso, pessoa) {
    if (checarIdade(pessoa) && checarLimiteDeAcesso(listaDeAcesso) && !checarPresencaNaLista(listaDeAcesso, pessoa)) {
        listaDeAcesso.unshift(pessoa);
        return true;
    }
    return false;
}


const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992
};

const milena = {
    nome: 'Milena',
    idade: 2025 - 1997
};

console.log(listaDeAcesso, controlarAcessoNaSala(listaDeAcesso, rafael));

*/

/*
const sistemaDaBalada = {
    filaDeEspera: [],
    listaVip: ['Saul', 'Kim', 'Mike'],

    baladaAberta: function () {
        return true;
    },

    adicionarNaFila: function (nome, vip) {
        const prioritario = this.listaVip.includes(nome);

        if (!filaDeEspera.includes(prioritario)) {
            return this.filaDeEspera.unshift(nome);
        }


    }


}
console.log(sistemaDaBalada, this.adicionarNaFila('Saul'));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples nad ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
const livrosEmprestados = [];
const limiteDeEmprestimos = 3;

function verificarLivroJaEmprestado(livrosEmprestados, livro) {
    return livrosEmprestados.includes(livro);
}

const verificarLimite = (livrosEmprestados, limiteMaximo) => {
    return livrosEmprestados.length < limiteMaximo;
}

function controlarEmprestimo(verificarLivroJaEmprestado, livro, limiteMaximo) {

    if (!verificarLivroJaEmprestado(livrosEmprestados, livro) && verificarLimite(livrosEmprestados, limiteMaximo)) {
        livrosEmprestados.push(livro);
        return true;
    } else {
        return false;
    }
}

console.log(controlarEmprestimo(verificarLivroJaEmprestado, 'Código Limpo', limiteDeEmprestimos));
*/

// ========================= Laboratório ========================== //
/*
const pessoasNoLaboratorio = [];
const limiteDePessoas = 2;

function verificarMaiorIdade(pessoa) {
    return pessoa.idade >= 18;
}

function verificarPresenca(lista, pessoa) {
    return lista.includes(pessoa);
}

function verificarDisponibilidade(lista, limite) {
    return lista.length < limite;
}

function controlarEntrada(lista, pessoa, limite) {
    const checarIdade = verificarMaiorIdade(pessoa);
    const checarPresenca = verificarPresenca(lista, pessoa);
    const checarDisponibilidade = verificarDisponibilidade(lista, limite);

    if (checarIdade && checarDisponibilidade && !checarPresenca) {
        lista.unshift(pessoa);
        return true;
    }
    return false;
}

const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992
};

const milena = {
    nome: 'Milena',
    idade: 2025 - 1997
};

const george = {
    nome: 'George',
    idade: 2025 - 2013
};

console.log(pessoasNoLaboratorio, controlarEntrada(pessoasNoLaboratorio, rafael, limiteDePessoas));
console.log(controlarEntrada(pessoasNoLaboratorio, george, limiteDePessoas));
*/


//================== Controle de empréstimo simples =============== //
/*
const equipamentosEmprestados = [];
const limiteMaximo = 4;

function verificarEquipamentoJaEmprestado(lista, equipamento) {
    return lista.includes(equipamento);
}

function verificarLimiteDeEmprestimo(lista, limiteMaximo) {
    return lista.length < limiteMaximo;
}

function controlarEquipamentosEmprestados(lista, equipamento, limiteMaximo) {

    const checarEquipamentoEmprestado = verificarEquipamentoJaEmprestado(lista, equipamento);

    const checarLimite = verificarLimiteDeEmprestimo(lista, limiteMaximo);

    if (!checarEquipamentoEmprestado && checarLimite) {
        lista.push(equipamento)
        return true;
    }
    return false;
}

console.log(equipamentosEmprestados, controlarEquipamentosEmprestados(equipamentosEmprestados, 'Notebook', limiteMaximo));
console.log(equipamentosEmprestados, controlarEquipamentosEmprestados(equipamentosEmprestados, 'Smart TV', limiteMaximo));
console.log(equipamentosEmprestados, controlarEquipamentosEmprestados(equipamentosEmprestados, 'Headphones', limiteMaximo));
console.log(equipamentosEmprestados, controlarEquipamentosEmprestados(equipamentosEmprestados, 'Playstation 5', limiteMaximo));
console.log(equipamentosEmprestados, controlarEquipamentosEmprestados(equipamentosEmprestados, 'Google VR', limiteMaximo));
*/




// ================== Controle de Cadastro ======================= //
/*
const cadastroNoClube = [];
const limiteMaximo = 5;

function jaCadastrado(lista, pessoa) {
    return lista.includes(pessoa);
}

function haVagas(lista, limiteMaximo) {
    return lista.length < limiteMaximo;
}

function entradaNoClube(lista, pessoa, limiteMaximo) {
    const existeCadastro = jaCadastrado(lista, pessoa);
    const disponibilidadeDeVagas = haVagas(lista, limiteMaximo);
    const verificarMaiorIdade = pessoa.checarMaiorIdade();

    if (verificarMaiorIdade && !existeCadastro && disponibilidadeDeVagas) {
        lista.push(pessoa);
        return true;
    }
    return false;

    // if (!verificarMaiorIdade) return false;
    // if (existeCadastro) return false;
    // if (!disponibilidadeDeVagas) return false;

    // lista.push(pessoa);
    // return true;
}




const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};

const milena = {
    nome: 'Milena',
    idade: 2025 - 1997,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};

const george = {
    nome: 'George',
    idade: 2025 - 2015,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const richy = {
    nome: 'Richard',
    idade: 2025 - 2012,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const marge = {
    nome: 'Margareth',
    idade: 2025 - 2012,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const dick = {
    nome: 'Dick',
    idade: 2025 - 1964,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const jack = {
    nome: 'Jack',
    idade: 2025 - 1984,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const julian = {
    nome: 'Julian',
    idade: 2025 - 1994,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const pennywise = {
    nome: 'Pennywise',
    idade: 2025 - 1908,

    checarMaiorIdade: function () {
        return this.idade >= 18;
    }
};




console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, rafael, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, milena, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, george, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, richy, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, marge, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, dick, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, jack, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, julian, limiteMaximo));
console.log(cadastroNoClube, entradaNoClube(cadastroNoClube, pennywise, limiteMaximo));

*/


// ================== Emprétimo por pessoa ======================= //
/*
const itensEmprestados = [];
const limiteMaximoDeItens = 2;

const checarMaiorIdade = (pessoa) => pessoa.hasMaiorIdade();

const consultarItemEmprestado = (itensEmprestados, item) => itensEmprestados.includes(item);

const hasLimite = (itensEmprestados, limiteMaximoDeItens) => itensEmprestados.length < limiteMaximoDeItens;

function controleDeItens(itensEmprestados, pessoa, item, limiteMaximoDeItens) {

    if (checarMaiorIdade(pessoa) && !consultarItemEmprestado(itensEmprestados, item) && hasLimite(itensEmprestados, limiteMaximoDeItens)) {

        itensEmprestados.push(item);
        return true;
    }
    return false;
}





// ========== Objetos ========== //
const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992,

    hasMaiorIdade: function () {
        return this.idade >= 18;
    }
};

const milena = {
    nome: 'Milena',
    idade: 2025 - 1997,

    hasMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const george = {
    nome: 'George',
    idade: 2025 - 2013,

    hasMaiorIdade: function () {
        return this.idade >= 18;
    }
};
const dick = {
    nome: 'Dick',
    idade: 2025 - 2000,

    hasMaiorIdade: function () {
        return this.idade >= 18;
    }
};




console.log(itensEmprestados, controleDeItens(itensEmprestados, rafael, 'Playstation 5', limiteMaximoDeItens));
console.log(itensEmprestados, controleDeItens(itensEmprestados, rafael, 'Playstation 5', limiteMaximoDeItens));
console.log(itensEmprestados, controleDeItens(itensEmprestados, milena, 'Oraganizador de Maquiagem', limiteMaximoDeItens));
console.log(itensEmprestados, controleDeItens(itensEmprestados, george, 'Patins', limiteMaximoDeItens));
console.log(itensEmprestados, controleDeItens(itensEmprestados, dick, 'Smart TV', limiteMaximoDeItens));

*/

//========= Sistema de Lâmpada inteligente ========= //
const lampadaInteligente = {
    ligada: false,
    corAtual: 'Branca',

    interruptor: function () {
        this.ligada = !this.ligada;

        return this.ligada ? 'Lâmpada acesa!' : 'Lâmpada apagada!';
    },

    alterarCor: function (novaCor) {
        if (this.ligada) {

            this.corAtual = novaCor;
        } 
        return `A nova cor da luz é: (${this.corAtual}).`;
        
    },

    situacao: function () {
        return `A lâmpada está ${this.ligada ? 'acesa' : 'apagada'}, a cor recentemente alterada é: (${this.corAtual}).`;
    }
}
console.log(lampadaInteligente, lampadaInteligente.interruptor(), lampadaInteligente.alterarCor('Vermelha'), lampadaInteligente.situacao());



// ========== Sistema de inventário limitado ========= //
const mochilaDoHeroi = {
    itens: ['Poção', 'Mapa'],
    capacidadeMaxima: 5,

    coletarItem: function (item) {
        
        if (this.itens.length >= this.capacidadeMaxima) return 'Mochila cheia! Não é possível coletar mais itens.';

        if (this.itens.includes(item)) return 'O herói já possui esse item.';

        this.itens.push(item);
        return `O herói coletou o item: (${item})!`;
    },

    usarItem: function (item) {

        const index = this.itens.indexOf(item);
        if (index === -1) return 'O herói não possui esse item!'

        this.itens.shift();
        return `O herói usou o item: (${item})!`;
    }

}
console.log(mochilaDoHeroi, mochilaDoHeroi.coletarItem('Poção'), mochilaDoHeroi.usarItem('Poção'), mochilaDoHeroi.coletarItem('Espada Sagrada'), mochilaDoHeroi.coletarItem('Escudo Aegis'), mochilaDoHeroi.coletarItem('Armadura de Cronos'), mochilaDoHeroi.coletarItem('Elmo do Matador de Deuses'), mochilaDoHeroi.coletarItem('Botas Aladas de Rah'));



// ========== Elevador Corporativo ========= //

const elevadorCorporativo = {
    andarAtual: 0,
    totalAndares: 10,
    emManutencao: false,
    historicoDeUso: [],

    entrarEmManutencao: function () {
        this.emManutencao = true; // Ativa o modo de manutenção explicitamente.
        this.historicoDeUso.length = 0; // Limpa o histórico de uso do elevador.
        return 'Elevador parado para técnicos.';
    },

    


    irPara: function (andarDestino) {
        if (this.emManutencao === true) return 'Elevador inoperante!';

        if (andarDestino < 0 || andarDestino > this.totalAndares) {
            return `Erro: o andar (${andarDestino}) não existe!`;
        }

        const vaiSubir = andarDestino > this.andarAtual;

        if (andarDestino === this.andarAtual) return 'Você já está neste andar.'
        this.historicoDeUso.push(this.andarAtual);

        this.andarAtual = andarDestino;

        return vaiSubir ? `Subindo para o andar ${andarDestino}!` : `Descendo para o andar ${andarDestino}!`;
    },

    voltarParaTerreo: function () {
        return this.irPara(0);
    }
}
console.log(elevadorCorporativo);
console.log(elevadorCorporativo.irPara(5));
console.log(elevadorCorporativo.irPara(8));
console.log(elevadorCorporativo.irPara(3));
console.log(elevadorCorporativo.irPara(3));
console.log(elevadorCorporativo.irPara(1));
console.log(elevadorCorporativo.irPara(11));
console.log(elevadorCorporativo.voltarParaTerreo());



// console.log('lifting weights repetition 1');
// console.log('lifting weights repetition 2');
// console.log('lifting weights repetition 3');
// console.log('lifting weights repetition 4');
// console.log('lifting weights repetition 5');
// console.log('lifting weights repetition 6');
// console.log('lifting weights repetition 7');
// console.log('lifting weights repetition 8');
// console.log('lifting weights repetition 9');
// console.log('lifting weights repetition 10');




// ====================== LOOPS ==== //
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

const rafaelArray = [
    'Rafael',
    'Araújo',
    2025 - 1992,
    'Web developer',
    ['Coding', 'Gaming', 'Reading'],
    true
];
for (let i = 0; i < rafaelArray.length; i++) {
    console.log(rafaelArray[i]);
}

// ========= Lista de Preços ========== //
const precos = [
    100,
    200,
    300,
    400,
    500
];
for (let i = 0; i < precos.length; i++) {
    console.log(`Preço original: (${precos[i]}) e após desconto: (${precos[i] * 0.9})`);
}

// ========= Caixa Registradora ========== //
const caixaRegistradora = {
    precosDeProdutos: [33, 28, 15, 12, 47, 63],
    valorTotal: 0,

    calcularValorTotal: function () {
        let somaTemporaria = 0;

        for (let i = 0; i < this.precosDeProdutos.length; i++) {
            somaTemporaria += this.precosDeProdutos[i];
        }
        this.valorTotal = somaTemporaria;

        return this.valorTotal;
    }
}
console.log(caixaRegistradora);
console.log(caixaRegistradora.calcularValorTotal());
console.log(caixaRegistradora.calcularValorTotal());


// ==================== Contador de Pares ===================== //
const analisadorNumeros = {
    numeros: [5, 12, 8, 13, 44, 9, 10],
    qtdPares: 0,
    

    contadorDePares: function () {
        this.qtdPares = 0;
        
        for (let i = 0; i < this.numeros.length; i++) {
            if (this.numeros[i] % 2 === 0) {
                this.qtdPares++;
            }
        }
        return `Foram encontrados ${this.qtdPares} números pares!`
    }
}
console.log(analisadorNumeros);
console.log(analisadorNumeros.contadorDePares());
console.log(analisadorNumeros.contadorDePares());

// ================== Filtro de Spam de E-mails ================= //
const gerenciadorDeEmails = {
    emailsRecebidos: [
        'Reunião amanhã',
        'Ganhe dinheiro rápido!!!',
        'Projeto alpha',
        'Promoção imperdível!',
        'Almoço de domingo'
    ],

    lixeiraSpam: [],

    caixaDeEntrada: [],

    organizarEmails: function () {
        this.lixeiraSpam.length = 0;
        this.caixaDeEntrada.length = 0;

        for (let i = 0; i < this.emailsRecebidos.length; i++) {

            if (this.emailsRecebidos[i].includes('dinheiro') || this.emailsRecebidos[i].includes('Promoção')) {
                this.lixeiraSpam.push(this.emailsRecebidos[i]);
            } else {
                this.caixaDeEntrada.push(this.emailsRecebidos[i]);
            }
            
        }
        return 'Emails organizados com sucesso!';
    }
}
console.log(gerenciadorDeEmails);
// console.log(gerenciadorDeEmails.emailsRecebidos);
console.log(gerenciadorDeEmails.organizarEmails());
console.log(gerenciadorDeEmails, gerenciadorDeEmails.organizarEmails());


// =================== Banco Digital ======================= //
const bancoDigital = {
    clientes: [
        { nome: 'Ana', saldo: 1000 },
        { nome: 'Beto', saldo: -50 },
        { nome: 'Carla', saldo: -200 },
        { nome: 'Daniel', saldo: 5000 }
    ],

    devedores: [],

    processarContas: function () {
        this.devedores.length = 0;
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].saldo < 0) {
                this.devedores.push(this.clientes[i].nome);
            } else {
                this.clientes[i].saldo *= 1.1;
            }
        }
        return `Processamento concluído. Há ${this.devedores.length} clientes endividados!`;
    }
}

console.log(bancoDigital);
console.log(bancoDigital, bancoDigital.processarContas());


// ============================================= //
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise --------- ${exercise}`)


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️`);
    }
};

// ====== Introduction to While Loops ====== //
for (let workout = 1; workout <= 10; workout++) {
    console.log(`Preparing for workout: ${workout}!`)
}

let workout = 1;
while (workout <= 10) {
    console.log(`Preparing for workout: ${workout}!`);
    workout++;
}
// O loop While, diferente do loop for, não depende de um contador inicial. Com apenas uma condição que deve ser TRUE, o loop while continua a executar seu bloco de código até que a condição se torne FALSE.


// ========================================================== //
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}:`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
//=========================================================== //

// ======= Final fundamentals test ======== //
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill  * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);

    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvarage([2, 3, 7]));
console.log(calcAvarage(tips));
console.log(calcAvarage(totals));

