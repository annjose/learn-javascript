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