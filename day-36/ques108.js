// Compare two strings to check if they are identical, ignoring case sensitivity.
function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
var areIdentical = compareStrings('Han', 'hAsaN');
console.log(areIdentical);
