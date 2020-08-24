/**
 Calculate the sum of numbers
in an array of numbers.
Example array:
[2, 3, -1, 5, 7, 9, 10, 15, 95]
 */

 function sumArr(arr){
     let sum = 0;
     for(var i = 0; i < arr.length; i++){
       sum += arr[i];
     }
     return sum
 }
var numArr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
var sumAdded = sumArr(numArr)
console.log(sumAdded)