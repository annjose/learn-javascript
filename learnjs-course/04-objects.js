'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34
}
console.log(user.firstName, user.age, 'user = ', user);
user.age += 3;
console.log(user);

function getWeather(city) {
    return `It's currently ${city.value} degrees in ${city.name}`;
}
const city1 = { name: "Amsterdam", value: 3 };
console.log(getWeather(city1)); // "It's currently 3 degrees in Amsterdam"