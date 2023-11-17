'use strict';

// Optional chaining for object properties
const user = {
    details: {
        id: 1,
        name: {
            firstName: 'John',
            lastName: 'Doe'
        },
        age: 34,
        partner: null
    },
    address: {
        streetAddress: '123 Sesame Street',
        city: 'Mountain View',
        zip: 94143,
        state: 'California'
    }
}

// console.log(user.nothing.something); // ERROR: Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'something')
// console.log(user.partner.name);         // ERROR: Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'name')
console.log(user.nothing?.something, user.partner?.name);   // undefined undefined
console.log(user.details?.id, user.details?.age, user.details?.name?.lastName, user.address?.state);  // 1 34 Doe California
console.log(user.something?.name, user.details?.namething)      // undefined undefined

// Optional chaining for array elements and functions
const data = {
    grades: [10, 20, 30],
    name: 'Math Grades'
}
console.log(data.grades?.[0]);     // 10
console.log(data.name?.toUpperCase());  // MATH GRADES

// change data.name to a number which does not have the method toUpperCase()
data.name = 100;
// console.log(data.name?.toUpperCase());  // ERROR: Uncaught TypeError TypeError: data.name?.toUpperCase is not a function
console.log(data.name?.toUpperCase?.());   // undefined

// Optional chaining during assignment
console.log('----Optional chaining in assignment: Falsy value----');
let settings1 = {};
console.log('settings1 before assignment: ', settings1);    // {}
settings1.theme && (settings1.theme = 'dark');    // checks if settings.theme exists and if so, sets it to 'dark'
console.log('settings1 after assignment: ', settings1);     // {}

console.log('----Optional chaining in assignment: Truthy value----');
let settings2 = { theme: 'light' };
console.log('settings2 before assignment: ', settings2);    // {theme: 'light'}
settings2.theme && (settings2.theme = 'dark');    // checks if settings.theme exists and if so, sets it to 'dark'
console.log('settings2 after assignment: ', settings2);     // {theme: 'dark'}


// Nullish coalescing
console.log('\n------Nullish coalescing-----');
const getName = name => {
    return name ?? 'N/A';
}
console.log(getName('Amy'), getName(null), getName(undefined)); // Amy N/A N/A

const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? `user`}`
}
console.log(getWelcomeMessage({ fullName: "Sam Green" })); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"

// combine nullish coalescing with optional chaining
const response = {
    data: {
        user: {
            name: {
                lastName: 'Doe',
                // no firstName
            }
        }
    }
}
console.log(data.user?.name?.firstName);            // undefined
console.log(data.user?.name?.firstName ?? "N/A");   // "N/A"

console.log(`------null vs. undefined-----`);
const p = {
    name: 'John',
    age: 34,
    address: null
}
console.log(p.birthday, p.address); // undefined null

const student = {};
console.log(2 * student.age ?? 0);     // NaN
console.log(2 * (student.age ?? 0));   // 0