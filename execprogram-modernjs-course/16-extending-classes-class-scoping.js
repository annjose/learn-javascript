'use strict';

class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs
    }
    canWalk() {
        return this.legs > 0;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name + ' the cat', 4); // if this line is commented, you get the error 
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
}
class Worm extends Animal {
    constructor(name) {
        super(name + ' the worm', 0);
    }
}

const c = new Cat('Kitty');
console.log(`${c.name} can walk? - ${c.canWalk()}`);    // Kitty the cat can walk? - true

const w = new Worm("Worry");
console.log(`${w.name} can walk? - ${w.canWalk()}`);    // Worry the worm can walk? - false

console.log([c instanceof Cat, c instanceof Animal]);     // [true, true]
console.log([c instanceof String, "cat" instanceof Cat]); // [false, false]

class Bird {
    speak() { return "chirp"; }
}
class Crow extends Bird {
    speak() { return "CAW"; }
}
console.log([new Bird().speak(), new Crow().speak()]);  // ['chirp', 'CAW']

// Coding challenge
// Define an Admin class that inherits from User. Its constructor should call super, passing along the relevant arguments. 
// It should also set the admin's isAdmin flag to true
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.isAdmin = false;
    }
}
class Admin extends User {
    constructor(name, email) {
        super(name, email);
        super.isAdmin = true;
    }
}

const admin = new Admin('Amir', 'amir@example.com');
console.log([admin.name, admin.email, admin.isAdmin]);  // ['Amir', 'amir@example.com', true]

// JS does not support multiple inheritance
// class Crow extends Animal, Bird { }  // SyntaxError: Unexpected token ','