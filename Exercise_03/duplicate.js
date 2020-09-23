/* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
 */

"use strict";
function hasDuplicates(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i !== j) {
                if (arr1[i] === arr1[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(hasDuplicates(["ramu", "ramu", "gunh", "raghu"]));