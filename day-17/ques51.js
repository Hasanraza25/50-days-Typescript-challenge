// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function rectangleArea(length, width) {
    return length * width;
}
// Refactored arrow function:
var rectangleAreaArrow = function (length, width) { return length * width; };
console.log(rectangleAreaArrow(4, 5));
