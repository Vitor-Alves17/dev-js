let idade = prompt("Digite sua idade:");
if (idade < 12) {
    console.log("criança")
}else if (idade <= 17) {
    console.log("adolescente")
}else if (idade <= 59) {
    console.log("adulto")
}else if (idade >= 60) {
    console.log("idoso")
}
let cidade = "São Paulo"

let num1 = 7;
let num2 = 5;

let mes = 5;

switch (mes) {
    case 1:
        console.log("janeiro")
        break;
        case 2:
            console.log("fevereiro")
        break;
            case 3:
                console.log("março")
        break;
                case 4:
                    console.log("abril")
        break;
                    case 5:
                        console.log("maio")
        break;
                        case 6:
                            console.log("junho")
        break;
                            case 7:
                                console.log("julho")
        break;
                                case 8:
                                    console.log("agosto")
        break;
                                    case 9:
                                        console.log("setembro")
        break;
                                        case 10:
                                            console.log("outubro")
        break;
                                            case 11:
                                                console.log("novembro")
        break;
                                                case 12:
                                                    console.log("dezembro")
        break;
}

let nota = prompt("Digite sua nota:");
if (nota >= 9) {
    console.log("Excelete")
}else if (nota >= 7) {
    console.log("Bom")
}else if (nota >= 5) {
    console.log("Regular")
}else if (nota < 5) {
    console.log("Reprovado")
}