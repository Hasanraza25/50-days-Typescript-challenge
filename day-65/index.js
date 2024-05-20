/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/
function calculateRectangleArea(lengthRectAngle, widthOfRectAngle) {
    return lengthRectAngle * widthOfRectAngle;
}
var lengthRectAngle = 5;
var widthOfRectAngle = 3;
var area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log("The area of the rectangle is: ".concat(area));
// Optional Parameters
function greet(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log('Hello!');
    }
}
greet('Hasan'); // Output: Hello, Hasan!
greet(); // Output: Hello!
// Default Parameters
function greetUser(username) {
    if (username === void 0) { username = 'Hasan'; }
    console.log("Hello, ".concat(username, "!"));
}
greetUser('Hussain'); // Output: Hello, Hussain!
greetUser(); // Output: Hello, Hasan!
// Rest Parameters
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total + number; }, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15
// Arrow Functions
var multiply = function (num1, num2) { return num1 * num2; };
console.log(multiply(2, 3)); // Output: 6
// Anonymous Function
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(2, 3)); // Output: 5
// Void function
function greet2(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet2('Hasan'); // Output: Hello, Hasan!
// Never function
function throwError(message) {
    throw new Error(message);
}
throwError('Something went wrong!'); // Output: Error: Something went wrong!
