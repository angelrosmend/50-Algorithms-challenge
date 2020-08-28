
function firstHundredPrime(){
    n = 0
    p = 0
    while(i < 100){
        if(isPrime(j)){
            console.log(j)
            i++
        }
        j++
    }
}
firstHundredPrime()

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

