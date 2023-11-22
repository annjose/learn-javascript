'use strict';

// Iterate over arays using for..of loops
const numbers = [1, 2, 3];
let doubles = [];
for (const num of numbers) {
    doubles.push(num * 2);
}
console.log(doubles);   // [2, 4,6]

// for...of loop can iterate over string as well
const word = "table";
let uppercaseLetters = [];
for (const char of word) {
    uppercaseLetters.push(char.toUpperCase());
}
console.log(uppercaseLetters);  //['T', 'A', 'B', 'L', 'E']

// It works for sets
const set = new Set([1, 2, 3]);
const triples = [];
for (const num of set) {
    triples.push(num * 3);
}
console.log(triples);   // [3, 6, 9]

// It works for maps too
const costMap = new Map();
costMap.set("apples", 10);
costMap.set("oranges", 8);
costMap.set("grapes", 4);
let totalCost = 0;
for (const [itemName, itemCost] of costMap) {
    totalCost += itemCost;
}
console.log(totalCost); // 22

//-------------------------Iterator methods ------------------------
console.log("-------------------------Iterator methods ------------------------");
const alphabets = ['a', 'b', 'c'];
const iterator = alphabets[Symbol.iterator]();

console.log(iterator.next());   // {value: 'a', done: false}
console.log(iterator.next());   // {value: 'b', done: false}
console.log(iterator.next());   // {value: 'c', done: false}

console.log(iterator.next());   // {value: undefined, done: true}

let arrIterator = [1, 2][Symbol.iterator]();
console.log(arrIterator.next().value, arrIterator.next().value, arrIterator.next().value); // 1 2 undefined
arrIterator = [1, 2][Symbol.iterator]();
console.log(arrIterator.next().done, arrIterator.next().done, arrIterator.next().done);    // false false true

// ----------------Custom iterator--------------
console.log("----------------Custom iterator--------------");

class BelowThreeIterator {
    constructor(value) {
        this.value = 0;
    }

    next() {
        if (this.value < 3) {
            const value = this.value;
            this.value += 1;
            return { value: value, done: false };
        } else {
            return { value: undefined, done: true }
        }
    }
}
class BelowThrees {
    [Symbol.iterator]() {
        return new BelowThreeIterator();
    }
}

const belowThrees = new BelowThrees();
let resultArr = [];
for (const n of belowThrees) {
    resultArr.push(n);
}
console.log("belowThrees resultArr:", resultArr);  // [0, 1, 2]

// With this iterator, array destructuring will also work fine
const [firstNumber, secondNumber, ...rest] = new BelowThrees();
console.log(firstNumber, secondNumber, rest);   // 0 1 [2]

// implement the same without using classes
const belowFives = {
    [Symbol.iterator]: () => makeIterator()
}

function makeIterator() {
    let currentValue = 0;

    return {
        next() {
            if (currentValue < 5) {
                const value = currentValue;
                currentValue += 1;
                return { value: value, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    }
}

resultArr = [];
for (const n of belowFives) {
    resultArr.push(n);
}
console.log("belowFives resultArr:", resultArr);  // [0, 1, 2, 3, 4]

// --------------------Generators-------------------------
console.log("--------------------Generators-------------------------");

function* numbersOneToThree() {
    yield 1;
    yield 2;
    yield 3;
}
let results = [];
for (const n of numbersOneToThree()) {
    results.push(n);
}
console.log("numbersOneToThree results:", results); // [1, 2, 3]

// implement numbersBelowThree using generators
function* numbersBelowThree() {
    for (let i = 0; i < 3; i++) {
        yield i;
    }
}
results = Array.from(numbersBelowThree());
console.log("numbersBelowThree using generator results:", results);[0, 1, 2]

// Coding challenge
// Write a numbersInRange(min, max) generator that iterates over all numbers from min up to, but not including, max
function* numbersInRange(min, max) {
    for (let i = min; i < max; i++) {
        yield i;
    }
}
results = [
    Array.from(numbersInRange(0, 2)),
    Array.from(numbersInRange(1, 3)),
    // This checks that you actually wrote a generator. No cheating!
    numbersInRange.constructor.name,
];
console.log("numbersInRange results:", results);    // [[0, 1], [1, 2], 'GeneratorFunction']

// Array destructuring with generators
function* letters() {
    yield 'a';
    yield 'b';
    yield 'c';
}
const [first, second, ...restOfIt] = letters();
console.log("array destructuring: ", [first, second, restOfIt]);  // ['a' 'b' ['c']]

// Infinite sequence using generators
function* primeNumbers() {
    let i = 2;

    while (true) {

        let prime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }
        if (prime) {
            yield i;
        }

        i += 1;
    }
}

const [p1, p2, p3, p4, p5] = primeNumbers();
console.log([p1, p2, p3, p4, p5]);  // [2, 3, 5, 7, 11]

// Find the 100th prime
let answer;
const primes = primeNumbers();  // this will not be an infinte loop
for (let i = 0; i < 100; i++) {
    answer = primes.next().value;
}
console.log("100th prime:", answer);   // 541

// Coding challenges
// Write an infinite powersOfTwo generator function that yields 1, 2, 4, 8, 16, etc., multiplying by 2 each time.
function* powersOfTwo() {
    let i = 1;

    while (true) {
        yield i;
        i *= 2
    }
}

const [x0, x1, x2, x3, x4] = powersOfTwo();
console.log("powersOfTwo - first four numbers:", [x0, x1, x2, x3, x4]); // [1, 2, 4, 8, 16]

// Get the 32nd power of 2.
const powerIterator = powersOfTwo()[Symbol.iterator]();
let x32;
for (let i = 0; i < 32; i++) {
    x32 = powerIterator.next().value;
}
console.log("32nd power of two:", x32); // 2147483648
