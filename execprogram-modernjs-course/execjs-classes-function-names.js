'use strict';

class Person {
    // name = 'aa';    // valid, but all classes will have the same name.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    canVote() {
        return this.age >= 21;
    }
}

const p = new Person("Joe");
console.log(p);     // Person {name: 'Joe', age: undefined}

const people = [new Person("Amy", 13), new Person("Ben", 40)];
console.log(people);   // '[{"name":"Amy","age":13},{"name":"Ben","age":40}]'  (with JSON.stringify(people))

// Errors
// const a = Person.canVote(); // Uncaught TypeError TypeError: Person.canVote is not a function
// const b = Person();     // Uncaught TypeError TypeError: Class constructor Person cannot be invoked without 'new'

// Function Names
function five() {
    return 5;
}
console.log(five.name); // five

// Anonymous function assigned to a variable
const two = function () { return 2; }
console.log(two.name);  // two

// Anonymous function NOT assigned to a variable (the variable `a` here is for the `name` property, not the function.)
const a = (function () { return 3; }).name;
console.log("Name of anonymous function: " + a);    // Name of anonymous function: 

// Anoonymous functions assigned to an array, they don't have a name
const arr = [function () { return 1; }, function () { return 2 }];
console.log("Names: " + arr[0].name, arr[1].name);  // Names: 

// Arrow functions
const four = () => { return 4; };
console.log("Name: " + four.name);  // Name: four
const arrowName = (() => { }).name;
console.log("Name: " + arrowName);  // Name: 

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


