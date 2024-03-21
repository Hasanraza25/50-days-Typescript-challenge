// IIFE for encapsulation and scoping
var userProfile = (function () {
    var name = "Hasan";
    var age = 18;
    return {
        showProfile: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.showProfile(); // Output: Name: Hasan, Age: 18
