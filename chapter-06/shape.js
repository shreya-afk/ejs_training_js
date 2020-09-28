
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    return `${this.sides * this.sideLength}`;
  }
}

/*let square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());
let triangle = new Shape("triangle",3,3);
console.log(triangle.calcPerimeter());
*/
class square extends Shape {
  constructor(name, sides, sideLength) {
    super(name="square", sides=4,sideLength);
    //this.name = "square";
    //this.sides = 4;
    this.sideLength = sideLength;
  }
  calArea() {
    return `${this.sideLength * this.sideLength}`;
  }
}
let sq = new square(this.name, this.sides, 5);
console.log(sq.calcPerimeter());
console.log(sq.calArea());
