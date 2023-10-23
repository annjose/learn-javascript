'use strict';

// Arrays
const items = [23, 65.2, "hello", false];
console.log(items);                      // [23, 65.2, "hello", false]
console.log([3, 4, 5].length == 3);      // true
console.log([34, 45, 56][2] == 56);      // true
console.log([34, 45, 56].at(-2) == 45);  // true

// adding an element to the array
const nums = [10, 20, 30];
// nums = [2, 4];              // ERROR: Uncaught TypeError TypeError: Assignment to constant variable.
const result = nums.push(40);  // OK because you are changing the elements inside the array. Returns 4.
console.log('nums=', nums, ' result=', result);  // nums=[10, 20, 30, 40]  result= 4

[10, 20, 30].forEach(function (item) {
    console.log(item);  // this line is invoked 3 times - first time with 10, then 20 and finally 30.
});

function sumPositiveNumbers(numbers) {
    let positiveSum = 0;
    numbers.forEach(function (number) {
        if (number > 0) {
            positiveSum += number;
        }
    });
    return positiveSum;
}
console.log('sumPositiveNumbers =', sumPositiveNumbers([15, -5, 10]));   // 25
console.log('sumPositiveNumbers =', sumPositiveNumbers([-3, 4, -2, 1])); // 5

function sumOddNumbers(numbers) {
    let oddSum = 0;
    numbers.forEach(function (number) {
        // check for remainder using %. Note that remainder will be -1 for negative numbers, 1 for positive.
        if (number % 2 !== 0) {
            oddSum += number;
        }
    });
    return oddSum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10]), sumOddNumbers([2, 3, 4, 5, 6])); // 20  8
console.log(sumOddNumbers([15, -5, 10]), sumOddNumbers([-2, -3, 4, 5, 6])); // 10 2

// filter function
const numbers = [34, 10, 3, 89, 8, 1, 12];
const odds = numbers.filter(function (number) {
    return number % 2 !== 0;
});
console.log(odds); // [3, 89, 1]

function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function (temperature) {
        return temperature < 0;
    });
}
console.log('getFreezingTemperatures: ', getFreezingTemperatures([10, -12, 34, -2, -29])); // [-12. -2, -29]

// find() method
function findEvenNumber(numbers) {
    return numbers.find(function (number) {
        return number % 2 == 0;
    });
}
console.log('findEvenNumber: ', findEvenNumber([33, 55, 11, 22, 99, 44])); // 22

// filter vs. find
let r1 = [349, 101, 3, 8, 81].filter(function (number) {
    return number % 2 == 0;
});
let r2 = [349, 101, 3, 8, 81].find(function (number) {
    return number % 2 == 0;
});
console.log('get even numbers from [349, 101, 3, 8, 81]');
console.log('filter result = ', r1, 'find result = ', r2); // filter result = [8], find result = 8

// map() method
const ages = [10, 22, 55, 12];
const doubled = ages.map(function (age) {
    return age * 2;
})
console.log('ages doubled = ', doubled);

console.log([10, 20, 7, 30].includes(20), [10, 20, 7, 30].includes(3333)); // true false

console.log(['Alice', 'Bob', 'Chloe'].toString());  // Alice,Bob,Chloe
console.log(['Alice', 'Bob', 'Chloe'].join(' | ')); // Alice | Bob | Chloe

function sum(...nums) {
    let sum = 0;
    if (nums === undefined) {
        return sum;
    }
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
const sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)];
console.log(sums);