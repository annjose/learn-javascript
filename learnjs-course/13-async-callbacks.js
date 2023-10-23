'use strict';

const delayedWelcome = () => {
    console.log("A");
    setTimeout(() => {
        console.log("B: Hello!")
    }, 1000);
    console.log("C");
}
delayedWelcome(); //     A C B: Hello!

const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}!`);
        if (callback) {
            callback();
        }
    }, 1000);
}

welcomeUser("Ann", () => {
    console.log("All done and dusted.");
});

const fakeAPI = (request, successCallback, errorCallback) => {
    console.log(`fakeAPI(): request id: ${request.id}. calling setTimeout()`);
    if(request.id === "") {
        errorCallback("Error: request id is empty.")
    }
    setTimeout(() => {
        const response = { httpCode: 200 };
        console.log(`fakeAPI(): setTimeout done. Returning async call with response httpCode = ${response.httpCode}`);
        if (successCallback) {
            successCallback(response);
        }
    }, 2000);
};

const request = { id: "123" };
// const request = { id: "" }; will call the error callback.

console.log(`calling fakeAPI with request with id ${request.id}`);
fakeAPI(request, 
    (response) => {
        console.log(`fakeAPI results Success: response httpCode=${response.httpCode}`);
    }, 
    (error) => {
        console.log(`fakeAPI results Error: ${error}`);
    }
);
