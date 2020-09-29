/* 1
Write a function called nestedSum that takes an array of arrays of integers 
and adds up the elements from all of the nested arrays. For example:

>>> let t = [[1, 2], [3], [4, 5, 6]];
>>> nestedSum(t)
21
*/
"use strict";
function nestedSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
console.log(nestedSum([[1, 2], [3, 4], [2, 3, 4]]));

