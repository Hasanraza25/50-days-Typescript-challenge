function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    items.forEach(function (item, idx) {
        console.log("".concat(idx + 1, "- ").concat(item));
    });
}
orderSandwich("Chicken", "Avocado", "Lettuce", "Tomato");
orderSandwich("Sliced roast beef", "Mayonnaise", "Lettuce", "Salt and pepper");
orderSandwich("Cuban bread", "Roast pork", "Swiss cheese", "Dill pickles", "Mustard");
