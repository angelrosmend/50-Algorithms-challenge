//36- Create afunction that converts a string to an array of characters
let string = "I like JavaScript"
//My solution
function getChar(str){
    let arr = []
    let string = str.toLowerCase().split('')

    for(var i = 0; i < string.length; i++){
        let letter = str[i].charAt(0)
        if(letter !== ' ') arr.push(letter)
    }
    return arr
}
var result = getChar(string)
console.log(result)

//guide's solution 
function getCharAlt(str){
   return Array.from(str)
}

var resultAlt = getCharAlt(string)
console.log(resultAlt)