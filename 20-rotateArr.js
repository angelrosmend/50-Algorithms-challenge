//Rotate an array to the left 1 position

var arr = [1,2,3];

function rotateLeft(arr){
    var first = arr.shift()
    arr.push(first);
    return arr;
}

var arrLeft = rotateLeft(arr)
console.log(arrLeft)