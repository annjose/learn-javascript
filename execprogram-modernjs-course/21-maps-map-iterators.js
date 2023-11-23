'use strict';

// JS object's property keys can be strings, numbers of symbols
const aString = 'str';
const aNumber = 5;
const aSymbol = Symbol('my symbol');

const obj = {
    [aString]: 'hello',
    aNumber: 10,
    [aNumber]: 44,
    [aSymbol]: 'value of my symbol'
}
console.log([obj.aString, obj.aNumber, obj.aSymbol]);      // [undefined, 10, undefined]
console.log([obj[aString], obj[aNumber], obj[aSymbol]]);   // ['hello', 44, 'value of my symbol']
console.log("obj1 keys:", Object.keys(obj));               // keys(3) ['5', 'str', 'aNumber']  - note that there are 3 keys, not 4.

const obj2 = {
    [undefined]: 23
}
console.log("obj2 keys: ", Object.keys(obj2)); // ['undefined']
console.log("value:", obj2[undefined], obj2['undefined']);   // 23 23

const cat = { name: 'Kitty' };
const obj3 = {
    [cat]: "cat value"
}
console.log("objs 3 with key obj:", obj3);      // {[object Object]: 'cat value'}
console.log("obj3 keys:", Object.keys(obj3));   // [object Object]

//---------------------------Maps...........................
console.log("---------------------------Maps...........................");

const map = new Map();

map.set("name", "Joe");
map.set("age", 24);

console.log(map);       // Map(2) {size: 2, name => Joe, age => 24}
console.log("map.get() name and age:", map.get("name"), map.get("age"));    // Joe 24
console.log("map.name:", map.name); // undefined
console.log("map.get() non-existing key:", map.get("some")); // undefined

// initialize a map using two-dimensional array
const map2 = new Map([
    ["name", "Joe"],
    ["age", 24]
]);
console.log("map2:", map2); // Map(2) {size: 2, name => Joe, age => 24}

console.log(map2.has("something")); // false
console.log(map2.has("name"));      // true
console.log(map2.delete("name"));   // true
console.log(map2.has("name"));      // false

console.log("map2 size:", map2.size);   // 1
map2.clear();
console.log("map2 after clear", map2);  // Map(0) {size: 0}

// Coding problem
// Write a SocialGraph class with a constructor and two methods. 
//  The constructor creates an empty Map.
//  The addFollow method records that follower follows followed by updating the map.Note that order matters here!(If Amir follows Betty, that doesn't mean that Betty follows Amir.)
//  The follows method checks for whether follower follows followed, returning a boolean.

class SocialGraph {
    constructor() {
        this.graph = new Map();
    }

    addFollow(follower, followed) {
        if (!this.graph.has(followed)) {
            this.graph.set(followed, []);
        }
        this.graph.get(followed).push(follower);
    }

    follows(follower, followed) {
        return this.graph.has(followed) && this.graph.get(followed).includes(follower);
    }
    print() {
        console.log("printing social graph.....");
        console.log(this.graph);

        // for (const followed of this.graph.keys) {
        //     console.log(followed);
        //     console.log("\t|");
        //     this.graph.get(followed).forEach(follower => {
        //         console.log(follower);
        //     });
        // }
    }
}

const socialGraph = new SocialGraph();
socialGraph.addFollow('amir', 'betty');
socialGraph.addFollow('amir', 'cindy');
socialGraph.addFollow('betty', 'cindy');

socialGraph.print();

console.log([
    socialGraph.follows('amir', 'betty'),
    socialGraph.follows('amir', 'cindy'),
    socialGraph.follows('betty', 'amir'),
    socialGraph.follows('betty', 'cindy'),
    socialGraph.follows('cindy', 'amir'),
    socialGraph.follows('cindy', 'betty'),
]);
// [true, true, false, true, false, false]

// Map iterators
const catAges = new Map([
    ['Ms. Fluff', 4],
    ['Keanu', 2]
]);
console.log(Array.from(catAges.keys()));    // ['Ms. Fluff', 'Keanu']
console.log(Array.from(catAges.values()));  // [4, 2]

const catAges_arr = Array.from(catAges);
console.log(catAges_arr);   // [['Ms. Fluff', 4], ['Keanu', 2]]

// destructure a map directly
const [, secondCat] = catAges;
console.log("map destructure - secondCat:", secondCat); // ['Keanu', 2]

const [, [secondName, secondAge]] = catAges;
console.log(`map destructure deeper - ${secondName} is ${secondAge} years old`); // 'Keanu is 2 years old'

// construct map from an iterable
function* users() {
    yield ["Joe Daniel", "joe@example.com"];
    yield ["Amy Smith", "amy@example.com"];
}
const usersMap = new Map(users());
console.log(usersMap);      // {size: 2, Joe Daniel => joe@example.com, Amy Smith => amy@example.com}

const usersMapCopy = new Map(usersMap);
console.log(Array.from(usersMapCopy));  // [ ["Joe Daniel", "joe@example.com"], ["Amy Smith", "amy@example.com"] ]

// A map that is created using a sequence that runs 10K times and each time, three elements are added to the map.
//  But the final map contains only three key-value pairs.
function* manyDuplicates() {
    for (let i = 0; i < 10_000; i++) {
        // each yield returns a number and whether it is even
        yield [1, false];
        yield [2, true];
        yield [3, false];
    }
}
console.log("Array from manyDuplicates length:", Array.from(manyDuplicates()).length);  // 30_000

const duplicatesMap = new Map(manyDuplicates());
console.log(duplicatesMap);     // {size: 3, 1 => false, 2 => true, 3 => false}