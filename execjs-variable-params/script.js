'use strict';

function f(...args) {
    return args;
}

console.log(f('a', 'b'));  // prints ['a', 'b']
console.log(f('a', 'b', 'c'));  // prints ['a', 'b', 'c']

// Code problem: Write a function that sums numbers. It should take the numbers as rest parameters. If no arguments are given, it should return 0.
function sum(...nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
const s = sum(10, 20, 20);
console.log('sum = ', s);

const sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)];
console.log(sums);

// pass a regular array using rest parameters
function f2(x, y) {    // this is a regular function - does not take rest parameters
    return x + y;
}
const arr = [1, 2];
const result = f2(...arr);  // you can pass arr as rest parameter even though f() does not take rest params
console.log('result = ', result);  // shows 3