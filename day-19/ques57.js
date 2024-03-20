// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [45, 64, 34, 88, 70];
var average = grades.reduce(function (sum, grade) { return sum + grade; }, 0) / grades.length;
console.log(average);
