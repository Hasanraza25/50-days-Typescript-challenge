"use strict";
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
const calculateDaysUntilNewYear = () => {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // Next Year(2025), first month(January), day(1st)
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const dayLeft = Math.ceil((newYear.getTime() - today.getTime()) / oneDay); // Converts to days
    return dayLeft;
};
const daysUntilNewYear = calculateDaysUntilNewYear();
console.log(`There are ${daysUntilNewYear} days left until New Year.`);
