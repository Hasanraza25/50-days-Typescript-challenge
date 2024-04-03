// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(nums: number[]): number {
    return nums.reduce((res, curr) => res + curr, 0);
}
const numbers: number[] = [23, 45, 12, 4, 10];
const sum = calculateSum(numbers)

console.log(sum);
// Output: 94
