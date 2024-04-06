"use strict";
// Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}
const currentDate = getCurrentDate();
console.log(currentDate);
