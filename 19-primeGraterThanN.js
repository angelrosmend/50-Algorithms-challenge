//Create a function that will return in an array the first “p” prime numbers greater than "n"

function arrPrime(p, n){
    var arr = []
    i = 0
    while(i < p){
        if(isPrime(n)){
            arr.push(n)
            i++
        }
        n++
    }
    return arr
}

var arr = arrPrime(10, 50)//expected output [53,59,61,67,71,73,79,83,89,97]*/
console.log(arr)

//helper function
function isPrime(num){
    if (num < 2){
        return false;
    }
    if( num === 2){
        return true;
    }else{
    for (var i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
}
