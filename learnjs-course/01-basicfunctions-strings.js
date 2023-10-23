'use strict';

function sum(x, y) {
    let s = x + y;
    return s; // without this, the return value will be 'undefined'
}
let result = sum(2, 3);
console.log(result);

// Strings
let s1 = "hello";
let s2 = 'hello';
let s3 = `hello`;
console.log(s1 == s2, s1 == s3, s2 == s3); // true true true
console.log("JavaScript".length); // 10
console.log("JavaScript".toLowerCase()); // javascript
console.log("JavaScript".toUpperCase()); // JAVASCRIPT

// get character at index using [] syntax
console.log("JavaScript"[0], "JavaScript"[3], "JavaScript"[10], "JavaScript"[9]); // J a undefined t

// get character at index using .at() function
console.log("JavaScript".charAt(0), "JavaScript".charAt(9), "JavaScript".at(-1), "JavaScript".at(-2)); // J t t p

let str = "hello"
console.log('last character of ', str, ' is', str[str.length - 1], str.at(-1))  // o o


// sub strings
console.log("orange".substring(0, 2) == "or", "orange".substring(2, 5) == "ang", "orange".substring(5, 10) == "e");  // true true true
console.log("orange".substring(2) == "ange") // true

// += operator
console.log('hello' + 'world' === 'helloworld') // true
str += 'world';
console.log(str == 'helloworld'); // true

// template strings
let multi = `hello
    this multline
    is
    cool.`;
console.log(multi);

let firstName = 'John'; let lastName = 'Doe';
console.log(`Hello ${firstName} ${lastName}!`);

function capitalize(word) {
    return `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`;
}
console.log(capitalize("sam"), capitalize("ALEX"), capitalize("chARLie")); // "Sam" "Alex" "Charlie"