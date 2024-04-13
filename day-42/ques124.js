// Create a function inside an object that returns the object's own name property using the this keyword.
var boy = {
    fullName: 'Hasan Raza',
    getName: function () {
        return this.fullName;
    }
};
console.log(boy.getName());
