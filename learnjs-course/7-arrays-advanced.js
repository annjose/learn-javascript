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


// Array reduce
const numbers = [10, 15, 20];

// find the sum of numbers the old-fashioned way - using forEach
let sumOld = 0;
numbers.forEach(num => {
    sumOld += num;
});
console.log(`sumOld= ${sumOld}`);   // 45

// find the sum using reduce
const sumNew = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(`sumNew= ${sumNew}`);   // 45

// Multiplication using array reduce. Answer: 10 * 15 * 20 = 3000
const product = numbers.reduce((accumulator, current) => {
    return accumulator * current;
}, 1);
console.log(`product=${product}`); // 3000

// you can rewrite this using implicit return as well (remove the return keyword and curly braces)
const product_ = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log(`product_=${product_}`); // 3000


// Array destructuring
const dimensions = [10, 20];

const length_ = dimensions[0];
const breadth_ = dimensions[1];
console.log(dimensions, length_, breadth_);   // [10,20]  10  20

const [length, breadth] = dimensions;
console.log(dimensions, length, breadth);     // [10,20]  10  20

// Destructure an array user with two items first name and last name.
const getFullName = user => {
    const [firstName, lastName] = user;
    return `${firstName} ${lastName}`;
}
console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
console.log(getFullName(["Alex", "Green"])); // "Alex Green"

// spread syntax (...)
const fruits = ['Apple', 'Orange'];
const veggies = ['Cabbage', 'Broccoli'];
const wholeFoods = [...fruits, ...veggies];
console.log(wholeFoods);