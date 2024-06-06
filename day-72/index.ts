// Generic Syntax
function echo<T>(value: T): T {
    return value;
}

//  Generic Function 
let result1 = echo<string>("Hello");
let result2 = echo<number>(123);

console.log(result1); // Output: Hello
console.log(result2); // Output: 123

// Generic Class
class Box<T> {
    content: T;
    constructor(value: T) {
        this.content = value;
    }
}

let stringBox = new Box<string>("Generics");
let numberBox = new Box<number>(123);

// Generic Interfaces

interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = { first: "Age", second: 30 };
let numberBooleanPair: Pair<number, boolean> = { first: 1, second: true };



