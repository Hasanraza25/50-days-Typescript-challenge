// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Function Declaration
function squareNumber(num) {
    return Math.pow(num, 2);
}
var result1 = squareNumber(7);
console.log(result1); // Output: 49
// Function Expression
var squareNumberExpr = function (num) {
    return Math.pow(num, 2);
};
var result2 = squareNumberExpr(7);
console.log(result2); // Output: 49
