enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const today: Days = Days.Thursday;

console.log(`Today is ${Days[today]}`);

enum Color {
  Red = 5,
  Green,
  Yellow,
}

console.log(Color[5]); // Output: 1

console.log(Color.Green); // Output: 6
console.log(Color[7]); // Output: Yellow
console.log(Color["Red"]); // Output: 5

// Const Enums
const enum Color2 {
  Red,
  Green,
  Blue
}

// console.log(Color2[4]); // Error: Cannot use 'Color2' as an index