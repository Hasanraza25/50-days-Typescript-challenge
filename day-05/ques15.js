// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guests = ["Jawed", "Osman", "Shakeel", "Saeed", "Sattar"];
console.log("Unfortunately, ".concat(guests[2], " can't make it to dinner."));
var newGuest = "Asif";
guests[2] = newGuest;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You're invited to dinner!"));
});
