// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function diceRoll() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
var diceResult = diceRoll();
console.log(diceResult);
// Output: Random number b/w 1 and 6
