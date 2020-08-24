
function tables(num){
    let table = '';
    let result = '';

    for(var i = 1; i <= 10; i++){
    result = i * num;
    table = `${i} * ${num} = ${result}`
    console.log(table)
    }
}

function printTables(){
for(let i = 1; i <= 10; i++){
    tables(i)
}
}
printTables()
