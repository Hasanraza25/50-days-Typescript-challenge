// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
var a = 5;
var b = 10;
console.log("Before Swapping a: ".concat(a, " and b: ").concat(b));
var temp = a;
a = b;
b = temp;
console.log("After Swapping a: ".concat(a, " and b: ").concat(b));
