'use strict';

function add(x, y = 0) {
    return x + y;
}
console.log([add(2, 1), add(2)]);   // [3, 2]

const randomNum = 10;
function multiply(x, y = 10 * 2) {
    return x * y;
}
console.log([multiply(2, 1), multiply(2)]);   // [2, 40]

function fun(x, y = x) {
    return x + y;
}
console.log([fun(2, 1), fun(2), fun(1)]);   // [3, 4, 2]

class User {
    constructor(name, isAdmin = false) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}
console.log([new User('Amy', true).isAdmin, new User('Betty').isAdmin]);    // [true, false]

// Destructure with default params
function addObjects(xContainer, yContainer = { y: 0 }) {
    return xContainer.x + yContainer.y;
}
console.log(addObjects({ x: 2 }, { y: 3 }));    // 5
console.log(addObjects({ x: 2 }));              // 2  (= 2+0)

function addObjects_2({ x }, yContainer = { y: x }) {
    return x + yContainer.y;
}
console.log(addObjects_2({ x: 2 }, { y: 3 }));    // 5
console.log(addObjects_2({ x: 2 }));              // 4 (= 2+2)

