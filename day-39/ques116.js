// Create a switch case that matches several cases to the same code block, representing seasons.
function getSeason(month) {
    var season;
    switch (month) {
        case 1:
        case 2:
        case 12:
            season = 'winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Autumn';
            break;
        default:
            season = "Invalid Month";
            break;
    }
    return season;
}
var currentSeason = getSeason(4);
console.log("Current season: ".concat(currentSeason));
