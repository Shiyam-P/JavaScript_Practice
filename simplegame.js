
let game = confirm("Shall we play rock, paper or scissor");
if (game) {
    //play
    let playerchoice = prompt("Please enter rock, paper or scissor");

    if (playerchoice) {
        let playerOne = playerchoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor") {
            let computerchoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerchoice === 1 ? "rock" : computerchoice === 2 ? "paper" : "scissor";
            let result =
                playerOne
                 === computer ? "Tie game" :
                    playerOne === "rock" ? (computer === "scissor" ? "player win" : "computer win") :
                        playerOne === "paper" ? (computer === "rock" ? "player win" : "computer win") :
                            playerOne === "scissor" ? (computer === "paper" ? "player win" : "computer win") :
                                "Invalid choice";
            alert(result);
            let playAgain = confirm("play Again");
            //location.reload() - it refresh the entire page
            playAgain ? location.reload() : alert("ok thanks for playing ")
        }
        else {
            alert("You didn't enter rock, paper, or scissor")
        }
    }
    else {
        alert("I guess you changed your mind. Maybe next time...")
    }
}
else {
    alert("ok, maybe next time");
}