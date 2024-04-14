"use strict";
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
// Import class
var person_js_1 = require("./person.js");
var person = new person_js_1.Person('Hasan', 18);
person.greet();
// Output: Hello, my name is Hasan and I am 18 years old.
