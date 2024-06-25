"use strict";
// Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function checkIfNaN(value) {
    return isNaN(value);
}
console.log(checkIfNaN(26)); // Output: false
console.log(checkIfNaN(NaN)); // Output: true because NaN is a number type
console.log(checkIfNaN("Hasan Raza")); // Output: true
