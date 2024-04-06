function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    if (options) {
        options.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            car[key] = value;
        });
    }
    return car;
}
console.log(car_info("Honda", "Civic", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
