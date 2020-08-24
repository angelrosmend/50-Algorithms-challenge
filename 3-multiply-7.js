//Print the multiplication table with 7

function multiplyTable(num) {
    let table = '';
    let result = '';

for(let i = 1; i <= 10 ; i++){
    result = i * num;
    table = `${i} * ${num} = ${result}`
    console.log(table) 
}
}
multiplyTable(7);