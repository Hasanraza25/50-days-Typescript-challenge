// Discuss the difference between default and named exports in JavaScript modules.

// Import default export
import MyData from './default.js'; // 'MyData' is a name chosen by the importer(me)
const data = new MyData('Hasan', 18);
data.greet(); // Output: Hello, my name is Hasan and I am 18 years old.

// Import named export
import { add, subtract } from './named.js';
console.log(add(26, 4)); // Output: 30
console.log(subtract(26, 4)); // Output: 22

