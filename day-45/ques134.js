// Take a JSON string and parse it into a JavaScript object.
var jsonString = "{\n  \"name\": \"Hasan Raza\",\n  \"age\": 18,\n  \"email\": \"hasanhussain2580@gmail.com\",\n  \"isActive\": true,\n  \"hobbies\": [\"reading\", \"traveling\", \"acting\"]\n}";
var parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
