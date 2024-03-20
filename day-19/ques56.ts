
let mixedItems = [1, "apple", true, "banana", 42, "mango"];

let stringsItems = mixedItems.filter(item => typeof item === "string");

console.log(stringsItems);