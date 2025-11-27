// //Named Function
// function abc() {
//   console.log("I am Named function");
// }
// abc();

// //Anonymous Function
// function (){
// }

// //Function with Expression
// let abcd = function d1(){
// }
//             //OR
// let abcd = function () {
// }

//   //IIFE(Immediately Invoked Function Expression)
// (function expression)(){

// }(invoke the function)

// //Nested Function
// function outer(){
//   function inner(){

//   }
//   inner();
// }
// outer();

// //Arrow Function
// //multi line
// let add = (a,b) =>{
//   return a + b;
// }
// //single line
// let add = (a, b) => a + b;
// // single line one parameter
// let abc = a => a * a;

// //Higher Order Function
// // Call Back Function
// function add(p, q) {
//   return p + q;
// }
// function res(a, b, c) {
//   console.log(c(a + b));
// }
// res(100, 200, add);

// // Generator function
// function* abc() {
//   console.log("hi");
//   yield;
//   console.log("hello");
//   yield;
//   console.log("hi hello");
//   yield;
// }
// let p1 = abc();
// p1.next();
// p1.next();
// p1.next();


// //This keyword
// let abc = {
//   name:"Nila",
//   age:22,
//   greet: function(){
//     console.log("name: " + this.name); 
//   }
// }
// abc.greet();




// let person = "some";
// function p2(){
//   console.log(this.name);
  
// }

// p2();


// if
// let age = 20;
// if(age >= 18){
//     console.log("your are an adult");
// }


// // if else
// let age = 16;
// if(age >= 18){
//     console.log("your are an adult"); 
// }
// else{
//     console.log("not an adult");
    
// }


// // nested if
// let age = 17;
// let license = false;
// if(age >= 18){
//     console.log("your are an adult");
//     if(license){
//         console.log("####license####");
//     }
//     else{
//         console.log("Not a license");
//     }
// }  
// else{
//     console.log("your are an under 18");
// }



// let a = 50;
// let b = new Number(50);
// console.log(a);
// console.log(b);



// let s = 345;
// console.log(s.valueOf());

// let p = 324.234545
// console.log(p.toFixed());

// console.log(s.toExponential());

// let ab = 123456789012345;
// console.log(Number.maxvalue);


// // if else

// let a = 70;
//  if(a < 50){
//     console.log("You need to imporve");
//  }
//  else if(a >= 50 && a < 70){
//     console.log("Good Job");
//  }
// else{
//     console.log("Excellent Performance!");
// }



// //check odd or even
// let d = 48;
// if(d % 2 === 0){
//     console.log("The number is even.");
    
// }
// else{
//     console.log("The number is odd");
// }


// //check whether the letter is vowel or consotant
// let ch = "A";
// if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
// ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'){
//     console.log("Is vowel");
// }
// else{
//     console.log("Is Consotant");
// }

// // for loop print 5 times "Teddy"
// for(count = 1; count <= 5; count++){
//     console.log("Teddy");
// }

// // print 1 to 10
// for(count = 1; count <= 10; count++){
//     console.log(count);
// }

// //print the odd number
// for(count = 1; count <= 10; count = count +2){
//     console.log(count);
// }

// //Another method print odd number
// for(count = 1; count <=10; count++){
//     if(count %2 !==0)
//     console.log(count);
// }

// //Reverse the count 10 to 1
// for(rev = 10; rev >= 1; rev--){
//     console.log(rev);   
// }

//print 2 tables
// for(i = 1; i <= 10; i++){
//     console.log(i + "x2=" + (2*i));   
// }


// check the age is adult or minor
// let age = 17;
// if (age >= 18){
//     console.log("You are adult");   
// }
// else{
//     console.log("You are Minor");
    
// }


// Object to String
// const obj = {
//     a: 1,
//     b: 2
// }
// const str = JSON.stringify(obj);
// console.log(str);


//What is Shallow copy
const obj1 = {
  name: "John",
  address: {
    city: "Chennai"
  }
};
// Shallow copy using spread operator
const obj2 = { ...obj1 };
obj2.name = "Sam";             // changes only in obj2
obj2.address.city = "Delhi";   // affects both obj1 and obj2
console.log(obj1.address.name); // Delhi
console.log(obj2.address.city); // Delhi


