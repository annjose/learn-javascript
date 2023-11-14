'use strict';

// Accessors in object literala
const user1 = {
    name: 'Ann',
    age: 45
};
console.log('object fixed props: ', user1.name, user1.age);

// properties can be functions too
const user2 = {
    name: 'Ann',
    getAge: function () { return 45; }
}
console.log('object func props: ', user2.name, user2.getAge());

// getter properties in Modern JavaScript
const user3 = {
    name: 'Ann',
    get age() { return 45; }
}
console.log('object with getter: ', user3.name, user3.age);

// Coding problem: Add a userName getter to this object. It should return the value of the name variable.
let name1 = 'Amir';
const user = {
    get userName() { return name1 }
}
const userName1 = user.userName;
name1 = 'Betty';
const userName2 = user.userName;
console.log([userName1, userName2]);    // ['Amir', 'Betty']

// there are setters similar to getters
const user4 = {
    realName: 'Amir',
    set userName(newName) { this.realName = newName; },
    get userName() { return this.realName; }
}
user4.userName = 'Betty';
console.log(user4.userName);

// Coding problem: Add a userName setter to this object. It should push userName to the names list.
const user5 = {
    names: ['Amir'],
    set userName(newName) { this.names.push(newName); }
}
user5.userName = 'Betty';
console.log(user5.names);['Amir', 'Betty']

// Code problem: Write a function that takes a user and returns a login count object for this user, mapping their name to their loginCount.
const users = [
    { name: 'Amir', loginCount: 5 },
    { name: 'Betty', loginCount: 16 }
];

console.log(users[0]);   // prints {name: 'Amir', loginCount: 5}
console.log(users[1]);   // prints {name: 'Betty', loginCount: 16}

function loginCount(user) {
    return { [user.name]: user.loginCount };
}
console.log(loginCount(users[0]));  // prints { Amir: 5 }
console.log(loginCount(users[1]));  // prints {Betty: 16}

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

// More Number methods
console.log(Number.isFinite(5));         // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite("test"));    // false

console.log(`Number.MAX_SAFE_INTEGER=${Number.MAX_SAFE_INTEGER}`);   // 9007199254740991
console.log(`Number.MIN_SAFE_INTEGER=${Number.MIN_SAFE_INTEGER}`);   // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER === -Number.MIN_SAFE_INTEGER);   // true

// operations outside MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are NOT safe
console.log(Number.MAX_SAFE_INTEGER + 1);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);   // true

// operations between MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are safe
console.log(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER);   // false

// IsSafeInteger 
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));      // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));  // false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));      // true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));  // false

const safeIntegerMultiply = (x, y) => {
    const z = x * y;
    if (Number.isSafeInteger(z)) {
        return z;
    }
    throw new Error("Product is an unsafe integer");
}
console.log(safeIntegerMultiply(10, 20));   // 200
// console.log(safeIntegerMultiply(Number.MAX_SAFE_INTEGER, 20));  // Uncaught Error Error: Product is an unsafe integer
