/*
Fermat’s Last Theorem says that there are no positive integers a, b, and c such that
a^n + b^n = c^n 
for any values of n greater than 2.
Write a function named checkFermat that takes four parameters— a, b, c and n—and checks to see if Fermat’s theorem holds. 
If n is greater than 2 and
a^n + b^n = c^n
the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”
*/

"use strict";
function pow(base, exponent) {
    let res = 1;
    if (base >= 2) {
        for (let i = 0; i < exponent; i++) {
            res *= base;
        }
        return res;
    }
    else {
        console.log("No, that doesn’t work");
    }
}
function checkFermat(a, b, c, n) {
    return ((pow(a, n) + pow(b, n) === pow(c, n))
        ? "Holy smokes, Fermat was wrong!"
        : "No, that doesn’t work");
}

console.log(checkFermat(4, 5, 2, 1));