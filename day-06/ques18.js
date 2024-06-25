"use strict";
// Seeing the World: Think of at least five places you’d like to visit.
let favPlaces = ["Madina Munawara", "Kashmir", "Skardu", "London", "Paris"];
console.log("Origional Order:", favPlaces);
console.log("Alphabetical Order:", [...favPlaces].sort());
console.log("Still in Origional Order:", favPlaces);
console.log("Reverse Alphabetical Order:", [...favPlaces].sort().reverse());
console.log("Still in Origional Order:", favPlaces);
console.log("Reverse Order:", favPlaces.reverse());
console.log("Back to Origional Order:", favPlaces.reverse());
console.log("Sort in Alphabetical Order:", favPlaces.sort());
console.log("Sort in Reverse Alphabetical Order:", favPlaces.sort().reverse());
