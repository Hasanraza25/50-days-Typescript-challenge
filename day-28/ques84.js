// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceWord(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
var originalsentence = "JavaScript is a popular programming language. I love JavaScript.";
var replacedSentence = replaceWord(originalsentence);
console.log(replacedSentence);
