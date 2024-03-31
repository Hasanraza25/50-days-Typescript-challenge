// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(inputstr) {
    var uppercase = inputstr.toUpperCase();
    var lowercase = inputstr.toLowerCase();
    console.log("Uppercase: ".concat(uppercase, ", Lowercase: ").concat(lowercase));
}
convertCase("Hasan Raza");
