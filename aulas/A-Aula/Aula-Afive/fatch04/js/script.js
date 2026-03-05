document.addEventListener('DOMContentLoaded', () => {
    const produtoForm = document.getElementById('form')
    const tbody = document.getElementsByTagName('tbody')[0];
    const produtoIdEl = document.getElementById('produtoId')
    const limparP = document.getElementById('buttony')

    let edit = false;
    function getProdutos() {
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse(produtos) : [];
    }
        function saveProduto(produtos) {
            localStorage.setItem('produtos', JSON.stringify(produtos));
        }
        function showProduto() {
            tbody.innerHTML = '';

            const produtos = getProdutos();
            for (let i = 0; i < produtos.length; i++) {
                const produto = produtos[i];

                const row = tbody.insertRow();

                const nomeCell = row.insertCell();
                nomeCell.textContent = produto.nome;

                const precoCell = row.insertCell();
                precoCell.textContent = 'R$ ' + produto.preco;

                const disponiCell = row.insertCell();
                disponiCell.textContent = produto.disponi;

                disponiCell.classList.add(produto.disponi === 'Disponivel' ? 'disponivel' : 'indisponivel' );

                const actionCell = row.insertCell();

                const editBtn = document.createElement('button');
                editBtn.textContent = 'Editar';
                editBtn.onclick = () => editarProduto(i);
                actionCell.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';
                deleteBtn.onclick = () => removeProduto();
                actionCell.appendChild(deleteBtn);

            }
        }

    produtoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const preco = parseFloat(document.getElementById("preco").value)
        const disponivel = document.getElementById('disponi').value
        const produtoId = produtoIdEl.value;

        if(nome && !isNaN(preco)){
            const produtos = getProdutos();

            if (edit) {
                produtos[produtoId].nome = nome;
                produtos[produtoId].preco = preco;
                produtos[produtoId].disponibilidade = disponivel;
                edit = false;
            } else {
                produtos.push( {nome: nome, preco: preco, disponi: disponivel } );
            }
            saveProduto(produtos);
            showProduto();
            produtoForm.reset();
            produtoIdEl.value = "";
        } else {
            alert('pero le falta sazon')
        }
    })


    function editarProduto(index) {
        edit = true;
        const produtos = getProdutos();
        const produto = produtos[index];

        document.getElementById('nome').value = produto.nome;
        document.getElementById('preco').value = produto.preco;
        document.getElementById('disponi').value = produto.disponibilidade;

        limparP.style.display = 'inline-block';
    }

    function removeProduto(index) {
        if(confirm('Are you sure?')) {
            const produtos = getProdutos();
            produtos.splice(index, 1)
            saveProduto(produtos);
            showProduto();
        }
    }

    limparP.addEventListener('click', () => {
        edit = false;
        produtoForm.reset();
        produtoIdEl.value = '';
        limparP.style.display = 'none';
    })
})