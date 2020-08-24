// Calculate 10! - Reminder n! = 1 * 2 * ... * n

function print(){
    let prod = 1;
    let result;
    for(var i = 1; i <= 10; i++){
      result =  prod *= i;
      console.log(result)
    }
}
print()