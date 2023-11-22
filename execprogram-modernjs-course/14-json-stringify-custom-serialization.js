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

const result = JSON.parse(JSON.stringify([undefined]));
console.log(result);    // [null]

// ------------toJSON() custom implementation ---------------
console.log("------------toJSON() custom implementation ---------------");

let user = {
    name: "Joe",
    toJSON: () => {
        return "This is Joe";
    }
}
console.log(JSON.stringify(user));  // "This is Joe"

// You can return a JSON object in toJSON()
let emp = {
    name: "Joe",
    toJSON: () => {
        return { anotherName: "Beth" }
    }
}
console.log(JSON.stringify(emp));   // {"anotherName": "Beth" }
console.log(JSON.parse(JSON.stringify(emp)));   // {anotherName: "Beth" }

// Customize JSON serialization
console.log("\n--------------------- Custom JSON serialization-----------------");

user = {
    name: "Amy",
    age: 25,
    email: "amy@example.com"
}
let str = JSON.stringify(user, ['name', 'email']);
console.log(str);   // {"name":"Amy","email":"amy@example.com"}

// You can pass a callback function in the replacer argument
let iteration = 0;
str =
    JSON.stringify(
        user,
        (key, value) => {
            iteration++;
            console.log(`in callback iteration #${iteration}`);
            console.log(`\tkey: ${JSON.stringify(key)}, value: ${JSON.stringify(value)}`);

            return value;    // this return statement is very important. Without this, it will stop with first iteration.
        }
    );
console.log(`str = ${str}`);    // str = {"name":"Amy","age":25,"email":"amy@example.com"}

// replacer can handle nested object also. If the replacer function returns undefined, it will not be included in the stringify result.
console.log("-----Custom serialization of nested objects and undefined returns----------------");
const student = { name: "Amy", age: 25, secret: "secretValue", address: { city: "Seattle", zip: 98008 } };
str = JSON.stringify(
    student,
    (key, value) => {
        if (key === "secret") {
            return undefined;
        } else if (key == "age") {
            return `${value} years old`
        } else {
            return value;
        }
    }
);
console.log(`str = ${str}`);    // str = {"name":"Amy","age":"25 years old","address":{"city":"Seattle","zip":98008}}

emp = '{"name": "Amy"}';
let res = JSON.parse(emp);
console.log(res);   // {name: 'Amy'}

res = JSON.parse(
    emp,
    (key, value) => {
        if (key === "name") {
            return `New ${value}`;
        } else {
            return value;
        }
    }
);
console.log(res);   // {name: 'New Amy'}