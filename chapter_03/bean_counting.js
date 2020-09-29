"use strict";
// with one argument
function countBs(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "B") {
            total += 1;
        }
    }
    return total;
}
console.log(countBs("bbbbBBBB"));


// with two arguments
function countChar(string, letter) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            total += 1;
        }
    }
    return total;
}
console.log(countChar("kkakka", "k"));
