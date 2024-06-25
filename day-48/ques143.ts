// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const mySecondPromise = new Promise<string>((resolve, reject) => {
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
        setTimeout(() => {
            resolve("Congratulations! Your Promise resolved successfully")
        }, 2000);
    } else{
        setTimeout(() => {
            reject(new Error("Your Promise rejected!"))
        }, 2000)
    }
});

mySecondPromise
    .then((message) => {
        console.log("Resolved: ", message);
    })
    .catch((error) => {
        console.error("Rejected: ", error.message);        
    })