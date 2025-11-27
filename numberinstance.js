//Number
//Literal way
let a = 50;
console.log(a);

//Number constructor
let b = new Number(50);
console.log(b);

// Number Instance Method or non-static method
//valueOf() method
let c = 450;
console.log(c.valueOf());

// toFixed() method
let d = 50.436245;
console.log(d.toFixed(3));


//toExponential() method
let a1 = 40;
console.log(a1.toExponential());

// Number static method or Number constructor method
// properties
//Number.Maxvalue
console.log(Number.MAX_VALUE);

//Number.Minvalue
console.log(Number.MIN_VALUE);

//Number.MaxSafeInteger
console.log(Number.MAX_SAFE_INTEGER);

//Number.MinSafeInteger
console.log(Number.MIN_SAFE_INTEGER);

//Number.Postive Infinity
console.log(Number.POSITIVE_INFINITY);

//Number.Negative Infinity
console.log(Number.NEGATIVE_INFINITY);

//Methods
//number.parseInt() method
let b1 = "65";
console.log(Number.parseInt(b1));

//number.parseFloat() method
let b2 = 34.456;
console.log(Number.parseFloat(b2));

//number.isInteger() method
let b3 = 35;
console.log(Number.isInteger(b3));

//Number.isFinite() method
let b4 = 48;
console.log(Number.isFinite(b4));

//Number.isNaN() method
let b5 = NaN;
console.log(Number.isNaN(b5));

//Number.isSafeInteger() method
let b6 = 1234567890111213;
console.log(Number.isSafeInteger(b6));
        // or
let b7 = 12345678901112131;
console.log(Number.isSafeInteger(b7));

//searching methods
//indexOf()
let c1 = "Itachi";
console.log(c1.indexOf("a"));

//lastIndexOf()
let c2 = "Minato";
console.log(c2.lastIndexOf("a"));

//Includes()
let str = "It will replacec only one char return string substring will not accept index order of args";
console.log(str.includes("reurn")); 
console.log(str.includes("not"));    

//search()
let str1 = "It will replace only one char return string substring will not accept index";
console.log(str1.search("index"));

//substring
//charAt()
let str2 = "hello world";
console.log(str2.charAt(6));

//slice()
let str3 = "hello world";
console.log(str3.slice(0,8));
console.log(str3.slice(-4));

//substring();
let str4 = "vanakkam";
console.log(str4.substring(3,6));

//repalce()
let str5 = "hello world";
console.log(str5.replace("world","sanny"));

//concat()
let str6 = "hello"
let str7 = "world"
console.log(str6.concat(" ",str7));

// split()
let str8 = "hello world";
console.log(str8.split(","));


//Array method
let arr5 = [1,2,3,4,5,6];
let arr6 = new Array(1,2,3,4,5);
let arr7 = Array.from("String");
console.log(arr5);
console.log(arr6);
console.log(arr7);

//push()
let ipl = ["csk","rcb","rr","mi","gt","srh","kkr","lsg"]
ipl.push("cbe")
console.log(ipl);

//pop
ipl.pop();
console.log(ipl);

//unshift
ipl.unshift("thiruvarur");
console.log(ipl);

//shift
ipl.shift();
console.log(ipl);

//splice
ipl.splice(2,3,"nagai","thiruvarur","kumbakonam");
console.log(ipl);

//reverse
ipl.reverse();
console.log(ipl);

//sort
ipl.sort();
console.log(ipl);

//higher order method or iteration method of array
let csk = ["Itachi","Minato","Kakashi","Lufi","Sakura","Asta","Sakumo Hatake"]
csk.forEach((e,i,arr) => {
 
        
})




let s1 = [1,2,3,4]
console.log(s1.length); // 4

console.log(s1[0]);// 1

let s2 = [1,2,3,'sh',[3,4,5]];
console.log(s2[4][2]);







//Higher Order method or Iteration method of array
// let csk = ["Itachi","Minato","Kakashi","Lufi","Sakura","Asta","Sakumo Hatake"];

// // csk.forEach(function (ele,i,arr){
// //     console.log(ele,i,arr);  
// // });

// // csk.map((ele,i,arr) => {
// //     console.log(ele,i,arr);    
// // })

// // csk.filter((ele,i,arr)=>console.log(ele,i,arr));


// //foreach-->return type is void
// let forEachValue=csk.forEach((e)=>{
//     return 10;
// })
// console.log(csk);
// console.log(forEachValue);

// //map--->modify the array we only go for map method
// let mapvalue=csk.map((e)=>{
//     return e +  " csk";
// });
// console.log(csk);
// console.log(mapvalue);

// //filter-->filter the condition we go for filter method and return all satisfy element
// let number=[1,2,3,4,5,6];
// let filternumber=number.filter((e,i,arr)=>{
//     if(e%2==0){
//         return e;}
// });
// console.log(number);
// console.log(filternumber)

// //find----->return first satisfy element 
// let findvalue=number.find((e,i,arr)=>{
//     if(e%2==0){
//         return e;
//     }
// });
// console.log(number);
// console.log(findvalue);


// let csk = ["Itachi","Minato","Kakashi","Lufi","Sakura","Asta","Sakumo Hatake"];
 
// let uppercsk=csk.map((e)=>{
//     return e.toUpperCase();
// });
// console.log(uppercsk);



// let startcsk=csk.filter((e)=>
// {
//    if(e.includes("u")){
//     return e;
//    } 
// });
// console.log(startcsk);


// let indexcsk=csk.findIndex((e)=>{
//     if(e.startsWith("i")){
//         return e;
//     }
// });
// console.log(indexcsk);

