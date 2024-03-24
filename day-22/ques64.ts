// Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function joinStringAndNum(text: string, number: number) {
    return text + number;
}
console.log(joinStringAndNum("Age: ", 18));

// Output: Age: 18
