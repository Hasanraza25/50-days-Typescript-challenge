// Create a loop that iterates through a string and stops when it finds the first vowel.
var word = "HasanRaza";
for (var i = 0; i < word.length; i++) {
    var currentChar = word[i].toLowerCase();
    if (currentChar === "a" ||
        currentChar === "e" ||
        currentChar === "i" ||
        currentChar === "o" ||
        currentChar === "u") {
        console.log("First vowel found: ".concat(currentChar));
        break;
    }
    console.log("Current character: ".concat(currentChar));
}
