"use strict";
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObjectProperties({ make: 'Ford', model: 'Mustang', year: 2021, color: "Shadow Black" });
