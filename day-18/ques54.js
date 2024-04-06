function createFlexibleObject(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userChoice = createFlexibleObject("favorite color", "blue");
console.log(userChoice);
