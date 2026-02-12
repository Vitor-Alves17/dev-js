const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal');
const fruta = ["maçã", "uva", "banana"]

exemploArrayLiteralDiv.innerHTML = `
<h2>Exemplo frua literal</h2> 
<p>Array: [ ${fruta} ]</p>
`;

const exemploArrayDeAcessoDiv = document.getElementById('exemplo-array-acesso');
const nums = [1, 2 , 3 ,4 ,5 ,6]

function mostrar() {
    for (let i = 1; i <= nums.length; i++) {
        return nums[1];
    }
    let most = mostrar();
}
exemploArrayDeAcessoDiv.innerHTML = `

<p>Primeiro numero: ${nums[0]}</p>
<p>Segundo numero: ${nums[1]}</p>
<p>Terceiro numero: ${nums[2]}</p>
<p>Quarto numero: ${nums[3]}</p>
<p>Quinto numero: ${nums[4]}</p>
<p>Sexto numero: ${nums[4]}</p>
`;

const exemploArrayModificadoDiv = document.getElementById('exemplo-array-modificado');
const cores = ["azul", "amarelo", "verde"];

cores[0] = "rosa"

exemploArrayModificadoDiv.innerHTML = `
<h2>Arrays Modificado</h2>
<p>Array: [ ${cores} ] </p>
`;
