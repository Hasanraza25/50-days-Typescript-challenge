// Explain how to handle errors in a callback pattern.

function performOperation(
  value: number,
  callback: (error: string | null, result?: number) => void
) {
  if (value < 0) {
    callback("Value must be a positive number.");
  } else {
    const result = value * 2;
    callback(null, result);
  }
}

performOperation(10, (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});

performOperation(-5, (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});

// Output: Result: 20
//         Error: Value must be a positive number.