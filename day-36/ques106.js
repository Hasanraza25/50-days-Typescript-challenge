// Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var isLeap = isLeapYear(2024);
console.log(isLeap);
