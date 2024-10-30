function idToBin(id) {
    //console.log(parseInt(id).toString(2).padStart(16, '0'))
    return parseInt(id).toString(2).padStart(16, '0')
}

function permutation(data, table) {
    let temp = ""
    for (let i = 0; i < table.length; i++) {
        temp += data[table[i] - 1]
    }
    return temp;
}

// Simplified DES function with two rounds and initial permutation
function des(data, key, table) {
    // initial permutation
    data = permutation(data, table)
    
    // split data into left and right
    let L = data.slice(0, data.length / 2)
    let R = data.slice(data.length / 2)

    // two rounds of DES
    for (let i = 0; i < 2; i++) {
        let newL = R
        let newR = ''
        
        for (let j = 0; j < L.length; j++) {
            newR += (parseInt(L[j]) ^ parseInt(key[j % key.length])).toString()
        }
        
        L = newL
        R = newR
    }

    return L + R
}

let studentID = "116294"
let data = idToBin(studentID)
let key = "1100110011001100"
let table = [
    16, 19, 5, 1, 13, 
    14, 4, 21, 10, 8, 
    24, 11, 3, 12, 22, 
    17, 9, 20, 7, 18, 
    23, 2, 6, 15, 25
]

let encryptedData = des(data, key, table)
console.log("Encrypted data:", encryptedData)