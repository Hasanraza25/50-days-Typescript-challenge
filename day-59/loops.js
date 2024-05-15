
// Task 1: What is the last value alerted by this code? Why?
// let i = 3;

// while (i) { 
//   alert( i-- ); // 1
// }

// Task 2: Which values does the while loop show?
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?

// The prefix form ++i:
// let i = 0;
// while (++i < 5) alert( i ); // 1, 2, 3, 4

// // The postfix form i++
// let j = 0;
// while (j++ < 5) alert( j ); // 1, 2, 3, 4, 5

// Task 3: Which values get shown by the "for" loop?
// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?

// The postfix form:
// for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

// // The prefix form:
// for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// Task 4: Use the for loop to output even numbers from 2 to 10.

// for(let i = 1; i <= 10; i++){
//   if(i % 2 == 0) alert(i);
// }

// Task 5: Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while(i < 3){
//   alert( `number ${i}!`);
//   i++;
// } 

// Task 6: Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// let userInput;

// do {
//   userInput = +prompt('Please enter a number greater than 100:', '');
// } while (userInput <= 100 && userInput !== null);

// if (userInput !== null) {
//   alert('You entered a number greater than 100:', userInput);
// } else {
//   alert('Input cancelled or empty line entered.');
// }

// Task 7: Output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}