"use strict";
// Iterate over a Map of student IDs and names, and log each pair to the console.
const studentMap = new Map();
studentMap.set(1, "Hasan");
studentMap.set(2, "Hussain");
studentMap.set(3, "Haram");
studentMap.forEach((name, id) => {
    console.log(`Student Id: ${id}, Name: ${name}`);
});
