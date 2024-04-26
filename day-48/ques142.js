"use strict";
// Create a Promise that resolves with "Hello, World!" after 2 seconds.
let myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
myPromise.then((message) => {
    console.log(message);
});
// Output: Hello, World! after 2 sec
