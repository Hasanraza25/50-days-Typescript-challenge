//  Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["Cars"] = 0] = "Cars";
    vehicles[vehicles["Trucks"] = 1] = "Trucks";
    vehicles[vehicles["Motorcycles"] = 2] = "Motorcycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.Cars);
