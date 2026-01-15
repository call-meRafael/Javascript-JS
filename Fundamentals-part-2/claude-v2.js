const estoque = {
    produtos: [],
    

    cadastrar: function (nome, quantidadeInicial, preco) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidadeInicial !== 'number' || typeof preco !== 'number') {
            return { sucesso: false };
        }
        for (let i = 0; i < this.produtos.length; i++) {
            // Verificação anti-duplicatas && ignora case sensitive
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                return { sucesso: false, mensagem: 'ERRO! O produto: (' + nome.toUpperCase() + ') já existe no estoque!' };
            }

        }
        // Se não for duplicata, adiciona o produto ao array
        this.produtos.push({ nome: nome, quantidade: Number(quantidadeInicial), preco: Number(preco) });

        return { sucesso: true };
    },

    adicionarUnidade: function (nome, quantidade) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidade !== 'number') {
            return { sucesso: false };
        }

        // Verifica se o produto ja existe no array. Só permite adicionar unidades se o produto existir
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                this.produtos[i].quantidade += Number(quantidade);
                return { sucesso: true };
            }
        }

        return { sucesso: false }
    },

    removerUnidade: function (nome, quantidade) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidade !== 'number') {
            return { sucesso: false };
        }

        // Verifica se o produto existe no array. Só permite remover unidades se o produto for encontrado no array
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                // Inibe a operaçãp se a quantidade solicitada for maior que a quantidade atual no estoque
                if (quantidade > this.produtos[i].quantidade) {
                    return { 
                        sucesso: false,
                        produto: this.produtos[i].nome,
                        mensagem: 'Estoque insuficiente!',
                        disponivel: this.produtos[i].quantidade 
                    };
                }

                this.produtos[i].quantidade -= Number(quantidade);
                return { 
                    sucesso: true,
                    produto: this.produtos[i].nome,
                    mensagem: 'Unidade(s) removida(s) com sucesso!',
                    quantidadeAtual: this.produtos[i].quantidade

                 };
            }
        }

        return { sucesso: false };
    },

    valorProdTotal: function () {
        let total = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].quantidade * this.produtos[i].preco; 

        }

        return total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    },

    buscarProduto: function (nome) {
        // Validação de entrada
        if (typeof nome !== 'string') {
            return { sucesso: false };
        }

        // Identifica todos os detalhes de um produto com base na entrada do usuário
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                return { 
                    sucesso: true, 
                    nome: this.produtos[i].nome,
                    quantidade: this.produtos[i].quantidade,
                    preco: this.produtos[i].preco,
                    valorTotal: this.produtos[i].quantidade * this.produtos[i].preco
                };
            }
        }

        return { sucesso: false, mensagem: 'ERRO! Este produto não existe em nosso estoque!' };
    },

    produtosEmFalta: function (quantidade) {
        // Validação de entrada
        if (typeof quantidade !== 'number') {
            return [];
        }

        const emFalta = [];

        // Verifica quais produtos estão com o estoque menor do que a quantidade de entrada
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].quantidade < quantidade) {
                emFalta.push(this.produtos[i].nome);
            }
        }

        return emFalta;
    },

    resetarEstoque: function () {
        this.produtos = [];
    }
}
console.log(estoque.cadastrar('Notebook', 20, 3000));
console.log(estoque.cadastrar('Mouse', 5, 50));
console.log(estoque.cadastrar('Teclado', 8, 150));
console.log(estoque.adicionarUnidade('notebook', 5));
console.log(estoque.removerUnidade('mouse', 10));

console.log(estoque.buscarProduto('notebook'));
console.log(estoque.valorProdTotal());
console.log(estoque.produtosEmFalta(20)); // (2) ['Mouse', 'Teclado']

// ===== Testes obrigatórios ====== //
console.log(estoque.cadastrar('notebook', 5, 2500)); //ERRO! Este produto já existe no estoque!
console.log(estoque.removerUnidade('mouse', 100)) // {sucesso: false, produto: 'MOUSE', mensagem: 'Estoque insuficiente!', disponivel: 5}
console.log(estoque.removerUnidade('notebook', 3)) // {sucesso: true, produto: 'NOTEBOOK', mensagem: 'Unidade(s) removida(s) com sucesso!', quantidadeAtual: 22}
console.log(estoque.buscarProduto('tablet')); // ERRO! Este produto não existe em nosso estoque!
//estoque.resetarEstoque(); // Método bonus: Resetar o estoque
console.log(estoque.produtos);
