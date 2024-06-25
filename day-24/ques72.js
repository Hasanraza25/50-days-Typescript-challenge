"use strict";
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
let age = 25; // Global variable
{
    let age = 30; // Variable with block scope
    const pi = 3.14; // Constant with block scope
    console.log("Inside the block:");
    console.log(`Age: ${age}`); // Output: 30
    console.log(`Pi: ${pi}`); // Output: 3.14
}
console.log("Outside the block:");
console.log(`Age: ${age}`); // Output: 25
console.log(`Pi: ${pi}`); // Error: Cannot find name 'pi'
