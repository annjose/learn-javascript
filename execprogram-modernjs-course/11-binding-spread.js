'use strict';

// Regular use of this variable
const user = {
    name: "Jane",
    userName() { return this.name; }
};
let result = user.userName();
console.log(`user.userName() = ${result}`);   // "user.userName() = Jane"

const user1 = { name: "Jane" }

function userName() { return this.name; }

// The following line will throw error because userName is defined outside the user object and hence cannot access name property of user object.
// result = userName();   // ERROR: Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'name')

// But you can do that if you bind the function `userName()` to user object using the bind method
const userNameBound = userName.bind(user1);
result = userNameBound();
console.log(`userNameBound() returned ${result}`); "userNameBound() returned Jane"
// result = userName();     // still throws an error - because userName function stays unchanged after calling userName.bind(user1)

// Easy way to bind a function and immiediately call the bound function (without declaring a separate variable)
result = userName.bind(user1)();
console.log(`userName.bind(user1)() returned ${result}`); "userName.bind(user1)() returned Jane"


// Spread
console.log("------------------ SPREAD -----------------");

// provide variable number of arguments into a function
function add(x, y) {
    return x + y;
}
const n = [10, 20];
console.log("add with variable args. result:", add(...n));  // result: 30


// include one array's elements into another array while constructing it. (spread one array's elements into another)
const middle = [5, 6];
const c = [1, ...middle, 8];
console.log(c); // [1, 5, 6, 8]

// combine two arrays into one
const a1 = [3, 4];
const a2 = [6, 7];
const combined = [...a1, ...a2];
console.log("combined: ", combined);   // [ 3, 4, 6, 7]
const combinedInReverse = [...a2, ...a1];
console.log("combined in reverse: ", combinedInReverse);    // [6, 7, 3, 4]

// combine all properties of one object into another
const m = { name: "Amy", age: 24 };
const comb = { id: 123, ...m, department: "Mathematics" };
console.log("combined object:", comb);  // {id: 123, name: 'Amy', age: 24, department: 'Mathematics'}

console.log("........");

// if both objects have a property with the same name, the last instance's value wins - even when it comes from the spread
const emp1 = { name: "Amy", age: 24 };
const emp2 = { department: "Math", name: "Beth" };
console.log({ ...emp1, ...emp2 });    // {name: 'Beth', age: 24, department: 'Math'}
console.log({ ...emp2, ...emp1 });    // {department: 'Math', name: 'Amy', age: 24}

const loggedOutUser = {
    name: "Amy",
    loggedIn: false
};
const loggerInUser = {
    ...loggedOutUser,
    loggedIn: true
}
console.log("loggedInUser:", loggerInUser); // {name: 'Amy', loggedIn: true}