/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/

"use strict";
let res = [];
let output = 0;
function cumulativeSum(arr1) {
    for (let number of arr1) {
        output += number;
        res.push(output);
    }
    return res;
}
console.log(cumulativeSum([1, 2, 3]));