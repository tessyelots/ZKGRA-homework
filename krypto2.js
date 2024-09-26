const myName = "smutnynfoajfiqebqebjkqdvjbqeffvjbqefvjbeqv"
const K = myName.charCodeAt(0) - 96

function move(charNumber){
    charNumber += K
    if (charNumber > 25){
        return charNumber - 26
    }

    return charNumber
}

function caesar(name){
    let temp = ''
    for (let i = 0; i < name.length; i++){
        let letter = name.charCodeAt(i) - 97
        letter = move(letter)
        temp += String.fromCharCode(letter + 97)
    }
    return temp
}


console.time('timer')
console.log(caesar(myName))
console.timeEnd('timer')
