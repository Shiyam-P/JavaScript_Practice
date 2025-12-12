let student = false;
let attendence = student ? "present" : "absent";
console.log(attendence);


let testscore = 83;
let grade = testscore > 89 ? "A" : testscore > 79 ? "B" : testscore > 69 ? "c" : testscore > 59 ? "D" : "E";
console.log(grade);


// rock, paper, scissors using ternary operator
let player = "rock";
let computer = "paper";

let result = 
    player === computer ? "Tie": 
    player === "rock" ? (computer === "scissor" ? "player win" : "computer win") :
    player === "paper" ? (computer === "rock" ? "player win" : "computer win") :
    player === "scissor" ? (computer === "paper" ? "player win" : "computer win") : 
    "Invalid choice";
console.log(result);
