/*Create a function that will receive two arrays of numbers as arguments and
return an array composed of all the numbers that are either in the first array
or second array but not in both*/

var arr1 = [1,2,3,4,5,6,7]
var arr2 = [6,3,8,4,10,5]

function uniqueValues(ar1,ar2){
    var newArr = []

    for(var i = 0; i < ar1.length; i++){
        let unique = ar1[i]
        if(!ar2.includes(unique)){
        newArr.push(ar1[i])
        }
    }
    for(var j = 0; j < ar2.length; j++){
        let unique = ar2[j]
        if(!ar1.includes(unique)){
        newArr.push(arr2[j])
        }
    }
    return newArr;
}

var arr = uniqueValues(arr1, arr2)
console.log(arr)

