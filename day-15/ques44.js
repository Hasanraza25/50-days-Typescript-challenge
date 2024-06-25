"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Summary:");
    items.forEach((item, idx) => {
        console.log(`${idx + 1}- ${item}`);
    });
}
orderSandwich("Chicken", "Avocado", "Lettuce", "Tomato");
orderSandwich("Sliced roast beef", "Mayonnaise", "Lettuce", "Salt and pepper");
orderSandwich("Cuban bread", "Roast pork", "Swiss cheese", "Dill pickles", "Mustard");
