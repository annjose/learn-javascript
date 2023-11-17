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

