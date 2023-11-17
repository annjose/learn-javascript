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