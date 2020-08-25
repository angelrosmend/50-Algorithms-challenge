//Print the first 10 Fibonacci numbers without recursion

//1,1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(){
    f0 = 0;
    f1 = 1;

    for( var i = 1; i <= 10; i++){
        fi = f0 + f1;
        f0 = f1;
        f1 = fi;

        console.log(fi)

        //Follow loop
        /*first cicle            second cicle         third cicle       fourth cicle         ... and so on
         fi = 0 + 1 = 1         fi = 1 + 1 = 2       fi = 1 + 2 = 3     fi = 2 + 3 = 5
         f0 = 1                 f0 = 1               f0 = 2             f0 = 3
         f1 = 1                 f1 = 2               f1 = 3             f1 = 5 
        */




    }
    return fi;

}
fibonacci()