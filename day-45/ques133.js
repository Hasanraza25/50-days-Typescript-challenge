//  Write a JavaScript object and convert it into a JSON string.
var myData = {
    name: "Hasan Raza",
    age: 18,
    email: "hasanhussain2580@gmail.com",
    isActive: true,
    hobbies: ["reading", "traveling", "acting"]
};
var jsonString = JSON.stringify(myData);
console.log(jsonString);
