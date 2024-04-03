// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(nums) {
    return nums.reduce(function (res, curr) { return res + curr; }, 0); // 0 is our initial value
}
var numbers = [23, 45, 12, 4, 10];
var sum = calculateSum(numbers);
console.log(sum);
// Output: 15
