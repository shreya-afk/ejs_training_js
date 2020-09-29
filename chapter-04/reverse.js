/*reverseArray, takes an array as argument and produces a new 
array that has the same elements in the inverse order. */
function reverseArray(array) {
    let n = array.length;
    let myarr = [];
    for (let i = n - 1; i >= 0; i--) {
        myarr.push(array[i]);
    }
    return myarr;
}
//console.log(reverseArray(["s", "h", "y"]));

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
console.log(reverseArrayInPlace([1,2,3,4]));