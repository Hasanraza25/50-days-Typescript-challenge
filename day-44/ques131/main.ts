// Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Import class
import { Person } from "./person";

const person = new Person('Hasan', 18);

person.greet();
// Output: Hello, my name is Hasan and I am 18 years old.

