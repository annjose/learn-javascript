'use strict';

// shorthand properties
const name2 = 'Amir';
const age = 37;
const user7 = {
    name: name2, age: age
}
console.log('long-form syntax: ', [user7, name2, user7.age]);

const user8 = { name2, age };
console.log('shortcut syntax: ', [user7, name2, user7.age]);

console.log('undefined - 1 = ', undefined - 1);  // prints Nan
console.log('[1, 2, 3].lenght - 1 = ', [1, 2, 3].lenght - 1);   // prints Nan
console.log('Nan === NaN is', NaN == NaN);                      // prints false
console.log('Nan === NaN is', NaN === NaN);                     // prints false
console.log('isNaN(Infinity)', isNaN(Infinity));    // prints false

console.log('isNaN(undefined - 1)', isNaN(undefined - 1));  // prints true
console.log('isNaN(undefined)', isNaN(undefined));          // prints true, but it is a bug in JavaScript. Check Obsidian notes.

console.log('Number.isNaN(undefined - 1)', Number.isNaN(undefined - 1));  // prints true
console.log('Number.isNaN(undefined)', Number.isNaN(undefined));          // prints false. CORRECT!

// Shorthand methods
const user = {
    name() { return 'Amir'; }
}
console.log(user.name());   // Amir

const rectangle3D = {
    width: 3,
    depth: 4,
    height: 5,
    baseArea() { return this.width * this.depth; },
    volume() {
        return this.baseArea() * this.height;
    }
};
console.log(rectangle3D.volume());  // 60