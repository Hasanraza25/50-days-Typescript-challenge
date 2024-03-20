// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var items = [1, "apple", true, "banana", 42, "cherry"];
var stringItems = items.filter(function (item) { return typeof item === "string"; });
console.log(stringItems);
