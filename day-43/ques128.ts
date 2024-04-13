// Create an arrow function that takes multiple parameters and returns the product of all parameters.

let product = (...numbers: number[]) => {
    return numbers.reduce((res, curr) => res * curr, 1)
}

console.log(product(2,3,4,5)); // Output: 120
console.log(product(10,21,32)); // Output: 6720
