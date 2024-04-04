// Generate a date object representing your next birthday and log it to the console.

function getNextBirthday(month: number, day: number) {
  const today = new Date();
  const currentYear = today.getFullYear();

  let birthday = new Date(currentYear, month - 1, day); // Subtract 1 because months are zero-indexed
  if (today > birthday) {
    // If the birthday this year has already passed, use next year's date
    birthday.setFullYear(currentYear + 1);
  }
  return birthday;
}

const myNextBirthday = getNextBirthday(12, 6);
const formattedNextBirthday = myNextBirthday.toLocaleDateString();

console.log(`My next birthday is on ${formattedNextBirthday}! 🎉 Excited to celebrate! 🎂`);

