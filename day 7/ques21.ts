// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let item: { name: string; type: string; brand: string; price: number } = {
    name: "MacBook Pro",
    type: "Laptop",
    brand: "Apple",
    price:  265000
};

console.log(`${item.type} name: ${item.name} by ${item.brand}, priced at Rs ${item.price}.`);



