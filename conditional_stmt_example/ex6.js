let number1 = 2;
let number2 = 3;
let operator = "*";

if(operator == "+"){
    console.log(number1 + number2);
}
else if(operator == "-"){
    console.log(number1 - number2);
}
else if(operator == "*"){
    console.log(number1 * number2);
}
else if(operator == "/"){
    if(number2 !==0){
        console.log(number1 / number2);
    }else{
        console.log("can't divible by zero");
    }
}
else{
    console.log("Invalid Operator");
    
}