// Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function(a: number, b: number): number{
    return a + b;
}

// Converted to arrow function
const arrowFunction = (a: number, b: number): number => a + b;

console.log(traditionalFunction(77, 23)); // Output: 100
console.log(arrowFunction(77, 23)); // Output: 100