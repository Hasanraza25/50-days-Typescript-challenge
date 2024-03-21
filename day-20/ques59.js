// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function customAdder(specialNum) {
    return function addNum(num) {
        return specialNum + num;
    };
}
var adder1 = customAdder(4);
console.log(adder1(3)); // Output : 7
var adder2 = customAdder(-4);
console.log(adder2(3)); // Output : -1
