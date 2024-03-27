// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
var age = 25; // Global variable
{
    var age_1 = 30; // Variable with block scope
    var pi = 3.14; // Constant with block scope
    console.log("Inside the block:");
    console.log("Age: ".concat(age_1)); // Output: 30
    console.log("Pi: ".concat(pi)); // Output: 3.14
}
console.log("Outside the block:");
console.log("Age: ".concat(age)); // Output: 25
console.log("Pi: ".concat(pi)); // Error: Cannot find name 'pi'
