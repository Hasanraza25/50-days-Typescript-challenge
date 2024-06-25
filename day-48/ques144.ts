// Explain the use of the Promise.all() method with an example.

function delay(millisec: number, value: any): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, millisec);
    });
}

const mypromise1 = delay(3000, "Promise 1 resolved");
const mypromise2 = delay(2000, "Promise 2 resolved");
const mypromise3 = delay(1500, "Promise 3 resolved");

Promise.all([mypromise1, mypromise2, mypromise3])
    .then((results) => {
        console.log("Your all Promises resolved successfully:", results);
    })
    .catch((error) => {
        console.error("Your Promises have error: ", error);
    });