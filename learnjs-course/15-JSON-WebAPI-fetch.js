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

// fetch Web API
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
fetch(url)
    .then(response => {
        console.log(response);  // Response {Symbol(realm): null, Symbol(state): Proxy, Symbol(headers): Headers}

        const jsonPromise = response.json();
        console.log(jsonPromise);    // Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined...

        return jsonPromise;
    })
    .then(data => {
        console.log("long form");
        console.log(`typeof(data) = ${typeof (data)}`);  // typeof(data) = object
        console.log(data);      // {count: 3, message: 'You've got 3 new notifications'}
    });

console.log("between fetch calls");  // will be logged at the beginning - before the fetch calls return

// More concise (and common) syntax
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("concise form");
        console.log(data); // {count: 3, message: 'You've got 3 new notifications'}
    }); 