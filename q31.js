// Array of usernames
var usernames = ['Bilal', 'Imran', 'Inam', 'Amir', 'Hasnain'];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'Bilal') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames from the array
usernames = [];
// Check if the list of users is empty after removal
if (usernames.length > 0) {
    // Loop through the array and print greetings (not executed if list is empty)
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === 'Bilal') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
