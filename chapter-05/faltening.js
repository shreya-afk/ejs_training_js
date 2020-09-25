let arrays = [[1, 2, 3], [4, 5], [6]];
let res= arrays.reduce((acc,cur) => acc.concat(cur), []);
console.log(res);