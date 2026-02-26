const loadingEle = document.getElementById("loading")
const produtoEle = document.getElementById("produto")
const errorEle = document.getElementById("erro")

fetch("https://fakestoreapi.com/products/1")
.then(response => {
    if (!response.ok) {
        throw new Error("Error al guardar el produto, pero le falta sazon" + response.status);
    }
    return response.json();
})
.then(data => {
    loadingEle.style.display = "none";
    produtoEle.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <img src="${data.image}" alt="${data.title}">
    `;
})
.catch(error => {
    loadingEle.style.display = "none";
    errorEle.innerHTML = error.message;
})