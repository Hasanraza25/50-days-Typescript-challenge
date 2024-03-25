// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyDecimal(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}

console.log(multiplyDecimal(3.14159, 2.71828));
 
// Output: 8.54