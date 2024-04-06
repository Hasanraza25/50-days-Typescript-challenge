"use strict";
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Object.defineProperty(exports, "__esModule", { value: true });
function diceRoll() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
let diceResult = diceRoll();
console.log(diceResult);
