var laptop = {
    make: "Lenovo",
    model: "ThinkPad X1 Carbon Gen 11",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
