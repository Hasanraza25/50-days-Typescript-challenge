// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Lenovo", model: "ThinkPad X1 Carbon Gen 11", year: 2021 },
    { make: "Dell", model: "XPS 13 9310", year: 2020 },
    { make: "Apple", model: "MacBook Pro 16-inch", year: 2021 }
];
var firstLaptop = laptops[0], secondLaptop = laptops[1];
console.log(firstLaptop);
console.log(secondLaptop);
