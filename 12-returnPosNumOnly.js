//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

var numArr = [22,-25, -28, 30, 20, 27, 24, 29, 24, -28, 21, -26]

function positiveInt(arr){
    var filtered = []
    for(var i = 0; i < arr.length; i++){
        var integer = arr[i];
        if(integer >= 0){
          filtered.push(integer)
        }
    }
    return filtered;
}

var filteredPositives = positiveInt(numArr)
console.log(filteredPositives)

//using 'For of' aproach

function positiveIntAlt(arr){
    var filtered = []
    for(var integer of arr){
        if(integer >= 0){
          filtered.push(integer)
        }
    }
    return filtered;
}

var filteredPositivesAlt = positiveIntAlt(numArr)
console.log(filteredPositivesAlt)


// using th filter method approach
function filterPositives(arr){
    return arr.filter( positive => positive >= 0)
}

var filtered = filterPositives(numArr)
console.log(filtered)