//Write a functions that returns the number of words in a text
//My solution
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
 }

 let text = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"
//let words = countWords(text)
// console.log(words)


 //guide solution

 //a
console.log(countWordsA(text))

 function countWordsA(text){
     var wasSeparator = true;
     var words = 0;

     for(var c of text){
         if(isSeparator(c)){
             wasSeparator = true; //if current character is separator then advance
             continue;            // set that previous character was separator
         }
         if(wasSeparator){
             words++;
             wasSeparator = false;
         }

     }
     return words;
 }

 //helper

 function isSeparator(c){
     var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"]
     return separators.includes(c)
 }

 //B 

 function countWordsB(text){
     var words = 0;
     if(text.length > 0 && !isSeparator(text[0])){
         words++
     }

     for(var i = 1; i < text.length; i++){
         var curChr = text[i];
         var prevChr = text[i - 1];

         if(!isSeparator(curChr) && isSeparator(prevChr)){
             words++;
         }
     }return words;
 }

 var countB = countWordsB(text);
 console.log(countB)