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