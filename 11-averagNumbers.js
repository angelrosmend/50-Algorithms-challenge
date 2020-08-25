//Calculate the average of the numbers in an array of numbers

var numArr1 = [12,15, 16, 14, 18, 17, 12, 11, 13, 19]
var numArr2 = [22,15, 26, 18, 20, 17, 21, 23, 24, 19, 21]
var numArr3 = [22,25, 28, 30, 20, 27, 24, 29, 24, 28, 21, 26]

function average(arr){
    let sum = 0;
    let div = arr.length;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / div;
}

var averageArr =  average(numArr3)
console.log(averageArr)