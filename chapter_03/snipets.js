/*
let power=function(base, exponent){
    let res=1;
    for(let count=1; count<=exponent ; count++){
        res=res*base;
        
    }
    return res;
};
console.log(power(2,10));

//
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(z);
//
const square= x=>{
    return x*x;
}
console.log(square(5));
//
const text=()=>{
    console.log("cookieto");
}
text();

//

function greet(who) {
    console.log("Hello " + who);
  }
  greet("Harry");
  console.log("Bye");
  */
  //the call stack
  function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  }
  console.log(chicken() + " came first.");