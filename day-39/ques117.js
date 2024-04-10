// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function categorizeFruit(fruit) {
    var category;
    switch (fruit.toLowerCase()) {
        case 'apple':
        case 'orange':
            category = 'Common Fruit';
            break;
        case 'banana':
        case 'grape':
            category = 'Tropical Fruit';
            break;
        case 'strawberry':
        case 'blueberry':
            category = 'Berry';
            break;
        default:
            category = 'Unknown Fruit';
            break;
    }
    return category;
}
var fruitCategory = categorizeFruit("Cherry");
console.log("The fruit is categorized as: ".concat(fruitCategory));
