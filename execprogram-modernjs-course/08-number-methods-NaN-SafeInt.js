'use strict';

// More Number methods
console.log(Number.isFinite(5));         // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite("test"));    // false

console.log(`Number.MAX_SAFE_INTEGER=${Number.MAX_SAFE_INTEGER}`);   // 9007199254740991
console.log(`Number.MIN_SAFE_INTEGER=${Number.MIN_SAFE_INTEGER}`);   // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER === -Number.MIN_SAFE_INTEGER);   // true

// operations outside MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are NOT safe
console.log(Number.MAX_SAFE_INTEGER + 1);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);   // true

// operations between MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are safe
console.log(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER);   // false

// IsSafeInteger 
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));      // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));  // false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));      // true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));  // false

const safeIntegerMultiply = (x, y) => {
    const z = x * y;
    if (Number.isSafeInteger(z)) {
        return z;
    }
    throw new Error("Product is an unsafe integer");
}
console.log(safeIntegerMultiply(10, 20));   // 200
// console.log(safeIntegerMultiply(Number.MAX_SAFE_INTEGER, 20));  // Uncaught Error Error: Product is an unsafe integer