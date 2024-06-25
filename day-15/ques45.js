"use strict";
function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    if (options) {
        options.forEach(([key, value]) => {
            car[key] = value;
        });
    }
    return car;
}
console.log(car_info("Honda", "Civic", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
