
//USE OF CONSTRUCTOR
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.toString =function() {
    return `${this.type} rabbit`;
}
Rabbit.prototype.speak = function () {
    return `the rabbit is ${this.type}`;
}

let rab = new Rabbit("pretty");
console.log(String(rab));
console.log(rab);
//console.log(rab.speak());

//USE OF CLASS
class Rabbbit {
    constructor(type) {
        this.type = type;
        Rabbbit.prototype.teeth = "small";

    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbbit("killer");
killerRabbit.teeth = "sharpppp"; //
let blackRabbit = new Rabbbit("black");
let mine = new class {
    word() {
        return "hello";
    }
};
//console.log(mine.word());
console.log(killerRabbit);
console.log(killerRabbit.teeth);


//USE OF MAP -> key value pairs
let ages = new Map();
ages.set("Boris", 39); //boris is key and 39 is value
ages.set("Liang", {age:25, place: "america"}); //liang is key and {age:25, place: "america"}is value
ages.set("Júlia", 62);

ages.get("Liang");
console.log(ages.size);
ages.has("julia");
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

//USE OF SYMBOL FUNCTION -> Symbols are values created with the Symbol function. Unlike strings,
let sym = Symbol("name");  ////newly created symbols are unique—you cannot create the same symbol twice.
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55


//SYMBOLS

let sym2 = Symbol('fuss');
let sym3 = Symbol( 'fuss');
//console.log(sym2 === sym3); //false

let sym = Symbol();
//Rabbbit.prototype[sym] = "ji";
//console.log(blackRabbit[sym]);// sym

let stringArray = Symbol();
Array.prototype[stringArray] = function() {
    return `${this.length} cm of yarn`;
}
//console.log([1,2,3].toString());
//console.log([1,2,4,5,2][stringArray]());

//Include symbol properties in object expressions and classes
// by using square brackets around the property name. 
let oneString =Symbol();
let myString = {
    [oneString] () {
        return "made from yarn";
    }
}
//console.log(myString[oneString]()); 

//THE ITERATOR INTERFACE
let okIterator ="hel"[Symbol.iterator]();
console.log(okIterator.next()); //{value :h  done:false}
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());//{value :undefined  done:true}

