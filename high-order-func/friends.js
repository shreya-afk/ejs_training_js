"use strict";
const friends = [
    { id: 1, name: 'Sting', nearMe: true },
    { id: 2, name: 'Radiohead', nearMe: true },
    { id: 3, name: 'NIN', nearMe: false },
    { id: 4, name: 'Echo', nearMe: true },
    { id: 5, name: 'Zeppelin', nearMe: false }
];

/*
names of friends who are near me
*/

//destructuring
let near = ({ nearMe }) => nearMe;
let theName = ({ name }) => name;
let res = friends.filter(near).map(theName);
console.log(res);

// or
let res1 = friends.filter(location => location.nearMe).map(names => names.name);
console.log(res1);

