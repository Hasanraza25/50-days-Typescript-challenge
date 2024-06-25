"use strict";
// Modify a method in an object to use the this keyword to access another property in the same object.
const boy = {
    fullName: 'Hasan Raza',
    age: 18,
    getObject: function () {
        return `${this.fullName} is ${this.age} years old.`;
    }
};
console.log(boy.getObject());
// Output: Hasan Raza is 18 years old.
