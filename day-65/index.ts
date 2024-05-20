/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

function calculateRectangleArea(
  lengthRectAngle: number,
  widthOfRectAngle: number
): number {
  return lengthRectAngle * widthOfRectAngle;
}

const lengthRectAngle = 5;
const widthOfRectAngle = 3;
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`);

// Optional Parameters
function greet(name?: string){
    if(name){
        console.log(`Hello, ${name}!`);
    }else{
        console.log('Hello!');
    }
}

greet('Hasan'); // Output: Hello, Hasan!
greet(); // Output: Hello!

// Default Parameters

function greetUser(username: string = 'Hasan'){
    console.log(`Hello, ${username}!`);
}

greetUser('Hussain'); // Output: Hello, Hussain!
greetUser(); // Output: Hello, Hasan!

// Rest Parameters

function addNumbers(...numbers: number[]): number{
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(addNumbers(1,2,3,4,5)); // Output: 15

// Arrow Functions

const multiply = (num1: number, num2: number): number => num1 * num2;

console.log(multiply(2, 3)); // Output: 6

// Anonymous Function

const add = function(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(2, 3)); // Output: 5

// Void function

function greet2(name: string): void{
    console.log(`Hello, ${name}!`);
}

greet2('Hasan'); // Output: Hello, Hasan!

// Never function

function throwError(message: string): never{
    throw new Error(message);
}

throwError('Something went wrong!'); // Output: Error: Something went wrong!

