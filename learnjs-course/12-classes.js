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