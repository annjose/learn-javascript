"use strict";

console.log('simple log');

function defineX() {
    // x = 1;  // Uncaught ReferenceError: assignment to undeclared variable
    var x = 1;
    return x;
}

// 64 == 0100; // Octal literals are not allowed. Use the syntax '0o100', "0"-prefixed octal literals are deprecated; use the "0o" prefix instead

var resultX = defineX();
// ERROR: console.log(x); // Uncaught ReferenceError: x is not defined
console.log('resultX = ', resultX);

// scoping of variables within if statements
function defineY() {
    if (true) {
        var y = 1;
        y = y + 1;
    }
    return y; // y was defined the if statement, but is visible outside the if statement
}
var resultY = defineY();
console.log('resultY = ', resultY);

// proper scoping with let keyword
function defineZ() {
    if (true) {
        let z = 1;
    }
    // return z + 1; // ERROR. Uncaught ReferenceError: z is not defined (because z is defined using let keyword, not var)
}
defineZ();

// example of shadowing
function f() {
    let x = 'outer';
    if (true) {
        let x = 'inner';  // this inner x shadows the outer x.
        console.log(x);   // prints 'inner'
    }
    console.log(x)
}
f();

function constTest() {
    const x = 1;
    // x = 2;   // ERROR. Uncaught TypeError: invalid assignment to const 'x'

    const arr = [1, 2];
    // arr = [5, 6];  // ERROR. Uncaught TypeError: invalid assignment to const 'arr'
    arr.push(3);
    console.log('arr = ', arr);
}
constTest();