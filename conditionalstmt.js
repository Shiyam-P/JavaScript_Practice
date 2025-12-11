// if stmt

let learnhtml = true;
let learncss = true;
let learnjs = true;
let unknown = false;

if(unknown){
    console.log(`Unknown Entry`);
}
else if(learnhtml && learncss && learnjs){
    console.log(`valthukkol you are Web developer`);
}
else if(learnhtml){
    console.log(`valthukkol you are HTML developer`);
}
else if(learncss){
    console.log(`valthukkol you are CSS developer`);
}
else if(learnjs){
    console.log(`valthukkol you are JavaScript developer`);
}
else{
    console.log("Sorry! you are not a developer");
}


// Exam result 

let testScore = 39;

if(testScore >= 90 && testScore <= 100){
    console.log(`Excellent`);
}     
else if(testScore >= 70 && testScore <= 89){
    console.log(`Very Good`);
}
else if(testScore >= 40 && testScore <=69){
    console.log(`Good`);
}
else if(testScore >= 30 && testScore <= 39){
    console.log(`Improve`);  
}
else{
    console.log(`Try to get a good mark`);
}