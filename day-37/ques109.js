"use strict";
// Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
const currentHour = currentTime.getHours();
if (currentHour < 12) {
    console.log("Good Morning!");
}
// Output: Good Morning! (if it's before 12 PM)
