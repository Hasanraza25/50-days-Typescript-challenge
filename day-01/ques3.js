"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "hussain Raza";
console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in UPPERCASE: ${personName.toUpperCase()}`);
console.log(`Name in Titlecase: ${personName.replace(/\b\w/g, char => char.toUpperCase())}`);
