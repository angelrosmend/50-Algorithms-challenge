var text = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"
var firstLetter = text.toLowerCase()

var capitalized = text.slice(1)
//console.log(capitalized)

function uppercaseFirstLetter(str){
var words = str.toLowerCase().split(' ')

var arr = []

for(var i = 0; i < words.length; i++){
     firstLetter = words[i].charAt(0).toUpperCase()
     slicedWord = words[i].slice(1)
     arr.push(firstLetter + sliceWord)
}

return arr.join(' ')

}

var uppercased = uppercaseFirstLetter(text)
console.log(uppercased)

