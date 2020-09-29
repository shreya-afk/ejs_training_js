
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(a) {
    return new Vec(this.x + a.x, this.y + a.y);
  }
  minus(a) {
    return new Vec(this.x-a.x, this.y-a.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
    //return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  }
}
let vec= new Vec(2,3);
console.log(vec.plus(new Vec(4,5)));
console.log(vec.minus(new Vec(1,5)));
console.log(vec.length);
