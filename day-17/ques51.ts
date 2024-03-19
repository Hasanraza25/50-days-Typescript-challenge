
function rectangleArea(length: number, width: number): number{
    return length * width;
}

// Refactored arrow function:
const rectangleAreaArrow = (length: number, width: number) => length * width;

console.log(rectangleAreaArrow(4,5));
