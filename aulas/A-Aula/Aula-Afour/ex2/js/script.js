const produtos = document.getElementById('list');
const input = document.getElementById('novoitem');
const button = document.getElementById('add');

button.addEventListener('click', () => {
    const novoText = input.value;
    if (novoText != "") {
    const novoitem = document.createElement("li");
    novoitem.textContent = novoText;
    produtos.appendChild(novoitem);
    input.value = "se fode";
    }
})
