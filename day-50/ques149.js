"use strict";
// Explain the concept of the event loop in JavaScript with an example.
console.log("I'll execute first.");
setTimeout(() => {
    console.log("I'll execute after 2 seconds.");
}, 2000);
console.log("I'll execute second.");
