'use strict';

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const r = new Rectangle(10, 10);
console.log(r);  // Rectangle {width: 10, height: 10}

class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

console.log(new Course("Learn JavaScript", false));  // Course {name: 'Learn JavaScript', isCompleted: false}
console.log(new Course("Learn Programming", true));  // Course {name: 'Learn Programming', isCompleted: true}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {  // no need to have `function` keyword here
        return `${this.firstName} ${this.lastName}`;
        // return `${firstName} ${lastName}`;       // same as above!
    }

    getGreeting() {
        const fullName = this.getFullName();
        return `Hello ${fullName}`;
    }
}

console.log(new Person("Jane", "Smith"));   // Person {firstName: 'Jane', lastName: 'Smith'}
const p1 = new Person("John", "Doe")
console.log(p1);     // Person {firstName: 'John', lastName: 'Doe'}
console.log('full name = ', p1.getFullName(), ', greeting = ', p1.getGreeting());   // full name =  John Doe , greeting =  Hello John Doe


// Setters and getters
class User {

    constructor(age) {
        this.age = age;     // calls the setter method
    }

    set age(value) {
        console.log(`\tset age(): setter invoked with value '${value}'`);

        const numValue = Number.parseInt(value);

        if (Number.isNaN(numValue)) {
            console.log(`\tset age(): Error! Input value '${value}' is not a number.`);
            return;
        }

        this._age = numValue;
    }

    get age() {
        console.log(`\tget age(): getter invoked`);
        return this._age;
    }
}
const user = new User(10);
console.log(`user age = ${user.age}`);  // user age = 10
user.age = 34;
console.log(`user age = ${user.age}`);  // user age = 34
user.age = "aaa";                       // set age(): Error! Input value 'aaa' is not a number.
console.log(`user age = ${user.age}`);  // user age = 34

// Static method
class Config {
    static mainKey() {
        return "ABC";
    }
}
console.log(`static method mainKey() returned ${Config.mainKey()}`); // ABC

class Grader {
    setGrade(grade) {
        console.log(`inside setGrade(). grade = ${grade}`);
        this._grade = grade;
        return this;
    }
    markAsComplete() {
        console.log(`inside markAsComplete()`);
        this._isCompleted = true;
        return this;
    }
}
const grader = new Grader();
grader.setGrade(70).markAsComplete();

console.log(`\n`);

// Class inheritance
class Employee {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    getWorkspace() {
        return "dedicated desk";
    }
}
class Manager extends Employee {
    getDirectReports() {
        return 10;
    }
    getWorkspace() {
        return "office room"
    }
}

const emp = new Employee("Emp Doe");
console.log(`Employee: Name: ${emp.name}, Workspace: ${emp.getWorkspace()}`);   // Employee: Name: Emp Doe, Workspace: dedicated desk
const mgr = new Manager("Mgr Smith")
console.log(`Manager: Name: ${mgr.name}, Workspace: ${mgr.getWorkspace()}`);    // Manager: Name: Mgr Smith, Workspace: office room
console.log(`Manager direct reports: ${mgr.getDirectReports()}`);       // Manager direct reports: 10

class Parent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Child extends Parent {
    constructor(name, suffix) {
        super(name);
        this.suffix = suffix
    }
    getName() {
        return super.getName() + this.suffix;
    }
}
const parent = new Parent("John")
console.log(`parent.getName() => ${parent.getName()}`); // parent.getName() => John
const child = new Child("Jim", "[child]");
console.log(`child.getName() => ${child.getName()}`);   // child.getName() => Jim[child]

console.log(typeof (Child));     // function


// Prototypes
console.log(Object.getPrototypeOf(1));          // Number (0)
console.log(Object.getPrototypeOf(false));      // Boolean (false)
console.log(Object.getPrototypeOf("hello"));    // String ('')
console.log(Object.getPrototypeOf(Object.getPrototypeOf("hello")));
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf("hello"))));  // null

// public class fields
class Citizen {
    votingeAge = 18;
    constructor() {
        // no need to initialize variables here.
    }
}

// private class fields
class Constituent {
    #votingAge = 18;
    constructor() {
        console.log(`Constituent constructor(): age = ${this.#votingAge}`); // Constituent constructor(): age = 18
    }
    get age() {
        return this.#votingAge;
    }
}
const constituent = new Constituent();
console.log(constituent.age);   // 18

// private instance methods
class Student {
    constructor() {
        this.#logInfo('in constructor');
    }
    #logInfo(message) {
        console.log(`logInfo(): ${message}`);   // logInfo(): in constructor
    }
}
const s = new Student();
// s.#logInfo()    // ERROR: Private field '#logInfo' must be declared in an enclosing class