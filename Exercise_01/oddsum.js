/*.
Write a recursive function named oddSum that takes a positive odd integer n and 
returns the sum of odd integers from 1 to n. Start with a base case, 
and use temporary variables to debug your solution. 
You might find it helpful to print the value of n each time oddSum is invoked.

*/

"use strict";
//Non-recursive function
let sum = 0;
function oddSum(n) {
    if (n % 2 !== 0 && n > 0) {
        for (let c = 1; c <= n; c++) {
            sum = sum + c;
        }
    }
    return sum;
}
console.log(oddSum(5));


//Recursive function
let sum1 = 0;
function oddSum1(n) {
    if (n === 0) {
        //console.log(sum);
        return sum1;
    }
    else if (n % 2 !== 0 && n > 0) {
        sum1 = sum1 + n;
        //console.log(sum);
        return oddSum1(n - 1);
    } else {
        //sum=sum+n;
        return oddSum1(n - 1);
    }
}
console.log(oddSum1(11));

