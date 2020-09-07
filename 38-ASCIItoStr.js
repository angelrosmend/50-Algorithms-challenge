//Create a function that will convert an array containing ASCII codes in a string

let ASCII = [
    73,  32, 108, 105, 107, 101,
    32,  74,  97, 118,  97,  83,
    99, 114, 105, 112, 116
  ]
//standar JS
  function convert(arr){
      var str = []
      for(var i = 0; i < arr.length; i++){
          var char = String.fromCharCode(arr[i])
          str.push(char)
     }
     return str.join('')
  }
  
 console.log(convert(ASCII))

//ES6 approach

const convertAlt = (arr) => String.fromCharCode(arr)

console.log(convertAlt(ASCII))