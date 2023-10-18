'use strict';

// Template Literals
let s = `hello`
console.log(s, '|', `hello` == 'hello');

console.log(`${'Shouting'.toUpperCase()} and ${'Whispering'.toLowerCase()}`) // SHOUTING and whispering

console.log('nums = ', [1, 2].toString());
console.log(`nums = ${[1, 2]}`)

function showAndAddTwo(x, y) {
    return `${x} + ${y} = ${x + y}`;
}

console.log(showAndAddTwo(10, 11));
console.log(showAndAddTwo(123, 111));

let name = 'Ann';
let email = `Hello ${name},

    How are you doing?

    Thanks,
    John.
`;
// console.log(email);

// for loops
const obj = {
    'a': 1,
    'b': 2
};
const keys = [];
for (const k in obj) {
    keys.push(k);
}

console.log('keys=', keys);
console.log('typeof([1, 2])=', typeof (keys));     // prints 'object'
console.log('[1, 2].keys=', Object.keys([1, 2]));  // ['0','1']

const arr = [100, 200];
for (const i in arr) {
    console.log(`arr[${i}] = ${arr[i]}   |  typeof(i) = ${typeof (i)}`);
}

// sparse array
const a = [];
a[3] = 100;
console.log('a[0]', a[0]);  // shows undefined
console.log('a[3]]', a[3]); // shows 100

// but if you loop through the array using for...in, it will skip the elements 0 to 2
for (const i in a) {
    console.log(`in the loop a[${i}]=`, a[i]);  // shows only one line in the loop a[3]= 100'
}
console.log(`length of a = ${a.length}`)   // shows 4

const letters = [];
letters[3] = 'a';
const keys1 = [];
for (const key in letters) {
    console.log('in the for...in loop. key = ', key);  // executed only once with the key 3
    keys1.push(key);
}
console.log(keys1);   // shows ['3'] counter-intuitive

// for...of loops
const arrb = [100, 200, 300]
const arrb_copy = []
for(const item of arrb) {
    console.log('in the loop. item = ', item)   // shows 100, 200, 300
    arrb_copy.push(item);
}
console.log('arrb_copy =', arrb_copy);

const letters2 = [];
letters2[3] = 'a';
const keys2 = [];
for (const key of letters2) {
    console.log('in the for...of loop. key = ', key);  // executed 4 times, thrice with undefined and once with 'a' (not '3')
    keys2.push(key);
}
console.log(keys2);   // shows [undefined, undefined, undefined, 'a']

const st = 'hello';
for(const c of st) {
    console.log(c);   // executes 5 items, 'h', 'e', 'l', ''l', 'o'
}