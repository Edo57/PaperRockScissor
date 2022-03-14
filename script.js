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
            userScore += 1 ; 
            return ("You win");
            }else{
            computerScore+= 1;
            return ("You loose");
    }
    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        userScore += 1 ; 
        return ("You win");
    }else{
        computerScore+=1;
        return ("You loose");
          
    }
}
let computerScore = 0;
let userScore = 0; 
playRound();
let playerSelection = prompt("Pick a move");
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
   
// loop for 5 round// 

function game(){
    for(var i=0;i<5;i++){
    
        let playerSelection = prompt("Pick a move");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
        console.log(playerSelection);
        console.log(computerSelection);
      }
}
game();