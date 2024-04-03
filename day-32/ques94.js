// Use the .map() method to create a new array that contains the length of each word from an array of words.
var cityNames = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Quetta"];
var cityLength = cityNames.map(function (city) { return city.length; });
console.log(cityLength);
// Output: [ 7, 5, 8, 6, 5 ]
