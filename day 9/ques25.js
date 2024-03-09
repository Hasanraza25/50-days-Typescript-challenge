// Version that passes
var alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
// Version that fails
alien_color = "yellow";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
