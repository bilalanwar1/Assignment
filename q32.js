// List of current users
var current_users = ['john', 'eric', 'alice', 'emma', 'sophia'];
// List of new users
var new_users = ['bob', 'alice', 'Linda', 'Sophia', 'jack'];
// Convert all usernames to lowercase for case-insensitive comparison
current_users = current_users.map(function (username) { return username.toLowerCase(); });
new_users = new_users.map(function (username) { return username.toLowerCase(); });
// Loop through the new_users list to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.includes(new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
