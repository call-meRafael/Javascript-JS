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
