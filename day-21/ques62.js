// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
function student(name, age, classes) {
    return {
        name: name,
        age: age,
        classes: classes
    };
}
console.log(student("Hasan Raza", 18, ["Physics", "Computer", "Maths"]));
