
//--------------------- Symbol basics ------------------------
console.log("--------------------- Symbol basics ------------------------");

const sym_1 = Symbol("sym_1");
const sym_2 = Symbol("sym_2");

console.log([sym_1.description, sym_2.description]);  // [sym_1, sym_2]

console.log([sym_1 === sym_1, sym_1 === sym_2, sym_2 === sym_2]);     // [true, false, true]
console.log(Symbol("sym3") === Symbol("sym_3"));    // false

const nameSymbol = Symbol("name");
const obj = {
    nameSymbol: "value of string key",
    [nameSymbol]: "value of symbol key"
}
console.log([obj.nameSymbol, obj[nameSymbol]]);   // ['value of string key', 'value of symbol key']

// Symbols are not part of the object, they are dropped when an object is seralized and deserialized
const symKey = Symbol("key2");
const myObj = {
    key1: "value1",
    [symKey]: "sym value"   // note: the computed property syntax here  - [symKey] instead of symKey - is important.
}
console.log(myObj);     // {key1: 'value1', symKey: 'sym value'}
const newMyObj = JSON.parse(JSON.stringify(myObj));
console.log(newMyObj);  // {key1: 'value1'}

// Symbol.toStringTag property
const user = { name: 'Amir' }
console.log('user.toString() - BEFORE customization:', user.toString());    // [object Object]

user[Symbol.toStringTag] = 'Amir'
console.log('user.toString() - AFTER customization:', user.toString());     // [object Amir]

console.log(typeof Symbol.toStringTag);  // symbol