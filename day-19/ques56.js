var mixedItems = [1, "apple", true, "banana", 42, "mango"];
var stringsItems = mixedItems.filter(function (item) { return typeof item === "string"; });
console.log(stringsItems);
