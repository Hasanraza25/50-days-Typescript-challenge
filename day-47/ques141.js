"use strict";
// Discuss the significance of the await reserved word in asynchronous JavaScript.
Object.defineProperty(exports, "__esModule", { value: true });
async function greeting() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Hello");
    console.log("World");
}
greeting();
