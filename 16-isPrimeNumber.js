export const isPrime = function isPrime(num){
    if (num < 2){
        return false;
    }
    if( num === 2){
        return true;
    }else{
    for (var i = 2; i < num; i++){
        console.log( `${num} ${i}`)
        if(num % i === 0){
            return false
        }
    }
    return true
}
}


var prime = isPrime(17)
console.log(prime)

