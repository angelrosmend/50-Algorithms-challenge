//Print the distance between the first n prime numbers

function printDistance(n){
    var lastPrime = 2;
    i = lastPrime + 1;
    p = 1 //found prims

    while(p < n){
        if(isPrime(i)){
            console.log(i - lastPrime, "\t",i, "-", lastPrime);
            p++;
            lastPrime = i;
        }
        i++;
    }
}

function isPrime(num){
    if(num < 2){
        return false;
    }else{
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }return true
  }
}


printDistance(50)