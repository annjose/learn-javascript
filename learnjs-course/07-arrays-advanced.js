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

// Coding challenge - calculate average age of users
const getAverageAge = users => {
    const sum = users.reduce((accumulator, currentUser) => {
        return accumulator + currentUser.age
    }, 0);
    return sum / users.length;
};

// Sample usage - do not modify
const users = [
    { joined_on: "2018-12-13", age: 14 },
    { joined_on: "2018-12-15", age: 18 }
];
console.log('average age = ' + getAverageAge(users)); // 16

// Coding challenge - calculate total sales
const getTotalSales = users => {
    return users.reduce(
        (accumulator, currentUser) => {
            let value = currentUser.subscription?.info?.value ?? 0;
            return accumulator + value;
        },
        0
    );
}

// Sample usage - do not modify
const users2 = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Sam", subscription: { info: { value: 59 } } },
    { id: 3, name: "Charlie", subscription: { info: { value: 31 } } }
];
console.log('total sales = ' + getTotalSales(users2)); // 90

// Reduce an array of objects
const grades = [{ grade: 10 }, { grade: 15 }, { grade: 5 }];
const sumGrades = grades.reduce((accumulator, currentGrade) => accumulator + currentGrade.grade, 0);
console.log('sumGrades = ' + sumGrades);    // sumGrades = 30

// calculate social impact of tweets as the sum of all the likes and retweets for all the tweets.
const tweets = [
    { id: 10512, stats: { likes: 41, retweets: 54 } },
    { id: 41241, stats: { likes: 14, retweets: 20 } }
];
const socialImpact = (tweets) => {
    return tweets.reduce(
        (accumulator, currentTweet) => accumulator + currentTweet.stats.likes + currentTweet.stats.retweets,
        0
    )
}
console.log('socialImpact = ' + socialImpact(tweets));    // socialImpact = 129