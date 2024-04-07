//  Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 13) {
        return 'Child';
    }
    else if (age >= 13 && age <= 20) {
        return 'teenager';
    }
    else {
        return 'adult';
    }
}
var ageGroup = categorizeAge(18);
console.log("Person's age group: ".concat(ageGroup));
