'use strict';

const jsonString = `{"name":"John","age":34}`;
console.log(jsonString);            // {"name":"John","age":34}

const jsObj = JSON.parse(jsonString);
console.log(jsObj);                 // {name: 'John', age: 34}

// convert it back to JSON string
const jsonStringRedo = JSON.stringify(jsObj);
console.log(jsonStringRedo);        // {"name":"John","age":34}

console.log(jsonString === jsonStringRedo);  // true (whitespaces should match exactly)

// Coding challenge
const willItRain = weatherApiResponse => {
    const weather = JSON.parse(weatherApiResponse);
    return weather.now.rainExpected;
}


// Sample usage - do not modify
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}')); // true
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}')); // false