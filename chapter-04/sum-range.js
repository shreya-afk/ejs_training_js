
/*Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.*/
/*range= (start, end) => {
    let arr=[];
    for (let i=start; i<=end; i++) {
        arr.push(i);    
    }
    return arr;
}
console.log(range(1,5));

/*write a sum function that takes an array of numbers and 
returns the sum of these numbers.*/
/*sum =(arr) =>{
    let total=0;
    for (each of arr) {
        total=total+arr[i];
    }
    return total;
}
console.log(sum([1,2,3,4]));

/*modify your range function to take an optional third
 argument that indicates the “step” value used when building the array*/
 range= (start, end, step) => {
    let arr=[];
    let i= start;
    if (step<0) {
        while (i>=end) {
            arr.push(i); 
            i=i+step;
        }
        return arr;
    }
    while (i<end) {
        arr.push(i); 
        i=i+step;   
    }
    return arr;
}
console.log(range(5,2,-1));