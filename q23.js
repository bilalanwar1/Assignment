var car = 'subaru';
// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 3: Check if car is equal to 'Subaru' (case-sensitive comparison)
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');
// Test 4: Check if car is equal to 'SUBARU' (case-insensitive comparison)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// Test 5: Check if car starts with 'sub'
console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub'));
// Test 6: Check if car ends with 'aru'
console.log("Does car end with 'aru'? I predict True.");
console.log(car.endsWith('aru'));
// Test 7: Check if car contains the substring 'bar'
console.log("Does car contain 'bar'? I predict True.");
console.log(car.includes('bar'));
// Test 8: Check if car is of type string
console.log("Is car a string? I predict True.");
console.log(typeof car === 'string');
// Test 9: Check if car is undefined
console.log("Is car undefined? I predict False.");
console.log(car === undefined);
// Test 10: Check if car is null
console.log("Is car null? I predict False.");
console.log(car === null);
