// Store the original list of people you'd like to invite to dinner
var originalGuestList = ["Sardar Bilal", "Imran Ali", "Inam Ullah"];
// Print a statement indicating the name of the guest who can't make it
var guestWhoCantMakeIt = originalGuestList[1];
console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
// Replace the guest who can't make it with the name of the new person you are inviting
var newGuest = "Amir";
originalGuestList[1] = newGuest;
// Print a second set of invitation messages to each person in the updated list
console.log("\nSecond Set of Invitations to Dinner:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nI regret to inform you that one of our guests can't make it to dinner. However, I would like to extend an invitation to you instead. It would be an honor to have your presence.\nSincerely, Sardar");
}
