const fatocatEl = document.getElementById('fato-cat');
const buscarFat = document.getElementById('buttone');

async function buscarGato(){
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        fatocatEl.textContent = data.fact;
    }catch(err){
        fatocatEl.textContent = `Erro: ${err}`;
    }
}

buscarFat.addEventListener('click', buscarGato);
buscarGato();