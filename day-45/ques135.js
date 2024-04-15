// Explain how you can format a JSON string with proper indentation for readability.
var myData = {
    name: "Hasan Raza",
    age: 18,
    email: "hasanhussain2580@gmail.com",
    isActive: true,
    hobbies: ["reading", "traveling", "acting"],
};
var formattedJsonString = JSON.stringify(myData, null, 2); // 2 spaces for indentation
console.log(formattedJsonString);
