//Create a function that will convert a string in an array containing the ASCII codes of each character

let string = "I like JavaScript";

function getASCII(str){
    let ascii = []
    let letters = Array.from(str)

    for(var i = 0; i < letters.length; i++){
        let char =  letters[i].charCodeAt(0)
        ascii.push(char)
        console.log(`${letters} = ${char}`)
    }
    return ascii
}

console.log(getASCII(string))