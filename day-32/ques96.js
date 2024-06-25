"use strict";
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(nums) {
    return nums.reduce((res, curr) => res + curr, 0);
}
const numbers = [23, 45, 12, 4, 10];
const sum = calculateSum(numbers);
console.log(sum);
// Output: 94
