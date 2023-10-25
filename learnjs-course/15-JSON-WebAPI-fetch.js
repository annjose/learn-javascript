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

/* 
// API 1 - notifications
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

*/

/*
// API 2 - users array
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`request url: ${url}`);
        console.log(data);

        // log the email of all the users
        let emails = [];
        data.forEach(user => {
            emails.push(user.email);
        });
        console.log(emails);
    });
*/

/*
// API 3 - todos 
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`title = ${data.title}`);   // delectus aut autem
    });
*/

/*
// API 4 - Tweet details (Coding challenge)
const getTweetDetails = () => {
    const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            showTweetDetails(data);
        });
}


function showTweetDetails(tweet) {
    const authorDetails = tweet.author.details;
    const fullName = `${authorDetails.firstName} ${authorDetails.lastName}`;
    console.log(`Author name: ${fullName}`);
}

getTweetDetails();  // (after delay): Author name: Jad Joubran
*/

/*
// Handle fetch errors
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
fetch(url)
    .then(response => {
        console.log(`Response object. ok=${response.ok}, status=${response.status}, statusText=${response.statusText}`)
        if (response.ok) {
            console.log("Server returned success response");
            return response.json();
        } else {
            console.log("Server returned error response");
        }
    })
    .then(data => {
        console.log(data); // {count: 3, message: 'You've got 3 new notifications'}
    })
    .catch(error => {
        // fetch returned error (when Wifi is disabled on the computer)
        console.error(error); // TypeError: fetch failed. {cause: Error: getaddrinfo ENOTFOUND}
    })
*/

// Other HTTP methods, pass body and headers

/*
const url = "https://api.learnjavascript.online/demo/grades.json";
const grade = 15;
fetch(url, {
    method: "post",
    body: JSON.stringify({ grade: grade })
})
.then(response => response.json())
.then(data => {
    console.log(`API returned data=${JSON.stringify(data)}`) // data={"success":true,"grade":{"id":76221,"grade":15,...}}
});
*/

// Another API to update the user name
// Base URL: https://api.learnjavascript.online/demo/
// Endpoint: user.json
// Method: PUT
// Body: { firstName: "Sam", lastName: "Green" }
const url = "https://api.learnjavascript.online/demo/user.json";
const [firstName, lastName] = ["Sam", "Green"];
fetch(url, {
    method: "PUT",
    body: JSON.stringify({ firstName: firstName, lastName: lastName}),
    headers: { "Content-Type": "application/json" }
})
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data));  // {"success":true,"user":{"id":76658,"firstName":"Sam","lastName":"Green", ...}
})
.catch(error => {
    console.error(error);
});
