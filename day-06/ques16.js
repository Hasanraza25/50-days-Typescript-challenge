"use strict";
//  More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests = ["Jawed", "Osman", "Asif", "Saeed", "Sattar"];
console.log("Good News! We found a bigger dinner table");
guests.unshift("Hussain");
guests.splice(guests.length / 2, 0, "Haram");
guests.push("Hasnain");
guests.forEach(guest => {
    console.log(`Dear ${guest}, You're invited to dinner!`);
});
