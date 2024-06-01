var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    // Static method to calculate the area of a circle
    MathOperations.calculateArea = function (radius) {
        return MathOperations.pi * radius * radius;
    };
    // Static property
    MathOperations.pi = 3.14;
    return MathOperations;
}());
// Accessing static property directly
console.log(MathOperations.pi); // Output: 3.14
// Calling static method without creating an instance
var area = MathOperations.calculateArea(5); // Radius = 5
console.log(area); // Output: 78.5
