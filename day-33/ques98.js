// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
var calculateDaysUntilNewYear = function () {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // Next Year(2025), first month(January), day(1st)
    var oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    var dayLeft = Math.ceil((newYear.getTime() - today.getTime()) / oneDay); // Converts to days
    return dayLeft;
};
var daysUntilNewYear = calculateDaysUntilNewYear();
console.log("There are ".concat(daysUntilNewYear, " days left until New Year."));
