// Create an arrow function that takes multiple parameters and returns the product of all parameters.
var product = function () {
    var parameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
    }
    return parameters.reduce(function (res, curr) { return res * curr; }, 1);
};
console.log(product(2, 3, 4, 5));
console.log(product(10, 21, 32));
