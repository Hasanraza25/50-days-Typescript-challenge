// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guests = ["Hussain", "Jawed", "Osman", "Haram", "Asif", "Saeed", "Sattar", "Hasnain"];
console.log("Unfortunately! my new dinner table won't arrive at time. I can invite only two guests");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("I'm really sorry ".concat(removedGuest, ", i can't invite you for dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You're still invited!"));
});
guests.pop();
guests.pop();
console.log(guests); //It will show an empty array 
