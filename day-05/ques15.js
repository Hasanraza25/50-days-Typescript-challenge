"use strict";
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guests = ["Jawed", "Osman", "Shakeel", "Saeed", "Sattar"];
console.log(`Unfortunately, ${guests[2]} can't make it to dinner.`);
let newGuest = "Asif";
guests[2] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, You're invited to dinner!`);
});
