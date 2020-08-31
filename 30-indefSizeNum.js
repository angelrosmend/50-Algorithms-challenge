//Create a function that will add two indefinite size numbers.

var n1 = "2545884345874"
var n2 = "7274876876485"

function add(sNum1. sNum2){
    var str = "";
    vr carry = 0;

    var maxSize = Math.max(sNum1.length, sNum2.length);

    for(var i = 0; i < maxSize; i++){
        var digit1 = digitFromRight(sNum1, i);
        var digit2 = digitFromRight(sNum2, i)
    }
}



//helper
function digitFromRight(str, digitNo){
    if(digitNo >= str.length)
    return 0;

    var char = str[ str.length - 1 - digitNo];
    return parseInt(char)

}