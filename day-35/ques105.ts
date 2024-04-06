// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function diceRoll(): number {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

let diceResult: number = diceRoll();

console.log(diceResult);
// Output: Random number b/w 1 and 6
