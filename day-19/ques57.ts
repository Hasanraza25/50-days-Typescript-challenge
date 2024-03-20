
let grades = [45, 64, 34, 88, 70];

let average = grades.reduce((sum,grade) => sum + grade, 0)/ grades.length

console.log(average);
