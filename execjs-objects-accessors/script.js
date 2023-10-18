'use strict';

// Accessors in object literala
const user1 = {
    name: 'Ann',
    age: 45
};
console.log('object fixed props: ', user1.name, user1.age);

// properties can be functions too
const user2 = {
    name: 'Ann',
    getAge: function () { return 45; }
}
console.log('object func props: ', user2.name, user2.getAge());

// getter properties in Modern JavaScript
const user3 = {
    name: 'Ann',
    get age() { return 45; }
}
console.log('object with getter: ', user3.name, user3.age);

// Coding problem: Add a userName getter to this object. It should return the value of the name variable.
let name1 = 'Amir';
const user = {
    get userName() { return name1 }
}
const userName1 = user.userName;
name1 = 'Betty';
const userName2 = user.userName;
console.log([userName1, userName2]);  ['Amir', 'Betty']

// there are setters similar to getters
const user4 = {
    realName: 'Amir',
    set userName(newName) { this.realName = newName; },
    get userName() { return this.realName; }
}
user4.userName = 'Betty';
console.log(user4.userName);

// Coding problem: Add a userName setter to this object. It should push userName to the names list.
const user5 = {
    names: ['Amir'],
    set userName(newName) { this.names.push(newName); }
}
user5.userName = 'Betty';
console.log(user5.names);['Amir', 'Betty']