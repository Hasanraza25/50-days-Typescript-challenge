// Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var birthday = new Date(currentYear, month - 1, day); // Subtract 1 because months are zero-indexed
    if (today > birthday) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(currentYear + 1);
    }
    return birthday;
}
var myNextBirthday = getNextBirthday(12, 6);
var formattedNextBirthday = myNextBirthday.toLocaleDateString();
console.log("My next birthday is on ".concat(formattedNextBirthday, "! \uD83C\uDF89 Excited to celebrate! \uD83C\uDF82"));
