'use strict';

// dynamic properties - propreties with variable names
const user = { id: 1, name: 'John', age: 34 };
console.log(`user.id = ${user.id}`);  // 1
let key = 'id';
console.log(`key= ${key}, user[${key}]=${user[key]}`); // key=id, user[id]=1

// Object.keys()
console.log(`Object.keys(user)=${Object.keys(user)}`);  // id, name, age

// read the values inside an object using Object.keys() and dynamic properties
const values = Object.keys(user).map(key => user[key]);
console.log(values);    // [1, 'John', 34]

const logValues = course => {
    Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
}
logValues({ id: 1, name: "Learn JavaScript", year: 2021 }); // (in separate lines) - 1, "Learn JavaScript" and 2021

console.log(user.nothing);    // undefined
console.log(`user=${user}`);  // user=[object Object]
// Object.values
console.log(Object.values(user));   // [1,'John',34]
console.log(Object.entries(user));  // [ ['id', 1], ['name', 'John'], ['age', 34]]
