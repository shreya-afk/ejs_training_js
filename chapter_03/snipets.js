"use strict";
//power function
let power=function(base, exponent){
    let res=1;
    for(let count=1; count<=exponent ; count++){
        res=res*base;
        
    }
    return res;
};
console.log(power(2,10));

// checking scopes
let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
}
console.log(z);

//arrow function 
const square= x=>{
    return x*x;
};
console.log(square(5));


//the call stack
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");