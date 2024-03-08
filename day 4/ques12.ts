// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let myFriends: string[] = ["Shakir", "Kareem", "Hanzala", "Haris", "Hasnain"];

for(let name of myFriends){
    console.log(`Hello ${name}, How are you?`);
}
    