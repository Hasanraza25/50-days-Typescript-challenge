"use strict";
// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findPosition(str) {
    return str.indexOf("code");
}
let position = findPosition("Learn to code with TypeScript.");
console.log(position); // 0123456789
// Output: 9
