function carInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Adding extra information to the car Object
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var carDetails = carInfo("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
// Print the Object to verify the information stored correctly
console.log(carDetails);
