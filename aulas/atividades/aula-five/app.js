for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let par = 0
while (par <= 20){
    console.log(par)
    par += 2;
}

do {
    let senha = prompt("digite a senha")
}while (senha !== "1234"){
    senha = prompt("Senha incorreta digite novamente")
}