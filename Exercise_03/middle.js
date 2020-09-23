/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/
"use strict";
function middle(x) {
    let len = x.length;
    //console.log(len);
    let res = [];
    res[x] = x.slice(x[0], x[len - 2]);
    return res[x];
}
console.log("new array=" + middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
