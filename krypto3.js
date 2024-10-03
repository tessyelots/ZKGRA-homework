function decode1A(name){
    let temp = ""
    for (let i = 0; i < name.length; i++){
        temp += String.fromCharCode(122 - name.charCodeAt(i) + 97)
    }
    return temp
}

function decode1B(name) {
    let temp = ""
    for (let i = 0; i < name.length; i++){
        let ascii = name.charCodeAt(i)
        if (ascii < 110){
            temp += String.fromCharCode(110 - ascii + 97)
        }else{
            temp += String.fromCharCode(122 - ascii + 110)
        }
    }
    return temp
}

function decodeCaesar(name, places){
    let temp = ''
    for (let i = 0; i < name.length; i++){
        let letter = name.charCodeAt(i) - 97
        letter = letter - places
        if (letter < 0){
            letter += 26
        }
        temp += String.fromCharCode(letter + 97)
    }
    return temp
}

function bruteforceCaesar(name){
    for (let i = 0; i < 26; i++){
        console.log("Decoding caesar by moving " + i + " places:" + decodeCaesar(name, i))
    }
}

const ciphertext1A = "hnfgmb"
const ciphertext1B = "ubstzo"
const ciphertext2 = "lfnmgr"
const K = 19

console.log("Decoding ciphertext1A by first decoding alg.: " + decode1A(ciphertext1A))
console.log("Decoding ciphertext1A by second decoding alg.: " + decode1B(ciphertext1A))
console.log("Decoding ciphertext1A by caesar decoding, by moving 19 places: " + decodeCaesar(ciphertext1A, K))
// console.log("Decoding ciphertext1A by caesar decoding:")
// bruteforceCaesar(ciphertext1A)

console.log("Decoding ciphertext1B by first decoding alg.: " + decode1A(ciphertext1B))
console.log("Decoding ciphertext1B by second decoding alg.: " + decode1B(ciphertext1B))
console.log("Decoding ciphertext1B by caesar decoding, by moving 19 places: " + decodeCaesar(ciphertext1B, K))
// console.log("Decoding ciphertext1B by caesar decoding:")
// bruteforceCaesar(ciphertext1B)

console.log("Decoding ciphertext2 by first decoding alg.: " + decode1A(ciphertext2))
console.log("Decoding ciphertext2 by second decoding alg.: " + decode1B(ciphertext2))
console.log("Decoding ciphertext2 by caesar decoding, by moving 19 places: " + decodeCaesar(ciphertext2, K))
// console.log("Decoding ciphertext2 by caesar decoding:")
// bruteforceCaesar(ciphertext2)