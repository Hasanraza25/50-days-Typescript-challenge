// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Function Declaration
function squareNumber(num: number): number {
  return num ** 2;
}

const result1 = squareNumber(7);
console.log(result1); // Output: 49

// Function Expression
const squareNumberExpr = function (num: number): number {
  return num ** 2;
};

const result2 = squareNumberExpr(7);
console.log(result2); // Output: 49

