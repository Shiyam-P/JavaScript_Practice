//Math Object
//Math.PI
console.log(Math.PI);  // 3.141592653589793

//Math.trunc
console.log(Math.trunc(Math.PI));  // 3

//Math.round
console.log(Math.round(Math.PI)); // 3
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5

//Math.ceil
console.log(Math.ceil(4.1));  // 5

//Math.floor
console.log(Math.floor(4.9));  // 4

//Math.pow
console.log(Math.pow(3,4)); // 3 x 3 x 3 x 3 = 81

//Math.min
console.log(Math.min(3,45,6,63,54));  // 3

//Math.max
console.log(Math.max(3,45,6,63,54));  // 63

//Math.random
console.log(Math.random());
// 0 to 10
console.log(Math.floor (Math.random() *10) + 1);
// 0 to 10000
console.log(Math.floor(Math.random() * 10000) + 1);



// Example Program
// Given the string "shiyam", write a JavaScript program that on every page load/refresh — displays a single randomly chosen letter from that string in an input field. The chosen letter must come from the given input string and each refresh should independently pick a random character.
let myName = "shiyam";
console.log(myName.charAt(Math.floor(Math.random() * 6)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));  // Best way to write the code 