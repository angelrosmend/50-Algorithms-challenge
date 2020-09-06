// Calculate the sum of numbers received in a comma delimited string

var string = "1, 3, 5, 5, 4.5";

function add(str){
    var arr = str.split(',')
    var sum = 0;
    for(var num of arr){
        sum +=  parseFloat(num)
    }
    return sum
}

console.log(add(string))