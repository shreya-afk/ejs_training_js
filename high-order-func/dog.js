/*
Select only the dogs
Translate their ages into dog years (multiply them by seven)
Sum the results
*/
"use strict";
let data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];
console.log(data.filter(x => x.type === 'dog'));
console.log(data.map(givenAge => givenAge.age*7));
console.log(data.reduce((acc,current) => acc+current));
