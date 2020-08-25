//13. Find the maximum number in an array of numbers

var numArr = [22, 25, 28, 30, 20, 27, 24, 29, 24, 28, 21, 26];// 30

function findMaxNum(arr){
    var max = arr[0]

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

var maxNum = findMaxNum(numArr)
console.log(maxNum)

// Math.max() and spread operator approach

function getMaxNum(arr){
    var max = Math.max(...arr)
    console.log(max)
}
getMaxNum(numArr)