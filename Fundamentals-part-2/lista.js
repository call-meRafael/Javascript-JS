
const lista = document.querySelector('#lista-produtos');
const btnCarregar = document.querySelector('#btn-carregar');

// ======================= //
// Capturando os dados dos novos produtos 


// ======================= //
function enviarNovosItens() {
    return sistemaDeEstoque.produtos.push(...novosProdutos.produtosRecemAdicionados);
}

const sistemaDeEstoque = {
    produtos: [
        { nome: 'Notebook', preco: 5000, quantidade: 10 },
        { nome: 'Mouse', preco: 120, quantidade: 8 },
        { nome: 'Monitor 4k', preco: 2000, quantidade: 5 },
        { nome: 'Teclado Mecânico', preco: 370, quantidade: 11 },
        { nome: 'Cadeira Gamer', preco: 1480, quantidade: 0 }
    ],

    calcValorTotalDoEstoque: function () {
        let valorAcumuladoDeMercadorias = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            valorAcumuladoDeMercadorias += this.produtos[i].preco * this.produtos[i].quantidade;
        }
        return `O valor total de nosso estoque é de ${valorAcumuladoDeMercadorias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`;
    },

    listarProdutosEsgotados: function () {
        let produtosEsgotados = [];
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].quantidade === 0) {
                produtosEsgotados.push(this.produtos[i].nome);
            }
        }
        if (produtosEsgotados.length === 0) {
            return 'Estoque cheio!';
        } else {
            return `Nosso estoque possui um ou mais produtos esgotados! produto: (${produtosEsgotados})`;
        }
    }
}


btnCarregar.addEventListener('click', function () {
    lista.innerHTML = '';
    for (let i = 0; i < sistemaDeEstoque.produtos.length; i++) {
        let produto = sistemaDeEstoque.produtos[i];
        let tagDoItem = `<li>${produto.nome} - ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

        if (produto.quantidade === 0) {
            tagDoItem += `<span style="color: crimson; font-weight: bold; margin-left: 10px;">(ESGOTADO)</span>`; 
        }

        tagDoItem += '</li>';
        lista.innerHTML += tagDoItem;
    }
});


// -----------------------------------------------------------------------//

const novosProdutos = {
    produtosRecemAdicionados: []
};

const btnAdd = document.querySelector('#btn-adicionar');
const listaNovosProdutos = document.querySelector('#novos-produtos');
const btnEnviar = document.querySelector('button[type="submit"]');

btnAdd.addEventListener('click', function () {
    // armazenando os valores de entrada do usuário
    // método trim para remover espaços indesejados
    const produtoNome = document.querySelector('#campo-nome').value.trim(); 
    const produtoPreco = Number(document.querySelector('#campo-preco').value);
    const produtoQtd = Number(document.querySelector('#campo-qtd').value);
    
    // Validação simples: não adicione se nome vazio ou valores inválidos
    if (produtoNome === '' || isNaN(produtoPreco) || isNaN(produtoQtd)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }
    
    // Adicione o novo produto ao array (armazene preço e qquantidade como números)
    novosProdutos.produtosRecemAdicionados.push({
        nome: produtoNome,
        preco: produtoPreco,
        quantidade: produtoQtd
    });
    
    // Limpa a lista para renderizar novamente
    listaNovosProdutos.innerHTML = '';

    // Renderizar nova lista
    function renderizarLista (prodtsNovos, listaAlvo) {
        listaAlvo.innerHTML = '';

        for (let i = 0; i < prodtsNovos.length; i++) {

            const produto = prodtsNovos[i];

            listaAlvo.innerHTML +=  `
                <li>
                    ${produto.nome} - ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - Quantidade: ${produto.quantidade}
                    <button 
                    type="button" 
                    onclick="removerProduto(${prodtsNovos.indexOf(produto)})"
                    >Remover
                    </button>
                </li>
            `;
        }
    }
    renderizarLista(novosProdutos.produtosRecemAdicionados, listaNovosProdutos);
    
    
    // Limpa os inputs após adicionar
    document.querySelector('#campo-nome').value = '';
    document.querySelector('#campo-preco').value = '';
    document.querySelector('#campo-qtd').value = '';
});

// Enviar os novos produtos para o Sistema de Estoque
btnEnviar.addEventListener('click', function () {
    
    const produtosNovos = novosProdutos.produtosRecemAdicionados;
    sistemaDeEstoque.produtos.push(...produtosNovos);
    listaNovosProdutos.innerHTML = '';
    novosProdutos.produtosRecemAdicionados = [];
    return;
})




