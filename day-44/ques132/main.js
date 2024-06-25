"use strict";
// Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import default export
const default_js_1 = __importDefault(require("./default.js")); // 'MyData' is a name chosen by the importer(me)
const data = new default_js_1.default('Hasan', 18);
data.greet(); // Output: Hello, my name is Hasan and I am 18 years old.
// Import named export
const named_js_1 = require("./named.js");
console.log((0, named_js_1.add)(26, 4)); // Output: 30
console.log((0, named_js_1.subtract)(26, 4)); // Output: 22
