"use strict";
// Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Import default export
var default_1 = require("./default"); // 'MyData' is a name chosen by the importer(me)
var data = new default_1.default('Hasan', 18);
data.greet(); // Output: Hello, my name is Hasan and I am 18 years old.
// Import named export
var named_1 = require("./named");
console.log((0, named_1.add)(26, 4)); // Output: 30
console.log((0, named_1.subtract)(26, 4)); // Output: 22
