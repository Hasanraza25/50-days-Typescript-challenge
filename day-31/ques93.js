// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceFruit(arr) {
    var index = arr.indexOf("Banana");
    if (index !== -1) {
        arr[index] = "Mango";
    }
}
var fruits = ["Oranges", "Apple", "Banana", "Strawberry"];
replaceFruit(fruits);
console.log(fruits);
// Output: [ 'Oranges', 'Apple', 'Mango', 'Strawberry' ]
