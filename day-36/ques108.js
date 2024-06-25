"use strict";
// Compare two strings to check if they are identical, ignoring case sensitivity.
function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
let areIdentical = compareStrings('Hasan', 'hAsaN');
console.log(areIdentical);
// Output: true because both strings are identical
