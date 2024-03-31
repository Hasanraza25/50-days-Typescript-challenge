// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertCase(inputstr: string) {
  let uppercase = inputstr.toUpperCase();
  let lowercase = inputstr.toLowerCase();

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`);
}

convertCase("Hasan Raza");