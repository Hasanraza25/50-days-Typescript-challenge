// Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    var year = today.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
var currentDate = getCurrentDate();
console.log(currentDate);
