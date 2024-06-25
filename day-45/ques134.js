"use strict";
// Take a JSON string and parse it into a JavaScript object.
const jsonString = `{
  "name": "Hasan Raza",
  "age": 18,
  "email": "hasanhussain2580@gmail.com",
  "isActive": true,
  "hobbies": ["reading", "traveling", "acting"]
}`;
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
