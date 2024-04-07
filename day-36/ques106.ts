// Determine if a given year is a leap year using comparison operators.

function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeap = isLeapYear(2024);
console.log(isLeap);
// Output: true because 2024 is a leap year