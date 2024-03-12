//  More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Jawed", "Osman", "Asif", "Saeed", "Sattar"];
console.log("Good News! We found a bigger dinner table");
guests.unshift("Hussain");
guests.splice(guests.length / 2, 0, "Haram");
guests.push("Hasnain");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You're invited to dinner!"));
});
