// 
// computer choose random between paper rock scissors//
function computerPlay() {
    let game = ["paper","rock","scissors"]
    let gameToUse = game[Math.floor(Math.random() * game.length)];

    console.log(gameToUse);
}
computerPlay();

// player choose one of the option//
function playRound(playerSelection, computerSelection) {
    if(computerSelection < playerSelection){
        return ("You Lose! Paper beats Rock");
    }
}
playRound();
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
// the game finish in one term with the winner declared// 