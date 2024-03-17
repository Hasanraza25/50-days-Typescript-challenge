// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let laptop1Price: number[] = [25000, 2000, 1000000];
let laptop2Price: number[] = [52000, 29000, 60000];

let bothPrices: number[] = [...laptop1Price, ...laptop2Price].sort((a, b) => a - b);
console.log(bothPrices);
