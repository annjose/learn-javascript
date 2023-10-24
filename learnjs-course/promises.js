'use strict';

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
// wait(1000).then(() => {
//     console.log("Done!");
// });

// FROM - with async callbacks
const setTemperature = (temperature, successCallback, errorCallback) => {

    // if input is not valid, return error through the errorCallback
    if (temperature > 100) {
        const error = `Requested temperature ${temperature} is above the threshold of 100`;
        if (errorCallback) {
            errorCallback(error);
        }
        return;
    }
    setTimeout(
        () => {
            console.log(`Done setting temperature to ${temperature}`);
            const value = 100;
            if (successCallback) {
                successCallback(value);
            }
        },
        1_000
    );
}

const callSetTemperature = (temperature) => {
    console.log(`calling setTemperature with temperature=${temperature}`);
    setTemperature(
        temperature,
        (value) => { console.log(`SUCCESS: ${value}`); },
        (error) => { console.log(`ERROR: ${error}`); }
    );
}

// callSetTemperature(81);
// callSetTemperature(121);


// TO - with promises

const setTemperatureWithPromise = (temperature, successCallback, errorCallback) => {

    // if input is not valid, return error through the errorCallback
    if (temperature > 100) {
        const error = `Requested temperature ${temperature} is above the threshold of 100`;
        if (errorCallback) {
            errorCallback(error);
        }
        return;
    }
    return new Promise(resolve => {
        setTimeout(
            () => {
                console.log(`Done setting temperature to ${temperature}`);
                const value = 100;
                if (resolve) {
                    resolve(value);
                }
            },
            1_000
        );
    });
}
const callSetTemperature_WithPromises = (temperature) => {
    console.log(`calling setTemperature with Promises with temperature=${temperature}`);
    setTemperatureWithPromise(temperature)
        .then(value => {
            console.log(`SUCCESS: ${value}`);
        })
        .catch(error => {
            console.log(`ERROR: ${error}`);
        });
}
callSetTemperature_WithPromises(81);
// callSetTemperature_WithPromises(121);