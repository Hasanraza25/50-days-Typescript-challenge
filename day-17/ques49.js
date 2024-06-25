"use strict";
function loghobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
loghobbies("coding", "cricket", "learning");
