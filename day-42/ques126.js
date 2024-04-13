// Explain how the this keyword changes its value when used inside a nested function within a method.
var myName = {
    fullName: "Hasan Raza",
    outerMethod: function () {
        console.log(myName.fullName);
        var innerMethod = function () {
            console.log(myName.fullName);
        };
        innerMethod();
    }
};
myName.outerMethod();
