function createFlexibleObject(key: string, value: string){
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}

let userChoice = createFlexibleObject("favorite color", "blue");

console.log(userChoice);
