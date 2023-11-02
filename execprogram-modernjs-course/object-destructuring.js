'use strict';

const person = { name: 'John', email: "john@gmail.com", age: 36 };
const { name, age } = person;
console.log(name, age);     // "John", 36

const { name3 } = person;
console.log(name3);     // undefined (because person does not have property name3)

const person2 = { name2: 'John', email: "john@gmail.com", age2: 36 };
const { age2, name2 } = person2;
console.log(age2, name2,);     // 36, "John"

const a = null;
// const { b } = a; // ERROR: Uncaught TypeError: Cannot destructure property 'b' of 'a' as it is null.
// const { c } = undefined;    // ERROR: Uncaught TypeError: Cannot destructure property 'c' of 'undefined' as it is undefined.

const user = { name: "John" };
const { loginCount } = user;
console.log(`loginCount = ${loginCount}`);  // loginCount = undefined

const { loginCount2 = 0 } = user;
console.log(`loginCount2 = ${loginCount2}`);  // loginCount2 = 0

// collect rest of the properties using ... syntax
const student = { fullName: "John", age: 23, major: "Mathematics", resident: true };
const { fullName, major, ...rest } = student;
console.log([fullName, major, rest]); // ["John", "Mathematics", {age: 23, resident: true}]

const { fullName: studentName } = student;
console.log(`studentName = ${studentName}`);    // studentName = "John"

const key = "author";
const { [key]: authorName } = { author: "John Doe" };
console.log(authorName);    // John Doe

const employee = {
    get name() {
        return "Jo" + "hn"
    }
}
const { name: empName } = employee;
console.log(`empName = ${empName}`);    // empName = "John"


// Destructuring within functions
const item = { name: "Table", price: 1000 };
function itemSummary({ name, price }) {
    return `${name} costs ${price}`;
}
// Alternately, you can use the usual method of using item object and accessing the properties using item.name, item.price
function itemSummary_same(item) {
    return `${item.name} costs ${item.price}`;
}

console.log("destructure syntax: " + itemSummary(item)); // Table costs 1000
console.log("regular syntax: " + itemSummary_same(item)); // Table costs 1000

// Destrcuture inside for loops
const users = [{ name: "John" }, { name: "Abby" }];
const names = [];
for (const { name } of users) {
    names.push(name);
}
console.log(names); // ['John', 'Abby']