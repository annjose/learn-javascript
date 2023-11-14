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
