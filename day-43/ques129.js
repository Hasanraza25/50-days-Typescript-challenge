// Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
var traditionalVsArrow = {
    value: 18,
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction(); // Output: 18
traditionalVsArrow.arrowFunction(); // Output: undefined
