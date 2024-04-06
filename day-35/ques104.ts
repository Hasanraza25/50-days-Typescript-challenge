// Create a function that generates a random hexadecimal color code.

function getRandomHexColor(): string {
  let letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

let randomHexColor: string = getRandomHexColor();
console.log(randomHexColor);
// Output: Random hexadecimal color code