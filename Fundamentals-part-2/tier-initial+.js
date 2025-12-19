const tentativasDeAcesso = [];
const limiteDeTentativas = 4;

// ======= Verifica se a pessoa cumpre a condição ======= //
// == A condição inicial é ser maior de idade ===== //
function verificarAptidao(pessoa) {
    return pessoa.checarAptidao();
}

// ======= Verifica se uma pessoa ja está registrada ======= //
// == Se a pessoa já estiver registrada, retorna o nome de registro dela ==//
function verificarRegistro(tentativasDeAcesso, pessoa) {

    if (tentativasDeAcesso.includes(pessoa)) {
        return pessoa.nomeCompleto;
    }
    return null;
}
// ===== Registra uma tentativa de entrada ou atualiza a lista de acordo com a quantidade tentativas que a pessoa já fez ====
function registrarTentativaDeEntrada(tentativasDeAcesso, pessoa) {
    
    return tentativasDeAcesso.push(pessoa);
    
}


const rafael = {
    nomeCompleto: 'Rafael Araújo',
    idade: 2025 - 1992,
    
    checarAptidao: function () {
        return this.idade >= 18;
    },

    receberSumario: function () {
        return this.checarAptidao()
        ? `${this.nomeCompleto} possui (${this.idade}) anos, está apto para acessar nossos registros.`
        : `${this.nomeCompleto} é menor de idade (${this.idade}) anos e não pode acessar nossos registros.`;
    }
}

const milena = {
    nomeCompleto: 'Milena Araújo',
    idade: 2025 - 1997,
    
    checarAptidao: function () {
        return this.idade >= 18;
    },

    receberSumario: function () {
        return this.checarAptidao()
        ? `${this.nomeCompleto} possui (${this.idade}) anos, está apto para acessar nossos registros.`
        : `${this.nomeCompleto} é menor de idade (${this.idade}) anos e não pode acessar nossos registros.`;
    }
}
console.log(verificarAptidao(rafael));
console.log(verificarRegistro(tentativasDeAcesso, rafael));
console.log(registrarTentativaDeEntrada(tentativasDeAcesso, rafael));