// Use a switch statement to log the days of the week based on a number (1-7).

function getDaysOfWeek(dayNumber: number){
    let dayName: string;
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
            return 'Invalid Day Number!'
            break;
    }
    return dayName;
}

let dayOfWeek = getDaysOfWeek(5);
console.log(`Day of the week: ${dayOfWeek}`);
// Output: Friday