"use strict";
// index.ts
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Test the function
const myNumbers = [1, 2, 3, 4, 5];
const result = sumArray(myNumbers);
console.log(`The sum of the array is: ${result}`);
//# sourceMappingURL=app.js.map