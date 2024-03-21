// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function customAdder(specialNum: number){
    return function addNum(num: number){
        return specialNum + num;
    }
}
// adder1 and adder2 will become functions

const adder1 = customAdder(4);
console.log(adder1(3)); // Output : 7

const adder2 = customAdder(-4);
console.log(adder2(3)); // Output : -1


