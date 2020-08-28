
var arr = [1,2,3];

function rotateRight(arr){
    var last = arr.pop()
    arr.unshift(last);
    return arr;
}

var arrRight = rotateRight(arr)
console.log(arrRight)