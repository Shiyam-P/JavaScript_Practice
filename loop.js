// while loop

let i = 1;
while(i <= 5){
    console.log(i);
    i=i+1;
}

// do while 
let y = 0;
do{
    console.log(y);
    y++;
}while(y<=10);

// for loop
let b = "shiyam";
for(a=0;a<=5;a++){
    console.log(b.charAt(a)); 
} 

// continue

for(s=0;s<=5;s++){
    if(s === 3){
        continue;
    }
  console.log(s);
}

// break
for(p=0;p<=5;p++){
    if(p === 3){
        break;
    }
    console.log(p);
}