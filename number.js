//Number
let mynumber = "123";
let mynumber2 = 48;
let mynumber3 = "34.345dfa";
let mynumber4 = "method there is no need"

console.log(mynumber + 2); // 1232 ->String

// Number() - Change string to number
console.log(Number(mynumber) + 2); // 125 -> Number
console.log(Number("something"));  // NaN
console.log(Number(true));  // 1
 
//Number Methods
//isInteger() - check the integer or not
console.log(Number.isInteger(mynumber2));  // true
console.log(Number.isInteger(mynumber));  // false

//parseFloat() - string to float
console.log(Number.parseFloat(mynumber3));  // 34.345

//parseInt() - string to integer
console.log(Number.parseInt(mynumber3));  // 34

//toString()
console.log(mynumber2.toString()); //  123

// Number.isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(23));

//window.isNaN()
console.log(isNaN("hi"));
console.log(isNaN(83));

