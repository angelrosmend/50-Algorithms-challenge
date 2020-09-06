//Create a function that will return an array with words inside a text


var text = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"

function arrText(str){
    var words = str.split(' ')
    var arr = []
    for(var i = 0; i < words.length; i++){
        arr.push(words[i])
    }
    return arr;
}
var result = arrText(text)
console.log(result)