// Check whether a string contains a specific word
let ch = "A curious cat quietly watched the rain dance on the window while the city slept";
function specific() {
    if (ch.includes("ca")) {
        console.log("The word is present inside the string");
    }
    else {
        console.log("The word not present inside the string");
    }
}
specific();


// Reverse the String
let str = "hello";
let reversed = "";

for(i=str.length-1; i>=0; i--){
    reversed = reversed + str[i];
}
console.log(reversed);
