let name = "John Emanuel Pereira"

function firstAndLast(name) {
    let name2 = name.split(" ")
    let nameLen = name2.length
    console.log(`${name2[0]}  ${name2[nameLen - 1]}`)
}

firstAndLast(name)