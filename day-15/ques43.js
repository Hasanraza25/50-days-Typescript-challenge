"use strict";
let magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(magician => `${magician} the great`);
}
let origionalArr = [...magicians];
let great_magicians = make_great(origionalArr);
show_magicians(origionalArr);
show_magicians(great_magicians);
