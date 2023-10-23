'use strict';

// dummy = 10; // ERROR ReferenceError: dummy is not defined. 
//  Since the above line failed, any code that comes after it will not run, even if it is valid code.
console.log('hello');  // this will not execute

// if you put it in a try-catch block, it will run
try {
    dummy = 10;
} catch (error) {
    console.log('error! ' + error);
}

const showDate = () => {
    try {
        const date = getDate();
        return date;
    } catch (e) {
        return "Could not get date because of error " + e;
    }
}

console.log(showDate());