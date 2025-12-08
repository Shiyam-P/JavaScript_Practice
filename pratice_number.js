// // let a=50;
// // let b=new Number(100);
// // console.log(a);
// // console.log(b);
// // console.log({});

// // class myNumber{
// //     constructor(x,y){
// //         this.a=x;
// //         this.b=y;
// //         this.c=function(){
// //             console.log("i am belongs to obj");
            
// //         }; //method
// //     }
// //     add(){
// //         return console.log(this.a+this.b);  
// //     }//non static method

// //     static mul(){
// //         console.log("i am not belongs to instance");    
// //     }//static method
// // }
// //     let mynumber1=new myNumber(10,5);
// //     console.log(mynumber1);
// //     mynumber1.add();
// //     myNumber.mul();


//     let number=50.5448765;
//     console.log(number);

//     let anotherNumber=new Number(100.5566777);//explicily we convert non primitive
//     console.log(anotherNumber);

//     console.log(anotherNumber.toFixed(2));
//     console.log(number.toFixed(2));//implicily it will convert to non primitive

//     let a=10000000000;
//     console.log(a.toExponential());

//valueOf()
let a = 50;
console.log(a.valueOf());

//toFixed()
let p = 543.87309;
console.log(p.toFixed(4));
console.log(p);

console.log(10 - p);

//toExponential()
let c = 8000000000000;
console.log(c.toExponential());

//parseInt()
let d = new Number(50);
let e = 50;
let f = "50";
console.log(e + f);
console.log(e + Number.parseInt(f));


let g = "34.34978678";
console.log(Number.parseInt(g));
console.log(Number.parseFloat(g));

// Check the integer or not (isInteger())
console.log(Number.isInteger(e));
console.log(Number.isInteger(g));
console.log(Number.isInteger(p));


//Check the number or not (isFinite())
console.log(Number.isFinite(e));
console.log(Number.isFinite(g));
console.log(Number.isFinite(p));


//Check the NaN or not 
let sa = "teddy";
console.log(Number.isNaN(p));
console.log(Number.isNaN(NaN)); //Is NaN is there or not 
console.log(Number.isNaN(f));
console.log(Number.isNaN(sa));

//properties of number 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);  
console.log(Number.MAX_SAFE_INTEGER); // it will be show the accurate value 
console.log(Number.MIN_SAFE_INTEGER); // it will be show the accurate value 
console.log(9007199254740991456); // it will be show the approximate value 


// The number are safe or not 
console.log(Number.isSafeInteger(9345508300));
console.log(Number.isSafeInteger(29876543218730954389));



//window method
// console.log(window);
let num = 23.234134;
let str = "90.43253462";
// console.log(window.parseInt(pd));
console.log(parseInt(num));
console.log(parseFloat(str));
console.log(isFinite(num));

console.log(isNaN(str));
console.log(isNaN("abc"));