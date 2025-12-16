/*
const rafael = {
    firstName: 'Rafael',
    lastName: 'Araujo',
    age: 2025 - 1992,
    job: 'Web Developer',
    hobbies: ['Coding', 'Reading', 'TV shows']
};
console.log(rafael);
console.log(rafael.lastName);
console.log(rafael['lastName']);

const nameKey = 'Name';
console.log(rafael['first' + nameKey])

const interestedIn = prompt('What do you want to know about Rafael? Select one of the following options: firstName, lastName, age, job and hobbies');

if (rafael[interestedIn]) {
    console.log(rafael[interestedIn]);
} else {
    alert('Wrong request! Choose between firstName, lastName, age, job and hobbies');
}

rafael.location = 'Brazil';
rafael['instagram'] = '@_rapharaujo_';
console.log(rafael.firstName);
console.log(rafael.hobbies[0]);

//challenge
const milena = {
    firstName: 'Milena',
    friends: ['Rafael', 'Mary', 'Angela']
}
console.log(milena.firstName + ' has ' + milena.friends.length + ' friends: ' + milena.friends.join(', ') + ' and ' + milena.friends[0] + ' is her best friend!');
*/
/*
const rafael = {
    firstName: 'Rafael',
    lastName: 'Araujo',
    birthYear: 1992,
    job: 'Web Developer',
    hobbies: ['Coding', 'Reading', 'TV shows'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function () {
    //     return 2025 - this.birthYear; // this refere-se ao objeto atual (rafael)
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    }
};
*/

// console.log(rafael.calcAge(1992));
// // console.log(rafael['calcAge'](1992));
// console.log(rafael.age);

/*
//challenge 
const milena = {
    firstName: 'Milena',
    birthYear: 1997,
    job: 'store clerk',
    hasDriversLicense: false,

    calcTotalAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcTotalAge()}-years old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(milena.getSummary());
// console.log(`${milena.firstName} is ${this.calcTotalAge()}-years old ${milena['job']}, and has ${milena.hasDriversLicense ? 'a' : 'no'} driver's license`);


*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI which is (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI which is (${mark.bmi})!`);
}

*/


// const rafael = {
//     firstName: 'Rafael',
//     lastName: 'Araujo',
//     birthYear: 1992,
//     job: 'Web Developer',
//     hobbies: ['Coding', 'Reading', 'Gaming'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2025 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2025 - this.birthYear;
//     // }

//     calcAge: function () {
//       this.age = 2025 - this.birthYear;
//       return this.age;
//     }
// };

// console.log(rafael.calcAge());
// console.log(rafael.age);

// challenge

// const milena = {
//     fullName: 'Milena Araujo',
//     birthYear: 1997,
//     job: 'store clerk',
//     hasDriversLicense: false,
//     tvShows: ['Dark', 'Game of Thrones', 'Breaking Bad'],

//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {

//         return `${this.fullName} is a ${this.calcAge()}-years old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. She really thinks that these are the best TV shows of all time: ${this.tvShows.join(', ')}. Her all time favorite TV show are ${this.tvShows[0]}, from Netflix.`;
//     }
// };
// // console.log(milena.calcAge());
// console.log(milena.getSummary());

/*
const listaDePacientes = [];

const rafael = {
    fullName: 'Rafael Araujo',
    statusPresente: true
};

const milena = {
    fullName: 'Milena Araujo',
    statusPresente: false
};

function registrarPaciente(lista, paciente) {

    // Caso 1: lista vazia
    if (lista.length === 0) {
        lista.push(paciente);
        return;
    }

    // Caso 2: verificar primeira posição
    if (lista[0].nome === paciente.nome) {
        lista[0].status = paciente.status;
        return;
    }

    // Caso 3: não encontrado
    lista.push(paciente);
}

console.log(listaDePacientes, rafael)
*/


/* ------- LOOPs ------- */

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// };

/*
const listaDeAcesso = []; // Array inicialmente vazio para armazenar pessoas com acesso à sala especial.
function checarAcesso(listaDeAcesso, rafael, milena) {
    if (rafael.idade >= 18 || milena.idade >= 18) {
        listaDeAcesso.unshift(rafael), listaDeAcesso.push(milena);
        return listaDeAcesso;
    }
} 

const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992,
    status: function () {
        if (this.idade >= 18) {
            return `${this.nome} está apto para entrar na sala especial!`;
        } else {
            return `${this.nome} não pode adentrar na sala especial!`;
        }
    }
};
const milena = {
    nome: 'Milena',
    idade: 2025 - 1997,
    status: function () {
        if (this.idade >= 18) {
            return `${this.nome} está apta para entrar na sala especial!`;
        } else {
            return `${this.nome} não pode adentrar na sala especial!`;
        }
    }
};
console.log(rafael.status());
console.log(milena.status());
console.log(checarAcesso(listaDeAcesso, rafael, milena));
*/


