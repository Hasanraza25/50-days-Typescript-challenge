"use strict";
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
// Import class
var person_1 = require("./person");
var person = new person_1.Person('Hasan', 18);
person.greet();
