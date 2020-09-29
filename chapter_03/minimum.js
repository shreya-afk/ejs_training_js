"use strict";
function minimum(x, y) {
    return x < y
        ? x
        : y;
}
console.log(minimum(3, 2));

//OR

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(min(0, -10));