// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function divideWithRemainder(divident: number, divisor: number): { quotient: number, remainder: number } {
    const quotient =  Math.floor(divident / divisor);
    const remainder = divident % divisor;
    return { quotient, remainder}; 
}

const result = divideWithRemainder(15, 2);
console.log(result);

// Output: { quotient: 7, remainder: 1 }
