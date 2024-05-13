// Task 1:
// What is the code below going to output?
alert(null || 2 || undefined); // 2 because it's the first truthy value.
alert(alert(1) || 2 || alert(3)); // first 1, then 2.
alert(1 && null && 2); // null because it’s the first falsy value.
alert(alert(1) && alert(2)); // 1, and then undefined.
alert(null || (2 && 3) || 4); // 3

// Write an if condition to check that age is between 14 and 90 inclusively.
if(age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // -1 || 0 = -1 as truthy value. So, first will execute.
if (-1 && 0) alert( 'second' ); // -1 && 0 = 0 as falsy value. So, it becomes false, will not execute
if (null || -1 && 1) alert( 'third' ); // -1 && 1 = 1 as last value because no is falsey. null || 1 = 1 as truthy. So, third will execute.

// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let myPrompt = prompt("Enter User:", "");

if(myPrompt == "Admin"){
    let password = prompt("Enter Password:", "");
    if(password == "TheMaster"){
        alert("Welcome!");
    }
    else if(password == ""){
        alert("Cancelled");
    }
    else{
        alert("Wrong Password!")
    }
}
else if(myPrompt == "" || myPrompt == null){
    alert("Canceled!");
}
else{
    alert("I don’t know you");
}