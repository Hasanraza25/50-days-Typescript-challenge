// Use a switch statement to log the days of the week based on a number (1-7).
function getDaysOfWeek(dayNumber) {
    var dayName;
    switch (dayNumber) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
        default:
            return 'Invalid Day Number!';
            break;
    }
    return dayName;
}
var dayOfWeek = getDaysOfWeek(5);
console.log("Day of the week: ".concat(dayOfWeek));
// Output: Friday
