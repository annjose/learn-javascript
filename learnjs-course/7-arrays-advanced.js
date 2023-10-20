'use strict';

// Less used array methods
const arr = [11, 12, 13, 14, 15];
const allAreAbove10 = arr.every(num => num > 10);
const allAreAbove14 = arr.every(num => num > 14);
console.log(allAreAbove10, allAreAbove14);  // true false

const someAreAbove14 = arr.some(num => num > 14);
const someAreBelow10 = arr.some(num => num < 10);
console.log(someAreAbove14, someAreBelow10); // true false 

// empty an array
const nums = [1, 2, 3];
nums.length = 0;
console.log(nums); // []

// remove elements from an array
let doubles = [11, 22, 33, 44, 55, 66, 77];
console.log(doubles.splice(0, 1)); // [11]  Removed the first element of the array and returns it. 
console.log(doubles)               // [22, 33, 44, 55, 66, 77] Orginal array is reduced by one element.

doubles = [11, 22, 33, 44, 55, 66, 77]; // reset the array
console.log(doubles.splice(1, 3)); // [22, 33, 44] Removed 3 elements starting at index 1(second element onwards)
console.log(doubles);              // [11, 55, 66, 77] Original array retains the left and right of the splice removed. 

doubles = [11, 22, 33, 44, 55, 66, 77]; // reset the array
console.log(doubles.splice(2)); // [33, 44, 55, 66, 77] Removed all elements starting at index 2(i.e third element onwards)
console.log(doubles);           // [11, 22] Original array retains the left and right of the splice removed. 