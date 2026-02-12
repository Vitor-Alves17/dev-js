let produtos = [];

async function carregarProdutos() {
    try {
        const response = await fetch('../produtos.json');
        produtos = await response.json();
        exibirProdutos();
    }catch(error) {
        console.error(`Error ao carregar produtos: `, error);
        alert(`Error ao carregar produtos: ` , error.message);
    }
}

function adicionarProdutos() {
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const disponivel = document.getElementById('disponivel').value === true;

    if (nome && !isNaN(preco)) {
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel
        }
        produtos.push(novoProduto);
        exibirProdutos();

    }
}

function exibirProdutos() {

    const produtoLi = document.getElementById('lista-de-produtos');
    produtoLi.innerHTML = '';

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const nome = document.createElement('h3');
        nome.textContent = `produto: ${produto.nome}`;
        produtoDiv.appendChild(nome);

        const preco = document.createElement('p');
        preco.textContent = `preço: ${produto.preco.toFixed(2)}`;
        produtoDiv.appendChild(preco);

        const disponivel = document.createElement('span');
        disponivel.textContent = `produto: ${produto.disponivel ? "Disponivel" : "Indisponivel"}`;
        disponivel.classList.add(produto.disponivel ? "disponivel" : "indisponivel");
        produtoDiv.appendChild(disponivel);


        produtoLi.appendChild(produtoDiv);
    })

    carregarProdutos();
}