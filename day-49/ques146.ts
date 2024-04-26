// Show an example of a callback function used to filter an array of numbers.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers: number[] = numbers.filter((number) => number % 2 === 0 );

console.log("Even Numbers:",filteredNumbers); 
// Output: Even Numbers: [ 2, 4, 6, 8, 10 ]
