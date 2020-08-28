//toString / forLoop approach

function sumOfDigits(num){
    var digits = num.toString()
    let sum = 0
    for(var i = 0; i < digits.length; i++){
        sum += parseInt(digits[i])
    }
    return sum
}

var sum = sumOfDigits(172)
//console.log(sum)


//faster approach Reminder and while loop

function sumOfDigitsAlt(num){
    let sum = 0;
    while(num > 0){
       const digits = num % 10
       console.log(digits)
       sum += digits
       num = Math.floor(num / 10)
       //console.log(num)
    }
    return sum
}
var sum = sumOfDigitsAlt(4567)
console.log(sum)


