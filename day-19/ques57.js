var grades = [45, 64, 34, 88, 70];
var average = grades.reduce(function (sum, grade) { return sum + grade; }, 0) / grades.length;
console.log(average);
