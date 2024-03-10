// Store the original list of people you'd like to invite to dinner
var originalGuestList = ["Sardar Bilal", "Imran Ali", "Inam Ullah"];
// Print a statement indicating the name of the guest who can't make it
var guestWhoCantMakeIt = originalGuestList[2]; // Inam Ullah can't make it
console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
// Replace the guest who can't make it with the name of the new person you are inviting
var newGuest = "hasnain";
originalGuestList[2] = newGuest;
// Print a second set of invitation messages to each person in the updated list
console.log("\nSecond Set of Invitations to Dinner:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nI regret to inform you that one of our guests can't make it to dinner. However, I would like to extend an invitation to you instead. It would be an honor to have your presence.\nSincerely, Sardar");
}
// Inform people that you found a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
originalGuestList.unshift("muddasir");
// Add one new guest to the middle of the array
originalGuestList.splice(Math.floor(originalGuestList.length / 2), 0, "Bakht");
// Add one new guest to the end of the array using append()
originalGuestList.push("hasnain");
// Print a new set of invitation messages to each person in the updated list
console.log("\nThird Set of Invitations to Dinner:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nI am delighted to inform you that we have found a bigger dinner table and have more space available. I would like to extend an invitation to you. It would be wonderful to have your presence.\nSincerely, [Your Name]");
}
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (originalGuestList.length > 2) {
    var removedGuest = originalGuestList.pop(); // Remove the last guest from the list
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
// Print invitation messages to the two remaining guests
console.log("\nFinal Invitation Messages:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nYou're still invited to dinner. Looking forward to seeing you!\nSincerely, [Your Name]");
}
// Print the number of people being invited to dinner
console.log("\nNumber of people invited to dinner:", originalGuestList.length);
