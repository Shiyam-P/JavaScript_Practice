let obj1 = {
    name : "heart beat",
    available : "HotStar",
    season : 1
}

let obj2 = {
    rating : 4.9,
    premium : 101
}


let arr1 = ["Itachi", "Minato", "Jiraya"];
let arr2 = ["Sasuke", "Obito", "Naruto"];


//**spread operator**
//copy the value one object to another object
//(...) - The three dot represent a spread operator
let obj3 = {...obj1};
console.log(obj3);

//copy the value one array to another array
let arr3 = [...arr1];
console.log(arr3);

//concatination
//merge the obj1 and obj2
let mergertheobject = {...obj1, ...obj2};
console.log(mergertheobject);
 
//merge the arr1 and arr2
let mergethearray = [...arr1, ...arr2];
console.log(mergethearray);

//another method of merge the array and object
let merge1 = [2,3,4];
console.log(1,...merge1,5,6,7);

//spread opretion used in function
//Without using spread operator
function abc(a,b,c){
    console.log(a); // [ 'Itachi', 'Minato', 'Jiraya' ]
    console.log(b); //undefined
    console.log(c); //undefined
}
abc(arr1); //without using (...)

//With using spread operator
function abc1(p,t,s){
    console.log(p); //Itachi
    console.log(t); //Minato
    console.log(s); //Jiraya
}
abc1(...arr1); //with using (...)


//**Destructing**
//without mention the obj4.season
//can't maintain the order
//variable name is exactly same
let obj4 = {
    name : "heart beat",
    available : "HotStar",
    season : 1
}
let {season,name,available} = obj4;
console.log(season); //print the object without using (obj4.season)
console.log(name);

// maintain the order
//we can represent the variable the anything
let arr4 = ["Itachi", "Minato", "Jiraya"];
let [first,second,third] = arr4;
console.log(second,first);


//**rest operator**
//object
let obj5 = {
    moviename : "hi nana",
    mavailable : "telegram",
    rating : 4.9,
    season : 1,
    primium : "Not Yet"
}
 let {moviename, mavailable,...xyz}= obj5;
 // moviename represent the "hi nana" , mavaiable represent the "telegram" and ...xyz represent the balance three value taken automatically(rating,seasion,primium)
 console.log(moviename);
 console.log(xyz);
 
 //array
 let arr5 = ["Itachi", "Minato", "Jiraya"];
 let [a, ...hdk] = arr5
 console.log(a);
 console.log(hdk);

 //function
 function asd(...a){
    console.log(a);
 }
 asd(2,3,4,5,6,7,8,9);