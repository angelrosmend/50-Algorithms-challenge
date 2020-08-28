//Create a function that will merge two arrays and return the result as a new array

var arrA = [1,2,3]
var arrB = [4,5,6]

function mergeArr(a,b){
    var c = []
    for(var i = 0; i < a.length; i++){
        c.push(a[i])
    }
    for(var j = 0; j < b.length; j++){
        c.push(b[j])
    }
    return c
}

var arrC = mergeArr(arrA,arrB)
console.log(arrC)