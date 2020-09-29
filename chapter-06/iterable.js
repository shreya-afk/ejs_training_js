"use strict";
class Group {
    constructor() {
        this.values = [];
    }
    add(val) {
        if (!this.has(val)) {
            this.values.push(val);
        }
    }
    delete(val) {
        this.values = this.values.filter(x => x !== val);
    }
    has(val) {
        return this.values.includes(val);

    }

    static from(sample) {
        let sets = new Group;
        for (let value of sample) {
            sets.add(value);
        }
        return sets;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}
let finalSet = Group.from([5, 200, 5, 7, 5]);
finalSet.has(5);
finalSet.add(20);
finalSet.delete(8);
finalSet.add(30);
finalSet.delete(200);
console.log(finalSet);

class GroupIterator {
    constructor(group) {
        this.position = 0;
        this.group = group;
    }
    next() {
        if (this.group.values.length >= this.position) {
            let res = { value: this.group.values[this.position], done: false };
            this.position++;
            return res;
        }
        else {
            return { done: true };
        }
    }
}
for(let value of Group.from(["c","a","t"])) {
    console.log(value);
}





