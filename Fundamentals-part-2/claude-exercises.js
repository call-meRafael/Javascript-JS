// Crie um gerenciador simples de tarefas

const gerenciador = {
    tarefas: [],

    adicionar: function(tarefa) {
        id = this.tarefas.length + 1;
        this.tarefas.push({ id: id, texto: tarefa, concluida: false });
        
        return `A tarefa (${tarefa}) foi adicionada com sucesso!`;
    },

    listar: function () {
        let listaFormatada = [];
        
        for (let i = 0; i < this.tarefas.length; i++) {
            let status = this.tarefas[i].concluida ? '[Concluída]' : '[Pendente]';
            if (this.tarefas[i].concluida) {
            listaFormatada.push(`ID: ${this.tarefas[i].id} - ${this.tarefas[i].texto} - ${status}`);
        }
        return listaFormatada; 
    }
},
    

    concluir: function(id) {
        
        for (let i = 0; i < this.tarefas.length; i++) {

            if (this.tarefas[i].id === id) {
                this.tarefas[i].concluida = true;
                
                return true;
            }
        }

        return false;
    },

    remover: function(id) {
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].id === id) {

                this.tarefas.splice(i, 3);
                return true;
            }
        }

        return false;
    },

    contarPendentes: function () {
        let pendentes = 0;

        for (let i = 0; i < this.tarefas.length; i++) {

            if (!this.tarefas[i].concluida) {
                pendentes++;
            }
        }

        return `Você tem ${pendentes} tarefa(s) pendente(s).`;
    }
};
console.log(gerenciador.adicionar("Estudar JavaScript"));
console.log(gerenciador.adicionar("Aprimorar HTML e CSS"));
console.log(gerenciador.adicionar("Aprender ReactJS"));
console.log(gerenciador.adicionar("Aprimorar Inglês"));
console.log(gerenciador.listar());
console.log(gerenciador.concluir(1));
console.log(gerenciador.contarPendentes());
console.log(gerenciador.remover(3))
console.log(gerenciador.tarefas);


// ================================================ //

// Validador de Senha
const validarSenha = function (senha) {
    const erros = [];
    

    // Verifica se a senha atende ao tamanho mínimo
    if (senha.length < 8) {
        erros.push('A senha deve ter pelo menos 8 caracteres!');
    }
    
    // Verificar presenças
    let temNumero = false;
    let temMaiuscula = false;
    let temEspecial = false;

    // String de caracteres especiais
    const especiais = "!@#$%^&*";

    for (let i = 0; i < senha.length; i++) {
        const caracter = senha[i];


        // Verifica se a senha contém pelo menos um número
        if (!isNaN(Number(caracter))) {
            temNumero = true;
        }


        // Verifica se a senha contém pelo menos uma letra maiúscula
        if (caracter === caracter.toUpperCase() && caracter >= 'A' && caracter <= 'Z') {
            temMaiuscula = true;
        }


        // Verifica se a senha contém pelo menos um caracter especial
        if (especiais.includes(caracter)) {
            temEspecial = true;
        }
    }

    // Retorn de erros após o loop
    if (!temNumero) {
        erros.push('A senha deve conter pelo menos um número!');
    }

    if (!temMaiuscula) {
        erros.push('A senha deve conter pelo menos uma letra maiúscula!');
    }

    if (!temEspecial) {
        erros.push('A senha deve conter pelo menos um caracter especial!');
    }

    
    return {
        valida: erros.length === 0,
        erros: erros
    };
}

console.log(validarSenha('abc'));
console.log(validarSenha('abcedfgh'));
console.log(validarSenha('Abcedfgh'));
console.log(validarSenha('Abcedfgh1'));
console.log(validarSenha('Abcd123'));
console.log(validarSenha(''));

// ================================================ //

// Calculadora de estatisticas
const calculadora = {
    numeros: [],
    
    // Números de entrada // Números devem ser números reais
    adicionar: function (num) {
        if (typeof num !== 'number' || !Number.isFinite(num)) {
            return false;
        }
        
        this.numeros.push(num);
        return true;
    },
    

    // Calcular a média ods valores inseridos no array
    media: function () {
        
        if (this.numeros.length === 0) {
        return 0;
        }
        
        let soma = 0;

        for (let i = 0; i < this.numeros.length; i++) {
            soma += this.numeros[i];
        }

        return soma / this.numeros.length;
        
    },
    
    // Filtra o maior valor inserido no array
    maior: function () {
        
        // Verifica se o array está vazio, se sim retorna null, senão segue o bloco de código
        if (this.numeros.length === 0) {
            return null;
        }
        
        // Inicializa com o primeiro valor para suportar números negativos
        let maiorValor = this.numeros[0];

        // Percorre o array e verifica cada valor inserido com intuito de encontrar o maior valor
        for (let i = 0; i < this.numeros.length; i++) {
            
            // Após verificar cada valor no array, checa se os valores inseridos são maiores do que o valor atualmente guardado na variável maiorValor e atribui maiorValor ao valor mais alto encontrado no array
            if (this.numeros[i] > maiorValor) {
                maiorValor = this.numeros[i];
            }
        }
        // Retorna o maior valor inserido no array
        return maiorValor;
    },

    menor: function () {
        // Regra de execução do exercício: Retorna null se o array estiver vazio
        if (this.numeros.length === 0) {
            return null;
        }
        
        // Inicializa com o primeiro valor para suportar números negativos
        let menorValor = this.numeros[0];

        for (let i = 0; i < this.numeros.length; i++) {
            
            // Atribui o menor valor encontrado a variável menorValor
            if (this.numeros[i] < menorValor) {
                menorValor = this.numeros[i];
            }
        }

        return menorValor;
    },
    
    // Filtra os valores pares inseridos no array
    pares: function () {
        // Guarda os valores pares
        const numerosPares = [];

        for (let i = 0; i < this.numeros.length; i++) {

            // Atribui os valores pares encontrados ao novo array
            if (this.numeros[i] % 2 === 0) {
                numerosPares.push(this.numeros[i]);
            }
        }

        return numerosPares;
    },
    
    // Filtra os valores impares inseridos no array
    impares: function () {

        // Guarda os valores impares
        const numerosImpares = [];

        for (let i = 0; i < this.numeros.length; i++) {
            
            // Atribui os valores impares encontrados ao novo array
            if (this.numeros[i] % 2 !== 0) {
                numerosImpares.push(this.numeros[i]);
            }
        }

        return numerosImpares;
    },
    
    // Reseta o array principal
    resetar: function () {

        this.numeros = [];

        return this.numeros = [];
    }
};
// ======= Testes obrigatórios ====== //
console.log(calculadora.adicionar(10));
console.log(calculadora.adicionar(25));
console.log(calculadora.adicionar(15));
console.log(calculadora.adicionar(30));
console.log(calculadora.adicionar(8));

console.log(calculadora.media());
console.log(calculadora.maior());
console.log(calculadora.menor());
console.log(calculadora.pares());
console.log(calculadora.impares());
console.log(calculadora.numeros);

console.log(calculadora.adicionar('abc'));
console.log(calculadora.adicionar(null));
console.log(calculadora.adicionar(undefined));
console.log(calculadora.adicionar(20));

const vazia = Object.create(calculadora);
vazia.numeros = [];
console.log(vazia.media());
console.log(vazia.maior());
console.log(vazia.menor());
console.log(calculadora.resetar())
