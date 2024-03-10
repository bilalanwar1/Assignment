// Store the original list of people you'd like to invite to dinner
var originalGuestList = ["Sardar Bilal", "Imran Ali", "Inam Ullah"];
// Print a statement indicating the name of the guest who can't make it
var guestWhoCantMakeIt = originalGuestList[2]; // Inam Ullah can't make it
console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
// Replace the guest who can't make it with the name of the new person you are inviting
var newGuest = "Waqas";
originalGuestList[2] = newGuest;
// Print a second set of invitation messages to each person in the updated list
console.log("\nSecond Set of Invitations to Dinner:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nI regret to inform you that one of our guests can't make it to dinner. However, I would like to extend an invitation to you instead. It would be an honor to have your presence.\nSincerely, Sardar");
}
// Inform people that you found a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
originalGuestList.unshift("irfan");
// Add one new guest to the middle of the array
originalGuestList.splice(Math.floor(originalGuestList.length / 2), 0, "adil");
// Add one new guest to the end of the array using append()
originalGuestList.push("Amir khan");
// Print a new set of invitation messages to each person in the updated list
console.log("\nThird Set of Invitations to Dinner:");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear " + originalGuestList[i] + ",\nI am delighted to inform you that we have found a bigger dinner table and have more space available. I would like to extend an invitation to you. It would be wonderful to have your presence.\nSincerely, Sardar");
}
