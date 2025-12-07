//String
let myvar = "Mathematics"
let myvar2 = "number of elements"

//Length Property
console.log(myvar.length);  // 11
console.log("hi hello".length);  // 8

//String Methods
//charAt()
console.log(myvar.charAt(0)); // M
console.log(myvar.charAt(2)); // t

//indexOf()
console.log(myvar.indexOf("t")); // 2

//lastIndexOf()
console.log(myvar.lastIndexOf("t"));  // 7

//slice()
console.log(myvar.slice(2,9)); // themati

//toUpperCase()
console.log(myvar.toUpperCase()); // MATHEMATICS

//toLowerCase()
console.log(myvar.toLowerCase()); // mathematics

//includes()
console.log(myvar.includes("s"));  // true
console.log(myvar.includes("z"));  // false

//split()
console.log(myvar.split("")); //  ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']
console.log(myvar.split("e"));  // ['Math', 'matics']
console.log(myvar2.split(" "));  // ['number', 'of', 'elements']


//startsWith()
console.log(myvar2.startsWith("number")); // true
console.log(myvar2.startsWith("elements")); // false

//endsWith()
console.log(myvar2.endsWith("elements")); // true 
console.log(myvar2.endsWith("number"));  // false 

//subString()
console.log(myvar2.substring(0,12));  // number of el

//replace()
console.log(myvar2.replace("elements","character")); // number of elements -> number of character
console.log("apple orange apple".replaceAll("apple","banana")); // banana orange banana


//concat()
let res = myvar.concat(" ", myvar2);
console.log(res); // Mathematics number of elements

