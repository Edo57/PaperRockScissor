// 
// computer choose random between paper rock scissors//

function computerPlay() {
    let game = ["paper","rock","scissors"];
    let gameToUse = game[Math.floor(Math.random() * game.length)];
        return gameToUse;
    
}
computerPlay();

// player choose one of the option//
function playRound(playerSelecTion, comPuterSelectIon) {
     
    if(playerSelecTion === comPuterSelectIon){
    
        return ("Tie");
    }else if(playerSelecTion === 'rock'){
            if( comPuterSelectIon === 'scissors'){
            userScore += 1 ; 
            return ("You win");
            }else{
            computerScore+= 1;
            return ("You loose");
    }
    }else if(playerSelecTion === 'scissor' && comPuterSelectIon === 'paper'){
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
let playerSelecTion = prompt("Pick a move");
const comPuterSelectIon = computerPlay();
console.log(playerSelecTion);
console.log(comPuterSelectIon);
console.log(playRound(playerSelecTion, comPuterSelectIon));
   
// loop for 5 round// 


for(var i=0;i<5;i++){
    
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }