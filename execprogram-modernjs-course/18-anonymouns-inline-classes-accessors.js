'use strict';

class Cat {
    speak() { return "meow"; }
}
console.log(Cat.name);  // Cat

const Animal = Cat;
console.log(new Animal().speak());  // meow

const cat = new (
    class {
        speak() { return "meow meow"; }
    }
)();
console.log(cat.speak());   // meow meow

console.log("class name:", (class { }).name);  // ''
const classVar = class { };
console.log("class name:", classVar.name);     // classVar

const classes = [class { }, class { }];
console.log("classes array, Class name:", classes[0].name); // ''

const rectClasses = [
    class {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        area() { return this.width * this.height; }
    }
];
const Rectangle = rectClasses[0];
const rectangle = new Rectangle(3, 4);
console.log(rectangle.area(), Rectangle.name);  // 12, ''

console.log(typeof Rectangle);  // function

//--------------------------- Accessors in Classes ---------------------------
console.log("--------------------------- Accessors in Classes ---------------------------");

class User {
    constructor(newName) {
        this.actualName = newName;
    }
    get name() {
        return this.actualName;     // Note: If the internal variable's name is the same as the getter, an infinite loop will be created.
    }
    set name(newName) {
        this.actualName = newName;
    }
}
const user = new User("Amy");
console.log(`user name: ${user.name}`); // Amy
user.name = "John";
console.log(`user name: ${user.name}`); // John