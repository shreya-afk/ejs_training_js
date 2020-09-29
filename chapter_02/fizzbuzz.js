"use strict";
for (let x = 1; x <= 100; x++) {
    let res = "";
    if (x % 3 === 0) {
        //console.log("Fizz");
        res = res + "Fizz";
    }
    else if (x % 5 === 0) {
        //console.log("Buzz");
        res = res + "Buzz";
    }
    console.log(res || x);
    //else
    //console.log(x);
}

