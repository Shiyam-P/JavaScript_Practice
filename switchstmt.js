// Switch stmt

switch(Math.floor(Math.random() * 4)){
    case 1:
        console.log("Print 1");
        break;
    case 2:
        console.log("Print 2");
        break;
    default:
        console.log("Print Nothing");  
}

// rock, paper, scissors
let player = "scissor";
let computer = "paper";

switch(player){
    case computer:
        console.log("Tie");
        break;

    case "rock":
        if(computer === "paper"){
            console.log("computer is win");
        }
        else{
            console.log("player is win");
        }
        break;
    
    case "paper":
        if(computer === "scissor"){
            console.log("computer is win");
        }
        else{
            console.log("player is win");
        }
        break;

    case "scissor":
        if(computer === "rock"){
            console.log("computer is win");
        }
        else{
            console.log("player is win");
        }
        break;
    
    default:
        console.log("Invalid choice");   
}

// Example 2
let chatplayer = "no";
let chatcomputer = "rock";

switch(chatplayer){
    case chatcomputer:
        console.log("Tie");
        break;

    case "scissor":
        if(chatcomputer === "paper"){
            console.log("player win");
        } else {
            console.log("computer win");
        }
        break;

    case "rock":
        if(chatcomputer === "scissor"){
            console.log("player win");
        } else {
            console.log("computer win");
        }
        break;

    case "paper":
        if(chatcomputer === "rock"){
            console.log("player win");
        } else {
            console.log("computer win");
        }
        break;

    default:
        console.log("Invalid choice");
}