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