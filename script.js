// 
// computer choose random between paper rock scissors//
function computerPlay() {
    let game = ["paper","rock","scissors"];
    let gameToUse = game[Math.floor(Math.random() * game.length)];
        return gameToUse;
    
}
computerPlay();

// player choose one of the option//
function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection){
        return ("Tie");
    }else if(playerSelection === 'rock'){
            if( computerSelection === 'scissors'){
  
            return ("You win");
            }else{
            return ("You lose");
    }
    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return ("You win");
    }else{
        return ("You lose");
    }
}
playRound();
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))
   
// the game finish in one term with the winner declared// 