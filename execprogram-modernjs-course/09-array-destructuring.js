'use strict';

const nums = [100, 200, 300, 400];
const [a, b] = nums;
console.log(a, b);  // 100, 200

const [x, , z] = nums;
console.log(x, z);  // 100, 300

// const [m] = undefined;  ERROR: Uncaught TypeError TypeError: undefined is not iterable
// const [p, q] = 10;      ERROR: Uncaught TypeError TypeError: 10 is not iterable

const [a1, a2, a3, a4] = [1, 2];
console.log(a1, a2, a3, a4);    // 1 2 undefined, undefined

const [c1, c2 = -1, c3 = -1, c4] = [100, 200];
console.log(c1, c2, c3, c4);    // 100 200 -1 undefined

const [b1, , b2, ...rest] = [100, 200, 300, 400, 500];
console.log(b1, b2, rest);  // 100  300  [400, 500]

// const [...rest2, d1] = [100, 200, 300]; // ERROR: SyntaxError: Rest element must be last element

const [s1, s2, ...srest] = 'wxyz';
console.log(s1, s2, srest);  // 'w', 'x', ['y', 'z']

const [...chars] = 'abc';
console.log(chars);     // ['a', 'b', 'c']

// Nested array destructuring
const dataPoints = [
    [11, 15],
    [22, 24]
];
const [[x1, y1], [x2, y2]] = dataPoints;
console.log(`x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}`);

const [[x3,]] = dataPoints;
const [[, x4]] = dataPoints;
const [, [, x5]] = dataPoints;
console.log(`x3=${x3}, x4=${x4}, x5=${x5}`);    // x3=11,  x4=15, x5=24