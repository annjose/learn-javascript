'use strict';

// very simple Tagged template literal
function randomFunc(strings, ...values) {
    return "someResult";
}
const result = randomFunc`xpz${2 + 2}`;
console.log(result);    // someResult

function returnsItsArguments(strings, ...values) {
    // the function returns  an object with two elements:
    //    first one is an array of the strings in the literal and the other is array of the values.
    return {
        strings: strings,
        values: values,
    };
}

// a Tagged template literal with two literal strings and one value
const result1 = returnsItsArguments`one${2}three`;     // Note: the template starts and ends with literals, so no empty string in result.
console.log(result1);    //  { strings: ["one","three"], values: [2] }
console.log(JSON.stringify(result1) == `{"strings":["one","three"],"values":[2]}`);    // true

// amother Tagged template string that ends with a value, and hence an empty string will be added to the strings array
const result2 = returnsItsArguments`one${2}`;

// another Tagged template literal with one literal string and one value - note that value is at the END of the template
console.log(result2);    //  { strings: ["one",""], values: [2] }
console.log(JSON.stringify(result2) == `{"strings":["one",""],"values":[2]}`);    // true

// another Tagged literal with one literal string and one value - note that value is at the BEGINNING of the template
const result3 = returnsItsArguments`${2}three`;
console.log(result3);    //  { strings: ["","three"], values: [2] }
console.log(JSON.stringify(result3) == `{"strings":["","three"],"values":[2]}`);    // true

// You can have expressions inside the `{}` in the literal, and that expression will be evaluated the result will be put into the literal.
// The following example mimics normal string interpolation, but doubles all the interpolated values as they are inserted.
function doubleNumbers(strings, ...values) {
    // strings array has 3 elements ["the number ", " and ", ""]
    // values  array has 2 elements [1, 2]
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {    // use the information that strings array is always one less than values array.
            result += values[i] * 2;
        }
    }
    return result;
}
const result4 = doubleNumbers`the numbers ${1} and ${2}`;
console.log(result4);    // "the numbers 2 and 4"

// Double numbers using tagged template literals
function doubleNumbers(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] * 2;
        }
    }
    return result;
}
const result_2 = doubleNumbers`the numbers ${1} and ${2}`;
console.log(result_2);    // the numbers 2 and 4