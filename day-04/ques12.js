// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var myFriends = ["Shakir", "Kareem", "Hanzala", "Haris", "Hasnain"];
for (var _i = 0, myFriends_1 = myFriends; _i < myFriends_1.length; _i++) {
    var name_1 = myFriends_1[_i];
    console.log("Hello ".concat(name_1, ", How are you?"));
}
