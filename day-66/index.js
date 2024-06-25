"use strict";
// Union Types
let myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// Literal Types
let currentLight;
currentLight = "red";
currentLight = "green";
currentLight = "yellow";
// currentLight = "blue"; // Invalid assignment
// Nullable Types
let username = "Glicher"; // The variable can hold a string or null
let age = null; // The variable can hold a number or null
// Use the type alias for string
let myName = "Glitcher";
// Use the type alias for the union type
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
