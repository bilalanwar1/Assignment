var str1 = 'hello';
var str2 = 'world';
var num1 = 5;
var num2 = 10;
var arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Test for equality with strings: 'hello' == 'hello' - I predict True.");
console.log(str1 == 'hello');
console.log("Test for inequality with strings: 'hello' != 'world' - I predict True.");
console.log(str1 != str2);
// Tests using the lower case function
console.log("Test using the lower case function: 'HELLO'.toLowerCase() == 'hello' - I predict True.");
console.log('HELLO'.toLowerCase() == str1);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical test for equality: 5 == 5 - I predict True.");
console.log(num1 == num1);
console.log("Numerical test for inequality: 5 != 10 - I predict True.");
console.log(num1 != num2);
console.log("Greater than test: 10 > 5 - I predict True.");
console.log(num2 > num1);
console.log("Less than test: 5 < 10 - I predict True.");
console.log(num1 < num2);
console.log("Greater than or equal to test: 10 >= 5 - I predict True.");
console.log(num2 >= num1);
console.log("Less than or equal to test: 5 <= 10 - I predict True.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
console.log("Test using 'and' operator: (5 < 10) && ('hello' == 'hello') - I predict True.");
console.log((num1 < num2) && (str1 == 'hello'));
console.log("Test using 'or' operator: (5 > 10) || ('hello' != 'hello') - I predict False.");
console.log((num1 > num2) || (str1 != 'hello'));
// Test whether an item is in an array
console.log("Test whether an item is in an array: arr.includes(3) - I predict True.");
console.log(arr.includes(3));
// Test whether an item is not in an array
console.log("Test whether an item is not in an array: !arr.includes(6) - I predict True.");
console.log(!arr.includes(6));
