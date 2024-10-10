const square = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p', 'q', 'r'],
    ['s', 't', 'u', 'v', 'w', 'x'],
    ['y', 'z', '0', '1', '2', '3'],
    ['4', '5', '6', '7', '8', '9']
]

function getNumber(character){
    if (character === ' '){
        return ' '
    }else{
        for (let i = 0; i < square.length; i++){
            for (let j = 0; j < square[i].length; j++){
                if (square[i][j] === character.toLowerCase()){
                    return (i+1).toString() + (j+1).toString()
                }
            }
        }
    }
}

function encrypt(text){
    let temp = ''
    for (let i = 0; i < text.length; i++){
        temp += getNumber(text[i])
    }

    return temp
}

const messageA = 'ENCRYPT ME 2 DAY'
const messageB = 'smutny'

console.log(messageA + ' = ' + encrypt(messageA))
console.log(messageB + ' = ' + encrypt(messageB))