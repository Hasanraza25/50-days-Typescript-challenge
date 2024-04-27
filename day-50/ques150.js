"use strict";
// Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous code
console.log("Start of synchronous code");
for (let i = 0; i < 5; i++) {
    console.log(`Synchronous iteration ${i}`);
}
console.log("End of synchronous code");
// Asynchronous code with callback
console.log("Start of asynchronous code");
setTimeout(() => {
    console.log("Async callback executed after 2 seconds");
}, 2000);
console.log("End of asynchronous code");
