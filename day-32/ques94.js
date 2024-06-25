"use strict";
// Use the .map() method to create a new array that contains the length of each word from an array of words.
let cityNames = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Quetta"];
let cityLength = cityNames.map(city => city.length);
console.log(cityLength);
// Output: [ 7, 6, 9, 10, 6 ]
