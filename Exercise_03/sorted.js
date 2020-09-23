/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/
"use strict";
function isSorted(x) {
    let n = x.length;
    for (let i = 0; i < n - 1; i++) {
        if (x[i] > x[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3]));
