//Create a function that will find the nth Fibonacci number using recursion.


//first aproach
function fib(n) {

      if (n < 2){
        return n
      }
    return fib(n - 1) + fib (n - 2)
    }
  console.log(fib(6))

//second aproah
function findFibonacci(num){
    if(num === 0){
        return 0;
    }
    if (num === 1){
        return 1;
    }
    return findFibonacci(num-1) + findFibonacci(num-2)
}
var n =  findFibonacci(10)
console.log(n)