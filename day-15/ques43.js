var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the great"); });
}
var origionalArr = __spreadArray([], magicians, true);
var great_magicians = make_great(origionalArr);
show_magicians(origionalArr);
show_magicians(great_magicians);
