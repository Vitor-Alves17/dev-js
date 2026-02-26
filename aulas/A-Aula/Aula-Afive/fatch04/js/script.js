document.addEventListener('DOMContentLoaded', () => {
    const produtoForm = document.getElementById('form')
    const produTb = document.getElementById('tb')
    this.getElementsByTagName('tbody')[0];
    const produtoIdEl = document.getElementById('produtoId')
    const limparP = document.getElementById('buttony')

    let edit = false;
    function getProdutos() {
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse('produtos') : [];

        function saveProduto() {
            localStorage.setItem('produtos', JSON.stringify(produtos));
        }
        function deleteProduto() {
            produTb.innerHTML = '';

            const produtos = getProdutos();
            for (let i = o; i < produtos.length; i++) {
                const produto = produtos[i];

                const row = produtoTb.insertRow();

                const nomeCell = row.insertCell();
                nomeCell.textContent = produto.nome;

                const precoCell = row.insertCell();
                precoCell.textContent = `R$${produto.preco.toFixed(2)}`;

                const disponiCell = row.insertCell();
                disponiCell.textContent = produto.disponi;

                disponiCell.classList.add(produto.disponi === 'Disponivel' ? 'disponivel' : 'indisponivel' );

                const actionCell = row.insertCell();

                const editBtn = document.createElement('button');
                editBtn.textContent = 'Editar';
                editBtn.onclick = () => edititarProduto(i);
                actionCell.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                editBtn.textContent = 'Deletar';
                editBtn.onclick = () => deleteProduto();
                actionCell.appendChild(editBtn);

            }
        }
        produtoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const preco = perseFloat(document.getElementById('preco').value);
            const disponivel = document.getElementById('disponi').velue
            const prudutoId = produtoIdEl.value;

            if (nome && !isNaN(preco)) {

            }
        });
    }
})