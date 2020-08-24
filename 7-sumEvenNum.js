//Calculate the sum of even numbers greater than 10 and less than 30
let add = 0;
let sum;

function print(){
    for(var i = 10; i <= 30; i++){
        if(i % 2 == 0){
            sum = add += i;
            console.log(`${i} + ${add} = ${sum}`)
        }
    }
}
print()