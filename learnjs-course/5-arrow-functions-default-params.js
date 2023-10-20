'use strict';

// Default parameters
function addOne(number) {
    return number + 1;
}
console.log(addOne(2), addOne()); // 3, NaN

function addOneAgain(number = 0) {
    return number + 1;
}
console.log(addOneAgain(2), addOneAgain()); // 3, 1

// Arrow functions

// regular function
function sum(a, b) {
    return a + b;
}

// function as a variable
const sumF = function (a, b) {
    return a + b;
}

// arrow function
const sumA = (a, b) => {
    return a + b;
}
console.log(sum(1, 2), sumF(1, 2), sumA(1, 2))  // 3 3 3

const triple = (num = 0) => {
    return num * 3;
}
console.log(triple(2), triple(100), triple());  // 6 300 0

// Array methods using arrow functions
[10, 20, 30].forEach((item) => {
    console.log(item);  // 10 20 30 (in separate lines)
});

// filter - since there is only one parameter, you can drop the ( ) 
let r1 = [349, 101, 3, 8, 81].filter(number => {
    return number % 2 == 0;
});
let r2 = [349, 101, 3, 8, 81].find(number => {
    return number % 2 == 0;
});
console.log('get even numbers from [349, 101, 3, 8, 81]');
console.log('filter result = ', r1, ', find result = ', r2); // filter result = [8], find result = 8

const canVote1 = age => {
    return age >= 18;
}
console.log(canVote1(32), canVote1(9)); // true false

// implicit return
const canVote2 = age => age >= 18;
console.log(canVote2(32), canVote2(9)); // true false

const triple_ = value => value * 3;
console.log(triple_(2), triple_(100));  // 6 300

// filter - since there is only one parameter, you can drop the ( ) 
let r3 = [349, 101, 3, 8, 81].filter(number => number % 2 == 0);
let r4 = [349, 101, 3, 8, 81].find(number => number % 2 == 0);
console.log('get even numbers from [349, 101, 3, 8, 81]');
console.log('filter result = ', r3, ', find result = ', r4); // filter result = [8], find result = 8

const doubled = [2, 3, 4].map(num => num * 2);
console.log('doubled=' + doubled);