function a(name) {
    let temp = ""
    for (let i = 0; i < name.length; i++){
        temp += String.fromCharCode(122 - name.charCodeAt(i) + 97)
    }
    return temp
}

function b(name){
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


const myName = "smutny"

console.time('1a');
console.log(a(myName))
console.timeEnd('1a');

console.time('1b');
console.log(b(myName))
console.timeEnd('1b');
