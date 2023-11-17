'use strict';

/*
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(333);
        }, milliseconds);
    });
};

const promise = wait(500);
console.log(promise);       // Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, ...}
promise.then((value) => {
    console.log(`waited for 500 msecs. Got value ${value}`);
    console.log(promise);   // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 333, ...}
});
console.log(promise);       // Promise state pending (because this line is executed before the 500 msecs is elapsed)

*/


const fakeAPI = (request, successCallback, errorCallback) => {
    console.log(`fakeAPI(): request id: ${request.id}. calling setTimeout()`);
    if (request.id === "") {
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

const fakeAPI_Promise = (request) => {
    return new Promise((resolve, reject) => {
        console.log(`fakeAPI_Promise(): starting async operation that will take 1000 msecs`);
        setTimeout(() => {
            if (!request || !request.id || typeof request.id !== "string") {
                const errorMessage = `ERROR. Server returned error. Reason: Request is invalid. request = ${JSON.stringify(request)}`;
                const response = { httpCode: 400, data: { error: [errorMessage] } };
                console.log(`fakeAPI_Promise(): setTimeout done. But request.id is empty, hence returning async call with error httpCode = ${response.httpCode}`);
                reject(response)
            } else {
                const response = { httpCode: 200, data: { name: "Amy" } };
                console.log(`fakeAPI_Promise(): setTimeout done. Returning async call with response httpCode = ${response.httpCode}`);
                resolve(response);
            }
        }, 1000);
    });
};

const request = { id: "123" };  // will resolve the promise
// const request = { id: "" };  // will reject the promise
// const request = null;        // will reject the promise

console.log(`calling fakeAPI_Promise with request with request ${JSON.stringify(request)}`);
fakeAPI_Promise(request)
    .then((data) => {
        console.log(`promise.then():: Promise RESOLVED. Returned data: ${JSON.stringify(data)}`);
        // promise.then():: Promise RESOLVED. Returned data: {"httpCode":200,"data":{"name":"Amy"}}
    })
    .catch((error) => {
        console.log(`promise.catch():: Promise REJECTED Returned error: ${JSON.stringify(error)}`);
        // promise.catch():: Promise REJECTED Returned error: {"httpCode":400,"data":{"error":["ERROR. Server ..."]}}
    })
    .finally( () => console.log('promise.finally():: called after both resolve and reject.'));

// Handle both resolve and reject inside `then` callback.
// Not a good option because you still need to add an empty `catch` block. AND you introduced the if-else inside `then` block.
// fakeAPI_Promise(request)
//     .then((data, error) => {
//         if (data) {
//             console.log(`promise.then():: Promise RESOLVED. Returned data: ${JSON.stringify(data)}`);
//             // promise.then():: Promise RESOLVED. Returned data: {"httpCode":200,"data":{"name":"Amy"}}
//         } else if (error) {
//             console.error(`promise.catch():: Promise REJECTED Returned error: ${JSON.stringify(error)}`);
//             // promise.catch():: Promise REJECTED Returned error: {"httpCode":400,"data":{"error":["ERROR. Server ..."]}}
//         }
//     })
//     .catch(() => { });