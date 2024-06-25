"use strict";
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkAndLogCapital(countryAndCapital, country) {
    if (countryAndCapital.has(country)) {
        let capital = countryAndCapital.get(country);
        console.log(`The capital of ${country} is ${capital}.`);
    }
    else {
        console.log(`${country} is not in this map.`);
    }
}
let countryAndCapital = new Map();
countryAndCapital.set("Pakistan", "Islamabad");
countryAndCapital.set("United States", "Washington, D.C.");
countryAndCapital.set("France", "Paris");
checkAndLogCapital(countryAndCapital, "Canada");
checkAndLogCapital(countryAndCapital, "United States");
