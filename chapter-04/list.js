//Array to List

function arrayToList(array) {
    let list=null;
    for(let i=array.length-1; i>=0; i--) {
        list={ value: array[i], rest: list};
    }
    return list;
}
console.log(arrayToList([1,2,3,4]));

//Array to List
function arrayToList(array) {
    let newArray= array.reverse().reduce((rest, value) => {
      return {
        value: value,
        rest: rest };
    }, 0);
    return newArray;
}
console.log(arrayToList([1,2,3,4]));


//list to array
let myList= { 
    value: 10, 
    rest: { 
        value: 20, 
        rest: { 
            value: 30, 
            rest: null 
        } 
    } 
};
function listToArray(list) {
    let array = [];
    let curr = list;
    while (curr !== null) {
        array.push(curr.value);
        curr = curr.rest;
    }
    return array;
}

console.log(listToArray(myList));