//Calculate the sum of first 100 prime numbers

function sumPrime(){
    p = 0;//prime
    i = 0;//index
    sum = 0;
    while(p < 100){
        if(isPrime(i)){
           sum += p;
            p++
        }
        i++
    }return sum;
}
console.log(sumPrime())


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
