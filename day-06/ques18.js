// Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["Madina Munawara", "Kashmir", "Skardu", "London", "Paris"];
console.log("Origional Order:", favPlaces);
console.log("Alphabetical Order:", __spreadArray([], favPlaces, true).sort());
console.log("Still in Origional Order:", favPlaces);
console.log("Reverse Alphabetical Order:", __spreadArray([], favPlaces, true).sort().reverse());
console.log("Still in Origional Order:", favPlaces);
console.log("Reverse Order:", favPlaces.reverse());
console.log("Back to Origional Order:", favPlaces.reverse());
console.log("Sort in Alphabetical Order:", favPlaces.sort());
console.log("Sort in Reverse Alphabetical Order:", favPlaces.sort().reverse());
