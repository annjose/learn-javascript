"use strict";

function defineX() {
    // x = 1;  // Uncaught ReferenceError: assignment to undeclared variable
    var x = 1;
    return 'ok';
}
defineX();

// 64 == 0100; // Octal literals are not allowed. Use the syntax '0o100', "0"-prefixed octal literals are deprecated; use the "0o" prefix instead

// alert("Hello!");

console.log('simple log');