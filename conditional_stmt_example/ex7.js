// Write a JavaScript program to input a single character and check its type.
// If the character is an uppercase letter, print “Uppercase letter”.
// If it is a lowercase letter, print “Lowercase letter”.
// If it is a digit, print “Digit”.
// Otherwise, print “Symbol”.

let character = "%";

if(character >= "A" && character <= "Z"){
    console.log(character + " is UpperCase letter");
}
else if(character >= "a" && character <="z" ){
    console.log(character + " is LowerCase letter");
}
else if(character >= "0" && character <= "9"){
    console.log(character + " is Number");
}
else{
    console.log(character + " This is Symbol");
}