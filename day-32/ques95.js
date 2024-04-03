// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numbersGreaterThanTen(arr) {
    return arr.filter(function (num) { return num > 10; });
}
var numbers = [6, 12, 43, 55, 90, 10];
var result = numbersGreaterThanTen(numbers);
console.log(result);
