// Type Annotation Practices:
let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);

// Another Way to write the same code
let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);

// Type Inference

let greeting = "Hello, world!";
console.log(greeting);

// Any Type

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
myVariable = true;
myVariable = null;
console.log(myVariable)