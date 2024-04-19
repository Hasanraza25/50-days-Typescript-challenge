// Create a function that generates a random hexadecimal color code.
function getRandomHexColor() {
    var letters = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var randomHexColor = getRandomHexColor();
console.log(randomHexColor);
// Output: Random hexadecimal color code
