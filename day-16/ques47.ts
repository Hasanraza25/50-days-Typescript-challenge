// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    { make: "Lenovo", model: "ThinkPad X1 Carbon Gen 11", year: 2021 },
    { make: "Dell", model: "XPS 13 9310", year: 2020 },
    { make: "Apple", model: "MacBook Pro 16-inch", year: 2021 }
];

const [firstLaptop, secondLaptop] = laptops

console.log(firstLaptop);
console.log(secondLaptop);
