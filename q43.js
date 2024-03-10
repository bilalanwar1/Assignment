var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var original_magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Make a copy of the original array
var copy_magicians = __spreadArray([], original_magicians, true);
// Call make_great with the copied array
var great_magicians = make_great(copy_magicians);
// Show the original list of magicians
show_magicians(original_magicians);
console.log('\n');
// Show the modified list of magicians
show_magicians(great_magicians);
