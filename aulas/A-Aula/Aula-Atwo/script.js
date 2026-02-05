const produtos = {
    produto1: {
        nome: 'Camisa de algodão',
        preco: 59.99,
        disponivel: true
    },
    produto2: {
        nome: 'Calcinha azual calcinha',
        preco: 29.99,
        disponivel: false
    },
    produto3: {
        nome: 'Tenis da nike',
        preco: 299.99,
        disponivel: true
    }
}

const productsList = document.getElementById('listas-de-produtos');

for(const key in produtos){
    if (produtos.hasOwnProperty(key)){
        const produto = produtos[key];

        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const nomeH3 = document.createElement('h3');
        nomeH3.textContent = produto.nome;

        const precop = document.createElement('p');
        precop.textContent = `Preço: R$${produto.preco.toFixed(2)}`;

        const disponivelp = document.createElement('p');
        disponivelp.textContent = `Disponibilidade: `;
        const disponivel1p = document.createElement('span');
        disponivel1p.textContent = produto.disponivel ? `Disponivel` : `Indisponivel`;
        disponivel1p.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponivelp.appendChild(disponivel1p);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precop);
        produtoDiv.appendChild(disponivelp);

        productsList.appendChild(produtoDiv);
    }
}