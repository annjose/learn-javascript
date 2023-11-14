'use strict';

const names = new Set(['Amy', 'Beth', 'Cathy']);
console.log("does the set have Beth?: ", names.has("Beth"));    // true
console.log("does the set have Diana?: ", names.has("Diana"));  // false
names.add("Diana");
console.log("does the set have Diana?: ", names.has("Diana"));  // true

// convert Set to an array
const arrFromSet = Array.from(names.values());
console.log(arrFromSet);   // ['Amy', 'Beth', 'Cathy', 'Diana']

names.add("Amy");
console.log("after adding duplicate value: ", names.values());   // SetIterator { Amy, Beth, Cathy, Diana}

names.delete("Beth");
console.log("after deleting the value Beth: ", names);  // Set(3) {size: 3, Amy, Cathy, Diana}

names.clear();
console.log("after clearing the set: ", names);     // Set(0) {size: 0}

// .size proprety of the Set
const numbers = new Set([11, 12, 13]);
console.log("set: ", Array.from(numbers.values()), " | size: ", numbers.size);  // [11, 12, 13]  | size:  3

// add a number that already exists in the set
numbers.add(12);
console.log("set: ", Array.from(numbers.values()), " | size: ", numbers.size);  // [11, 12, 13]  | size:  3

// Duplicate elements in array impact the length. But in set, duplicate elements are not repeated.
const arr = ["Amy", "Beth", "Amy"];
console.log("array size: ", arr.length);   // array size: 3
const set = new Set(arr);
console.log("set size: ", set.size);       // set size: 2

// Create a benchmark function that calls another function a Million times and calculate how much time it takes (in millseconds) 
const benchmark = (f) => {
    const start = new Date().getTime();
    for (let i = 0; i < 1_000_000; i++) {
        // console.log("#" + (i + 1) + " result: " + f());
        f();
    }
    const end = new Date().getTime();
    return end - start;
}

const nums = new Array(1_000_000).fill(undefined).map(() => Math.random());
// console.log("nums: " + nums);
// console.log("Benchmarking Array.includes()....");
// const timeArrayIncludes = benchmark(() => nums.includes(5));
// console.log("timeArrayIncludes: ", timeArrayIncludes); // 19870 (on GAL Lenovo laptop)

// console.log("Benchmarking set.has()....");
// const numSet = new Set(nums);
// const timeSetHas = benchmark(() => numSet.has(5));
// console.log("timeSetHas: ", timeSetHas);    // 13 (on GAL Lenovo laptop)

// hasDuplicates function
const hasDuplicates = (numbers) => {
    const numSet = new Set();
    let hasDuplicates = false;
    for (const num of numbers) {
        if (numSet.has(num)) {
            hasDuplicates = true;
            break;
        } else {
            numSet.add(num);
        }
    }
    return hasDuplicates;
}

let numArr = [10, 12, 13];
console.log(`array: ${numArr}, hasDuplicates: ${hasDuplicates(numArr)}`);   // false
numArr = [10, 12, 10, 15, 16];
console.log(`array: ${numArr}, hasDuplicates: ${hasDuplicates(numArr)}`);   // true