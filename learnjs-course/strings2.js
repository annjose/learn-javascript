'use strict';

console.log('  John Doe  '.trim()); // John Doe
const str = 'Hello World!'
console.log(str.startsWith('H'), str.startsWith('He'), str.startsWith('An')); // true true false
console.log(str.endsWith('!'), str.endsWith('ld!'), str.endsWith('An'));      // true true false
console.log(str.includes('llo'), str.includes('An'));   // true false

const s = "a,  b, c";
console.log(s.split(','));   // ['a', '  b', ' c']  (note that the whitespace characters are preserved in the array items)

let t = 'You are welcome';
console.log(t.replace(' ', '_'), t.replaceAll(' ', '_'), t); // You_are welcome, You_are_welcome, You are welcome

// coding challenge to create a slug with the rules - 
// The slug should not be more than 15 characters, should always be in lower case, space characters should be replaced by dashes(-).
const getSlug = name => {
    let slug = name.substring(0, 15).toLowerCase().replaceAll(' ', '-');
    return slug;
}
console.log(getSlug("IKEA table"), getSlug("200cm Bed")); // "ikea-table" "200cm-bed"
console.log(getSlug("Bedside lavalamp"), getSlug("A B C noodles")); // "bedside-lavalam" "a-b-c-noodles"