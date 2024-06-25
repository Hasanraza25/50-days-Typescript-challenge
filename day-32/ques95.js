"use strict";
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numbersGreaterThanTen(arr) {
    return arr.filter(num => num > 10);
}
const numbers = [6, 12, 43, 55, 90, 10];
const result = numbersGreaterThanTen(numbers);
console.log(result);
// Output: [ 12, 43, 55, 90 ]
