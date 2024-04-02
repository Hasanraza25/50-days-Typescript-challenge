// Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
var myArray = [1, 2, 3, 4, 5];
var removedElement = removeLastElement(myArray);
console.log(myArray); // Output: [ 1, 2, 3, 4 ]
console.log(removedElement); // Output: 5
