"use strict";
// Implement a try-catch block to handle potential errors in a block of code.
try {
    const calculation = 10 / 0; // Division by zero will throw an error
    console.log('Result:', calculation);
}
catch (error) {
    console.error('An error occured:', error);
}
