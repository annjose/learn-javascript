'use strict';

// Named functions
function f1(x) {
    return x;
}
console.log(f1(1));  // 1

const f2 = function (x) {
    return x;
}
console.log(f2(2));  // 2

// Anonymous function
const result = (function (x) {
    return x;
})();
console.log(result); // 3

// Define callbacks
const r_1 = [1, 2, 3].map(function (x) { return x * 2; });
console.log(r_1);   // [2, 4, 6]

// Use arrow functions to do the same
const r_2 = [1, 2, 3].map((x) => x * 2);
console.log(r_2);   // [2, 4, 6]

// map callback has a second argument that gives the index of the element
const r_3 = [1, 2, 3].map((x, index) => index);    // 0, 1, 2
console.log(r_3);

const user = { name_1: "John" };
const { name_1 } = user;                      // regular destructuring
const getName_1 = (user) => user.name_1;    // regular function call
console.log(name_1, getName_1(user));   // John John

const getName_2 = ({ name_1 }) => name_1;  // destructure the name proeprty of user into function parameter and return it
console.log(getName_2(user));  // John

const giveMeRest = ([first, second, ...rest]) => rest;
console.log(giveMeRest([1, 2, 3, 4])); // [3, 4]

// Multi-line arrow functions
const howMany = (x) => {
    if (x > 10) {
        return 'many';  // return keyword is important, without that, the function will return `undefined`
    } else {
        return 'few';
    }
};
console.log(howMany(11));   // many

// Arrow functions make scoping of functions much easier - no need to use bind()
const student = {
    city: "Paris",
    country: "France",
    addressString() {
        return function () {
            return `${this.city}, ${this.country}`; // `this` is NOT available here
        }
    }
}
// console.log(student.addressString()());   // ERROR: TypeError: Cannot read properties of undefined (reading 'city')

// Two ways to solve this:
//  1) using bind() function
//  2) using arrow founctions - much clerer. Arrow functions inherit the scope that they are defined in
const employee = {
    city: "Paris",
    country: "France",
    addressString() {
        // Option 1: use the bind function
        /*
        const f = function () {
            return `${this.city}, ${this.country}`; // `this` is NOT available here
        }
        return f.bind(this);
        */

        // Option 2:
        return () => `${this.city}, ${this.country}`;
        // return () => { return `${this.city}, ${this.country}`; } // same as above.
        // const f = () => { return `${this.city}, ${this.country}`; }; // same as above.
        // return f;
    }
}
console.log(employee.addressString()());    // Paris. France