// // alert
// let boolean = alert("hello");
// console.log(boolean);

// // prompt
// let boolean = prompt("Enter your name: ")
// console.log(boolean);

// // Nullish coalescing operator (??)
// let myName = prompt("Enter your name: ");
// console.log(myName ?? "You didn't enter your name");


let myName = prompt("Enter your name: ");
if(myName){
    console.log(myName ?? "You didn't enter your name");
}
else{
    console.log("You didn't enter your name"); 
}
console.log(myName.trim().length);
