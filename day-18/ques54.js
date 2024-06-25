"use strict";
function createFlexibleObject(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userChoice = createFlexibleObject("favorite color", "blue");
console.log(userChoice);
