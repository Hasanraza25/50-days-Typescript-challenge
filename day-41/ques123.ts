// Create a loop that iterates through a string and stops when it finds the first vowel.

const word = "HasanRaza";
for (let i = 0; i < word.length; i++) {
  const currentChar = word[i].toLowerCase();
  if (
    currentChar === "a" ||
    currentChar === "e" ||
    currentChar === "i" ||
    currentChar === "o" ||
    currentChar === "u"
  ) {
    console.log(`First vowel found: ${currentChar}`);
    break;
  }
  console.log(`Current character: ${currentChar}`);
}
