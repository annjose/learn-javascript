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