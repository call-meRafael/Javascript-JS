const alunos = [];
const checarAlunos = function checar(alunos) {

    if (alunos.length === 0) {
        const adicionar = function (alunos) {
            alunos.unshift('Milena');
            

        }
        return adicionar();
    }

}
console.log(alunos, checarAlunos(alunos));