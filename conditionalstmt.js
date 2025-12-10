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