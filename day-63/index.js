"use strict";
// Type Annotation Practices:
let myNumberExOne = 42;
let myStringExOne = "Hello, TypeScript";
console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);
// Another Way to write the same code
let myNumberExTwo;
let myStringExTwo;
myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";
console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);
// Type Inference
let greeting = "Hello, world!";
console.log(greeting);
// Any Type
let myVariable = 42;
myVariable = "Hello, TypeScript";
myVariable = true;
myVariable = null;
console.log(myVariable);
