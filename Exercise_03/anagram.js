/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */

"use strict";
function isAnagram(str1, str2) {
    let x = str1.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");
    let y = str2.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");
    console.log(x);
    if (x === y) {
        return true;
    }
}
console.log(isAnagram("CAT", "ACT"));