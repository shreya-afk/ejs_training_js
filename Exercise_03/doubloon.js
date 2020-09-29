/* 8
A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice. 
Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco, 
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa, 
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon. 
To ignore case, invoke the toLowerCase method before checking.
*/

"use strict";
let count = 0;
function isDoubloon(str) {
    let str1 = str.toLowerCase();
    //console.log(str1);
    for (let i = 0; i < str1.length - 1; i++) {
        for (let j = i + 1; j < str1.length; j++) {
            if (str1.charAt(i) === str1.charAt(j)) {
                //if(str1[i]===str1[j]){
                count++;
            }
        }
    }
    if (count % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDoubloon("shreya"));