

//Create a function that will add two indefinite size numbers.

var n1 = '125'
var n2 = "175"

var sum= add(n1, n2);
//console.log(n1, "\n", n2, "\n", sum)

function add(sNum1, sNum2){
    var str = "";
    var carry = 0;

    var maxSize = Math.max(sNum1.length, sNum2.length);

    for(var i = 0; i < maxSize; i++){
        var digit1 = digitFromRight(sNum1, i);
        var digit2 = digitFromRight(sNum2, i);

        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        str = digitSum.toString() + str;
    }
    if (carry > 0)
    s = carry + str;
    return str
}



//helper
function digitFromRight(str, digitNo){
    if(digitNo >= str.length)
    return 0;

    var char = str[ str.length - 1 - digitNo];
    return parseInt(char)

}

console.log(sum)