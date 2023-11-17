'use strict';

// JSON stringify & parse
const json = JSON.stringify({ a: 2 });
console.log(json); // {"a": 2}
const obj = JSON.parse(json);
console.log(obj); { a: 2 }

// JSON.parse("ddd");   // SyntaxError: Unexpected token d in JSON at position 0
// JSON.parse(" {a: 2 }")  // SyntaxError: Unexpected token a in JSON at position 2

console.log(JSON.stringify('hello'));   // "hello"
console.log(JSON.parse(JSON.stringify('hello')));   // hello

console.log(JSON.parse(JSON.stringify([1, 2])));   // [1,2]

const u = [1, undefined, 2]
console.log(JSON.stringify(u));             // '[1, null, 2]'
console.log(JSON.parse(JSON.stringify(u))); // [1, null, 2]

// toJSON - custom implementation
const user = {
    name: "Joe",
    toJSON: () => {
        return "This is Joe";
    }
}
console.log(JSON.stringify(user));  // "This is Joe"

// You can return a JSON object in toJSON()
const emp = {
    name: "Joe",
    toJSON: () => {
        return { anotherName: "Beth" }
    }
}
console.log(JSON.stringify(emp));   // {"anotherName": "Beth" }
console.log(JSON.parse(JSON.stringify(emp)));   // {anotherName: "Beth" }


// Spread

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

// if both objects have a property with the same name, the last instance's value wins - even when it comes from the spread
const user1 = { name: "Amy", age: 24 };
const user2 = { department: "Math", name: "Beth" };
const joined = { ...user1, ...user2 };
console.log("joined:", joined);         // {name: 'Beth', age: 24, department: 'Math'}
console.log({ ...user2, ...user1 });    // {department: 'Math', name: 'Amy', age: 24}

const loggedOutUser = {
    name: "Amy",
    loggedIn: false
};
const loggerInUser = {
    ...loggedOutUser,
    loggedIn: true
}
console.log("loggedInUser:", loggerInUser); // {name: 'Amy', loggedIn: true}
