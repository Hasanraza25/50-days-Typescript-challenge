// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function checkPresence(str: string): boolean{
    return str.indexOf("JavaScript") !== -1;
}
console.log(checkPresence("I love JavaScript."));
// Output: true
