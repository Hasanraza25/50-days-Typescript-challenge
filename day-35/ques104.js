"use strict";
// Create a function that generates a random hexadecimal color code.
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomHexColor() {
    let letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let randomHexColor = getRandomHexColor();
console.log(randomHexColor);
