// Union Types
let myVar: string | number;

myVar = "Hello"; // Valid assignment
console.log(myVar)

myVar = 42;       // Valid assignment
console.log(myVar)

// Literal Types

let currentLight: "red" | "yellow" | "green";
currentLight = "red";
currentLight = "green";
currentLight = "yellow";
// currentLight = "blue"; // Invalid assignment

// Nullable Types
let username: string | null = "Glicher"; // The variable can hold a string or null
let age: number | null = null; // The variable can hold a number or null

// Type alias
// Define a type alias for string
type MyString = string;
// Use the type alias for string
let myName: MyString = "Glitcher";
// Define a type alias for a union of string or number
type MyStringOrNumber = string | number;
// Use the type alias for the union type
let myValue: MyStringOrNumber = 10;

// Type Alias with objects
type Person = {
    name: string;
    age: number;
    email?: string;
  };
  
  const alice: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };
  
  const bob: Person = {
    name: "Bob",
    age: 25,
  };
  
  console.log(alice);
  console.log(bob);
  
// Intersection Type
type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
  };
  