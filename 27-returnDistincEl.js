//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

var array = [1,2,3,4,5,6,7]
var array1 = [1,2,3,6,-1,2,9,10,7,10,-1,100,12,11,12]

function getDistincElements(arr){
    let newArr = []
    for(var i = 0; i < arr.length; i++){
        let element = arr[i];
        if(!isInArr(element, newArr)){
            newArr.push(element)
        }
    }
    return newArr
}

function isInArr(n, arr){
    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        if (element === n)
        return true;
    }
    return false
}

var newArray = getDistincElements(array1)
console.log(newArray)

//get random elements

function getRandomElements(arr){
    let newArr = []
    for(var i = 0; i < arr.length; i++){
        let element = Math.floor(Math.random() * 10)
            newArr.push(element)
    }
    return newArr
}

