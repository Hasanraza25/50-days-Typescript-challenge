// Create a function that accepts a callback and invokes it with some arguments.

function calculateSum(num1: number, num2: number, callback: (result: number) => void){
    const sum = num1 + num2;
    callback(sum);
}

function printResult(result: number){
    console.log(`The sum is ${result}`);
}

calculateSum(12,6,printResult);

// Output: The sum is 18