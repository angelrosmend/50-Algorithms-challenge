//Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

var array1 = [1,2,3,4,5,6,7]
var array2 = [2,4,6,8,9,11]

function uniqueValues(arr1, arr2){
    let newArr = []
    for(var i = 0; i < arr1.length; i++){
        let unique = arr1[i]
        if(!arr2.includes(unique)){
            newArr.push(unique)
        }
    }
    return newArr;
}

var array = uniqueValues(array1,array2)
console.log(array)