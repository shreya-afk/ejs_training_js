
//METHODS->  A Method in javascript is a property of an object whose value is a function.
  
//PROTOTYPES->EVERY OBJECT HAS ACCESS TO PROTOTYPES
  let names ={
      fname: "shreya",
      lname: "bangera"
  }
  console.log(names.fname);
  console.log(names.constructor()); //constructor is a prototype of object 'names',
  console.log(names);

//dogObject
 function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.speak = function() {
    return "I am a dog";
}
let john = new DogObject("John", 45);
console.log( john.name);



//CLASS
class Animals {
    constructor (name, specie) {
        this.name = "ff";
        this.specie = "ee";
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo = new Animals("ringo", "chubby");
console.log(Animals.sing);
console.log(bingo.dance());


//SUBCLASS-> inherits the properties of parent class
//and has its own properties.

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");
console.log(clara.sing());

//ways to create objects
//we can create empty objects and add properties to it or we can use "this" keyword
function Person (name) {
    //let obj={};     
    //obj.name= name;
    this.name= name;
    //obj.greeting = "nice";
    this.greeting ="nice";
   //return obj; 
}
let carla= new Person('carla'); //name vlues('carla','marla','bob','sarah') for all the objects is asigned when they are created
let mala= new Person('mala');
let person1 = new Person('Bob');
let person2 = new Person('Sarah');
console.log(carla); // multiple objects (carla, marla, person1, person2) accessing
console.log(mala); // same functionalities (name and greetings) is called polymorphism. 
console.log(person1.name);

//more complex form
function people(first, last, age, gender, interests) {
    this.first= first;
    this.last=last;
    this.age=age;
    this.gender=gender;
    this.interests=interests;
    this.bio = function() {
        return (` ${ this.first +" "+ this.last} ` + ' is ' + this.age + ' years old. ' + (this.gender==="female" ? "He" : "She") + ' likes ' + this.interests + '.');
        //return " Hi, I am " + ` ${ this.first +" "+ this.last} ` + " I am " + ` ${this.age} ` +" years old ";
    }    
    this.greetings =function () {
        return "helooo"+this.name+".";
    }
}
let carla= new people("carl","johansonn",50,"male","dance fighting");
//console.log(people("sh","re",5,"f","dancing"));
console.log(carla);
console.log(carla['age']);
console.log(carla.age);
console.log(carla.interests);
console.log(carla.interests[1]);

console.log(carla.bio());


//creating object using OBJECT.CREATE() METHOD
const coder = { 
    isStudying : "no", 
    printIntroduction : function(){ 
        console.log(`My name is ${this.name}. Am I studying?  ${this.isStudying}.`) 
    } 
}  
const me = Object.create(coder); //obect.create() method creates "me" object .
me.name = 'Mukul';  //'me.name' is the proprty of 'me' object and not of 'coder' object.
me.isStudying = 'yes'; //isStudying is inherited from 'coder' object, howevr it can be overwritten. 
console.log(me.printIntroduction());  


