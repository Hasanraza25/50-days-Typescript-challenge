"use strict";
let current_users = ["Hasan", "Hussain", "admin", "Hasnain", "Ali"];
let new_users = ["Ahmed", "Shakeel", "Hussain", "Jawed", "admin"];
for (const new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();
    if (current_users.some(user => user.toLowerCase() === lowercase_new_user)) {
        console.log(`${new_user} will need to enter a new username`);
    }
    else {
        console.log(`${new_user} is available`);
    }
}
