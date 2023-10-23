'use strict';

// compare values - always return true
console.log('1 === 1 returns ' + (1 === 1));           // true
console.log('"red" === "red" returns ' + ("red" === "red"));   // true
console.log("true === true returns " + (true === true));     // true
console.log("false === false returns " + (false === false));   // true

console.log('"25" === 25 returns ' + ("25" === 25));    // false
console.log('"25" == 25 returns ' + ("25" == 25));      // false
console.log("\n");

// compare arrays and objects as values - always returns false
console.log('[] === [] returns ' + ([] === []));     // false
console.log('{} === {} returns ' + ({} === {}));     // false

// compare arrays and objects as references - always returns true
const a1 = [];      // equivalent to a1 = new Array();
const a2 = a1;
console.log("a1 === a2 returns " + (a1 === a2));     // true

const b1 = {};      // equivalent to b1 = new Object();
const b2 = b1;
console.log("b1 === b2 returns " + (b1 === b2));     // true
console.log("\n");

// Mutate a string - copy by value
let s1 = "old";
let s2 = s1;
console.log(`s1 = ${s1}, s2 = ${s2}`);  // s1 = old, s2 = old
s1 = "new"
console.log(`s1 = ${s1}, s2 = ${s2}`);  // s1 = new, s2 = old

// Mutate an object - copy by reference
let obj1 = { name: "Old" };
let obj2 = obj1;
console.log(`obj1.name = ${obj1.name}, obj2.name = ${obj2.name}`);  // obj1.name = Old, obj2.name = Old
obj1.name = "New"
console.log(`obj1.name = ${obj1.name}, obj2.name = ${obj2.name}`);  // obj1.name = New, obj2.name = New

// make a shallow (immutable) copy of an array
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(`grades === gradesCopy returns ${grades === gradesCopy}`);   // false
console.log(`grades = ${grades} gradesCopy = ${gradesCopy}`);    // grades = 10,20 gradesCopy = 10,20
gradesCopy[0] = 44;
console.log(`grades = ${grades} gradesCopy = ${gradesCopy}`);    // grades = 10,20 gradesCopy = 44,20

// immutably add an item to an array
const nums = [1, 2];
console.log(`nums = ${nums}`);            // nums = 1,2
const numsCopy = [...nums, 3];
console.log(`numsCopy = ${numsCopy}`);    // numsCopy = 1,2,3

// shallow (immutable) copy of object and update it
const user = { name: "John", age: 34 };
const userCopy = { ...user, age: user.age + 1 };
console.log(`user === userCopy returns ${user === userCopy}`);  // false
console.log(`user = {${user.name}, ${user.age}}`);              // user = {John, 34}
console.log(`userCopy = {${userCopy.name}, ${userCopy.age}}`);  // userCopy = {John, 35}

userCopy.name = "Zoe";
console.log(`user = {${user.name}, ${user.age}}`);              // user = {John, 34}
console.log(`userCopy = {${userCopy.name}, ${userCopy.age}}`);  // userCopy = {Zoe, 35}

// immutably delete a property of an object
const book = { id: 123, name: "Walk in the woods", year: 2003 };
const {...bookCopy} = book;                // object destructuring to copy the whole object
const {year, ...bookWithoutYear} = book;  // object destructuring by extracting one property and then the rest
console.log(year);      // 2023
console.log(book);      // {id: 123, name: 'Walk in the woods', year: 2003}
console.log(bookCopy);  // {id: 123, name: 'Walk in the woods', year: 2003}
console.log(bookWithoutYear); // {id: 123, name: 'Walk in the woods'}

// Coding challenge - Complete the enableDarkMode function such that 
//  it returns a clone of the config object it receives with the property darkTheme set to true.
const enableDarkTheme = config => {
    return { ...config, darkTheme: true };
}
const config = {
    darkTheme: false
};
console.log(enableDarkTheme(config)); // {darkTheme: true} (new object)