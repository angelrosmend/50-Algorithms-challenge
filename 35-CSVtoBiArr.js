//Create a function to convert a CSV text to a “bi-dimensional” array

var data = "John;Smith;954-0000-000\n" +
            "Mich;Tiger;305-000-0000\n" +
            "Monique;Vasquez;103-000-0000";

            console.log(data)
function csvToArr(data){
    var arr = []
    var arrLines = data.split("\n");

    for(var i = 0; i < arrLines.length; i++){
        var arrLine = arrLines[i].split(';')
        arrLines[i] = arrLine;
    }
    return arrLines
}

var result = csvToArr(data)
var resultJSON = JSON.stringify(result)
console.log(resultJSON)