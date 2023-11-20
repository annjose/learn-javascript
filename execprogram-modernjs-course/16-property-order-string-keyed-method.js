'use strict';

let keys = Object.keys({ a: 1, b: 2, c: 3 });
console.log(keys);  // ['a', 'b', 'c']

keys = Object.keys({ b: 1, a: 2, c: 3 });
console.log(keys);  // ['b', 'a', 'c']

const user = { name: 'Amy', age: 23 };
console.log(Object.keys(user));     // ['name', 'age']
user.city = "San Jose";
console.log(Object.keys(user));     // ['name', 'age', 'city']

// JSON serialize / deserialize
console.log("JSON serialize / deserialize....");
let serializedUser = JSON.parse(JSON.stringify(user));
console.log(Object.keys(serializedUser));     // ['name', 'age', 'city']
serializedUser = JSON.parse('{"name": "Amy", "age": 23, "city": "San Jose" }');
console.log(Object.keys(serializedUser));     // ['name', 'age', 'city']

// Exception to this role - objects with number keys. Here, these number keys are ordered numerically
console.log("Object with number keys....")
let objWithNumKeys = { 1: 'one', 2: 'two' };
console.log(Object.keys(objWithNumKeys));   // ['1', '2']  (numerical ordering)

objWithNumKeys = { 2: 'two', 1: 'one' };
console.log(Object.keys(objWithNumKeys));   // ['1', '2']  (numerical ordering)

objWithNumKeys = { 'ten': 10, 2: 'two', 'four': 4, 1: 'one' };;
console.log(Object.keys(objWithNumKeys));   // ['1', '2', 'ten', 'four']   (numerical first, then the order of defintion)

// --------------- String Keyed Methods -----------------------
console.log("\n--------------- String Keyed Methods -----------------------")

// Object literal with string keyed method
const emp = {
    name() { return 'Amy'; },
    "name with white space"() { return 'do you really need this?'; } // Author said this should work, but it didn't work for me
}
console.log(emp.name());                        // Amy
console.log(emp["name with white space"]());    // do you really need this?

// Class with string keyed method
class Employee {
    name() { return 'Amy'; }
    "name with white space"() { return 'do you really need this?' };
}
const student = new Employee();
console.log(emp.name());                            // Amy
console.log(student["name with white space"]());    // do you really need this?