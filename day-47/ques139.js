"use strict";
// List three reserved words in JavaScript and create a valid use case for each.
Object.defineProperty(exports, "__esModule", { value: true });
// First reserved word: const
const pi = 3.14;
console.log(pi);
// Second reserved word: for
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// Third reserved word: return
function addnums(num1, num2) {
    return num1 + num2;
}
console.log(addnums(34, 6));
