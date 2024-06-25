"use strict";
// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2And3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log((isDivisibleBy2And3(12))); // Output: true
console.log((isDivisibleBy2And3(22))); // Output: false
