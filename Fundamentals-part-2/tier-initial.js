const listaDeAcesso = [];


function capacidadeDaSala(listaDeAcesso) {
    listaDeAcesso.length > 3
}



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