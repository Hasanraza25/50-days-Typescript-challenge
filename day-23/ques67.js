// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function mixedTypeSum(num1, strNum) {
    var num2 = Number(strNum);
    return num1 + num2;
}
console.log(mixedTypeSum(13, "5"));
