// Task 1: Will alert be shown?
if ("0") {
  alert( 'Hello' );
} // Yes, any string except an empty one becomes true in the logical context.

// Task 2: 
let answer = prompt("What is the “official” name of JavaScript?", "");

if (answer === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

// Task 3: 
let number = prompt("Enter a number:", "");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// Task 4: 
let result = (a + b < 4) ? 'Below' : 'Over';

// Task 5:
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


