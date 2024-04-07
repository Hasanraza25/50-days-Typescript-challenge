// Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var currentTime = new Date();
var currentHour = currentTime.getHours();
if (currentHour < 12) {
    console.log("Good Morning!");
}
// Output: Morning (if it's before 12 PM)
