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

// ------------------- Set Operations -----------------
console.log("------------------- Set Operations -----------------");

// Union of two arrays
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

const unionArr = arr1.concat(arr2);
console.log('union array:', unionArr);   // [1, 2, 3, 2, 3, 4]

// Union of two sets
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const unionSet = new Set([...set1, ...set2]);
console.log('union set:', unionSet.values());    // SetIterator {1, 2, 3, 4}

// Coding challenge - Implement a general-purpose setUnion function that returns the union of two sets.
function setUnion(set1, set2) {
    return new Set([...set1, ...set2]);
}
const union = setUnion(
    new Set([1, 2, 3]),
    new Set([2, 3, 4])
);
console.log("Result of coding challenge for union set ....");
console.log([union.has(1), union.has(2), union.has(3), union.has(4)]);  // [true, true, true, true]

// Intersection of two arrays
const intersectionArr = arr1.filter(num => arr2.includes(num));
console.log('intersection array:', intersectionArr);    // [2, 3]

// Interection of two sets
const intersectionSet = new Set(
    Array.from(set1).filter(num => set2.has(num))
);
console.log('intersection set:', intersectionSet.values());  //  SetIterator {2, 3}

// Coding challenge - Implement a general-purpose setIntersection function that returns the intersection of two sets.
function setIntersection(set1, set2) {
    const interArr = Array.from(set1).filter(num => set2.has(num));
    return new Set(interArr);
}

const intersection = setIntersection(
    new Set([1, 2, 3]),
    new Set([2, 3, 4])
);

console.log("Result of coding challenge for intersection set ....");
console.log([intersection.has(1), intersection.has(2), intersection.has(3), intersection.has(4)]); // [false, true, true, false]

// Difference of two arrays
const differenceArr_1 = arr1.filter(num => !arr2.includes(num));
console.log('difference array 1:', differenceArr_1);    // [1]
const differenceArr_2 = arr2.filter(num => !arr1.includes(num));
console.log('difference array 2:', differenceArr_2);    // [4]

// Difference of two sets
const differenceSet_1 = new Set(
    arr1.filter(num => !arr2.includes(num))
);
console.log('difference set 1:', differenceSet_1.values());  // SetIterator [1]
const differenceSet_2 = new Set(
    arr2.filter(num => !arr1.includes(num))
);
console.log('difference set 2:', differenceSet_2.values());  // SetIterator [4]

// Coding challenge - Implement a general-purpose setDifference function that returns the difference of two sets.
//  Remember that "set difference" means "all items that are in the first set, but aren't in the second set."
function setDifference(set1, set2) {
    return new Set(
        Array.from(set1).filter(num => !set2.has(num))
    );
}

const difference = setDifference(
    new Set([1, 2, 3]),
    new Set([2, 3, 4])
);
console.log("Result of coding challenge for difference set ....");
console.log(
    [difference.has(1), difference.has(2), difference.has(3), difference.has(4)]
); // [true, false, false, false]