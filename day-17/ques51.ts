// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function rectangleArea(length: number, width: number): number{
    return length * width;
}

// Refactored arrow function:
const rectangleAreaArrow = (length: number, width: number) => length * width;

console.log(rectangleAreaArrow(4,5));
