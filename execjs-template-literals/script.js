'use strict';

// Template Literals
let s = `hello`
console.log(s, '|', `hello` == 'hello');

console.log(`${'Shouting'.toUpperCase()} and ${'Whispering'.toLowerCase()}`) // SHOUTING and whispering

console.log('nums = ', [1,2].toString());
console.log(`nums = ${[1,2]}`)

function showAndAddTwo(x, y) {
    return `${x} + ${y} = ${x + y}`;
}

console.log(showAndAddTwo(10,11));
console.log(showAndAddTwo(123, 111));

let name = 'Ann';
let email = `Hello ${name},

    How are you doing?

    Thanks,
    John.
`;
console.log(email);