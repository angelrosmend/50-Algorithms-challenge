var string = "dracula"

function reverseStr(str){
    var reversed = str.split('').reverse().join('')
    return reversed
}

var reversedString = reverseStr(string)
console.log(reversedString)