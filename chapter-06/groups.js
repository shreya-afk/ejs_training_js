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
}

let finalSet = new Group()//Group.from([5,200,5,7,5]);
finalSet.has(5);
finalSet.add(20);
finalSet.delete(8);
finalSet.add(30);
finalSet.delete(200);
console.log(finalSet);


