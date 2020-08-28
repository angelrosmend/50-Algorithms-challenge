//Print odd numbers less than 100

function printOddNumbers(){
    for(var i = 100; i > 0; i--){
        if(i % 2 === 1){
            console.log(i)
        }
    }
}

printOddNumbers()

//Recursion approach
function collectOdds(num){
    if(num === 0)return;
    if(num % 2 === 1){
        console.log(num)
    }
    num--;
    collectOdds(num)
}
collectOdds(100)