/*
const listaDeAcesso = []; // Array inicialmente vazio para armazenar pessoas com acesso à sala especial.
function checarNomeNaLista(listaDeAcesso, nomeCompleto) {
    if (listaDeAcesso.includes(nomeCompleto)) {
        return `${nomeCompleto} já possui acesso à sala especial!`;
    }
}

function extrairNomes(listaDeAcesso) {
    const nomes = [];

    if (listaDeAcesso.length >= 1) {
        nomes.unshift(listaDeAcesso[0].nomeCompleto);
    }

    if (listaDeAcesso.length >= 2) {
        nomes.push(listaDeAcesso[1].nomeCompleto);
    }

    return nomes;
}

function controlarAcesso(listaDeAcesso, pessoa) {
    const nomesAtuais = extrairNomes(listaDeAcesso);

    if (checarNomeNaLista(nomesAtuais, pessoa.nomeCompleto)) {
        return `${pessoa.nomeCompleto} já existe na lista de acesso!`;
    }

    const entradaGarantida = pessoa.status()
    ? `Acesso permitido para ${pessoa.nomeCompleto}!`
    : `Acesso negado para ${pessoa.nomeCompleto}!`;

    if (entradaGarantida === `Acesso permitido para ${pessoa.nomeCompleto}!`) {
        listaDeAcesso.unshift(pessoa);
    }

    return entradaGarantida;
}

const rafael = {
    nomeCompleto: 'Rafael Araujo',
    idade: 2025 - 1992,

    status: function () {
        if (this.idade >= 18) {
            return `${this.nomeCompleto} possui ${this.idade} anos, portanto está apto para entrar na sala especial!`;
        }
    }
};
const mila = {
    nomeCompleto: 'Milena Araujo',
    idade: 2025 - 1997,

    status: function () {
        if (this.idade >= 18) {
            return `${this.nomeCompleto} possui ${this.idade} anos, portanto está apta para entrar na sala especial!`;
        }
    }
}

console.log(rafael.status());
console.log(mila.status());

console.log(controlarAcesso(listaDeAcesso, rafael));
console.log(controlarAcesso(listaDeAcesso, mila));
*/




/*
const registroDeLivrosEmprestados = [];

function extrairNomes(registroDeLivrosEmprestados) {
    const nomes = [];

    if (registroDeLivrosEmprestados.length >= 1) {
        nomes.unshift(registroDeLivrosEmprestados[0].nome);
    }

    if (registroDeLivrosEmprestados.length >= 2) {
        nomes.push(registroDeLivrosEmprestados[1].nome);
    }

    return nomes;
}

function verificarClienteRegistrado(registroDeLivrosEmprestados, nome) {
    if (registroDeLivrosEmprestados.includes(nome)) {
        return `O cliente ${nome} já possui um livro emprestado!`;
    }
}

function emprestarLivro(registroDeLivrosEmprestados, nome) {
    if (!verificarClienteRegistrado(registroDeLivrosEmprestados, nome)) {
        registroDeLivrosEmprestados.unshift(rafael.nome);
    }
}

function controlarEmprestimo(registroDeLivrosEmprestados, nome) {
    const nomesAtuais = extrairNomes(registroDeLivrosEmprestados);

    if (verificarClienteRegistrado(nomesAtuais, nome.nome)) {
        return `${nome.nome} já possui um empréstimo ativo!`;
    }

    const mensagemAoCliente = nome.aptoParaEmprestimo()
    ? `${nome.nome} teve um empréstimo de 7 dias aprovado!`
    : `${nome.nome} teve o empréstimo negado!`;

    if (nome.aptoParaEmprestimo()) {
        registroDeLivrosEmprestados.push(nome);
    }
    return mensagemAoCliente;
}


const rafael = {
    nome: 'Rafael',
    idade: 2025 - 1992,

    aptoParaEmprestimo: function () {
        return this.idade >= 18;
    },

    sumarioCliente: function () {
        return this.aptoParaEmprestimo() 
        ? `${this.nome} está apto para um empréstimo por 7 dias!`
        : `${this.nome} não esta apto para nossos serviços de empréstimo!`;
    }
};
const milena = {
    nome: 'Milena',
    idade: 2025 - 1997,

    aptoParaEmprestimo: function () {
        return this.idade >= 18;
    },

    sumarioCliente: function () {
        return this.aptoParaEmprestimo() 
        ? `${this.nome} está apta para um empréstimo por 7 dias!`
        : `${this.nome} não esta apta para nossos serviços de empréstimo!`;
    }
};
console.log(rafael.sumarioCliente());
console.log(milena.sumarioCliente());
console.log(controlarEmprestimo(registroDeLivrosEmprestados, rafael))
*/



const listaDoEvento = [];

//Verifica se o nome já está na lista do evento
function checarNomeNaLista(listaDoEvento, nomeCompleto) {
    return listaDoEvento.includes(nomeCompleto);
}

function adicionarNomeNaLista(listaDoEvento, nomeCompleto) {

    const nomeListado = checarNomeNaLista(listaDoEvento, nomeCompleto);
    if (!nomeListado) {

        listaDoEvento.push(nomeCompleto)
        
    }
};




const rafael = {
    nomeCompleto: 'Rafael Araujo',
    idade: 2025 - 1992,

    aptoParaEvento: function () {
        return this.idade >= 18;
    },

    getSumario: function () {
        return this.aptoParaEvento()
        ? `${this.nomeCompleto} pode participar do evento!`
        : `${this.nomeCompleto} não pode participar do evento! Sentimos muito.`;
    }
};
const milena = {
    nomeCompleto: 'Milena Araujo',
    idade: 2025 - 1997,

    aptoParaEvento: function () {
        return this.idade >= 18;
    },

    getSumario: function () {
        return this.aptoParaEvento()
        ? `${this.nomeCompleto} pode participar do evento!`
        : `${this.nomeCompleto} não pode participar do evento! Sentimos muito.`;
    }
};
console.log(adicionarNomeNaLista(listaDoEvento, rafael));
console.log(checarNomeNaLista(listaDoEvento, rafael));
















