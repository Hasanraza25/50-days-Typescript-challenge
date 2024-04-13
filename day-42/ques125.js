// Modify a method in an object to use the this keyword to access another property in the same object.
var boy = {
    fullName: 'Hasan Raza',
    age: 18,
    getObject: function () {
        return "".concat(this.fullName, " is ").concat(this.age, " years old.");
    }
};
console.log(boy.getObject());
