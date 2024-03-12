var usernames = ["Hasan", "Hussain", "admin", "Haram", "Hasnain", "Ali"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
