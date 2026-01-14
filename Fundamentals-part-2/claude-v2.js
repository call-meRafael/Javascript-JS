const estoque = {
    produtos: [],
    

    cadastrar: function (nome, quantidadeInicial, preco) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidadeInicial !== 'number' || typeof preco !== 'number') {
            return false;
        }
        for (let i = 0; i < this.produtos.length; i++) {
            // Verificação anti-duplicatas && ignora case sensitive
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                return 'ERRO! Este produto já existe no estoque!';
            }

        }
        // Se não for duplicata, adiciona o produto ao array
        this.produtos.push({ nome: nome, quantidade: Number(quantidadeInicial), preco: Number(preco) });

        return true
    },

    adicionarUnidade: function (nome, quantidade) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidade !== 'number') {
            return false;
        }

        // Verifica se o produto ja existe no array. Só permite adicionar unidades se o produto existir
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                this.produtos[i].quantidade += Number(quantidade);
                return true;
            }
        }

        return false;
    },

    removerUnidade: function (nome, quantidade) {
        // Validação de entrada
        if (typeof nome !== 'string' || typeof quantidade !== 'number') {
            return false;
        }

        // Verifica se o produto existe no array. Só permite remover unidades se o produto for encontrado no array
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                this.produtos[i].quantidade -= Number(quantidade);
                return true;
            }
        }

        return false;
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
            return null;
        }

        // Identifica todos os detalhes de um produto com base na entrada do usuário
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
                return { 
                    nome: this.produtos[i].nome,
                    quantidade: this.produtos[i].quantidade,
                    preco: this.produtos[i].preco,
                    valorTotal: this.produtos[i].quantidade * this.produtos[i].preco
                };
            }
        }

        return 'ERRO! Este produto não existe em nosso estoque!';
    },

    produtosEmFalta: function (quantidade) {
        // Validação de entrada
        if (typeof quantidade !== 'number') {
            return false;
        }

        // Verifica quais produtos estão com o estoque menor do que a quantidade de entrada
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].quantidade < quantidade) {
                return this.produtos[i].nome;
            }
        }

        return 'Não há produtos em falta no estoque!';
    },

    resetarEstoque: function () {
        this.produtos = [];
    }
}
console.log(estoque.cadastrar('Notebook', 10, 3000));
console.log(estoque.cadastrar('Mouse', 50, 50));
console.log(estoque.cadastrar('Teclado', 30, 150));
console.log(estoque.adicionarUnidade('notebook', 5));
console.log(estoque.removerUnidade('mouse', 10));

console.log(estoque.buscarProduto('notebook'));
console.log(estoque.valorProdTotal());
console.log(estoque.produtosEmFalta(20));

// ===== Testes obrigatórios ====== //
console.log(estoque.cadastrar('notebook', 5, 2500)); //ERRO! Este produto já existe no estoque!
console.log(estoque.removerUnidade('mouse', 100)) // Quantidade atualizada para -60
console.log(estoque.buscarProduto('tablet')); // ERRO! Este produto não existe em nosso estoque!
//estoque.resetarEstoque(); // Método bonus: Resetar o estoque
console.log(estoque.produtos);
