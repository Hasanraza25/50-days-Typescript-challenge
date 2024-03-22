// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
    type: "Circle" | "Rectangle";
    radius?: number;
    width?: number;
    height?: number;
}

let circle: Shape = {
    type: "Circle",
    radius: 4
};

let rectangle: Shape = {
    type: "Rectangle",
    width: 15,
    height: 35
};

console.log(circle);
console.log(rectangle);
