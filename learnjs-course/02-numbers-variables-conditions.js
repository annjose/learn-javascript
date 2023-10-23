'use strict';

let num = 42
console.log(num.toString() == "42");

console.log("hello" * 2);   // NaN
console.log(undefined * 2); // NaN
console.log(isNaN(3 * 2));  // false

console.log(Number.parseInt("43", 10)); // 43
console.log(Number.parseInt("43.99", 10) == 43); // true (parseInt rounds up to the lower integer)
console.log(Number.parseFloat("43.99", 10) == 43.99); // true

console.log(10 + "30" == 1030); // true
console.log(10 + Number.parseInt("30") == 40); // true

console.log('...Math operators...');
console.log(7 / 2 == 3.5, 7 % 2 == 1); // true true
console.log(Math.round(2.5) == 3, Math.floor(2.5) == 2, Math.ceil(2.5) == 3); // true true true

// Variables
console.log('...Variables...');

const a = 10;
// n = 12; // ERROR: Uncaught TypeError TypeError: Assignment to constant variable.
let b = 10;
b = 20; // OK
console.log(a == 10, b == 20); // true true

// Conditions
const grade = 40;
if (grade < 40) {
    console.log('failed');
} else if (grade === 40) {
    console.log('passed on the margin');
} else {
    console.log('passed');
}

console.log(("23" == 23) == true, ("23" === 23) == false);