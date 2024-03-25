// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideWithRemainder(divident, divisor) {
    var quotient = Math.floor(divident / divisor);
    var remainder = divident % divisor;
    return { quotient: quotient, remainder: remainder };
}
var result = divideWithRemainder(15, 2);
console.log(result);
// Output: {7, 1}
