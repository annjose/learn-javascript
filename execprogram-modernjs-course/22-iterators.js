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