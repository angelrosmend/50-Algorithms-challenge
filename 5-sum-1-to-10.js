//Calculate the sum of numbers from 1 to 10

let add = 0;
function sum(){
    let result;
    for(let i = 1; i <= 10; i++){
     result = add += i
        console.log(result)
    }
}

sum(add)

//recursion approach

function recursiveSum(num){
    if(num === 1)return 1;
    return num + recursiveSum(num -1)
}
console.log(recursiveSum(9))
