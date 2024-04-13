// Explain how the this keyword changes its value when used inside a nested function within a method.

const myName = {
    fullName: "Hasan Raza",
    outerMethod: function() {
        console.log(myName.fullName);

        const innerMethod = () => {
            console.log(myName.fullName);
        };

        innerMethod();
    }
};

myName.outerMethod();
// Output: Hasan Raza
//         Hasan Raza