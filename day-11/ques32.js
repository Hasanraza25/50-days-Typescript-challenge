var current_users = ["Hasan", "Hussain", "admin", "Hasnain", "Ali"];
var new_users = ["Ahmed", "Shakeel", "Hussain", "Jawed", "admin"];
var _loop_1 = function (new_user) {
    var lowercase_new_user = new_user.toLowerCase();
    if (current_users.some(function (user) { return user.toLowerCase() === lowercase_new_user; })) {
        console.log("".concat(new_user, " will need to enter a new username"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
